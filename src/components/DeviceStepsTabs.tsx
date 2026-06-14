import { useState } from "react";
import type { DeviceSpecificSteps } from "../types/playbook";

interface DeviceStepsTabsProps {
  deviceSpecificSteps: DeviceSpecificSteps;
}

type DeviceTab = "iphone" | "android" | "general";

interface TabConfig {
  key: DeviceTab;
  label: string;
  icon: string;
}

const allTabs: TabConfig[] = [
  { key: "iphone", label: "iPhone", icon: "📱" },
  { key: "android", label: "Android", icon: "🤖" },
  { key: "general", label: "General", icon: "💻" },
];

const DeviceStepsTabs: React.FC<DeviceStepsTabsProps> = ({ deviceSpecificSteps }) => {
  const availableTabs = allTabs.filter((tab) => {
    const steps = deviceSpecificSteps[tab.key];
    return steps && steps.length > 0;
  });

  const [activeTab, setActiveTab] = useState<DeviceTab>(
    availableTabs.length > 0 ? availableTabs[0].key : "general"
  );

  if (availableTabs.length === 0) {
    return (
      <p className="text-sm text-[#94a3b8]">No device-specific steps available.</p>
    );
  }

  const activeSteps = deviceSpecificSteps[activeTab] ?? [];

  return (
    <div className="overflow-hidden rounded-lg border border-[#2a2e3d] bg-[#1a1d27]">
      {/* Tab bar */}
      <div className="flex border-b border-[#2a2e3d]">
        {availableTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`
              px-4 py-2.5 text-sm font-medium transition
              ${
                activeTab === tab.key
                  ? "border-b-2 border-[#00d4ff] text-[#00d4ff]"
                  : "border-b-2 border-transparent text-[#94a3b8] hover:text-[#f1f5f9]"
              }
            `}
          >
            <span className="mr-1.5">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Steps list */}
      <div className="p-4">
        <ol className="space-y-3">
          {activeSteps.map((step, index) => (
            <li key={index} className="flex gap-3 text-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00d4ff]/10 font-mono text-xs font-semibold text-[#00d4ff]">
                {index + 1}
              </span>
              <span className="pt-0.5 text-[#f1f5f9]">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default DeviceStepsTabs;
