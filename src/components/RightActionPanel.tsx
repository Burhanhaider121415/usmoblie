import { useState } from "react";
import type { Playbook } from "../types/playbook";
import CopyButton from "./CopyButton";

interface RightActionPanelProps {
  playbook: Playbook | null;
  onSelectPlaybook?: (id: string) => void;
}

const customerChecklist = [
  "Device model",
  "eSIM or physical SIM",
  "ZIP / location",
  "Calls working?",
  "Texts working?",
  "Data working?",
  "Error message?",
  "Started after activation / port / device change?",
];

const fastCopyLines = [
  { label: "Acknowledge", text: "I'll help you check that now." },
  { label: "Ask device info", text: "Can you confirm your device model and whether you're using eSIM or a physical SIM?" },
  { label: "Step-by-step", text: "Let's narrow this down step by step." },
  { label: "Escalation prep", text: "I'm going to prepare this for escalation with the details we checked." },
];

const emergencyShortcuts = [
  { id: "mobile-data-not-working", label: "Mobile Data Not Working", icon: "📶" },
  { id: "no-service", label: "No Service / No Signal", icon: "🚫" },
  { id: "esim-activation", label: "eSIM Activation Issue", icon: "💳" },
  { id: "escalation-format", label: "Escalation Format", icon: "🚨" },
];

export default function RightActionPanel({ playbook, onSelectPlaybook }: RightActionPanelProps) {
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (key: string) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // ── Default State: Quick Actions ──────────────────────────
  if (!playbook) {
    return (
      <aside
        id="right-action-panel"
        className="hidden lg:flex flex-col h-screen w-80 border-l border-[#2a2e3d] bg-[#1a1d27] p-4 space-y-5 overflow-y-auto"
      >
        <h2 className="text-lg font-bold text-[#f1f5f9]">
          Quick Actions
        </h2>
        <p className="text-xs text-[#4a5568]">
          Open an issue to see quick questions, copy replies, and escalation steps.
        </p>

        {/* Customer Info Checklist */}
        <section>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a5568]">
            Customer Info Checklist
          </h3>
          <div className="space-y-1">
            {customerChecklist.map((item, idx) => (
              <label
                key={idx}
                className="flex cursor-pointer items-center gap-2 rounded-lg p-2 text-xs text-[#f1f5f9] transition-colors hover:bg-[#242837]"
              >
                <input
                  type="checkbox"
                  checked={!!checkedItems[`checklist-${idx}`]}
                  onChange={() => toggleCheck(`checklist-${idx}`)}
                  className="h-3.5 w-3.5 flex-shrink-0 rounded border-[#2a2e3d] bg-[#0f1117] accent-[#00d4ff]"
                />
                <span className={checkedItems[`checklist-${idx}`] ? "line-through text-[#4a5568]" : ""}>
                  {item}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* Fast Copy Lines */}
        <section>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a5568]">
            Fast Copy Lines
          </h3>
          <div className="space-y-2">
            {fastCopyLines.map((line, idx) => (
              <div key={idx} className="rounded-lg bg-[#242837] p-2.5">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-xs text-[#94a3b8] flex-1">{line.text}</p>
                  <CopyButton text={line.text} size="sm" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency Shortcuts */}
        <section>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a5568]">
            Emergency Shortcuts
          </h3>
          <div className="space-y-1">
            {emergencyShortcuts.map((shortcut) => (
              <button
                key={shortcut.id}
                type="button"
                onClick={() => onSelectPlaybook?.(shortcut.id)}
                className="w-full flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-[#f1f5f9] hover:bg-[#242837] transition-colors text-left"
              >
                <span>{shortcut.icon}</span>
                <span>{shortcut.label}</span>
              </button>
            ))}
          </div>
        </section>
      </aside>
    );
  }

  // ── Playbook-Specific Panel ───────────────────────────────
  const visibleQuestions = showAllQuestions
    ? playbook.customerQuestions
    : playbook.customerQuestions.slice(0, 3);

  const hasMoreQuestions = playbook.customerQuestions.length > 3;

  return (
    <aside
      id="right-action-panel"
      className="hidden lg:flex flex-col h-screen w-80 overflow-y-auto border-l border-[#2a2e3d] bg-[#1a1d27] p-4 space-y-5"
    >
      {/* Header */}
      <h2 className="text-lg font-bold text-[#f1f5f9]">
        Ask / Check / Copy
      </h2>

      {/* Quick Questions */}
      {playbook.customerQuestions.length > 0 && (
        <section>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a5568]">
            Quick Questions
          </h3>
          <div className="space-y-2">
            {visibleQuestions.map((question, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 rounded-lg bg-[#242837] p-2.5"
              >
                <span className="flex-1 text-xs text-[#f1f5f9]">{question}</span>
                <CopyButton text={question} size="sm" />
              </div>
            ))}
          </div>
          {hasMoreQuestions && (
            <button
              type="button"
              onClick={() => setShowAllQuestions(!showAllQuestions)}
              className="mt-2 text-xs font-medium text-[#00d4ff] transition-colors hover:text-[#00d4ff]/80"
            >
              {showAllQuestions
                ? "Show fewer"
                : `Show all (${playbook.customerQuestions.length})`}
            </button>
          )}
        </section>
      )}

      {/* Quick Checks */}
      <section>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a5568]">
          Quick Checks
        </h3>
        <div className="space-y-1.5">
          {playbook.quickSteps.slice(0, 3).map((step, idx) => (
            <label
              key={idx}
              className="flex cursor-pointer items-start gap-2 rounded-lg p-2 text-xs text-[#f1f5f9] transition-colors hover:bg-[#242837]"
            >
              <input
                type="checkbox"
                checked={!!checkedItems[`step-${idx}`]}
                onChange={() => toggleCheck(`step-${idx}`)}
                className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 rounded border-[#2a2e3d] bg-[#0f1117] accent-[#00d4ff]"
              />
              <span className={checkedItems[`step-${idx}`] ? "line-through text-[#4a5568]" : ""}>
                {step}
              </span>
            </label>
          ))}
        </div>
      </section>

      {/* Copy Replies */}
      {playbook.copyTemplates.length > 0 && (
        <section>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a5568]">
            Copy Replies
          </h3>
          <div className="space-y-3">
            {playbook.copyTemplates.map((template, idx) => (
              <div key={idx} className="rounded-lg bg-[#242837] p-2.5">
                <p className="mb-1.5 text-xs font-bold text-[#f1f5f9]">
                  {template.label}
                </p>
                <div className="mb-2 rounded bg-[#0f1117] p-2 font-mono text-xs text-[#94a3b8]">
                  {template.text}
                </div>
                <div className="flex justify-end">
                  <CopyButton text={template.text} size="sm" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Escalation Quick Check */}
      {playbook.escalationRequiredWhen.length > 0 && (
        <section>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a5568]">
            Escalation Quick Check
          </h3>
          <div className="space-y-1.5">
            {playbook.escalationRequiredWhen.map((item, idx) => (
              <label
                key={idx}
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
                text={playbook.escalationFormat.join("\n")}
                label="Copy Escalation Format"
                size="lg"
              />
            </div>
          )}
        </section>
      )}

      {/* Related */}
      {playbook.relatedPlaybooks.length > 0 && (
        <section>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a5568]">
            Related
          </h3>
          <div className="space-y-1">
            {playbook.relatedPlaybooks.map((relatedId) => (
              <button
                key={relatedId}
                type="button"
                onClick={() => onSelectPlaybook?.(relatedId)}
                className="block w-full text-left text-xs text-[#00d4ff] transition-colors hover:text-[#00d4ff]/80 hover:underline py-0.5"
              >
                {relatedId}
              </button>
            ))}
          </div>
        </section>
      )}
    </aside>
  );
}
