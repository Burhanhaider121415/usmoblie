import type { Playbook } from "../types/playbook";
import { playbooks } from "../data/playbooks";
import CopyButton from "./CopyButton";
import IntentBadge from "./IntentBadge";
import PriorityBadge from "./PriorityBadge";
import DeviceStepsTabs from "./DeviceStepsTabs";

interface PlaybookDetailProps {
  playbook: Playbook;
  onToggleFavorite: (id: string) => void;
  isFavorite: boolean;
  onSelectRelated: (id: string) => void;
  onBackToStart: () => void;
  onBack: () => void;
  showMobileActions?: boolean;
}

// Check if a related playbook ID actually exists in data
function playbookExists(id: string): Playbook | undefined {
  return playbooks.find((p) => p.id === id);
}

export default function PlaybookDetail({
  playbook,
  onToggleFavorite,
  isFavorite,
  onSelectRelated,
  onBackToStart,
  onBack,
  showMobileActions = false,
}: PlaybookDetailProps) {
  const validRelated = playbook.relatedPlaybooks
    .map((id) => ({ id, pb: playbookExists(id) }))
    .filter((r) => r.pb != null);

  return (
    <div
      id="playbook-detail"
      className="space-y-4 overflow-y-auto pb-8"
    >
      {/* ── Back Navigation ────────────────────────────────────── */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="text-sm text-[#94a3b8] hover:text-[#00d4ff] transition-colors flex items-center gap-1"
        >
          ← Back
        </button>
        <span className="text-[#2a2e3d]">|</span>
        <button
          onClick={onBackToStart}
          className="text-sm text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
        >
          Start Here
        </button>
      </div>

      {/* ── Header ─────────────────────────────────────────────── */}
      <div id="playbook-detail-header">
        <div className="flex items-start justify-between gap-3">
          <h1
            id="playbook-detail-title"
            className="text-2xl font-bold text-[#f1f5f9]"
          >
            {playbook.title}
          </h1>

          {/* Star/Favorite — prominent */}
          <button
            id="playbook-detail-favorite-btn"
            type="button"
            onClick={() => onToggleFavorite(playbook.id)}
            className={`
              mt-0.5 flex-shrink-0 text-2xl transition-all hover:scale-110
              ${isFavorite
                ? "text-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.4)]"
                : "text-[#4a5568] hover:text-amber-400"
              }
            `}
            title={isFavorite ? "Unpin playbook" : "Pin playbook"}
          >
            {isFavorite ? "★" : "☆"}
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
            <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-xs font-medium text-amber-400">
              Dummy Data
            </span>
          )}
          {playbook.confidence && playbook.confidence !== "dummy" && (
            <span
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
      <section className="rounded-xl bg-[#242837] p-4">
        <h2 className="mb-2 text-sm font-semibold uppercase text-[#00d4ff]">
          ⚡ Quick Answer
        </h2>
        <p className="text-sm text-[#f1f5f9]">{playbook.quickAnswer}</p>
      </section>

      {/* ── Use When ───────────────────────────────────────────── */}
      <section className="rounded-xl bg-[#242837] p-4">
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
      <section className="rounded-xl bg-[#242837] p-4">
        <h2 className="mb-3 text-sm font-semibold text-[#f1f5f9]">
          ❓ Ask Customer First
        </h2>
        <ol className="space-y-2">
          {playbook.customerQuestions.map((question, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2"
            >
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#0f1117] font-mono text-xs font-bold text-[#00d4ff]">
                {idx + 1}
              </span>
              <span className="flex-1 text-sm text-[#f1f5f9]">
                {question}
              </span>
              <CopyButton text={question} label="Copy" size="sm" />
            </li>
          ))}
        </ol>
      </section>

      {/* ── Quick Steps ────────────────────────────────────────── */}
      <section className="rounded-xl bg-[#242837] p-4">
        <h2 className="mb-3 text-sm font-semibold text-[#f1f5f9]">
          📝 Quick Steps
        </h2>
        <ol className="space-y-2">
          {playbook.quickSteps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-3">
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
        <section>
          <DeviceStepsTabs deviceSpecificSteps={playbook.deviceSpecificSteps} />
        </section>
      )}

      {/* ── Copy Templates ─────────────────────────────────────── */}
      <section className="rounded-xl bg-[#242837] p-4">
        <h2 className="mb-3 text-sm font-semibold text-[#f1f5f9]">
          💬 Copy Templates
        </h2>
        <div className="space-y-3">
          {playbook.copyTemplates.map((template, idx) => (
            <div key={idx}>
              <p className="mb-1 text-sm font-medium text-[#94a3b8]">{template.label}</p>
              <div className="rounded-lg bg-[#0f1117] p-3 font-mono text-sm text-[#f1f5f9]">
                {template.text}
              </div>
              <div className="mt-2 flex justify-end">
                <CopyButton text={template.text} label="Copy Reply" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Zendesk Note ── */}
      {playbook.zendeskNote && (
        <section className="rounded-xl border border-blue-500/20 bg-[#242837] p-4">
          <h2 className="mb-2 text-sm font-semibold text-blue-400">
            📝 Zendesk Internal Note — do not send to customer
          </h2>
          <div className="rounded-lg bg-[#0f1117] p-3">
            <pre className="whitespace-pre-wrap font-mono text-sm text-[#f1f5f9]">
              {playbook.zendeskNote}
            </pre>
          </div>
          <div className="mt-3 flex justify-end">
            <CopyButton text={playbook.zendeskNote} label="Copy Internal Note" />
          </div>
        </section>
      )}

      {/* ── Escalate If ────────────────────────────────────────── */}
      <section className="rounded-xl border border-red-500/20 bg-[#242837] p-4">
        <h2 className="mb-3 text-sm font-semibold text-red-400">
          🚨 Escalate If
        </h2>
        <ul className="space-y-1.5">
          {(playbook.escalation?.neededWhen || playbook.escalationRequiredWhen || []).map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm text-[#f1f5f9]"
            >
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Escalation Format ──────────────────────────────────── */}
      {((playbook.escalation?.summaryTemplate) || (playbook.escalationFormat && playbook.escalationFormat.length > 0)) && (
        <section className="rounded-xl bg-[#242837] p-4">
          <h2 className="mb-3 text-sm font-semibold text-[#f1f5f9]">
            📋 Escalation Summary — internal
          </h2>
          <div className="rounded-lg bg-[#0f1117] p-3">
            <pre className="whitespace-pre-wrap font-mono text-sm text-[#f1f5f9]">
              {playbook.escalation?.summaryTemplate || (playbook.escalationFormat ? playbook.escalationFormat.join("\n") : "")}
            </pre>
          </div>
          <div className="mt-3">
            <CopyButton
              text={playbook.escalation?.summaryTemplate || (playbook.escalationFormat ? playbook.escalationFormat.join("\n") : "")}
              label="Copy Escalation Summary"
              size="lg"
            />
          </div>
        </section>
      )}

      {/* ── Related Playbooks (only existing ones) ─────────────── */}
      {validRelated.length > 0 && (
        <section className="rounded-xl bg-[#242837] p-4">
          <h2 className="mb-3 text-sm font-semibold text-[#f1f5f9]">
            🔗 Related Playbooks
          </h2>
          <div className="flex flex-wrap gap-2">
            {validRelated.map(({ id, pb }) => (
              <button
                key={id}
                type="button"
                onClick={() => onSelectRelated(id)}
                className="rounded-full border border-[#2a2e3d] bg-[#0f1117] px-3 py-1.5 text-xs font-medium text-[#00d4ff] transition-colors hover:border-[#00d4ff]/40 hover:bg-[#242837]"
              >
                {pb!.title}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* ── Needs Internal Verification ── */}
      {playbook.internalVerificationRequired && playbook.internalVerificationRequired.length > 0 && (
        <section className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
          <h2 className="mb-2 text-sm font-semibold text-amber-400 flex items-center gap-2">
            <span>⚠️</span> INTERNAL VERIFICATION REQUIRED
          </h2>
          <ul className="space-y-1 text-xs text-amber-300/90 list-disc list-inside">
            {playbook.internalVerificationRequired.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* ── Mobile Quick Actions (inline on mobile) ────────────── */}
      {showMobileActions && (
        <section className="rounded-xl border border-[#2a2e3d] bg-[#1a1d27] p-4 space-y-4 lg:hidden">
          <h2 className="text-sm font-bold text-[#f1f5f9]">
            Quick Actions
          </h2>

          {/* Quick questions */}
          {playbook.customerQuestions.length > 0 && (
            <div>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a5568]">
                Quick Questions
              </h3>
              <div className="space-y-2">
                {playbook.customerQuestions.slice(0, 3).map((q, idx) => (
                  <div key={idx} className="flex items-start gap-2 rounded-lg bg-[#242837] p-2.5">
                    <span className="flex-1 text-xs text-[#f1f5f9]">{q}</span>
                    <CopyButton text={q} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Copy replies */}
          {playbook.copyTemplates.length > 0 && (
            <div>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a5568]">
                Copy Replies
              </h3>
              <div className="space-y-2">
                {playbook.copyTemplates.map((t, idx) => (
                  <div key={idx} className="rounded-lg bg-[#242837] p-2.5">
                    <p className="mb-1 text-xs font-bold text-[#f1f5f9]">{t.label}</p>
                    <div className="mb-2 rounded bg-[#0f1117] p-2 font-mono text-xs text-[#94a3b8]">
                      {t.text}
                    </div>
                    <div className="flex justify-end">
                      <CopyButton text={t.text} label="Copy" size="sm" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Escalation */}
          {playbook.escalationFormat && playbook.escalationFormat.length > 0 && (
            <CopyButton
              text={playbook.escalationFormat.join("\n")}
              label="Copy Escalation Format"
              size="lg"
            />
          )}
        </section>
      )}
    </div>
  );
}
