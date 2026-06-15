import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import type { IFuseOptions } from "fuse.js";
import type { Playbook } from "../types/playbook";

// Fuse.js is used only for RECALL (finding relevant results).
// Final RANKING is handled by the custom reRank function below.
const fuseOptions: IFuseOptions<Playbook> = {
  keys: [
    { name: "title", weight: 1.0 },
    { name: "aliases", weight: 0.9 },
    { name: "sourceAliases", weight: 0.9 },
    { name: "symptoms", weight: 0.8 },
    { name: "customerPhrases", weight: 0.8 },
    { name: "keywords", weight: 0.7 },
    { name: "tags", weight: 0.7 },
    { name: "quickSteps", weight: 0.4 },
    { name: "copyTemplates.label", weight: 0.35 },
    { name: "copyTemplates.text", weight: 0.3 },
    { name: "customerQuestions", weight: 0.35 },
    { name: "escalationFormat", weight: 0.25 },
    { name: "escalation.summaryTemplate", weight: 0.25 },
    { name: "quickAnswer", weight: 0.2 },
    { name: "preview.problem", weight: 0.2 },
    { name: "useWhen", weight: 0.15 },
    { name: "category", weight: 0.1 },
    { name: "secondaryCategories", weight: 0.1 },
  ],
  threshold: 0.45,
  includeScore: true,
  includeMatches: true,
  ignoreLocation: true,
  minMatchCharLength: 2,
  shouldSort: false, // We sort ourselves after re-ranking
  findAllMatches: true,
};

export interface SearchResult {
  playbook: Playbook;
  score: number; // Lower = better (0 = perfect match)
  matchedFields: string[];
}

// ─── Helpers ────────────────────────────────────────────────

/** Normalise a string for comparison: lowercase, collapse whitespace, strip punctuation. */
function norm(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Split a query into meaningful words (>1 char). */
function queryWords(q: string): string[] {
  return norm(q)
    .split(" ")
    .filter((w) => w.length > 1);
}

/** Check whether a target string contains ALL of the given words. */
function containsAllWords(target: string, words: string[]): boolean {
  const t = norm(target);
  return words.every((w) => t.includes(w));
}

/** Check if any string in an array contains all query words. */
function anyContainsAllWords(arr: string[] | undefined, words: string[]): boolean {
  if (!arr || arr.length === 0) return false;
  return arr.some((s) => containsAllWords(s, words));
}

// ─── Deterministic Re-Ranking ───────────────────────────────
// Priority tiers (lower = better):
//   0  — Exact title match (normalised)
//  10  — Title contains ALL query words
//  20  — Any alias / sourceAlias contains ALL query words
//  25  — Any customerPhrase / symptom contains ALL query words
//  30  — Exact match in error strings (escalationFormat, symptoms)
//  40  — Tags or category contain ALL query words
//  50  — Body fields (quickAnswer, useWhen, steps) contain ALL query words
//  90  — Fuse.js fuzzy match only (no deterministic boost)

function reRankScore(playbook: Playbook, rawQuery: string): number {
  const words = queryWords(rawQuery);
  if (words.length === 0) return 90;
  const qNorm = norm(rawQuery);

  // Tier 0: exact title match
  if (norm(playbook.title) === qNorm) return 0;

  // Tier 10: title contains all query words
  if (containsAllWords(playbook.title, words)) return 10;

  // Tier 20: alias / sourceAlias contains all words
  if (
    anyContainsAllWords(playbook.aliases, words) ||
    anyContainsAllWords(playbook.sourceAliases, words)
  ) {
    return 20;
  }

  // Tier 25: customerPhrases / symptoms contains all words
  if (
    anyContainsAllWords(playbook.customerPhrases, words) ||
    anyContainsAllWords(playbook.symptoms, words)
  ) {
    return 25;
  }

  // Tier 30: exact error string match (escalationFormat lines, symptoms)
  const errorStrings = [
    ...(playbook.symptoms || []),
    ...(playbook.escalationFormat || []),
  ];
  if (errorStrings.some((s) => norm(s).includes(qNorm))) return 30;

  // Tier 40: tags / category / keywords contain all words
  const tagFields = [
    playbook.category,
    ...(playbook.secondaryCategories || []),
    ...(playbook.tags || []),
    ...(playbook.keywords || []),
  ];
  if (tagFields.some((s) => containsAllWords(s, words))) return 40;

  // Tier 50: body fields contain all words
  const bodyFields = [
    playbook.quickAnswer,
    playbook.useWhen,
    ...(playbook.quickSteps || []),
    ...(playbook.steps || []),
    ...(playbook.customerQuestions || []),
  ];
  if (bodyFields.some((s) => containsAllWords(s, words))) return 50;

  // No deterministic match — rely on Fuse score only
  return 90;
}

// ─── Hook ───────────────────────────────────────────────────

export function useSearch(playbooks: Playbook[]) {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const fuse = useMemo(() => new Fuse(playbooks, fuseOptions), [playbooks]);

  const allResults = useMemo((): SearchResult[] => {
    const q = query.trim();
    if (!q) return [];

    const fuseResults = fuse.search(q);

    // Map Fuse results and attach re-rank tier scores
    const mapped: (SearchResult & { _tier: number; _fuseScore: number })[] =
      fuseResults.map((r) => {
        const matchedFields: string[] = [];
        if (r.matches) {
          for (const m of r.matches) {
            if (m.key && !matchedFields.includes(m.key)) {
              matchedFields.push(m.key);
            }
          }
        }
        const tier = reRankScore(r.item, q);
        const fuseScore = r.score ?? 1;
        return {
          playbook: r.item,
          score: tier + fuseScore, // Combined: tier dominates, fuse breaks ties
          matchedFields,
          _tier: tier,
          _fuseScore: fuseScore,
        };
      });

    // Sort: lower tier first, then lower fuse score
    mapped.sort((a, b) => {
      if (a._tier !== b._tier) return a._tier - b._tier;
      return a._fuseScore - b._fuseScore;
    });

    return mapped;
  }, [fuse, query]);

  // Default: Best match + top 3 related. ShowAll: everything.
  const results = useMemo((): SearchResult[] => {
    if (showAll) return allResults;
    return allResults.slice(0, 4);
  }, [allResults, showAll]);

  const bestMatch = useMemo((): SearchResult | null => {
    return allResults.length > 0 ? allResults[0] : null;
  }, [allResults]);

  const relatedResults = useMemo((): SearchResult[] => {
    if (showAll) return allResults.slice(1);
    return allResults.slice(1, 4);
  }, [allResults, showAll]);

  return {
    query,
    setQuery,
    showAll,
    setShowAll,
    results,
    bestMatch,
    relatedResults,
    totalCount: allResults.length,
  };
}

