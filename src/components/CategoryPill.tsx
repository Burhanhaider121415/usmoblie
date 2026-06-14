interface CategoryPillProps {
  category: string;
  isActive: boolean;
  onClick: () => void;
}

const CategoryPill: React.FC<CategoryPillProps> = ({ category, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        cursor-pointer rounded-full border px-3 py-1.5 text-sm transition
        ${
          isActive
            ? "border-[#00d4ff]/30 bg-[#00d4ff]/10 text-[#00d4ff]"
            : "border-[#2a2e3d] bg-[#1a1d27] text-[#94a3b8] hover:bg-[#242837]"
        }
      `}
    >
      {category}
    </button>
  );
};

export default CategoryPill;
