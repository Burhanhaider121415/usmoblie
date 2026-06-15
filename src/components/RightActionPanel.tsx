import { useState } from "react";
import type { Playbook } from "../types/playbook";
import CopyButton from "./CopyButton";

interface RightActionPanelProps {
  playbook: Playbook | null;
  onSelectPlaybook?: (id: string) => void;
}

const customerChecklist = [
  "Device model",
  "OS version",
  "eSIM or physical SIM",
  "Network: Warp / Dark Star / Light Speed / Unknown",
  "ZIP / location",
  "Calls working?",
  "Texts working?",
  "Data working?",
  "Hotspot working?",
  "Exact error message?",
  "Trigger: activation / port / Teleport / renewal / device change / travel / sudden",
  "Steps already tried",
];

const fastCopyLines = [
  "I’ll help you check that now.",
  "Can you confirm your device model and whether you’re using eSIM or a physical SIM?",
  "Let’s narrow this down step by step.",
  "I don’t want to repeat steps you already tried, so I’ll check the most likely causes first.",
  "I’m going to document this for escalation with the details we’ve already checked.",
];

const emergencyShortcuts = [
  { id: "no-service-sos-only", label: "No Service & SOS Only", icon: "📶" },
  { id: "bars-but-no-internet-data-not-working", label: "Bars But No Internet / Data Not Working", icon: "🌐" },
  { id: "mms-picture-group-text-fails", label: "MMS / Picture / Group Text Fails", icon: "💬" },
  { id: "porting-delay-old-sim-still-works-bank-codes-missing", label: "Porting Delay / Old SIM Works / Bank Codes", icon: "🔄" },
  { id: "after-teleport-network-switch-nothing-works", label: "After Teleport / Network Switch Nothing Works", icon: "⚡" },
  { id: "slow-data-video-buffering-speed-complaints", label: "Slow Data / Video Buffering / Speed Complaints", icon: "📶" },
  { id: "hotspot-not-working", label: "Hotspot Not Working", icon: "📡" },
  { id: "error-97-invalid-destination-messaging-error", label: "Error 97 / Invalid Destination / Msg Error", icon: "💬" },
];

export default function RightActionPanel({ playbook, onSelectPlaybook }: RightActionPanelProps) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (key: string) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside
      id="right-action-panel"
      className="hidden lg:flex flex-col h-screen w-80 border-l border-[#2a2e3d] bg-[#1a1d27] p-4 space-y-5 overflow-y-auto"
    >
      <h2 className="text-lg font-bold text-[#f1f5f9]">
        Quick Actions
      </h2>

      {/* 1. Customer Info Checklist (Always visible) */}
      <section>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a5568]">
          Customer Info Checklist
        </h3>
        <div className="space-y-1">
          {customerChecklist.map((item, idx) => (
            <label
              key={idx}
              className="flex cursor-pointer items-start gap-2 rounded-lg p-1.5 text-xs text-[#f1f5f9] transition-colors hover:bg-[#242837]"
            >
              <input
                type="checkbox"
                checked={!!checkedItems[`checklist-${idx}`]}
                onChange={() => toggleCheck(`checklist-${idx}`)}
                className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 rounded border-[#2a2e3d] bg-[#0f1117] accent-[#00d4ff]"
              />
              <span className={checkedItems[`checklist-${idx}`] ? "line-through text-[#4a5568]" : ""}>
                {item}
              </span>
            </label>
          ))}
        </div>
      </section>

      {/* 2. Fast Copy Lines (Always visible) */}
      <section>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a5568]">
          Fast Copy Lines
        </h3>
        <div className="space-y-2">
          {fastCopyLines.map((line, idx) => (
            <div key={idx} className="rounded-lg bg-[#242837] p-2.5">
              <div className="flex items-start justify-between gap-2">
                <p className="text-xs text-[#94a3b8] flex-1">{line}</p>
                <CopyButton text={line} size="sm" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Dynamic Section (Based on selected playbook) */}
      {playbook ? (
        <>
          {/* Top 2 Copy Templates */}
          {playbook.copyTemplates.length > 0 && (
            <section>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a5568]">
                Playbook Replies
              </h3>
              <div className="space-y-3">
                {playbook.copyTemplates.slice(0, 2).map((template, idx) => (
                  <div key={idx} className="rounded-lg bg-[#242837] p-2.5">
                    <p className="mb-1 text-[10px] font-bold text-[#f1f5f9] uppercase tracking-wider">
                      {template.label}
                    </p>
                    <div className="mb-2 rounded bg-[#0f1117] p-2 font-mono text-xs text-[#94a3b8] line-clamp-4">
                      {template.text}
                    </div>
                    <div className="flex justify-end">
                      <CopyButton text={template.text} size="sm" label="Copy" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Escalation Quick Check */}
          {(playbook.escalation?.neededWhen.length || playbook.escalationRequiredWhen.length) > 0 && (
            <section>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a5568]">
                Escalation Checklist
              </h3>
              <div className="space-y-1.5">
                {(playbook.escalation?.neededWhen || playbook.escalationRequiredWhen || []).slice(0, 3).map((item, idx) => (
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
              {(playbook.escalation?.summaryTemplate || (playbook.escalationFormat && playbook.escalationFormat.length > 0)) && (
                <div className="mt-3">
                  <CopyButton
                    text={playbook.escalation?.summaryTemplate || (playbook.escalationFormat ? playbook.escalationFormat.join("\n") : "")}
                    label="Copy Escalation Summary"
                    size="lg"
                  />
                </div>
              )}
            </section>
          )}

          {/* Related shortcuts */}
          {playbook.relatedPlaybooks.length > 0 && (
            <section>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#4a5568]">
                Related Playbooks
              </h3>
              <div className="space-y-1">
                {playbook.relatedPlaybooks.map((relatedId) => (
                  <button
                    key={relatedId}
                    type="button"
                    onClick={() => onSelectPlaybook?.(relatedId)}
                    className="block w-full text-left text-xs text-[#00d4ff] transition-colors hover:text-[#00d4ff]/80 hover:underline py-0.5 truncate"
                  >
                    {relatedId}
                  </button>
                ))}
              </div>
            </section>
          )}
        </>
      ) : (
        /* Default: Emergency Shortcuts */
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
                className="w-full flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-[#f1f5f9] hover:bg-[#242837] transition-colors text-left"
              >
                <span>{shortcut.icon}</span>
                <span className="truncate">{shortcut.label}</span>
              </button>
            ))}
          </div>
        </section>
      )}
    </aside>
  );
}
