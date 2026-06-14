interface MobileBottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "search", label: "Search", icon: "🔍" },
  { id: "categories", label: "Categories", icon: "📂" },
  { id: "saved", label: "Saved", icon: "⭐" },
  { id: "templates", label: "Templates", icon: "💬" },
] as const;

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <nav
      id="mobile-bottom-nav"
      className="fixed bottom-0 left-0 right-0 bg-[#1a1d27] border-t border-[#2a2e3d] z-50 pb-[env(safe-area-inset-bottom)]"
    >
      <div className="flex">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              id={`mobile-tab-${tab.id}`}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`
                flex-1 py-3 flex flex-col items-center gap-1 text-xs cursor-pointer transition-colors
                ${isActive ? "text-[#00d4ff]" : "text-[#94a3b8]"}
              `}
            >
              <span className="text-xl">{tab.icon}</span>
              <span className={isActive ? "font-medium" : ""}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
