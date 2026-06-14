import type { Playbook } from "../types/playbook";
import PriorityBadge from "./PriorityBadge";

interface PlaybookCardProps {
  playbook: Playbook;
  onSelect: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  isFavorite: boolean;
}

const PlaybookCard: React.FC<PlaybookCardProps> = ({
  playbook,
  onSelect,
  onToggleFavorite,
  isFavorite,
}) => {
  return (
    <div
      id={`playbook-card-${playbook.id}`}
      onClick={() => onSelect(playbook.id)}
      className="bg-[#1a1d27] border border-[#2a2e3d] rounded-lg p-4 cursor-pointer hover:bg-[#242837] hover:border-[#3a3e4d] transition-all"
    >
      {/* Top Row: Title + Favorite */}
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-semibold text-[#f1f5f9] leading-snug">
          {playbook.title}
        </h4>

        {/* Favorite Star (small) */}
        <button
          id={`playbook-fav-${playbook.id}`}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(playbook.id);
          }}
          className={`
            flex-shrink-0 text-sm transition-colors
            ${isFavorite ? "text-amber-400" : "text-[#4a5568] hover:text-amber-400/60"}
          `}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </div>

      {/* Category + Priority Inline */}
      <div className="flex items-center gap-2 mt-1.5">
        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-[#242837] text-[#94a3b8] border border-[#2a2e3d]">
          {playbook.category}
        </span>

        {playbook.priority && (
          <PriorityBadge priority={playbook.priority} />
        )}
      </div>

      {/* Quick Answer Preview */}
      <p className="text-[#94a3b8] text-sm line-clamp-2 mt-2 leading-relaxed">
        {playbook.quickAnswer}
      </p>
    </div>
  );
};

export default PlaybookCard;
