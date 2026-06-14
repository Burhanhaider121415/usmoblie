import type { Playbook } from "../types/playbook";
import IntentBadge from "./IntentBadge";
import PriorityBadge from "./PriorityBadge";

interface BestMatchCardProps {
  playbook: Playbook;
  onSelect: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  isFavorite: boolean;
}

const BestMatchCard: React.FC<BestMatchCardProps> = ({
  playbook,
  onSelect,
  onToggleFavorite,
  isFavorite,
}) => {
  return (
    <div
      id={`best-match-${playbook.id}`}
      onClick={() => onSelect(playbook.id)}
      className="bg-[#1a1d27] border border-[#00d4ff]/20 rounded-xl p-5 cursor-pointer hover:border-[#00d4ff]/40 transition-all shadow-[0_0_15px_rgba(0,212,255,0.05)] relative"
    >
      {/* Header Row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          {/* BEST MATCH Label */}
          <span
            id="best-match-label"
            className="text-[#00d4ff] text-xs uppercase tracking-widest font-semibold"
          >
            Best Match
          </span>

          {/* Title */}
          <h3 className="text-xl font-bold text-[#f1f5f9] mt-1">
            {playbook.title}
          </h3>
        </div>

        {/* Favorite Star */}
        <button
          id={`best-match-fav-${playbook.id}`}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(playbook.id);
          }}
          className={`
            flex-shrink-0 p-1 text-lg transition-colors
            ${isFavorite ? "text-amber-400" : "text-[#4a5568] hover:text-amber-400/60"}
          `}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </div>

      {/* Badges Row */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        {/* Category Pill */}
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#242837] text-[#94a3b8] border border-[#2a2e3d]">
          {playbook.category}
        </span>

        {/* Priority Badge */}
        {playbook.priority && (
          <PriorityBadge priority={playbook.priority} />
        )}

        {/* Intent Badges */}
        {playbook.intent.map((intent) => (
          <IntentBadge key={intent} intent={intent} />
        ))}
      </div>

      {/* Quick Answer */}
      <p className="text-[#94a3b8] text-sm mt-2 line-clamp-3 leading-relaxed">
        {playbook.quickAnswer}
      </p>

      {/* Open Playbook Button */}
      <div className="mt-4 flex justify-end">
        <button
          id={`best-match-open-${playbook.id}`}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(playbook.id);
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#00d4ff] bg-[#00d4ff]/10 rounded-lg hover:bg-[#00d4ff]/20 transition-colors"
        >
          Open Playbook
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
};

export default BestMatchCard;
