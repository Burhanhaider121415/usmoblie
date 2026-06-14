import type { Playbook } from "../types/playbook";
import { playbooks } from "../data/playbooks";
import CommandSearch from "./CommandSearch";

interface DashboardProps {
  query: string;
  onQueryChange: (q: string) => void;
  onSelectPlaybook: (id: string) => void;
  recentIds: string[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const commonIssueIds = ["mobile-data-not-working", "no-service", "esim-activation", "hotspot-not-working", "qci-priority"];

function getPlaybook(id: string): Playbook | undefined {
  return playbooks.find((p) => p.id === id);
}

export default function Dashboard({
  query,
  onQueryChange,
  onSelectPlaybook,
  recentIds,
  favorites,
  onToggleFavorite,
  isFavorite,
}: DashboardProps) {
  const recentPlaybooks = recentIds
    .map((id) => getPlaybook(id))
    .filter(Boolean) as Playbook[];

  const favoritePlaybooks = favorites
    .map((id) => getPlaybook(id))
    .filter(Boolean) as Playbook[];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      {/* 1. Hero */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-[#f1f5f9]">
          <span className="text-[#00d4ff]">Signal</span> Desk
        </h1>
        <p className="text-[#94a3b8] text-sm">
          Where do you need help right now?
        </p>
      </div>

      {/* 2. Real Search Bar */}
      <CommandSearch
        query={query}
        onQueryChange={onQueryChange}
        autoFocus={false}
      />

      {/* 3. Pinned / Favorites */}
      {favoritePlaybooks.length > 0 && (
        <section>
          <h2 className="text-xs uppercase tracking-widest text-[#4a5568] font-semibold mb-3">
            ⭐ Pinned Playbooks
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {favoritePlaybooks.map((pb) => (
              <button
                key={pb.id}
                onClick={() => onSelectPlaybook(pb.id)}
                className="bg-[#1a1d27] border border-[#2a2e3d] rounded-lg p-3 text-left hover:bg-[#242837] hover:border-[#00d4ff]/20 transition-all group relative"
              >
                <div className="text-sm font-medium text-[#f1f5f9] group-hover:text-[#00d4ff] transition-colors pr-5">
                  {pb.title}
                </div>
                <div className="text-xs text-[#4a5568] mt-1">{pb.category}</div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(pb.id);
                  }}
                  className="absolute top-2 right-2 text-amber-400 hover:text-amber-300 text-sm"
                  title="Unpin playbook"
                >
                  ★
                </button>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* No favorites yet — show defaults */}
      {favoritePlaybooks.length === 0 && (
        <section>
          <h2 className="text-xs uppercase tracking-widest text-[#4a5568] font-semibold mb-3">
            📌 Suggested Playbooks
          </h2>
          <p className="text-xs text-[#4a5568] mb-2">
            Star any playbook to pin it here for quick access.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {["apn-iphone", "no-service", "esim-activation", "port-in-delay", "escalation-format"].map((id) => {
              const pb = getPlaybook(id);
              if (!pb) return null;
              return (
                <button
                  key={id}
                  onClick={() => onSelectPlaybook(id)}
                  className="bg-[#1a1d27] border border-[#2a2e3d] rounded-lg p-3 text-left hover:bg-[#242837] hover:border-[#00d4ff]/20 transition-all group relative"
                >
                  <div className="text-sm font-medium text-[#f1f5f9] group-hover:text-[#00d4ff] transition-colors pr-5">
                    {pb.title}
                  </div>
                  <div className="text-xs text-[#4a5568] mt-1">{pb.category}</div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(id);
                    }}
                    className="absolute top-2 right-2 text-[#4a5568] hover:text-amber-400 text-sm transition-colors"
                    title="Pin playbook"
                  >
                    ☆
                  </button>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* 4. Common Live Issues */}
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
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-medium text-[#f1f5f9] group-hover:text-[#00d4ff] transition-colors">
                    {pb.title}
                  </span>
                  <p className="text-xs text-[#4a5568] mt-0.5 line-clamp-1">
                    {pb.quickAnswer}
                  </p>
                </div>
                <div className="flex items-center gap-2 ml-2 flex-shrink-0">
                  {pb.priority === "critical" && (
                    <span className="text-xs bg-red-500/10 text-red-400 px-2 py-0.5 rounded-full font-medium">
                      Critical
                    </span>
                  )}
                  {pb.priority === "important" && (
                    <span className="text-xs bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full font-medium">
                      Important
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(id);
                    }}
                    className={`text-sm transition-colors ${
                      isFavorite(id)
                        ? "text-amber-400 hover:text-amber-300"
                        : "text-[#4a5568] hover:text-amber-400"
                    }`}
                    title={isFavorite(id) ? "Unpin playbook" : "Pin playbook"}
                  >
                    {isFavorite(id) ? "★" : "☆"}
                  </button>
                  <span className="text-[#4a5568] text-sm group-hover:text-[#94a3b8]">→</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 5. Quick Tools */}
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
        </div>
      </section>

      {/* 6. Recently Used */}
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
                className="w-full bg-[#1a1d27] border border-[#2a2e3d] rounded-lg px-3 py-2.5 text-left hover:bg-[#242837] transition-all text-sm text-[#94a3b8] hover:text-[#f1f5f9] flex items-center justify-between"
              >
                <span>{pb.title}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(pb.id);
                  }}
                  className={`text-sm transition-colors flex-shrink-0 ml-2 ${
                    isFavorite(pb.id)
                      ? "text-amber-400 hover:text-amber-300"
                      : "text-[#4a5568] hover:text-amber-400"
                  }`}
                  title={isFavorite(pb.id) ? "Unpin playbook" : "Pin playbook"}
                >
                  {isFavorite(pb.id) ? "★" : "☆"}
                </button>
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
