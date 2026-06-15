import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import type { IFuseOptions } from "fuse.js";
import type { Playbook } from "../types/playbook";

// Weighted search configuration for Fuse.js
// Higher weight = higher priority in results
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
  threshold: 0.4,
  includeScore: true,
  includeMatches: true,
  ignoreLocation: true,
  minMatchCharLength: 2,
  shouldSort: true,
  findAllMatches: true,
};

export interface SearchResult {
  playbook: Playbook;
  score: number;
  matchedFields: string[];
}

export function useSearch(playbooks: Playbook[]) {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const fuse = useMemo(() => new Fuse(playbooks, fuseOptions), [playbooks]);

  const allResults = useMemo((): SearchResult[] => {
    if (!query.trim()) return [];

    const fuseResults = fuse.search(query.trim());

    return fuseResults.map((r) => {
      // Extract matched field names for display
      const matchedFields: string[] = [];
      if (r.matches) {
        for (const m of r.matches) {
          if (m.key && !matchedFields.includes(m.key)) {
            matchedFields.push(m.key);
          }
        }
      }
      return {
        playbook: r.item,
        score: r.score ?? 1,
        matchedFields,
      };
    });
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
