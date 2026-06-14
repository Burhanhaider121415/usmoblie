interface ModeToggleProps {
  mode: "live" | "deep";
  onToggle: (mode: "live" | "deep") => void;
}

const ModeToggle: React.FC<ModeToggleProps> = ({ mode, onToggle }) => {
  return (
    <div className="inline-flex rounded-full border border-[#2a2e3d] bg-[#1a1d27] p-1">
      <button
        type="button"
        onClick={() => onToggle("live")}
        className={`
          rounded-full px-4 py-1.5 text-sm transition
          ${
            mode === "live"
              ? "bg-[#00d4ff] font-semibold text-[#0f1117]"
              : "bg-transparent text-[#94a3b8] hover:text-[#f1f5f9]"
          }
        `}
      >
        ⚡ Live
      </button>
      <button
        type="button"
        onClick={() => onToggle("deep")}
        className={`
          rounded-full px-4 py-1.5 text-sm transition
          ${
            mode === "deep"
              ? "bg-[#00d4ff] font-semibold text-[#0f1117]"
              : "bg-transparent text-[#94a3b8] hover:text-[#f1f5f9]"
          }
        `}
      >
        🔍 Deep
      </button>
    </div>
  );
};

export default ModeToggle;
