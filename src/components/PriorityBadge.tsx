import type { PlaybookPriority } from "../types/playbook";

interface PriorityBadgeProps {
  priority: PlaybookPriority | undefined;
}

const PriorityBadge: React.FC<PriorityBadgeProps> = ({ priority }) => {
  const level = priority ?? "normal";

  if (level === "normal") {
    return (
      <span className="inline-flex items-center rounded-full bg-gray-500/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
        Normal
      </span>
    );
  }

  if (level === "important") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
        Important
      </span>
    );
  }

  // critical
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-red-400">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
      </span>
      Critical
    </span>
  );
};

export default PriorityBadge;
