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

  // Playbooks filtered by category
  const categoryPlaybooks = useMemo(
    () => (activeCategory ? playbooks.filter((p) => p.category === activeCategory) : []),
    [activeCategory]
  );

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
                  This is dummy prototype content. Real playbooks will be added later.
                </p>
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  <button
                    onClick={handleGoHome}
                    className="px-3 py-1.5 text-xs rounded-full bg-[#242837] text-[#94a3b8] hover:text-[#00d4ff] hover:bg-[#2a2e3d] transition-colors border border-[#2a2e3d]"
                  >
                    ← Go to Start Here
                  </button>
                  <button
                    onClick={() => handleSelectPlaybook("esim-activation")}
                    className="px-3 py-1.5 text-xs rounded-full bg-[#242837] text-[#94a3b8] hover:text-[#00d4ff] hover:bg-[#2a2e3d] transition-colors border border-[#2a2e3d]"
                  >
                    eSIM Activation Issue
                  </button>
                  <button
                    onClick={() => handleSelectPlaybook("port-in-delay")}
                    className="px-3 py-1.5 text-xs rounded-full bg-[#242837] text-[#94a3b8] hover:text-[#00d4ff] hover:bg-[#2a2e3d] transition-colors border border-[#2a2e3d]"
                  >
                    Port-In Delay
                  </button>
                  <button
                    onClick={() => handleSelectPlaybook("escalation-format")}
                    className="px-3 py-1.5 text-xs rounded-full bg-[#242837] text-[#94a3b8] hover:text-[#00d4ff] hover:bg-[#2a2e3d] transition-colors border border-[#2a2e3d]"
                  >
                    Escalation Format
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                {categoryPlaybooks.map((pb) => (
                  <button
                    key={pb.id}
                    onClick={() => handleSelectPlaybook(pb.id)}
                    className="w-full text-left bg-[#1a1d27] border border-[#2a2e3d] rounded-lg p-4 hover:bg-[#242837] hover:border-[#3a3e4d] transition-all group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold text-[#f1f5f9] group-hover:text-[#00d4ff] transition-colors">
                          {pb.title}
                        </h3>
                        <p className="text-xs text-[#4a5568] mt-1 line-clamp-2">
                          {pb.quickAnswer}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(pb.id);
                        }}
                        className={`flex-shrink-0 ml-2 text-lg transition-colors ${
                          isFavorite(pb.id)
                            ? "text-amber-400 hover:text-amber-300"
                            : "text-[#4a5568] hover:text-amber-400"
                        }`}
                        title={isFavorite(pb.id) ? "Unpin playbook" : "Pin playbook"}
                      >
                        {isFavorite(pb.id) ? "★" : "☆"}
                      </button>
                    </div>
                  </button>
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
