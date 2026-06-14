import CopyButton from "./CopyButton";

interface EscalationFormatCardProps {
  format: string[];
}

const EscalationFormatCard: React.FC<EscalationFormatCardProps> = ({
  format,
}) => {
  const fullText = format.join("\n");

  return (
    <div
      id="escalation-format-card"
      className="rounded-xl border-l-2 border-red-500 bg-[#1a1d27] p-4"
    >
      {/* Header */}
      <h3
        id="escalation-format-card-header"
        className="mb-3 text-sm font-semibold text-red-400"
      >
        🚨 Escalation Format
      </h3>

      {/* Format lines */}
      <div
        id="escalation-format-card-lines"
        className="mb-4 space-y-1.5 rounded-lg bg-[#0f1117] p-3"
      >
        {format.map((line, idx) => (
          <p
            key={idx}
            id={`escalation-format-line-${idx}`}
            className="font-mono text-sm text-[#f1f5f9]"
          >
            {line}
          </p>
        ))}
      </div>

      {/* Copy button */}
      <div className="flex justify-end">
        <CopyButton
          id="escalation-format-card-copy-btn"
          text={fullText}
          label="Copy Escalation Format"
          size="lg"
        />
      </div>
    </div>
  );
};

export default EscalationFormatCard;
