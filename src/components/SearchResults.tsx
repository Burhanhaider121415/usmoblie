import type { SearchResult } from "../hooks/useSearch";
import BestMatchCard from "./BestMatchCard";
import PlaybookCard from "./PlaybookCard";

interface SearchResultsProps {
  bestMatch: SearchResult | null;
  relatedResults: SearchResult[];
  totalCount: number;
  showAll: boolean;
  onShowAllToggle: () => void;
  query: string;
  onSelectPlaybook: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  favorites: string[];
}

// Human-readable labels for matched field keys
const fieldLabels: Record<string, string> = {
  title: "title",
  aliases: "alias",
  symptoms: "symptom",
  keywords: "keyword",
  quickSteps: "step",
  "copyTemplates.label": "template",
  "copyTemplates.text": "template text",
  customerQuestions: "question",
  escalationFormat: "escalation",
  quickAnswer: "answer",
  useWhen: "use case",
  category: "category",
};

function MatchedFieldTags({ fields }: { fields: string[] }) {
  if (fields.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1 mt-1.5">
      <span className="text-[10px] text-[#4a5568]">Matched:</span>
      {fields.slice(0, 4).map((f) => (
        <span
          key={f}
          className="inline-flex px-1.5 py-0.5 text-[10px] rounded bg-[#00d4ff]/5 text-[#00d4ff]/70 font-medium"
        >
          {fieldLabels[f] ?? f}
        </span>
      ))}
    </div>
  );
}

export default function SearchResults({
  bestMatch,
  relatedResults,
  totalCount,
  showAll,
  onShowAllToggle,
  query,
  onSelectPlaybook,
  onToggleFavorite,
  favorites,
}: SearchResultsProps) {
  // No results
  if (totalCount === 0 && query.length > 0) {
    return (
      <div id="search-results-empty" className="py-10 text-center">
        <p className="text-[#94a3b8] text-sm">
          No results for "<span className="text-[#f1f5f9] font-medium">{query}</span>"
        </p>
        <p className="mt-2 text-xs text-[#4a5568]">
          Try shorter keywords or different terms
        </p>
      </div>
    );
  }

  return (
    <div id="search-results" className="space-y-3">
      {/* Result Count */}
      <p className="text-xs text-[#4a5568]">
        {totalCount} result{totalCount !== 1 ? "s" : ""} for "{query}"
      </p>

      {/* Best Match */}
      {bestMatch && (
        <div>
          <BestMatchCard
            playbook={bestMatch.playbook}
            onSelect={onSelectPlaybook}
            onToggleFavorite={onToggleFavorite}
            isFavorite={favorites.includes(bestMatch.playbook.id)}
          />
          <MatchedFieldTags fields={bestMatch.matchedFields} />
        </div>
      )}

      {/* Related Playbooks */}
      {relatedResults.length > 0 && (
        <div className="mt-4">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#4a5568] mb-2">
            Related Playbooks
          </h3>
          <div className="space-y-2">
            {relatedResults.map((r) => (
              <div key={r.playbook.id}>
                <PlaybookCard
                  playbook={r.playbook}
                  onSelect={onSelectPlaybook}
                  onToggleFavorite={onToggleFavorite}
                  isFavorite={favorites.includes(r.playbook.id)}
                />
                <MatchedFieldTags fields={r.matchedFields} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Show All / Show Less toggle */}
      {totalCount > 4 && (
        <button
          type="button"
          onClick={onShowAllToggle}
          className="mt-3 text-xs font-medium text-[#00d4ff] hover:text-[#00d4ff]/80 transition-colors"
        >
          {showAll
            ? "Show fewer results"
            : `View all ${totalCount} matches`}
        </button>
      )}
    </div>
  );
}
