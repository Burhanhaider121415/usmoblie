import type { Playbook } from "../types/playbook";

interface FavoritesPanelProps {
  playbooks: Playbook[];
  favoriteIds: string[];
  onSelect: (id: string) => void;
}

export default function FavoritesPanel({
  playbooks,
  favoriteIds,
  onSelect,
}: FavoritesPanelProps) {
  const favoritePlaybooks = playbooks.filter((p) =>
    favoriteIds.includes(p.id)
  );

  if (favoritePlaybooks.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-2xl mb-2">⭐</div>
        <p className="text-[#94a3b8] text-sm">No favorites yet</p>
        <p className="text-[#4a5568] text-xs mt-1">
          Star playbooks to save them here
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <h3 className="text-xs uppercase tracking-widest text-[#4a5568] font-semibold px-1 mb-3">
        ⭐ Favorites ({favoritePlaybooks.length})
      </h3>
      {favoritePlaybooks.map((playbook) => (
        <button
          key={playbook.id}
          onClick={() => onSelect(playbook.id)}
          className="w-full text-left bg-[#242837] hover:bg-[#2a2e3d] border border-[#2a2e3d] rounded-lg p-3 transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[#f1f5f9] text-sm font-medium group-hover:text-[#00d4ff] transition-colors">
              {playbook.title}
            </span>
            <span className="text-yellow-400 text-xs">★</span>
          </div>
          <span className="text-[#4a5568] text-xs">{playbook.category}</span>
        </button>
      ))}
    </div>
  );
}
