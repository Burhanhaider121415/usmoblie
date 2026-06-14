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
    { name: "symptoms", weight: 0.8 },
    { name: "keywords", weight: 0.7 },
    { name: "quickSteps", weight: 0.4 },
    { name: "copyTemplates.label", weight: 0.35 },
    { name: "copyTemplates.text", weight: 0.3 },
    { name: "customerQuestions", weight: 0.35 },
    { name: "escalationFormat", weight: 0.25 },
    { name: "quickAnswer", weight: 0.2 },
    { name: "useWhen", weight: 0.15 },
    { name: "category", weight: 0.1 },
  ],
  threshold: 0.4, // 0 = exact match, 1 = match anything
  includeScore: true,
  ignoreLocation: true, // Don't penalize matches later in the string
  minMatchCharLength: 2,
  shouldSort: true,
  findAllMatches: true,
};

export interface SearchResult {
  playbook: Playbook;
  score: number;
}

export function useSearch(playbooks: Playbook[]) {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<"live" | "deep">("live");

  const fuse = useMemo(() => new Fuse(playbooks, fuseOptions), [playbooks]);

  const results = useMemo((): SearchResult[] => {
    if (!query.trim()) return [];

    const fuseResults = fuse.search(query.trim());

    return fuseResults.map((r) => ({
      playbook: r.item,
      score: r.score ?? 1,
    }));
  }, [fuse, query]);

  // Live mode: best match + top related
  const liveResults = useMemo((): SearchResult[] => {
    if (mode === "deep") return results;
    return results.slice(0, 4); // Best match + 3 related
  }, [results, mode]);

  const bestMatch = useMemo((): SearchResult | null => {
    return results.length > 0 ? results[0] : null;
  }, [results]);

  const relatedResults = useMemo((): SearchResult[] => {
    if (mode === "deep") return results.slice(1);
    return results.slice(1, 4);
  }, [results, mode]);

  return {
    query,
    setQuery,
    mode,
    setMode,
    results: mode === "live" ? liveResults : results,
    bestMatch,
    relatedResults,
    totalCount: results.length,
    allResults: results,
  };
}
