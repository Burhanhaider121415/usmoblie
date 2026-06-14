import type { Playbook, Category } from "../types/playbook";

// ============================================================
// DUMMY PROTOTYPE DATA — Replace with verified internal playbooks later.
// None of this content represents real US Mobile policies.
// ============================================================

export const categories: Category[] = [
  { id: "start-here", label: "Start Here", icon: "🚀" },
  { id: "network-signal", label: "Network / Signal", icon: "📶" },
  { id: "apn-data", label: "APN / Data", icon: "🌐" },
  { id: "esim-sim", label: "eSIM / SIM", icon: "💳" },
  { id: "activation", label: "Activation", icon: "⚡" },
  { id: "port-in-out", label: "Port-In / Port-Out", icon: "🔄" },
  { id: "plans-billing", label: "Plans / Billing", icon: "💲" },
  { id: "devices", label: "Devices", icon: "📱" },
  { id: "hotspot", label: "Hotspot", icon: "📡" },
  { id: "international-roaming", label: "International / Roaming", icon: "🌍" },
  { id: "troubleshooting", label: "Troubleshooting", icon: "🔧" },
  { id: "escalations", label: "Escalations", icon: "🚨" },
  { id: "reply-templates", label: "Reply Templates", icon: "💬" },
  { id: "glossary", label: "Glossary", icon: "📖" },
];

export const playbooks: Playbook[] = [
  // ── 1. APN Setup — iPhone ──────────────────────────────────
  {
    id: "apn-iphone",
    title: "APN Setup — iPhone",
    category: "apn-data",
    priority: "important",
    aliases: [
      "internet settings",
      "cellular data settings",
      "mobile data setup",
      "carrier settings",
    ],
    keywords: ["APN", "data", "LTE", "5G", "iPhone", "internet"],
    symptoms: [
      "mobile data not working",
      "LTE showing but no internet",
      "apps not loading",
      "slow data",
    ],
    intent: ["Troubleshoot", "Ask Customer", "Fix", "Template"],
    useWhen:
      "Use when a customer on iPhone reports mobile data issues and APN/data settings may need checking.",
    doNotUseWhen:
      "Do not use as final official policy. This is dummy prototype content.",
    quickAnswer:
      "Check device model, SIM type, data status, and whether calls/texts work. Then guide the customer through cellular settings and network reset if needed.",
    customerQuestions: [
      "What iPhone model are you using?",
      "Are you using eSIM or physical SIM?",
      "Are calls and texts working?",
      "Do you see LTE or 5G at the top?",
      "Did this start after activation, plan change, or device change?",
    ],
    quickSteps: [
      "Confirm device model and SIM type.",
      "Confirm whether calls/texts work.",
      "Ask the customer to toggle Airplane Mode on and off.",
      "Ask the customer to restart the phone.",
      "Guide the customer to check cellular data settings.",
      "If still not resolved, try network reset or escalate based on internal rules.",
    ],
    deviceSpecificSteps: {
      iphone: [
        "Open Settings.",
        "Tap Cellular.",
        "Confirm Cellular Data is enabled.",
        "Check the selected line if using dual SIM.",
        "Restart device after any setting change.",
      ],
      android: [],
      general: [
        "Confirm coverage area.",
        "Check if issue is data-only or all service.",
      ],
    },
    copyTemplates: [
      {
        label: "Ask device and SIM type",
        text: "Can you please confirm your phone model and whether you're using eSIM or a physical SIM?",
      },
      {
        label: "Start troubleshooting",
        text: "Thanks. Let's check the basics first so we can narrow this down quickly.",
      },
      {
        label: "Escalation transition",
        text: "I've checked the main troubleshooting steps. I'm going to prepare this for escalation with the required details.",
      },
    ],
    escalationRequiredWhen: [
      "Customer has completed basic troubleshooting and issue remains.",
      "Multiple services are affected.",
      "Issue started after activation or port-in.",
      "Customer reports repeated failure after restart/network reset.",
    ],
    escalationFormat: [
      "Customer issue:",
      "Device model:",
      "SIM type:",
      "Service affected:",
      "Location/ZIP:",
      "Steps already tried:",
      "Error message, if any:",
      "Requested next action:",
    ],
    relatedPlaybooks: [
      "mobile-data-not-working",
      "no-service",
      "esim-activation",
    ],
    sourceDoc: "Dummy prototype data",
    lastUpdated: "Prototype",
    confidence: "dummy",
  },

  // ── 2. APN Setup — Android ─────────────────────────────────
  {
    id: "apn-android",
    title: "APN Setup — Android",
    category: "apn-data",
    priority: "important",
    aliases: [
      "access point name",
      "android data settings",
      "mobile data setup android",
      "carrier settings android",
    ],
    keywords: ["APN", "data", "LTE", "5G", "Android", "internet", "Samsung", "Pixel"],
    symptoms: [
      "mobile data not working on Android",
      "no internet on Android",
      "LTE but no data Android",
      "APN not set",
    ],
    intent: ["Troubleshoot", "Ask Customer", "Fix", "Template"],
    useWhen:
      "Use when an Android customer reports mobile data issues and APN settings may need checking or manual entry.",
    doNotUseWhen:
      "Do not use as final official policy. This is dummy prototype content.",
    quickAnswer:
      "Confirm device model, SIM type, and data status. Guide the customer to Settings > Connections > Mobile Networks > Access Point Names. If APN is missing or incorrect, add the correct APN values.",
    customerQuestions: [
      "What Android device are you using? (brand and model)",
      "Are you using a physical SIM or eSIM?",
      "Are calls and texts working?",
      "Do you see LTE or 5G in your status bar?",
      "Have you changed your SIM, device, or plan recently?",
    ],
    quickSteps: [
      "Confirm device model and SIM type.",
      "Ask if calls/texts work.",
      "Toggle Airplane Mode on/off.",
      "Restart device.",
      "Navigate to APN settings and verify entries.",
      "If APN is missing, add the correct values manually.",
      "Restart device after APN changes.",
    ],
    deviceSpecificSteps: {
      iphone: [],
      android: [
        "Open Settings.",
        "Tap Connections or Network & Internet.",
        "Tap Mobile Networks.",
        "Tap Access Point Names.",
        "Check if correct APN is selected.",
        "If missing, tap + to add new APN.",
        "Enter dummy APN values (replace with real values later).",
        "Save and select the new APN.",
        "Restart device.",
      ],
      general: [
        "Confirm coverage area.",
        "Check if issue is data-only or all service.",
      ],
    },
    copyTemplates: [
      {
        label: "Ask Android model",
        text: "Could you tell me the brand and model of your Android device? For example, Samsung Galaxy S24 or Google Pixel 8.",
      },
      {
        label: "Guide to APN settings",
        text: "Let's check your APN settings. Go to Settings > Connections > Mobile Networks > Access Point Names. Can you tell me what's listed there?",
      },
      {
        label: "APN added confirmation",
        text: "Great, the APN has been updated. Please restart your device and let me know if mobile data starts working.",
      },
    ],
    escalationRequiredWhen: [
      "APN is correctly set but data still doesn't work.",
      "Customer cannot access APN settings.",
      "Issue persists after restart and APN correction.",
    ],
    escalationFormat: [
      "Customer issue:",
      "Device model:",
      "SIM type:",
      "APN values currently set:",
      "Service affected:",
      "Location/ZIP:",
      "Steps already tried:",
      "Error message, if any:",
      "Requested next action:",
    ],
    relatedPlaybooks: [
      "apn-iphone",
      "mobile-data-not-working",
      "no-service",
    ],
    sourceDoc: "Dummy prototype data",
    lastUpdated: "Prototype",
    confidence: "dummy",
  },

  // ── 3. QCI / Network Priority Explanation ───────────────────
  {
    id: "qci-priority",
    title: "QCI / Network Priority Explanation",
    category: "network-signal",
    priority: "normal",
    aliases: [
      "QCI",
      "network priority",
      "data priority",
      "deprioritization",
      "congestion",
      "priority codes",
    ],
    keywords: [
      "QCI",
      "priority",
      "deprioritization",
      "congestion",
      "network",
      "speed",
      "throttle",
    ],
    symptoms: [
      "slow data during peak hours",
      "data speed drops sometimes",
      "customer asking about priority",
      "customer comparing speeds",
    ],
    intent: ["Explain", "Template"],
    useWhen:
      "Use when a customer asks about network priority, QCI values, or why their data seems slower at certain times.",
    doNotUseWhen:
      "Do not use as final official policy. This is dummy prototype content.",
    quickAnswer:
      "QCI (QoS Class Identifier) determines network priority level. Higher priority means less likely to experience slowdowns during congestion. Different plans may have different priority levels. This is standard across all carriers using the same network.",
    customerQuestions: [
      "What plan are you currently on?",
      "Are you experiencing slow data at specific times or locations?",
      "How much data have you used this billing cycle?",
    ],
    quickSteps: [
      "Identify customer's current plan.",
      "Explain that QCI determines data priority on the network.",
      "Clarify that during congestion, higher-priority traffic is served first.",
      "If customer wants higher priority, explain plan options.",
      "If speeds are consistently slow regardless of time, look into other causes.",
    ],
    deviceSpecificSteps: {
      general: [
        "This is a network-level setting, not device-specific.",
        "No device configuration is needed for QCI.",
      ],
    },
    copyTemplates: [
      {
        label: "Explain QCI simply",
        text: "QCI stands for QoS Class Identifier — it's a technical way of describing your data priority on the network. During busy times, higher-priority plans get served first. It doesn't mean your data is blocked, just that it may be temporarily slower if the network is congested in your area.",
      },
      {
        label: "Suggest plan upgrade",
        text: "If network priority is important to you, there may be plan options that offer higher priority. Would you like me to go over those?",
      },
    ],
    escalationRequiredWhen: [
      "Customer reports consistently slow speeds regardless of time or location.",
      "Customer disputes their priority level.",
      "Customer requests specific QCI value change.",
    ],
    relatedPlaybooks: [
      "mobile-data-not-working",
      "no-service",
      "hotspot-not-working",
    ],
    sourceDoc: "Dummy prototype data",
    lastUpdated: "Prototype",
    confidence: "dummy",
  },

  // ── 4. Mobile Data Not Working ──────────────────────────────
  {
    id: "mobile-data-not-working",
    title: "Mobile Data Not Working",
    category: "troubleshooting",
    priority: "critical",
    aliases: [
      "no data",
      "no internet",
      "internet not working",
      "data not connecting",
      "can't browse",
      "apps not loading",
    ],
    keywords: [
      "data",
      "internet",
      "mobile data",
      "LTE",
      "5G",
      "no connection",
      "offline",
    ],
    symptoms: [
      "customer says internet not working",
      "apps won't load",
      "browser says no connection",
      "LTE/5G showing but no actual data",
      "data works on wifi but not cellular",
    ],
    intent: ["Troubleshoot", "Ask Customer", "Fix", "Escalate"],
    useWhen:
      "Use when a customer reports that their mobile data or internet is not working on their device.",
    doNotUseWhen:
      "Do not use as final official policy. This is dummy prototype content.",
    quickAnswer:
      "Start with the basics: confirm device, SIM type, whether calls/texts work, then walk through airplane mode toggle, restart, check data settings, and APN. Escalate if basic steps don't resolve.",
    customerQuestions: [
      "What device are you using?",
      "Are you on eSIM or physical SIM?",
      "Are calls and texts working?",
      "Do you see any signal bars or indicator (LTE/5G)?",
      "Did this start suddenly or after a change (new SIM, new device, plan change)?",
      "Have you tried restarting your phone?",
    ],
    quickSteps: [
      "Confirm device and SIM type.",
      "Check if calls/texts work (isolate data-only issue).",
      "Toggle Airplane Mode on and off.",
      "Restart the device.",
      "Confirm mobile data is enabled in device settings.",
      "Check APN settings.",
      "Try network settings reset if needed.",
      "Escalate if issue persists after all steps.",
    ],
    deviceSpecificSteps: {
      iphone: [
        "Settings > Cellular > Cellular Data (toggle).",
        "Settings > Cellular > check correct line selected for data.",
        "Settings > General > Transfer or Reset > Reset Network Settings.",
      ],
      android: [
        "Settings > Connections > Mobile Networks > Mobile Data (toggle).",
        "Settings > Connections > Mobile Networks > Access Point Names (check).",
        "Settings > General Management > Reset > Reset Network Settings.",
      ],
      general: [
        "Check if Wi-Fi is accidentally prioritized.",
        "Remove and re-insert physical SIM if applicable.",
        "Confirm coverage area.",
      ],
    },
    copyTemplates: [
      {
        label: "Start data troubleshooting",
        text: "I'm sorry you're having trouble with your data. Let's go through a few quick steps to get this sorted out.",
      },
      {
        label: "Ask to toggle airplane mode",
        text: "Could you try turning Airplane Mode on, waiting about 10 seconds, and then turning it back off? This refreshes your connection to the network.",
      },
      {
        label: "Recommend restart",
        text: "Let's try a quick restart of your device. Please power it off completely, wait about 30 seconds, and power it back on.",
      },
      {
        label: "Escalation needed",
        text: "We've gone through the standard troubleshooting steps and the issue is persisting. I'm going to escalate this with all the details so we can get a deeper look.",
      },
    ],
    escalationRequiredWhen: [
      "All basic troubleshooting steps completed with no resolution.",
      "Issue started after activation or port-in.",
      "Both data and voice/text are affected.",
      "Customer reports issue at multiple locations.",
    ],
    escalationFormat: [
      "Customer issue: Mobile data not working",
      "Device model:",
      "SIM type:",
      "Calls/texts working:",
      "Signal indicator shown:",
      "Location/ZIP:",
      "Steps already tried:",
      "Error message, if any:",
      "Requested next action:",
    ],
    relatedPlaybooks: [
      "apn-iphone",
      "apn-android",
      "no-service",
      "esim-activation",
      "hotspot-not-working",
    ],
    sourceDoc: "Dummy prototype data",
    lastUpdated: "Prototype",
    confidence: "dummy",
  },

  // ── 5. No Service / No Signal ───────────────────────────────
  {
    id: "no-service",
    title: "No Service / No Signal",
    category: "network-signal",
    priority: "critical",
    aliases: [
      "no service",
      "no signal",
      "no bars",
      "searching for network",
      "SOS only",
      "emergency calls only",
    ],
    keywords: [
      "no service",
      "no signal",
      "SOS",
      "searching",
      "no bars",
      "coverage",
      "outage",
    ],
    symptoms: [
      "phone shows No Service",
      "phone shows SOS",
      "phone shows Searching",
      "no signal bars at all",
      "can't make calls or use data",
    ],
    intent: ["Troubleshoot", "Ask Customer", "Fix", "Escalate"],
    useWhen:
      "Use when a customer reports no service, no signal, or SOS on their device.",
    doNotUseWhen:
      "Do not use as final official policy. This is dummy prototype content.",
    quickAnswer:
      "Verify SIM status, device compatibility, and coverage area. Walk through airplane mode toggle, SIM re-seat, restart, and carrier settings update. Check for outages. Escalate if basic steps fail.",
    customerQuestions: [
      "What device are you using?",
      "Physical SIM or eSIM?",
      "What does the status bar show? (No Service, SOS, Searching, etc.)",
      "When did this start?",
      "Did you recently change your SIM, device, or location?",
      "Is this happening at home, at work, or everywhere?",
    ],
    quickSteps: [
      "Check what the phone displays (No Service, SOS, Searching).",
      "Confirm SIM type and device model.",
      "Toggle Airplane Mode on/off.",
      "Restart device.",
      "Re-seat physical SIM or toggle eSIM off/on.",
      "Check for carrier settings update (iPhone).",
      "Check for coverage outage in customer's area.",
      "Escalate if no resolution.",
    ],
    deviceSpecificSteps: {
      iphone: [
        "Settings > General > About (check for carrier update).",
        "Remove and re-insert SIM tray.",
        "Settings > Cellular > check SIM is active.",
        "Reset Network Settings if needed.",
      ],
      android: [
        "Settings > Connections > SIM Manager (check SIM active).",
        "Remove and re-insert SIM tray.",
        "Settings > Software Update (check for updates).",
        "Reset Network Settings if needed.",
      ],
      general: [
        "Verify coverage map for customer's location.",
        "Ask if others nearby have signal.",
        "Try a different location if possible.",
      ],
    },
    copyTemplates: [
      {
        label: "Acknowledge no service issue",
        text: "I understand you're seeing no service on your device. Let's run through a few steps to get you reconnected.",
      },
      {
        label: "Ask about SIM re-seat",
        text: "If you're using a physical SIM, could you try removing the SIM card, waiting about 10 seconds, and putting it back in securely?",
      },
      {
        label: "Coverage check",
        text: "Let me check if there are any reported network issues in your area. Can you share your ZIP code?",
      },
    ],
    escalationRequiredWhen: [
      "No service persists after all basic troubleshooting.",
      "Issue started immediately after activation.",
      "SIM shows as inactive or unrecognized.",
      "Customer is in a confirmed coverage area.",
    ],
    escalationFormat: [
      "Customer issue: No Service / No Signal",
      "Device model:",
      "SIM type:",
      "Status bar display:",
      "Location/ZIP:",
      "When started:",
      "Steps already tried:",
      "Requested next action:",
    ],
    relatedPlaybooks: [
      "mobile-data-not-working",
      "esim-activation",
      "apn-iphone",
      "apn-android",
    ],
    sourceDoc: "Dummy prototype data",
    lastUpdated: "Prototype",
    confidence: "dummy",
  },

  // ── 6. eSIM Activation Issue ────────────────────────────────
  {
    id: "esim-activation",
    title: "eSIM Activation Issue",
    category: "esim-sim",
    priority: "important",
    aliases: [
      "eSIM not working",
      "eSIM activation failed",
      "QR code not scanning",
      "digital SIM issue",
      "eSIM download error",
    ],
    keywords: [
      "eSIM",
      "activation",
      "QR code",
      "digital SIM",
      "embedded SIM",
      "EID",
      "ICCID",
    ],
    symptoms: [
      "eSIM won't activate",
      "QR code scan fails",
      "eSIM downloaded but no service",
      "error during eSIM setup",
      "eSIM shows but no connection",
    ],
    intent: ["Troubleshoot", "Ask Customer", "Fix", "Escalate"],
    useWhen:
      "Use when a customer has trouble activating or using an eSIM on their device.",
    doNotUseWhen:
      "Do not use as final official policy. This is dummy prototype content.",
    quickAnswer:
      "Confirm device supports eSIM, ensure Wi-Fi connection during setup, verify QR code is valid, and check that no existing eSIM conflicts. Restart and re-scan if needed. Escalate if activation continues to fail.",
    customerQuestions: [
      "What device are you using?",
      "Does your device support eSIM?",
      "Are you connected to Wi-Fi?",
      "Did you receive a QR code or activation details?",
      "What error message are you seeing?",
      "Have you activated an eSIM on this device before?",
    ],
    quickSteps: [
      "Confirm device model supports eSIM.",
      "Ensure customer is connected to Wi-Fi.",
      "Verify QR code is valid and not expired.",
      "Ask customer to scan QR code from a different screen (not the same phone).",
      "If scan fails, try manual eSIM entry if available.",
      "Restart device after eSIM download.",
      "Check that eSIM line is enabled in device settings.",
      "Escalate if activation fails repeatedly.",
    ],
    deviceSpecificSteps: {
      iphone: [
        "Settings > Cellular > Add Cellular Plan.",
        "Scan QR code (must scan from another device screen, not screenshot).",
        "After download, ensure new line is enabled.",
        "Set data line if using dual SIM.",
        "Restart device.",
      ],
      android: [
        "Settings > Connections > SIM Manager > Add eSIM.",
        "Scan QR code.",
        "After download, enable the eSIM line.",
        "Set preferred data SIM if dual SIM.",
        "Restart device.",
      ],
      general: [
        "Wi-Fi required for eSIM download.",
        "QR code must be displayed on a different device.",
        "Each QR code is single-use typically.",
      ],
    },
    copyTemplates: [
      {
        label: "Check eSIM compatibility",
        text: "Before we proceed, can you confirm your device model? I want to make sure it supports eSIM.",
      },
      {
        label: "Wi-Fi reminder",
        text: "For eSIM activation, you'll need to be connected to Wi-Fi. Could you make sure you're on a Wi-Fi network before we continue?",
      },
      {
        label: "eSIM scan instructions",
        text: "Please go to Settings > Cellular > Add Cellular Plan, then scan the QR code. Make sure you're scanning it from a separate screen — not a screenshot on the same phone.",
      },
    ],
    escalationRequiredWhen: [
      "QR code scans but eSIM fails to download.",
      "eSIM downloads but shows no service.",
      "Error message during activation that can't be resolved.",
      "Customer's device shows eSIM not supported despite being compatible.",
    ],
    escalationFormat: [
      "Customer issue: eSIM Activation",
      "Device model:",
      "EID (if available):",
      "QR code used: Yes/No",
      "Error message:",
      "Wi-Fi connected: Yes/No",
      "Steps already tried:",
      "Requested next action:",
    ],
    relatedPlaybooks: [
      "no-service",
      "apn-iphone",
      "apn-android",
      "mobile-data-not-working",
    ],
    sourceDoc: "Dummy prototype data",
    lastUpdated: "Prototype",
    confidence: "dummy",
  },

  // ── 7. Port-In Delay ────────────────────────────────────────
  {
    id: "port-in-delay",
    title: "Port-In Delay",
    category: "port-in-out",
    priority: "important",
    aliases: [
      "number transfer delay",
      "port taking too long",
      "number not transferred yet",
      "porting issue",
      "switch carrier delay",
    ],
    keywords: [
      "port-in",
      "number transfer",
      "porting",
      "delay",
      "carrier switch",
      "number port",
      "transfer number",
    ],
    symptoms: [
      "port-in has been pending for hours/days",
      "customer's old carrier still active",
      "number not showing on new account",
      "port request stuck",
    ],
    intent: ["Troubleshoot", "Ask Customer", "Explain", "Escalate"],
    useWhen:
      "Use when a customer reports that their number transfer (port-in) is taking longer than expected.",
    doNotUseWhen:
      "Do not use as final official policy. This is dummy prototype content.",
    quickAnswer:
      "Port-ins typically complete within a few hours but can take up to a few business days. Verify that the port-in details (account number, PIN, name, address) match the old carrier exactly. Incorrect info is the most common cause of delay.",
    customerQuestions: [
      "When did you submit the port-in request?",
      "What carrier are you porting from?",
      "Did you provide your account number and PIN from the old carrier?",
      "Is your old carrier account still active?",
      "Did you receive any error or rejection notice?",
    ],
    quickSteps: [
      "Confirm when port request was submitted.",
      "Verify port-in details match old carrier exactly.",
      "Check if port request shows any status or error.",
      "If details mismatch, correct and resubmit.",
      "Advise typical timeline (hours to a few business days).",
      "If past normal timeline with correct info, escalate.",
    ],
    deviceSpecificSteps: {
      general: [
        "Port-in is account-level, not device-specific.",
        "Customer should keep old SIM active until port completes.",
        "Do not cancel old carrier before port completes.",
      ],
    },
    copyTemplates: [
      {
        label: "Explain port timeline",
        text: "Number transfers usually complete within a few hours, but in some cases can take up to a few business days depending on your previous carrier. Let me check the status for you.",
      },
      {
        label: "Ask for port details",
        text: "To check on your port-in, can you confirm the account number and PIN you provided from your previous carrier? The most common reason for delays is a mismatch in those details.",
      },
      {
        label: "Port escalation",
        text: "Your port-in has been pending longer than expected. I'm going to escalate this with all the details so the porting team can take a closer look.",
      },
    ],
    escalationRequiredWhen: [
      "Port request has been pending more than expected timeline.",
      "Port request was rejected and customer can't correct info.",
      "Customer's old number is already disconnected before port completion.",
      "Multiple port attempts have failed.",
    ],
    escalationFormat: [
      "Customer issue: Port-In Delay",
      "Previous carrier:",
      "Account number provided:",
      "PIN provided:",
      "Port request date:",
      "Current status:",
      "Error or rejection reason (if any):",
      "Requested next action:",
    ],
    relatedPlaybooks: [
      "no-service",
      "esim-activation",
      "mobile-data-not-working",
    ],
    sourceDoc: "Dummy prototype data",
    lastUpdated: "Prototype",
    confidence: "dummy",
  },

  // ── 8. Hotspot Not Working ──────────────────────────────────
  {
    id: "hotspot-not-working",
    title: "Hotspot Not Working",
    category: "hotspot",
    priority: "normal",
    aliases: [
      "mobile hotspot",
      "tethering not working",
      "personal hotspot",
      "Wi-Fi sharing",
      "hotspot won't turn on",
    ],
    keywords: [
      "hotspot",
      "tethering",
      "mobile hotspot",
      "personal hotspot",
      "data sharing",
      "Wi-Fi hotspot",
    ],
    symptoms: [
      "hotspot won't turn on",
      "devices can't connect to hotspot",
      "hotspot connected but no internet",
      "hotspot option is grayed out",
    ],
    intent: ["Troubleshoot", "Ask Customer", "Fix", "Template"],
    useWhen:
      "Use when a customer reports issues with their mobile hotspot or tethering feature.",
    doNotUseWhen:
      "Do not use as final official policy. This is dummy prototype content.",
    quickAnswer:
      "Confirm the customer's plan includes hotspot. Check APN settings, restart device, verify mobile data works before hotspot. Some plans require specific hotspot APN settings.",
    customerQuestions: [
      "What plan are you on? Does it include hotspot?",
      "What device are you using?",
      "Is your mobile data working normally (without hotspot)?",
      "Is the hotspot option grayed out or just not connecting?",
      "What device are you trying to connect with?",
    ],
    quickSteps: [
      "Confirm plan includes hotspot.",
      "Verify mobile data works on the phone first.",
      "Toggle hotspot off and on.",
      "Restart the device.",
      "Check APN settings (some carriers need hotspot-specific APN).",
      "Forget and reconnect from the connecting device.",
      "Try a different connecting device to isolate the issue.",
    ],
    deviceSpecificSteps: {
      iphone: [
        "Settings > Personal Hotspot > toggle on.",
        "If grayed out, check Settings > Cellular > Cellular Data Options.",
        "Restart device.",
      ],
      android: [
        "Settings > Connections > Mobile Hotspot and Tethering.",
        "Toggle Mobile Hotspot on.",
        "Check hotspot settings (name, password, band).",
        "Restart device.",
      ],
      general: [
        "Make sure cellular data is working on the device first.",
        "Try connecting with a different device.",
        "Check if a VPN is interfering.",
      ],
    },
    copyTemplates: [
      {
        label: "Check plan for hotspot",
        text: "Let me first confirm that your current plan includes mobile hotspot. Can you tell me which plan you're on?",
      },
      {
        label: "Basic hotspot troubleshooting",
        text: "Let's try a few things: first, turn off your hotspot, restart your phone, and then turn it back on. Also, make sure your regular mobile data is working before enabling hotspot.",
      },
    ],
    escalationRequiredWhen: [
      "Plan includes hotspot but feature remains unavailable.",
      "Hotspot works but connected devices have no internet.",
      "Hotspot option is grayed out on a supported plan.",
    ],
    escalationFormat: [
      "Customer issue: Hotspot not working",
      "Device model:",
      "Plan type:",
      "Hotspot included in plan: Yes/No",
      "Mobile data working: Yes/No",
      "Specific error or symptom:",
      "Steps already tried:",
      "Requested next action:",
    ],
    relatedPlaybooks: [
      "mobile-data-not-working",
      "apn-iphone",
      "apn-android",
      "qci-priority",
    ],
    sourceDoc: "Dummy prototype data",
    lastUpdated: "Prototype",
    confidence: "dummy",
  },

  // ── 9. Escalation Format ────────────────────────────────────
  {
    id: "escalation-format",
    title: "Escalation Format",
    category: "escalations",
    priority: "important",
    aliases: [
      "how to escalate",
      "escalation template",
      "escalation checklist",
      "tier 2 format",
      "internal escalation",
    ],
    keywords: [
      "escalation",
      "escalate",
      "tier 2",
      "supervisor",
      "internal",
      "format",
      "template",
    ],
    symptoms: [
      "need to escalate a case",
      "unsure how to format escalation",
      "customer issue can't be resolved at tier 1",
    ],
    intent: ["Escalate", "Template"],
    useWhen:
      "Use when you need to escalate a customer issue and want the standard format for internal escalation notes.",
    doNotUseWhen:
      "Do not use as final official policy. This is dummy prototype content.",
    quickAnswer:
      "Use the standard escalation format below. Fill in all fields completely. Include all troubleshooting steps already performed. Be specific about the issue and what resolution the customer is expecting.",
    customerQuestions: [],
    quickSteps: [
      "Confirm all basic troubleshooting has been completed.",
      "Gather all required information from the customer.",
      "Fill in the escalation format completely.",
      "Submit through the internal escalation channel.",
      "Inform the customer that their case has been escalated.",
      "Provide expected follow-up timeline if available.",
    ],
    deviceSpecificSteps: {
      general: [
        "Escalation format is the same regardless of device.",
        "Include device info in the escalation notes.",
      ],
    },
    copyTemplates: [
      {
        label: "Full escalation format",
        text: "ESCALATION NOTES\n\nCustomer Name:\nAccount/Phone Number:\nCustomer Issue:\nDevice Model:\nSIM Type: eSIM / Physical\nService(s) Affected:\nLocation/ZIP Code:\nIssue Start Date:\nSteps Already Tried:\n1. \n2. \n3. \nError Message (if any):\nCustomer Expectation:\nRequested Next Action:\nAgent Notes:",
      },
      {
        label: "Tell customer about escalation",
        text: "I've prepared all the details and escalated your case to our specialized team. They will review it and follow up with you. Is there anything else I can help with in the meantime?",
      },
      {
        label: "Quick escalation header",
        text: "ESCALATION — [Issue Type] — [Date]\nPriority: [Normal/High/Urgent]",
      },
    ],
    escalationRequiredWhen: [
      "This playbook IS the escalation format.",
    ],
    escalationFormat: [
      "Customer Name:",
      "Account/Phone Number:",
      "Customer Issue:",
      "Device Model:",
      "SIM Type: eSIM / Physical",
      "Service(s) Affected:",
      "Location/ZIP Code:",
      "Issue Start Date:",
      "Steps Already Tried:",
      "Error Message (if any):",
      "Customer Expectation:",
      "Requested Next Action:",
      "Agent Notes:",
    ],
    relatedPlaybooks: [
      "mobile-data-not-working",
      "no-service",
      "esim-activation",
      "port-in-delay",
    ],
    sourceDoc: "Dummy prototype data",
    lastUpdated: "Prototype",
    confidence: "dummy",
  },

  // ── 10. General Empathy Replies ─────────────────────────────
  {
    id: "empathy-replies",
    title: "General Empathy Replies",
    category: "reply-templates",
    priority: "normal",
    aliases: [
      "empathy templates",
      "customer care replies",
      "soft responses",
      "courtesy messages",
      "professional responses",
    ],
    keywords: [
      "empathy",
      "reply",
      "template",
      "courtesy",
      "professional",
      "customer care",
      "tone",
    ],
    symptoms: [
      "customer is frustrated",
      "customer is upset",
      "need professional opening line",
      "need closing message",
    ],
    intent: ["Template"],
    useWhen:
      "Use when you need empathetic, professional reply templates for common support situations.",
    doNotUseWhen:
      "Do not use as final official policy. This is dummy prototype content.",
    quickAnswer:
      "Use these ready-made empathy replies for openings, acknowledgments, transitions, and closings. Customize as needed for the specific situation.",
    customerQuestions: [],
    quickSteps: [
      "Choose the appropriate template for the situation.",
      "Customize it if needed.",
      "Copy and paste into your response.",
    ],
    copyTemplates: [
      {
        label: "Opening — general",
        text: "Thank you for reaching out. I'd be happy to help you with this today.",
      },
      {
        label: "Acknowledge frustration",
        text: "I completely understand how frustrating this must be. Let me look into this right away and see what we can do.",
      },
      {
        label: "Apologize for inconvenience",
        text: "I'm really sorry for the inconvenience you've been experiencing. Let's work together to get this resolved as quickly as possible.",
      },
      {
        label: "Transition to troubleshooting",
        text: "I appreciate your patience. Let me walk you through a few steps to get this sorted out.",
      },
      {
        label: "Hold message",
        text: "I'm going to look into this for you. Would you mind holding for just a moment while I check?",
      },
      {
        label: "Closing — resolved",
        text: "Glad we could get that taken care of! Is there anything else I can help you with today?",
      },
      {
        label: "Closing — escalated",
        text: "I've escalated this to our specialized team and they'll be following up with you. Thank you for your patience, and don't hesitate to reach out if you need anything else.",
      },
      {
        label: "Closing — general",
        text: "Thank you for contacting us. Have a great rest of your day!",
      },
    ],
    escalationRequiredWhen: [],
    relatedPlaybooks: [
      "escalation-format",
    ],
    sourceDoc: "Dummy prototype data",
    lastUpdated: "Prototype",
    confidence: "dummy",
  },
];
