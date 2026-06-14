import { useState, useCallback } from "react";

interface CopyButtonProps {
  text: string;
  label?: string;
  id?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({
  text,
  label = "Copy",
  id,
  size = "md",
  className = "",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  }, [text]);

  const sizeClasses = {
    sm: "px-2 py-1 text-xs gap-1",
    md: "px-3 py-2 text-sm gap-2",
    lg: "px-4 py-2.5 text-sm gap-2 w-full justify-center font-medium",
  };

  return (
    <button
      type="button"
      id={id}
      onClick={handleCopy}
      className={`
        inline-flex items-center rounded-lg transition flex-shrink-0
        ${sizeClasses[size]}
        ${
          copied
            ? "border border-[#10b981] bg-[#10b981]/10 text-[#10b981]"
            : "border border-[#2a2e3d] bg-[#242837] text-[#94a3b8] hover:bg-[#2a2e3d]"
        }
        ${className}
      `}
    >
      {copied ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>Copied ✓</span>
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
          </svg>
          <span>{label}</span>
        </>
      )}
    </button>
  );
};

export default CopyButton;
