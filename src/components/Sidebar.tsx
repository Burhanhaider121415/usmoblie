import type { Category } from "../types/playbook";

interface SidebarProps {
  categories: Category[];
  activeCategory: string | null;
  onCategorySelect: (id: string) => void;
  onLogoClick: () => void;
  favorites: string[];
  recentlyUsed: string[];
}

export default function Sidebar({
  categories,
  activeCategory,
  onCategorySelect,
  onLogoClick,
  favorites,
  recentlyUsed,
}: SidebarProps) {
  return (
    <aside
      id="sidebar"
      className="w-60 h-screen bg-[#1a1d27] border-r border-[#2a2e3d] overflow-y-auto flex flex-col"
    >
      {/* Logo Area — Clickable Home Button */}
      <button
        id="sidebar-logo"
        type="button"
        onClick={onLogoClick}
        className="w-full px-5 pt-5 pb-3 text-left cursor-pointer hover:bg-[#242837] transition-colors group"
      >
        <h1 className="text-lg font-bold text-[#00d4ff] leading-tight group-hover:text-[#00e5ff] transition-colors">
          Signal Desk
        </h1>
        <p className="text-xs text-[#94a3b8] mt-0.5">
          Support Command Center
        </p>
      </button>

      {/* Divider */}
      <div className="mx-4 border-t border-[#2a2e3d]" />

      {/* Category List */}
      <nav id="sidebar-categories" className="flex-1 py-2">
        <ul className="space-y-0.5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <li key={cat.id}>
                <button
                  id={`sidebar-cat-${cat.id}`}
                  type="button"
                  onClick={() => onCategorySelect(cat.id)}
                  className={`
                    w-full px-4 py-2.5 flex items-center gap-3 text-sm cursor-pointer transition-all
                    ${
                      isActive
                        ? "bg-[#00d4ff]/10 text-[#00d4ff] border-l-2 border-[#00d4ff]"
                        : "text-[#94a3b8] hover:bg-[#242837] hover:text-[#f1f5f9] border-l-2 border-transparent"
                    }
                  `}
                >
                  <span className="text-base flex-shrink-0">{cat.icon}</span>
                  <span className="truncate">{cat.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Divider */}
        <div className="mx-4 my-3 border-t border-[#2a2e3d]" />

        {/* Favorites Section Header */}
        <div
          id="sidebar-favorites-header"
          className="px-4 py-2 flex items-center gap-2 text-xs font-semibold text-[#94a3b8] uppercase tracking-wider"
        >
          <span>⭐</span>
          <span>Favorites</span>
          <span className="ml-auto text-[#4a5568]">{favorites.length}</span>
        </div>

        {favorites.length === 0 && (
          <p className="px-4 py-1 text-xs text-[#4a5568]">
            Star a playbook to save it here
          </p>
        )}

        {/* Divider */}
        <div className="mx-4 my-3 border-t border-[#2a2e3d]" />

        {/* Recently Used Section Header */}
        <div
          id="sidebar-recent-header"
          className="px-4 py-2 flex items-center gap-2 text-xs font-semibold text-[#94a3b8] uppercase tracking-wider"
        >
          <span>🕐</span>
          <span>Recently Used</span>
          <span className="ml-auto text-[#4a5568]">{recentlyUsed.length}</span>
        </div>

        {recentlyUsed.length === 0 && (
          <p className="px-4 py-1 text-xs text-[#4a5568]">
            Playbooks you open appear here
          </p>
        )}
      </nav>

      {/* Footer */}
      <div
        id="sidebar-footer"
        className="px-4 py-3 border-t border-[#2a2e3d]"
      >
        <p className="text-[10px] text-[#4a5568] text-center">
          Prototype — Dummy Data
        </p>
      </div>
    </aside>
  );
}
