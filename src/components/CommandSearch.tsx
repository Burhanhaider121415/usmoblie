import ModeToggle from "./ModeToggle";

interface CommandSearchProps {
  query: string;
  onQueryChange: (q: string) => void;
  mode: "live" | "deep";
  onModeToggle: (mode: "live" | "deep") => void;
}

const CommandSearch: React.FC<CommandSearchProps> = ({
  query,
  onQueryChange,
  mode,
  onModeToggle,
}) => {
  const isMac =
    typeof navigator !== "undefined" &&
    /Mac|iPod|iPhone|iPad/.test(navigator.userAgent);

  return (
    <div id="command-search" className="w-full space-y-3">
      {/* Search Input Container */}
      <div className="relative">
        {/* Search Icon */}
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4a5568] w-5 h-5 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        {/* Input */}
        <input
          id="command-search-input"
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search APN, QCI, eSIM, port delay, no service, hotspot…"
          className="w-full bg-[#242837] border border-[#2a2e3d] rounded-xl px-4 py-3.5 pl-12 pr-20 text-[#f1f5f9] text-base placeholder-[#4a5568] focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/20 transition font-sans"
          autoComplete="off"
          spellCheck={false}
        />

        {/* Right side: Clear button + Shortcut hint */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
          {/* Clear Button */}
          {query.length > 0 && (
            <button
              id="command-search-clear"
              type="button"
              onClick={() => onQueryChange("")}
              className="text-[#4a5568] hover:text-[#94a3b8] transition-colors p-0.5"
              aria-label="Clear search"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}

          {/* Keyboard Shortcut Hint */}
          {query.length === 0 && (
            <kbd
              id="command-search-shortcut"
              className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono text-[#4a5568] bg-[#1a1d27] border border-[#2a2e3d] rounded"
            >
              {isMac ? "⌘" : "Ctrl+"}K
            </kbd>
          )}
        </div>
      </div>

      {/* Mode Toggle */}
      <ModeToggle mode={mode} onToggle={onModeToggle} />
    </div>
  );
};

export default CommandSearch;
