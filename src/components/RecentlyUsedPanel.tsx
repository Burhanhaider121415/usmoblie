import type { Playbook } from "../types/playbook";

interface RecentlyUsedPanelProps {
  playbooks: Playbook[];
  recentIds: string[];
  onSelect: (id: string) => void;
}

export default function RecentlyUsedPanel({
  playbooks,
  recentIds,
  onSelect,
}: RecentlyUsedPanelProps) {
  const recentPlaybooks = recentIds
    .map((id) => playbooks.find((p) => p.id === id))
    .filter(Boolean) as Playbook[];

  if (recentPlaybooks.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-2xl mb-2">🕐</div>
        <p className="text-[#94a3b8] text-sm">No recent playbooks</p>
        <p className="text-[#4a5568] text-xs mt-1">
          Playbooks you open will appear here
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <h3 className="text-xs uppercase tracking-widest text-[#4a5568] font-semibold px-1 mb-3">
        🕐 Recently Used ({recentPlaybooks.length})
      </h3>
      {recentPlaybooks.map((playbook, index) => (
        <button
          key={playbook.id}
          onClick={() => onSelect(playbook.id)}
          className="w-full text-left bg-[#242837] hover:bg-[#2a2e3d] border border-[#2a2e3d] rounded-lg p-3 transition-all group"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#4a5568] text-xs font-mono w-4">
              {index + 1}
            </span>
            <span className="text-[#f1f5f9] text-sm font-medium group-hover:text-[#00d4ff] transition-colors">
              {playbook.title}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
