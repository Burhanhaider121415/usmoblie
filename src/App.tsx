import { useState, useEffect, useCallback, useMemo } from "react";
import { playbooks, categories } from "./data/playbooks";
import { useSearch } from "./hooks/useSearch";
import { useFavorites } from "./hooks/useFavorites";
import { useRecentlyUsed } from "./hooks/useRecentlyUsed";

import Sidebar from "./components/Sidebar";
import MobileBottomNav from "./components/MobileBottomNav";
import CommandSearch from "./components/CommandSearch";
import SearchResults from "./components/SearchResults";
import PlaybookDetail from "./components/PlaybookDetail";
import RightActionPanel from "./components/RightActionPanel";
import Dashboard from "./components/Dashboard";
import FavoritesPanel from "./components/FavoritesPanel";

type View = "dashboard" | "search" | "playbook" | "category" | "favorites";

export default function App() {
  const [view, setView] = useState<View>("dashboard");
  const [selectedPlaybookId, setSelectedPlaybookId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileTab, setMobileTab] = useState("search");
  const [isMobile, setIsMobile] = useState(false);

  const { query, setQuery, showAll, setShowAll, bestMatch, relatedResults, totalCount } = useSearch(playbooks);
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const { recentlyUsed, addRecent } = useRecentlyUsed();

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Keyboard shortcut: Ctrl+K / Cmd+K to focus search
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        const input = document.getElementById("command-search-input") as HTMLInputElement;
        if (input) {
          input.focus();
          if (view !== "search") setView("search");
        }
      }
      // Escape to go back
      if (e.key === "Escape") {
        if (query) {
          setQuery("");
          setView("dashboard");
        } else if (selectedPlaybookId) {
          setSelectedPlaybookId(null);
          setView("dashboard");
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedPlaybookId, query, setQuery, view]);

  // Selected playbook object
  const selectedPlaybook = useMemo(
    () => playbooks.find((p) => p.id === selectedPlaybookId) ?? null,
    [selectedPlaybookId]
  );

  // Playbooks filtered and sorted by category
  const categoryPlaybooks = useMemo(() => {
    if (!activeCategory) return [];
    const filtered = playbooks.filter(
      (p) =>
        p.category === activeCategory ||
        (p.secondaryCategories && p.secondaryCategories.includes(activeCategory))
    );
    const priorityWeight: Record<string, number> = {
      critical: 4,
      important: 3,
      normal: 2,
      low: 1,
    };
    return filtered.sort((a, b) => {
      const wa = priorityWeight[a.priority || "normal"] || 2;
      const wb = priorityWeight[b.priority || "normal"] || 2;
      return wb - wa; // Critical first
    });
  }, [activeCategory]);

  // ── Handlers ──────────────────────────────────────────────

  const handleGoHome = useCallback(() => {
    setView("dashboard");
    setSelectedPlaybookId(null);
    setActiveCategory(null);
    setQuery("");
    setShowAll(false);
  }, [setQuery, setShowAll]);

  const handleSelectPlaybook = useCallback(
    (id: string) => {
      setSelectedPlaybookId(id);
      addRecent(id);
      setView("playbook");
      if (isMobile) setMobileTab("search");
    },
    [addRecent, isMobile]
  );

  const handleCategorySelect = useCallback(
    (categoryId: string) => {
      setActiveCategory(categoryId === activeCategory ? null : categoryId);
      setSelectedPlaybookId(null);
      setView("category");
      setQuery("");
    },
    [activeCategory, setQuery]
  );

  const handleQueryChange = useCallback(
    (q: string) => {
      setQuery(q);
      setShowAll(false);
      if (q) {
        setView("search");
        setSelectedPlaybookId(null);
        setActiveCategory(null);
      } else {
        setView("dashboard");
      }
    },
    [setQuery, setShowAll]
  );

  const handleBack = useCallback(() => {
    setSelectedPlaybookId(null);
    if (query) {
      setView("search");
    } else if (activeCategory) {
      setView("category");
    } else {
      setView("dashboard");
    }
  }, [query, activeCategory]);

  const handleMobileTabChange = useCallback(
    (tab: string) => {
      setMobileTab(tab);
      if (tab === "search") {
        if (!query && !selectedPlaybookId) setView("dashboard");
      } else if (tab === "categories") {
        setView("category");
      } else if (tab === "saved") {
        setView("favorites");
      } else if (tab === "templates") {
        handleSelectPlaybook("empathy-replies");
      }
    },
    [query, selectedPlaybookId, handleSelectPlaybook]
  );

  // ── Render Center Content ─────────────────────────────────
  const renderCenterContent = () => {
    // Show playbook detail
    if (view === "playbook" && selectedPlaybook) {
      return (
        <div className="px-4 py-4 lg:px-6">
          <PlaybookDetail
            playbook={selectedPlaybook}
            onToggleFavorite={toggleFavorite}
            isFavorite={isFavorite(selectedPlaybook.id)}
            onSelectRelated={handleSelectPlaybook}
            onBack={handleBack}
            onBackToStart={handleGoHome}
            showMobileActions={isMobile}
          />
        </div>
      );
    }

    // Search active
    if (view === "search" && query) {
      return (
        <div className="px-4 py-4 lg:px-6">
          <CommandSearch
            query={query}
            onQueryChange={handleQueryChange}
            autoFocus
          />
          <div className="mt-4">
            <SearchResults
              bestMatch={bestMatch}
              relatedResults={relatedResults}
              totalCount={totalCount}
              showAll={showAll}
              onShowAllToggle={() => setShowAll(!showAll)}
              query={query}
              onSelectPlaybook={handleSelectPlaybook}
              onToggleFavorite={toggleFavorite}
              favorites={favorites}
            />
          </div>
        </div>
      );
    }

    // Category browsing
    if (view === "category" && activeCategory) {
      const cat = categories.find((c) => c.id === activeCategory);
      return (
        <div className="px-4 py-4 lg:px-6">
          <CommandSearch
            query={query}
            onQueryChange={handleQueryChange}
          />
          <div className="mt-4">
            <h2 className="text-lg font-bold text-[#f1f5f9] mb-3 flex items-center gap-2">
              <span>{cat?.icon}</span>
              <span>{cat?.label}</span>
              <span className="text-xs text-[#4a5568] font-normal">
                ({categoryPlaybooks.length})
              </span>
            </h2>

            {/* Empty category state (#5) */}
            {categoryPlaybooks.length === 0 ? (
              <div className="rounded-xl bg-[#1a1d27] border border-[#2a2e3d] p-6 text-center space-y-4">
                <p className="text-sm text-[#94a3b8]">
                  No playbooks added to <span className="font-semibold text-[#f1f5f9]">{cat?.label}</span> yet.
                </p>
                <p className="text-xs text-[#4a5568]">
                  Select another category or search for an active issue above.
                </p>
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  <button
                    onClick={handleGoHome}
                    className="px-3 py-1.5 text-xs rounded-full bg-[#242837] text-[#94a3b8] hover:text-[#00d4ff] hover:bg-[#2a2e3d] transition-colors border border-[#2a2e3d]"
                  >
                    ← Go to Start Here
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                {categoryPlaybooks.map((pb) => (
                  <div
                    key={pb.id}
                    onClick={() => handleSelectPlaybook(pb.id)}
                    className="w-full text-left bg-[#1a1d27] border border-[#2a2e3d] rounded-lg p-4 hover:bg-[#242837] hover:border-[#3a3e4d] transition-all cursor-pointer group space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold text-[#f1f5f9] group-hover:text-[#00d4ff] transition-colors">
                          {pb.title}
                        </h3>
                        <p className="text-xs text-[#94a3b8] mt-1 line-clamp-1">
                          {pb.quickAnswer || pb.preview?.problem}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {pb.priority === "critical" && (
                          <span className="text-[10px] bg-red-500/10 text-red-400 px-2 py-0.5 rounded-full font-medium uppercase tracking-wider">
                            Critical
                          </span>
                        )}
                        {pb.priority === "important" && (
                          <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full font-medium uppercase tracking-wider">
                            Important
                          </span>
                        )}
                        {pb.priority === "normal" && (
                          <span className="text-[10px] bg-[#242837] text-[#94a3b8] px-2 py-0.5 rounded-full font-medium uppercase tracking-wider">
                            Normal
                          </span>
                        )}
                        {pb.priority === "low" && (
                          <span className="text-[10px] bg-[#242837]/50 text-[#4a5568] px-2 py-0.5 rounded-full font-medium uppercase tracking-wider">
                            Low
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(pb.id);
                          }}
                          className={`text-base transition-colors ${
                            isFavorite(pb.id)
                              ? "text-amber-400 hover:text-amber-300"
                              : "text-[#4a5568] hover:text-amber-400"
                          }`}
                          title={isFavorite(pb.id) ? "Unpin playbook" : "Pin playbook"}
                        >
                          {isFavorite(pb.id) ? "★" : "☆"}
                        </button>
                      </div>
                    </div>

                    {/* Previews tags, question, action */}
                    {pb.tags && pb.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {pb.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-[10px] bg-[#0f1117] text-[#94a3b8] px-2 py-0.5 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2 border-t border-[#2a2e3d]/50 text-[11px]">
                      {pb.preview?.firstQuestion && (
                        <div className="text-[#94a3b8] truncate">
                          <span className="text-[#00d4ff] font-semibold">Q:</span> {pb.preview.firstQuestion}
                        </div>
                      )}
                      {pb.preview?.firstAction && (
                        <div className="text-[#94a3b8] truncate">
                          <span className="text-[#00d4ff] font-semibold">Act:</span> {pb.preview.firstAction}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      );
    }

    // Favorites view (mobile)
    if (view === "favorites") {
      return (
        <div className="px-4 py-4">
          <FavoritesPanel
            playbooks={playbooks}
            favoriteIds={favorites}
            onSelect={handleSelectPlaybook}
          />
        </div>
      );
    }

    // Dashboard (default)
    return (
      <Dashboard
        query={query}
        onQueryChange={handleQueryChange}
        onSelectPlaybook={handleSelectPlaybook}
        recentIds={recentlyUsed}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />
    );
  };

  // ── Mobile Layout ─────────────────────────────────────────
  if (isMobile) {
    return (
      <div className="min-h-screen bg-[#0f1117] pb-16">
        {renderCenterContent()}
        <MobileBottomNav activeTab={mobileTab} onTabChange={handleMobileTabChange} />
      </div>
    );
  }

  // ── Desktop Layout ────────────────────────────────────────
  return (
    <div className="flex h-screen bg-[#0f1117] overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar
        categories={categories}
        activeCategory={activeCategory}
        onCategorySelect={handleCategorySelect}
        onLogoClick={handleGoHome}
        favorites={favorites}
        recentlyUsed={recentlyUsed}
      />

      {/* Center Panel */}
      <main className="flex-1 overflow-y-auto">
        {renderCenterContent()}
      </main>

      {/* Right Action Panel */}
      <RightActionPanel
        playbook={selectedPlaybook}
        onSelectPlaybook={handleSelectPlaybook}
      />
    </div>
  );
}
