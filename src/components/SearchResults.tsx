import type { Playbook } from "../types/playbook";
import BestMatchCard from "./BestMatchCard";
import PlaybookCard from "./PlaybookCard";

interface SearchResultsProps {
  results: Playbook[];
  query: string;
  mode: "live" | "deep";
  onSelectPlaybook: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  favorites: string[];
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  query,
  mode,
  onSelectPlaybook,
  onToggleFavorite,
  favorites,
}) => {
  /* ── Empty state ──────────────────────────────────────────────── */
  if (results.length === 0 && query) {
    return (
      <div
        id="search-results-empty"
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="mb-3 text-4xl">🔍</div>
        <p className="text-sm text-[#94a3b8]">
          No results for{" "}
          <span className="font-semibold text-[#f1f5f9]">"{query}"</span>
        </p>
        <p className="mt-1 text-xs text-[#4a5568]">
          Try different keywords or check your spelling
        </p>
      </div>
    );
  }

  if (results.length === 0) {
    return null;
  }

  /* ── Live mode ────────────────────────────────────────────────── */
  if (mode === "live") {
    const bestMatch = results[0];
    const related = results.slice(1, 4);

    return (
      <div id="search-results-live" className="space-y-3">
        {/* Result count */}
        <p
          id="search-results-count"
          className="text-xs text-[#4a5568]"
        >
          {results.length} result{results.length !== 1 ? "s" : ""}
        </p>

        {/* Best match */}
        <BestMatchCard
          playbook={bestMatch}
          onSelect={() => onSelectPlaybook(bestMatch.id)}
          onToggleFavorite={() => onToggleFavorite(bestMatch.id)}
          isFavorite={favorites.includes(bestMatch.id)}
        />

        {/* Related playbooks */}
        {related.length > 0 && (
          <div id="search-results-related">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a5568]">
              Related Playbooks
            </h3>
            <div className="space-y-2">
              {related.map((playbook) => (
                <PlaybookCard
                  key={playbook.id}
                  playbook={playbook}
                  onSelect={() => onSelectPlaybook(playbook.id)}
                  onToggleFavorite={() => onToggleFavorite(playbook.id)}
                  isFavorite={favorites.includes(playbook.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  /* ── Deep mode ────────────────────────────────────────────────── */
  return (
    <div id="search-results-deep" className="space-y-3">
      {/* Result count */}
      <p
        id="search-results-count"
        className="text-xs text-[#4a5568]"
      >
        {results.length} result{results.length !== 1 ? "s" : ""}
      </p>

      {/* All results as cards */}
      <div className="space-y-2">
        {results.map((playbook) => (
          <PlaybookCard
            key={playbook.id}
            playbook={playbook}
            onSelect={() => onSelectPlaybook(playbook.id)}
            onToggleFavorite={() => onToggleFavorite(playbook.id)}
            isFavorite={favorites.includes(playbook.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
