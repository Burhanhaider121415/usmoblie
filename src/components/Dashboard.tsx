import type { Playbook } from "../types/playbook";
import { playbooks } from "../data/playbooks";

interface DashboardProps {
  onSelectPlaybook: (id: string) => void;
  onSearch: (query: string) => void;
  recentIds: string[];
}

const pinnedIds = ["apn-iphone", "no-service", "esim-activation", "port-in-delay", "escalation-format"];
const commonIssueIds = ["mobile-data-not-working", "no-service", "esim-activation", "hotspot-not-working", "qci-priority"];

function getPlaybook(id: string): Playbook | undefined {
  return playbooks.find((p) => p.id === id);
}

export default function Dashboard({
  onSelectPlaybook,
  onSearch,
  recentIds,
}: DashboardProps) {
  const recentPlaybooks = recentIds
    .map((id) => getPlaybook(id))
    .filter(Boolean) as Playbook[];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      {/* Hero */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-[#f1f5f9]">
          <span className="text-[#00d4ff]">Signal</span> Desk
        </h1>
        <p className="text-[#94a3b8] text-sm md:text-base">
          Fast searchable support playbooks for live customer help.
        </p>
      </div>

      {/* Search hint */}
      <div className="text-center">
        <button
          onClick={() => onSearch("")}
          className="inline-flex items-center gap-2 bg-[#242837] border border-[#2a2e3d] rounded-xl px-6 py-3 text-[#4a5568] hover:border-[#00d4ff]/30 hover:text-[#94a3b8] transition-all text-sm cursor-text w-full max-w-md"
        >
          <span className="text-lg">🔍</span>
          <span>Search APN, QCI, eSIM, port delay, no service…</span>
          <span className="ml-auto text-xs bg-[#1a1d27] px-2 py-0.5 rounded font-mono hidden md:inline">
            Ctrl+K
          </span>
        </button>
      </div>

      {/* Pinned Playbooks */}
      <section>
        <h2 className="text-xs uppercase tracking-widest text-[#4a5568] font-semibold mb-3">
          📌 Pinned Playbooks
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {pinnedIds.map((id) => {
            const pb = getPlaybook(id);
            if (!pb) return null;
            return (
              <button
                key={id}
                onClick={() => onSelectPlaybook(id)}
                className="bg-[#1a1d27] border border-[#2a2e3d] rounded-lg p-3 text-left hover:bg-[#242837] hover:border-[#00d4ff]/20 transition-all group"
              >
                <div className="text-sm font-medium text-[#f1f5f9] group-hover:text-[#00d4ff] transition-colors">
                  {pb.title}
                </div>
                <div className="text-xs text-[#4a5568] mt-1">{pb.category}</div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Common Live Issues */}
      <section>
        <h2 className="text-xs uppercase tracking-widest text-[#4a5568] font-semibold mb-3">
          🔥 Common Live Issues
        </h2>
        <div className="space-y-2">
          {commonIssueIds.map((id) => {
            const pb = getPlaybook(id);
            if (!pb) return null;
            return (
              <button
                key={id}
                onClick={() => onSelectPlaybook(id)}
                className="w-full bg-[#1a1d27] border border-[#2a2e3d] rounded-lg p-3 text-left hover:bg-[#242837] hover:border-[#3a3e4d] transition-all group flex items-center justify-between"
              >
                <div>
                  <span className="text-sm font-medium text-[#f1f5f9] group-hover:text-[#00d4ff] transition-colors">
                    {pb.title}
                  </span>
                  <p className="text-xs text-[#4a5568] mt-0.5 line-clamp-1">
                    {pb.quickAnswer}
                  </p>
                </div>
                {pb.priority === "critical" && (
                  <span className="text-xs bg-red-500/10 text-red-400 px-2 py-0.5 rounded-full font-medium shrink-0 ml-2">
                    Critical
                  </span>
                )}
                {pb.priority === "important" && (
                  <span className="text-xs bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full font-medium shrink-0 ml-2">
                    Important
                  </span>
                )}
                <span className="text-[#4a5568] text-sm ml-2 group-hover:text-[#94a3b8]">→</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Quick Tools */}
      <section>
        <h2 className="text-xs uppercase tracking-widest text-[#4a5568] font-semibold mb-3">
          ⚡ Quick Tools
        </h2>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onSelectPlaybook("escalation-format")}
            className="bg-[#1a1d27] border border-red-500/20 rounded-lg p-3 text-left hover:bg-red-500/5 transition-all"
          >
            <div className="text-sm font-medium text-red-400">🚨 Escalation Format</div>
            <div className="text-xs text-[#4a5568] mt-1">Copy the escalation template</div>
          </button>
          <button
            onClick={() => onSelectPlaybook("empathy-replies")}
            className="bg-[#1a1d27] border border-[#2a2e3d] rounded-lg p-3 text-left hover:bg-[#242837] transition-all"
          >
            <div className="text-sm font-medium text-[#f1f5f9]">💬 Reply Templates</div>
            <div className="text-xs text-[#4a5568] mt-1">Empathy & professional replies</div>
          </button>
          <button
            onClick={() => onSearch("glossary")}
            className="bg-[#1a1d27] border border-[#2a2e3d] rounded-lg p-3 text-left hover:bg-[#242837] transition-all"
          >
            <div className="text-sm font-medium text-[#f1f5f9]">📖 Glossary</div>
            <div className="text-xs text-[#4a5568] mt-1">Technical terms & definitions</div>
          </button>
          <button
            onClick={() => onSearch("checklist")}
            className="bg-[#1a1d27] border border-[#2a2e3d] rounded-lg p-3 text-left hover:bg-[#242837] transition-all"
          >
            <div className="text-sm font-medium text-[#f1f5f9]">✅ Customer Info Checklist</div>
            <div className="text-xs text-[#4a5568] mt-1">Standard info gathering</div>
          </button>
        </div>
      </section>

      {/* Recently Used */}
      {recentPlaybooks.length > 0 && (
        <section>
          <h2 className="text-xs uppercase tracking-widest text-[#4a5568] font-semibold mb-3">
            🕐 Recently Used
          </h2>
          <div className="space-y-1.5">
            {recentPlaybooks.slice(0, 5).map((pb) => (
              <button
                key={pb.id}
                onClick={() => onSelectPlaybook(pb.id)}
                className="w-full bg-[#1a1d27] border border-[#2a2e3d] rounded-lg px-3 py-2.5 text-left hover:bg-[#242837] transition-all text-sm text-[#94a3b8] hover:text-[#f1f5f9]"
              >
                {pb.title}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Prototype Notice */}
      <div className="text-center pt-4 border-t border-[#2a2e3d]">
        <p className="text-[10px] text-[#4a5568]">
          Prototype using dummy data. Replace with verified internal playbooks later.
        </p>
      </div>
    </div>
  );
}
