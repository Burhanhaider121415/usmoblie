import type { Playbook } from "../types/playbook";
import CopyButton from "./CopyButton";
import IntentBadge from "./IntentBadge";
import PriorityBadge from "./PriorityBadge";
import DeviceStepsTabs from "./DeviceStepsTabs";

interface PlaybookDetailProps {
  playbook: Playbook;
  onToggleFavorite: (id: string) => void;
  isFavorite: boolean;
  onSelectRelated: (id: string) => void;
}

const PlaybookDetail: React.FC<PlaybookDetailProps> = ({
  playbook,
  onToggleFavorite,
  isFavorite,
  onSelectRelated,
}) => {

  return (
    <div
      id="playbook-detail"
      className="space-y-4 overflow-y-auto pb-8"
    >
      {/* ── Header ─────────────────────────────────────────────── */}
      <div id="playbook-detail-header">
        <div className="flex items-start justify-between gap-3">
          <h1
            id="playbook-detail-title"
            className="text-2xl font-bold text-[#f1f5f9]"
          >
            {playbook.title}
          </h1>

          <button
            id="playbook-detail-favorite-btn"
            type="button"
            onClick={() => onToggleFavorite(playbook.id)}
            className="mt-1 flex-shrink-0 text-xl transition-colors hover:scale-110"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            {isFavorite ? (
              <span className="text-amber-400">★</span>
            ) : (
              <span className="text-[#4a5568] hover:text-amber-400">☆</span>
            )}
          </button>
        </div>

        {/* Pills row */}
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span
            id="playbook-detail-category"
            className="rounded-full bg-[#242837] px-3 py-1 text-xs font-medium text-[#94a3b8]"
          >
            {playbook.category}
          </span>

          {playbook.priority && (
            <PriorityBadge priority={playbook.priority} />
          )}

          {playbook.intent.map((intent) => (
            <IntentBadge key={intent} intent={intent} />
          ))}
        </div>

        {/* Last Updated + Confidence */}
        <div className="mt-2 flex items-center gap-3 text-xs text-[#94a3b8]">
          {playbook.lastUpdated && (
            <span id="playbook-detail-last-updated">
              Updated: {playbook.lastUpdated}
            </span>
          )}
          {playbook.confidence === "dummy" && (
            <span
              id="playbook-detail-confidence-badge"
              className="rounded-full bg-amber-500/15 px-2 py-0.5 text-xs font-medium text-amber-400"
            >
              Dummy Data
            </span>
          )}
          {playbook.confidence && playbook.confidence !== "dummy" && (
            <span
              id="playbook-detail-confidence-badge"
              className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                playbook.confidence === "verified"
                  ? "bg-green-500/15 text-green-400"
                  : "bg-[#242837] text-[#94a3b8]"
              }`}
            >
              {playbook.confidence.charAt(0).toUpperCase() +
                playbook.confidence.slice(1)}
            </span>
          )}
        </div>
      </div>

      {/* ── Quick Answer ───────────────────────────────────────── */}
      <section
        id="playbook-detail-quick-answer"
        className="rounded-xl bg-[#242837] p-4"
      >
        <h2 className="mb-2 text-sm font-semibold uppercase text-[#00d4ff]">
          ⚡ Quick Answer
        </h2>
        <p className="text-sm text-[#f1f5f9]">{playbook.quickAnswer}</p>
      </section>

      {/* ── Use When ───────────────────────────────────────────── */}
      <section
        id="playbook-detail-use-when"
        className="rounded-xl bg-[#242837] p-4"
      >
        <h2 className="mb-2 text-sm font-semibold text-[#f1f5f9]">
          📋 Use When
        </h2>
        <p className="text-sm text-[#94a3b8]">{playbook.useWhen}</p>
        {playbook.doNotUseWhen && (
          <div className="mt-3 flex items-start gap-2">
            <span className="text-amber-400">⚠️</span>
            <p className="text-sm text-amber-400">{playbook.doNotUseWhen}</p>
          </div>
        )}
      </section>

      {/* ── Ask Customer First ─────────────────────────────────── */}
      <section
        id="playbook-detail-customer-questions"
        className="rounded-xl bg-[#242837] p-4"
      >
        <h2 className="mb-3 text-sm font-semibold text-[#f1f5f9]">
          ❓ Ask Customer First
        </h2>
        <ol className="space-y-2">
          {playbook.customerQuestions.map((question, idx) => (
            <li
              key={idx}
              id={`playbook-detail-question-${idx}`}
              className="flex items-start gap-2"
            >
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#0f1117] font-mono text-xs font-bold text-[#00d4ff]">
                {idx + 1}
              </span>
              <span className="flex-1 text-sm text-[#f1f5f9]">
                {question}
              </span>
              <CopyButton
                id={`playbook-detail-copy-question-${idx}`}
                text={question}
              />
            </li>
          ))}
        </ol>
      </section>

      {/* ── Quick Steps ────────────────────────────────────────── */}
      <section
        id="playbook-detail-quick-steps"
        className="rounded-xl bg-[#242837] p-4"
      >
        <h2 className="mb-3 text-sm font-semibold text-[#f1f5f9]">
          📝 Quick Steps
        </h2>
        <ol className="space-y-2">
          {playbook.quickSteps.map((step, idx) => (
            <li
              key={idx}
              id={`playbook-detail-step-${idx}`}
              className="flex items-start gap-3"
            >
              <span className="font-mono font-bold text-[#00d4ff]">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-[#f1f5f9]">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Device-Specific Steps ──────────────────────────────── */}
      {playbook.deviceSpecificSteps && (
        <section id="playbook-detail-device-steps">
          <DeviceStepsTabs deviceSpecificSteps={playbook.deviceSpecificSteps} />
        </section>
      )}

      {/* ── Copy Templates ─────────────────────────────────────── */}
      <section
        id="playbook-detail-copy-templates"
        className="rounded-xl bg-[#242837] p-4"
      >
        <h2 className="mb-3 text-sm font-semibold text-[#f1f5f9]">
          💬 Copy Templates
        </h2>
        <div className="space-y-3">
          {playbook.copyTemplates.map((template, idx) => (
            <div key={idx} id={`playbook-detail-template-${idx}`}>
              <p className="mb-1 text-sm text-[#94a3b8]">{template.label}</p>
              <div className="flex items-start gap-2">
                <div className="flex-1 rounded-lg bg-[#0f1117] p-3 font-mono text-sm text-[#f1f5f9]">
                  {template.text}
                </div>
                <CopyButton
                  id={`playbook-detail-copy-template-${idx}`}
                  text={template.text}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Escalate If ────────────────────────────────────────── */}
      <section
        id="playbook-detail-escalate-if"
        className="rounded-xl border border-red-500/20 bg-[#242837] p-4"
      >
        <h2 className="mb-3 text-sm font-semibold text-red-400">
          🚨 Escalate If
        </h2>
        <ul className="space-y-1.5">
          {playbook.escalationRequiredWhen.map((item, idx) => (
            <li
              key={idx}
              id={`playbook-detail-escalation-item-${idx}`}
              className="flex items-start gap-2 text-sm text-[#f1f5f9]"
            >
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Escalation Format ──────────────────────────────────── */}
      {playbook.escalationFormat && playbook.escalationFormat.length > 0 && (
        <section
          id="playbook-detail-escalation-format"
          className="rounded-xl bg-[#242837] p-4"
        >
          <h2 className="mb-3 text-sm font-semibold text-[#f1f5f9]">
            📋 Escalation Format
          </h2>
          <div className="rounded-lg bg-[#0f1117] p-3">
            <pre className="whitespace-pre-wrap font-mono text-sm text-[#f1f5f9]">
              {playbook.escalationFormat.join("\n")}
            </pre>
          </div>
          <div className="mt-3 flex justify-end">
            <CopyButton
              id="playbook-detail-copy-escalation-format"
              text={playbook.escalationFormat.join("\n")}
              label="Copy Escalation Format"
              size="lg"
            />
          </div>
        </section>
      )}

      {/* ── Related Playbooks ──────────────────────────────────── */}
      {playbook.relatedPlaybooks.length > 0 && (
        <section
          id="playbook-detail-related"
          className="rounded-xl bg-[#242837] p-4"
        >
          <h2 className="mb-3 text-sm font-semibold text-[#f1f5f9]">
            🔗 Related Playbooks
          </h2>
          <div className="flex flex-wrap gap-2">
            {playbook.relatedPlaybooks.map((relatedId) => (
              <button
                key={relatedId}
                id={`playbook-detail-related-${relatedId}`}
                type="button"
                onClick={() => onSelectRelated(relatedId)}
                className="rounded-full border border-[#2a2e3d] bg-[#0f1117] px-3 py-1.5 text-xs font-medium text-[#00d4ff] transition-colors hover:border-[#00d4ff]/40 hover:bg-[#242837]"
              >
                {relatedId}
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default PlaybookDetail;
