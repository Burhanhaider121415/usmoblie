import type { PlaybookIntent } from "../types/playbook";

interface IntentBadgeProps {
  intent: PlaybookIntent;
}

const intentStyles: Record<PlaybookIntent, string> = {
  Explain: "bg-blue-500/10 text-blue-400",
  Troubleshoot: "bg-amber-500/10 text-amber-400",
  "Ask Customer": "bg-purple-500/10 text-purple-400",
  Fix: "bg-emerald-500/10 text-emerald-400",
  Escalate: "bg-red-500/10 text-red-400",
  Template: "bg-cyan-500/10 text-cyan-400",
  Glossary: "bg-gray-500/10 text-gray-400",
};

const IntentBadge: React.FC<IntentBadgeProps> = ({ intent }) => {
  const colorClasses = intentStyles[intent] ?? "bg-gray-500/10 text-gray-400";

  return (
    <span
      className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${colorClasses}`}
    >
      {intent}
    </span>
  );
};

export default IntentBadge;
