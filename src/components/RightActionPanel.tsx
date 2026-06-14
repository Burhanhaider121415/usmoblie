import { useState } from "react";
import type { Playbook } from "../types/playbook";
import CopyButton from "./CopyButton";

interface RightActionPanelProps {
  playbook: Playbook | null;
}

const RightActionPanel: React.FC<RightActionPanelProps> = ({ playbook }) => {
  const [showAllQuestions, setShowAllQuestions] = useState(false);

  if (!playbook) {
    return (
      <aside
        id="right-action-panel"
        className="flex h-screen w-80 items-center justify-center border-l border-[#2a2e3d] bg-[#1a1d27] p-4"
      >
        <p className="text-center text-sm text-[#4a5568]">
          Select a playbook to see actions
        </p>
      </aside>
    );
  }

  const visibleQuestions = showAllQuestions
    ? playbook.customerQuestions
    : playbook.customerQuestions.slice(0, 3);

  const hasMoreQuestions = playbook.customerQuestions.length > 3;

  return (
    <aside
      id="right-action-panel"
      className="h-screen w-80 overflow-y-auto border-l border-[#2a2e3d] bg-[#1a1d27] p-4 space-y-5"
    >
      {/* ── Header ──────────────────────────────────────────────── */}
      <h2
        id="right-panel-header"
        className="text-lg font-bold text-[#f1f5f9]"
      >
        Ask / Check / Copy
      </h2>

      {/* ── Quick Questions ─────────────────────────────────────── */}
      <section id="right-panel-quick-questions">
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a5568]">
          Quick Questions
        </h3>
        <div className="space-y-2">
          {visibleQuestions.map((question, idx) => (
            <div
              key={idx}
              id={`right-panel-question-${idx}`}
              className="flex items-start gap-2 rounded-lg bg-[#242837] p-2.5"
            >
              <span className="flex-1 text-xs text-[#f1f5f9]">{question}</span>
              <CopyButton
                id={`right-panel-copy-question-${idx}`}
                text={question}
              />
            </div>
          ))}
        </div>
        {hasMoreQuestions && !showAllQuestions && (
          <button
            id="right-panel-show-all-questions"
            type="button"
            onClick={() => setShowAllQuestions(true)}
            className="mt-2 text-xs font-medium text-[#00d4ff] transition-colors hover:text-[#00d4ff]/80"
          >
            Show all ({playbook.customerQuestions.length})
          </button>
        )}
        {hasMoreQuestions && showAllQuestions && (
          <button
            id="right-panel-show-fewer-questions"
            type="button"
            onClick={() => setShowAllQuestions(false)}
            className="mt-2 text-xs font-medium text-[#00d4ff] transition-colors hover:text-[#00d4ff]/80"
          >
            Show fewer
          </button>
        )}
      </section>

      {/* ── Quick Checks ────────────────────────────────────────── */}
      <section id="right-panel-quick-checks">
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a5568]">
          Quick Checks
        </h3>
        <div className="space-y-1.5">
          {playbook.quickSteps.slice(0, 3).map((step, idx) => (
            <label
              key={idx}
              id={`right-panel-check-${idx}`}
              className="flex cursor-pointer items-start gap-2 rounded-lg p-2 text-xs text-[#f1f5f9] transition-colors hover:bg-[#242837]"
            >
              <input
                type="checkbox"
                className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 rounded border-[#2a2e3d] bg-[#0f1117] accent-[#00d4ff]"
              />
              <span>{step}</span>
            </label>
          ))}
        </div>
      </section>

      {/* ── Copy Replies ────────────────────────────────────────── */}
      <section id="right-panel-copy-replies">
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a5568]">
          Copy Replies
        </h3>
        <div className="space-y-3">
          {playbook.copyTemplates.map((template, idx) => (
            <div
              key={idx}
              id={`right-panel-template-${idx}`}
              className="rounded-lg bg-[#242837] p-2.5"
            >
              <p className="mb-1.5 text-xs font-bold text-[#f1f5f9]">
                {template.label}
              </p>
              <div className="mb-2 rounded bg-[#0f1117] p-2 font-mono text-xs text-[#94a3b8]">
                {template.text}
              </div>
              <div className="flex justify-end">
                <CopyButton
                  id={`right-panel-copy-template-${idx}`}
                  text={template.text}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Escalation Quick Check ──────────────────────────────── */}
      <section id="right-panel-escalation">
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a5568]">
          Escalation Quick Check
        </h3>
        <div className="space-y-1.5">
          {playbook.escalationRequiredWhen.map((item, idx) => (
            <label
              key={idx}
              id={`right-panel-escalation-check-${idx}`}
              className="flex cursor-pointer items-start gap-2 rounded-lg bg-red-500/5 p-2 text-xs text-red-300 transition-colors hover:bg-red-500/10"
            >
              <input
                type="checkbox"
                className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 rounded border-red-500/30 bg-[#0f1117] accent-red-500"
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
        {playbook.escalationFormat && playbook.escalationFormat.length > 0 && (
          <div className="mt-3">
            <CopyButton
              id="right-panel-copy-escalation-format"
              text={playbook.escalationFormat.join("\n")}
              label="Copy Escalation Format"
              size="lg"
            />
          </div>
        )}
      </section>

      {/* ── Related ─────────────────────────────────────────────── */}
      {playbook.relatedPlaybooks.length > 0 && (
        <section id="right-panel-related">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a5568]">
            Related
          </h3>
          <div className="space-y-1">
            {playbook.relatedPlaybooks.map((relatedId) => (
              <button
                key={relatedId}
                id={`right-panel-related-${relatedId}`}
                type="button"
                className="block w-full text-left text-xs text-[#00d4ff] transition-colors hover:text-[#00d4ff]/80 hover:underline"
              >
                {relatedId}
              </button>
            ))}
          </div>
        </section>
      )}
    </aside>
  );
};

export default RightActionPanel;
