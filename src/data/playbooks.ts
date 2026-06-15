import type { Playbook, Category } from "../types/playbook";

export const categories: Category[] = [
  {
    "id": "start-here",
    "label": "Start Here",
    "icon": "🚀"
  },
  {
    "id": "network-signal",
    "label": "Network / Signal",
    "icon": "📶"
  },
  {
    "id": "apn-data",
    "label": "APN / Data",
    "icon": "🌐"
  },
  {
    "id": "esim-sim",
    "label": "eSIM / SIM",
    "icon": "💳"
  },
  {
    "id": "activation",
    "label": "Activation",
    "icon": "⚡"
  },
  {
    "id": "port-in-out",
    "label": "Port-In / Port-Out",
    "icon": "🔄"
  },
  {
    "id": "messaging-calls-voicemail",
    "label": "Messaging / Calls / Voicemail",
    "icon": "💬"
  },
  {
    "id": "plans-billing",
    "label": "Plans / Billing",
    "icon": "💲"
  },
  {
    "id": "devices-watches",
    "label": "Devices / Watches",
    "icon": "📱"
  },
  {
    "id": "hotspot",
    "label": "Hotspot",
    "icon": "📡"
  },
  {
    "id": "international-roaming",
    "label": "International / Roaming",
    "icon": "🌍"
  },
  {
    "id": "app-dashboard",
    "label": "App / Dashboard",
    "icon": "💻"
  },
  {
    "id": "error-dictionary",
    "label": "Error Dictionary",
    "icon": "📖"
  },
  {
    "id": "known-issues",
    "label": "Known Issues",
    "icon": "⚠️"
  },
  {
    "id": "escalations",
    "label": "Escalations",
    "icon": "🚨"
  },
  {
    "id": "zendesk-ops",
    "label": "Zendesk Ops",
    "icon": "⚙️"
  },
  {
    "id": "reply-templates",
    "label": "Reply Templates",
    "icon": "📝"
  },
  {
    "id": "glossary",
    "label": "Glossary",
    "icon": "📚"
  }
];

export const playbooks: Playbook[] = [
  {
    "id": "no-service-sos-only",
    "title": "No Service & SOS Only",
    "category": "network-signal",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "network-signal",
      "batch1"
    ],
    "keywords": [
      "service",
      "sos",
      "only",
      "network-signal"
    ],
    "customerPhrases": [
      "“no service”",
      "“sos only”",
      "“searching”",
      "“emergency calls only”",
      "“no bars”",
      "“sim not connecting”"
    ],
    "preview": {
      "problem": "Network registration failure / SIM provisioning issue / incomplete port / billing hold / local outage",
      "firstQuestion": "Did this start suddenly, or right after activation, renewal, port-in, Teleport, or a device",
      "firstAction": "Confirm the line is active, funded, and not suspended. INTERNAL VERIFICATION",
      "escalateIf": "Account active, billing clear, port/Teleport complete, device unlocked/compatible, and"
    },
    "quickAnswer": "Network registration failure / SIM provisioning issue / incomplete port / billing hold / local outage \n/ device compatibility issue",
    "useWhen": "Use when customer reports: “No service”, “SOS only”, “Searching”, “Emergency calls only”, “No bars”, “SIM not connecting”",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Did this start suddenly, or right after activation, renewal, port-in, Teleport, or a device",
      "change?",
      "Are you using an eSIM or physical SIM, and what phone model/OS version do you",
      "have?",
      "Are you in the same location where service normally works, or did this start after",
      "moving/traveling?"
    ],
    "quickChecks": [
      "Check account/line status, renewal, billing holds, and service suspension status.",
      "INTERNAL VERIFICATION REQUIRED",
      "Check activation, port-in, or Teleport status. INTERNAL VERIFICATION REQUIRED",
      "Confirm device is unlocked and compatible with the selected network.",
      "Ask customer to toggle Airplane Mode ON for 30 seconds, then OFF.",
      "Check whether there are known local network issues or multiple similar reports.",
      "INTERNAL VERIFICATION REQUIRED"
    ],
    "quickSteps": [
      "Check account/line status, renewal, billing holds, and service suspension status.",
      "INTERNAL VERIFICATION REQUIRED",
      "Check activation, port-in, or Teleport status. INTERNAL VERIFICATION REQUIRED",
      "Confirm device is unlocked and compatible with the selected network.",
      "Ask customer to toggle Airplane Mode ON for 30 seconds, then OFF.",
      "Check whether there are known local network issues or multiple similar reports.",
      "INTERNAL VERIFICATION REQUIRED"
    ],
    "steps": [
      "Confirm the line is active, funded, and not suspended. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm port-in or Teleport is complete if this followed a number transfer or network",
      "switch. INTERNAL VERIFICATION REQUIRED",
      "Have customer toggle Airplane Mode ON for 30 seconds, then OFF.",
      "Confirm the correct SIM/eSIM is enabled and selected for voice/data.",
      "Confirm the phone is unlocked. On iPhone, check Settings > General > About > Carrier",
      "Lock = “No SIM restrictions.”",
      "Restart the device.",
      "If still stuck, perform Reset Network Settings.",
      "If pSIM, reseat the SIM or test in another compatible unlocked phone if available.",
      "If eSIM, confirm the installed eSIM matches the active line and that old inactive profiles",
      "are removed.",
      "If account/device checks pass and the device remains stuck in SOS/No Service,",
      "escalate for provisioning/location update or HSS/HLR sync. INTERNAL VERIFICATION",
      "REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Cellular: confirm correct eSIM/line is turned ON.",
        "Settings > General > About: verify Carrier Lock says “No SIM restrictions.”",
        "Settings > General > Transfer or Reset iPhone > Reset > Reset Network Settings.",
        "After Teleport, remove the old inactive eSIM only after confirming the new eSIM is",
        "installed/available."
      ],
      "android": [
        "Settings > Connections / Network & Internet > SIMs: confirm SIM is enabled.",
        "Confirm Network Mode is set to 5G/LTE/Auto where available.",
        "Disable manual network selection unless specifically troubleshooting registration.",
        "For pSIM, reseat SIM and reboot.",
        "For eSIM, confirm profile is enabled and old inactive profiles are removed."
      ],
      "general": [
        "Confirm the line is active, funded, and not suspended. INTERNAL VERIFICATION",
        "REQUIRED",
        "Confirm port-in or Teleport is complete if this followed a number transfer or network",
        "switch. INTERNAL VERIFICATION REQUIRED",
        "Have customer toggle Airplane Mode ON for 30 seconds, then OFF.",
        "Confirm the correct SIM/eSIM is enabled and selected for voice/data.",
        "Confirm the phone is unlocked. On iPhone, check Settings > General > About > Carrier",
        "Lock = “No SIM restrictions.”",
        "Restart the device.",
        "If still stuck, perform Reset Network Settings.",
        "If pSIM, reseat the SIM or test in another compatible unlocked phone if available.",
        "If eSIM, confirm the installed eSIM matches the active line and that old inactive profiles",
        "are removed.",
        "If account/device checks pass and the device remains stuck in SOS/No Service,",
        "escalate for provisioning/location update or HSS/HLR sync. INTERNAL VERIFICATION",
        "REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "I know seeing “SOS only” or “No Service” is frustrating, especially if the line was working before. \nLet’s isolate whether the phone is failing to reconnect locally or whether the line needs an \naccount-side refresh. \n\nPlease turn Airplane Mode ON for 30 seconds, then turn it OFF. While you do that, I’m going to \ncheck the line status and make sure there isn’t anything stuck from activation, renewal, porting, \nor a network switch."
      }
    ],
    "zendeskNote": "Issue: No Service / SOS Only \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nDevice/OS: [Device + OS] \nSIM/eSIM: [eSIM / pSIM] \nTrigger: [Activation / Port-in / Teleport / Renewal / Device change / Sudden] \nSymptoms: Device shows [SOS Only / No Service / Searching] \nSteps tried: Airplane toggle, reboot, SIM/eSIM status check, network settings reset \nInternal checks: Account active, billing clear, activation/port/Teleport status checked INTERNAL \nVERIFICATION REQUIRED \nSuspected cause: Registration/provisioning issue or device/SIM profile issue \nNext action: Escalate for provisioning/location update if all frontline checks pass",
    "escalation": {
      "neededWhen": [
        "Account active, billing clear, port/Teleport complete, device unlocked/compatible, and",
        "network reset completed, but device remains in SOS/No Service.",
        "Multiple customers on same network/location report No Service within a short window.",
        "Safety/urgent access issue: hospital, emergency, fraud, loss of banking/2FA access."
      ],
      "evidenceNeeded": [
        "Billing holds, line status, suspension status, port status, Teleport status, local outage/NOC",
        "checks, provisioning refresh, HSS/HLR sync, location update."
      ],
      "summaryTemplate": "Customer stuck on SOS/No Service. Network: [X]. Device/OS: [X]. SIM type: [eSIM/pSIM]. \nTrigger: [X]. Account active and no billing hold confirmed. Port/Teleport status: [X]. Airplane \ntoggle/reboot/network reset completed. Device unlocked/compatible: [Yes/No]. Requesting \nprovisioning review / HSS-HLR sync / location update. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Account active, billing clear, port/Teleport complete, device unlocked/compatible, and",
      "network reset completed, but device remains in SOS/No Service.",
      "Multiple customers on same network/location report No Service within a short window.",
      "Safety/urgent access issue: hospital, emergency, fraud, loss of banking/2FA access."
    ],
    "escalationFormat": [
      "Customer stuck on SOS/No Service. Network: [X]. Device/OS: [X]. SIM type: [eSIM/pSIM]. ",
      "Trigger: [X]. Account active and no billing hold confirmed. Port/Teleport status: [X]. Airplane ",
      "toggle/reboot/network reset completed. Device unlocked/compatible: [Yes/No]. Requesting ",
      "provisioning review / HSS-HLR sync / location update. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "teleport-esim-recovery",
      "data-connectivity-failures-bars-but-no-internet",
      "porting-bank-code-delays"
    ],
    "sourceAliases": [
      "US Mobile Error Dictionary Research.pdf; Telecom Support Symptom Translator Research.pdf; \nUS Mobile Support Playbook Development.pdf; Telecom Support Training Report.pdf"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Billing holds, line status, suspension status, port status, Teleport status, local outage/NOC",
      "checks, provisioning refresh, HSS/HLR sync, location update."
    ],
    "batch": "Batch 1",
    "aliases": [
      "“no service”",
      "“sos only”",
      "“searching”",
      "“emergency calls only”",
      "“no bars”",
      "“sim not connecting”"
    ],
    "symptoms": [
      "“no service”",
      "“sos only”",
      "“searching”",
      "“emergency calls only”",
      "“no bars”",
      "“sim not connecting”"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "US Mobile Error Dictionary Research.pdf; Telecom Support Symptom Translator Research.pdf;"
  },
  {
    "id": "data-connectivity-failures-bars-but-no-internet",
    "title": "Data Connectivity Failures — Bars but No Internet",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "apn-data",
      "batch1"
    ],
    "keywords": [
      "data",
      "connectivity",
      "failures",
      "bars",
      "but",
      "internet",
      "apn-data"
    ],
    "customerPhrases": [
      "“bars but no internet”",
      "“calls work but data doesn’t”",
      "“only works on wi-fi”",
      "“lte/5g shows but",
      "nothing loads”",
      "“mobile data not working”"
    ],
    "preview": {
      "problem": "APN mismatch / data allotment exhausted / cellular data disabled / wrong data line selected /",
      "firstQuestion": "Please turn Wi-Fi off for a moment — do websites load on cellular data only?",
      "firstAction": "Confirm the line is active and data is not exhausted or blocked. INTERNAL",
      "escalateIf": "Data balance is active, APN is correct, device settings are clean, and the line still cannot"
    },
    "quickAnswer": "APN mismatch / data allotment exhausted / cellular data disabled / wrong data line selected / \nprovisioning or PCRF data block / VPN or device setting interference",
    "useWhen": "Use when customer reports: “Bars but no internet”, “Calls work but data doesn’t”, “Only works on Wi-Fi”, “LTE/5G shows but",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Please turn Wi-Fi off for a moment — do websites load on cellular data only?",
      "Which network is the line on: Warp, Dark Star, Light Speed, or are you not sure?",
      "Did this start after activation, Teleport, plan renewal, device change, or an OS update?"
    ],
    "quickChecks": [
      "Confirm line is active and has usable data remaining. INTERNAL VERIFICATION",
      "REQUIRED",
      "Turn Wi-Fi, VPN, Private Relay, and Private DNS off for testing.",
      "Confirm Cellular Data/Mobile Data is ON and the correct SIM/eSIM is selected for data.",
      "Verify APN for the current network.",
      "Toggle Airplane Mode ON for 30 seconds, then OFF."
    ],
    "quickSteps": [
      "Confirm line is active and has usable data remaining. INTERNAL VERIFICATION",
      "REQUIRED",
      "Turn Wi-Fi, VPN, Private Relay, and Private DNS off for testing.",
      "Confirm Cellular Data/Mobile Data is ON and the correct SIM/eSIM is selected for data.",
      "Verify APN for the current network.",
      "Toggle Airplane Mode ON for 30 seconds, then OFF."
    ],
    "steps": [
      "Confirm the line is active and data is not exhausted or blocked. INTERNAL",
      "VERIFICATION REQUIRED",
      "Ask customer to turn Wi-Fi off and test a basic website.",
      "Confirm correct data line is selected on dual-SIM devices.",
      "Disable VPN, iCloud Private Relay, Private DNS, Low Data Mode, or Data Saver",
      "temporarily.",
      "Verify or update APN settings based on network:",
      "Warp: verify Warp/Verizon APN profile configuration.",
      "Dark Star: verify",
      "ereseller",
      "APN and MMS/proxy fields if MMS is also affected.",
      "Light Speed: verify current Light Speed APN path, such as",
      "wholesale",
      "or legacy",
      "pwg",
      ", depending on provisioning.",
      "Restart the device after APN changes.",
      "If APN is correct and data still fails, perform Reset Network Settings.",
      "If the customer has bars, active data, and correct APN but no IP/data session, escalate",
      "for data provisioning/PCRF review. INTERNAL VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Cellular: confirm Cellular Data is ON.",
        "Settings > Cellular > Cellular Data: select the correct line.",
        "Settings > Cellular > Cellular Data Options: turn Low Data Mode OFF.",
        "Disable VPN/iCloud Private Relay for testing.",
        "Reset Network Settings if APN/profile and account checks pass."
      ],
      "android": [
        "Settings > Network & Internet / Connections > SIMs: confirm Mobile Data is ON.",
        "Settings > Mobile Networks > Access Point Names: verify correct APN.",
        "Disable Data Saver, VPN, Private DNS.",
        "Restart after APN changes.",
        "If Samsung APN fields are locked/greyed out, document device model and network, then",
        "escalate or use approved APN workaround."
      ],
      "general": [
        "Confirm the line is active and data is not exhausted or blocked. INTERNAL",
        "VERIFICATION REQUIRED",
        "Ask customer to turn Wi-Fi off and test a basic website.",
        "Confirm correct data line is selected on dual-SIM devices.",
        "Disable VPN, iCloud Private Relay, Private DNS, Low Data Mode, or Data Saver",
        "temporarily.",
        "Verify or update APN settings based on network:",
        "Warp: verify Warp/Verizon APN profile configuration.",
        "Dark Star: verify",
        "ereseller",
        "APN and MMS/proxy fields if MMS is also affected.",
        "Light Speed: verify current Light Speed APN path, such as",
        "wholesale",
        "or legacy",
        "pwg",
        ", depending on provisioning.",
        "Restart the device after APN changes.",
        "If APN is correct and data still fails, perform Reset Network Settings.",
        "If the customer has bars, active data, and correct APN but no IP/data session, escalate",
        "for data provisioning/PCRF review. INTERNAL VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Having signal bars means your phone can see the tower, but the internet still needs the correct \ndata route to work. Let’s isolate that route. \nPlease turn Wi-Fi off, turn Airplane Mode ON for 30 seconds, then turn it OFF. After that, try \nopening a simple website. I’m also going to check that your line has active data and isn’t being \nblocked account-side."
      }
    ],
    "zendeskNote": "Issue: Bars but no cellular data \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nDevice/OS: [Device + OS] \n\nSIM/eSIM: [eSIM / pSIM] \nTrigger: [Activation / Teleport / Renewal / Device change / Sudden] \nSymptoms: Calls/SMS [work/fail], cellular data fails, Wi-Fi works \nSteps tried: Wi-Fi off test, airplane toggle, VPN/Private DNS off, APN verified/updated, reboot \nInternal checks: Line active, data remaining, no data block/throttle INTERNAL VERIFICATION \nREQUIRED \nSuspected cause: APN/data routing/PCRF provisioning issue \nNext action: Escalate if active data + correct APN + no device limiter but no data session",
    "escalation": {
      "neededWhen": [
        "Data balance is active, APN is correct, device settings are clean, and the line still cannot",
        "establish data.",
        "Customer has data on one app/service only, but not general web, after VPN/DNS",
        "disabled.",
        "Multiple similar reports on same network/trigger."
      ],
      "evidenceNeeded": [
        "Line active status, data balance, throttle/block state, APN profile pushed from backend,",
        "PCRF/data provisioning refresh."
      ],
      "summaryTemplate": "Customer has bars but no cellular data. Calls/SMS: [working/not working]. Network: [X]. \nDevice/OS: [X]. SIM: [eSIM/pSIM]. Trigger: [X]. Data balance active. APN verified: [X]. \nVPN/DNS/Low Data Mode off. Airplane toggle/reboot/network reset completed. Requesting data \nprovisioning/PCRF/session review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Data balance is active, APN is correct, device settings are clean, and the line still cannot",
      "establish data.",
      "Customer has data on one app/service only, but not general web, after VPN/DNS",
      "disabled.",
      "Multiple similar reports on same network/trigger."
    ],
    "escalationFormat": [
      "Customer has bars but no cellular data. Calls/SMS: [working/not working]. Network: [X]. ",
      "Device/OS: [X]. SIM: [eSIM/pSIM]. Trigger: [X]. Data balance active. APN verified: [X]. ",
      "VPN/DNS/Low Data Mode off. Airplane toggle/reboot/network reset completed. Requesting data ",
      "provisioning/PCRF/session review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "no-service-sos-only",
      "mms-picture-messaging-failures",
      "hotspot-configuration",
      "speed-video-throttling",
      "speed-video-throttling"
    ],
    "sourceAliases": [
      "Telecom Support Training Report.pdf; Telecom Support Symptom Translator Research.pdf; US \nMobile APN_MMS_Hotspot Research.pdf; US Mobile Support Playbook Development.pdf"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Line active status, data balance, throttle/block state, APN profile pushed from backend,",
      "PCRF/data provisioning refresh."
    ],
    "batch": "Batch 1",
    "aliases": [
      "“bars but no internet”",
      "“calls work but data doesn’t”",
      "“only works on wi-fi”",
      "“lte/5g shows but",
      "nothing loads”",
      "“mobile data not working”"
    ],
    "symptoms": [
      "“bars but no internet”",
      "“calls work but data doesn’t”",
      "“only works on wi-fi”",
      "“lte/5g shows but",
      "nothing loads”",
      "“mobile data not working”"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "Telecom Support Training Report.pdf; Telecom Support Symptom Translator Research.pdf; US"
  },
  {
    "id": "mms-picture-messaging-failures",
    "title": "MMS & Picture Messaging Failures",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "apn-data",
      "batch1"
    ],
    "keywords": [
      "mms",
      "picture",
      "messaging",
      "failures",
      "apn-data"
    ],
    "customerPhrases": [
      "“pictures won’t send”",
      "“group texts fail”",
      "“mms won’t download”",
      "“can’t send photos”",
      "“only text",
      "works”",
      "“messages stuck sending”"
    ],
    "preview": {
      "problem": "MMS APN/MMSC routing issue / cellular data disabled / low data balance / RCS or iMessage",
      "firstQuestion": "Do regular text-only messages work, and only pictures/group texts fail?",
      "firstAction": "Confirm regular SMS works. If SMS also fails, use Messaging Routing Errors playbook",
      "escalateIf": "Cellular data works, SMS works, APN/MMSC verified, data balance available, but MMS"
    },
    "quickAnswer": "MMS APN/MMSC routing issue / cellular data disabled / low data balance / RCS or iMessage \nfallback issue / file size issue",
    "useWhen": "Use when customer reports: “Pictures won’t send”, “Group texts fail”, “MMS won’t download”, “Can’t send photos”, “Only text",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Do regular text-only messages work, and only pictures/group texts fail?",
      "Are you on iPhone or Android, and which messaging app are you using?",
      "Which network is this line on: Warp, Dark Star, Light Speed, or not sure?"
    ],
    "quickChecks": [
      "Turn Wi-Fi off and test MMS over cellular data only.",
      "Confirm cellular data is ON and usable.",
      "Confirm data balance is available, especially for Warp MMS. INTERNAL VERIFICATION",
      "REQUIRED",
      "Verify MMS/APN settings for the current network.",
      "Reduce image/file size and test one recipient first."
    ],
    "quickSteps": [
      "Turn Wi-Fi off and test MMS over cellular data only.",
      "Confirm cellular data is ON and usable.",
      "Confirm data balance is available, especially for Warp MMS. INTERNAL VERIFICATION",
      "REQUIRED",
      "Verify MMS/APN settings for the current network.",
      "Reduce image/file size and test one recipient first."
    ],
    "steps": [
      "Confirm regular SMS works. If SMS also fails, use Messaging Routing Errors playbook",
      "instead.",
      "Turn Wi-Fi off and confirm cellular data works by opening a website.",
      "Confirm customer has usable data remaining. INTERNAL VERIFICATION REQUIRED",
      "Verify MMS settings/APN based on network.",
      "For group messages, test one picture to one contact first.",
      "Reduce attachment size and retry.",
      "For Android/Google Messages, toggle RCS off temporarily and test MMS.",
      "Clear Google Messages cache if Android MMS remains stuck.",
      "Restart device.",
      "Escalate if data works, APN/MMSC is correct, and MMS still fails consistently."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Messages: confirm MMS Messaging is ON.",
        "Settings > Messages: if iMessage/RCS confusion exists, test as SMS/MMS.",
        "Settings > Cellular: confirm cellular data is ON for Messages.",
        "Restart iPhone after settings changes.",
        "If after port/Teleport, allow routing updates but document timing."
      ],
      "android": [
        "Confirm Google Messages is the default SMS app.",
        "Turn RCS off temporarily and test MMS.",
        "Clear Messages app cache first. Avoid clearing storage/data unless customer",
        "understands app settings may reset.",
        "Verify APN type includes MMS where required.",
        "For Dark Star, verify",
        "ereseller",
        ", MMSC, MMS proxy, and MMS port fields.",
        "For Samsung APN lock/greyed fields, document model and escalate if approved",
        "workaround is unavailable."
      ],
      "general": [
        "Confirm regular SMS works. If SMS also fails, use Messaging Routing Errors playbook",
        "instead.",
        "Turn Wi-Fi off and confirm cellular data works by opening a website.",
        "Confirm customer has usable data remaining. INTERNAL VERIFICATION REQUIRED",
        "Verify MMS settings/APN based on network.",
        "For group messages, test one picture to one contact first.",
        "Reduce attachment size and retry.",
        "For Android/Google Messages, toggle RCS off temporarily and test MMS.",
        "Clear Google Messages cache if Android MMS remains stuck.",
        "Restart device.",
        "Escalate if data works, APN/MMSC is correct, and MMS still fails consistently."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Since regular texts and picture messages travel differently, it’s possible for SMS to work while \nMMS fails. Let’s test the picture-message route directly. \nPlease turn Wi-Fi off, make sure cellular data is ON, and try sending one small photo to one \nperson. I’ll also check that your line has enough data available and that the MMS settings match \nyour network."
      }
    ],
    "zendeskNote": "Issue: MMS / picture / group messaging failure \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nDevice/OS: [Device + OS] \nMessaging app: [iMessage / Google Messages / Samsung Messages / Other] \nSIM/eSIM: [eSIM / pSIM] \nTrigger: [Activation / Port / Teleport / OS update / Sudden] \nSymptoms: SMS [works/fails], MMS [fails], data [works/fails] \nSteps tried: Wi-Fi off test, data verified, APN/MMSC checked, RCS/iMessage isolated, file size \nreduced \nInternal checks: Data balance / MMS feature status INTERNAL VERIFICATION REQUIRED \nSuspected cause: MMS APN/MMSC routing or messaging app/RCS state \nNext action: Escalate if APN/data/app checks pass and MMS still fails",
    "escalation": {
      "neededWhen": [
        "Cellular data works, SMS works, APN/MMSC verified, data balance available, but MMS",
        "fails on multiple recipients.",
        "MMS fails after Teleport despite correct destination-network APN.",
        "Repeated same-network/same-device MMS failures appear across multiple tickets."
      ],
      "evidenceNeeded": [
        "Data balance, MMS feature provisioning, backend SMS/MMS feature codes, network-side MMS",
        "routing logs."
      ],
      "summaryTemplate": "MMS failure. SMS works. Cellular data works. Network: [X]. Device/OS: [X]. Messaging app: [X]. \nTrigger: [X]. APN/MMSC verified. Data balance confirmed. RCS/iMessage isolated. Fails with \nmultiple recipients. Requesting MMS feature/routing review. INTERNAL VERIFICATION \nREQUIRED"
    },
    "escalationRequiredWhen": [
      "Cellular data works, SMS works, APN/MMSC verified, data balance available, but MMS",
      "fails on multiple recipients.",
      "MMS fails after Teleport despite correct destination-network APN.",
      "Repeated same-network/same-device MMS failures appear across multiple tickets."
    ],
    "escalationFormat": [
      "MMS failure. SMS works. Cellular data works. Network: [X]. Device/OS: [X]. Messaging app: [X]. ",
      "Trigger: [X]. APN/MMSC verified. Data balance confirmed. RCS/iMessage isolated. Fails with ",
      "multiple recipients. Requesting MMS feature/routing review. INTERNAL VERIFICATION ",
      "REQUIRED"
    ],
    "relatedPlaybooks": [
      "data-connectivity-failures-bars-but-no-internet",
      "messaging-routing-errors-error-97-invalid-destination",
      "teleport-esim-recovery"
    ],
    "sourceAliases": [
      "US Mobile Support Feature Matrix.pdf; US Mobile APN_MMS_Hotspot Research.pdf; Telecom \nSupport Symptom Translator Research.pdf"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Data balance, MMS feature provisioning, backend SMS/MMS feature codes, network-side MMS",
      "routing logs."
    ],
    "batch": "Batch 1",
    "aliases": [
      "“pictures won’t send”",
      "“group texts fail”",
      "“mms won’t download”",
      "“can’t send photos”",
      "“only text",
      "works”",
      "“messages stuck sending”"
    ],
    "symptoms": [
      "“pictures won’t send”",
      "“group texts fail”",
      "“mms won’t download”",
      "“can’t send photos”",
      "“only text",
      "works”",
      "“messages stuck sending”"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "US Mobile Support Feature Matrix.pdf; US Mobile APN_MMS_Hotspot Research.pdf; Telecom"
  },
  {
    "id": "porting-bank-code-delays",
    "title": "Porting & Bank Code Delays",
    "category": "messaging-calls-voicemail",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "messaging-calls-voicemail",
      "batch1"
    ],
    "keywords": [
      "porting",
      "bank",
      "code",
      "delays",
      "messaging-calls-voicemail"
    ],
    "customerPhrases": [
      "“bank codes not coming”",
      "“verification codes not coming”",
      "“number stuck”",
      "“old carrier still",
      "works”",
      "“port still pending”",
      "“can call but can’t get otp”"
    ],
    "preview": {
      "problem": "Port-in delay / LNP rejection / split routing / A2P aggregator delay / short-code filtering",
      "firstQuestion": "Does your old SIM still show service for this number?",
      "firstAction": "If old SIM still works, treat as port pending/incomplete. Check LNP status. INTERNAL",
      "escalateIf": "Port stuck over expected window without clear rejection."
    },
    "quickAnswer": "Port-in delay / LNP rejection / split routing / A2P aggregator delay / short-code filtering",
    "useWhen": "Use when customer reports: “Bank codes not coming”, “Verification codes not coming”, “Number stuck”, “Old carrier still",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Does your old SIM still show service for this number?",
      "Can you send and receive normal texts with friends/family?",
      "Did you receive any email or message about an account number, ZIP code, transfer PIN,",
      "or port lock mismatch?"
    ],
    "quickChecks": [
      "Check internal port dashboard for status, rejection code, FOC date, or error. INTERNAL",
      "VERIFICATION REQUIRED",
      "Confirm donor account is still active.",
      "Confirm standard P2P SMS works after port completion.",
      "Ask customer to text",
      "HELP",
      "to the failing short code if applicable.",
      "Check whether the issue is one bank only or all short codes."
    ],
    "quickSteps": [
      "Check internal port dashboard for status, rejection code, FOC date, or error. INTERNAL",
      "VERIFICATION REQUIRED",
      "Confirm donor account is still active.",
      "Confirm standard P2P SMS works after port completion.",
      "Ask customer to text",
      "HELP",
      "to the failing short code if applicable.",
      "Check whether the issue is one bank only or all short codes."
    ],
    "steps": [
      "If old SIM still works, treat as port pending/incomplete. Check LNP status. INTERNAL",
      "VERIFICATION REQUIRED",
      "If rejected, identify exact rejection reason and ask customer for corrected account",
      "number, transfer PIN, or ZIP.",
      "Tell customer to keep old carrier account active until the transfer fully completes.",
      "If port is complete and normal SMS works, classify as short-code/A2P routing delay.",
      "Ask customer to text",
      "HELP",
      "to the bank’s 5- or 6-digit short code where supported.",
      "Ask customer to test another bank/service to identify whether it is one sender or all",
      "OTPs.",
      "If Wi-Fi Calling was already enabled and provisioned, it may help with receiving SMS in",
      "poor coverage/travel scenarios, but do not guarantee bank OTP delivery.",
      "Escalate if standard SMS works but OTP/short codes still fail beyond 72 hours."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Confirm iMessage is not masking SMS behavior.",
        "Test with a green-bubble SMS to a non-iMessage contact.",
        "If recently ported, toggle iMessage/FaceTime off and back on only after carrier SMS is",
        "confirmed working."
      ],
      "android": [
        "Confirm Google Messages is default.",
        "Turn RCS off temporarily to test carrier SMS.",
        "Clear Messages cache if standard SMS behavior appears inconsistent."
      ],
      "general": [
        "If old SIM still works, treat as port pending/incomplete. Check LNP status. INTERNAL",
        "VERIFICATION REQUIRED",
        "If rejected, identify exact rejection reason and ask customer for corrected account",
        "number, transfer PIN, or ZIP.",
        "Tell customer to keep old carrier account active until the transfer fully completes.",
        "If port is complete and normal SMS works, classify as short-code/A2P routing delay.",
        "Ask customer to text",
        "HELP",
        "to the bank’s 5- or 6-digit short code where supported.",
        "Ask customer to test another bank/service to identify whether it is one sender or all",
        "OTPs.",
        "If Wi-Fi Calling was already enabled and provisioned, it may help with receiving SMS in",
        "poor coverage/travel scenarios, but do not guarantee bank OTP delivery.",
        "Escalate if standard SMS works but OTP/short codes still fail beyond 72 hours."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "I know bank codes are stressful because they can block account access. If your number just \ntransferred, normal calls/texts may start working before every bank’s routing system updates. \nThose bank-code routes are handled by separate short-code aggregators, and they can take up \nto 24–72 hours to refresh after a port or network switch. \nFirst, I’m going to check the port status. If the port is already complete, please try texting \nHELP\n \nto the bank’s 5- or 6-digit code, then request the code again."
      }
    ],
    "zendeskNote": "Issue: Port delay / bank OTP / short-code routing \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nDevice/OS: [Device + OS] \nSIM/eSIM: [eSIM / pSIM] \nTrigger: [Port-in / Teleport / New activation] \nPort date/time: [X] \nSymptoms: Standard SMS [works/fails], OTP [fails], old SIM [active/inactive] \nInternal checks: LNP status, rejection code, FOC, port completion INTERNAL VERIFICATION \nREQUIRED \nSteps tried: HELP to short code, P2P SMS test, RCS/iMessage isolated \nSuspected cause: LNP pending/rejected or A2P aggregator routing delay \nNext action: Resubmit LSR or escalate SMS trace if >72h post-completion",
    "escalation": {
      "neededWhen": [
        "Port stuck over expected window without clear rejection.",
        "Port completed, standard SMS works, but short codes fail beyond 72 hours.",
        "Customer cannot receive any inbound SMS after port completion.",
        "Old carrier and US Mobile both partially receive traffic, suggesting split routing."
      ],
      "evidenceNeeded": [
        "LNP status, rejection codes, FOC dates, donor response, LSR resubmission, SMSC trace,",
        "short-code routing trace."
      ],
      "summaryTemplate": "Port/OTP issue. Port completed on [date/time] / status [X]. Standard SMS works: [Yes/No]. Calls \nwork: [Yes/No]. Bank/short code affected: [X]. HELP test: [Result]. RCS/iMessage isolated. \nRequesting SMSC/short-code routing trace and LNP/NPAC review. INTERNAL VERIFICATION \nREQUIRED"
    },
    "escalationRequiredWhen": [
      "Port stuck over expected window without clear rejection.",
      "Port completed, standard SMS works, but short codes fail beyond 72 hours.",
      "Customer cannot receive any inbound SMS after port completion.",
      "Old carrier and US Mobile both partially receive traffic, suggesting split routing."
    ],
    "escalationFormat": [
      "Port/OTP issue. Port completed on [date/time] / status [X]. Standard SMS works: [Yes/No]. Calls ",
      "work: [Yes/No]. Bank/short code affected: [X]. HELP test: [Result]. RCS/iMessage isolated. ",
      "Requesting SMSC/short-code routing trace and LNP/NPAC review. INTERNAL VERIFICATION ",
      "REQUIRED"
    ],
    "relatedPlaybooks": [
      "no-service-sos-only",
      "messaging-routing-errors-error-97-invalid-destination",
      "teleport-esim-recovery"
    ],
    "sourceAliases": [
      "US Mobile Porting and Security Matrix.pdf; US Mobile Support Feature Matrix.pdf; Telecom \nSupport Symptom Translator Research.pdf"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "LNP status, rejection codes, FOC dates, donor response, LSR resubmission, SMSC trace,",
      "short-code routing trace."
    ],
    "batch": "Batch 1",
    "aliases": [
      "“bank codes not coming”",
      "“verification codes not coming”",
      "“number stuck”",
      "“old carrier still",
      "works”",
      "“port still pending”",
      "“can call but can’t get otp”"
    ],
    "symptoms": [
      "“bank codes not coming”",
      "“verification codes not coming”",
      "“number stuck”",
      "“old carrier still",
      "works”",
      "“port still pending”",
      "“can call but can’t get otp”"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "US Mobile Porting and Security Matrix.pdf; US Mobile Support Feature Matrix.pdf; Telecom"
  },
  {
    "id": "teleport-esim-recovery",
    "title": "Teleport & eSIM Recovery",
    "category": "network-signal",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "network-signal",
      "batch1"
    ],
    "keywords": [
      "teleport",
      "esim",
      "recovery",
      "network-signal"
    ],
    "customerPhrases": [
      "“after teleport nothing works”",
      "“esim disappeared”",
      "“qr code doesn’t work”",
      "“switched",
      "networks and lost service”",
      "“old esim/new esim issue”"
    ],
    "preview": {
      "problem": "Post-Teleport eSIM profile issue / old profile collision / new eSIM not installed / deleted eSIM /",
      "firstQuestion": "Did you install the new eSIM/profile for the network you switched to?",
      "firstAction": "Confirm Teleport status is complete or identify where it is stuck. INTERNAL",
      "escalateIf": "Teleport shows complete, new eSIM installed, old eSIM removed/disabled, device"
    },
    "quickAnswer": "Post-Teleport eSIM profile issue / old profile collision / new eSIM not installed / deleted eSIM / \ntransfer still pending / provisioning mismatch",
    "useWhen": "Use when customer reports: “After Teleport nothing works”, “eSIM disappeared”, “QR code doesn’t work”, “Switched",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Did you install the new eSIM/profile for the network you switched to?",
      "Do you still see the old eSIM profile in your phone’s Cellular/SIM settings?",
      "Are you currently connected to stable Wi-Fi?"
    ],
    "quickChecks": [
      "Verify Teleport/network switch status. INTERNAL VERIFICATION REQUIRED",
      "Confirm new eSIM is installed, enabled, and selected for voice/data.",
      "Confirm old inactive eSIM is removed or disabled after the new profile is available.",
      "Confirm stable Wi-Fi and VPN off during eSIM installation.",
      "Check Teleport frequency/limit status if another switch is requested. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "quickSteps": [
      "Verify Teleport/network switch status. INTERNAL VERIFICATION REQUIRED",
      "Confirm new eSIM is installed, enabled, and selected for voice/data.",
      "Confirm old inactive eSIM is removed or disabled after the new profile is available.",
      "Confirm stable Wi-Fi and VPN off during eSIM installation.",
      "Check Teleport frequency/limit status if another switch is requested. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "steps": [
      "Confirm Teleport status is complete or identify where it is stuck. INTERNAL",
      "VERIFICATION REQUIRED",
      "Confirm the customer has the new destination-network eSIM/activation method.",
      "Connect customer to stable Wi-Fi and disable VPN.",
      "Install the new eSIM/profile.",
      "Confirm new eSIM is turned ON and selected for voice/data.",
      "Remove or disable the old inactive eSIM only after confirming the new one exists or",
      "support confirms it is safe.",
      "Restart the device.",
      "If eSIM was accidentally deleted, issue/reissue a new eSIM/profile after verification.",
      "INTERNAL VERIFICATION REQUIRED",
      "If new eSIM installs but device remains SOS, escalate for routing/provisioning review."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Cellular: confirm the new line is ON.",
        "Select old inactive eSIM > Delete eSIM only after confirming the new eSIM is",
        "installed/available.",
        "Settings > General > About: confirm Carrier Lock = “No SIM restrictions.”",
        "If QR says already used/expired, do not keep rescanning; request reissue after",
        "verification."
      ],
      "android": [
        "Settings > Connections > SIM Manager / Network & Internet > SIMs.",
        "Confirm new eSIM is enabled and selected for calls/SMS/data.",
        "Remove old inactive eSIM after new one is confirmed.",
        "Disable VPN during eSIM download.",
        "Reboot after install."
      ],
      "general": [
        "Confirm Teleport status is complete or identify where it is stuck. INTERNAL",
        "VERIFICATION REQUIRED",
        "Confirm the customer has the new destination-network eSIM/activation method.",
        "Connect customer to stable Wi-Fi and disable VPN.",
        "Install the new eSIM/profile.",
        "Confirm new eSIM is turned ON and selected for voice/data.",
        "Remove or disable the old inactive eSIM only after confirming the new one exists or",
        "support confirms it is safe.",
        "Restart the device.",
        "If eSIM was accidentally deleted, issue/reissue a new eSIM/profile after verification.",
        "INTERNAL VERIFICATION REQUIRED",
        "If new eSIM installs but device remains SOS, escalate for routing/provisioning review."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "When a line switches networks, the phone needs a new network profile. The old eSIM becomes \ninactive, so we need to make sure the new one is installed and selected. \n\nPlease connect to Wi-Fi and open your Cellular/SIM settings. Tell me whether you see the new \nUS Mobile eSIM listed there, and whether the old one is still showing. I’ll check the switch status \non my end before we remove anything."
      }
    ],
    "zendeskNote": "Issue: Post-Teleport / eSIM recovery \nNetwork: From [X] to [Y] \nDevice/OS: [Device + OS] \nSIM/eSIM: eSIM \nTrigger: Teleport / network switch \nSymptoms: [SOS / no data / QR error / deleted eSIM / old profile active] \nInternal checks: Teleport status, EID/IMEI mapping, eSIM status INTERNAL VERIFICATION \nREQUIRED \nSteps tried: Wi-Fi confirmed, VPN off, new eSIM installed, old profile removed/disabled, reboot \nSuspected cause: eSIM profile collision / incomplete Teleport / stale provisioning \nNext action: Reissue eSIM or escalate routing/provisioning if installed but no service",
    "escalation": {
      "neededWhen": [
        "Teleport shows complete, new eSIM installed, old eSIM removed/disabled, device",
        "unlocked, but device remains SOS/No Service.",
        "eSIM install repeatedly fails with correct EID/IMEI and stable Wi-Fi.",
        "Teleport stuck/pending beyond normal processing with no clear customer action",
        "available."
      ],
      "evidenceNeeded": [
        "Teleport status, eSIM reissue, EID/IMEI mapping, QR/profile state, routing release, provisioning",
        "refresh, Teleport limit status."
      ],
      "summaryTemplate": "Post-Teleport failure. From [old network] to [new network]. Device/OS: [X]. EID/IMEI verified: \n[Yes/No]. New eSIM installed: [Yes/No]. Old eSIM removed/disabled: [Yes/No]. Teleport status: \n[X]. Current symptom: [SOS/no data/etc.]. Requesting routing/provisioning/eSIM state review. \nINTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Teleport shows complete, new eSIM installed, old eSIM removed/disabled, device",
      "unlocked, but device remains SOS/No Service.",
      "eSIM install repeatedly fails with correct EID/IMEI and stable Wi-Fi.",
      "Teleport stuck/pending beyond normal processing with no clear customer action",
      "available."
    ],
    "escalationFormat": [
      "Post-Teleport failure. From [old network] to [new network]. Device/OS: [X]. EID/IMEI verified: ",
      "[Yes/No]. New eSIM installed: [Yes/No]. Old eSIM removed/disabled: [Yes/No]. Teleport status: ",
      "[X]. Current symptom: [SOS/no data/etc.]. Requesting routing/provisioning/eSIM state review. ",
      "INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "no-service-sos-only",
      "data-connectivity-failures-bars-but-no-internet",
      "mms-picture-messaging-failures"
    ],
    "sourceAliases": [
      "US Mobile Device Compatibility Research.pdf; US Mobile Support Playbook Development.pdf; \nUS Mobile Porting and Security Matrix.pdf; US Mobile Error Dictionary Research.pdf"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Teleport status, eSIM reissue, EID/IMEI mapping, QR/profile state, routing release, provisioning",
      "refresh, Teleport limit status."
    ],
    "batch": "Batch 1",
    "aliases": [
      "“after teleport nothing works”",
      "“esim disappeared”",
      "“qr code doesn’t work”",
      "“switched",
      "networks and lost service”",
      "“old esim/new esim issue”"
    ],
    "symptoms": [
      "“after teleport nothing works”",
      "“esim disappeared”",
      "“qr code doesn’t work”",
      "“switched",
      "networks and lost service”",
      "“old esim/new esim issue”"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "US Mobile Device Compatibility Research.pdf; US Mobile Support Playbook Development.pdf;"
  },
  {
    "id": "speed-video-throttling",
    "title": "Speed & Video Throttling",
    "category": "start-here",
    "secondaryCategories": [],
    "priority": "normal",
    "tags": [
      "start-here",
      "batch1"
    ],
    "keywords": [
      "speed",
      "video",
      "throttling",
      "start-here"
    ],
    "customerPhrases": [
      "“slow data”",
      "“throttled”",
      "“data waster mode”",
      "“video buffering”",
      "“speed test is low”",
      "“unlimited",
      "but slow”"
    ],
    "preview": {
      "problem": "Hard throttle / premium data exhausted / QCI congestion / video resolution cap / hotspot bucket",
      "firstQuestion": "Are speeds consistently around the same low number, or do they go up and down?",
      "firstAction": "Confirm plan, cycle usage, and whether the line is in a hard throttle state. INTERNAL",
      "escalateIf": "Usage is below high-speed threshold, no throttle flag should apply, but speeds remain"
    },
    "quickAnswer": "Hard throttle / premium data exhausted / QCI congestion / video resolution cap / hotspot bucket \nlimit / device data-saver setting / coverage or RF limitation",
    "useWhen": "Use when customer reports: “Slow data”, “Throttled”, “Data waster mode”, “Video buffering”, “Speed test is low”, “Unlimited",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are speeds consistently around the same low number, or do they go up and down?",
      "Does normal browsing work but video apps buffer, or is everything slow?",
      "Are you using hotspot, VPN, iCloud Private Relay, Low Data Mode, or Data Saver?"
    ],
    "quickChecks": [
      "Verify current plan, high-speed data usage, hotspot usage, and throttle state. INTERNAL",
      "VERIFICATION REQUIRED",
      "Ask customer to run a speed test with Wi-Fi/VPN off.",
      "Check whether Data Waster/video setting is enabled if the issue is video quality.",
      "INTERNAL VERIFICATION REQUIRED",
      "Turn off Low Data Mode, Data Saver, VPN, Private Relay, or Private DNS.",
      "Compare indoor vs outdoor and off-peak vs peak-time behavior."
    ],
    "quickSteps": [
      "Verify current plan, high-speed data usage, hotspot usage, and throttle state. INTERNAL",
      "VERIFICATION REQUIRED",
      "Ask customer to run a speed test with Wi-Fi/VPN off.",
      "Check whether Data Waster/video setting is enabled if the issue is video quality.",
      "INTERNAL VERIFICATION REQUIRED",
      "Turn off Low Data Mode, Data Saver, VPN, Private Relay, or Private DNS.",
      "Compare indoor vs outdoor and off-peak vs peak-time behavior."
    ],
    "steps": [
      "Confirm plan, cycle usage, and whether the line is in a hard throttle state. INTERNAL",
      "VERIFICATION REQUIRED",
      "Ask customer to disable Wi-Fi/VPN and run one speed test.",
      "If speed is consistently near throttle rate, explain plan/cycle data behavior after",
      "verification.",
      "If only video buffers, check Data Waster/video settings and explain video management",
      "safely. INTERNAL VERIFICATION REQUIRED",
      "If speeds fluctuate heavily, test outdoors or at another location to isolate",
      "congestion/coverage.",
      "Turn off device-side data limiters.",
      "Confirm device band compatibility for the selected network, especially older/imported",
      "devices.",
      "Escalate only if unused data remains, no device limiters are active, and speeds are",
      "abnormally low across locations/times."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Cellular > Cellular Data Options > Low Data Mode OFF.",
        "Disable VPN and iCloud Private Relay for testing.",
        "Confirm correct SIM/eSIM is selected for cellular data.",
        "Test outdoors and with 5G Auto/LTE as appropriate."
      ],
      "android": [
        "Settings > Connections / Network & Internet > Data Saver OFF.",
        "Disable VPN/Private DNS.",
        "Confirm preferred network mode is 5G/LTE/Auto where supported.",
        "Confirm APN is correct if slow data followed activation/Teleport."
      ],
      "general": [
        "Confirm plan, cycle usage, and whether the line is in a hard throttle state. INTERNAL",
        "VERIFICATION REQUIRED",
        "Ask customer to disable Wi-Fi/VPN and run one speed test.",
        "If speed is consistently near throttle rate, explain plan/cycle data behavior after",
        "verification.",
        "If only video buffers, check Data Waster/video settings and explain video management",
        "safely. INTERNAL VERIFICATION REQUIRED",
        "If speeds fluctuate heavily, test outdoors or at another location to isolate",
        "congestion/coverage.",
        "Turn off device-side data limiters.",
        "Confirm device band compatibility for the selected network, especially older/imported",
        "devices.",
        "Escalate only if unused data remains, no device limiters are active, and speeds are",
        "abnormally low across locations/times."
      ]
    },
    "copyTemplates": [
      {
        "label": "If hard throttle is confirmed",
        "text": "I checked the line, and the high-speed data bucket for this cycle has been used. The line still \nhas data access, but speeds are reduced for the rest of the cycle based on the plan rules. You \ncan still browse, message, and check email, but video and large downloads may feel slower \nuntil the next cycle or an eligible top-up/plan change."
      },
      {
        "label": "If video setting is the issue",
        "text": "Your general data may be working normally, but video has its own streaming-quality setting. If \n\nyou want higher video resolution, we can check whether Data Waster or the available video \nsetting is enabled for your plan/network."
      }
    ],
    "zendeskNote": "Issue: Slow data / video buffering \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nDevice/OS: [Device + OS] \nSIM/eSIM: [eSIM / pSIM] \nTrigger: [Cycle usage / Location / Teleport / Device change / Sudden] \nSymptoms: Speed test [X], video [buffers/OK], browsing [slow/OK] \nInternal checks: Plan, usage, throttle state, Data Waster/video setting INTERNAL \nVERIFICATION REQUIRED \nSteps tried: Wi-Fi/VPN off, Low Data/Data Saver off, speed test, location comparison \nSuspected cause: [Hard throttle / QCI congestion / video cap / device setting / coverage] \nNext action: Educate, adjust setting if eligible, or escalate false-throttle/abnormal speed case",
    "escalation": {
      "neededWhen": [
        "Usage is below high-speed threshold, no throttle flag should apply, but speeds remain",
        "abnormally low across locations and times.",
        "Speed is below expected throttled rate even after device/network checks.",
        "Multiple customers report same abnormal speed issue on same network/location."
      ],
      "evidenceNeeded": [
        "Plan type, cycle usage, throttle flag, Data Waster/video setting, hotspot bucket, account-level",
        "data state, local network incident flags."
      ],
      "summaryTemplate": "Slow data / possible false throttle. Network: [X]. Device/OS: [X]. Plan: [X]. Cycle usage: [X]. \nSpeed tests: [X]. VPN/Data Saver/Low Data Mode off. Tested locations/times: [X]. Customer \nshould have unused high-speed data. Requesting throttle/provisioning/QCI review. INTERNAL \nVERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Usage is below high-speed threshold, no throttle flag should apply, but speeds remain",
      "abnormally low across locations and times.",
      "Speed is below expected throttled rate even after device/network checks.",
      "Multiple customers report same abnormal speed issue on same network/location."
    ],
    "escalationFormat": [
      "Slow data / possible false throttle. Network: [X]. Device/OS: [X]. Plan: [X]. Cycle usage: [X]. ",
      "Speed tests: [X]. VPN/Data Saver/Low Data Mode off. Tested locations/times: [X]. Customer ",
      "should have unused high-speed data. Requesting throttle/provisioning/QCI review. INTERNAL ",
      "VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "data-connectivity-failures-bars-but-no-internet",
      "hotspot-configuration",
      "device-compatibility"
    ],
    "sourceAliases": [
      "US Mobile Performance Support Matrix.pdf; US Mobile Support Safe-Language Matrix.pdf; \nTelecom Support Training Report.pdf"
    ],
    "confidence": "High for diagnostic logic; plan-specific limits require verification",
    "internalVerificationRequired": [
      "Plan type, cycle usage, throttle flag, Data Waster/video setting, hotspot bucket, account-level",
      "data state, local network incident flags."
    ],
    "batch": "Batch 1",
    "aliases": [
      "“slow data”",
      "“throttled”",
      "“data waster mode”",
      "“video buffering”",
      "“speed test is low”",
      "“unlimited",
      "but slow”"
    ],
    "symptoms": [
      "“slow data”",
      "“throttled”",
      "“data waster mode”",
      "“video buffering”",
      "“speed test is low”",
      "“unlimited",
      "but slow”"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "US Mobile Performance Support Matrix.pdf; US Mobile Support Safe-Language Matrix.pdf;"
  },
  {
    "id": "hotspot-configuration",
    "title": "Hotspot Configuration",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "normal",
    "tags": [
      "apn-data",
      "batch1"
    ],
    "keywords": [
      "hotspot",
      "configuration",
      "apn-data"
    ],
    "customerPhrases": [
      "“hotspot not working”",
      "“personal hotspot missing”",
      "“laptop connects but no internet”",
      "“contact",
      "carrier”",
      "“tethering fails”"
    ],
    "preview": {
      "problem": "Hotspot allotment exhausted / tethering entitlement missing / APN DUN issue / iOS Personal",
      "firstQuestion": "Is the hotspot toggle missing, or does your laptop connect but show no internet?",
      "firstAction": "Confirm plan eligibility and hotspot balance. INTERNAL VERIFICATION REQUIRED",
      "escalateIf": "Hotspot data available, APN correct, phone data works, VPN/DNS off, but hotspot"
    },
    "quickAnswer": "Hotspot allotment exhausted / tethering entitlement missing / APN DUN issue / iOS Personal \nHotspot APN missing / VPN or DNS interference / device setting issue",
    "useWhen": "Use when customer reports: “Hotspot not working”, “Personal Hotspot missing”, “Laptop connects but no internet”, “Contact",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Is the hotspot toggle missing, or does your laptop connect but show no internet?",
      "Have you checked whether your plan still has hotspot data available?",
      "Are you using VPN, Private DNS, or Data Saver on the phone or laptop?"
    ],
    "quickChecks": [
      "Verify plan includes hotspot and hotspot data remains. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm cellular data works directly on the phone.",
      "Check whether iPhone shows “Contact Carrier” or missing Personal Hotspot.",
      "On Android, verify APN Type includes",
      "dun",
      "where required.",
      "Disable VPN, Private DNS, and Data Saver for testing."
    ],
    "quickSteps": [
      "Verify plan includes hotspot and hotspot data remains. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm cellular data works directly on the phone.",
      "Check whether iPhone shows “Contact Carrier” or missing Personal Hotspot.",
      "On Android, verify APN Type includes",
      "dun",
      "where required.",
      "Disable VPN, Private DNS, and Data Saver for testing."
    ],
    "steps": [
      "Confirm plan eligibility and hotspot balance. INTERNAL VERIFICATION REQUIRED",
      "Confirm phone cellular data works without hotspot.",
      "Restart phone and connected device.",
      "Disable VPN/Private DNS/Data Saver.",
      "iPhone: check Cellular Data Network > Personal Hotspot APN and enter the correct",
      "network-specific APN if required.",
      "Android: verify APN Type and include",
      "dun",
      "only where appropriate for that network/APN",
      "setup.",
      "Dark Star Samsung: if hotspot fails despite correct APN, check approved MVNO",
      "Type/Value workaround or escalate.",
      "Test with one device only.",
      "If APN, balance, and device settings are correct but hotspot still fails, escalate for",
      "entitlement/SOC provisioning review. INTERNAL VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Cellular > Personal Hotspot: confirm toggle exists and is enabled.",
        "If missing, check Settings > Cellular > Cellular Data Network > Personal Hotspot APN.",
        "Use the correct network-specific APN, not a generic one.",
        "Reset Network Settings only after account/APN checks."
      ],
      "android": [
        "Settings > Mobile Networks > Access Point Names: verify active APN.",
        "Add",
        "dun",
        "to APN Type only if required and accepted by device/network.",
        "Turn Data Saver OFF.",
        "Disable Private DNS/VPN.",
        "For Samsung/Dark Star hotspot issues, document model and APN field state."
      ],
      "general": [
        "Confirm plan eligibility and hotspot balance. INTERNAL VERIFICATION REQUIRED",
        "Confirm phone cellular data works without hotspot.",
        "Restart phone and connected device.",
        "Disable VPN/Private DNS/Data Saver.",
        "iPhone: check Cellular Data Network > Personal Hotspot APN and enter the correct",
        "network-specific APN if required.",
        "Android: verify APN Type and include",
        "dun",
        "only where appropriate for that network/APN",
        "setup.",
        "Dark Star Samsung: if hotspot fails despite correct APN, check approved MVNO",
        "Type/Value workaround or escalate.",
        "Test with one device only.",
        "If APN, balance, and device settings are correct but hotspot still fails, escalate for",
        "entitlement/SOC provisioning review. INTERNAL VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Hotspot needs two things to line up: your plan’s hotspot data and the phone’s tethering settings. \nLet’s check both. \nFirst, please confirm whether the hotspot button is missing entirely, or whether your laptop \nconnects but says “No Internet.” I’ll check the hotspot balance and plan eligibility on my end \nwhile you test with VPN/Data Saver turned off."
      }
    ],
    "zendeskNote": "Issue: Hotspot failure \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nDevice/OS: [Device + OS] \nSIM/eSIM: [eSIM / pSIM] \nTrigger: [Plan change / Renewal / Teleport / New device / Sudden] \nSymptoms: [Toggle missing / Contact Carrier / connects no internet / drops connection] \nInternal checks: Hotspot eligible, hotspot balance, entitlement/SOC state INTERNAL \nVERIFICATION REQUIRED \nSteps tried: Phone data test, VPN/DNS off, APN/DUN checked, reboot, single-device test \nSuspected cause: Hotspot bucket/APN/tethering entitlement issue \nNext action: Escalate entitlement/SOC if APN and hotspot balance are correct",
    "escalation": {
      "neededWhen": [
        "Hotspot data available, APN correct, phone data works, VPN/DNS off, but hotspot",
        "throws “Contact Carrier” or tethered devices have no internet.",
        "Hotspot toggle missing after eligible plan confirmed.",
        "Post-Teleport hotspot works on old network but fails on new network after APN",
        "correction."
      ],
      "evidenceNeeded": [
        "Hotspot eligibility, hotspot balance, tethering entitlement/SOC state, backend plan feature",
        "status."
      ],
      "summaryTemplate": "Hotspot failure. Network: [X]. Device/OS: [X]. Plan/hotspot balance confirmed. Phone cellular \ndata works. APN/DUN checked: [X]. VPN/DNS/Data Saver off. Error: [Contact Carrier / no \ninternet / toggle missing]. Requesting hotspot entitlement/SOC provisioning review. INTERNAL \nVERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Hotspot data available, APN correct, phone data works, VPN/DNS off, but hotspot",
      "throws “Contact Carrier” or tethered devices have no internet.",
      "Hotspot toggle missing after eligible plan confirmed.",
      "Post-Teleport hotspot works on old network but fails on new network after APN",
      "correction."
    ],
    "escalationFormat": [
      "Hotspot failure. Network: [X]. Device/OS: [X]. Plan/hotspot balance confirmed. Phone cellular ",
      "data works. APN/DUN checked: [X]. VPN/DNS/Data Saver off. Error: [Contact Carrier / no ",
      "internet / toggle missing]. Requesting hotspot entitlement/SOC provisioning review. INTERNAL ",
      "VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "data-connectivity-failures-bars-but-no-internet",
      "speed-video-throttling",
      "mms-picture-messaging-failures"
    ],
    "sourceAliases": [
      "US Mobile APN_MMS_Hotspot Research.pdf; Telecom Support Symptom Translator \nResearch.pdf; US Mobile Support Feature Matrix.pdf"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Hotspot eligibility, hotspot balance, tethering entitlement/SOC state, backend plan feature",
      "status."
    ],
    "batch": "Batch 1",
    "aliases": [
      "“hotspot not working”",
      "“personal hotspot missing”",
      "“laptop connects but no internet”",
      "“contact",
      "carrier”",
      "“tethering fails”"
    ],
    "symptoms": [
      "“hotspot not working”",
      "“personal hotspot missing”",
      "“laptop connects but no internet”",
      "“contact",
      "carrier”",
      "“tethering fails”"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "US Mobile APN_MMS_Hotspot Research.pdf; Telecom Support Symptom Translator"
  },
  {
    "id": "messaging-routing-errors-error-97-invalid-destination",
    "title": "Messaging Routing Errors — Error 97 & Invalid Destination",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "apn-data",
      "batch1"
    ],
    "keywords": [
      "messaging",
      "routing",
      "errors",
      "error",
      "invalid",
      "destination",
      "apn-data"
    ],
    "customerPhrases": [
      "“error 97”",
      "“invalid destination address”",
      "“message not sent”",
      "“can’t text”",
      "“texts bounce back”",
      "“group text error”"
    ],
    "preview": {
      "problem": "SMS feature not provisioned / text allotment issue / SMSC routing issue / Google Messages",
      "firstQuestion": "Does the error happen with plain one-to-one texts, or only with pictures/group chats?",
      "firstAction": "Identify whether failure is SMS-only, MMS-only, RCS-only, or all messaging.",
      "escalateIf": "Error 97 persists after text feature/balance/provisioning refresh."
    },
    "quickAnswer": "SMS feature not provisioned / text allotment issue / SMSC routing issue / Google Messages \ncache or RCS state / MMS/APN issue",
    "useWhen": "Use when customer reports: “Error 97”, “Invalid destination address”, “Message not sent”, “Can’t text”, “Texts bounce back”,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Does the error happen with plain one-to-one texts, or only with pictures/group chats?",
      "Are you using iPhone or Android, and which messaging app?",
      "Did this start after activation, port-in, Teleport, plan renewal, or an app/OS update?"
    ],
    "quickChecks": [
      "Verify text plan/status and messaging feature provisioning. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm whether standard SMS works to multiple contacts.",
      "Confirm recipient number format includes full 10-digit number or +1 format if needed.",
      "For Android, confirm Google Messages is default and toggle RCS off for testing.",
      "If MMS/group-only, verify cellular data and APN/MMS settings."
    ],
    "quickSteps": [
      "Verify text plan/status and messaging feature provisioning. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm whether standard SMS works to multiple contacts.",
      "Confirm recipient number format includes full 10-digit number or +1 format if needed.",
      "For Android, confirm Google Messages is default and toggle RCS off for testing.",
      "If MMS/group-only, verify cellular data and APN/MMS settings."
    ],
    "steps": [
      "Identify whether failure is SMS-only, MMS-only, RCS-only, or all messaging.",
      "Check line status, text balance, and SMS feature provisioning. INTERNAL",
      "VERIFICATION REQUIRED",
      "Test plain SMS to one known working number.",
      "If Error 97 appears on all outgoing SMS, refresh/reprovision SMS feature if available.",
      "INTERNAL VERIFICATION REQUIRED",
      "If “Invalid destination address” appears on Android, check number formatting and",
      "Google Messages default status.",
      "Turn RCS off temporarily and retry as SMS/MMS.",
      "Clear Google Messages cache first.",
      "If MMS/group-only, follow MMS/APN playbook.",
      "Restart device.",
      "Escalate if feature provisioning, APN, cache, RCS, and recipient tests all pass but error",
      "persists."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Confirm Send as SMS is enabled if iMessage delivery fails.",
        "Test SMS to a non-iMessage contact.",
        "If after port, confirm carrier SMS works before troubleshooting iMessage activation.",
        "Toggle iMessage/FaceTime only after SMS path is confirmed."
      ],
      "android": [
        "Confirm Google Messages is default.",
        "Toggle RCS off and test.",
        "Clear Messages cache.",
        "Avoid clearing storage/data unless customer understands settings may reset.",
        "Confirm APN/MMS settings if group or picture messages fail.",
        "Copy-ready customer reply — Error 97:",
        "Error 97 usually means the texting route on the line is being denied or is out of sync. I’m going",
        "to check the text feature on the line first. While I do that, please try sending a plain text — no",
        "picture or group chat — to one contact and tell me whether the same error appears.",
        "Copy-ready customer reply — Invalid destination address:",
        "That error usually shows up when the phone’s messaging app is confused between",
        "SMS/MMS/RCS, or when the MMS route needs a refresh. Let’s test it cleanly: please turn RCS",
        "off temporarily in Google Messages, send a plain text to one number, and then we’ll test a",
        "picture message separately."
      ],
      "general": [
        "Identify whether failure is SMS-only, MMS-only, RCS-only, or all messaging.",
        "Check line status, text balance, and SMS feature provisioning. INTERNAL",
        "VERIFICATION REQUIRED",
        "Test plain SMS to one known working number.",
        "If Error 97 appears on all outgoing SMS, refresh/reprovision SMS feature if available.",
        "INTERNAL VERIFICATION REQUIRED",
        "If “Invalid destination address” appears on Android, check number formatting and",
        "Google Messages default status.",
        "Turn RCS off temporarily and retry as SMS/MMS.",
        "Clear Google Messages cache first.",
        "If MMS/group-only, follow MMS/APN playbook.",
        "Restart device.",
        "Escalate if feature provisioning, APN, cache, RCS, and recipient tests all pass but error",
        "persists."
      ]
    },
    "copyTemplates": [],
    "zendeskNote": "Issue: Messaging error — [Error 97 / Invalid destination address] \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nDevice/OS: [Device + OS] \nMessaging app: [iMessage / Google Messages / Samsung Messages / Other] \nSIM/eSIM: [eSIM / pSIM] \nTrigger: [Activation / Port / Teleport / Renewal / OS update / Sudden] \nSymptoms: SMS [works/fails], MMS [works/fails], RCS [on/off], error string [exact] \nInternal checks: Text feature, text balance, SMS provisioning INTERNAL VERIFICATION \nREQUIRED \nSteps tried: Plain SMS test, recipient format check, RCS off, cache clear, APN/MMS check, \nreboot \nSuspected cause: SMS provisioning/routing or Android messaging app state \nNext action: Reprovision SMS feature or escalate routing trace if persistent",
    "escalation": {
      "neededWhen": [
        "Error 97 persists after text feature/balance/provisioning refresh.",
        "Plain SMS fails to all recipients with line active and no balance issue.",
        "Invalid destination persists after RCS off, cache clear, APN verified, and recipient",
        "formatting confirmed.",
        "Messaging fails after port/Teleport beyond expected routing update window."
      ],
      "evidenceNeeded": [
        "Text balance, SMS feature provisioning, backend reprovisioning, SMSC routing trace,",
        "short-code/P2P routing logs."
      ],
      "summaryTemplate": "Messaging error: [exact error]. Network: [X]. Device/OS: [X]. App: [X]. Trigger: [X]. Plain SMS \nresult: [X]. MMS result: [X]. RCS state: [X]. Text feature/balance verified. APN checked if MMS \naffected. Cache cleared/reboot done. Requesting SMS feature/routing/SMSC review. \nINTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Error 97 persists after text feature/balance/provisioning refresh.",
      "Plain SMS fails to all recipients with line active and no balance issue.",
      "Invalid destination persists after RCS off, cache clear, APN verified, and recipient",
      "formatting confirmed.",
      "Messaging fails after port/Teleport beyond expected routing update window."
    ],
    "escalationFormat": [
      "Messaging error: [exact error]. Network: [X]. Device/OS: [X]. App: [X]. Trigger: [X]. Plain SMS ",
      "result: [X]. MMS result: [X]. RCS state: [X]. Text feature/balance verified. APN checked if MMS ",
      "affected. Cache cleared/reboot done. Requesting SMS feature/routing/SMSC review. ",
      "INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "mms-picture-messaging-failures",
      "porting-bank-code-delays",
      "data-connectivity-failures-bars-but-no-internet"
    ],
    "sourceAliases": [
      "US Mobile Error Dictionary Research.pdf; Telecom Support Symptom Translator Research.pdf; \nUS Mobile Support Feature Matrix.pdf"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Text balance, SMS feature provisioning, backend reprovisioning, SMSC routing trace,",
      "short-code/P2P routing logs."
    ],
    "batch": "Batch 1",
    "aliases": [
      "“error 97”",
      "“invalid destination address”",
      "“message not sent”",
      "“can’t text”",
      "“texts bounce back”",
      "“group text error”"
    ],
    "symptoms": [
      "“error 97”",
      "“invalid destination address”",
      "“message not sent”",
      "“can’t text”",
      "“texts bounce back”",
      "“group text error”"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "US Mobile Error Dictionary Research.pdf; Telecom Support Symptom Translator Research.pdf;"
  },
  {
    "id": "mobile-data-not-working-bars-but-no-internet",
    "title": "Mobile Data Not Working / Bars But No Internet",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "apn-data",
      "batch2"
    ],
    "keywords": [
      "mobile",
      "data",
      "not",
      "working",
      "bars",
      "but",
      "internet",
      "apn-data"
    ],
    "customerPhrases": [
      "mobile data not working",
      "bars but no internet",
      "lte no internet",
      "5g no data",
      "only works on wi-fi",
      "apps won’t load",
      "cellular data down",
      "offline",
      "data stopped working"
    ],
    "preview": {
      "problem": "APN mismatch / data allotment issue / wrong SIM selected for data / device data setting issue /",
      "firstQuestion": "Please turn Wi-Fi off for a moment — does anything load on cellular only?",
      "firstAction": "Check the line status and data balance. INTERNAL VERIFICATION REQUIRED",
      "escalateIf": "APN is correct."
    },
    "quickAnswer": "APN mismatch / data allotment issue / wrong SIM selected for data / device data setting issue / \nbackend data provisioning issue",
    "useWhen": "Use when customer reports: mobile data not working, bars but no internet, LTE no internet, 5G no data, only works on Wi-Fi,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Please turn Wi-Fi off for a moment — does anything load on cellular only?",
      "Which network is this line on: Warp, Dark Star, Light Speed, or are you not sure?",
      "Did this start after activation, Teleport, renewal, device change, or an update?"
    ],
    "quickChecks": [
      "Confirm line is active and has usable data remaining. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm Wi-Fi is OFF during the test.",
      "Confirm Cellular Data / Mobile Data is ON.",
      "Confirm the correct SIM/eSIM is selected for cellular data.",
      "Disable VPN, iCloud Private Relay, Private DNS, Low Data Mode, or Data Saver for",
      "testing."
    ],
    "quickSteps": [
      "Confirm line is active and has usable data remaining. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm Wi-Fi is OFF during the test.",
      "Confirm Cellular Data / Mobile Data is ON.",
      "Confirm the correct SIM/eSIM is selected for cellular data.",
      "Disable VPN, iCloud Private Relay, Private DNS, Low Data Mode, or Data Saver for",
      "testing."
    ],
    "steps": [
      "Check the line status and data balance. INTERNAL VERIFICATION REQUIRED",
      "Ask customer to turn Wi-Fi OFF and test a simple website.",
      "Confirm the phone is using the correct line for data if it has dual SIM/eSIM.",
      "Turn Airplane Mode ON for 30 seconds, then OFF.",
      "Confirm the active network: Warp, Dark Star, or Light Speed.",
      "Apply the correct APN path for that network.",
      "Restart the phone after APN changes.",
      "If data still fails, perform Reset Network Settings.",
      "If calls/SMS work, APN is correct, data is available, and cellular data still fails, escalate",
      "for backend data provisioning/PCRF/SOC review. INTERNAL VERIFICATION",
      "REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Cellular > make sure Cellular Data is ON.",
        "Settings > Cellular > Cellular Data > select the correct US Mobile line.",
        "Turn off Low Data Mode.",
        "Turn off VPN/iCloud Private Relay temporarily.",
        "If APN profile is needed, use Safari only to download the profile, then install it under",
        "Settings > General > VPN & Device Management.",
        "If the phone has old APN profiles, remove the old inactive one before installing the",
        "correct current profile."
      ],
      "android": [
        "Settings > Connections / Network & Internet > SIMs > confirm Mobile Data is ON.",
        "Settings > Mobile Networks > Access Point Names.",
        "Verify the active APN matches the current network.",
        "Make sure the APN is selected with the radio button after saving.",
        "Turn off Data Saver, VPN, and Private DNS for testing.",
        "Restart after APN edits."
      ],
      "general": [
        "Check the line status and data balance. INTERNAL VERIFICATION REQUIRED",
        "Ask customer to turn Wi-Fi OFF and test a simple website.",
        "Confirm the phone is using the correct line for data if it has dual SIM/eSIM.",
        "Turn Airplane Mode ON for 30 seconds, then OFF.",
        "Confirm the active network: Warp, Dark Star, or Light Speed.",
        "Apply the correct APN path for that network.",
        "Restart the phone after APN changes.",
        "If data still fails, perform Reset Network Settings.",
        "If calls/SMS work, APN is correct, data is available, and cellular data still fails, escalate",
        "for backend data provisioning/PCRF/SOC review. INTERNAL VERIFICATION",
        "REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Signal bars mean your phone can see the tower, but the internet still needs the correct data \nroute to work. Let’s test cellular data directly. \nPlease turn Wi-Fi off, turn Airplane Mode on for 30 seconds, then turn it off. After that, try \nopening a simple website. I’ll also check that the line has active data and isn’t blocked \naccount-side."
      }
    ],
    "zendeskNote": "Issue: Mobile data not working / bars but no internet \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nDevice/OS: [Device + OS] \nSIM/eSIM: [eSIM / pSIM] \nTrigger: [Activation / Teleport / Renewal / Device change / OS update / Sudden] \nSymptoms: Calls [work/fail], SMS [work/fail], cellular data fails, Wi-Fi works \nSteps tried: Wi-Fi off test, Airplane Mode toggle, VPN/DNS off, APN verified, reboot, network \nreset \nInternal checks: Line active, data balance, no data block/throttle INTERNAL VERIFICATION \nREQUIRED \nSuspected cause: APN/data routing/provisioning issue \nNext action: Escalate if APN and account checks pass but data still fails",
    "escalation": {
      "neededWhen": [
        "APN is correct.",
        "Data balance is active.",
        "Cellular Data is ON.",
        "Device settings are clean.",
        "Calls/SMS work but data remains fully dormant."
      ],
      "evidenceNeeded": [
        "Data balance, line status, throttle state, backend data",
        "provisioning, SOC/PCRF state."
      ],
      "summaryTemplate": "Customer has bars but no cellular data. Network: [X]. Device/OS: [X]. SIM type: [X]. Calls/SMS: \n[work/fail]. Data balance active. APN verified. VPN/DNS/Data Saver off. Airplane \ntoggle/reboot/network reset completed. Requesting backend data SOC/PCRF/session review. \nINTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "APN is correct.",
      "Data balance is active.",
      "Cellular Data is ON.",
      "Device settings are clean.",
      "Calls/SMS work but data remains fully dormant."
    ],
    "escalationFormat": [
      "Customer has bars but no cellular data. Network: [X]. Device/OS: [X]. SIM type: [X]. Calls/SMS: ",
      "[work/fail]. Data balance active. APN verified. VPN/DNS/Data Saver off. Airplane ",
      "toggle/reboot/network reset completed. Requesting backend data SOC/PCRF/session review. ",
      "INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "warp-apn-setup-mms-configuration",
      "dark-star-apn-setup-android-save-failure",
      "light-speed-apn-setup",
      "apn-escalation-triggers",
      "post-teleport-data-mms-failure"
    ],
    "sourceAliases": [
      "X1",
      "X4",
      "P2",
      "P3",
      "P4"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Data balance, line status, throttle state, backend data",
      "provisioning, SOC/PCRF state."
    ],
    "batch": "Batch 2",
    "aliases": [
      "mobile data not working",
      "bars but no internet",
      "lte no internet",
      "5g no data",
      "only works on wi-fi",
      "apps won’t load",
      "cellular data down",
      "offline",
      "data stopped working"
    ],
    "symptoms": [
      "mobile data not working",
      "bars but no internet",
      "lte no internet",
      "5g no data",
      "only works on wi-fi",
      "apps won’t load",
      "cellular data down",
      "offline",
      "data stopped working"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X1, X4, P2, P3, P4"
  },
  {
    "id": "warp-apn-setup-mms-configuration",
    "title": "Warp APN Setup & MMS Configuration",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "apn-data",
      "batch2"
    ],
    "keywords": [
      "warp",
      "apn",
      "setup",
      "mms",
      "configuration",
      "apn-data"
    ],
    "customerPhrases": [
      "warp apn",
      "verizon apn",
      "vzwinternet",
      "vzwapp",
      "vzwims",
      "vzwadmin",
      "warp mms",
      "android",
      "warp data",
      "samsung warp apn"
    ],
    "preview": {
      "problem": "Warp APN configuration / MMS routing / IMS/FOTA/CBS APN issue",
      "firstQuestion": "Are you using iPhone or Android?",
      "firstAction": "Confirm the customer is actually on Warp.",
      "escalateIf": "All required APNs are entered correctly."
    },
    "quickAnswer": "Warp APN configuration / MMS routing / IMS/FOTA/CBS APN issue",
    "useWhen": "Use when customer reports: Warp APN, Verizon APN, vzwinternet, VZWAPP, VZWIMS, VZWADMIN, Warp MMS, Android",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are you using iPhone or Android?",
      "Is regular data failing, or only picture/group messages?",
      "Are you on Warp, or did this start after switching networks?"
    ],
    "quickChecks": [
      "Confirm data balance is available, especially for MMS. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm Wi-Fi is OFF during MMS testing.",
      "Confirm active APN is the Warp/default data APN.",
      "Confirm MMS/CBS APN exists if Android requires it.",
      "Confirm picture file is not too large.",
      "Warp APN reference — Android deep setup:",
      "Use exact values. Leave any field blank if not listed.",
      "Warp 2 / Default data APN:",
      "Name: Warp 2",
      "APN:",
      "vzwinternet",
      "MMSC:",
      "http://mms.vtext.com/servlets/mms",
      "MMS Port:",
      "80",
      "MCC:",
      "311",
      "MNC:",
      "480",
      "APN Type:",
      "default,supl",
      "APN Protocol: IPv4/IPv6",
      "Roaming Protocol: IPv4/IPv6",
      "Warp FOTA APN:",
      "Name: Warp FOTA",
      "APN:",
      "VZWADMIN",
      "MCC:",
      "311",
      "MNC:",
      "480",
      "APN Type:",
      "fota",
      "APN Protocol: IPv4/IPv6",
      "Roaming Protocol: IPv4/IPv6",
      "Warp IMS APN:",
      "Name: Warp IMS",
      "APN:",
      "VZWIMS",
      "MCC:",
      "311",
      "MNC:",
      "480",
      "APN Type:",
      "ims,ia",
      "APN Protocol: IPv4/IPv6",
      "Roaming Protocol: IPv4/IPv6",
      "Warp CBS / MMS APN:",
      "Name: Warp CBS",
      "APN:",
      "VZWAPP",
      "MMSC:",
      "http://mms.vtext.com/servlets/mms",
      "MCC:",
      "311",
      "MNC:",
      "480",
      "APN Type:",
      "cbs,mms",
      "APN Protocol: IPv4/IPv6",
      "Roaming Protocol: IPv4/IPv6"
    ],
    "quickSteps": [
      "Confirm data balance is available, especially for MMS. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm Wi-Fi is OFF during MMS testing.",
      "Confirm active APN is the Warp/default data APN.",
      "Confirm MMS/CBS APN exists if Android requires it.",
      "Confirm picture file is not too large.",
      "Warp APN reference — Android deep setup:",
      "Use exact values. Leave any field blank if not listed.",
      "Warp 2 / Default data APN:",
      "Name: Warp 2",
      "APN:",
      "vzwinternet",
      "MMSC:",
      "http://mms.vtext.com/servlets/mms",
      "MMS Port:",
      "80",
      "MCC:",
      "311",
      "MNC:",
      "480",
      "APN Type:",
      "default,supl",
      "APN Protocol: IPv4/IPv6",
      "Roaming Protocol: IPv4/IPv6",
      "Warp FOTA APN:",
      "Name: Warp FOTA",
      "APN:",
      "VZWADMIN",
      "MCC:",
      "311",
      "MNC:",
      "480",
      "APN Type:",
      "fota",
      "APN Protocol: IPv4/IPv6",
      "Roaming Protocol: IPv4/IPv6",
      "Warp IMS APN:",
      "Name: Warp IMS",
      "APN:",
      "VZWIMS",
      "MCC:",
      "311",
      "MNC:",
      "480",
      "APN Type:",
      "ims,ia",
      "APN Protocol: IPv4/IPv6",
      "Roaming Protocol: IPv4/IPv6",
      "Warp CBS / MMS APN:",
      "Name: Warp CBS",
      "APN:",
      "VZWAPP",
      "MMSC:",
      "http://mms.vtext.com/servlets/mms",
      "MCC:",
      "311",
      "MNC:",
      "480",
      "APN Type:",
      "cbs,mms",
      "APN Protocol: IPv4/IPv6",
      "Roaming Protocol: IPv4/IPv6"
    ],
    "steps": [
      "Confirm the customer is actually on Warp.",
      "Confirm data balance is available. INTERNAL VERIFICATION REQUIRED",
      "On Android, go to Settings > Mobile Networks > Access Point Names.",
      "Add or verify the Warp 2 default APN.",
      "Add FOTA, IMS, and CBS/MMS APNs if needed.",
      "On Samsung, save FOTA before IMS if the phone rejects the APN sequence.",
      "Select the Warp 2 /",
      "vzwinternet",
      "APN as the active APN.",
      "Restart the phone.",
      "Test browser data first, then MMS.",
      "Escalate if all APNs are correct, selected, and the line still fails data/MMS."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "iPhone usually receives carrier settings automatically.",
        "If a profile is needed, use Safari to download the US Mobile APN profile and install it in",
        "Settings > General > VPN & Device Management.",
        "Remove old or conflicting APN profiles before installing the new one."
      ],
      "android": [
        "Manually enter APNs exactly.",
        "No extra spaces in APN Type.",
        "Make sure the active/default APN is selected after saving.",
        "Restart after saving."
      ],
      "general": [
        "Confirm the customer is actually on Warp.",
        "Confirm data balance is available. INTERNAL VERIFICATION REQUIRED",
        "On Android, go to Settings > Mobile Networks > Access Point Names.",
        "Add or verify the Warp 2 default APN.",
        "Add FOTA, IMS, and CBS/MMS APNs if needed.",
        "On Samsung, save FOTA before IMS if the phone rejects the APN sequence.",
        "Select the Warp 2 /",
        "vzwinternet",
        "APN as the active APN.",
        "Restart the phone.",
        "Test browser data first, then MMS.",
        "Escalate if all APNs are correct, selected, and the line still fails data/MMS."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Because you’re on Warp, your Android phone may need a few separate APN entries so data, \npicture messages, and network services route correctly. Let’s first add the main data APN, \nvzwinternet\n, then confirm the MMS profile is present."
      }
    ],
    "zendeskNote": "Issue: Warp APN / MMS configuration \nDevice/OS: [Device + OS] \nNetwork: Warp \n\nSIM/eSIM: [eSIM / pSIM] \nSymptoms: [No data / MMS fails / both] \nSteps tried: Verified Warp 2, FOTA, IMS, CBS APNs; selected Warp 2; rebooted; tested \ndata/MMS \nInternal checks: Data balance and MMS eligibility INTERNAL VERIFICATION REQUIRED \nResult: [Resolved / Pending / Escalated]",
    "escalation": {
      "neededWhen": [
        "All required APNs are entered correctly.",
        "Warp 2 is selected.",
        "Data balance is active.",
        "MMS/data still fail after reboot and network reset."
      ],
      "evidenceNeeded": [
        "Data balance, MMS provisioning, backend data/MMS routing,",
        "SOC status."
      ],
      "summaryTemplate": "Warp APN issue. Device: [X]. APNs verified: Warp 2 / FOTA / IMS / CBS. Warp 2 selected. Data \nbalance active. Wi-Fi off test completed. Reboot/network reset completed. Data/MMS still fails. \nRequesting backend data/MMS routing or SOC review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "All required APNs are entered correctly.",
      "Warp 2 is selected.",
      "Data balance is active.",
      "MMS/data still fail after reboot and network reset."
    ],
    "escalationFormat": [
      "Warp APN issue. Device: [X]. APNs verified: Warp 2 / FOTA / IMS / CBS. Warp 2 selected. Data ",
      "balance active. Wi-Fi off test completed. Reboot/network reset completed. Data/MMS still fails. ",
      "Requesting backend data/MMS routing or SOC review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "mobile-data-not-working-bars-but-no-internet",
      "mms-fails-but-sms-works-data-works-but-mms-fails",
      "samsung-grayed-out-apn",
      "warp-apn-setup-mms-configuration",
      "apn-escalation-triggers"
    ],
    "sourceAliases": [
      "X1",
      "X4",
      "P2",
      "P3"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Data balance, MMS provisioning, backend data/MMS routing,",
      "SOC status."
    ],
    "batch": "Batch 2",
    "aliases": [
      "warp apn",
      "verizon apn",
      "vzwinternet",
      "vzwapp",
      "vzwims",
      "vzwadmin",
      "warp mms",
      "android",
      "warp data",
      "samsung warp apn"
    ],
    "symptoms": [
      "warp apn",
      "verizon apn",
      "vzwinternet",
      "vzwapp",
      "vzwims",
      "vzwadmin",
      "warp mms",
      "android",
      "warp data",
      "samsung warp apn"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X1, X4, P2, P3"
  },
  {
    "id": "dark-star-apn-setup-android-save-failure",
    "title": "Dark Star APN Setup & Android Save Failure",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "apn-data",
      "batch2"
    ],
    "keywords": [
      "dark",
      "star",
      "apn",
      "setup",
      "android",
      "save",
      "failure",
      "apn-data"
    ],
    "customerPhrases": [
      "dark star apn",
      "ereseller",
      "apn disappears",
      "mnc 410",
      "mnc 280",
      "android apn won’t save",
      "at&t apn",
      "dark star mms"
    ],
    "preview": {
      "problem": "Dark Star APN configuration / MNC mismatch / Android baseband APN save rejection",
      "firstQuestion": "Does the APN disappear right after you tap Save?",
      "firstAction": "Confirm customer is on Dark Star.",
      "escalateIf": "APN disappears with both MNC 410 and 280."
    },
    "quickAnswer": "Dark Star APN configuration / MNC mismatch / Android baseband APN save rejection",
    "useWhen": "Use when customer reports: Dark Star APN, ereseller, APN disappears, MNC 410, MNC 280, Android APN won’t save,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Does the APN disappear right after you tap Save?",
      "Are you on Android or iPhone?",
      "Are you having no data, MMS failure, hotspot failure, or all three?"
    ],
    "quickChecks": [
      "Confirm customer is on Dark Star.",
      "Confirm APN is",
      "ereseller",
      ".",
      "Confirm MMSC and MMS Proxy are typed exactly.",
      "If APN disappears with MNC 410, try MNC 280.",
      "Confirm device is unlocked and compatible.",
      "Dark Star APN reference:",
      "Use exact values. Leave any field blank if not listed.",
      "Name: Darkstar",
      "APN:",
      "ereseller",
      "MMSC:",
      "http://mmsc.mobile.att.net",
      "MMS Proxy:",
      "proxy.mobile.att.net",
      "MMS Port:",
      "80",
      "MCC:",
      "310",
      "MNC:",
      "410",
      "Alternative MNC if APN will not save:",
      "280",
      "APN Type:",
      "default,supl,mms,fota",
      "APN Protocol: IPv4/IPv6",
      "MVNO Type: GID, if required for Samsung hotspot",
      "MVNO Value:",
      "20FF",
      ", if required for Samsung hotspot"
    ],
    "quickSteps": [
      "Confirm customer is on Dark Star.",
      "Confirm APN is",
      "ereseller",
      ".",
      "Confirm MMSC and MMS Proxy are typed exactly.",
      "If APN disappears with MNC 410, try MNC 280.",
      "Confirm device is unlocked and compatible.",
      "Dark Star APN reference:",
      "Use exact values. Leave any field blank if not listed.",
      "Name: Darkstar",
      "APN:",
      "ereseller",
      "MMSC:",
      "http://mmsc.mobile.att.net",
      "MMS Proxy:",
      "proxy.mobile.att.net",
      "MMS Port:",
      "80",
      "MCC:",
      "310",
      "MNC:",
      "410",
      "Alternative MNC if APN will not save:",
      "280",
      "APN Type:",
      "default,supl,mms,fota",
      "APN Protocol: IPv4/IPv6",
      "MVNO Type: GID, if required for Samsung hotspot",
      "MVNO Value:",
      "20FF",
      ", if required for Samsung hotspot"
    ],
    "steps": [
      "Confirm customer is on Dark Star.",
      "Go to APN settings.",
      "Add APN using",
      "ereseller",
      "and exact MMSC/proxy values.",
      "Save the APN.",
      "If it disappears after saving, repeat the APN but change MNC from",
      "410",
      "to",
      "280",
      ".",
      "Save again and select the APN.",
      "Toggle Airplane Mode ON for 30 seconds, then OFF.",
      "Restart the phone.",
      "Test browser data first, then MMS, then hotspot if needed.",
      "Escalate if 410 and 280 both fail on an unlocked compatible device."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Use Safari for APN profile download if needed.",
        "Remove old/conflicting APN profiles first.",
        "For Dark Star messaging features, confirm iOS version if messaging/VVM/RCS is part of",
        "the issue."
      ],
      "android": [
        "Manually enter all Dark Star APN fields.",
        "Try MNC",
        "280",
        "if",
        "410",
        "causes the APN to disappear.",
        "Do not add spaces in APN Type.",
        "For hotspot on some Samsung devices, add MVNO Type: GID and MVNO Value:",
        "20FF",
        "if required by the support guide."
      ],
      "general": [
        "Confirm customer is on Dark Star.",
        "Go to APN settings.",
        "Add APN using",
        "ereseller",
        "and exact MMSC/proxy values.",
        "Save the APN.",
        "If it disappears after saving, repeat the APN but change MNC from",
        "410",
        "to",
        "280",
        ".",
        "Save again and select the APN.",
        "Toggle Airplane Mode ON for 30 seconds, then OFF.",
        "Restart the phone.",
        "Test browser data first, then MMS, then hotspot if needed.",
        "Escalate if 410 and 280 both fail on an unlocked compatible device."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Some Android phones reject the Dark Star APN if the network code does not match the SIM \nbatch. If the APN disappears when you save it with \n410\n, let’s enter the same APN again but use \n280\n for the MNC, then save and select it."
      }
    ],
    "zendeskNote": "Issue: Dark Star APN / APN save failure \nNetwork: Dark Star \nDevice/OS: [Device + OS] \nSIM/eSIM: [eSIM / pSIM] \nSymptoms: [No data / MMS fails / hotspot fails / APN disappears] \nSteps tried: Entered \nereseller\n, verified MMSC/proxy, tried MNC 410 and 280, selected APN, \nrebooted \nInternal checks: Line active, data balance, provisioning INTERNAL VERIFICATION REQUIRED \nResult: [Resolved / Pending / Escalated]",
    "escalation": {
      "neededWhen": [
        "APN disappears with both MNC 410 and 280.",
        "Device is confirmed unlocked and compatible.",
        "Correct APN saves but data/MMS still fails after reboot/network reset."
      ],
      "evidenceNeeded": [
        "ICCID/IMSI match, line provisioning, backend data/MMS/hotspot",
        "entitlement."
      ],
      "summaryTemplate": "Dark Star APN issue. Device: [X]. APN \nereseller\n entered with MNC 410 and 280. APN \n[saves/does not save]. Device unlocked: [Yes/No]. Data balance active. Reboot/network reset \ncompleted. Requesting ICCID/IMSI/provisioning review. INTERNAL VERIFICATION \nREQUIRED"
    },
    "escalationRequiredWhen": [
      "APN disappears with both MNC 410 and 280.",
      "Device is confirmed unlocked and compatible.",
      "Correct APN saves but data/MMS still fails after reboot/network reset."
    ],
    "escalationFormat": [
      "Dark Star APN issue. Device: [X]. APN ",
      "ereseller",
      " entered with MNC 410 and 280. APN ",
      "[saves/does not save]. Device unlocked: [Yes/No]. Data balance active. Reboot/network reset ",
      "completed. Requesting ICCID/IMSI/provisioning review. INTERNAL VERIFICATION ",
      "REQUIRED"
    ],
    "relatedPlaybooks": [
      "mms-fails-but-sms-works-data-works-but-mms-fails",
      "samsung-grayed-out-apn",
      "hotspot-not-working",
      "post-teleport-data-mms-failure",
      "post-teleport-data-mms-failure"
    ],
    "sourceAliases": [
      "X1",
      "X3",
      "X4",
      "P3",
      "P4"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "ICCID/IMSI match, line provisioning, backend data/MMS/hotspot",
      "entitlement."
    ],
    "batch": "Batch 2",
    "aliases": [
      "dark star apn",
      "ereseller",
      "apn disappears",
      "mnc 410",
      "mnc 280",
      "android apn won’t save",
      "at&t apn",
      "dark star mms"
    ],
    "symptoms": [
      "dark star apn",
      "ereseller",
      "apn disappears",
      "mnc 410",
      "mnc 280",
      "android apn won’t save",
      "at&t apn",
      "dark star mms"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X1, X3, X4, P3, P4"
  },
  {
    "id": "light-speed-apn-configuration",
    "title": "Light Speed APN Configuration",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "apn-data",
      "batch2"
    ],
    "keywords": [
      "light",
      "speed",
      "apn",
      "configuration",
      "apn-data"
    ],
    "customerPhrases": [
      "light speed apn",
      "wholesale",
      "pwg",
      "t-mobile apn",
      "gsm apn",
      "light speed data not working",
      "light speed mms",
      "light speed hotspot"
    ],
    "preview": {
      "problem": "Light Speed APN mismatch / upgraded vs legacy APN path / MNC save issue / hotspot DUN",
      "firstQuestion": "Are you on Light Speed, and did this start after activation or network switch?",
      "firstAction": "Confirm the line is on Light Speed.",
      "escalateIf": "Correct APN path confirmed and applied."
    },
    "quickAnswer": "Light Speed APN mismatch / upgraded vs legacy APN path / MNC save issue / hotspot DUN \nmissing",
    "useWhen": "Use when customer reports: Light Speed APN, wholesale, pwg, T-Mobile APN, GSM APN, Light Speed data not working,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are you on Light Speed, and did this start after activation or network switch?",
      "Are data, MMS, and hotspot all failing, or only one of them?",
      "Are you using Android or iPhone?"
    ],
    "quickChecks": [
      "Confirm customer is on Light Speed.",
      "Confirm whether current guide/internal status indicates upgraded or legacy APN path.",
      "INTERNAL VERIFICATION REQUIRED IF UNCLEAR",
      "Confirm data balance is active. INTERNAL VERIFICATION REQUIRED",
      "Confirm APN saves and is selected.",
      "If hotspot fails, check APN Type for",
      "dun",
      "where required.",
      "Light Speed APN reference — upgraded path:",
      "Name: Light Speed",
      "APN:",
      "wholesale",
      "MMSC:",
      "http://wholesale.mmsmvno.com/mms/wapenc",
      "MCC: usually",
      "310",
      "MNC: usually",
      "260",
      "; try",
      "240",
      "if APN will not save",
      "APN Type:",
      "default,supl,mms,dun",
      "if required by device/network",
      "APN Protocol: IPv4/IPv6",
      "Light Speed APN reference — legacy path:",
      "Name: Light Speed",
      "APN:",
      "pwg",
      "MMSC:",
      "http://pwg.mmsmvno.com/mms/wapenc",
      "MCC:",
      "310",
      "MNC:",
      "260",
      "; use",
      "240",
      "if save fails and guide allows",
      "APN Type:",
      "default,supl,mms",
      "APN Protocol: IPv4/IPv6"
    ],
    "quickSteps": [
      "Confirm customer is on Light Speed.",
      "Confirm whether current guide/internal status indicates upgraded or legacy APN path.",
      "INTERNAL VERIFICATION REQUIRED IF UNCLEAR",
      "Confirm data balance is active. INTERNAL VERIFICATION REQUIRED",
      "Confirm APN saves and is selected.",
      "If hotspot fails, check APN Type for",
      "dun",
      "where required.",
      "Light Speed APN reference — upgraded path:",
      "Name: Light Speed",
      "APN:",
      "wholesale",
      "MMSC:",
      "http://wholesale.mmsmvno.com/mms/wapenc",
      "MCC: usually",
      "310",
      "MNC: usually",
      "260",
      "; try",
      "240",
      "if APN will not save",
      "APN Type:",
      "default,supl,mms,dun",
      "if required by device/network",
      "APN Protocol: IPv4/IPv6",
      "Light Speed APN reference — legacy path:",
      "Name: Light Speed",
      "APN:",
      "pwg",
      "MMSC:",
      "http://pwg.mmsmvno.com/mms/wapenc",
      "MCC:",
      "310",
      "MNC:",
      "260",
      "; use",
      "240",
      "if save fails and guide allows",
      "APN Type:",
      "default,supl,mms",
      "APN Protocol: IPv4/IPv6"
    ],
    "steps": [
      "Confirm the line is on Light Speed.",
      "Confirm data balance and line status. INTERNAL VERIFICATION REQUIRED",
      "Confirm whether the line should use upgraded or legacy APN values.",
      "Enter the correct APN.",
      "Save and select the APN.",
      "If APN does not save with MNC 260, try MNC 240 if permitted by source/internal guide.",
      "Restart phone.",
      "Test cellular data.",
      "Test MMS.",
      "If hotspot fails, add",
      "dun",
      "to APN Type where required and retest.",
      "Escalate if correct APN path is applied and data remains dormant."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Usually auto-configures via carrier settings/profile.",
        "If needed, download APN profile using Safari and install under Settings > General >",
        "VPN & Device Management.",
        "Remove old/conflicting APN profiles."
      ],
      "android": [
        "Manually enter APN.",
        "Use",
        "wholesale",
        "for upgraded path or",
        "pwg",
        "for legacy path based on current",
        "source/internal status.",
        "Select the APN after saving.",
        "Restart device."
      ],
      "general": [
        "Confirm the line is on Light Speed.",
        "Confirm data balance and line status. INTERNAL VERIFICATION REQUIRED",
        "Confirm whether the line should use upgraded or legacy APN values.",
        "Enter the correct APN.",
        "Save and select the APN.",
        "If APN does not save with MNC 260, try MNC 240 if permitted by source/internal guide.",
        "Restart phone.",
        "Test cellular data.",
        "Test MMS.",
        "If hotspot fails, add",
        "dun",
        "to APN Type where required and retest.",
        "Escalate if correct APN path is applied and data remains dormant."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Light Speed can use different APN settings depending on how the line is provisioned. Let’s \nconfirm the correct APN path first, then we’ll save and select it so the phone uses the right data \nroute."
      }
    ],
    "zendeskNote": "Issue: Light Speed APN \nNetwork: Light Speed \nDevice/OS: [Device + OS] \nSIM/eSIM: [eSIM / pSIM] \nAPN path used: [wholesale / pwg / other current guide] \nSymptoms: [No data / MMS fail / hotspot fail] \nSteps tried: APN entered, MNC [260/240], APN selected, rebooted, data/MMS tested \nInternal checks: Line active, data balance, core/APN path INTERNAL VERIFICATION \nREQUIRED \nResult: [Resolved / Pending / Escalated]",
    "escalation": {
      "neededWhen": [
        "Correct APN path confirmed and applied.",
        "APN is selected.",
        "Device restarted.",
        "Data balance active.",
        "Data still does not route."
      ],
      "evidenceNeeded": [
        "Whether line is on upgraded vs legacy core, data",
        "SOC/provisioning state."
      ],
      "summaryTemplate": "Light Speed APN issue. Device: [X]. APN path: [wholesale/pwg]. MNC: [X]. APN selected. Data \nbalance active. Reboot/network reset completed. Data still fails. Requesting data \nprovisioning/core APN path review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Correct APN path confirmed and applied.",
      "APN is selected.",
      "Device restarted.",
      "Data balance active.",
      "Data still does not route."
    ],
    "escalationFormat": [
      "Light Speed APN issue. Device: [X]. APN path: [wholesale/pwg]. MNC: [X]. APN selected. Data ",
      "balance active. Reboot/network reset completed. Data still fails. Requesting data ",
      "provisioning/core APN path review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "mobile-data-not-working-bars-but-no-internet",
      "hotspot-not-working",
      "apn-escalation-triggers"
    ],
    "sourceAliases": [
      "X1",
      "X4",
      "P2",
      "P4"
    ],
    "confidence": "Medium-High, because APN path can depend on current provisioning/core status",
    "internalVerificationRequired": [
      "Whether line is on upgraded vs legacy core, data",
      "SOC/provisioning state."
    ],
    "batch": "Batch 2",
    "aliases": [
      "light speed apn",
      "wholesale",
      "pwg",
      "t-mobile apn",
      "gsm apn",
      "light speed data not working",
      "light speed mms",
      "light speed hotspot"
    ],
    "symptoms": [
      "light speed apn",
      "wholesale",
      "pwg",
      "t-mobile apn",
      "gsm apn",
      "light speed data not working",
      "light speed mms",
      "light speed hotspot"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X1, X4, P2, P4"
  },
  {
    "id": "samsung-grayed-out-apn",
    "title": "Samsung Grayed-Out APN",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "apn-data",
      "batch2"
    ],
    "keywords": [
      "samsung",
      "grayed",
      "out",
      "apn",
      "apn-data"
    ],
    "customerPhrases": [
      "samsung grayed-out apn",
      "cannot add apn",
      "apn locked",
      "add button missing",
      "access restricted",
      "for current user profile",
      "samsung u firmware",
      "samsung u1 firmware"
    ],
    "preview": {
      "problem": "Samsung firmware/CSC restriction / carrier-branded firmware APN lock / device compatibility",
      "firstQuestion": "What exact Samsung model do you have?",
      "firstAction": "Confirm the phone is unlocked and compatible.",
      "escalateIf": "Device is unlocked and compatible."
    },
    "quickAnswer": "Samsung firmware/CSC restriction / carrier-branded firmware APN lock / device compatibility \nlimitation",
    "useWhen": "Use when customer reports: Samsung grayed-out APN, cannot add APN, APN locked, Add button missing, access restricted",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "What exact Samsung model do you have?",
      "Was the phone originally bought from Verizon, AT&T, T-Mobile, or another carrier?",
      "Is the APN Add/Edit button missing, greyed out, or showing “access restricted”?"
    ],
    "quickChecks": [
      "Confirm device is unlocked.",
      "Confirm exact model number, especially whether it ends in U or U1.",
      "Check if APN Add/Edit is missing or greyed out.",
      "Try Reset to Default in APN menu if visible.",
      "Try safe network reset workflow."
    ],
    "quickSteps": [
      "Confirm device is unlocked.",
      "Confirm exact model number, especially whether it ends in U or U1.",
      "Check if APN Add/Edit is missing or greyed out.",
      "Try Reset to Default in APN menu if visible.",
      "Try safe network reset workflow."
    ],
    "steps": [
      "Confirm the phone is unlocked and compatible.",
      "Ask customer to connect to Wi-Fi.",
      "Settings > General Management > Reset > Reset Mobile Network Settings / Reset",
      "Network Settings.",
      "Reboot the phone.",
      "Immediately check APN menu again and try adding/editing APN.",
      "If APN fields remain locked, check if another approved APN/profile method exists for that",
      "network.",
      "If no safe workaround works, document as Samsung firmware/APN restriction and",
      "escalate if needed.",
      "Do not instruct customer to flash firmware, root device, or use unofficial tools."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "N/A",
        "Android/Samsung steps:",
        "Check model number.",
        "Reset Network Settings.",
        "Try APN reset to default.",
        "Try entering APN immediately after reboot if menu becomes available.",
        "Document exact error/menu state with screenshot if possible."
      ],
      "general": [
        "Confirm the phone is unlocked and compatible.",
        "Ask customer to connect to Wi-Fi.",
        "Settings > General Management > Reset > Reset Mobile Network Settings / Reset",
        "Network Settings.",
        "Reboot the phone.",
        "Immediately check APN menu again and try adding/editing APN.",
        "If APN fields remain locked, check if another approved APN/profile method exists for that",
        "network.",
        "If no safe workaround works, document as Samsung firmware/APN restriction and",
        "escalate if needed.",
        "Do not instruct customer to flash firmware, root device, or use unofficial tools."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "This looks like the Samsung phone’s firmware is blocking APN editing. That can happen on \nsome carrier-branded Samsung models even when the phone is unlocked. Let’s try the safe \nreset path first: connect to Wi-Fi, reset network settings, reboot, and then check whether the \nAPN menu lets you add the settings."
      }
    ],
    "zendeskNote": "Issue: Samsung APN locked / grayed out \nNetwork: [Warp / Dark Star / Light Speed] \nDevice/OS: [Samsung model + One UI/Android version] \nModel variant: [U / U1 / unknown] \nSymptoms: APN Add/Edit [missing/greyed/restricted] \nSteps tried: Device unlock checked, APN reset default, network reset, reboot, APN retry \nSuspected cause: Samsung CSC/firmware restriction \nNext action: Escalate if compatible/unlocked device still blocks required APN",
    "escalation": {
      "neededWhen": [
        "Device is unlocked and compatible.",
        "APN edit remains blocked after safe resets.",
        "Customer cannot use data/MMS/hotspot because required APN cannot be entered.",
        "Multiple Samsung devices show same APN lock after update or network switch."
      ],
      "evidenceNeeded": [
        "Approved workaround availability, device compatibility, escalation",
        "path for firmware restrictions."
      ],
      "summaryTemplate": "Samsung APN edit locked. Device: [model/variant]. OS/One UI: [X]. Network: [X]. Device \nunlocked confirmed. APN menu state: [greyed/missing/restricted]. Reset Network Settings and \nAPN reset tried. Customer cannot enter required APN. Requesting device/network workaround \nreview. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Device is unlocked and compatible.",
      "APN edit remains blocked after safe resets.",
      "Customer cannot use data/MMS/hotspot because required APN cannot be entered.",
      "Multiple Samsung devices show same APN lock after update or network switch."
    ],
    "escalationFormat": [
      "Samsung APN edit locked. Device: [model/variant]. OS/One UI: [X]. Network: [X]. Device ",
      "unlocked confirmed. APN menu state: [greyed/missing/restricted]. Reset Network Settings and ",
      "APN reset tried. Customer cannot enter required APN. Requesting device/network workaround ",
      "review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "warp-apn-setup-mms-configuration",
      "dark-star-apn-setup-android-save-failure",
      "hotspot-not-working",
      "device-compatibility"
    ],
    "sourceAliases": [
      "X1",
      "X3",
      "P3"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Approved workaround availability, device compatibility, escalation",
      "path for firmware restrictions."
    ],
    "batch": "Batch 2",
    "aliases": [
      "samsung grayed-out apn",
      "cannot add apn",
      "apn locked",
      "add button missing",
      "access restricted",
      "for current user profile",
      "samsung u firmware",
      "samsung u1 firmware"
    ],
    "symptoms": [
      "samsung grayed-out apn",
      "cannot add apn",
      "apn locked",
      "add button missing",
      "access restricted",
      "for current user profile",
      "samsung u firmware",
      "samsung u1 firmware"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X1, X3, P3"
  },
  {
    "id": "iphone-apn-profile-logic-dual-esim-conflicts",
    "title": "iPhone APN / Profile Logic & Dual eSIM Conflicts",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "apn-data",
      "batch2"
    ],
    "keywords": [
      "iphone",
      "apn",
      "profile",
      "logic",
      "dual",
      "esim",
      "conflicts",
      "apn-data"
    ],
    "customerPhrases": [
      "iphone apn",
      "apn profile",
      "mobileconfig",
      "safari apn download",
      "vpn & device management",
      "dual esim conflict",
      "old apn profile",
      "iphone data not working"
    ],
    "preview": {
      "problem": "iOS APN profile missing / profile not installed / old profile conflict / dual eSIM data routing issue",
      "firstQuestion": "Did you download the profile using Safari?",
      "firstAction": "Check Settings > Cellular and confirm correct US Mobile line is active.",
      "escalateIf": "Correct APN profile is installed."
    },
    "quickAnswer": "iOS APN profile missing / profile not installed / old profile conflict / dual eSIM data routing issue",
    "useWhen": "Use when customer reports: iPhone APN, APN profile, mobileconfig, Safari APN download, VPN & Device Management,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Did you download the profile using Safari?",
      "After downloading, did you install it under VPN & Device Management?",
      "Do you have another active SIM/eSIM on this iPhone?"
    ],
    "quickChecks": [
      "Settings > Cellular: confirm correct line is selected for Cellular Data.",
      "Settings > General > VPN & Device Management: check for old APN profiles.",
      "Remove old/inactive APN profiles if no longer needed.",
      "Use Safari, not Chrome, for profile download.",
      "Disable VPN/iCloud Private Relay during testing."
    ],
    "quickSteps": [
      "Settings > Cellular: confirm correct line is selected for Cellular Data.",
      "Settings > General > VPN & Device Management: check for old APN profiles.",
      "Remove old/inactive APN profiles if no longer needed.",
      "Use Safari, not Chrome, for profile download.",
      "Disable VPN/iCloud Private Relay during testing."
    ],
    "steps": [
      "Check Settings > Cellular and confirm correct US Mobile line is active.",
      "Check Settings > Cellular > Cellular Data and select the correct line.",
      "Go to Settings > General > VPN & Device Management.",
      "Remove old/conflicting APN profiles if appropriate.",
      "Use Safari to download the correct APN profile.",
      "After download, go back to VPN & Device Management and tap Install.",
      "Restart iPhone.",
      "Turn Wi-Fi off and test cellular data.",
      "If dual SIM is active, disable Cellular Data Switching temporarily and test US Mobile line",
      "only.",
      "Escalate if profile is installed, no conflict exists, and data still fails."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Safari required for APN profile download.",
        "Install profile manually after download.",
        "Check Cellular Data line selection.",
        "Disable Cellular Data Switching during testing.",
        "Remove old network/APN profiles after network switch if they no longer apply."
      ],
      "android": [
        "N/A"
      ],
      "general": [
        "Check Settings > Cellular and confirm correct US Mobile line is active.",
        "Check Settings > Cellular > Cellular Data and select the correct line.",
        "Go to Settings > General > VPN & Device Management.",
        "Remove old/conflicting APN profiles if appropriate.",
        "Use Safari to download the correct APN profile.",
        "After download, go back to VPN & Device Management and tap Install.",
        "Restart iPhone.",
        "Turn Wi-Fi off and test cellular data.",
        "If dual SIM is active, disable Cellular Data Switching temporarily and test US Mobile line",
        "only.",
        "Escalate if profile is installed, no conflict exists, and data still fails."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "On iPhone, downloading the APN file is only the first step — it still has to be installed. Please \nopen Settings > General > VPN & Device Management and check whether the US Mobile \nprofile is waiting there. If it is, tap Install, then restart the phone and test with Wi-Fi off."
      }
    ],
    "zendeskNote": "Issue: iPhone APN profile / dual eSIM data issue \n\nDevice/OS: [iPhone + iOS] \nNetwork: [Warp / Dark Star / Light Speed] \nSIM/eSIM: eSIM / Dual SIM: [Yes/No] \nSymptoms: [No data / MMS fail / post-Teleport data issue] \nSteps tried: Correct data line selected, old profile removed, profile downloaded via Safari, profile \ninstalled, rebooted, Wi-Fi off test \nInternal checks: Data active/provisioned INTERNAL VERIFICATION REQUIRED \nResult: [Resolved / Pending / Escalated]",
    "escalation": {
      "neededWhen": [
        "Correct APN profile is installed.",
        "Old profiles removed.",
        "Correct data line selected.",
        "VPN/Private Relay off.",
        "Data still fails."
      ],
      "evidenceNeeded": [
        "Backend data provisioning, correct network/APN profile",
        "assignment."
      ],
      "summaryTemplate": "iPhone APN/profile issue. Device/iOS: [X]. Network: [X]. APN profile downloaded via Safari and \ninstalled. Old profiles removed. Correct data line selected. Wi-Fi/VPN/Private Relay off. Data still \nfails. Requesting backend data provisioning review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Correct APN profile is installed.",
      "Old profiles removed.",
      "Correct data line selected.",
      "VPN/Private Relay off.",
      "Data still fails."
    ],
    "escalationFormat": [
      "iPhone APN/profile issue. Device/iOS: [X]. Network: [X]. APN profile downloaded via Safari and ",
      "installed. Old profiles removed. Correct data line selected. Wi-Fi/VPN/Private Relay off. Data still ",
      "fails. Requesting backend data provisioning review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "mobile-data-not-working-bars-but-no-internet",
      "post-teleport-data-mms-failure",
      "apn-escalation-triggers"
    ],
    "sourceAliases": [
      "X1",
      "X3",
      "X2",
      "P3"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Backend data provisioning, correct network/APN profile",
      "assignment."
    ],
    "batch": "Batch 2",
    "aliases": [
      "iphone apn",
      "apn profile",
      "mobileconfig",
      "safari apn download",
      "vpn & device management",
      "dual esim conflict",
      "old apn profile",
      "iphone data not working"
    ],
    "symptoms": [
      "iphone apn",
      "apn profile",
      "mobileconfig",
      "safari apn download",
      "vpn & device management",
      "dual esim conflict",
      "old apn profile",
      "iphone data not working"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X1, X3, X2, P3"
  },
  {
    "id": "hotspot-not-working-hotspot-apn",
    "title": "Hotspot Not Working / Hotspot APN",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "apn-data",
      "batch2"
    ],
    "keywords": [
      "hotspot",
      "not",
      "working",
      "apn",
      "apn-data"
    ],
    "customerPhrases": [
      "hotspot not working",
      "personal hotspot missing",
      "hotspot connects no internet",
      "contact carrier",
      "tethering",
      "laptop no internet",
      "hotspot greyed out"
    ],
    "preview": {
      "problem": "Hotspot allotment exhausted / hotspot entitlement missing / APN DUN missing / iOS Personal",
      "firstQuestion": "Is the hotspot option missing/greyed out, or does it connect but show no internet?",
      "firstAction": "Confirm hotspot eligibility and balance. INTERNAL VERIFICATION REQUIRED",
      "escalateIf": "Plan includes hotspot."
    },
    "quickAnswer": "Hotspot allotment exhausted / hotspot entitlement missing / APN DUN missing / iOS Personal \nHotspot APN missing / VPN/DNS/Data Saver interference",
    "useWhen": "Use when customer reports: hotspot not working, personal hotspot missing, hotspot connects no internet, contact carrier,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Is the hotspot option missing/greyed out, or does it connect but show no internet?",
      "Does regular cellular data work on the phone itself?",
      "Are VPN, Private DNS, ad blocker, or Data Saver enabled?"
    ],
    "quickChecks": [
      "Confirm plan includes hotspot and hotspot balance remains. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm phone cellular data works first.",
      "Disable VPN, Private DNS, and Data Saver.",
      "For Android, verify APN Type includes",
      "dun",
      "where required.",
      "For iPhone, check Personal Hotspot APN/profile."
    ],
    "quickSteps": [
      "Confirm plan includes hotspot and hotspot balance remains. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm phone cellular data works first.",
      "Disable VPN, Private DNS, and Data Saver.",
      "For Android, verify APN Type includes",
      "dun",
      "where required.",
      "For iPhone, check Personal Hotspot APN/profile."
    ],
    "steps": [
      "Confirm hotspot eligibility and balance. INTERNAL VERIFICATION REQUIRED",
      "Confirm phone data works without hotspot.",
      "Restart phone and connected device.",
      "Turn off VPN/Private DNS/Data Saver.",
      "Android: add",
      "dun",
      "to APN Type where required.",
      "Dark Star Samsung: add MVNO Type GID and MVNO Value",
      "20FF",
      "if required.",
      "iPhone: check Personal Hotspot APN fields or reinstall correct APN profile.",
      "Test with one connected device only.",
      "If toggle is still missing or connected devices have no internet, escalate for hotspot",
      "entitlement/SOC review. INTERNAL VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Cellular > Personal Hotspot: confirm toggle exists.",
        "If missing, check APN/profile installation.",
        "Settings > Cellular > Cellular Data Network > Personal Hotspot APN, if exposed.",
        "Use the correct network-specific APN.",
        "Restart after APN/profile changes."
      ],
      "android": [
        "Settings > Mobile Networks > Access Point Names.",
        "Add",
        "dun",
        "to APN Type where required, with no spaces.",
        "Turn Data Saver OFF.",
        "Disable VPN/Private DNS.",
        "Restart and retest hotspot."
      ],
      "general": [
        "Confirm hotspot eligibility and balance. INTERNAL VERIFICATION REQUIRED",
        "Confirm phone data works without hotspot.",
        "Restart phone and connected device.",
        "Turn off VPN/Private DNS/Data Saver.",
        "Android: add",
        "dun",
        "to APN Type where required.",
        "Dark Star Samsung: add MVNO Type GID and MVNO Value",
        "20FF",
        "if required.",
        "iPhone: check Personal Hotspot APN fields or reinstall correct APN profile.",
        "Test with one connected device only.",
        "If toggle is still missing or connected devices have no internet, escalate for hotspot",
        "entitlement/SOC review. INTERNAL VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Hotspot needs both account permission and the right phone settings. First, let’s confirm regular \ncellular data works on the phone. Then we’ll check the hotspot balance and make sure the APN \nhas the tethering setting it needs."
      }
    ],
    "zendeskNote": "Issue: Hotspot not working \nNetwork: [Warp / Dark Star / Light Speed] \nDevice/OS: [Device + OS] \nSIM/eSIM: [eSIM / pSIM] \nSymptoms: [Toggle missing / Contact Carrier / connects no internet / drops] \nSteps tried: Phone data test, VPN/DNS/Data Saver off, APN/DUN checked, iOS hotspot \nAPN/profile checked, rebooted \nInternal checks: Hotspot eligible, hotspot balance, entitlement/SOC INTERNAL VERIFICATION \nREQUIRED \nResult: [Resolved / Pending / Escalated]",
    "escalation": {
      "neededWhen": [
        "Plan includes hotspot.",
        "Hotspot balance is available.",
        "Phone data works.",
        "APN is correct.",
        "VPN/DNS/Data Saver off.",
        "Hotspot still missing, greyed out, or connected devices have no internet."
      ],
      "evidenceNeeded": [
        "Hotspot eligibility, hotspot balance, entitlement/SOC provisioning."
      ],
      "summaryTemplate": "Hotspot failure. Network: [X]. Device/OS: [X]. Plan/hotspot balance confirmed. Phone data \nworks. APN/DUN checked. VPN/DNS/Data Saver off. Error: [Contact Carrier / toggle missing / \nno internet]. Requesting hotspot entitlement/SOC provisioning review. INTERNAL \nVERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Plan includes hotspot.",
      "Hotspot balance is available.",
      "Phone data works.",
      "APN is correct.",
      "VPN/DNS/Data Saver off.",
      "Hotspot still missing, greyed out, or connected devices have no internet."
    ],
    "escalationFormat": [
      "Hotspot failure. Network: [X]. Device/OS: [X]. Plan/hotspot balance confirmed. Phone data ",
      "works. APN/DUN checked. VPN/DNS/Data Saver off. Error: [Contact Carrier / toggle missing / ",
      "no internet]. Requesting hotspot entitlement/SOC provisioning review. INTERNAL ",
      "VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "mobile-data-not-working-bars-but-no-internet",
      "light-speed-apn-setup",
      "dark-star-apn-setup-android-save-failure",
      "apn-escalation-triggers",
      "apn-escalation-triggers"
    ],
    "sourceAliases": [
      "X1",
      "X4",
      "P3",
      "P4"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Hotspot eligibility, hotspot balance, entitlement/SOC provisioning."
    ],
    "batch": "Batch 2",
    "aliases": [
      "hotspot not working",
      "personal hotspot missing",
      "hotspot connects no internet",
      "contact carrier",
      "tethering",
      "laptop no internet",
      "hotspot greyed out"
    ],
    "symptoms": [
      "hotspot not working",
      "personal hotspot missing",
      "hotspot connects no internet",
      "contact carrier",
      "tethering",
      "laptop no internet",
      "hotspot greyed out"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X1, X4, P3, P4"
  },
  {
    "id": "mms-fails-but-sms-works-data-works-but-mms-fails",
    "title": "MMS Fails But SMS Works / Data Works But MMS Fails",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "apn-data",
      "batch2"
    ],
    "keywords": [
      "mms",
      "fails",
      "but",
      "sms",
      "works",
      "data",
      "apn-data"
    ],
    "customerPhrases": [
      "mms fails but sms works",
      "data works but mms fails",
      "picture messages failing",
      "group texts",
      "broken",
      "can text but not send pictures",
      "mms not downloading"
    ],
    "preview": {
      "problem": "MMS APN/MMSC routing issue / cellular data issue / RCS/iMessage fallback issue / file size",
      "firstQuestion": "Do regular text-only messages work?",
      "firstAction": "Confirm SMS works. If SMS also fails, use messaging routing playbook.",
      "escalateIf": "Cellular data works."
    },
    "quickAnswer": "MMS APN/MMSC routing issue / cellular data issue / RCS/iMessage fallback issue / file size \nissue / data balance issue",
    "useWhen": "Use when customer reports: MMS fails but SMS works, data works but MMS fails, picture messages failing, group texts",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Do regular text-only messages work?",
      "Does MMS fail with iPhone users, Android users, or everyone?",
      "Are you able to browse the web on cellular data with Wi-Fi off?"
    ],
    "quickChecks": [
      "Turn Wi-Fi off and test MMS over cellular.",
      "Confirm cellular data works.",
      "Confirm data balance is available. INTERNAL VERIFICATION REQUIRED",
      "Check APN Type includes",
      "mms",
      "where required.",
      "Check MMSC/proxy/port values based on network."
    ],
    "quickSteps": [
      "Turn Wi-Fi off and test MMS over cellular.",
      "Confirm cellular data works.",
      "Confirm data balance is available. INTERNAL VERIFICATION REQUIRED",
      "Check APN Type includes",
      "mms",
      "where required.",
      "Check MMSC/proxy/port values based on network."
    ],
    "steps": [
      "Confirm SMS works. If SMS also fails, use messaging routing playbook.",
      "Turn Wi-Fi off and test a small picture message.",
      "Confirm basic cellular data works.",
      "Confirm data balance is available. INTERNAL VERIFICATION REQUIRED",
      "iPhone: enable MMS Messaging and Group Messaging.",
      "Android: verify APN Type includes",
      "mms",
      "where required.",
      "Verify MMSC/proxy/port values for the network.",
      "Reduce file size and test one recipient.",
      "If Android/Google Messages, turn RCS off temporarily and test MMS.",
      "Restart phone.",
      "Escalate if data works, MMS settings are correct, and MMS still fails with multiple",
      "recipients."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Messages > MMS Messaging ON.",
        "Settings > Messages > Group Messaging ON.",
        "Test with Wi-Fi OFF.",
        "If after port/Teleport, confirm carrier SMS/MMS behavior before blaming iMessage/RCS."
      ],
      "android": [
        "Confirm default SMS app.",
        "Turn RCS off temporarily.",
        "Check APN Type has",
        "mms",
        "where required.",
        "Verify MMSC URL and MMS Proxy exactly.",
        "Clear Messages app cache if app state appears corrupted."
      ],
      "general": [
        "Confirm SMS works. If SMS also fails, use messaging routing playbook.",
        "Turn Wi-Fi off and test a small picture message.",
        "Confirm basic cellular data works.",
        "Confirm data balance is available. INTERNAL VERIFICATION REQUIRED",
        "iPhone: enable MMS Messaging and Group Messaging.",
        "Android: verify APN Type includes",
        "mms",
        "where required.",
        "Verify MMSC/proxy/port values for the network.",
        "Reduce file size and test one recipient.",
        "If Android/Google Messages, turn RCS off temporarily and test MMS.",
        "Restart phone.",
        "Escalate if data works, MMS settings are correct, and MMS still fails with multiple",
        "recipients."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Regular texts and picture messages use different routes. Since SMS is working, we’ll focus on \nthe picture-message route. Please turn Wi-Fi off, make sure mobile data is on, and try sending \none small photo to one person. I’ll check the line’s data and MMS setup while you test."
      }
    ],
    "zendeskNote": "Issue: MMS fails / SMS works \nNetwork: [Warp / Dark Star / Light Speed] \nDevice/OS: [Device + OS] \n\nMessaging app: [iMessage / Google Messages / Samsung Messages / Other] \nSymptoms: SMS works, MMS fails, data [works/fails] \nSteps tried: Wi-Fi off test, data confirmed, MMS toggle checked, APN/MMSC/proxy verified, \nRCS isolated, rebooted \nInternal checks: Data balance, MMS feature provisioning INTERNAL VERIFICATION \nREQUIRED \nResult: [Resolved / Pending / Escalated]",
    "escalation": {
      "neededWhen": [
        "Cellular data works.",
        "SMS works.",
        "Data balance is available.",
        "APN/MMSC/proxy is exact.",
        "MMS fails to multiple recipients on cellular."
      ],
      "evidenceNeeded": [
        "Data balance, MMS feature code, backend MMS routing."
      ],
      "summaryTemplate": "MMS failure. SMS works. Data works. Network: [X]. Device/OS: [X]. APN/MMSC/proxy verified. \nData balance active. RCS/iMessage isolated. Fails with multiple recipients. Requesting MMS \nfeature/routing review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Cellular data works.",
      "SMS works.",
      "Data balance is available.",
      "APN/MMSC/proxy is exact.",
      "MMS fails to multiple recipients on cellular."
    ],
    "escalationFormat": [
      "MMS failure. SMS works. Data works. Network: [X]. Device/OS: [X]. APN/MMSC/proxy verified. ",
      "Data balance active. RCS/iMessage isolated. Fails with multiple recipients. Requesting MMS ",
      "feature/routing review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "warp-apn-setup-mms-configuration",
      "dark-star-apn-setup-android-save-failure",
      "light-speed-apn-setup",
      "post-teleport-data-mms-failure",
      "data-connectivity-failures-bars-but-no-internet"
    ],
    "sourceAliases": [
      "X1",
      "X4",
      "P2",
      "P4"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Data balance, MMS feature code, backend MMS routing."
    ],
    "batch": "Batch 2",
    "aliases": [
      "mms fails but sms works",
      "data works but mms fails",
      "picture messages failing",
      "group texts",
      "broken",
      "can text but not send pictures",
      "mms not downloading"
    ],
    "symptoms": [
      "mms fails but sms works",
      "data works but mms fails",
      "picture messages failing",
      "group texts",
      "broken",
      "can text but not send pictures",
      "mms not downloading"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X1, X4, P2, P4"
  },
  {
    "id": "post-teleport-data-mms-failure",
    "title": "Post-Teleport Data & MMS Failure",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "apn-data",
      "batch2"
    ],
    "keywords": [
      "post",
      "teleport",
      "data",
      "mms",
      "failure",
      "apn-data"
    ],
    "customerPhrases": [
      "post-teleport data failure",
      "switched networks no internet",
      "after teleport mms fails",
      "after",
      "switching networks no data",
      "old esim",
      "new esim",
      "invalid destination address"
    ],
    "preview": {
      "problem": "Old eSIM/profile collision / destination APN missing / stale routing / RCS app state / incomplete",
      "firstQuestion": "Which network did you switch from and which network did you switch to?",
      "firstAction": "Verify Teleport is complete or identify stuck state. INTERNAL VERIFICATION",
      "escalateIf": "Teleport shows complete."
    },
    "quickAnswer": "Old eSIM/profile collision / destination APN missing / stale routing / RCS app state / incomplete \nTeleport / provisioning mismatch",
    "useWhen": "Use when customer reports: post-Teleport data failure, switched networks no internet, after Teleport MMS fails, after",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Which network did you switch from and which network did you switch to?",
      "Do you still see the old eSIM in your phone settings?",
      "Is the issue data, MMS, calls, SMS, or everything?"
    ],
    "quickChecks": [
      "Verify Teleport status. INTERNAL VERIFICATION REQUIRED",
      "Confirm new eSIM/profile is installed and enabled.",
      "Confirm old inactive eSIM is removed or disabled after new profile is confirmed.",
      "Confirm destination-network APN is installed/entered.",
      "For Android messaging issues, isolate RCS and clear app cache if needed."
    ],
    "quickSteps": [
      "Verify Teleport status. INTERNAL VERIFICATION REQUIRED",
      "Confirm new eSIM/profile is installed and enabled.",
      "Confirm old inactive eSIM is removed or disabled after new profile is confirmed.",
      "Confirm destination-network APN is installed/entered.",
      "For Android messaging issues, isolate RCS and clear app cache if needed."
    ],
    "steps": [
      "Verify Teleport is complete or identify stuck state. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm the new destination network.",
      "Confirm new eSIM/profile is installed, enabled, and selected for data.",
      "Remove or disable the old inactive eSIM only after confirming the new one exists or",
      "support confirms safe removal.",
      "Reset Network Settings to clear old routing/cache.",
      "Apply the destination network’s APN.",
      "Restart phone.",
      "Test cellular data first.",
      "Test MMS second.",
      "If Android/Google Messages shows RCS or “invalid destination” behavior, turn RCS off",
      "temporarily and clear Messages cache.",
      "Escalate if Teleport complete + new APN/profile correct + old profile cleared + data/MMS",
      "still fail."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Cellular: confirm new line is ON and selected.",
        "Delete old inactive eSIM only after new line/profile is confirmed.",
        "Install correct APN profile using Safari if needed.",
        "Restart and test with Wi-Fi off."
      ],
      "android": [
        "Settings > SIM Manager: confirm new eSIM active.",
        "Remove old inactive eSIM after new one is confirmed.",
        "Enter destination-network APN manually.",
        "Clear Google Messages cache if MMS/RCS errors persist.",
        "Turn RCS off temporarily for testing."
      ],
      "general": [
        "Verify Teleport is complete or identify stuck state. INTERNAL VERIFICATION",
        "REQUIRED",
        "Confirm the new destination network.",
        "Confirm new eSIM/profile is installed, enabled, and selected for data.",
        "Remove or disable the old inactive eSIM only after confirming the new one exists or",
        "support confirms safe removal.",
        "Reset Network Settings to clear old routing/cache.",
        "Apply the destination network’s APN.",
        "Restart phone.",
        "Test cellular data first.",
        "Test MMS second.",
        "If Android/Google Messages shows RCS or “invalid destination” behavior, turn RCS off",
        "temporarily and clear Messages cache.",
        "Escalate if Teleport complete + new APN/profile correct + old profile cleared + data/MMS",
        "still fail."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "After a network switch, your phone needs the new network profile and APN settings. If the old \neSIM or old APN is still active, data and picture messages can fail. Let’s confirm the new eSIM \nis selected, remove the old inactive profile if safe, and then apply the APN for the new network."
      }
    ],
    "zendeskNote": "Issue: Post-Teleport data/MMS failure \nFrom network: [X] \nTo network: [Y] \nDevice/OS: [Device + OS] \nSIM/eSIM: eSIM \nSymptoms: [No data / MMS fail / SMS fail / invalid destination / SOS] \nInternal checks: Teleport status, new eSIM state, line provisioning INTERNAL VERIFICATION \nREQUIRED \nSteps tried: Old eSIM removed/disabled, new eSIM selected, network reset, destination APN \napplied, RCS isolated, rebooted \nResult: [Resolved / Pending / Escalated]",
    "escalation": {
      "neededWhen": [
        "Teleport shows complete.",
        "New eSIM is installed and selected.",
        "Old inactive profile removed/disabled.",
        "Destination APN is correct.",
        "Data/MMS still fails."
      ],
      "evidenceNeeded": [
        "Teleport status, eSIM status, routing release, provisioning, MMSC",
        "routing."
      ],
      "summaryTemplate": "Post-Teleport data/MMS failure. From [X] to [Y]. Device/OS: [X]. New eSIM installed/selected. \nOld eSIM removed/disabled. Destination APN verified. Network reset/reboot completed. \nData/MMS still fails. Requesting routing/provisioning/MMSC review. INTERNAL VERIFICATION \nREQUIRED"
    },
    "escalationRequiredWhen": [
      "Teleport shows complete.",
      "New eSIM is installed and selected.",
      "Old inactive profile removed/disabled.",
      "Destination APN is correct.",
      "Data/MMS still fails."
    ],
    "escalationFormat": [
      "Post-Teleport data/MMS failure. From [X] to [Y]. Device/OS: [X]. New eSIM installed/selected. ",
      "Old eSIM removed/disabled. Destination APN verified. Network reset/reboot completed. ",
      "Data/MMS still fails. Requesting routing/provisioning/MMSC review. INTERNAL VERIFICATION ",
      "REQUIRED"
    ],
    "relatedPlaybooks": [
      "mobile-data-not-working-bars-but-no-internet",
      "iphone-apnprofile-logic",
      "mms-fails-but-sms-works-data-works-but-mms-fails",
      "teleport-esim-recovery",
      "teleport-esim-recovery"
    ],
    "sourceAliases": [
      "X1",
      "X3",
      "X4",
      "X5",
      "P3",
      "P4"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Teleport status, eSIM status, routing release, provisioning, MMSC",
      "routing."
    ],
    "batch": "Batch 2",
    "aliases": [
      "post-teleport data failure",
      "switched networks no internet",
      "after teleport mms fails",
      "after",
      "switching networks no data",
      "old esim",
      "new esim",
      "invalid destination address"
    ],
    "symptoms": [
      "post-teleport data failure",
      "switched networks no internet",
      "after teleport mms fails",
      "after",
      "switching networks no data",
      "old esim",
      "new esim",
      "invalid destination address"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X1, X3, X4, X5, P3, P4"
  },
  {
    "id": "apn-escalation-triggers",
    "title": "APN Escalation Triggers",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "apn-data",
      "batch2"
    ],
    "keywords": [
      "apn",
      "escalation",
      "triggers",
      "apn-data"
    ],
    "customerPhrases": [
      "apn escalation",
      "apn correct but no data",
      "data soc",
      "pdp failure",
      "provisioning issue",
      "backend",
      "refresh",
      "mmsc routing",
      "apn verified"
    ],
    "preview": {
      "problem": "Backend data provisioning / PDP context failure / MMSC routing issue / missing SOC/feature",
      "firstQuestion": "Have we already confirmed the exact APN values from your settings?",
      "firstAction": "",
      "escalateIf": "Correct APN verified by screenshot or guided review."
    },
    "quickAnswer": "Backend data provisioning / PDP context failure / MMSC routing issue / missing SOC/feature \nentitlement",
    "useWhen": "Use when customer reports: APN escalation, APN correct but no data, data SOC, PDP failure, provisioning issue, backend",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Have we already confirmed the exact APN values from your settings?",
      "Does normal calling/texting work?",
      "Did the issue begin after activation, renewal, Teleport, or device change?",
      "Quick checks before escalation:",
      "Screenshot or confirm exact APN values.",
      "Confirm active APN is selected.",
      "Confirm line is active and data balance is available. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm Wi-Fi/VPN/Private DNS/Data Saver are off during test.",
      "Confirm reboot and/or Reset Network Settings completed.",
      "Step-by-step escalation readiness:",
      "Confirm the customer’s network.",
      "Confirm APN values match network matrix exactly.",
      "Confirm APN is selected and saved.",
      "Confirm line active/data available. INTERNAL VERIFICATION REQUIRED",
      "Confirm device is unlocked/compatible.",
      "Confirm customer tested with Wi-Fi off.",
      "Confirm restart and Airplane Mode toggle completed.",
      "Confirm whether issue is data, MMS, hotspot, or all packet services.",
      "Gather screenshots if possible.",
      "Escalate with a clear request: data SOC/PCRF review, MMSC routing review, hotspot",
      "entitlement/SOC review, or eSIM/provisioning review.",
      "iPhone checks:",
      "Profile installed under VPN & Device Management.",
      "No old/conflicting APN profiles.",
      "Correct cellular data line selected.",
      "VPN/Private Relay disabled for testing.",
      "Android checks:",
      "APN selected with radio button.",
      "No spaces/typos in APN Type.",
      "MNC save behavior checked if applicable.",
      "VPN/Private DNS/Data Saver disabled."
    ],
    "quickChecks": [],
    "quickSteps": [],
    "steps": [],
    "deviceSpecificSteps": {},
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Your phone-side settings now look correct, and the issue is still happening. That points to \nsomething on the line’s network provisioning rather than anything else you need to keep \nchanging on the phone. I’m going to document the APN checks we completed and escalate this \nfor an account-side data refresh/review."
      }
    ],
    "zendeskNote": "Issue: APN verified but service still failing \nNetwork: [Warp / Dark Star / Light Speed] \nDevice/OS: [Device + OS] \nSIM/eSIM: [eSIM / pSIM] \nAffected service: [Data / MMS / Hotspot / All] \n\nTrigger: [Activation / Teleport / Renewal / Device change / Sudden] \nAPN verified: [Yes — details/screenshots] \nSteps tried: Wi-Fi off, VPN/DNS off, APN selected, reboot, network reset, data balance checked \nInternal checks: Line active, data/hotspot/MMS entitlements INTERNAL VERIFICATION \nREQUIRED \nSuspected cause: Backend provisioning/SOC/PCRF/MMSC issue \nNext action: Escalated to appropriate internal team",
    "escalation": {
      "neededWhen": [
        "Correct APN verified by screenshot or guided review.",
        "Data balance/feature eligibility confirmed.",
        "Device-side settings are clean.",
        "Issue persists after reboot/network reset.",
        "Service failure is reproducible."
      ],
      "evidenceNeeded": [
        "SOC codes, PCRF/PGW session state, MMSC routing, hotspot",
        "entitlement, data provisioning.",
        "Batch 2 Agent Import Notes",
        "Create these as separate cards",
        "Mobile Data Not Working / Bars But No Internet",
        "Warp APN Setup & MMS Configuration",
        "Dark Star APN Setup & Android Save Failure",
        "Light Speed APN Configuration",
        "Samsung Grayed-Out APN",
        "iPhone APN / Profile Logic & Dual eSIM Conflicts",
        "Hotspot Not Working / Hotspot APN",
        "MMS Fails But SMS Works / Data Works But MMS Fails",
        "Post-Teleport Data & MMS Failure",
        "APN Escalation Triggers",
        "Suggested category mapping",
        "APN / Data",
        "Mobile Data Not Working",
        "Warp APN Setup",
        "Dark Star APN Setup",
        "Light Speed APN Setup",
        "APN Escalation Triggers",
        "MMS",
        "MMS Fails But SMS Works",
        "Warp APN Setup & MMS",
        "Dark Star APN Setup",
        "Hotspot",
        "Hotspot Not Working / Hotspot APN",
        "Devices",
        "Samsung Grayed-Out APN",
        "iPhone APN / Profile Logic",
        "Teleport",
        "Post-Teleport Data & MMS Failure",
        "Suggested pinned/common cards from Batch 2",
        "Mobile Data Not Working / Bars But No Internet",
        "MMS Fails But SMS Works",
        "Hotspot Not Working",
        "Post-Teleport Data & MMS Failure",
        "Dark Star APN Setup",
        "Samsung Grayed-Out APN",
        "UI rule",
        "Show a short card preview first:",
        "Problem",
        "First question",
        "First action",
        "Escalate if",
        "Then open full card with:",
        "Ask customer first",
        "Quick checks",
        "Step-by-step troubleshooting",
        "iPhone steps",
        "Android steps",
        "Copy-ready reply",
        "Zendesk note",
        "Escalation summary",
        "Related playbooks",
        "Source aliases",
        "Confidence",
        "Needs internal verification"
      ],
      "summaryTemplate": "APN verified but service still failing. Network: [X]. Device/OS: [X]. SIM type: [X]. Affected \nservice: [data/MMS/hotspot]. Trigger: [X]. APN values confirmed and selected. \nWi-Fi/VPN/DNS/Data Saver off. Reboot/network reset completed. Line active and \nbalance/eligibility checked. Requesting [data SOC/PCRF review / MMSC routing review / \nhotspot entitlement review]. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Correct APN verified by screenshot or guided review.",
      "Data balance/feature eligibility confirmed.",
      "Device-side settings are clean.",
      "Issue persists after reboot/network reset.",
      "Service failure is reproducible."
    ],
    "escalationFormat": [
      "APN verified but service still failing. Network: [X]. Device/OS: [X]. SIM type: [X]. Affected ",
      "service: [data/MMS/hotspot]. Trigger: [X]. APN values confirmed and selected. ",
      "Wi-Fi/VPN/DNS/Data Saver off. Reboot/network reset completed. Line active and ",
      "balance/eligibility checked. Requesting [data SOC/PCRF review / MMSC routing review / ",
      "hotspot entitlement review]. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "mobile-data-not-working-bars-but-no-internet",
      "mms-fails-but-sms-works-data-works-but-mms-fails",
      "hotspot-not-working",
      "post-teleport-data-mms-failure",
      "post-teleport-data-mms-failure"
    ],
    "sourceAliases": [
      "X1",
      "P7",
      "P3",
      "P2"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "SOC codes, PCRF/PGW session state, MMSC routing, hotspot",
      "entitlement, data provisioning.",
      "Batch 2 Agent Import Notes",
      "Create these as separate cards",
      "Mobile Data Not Working / Bars But No Internet",
      "Warp APN Setup & MMS Configuration",
      "Dark Star APN Setup & Android Save Failure",
      "Light Speed APN Configuration",
      "Samsung Grayed-Out APN",
      "iPhone APN / Profile Logic & Dual eSIM Conflicts",
      "Hotspot Not Working / Hotspot APN",
      "MMS Fails But SMS Works / Data Works But MMS Fails",
      "Post-Teleport Data & MMS Failure",
      "APN Escalation Triggers",
      "Suggested category mapping",
      "APN / Data",
      "Mobile Data Not Working",
      "Warp APN Setup",
      "Dark Star APN Setup",
      "Light Speed APN Setup",
      "APN Escalation Triggers",
      "MMS",
      "MMS Fails But SMS Works",
      "Warp APN Setup & MMS",
      "Dark Star APN Setup",
      "Hotspot",
      "Hotspot Not Working / Hotspot APN",
      "Devices",
      "Samsung Grayed-Out APN",
      "iPhone APN / Profile Logic",
      "Teleport",
      "Post-Teleport Data & MMS Failure",
      "Suggested pinned/common cards from Batch 2",
      "Mobile Data Not Working / Bars But No Internet",
      "MMS Fails But SMS Works",
      "Hotspot Not Working",
      "Post-Teleport Data & MMS Failure",
      "Dark Star APN Setup",
      "Samsung Grayed-Out APN",
      "UI rule",
      "Show a short card preview first:",
      "Problem",
      "First question",
      "First action",
      "Escalate if",
      "Then open full card with:",
      "Ask customer first",
      "Quick checks",
      "Step-by-step troubleshooting",
      "iPhone steps",
      "Android steps",
      "Copy-ready reply",
      "Zendesk note",
      "Escalation summary",
      "Related playbooks",
      "Source aliases",
      "Confidence",
      "Needs internal verification"
    ],
    "batch": "Batch 2",
    "aliases": [
      "apn escalation",
      "apn correct but no data",
      "data soc",
      "pdp failure",
      "provisioning issue",
      "backend",
      "refresh",
      "mmsc routing",
      "apn verified"
    ],
    "symptoms": [
      "apn escalation",
      "apn correct but no data",
      "data soc",
      "pdp failure",
      "provisioning issue",
      "backend",
      "refresh",
      "mmsc routing",
      "apn verified"
    ],
    "intent": [
      "Ask Customer",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X1, P7, P3, P2"
  },
  {
    "id": "new-line-activation-not-working-activation-pending",
    "title": "New Line Activation Not Working / Activation Pending",
    "category": "activation",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "activation",
      "batch3"
    ],
    "keywords": [
      "new",
      "line",
      "activation",
      "not",
      "working",
      "pending"
    ],
    "customerPhrases": [
      "activation pending",
      "new line inactive",
      "no service after activation",
      "stuck on activating",
      "activation",
      "not working",
      "line says inactive",
      "just activated but no service"
    ],
    "preview": {
      "problem": "Activation delay / provisioning delay / port-in hold / payment or account sync issue / SIM-eSIM",
      "firstQuestion": "Are you activating with an eSIM or a physical SIM?",
      "firstAction": "Confirm activation status in the account/backend. INTERNAL VERIFICATION",
      "escalateIf": "Activation is stuck/pending beyond expected processing and no customer action is"
    },
    "quickAnswer": "Activation delay / provisioning delay / port-in hold / payment or account sync issue / SIM-eSIM \nsetup issue / device compatibility issue",
    "useWhen": "Use when customer reports: activation pending, new line inactive, no service after activation, stuck on activating, activation",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are you activating with an eSIM or a physical SIM?",
      "Are you keeping your number from another carrier, or getting a new number?",
      "What phone model do you have, and does it show any exact error message?"
    ],
    "quickChecks": [
      "Check account/line activation status. INTERNAL VERIFICATION REQUIRED",
      "If port-in, check port status and rejection/hold reason. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm device is unlocked and compatible.",
      "If eSIM, confirm stable Wi-Fi and correct EID/IMEI.",
      "If pSIM, confirm correct SIM/ICCID and that the SIM is seated properly."
    ],
    "quickSteps": [
      "Check account/line activation status. INTERNAL VERIFICATION REQUIRED",
      "If port-in, check port status and rejection/hold reason. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm device is unlocked and compatible.",
      "If eSIM, confirm stable Wi-Fi and correct EID/IMEI.",
      "If pSIM, confirm correct SIM/ICCID and that the SIM is seated properly."
    ],
    "steps": [
      "Confirm activation status in the account/backend. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm whether the customer is using eSIM or pSIM.",
      "Confirm device unlock status. On iPhone, check Settings > General > About > Carrier",
      "Lock = “No SIM restrictions.”",
      "If eSIM, confirm customer is on stable Wi-Fi and VPN is off.",
      "If pSIM, confirm SIM is inserted correctly and the ICCID matches the activation.",
      "Ask customer to turn Airplane Mode ON for 30 seconds, then OFF.",
      "Restart the device.",
      "Confirm correct SIM/eSIM is enabled and selected for calls/data.",
      "If the account shows active but the phone still shows No Service/SOS, run the No",
      "Service/SOS playbook.",
      "If activation remains pending/stuck with no customer-side action available, escalate for",
      "provisioning/activation review. INTERNAL VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > General > About > Carrier Lock must say “No SIM restrictions.”",
        "Settings > Cellular: confirm the new eSIM/line is ON.",
        "If eSIM setup is available through app/native install, use the official flow shown to the",
        "customer.",
        "If QR/profile install is used, keep Wi-Fi on until activation completes.",
        "Restart after activation."
      ],
      "android": [
        "Settings > Connections / Network & Internet > SIMs or SIM Manager.",
        "Confirm the new SIM/eSIM is toggled ON.",
        "Confirm it is selected for calls/SMS/data.",
        "For physical SIM, use SIM slot 1 where possible and reseat the SIM if not detected.",
        "Restart after activation."
      ],
      "general": [
        "Confirm activation status in the account/backend. INTERNAL VERIFICATION",
        "REQUIRED",
        "Confirm whether the customer is using eSIM or pSIM.",
        "Confirm device unlock status. On iPhone, check Settings > General > About > Carrier",
        "Lock = “No SIM restrictions.”",
        "If eSIM, confirm customer is on stable Wi-Fi and VPN is off.",
        "If pSIM, confirm SIM is inserted correctly and the ICCID matches the activation.",
        "Ask customer to turn Airplane Mode ON for 30 seconds, then OFF.",
        "Restart the device.",
        "Confirm correct SIM/eSIM is enabled and selected for calls/data.",
        "If the account shows active but the phone still shows No Service/SOS, run the No",
        "Service/SOS playbook.",
        "If activation remains pending/stuck with no customer-side action available, escalate for",
        "provisioning/activation review. INTERNAL VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "I can help get the new line moving. First, let’s confirm whether the activation is still processing or \nwhether the phone just needs to reconnect to the network. \nAre you activating with an eSIM or a physical SIM? Also, please turn Airplane Mode ON for 30 \nseconds, then turn it OFF, and restart the phone. I’ll check the activation status on my end while \nyou do that."
      }
    ],
    "zendeskNote": "Issue: New line activation not working / activation pending \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nDevice/OS: [Device + OS] \nSIM/eSIM: [eSIM / pSIM] \nActivation type: [New number / Port-in] \nTrigger: New activation \nSymptoms: [Pending / inactive / no service / SOS / error message] \nSteps tried: Airplane toggle, reboot, SIM/eSIM enabled, Wi-Fi confirmed for eSIM, device unlock \nchecked \nInternal checks: Activation status, port status, payment/account sync, IMEI/EID/ICCID match \nINTERNAL VERIFICATION REQUIRED \nSuspected cause: Activation/provisioning delay or device/SIM setup issue \nNext action: Escalate if status remains stuck or account shows active but device cannot register",
    "escalation": {
      "neededWhen": [
        "Activation is stuck/pending beyond expected processing and no customer action is",
        "available.",
        "Account shows active, but device remains No Service/SOS after restart and SIM/eSIM",
        "checks.",
        "eSIM/pSIM identifiers match, device is unlocked, but service does not register.",
        "Port-in is stuck or rejected and requires LNP/porting review."
      ],
      "evidenceNeeded": [
        "Activation status, port status, account/payment sync,",
        "IMEI/EID/ICCID match, backend provisioning/profile push."
      ],
      "summaryTemplate": "New activation issue. Network: [X]. Device/OS: [X]. SIM type: [eSIM/pSIM]. Activation type: [new \nnumber/port-in]. Status: [pending/active/error]. Device unlocked: [Yes/No]. Wi-Fi confirmed for \neSIM: [Yes/No]. Airplane toggle/reboot completed. Current device state: [No Service/SOS/etc.]. \nRequesting activation/provisioning review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Activation is stuck/pending beyond expected processing and no customer action is",
      "available.",
      "Account shows active, but device remains No Service/SOS after restart and SIM/eSIM",
      "checks.",
      "eSIM/pSIM identifiers match, device is unlocked, but service does not register.",
      "Port-in is stuck or rejected and requires LNP/porting review."
    ],
    "escalationFormat": [
      "New activation issue. Network: [X]. Device/OS: [X]. SIM type: [eSIM/pSIM]. Activation type: [new ",
      "number/port-in]. Status: [pending/active/error]. Device unlocked: [Yes/No]. Wi-Fi confirmed for ",
      "eSIM: [Yes/No]. Airplane toggle/reboot completed. Current device state: [No Service/SOS/etc.]. ",
      "Requesting activation/provisioning review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "esim-install-qr-code-failures",
      "physical-sim-not-working-invalid-sim-iccid-checks",
      "carrier-lock-sim-not-supported",
      "sos-only-no-service-triage",
      "porting-bank-code-delays"
    ],
    "sourceAliases": [
      "P3",
      "P7",
      "P4",
      "X3",
      "X9"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Activation status, port status, account/payment sync,",
      "IMEI/EID/ICCID match, backend provisioning/profile push."
    ],
    "batch": "Batch 3",
    "aliases": [
      "activation pending",
      "new line inactive",
      "no service after activation",
      "stuck on activating",
      "activation",
      "not working",
      "line says inactive",
      "just activated but no service"
    ],
    "symptoms": [
      "activation pending",
      "new line inactive",
      "no service after activation",
      "stuck on activating",
      "activation",
      "not working",
      "line says inactive",
      "just activated but no service"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "P3, P7, P4, X3, X9"
  },
  {
    "id": "esim-install-qr-code-failures",
    "title": "eSIM Install & QR Code Failures",
    "category": "esim-sim",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "esim-sim",
      "batch3"
    ],
    "keywords": [
      "esim",
      "install",
      "code",
      "failures",
      "esim-sim"
    ],
    "customerPhrases": [
      "esim won’t scan",
      "qr code invalid",
      "qr code already used",
      "qr no longer valid",
      "cellular plan",
      "cannot be added",
      "unable to complete cellular plan change",
      "sm-dp+ error",
      "esim stuck",
      "activation code not working"
    ],
    "preview": {
      "problem": "eSIM profile download failure / QR token already consumed / EID mismatch / carrier lock / old",
      "firstQuestion": "What exact error message do you see?",
      "firstAction": "Ask for the exact error message.",
      "escalateIf": "Correct EID/IMEI verified, Wi-Fi stable, VPN off, old profiles cleared, and second install"
    },
    "quickAnswer": "eSIM profile download failure / QR token already consumed / EID mismatch / carrier lock / old \nprofile conflict / Wi-Fi or VPN interruption",
    "useWhen": "Use when customer reports: eSIM won’t scan, QR code invalid, QR code already used, QR no longer valid, cellular plan",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "What exact error message do you see?",
      "Are you connected to stable Wi-Fi with VPN/Private Relay off?",
      "Do you see any old or pending eSIM profiles in your Cellular/SIM settings?"
    ],
    "quickChecks": [
      "Confirm EID/IMEI matches the backend activation record. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm device supports eSIM and is carrier-unlocked.",
      "Confirm Wi-Fi is stable and VPN/Private Relay/Private DNS are off.",
      "Check for old, inactive, or pending eSIM profiles.",
      "Check whether the QR/profile has already been used or is stuck. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "quickSteps": [
      "Confirm EID/IMEI matches the backend activation record. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm device supports eSIM and is carrier-unlocked.",
      "Confirm Wi-Fi is stable and VPN/Private Relay/Private DNS are off.",
      "Check for old, inactive, or pending eSIM profiles.",
      "Check whether the QR/profile has already been used or is stuck. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "steps": [
      "Ask for the exact error message.",
      "Confirm device supports eSIM and is unlocked.",
      "Confirm the customer is on stable Wi-Fi.",
      "Ask customer to turn off VPN, iCloud Private Relay, or Private DNS temporarily.",
      "Check Cellular/SIM settings for old or pending eSIM profiles.",
      "If a profile is stuck as “Activating” or “Pending” for a long time, confirm it is safe to",
      "remove before deleting.",
      "Verify EID/IMEI in backend against the device. INTERNAL VERIFICATION REQUIRED",
      "If QR says used/expired/no longer valid, reissue a new eSIM/QR only after account",
      "verification. INTERNAL VERIFICATION REQUIRED",
      "Have customer scan/install the new profile while staying on Wi-Fi.",
      "Restart after install and test service."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Cellular: look for pending/inactive eSIM profiles.",
        "Settings > Cellular > Add eSIM > Use QR Code, if using QR install.",
        "Settings > General > About: confirm Carrier Lock = “No SIM restrictions.”",
        "Keep Wi-Fi on until eSIM finishes installing.",
        "Do not repeatedly scan the same QR if the phone says it is already used/no longer valid."
      ],
      "android": [
        "Pixel: Settings > Network & Internet > SIMs > Add SIM / Download eSIM.",
        "Samsung: Settings > Connections > SIM Manager > Add eSIM.",
        "Confirm eSIM is toggled ON and selected for data/calls after install.",
        "Turn off VPN/Private DNS during install.",
        "Restart after successful install."
      ],
      "general": [
        "Ask for the exact error message.",
        "Confirm device supports eSIM and is unlocked.",
        "Confirm the customer is on stable Wi-Fi.",
        "Ask customer to turn off VPN, iCloud Private Relay, or Private DNS temporarily.",
        "Check Cellular/SIM settings for old or pending eSIM profiles.",
        "If a profile is stuck as “Activating” or “Pending” for a long time, confirm it is safe to",
        "remove before deleting.",
        "Verify EID/IMEI in backend against the device. INTERNAL VERIFICATION REQUIRED",
        "If QR says used/expired/no longer valid, reissue a new eSIM/QR only after account",
        "verification. INTERNAL VERIFICATION REQUIRED",
        "Have customer scan/install the new profile while staying on Wi-Fi.",
        "Restart after install and test service."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "eSIM installs are very sensitive to Wi-Fi, old profiles, and whether the QR code has already \nbeen used. Let’s cleanly check the phone before trying again. \n\nPlease connect to stable Wi-Fi, turn off any VPN, and open your Cellular/SIM settings. Tell me if \nyou see any old, inactive, or pending eSIM profiles there, and also tell me the exact error \nmessage you see when scanning."
      }
    ],
    "zendeskNote": "Issue: eSIM install / QR failure \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nDevice/OS: [Device + OS] \nEID/IMEI: [Verified / mismatch / pending] \nSIM/eSIM: eSIM \nTrigger: [New activation / Device transfer / Teleport / Reissue] \nError: [Exact error message] \nSteps tried: Wi-Fi confirmed, VPN off, old/pending profiles checked, EID/IMEI verified, new \nQR/reissue attempted if applicable \nInternal checks: EID/IMEI match, ICCID/profile state, QR status INTERNAL VERIFICATION \nREQUIRED \nSuspected cause: QR/profile state, EID mismatch, carrier lock, or SM-DP+ provisioning issue \nNext action: Reissue eSIM or escalate if repeated install failure",
    "escalation": {
      "neededWhen": [
        "Correct EID/IMEI verified, Wi-Fi stable, VPN off, old profiles cleared, and second install",
        "attempt still fails.",
        "Error indicates SM-DP+ / provisioning server / profile download issue.",
        "Device shows unlocked and compatible, but still rejects cellular plan.",
        "Backend blocks reissue due to security/velocity/fraud controls."
      ],
      "evidenceNeeded": [
        "EID/IMEI match, ICCID/profile state, QR reissue, eSIM",
        "velocity/security locks, SM-DP+ payload regeneration."
      ],
      "summaryTemplate": "eSIM install failure. Network: [X]. Device/OS: [X]. EID/IMEI verified: [Yes/No]. Error: [exact]. \nWi-Fi stable and VPN off. Old/pending profiles checked/removed if safe. QR/profile state: \n[new/used/expired]. Second attempt result: [X]. Requesting eSIM profile/SM-DP+/EID \nprovisioning review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Correct EID/IMEI verified, Wi-Fi stable, VPN off, old profiles cleared, and second install",
      "attempt still fails.",
      "Error indicates SM-DP+ / provisioning server / profile download issue.",
      "Device shows unlocked and compatible, but still rejects cellular plan.",
      "Backend blocks reissue due to security/velocity/fraud controls."
    ],
    "escalationFormat": [
      "eSIM install failure. Network: [X]. Device/OS: [X]. EID/IMEI verified: [Yes/No]. Error: [exact]. ",
      "Wi-Fi stable and VPN off. Old/pending profiles checked/removed if safe. QR/profile state: ",
      "[new/used/expired]. Second attempt result: [X]. Requesting eSIM profile/SM-DP+/EID ",
      "provisioning review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "deleted-active-esim-reissue",
      "carrier-lock-sim-not-supported",
      "new-line-activation-not-working-activation-pending",
      "new-line-activation-not-working-activation-pending",
      "teleport-esim-recovery"
    ],
    "sourceAliases": [
      "X9",
      "P3",
      "P7",
      "X3"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "EID/IMEI match, ICCID/profile state, QR reissue, eSIM",
      "velocity/security locks, SM-DP+ payload regeneration."
    ],
    "batch": "Batch 3",
    "aliases": [
      "esim won’t scan",
      "qr code invalid",
      "qr code already used",
      "qr no longer valid",
      "cellular plan",
      "cannot be added",
      "unable to complete cellular plan change",
      "sm-dp+ error",
      "esim stuck",
      "activation code not working"
    ],
    "symptoms": [
      "esim won’t scan",
      "qr code invalid",
      "qr code already used",
      "qr no longer valid",
      "cellular plan",
      "cannot be added",
      "unable to complete cellular plan change",
      "sm-dp+ error",
      "esim stuck",
      "activation code not working"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X9, P3, P7, X3"
  },
  {
    "id": "deleted-active-esim-reissue",
    "title": "Deleted Active eSIM & Reissue",
    "category": "esim-sim",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "esim-sim",
      "batch3"
    ],
    "keywords": [
      "deleted",
      "active",
      "esim",
      "reissue",
      "esim-sim"
    ],
    "customerPhrases": [
      "deleted esim",
      "accidentally deleted my esim",
      "esim disappeared",
      "lost esim profile",
      "removed",
      "cellular plan",
      "line disappeared",
      "deleted active line"
    ],
    "preview": {
      "problem": "Deleted eSIM profile / one-time profile consumed / eSIM reissue needed / security verification",
      "firstQuestion": "Did you tap “Delete eSIM,” “Remove cellular plan,” or did it disappear by itself?",
      "firstAction": "Ask customer to open Cellular/SIM settings and confirm whether the eSIM exists but is",
      "escalateIf": "Reissue is blocked by backend security/velocity limits."
    },
    "quickAnswer": "Deleted eSIM profile / one-time profile consumed / eSIM reissue needed / security verification \nrequired",
    "useWhen": "Use when customer reports: deleted eSIM, accidentally deleted my eSIM, eSIM disappeared, lost eSIM profile, removed",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Did you tap “Delete eSIM,” “Remove cellular plan,” or did it disappear by itself?",
      "Are you connected to Wi-Fi right now?",
      "Do you have another screen available, like a computer/tablet, if a new QR code needs to",
      "be scanned?"
    ],
    "quickChecks": [
      "Confirm whether eSIM is deleted or just turned off.",
      "Confirm customer identity/account verification. INTERNAL VERIFICATION REQUIRED",
      "Confirm device EID/IMEI. INTERNAL VERIFICATION REQUIRED",
      "Confirm Wi-Fi is available for reinstall.",
      "Check whether reissue is allowed or blocked by security limits. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "quickSteps": [
      "Confirm whether eSIM is deleted or just turned off.",
      "Confirm customer identity/account verification. INTERNAL VERIFICATION REQUIRED",
      "Confirm device EID/IMEI. INTERNAL VERIFICATION REQUIRED",
      "Confirm Wi-Fi is available for reinstall.",
      "Check whether reissue is allowed or blocked by security limits. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "steps": [
      "Ask customer to open Cellular/SIM settings and confirm whether the eSIM exists but is",
      "off, or is fully deleted.",
      "If profile exists, toggle it ON and select it for data/calls.",
      "If profile is deleted, complete required identity/security verification. INTERNAL",
      "VERIFICATION REQUIRED",
      "Verify EID/IMEI for the target device. INTERNAL VERIFICATION REQUIRED",
      "Reissue/generate a new eSIM profile if allowed. INTERNAL VERIFICATION REQUIRED",
      "Send or display the new QR/profile through approved process.",
      "Customer installs it while connected to stable Wi-Fi.",
      "Restart phone.",
      "Test calls, SMS, and data.",
      "Escalate if reissue is blocked or new profile fails repeatedly."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Cellular: check whether the eSIM exists but is toggled off.",
        "If deleted, use Add eSIM > Use QR Code after support reissue.",
        "Keep Wi-Fi on during install.",
        "Confirm new line is selected for calls/data."
      ],
      "android": [
        "Samsung: Settings > Connections > SIM Manager.",
        "Pixel: Settings > Network & Internet > SIMs.",
        "Check if eSIM is disabled vs deleted.",
        "If deleted, use Add eSIM / Download SIM after support reissue.",
        "Restart after install."
      ],
      "general": [
        "Ask customer to open Cellular/SIM settings and confirm whether the eSIM exists but is",
        "off, or is fully deleted.",
        "If profile exists, toggle it ON and select it for data/calls.",
        "If profile is deleted, complete required identity/security verification. INTERNAL",
        "VERIFICATION REQUIRED",
        "Verify EID/IMEI for the target device. INTERNAL VERIFICATION REQUIRED",
        "Reissue/generate a new eSIM profile if allowed. INTERNAL VERIFICATION REQUIRED",
        "Send or display the new QR/profile through approved process.",
        "Customer installs it while connected to stable Wi-Fi.",
        "Restart phone.",
        "Test calls, SMS, and data.",
        "Escalate if reissue is blocked or new profile fails repeatedly."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "No worries — deleted eSIM profiles can usually be recovered by issuing a fresh secure profile, \nbut the old deleted profile itself usually cannot be reused. Because this protects your number \nfrom SIM-swap fraud, I’ll first need to complete the required account verification. After that, we \ncan issue a new eSIM for the phone and install it over Wi-Fi."
      }
    ],
    "zendeskNote": "Issue: Deleted active eSIM / eSIM reissue \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nDevice/OS: [Device + OS] \nSIM/eSIM: eSIM \nTrigger: [Customer deleted / OS update / Device restore / Unknown] \nSymptoms: eSIM [deleted / disabled / missing] \nSteps tried: Checked SIM settings, confirmed Wi-Fi, verified EID/IMEI, account verification \ncompleted \nInternal checks: Identity verification, EID/IMEI, old ICCID/profile state, reissue eligibility \nINTERNAL VERIFICATION REQUIRED \nSuspected cause: Deleted eSIM profile requiring secure reissue \nNext action: Reissue eSIM or escalate if blocked/failing",
    "escalation": {
      "neededWhen": [
        "Reissue is blocked by backend security/velocity limits.",
        "Identity verification fails or customer cannot receive required verification.",
        "New eSIM fails to install despite correct EID/IMEI and Wi-Fi.",
        "Customer is abroad/no Wi-Fi/no alternate screen and cannot complete install."
      ],
      "evidenceNeeded": [
        "Account verification, EID/IMEI, ICCID/profile state, reissue",
        "eligibility, velocity/fraud/security lock."
      ],
      "summaryTemplate": "Deleted eSIM recovery. Network: [X]. Device/OS: [X]. Customer reports profile \n[deleted/disappeared]. Identity verification: [completed/blocked]. EID/IMEI verified: [Yes/No]. \nReissue attempted: [Yes/No]. Result/error: [X]. Requesting eSIM reissue/security \noverride/provisioning review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Reissue is blocked by backend security/velocity limits.",
      "Identity verification fails or customer cannot receive required verification.",
      "New eSIM fails to install despite correct EID/IMEI and Wi-Fi.",
      "Customer is abroad/no Wi-Fi/no alternate screen and cannot complete install."
    ],
    "escalationFormat": [
      "Deleted eSIM recovery. Network: [X]. Device/OS: [X]. Customer reports profile ",
      "[deleted/disappeared]. Identity verification: [completed/blocked]. EID/IMEI verified: [Yes/No]. ",
      "Reissue attempted: [Yes/No]. Result/error: [X]. Requesting eSIM reissue/security ",
      "override/provisioning review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "esim-install-qr-code-failures",
      "carrier-lock-sim-not-supported",
      "sos-only-no-service-triage",
      "account-securityfraud"
    ],
    "sourceAliases": [
      "P7",
      "P3",
      "X3",
      "X9",
      "X5"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Account verification, EID/IMEI, ICCID/profile state, reissue",
      "eligibility, velocity/fraud/security lock."
    ],
    "batch": "Batch 3",
    "aliases": [
      "deleted esim",
      "accidentally deleted my esim",
      "esim disappeared",
      "lost esim profile",
      "removed",
      "cellular plan",
      "line disappeared",
      "deleted active line"
    ],
    "symptoms": [
      "deleted esim",
      "accidentally deleted my esim",
      "esim disappeared",
      "lost esim profile",
      "removed",
      "cellular plan",
      "line disappeared",
      "deleted active line"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "P7, P3, X3, X9, X5"
  },
  {
    "id": "carrier-lock-sim-not-supported",
    "title": "Carrier Lock & SIM Not Supported",
    "category": "devices-watches",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "devices-watches",
      "batch3"
    ],
    "keywords": [
      "carrier",
      "lock",
      "sim",
      "not",
      "supported",
      "devices-watches"
    ],
    "customerPhrases": [
      "sim not supported",
      "sim not valid",
      "cellular plan cannot be added",
      "carrier locked",
      "contact carrier",
      "to unlock",
      "no sim restrictions",
      "no usable data found",
      "incompatible device",
      "esim not supported"
    ],
    "preview": {
      "problem": "Carrier lock / device compatibility failure / eSIM unsupported device / IMEI/EID whitelist issue",
      "firstQuestion": "Where did you originally buy the phone?",
      "firstAction": "Ask customer for device model and where it was purchased.",
      "escalateIf": "Device shows “No SIM restrictions” but still shows carrier-lock/SIM-not-supported error."
    },
    "quickAnswer": "Carrier lock / device compatibility failure / eSIM unsupported device / IMEI/EID whitelist issue",
    "useWhen": "Use when customer reports: SIM not supported, SIM not valid, cellular plan cannot be added, carrier locked, contact carrier",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Where did you originally buy the phone?",
      "Does the phone show “No SIM restrictions” or does it show a carrier lock?",
      "Are you trying to activate eSIM or physical SIM?"
    ],
    "quickChecks": [
      "iPhone: Settings > General > About > Carrier Lock.",
      "Android: check SIM/network lock status or try manual network selection.",
      "Run device compatibility / IMEI check. INTERNAL VERIFICATION REQUIRED",
      "Confirm eSIM support if customer is using eSIM.",
      "Ask for exact error screenshot if available."
    ],
    "quickSteps": [
      "iPhone: Settings > General > About > Carrier Lock.",
      "Android: check SIM/network lock status or try manual network selection.",
      "Run device compatibility / IMEI check. INTERNAL VERIFICATION REQUIRED",
      "Confirm eSIM support if customer is using eSIM.",
      "Ask for exact error screenshot if available."
    ],
    "steps": [
      "Ask customer for device model and where it was purchased.",
      "Check device unlock status.",
      "If iPhone: Carrier Lock must say “No SIM restrictions.”",
      "If locked, explain that only the original carrier can unlock it.",
      "If device does not support eSIM, pivot to physical SIM if compatible.",
      "If physical SIM is not supported due to device model, explain hardware limitation.",
      "If device shows unlocked but still rejects SIM/eSIM, verify IMEI/EID and escalate for",
      "whitelist/provisioning review. INTERNAL VERIFICATION REQUIRED",
      "For billing/refund requests tied to incompatibility, use safe language and route to",
      "billing/account review. INTERNAL VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > General > About > Carrier Lock.",
        "Required result: “No SIM restrictions.”",
        "If iPhone model is U.S. iPhone 14 or newer, it may be eSIM-only and not accept physical",
        "SIM.",
        "Confirm model and region before advising pSIM vs eSIM."
      ],
      "android": [
        "Check SIM/network unlock status in settings if available.",
        "Try manual network selection; if phone cannot see/select other networks, it may be",
        "locked or incompatible.",
        "Confirm model supports required bands/network.",
        "Confirm eSIM support if using eSIM."
      ],
      "general": [
        "Ask customer for device model and where it was purchased.",
        "Check device unlock status.",
        "If iPhone: Carrier Lock must say “No SIM restrictions.”",
        "If locked, explain that only the original carrier can unlock it.",
        "If device does not support eSIM, pivot to physical SIM if compatible.",
        "If physical SIM is not supported due to device model, explain hardware limitation.",
        "If device shows unlocked but still rejects SIM/eSIM, verify IMEI/EID and escalate for",
        "whitelist/provisioning review. INTERNAL VERIFICATION REQUIRED",
        "For billing/refund requests tied to incompatibility, use safe language and route to",
        "billing/account review. INTERNAL VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "That error usually means the phone is still restricted by the carrier it originally came from, or the \ndevice does not support the SIM/eSIM type being used. Please check this for me: on iPhone, go \nto Settings > General > About > Carrier Lock. It needs to say “No SIM restrictions.” If it shows a \ncarrier lock, the original carrier has to unlock the device before US Mobile can activate on it."
      }
    ],
    "zendeskNote": "Issue: Carrier lock / SIM not supported / incompatible device \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nDevice/OS: [Device + OS] \nSIM/eSIM: [eSIM / pSIM] \nError: [Exact error] \nDevice origin: [Carrier/retailer if known] \nSteps tried: Carrier Lock checked, compatibility checked, IMEI/EID reviewed, SIM/eSIM type \nconfirmed \nInternal checks: Compatibility/IMEI/EID status INTERNAL VERIFICATION REQUIRED \nSuspected cause: Carrier lock or compatibility limitation \nNext action: Customer to request unlock from original carrier / escalate if device shows unlocked \nbut still fails",
    "escalation": {
      "neededWhen": [
        "Device shows “No SIM restrictions” but still shows carrier-lock/SIM-not-supported error.",
        "Compatibility checker passes but activation/eSIM install fails repeatedly.",
        "IMEI/EID appears mismatched or not accepted by provisioning system.",
        "Customer requests billing/refund help due to incompatibility."
      ],
      "evidenceNeeded": [
        "IMEI/EID compatibility, whitelist/provisioning state,",
        "billing/refund/account review."
      ],
      "summaryTemplate": "Carrier lock / compatibility issue. Device/OS: [X]. Network: [X]. SIM type: [eSIM/pSIM]. Error: \n[exact]. Carrier Lock status: [No SIM restrictions / locked / unknown]. IMEI/EID compatibility: \n[pass/fail]. Customer attempted activation: [X]. Requesting IMEI/EID whitelist or \ncompatibility/provisioning review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Device shows “No SIM restrictions” but still shows carrier-lock/SIM-not-supported error.",
      "Compatibility checker passes but activation/eSIM install fails repeatedly.",
      "IMEI/EID appears mismatched or not accepted by provisioning system.",
      "Customer requests billing/refund help due to incompatibility."
    ],
    "escalationFormat": [
      "Carrier lock / compatibility issue. Device/OS: [X]. Network: [X]. SIM type: [eSIM/pSIM]. Error: ",
      "[exact]. Carrier Lock status: [No SIM restrictions / locked / unknown]. IMEI/EID compatibility: ",
      "[pass/fail]. Customer attempted activation: [X]. Requesting IMEI/EID whitelist or ",
      "compatibility/provisioning review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "esim-install-qr-code-failures",
      "physical-sim-not-working-invalid-sim-iccid-checks",
      "new-line-activation-pending",
      "device-compatibility"
    ],
    "sourceAliases": [
      "X9",
      "P4",
      "X3",
      "P3"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "IMEI/EID compatibility, whitelist/provisioning state,",
      "billing/refund/account review."
    ],
    "batch": "Batch 3",
    "aliases": [
      "sim not supported",
      "sim not valid",
      "cellular plan cannot be added",
      "carrier locked",
      "contact carrier",
      "to unlock",
      "no sim restrictions",
      "no usable data found",
      "incompatible device",
      "esim not supported"
    ],
    "symptoms": [
      "sim not supported",
      "sim not valid",
      "cellular plan cannot be added",
      "carrier locked",
      "contact carrier",
      "to unlock",
      "no sim restrictions",
      "no usable data found",
      "incompatible device",
      "esim not supported"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X9, P4, X3, P3"
  },
  {
    "id": "physical-sim-not-working-invalid-sim-iccid-checks",
    "title": "Physical SIM Not Working / Invalid SIM / ICCID Checks",
    "category": "esim-sim",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "esim-sim",
      "batch3"
    ],
    "keywords": [
      "physical",
      "sim",
      "not",
      "working",
      "invalid",
      "iccid",
      "checks",
      "esim-sim"
    ],
    "customerPhrases": [
      "physical sim not working",
      "no sim installed",
      "sim failure",
      "invalid sim",
      "sim card already used",
      "wrong sim",
      "sim not detected",
      "iccid issue"
    ],
    "preview": {
      "problem": "SIM seating/contact issue / wrong SIM for network / ICCID already used / damaged SIM / device",
      "firstQuestion": "What exact message does the phone show: “No SIM,” “Invalid SIM,” or “SIM already",
      "firstAction": "Ask for the exact error message.",
      "escalateIf": "Brand-new SIM shows “already used.”"
    },
    "quickAnswer": "SIM seating/contact issue / wrong SIM for network / ICCID already used / damaged SIM / device \nSIM reader issue / activation mismatch",
    "useWhen": "Use when customer reports: physical SIM not working, no SIM installed, SIM failure, invalid SIM, SIM card already used,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "What exact message does the phone show: “No SIM,” “Invalid SIM,” or “SIM already",
      "used”?",
      "Is this a new SIM kit or a SIM that was used before?",
      "What phone model are you using?"
    ],
    "quickChecks": [
      "Confirm the phone has a physical SIM tray and supports pSIM.",
      "Confirm ICCID matches the activation/account. INTERNAL VERIFICATION REQUIRED",
      "Check whether ICCID is already active or previously used. INTERNAL VERIFICATION",
      "REQUIRED",
      "Ask customer to power off, reseat SIM, and restart.",
      "If possible, test SIM in another compatible unlocked device."
    ],
    "quickSteps": [
      "Confirm the phone has a physical SIM tray and supports pSIM.",
      "Confirm ICCID matches the activation/account. INTERNAL VERIFICATION REQUIRED",
      "Check whether ICCID is already active or previously used. INTERNAL VERIFICATION",
      "REQUIRED",
      "Ask customer to power off, reseat SIM, and restart.",
      "If possible, test SIM in another compatible unlocked device."
    ],
    "steps": [
      "Ask for the exact error message.",
      "Confirm device supports physical SIM.",
      "Power off phone.",
      "Remove SIM tray.",
      "Check SIM orientation and gently wipe gold contacts with a dry microfiber cloth.",
      "Reseat SIM firmly and power on.",
      "Confirm SIM is enabled in settings.",
      "If phone still says No SIM, test in another compatible unlocked phone if available.",
      "If another phone reads the SIM, suspect original phone SIM reader/device issue.",
      "If no phone reads the SIM, suspect damaged SIM and replace or move to eSIM if",
      "compatible. INTERNAL VERIFICATION REQUIRED",
      "If dashboard says “SIM already used,” check ICCID mapping. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Confirm iPhone model has physical SIM tray. U.S. iPhone 14 and newer models are",
        "eSIM-only.",
        "Restart after reseating SIM.",
        "Settings > Cellular: confirm line appears.",
        "If SIM not detected, test another SIM/device if available."
      ],
      "android": [
        "Place SIM in SIM slot 1 if possible.",
        "Settings > SIM Manager: confirm SIM is toggled ON.",
        "Reseat SIM and reboot.",
        "Test SIM in another unlocked phone if available."
      ],
      "general": [
        "Ask for the exact error message.",
        "Confirm device supports physical SIM.",
        "Power off phone.",
        "Remove SIM tray.",
        "Check SIM orientation and gently wipe gold contacts with a dry microfiber cloth.",
        "Reseat SIM firmly and power on.",
        "Confirm SIM is enabled in settings.",
        "If phone still says No SIM, test in another compatible unlocked phone if available.",
        "If another phone reads the SIM, suspect original phone SIM reader/device issue.",
        "If no phone reads the SIM, suspect damaged SIM and replace or move to eSIM if",
        "compatible. INTERNAL VERIFICATION REQUIRED",
        "If dashboard says “SIM already used,” check ICCID mapping. INTERNAL",
        "VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "SIM already used",
        "text": "A physical SIM can usually only be activated once. If the system says this SIM is already used, \nI’ll need to check the SIM’s ICCID on the account side before we decide whether it can be \ncorrected or needs replacement."
      }
    ],
    "zendeskNote": "Issue: Physical SIM not working / invalid SIM \n\nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nDevice/OS: [Device + OS] \nSIM/eSIM: pSIM \nICCID: [last 4 only in note unless approved tools require full] \nTrigger: [New activation / SIM swap / Device change / Replacement SIM] \nSymptoms: [No SIM / Invalid SIM / SIM already used / no service] \nSteps tried: Reseated SIM, cleaned contacts, rebooted, SIM Manager checked, cross-device \ntest [yes/no] \nInternal checks: ICCID mapping, activation status, SIM status INTERNAL VERIFICATION \nREQUIRED \nSuspected cause: SIM hardware, ICCID mapping, wrong SIM/network, or device reader issue \nNext action: Replace SIM / move to eSIM / escalate ICCID mapping issue",
    "escalation": {
      "neededWhen": [
        "Brand-new SIM shows “already used.”",
        "ICCID appears mapped to wrong account/line.",
        "SIM fails in multiple compatible devices and replacement approval is needed.",
        "SIM works in another phone but not customer’s phone and compatibility is disputed."
      ],
      "evidenceNeeded": [
        "ICCID mapping, SIM status, replacement approval, shipping/order",
        "handling, account activation state."
      ],
      "summaryTemplate": "Physical SIM issue. Device/OS: [X]. Network: [X]. ICCID last 4: [X]. Error: [No SIM / Invalid SIM / \nAlready used]. SIM reseated/cleaned/rebooted. Cross-device test: [X]. ICCID mapping/status: \n[X]. Requesting ICCID mapping review or replacement approval. INTERNAL VERIFICATION \nREQUIRED"
    },
    "escalationRequiredWhen": [
      "Brand-new SIM shows “already used.”",
      "ICCID appears mapped to wrong account/line.",
      "SIM fails in multiple compatible devices and replacement approval is needed.",
      "SIM works in another phone but not customer’s phone and compatibility is disputed."
    ],
    "escalationFormat": [
      "Physical SIM issue. Device/OS: [X]. Network: [X]. ICCID last 4: [X]. Error: [No SIM / Invalid SIM / ",
      "Already used]. SIM reseated/cleaned/rebooted. Cross-device test: [X]. ICCID mapping/status: ",
      "[X]. Requesting ICCID mapping review or replacement approval. INTERNAL VERIFICATION ",
      "REQUIRED"
    ],
    "relatedPlaybooks": [
      "new-line-activation-pending",
      "carrier-lock-sim-not-supported",
      "sos-only-no-service-triage",
      "orderssim-shipping"
    ],
    "sourceAliases": [
      "P4",
      "X9",
      "P3",
      "X3",
      "X7"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "ICCID mapping, SIM status, replacement approval, shipping/order",
      "handling, account activation state."
    ],
    "batch": "Batch 3",
    "aliases": [
      "physical sim not working",
      "no sim installed",
      "sim failure",
      "invalid sim",
      "sim card already used",
      "wrong sim",
      "sim not detected",
      "iccid issue"
    ],
    "symptoms": [
      "physical sim not working",
      "no sim installed",
      "sim failure",
      "invalid sim",
      "sim card already used",
      "wrong sim",
      "sim not detected",
      "iccid issue"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "P4, X9, P3, X3, X7"
  },
  {
    "id": "sos-only-no-service-triage",
    "title": "SOS Only / No Service Triage",
    "category": "network-signal",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "network-signal",
      "batch3"
    ],
    "keywords": [
      "sos",
      "only",
      "service",
      "triage",
      "network-signal"
    ],
    "customerPhrases": [
      "sos only",
      "no service",
      "emergency calls only",
      "searching",
      "no bars",
      "cannot connect to network",
      "service disappeared"
    ],
    "preview": {
      "problem": "Network registration failure / line inactive or suspended / incomplete port / failed activation /",
      "firstQuestion": "Did this start after activation, port-in, Teleport, renewal, or device change?",
      "firstAction": "Confirm the line is active and not suspended. INTERNAL VERIFICATION REQUIRED",
      "escalateIf": "Account is active and clear."
    },
    "quickAnswer": "Network registration failure / line inactive or suspended / incomplete port / failed activation / \nfailed Teleport / device lock or compatibility issue / local network issue",
    "useWhen": "Use when customer reports: SOS only, no service, emergency calls only, searching, no bars, cannot connect to network,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Did this start after activation, port-in, Teleport, renewal, or device change?",
      "What ZIP code or general area are you in?",
      "Are you using eSIM or physical SIM?"
    ],
    "quickChecks": [
      "Check account/line status and billing/renewal state. INTERNAL VERIFICATION",
      "REQUIRED",
      "Check activation, port, or Teleport status if relevant. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm device is unlocked and compatible.",
      "Airplane Mode ON for 30 seconds, then OFF.",
      "Check whether there are multiple reports or local network issues. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "quickSteps": [
      "Check account/line status and billing/renewal state. INTERNAL VERIFICATION",
      "REQUIRED",
      "Check activation, port, or Teleport status if relevant. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm device is unlocked and compatible.",
      "Airplane Mode ON for 30 seconds, then OFF.",
      "Check whether there are multiple reports or local network issues. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "steps": [
      "Confirm the line is active and not suspended. INTERNAL VERIFICATION REQUIRED",
      "Confirm activation/port/Teleport is complete if relevant. INTERNAL VERIFICATION",
      "REQUIRED",
      "Ask customer to toggle Airplane Mode ON for 30 seconds, then OFF.",
      "Restart the phone.",
      "Confirm correct SIM/eSIM is enabled.",
      "Confirm automatic network selection is enabled.",
      "Confirm device is unlocked.",
      "Perform Reset Network Settings if basic checks fail.",
      "If pSIM, reseat SIM and test if possible.",
      "If eSIM, confirm profile is installed, enabled, and selected.",
      "If account/device/SIM checks pass but device remains SOS/No Service, escalate for",
      "provisioning/location update/HSS-HLR review. INTERNAL VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Cellular: confirm US Mobile line is ON.",
        "Settings > General > About > Carrier Lock = “No SIM restrictions.”",
        "Settings > General > Transfer or Reset iPhone > Reset > Reset Network Settings.",
        "Warn customer this removes saved Wi-Fi networks/passwords.",
        "Restart after reset."
      ],
      "android": [
        "Settings > SIMs / SIM Manager: confirm SIM/eSIM is ON.",
        "Network selection should normally be Automatic.",
        "Preferred network mode should be 5G/LTE/Auto where available.",
        "Reset network settings if needed.",
        "Reseat physical SIM if pSIM."
      ],
      "general": [
        "Confirm the line is active and not suspended. INTERNAL VERIFICATION REQUIRED",
        "Confirm activation/port/Teleport is complete if relevant. INTERNAL VERIFICATION",
        "REQUIRED",
        "Ask customer to toggle Airplane Mode ON for 30 seconds, then OFF.",
        "Restart the phone.",
        "Confirm correct SIM/eSIM is enabled.",
        "Confirm automatic network selection is enabled.",
        "Confirm device is unlocked.",
        "Perform Reset Network Settings if basic checks fail.",
        "If pSIM, reseat SIM and test if possible.",
        "If eSIM, confirm profile is installed, enabled, and selected.",
        "If account/device/SIM checks pass but device remains SOS/No Service, escalate for",
        "provisioning/location update/HSS-HLR review. INTERNAL VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "I know “SOS only” is stressful because it means the phone is not registering on the normal \nnetwork. Let’s force a fresh connection first. Please turn Airplane Mode ON for 30 seconds, then \nturn it OFF, and restart the phone. \nWhile you do that, I’ll check whether the line is active and whether anything is stuck from \nactivation, porting, renewal, or a network switch."
      }
    ],
    "zendeskNote": "Issue: SOS Only / No Service \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nDevice/OS: [Device + OS] \nSIM/eSIM: [eSIM / pSIM] \nTrigger: [Activation / Port-in / Teleport / Renewal / Device change / Sudden] \nLocation: [ZIP/general area] \nSymptoms: [SOS / No Service / Searching] \nSteps tried: Airplane toggle, reboot, SIM/eSIM status checked, network selection checked, \nnetwork reset \nInternal checks: Account active, billing/renewal clear, activation/port/Teleport status checked, \nlocal reports checked INTERNAL VERIFICATION REQUIRED \nSuspected cause: Registration/provisioning/device/SIM/local network issue \nNext action: Escalate if all frontline checks pass and device remains unregistered",
    "escalation": {
      "neededWhen": [
        "Account is active and clear.",
        "Activation/port/Teleport is complete.",
        "Device is unlocked and compatible.",
        "SIM/eSIM is installed/enabled.",
        "Network reset and restart completed.",
        "Device remains SOS/No Service.",
        "Multiple customers in same ZIP/network report same issue."
      ],
      "evidenceNeeded": [
        "Account status, billing/suspension, activation status, port status,",
        "Teleport status, local network health, backend provisioning/location update.",
        "Batch 3 Agent Import Notes",
        "Create these as separate cards",
        "New Line Activation Not Working / Activation Pending",
        "eSIM Install & QR Code Failures",
        "Deleted Active eSIM & Reissue",
        "Carrier Lock & SIM Not Supported",
        "Physical SIM Not Working / Invalid SIM / ICCID Checks",
        "SOS Only / No Service Triage",
        "Suggested category mapping",
        "Activation",
        "New Line Activation Not Working / Activation Pending",
        "eSIM / SIM",
        "eSIM Install & QR Code Failures",
        "Deleted Active eSIM & Reissue",
        "Physical SIM Not Working / Invalid SIM / ICCID Checks",
        "Devices / Compatibility",
        "Carrier Lock & SIM Not Supported",
        "Network / Signal",
        "SOS Only / No Service Triage",
        "Suggested pinned/common cards from Batch 3",
        "SOS Only / No Service Triage",
        "eSIM Install & QR Code Failures",
        "New Line Activation Pending",
        "Deleted Active eSIM & Reissue",
        "Carrier Lock & SIM Not Supported",
        "UI rule",
        "Show a short card preview first:",
        "Problem",
        "First question",
        "First action",
        "Escalate if",
        "Then full card opens with:",
        "Ask customer first",
        "Quick checks",
        "Step-by-step troubleshooting",
        "iPhone steps",
        "Android steps",
        "Copy-ready reply",
        "Zendesk note",
        "Escalation summary",
        "Related playbooks",
        "Source aliases",
        "Confidence",
        "Needs internal verification",
        "Merge notes for later",
        "Batch 1 already has a broad “No Service & SOS Only” card.",
        "Batch 3’s “SOS Only / No Service Triage” should either replace it or become the deeper",
        "technical version.",
        "Final site should not show two confusing SOS cards. Use one clean SOS card with:",
        "Batch 1 quick triage at the top",
        "Batch 3 activation/SIM/eSIM depth inside"
      ],
      "summaryTemplate": "SOS/No Service. Network: [X]. Device/OS: [X]. SIM type: [eSIM/pSIM]. Trigger: [X]. Location: \n[ZIP/general]. Account active and billing clear. Activation/port/Teleport status: [X]. Device \nunlocked/compatible. Airplane toggle/reboot/network reset completed. Current state: [SOS/No \nService]. Requesting provisioning/location update/HSS-HLR review or local network check. \nINTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Account is active and clear.",
      "Activation/port/Teleport is complete.",
      "Device is unlocked and compatible.",
      "SIM/eSIM is installed/enabled.",
      "Network reset and restart completed.",
      "Device remains SOS/No Service.",
      "Multiple customers in same ZIP/network report same issue."
    ],
    "escalationFormat": [
      "SOS/No Service. Network: [X]. Device/OS: [X]. SIM type: [eSIM/pSIM]. Trigger: [X]. Location: ",
      "[ZIP/general]. Account active and billing clear. Activation/port/Teleport status: [X]. Device ",
      "unlocked/compatible. Airplane toggle/reboot/network reset completed. Current state: [SOS/No ",
      "Service]. Requesting provisioning/location update/HSS-HLR review or local network check. ",
      "INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "new-line-activation-pending",
      "esim-install-qr-code-failures",
      "physical-sim-not-working-invalid-sim-iccid-checks",
      "carrier-lock-sim-not-supported",
      "teleport-esim-recovery"
    ],
    "sourceAliases": [
      "X9",
      "P7",
      "P3",
      "P4",
      "P2"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Account status, billing/suspension, activation status, port status,",
      "Teleport status, local network health, backend provisioning/location update.",
      "Batch 3 Agent Import Notes",
      "Create these as separate cards",
      "New Line Activation Not Working / Activation Pending",
      "eSIM Install & QR Code Failures",
      "Deleted Active eSIM & Reissue",
      "Carrier Lock & SIM Not Supported",
      "Physical SIM Not Working / Invalid SIM / ICCID Checks",
      "SOS Only / No Service Triage",
      "Suggested category mapping",
      "Activation",
      "New Line Activation Not Working / Activation Pending",
      "eSIM / SIM",
      "eSIM Install & QR Code Failures",
      "Deleted Active eSIM & Reissue",
      "Physical SIM Not Working / Invalid SIM / ICCID Checks",
      "Devices / Compatibility",
      "Carrier Lock & SIM Not Supported",
      "Network / Signal",
      "SOS Only / No Service Triage",
      "Suggested pinned/common cards from Batch 3",
      "SOS Only / No Service Triage",
      "eSIM Install & QR Code Failures",
      "New Line Activation Pending",
      "Deleted Active eSIM & Reissue",
      "Carrier Lock & SIM Not Supported",
      "UI rule",
      "Show a short card preview first:",
      "Problem",
      "First question",
      "First action",
      "Escalate if",
      "Then full card opens with:",
      "Ask customer first",
      "Quick checks",
      "Step-by-step troubleshooting",
      "iPhone steps",
      "Android steps",
      "Copy-ready reply",
      "Zendesk note",
      "Escalation summary",
      "Related playbooks",
      "Source aliases",
      "Confidence",
      "Needs internal verification",
      "Merge notes for later",
      "Batch 1 already has a broad “No Service & SOS Only” card.",
      "Batch 3’s “SOS Only / No Service Triage” should either replace it or become the deeper",
      "technical version.",
      "Final site should not show two confusing SOS cards. Use one clean SOS card with:",
      "Batch 1 quick triage at the top",
      "Batch 3 activation/SIM/eSIM depth inside"
    ],
    "batch": "Batch 3",
    "aliases": [
      "sos only",
      "no service",
      "emergency calls only",
      "searching",
      "no bars",
      "cannot connect to network",
      "service disappeared"
    ],
    "symptoms": [
      "sos only",
      "no service",
      "emergency calls only",
      "searching",
      "no bars",
      "cannot connect to network",
      "service disappeared"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X9, P7, P3, P4, P2"
  },
  {
    "id": "sms-mms-group-messaging-triage",
    "title": "SMS, MMS & Group Messaging Triage",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "apn-data",
      "batch4"
    ],
    "keywords": [
      "sms",
      "mms",
      "group",
      "messaging",
      "triage",
      "apn-data"
    ],
    "customerPhrases": [
      "sms not working",
      "mms not working",
      "group mms broken",
      "pictures won’t send",
      "error 97",
      "invalid",
      "destination address",
      "texts fail",
      "message failed",
      "group chat splitting",
      "mms download failed"
    ],
    "preview": {
      "problem": "SMS provisioning issue / MMS APN issue / cellular data issue / RCS/iMessage fallback issue /",
      "firstQuestion": "Is this happening with plain text messages, picture/group messages, or both?",
      "firstAction": "Separate the failure type:",
      "escalateIf": "Plain SMS fails to all recipients after account/text feature checks."
    },
    "quickAnswer": "SMS provisioning issue / MMS APN issue / cellular data issue / RCS/iMessage fallback issue / \napp cache issue / short-code or port-routing issue",
    "useWhen": "Use when customer reports: SMS not working, MMS not working, group MMS broken, pictures won’t send, Error 97, invalid",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Is this happening with plain text messages, picture/group messages, or both?",
      "Are you seeing an exact error like “Error 97” or “Invalid destination address”?",
      "Are you on iPhone or Android, and which messaging app are you using?"
    ],
    "quickChecks": [
      "Verify SMS/text feature and plan status. INTERNAL VERIFICATION REQUIRED",
      "For MMS, turn Wi-Fi OFF and confirm mobile data is ON.",
      "Verify mobile data works by opening a simple website.",
      "Check APN/MMSC/proxy settings if MMS or group messaging fails.",
      "For Android, toggle RCS off temporarily and test as SMS/MMS."
    ],
    "quickSteps": [
      "Verify SMS/text feature and plan status. INTERNAL VERIFICATION REQUIRED",
      "For MMS, turn Wi-Fi OFF and confirm mobile data is ON.",
      "Verify mobile data works by opening a simple website.",
      "Check APN/MMSC/proxy settings if MMS or group messaging fails.",
      "For Android, toggle RCS off temporarily and test as SMS/MMS."
    ],
    "steps": [
      "Separate the failure type:",
      "Plain SMS fails.",
      "MMS/pictures fail.",
      "Group messages fail.",
      "RCS/iMessage fails.",
      "Bank/short codes fail.",
      "If plain SMS fails, check account/text feature status. INTERNAL VERIFICATION",
      "REQUIRED",
      "If MMS fails but SMS works, turn Wi-Fi off and verify cellular data works.",
      "Confirm data balance is available. INTERNAL VERIFICATION REQUIRED",
      "Verify APN Type includes MMS where required and MMSC/proxy values match the",
      "active network.",
      "If group messages split, check MMS/Group Messaging settings on the device.",
      "If Android shows “Invalid destination address,” confirm number format, turn RCS off,",
      "clear Messages cache, and retest.",
      "If Error 97 appears, document exact failure and escalate/check SMS feature provisioning",
      "if basic tests pass. INTERNAL VERIFICATION REQUIRED",
      "Restart the device.",
      "Escalate if SMS/MMS routing fails after device, APN, app, and account checks."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Messages:",
        "Send as SMS: ON",
        "MMS Messaging: ON",
        "Group Messaging: ON, if available",
        "Test with a non-iMessage contact if iMessage may be masking SMS behavior.",
        "If after port/Teleport, confirm carrier SMS works before troubleshooting iMessage."
      ],
      "android": [
        "Confirm Google Messages or selected SMS app is the default.",
        "Turn RCS off temporarily and test SMS/MMS.",
        "Clear Messages cache first.",
        "Verify APN Type includes",
        "mms",
        "where required.",
        "Avoid clearing app storage/data unless customer understands app settings may reset."
      ],
      "general": [
        "Separate the failure type:",
        "Plain SMS fails.",
        "MMS/pictures fail.",
        "Group messages fail.",
        "RCS/iMessage fails.",
        "Bank/short codes fail.",
        "If plain SMS fails, check account/text feature status. INTERNAL VERIFICATION",
        "REQUIRED",
        "If MMS fails but SMS works, turn Wi-Fi off and verify cellular data works.",
        "Confirm data balance is available. INTERNAL VERIFICATION REQUIRED",
        "Verify APN Type includes MMS where required and MMSC/proxy values match the",
        "active network.",
        "If group messages split, check MMS/Group Messaging settings on the device.",
        "If Android shows “Invalid destination address,” confirm number format, turn RCS off,",
        "clear Messages cache, and retest.",
        "If Error 97 appears, document exact failure and escalate/check SMS feature provisioning",
        "if basic tests pass. INTERNAL VERIFICATION REQUIRED",
        "Restart the device.",
        "Escalate if SMS/MMS routing fails after device, APN, app, and account checks."
      ]
    },
    "copyTemplates": [
      {
        "label": "Error 97",
        "text": "Error 97 usually points to a texting feature or routing issue on the line. I’m going to check the \nmessaging feature status on my end. While I do that, please try sending a plain text — no photo \nor group chat — to one person and tell me whether the same error appears."
      }
    ],
    "zendeskNote": "Issue: SMS/MMS/group messaging failure \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nDevice/OS: [Device + OS] \nMessaging app: [iMessage / Google Messages / Samsung Messages / Other] \nSIM/eSIM: [eSIM / pSIM] \nTrigger: [Activation / Port / Teleport / OS update / Sudden] \nSymptoms: SMS [works/fails], MMS [works/fails], RCS/iMessage [on/off], error [exact] \nSteps tried: Wi-Fi off test, data verified, APN/MMSC checked, RCS isolated, cache cleared, \nrebooted \nInternal checks: Text feature, data balance, MMS feature status INTERNAL VERIFICATION \nREQUIRED \nSuspected cause: SMS provisioning, MMS/APN routing, app cache, or RCS/iMessage fallback \nNext action: Escalate if feature/APN/device checks pass and messaging still fails",
    "escalation": {
      "neededWhen": [
        "Plain SMS fails to all recipients after account/text feature checks.",
        "MMS fails with data working and APN/MMSC verified.",
        "Error 97 persists after feature/account refresh.",
        "“Invalid destination address” persists after app cache/RCS/APN checks.",
        "Multiple customers report the same exact messaging error after a network/app/OS",
        "change."
      ],
      "evidenceNeeded": [
        "SMS/text feature status, data balance, MMS feature code,",
        "SMSC/MMSC routing, backend reprovisioning."
      ],
      "summaryTemplate": "Messaging failure. Network: [X]. Device/OS: [X]. App: [X]. Error: [exact]. SMS result: [X]. MMS \nresult: [X]. Data works: [Yes/No]. APN/MMSC verified: [Yes/No]. RCS/iMessage isolated. \nAccount/text/MMS feature checked. Requesting SMS/MMS routing or feature provisioning \nreview. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Plain SMS fails to all recipients after account/text feature checks.",
      "MMS fails with data working and APN/MMSC verified.",
      "Error 97 persists after feature/account refresh.",
      "“Invalid destination address” persists after app cache/RCS/APN checks.",
      "Multiple customers report the same exact messaging error after a network/app/OS",
      "change."
    ],
    "escalationFormat": [
      "Messaging failure. Network: [X]. Device/OS: [X]. App: [X]. Error: [exact]. SMS result: [X]. MMS ",
      "result: [X]. Data works: [Yes/No]. APN/MMSC verified: [Yes/No]. RCS/iMessage isolated. ",
      "Account/text/MMS feature checked. Requesting SMS/MMS routing or feature provisioning ",
      "review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "mms-fails-but-sms-works-data-works-but-mms-fails",
      "apn-escalation-triggers",
      "rcs-imessage-activation-fallback",
      "bank-otp",
      "bank-otp-short-codes-delayed-inbound-texts"
    ],
    "sourceAliases": [
      "X4",
      "X9",
      "X1",
      "P3",
      "P4"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "SMS/text feature status, data balance, MMS feature code,",
      "SMSC/MMSC routing, backend reprovisioning."
    ],
    "batch": "Batch 4",
    "aliases": [
      "sms not working",
      "mms not working",
      "group mms broken",
      "pictures won’t send",
      "error 97",
      "invalid",
      "destination address",
      "texts fail",
      "message failed",
      "group chat splitting",
      "mms download failed"
    ],
    "symptoms": [
      "sms not working",
      "mms not working",
      "group mms broken",
      "pictures won’t send",
      "error 97",
      "invalid",
      "destination address",
      "texts fail",
      "message failed",
      "group chat splitting",
      "mms download failed"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X4, X9, X1, P3, P4"
  },
  {
    "id": "rcs-imessage-activation-fallback",
    "title": "RCS & iMessage Activation / Fallback",
    "category": "messaging-calls-voicemail",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "messaging-calls-voicemail",
      "batch4"
    ],
    "keywords": [
      "rcs",
      "imessage",
      "activation",
      "fallback",
      "messaging-calls-voicemail"
    ],
    "customerPhrases": [
      "rcs stuck verifying",
      "imessage waiting for activation",
      "imessage after port",
      "rcs after teleport",
      "blue bubbles gone",
      "green bubbles",
      "rcs fallback",
      "imessage not activating",
      "facetime activation",
      "issue"
    ],
    "preview": {
      "problem": "Carrier SMS verification issue / Apple or Google activation sync issue / post-port or",
      "firstQuestion": "Can you send and receive a normal SMS to someone who is not using iMessage/RCS?",
      "firstAction": "Test standard SMS first. If SMS fails, do not troubleshoot RCS/iMessage yet. Use SMS",
      "escalateIf": "Standard SMS works but iMessage/RCS remains stuck beyond a reasonable activation"
    },
    "quickAnswer": "Carrier SMS verification issue / Apple or Google activation sync issue / post-port or \npost-Teleport routing delay / app cache issue / data or SMS path failure",
    "useWhen": "Use when customer reports: RCS stuck verifying, iMessage waiting for activation, iMessage after port, RCS after Teleport,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Can you send and receive a normal SMS to someone who is not using iMessage/RCS?",
      "Did this start after porting, Teleport, device change, or OS/app update?",
      "Are you trying to activate iMessage on iPhone or RCS on Android?"
    ],
    "quickChecks": [
      "Confirm standard SMS works first.",
      "Confirm cellular data or Wi-Fi internet works.",
      "Disable VPN/iCloud Private Relay/Private DNS temporarily.",
      "For iPhone, confirm Send as SMS is enabled.",
      "For Android, confirm Google Messages is default and Carrier Services/Google",
      "Messages are updated if applicable."
    ],
    "quickSteps": [
      "Confirm standard SMS works first.",
      "Confirm cellular data or Wi-Fi internet works.",
      "Disable VPN/iCloud Private Relay/Private DNS temporarily.",
      "For iPhone, confirm Send as SMS is enabled.",
      "For Android, confirm Google Messages is default and Carrier Services/Google",
      "Messages are updated if applicable."
    ],
    "steps": [
      "Test standard SMS first. If SMS fails, do not troubleshoot RCS/iMessage yet. Use SMS",
      "playbook.",
      "Test cellular data.",
      "Confirm the customer recently ported or Teleported; if yes, explain phone-number routing",
      "may take time to settle.",
      "Disable VPN/Private Relay/Private DNS for testing.",
      "iMessage:",
      "Turn iMessage off.",
      "Restart iPhone.",
      "Confirm SMS works.",
      "Turn iMessage back on.",
      "Keep the phone connected to cellular/Wi-Fi while activation completes.",
      "RCS:",
      "Open Google Messages.",
      "Turn RCS chats off.",
      "Clear Messages cache.",
      "Restart phone.",
      "Turn RCS back on.",
      "If old phone still has RCS/iMessage active, deregister/turn it off on the old device if",
      "possible.",
      "If activation remains stuck after carrier SMS/data works, set expectation that",
      "Apple/Google activation may take time, but document and escalate if carrier silent-SMS",
      "path is suspected. INTERNAL VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Messages > iMessage OFF, wait, then ON.",
        "Settings > Messages > Send as SMS ON.",
        "Settings > Phone > My Number: confirm number is correct.",
        "Settings > Messages > Send & Receive: confirm correct phone number/Apple ID.",
        "Restart device.",
        "If ported recently, do not promise instant activation."
      ],
      "android": [
        "Google Messages > Settings > RCS chats > turn off, then back on after restart.",
        "Clear Google Messages cache.",
        "Update Google Messages and Carrier Services if needed.",
        "Confirm phone number in Google account/Messages settings.",
        "If moved from old Android, turn off RCS on the old device or use Google’s RCS",
        "deactivation path if needed."
      ],
      "general": [
        "Test standard SMS first. If SMS fails, do not troubleshoot RCS/iMessage yet. Use SMS",
        "playbook.",
        "Test cellular data.",
        "Confirm the customer recently ported or Teleported; if yes, explain phone-number routing",
        "may take time to settle.",
        "Disable VPN/Private Relay/Private DNS for testing.",
        "iMessage:",
        "Turn iMessage off.",
        "Restart iPhone.",
        "Confirm SMS works.",
        "Turn iMessage back on.",
        "Keep the phone connected to cellular/Wi-Fi while activation completes.",
        "RCS:",
        "Open Google Messages.",
        "Turn RCS chats off.",
        "Clear Messages cache.",
        "Restart phone.",
        "Turn RCS back on.",
        "If old phone still has RCS/iMessage active, deregister/turn it off on the old device if",
        "possible.",
        "If activation remains stuck after carrier SMS/data works, set expectation that",
        "Apple/Google activation may take time, but document and escalate if carrier silent-SMS",
        "path is suspected. INTERNAL VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "iMessage and RCS use Apple and Google’s messaging systems, but phone-number activation \nstill depends on normal carrier SMS working first. Let’s confirm the basics before resetting \nanything. \nCan you send a normal SMS to someone who is not using iMessage or RCS? If that works, we’ll \nreset the iMessage/RCS activation path next."
      }
    ],
    "zendeskNote": "Issue: RCS/iMessage activation or fallback issue \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nDevice/OS: [Device + OS] \nMessaging service: [iMessage / RCS] \nTrigger: [Port / Teleport / Device change / OS update / Sudden] \nSymptoms: [Waiting for activation / stuck verifying / fallback to SMS/MMS] \nSteps tried: Standard SMS tested, data tested, VPN/Private Relay off, toggled iMessage/RCS, \ncache cleared, rebooted \nInternal checks: SMS feature/provisioning status if activation still fails INTERNAL \nVERIFICATION REQUIRED \nSuspected cause: SMS verification path, Apple/Google sync, or post-port/post-Teleport routing \ndelay \nNext action: Monitor or escalate carrier SMS path if persistent",
    "escalation": {
      "neededWhen": [
        "Standard SMS works but iMessage/RCS remains stuck beyond a reasonable activation",
        "window.",
        "Standard SMS does not work and account/text feature check is needed.",
        "Post-port/post-Teleport messaging remains inconsistent beyond expected routing update",
        "time.",
        "Multiple users on same network/device/OS report same RCS/iMessage activation issue."
      ],
      "evidenceNeeded": [
        "SMS feature status, port/Teleport routing state, carrier SMS path",
        "review."
      ],
      "summaryTemplate": "RCS/iMessage activation failure. Network: [X]. Device/OS: [X]. Trigger: [port/Teleport/device \nchange]. Standard SMS result: [X]. Data result: [X]. VPN/Private Relay off. iMessage/RCS \ntoggled and rebooted. Error/status: [X]. Requesting carrier SMS/silent-SMS path review if \napplicable. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Standard SMS works but iMessage/RCS remains stuck beyond a reasonable activation",
      "window.",
      "Standard SMS does not work and account/text feature check is needed.",
      "Post-port/post-Teleport messaging remains inconsistent beyond expected routing update",
      "time.",
      "Multiple users on same network/device/OS report same RCS/iMessage activation issue."
    ],
    "escalationFormat": [
      "RCS/iMessage activation failure. Network: [X]. Device/OS: [X]. Trigger: [port/Teleport/device ",
      "change]. Standard SMS result: [X]. Data result: [X]. VPN/Private Relay off. iMessage/RCS ",
      "toggled and rebooted. Error/status: [X]. Requesting carrier SMS/silent-SMS path review if ",
      "applicable. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "smsmms-triage",
      "bank-otp-short-codes",
      "post-teleport-data-mms-failure"
    ],
    "sourceAliases": [
      "X4",
      "X3",
      "X10",
      "P3"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "SMS feature status, port/Teleport routing state, carrier SMS path",
      "review."
    ],
    "batch": "Batch 4",
    "aliases": [
      "rcs stuck verifying",
      "imessage waiting for activation",
      "imessage after port",
      "rcs after teleport",
      "blue bubbles gone",
      "green bubbles",
      "rcs fallback",
      "imessage not activating",
      "facetime activation",
      "issue"
    ],
    "symptoms": [
      "rcs stuck verifying",
      "imessage waiting for activation",
      "imessage after port",
      "rcs after teleport",
      "blue bubbles gone",
      "green bubbles",
      "rcs fallback",
      "imessage not activating",
      "facetime activation",
      "issue"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X4, X3, X10, P3"
  },
  {
    "id": "bank-otp-short-codes-delayed-inbound-texts",
    "title": "Bank OTP, Short Codes & Delayed Inbound Texts",
    "category": "port-in-out",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "port-in-out",
      "batch4"
    ],
    "keywords": [
      "bank",
      "otp",
      "short",
      "codes",
      "delayed",
      "inbound",
      "texts",
      "port-in-out"
    ],
    "customerPhrases": [
      "bank code not received",
      "otp not coming",
      "short code not received",
      "verification codes delayed",
      "2fa not working",
      "delayed inbound texts",
      "codes stopped after port",
      "bank sms missing"
    ],
    "preview": {
      "problem": "Short-code/A2P routing delay / post-port aggregator delay / split-port issue / SMS feature block /",
      "firstQuestion": "Can you receive normal texts from friends/family?",
      "firstAction": "Test normal SMS with a known contact.",
      "escalateIf": "Standard SMS works, but OTP/short codes fail beyond 72 hours after port/Teleport."
    },
    "quickAnswer": "Short-code/A2P routing delay / post-port aggregator delay / split-port issue / SMS feature block / \nsender-specific block / weak coverage or device delivery delay",
    "useWhen": "Use when customer reports: bank code not received, OTP not coming, short code not received, verification codes delayed,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Can you receive normal texts from friends/family?",
      "Did you port your number or switch networks in the last 72 hours?",
      "Is this happening with one bank/service or all verification codes?"
    ],
    "quickChecks": [
      "Confirm standard SMS works both inbound and outbound.",
      "Check port completion or recent Teleport/network switch timing. INTERNAL",
      "VERIFICATION REQUIRED",
      "Check for SMS/short-code/premium messaging blocks if available. INTERNAL",
      "VERIFICATION REQUIRED",
      "Ask customer to text",
      "HELP",
      "to the short code if the sender supports it.",
      "Test another OTP sender to isolate one-service vs all-service failure."
    ],
    "quickSteps": [
      "Confirm standard SMS works both inbound and outbound.",
      "Check port completion or recent Teleport/network switch timing. INTERNAL",
      "VERIFICATION REQUIRED",
      "Check for SMS/short-code/premium messaging blocks if available. INTERNAL",
      "VERIFICATION REQUIRED",
      "Ask customer to text",
      "HELP",
      "to the short code if the sender supports it.",
      "Test another OTP sender to isolate one-service vs all-service failure."
    ],
    "steps": [
      "Test normal SMS with a known contact.",
      "If normal SMS fails, use SMS/porting playbook first.",
      "If normal SMS works, identify the sender: bank name, app, short code, or long code.",
      "Ask whether port/Teleport happened within 72 hours.",
      "If recent, explain short-code routing update delay safely.",
      "Ask customer to text",
      "HELP",
      "to the failing short code if supported.",
      "Ask customer to request a new code after the HELP test.",
      "Test another bank/service if possible.",
      "If all OTPs fail, check account-side blocks/routing. INTERNAL VERIFICATION",
      "REQUIRED",
      "Escalate if standard SMS works and OTP still fails beyond 72 hours post-port/Teleport or",
      "if all short codes fail."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Confirm unknown senders/filtering is not hiding OTP messages.",
        "Confirm Focus/DND is not suppressing notifications.",
        "Test regular SMS outside iMessage.",
        "If recently ported, do not troubleshoot only iMessage; verify carrier SMS."
      ],
      "android": [
        "Check Spam & blocked folder in Google Messages.",
        "Confirm Google Messages is default.",
        "Turn RCS off temporarily if OTP is being misclassified.",
        "Check blocked numbers and app notification settings."
      ],
      "general": [
        "Test normal SMS with a known contact.",
        "If normal SMS fails, use SMS/porting playbook first.",
        "If normal SMS works, identify the sender: bank name, app, short code, or long code.",
        "Ask whether port/Teleport happened within 72 hours.",
        "If recent, explain short-code routing update delay safely.",
        "Ask customer to text",
        "HELP",
        "to the failing short code if supported.",
        "Ask customer to request a new code after the HELP test.",
        "Test another bank/service if possible.",
        "If all OTPs fail, check account-side blocks/routing. INTERNAL VERIFICATION",
        "REQUIRED",
        "Escalate if standard SMS works and OTP still fails beyond 72 hours post-port/Teleport or",
        "if all short codes fail."
      ]
    },
    "copyTemplates": [
      {
        "label": "Recent port/Teleport",
        "text": "Since your number recently moved networks, banks and verification-code providers may take \nup to 24–72 hours to update their routing. Your normal texting can work before every bank-code \nroute catches up. I’ll still document and check for any account-side messaging block."
      }
    ],
    "zendeskNote": "Issue: Bank OTP / short-code / delayed inbound SMS \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nDevice/OS: [Device + OS] \nSIM/eSIM: [eSIM / pSIM] \nTrigger: [Port / Teleport / New activation / Sudden] \nPort/Teleport date: [X] \nSender: [Bank/service/short code] \nSymptoms: P2P SMS [works/fails], OTP [fails/delayed], one sender vs all senders [X] \nSteps tried: HELP to short code, test P2P SMS, checked blocked/spam folders, RCS/iMessage \nisolated \nInternal checks: Port status, SMS feature/short-code block, routing status INTERNAL \nVERIFICATION REQUIRED \nSuspected cause: A2P aggregator delay, split routing, or SMS feature/block issue \nNext action: Escalate SMS trace if persistent",
    "escalation": {
      "neededWhen": [
        "Standard SMS works, but OTP/short codes fail beyond 72 hours after port/Teleport.",
        "All short codes fail, not just one bank.",
        "Customer cannot access critical accounts and needs urgent review.",
        "Inbound SMS from some carriers works but others fail, suggesting split routing."
      ],
      "evidenceNeeded": [
        "Port status, short-code/SMS block, premium SMS state, SMSC",
        "trace, A2P routing review."
      ],
      "summaryTemplate": "OTP/short-code issue. Network: [X]. Device/OS: [X]. Trigger: [port/Teleport/sudden]. \nPort/Teleport date: [X]. Standard SMS works: [Yes/No]. Sender/short code: [X]. HELP test result: \n[X]. One sender or all OTPs: [X]. Requesting SMSC/short-code/A2P routing trace and block \nreview. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Standard SMS works, but OTP/short codes fail beyond 72 hours after port/Teleport.",
      "All short codes fail, not just one bank.",
      "Customer cannot access critical accounts and needs urgent review.",
      "Inbound SMS from some carriers works but others fail, suggesting split routing."
    ],
    "escalationFormat": [
      "OTP/short-code issue. Network: [X]. Device/OS: [X]. Trigger: [port/Teleport/sudden]. ",
      "Port/Teleport date: [X]. Standard SMS works: [Yes/No]. Sender/short code: [X]. HELP test result: ",
      "[X]. One sender or all OTPs: [X]. Requesting SMSC/short-code/A2P routing trace and block ",
      "review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "porting-bank-code-delays",
      "smsmms-triage",
      "wi-fi-calling-setup",
      "account-securityfraud"
    ],
    "sourceAliases": [
      "X4",
      "X6",
      "X5",
      "P4",
      "P3"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Port status, short-code/SMS block, premium SMS state, SMSC",
      "trace, A2P routing review."
    ],
    "batch": "Batch 4",
    "aliases": [
      "bank code not received",
      "otp not coming",
      "short code not received",
      "verification codes delayed",
      "2fa not working",
      "delayed inbound texts",
      "codes stopped after port",
      "bank sms missing"
    ],
    "symptoms": [
      "bank code not received",
      "otp not coming",
      "short code not received",
      "verification codes delayed",
      "2fa not working",
      "delayed inbound texts",
      "codes stopped after port",
      "bank sms missing"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X4, X6, X5, P4, P3"
  },
  {
    "id": "calls-failing-dropped-or-going-straight-to-voicemail",
    "title": "Calls Failing, Dropped, or Going Straight to Voicemail",
    "category": "messaging-calls-voicemail",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "messaging-calls-voicemail",
      "batch4"
    ],
    "keywords": [
      "calls",
      "failing",
      "dropped",
      "going",
      "straight",
      "voicemail",
      "messaging-calls-voicemail"
    ],
    "customerPhrases": [
      "calls failing",
      "call failed",
      "dropped calls",
      "inbound calls go to voicemail",
      "straight to voicemail",
      "fast",
      "busy",
      "restrictions on line",
      "cannot call out",
      "calls not coming through"
    ],
    "preview": {
      "problem": "VoLTE/voice provisioning issue / call forwarding / DND/Focus mode / Wi-Fi Calling conflict /",
      "firstQuestion": "Do outbound calls fail, inbound calls fail, or both?",
      "firstAction": "Identify whether issue is inbound, outbound, or both.",
      "escalateIf": "Account active and no restrictions."
    },
    "quickAnswer": "VoLTE/voice provisioning issue / call forwarding / DND/Focus mode / Wi-Fi Calling conflict / \naccount suspension / local coverage / port routing issue",
    "useWhen": "Use when customer reports: calls failing, call failed, dropped calls, inbound calls go to voicemail, straight to voicemail, fast",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Do outbound calls fail, inbound calls fail, or both?",
      "Do calls ring first, drop immediately, go straight to voicemail, or play an automated",
      "message?",
      "Did this start after porting, Teleport, activation, renewal, or device change?"
    ],
    "quickChecks": [
      "Check account/line status and any service restrictions. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm cellular signal and mobile data status.",
      "Check DND/Focus, blocked contacts, and call forwarding.",
      "Temporarily turn Wi-Fi Calling off to test cellular voice, or on if cellular coverage is poor.",
      "Confirm device supports VoLTE/IMS on the selected network."
    ],
    "quickSteps": [
      "Check account/line status and any service restrictions. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm cellular signal and mobile data status.",
      "Check DND/Focus, blocked contacts, and call forwarding.",
      "Temporarily turn Wi-Fi Calling off to test cellular voice, or on if cellular coverage is poor.",
      "Confirm device supports VoLTE/IMS on the selected network."
    ],
    "steps": [
      "Identify whether issue is inbound, outbound, or both.",
      "Ask for exact error or automated message.",
      "Check line status/billing/suspension. INTERNAL VERIFICATION REQUIRED",
      "Confirm device has cellular service and is not stuck on SOS.",
      "Turn DND/Focus off.",
      "Disable call forwarding using device settings or network-specific cancellation code if",
      "appropriate.",
      "Toggle Airplane Mode ON for 30 seconds, then OFF.",
      "Restart the phone.",
      "Test one outbound call and one inbound call.",
      "Toggle Wi-Fi Calling off and test cellular calls; if cellular is weak, toggle Wi-Fi Calling on",
      "and test over Wi-Fi.",
      "If calls still fail with account active and settings clean, escalate for voice/IMS provisioning",
      "or call routing review. INTERNAL VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Focus: turn Focus/DND off.",
        "Settings > Phone > Call Forwarding: OFF.",
        "Settings > Cellular > Voice & Data: use LTE/5G Auto as appropriate.",
        "Settings > Phone > Silence Unknown Callers: check if inbound calls from unknown",
        "numbers are affected.",
        "Restart after changes."
      ],
      "android": [
        "Check Do Not Disturb.",
        "Phone app > Settings > Blocked numbers / Call forwarding.",
        "Settings > Mobile Networks: confirm VoLTE/Enhanced 4G/5G calling if visible.",
        "Test with Wi-Fi Calling off and on."
      ],
      "general": [
        "Identify whether issue is inbound, outbound, or both.",
        "Ask for exact error or automated message.",
        "Check line status/billing/suspension. INTERNAL VERIFICATION REQUIRED",
        "Confirm device has cellular service and is not stuck on SOS.",
        "Turn DND/Focus off.",
        "Disable call forwarding using device settings or network-specific cancellation code if",
        "appropriate.",
        "Toggle Airplane Mode ON for 30 seconds, then OFF.",
        "Restart the phone.",
        "Test one outbound call and one inbound call.",
        "Toggle Wi-Fi Calling off and test cellular calls; if cellular is weak, toggle Wi-Fi Calling on",
        "and test over Wi-Fi.",
        "If calls still fail with account active and settings clean, escalate for voice/IMS provisioning",
        "or call routing review. INTERNAL VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Let’s separate whether this is a phone setting, signal issue, or line routing issue. Do incoming \ncalls go straight to voicemail, or do outgoing calls fail when you dial? \n\nPlease also turn off Do Not Disturb/Focus mode and restart the phone. I’ll check whether the \nline has any account-side restriction while you test one outgoing call."
      }
    ],
    "zendeskNote": "Issue: Calling failure / dropped calls / straight to voicemail \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nDevice/OS: [Device + OS] \nSIM/eSIM: [eSIM / pSIM] \nTrigger: [Port / Teleport / Activation / Renewal / Device change / Sudden] \nSymptoms: Inbound [works/fails], outbound [works/fails], error/audio [exact] \nSteps tried: DND off, call forwarding off, Airplane toggle, reboot, Wi-Fi Calling on/off test \nInternal checks: Account status, voice feature/IMS provisioning, port/routing status INTERNAL \nVERIFICATION REQUIRED \nSuspected cause: Device setting, call forwarding, VoLTE/IMS provisioning, or routing issue \nNext action: Escalate if account/settings clear and call failure persists",
    "escalation": {
      "neededWhen": [
        "Account active and no restrictions.",
        "DND/Focus and call forwarding are off.",
        "Device has signal and supports VoLTE.",
        "Calls fail or route incorrectly after reboot/network reset.",
        "Multiple failed call examples are available with timestamps."
      ],
      "evidenceNeeded": [
        "Account restriction, voice/IMS provisioning, call routing",
        "translations, port routing status."
      ],
      "summaryTemplate": "Call failure. Network: [X]. Device/OS: [X]. Trigger: [X]. Inbound result: [X]. Outbound result: [X]. \nError/audio: [X]. DND/call forwarding off. Wi-Fi Calling tested [on/off]. Account active. Failed call \nexamples: [time, destination]. Requesting voice/IMS/call routing review. INTERNAL \nVERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Account active and no restrictions.",
      "DND/Focus and call forwarding are off.",
      "Device has signal and supports VoLTE.",
      "Calls fail or route incorrectly after reboot/network reset.",
      "Multiple failed call examples are available with timestamps."
    ],
    "escalationFormat": [
      "Call failure. Network: [X]. Device/OS: [X]. Trigger: [X]. Inbound result: [X]. Outbound result: [X]. ",
      "Error/audio: [X]. DND/call forwarding off. Wi-Fi Calling tested [on/off]. Account active. Failed call ",
      "examples: [time, destination]. Requesting voice/IMS/call routing review. INTERNAL ",
      "VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "wi-fi-calling-e911-setup",
      "sos-only-no-service-triage",
      "porting-bank-code-delays",
      "calls-failing-dropped-or-going-straight-to-voicemail",
      "warp-apn-setup-mms-configuration"
    ],
    "sourceAliases": [
      "X4",
      "P3",
      "P2",
      "P7"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Account restriction, voice/IMS provisioning, call routing",
      "translations, port routing status."
    ],
    "batch": "Batch 4",
    "aliases": [
      "calls failing",
      "call failed",
      "dropped calls",
      "inbound calls go to voicemail",
      "straight to voicemail",
      "fast",
      "busy",
      "restrictions on line",
      "cannot call out",
      "calls not coming through"
    ],
    "symptoms": [
      "calls failing",
      "call failed",
      "dropped calls",
      "inbound calls go to voicemail",
      "straight to voicemail",
      "fast",
      "busy",
      "restrictions on line",
      "cannot call out",
      "calls not coming through"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X4, P3, P2, P7"
  },
  {
    "id": "wi-fi-calling-e911-setup",
    "title": "Wi-Fi Calling & E911 Setup",
    "category": "messaging-calls-voicemail",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "messaging-calls-voicemail",
      "batch4"
    ],
    "keywords": [
      "calling",
      "e911",
      "setup",
      "messaging-calls-voicemail"
    ],
    "customerPhrases": [
      "wi-fi calling setup",
      "wi-fi calling won’t turn on",
      "e911 address",
      "contact carrier error",
      "wi-fi",
      "calling failed",
      "calls over wi-fi",
      "need calling indoors",
      "calling abroad on wi-fi"
    ],
    "preview": {
      "problem": "Missing E911 address / Wi-Fi Calling feature not provisioned / device setting issue /",
      "firstQuestion": "Which network is the line on: Warp, Dark Star, or Light Speed?",
      "firstAction": "Confirm customer’s network.",
      "escalateIf": "E911 address is accepted/registered."
    },
    "quickAnswer": "Missing E911 address / Wi-Fi Calling feature not provisioned / device setting issue / \nnetwork-specific setup path / Wi-Fi firewall issue / abroad activation limitation",
    "useWhen": "Use when customer reports: Wi-Fi Calling setup, Wi-Fi Calling won’t turn on, E911 address, Contact Carrier error, Wi-Fi",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Which network is the line on: Warp, Dark Star, or Light Speed?",
      "Are you currently inside the U.S. or already abroad?",
      "Have you already registered your E911 address?"
    ],
    "quickChecks": [
      "Confirm network.",
      "Confirm E911 address is registered or guide customer to register.",
      "Confirm address format is accepted.",
      "Test on home Wi-Fi, not corporate/hotel Wi-Fi.",
      "Check Wi-Fi Calling feature/provisioning if toggle fails. INTERNAL VERIFICATION",
      "REQUIRED"
    ],
    "quickSteps": [
      "Confirm network.",
      "Confirm E911 address is registered or guide customer to register.",
      "Confirm address format is accepted.",
      "Test on home Wi-Fi, not corporate/hotel Wi-Fi.",
      "Check Wi-Fi Calling feature/provisioning if toggle fails. INTERNAL VERIFICATION",
      "REQUIRED"
    ],
    "steps": [
      "Confirm customer’s network.",
      "Confirm customer is in a location where initial Wi-Fi Calling setup is supported. If abroad,",
      "use roaming/travel playbook and do not promise activation.",
      "Register E911 address through the correct path:",
      "Light Speed: dashboard path first if required.",
      "Warp/Dark Star: device prompt/settings path if supported.",
      "On phone, turn Wi-Fi Calling ON.",
      "If address fails validation, try USPS-standard formatting and remove apartment/suite",
      "temporarily if the form rejects it.",
      "Connect to stable home Wi-Fi.",
      "Restart phone.",
      "Test call with weak cellular or Airplane Mode + Wi-Fi if appropriate.",
      "If toggle remains greyed out or “Contact Carrier” persists after E911, escalate feature",
      "provisioning/ePDG review. INTERNAL VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Cellular > Wi-Fi Calling.",
        "Turn ON Wi-Fi Calling on This iPhone.",
        "Enter/confirm Emergency Address when prompted.",
        "Restart if toggle does not immediately activate.",
        "Avoid first-time setup on restricted corporate/hotel Wi-Fi."
      ],
      "android": [
        "Settings path varies by device:",
        "Settings > Network & Internet > SIMs > Wi-Fi Calling",
        "or Settings > Connections > Wi-Fi Calling",
        "Enter/confirm E911 address if prompted.",
        "Test on home Wi-Fi.",
        "If toggle missing, check device/network compatibility and provisioning."
      ],
      "general": [
        "Confirm customer’s network.",
        "Confirm customer is in a location where initial Wi-Fi Calling setup is supported. If abroad,",
        "use roaming/travel playbook and do not promise activation.",
        "Register E911 address through the correct path:",
        "Light Speed: dashboard path first if required.",
        "Warp/Dark Star: device prompt/settings path if supported.",
        "On phone, turn Wi-Fi Calling ON.",
        "If address fails validation, try USPS-standard formatting and remove apartment/suite",
        "temporarily if the form rejects it.",
        "Connect to stable home Wi-Fi.",
        "Restart phone.",
        "Test call with weak cellular or Airplane Mode + Wi-Fi if appropriate.",
        "If toggle remains greyed out or “Contact Carrier” persists after E911, escalate feature",
        "provisioning/ePDG review. INTERNAL VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Wi-Fi Calling needs an emergency 911 address before the phone will let it turn on. First, which \nnetwork are you on — Warp, Dark Star, or Light Speed? \nIf you’re on Light Speed, we may need to register the E911 address in your US Mobile \ndashboard first, then turn Wi-Fi Calling on from the phone settings."
      }
    ],
    "zendeskNote": "Issue: Wi-Fi Calling / E911 setup failure \nNetwork: [Warp / Dark Star / Light Speed] \nDevice/OS: [Device + OS] \nLocation: [US / Abroad] \nSymptoms: [Toggle missing / Contact Carrier / address rejected / calls fail] \nSteps tried: E911 registered, device toggle attempted, home Wi-Fi tested, rebooted \nInternal checks: Wi-Fi Calling/ePDG feature status INTERNAL VERIFICATION REQUIRED \nSuspected cause: Missing E911, Wi-Fi network block, device/network support, or feature \nprovisioning \nNext action: Escalate if E911 registered but toggle still fails",
    "escalation": {
      "neededWhen": [
        "E911 address is accepted/registered.",
        "Device supports Wi-Fi Calling.",
        "Customer tested on non-restricted Wi-Fi.",
        "Toggle remains greyed out or “Contact Carrier” persists.",
        "Wi-Fi Calling worked before and stopped after Teleport/device change."
      ],
      "evidenceNeeded": [
        "E911 registration status, Wi-Fi Calling/ePDG feature code,",
        "device/network support, dashboard path."
      ],
      "summaryTemplate": "Wi-Fi Calling setup failure. Network: [X]. Device/OS: [X]. Customer location: [US/abroad]. E911 \nregistered: [Yes/No]. Error: [Contact Carrier/toggle greyed/etc.]. Tested home Wi-Fi. Reboot \ncompleted. Requesting Wi-Fi Calling/ePDG feature provisioning review. INTERNAL \nVERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "E911 address is accepted/registered.",
      "Device supports Wi-Fi Calling.",
      "Customer tested on non-restricted Wi-Fi.",
      "Toggle remains greyed out or “Contact Carrier” persists.",
      "Wi-Fi Calling worked before and stopped after Teleport/device change."
    ],
    "escalationFormat": [
      "Wi-Fi Calling setup failure. Network: [X]. Device/OS: [X]. Customer location: [US/abroad]. E911 ",
      "registered: [Yes/No]. Error: [Contact Carrier/toggle greyed/etc.]. Tested home Wi-Fi. Reboot ",
      "completed. Requesting Wi-Fi Calling/ePDG feature provisioning review. INTERNAL ",
      "VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "calls-failing-dropped-or-going-straight-to-voicemail",
      "international-roaming-travel",
      "bank-otp-abroad-wi-fi-calling",
      "device-compatibility"
    ],
    "sourceAliases": [
      "X4",
      "X6",
      "X8",
      "P3"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "E911 registration status, Wi-Fi Calling/ePDG feature code,",
      "device/network support, dashboard path."
    ],
    "batch": "Batch 4",
    "aliases": [
      "wi-fi calling setup",
      "wi-fi calling won’t turn on",
      "e911 address",
      "contact carrier error",
      "wi-fi",
      "calling failed",
      "calls over wi-fi",
      "need calling indoors",
      "calling abroad on wi-fi"
    ],
    "symptoms": [
      "wi-fi calling setup",
      "wi-fi calling won’t turn on",
      "e911 address",
      "contact carrier error",
      "wi-fi",
      "calling failed",
      "calls over wi-fi",
      "need calling indoors",
      "calling abroad on wi-fi"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X4, X6, X8, P3"
  },
  {
    "id": "voicemail-visual-voicemail-setup-reset",
    "title": "Voicemail & Visual Voicemail Setup / Reset",
    "category": "messaging-calls-voicemail",
    "secondaryCategories": [],
    "priority": "normal",
    "tags": [
      "messaging-calls-voicemail",
      "batch4"
    ],
    "keywords": [
      "voicemail",
      "visual",
      "setup",
      "reset",
      "messaging-calls-voicemail"
    ],
    "customerPhrases": [
      "visual voicemail not working",
      "voicemail password reset",
      "vvm won’t load",
      "voicemail",
      "disappeared",
      "red dot won’t go away",
      "voicemail tab missing",
      "can’t access voicemail"
    ],
    "preview": {
      "problem": "Voicemail inbox not initialized / VVM cellular data issue / OS/app requirement / voicemail",
      "firstQuestion": "Is basic voicemail working if you call voicemail manually?",
      "firstAction": "Confirm customer can make calls.",
      "escalateIf": "Cellular data works."
    },
    "quickAnswer": "Voicemail inbox not initialized / VVM cellular data issue / OS/app requirement / voicemail \npassword issue / VVM provisioning issue / post-Teleport mailbox sync issue",
    "useWhen": "Use when customer reports: Visual Voicemail not working, voicemail password reset, VVM won’t load, voicemail",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Is basic voicemail working if you call voicemail manually?",
      "Is mobile data working with Wi-Fi turned off?",
      "What phone model, OS version, and network are you on?"
    ],
    "quickChecks": [
      "Turn Wi-Fi off and confirm cellular data works.",
      "Initialize basic voicemail inbox manually.",
      "Confirm device/OS supports VVM on the current network.",
      "Confirm correct voicemail app/path for Android if required.",
      "For password reset, check network-specific support path. INTERNAL VERIFICATION",
      "REQUIRED"
    ],
    "quickSteps": [
      "Turn Wi-Fi off and confirm cellular data works.",
      "Initialize basic voicemail inbox manually.",
      "Confirm device/OS supports VVM on the current network.",
      "Confirm correct voicemail app/path for Android if required.",
      "For password reset, check network-specific support path. INTERNAL VERIFICATION",
      "REQUIRED"
    ],
    "steps": [
      "Confirm customer can make calls.",
      "Confirm cellular data works with Wi-Fi off.",
      "Have customer call voicemail manually:",
      "Warp often uses",
      "86",
      ".",
      "Light Speed/GSM paths may use",
      "123",
      "or device voicemail shortcut depending on",
      "network/device.",
      "Initialize voicemail inbox if it has never been set up.",
      "If password is forgotten, follow network-specific reset process. INTERNAL",
      "VERIFICATION REQUIRED",
      "For VVM, open phone app voicemail tab after cellular data is confirmed.",
      "Restart phone.",
      "If VVM tab is missing, reset network settings only after basic checks.",
      "For red dot, listen to/delete all new messages, leave a test voicemail, delete it, then",
      "restart.",
      "Escalate if cellular data works, mailbox is initialized, OS/app path is correct, and VVM",
      "still does not sync."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Phone app > Voicemail tab.",
        "Turn Wi-Fi off and confirm cellular data works.",
        "Confirm iOS version if on Dark Star and VVM/RCS-related issues appear.",
        "Reset Network Settings if voicemail tab remains missing after account/device checks.",
        "Warn this removes saved Wi-Fi networks/passwords."
      ],
      "android": [
        "Confirm correct voicemail app or native dialer VVM support for the network/device.",
        "On Light Speed Android, a separate visual voicemail app may be required depending on",
        "support guide/device.",
        "Clear voicemail/phone app cache if VVM UI is stuck.",
        "Test manual voicemail dial-in."
      ],
      "general": [
        "Confirm customer can make calls.",
        "Confirm cellular data works with Wi-Fi off.",
        "Have customer call voicemail manually:",
        "Warp often uses",
        "86",
        ".",
        "Light Speed/GSM paths may use",
        "123",
        "or device voicemail shortcut depending on",
        "network/device.",
        "Initialize voicemail inbox if it has never been set up.",
        "If password is forgotten, follow network-specific reset process. INTERNAL",
        "VERIFICATION REQUIRED",
        "For VVM, open phone app voicemail tab after cellular data is confirmed.",
        "Restart phone.",
        "If VVM tab is missing, reset network settings only after basic checks.",
        "For red dot, listen to/delete all new messages, leave a test voicemail, delete it, then",
        "restart.",
        "Escalate if cellular data works, mailbox is initialized, OS/app path is correct, and VVM",
        "still does not sync."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Visual Voicemail needs two things: your voicemail box has to be set up, and the phone needs \nworking cellular data to sync the voicemail list. Please turn Wi-Fi off, confirm mobile data works, \nthen open the Voicemail tab again. If you forgot the voicemail PIN, I’ll check the reset path for \nyour network."
      }
    ],
    "zendeskNote": "Issue: Voicemail / Visual Voicemail issue \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nDevice/OS: [Device + OS] \nSymptoms: [VVM blank / password issue / red dot / mailbox not set up / tab missing] \nSteps tried: Wi-Fi off, cellular data verified, manual voicemail dial-in, inbox initialized, app/path \nchecked, rebooted \nInternal checks: Voicemail PIN reset / mailbox status / VVM provisioning INTERNAL \nVERIFICATION REQUIRED \nSuspected cause: Inbox setup, cellular data sync, OS/app requirement, or voicemail \nprovisioning \nNext action: Reset voicemail/PIN or escalate mailbox/VVM provisioning if persistent",
    "escalation": {
      "neededWhen": [
        "Cellular data works.",
        "Basic voicemail inbox is initialized.",
        "Correct app/OS path is being used.",
        "Password reset or VVM sync still fails.",
        "VVM broke after Teleport or network change and does not recover after settings reset."
      ],
      "evidenceNeeded": [
        "Voicemail PIN reset, mailbox status, VVM provisioning, inbox",
        "rebuild."
      ],
      "summaryTemplate": "Voicemail/VVM issue. Network: [X]. Device/OS: [X]. Cellular data works: [Yes/No]. Basic \nvoicemail initialized: [Yes/No]. Error/symptom: [X]. PIN reset attempted: [Yes/No]. App/OS path \nverified. Requesting voicemail mailbox/VVM provisioning reset or inbox rebuild. INTERNAL \nVERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Cellular data works.",
      "Basic voicemail inbox is initialized.",
      "Correct app/OS path is being used.",
      "Password reset or VVM sync still fails.",
      "VVM broke after Teleport or network change and does not recover after settings reset."
    ],
    "escalationFormat": [
      "Voicemail/VVM issue. Network: [X]. Device/OS: [X]. Cellular data works: [Yes/No]. Basic ",
      "voicemail initialized: [Yes/No]. Error/symptom: [X]. PIN reset attempted: [Yes/No]. App/OS path ",
      "verified. Requesting voicemail mailbox/VVM provisioning reset or inbox rebuild. INTERNAL ",
      "VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "calls-failing-dropped-or-going-straight-to-voicemail",
      "data-connectivity-failures-bars-but-no-internet",
      "appdashboard-self-service",
      "teleport-recovery"
    ],
    "sourceAliases": [
      "X4",
      "X8",
      "P3",
      "X10"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Voicemail PIN reset, mailbox status, VVM provisioning, inbox",
      "rebuild."
    ],
    "batch": "Batch 4",
    "aliases": [
      "visual voicemail not working",
      "voicemail password reset",
      "vvm won’t load",
      "voicemail",
      "disappeared",
      "red dot won’t go away",
      "voicemail tab missing",
      "can’t access voicemail"
    ],
    "symptoms": [
      "visual voicemail not working",
      "voicemail password reset",
      "vvm won’t load",
      "voicemail",
      "disappeared",
      "red dot won’t go away",
      "voicemail tab missing",
      "can’t access voicemail"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X4, X8, P3, X10"
  },
  {
    "id": "caller-id-spam-detect-web-filtering",
    "title": "Caller ID, Spam Detect & Web Filtering",
    "category": "messaging-calls-voicemail",
    "secondaryCategories": [],
    "priority": "normal",
    "tags": [
      "messaging-calls-voicemail",
      "batch4"
    ],
    "keywords": [
      "caller",
      "spam",
      "detect",
      "web",
      "filtering",
      "messaging-calls-voicemail"
    ],
    "customerPhrases": [
      "caller id",
      "cnam",
      "name shows wireless caller",
      "spam detection",
      "scam likely",
      "web filtering",
      "can’t",
      "access sites",
      "website blocked",
      "vpn",
      "icloud private relay"
    ],
    "preview": {
      "problem": "Feature availability limitation / add-on status / CNAM registry behavior / VPN or Private Relay",
      "firstQuestion": "Which network is the line on: Warp, Dark Star, or Light Speed?",
      "firstAction": "Identify feature: CNAM, Spam Detect, or Web Filtering.",
      "escalateIf": "Web Filtering is active/supported and fails with VPN/Private Relay/Private DNS off."
    },
    "quickAnswer": "Feature availability limitation / add-on status / CNAM registry behavior / VPN or Private Relay \nbypass / network-specific feature behavior",
    "useWhen": "Use when customer reports: caller ID, CNAM, name shows Wireless Caller, spam detection, scam likely, web filtering, can’t",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Which network is the line on: Warp, Dark Star, or Light Speed?",
      "Are you asking about outbound caller name, spam-call labels, or web filtering?",
      "Are VPN, iCloud Private Relay, Private DNS, or ad-blocking DNS turned on?"
    ],
    "quickChecks": [
      "Check feature/add-on status on the account. INTERNAL VERIFICATION REQUIRED",
      "Confirm network-specific availability. INTERNAL VERIFICATION REQUIRED",
      "For Web Filtering, turn off VPN/Private Relay/Private DNS and retest.",
      "For CNAM, confirm exact requested display name and character limits if supported.",
      "INTERNAL VERIFICATION REQUIRED",
      "Explain that receiving carriers may cache caller ID data and may not update instantly."
    ],
    "quickSteps": [
      "Check feature/add-on status on the account. INTERNAL VERIFICATION REQUIRED",
      "Confirm network-specific availability. INTERNAL VERIFICATION REQUIRED",
      "For Web Filtering, turn off VPN/Private Relay/Private DNS and retest.",
      "For CNAM, confirm exact requested display name and character limits if supported.",
      "INTERNAL VERIFICATION REQUIRED",
      "Explain that receiving carriers may cache caller ID data and may not update instantly."
    ],
    "steps": [
      "Identify feature: CNAM, Spam Detect, or Web Filtering.",
      "Confirm network and feature availability. INTERNAL VERIFICATION REQUIRED",
      "For CNAM:",
      "Check if custom caller ID is supported for that network/account.",
      "Collect exact requested display name only if needed.",
      "Submit/update through approved internal process. INTERNAL VERIFICATION",
      "REQUIRED",
      "For Spam Detect:",
      "Confirm add-on/feature is active.",
      "Explain it may label suspicious calls and may not block all calls.",
      "Use device-level blocking/silence unknown callers if customer wants stronger",
      "blocking.",
      "For Web Filtering:",
      "Confirm feature is active and supported.",
      "Turn off VPN/iCloud Private Relay/Private DNS.",
      "Test again on cellular data.",
      "Escalate if feature is active and correctly configured but still not working."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "iCloud Private Relay: Settings > Apple ID > iCloud > Private Relay OFF for testing.",
        "VPN: Settings > VPN OFF.",
        "For unwanted calls: Settings > Phone > Silence Unknown Callers if customer wants",
        "device-level filtering.",
        "Test Web Filtering on cellular data, not Wi-Fi."
      ],
      "android": [
        "Disable VPN app.",
        "Settings > Network & Internet > Private DNS: turn OFF/Automatic for testing.",
        "Check browser/app DNS settings if using ad blockers.",
        "Test on cellular data, not Wi-Fi.",
        "Copy-ready customer reply — Web Filtering:",
        "Web Filtering can only work when the network can see the traffic. If a VPN, iCloud Private",
        "Relay, or Private DNS is turned on, it can hide the traffic from the filter. Please turn those off",
        "temporarily and test again on cellular data.",
        "Copy-ready customer reply — Caller ID:",
        "Caller ID name updates depend on the network and the receiving carrier’s caller ID databases.",
        "I’ll check whether custom caller ID is available for your line and, if it is, submit the correct",
        "request. I don’t want to promise an update until I verify the account and network support it."
      ],
      "general": [
        "Identify feature: CNAM, Spam Detect, or Web Filtering.",
        "Confirm network and feature availability. INTERNAL VERIFICATION REQUIRED",
        "For CNAM:",
        "Check if custom caller ID is supported for that network/account.",
        "Collect exact requested display name only if needed.",
        "Submit/update through approved internal process. INTERNAL VERIFICATION",
        "REQUIRED",
        "For Spam Detect:",
        "Confirm add-on/feature is active.",
        "Explain it may label suspicious calls and may not block all calls.",
        "Use device-level blocking/silence unknown callers if customer wants stronger",
        "blocking.",
        "For Web Filtering:",
        "Confirm feature is active and supported.",
        "Turn off VPN/iCloud Private Relay/Private DNS.",
        "Test again on cellular data.",
        "Escalate if feature is active and correctly configured but still not working."
      ]
    },
    "copyTemplates": [],
    "zendeskNote": "Issue: Caller ID / Spam Detect / Web Filtering \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nFeature: [CNAM / Spam Detect / Web Filtering] \nDevice/OS: [Device + OS if relevant] \nSymptoms: [Wireless Caller / spam not labeled / sites not filtered / false block] \nSteps tried: Feature status checked, VPN/Private Relay/Private DNS disabled, cellular-only test, \nrequested CNAM verified \nInternal checks: Add-on status, network support, backend feature state, CNAM request status \nINTERNAL VERIFICATION REQUIRED \nSuspected cause: Feature not active, network limitation, external CNAM cache, or VPN/DNS \nbypass \nNext action: Submit feature request or escalate if active feature fails",
    "escalation": {
      "neededWhen": [
        "Web Filtering is active/supported and fails with VPN/Private Relay/Private DNS off.",
        "CNAM request was submitted and still not reflected after expected propagation window.",
        "Spam Detect feature is active but not applying expected labels across repeated",
        "examples.",
        "Multiple similar feature failures appear after app/network update."
      ],
      "evidenceNeeded": [
        "Add-on status, feature availability by network, CNAM",
        "support/request status, backend filtering state, current pricing/policy.",
        "Batch 4 Agent Import Notes",
        "Create these as separate cards",
        "SMS, MMS & Group Messaging Triage",
        "RCS & iMessage Activation / Fallback",
        "Bank OTP, Short Codes & Delayed Inbound Texts",
        "Calls Failing, Dropped, or Going Straight to Voicemail",
        "Wi-Fi Calling & E911 Setup",
        "Voicemail & Visual Voicemail Setup / Reset",
        "Caller ID, Spam Detect & Web Filtering",
        "Suggested category mapping",
        "Messaging / Calls / Voicemail",
        "SMS, MMS & Group Messaging Triage",
        "RCS & iMessage Activation / Fallback",
        "Calls Failing, Dropped, or Going Straight to Voicemail",
        "Voicemail & Visual Voicemail Setup / Reset",
        "Security / Fraud",
        "Bank OTP, Short Codes & Delayed Inbound Texts",
        "Wi-Fi Calling",
        "Wi-Fi Calling & E911 Setup",
        "Features",
        "Caller ID, Spam Detect & Web Filtering",
        "Suggested pinned/common cards from Batch 4",
        "Bank OTP, Short Codes & Delayed Inbound Texts",
        "SMS, MMS & Group Messaging Triage",
        "Calls Failing, Dropped, or Going Straight to Voicemail",
        "Wi-Fi Calling & E911 Setup",
        "RCS & iMessage Activation / Fallback",
        "Voicemail & Visual Voicemail Setup / Reset",
        "UI rule",
        "Show short preview first:",
        "Problem",
        "First question",
        "First action",
        "Escalate if",
        "Then full card opens with:",
        "Ask customer first",
        "Quick checks",
        "Step-by-step troubleshooting",
        "iPhone steps",
        "Android steps",
        "Copy-ready reply",
        "Zendesk note",
        "Escalation summary",
        "Related playbooks",
        "Source aliases",
        "Confidence",
        "Needs internal verification",
        "Merge notes for later",
        "Batch 1 and Batch 2 already include MMS and Error 97 cards.",
        "Final site should not show three duplicate MMS cards. Use one main MMS card with:",
        "Batch 1 triage summary",
        "Batch 2 APN/MMSC depth",
        "Batch 4 messaging/RCS/Error 97 depth",
        "Batch 1 already includes Porting & Bank Code Delays.",
        "Batch 4’s OTP card should become the deeper short-code/A2P card linked from the",
        "porting triage card.",
        "Batch 4 Wi-Fi Calling should later link to Batch 9 International/Roaming because Wi-Fi",
        "Calling abroad has special limitations."
      ],
      "summaryTemplate": "Feature issue. Feature: [CNAM/Spam/Web Filtering]. Network: [X]. Account add-on/status \nverified: [Yes/No]. Device/OS: [X]. VPN/Private Relay/DNS off for test: [Yes/No]. Examples: \n[numbers/sites/timestamps]. Requesting backend feature/CNAM/filtering review. INTERNAL \nVERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Web Filtering is active/supported and fails with VPN/Private Relay/Private DNS off.",
      "CNAM request was submitted and still not reflected after expected propagation window.",
      "Spam Detect feature is active but not applying expected labels across repeated",
      "examples.",
      "Multiple similar feature failures appear after app/network update."
    ],
    "escalationFormat": [
      "Feature issue. Feature: [CNAM/Spam/Web Filtering]. Network: [X]. Account add-on/status ",
      "verified: [Yes/No]. Device/OS: [X]. VPN/Private Relay/DNS off for test: [Yes/No]. Examples: ",
      "[numbers/sites/timestamps]. Requesting backend feature/CNAM/filtering review. INTERNAL ",
      "VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "known-issues",
      "appdashboard-self-service",
      "account-securityfraud",
      "calls-failing-dropped-or-going-straight-to-voicemail"
    ],
    "sourceAliases": [
      "X4",
      "P3",
      "X10",
      "X7"
    ],
    "confidence": "Medium-High because feature availability/pricing/status may change",
    "internalVerificationRequired": [
      "Add-on status, feature availability by network, CNAM",
      "support/request status, backend filtering state, current pricing/policy.",
      "Batch 4 Agent Import Notes",
      "Create these as separate cards",
      "SMS, MMS & Group Messaging Triage",
      "RCS & iMessage Activation / Fallback",
      "Bank OTP, Short Codes & Delayed Inbound Texts",
      "Calls Failing, Dropped, or Going Straight to Voicemail",
      "Wi-Fi Calling & E911 Setup",
      "Voicemail & Visual Voicemail Setup / Reset",
      "Caller ID, Spam Detect & Web Filtering",
      "Suggested category mapping",
      "Messaging / Calls / Voicemail",
      "SMS, MMS & Group Messaging Triage",
      "RCS & iMessage Activation / Fallback",
      "Calls Failing, Dropped, or Going Straight to Voicemail",
      "Voicemail & Visual Voicemail Setup / Reset",
      "Security / Fraud",
      "Bank OTP, Short Codes & Delayed Inbound Texts",
      "Wi-Fi Calling",
      "Wi-Fi Calling & E911 Setup",
      "Features",
      "Caller ID, Spam Detect & Web Filtering",
      "Suggested pinned/common cards from Batch 4",
      "Bank OTP, Short Codes & Delayed Inbound Texts",
      "SMS, MMS & Group Messaging Triage",
      "Calls Failing, Dropped, or Going Straight to Voicemail",
      "Wi-Fi Calling & E911 Setup",
      "RCS & iMessage Activation / Fallback",
      "Voicemail & Visual Voicemail Setup / Reset",
      "UI rule",
      "Show short preview first:",
      "Problem",
      "First question",
      "First action",
      "Escalate if",
      "Then full card opens with:",
      "Ask customer first",
      "Quick checks",
      "Step-by-step troubleshooting",
      "iPhone steps",
      "Android steps",
      "Copy-ready reply",
      "Zendesk note",
      "Escalation summary",
      "Related playbooks",
      "Source aliases",
      "Confidence",
      "Needs internal verification",
      "Merge notes for later",
      "Batch 1 and Batch 2 already include MMS and Error 97 cards.",
      "Final site should not show three duplicate MMS cards. Use one main MMS card with:",
      "Batch 1 triage summary",
      "Batch 2 APN/MMSC depth",
      "Batch 4 messaging/RCS/Error 97 depth",
      "Batch 1 already includes Porting & Bank Code Delays.",
      "Batch 4’s OTP card should become the deeper short-code/A2P card linked from the",
      "porting triage card.",
      "Batch 4 Wi-Fi Calling should later link to Batch 9 International/Roaming because Wi-Fi",
      "Calling abroad has special limitations."
    ],
    "batch": "Batch 4",
    "aliases": [
      "caller id",
      "cnam",
      "name shows wireless caller",
      "spam detection",
      "scam likely",
      "web filtering",
      "can’t",
      "access sites",
      "website blocked",
      "vpn",
      "icloud private relay"
    ],
    "symptoms": [
      "caller id",
      "cnam",
      "name shows wireless caller",
      "spam detection",
      "scam likely",
      "web filtering",
      "can’t",
      "access sites",
      "website blocked",
      "vpn",
      "icloud private relay"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X4, P3, X10, X7"
  },
  {
    "id": "slow-data-throttling-vs-congestion-qci",
    "title": "Slow Data: Throttling vs. Congestion (QCI)",
    "category": "start-here",
    "secondaryCategories": [],
    "priority": "normal",
    "tags": [
      "start-here",
      "batch6"
    ],
    "keywords": [
      "slow",
      "data",
      "throttling",
      "congestion",
      "qci",
      "start-here"
    ],
    "customerPhrases": [
      "\"slow data\"",
      "\"being throttled\"",
      "\"data is crawling\"",
      "\"premium data used up\"",
      "\"qci explanation\"",
      "\"deprioritization\"",
      "\"congestion\""
    ],
    "preview": {
      "problem": "Account Throttle / Sector Congestion",
      "firstQuestion": "Are speeds consistently testing at or around exactly 1",
      "firstAction": "Confirm data balance internally. 2. If >100GB",
      "escalateIf": "Account has unused premium data, speeds persistently locked at"
    },
    "quickAnswer": "Account Throttle / Sector Congestion",
    "useWhen": "Use when customer reports: \"slow data\", \"being throttled\", \"data is crawling\",",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are speeds consistently testing at or around exactly 1",
      "Mbps, or do they fluctuate? 2) Have you checked your data usage in the dashboard",
      "today? 3) Is this happening everywhere, or just at a specific time of day like rush hour?"
    ],
    "quickChecks": [
      "Verify internal cycle data usage against plan limits (e.g.,",
      "100GB Premium, 70GB Starter) (INTERNAL VERIFICATION REQUIRED). 2) Check the",
      "QCI tier for the active plan/network. 3) Ask customer to run an Ookla speed test with",
      "Wi-Fi and VPNs disabled. 4) Check if Low Data Mode / Data Saver is ON. 5) Look for",
      "local tower outage/congestion alerts."
    ],
    "quickSteps": [
      "Verify internal cycle data usage against plan limits (e.g.,",
      "100GB Premium, 70GB Starter) (INTERNAL VERIFICATION REQUIRED). 2) Check the",
      "QCI tier for the active plan/network. 3) Ask customer to run an Ookla speed test with",
      "Wi-Fi and VPNs disabled. 4) Check if Low Data Mode / Data Saver is ON. 5) Look for",
      "local tower outage/congestion alerts."
    ],
    "steps": [
      "Confirm data balance internally. 2. If >100GB",
      "(Premium) or >70GB (Starter), explicitly explain the 1 Mbps hard throttle (usable for",
      "browsing/music, slow for large downloads). 3. If balance >0, verify local congestion (e.g.,",
      "stadium, noon rush). 4. Use customer-safe language to explain network traffic",
      "management. 5. If persistent <1 Mbps off-peak with premium data remaining, escalate."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Cellular > Cellular Data Options > Low Data Mode",
        "OFF."
      ],
      "android": [
        "Settings > Connections > Data Usage > Data Saver OFF."
      ],
      "general": [
        "Confirm data balance internally. 2. If >100GB",
        "(Premium) or >70GB (Starter), explicitly explain the 1 Mbps hard throttle (usable for",
        "browsing/music, slow for large downloads). 3. If balance >0, verify local congestion (e.g.,",
        "stadium, noon rush). 4. Use customer-safe language to explain network traffic",
        "management. 5. If persistent <1 Mbps off-peak with premium data remaining, escalate."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "\"I've checked your account, and your connection is\ncompletely healthy! You have utilized your massive bucket of high-speed data for this \nbilling cycle, so your speeds are now adjusted to 1 Mbps to keep the network stable for \neveryone. At this speed, you can still easily browse the web and check emails.\""
      }
    ],
    "zendeskNote": "Type: Data Throttle (1 Mbps) | Plan: [Plan] | Usage: [X] GB |\nConclusion: Confirmed 1 Mbps throttle triggered by billing platform. Educated customer \non Unlimited policy. Ticket resolved.",
    "escalation": {
      "neededWhen": [
        "Account has unused premium data, speeds persistently locked at",
        "< 1 Mbps globally, device limiters (VPN/Data Saver) are off."
      ],
      "evidenceNeeded": [
        "Billing cycle usage validation,",
        "throttle flag status, QCI level verification (INTERNAL VERIFICATION REQUIRED)."
      ],
      "summaryTemplate": "T2 BILLING - False 1 Mbps Throttle State. Speedtest: 0.5\nMbps. Signal: 4 bars 5G. Cycle usage: 40GB. Check if customer hit premium data cap or \nis mis-provisioned."
    },
    "escalationRequiredWhen": [
      "Account has unused premium data, speeds persistently locked at",
      "< 1 Mbps globally, device limiters (VPN/Data Saver) are off."
    ],
    "escalationFormat": [
      "T2 BILLING - False 1 Mbps Throttle State. Speedtest: 0.5",
      "Mbps. Signal: 4 bars 5G. Cycle usage: 40GB. Check if customer hit premium data cap or ",
      "is mis-provisioned."
    ],
    "relatedPlaybooks": [
      "video-buffering-data-waster-mode",
      "speed-test-interpretation"
    ],
    "sourceAliases": [
      "\"US Mobile Performance Support Matrix.pdf\""
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Billing cycle usage validation,",
      "throttle flag status, QCI level verification (INTERNAL VERIFICATION REQUIRED)."
    ],
    "batch": "Batch 6",
    "aliases": [
      "\"slow data\"",
      "\"being throttled\"",
      "\"data is crawling\"",
      "\"premium data used up\"",
      "\"qci explanation\"",
      "\"deprioritization\"",
      "\"congestion\""
    ],
    "symptoms": [
      "\"slow data\"",
      "\"being throttled\"",
      "\"data is crawling\"",
      "\"premium data used up\"",
      "\"qci explanation\"",
      "\"deprioritization\"",
      "\"congestion\""
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "\"US Mobile Performance Support Matrix.pdf\""
  },
  {
    "id": "network-choice-coverage-band-troubleshooting",
    "title": "Network Choice, Coverage & Band Troubleshooting",
    "category": "network-signal",
    "secondaryCategories": [],
    "priority": "normal",
    "tags": [
      "network-signal",
      "batch6"
    ],
    "keywords": [
      "network",
      "choice",
      "coverage",
      "band",
      "troubleshooting",
      "network-signal"
    ],
    "customerPhrases": [
      "\"indoor coverage\"",
      "\"rural coverage\"",
      "\"urban coverage\"",
      "\"warp performance\"",
      "\"dark star performance\"",
      "\"light speed performance\"",
      "\"band 71 /",
      "n71\"",
      "\"c-band / n77\""
    ],
    "preview": {
      "problem": "Hardware Limitation / RF Attenuation",
      "firstQuestion": "What exact model of phone are you using? 2) Are you",
      "firstAction": "Confirm ZIP code on coverage map. 2. If",
      "escalateIf": "Device supports all bands, customer is outside in a confirmed"
    },
    "quickAnswer": "Hardware Limitation / RF Attenuation",
    "useWhen": "Use when customer reports: \"indoor coverage\", \"rural coverage\", \"urban coverage\",",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "What exact model of phone are you using? 2) Are you",
      "indoors, outdoors, or in a rural area when the service drops? 3) Does Wi-Fi calling work",
      "for you while indoors?"
    ],
    "quickChecks": [
      "Check device IMEI for Band 71 (Light Speed) or C-Band n77",
      "(Warp/Dark Star) support. 2) Check provider outage map for the specific ZIP code. 3)",
      "Ensure 5G Auto or LTE is selected appropriately in settings. 4) Determine building",
      "material if reporting indoor signal drop. 5) Check for local tower congestion versus a",
      "genuine dead zone."
    ],
    "quickSteps": [
      "Check device IMEI for Band 71 (Light Speed) or C-Band n77",
      "(Warp/Dark Star) support. 2) Check provider outage map for the specific ZIP code. 3)",
      "Ensure 5G Auto or LTE is selected appropriately in settings. 4) Determine building",
      "material if reporting indoor signal drop. 5) Check for local tower congestion versus a",
      "genuine dead zone."
    ],
    "steps": [
      "Confirm ZIP code on coverage map. 2. If",
      "Warp/indoor complaint: explain high-frequency attenuation and recommend Wi-Fi",
      "calling. 3. If Light Speed/rural complaint: verify Band 71 support; if missing, suggest a",
      "network switch. 4. If Dark Star: verify unlocked AT&T compatibility. 5. Decide to suggest",
      "a Teleport (network switch) if the host's physical footprint doesn't match the customer's",
      "home/work location."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "N/A"
      ],
      "android": [
        "Explain that international or older Androids often lack specific",
        "US rural bands."
      ],
      "general": [
        "Confirm ZIP code on coverage map. 2. If",
        "Warp/indoor complaint: explain high-frequency attenuation and recommend Wi-Fi",
        "calling. 3. If Light Speed/rural complaint: verify Band 71 support; if missing, suggest a",
        "network switch. 4. If Dark Star: verify unlocked AT&T compatibility. 5. Decide to suggest",
        "a Teleport (network switch) if the host's physical footprint doesn't match the customer's",
        "home/work location."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "\"While our coverage map shows service in your area,\nreal-world physical barriers like hills, dense trees, and building materials (concrete/metal) \ncan block the signal from reaching deep indoors. Since you're having trouble inside, I \nhighly recommend turning on 'Wi-Fi Calling' in your settings so you have a perfect, \nseamless connection while at home.\""
      }
    ],
    "zendeskNote": "Type: Weak Coverage (Indoor/Rural) | Location: [ZIP Code] |\nConclusion: Customer experiences poor signal strictly indoors. Verified device supports \nprimary bands. Educated on structural attenuation and enabled Wi-Fi Calling.",
    "escalation": {
      "neededWhen": [
        "Device supports all bands, customer is outside in a confirmed",
        "strong coverage area, but has persistent \"SOS Only\" or zero throughput across multiple",
        "users in the same ZIP code (Requires NOC check)."
      ],
      "evidenceNeeded": [
        "NOC / Macro-site outage check,",
        "IMEI Band compatibility check (INTERNAL VERIFICATION REQUIRED)."
      ],
      "summaryTemplate": "NOC ALERT - Suspected Macro Outage - 4th user in ZIP\n[XXXXX] reporting sudden SOS in last 45 mins. Requesting emergency tower health \ncheck."
    },
    "escalationRequiredWhen": [
      "Device supports all bands, customer is outside in a confirmed",
      "strong coverage area, but has persistent \"SOS Only\" or zero throughput across multiple",
      "users in the same ZIP code (Requires NOC check)."
    ],
    "escalationFormat": [
      "NOC ALERT - Suspected Macro Outage - 4th user in ZIP",
      "[XXXXX] reporting sudden SOS in last 45 mins. Requesting emergency tower health ",
      "check."
    ],
    "relatedPlaybooks": [
      "speed-test-interpretation-ui-icons-network-switch-logic",
      "wi-fi-calling-setup"
    ],
    "sourceAliases": [
      "\"US Mobile Performance Support Matrix.pdf\""
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "NOC / Macro-site outage check,",
      "IMEI Band compatibility check (INTERNAL VERIFICATION REQUIRED)."
    ],
    "batch": "Batch 6",
    "aliases": [
      "\"indoor coverage\"",
      "\"rural coverage\"",
      "\"urban coverage\"",
      "\"warp performance\"",
      "\"dark star performance\"",
      "\"light speed performance\"",
      "\"band 71 /",
      "n71\"",
      "\"c-band / n77\""
    ],
    "symptoms": [
      "\"indoor coverage\"",
      "\"rural coverage\"",
      "\"urban coverage\"",
      "\"warp performance\"",
      "\"dark star performance\"",
      "\"light speed performance\"",
      "\"band 71 /",
      "n71\"",
      "\"c-band / n77\""
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "\"US Mobile Performance Support Matrix.pdf\""
  },
  {
    "id": "speed-test-interpretation-ui-icons-network-switch-logic",
    "title": "Speed Test Interpretation, UI Icons & Network Switch Logic",
    "category": "start-here",
    "secondaryCategories": [],
    "priority": "normal",
    "tags": [
      "start-here",
      "batch6"
    ],
    "keywords": [
      "speed",
      "test",
      "interpretation",
      "icons",
      "network",
      "switch",
      "logic",
      "start-here"
    ],
    "customerPhrases": [
      "\"speed test interpretation\"",
      "\"5g uw / 5g uc / lte",
      "icons\"",
      "\"when to suggest network switch vs escalate\"",
      "\"upload is 0.01\"",
      "\"fast.com is",
      "slow\""
    ],
    "preview": {
      "problem": "Customer Misunderstanding / RF Cell Edge",
      "firstQuestion": "Are you running speed tests on Wi-Fi or cellular? 2) Is your",
      "firstAction": "Validate speed test conditions (stationary, outdoors,",
      "escalateIf": "Perfect speed test conditions, outdoors, high-band 5G confirmed,"
    },
    "quickAnswer": "Customer Misunderstanding / RF Cell Edge",
    "useWhen": "Use when customer reports: \"speed test interpretation\", \"5G UW / 5G UC / LTE",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are you running speed tests on Wi-Fi or cellular? 2) Is your",
      "VPN or Apple iCloud Private Relay turned off? 3) Does the speed improve if you step",
      "outside?"
    ],
    "quickChecks": [
      "Verify Wi-Fi, VPN, and Private Relay are explicitly OFF. 2)",
      "Check Upload speed (Low upload = cell edge). 3) Check Fast.com (if exactly ~4 Mbps =",
      "video throttle). 4) Check Download speed (if exactly ~1 Mbps = account throttle). 5)",
      "Verify Teleport frequency limits if suggesting a network switch (INTERNAL",
      "VERIFICATION REQUIRED)."
    ],
    "quickSteps": [
      "Verify Wi-Fi, VPN, and Private Relay are explicitly OFF. 2)",
      "Check Upload speed (Low upload = cell edge). 3) Check Fast.com (if exactly ~4 Mbps =",
      "video throttle). 4) Check Download speed (if exactly ~1 Mbps = account throttle). 5)",
      "Verify Teleport frequency limits if suggesting a network switch (INTERNAL",
      "VERIFICATION REQUIRED)."
    ],
    "steps": [
      "Validate speed test conditions (stationary, outdoors,",
      "VPNs off). 2. Warn customers against running continuous speed tests to protect their",
      "data allotment. 3. If missing \"5G UC\" icon -> explain generic \"US Mobile\" alpha tag on",
      "Light Speed. 4. Propose a Teleport (network switch) if coverage is structurally poor at the",
      "user's home/work. 5. Escalate to engineering ONLY if coverage should be flawless, data",
      "is unused, and routing is failing."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Ensure iCloud Private Relay is OFF for speed tests. Explain",
        "\"5G Auto\" may drop to LTE to save battery."
      ],
      "android": [
        "Explain the \"US Mobile\" generic tag replaces T-Mobile's \"5G",
        "UC\" icon."
      ],
      "general": [
        "Validate speed test conditions (stationary, outdoors,",
        "VPNs off). 2. Warn customers against running continuous speed tests to protect their",
        "data allotment. 3. If missing \"5G UC\" icon -> explain generic \"US Mobile\" alpha tag on",
        "Light Speed. 4. Propose a Teleport (network switch) if coverage is structurally poor at the",
        "user's home/work. 5. Escalate to engineering ONLY if coverage should be flawless, data",
        "is unused, and routing is failing."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "\"Speed tests can change minute by minute because you\nare sharing the cell tower with thousands of other people. Also, some phones display the \n5G UW or UC icon even if the signal is too weak to use. Toggling airplane mode on and \noff can force a connection to the strongest, fastest band.\""
      }
    ],
    "zendeskNote": "Type: Speed Test Review | Result: 50 Down / 0.5 Up |\nConclusion: Cell edge interference confirmed. Advised customer on RF limits and \noffered Teleport.",
    "escalation": {
      "neededWhen": [
        "Perfect speed test conditions, outdoors, high-band 5G confirmed,",
        "unused premium data, but throughput is permanently < 1 Mbps."
      ],
      "evidenceNeeded": [
        "Teleport quota limit verification,",
        "Account throttle verification (INTERNAL VERIFICATION REQUIRED)."
      ],
      "summaryTemplate": "T2 RF EVAL - Persistent Sub-1Mbps. Account is NOT\nthrottled. Device settings are clear. Speeds persistently locked at 0.2 Mbps regardless of \ntime/location. Requesting SPPT reprovisioning or line sync."
    },
    "escalationRequiredWhen": [
      "Perfect speed test conditions, outdoors, high-band 5G confirmed,",
      "unused premium data, but throughput is permanently < 1 Mbps."
    ],
    "escalationFormat": [
      "T2 RF EVAL - Persistent Sub-1Mbps. Account is NOT",
      "throttled. Device settings are clear. Speeds persistently locked at 0.2 Mbps regardless of ",
      "time/location. Requesting SPPT reprovisioning or line sync."
    ],
    "relatedPlaybooks": [
      "slow-data-throttling-vs-congestion-qci",
      "network-performance-coverage"
    ],
    "sourceAliases": [
      "\"US Mobile Performance Support Matrix.pdf\""
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Teleport quota limit verification,",
      "Account throttle verification (INTERNAL VERIFICATION REQUIRED)."
    ],
    "batch": "Batch 6",
    "aliases": [
      "\"speed test interpretation\"",
      "\"5g uw / 5g uc / lte",
      "icons\"",
      "\"when to suggest network switch vs escalate\"",
      "\"upload is 0.01\"",
      "\"fast.com is",
      "slow\""
    ],
    "symptoms": [
      "\"speed test interpretation\"",
      "\"5g uw / 5g uc / lte",
      "icons\"",
      "\"when to suggest network switch vs escalate\"",
      "\"upload is 0.01\"",
      "\"fast.com is",
      "slow\""
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "\"US Mobile Performance Support Matrix.pdf\""
  },
  {
    "id": "video-buffering-data-waster-mode",
    "title": "Video Buffering & Data Waster Mode",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "normal",
    "tags": [
      "apn-data",
      "batch6"
    ],
    "keywords": [
      "video",
      "buffering",
      "data",
      "waster",
      "mode",
      "apn-data"
    ],
    "customerPhrases": [
      "\"data waster mode\"",
      "\"video buffers but websites work\"",
      "\"fast.com is slow\"",
      "\"4k streaming\"",
      "\"720p cap\""
    ],
    "preview": {
      "problem": "DPI Video Throttling",
      "firstQuestion": "Do normal web pages load instantly, but video apps like",
      "firstAction": "Confirm plan usage is not fully exhausted. 2. Guide",
      "escalateIf": "Data Waster is ON, user is on Dark Star or Light Speed, and video"
    },
    "quickAnswer": "DPI Video Throttling",
    "useWhen": "Use when customer reports: \"data waster mode\", \"video buffers but websites work\",",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Do normal web pages load instantly, but video apps like",
      "YouTube and Netflix buffer? 2) Have you checked your dashboard to see if 'Data Waster'",
      "is turned on? 3) Are you testing speeds specifically on Fast.com?"
    ],
    "quickChecks": [
      "Verify Data Waster is toggled ON in the dashboard",
      "(INTERNAL VERIFICATION REQUIRED). 2) Check if user is on Warp (inform them of",
      "the 720p cap). 3) Differentiate Fast.com (measures video servers) from Ookla",
      "(measures raw data). 4) Check premium data balance. 5) Check for VPN (which",
      "encrypts traffic and bypasses video throttles)."
    ],
    "quickSteps": [
      "Verify Data Waster is toggled ON in the dashboard",
      "(INTERNAL VERIFICATION REQUIRED). 2) Check if user is on Warp (inform them of",
      "the 720p cap). 3) Differentiate Fast.com (measures video servers) from Ookla",
      "(measures raw data). 4) Check premium data balance. 5) Check for VPN (which",
      "encrypts traffic and bypasses video throttles)."
    ],
    "steps": [
      "Confirm plan usage is not fully exhausted. 2. Guide",
      "user to toggle Data Waster ON in their US Mobile web dashboard. 3. If on Warp,",
      "explicitly set expectations that video is carrier-capped at 720p HD (~4 Mbps). 4. If the",
      "customer requires 4K streaming via cellular data, recommend switching to Dark Star or",
      "Light Speed."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "N/A"
      ],
      "android": [
        "N/A"
      ],
      "general": [
        "Confirm plan usage is not fully exhausted. 2. Guide",
        "user to toggle Data Waster ON in their US Mobile web dashboard. 3. If on Warp,",
        "explicitly set expectations that video is carrier-capped at 720p HD (~4 Mbps). 4. If the",
        "customer requires 4K streaming via cellular data, recommend switching to Dark Star or",
        "Light Speed."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "\"By default, the network optimizes video to standard\ndefinition to save your high-speed data. You can easily switch this to high definition by \nturning on the Data Waster feature in your account dashboard! Just keep in mind that on \nthe Warp network, videos are specifically capped at 720p HD.\""
      }
    ],
    "zendeskNote": "Type: Video Buffering | Network: Warp | Conclusion: Educated\nuser on Warp 720p limits and Data Waster dashboard toggle.",
    "escalation": {
      "neededWhen": [
        "Data Waster is ON, user is on Dark Star or Light Speed, and video",
        "remains hard-capped at 480p speeds (< 2 Mbps)."
      ],
      "evidenceNeeded": [
        "Verifying the Data Waster toggle",
        "in the dashboard backend (INTERNAL VERIFICATION REQUIRED)."
      ],
      "summaryTemplate": "T2 BILLING - False Video Throttle State. Data Waster is\nON. Premium data available. Video streams locked <2Mbps on Dark Star. Please \nrefresh video throttle SOC."
    },
    "escalationRequiredWhen": [
      "Data Waster is ON, user is on Dark Star or Light Speed, and video",
      "remains hard-capped at 480p speeds (< 2 Mbps)."
    ],
    "escalationFormat": [
      "T2 BILLING - False Video Throttle State. Data Waster is",
      "ON. Premium data available. Video streams locked <2Mbps on Dark Star. Please ",
      "refresh video throttle SOC."
    ],
    "relatedPlaybooks": [
      "speed-test-interpretation"
    ],
    "sourceAliases": [
      "\"US Mobile Performance Support Matrix.pdf\""
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Verifying the Data Waster toggle",
      "in the dashboard backend (INTERNAL VERIFICATION REQUIRED)."
    ],
    "batch": "Batch 6",
    "aliases": [
      "\"data waster mode\"",
      "\"video buffers but websites work\"",
      "\"fast.com is slow\"",
      "\"4k streaming\"",
      "\"720p cap\""
    ],
    "symptoms": [
      "\"data waster mode\"",
      "\"video buffers but websites work\"",
      "\"fast.com is slow\"",
      "\"4k streaming\"",
      "\"720p cap\""
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "\"US Mobile Performance Support Matrix.pdf\""
  },
  {
    "id": "hotspot-speed-limits",
    "title": "Hotspot Speed Limits",
    "category": "hotspot",
    "secondaryCategories": [],
    "priority": "normal",
    "tags": [
      "hotspot",
      "batch6"
    ],
    "keywords": [
      "hotspot",
      "speed",
      "limits"
    ],
    "customerPhrases": [
      "\"hotspot speed limits\"",
      "\"tethering is slow\"",
      "\"hotspot",
      "stopped working\"",
      "\"dark star hotspot\"",
      "\"premium data used up\""
    ],
    "preview": {
      "problem": "Hotspot Plan Allotment Exhaustion",
      "firstQuestion": "Have you used your hotspot heavily this billing cycle? 2) Is",
      "firstAction": "Confirm plan hotspot limits (Starter = 20GB/10GB,",
      "escalateIf": "Hotspot bucket is 0% used, APN 'dun' is verified, but tethered"
    },
    "quickAnswer": "Hotspot Plan Allotment Exhaustion",
    "useWhen": "Use when customer reports: \"hotspot speed limits\", \"tethering is slow\", \"hotspot",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Have you used your hotspot heavily this billing cycle? 2) Is",
      "the connected device (like a laptop) downloading background OS updates? 3) Which US",
      "Mobile network are you currently using?"
    ],
    "quickChecks": [
      "Verify active network (Warp/DS/LS). 2) Check hotspot usage",
      "bucket in billing dashboard (INTERNAL VERIFICATION REQUIRED). 3) Differentiate",
      "50GB hard cut-off (Warp/LS) from tiered throttling (Dark Star). 4) Confirm the phone's",
      "primary data still works perfectly. 5) Check for connected PC background updates",
      "consuming bandwidth."
    ],
    "quickSteps": [
      "Verify active network (Warp/DS/LS). 2) Check hotspot usage",
      "bucket in billing dashboard (INTERNAL VERIFICATION REQUIRED). 3) Differentiate",
      "50GB hard cut-off (Warp/LS) from tiered throttling (Dark Star). 4) Confirm the phone's",
      "primary data still works perfectly. 5) Check for connected PC background updates",
      "consuming bandwidth."
    ],
    "steps": [
      "Confirm plan hotspot limits (Starter = 20GB/10GB,",
      "Premium = 50GB/100GB). 2. If Warp/LS and the 50GB limit is hit, explain the hard cap.",
      "If Dark Star Premium, explain the 100GB -> 8 Mbps -> 600 Kbps tiered throttling logic.",
      "Advise that tethered laptops often consume background data rapidly, which can make",
      "web browsing feel artificially slow."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "N/A"
      ],
      "android": [
        "N/A"
      ],
      "general": [
        "Confirm plan hotspot limits (Starter = 20GB/10GB,",
        "Premium = 50GB/100GB). 2. If Warp/LS and the 50GB limit is hit, explain the hard cap.",
        "If Dark Star Premium, explain the 100GB -> 8 Mbps -> 600 Kbps tiered throttling logic.",
        "Advise that tethered laptops often consume background data rapidly, which can make",
        "web browsing feel artificially slow."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "\"Your plan includes a dedicated bucket of high-speed\nhotspot data. Once that bucket is used, the hotspot speeds are reduced to ensure the \nnetwork remains stable for everyone. Laptops often consume background data rapidly, \nwhich can make web browsing feel slow.\""
      }
    ],
    "zendeskNote": "Type: Hotspot Throttle | Network: Dark Star | Usage: 105 GB |\nConclusion: Dark Star hotspot entered 8 Mbps throttle tier. Educated customer.",
    "escalation": {
      "neededWhen": [
        "Hotspot bucket is 0% used, APN 'dun' is verified, but tethered",
        "devices get 0 Mbps throughput."
      ],
      "evidenceNeeded": [
        "Hotspot usage pool bucket",
        "verification on the billing ledger (INTERNAL VERIFICATION REQUIRED)."
      ],
      "summaryTemplate": "T2 PROVISIONING - Hotspot Throttle Error. Plan:\nPremium. Hotspot usage: 0GB. Tethering works but speeds locked at < 1Mbps. Please \nverify hotspot SOC provisioning."
    },
    "escalationRequiredWhen": [
      "Hotspot bucket is 0% used, APN 'dun' is verified, but tethered",
      "devices get 0 Mbps throughput."
    ],
    "escalationFormat": [
      "T2 PROVISIONING - Hotspot Throttle Error. Plan:",
      "Premium. Hotspot usage: 0GB. Tethering works but speeds locked at < 1Mbps. Please ",
      "verify hotspot SOC provisioning."
    ],
    "relatedPlaybooks": [
      "slow-data"
    ],
    "sourceAliases": [
      "\"US Mobile Performance Support Matrix.pdf\""
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Hotspot usage pool bucket",
      "verification on the billing ledger (INTERNAL VERIFICATION REQUIRED)."
    ],
    "batch": "Batch 6",
    "aliases": [
      "\"hotspot speed limits\"",
      "\"tethering is slow\"",
      "\"hotspot",
      "stopped working\"",
      "\"dark star hotspot\"",
      "\"premium data used up\""
    ],
    "symptoms": [
      "\"hotspot speed limits\"",
      "\"tethering is slow\"",
      "\"hotspot",
      "stopped working\"",
      "\"dark star hotspot\"",
      "\"premium data used up\""
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "\"US Mobile Performance Support Matrix.pdf\""
  },
  {
    "id": "port-in-delays-wireless-vs-wireline-timelines",
    "title": "Port-In Delays & Wireless vs Wireline Timelines",
    "category": "port-in-out",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "port-in-out",
      "batch5"
    ],
    "keywords": [
      "port",
      "delays",
      "wireless",
      "wireline",
      "timelines",
      "port-in-out"
    ],
    "customerPhrases": [
      "port-in delay",
      "number stuck",
      "stuck number",
      "old carrier still works",
      "port pending",
      "transfer taking",
      "too long",
      "google voice port",
      "numberbarn port",
      "landline port",
      "voip port",
      "wireline port"
    ],
    "preview": {
      "problem": "Normal port processing / donor carrier delay / wireline or VoIP processing / LNP hold / pending",
      "firstQuestion": "Is the number coming from a wireless carrier, landline, Google Voice, NumberBarn, or",
      "firstAction": "Check the port status internally. INTERNAL VERIFICATION REQUIRED",
      "escalateIf": "Wireless port remains pending beyond expected window with no clear rejection."
    },
    "quickAnswer": "Normal port processing / donor carrier delay / wireline or VoIP processing / LNP hold / pending \nFOC / rejected port",
    "useWhen": "Use when customer reports: port-in delay, number stuck, stuck number, old carrier still works, port pending, transfer taking",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Is the number coming from a wireless carrier, landline, Google Voice, NumberBarn, or",
      "another VoIP provider?",
      "When did you submit the port request?",
      "Does your old SIM or old service still work?"
    ],
    "quickChecks": [
      "Check internal port status: pending, rejected, FOC/commit date, completed, or",
      "cancelled. INTERNAL VERIFICATION REQUIRED",
      "Confirm donor type: wireless, landline, VoIP, Google Voice, NumberBarn, cable provider,",
      "etc.",
      "Confirm the old account is still active.",
      "Confirm the customer has not cancelled the old service.",
      "Check whether the port has a rejection code or needs corrected info. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "quickSteps": [
      "Check internal port status: pending, rejected, FOC/commit date, completed, or",
      "cancelled. INTERNAL VERIFICATION REQUIRED",
      "Confirm donor type: wireless, landline, VoIP, Google Voice, NumberBarn, cable provider,",
      "etc.",
      "Confirm the old account is still active.",
      "Confirm the customer has not cancelled the old service.",
      "Check whether the port has a rejection code or needs corrected info. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "steps": [
      "Check the port status internally. INTERNAL VERIFICATION REQUIRED",
      "If status is rejected, move to the Port Rejections card.",
      "If status is pending and the donor is wireless, explain that wireless ports are usually",
      "faster but still depend on donor release and routing updates.",
      "If the donor is landline, VoIP, Google Voice, NumberBarn, or cable/voice provider,",
      "explain that these can take several business days.",
      "Tell the customer to keep the old service active until the transfer completes.",
      "If the old SIM still works, explain that the number has likely not fully moved yet.",
      "If the FOC/commit date has passed or the port is stuck without a clear rejection, escalate",
      "to porting/LNP. INTERNAL VERIFICATION REQUIRED",
      "If the customer is anxious about losing the number, reassure them that the safest action",
      "is keeping the old service active while the mismatch/delay is resolved."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "N/A"
      ],
      "android": [
        "N/A"
      ],
      "general": [
        "Check the port status internally. INTERNAL VERIFICATION REQUIRED",
        "If status is rejected, move to the Port Rejections card.",
        "If status is pending and the donor is wireless, explain that wireless ports are usually",
        "faster but still depend on donor release and routing updates.",
        "If the donor is landline, VoIP, Google Voice, NumberBarn, or cable/voice provider,",
        "explain that these can take several business days.",
        "Tell the customer to keep the old service active until the transfer completes.",
        "If the old SIM still works, explain that the number has likely not fully moved yet.",
        "If the FOC/commit date has passed or the port is stuck without a clear rejection, escalate",
        "to porting/LNP. INTERNAL VERIFICATION REQUIRED",
        "If the customer is anxious about losing the number, reassure them that the safest action",
        "is keeping the old service active while the mismatch/delay is resolved."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Your number is not something we want to risk, so the safest step is to keep your old service \nactive until the transfer fully completes. \nWireless transfers often move faster, while landline, Google Voice, NumberBarn, and other \nVoIP-style numbers can take several business days because they use a different transfer \nprocess. I’m going to check the port status now and see whether it is simply pending or if the old \ncarrier sent back a specific rejection."
      }
    ],
    "zendeskNote": "Issue: Port-in delay / stuck port \nDonor carrier: [Carrier] \nDonor type: [Wireless / Landline / VoIP / Google Voice / NumberBarn / Unknown] \nSubmitted: [Date/time] \nCurrent port status: [Pending / Rejected / FOC / Completed / Unknown] \nOld service active: [Yes/No] \nSymptoms: [Old SIM works / New SIM no service / partial service / no SMS] \nInternal checks: Port status, rejection code, FOC/commit date, donor response INTERNAL \nVERIFICATION REQUIRED \nCustomer guidance: Keep old service active, do not cancel donor account \nNext action: Monitor, correct rejection, or escalate LNP if stuck",
    "escalation": {
      "neededWhen": [
        "Wireless port remains pending beyond expected window with no clear rejection.",
        "FOC/commit date has passed but old service still controls the number.",
        "Donor says approved, but port status is not moving.",
        "Customer has partial/split service after port completion.",
        "Number-loss risk is suspected."
      ],
      "evidenceNeeded": [
        "Port dashboard status, FOC/commit date, donor response,",
        "rejection code, NPAC/LNP status."
      ],
      "summaryTemplate": "Port-in delay. Donor: [X]. Donor type: [wireless/wireline/VoIP]. Submitted: [date/time]. Status: [X]. \nFOC/commit date: [X]. Old service active: [Yes/No]. Credentials verified: [Yes/No]. Rejection \ncode: [none/X]. Customer advised not to cancel donor service. Requesting LNP/NPAC status \nreview. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Wireless port remains pending beyond expected window with no clear rejection.",
      "FOC/commit date has passed but old service still controls the number.",
      "Donor says approved, but port status is not moving.",
      "Customer has partial/split service after port completion.",
      "Number-loss risk is suspected."
    ],
    "escalationFormat": [
      "Port-in delay. Donor: [X]. Donor type: [wireless/wireline/VoIP]. Submitted: [date/time]. Status: [X]. ",
      "FOC/commit date: [X]. Old service active: [Yes/No]. Credentials verified: [Yes/No]. Rejection ",
      "code: [none/X]. Customer advised not to cancel donor service. Requesting LNP/NPAC status ",
      "review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "port-rejections-account-pin-zip-mismatch",
      "carrier-by-carrier-porting-rules",
      "customer-cannot-receive-2fa-bank-codes-after-port-or-teleport",
      "sos-only-no-service-triage",
      "no-service-sos-only"
    ],
    "sourceAliases": [
      "X5",
      "P4",
      "P7"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Port dashboard status, FOC/commit date, donor response,",
      "rejection code, NPAC/LNP status."
    ],
    "batch": "Batch 5",
    "aliases": [
      "port-in delay",
      "number stuck",
      "stuck number",
      "old carrier still works",
      "port pending",
      "transfer taking",
      "too long",
      "google voice port",
      "numberbarn port",
      "landline port",
      "voip port",
      "wireline port"
    ],
    "symptoms": [
      "port-in delay",
      "number stuck",
      "stuck number",
      "old carrier still works",
      "port pending",
      "transfer taking",
      "too long",
      "google voice port",
      "numberbarn port",
      "landline port",
      "voip port",
      "wireline port"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X5, P4, P7"
  },
  {
    "id": "port-rejections-account-pin-zip-mismatch",
    "title": "Port Rejections — Account / PIN / ZIP Mismatch",
    "category": "port-in-out",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "port-in-out",
      "batch5"
    ],
    "keywords": [
      "port",
      "rejections",
      "account",
      "pin",
      "zip",
      "mismatch",
      "port-in-out"
    ],
    "customerPhrases": [
      "port rejected",
      "invalid account number",
      "transfer pin mismatch",
      "zip mismatch",
      "account number",
      "mismatch",
      "old carrier rejected transfer",
      "invalid credentials",
      "port lock",
      "number lock",
      "port protection"
    ],
    "preview": {
      "problem": "LNP rejection / donor-carrier credential mismatch / port protection lock / fraud lock / inactive",
      "firstQuestion": "Did the old carrier give you a temporary transfer PIN, or did you use your normal",
      "firstAction": "Check the exact rejection code internally. INTERNAL VERIFICATION REQUIRED",
      "escalateIf": "Correct details verified from donor bill/app but rejection continues."
    },
    "quickAnswer": "LNP rejection / donor-carrier credential mismatch / port protection lock / fraud lock / inactive \ndonor account",
    "useWhen": "Use when customer reports: port rejected, invalid account number, transfer PIN mismatch, ZIP mismatch, account number",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Did the old carrier give you a temporary transfer PIN, or did you use your normal",
      "login/security PIN?",
      "Can you verify the account number and ZIP from the latest bill or donor-carrier app?",
      "Does the old carrier have Number Lock, Port Protection, or Account Takeover Protection",
      "enabled?"
    ],
    "quickChecks": [
      "Check exact rejection reason/code internally. INTERNAL VERIFICATION REQUIRED",
      "Identify which field was rejected: account, PIN, ZIP, name, lock, inactive account, etc.",
      "Confirm donor carrier and whether account is prepaid/postpaid/VoIP.",
      "Ask customer to verify details from official donor source, not memory.",
      "Resubmit only after corrected details are confirmed. INTERNAL VERIFICATION",
      "REQUIRED"
    ],
    "quickSteps": [
      "Check exact rejection reason/code internally. INTERNAL VERIFICATION REQUIRED",
      "Identify which field was rejected: account, PIN, ZIP, name, lock, inactive account, etc.",
      "Confirm donor carrier and whether account is prepaid/postpaid/VoIP.",
      "Ask customer to verify details from official donor source, not memory.",
      "Resubmit only after corrected details are confirmed. INTERNAL VERIFICATION",
      "REQUIRED"
    ],
    "steps": [
      "Check the exact rejection code internally. INTERNAL VERIFICATION REQUIRED",
      "Tell the customer which field needs correction, using safe wording.",
      "If PIN mismatch, explain that many carriers require a temporary transfer PIN, not the",
      "login PIN.",
      "If ZIP mismatch, ask customer to check the exact billing ZIP on their old account or bill.",
      "If account number mismatch, guide them to the donor-carrier method or carrier-specific",
      "card.",
      "If port lock/protection is active, ask customer to disable it with the donor carrier.",
      "Confirm old account is active.",
      "Resubmit the port with corrected details. INTERNAL VERIFICATION REQUIRED",
      "Escalate if donor verbally confirms info is correct but electronic rejection continues."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "N/A"
      ],
      "android": [
        "N/A"
      ],
      "general": [
        "Check the exact rejection code internally. INTERNAL VERIFICATION REQUIRED",
        "Tell the customer which field needs correction, using safe wording.",
        "If PIN mismatch, explain that many carriers require a temporary transfer PIN, not the",
        "login PIN.",
        "If ZIP mismatch, ask customer to check the exact billing ZIP on their old account or bill.",
        "If account number mismatch, guide them to the donor-carrier method or carrier-specific",
        "card.",
        "If port lock/protection is active, ask customer to disable it with the donor carrier.",
        "Confirm old account is active.",
        "Resubmit the port with corrected details. INTERNAL VERIFICATION REQUIRED",
        "Escalate if donor verbally confirms info is correct but electronic rejection continues."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Your previous carrier declined the transfer because one of the secure details did not exactly \nmatch their records. This is a protection step for your number. \nPlease check your old carrier’s latest bill or app for the exact account number and billing ZIP, \nand make sure you generated a transfer PIN if your old carrier requires one. Once we have the \ncorrected detail, we can resubmit the transfer."
      }
    ],
    "zendeskNote": "Issue: Port rejection \nDonor carrier: [Carrier] \nRejection type/code: [Account / PIN / ZIP / lock / inactive / other] \nCustomer-provided info verified from: [bill/app/support/unknown] \nOld account active: [Yes/No] \nPort protection disabled: [Yes/No/Unknown] \nInternal checks: Rejection code and resubmission status INTERNAL VERIFICATION \nREQUIRED \nAction: Customer asked for corrected [field], port resubmitted / pending correction \nNext action: Resubmit or escalate LNP if repeated rejection despite verified details",
    "escalation": {
      "neededWhen": [
        "Correct details verified from donor bill/app but rejection continues.",
        "Donor carrier confirms details verbally but rejects electronically.",
        "Rejection code is unclear or inconsistent.",
        "Customer is at risk of number loss or old account cancellation.",
        "Multiple resubmissions fail without clear reason."
      ],
      "evidenceNeeded": [
        "Exact rejection code, LSR status, resubmission, donor response,",
        "LNP portal data."
      ],
      "summaryTemplate": "Port rejected by donor. Donor: [X]. Rejection code: [X]. Field affected: \n[account/PIN/ZIP/lock/other]. Customer verified details from [bill/app/donor support]. Old \naccount active: [Yes/No]. Port protection disabled: [Yes/No]. Resubmissions: [X]. Requesting \nmanual LSR/LNP review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Correct details verified from donor bill/app but rejection continues.",
      "Donor carrier confirms details verbally but rejects electronically.",
      "Rejection code is unclear or inconsistent.",
      "Customer is at risk of number loss or old account cancellation.",
      "Multiple resubmissions fail without clear reason."
    ],
    "escalationFormat": [
      "Port rejected by donor. Donor: [X]. Rejection code: [X]. Field affected: ",
      "[account/PIN/ZIP/lock/other]. Customer verified details from [bill/app/donor support]. Old ",
      "account active: [Yes/No]. Port protection disabled: [Yes/No]. Resubmissions: [X]. Requesting ",
      "manual LSR/LNP review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "carrier-by-carrier-porting-rules",
      "port-in-delays-wireless-vs-wireline-timelines",
      "port-out-transfer-pin-security"
    ],
    "sourceAliases": [
      "X5",
      "X9",
      "P7"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Exact rejection code, LSR status, resubmission, donor response,",
      "LNP portal data."
    ],
    "batch": "Batch 5",
    "aliases": [
      "port rejected",
      "invalid account number",
      "transfer pin mismatch",
      "zip mismatch",
      "account number",
      "mismatch",
      "old carrier rejected transfer",
      "invalid credentials",
      "port lock",
      "number lock",
      "port protection"
    ],
    "symptoms": [
      "port rejected",
      "invalid account number",
      "transfer pin mismatch",
      "zip mismatch",
      "account number",
      "mismatch",
      "old carrier rejected transfer",
      "invalid credentials",
      "port lock",
      "number lock",
      "port protection"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X5, X9, P7"
  },
  {
    "id": "carrier-by-carrier-porting-rules",
    "title": "Carrier-by-Carrier Porting Rules",
    "category": "port-in-out",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "port-in-out",
      "batch5"
    ],
    "keywords": [
      "carrier",
      "porting",
      "rules",
      "port-in-out"
    ],
    "customerPhrases": [
      "how to get transfer pin",
      "account number for port",
      "at&t port",
      "verizon port",
      "t-mobile port",
      "metro",
      "port",
      "cricket port",
      "visible port",
      "straight talk port",
      "tracfone port",
      "google voice port",
      "numberbarn",
      "port"
    ],
    "preview": {
      "problem": "Donor-specific account number / transfer PIN / number lock / port protection /",
      "firstQuestion": "Which exact carrier are you porting from?",
      "firstAction": "Ask for exact donor carrier and account type.",
      "escalateIf": "Donor-carrier tools fail or refuse to generate required PIN."
    },
    "quickAnswer": "Donor-specific account number / transfer PIN / number lock / port protection / \nprepaid-vs-postpaid credential issue",
    "useWhen": "Use when customer reports: how to get transfer PIN, account number for port, AT&T port, Verizon port, T-Mobile port, Metro",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Which exact carrier are you porting from?",
      "Is it prepaid, postpaid, landline, VoIP, Google Voice, or NumberBarn?",
      "Do you have access to the old carrier’s app/account and old SIM?"
    ],
    "quickChecks": [
      "Identify donor carrier precisely.",
      "Confirm prepaid vs postpaid.",
      "Confirm whether the donor requires a temporary transfer PIN.",
      "Confirm whether number lock/port protection must be disabled.",
      "Confirm old service remains active.",
      "Common carrier guidance — use as support guide, verify when possible:",
      "AT&T postpaid: often uses a generated Number Transfer PIN through AT&T’s official",
      "method, such as app/account flow or dialing the supported code from the AT&T device.",
      "AT&T prepaid: may use the account/security PIN rather than a temporary transfer PIN.",
      "Verify with donor.",
      "Verizon postpaid: often uses a generated Number Transfer PIN and number lock may",
      "need disabling.",
      "T-Mobile postpaid: may require a transfer PIN and account takeover/port protection",
      "controls disabled.",
      "Metro by T-Mobile: may use an account/security PIN rather than a temporary",
      "postpaid-style transfer PIN.",
      "Tracfone / Straight Talk / brands under Tracfone: may use special NTP/account",
      "retrieval flows; some accounts use IMEI or account-specific identifiers. Verify carefully.",
      "Google Voice: must usually be unlocked for port-out before submission.",
      "NumberBarn / VoIP / landline: expect longer processing and wireline-style timeline."
    ],
    "quickSteps": [
      "Identify donor carrier precisely.",
      "Confirm prepaid vs postpaid.",
      "Confirm whether the donor requires a temporary transfer PIN.",
      "Confirm whether number lock/port protection must be disabled.",
      "Confirm old service remains active.",
      "Common carrier guidance — use as support guide, verify when possible:",
      "AT&T postpaid: often uses a generated Number Transfer PIN through AT&T’s official",
      "method, such as app/account flow or dialing the supported code from the AT&T device.",
      "AT&T prepaid: may use the account/security PIN rather than a temporary transfer PIN.",
      "Verify with donor.",
      "Verizon postpaid: often uses a generated Number Transfer PIN and number lock may",
      "need disabling.",
      "T-Mobile postpaid: may require a transfer PIN and account takeover/port protection",
      "controls disabled.",
      "Metro by T-Mobile: may use an account/security PIN rather than a temporary",
      "postpaid-style transfer PIN.",
      "Tracfone / Straight Talk / brands under Tracfone: may use special NTP/account",
      "retrieval flows; some accounts use IMEI or account-specific identifiers. Verify carefully.",
      "Google Voice: must usually be unlocked for port-out before submission.",
      "NumberBarn / VoIP / landline: expect longer processing and wireline-style timeline."
    ],
    "steps": [
      "Ask for exact donor carrier and account type.",
      "Pull the correct donor-specific credential guidance.",
      "Tell customer where to get account number and transfer PIN from the donor’s official",
      "app/site/dial code/support.",
      "Confirm any number lock/port protection is disabled.",
      "Confirm donor account remains active.",
      "Submit port only after details are verified. INTERNAL VERIFICATION REQUIRED",
      "If donor tool is failing or refusing credentials, document and escalate if the port is already",
      "pending/rejected. INTERNAL VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "N/A"
      ],
      "android": [
        "N/A"
      ],
      "general": [
        "Ask for exact donor carrier and account type.",
        "Pull the correct donor-specific credential guidance.",
        "Tell customer where to get account number and transfer PIN from the donor’s official",
        "app/site/dial code/support.",
        "Confirm any number lock/port protection is disabled.",
        "Confirm donor account remains active.",
        "Submit port only after details are verified. INTERNAL VERIFICATION REQUIRED",
        "If donor tool is failing or refusing credentials, document and escalate if the port is already",
        "pending/rejected. INTERNAL VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Each carrier has a different secure method for releasing a number. To avoid a rejection, I want \nto match the exact process for your old carrier. \nWhich carrier are you porting from, and is it prepaid or postpaid? Once I know that, I’ll tell you \nexactly where to get the account number and transfer PIN, and whether any number lock needs \nto be turned off first."
      }
    ],
    "zendeskNote": "Issue: Donor carrier port credential guidance \nDonor carrier: [Carrier] \nAccount type: [Prepaid / Postpaid / VoIP / Landline / Unknown] \nGuidance given: [Account number / transfer PIN / number lock / app path] \nOld account active: [Yes/No/Unknown] \nNext action: Awaiting customer credentials / port submitted \nInternal checks if submitted: Port status/rejection INTERNAL VERIFICATION REQUIRED",
    "escalation": {
      "neededWhen": [
        "Donor-carrier tools fail or refuse to generate required PIN.",
        "Customer followed donor-specific steps but port rejects repeatedly.",
        "Donor support confirms credentials but LNP rejects electronically.",
        "Customer is locked out of donor account and port deadline/risk exists."
      ],
      "evidenceNeeded": [
        "Current donor-specific process if uncertain, submitted port status,",
        "rejection codes, LNP escalation."
      ],
      "summaryTemplate": "Carrier-specific credential issue. Donor: [X]. Account type: [X]. Customer followed donor \nretrieval steps: [Yes/No]. Port lock status: [X]. Credentials submitted: [X]. Rejection/status: [X]. \nRequesting LNP review or manual guidance. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Donor-carrier tools fail or refuse to generate required PIN.",
      "Customer followed donor-specific steps but port rejects repeatedly.",
      "Donor support confirms credentials but LNP rejects electronically.",
      "Customer is locked out of donor account and port deadline/risk exists."
    ],
    "escalationFormat": [
      "Carrier-specific credential issue. Donor: [X]. Account type: [X]. Customer followed donor ",
      "retrieval steps: [Yes/No]. Port lock status: [X]. Credentials submitted: [X]. Rejection/status: [X]. ",
      "Requesting LNP review or manual guidance. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "port-rejections-account-pin-zip-mismatch",
      "port-in-delays-wireless-vs-wireline-timelines",
      "customer-cannot-receive-2fa-bank-codes-after-port-or-teleport"
    ],
    "sourceAliases": [
      "X5"
    ],
    "confidence": "Medium-High because donor processes can change",
    "internalVerificationRequired": [
      "Current donor-specific process if uncertain, submitted port status,",
      "rejection codes, LNP escalation."
    ],
    "batch": "Batch 5",
    "aliases": [
      "how to get transfer pin",
      "account number for port",
      "at&t port",
      "verizon port",
      "t-mobile port",
      "metro",
      "port",
      "cricket port",
      "visible port",
      "straight talk port",
      "tracfone port",
      "google voice port",
      "numberbarn",
      "port"
    ],
    "symptoms": [
      "how to get transfer pin",
      "account number for port",
      "at&t port",
      "verizon port",
      "t-mobile port",
      "metro",
      "port",
      "cricket port",
      "visible port",
      "straight talk port",
      "tracfone port",
      "google voice port",
      "numberbarn",
      "port"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X5"
  },
  {
    "id": "port-out-process-transfer-pin-security",
    "title": "Port-Out Process & Transfer PIN Security",
    "category": "port-in-out",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "port-in-out",
      "batch5"
    ],
    "keywords": [
      "port",
      "out",
      "process",
      "transfer",
      "pin",
      "security",
      "port-in-out"
    ],
    "customerPhrases": [
      "port out",
      "transfer pin",
      "account number",
      "leaving us mobile",
      "port-out info",
      "number transfer pin",
      "how do i transfer out",
      "cancel and keep number",
      "number-loss anxiety"
    ],
    "preview": {
      "problem": "Port-out request / transfer PIN generation / identity verification / fraud prevention / churn",
      "firstQuestion": "Are you trying to move your number to another carrier, or just pause/park it temporarily?",
      "firstAction": "Acknowledge request without blocking or arguing.",
      "escalateIf": "Customer fails verification but demands transfer PIN."
    },
    "quickAnswer": "Port-out request / transfer PIN generation / identity verification / fraud prevention / churn \nretention",
    "useWhen": "Use when customer reports: port out, transfer PIN, account number, leaving US Mobile, port-out info, number transfer PIN,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are you trying to move your number to another carrier, or just pause/park it temporarily?",
      "Do you have access to the account email/verification method?",
      "Are you the account holder or authorized user?"
    ],
    "quickChecks": [
      "Verify customer identity using approved security flow. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm account/line status and number eligibility. INTERNAL VERIFICATION",
      "REQUIRED",
      "Guide customer to account number location if self-service exists.",
      "Generate/provide transfer PIN only after successful verification. INTERNAL",
      "VERIFICATION REQUIRED",
      "Warn customer not to cancel the line manually before port completion."
    ],
    "quickSteps": [
      "Verify customer identity using approved security flow. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm account/line status and number eligibility. INTERNAL VERIFICATION",
      "REQUIRED",
      "Guide customer to account number location if self-service exists.",
      "Generate/provide transfer PIN only after successful verification. INTERNAL",
      "VERIFICATION REQUIRED",
      "Warn customer not to cancel the line manually before port completion."
    ],
    "steps": [
      "Acknowledge request without blocking or arguing.",
      "Ask if they are moving carriers or just trying to preserve the number temporarily.",
      "If they want to preserve number, mention a pause/snooze/parking option only if current",
      "policy supports it. INTERNAL VERIFICATION REQUIRED",
      "Verify identity through approved method. INTERNAL VERIFICATION REQUIRED",
      "Provide account number path or account number if support must provide it. INTERNAL",
      "VERIFICATION REQUIRED",
      "Generate/provide transfer PIN only after verification. INTERNAL VERIFICATION",
      "REQUIRED",
      "Tell customer to keep US Mobile line active until the new carrier completes the port.",
      "Explain billing/cycle impact safely: “I’ll check how this affects the current cycle,” not “no",
      "refund” unless policy/account confirms.",
      "Document churn reason if appropriate."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "N/A"
      ],
      "android": [
        "N/A"
      ],
      "general": [
        "Acknowledge request without blocking or arguing.",
        "Ask if they are moving carriers or just trying to preserve the number temporarily.",
        "If they want to preserve number, mention a pause/snooze/parking option only if current",
        "policy supports it. INTERNAL VERIFICATION REQUIRED",
        "Verify identity through approved method. INTERNAL VERIFICATION REQUIRED",
        "Provide account number path or account number if support must provide it. INTERNAL",
        "VERIFICATION REQUIRED",
        "Generate/provide transfer PIN only after verification. INTERNAL VERIFICATION",
        "REQUIRED",
        "Tell customer to keep US Mobile line active until the new carrier completes the port.",
        "Explain billing/cycle impact safely: “I’ll check how this affects the current cycle,” not “no",
        "refund” unless policy/account confirms.",
        "Document churn reason if appropriate."
      ]
    },
    "copyTemplates": [
      {
        "label": "Number retention option",
        "text": "If your goal is only to keep the number safe rather than move it to another carrier, I can check \nwhether a pause or number-hold option is available on this line before you port out."
      }
    ],
    "zendeskNote": "Issue: Port-out request / transfer PIN \nLine: [masked phone/line reference] \nRequester: [Account holder / authorized / unknown] \nVerification: [Completed / failed / pending] INTERNAL VERIFICATION REQUIRED \nAction: Provided account number path / generated transfer PIN / advised not to cancel line \nmanually \nCustomer intent: [Leaving / temporary parking / unresolved issue / unknown] \nBilling/policy note: Remaining-cycle/refund impact needs account/policy verification \nNext action: Pending customer port-out / retention option review / security escalation if \nverification fails",
    "escalation": {
      "neededWhen": [
        "Customer fails verification but demands transfer PIN.",
        "Fraud/ATO risk indicators appear.",
        "Customer reports unauthorized port-out or SIM swap.",
        "Account ownership is disputed.",
        "Support tools block PIN generation despite successful verification."
      ],
      "evidenceNeeded": [
        "Identity verification, account number path, transfer PIN generation,",
        "port-out eligibility, billing/cycle impact, pause/snooze availability."
      ],
      "summaryTemplate": "Port-out/security request. Requester verification: [passed/failed/pending]. Account role: [X]. \nAction requested: transfer PIN/account number. Risk indicators: [none/hostile/ATO \nconcern/ownership dispute]. PIN provided: [Yes/No]. Requesting security/manual verification \nreview. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Customer fails verification but demands transfer PIN.",
      "Fraud/ATO risk indicators appear.",
      "Customer reports unauthorized port-out or SIM swap.",
      "Account ownership is disputed.",
      "Support tools block PIN generation despite successful verification."
    ],
    "escalationFormat": [
      "Port-out/security request. Requester verification: [passed/failed/pending]. Account role: [X]. ",
      "Action requested: transfer PIN/account number. Risk indicators: [none/hostile/ATO ",
      "concern/ownership dispute]. PIN provided: [Yes/No]. Requesting security/manual verification ",
      "review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "sim-swap-fraud-concerns",
      "port-in-delays-wireless-vs-wireline-timelines",
      "account-securityfraud",
      "customer-cannot-receive-2fa-bank-codes-after-port-or-teleport",
      "customer-cannot-receive-2fa-bank-codes-after-port-or-teleport"
    ],
    "sourceAliases": [
      "X5",
      "P3",
      "X7"
    ],
    "confidence": "High for process logic; exact policy/tool path requires verification",
    "internalVerificationRequired": [
      "Identity verification, account number path, transfer PIN generation,",
      "port-out eligibility, billing/cycle impact, pause/snooze availability."
    ],
    "batch": "Batch 5",
    "aliases": [
      "port out",
      "transfer pin",
      "account number",
      "leaving us mobile",
      "port-out info",
      "number transfer pin",
      "how do i transfer out",
      "cancel and keep number",
      "number-loss anxiety"
    ],
    "symptoms": [
      "port out",
      "transfer pin",
      "account number",
      "leaving us mobile",
      "port-out info",
      "number transfer pin",
      "how do i transfer out",
      "cancel and keep number",
      "number-loss anxiety"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X5, P3, X7"
  },
  {
    "id": "sim-swap-fraud-concerns",
    "title": "SIM Swap & Fraud Concerns",
    "category": "start-here",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "start-here",
      "batch5"
    ],
    "keywords": [
      "sim",
      "swap",
      "fraud",
      "concerns",
      "start-here"
    ],
    "customerPhrases": [
      "sim swap",
      "number stolen",
      "unauthorized transfer",
      "someone ported my number",
      "account",
      "takeover",
      "sudden no service",
      "fraud",
      "unauthorized esim",
      "unauthorized sim change",
      "can’t receive",
      "bank codes"
    ],
    "preview": {
      "problem": "Suspected account takeover / unauthorized SIM change / unauthorized port-out / SIM-swap",
      "firstQuestion": "Did you suddenly lose service without making any changes?",
      "firstAction": "Acknowledge urgency and reduce questions to essentials.",
      "escalateIf": "Any confirmed or suspected unauthorized SIM/eSIM change."
    },
    "quickAnswer": "Suspected account takeover / unauthorized SIM change / unauthorized port-out / SIM-swap \nfraud / account security breach",
    "useWhen": "Use when customer reports: SIM swap, number stolen, unauthorized transfer, someone ported my number, account",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Did you suddenly lose service without making any changes?",
      "Did you receive any email, app notification, or code about a SIM change, eSIM, port-out,",
      "or transfer PIN that you did not request?",
      "Can you still access the registered email on the account securely?"
    ],
    "quickChecks": [
      "Treat as urgent security case.",
      "Check recent SIM/eSIM changes, port-out requests, login changes, and password",
      "resets. INTERNAL VERIFICATION REQUIRED",
      "Do not rely on SMS verification if the SIM/number may be compromised.",
      "Use approved alternate verification, such as registered email/manual verification.",
      "INTERNAL VERIFICATION REQUIRED",
      "Escalate to security/fraud immediately if unauthorized activity is suspected. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "quickSteps": [
      "Treat as urgent security case.",
      "Check recent SIM/eSIM changes, port-out requests, login changes, and password",
      "resets. INTERNAL VERIFICATION REQUIRED",
      "Do not rely on SMS verification if the SIM/number may be compromised.",
      "Use approved alternate verification, such as registered email/manual verification.",
      "INTERNAL VERIFICATION REQUIRED",
      "Escalate to security/fraud immediately if unauthorized activity is suspected. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "steps": [
      "Acknowledge urgency and reduce questions to essentials.",
      "Ask whether service was lost suddenly or account-change alerts were received.",
      "Check account logs for recent SIM/eSIM/port/login/security changes. INTERNAL",
      "VERIFICATION REQUIRED",
      "Initiate approved account protection workflow: freeze/hold SIM changes, port-out, or",
      "sensitive actions if tools/policy allow. INTERNAL VERIFICATION REQUIRED",
      "Verify identity through a non-SMS method if number compromise is possible. INTERNAL",
      "VERIFICATION REQUIRED",
      "If unauthorized change is confirmed or strongly suspected, escalate to Security/Fraud",
      "immediately.",
      "Advise customer to secure email, banking, and important accounts using non-SMS",
      "recovery where possible.",
      "Document exact timestamps, alerts, symptoms, and customer impact.",
      "Do not disclose sensitive account details to an unverified requester.",
      "Do not promise reversal or recovery until Security/Fraud verifies."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "N/A"
      ],
      "android": [
        "N/A"
      ],
      "general": [
        "Acknowledge urgency and reduce questions to essentials.",
        "Ask whether service was lost suddenly or account-change alerts were received.",
        "Check account logs for recent SIM/eSIM/port/login/security changes. INTERNAL",
        "VERIFICATION REQUIRED",
        "Initiate approved account protection workflow: freeze/hold SIM changes, port-out, or",
        "sensitive actions if tools/policy allow. INTERNAL VERIFICATION REQUIRED",
        "Verify identity through a non-SMS method if number compromise is possible. INTERNAL",
        "VERIFICATION REQUIRED",
        "If unauthorized change is confirmed or strongly suspected, escalate to Security/Fraud",
        "immediately.",
        "Advise customer to secure email, banking, and important accounts using non-SMS",
        "recovery where possible.",
        "Document exact timestamps, alerts, symptoms, and customer impact.",
        "Do not disclose sensitive account details to an unverified requester.",
        "Do not promise reversal or recovery until Security/Fraud verifies."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "I’m treating this as urgent because sudden service loss plus unauthorized account activity can \nbe a security issue. I’m going to check for any recent SIM, eSIM, or port-out activity and move \nthis through the security review path. \nFor safety, please secure your email and financial accounts right away, and avoid relying on \nSMS codes until we confirm your number is protected."
      }
    ],
    "zendeskNote": "Issue: Suspected SIM swap / unauthorized account action",
    "escalation": {
      "neededWhen": [
        "Any confirmed or suspected unauthorized SIM/eSIM change.",
        "Any unauthorized port-out attempt.",
        "Customer suddenly lost service and cannot receive 2FA.",
        "Account credentials or email appear compromised.",
        "Customer cannot pass normal verification but security risk is credible."
      ],
      "evidenceNeeded": [
        "Account logs, SIM/eSIM changes, port-out logs, account",
        "freeze/hold tools, manual verification, fraud escalation."
      ],
      "summaryTemplate": "SUSPECTED FRAUD / SIM SWAP / ATO. Customer reports [X]. Recent unauthorized activity: \n[SIM/eSIM/port/login/email alert]. Service state: [No service/active/unknown]. Verification: \n[non-SMS completed/pending/failed]. Account protection requested/applied: [X]. Customer \nimpact: [2FA/banking/etc.]. Requesting immediate Security/Fraud review. INTERNAL \nVERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Any confirmed or suspected unauthorized SIM/eSIM change.",
      "Any unauthorized port-out attempt.",
      "Customer suddenly lost service and cannot receive 2FA.",
      "Account credentials or email appear compromised.",
      "Customer cannot pass normal verification but security risk is credible."
    ],
    "escalationFormat": [
      "SUSPECTED FRAUD / SIM SWAP / ATO. Customer reports [X]. Recent unauthorized activity: ",
      "[SIM/eSIM/port/login/email alert]. Service state: [No service/active/unknown]. Verification: ",
      "[non-SMS completed/pending/failed]. Account protection requested/applied: [X]. Customer ",
      "impact: [2FA/banking/etc.]. Requesting immediate Security/Fraud review. INTERNAL ",
      "VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "port-out-transfer-pin-security",
      "customer-cannot-receive-2fa-bank-codes-after-port-or-teleport",
      "account-securityfraud",
      "no-service-sos-only",
      "sos-only-no-service-triage"
    ],
    "sourceAliases": [
      "X5",
      "X10",
      "P7",
      "P5"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Account logs, SIM/eSIM changes, port-out logs, account",
      "freeze/hold tools, manual verification, fraud escalation."
    ],
    "batch": "Batch 5",
    "aliases": [
      "sim swap",
      "number stolen",
      "unauthorized transfer",
      "someone ported my number",
      "account",
      "takeover",
      "sudden no service",
      "fraud",
      "unauthorized esim",
      "unauthorized sim change",
      "can’t receive",
      "bank codes"
    ],
    "symptoms": [
      "sim swap",
      "number stolen",
      "unauthorized transfer",
      "someone ported my number",
      "account",
      "takeover",
      "sudden no service",
      "fraud",
      "unauthorized esim",
      "unauthorized sim change",
      "can’t receive",
      "bank codes"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X5, X10, P7, P5"
  },
  {
    "id": "customer-cannot-receive-2fa-bank-codes-after-port-or-teleport",
    "title": "Customer Cannot Receive 2FA / Bank Codes After Port or Teleport",
    "category": "port-in-out",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "port-in-out",
      "batch5"
    ],
    "keywords": [
      "customer",
      "cannot",
      "receive",
      "2fa",
      "bank",
      "codes",
      "after",
      "port",
      "teleport",
      "port-in-out"
    ],
    "customerPhrases": [
      "customer cannot receive 2fa",
      "bank otp not received",
      "short code not received",
      "delayed",
      "inbound texts",
      "verification codes not coming",
      "can’t get login code",
      "codes stopped after port",
      "codes stopped after teleport"
    ],
    "preview": {
      "problem": "A2P/short-code routing delay / post-port aggregator sync / premium SMS block / split routing /",
      "firstQuestion": "Can you receive normal texts from friends/family?",
      "firstAction": "Test regular SMS with a known contact.",
      "escalateIf": "Standard SMS works but all short codes fail beyond 72 hours after port/Teleport."
    },
    "quickAnswer": "A2P/short-code routing delay / post-port aggregator sync / premium SMS block / split routing / \nsender-specific issue / fraud-security delay",
    "useWhen": "Use when customer reports: customer cannot receive 2FA, bank OTP not received, short code not received, delayed",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Can you receive normal texts from friends/family?",
      "Did you port or switch networks within the last 72 hours?",
      "Is this one bank/app or every verification code?"
    ],
    "quickChecks": [
      "Confirm normal SMS works inbound and outbound.",
      "Check port completion or Teleport timestamp. INTERNAL VERIFICATION REQUIRED",
      "Check for short-code/premium SMS blocks if available. INTERNAL VERIFICATION",
      "REQUIRED",
      "Ask customer to text",
      "HELP",
      "to the short code if supported.",
      "Test another OTP provider to isolate one sender vs all senders."
    ],
    "quickSteps": [
      "Confirm normal SMS works inbound and outbound.",
      "Check port completion or Teleport timestamp. INTERNAL VERIFICATION REQUIRED",
      "Check for short-code/premium SMS blocks if available. INTERNAL VERIFICATION",
      "REQUIRED",
      "Ask customer to text",
      "HELP",
      "to the short code if supported.",
      "Test another OTP provider to isolate one sender vs all senders."
    ],
    "steps": [
      "Test regular SMS with a known contact.",
      "If standard SMS fails, use SMS/porting troubleshooting first.",
      "Confirm whether port/Teleport happened within 72 hours.",
      "If recent and standard SMS works, explain that bank/short-code routes can lag behind",
      "normal texting.",
      "Ask customer to text",
      "HELP",
      "to the bank’s short code if supported.",
      "Ask them to request a new code after the HELP test.",
      "Check spam/blocked folders and device filters.",
      "If all short codes fail, check account-side block/routing state. INTERNAL VERIFICATION",
      "REQUIRED",
      "If one bank fails, document bank/short code and advise alternate verification temporarily",
      "if available.",
      "Escalate if standard SMS works and OTPs still fail beyond 72 hours after port/Teleport."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Check Messages filtering/Unknown Senders.",
        "Confirm Focus/DND is not hiding notifications.",
        "Test carrier SMS outside iMessage.",
        "If recently ported, do not troubleshoot only iMessage."
      ],
      "android": [
        "Check Spam & blocked folder in Google Messages.",
        "Confirm Google Messages is default SMS app.",
        "Turn RCS off temporarily for testing.",
        "Check blocked numbers and app notifications."
      ],
      "general": [
        "Test regular SMS with a known contact.",
        "If standard SMS fails, use SMS/porting troubleshooting first.",
        "Confirm whether port/Teleport happened within 72 hours.",
        "If recent and standard SMS works, explain that bank/short-code routes can lag behind",
        "normal texting.",
        "Ask customer to text",
        "HELP",
        "to the bank’s short code if supported.",
        "Ask them to request a new code after the HELP test.",
        "Check spam/blocked folders and device filters.",
        "If all short codes fail, check account-side block/routing state. INTERNAL VERIFICATION",
        "REQUIRED",
        "If one bank fails, document bank/short code and advise alternate verification temporarily",
        "if available.",
        "Escalate if standard SMS works and OTPs still fail beyond 72 hours after port/Teleport."
      ]
    },
    "copyTemplates": [
      {
        "label": "Safe expectation",
        "text": "If your number moved recently, bank-code routing can take up to 24–72 hours to fully update \nwith third-party verification providers. I know that’s inconvenient, so I’ll still document the sender \nand check for any account-side block while you use email/app verification where available."
      }
    ],
    "zendeskNote": "Issue: 2FA / bank OTP / short-code failure after port or Teleport \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nDevice/OS: [Device + OS] \nTrigger: [Port / Teleport / New activation / Sudden] \nPort/Teleport timestamp: [X] \nStandard SMS: [Works/Fails] \nAffected sender/short code: [X] \nScope: [One sender / all OTPs / unknown] \nSteps tried: HELP to short code, P2P SMS test, spam folder checked, RCS/iMessage isolated \nInternal checks: Port status, short-code block, SMS feature/routing INTERNAL VERIFICATION \nREQUIRED \nSuspected cause: A2P aggregator delay, sender-specific cache, split routing, or SMS block \nNext action: Monitor within expected window or escalate SMS trace if persistent",
    "escalation": {
      "neededWhen": [
        "Standard SMS works but all short codes fail beyond 72 hours after port/Teleport.",
        "One critical sender fails beyond 72 hours and HELP test fails.",
        "Standard inbound SMS fails after port completion.",
        "Split-routing symptoms appear.",
        "Customer is locked out of critical accounts and needs urgent review."
      ],
      "evidenceNeeded": [
        "Port/Teleport timestamp, SMS feature status, short-code block,",
        "premium SMS state, SMSC/A2P routing trace.",
        "Batch 5 Agent Import Notes",
        "Create these as separate cards",
        "Port-In Delays & Wireless vs Wireline Timelines",
        "Port Rejections — Account / PIN / ZIP Mismatch",
        "Carrier-by-Carrier Porting Rules",
        "Port-Out Process & Transfer PIN Security",
        "SIM Swap & Fraud Concerns",
        "Customer Cannot Receive 2FA / Bank Codes After Port or Teleport",
        "Suggested category mapping",
        "Port-In / Port-Out",
        "Port-In Delays & Wireless vs Wireline Timelines",
        "Port Rejections — Account / PIN / ZIP Mismatch",
        "Carrier-by-Carrier Porting Rules",
        "Port-Out Process & Transfer PIN Security",
        "Security / Fraud",
        "SIM Swap & Fraud Concerns",
        "Port-Out Process & Transfer PIN Security",
        "Messaging / Calls / Voicemail",
        "Customer Cannot Receive 2FA / Bank Codes After Port or Teleport",
        "Suggested pinned/common cards from Batch 5",
        "Port Rejections — Account / PIN / ZIP Mismatch",
        "Port-In Delays & Wireless vs Wireline Timelines",
        "Customer Cannot Receive 2FA / Bank Codes After Port or Teleport",
        "Port-Out Process & Transfer PIN Security",
        "SIM Swap & Fraud Concerns",
        "UI rule",
        "Show short preview first:",
        "Problem",
        "First question",
        "First action",
        "Escalate if",
        "Then full card opens with:",
        "Ask customer first",
        "Quick checks",
        "Step-by-step troubleshooting",
        "iPhone steps",
        "Android steps",
        "Copy-ready reply",
        "Zendesk note",
        "Escalation summary",
        "Related playbooks",
        "Source aliases",
        "Confidence",
        "Needs internal verification",
        "Merge notes for later",
        "Batch 1 has a “Porting & Bank Code Delays” triage card.",
        "Batch 4 has a “Bank OTP, Short Codes & Delayed Inbound Texts” deeper messaging",
        "card.",
        "Batch 5 has the porting/security version.",
        "Final site should not show three confusing OTP cards. Use:",
        "One main Bank OTP / Short Codes card under Messaging",
        "One linked Post-Port OTP Delay section under Porting",
        "One Fraud/SIM Swap card under Security",
        "Safety rule for agent",
        "For port-out, SIM swap, transfer PIN, unauthorized changes, 2FA lockout, and fraud cases:",
        "Never expose account details before verification.",
        "Never use SMS verification if the number may be compromised.",
        "Never promise recovery/reversal until Security/Fraud verifies.",
        "Always mark as INTERNAL VERIFICATION REQUIRED."
      ],
      "summaryTemplate": "2FA/OTP issue. Network: [X]. Trigger: [port/Teleport/sudden]. Port/Teleport completed: \n[date/time]. Standard SMS: [works/fails]. Sender/short code: [X]. Scope: [one/all]. HELP test: \n[result]. Blocks checked: [X]. Requesting SMSC/A2P/short-code routing trace and block review. \nINTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Standard SMS works but all short codes fail beyond 72 hours after port/Teleport.",
      "One critical sender fails beyond 72 hours and HELP test fails.",
      "Standard inbound SMS fails after port completion.",
      "Split-routing symptoms appear.",
      "Customer is locked out of critical accounts and needs urgent review."
    ],
    "escalationFormat": [
      "2FA/OTP issue. Network: [X]. Trigger: [port/Teleport/sudden]. Port/Teleport completed: ",
      "[date/time]. Standard SMS: [works/fails]. Sender/short code: [X]. Scope: [one/all]. HELP test: ",
      "[result]. Blocks checked: [X]. Requesting SMSC/A2P/short-code routing trace and block review. ",
      "INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "bank-otp-short-codes",
      "port-in-delays-wireless-vs-wireline-timelines",
      "smsmms-triage",
      "sim-swap-fraud-concerns"
    ],
    "sourceAliases": [
      "X5",
      "X4",
      "P5",
      "P7"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Port/Teleport timestamp, SMS feature status, short-code block,",
      "premium SMS state, SMSC/A2P routing trace.",
      "Batch 5 Agent Import Notes",
      "Create these as separate cards",
      "Port-In Delays & Wireless vs Wireline Timelines",
      "Port Rejections — Account / PIN / ZIP Mismatch",
      "Carrier-by-Carrier Porting Rules",
      "Port-Out Process & Transfer PIN Security",
      "SIM Swap & Fraud Concerns",
      "Customer Cannot Receive 2FA / Bank Codes After Port or Teleport",
      "Suggested category mapping",
      "Port-In / Port-Out",
      "Port-In Delays & Wireless vs Wireline Timelines",
      "Port Rejections — Account / PIN / ZIP Mismatch",
      "Carrier-by-Carrier Porting Rules",
      "Port-Out Process & Transfer PIN Security",
      "Security / Fraud",
      "SIM Swap & Fraud Concerns",
      "Port-Out Process & Transfer PIN Security",
      "Messaging / Calls / Voicemail",
      "Customer Cannot Receive 2FA / Bank Codes After Port or Teleport",
      "Suggested pinned/common cards from Batch 5",
      "Port Rejections — Account / PIN / ZIP Mismatch",
      "Port-In Delays & Wireless vs Wireline Timelines",
      "Customer Cannot Receive 2FA / Bank Codes After Port or Teleport",
      "Port-Out Process & Transfer PIN Security",
      "SIM Swap & Fraud Concerns",
      "UI rule",
      "Show short preview first:",
      "Problem",
      "First question",
      "First action",
      "Escalate if",
      "Then full card opens with:",
      "Ask customer first",
      "Quick checks",
      "Step-by-step troubleshooting",
      "iPhone steps",
      "Android steps",
      "Copy-ready reply",
      "Zendesk note",
      "Escalation summary",
      "Related playbooks",
      "Source aliases",
      "Confidence",
      "Needs internal verification",
      "Merge notes for later",
      "Batch 1 has a “Porting & Bank Code Delays” triage card.",
      "Batch 4 has a “Bank OTP, Short Codes & Delayed Inbound Texts” deeper messaging",
      "card.",
      "Batch 5 has the porting/security version.",
      "Final site should not show three confusing OTP cards. Use:",
      "One main Bank OTP / Short Codes card under Messaging",
      "One linked Post-Port OTP Delay section under Porting",
      "One Fraud/SIM Swap card under Security",
      "Safety rule for agent",
      "For port-out, SIM swap, transfer PIN, unauthorized changes, 2FA lockout, and fraud cases:",
      "Never expose account details before verification.",
      "Never use SMS verification if the number may be compromised.",
      "Never promise recovery/reversal until Security/Fraud verifies.",
      "Always mark as INTERNAL VERIFICATION REQUIRED."
    ],
    "batch": "Batch 5",
    "aliases": [
      "customer cannot receive 2fa",
      "bank otp not received",
      "short code not received",
      "delayed",
      "inbound texts",
      "verification codes not coming",
      "can’t get login code",
      "codes stopped after port",
      "codes stopped after teleport"
    ],
    "symptoms": [
      "customer cannot receive 2fa",
      "bank otp not received",
      "short code not received",
      "delayed",
      "inbound texts",
      "verification codes not coming",
      "can’t get login code",
      "codes stopped after port",
      "codes stopped after teleport"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X5, X4, P5, P7"
  },
  {
    "id": "iphone-compatibility-esim-dual-sim-triage",
    "title": "iPhone Compatibility, eSIM & Dual SIM Triage",
    "category": "devices-watches",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "devices-watches",
      "batch7"
    ],
    "keywords": [
      "iphone",
      "compatibility",
      "esim",
      "dual",
      "sim",
      "triage",
      "devices-watches"
    ],
    "customerPhrases": [
      "iphone compatibility",
      "iphone esim",
      "iphone dual sim",
      "us iphone no sim tray",
      "international",
      "iphone",
      "sim not supported",
      "no sim restrictions",
      "quick transfer",
      "cellular data wrong line",
      "esim",
      "transfer"
    ],
    "preview": {
      "problem": "Carrier lock / eSIM-only device / wrong data line selected / dual-SIM routing issue / Quick",
      "firstQuestion": "What exact iPhone model do you have, and was it purchased in the U.S. or",
      "firstAction": "Confirm exact iPhone model and region.",
      "escalateIf": "iPhone says “No SIM restrictions” but still shows carrier-lock/SIM-not-supported error."
    },
    "quickAnswer": "Carrier lock / eSIM-only device / wrong data line selected / dual-SIM routing issue / Quick \nTransfer limitation / EID or IMEI mismatch",
    "useWhen": "Use when customer reports: iPhone compatibility, iPhone eSIM, iPhone dual SIM, US iPhone no SIM tray, international",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "What exact iPhone model do you have, and was it purchased in the U.S. or",
      "internationally?",
      "In Settings > General > About, does Carrier Lock say “No SIM restrictions”?",
      "Do you have another SIM/eSIM active on the phone right now?"
    ],
    "quickChecks": [
      "Check Carrier Lock status.",
      "Confirm whether the iPhone supports physical SIM or eSIM-only activation.",
      "Confirm correct line is selected for Cellular Data.",
      "Turn off Allow Cellular Data Switching during troubleshooting.",
      "Verify IMEI/EID if eSIM activation fails. INTERNAL VERIFICATION REQUIRED"
    ],
    "quickSteps": [
      "Check Carrier Lock status.",
      "Confirm whether the iPhone supports physical SIM or eSIM-only activation.",
      "Confirm correct line is selected for Cellular Data.",
      "Turn off Allow Cellular Data Switching during troubleshooting.",
      "Verify IMEI/EID if eSIM activation fails. INTERNAL VERIFICATION REQUIRED"
    ],
    "steps": [
      "Confirm exact iPhone model and region.",
      "If customer is trying pSIM, confirm the device has a physical SIM tray.",
      "Go to Settings > General > About > Carrier Lock.",
      "If it does not say “No SIM restrictions,” advise customer to contact the original carrier for",
      "unlock.",
      "If dual SIM is active, go to Settings > Cellular and select US Mobile for Cellular Data.",
      "Disable Allow Cellular Data Switching while testing.",
      "Confirm US Mobile line/eSIM is turned ON.",
      "If using eSIM, confirm Wi-Fi is stable and VPN/Private Relay are off during setup.",
      "If Quick Transfer fails, use the approved US Mobile eSIM install/reissue flow instead.",
      "INTERNAL VERIFICATION REQUIRED",
      "If device is unlocked and correct line is selected but activation fails, escalate for",
      "IMEI/EID/provisioning review. INTERNAL VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > General > About > Carrier Lock = “No SIM restrictions.”",
        "Settings > Cellular > Cellular Data > select US Mobile line.",
        "Settings > Cellular > Allow Cellular Data Switching OFF during testing.",
        "Settings > Cellular > confirm US Mobile eSIM is ON.",
        "For eSIM install, use stable Wi-Fi and approved QR/app/native flow."
      ],
      "android": [
        "N/A"
      ],
      "general": [
        "Confirm exact iPhone model and region.",
        "If customer is trying pSIM, confirm the device has a physical SIM tray.",
        "Go to Settings > General > About > Carrier Lock.",
        "If it does not say “No SIM restrictions,” advise customer to contact the original carrier for",
        "unlock.",
        "If dual SIM is active, go to Settings > Cellular and select US Mobile for Cellular Data.",
        "Disable Allow Cellular Data Switching while testing.",
        "Confirm US Mobile line/eSIM is turned ON.",
        "If using eSIM, confirm Wi-Fi is stable and VPN/Private Relay are off during setup.",
        "If Quick Transfer fails, use the approved US Mobile eSIM install/reissue flow instead.",
        "INTERNAL VERIFICATION REQUIRED",
        "If device is unlocked and correct line is selected but activation fails, escalate for",
        "IMEI/EID/provisioning review. INTERNAL VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Let’s first confirm whether the iPhone is unlocked and whether the correct line is selected. \nPlease go to Settings > General > About and check “Carrier Lock.” It needs to say “No SIM \nrestrictions.” \nIf you have two lines on the phone, also go to Settings > Cellular > Cellular Data and make sure \nthe US Mobile line is selected while we test."
      }
    ],
    "zendeskNote": "Issue: iPhone compatibility / eSIM / dual SIM issue \nDevice/OS: [iPhone model + iOS] \nRegion/model: [US / International / Unknown] \nCarrier Lock: [No SIM restrictions / Locked / Unknown] \nSIM/eSIM: [eSIM / pSIM / Dual SIM] \nSymptoms: [SIM not supported / no data / wrong line / eSIM install fail] \nSteps tried: Carrier Lock checked, data line selected, data switching off, eSIM status checked, \nWi-Fi/VPN checked \nInternal checks: IMEI/EID compatibility, eSIM status, provisioning INTERNAL VERIFICATION \nREQUIRED \nNext action: Customer unlocks with original carrier / escalate if unlocked but still failing",
    "escalation": {
      "neededWhen": [
        "iPhone says “No SIM restrictions” but still shows carrier-lock/SIM-not-supported error.",
        "IMEI/EID appears valid but eSIM install fails repeatedly.",
        "Dual SIM settings are correct but data/calls still route incorrectly.",
        "Customer’s iPhone model/region creates compatibility uncertainty."
      ],
      "evidenceNeeded": [
        "IMEI/EID compatibility, whitelist/provisioning state, eSIM reissue,",
        "device eligibility."
      ],
      "summaryTemplate": "iPhone compatibility/eSIM issue. Device: [iPhone model/iOS]. Carrier Lock: [X]. Region/model: \n[X]. SIM/eSIM: [X]. Error: [exact]. Dual SIM settings checked: [Yes/No]. EID/IMEI verified: \n[Yes/No]. Requesting IMEI/EID whitelist or provisioning review. INTERNAL VERIFICATION \nREQUIRED"
    },
    "escalationRequiredWhen": [
      "iPhone says “No SIM restrictions” but still shows carrier-lock/SIM-not-supported error.",
      "IMEI/EID appears valid but eSIM install fails repeatedly.",
      "Dual SIM settings are correct but data/calls still route incorrectly.",
      "Customer’s iPhone model/region creates compatibility uncertainty."
    ],
    "escalationFormat": [
      "iPhone compatibility/eSIM issue. Device: [iPhone model/iOS]. Carrier Lock: [X]. Region/model: ",
      "[X]. SIM/eSIM: [X]. Error: [exact]. Dual SIM settings checked: [Yes/No]. EID/IMEI verified: ",
      "[Yes/No]. Requesting IMEI/EID whitelist or provisioning review. INTERNAL VERIFICATION ",
      "REQUIRED"
    ],
    "relatedPlaybooks": [
      "esim-install-qr-code-failures",
      "carrier-lock-sim-not-supported",
      "iphone-apnprofile-logic",
      "sos-only-no-service-triage"
    ],
    "sourceAliases": [
      "X3",
      "X9",
      "P3"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "IMEI/EID compatibility, whitelist/provisioning state, eSIM reissue,",
      "device eligibility."
    ],
    "batch": "Batch 7",
    "aliases": [
      "iphone compatibility",
      "iphone esim",
      "iphone dual sim",
      "us iphone no sim tray",
      "international",
      "iphone",
      "sim not supported",
      "no sim restrictions",
      "quick transfer",
      "cellular data wrong line",
      "esim",
      "transfer"
    ],
    "symptoms": [
      "iphone compatibility",
      "iphone esim",
      "iphone dual sim",
      "us iphone no sim tray",
      "international",
      "iphone",
      "sim not supported",
      "no sim restrictions",
      "quick transfer",
      "cellular data wrong line",
      "esim",
      "transfer"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X3, X9, P3"
  },
  {
    "id": "samsung-firmware-apn-lock-behavior",
    "title": "Samsung Firmware & APN Lock Behavior",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "apn-data",
      "batch7"
    ],
    "keywords": [
      "samsung",
      "firmware",
      "apn",
      "lock",
      "behavior",
      "apn-data"
    ],
    "customerPhrases": [
      "samsung apn lock",
      "samsung u vs u1 firmware",
      "apn grayed out",
      "access restricted for current",
      "user profile",
      "apn won’t save",
      "add apn missing",
      "samsung data not working"
    ],
    "preview": {
      "problem": "Samsung firmware/CSC APN restriction / carrier-branded firmware behavior / APN save failure /",
      "firstQuestion": "What exact Samsung model number do you have?",
      "firstAction": "Confirm customer’s current network: Warp, Dark Star, or Light Speed.",
      "escalateIf": "APN fields remain locked after safe reset steps."
    },
    "quickAnswer": "Samsung firmware/CSC APN restriction / carrier-branded firmware behavior / APN save failure / \nbaseband restriction",
    "useWhen": "Use when customer reports: Samsung APN lock, Samsung U vs U1 firmware, APN grayed out, access restricted for current",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "What exact Samsung model number do you have?",
      "Was it originally purchased from Verizon, AT&T, T-Mobile, or another carrier?",
      "Is the APN Add/Edit button missing, greyed out, or showing a restriction message?"
    ],
    "quickChecks": [
      "Confirm exact model number and whether it appears to be carrier-branded or",
      "factory-unlocked firmware.",
      "Confirm device is unlocked.",
      "Try APN menu > Reset to default, if available.",
      "Try Reset Network Settings.",
      "If APN becomes editable, enter the correct network APN and save/select it."
    ],
    "quickSteps": [
      "Confirm exact model number and whether it appears to be carrier-branded or",
      "factory-unlocked firmware.",
      "Confirm device is unlocked.",
      "Try APN menu > Reset to default, if available.",
      "Try Reset Network Settings.",
      "If APN becomes editable, enter the correct network APN and save/select it."
    ],
    "steps": [
      "Confirm customer’s current network: Warp, Dark Star, or Light Speed.",
      "Confirm the phone model and original carrier source.",
      "Check whether APN Add/Edit is visible.",
      "If visible, enter correct APN for current network.",
      "If greyed out, connect to Wi-Fi and perform Reset Network Settings.",
      "Reboot and immediately check whether APN menu is editable.",
      "If APN is editable, enter and save the correct APN.",
      "For Warp Android APN setup, follow correct multi-APN sequence from the APN",
      "playbook.",
      "If still locked, document exact model, firmware, error/menu state, and escalate if service",
      "depends on APN editing. INTERNAL VERIFICATION REQUIRED",
      "Do not guide the customer through firmware flashing or unofficial workarounds."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "N/A",
        "Android/Samsung steps:",
        "Settings > Connections > Mobile Networks > Access Point Names.",
        "If available, tap three dots > Reset to default.",
        "Settings > General Management > Reset > Reset Network Settings.",
        "For Warp, use approved Warp APN setup card and save/select the active data APN",
        "correctly.",
        "For Dark Star, try MNC alternate only if APN disappears after saving."
      ],
      "general": [
        "Confirm customer’s current network: Warp, Dark Star, or Light Speed.",
        "Confirm the phone model and original carrier source.",
        "Check whether APN Add/Edit is visible.",
        "If visible, enter correct APN for current network.",
        "If greyed out, connect to Wi-Fi and perform Reset Network Settings.",
        "Reboot and immediately check whether APN menu is editable.",
        "If APN is editable, enter and save the correct APN.",
        "For Warp Android APN setup, follow correct multi-APN sequence from the APN",
        "playbook.",
        "If still locked, document exact model, firmware, error/menu state, and escalate if service",
        "depends on APN editing. INTERNAL VERIFICATION REQUIRED",
        "Do not guide the customer through firmware flashing or unofficial workarounds."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "This looks like your Samsung’s firmware may be restricting APN editing. That can happen on \nsome carrier-branded Samsung phones even when the device is unlocked. Let’s try the safe \npath first: connect to Wi-Fi, reset network settings, restart, and then check whether the APN \nmenu lets you add the settings."
      }
    ],
    "zendeskNote": "Issue: Samsung APN locked / firmware APN restriction \nDevice/OS: [Samsung model + Android/One UI] \nModel/firmware: [U / U1 / carrier-branded / unknown] \nNetwork: [Warp / Dark Star / Light Speed] \nSymptoms: APN [greyed/missing/restricted/won’t save] \nSteps tried: Unlock checked, APN reset, network reset, reboot, APN re-entry attempt \nSuspected cause: Samsung CSC/firmware APN restriction \nNext action: Escalate if required APN cannot be entered and service remains impacted",
    "escalation": {
      "neededWhen": [
        "APN fields remain locked after safe reset steps.",
        "Device is unlocked/compatible but firmware blocks required APN.",
        "Data/MMS/hotspot cannot work because APN cannot be entered.",
        "Multiple Samsung devices show same behavior after an update or network switch."
      ],
      "evidenceNeeded": [
        "Approved workaround availability, device compatibility, escalation",
        "path."
      ],
      "summaryTemplate": "Samsung APN restriction. Device: [model/OS/One UI]. Network: [X]. Device unlocked: [Yes/No]. \nAPN menu state: [greyed/missing/restricted]. Reset default/network reset/reboot tried. Required \nAPN cannot be entered. Requesting device/network workaround review. INTERNAL \nVERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "APN fields remain locked after safe reset steps.",
      "Device is unlocked/compatible but firmware blocks required APN.",
      "Data/MMS/hotspot cannot work because APN cannot be entered.",
      "Multiple Samsung devices show same behavior after an update or network switch."
    ],
    "escalationFormat": [
      "Samsung APN restriction. Device: [model/OS/One UI]. Network: [X]. Device unlocked: [Yes/No]. ",
      "APN menu state: [greyed/missing/restricted]. Reset default/network reset/reboot tried. Required ",
      "APN cannot be entered. Requesting device/network workaround review. INTERNAL ",
      "VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "warp-apn-setup-mms-configuration",
      "dark-star-apn-setup-android-save-failure",
      "light-speed-apn-setup",
      "samsung-grayed-out-apn",
      "hotspot-not-working"
    ],
    "sourceAliases": [
      "X3",
      "X1",
      "P3"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Approved workaround availability, device compatibility, escalation",
      "path."
    ],
    "batch": "Batch 7",
    "aliases": [
      "samsung apn lock",
      "samsung u vs u1 firmware",
      "apn grayed out",
      "access restricted for current",
      "user profile",
      "apn won’t save",
      "add apn missing",
      "samsung data not working"
    ],
    "symptoms": [
      "samsung apn lock",
      "samsung u vs u1 firmware",
      "apn grayed out",
      "access restricted for current",
      "user profile",
      "apn won’t save",
      "add apn missing",
      "samsung data not working"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X3, X1, P3"
  },
  {
    "id": "pixel-esim-rcs-invalid-destination-behavior",
    "title": "Pixel eSIM & RCS / Invalid Destination Behavior",
    "category": "messaging-calls-voicemail",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "messaging-calls-voicemail",
      "batch7"
    ],
    "keywords": [
      "pixel",
      "esim",
      "rcs",
      "invalid",
      "destination",
      "behavior",
      "messaging-calls-voicemail"
    ],
    "customerPhrases": [
      "pixel esim",
      "pixel rcs",
      "invalid destination address",
      "rcs stuck verifying",
      "google messages",
      "message not sent",
      "pixel dual sim",
      "pixel after teleport",
      "pixel mms not working"
    ],
    "preview": {
      "problem": "Google Messages/RCS state issue / post-Teleport stale RCS routing / dual-SIM data conflict /",
      "firstQuestion": "Did this start after porting, Teleport, eSIM change, or device transfer?",
      "firstAction": "Confirm whether plain SMS works.",
      "escalateIf": "Plain SMS or MMS still fails after RCS is off and app cache is cleared."
    },
    "quickAnswer": "Google Messages/RCS state issue / post-Teleport stale RCS routing / dual-SIM data conflict / \neSIM selection issue / SMS-MMS provisioning issue",
    "useWhen": "Use when customer reports: Pixel eSIM, Pixel RCS, Invalid destination address, RCS stuck verifying, Google Messages,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Did this start after porting, Teleport, eSIM change, or device transfer?",
      "Are you seeing “Invalid destination address” in Google Messages?",
      "Do you have more than one SIM/eSIM active on the Pixel?"
    ],
    "quickChecks": [
      "Confirm Google Messages is the default SMS app.",
      "Turn RCS off temporarily and test regular SMS/MMS.",
      "Confirm US Mobile is selected as default for calls, SMS, and mobile data.",
      "Confirm APN/MMS settings if MMS is affected.",
      "Check SMS/MMS feature provisioning if errors persist. INTERNAL VERIFICATION",
      "REQUIRED"
    ],
    "quickSteps": [
      "Confirm Google Messages is the default SMS app.",
      "Turn RCS off temporarily and test regular SMS/MMS.",
      "Confirm US Mobile is selected as default for calls, SMS, and mobile data.",
      "Confirm APN/MMS settings if MMS is affected.",
      "Check SMS/MMS feature provisioning if errors persist. INTERNAL VERIFICATION",
      "REQUIRED"
    ],
    "steps": [
      "Confirm whether plain SMS works.",
      "If SMS fails, use SMS/MMS triage card first.",
      "If MMS/RCS fails, open Google Messages and turn RCS chats OFF temporarily.",
      "Clear Google Messages cache.",
      "Restart Pixel.",
      "Test plain SMS, then MMS.",
      "Confirm default SIM for calls/SMS/data is US Mobile.",
      "Update Google Messages and Carrier Services if applicable.",
      "If old Android still has RCS active, disable RCS on old device or use Google’s RCS",
      "deactivation route if needed.",
      "If error persists after app, APN, and SIM-default checks, escalate for SMS/MMS",
      "routing/provisioning. INTERNAL VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "N/A",
        "Android/Pixel steps:",
        "Settings > Network & Internet > SIMs > confirm US Mobile SIM/eSIM is ON.",
        "Set US Mobile as default for mobile data and SMS.",
        "Google Messages > RCS chats > OFF for testing.",
        "Settings > Apps > Messages > Storage & cache > Clear cache.",
        "Restart.",
        "Test SMS/MMS before turning RCS back on.",
        "Important safety note:",
        "Do not guide customers through hidden debug menus or unofficial advanced commands unless",
        "that workflow is explicitly approved internally."
      ],
      "general": [
        "Confirm whether plain SMS works.",
        "If SMS fails, use SMS/MMS triage card first.",
        "If MMS/RCS fails, open Google Messages and turn RCS chats OFF temporarily.",
        "Clear Google Messages cache.",
        "Restart Pixel.",
        "Test plain SMS, then MMS.",
        "Confirm default SIM for calls/SMS/data is US Mobile.",
        "Update Google Messages and Carrier Services if applicable.",
        "If old Android still has RCS active, disable RCS on old device or use Google’s RCS",
        "deactivation route if needed.",
        "If error persists after app, APN, and SIM-default checks, escalate for SMS/MMS",
        "routing/provisioning. INTERNAL VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "This looks like Google Messages may be holding onto old messaging settings, especially if this \nstarted after a port, Teleport, or eSIM change. Let’s test the carrier path first: turn RCS off \ntemporarily, clear the Messages app cache, restart the phone, and then try a plain SMS followed \nby one picture message."
      }
    ],
    "zendeskNote": "Issue: Pixel RCS / Invalid Destination / messaging issue \nDevice/OS: [Pixel model + Android version] \nNetwork: [Warp / Dark Star / Light Speed] \nSIM/eSIM: [eSIM / pSIM / Dual SIM] \nTrigger: [Port / Teleport / eSIM change / Device transfer / Sudden] \nSymptoms: [Invalid destination / RCS verifying / SMS fail / MMS fail] \nSteps tried: Google Messages default, RCS off, cache cleared, SIM defaults checked, \nAPN/MMS checked, rebooted \nInternal checks: SMS/MMS feature/routing status INTERNAL VERIFICATION REQUIRED \nNext action: Escalate if messaging still fails after app/APN/SIM-default checks",
    "escalation": {
      "neededWhen": [
        "Plain SMS or MMS still fails after RCS is off and app cache is cleared.",
        "US Mobile is selected for calls/SMS/data but routing still fails.",
        "APN/MMS settings are correct and issue persists.",
        "Error continues beyond expected post-port/post-Teleport window."
      ],
      "evidenceNeeded": [
        "SMS/MMS provisioning, routing trace, post-Teleport state,",
        "advanced/internal RCS workaround approval."
      ],
      "summaryTemplate": "Pixel messaging issue. Device/OS: [X]. Network: [X]. Trigger: [X]. Error: [Invalid destination/RCS \nverifying/etc.]. RCS off test: [X]. Cache cleared/rebooted. US Mobile selected for \ncalls/SMS/data. APN/MMS verified: [Yes/No]. Requesting SMS/MMS/RCS routing or \nprovisioning review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Plain SMS or MMS still fails after RCS is off and app cache is cleared.",
      "US Mobile is selected for calls/SMS/data but routing still fails.",
      "APN/MMS settings are correct and issue persists.",
      "Error continues beyond expected post-port/post-Teleport window."
    ],
    "escalationFormat": [
      "Pixel messaging issue. Device/OS: [X]. Network: [X]. Trigger: [X]. Error: [Invalid destination/RCS ",
      "verifying/etc.]. RCS off test: [X]. Cache cleared/rebooted. US Mobile selected for ",
      "calls/SMS/data. APN/MMS verified: [Yes/No]. Requesting SMS/MMS/RCS routing or ",
      "provisioning review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "smsmms-triage",
      "rcs-imessage-activation-fallback",
      "post-teleport-data-mms-failure",
      "warp-apn-setup-mms-configuration",
      "apn-escalation-triggers"
    ],
    "sourceAliases": [
      "X3",
      "P4",
      "X4",
      "X9"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "SMS/MMS provisioning, routing trace, post-Teleport state,",
      "advanced/internal RCS workaround approval."
    ],
    "batch": "Batch 7",
    "aliases": [
      "pixel esim",
      "pixel rcs",
      "invalid destination address",
      "rcs stuck verifying",
      "google messages",
      "message not sent",
      "pixel dual sim",
      "pixel after teleport",
      "pixel mms not working"
    ],
    "symptoms": [
      "pixel esim",
      "pixel rcs",
      "invalid destination address",
      "rcs stuck verifying",
      "google messages",
      "message not sent",
      "pixel dual sim",
      "pixel after teleport",
      "pixel mms not working"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X3, P4, X4, X9"
  },
  {
    "id": "oneplus-imported-international-android-limitations",
    "title": "OnePlus, Imported & International Android Limitations",
    "category": "devices-watches",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "devices-watches",
      "batch7"
    ],
    "keywords": [
      "oneplus",
      "imported",
      "international",
      "android",
      "limitations",
      "devices-watches"
    ],
    "customerPhrases": [
      "oneplus limitations",
      "international android",
      "imported phone",
      "xiaomi",
      "ulefone",
      "doogee",
      "only",
      "edge",
      "only hspa",
      "no volte",
      "weak rural coverage",
      "missing bands",
      "phone is unlocked but no",
      "service"
    ],
    "preview": {
      "problem": "Missing U.S. frequency bands / missing VoLTE certification / carrier whitelist limitation / imported",
      "firstQuestion": "What exact make and model number is the phone?",
      "firstAction": "Ask for exact model number.",
      "escalateIf": "Device supports required bands and VoLTE but still fails registration."
    },
    "quickAnswer": "Missing U.S. frequency bands / missing VoLTE certification / carrier whitelist limitation / imported \nfirmware behavior / wrong network fit",
    "useWhen": "Use when customer reports: OnePlus limitations, international Android, imported phone, Xiaomi, Ulefone, Doogee, only",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "What exact make and model number is the phone?",
      "Was it purchased outside the U.S. or imported?",
      "Does it show LTE/5G, or does it drop to EDGE, H, H+, or no service?"
    ],
    "quickChecks": [
      "Confirm exact model number, not just brand.",
      "Check IMEI/device compatibility. INTERNAL VERIFICATION REQUIRED",
      "Check required bands for the selected network.",
      "Confirm VoLTE support/certification.",
      "Consider whether another US Mobile network is a better fit after compatibility check.",
      "INTERNAL VERIFICATION REQUIRED"
    ],
    "quickSteps": [
      "Confirm exact model number, not just brand.",
      "Check IMEI/device compatibility. INTERNAL VERIFICATION REQUIRED",
      "Check required bands for the selected network.",
      "Confirm VoLTE support/certification.",
      "Consider whether another US Mobile network is a better fit after compatibility check.",
      "INTERNAL VERIFICATION REQUIRED"
    ],
    "steps": [
      "Ask for exact model number.",
      "Confirm where the device was purchased.",
      "Check whether the device supports required bands for current network. INTERNAL",
      "VERIFICATION REQUIRED",
      "Confirm VoLTE support and that LTE/5G mode is enabled.",
      "If the device lacks key bands, explain hardware limitation clearly.",
      "If the device supports another US Mobile network better, consider network",
      "switch/Teleport after checking eligibility. INTERNAL VERIFICATION REQUIRED",
      "If device supports all required bands but still only gets EDGE/HSPA/no VoLTE, escalate",
      "for compatibility/provisioning review. INTERNAL VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "N/A"
      ],
      "android": [
        "Settings > Network / Mobile Networks > Preferred network type: LTE/5G/Auto where",
        "available.",
        "Avoid 3G/2G-only modes.",
        "Confirm VoLTE toggle if visible.",
        "Check SIM/eSIM is enabled and selected.",
        "Verify APN if data works poorly after activation/Teleport."
      ],
      "general": [
        "Ask for exact model number.",
        "Confirm where the device was purchased.",
        "Check whether the device supports required bands for current network. INTERNAL",
        "VERIFICATION REQUIRED",
        "Confirm VoLTE support and that LTE/5G mode is enabled.",
        "If the device lacks key bands, explain hardware limitation clearly.",
        "If the device supports another US Mobile network better, consider network",
        "switch/Teleport after checking eligibility. INTERNAL VERIFICATION REQUIRED",
        "If device supports all required bands but still only gets EDGE/HSPA/no VoLTE, escalate",
        "for compatibility/provisioning review. INTERNAL VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Unlocked only means the phone is allowed to accept another carrier’s SIM. It does not always \nmean the phone has the right internal antennas and VoLTE support for every U.S. network. \nPlease send the exact model number from Settings > About phone. I’ll check whether it \nsupports the bands needed for your current network and whether another US Mobile network \nwould be a better fit."
      }
    ],
    "zendeskNote": "Issue: Imported/International Android compatibility \nDevice/OS: [Make/model + Android version] \nPurchase region: [US / International / Unknown] \nNetwork: [Warp / Dark Star / Light Speed] \nSymptoms: [EDGE/HSPA/no service/weak rural/no VoLTE/Wi-Fi Calling issue] \nSteps tried: Model checked, network mode checked, APN checked if needed \nInternal checks: IMEI compatibility, band support, VoLTE support, Teleport eligibility INTERNAL \nVERIFICATION REQUIRED \nSuspected cause: Missing bands, VoLTE certification, imported firmware limitation, or poor \n\nnetwork fit \nNext action: Educate / suggest compatible network/device / escalate if compatibility should pass",
    "escalation": {
      "neededWhen": [
        "Device supports required bands and VoLTE but still fails registration.",
        "IMEI checker passes but device only connects to EDGE/HSPA or cannot use VoLTE.",
        "Customer disputes compatibility and needs internal review.",
        "Network switch is blocked or unclear."
      ],
      "evidenceNeeded": [
        "IMEI compatibility, band support, VoLTE certification, Teleport",
        "eligibility, provisioning state."
      ],
      "summaryTemplate": "Imported/Android compatibility issue. Device: [make/model]. Network: [X]. Purchase region: [X]. \nIMEI compatibility: [pass/fail/unknown]. Bands supported: [X]. VoLTE status: [X]. Current \nservice: [EDGE/HSPA/no service/etc.]. Requesting compatibility/provisioning review. INTERNAL \nVERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Device supports required bands and VoLTE but still fails registration.",
      "IMEI checker passes but device only connects to EDGE/HSPA or cannot use VoLTE.",
      "Customer disputes compatibility and needs internal review.",
      "Network switch is blocked or unclear."
    ],
    "escalationFormat": [
      "Imported/Android compatibility issue. Device: [make/model]. Network: [X]. Purchase region: [X]. ",
      "IMEI compatibility: [pass/fail/unknown]. Bands supported: [X]. VoLTE status: [X]. Current ",
      "service: [EDGE/HSPA/no service/etc.]. Requesting compatibility/provisioning review. INTERNAL ",
      "VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "bands-volte-requirements-hardware-identifiers",
      "volte-hardware-identifiers",
      "network-choice-coverage",
      "carrier-lock-sim-not-supported",
      "carrier-lock-sim-not-supported",
      "warp-apn-setup-mms-configuration"
    ],
    "sourceAliases": [
      "X3",
      "P4",
      "X2"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "IMEI compatibility, band support, VoLTE certification, Teleport",
      "eligibility, provisioning state."
    ],
    "batch": "Batch 7",
    "aliases": [
      "oneplus limitations",
      "international android",
      "imported phone",
      "xiaomi",
      "ulefone",
      "doogee",
      "only",
      "edge",
      "only hspa",
      "no volte",
      "weak rural coverage",
      "missing bands",
      "phone is unlocked but no",
      "service"
    ],
    "symptoms": [
      "oneplus limitations",
      "international android",
      "imported phone",
      "xiaomi",
      "ulefone",
      "doogee",
      "only",
      "edge",
      "only hspa",
      "no volte",
      "weak rural coverage",
      "missing bands",
      "phone is unlocked but no",
      "service"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X3, P4, X2"
  },
  {
    "id": "bands-volte-requirements-hardware-identifiers",
    "title": "Bands, VoLTE Requirements & Hardware Identifiers",
    "category": "network-signal",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "network-signal",
      "batch7"
    ],
    "keywords": [
      "bands",
      "volte",
      "requirements",
      "hardware",
      "identifiers",
      "network-signal"
    ],
    "customerPhrases": [
      "imei",
      "imei2",
      "eid",
      "iccid",
      "volte",
      "bands required",
      "band 13",
      "band 71",
      "n71",
      "n77",
      "cdma-less",
      "esim identifier",
      "phone compatible",
      "no calls but data works"
    ],
    "preview": {
      "problem": "Hardware incompatibility / missing bands / VoLTE certification issue / identifier mismatch /",
      "firstQuestion": "Which network are you trying to use: Warp, Dark Star, or Light Speed?",
      "firstAction": "Identify active network.",
      "escalateIf": "IMEI/device should be compatible but fails registration."
    },
    "quickAnswer": "Hardware incompatibility / missing bands / VoLTE certification issue / identifier mismatch / \nIMEI/EID provisioning issue",
    "useWhen": "Use when customer reports: IMEI, IMEI2, EID, ICCID, VoLTE, bands required, Band 13, Band 71, n71, n77, CDMA-less,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Which network are you trying to use: Warp, Dark Star, or Light Speed?",
      "What exact phone model do you have?",
      "Are you activating physical SIM or eSIM?"
    ],
    "quickChecks": [
      "Run/check IMEI compatibility. INTERNAL VERIFICATION REQUIRED",
      "For eSIM, verify EID and correct IMEI/IMEI2 mapping. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm VoLTE/IMS support and toggle if visible.",
      "Check band support for selected network. INTERNAL VERIFICATION REQUIRED",
      "Confirm ICCID if physical SIM or eSIM profile state is in question. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "quickSteps": [
      "Run/check IMEI compatibility. INTERNAL VERIFICATION REQUIRED",
      "For eSIM, verify EID and correct IMEI/IMEI2 mapping. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm VoLTE/IMS support and toggle if visible.",
      "Check band support for selected network. INTERNAL VERIFICATION REQUIRED",
      "Confirm ICCID if physical SIM or eSIM profile state is in question. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "steps": [
      "Identify active network.",
      "Identify SIM type: pSIM or eSIM.",
      "Collect exact device model.",
      "Verify IMEI compatibility. INTERNAL VERIFICATION REQUIRED",
      "If eSIM, verify EID and correct IMEI/IMEI2. INTERNAL VERIFICATION REQUIRED",
      "Confirm VoLTE/IMS support.",
      "If calls fail but data works, check VoLTE/voice provisioning and device certification.",
      "INTERNAL VERIFICATION REQUIRED",
      "If rural/indoor coverage is poor, check key bands for the selected network.",
      "If identifiers are mismatched, correct mapping/reissue only through approved workflow.",
      "INTERNAL VERIFICATION REQUIRED",
      "Escalate if hardware appears compatible but registration/voice/data still fails."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > General > About:",
        "IMEI",
        "IMEI2",
        "EID",
        "ICCID if SIM/eSIM installed",
        "Carrier Lock",
        "Settings > Cellular > Voice & Data for network mode.",
        "Confirm correct line is selected if dual SIM."
      ],
      "android": [
        "Dial",
        "#06#",
        "or Settings > About phone to view IMEI/EID.",
        "Settings > Mobile Networks: check VoLTE/Enhanced Calling if visible.",
        "Check SIM Manager for selected SIM/eSIM.",
        "Confirm preferred network type is LTE/5G/Auto."
      ],
      "general": [
        "Identify active network.",
        "Identify SIM type: pSIM or eSIM.",
        "Collect exact device model.",
        "Verify IMEI compatibility. INTERNAL VERIFICATION REQUIRED",
        "If eSIM, verify EID and correct IMEI/IMEI2. INTERNAL VERIFICATION REQUIRED",
        "Confirm VoLTE/IMS support.",
        "If calls fail but data works, check VoLTE/voice provisioning and device certification.",
        "INTERNAL VERIFICATION REQUIRED",
        "If rural/indoor coverage is poor, check key bands for the selected network.",
        "If identifiers are mismatched, correct mapping/reissue only through approved workflow.",
        "INTERNAL VERIFICATION REQUIRED",
        "Escalate if hardware appears compatible but registration/voice/data still fails."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "To check compatibility correctly, we need the exact device identifiers. IMEI identifies the phone, \nEID identifies the eSIM chip, and ICCID identifies the SIM profile. \nPlease open Settings > About phone and send the device model plus the IMEI/EID shown there. \nI’ll check whether the phone supports the network and whether the eSIM/SIM is mapped \ncorrectly."
      }
    ],
    "zendeskNote": "Issue: Device compatibility / VoLTE / hardware identifier check \nNetwork: [Warp / Dark Star / Light Speed] \nDevice/OS: [Device + OS] \nSIM/eSIM: [eSIM / pSIM] \nIdentifiers checked: IMEI [masked], IMEI2 [masked], EID [masked], ICCID [masked] \nSymptoms: [No service / calls fail / data fails / eSIM install fail / weak coverage] \nInternal checks: IMEI compatibility, EID mapping, ICCID/profile status, VoLTE/IMS provisioning \nINTERNAL VERIFICATION REQUIRED \nSuspected cause: Identifier mismatch, missing bands, VoLTE certification, or provisioning issue \nNext action: Correct mapping/reissue/escalate compatibility review",
    "escalation": {
      "neededWhen": [
        "IMEI/device should be compatible but fails registration.",
        "VoLTE is supported/enabled but calls fail.",
        "EID/IMEI mapping appears correct but eSIM install fails.",
        "Device supports required bands but still cannot connect in known coverage.",
        "ICCID/profile state does not match the customer’s active line."
      ],
      "evidenceNeeded": [
        "IMEI/EID/ICCID mapping, compatibility checker, whitelist,",
        "CDMA-less/VoLTE/IMS provisioning."
      ],
      "summaryTemplate": "Compatibility/identifier issue. Network: [X]. Device/OS: [X]. SIM type: [eSIM/pSIM]. \nIMEI/EID/ICCID checked: [Yes/No]. Compatibility result: [X]. VoLTE status: [X]. Error/symptom: \n[X]. Requesting IMEI whitelist / EID mapping / ICCID profile / VoLTE provisioning review. \nINTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "IMEI/device should be compatible but fails registration.",
      "VoLTE is supported/enabled but calls fail.",
      "EID/IMEI mapping appears correct but eSIM install fails.",
      "Device supports required bands but still cannot connect in known coverage.",
      "ICCID/profile state does not match the customer’s active line."
    ],
    "escalationFormat": [
      "Compatibility/identifier issue. Network: [X]. Device/OS: [X]. SIM type: [eSIM/pSIM]. ",
      "IMEI/EID/ICCID checked: [Yes/No]. Compatibility result: [X]. VoLTE status: [X]. Error/symptom: ",
      "[X]. Requesting IMEI whitelist / EID mapping / ICCID profile / VoLTE provisioning review. ",
      "INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "esim-install-qr-code-failures",
      "carrier-lock-sim-not-supported",
      "imported-android",
      "oneplus-imported-international-android-limitations",
      "sos-only-no-service-triage"
    ],
    "sourceAliases": [
      "X3",
      "X9",
      "P2",
      "P3"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "IMEI/EID/ICCID mapping, compatibility checker, whitelist,",
      "CDMA-less/VoLTE/IMS provisioning."
    ],
    "batch": "Batch 7",
    "aliases": [
      "imei",
      "imei2",
      "eid",
      "iccid",
      "volte",
      "bands required",
      "band 13",
      "band 71",
      "n71",
      "n77",
      "cdma-less",
      "esim identifier",
      "phone compatible",
      "no calls but data works"
    ],
    "symptoms": [
      "imei",
      "imei2",
      "eid",
      "iccid",
      "volte",
      "bands required",
      "band 13",
      "band 71",
      "n71",
      "n77",
      "cdma-less",
      "esim identifier",
      "phone compatible",
      "no calls but data works"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X3, X9, P2, P3"
  },
  {
    "id": "wearables-apple-watch-pixel-watch-setup",
    "title": "Wearables, Apple Watch & Pixel Watch Setup",
    "category": "devices-watches",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "devices-watches",
      "batch7"
    ],
    "keywords": [
      "wearables",
      "apple",
      "watch",
      "pixel",
      "setup",
      "devices-watches"
    ],
    "customerPhrases": [
      "apple watch support",
      "pixel watch support",
      "watch activation issue",
      "wearable setup",
      "standalone",
      "watch",
      "companion watch",
      "watch cellular not working",
      "carrier does not support apple watch",
      "watch no connection",
      "numbersync"
    ],
    "preview": {
      "problem": "Network eligibility issue / companion vs standalone setup confusion / watch EID provisioning",
      "firstQuestion": "Is your main phone line on Warp, Dark Star, or Light Speed?",
      "firstAction": "Confirm main line’s network. INTERNAL VERIFICATION REQUIRED IF UNKNOWN",
      "escalateIf": "Watch/network/plan support is verified but activation fails."
    },
    "quickAnswer": "Network eligibility issue / companion vs standalone setup confusion / watch EID provisioning \nissue / parent line mismatch / activation flow error",
    "useWhen": "Use when customer reports: Apple Watch support, Pixel Watch support, watch activation issue, wearable setup, standalone",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Is your main phone line on Warp, Dark Star, or Light Speed?",
      "Are you setting the watch to share your phone number, or to have its own number?",
      "What watch model and phone model are you using?"
    ],
    "quickChecks": [
      "Verify watch support for the customer’s network and plan. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm watch model and phone model compatibility.",
      "Confirm companion vs standalone setup.",
      "Verify watch EID and parent/host line if needed. INTERNAL VERIFICATION REQUIRED",
      "Check if setup error says “carrier not supported,” “no connection,” or another exact",
      "message."
    ],
    "quickSteps": [
      "Verify watch support for the customer’s network and plan. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm watch model and phone model compatibility.",
      "Confirm companion vs standalone setup.",
      "Verify watch EID and parent/host line if needed. INTERNAL VERIFICATION REQUIRED",
      "Check if setup error says “carrier not supported,” “no connection,” or another exact",
      "message."
    ],
    "steps": [
      "Confirm main line’s network. INTERNAL VERIFICATION REQUIRED IF UNKNOWN",
      "Confirm watch type: Apple Watch or Pixel Watch.",
      "Confirm setup mode: companion/shared number or standalone/separate number.",
      "Confirm plan/add-on eligibility and current pricing/inclusion. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm host phone and watch are close together, Bluetooth is ON, and phone has",
      "stable data/Wi-Fi as required.",
      "Use the approved dashboard/app/watch setup flow.",
      "Do not guess if “Set up cellular” should be pressed; follow current internal flow for the",
      "watch mode/network. INTERNAL VERIFICATION REQUIRED",
      "Collect exact error message if setup fails.",
      "Verify watch EID and provisioning state. INTERNAL VERIFICATION REQUIRED",
      "Escalate if supported device/network/plan is verified but watch still fails activation.",
      "iPhone / Apple Watch steps:",
      "Confirm iPhone is compatible and paired with the Apple Watch.",
      "Confirm main phone line network supports the intended watch mode. INTERNAL",
      "VERIFICATION REQUIRED",
      "Keep Bluetooth ON and phone/watch near each other.",
      "Use approved Apple Watch cellular setup flow.",
      "If Family/standalone setup is used, confirm account/Apple ID requirements per current",
      "support flow.",
      "If error says carrier not supported, document screenshot/error and escalate.",
      "Android / Pixel Watch steps:",
      "Confirm host Android phone and Pixel Watch compatibility.",
      "Keep the Pixel Watch app open during setup.",
      "Keep phone/watch close and connected.",
      "Confirm companion mode/network support. INTERNAL VERIFICATION REQUIRED",
      "Collect watch EID if activation fails."
    ],
    "deviceSpecificSteps": {
      "general": [
        "Confirm main line’s network. INTERNAL VERIFICATION REQUIRED IF UNKNOWN",
        "Confirm watch type: Apple Watch or Pixel Watch.",
        "Confirm setup mode: companion/shared number or standalone/separate number.",
        "Confirm plan/add-on eligibility and current pricing/inclusion. INTERNAL VERIFICATION",
        "REQUIRED",
        "Confirm host phone and watch are close together, Bluetooth is ON, and phone has",
        "stable data/Wi-Fi as required.",
        "Use the approved dashboard/app/watch setup flow.",
        "Do not guess if “Set up cellular” should be pressed; follow current internal flow for the",
        "watch mode/network. INTERNAL VERIFICATION REQUIRED",
        "Collect exact error message if setup fails.",
        "Verify watch EID and provisioning state. INTERNAL VERIFICATION REQUIRED",
        "Escalate if supported device/network/plan is verified but watch still fails activation.",
        "iPhone / Apple Watch steps:",
        "Confirm iPhone is compatible and paired with the Apple Watch.",
        "Confirm main phone line network supports the intended watch mode. INTERNAL",
        "VERIFICATION REQUIRED",
        "Keep Bluetooth ON and phone/watch near each other.",
        "Use approved Apple Watch cellular setup flow.",
        "If Family/standalone setup is used, confirm account/Apple ID requirements per current",
        "support flow.",
        "If error says carrier not supported, document screenshot/error and escalate.",
        "Android / Pixel Watch steps:",
        "Confirm host Android phone and Pixel Watch compatibility.",
        "Keep the Pixel Watch app open during setup.",
        "Keep phone/watch close and connected.",
        "Confirm companion mode/network support. INTERNAL VERIFICATION REQUIRED",
        "Collect watch EID if activation fails."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Watch setup depends on the main phone line’s network, the watch model, and whether you \nwant the watch to share your phone number or have its own setup. Let’s verify those first so we \ndon’t send the watch through the wrong activation path. \nWhich network is your main line on, and are you setting up an Apple Watch or Pixel Watch?"
      }
    ],
    "zendeskNote": "Issue: Watch cellular setup / wearable activation \nWatch type/model: [Apple Watch / Pixel Watch + model] \nHost phone: [Device/OS] \nNetwork: [Warp / Dark Star / Light Speed] \nMode: [Companion / Standalone / Unknown] \nError: [Exact error message] \nSteps tried: Network/plan eligibility checked, host device pairing checked, Bluetooth/Wi-Fi/data \nconfirmed, setup flow attempted \nInternal checks: Watch EID, parent line, add-on/plan eligibility, provisioning state INTERNAL \nVERIFICATION REQUIRED \nSuspected cause: Unsupported network/mode, EID pairing issue, provisioning loop, setup-flow \nmismatch \nNext action: Escalate if supported setup fails",
    "escalation": {
      "neededWhen": [
        "Watch/network/plan support is verified but activation fails.",
        "Watch app says carrier not supported when support should exist.",
        "Watch shows no connection after provisioning should be complete.",
        "Watch EID cannot pair to parent line.",
        "Customer is stuck in repeated setup loop."
      ],
      "evidenceNeeded": [
        "Current watch support by network, plan/add-on eligibility, pricing,",
        "EID pairing, NumberSync/provisioning state.",
        "Batch 7 Agent Import Notes",
        "Create these as separate cards",
        "iPhone Compatibility, eSIM & Dual SIM Triage",
        "Samsung Firmware & APN Lock Behavior",
        "Pixel eSIM & RCS / Invalid Destination Behavior",
        "OnePlus, Imported & International Android Limitations",
        "Bands, VoLTE Requirements & Hardware Identifiers",
        "Wearables, Apple Watch & Pixel Watch Setup",
        "Suggested category mapping",
        "Devices / Watches",
        "iPhone Compatibility, eSIM & Dual SIM Triage",
        "OnePlus, Imported & International Android Limitations",
        "Bands, VoLTE Requirements & Hardware Identifiers",
        "Wearables, Apple Watch & Pixel Watch Setup",
        "APN / Data",
        "Samsung Firmware & APN Lock Behavior",
        "Pixel eSIM & RCS / Invalid Destination Behavior",
        "Messaging / Calls / Voicemail",
        "Pixel eSIM & RCS / Invalid Destination Behavior",
        "eSIM / SIM",
        "iPhone Compatibility, eSIM & Dual SIM Triage",
        "Bands, VoLTE Requirements & Hardware Identifiers",
        "Network / Signal",
        "OnePlus, Imported & International Android Limitations",
        "Bands, VoLTE Requirements & Hardware Identifiers",
        "Suggested pinned/common cards from Batch 7",
        "iPhone Compatibility, eSIM & Dual SIM Triage",
        "Samsung Firmware & APN Lock Behavior",
        "Pixel eSIM & RCS / Invalid Destination Behavior",
        "Bands, VoLTE Requirements & Hardware Identifiers",
        "Wearables, Apple Watch & Pixel Watch Setup",
        "UI rule",
        "Show short preview first:",
        "Problem",
        "First question",
        "First action",
        "Escalate if",
        "Then full card opens with:",
        "Ask customer first",
        "Quick checks",
        "Step-by-step troubleshooting",
        "iPhone steps",
        "Android steps",
        "Copy-ready reply",
        "Zendesk note",
        "Escalation summary",
        "Related playbooks",
        "Source aliases",
        "Confidence",
        "Needs internal verification",
        "Merge notes for later",
        "Batch 3 already has Carrier Lock & SIM Not Supported.",
        "Batch 7 iPhone compatibility should link to that, not duplicate it.",
        "Batch 2 already has Samsung Grayed-Out APN.",
        "Batch 7 Samsung card should become the device-firmware deep version under the",
        "same Samsung APN card.",
        "Batch 4 already has RCS & iMessage.",
        "Batch 7 Pixel card should become the Pixel-specific subsection inside the RCS/MMS",
        "card.",
        "Batch 6 already has Band/Coverage logic.",
        "Batch 7 bands/VoLTE card should become the device-identifiers and compatibility deep",
        "layer.",
        "Safety rule for agent",
        "For device compatibility and watches:",
        "Never tell the customer the phone is definitely compatible until IMEI/device check is",
        "verified.",
        "Never promise watch support, pricing, or included add-ons without current",
        "account/internal verification.",
        "Never tell customers to flash firmware, root devices, or use unofficial debug tools.",
        "Never expose full IMEI/EID/ICCID in visible notes unless inside approved internal tools.",
        "Mark IMEI, EID, ICCID, whitelist, watch EID pairing, and provisioning actions as",
        "INTERNAL VERIFICATION REQUIRED."
      ],
      "summaryTemplate": "Wearable activation issue. Watch: [model]. Host phone: [model/OS]. Network: [X]. Mode: \n[companion/standalone]. Plan/add-on eligibility verified: [Yes/No]. Watch EID: [masked]. Error: \n[exact]. Setup flow attempted: [X]. Requesting watch EID/parent line/provisioning review. \nINTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Watch/network/plan support is verified but activation fails.",
      "Watch app says carrier not supported when support should exist.",
      "Watch shows no connection after provisioning should be complete.",
      "Watch EID cannot pair to parent line.",
      "Customer is stuck in repeated setup loop."
    ],
    "escalationFormat": [
      "Wearable activation issue. Watch: [model]. Host phone: [model/OS]. Network: [X]. Mode: ",
      "[companion/standalone]. Plan/add-on eligibility verified: [Yes/No]. Watch EID: [masked]. Error: ",
      "[exact]. Setup flow attempted: [X]. Requesting watch EID/parent line/provisioning review. ",
      "INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "device-compatibility",
      "esim-install-qr-code-failures",
      "appdashboard-self-service",
      "apn-escalation-triggers",
      "system"
    ],
    "sourceAliases": [
      "X3",
      "P7",
      "X10"
    ],
    "confidence": "Medium-High because watch support, pricing, and model eligibility can change",
    "internalVerificationRequired": [
      "Current watch support by network, plan/add-on eligibility, pricing,",
      "EID pairing, NumberSync/provisioning state.",
      "Batch 7 Agent Import Notes",
      "Create these as separate cards",
      "iPhone Compatibility, eSIM & Dual SIM Triage",
      "Samsung Firmware & APN Lock Behavior",
      "Pixel eSIM & RCS / Invalid Destination Behavior",
      "OnePlus, Imported & International Android Limitations",
      "Bands, VoLTE Requirements & Hardware Identifiers",
      "Wearables, Apple Watch & Pixel Watch Setup",
      "Suggested category mapping",
      "Devices / Watches",
      "iPhone Compatibility, eSIM & Dual SIM Triage",
      "OnePlus, Imported & International Android Limitations",
      "Bands, VoLTE Requirements & Hardware Identifiers",
      "Wearables, Apple Watch & Pixel Watch Setup",
      "APN / Data",
      "Samsung Firmware & APN Lock Behavior",
      "Pixel eSIM & RCS / Invalid Destination Behavior",
      "Messaging / Calls / Voicemail",
      "Pixel eSIM & RCS / Invalid Destination Behavior",
      "eSIM / SIM",
      "iPhone Compatibility, eSIM & Dual SIM Triage",
      "Bands, VoLTE Requirements & Hardware Identifiers",
      "Network / Signal",
      "OnePlus, Imported & International Android Limitations",
      "Bands, VoLTE Requirements & Hardware Identifiers",
      "Suggested pinned/common cards from Batch 7",
      "iPhone Compatibility, eSIM & Dual SIM Triage",
      "Samsung Firmware & APN Lock Behavior",
      "Pixel eSIM & RCS / Invalid Destination Behavior",
      "Bands, VoLTE Requirements & Hardware Identifiers",
      "Wearables, Apple Watch & Pixel Watch Setup",
      "UI rule",
      "Show short preview first:",
      "Problem",
      "First question",
      "First action",
      "Escalate if",
      "Then full card opens with:",
      "Ask customer first",
      "Quick checks",
      "Step-by-step troubleshooting",
      "iPhone steps",
      "Android steps",
      "Copy-ready reply",
      "Zendesk note",
      "Escalation summary",
      "Related playbooks",
      "Source aliases",
      "Confidence",
      "Needs internal verification",
      "Merge notes for later",
      "Batch 3 already has Carrier Lock & SIM Not Supported.",
      "Batch 7 iPhone compatibility should link to that, not duplicate it.",
      "Batch 2 already has Samsung Grayed-Out APN.",
      "Batch 7 Samsung card should become the device-firmware deep version under the",
      "same Samsung APN card.",
      "Batch 4 already has RCS & iMessage.",
      "Batch 7 Pixel card should become the Pixel-specific subsection inside the RCS/MMS",
      "card.",
      "Batch 6 already has Band/Coverage logic.",
      "Batch 7 bands/VoLTE card should become the device-identifiers and compatibility deep",
      "layer.",
      "Safety rule for agent",
      "For device compatibility and watches:",
      "Never tell the customer the phone is definitely compatible until IMEI/device check is",
      "verified.",
      "Never promise watch support, pricing, or included add-ons without current",
      "account/internal verification.",
      "Never tell customers to flash firmware, root devices, or use unofficial debug tools.",
      "Never expose full IMEI/EID/ICCID in visible notes unless inside approved internal tools.",
      "Mark IMEI, EID, ICCID, whitelist, watch EID pairing, and provisioning actions as",
      "INTERNAL VERIFICATION REQUIRED."
    ],
    "batch": "Batch 7",
    "aliases": [
      "apple watch support",
      "pixel watch support",
      "watch activation issue",
      "wearable setup",
      "standalone",
      "watch",
      "companion watch",
      "watch cellular not working",
      "carrier does not support apple watch",
      "watch no connection",
      "numbersync"
    ],
    "symptoms": [
      "apple watch support",
      "pixel watch support",
      "watch activation issue",
      "wearable setup",
      "standalone",
      "watch",
      "companion watch",
      "watch cellular not working",
      "carrier does not support apple watch",
      "watch no connection",
      "numbersync"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X3, P7, X10"
  },
  {
    "id": "pre-departure-checklist-travel-options",
    "title": "Pre-Departure Checklist & Travel Options",
    "category": "international-roaming",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "international-roaming",
      "batch8"
    ],
    "keywords": [
      "pre",
      "departure",
      "checklist",
      "travel",
      "options",
      "international-roaming"
    ],
    "customerPhrases": [
      "travel checklist",
      "going abroad",
      "native roaming",
      "travel esim",
      "wi-fi calling abroad",
      "roaming setup",
      "international data",
      "need calls abroad",
      "need texts abroad",
      "bank codes abroad",
      "domestic usage",
      "before travel"
    ],
    "preview": {
      "problem": "Pre-travel setup / wrong travel product choice / missing Wi-Fi Calling setup / device locked /",
      "firstQuestion": "Do you need calls/texts on your normal US number, or do you only need internet data?",
      "firstAction": "Identify the customer’s goal:",
      "escalateIf": "Usually no escalation for pre-travel education unless the account/app cannot enable a"
    },
    "quickAnswer": "Pre-travel setup / wrong travel product choice / missing Wi-Fi Calling setup / device locked / \nroaming not enabled before departure",
    "useWhen": "Use when customer reports: travel checklist, going abroad, native roaming, travel eSIM, Wi-Fi Calling abroad, roaming setup,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Do you need calls/texts on your normal US number, or do you only need internet data?",
      "Are you still in the U.S., or already abroad?",
      "What country are you traveling to, and which network is your line on: Warp, Dark Star, or",
      "Light Speed?"
    ],
    "quickChecks": [
      "Verify plan, network, destination, and roaming inclusion/add-on eligibility. INTERNAL",
      "VERIFICATION REQUIRED",
      "Confirm device is carrier-unlocked if Travel eSIM is being considered.",
      "Confirm Wi-Fi Calling and E911 are set up before departure if customer needs SMS/calls",
      "over Wi-Fi. INTERNAL VERIFICATION REQUIRED",
      "Confirm the line has connected domestically before travel if Native Roaming is needed.",
      "INTERNAL VERIFICATION REQUIRED",
      "For Dark Star or any network-specific setup, verify current app/dashboard setup",
      "requirements. INTERNAL VERIFICATION REQUIRED"
    ],
    "quickSteps": [
      "Verify plan, network, destination, and roaming inclusion/add-on eligibility. INTERNAL",
      "VERIFICATION REQUIRED",
      "Confirm device is carrier-unlocked if Travel eSIM is being considered.",
      "Confirm Wi-Fi Calling and E911 are set up before departure if customer needs SMS/calls",
      "over Wi-Fi. INTERNAL VERIFICATION REQUIRED",
      "Confirm the line has connected domestically before travel if Native Roaming is needed.",
      "INTERNAL VERIFICATION REQUIRED",
      "For Dark Star or any network-specific setup, verify current app/dashboard setup",
      "requirements. INTERNAL VERIFICATION REQUIRED"
    ],
    "steps": [
      "Identify the customer’s goal:",
      "Normal number for calls/SMS/bank codes abroad → Native Roaming or Wi-Fi",
      "Calling.",
      "Data for maps/apps/WhatsApp only → Travel eSIM may be enough.",
      "Confirm whether customer is still in the U.S.",
      "If still in the U.S., help them:",
      "Enable Wi-Fi Calling.",
      "Register E911 address.",
      "Confirm domestic cellular connection has occurred.",
      "Confirm plan/destination support.",
      "If they need Native Roaming, verify plan/add-on/destination support. INTERNAL",
      "VERIFICATION REQUIRED",
      "If they only need data, confirm phone is unlocked and explain Travel eSIM limitations.",
      "Tell customer Travel eSIM does not replace their main number for normal cellular",
      "calls/SMS.",
      "Tell customer to avoid cancelling or deleting their main US Mobile line/eSIM before",
      "travel.",
      "If already abroad and setup was not completed, use “Abroad No Service” and “Wi-Fi",
      "Calling Abroad” cards."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Cellular > Wi-Fi Calling > ON before travel.",
        "Settings > Cellular > Data Roaming should be ON only when using Native Roaming",
        "abroad.",
        "For Travel eSIM, confirm Cellular Data is set to the Travel eSIM and Data Roaming is",
        "ON for that eSIM.",
        "Confirm device is unlocked: Settings > General > About > Carrier Lock = “No SIM",
        "restrictions.”"
      ],
      "android": [
        "Settings path varies: Network & Internet / Connections > Wi-Fi Calling > ON before",
        "travel.",
        "For Native Roaming: SIM settings > Roaming ON when abroad.",
        "For Travel eSIM: SIM Manager > select Travel eSIM for mobile data.",
        "Confirm device is carrier-unlocked before buying/installing Travel eSIM."
      ],
      "general": [
        "Identify the customer’s goal:",
        "Normal number for calls/SMS/bank codes abroad → Native Roaming or Wi-Fi",
        "Calling.",
        "Data for maps/apps/WhatsApp only → Travel eSIM may be enough.",
        "Confirm whether customer is still in the U.S.",
        "If still in the U.S., help them:",
        "Enable Wi-Fi Calling.",
        "Register E911 address.",
        "Confirm domestic cellular connection has occurred.",
        "Confirm plan/destination support.",
        "If they need Native Roaming, verify plan/add-on/destination support. INTERNAL",
        "VERIFICATION REQUIRED",
        "If they only need data, confirm phone is unlocked and explain Travel eSIM limitations.",
        "Tell customer Travel eSIM does not replace their main number for normal cellular",
        "calls/SMS.",
        "Tell customer to avoid cancelling or deleting their main US Mobile line/eSIM before",
        "travel.",
        "If already abroad and setup was not completed, use “Abroad No Service” and “Wi-Fi",
        "Calling Abroad” cards."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Before travel, the main question is whether you need your normal US number for calls/texts, or \njust internet data. \nNative Roaming is for using your US Mobile number abroad where supported. A Travel eSIM is \nusually data-only, so it is great for maps, WhatsApp, FaceTime, and browsing, but it will not \nreceive normal SMS bank codes by itself. If you still need codes or calls on your main number, \nwe should also set up Wi-Fi Calling before you leave."
      }
    ],
    "zendeskNote": "Issue: Pre-travel roaming guidance \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nDestination: [Country] \nCustomer need: [Calls/SMS/data/OTP/data-only] \nTravel status: [Still in US / Already abroad] \nDevice: [Unlocked / Locked / Unknown] \nGuidance given: Native Roaming vs Travel eSIM vs Wi-Fi Calling explained \nInternal checks: Plan/destination support, domestic usage, E911/Wi-Fi Calling status \nINTERNAL VERIFICATION REQUIRED \nNext action: Add roaming, purchase Travel eSIM, enable Wi-Fi Calling, or document limitations",
    "escalation": {
      "neededWhen": [
        "Usually no escalation for pre-travel education unless the account/app cannot enable a",
        "purchased or included feature after all eligibility checks pass."
      ],
      "evidenceNeeded": [
        "Plan inclusion, add-on status, destination support, domestic usage",
        "history, E911 status, Wi-Fi Calling status, app/dashboard roaming setup."
      ],
      "summaryTemplate": "Pre-travel feature setup issue. Destination: [X]. Network: [X]. Plan/add-on eligibility checked: \n[Yes/No]. Device unlocked: [Yes/No]. E911/Wi-Fi Calling status: [X]. Error/block: [X]. Requesting \nroaming/travel feature provisioning review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Usually no escalation for pre-travel education unless the account/app cannot enable a",
      "purchased or included feature after all eligibility checks pass."
    ],
    "escalationFormat": [
      "Pre-travel feature setup issue. Destination: [X]. Network: [X]. Plan/add-on eligibility checked: ",
      "[Yes/No]. Device unlocked: [Yes/No]. E911/Wi-Fi Calling status: [X]. Error/block: [X]. Requesting ",
      "roaming/travel feature provisioning review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "abroad-no-service-native-roaming-setup",
      "travel-esim-limitations-data-setup",
      "bank-otp-abroad-wi-fi-calling",
      "wi-fi-calling-e911-setup"
    ],
    "sourceAliases": [
      "X6",
      "X4",
      "X8",
      "P3"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Plan inclusion, add-on status, destination support, domestic usage",
      "history, E911 status, Wi-Fi Calling status, app/dashboard roaming setup."
    ],
    "batch": "Batch 8",
    "aliases": [
      "travel checklist",
      "going abroad",
      "native roaming",
      "travel esim",
      "wi-fi calling abroad",
      "roaming setup",
      "international data",
      "need calls abroad",
      "need texts abroad",
      "bank codes abroad",
      "domestic usage",
      "before travel"
    ],
    "symptoms": [
      "travel checklist",
      "going abroad",
      "native roaming",
      "travel esim",
      "wi-fi calling abroad",
      "roaming setup",
      "international data",
      "need calls abroad",
      "need texts abroad",
      "bank codes abroad",
      "domestic usage",
      "before travel"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X6, X4, X8, P3"
  },
  {
    "id": "abroad-no-service-native-roaming-setup",
    "title": "Abroad No Service & Native Roaming Setup",
    "category": "international-roaming",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "international-roaming",
      "batch8"
    ],
    "keywords": [
      "abroad",
      "service",
      "native",
      "roaming",
      "setup",
      "international-roaming"
    ],
    "customerPhrases": [
      "abroad no service",
      "landed abroad no signal",
      "phone says sos abroad",
      "roaming not working",
      "data roaming toggle",
      "manual network selection abroad",
      "dark star roaming destination",
      "foreign",
      "network not connecting"
    ],
    "preview": {
      "problem": "Native Roaming not provisioned / roaming add-on missing / Data Roaming off / destination not",
      "firstQuestion": "Are you using Native Roaming on your main US Mobile line, or a separate Travel eSIM?",
      "firstAction": "Confirm customer is trying to use Native Roaming, not Travel eSIM.",
      "escalateIf": "Plan/add-on and destination support confirmed."
    },
    "quickAnswer": "Native Roaming not provisioned / roaming add-on missing / Data Roaming off / destination not \nsupported / domestic registration missing / foreign partner network issue / manual network \nmismatch",
    "useWhen": "Use when customer reports: abroad no service, landed abroad no signal, phone says SOS abroad, roaming not working,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are you using Native Roaming on your main US Mobile line, or a separate Travel eSIM?",
      "What country are you in, and which network is your US Mobile line on?",
      "Did this line connect to a U.S. cellular tower before you left?"
    ],
    "quickChecks": [
      "Verify plan/add-on and destination support. INTERNAL VERIFICATION REQUIRED",
      "Verify domestic usage/registration before travel if required. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm Data Roaming is ON for the US Mobile line.",
      "Confirm Network Selection is Automatic.",
      "For network-specific setup such as destination selection, verify current app/dashboard",
      "requirement. INTERNAL VERIFICATION REQUIRED"
    ],
    "quickSteps": [
      "Verify plan/add-on and destination support. INTERNAL VERIFICATION REQUIRED",
      "Verify domestic usage/registration before travel if required. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm Data Roaming is ON for the US Mobile line.",
      "Confirm Network Selection is Automatic.",
      "For network-specific setup such as destination selection, verify current app/dashboard",
      "requirement. INTERNAL VERIFICATION REQUIRED"
    ],
    "steps": [
      "Confirm customer is trying to use Native Roaming, not Travel eSIM.",
      "Confirm country and network.",
      "Check plan/add-on/destination support. INTERNAL VERIFICATION REQUIRED",
      "Check domestic registration/usage history if required. INTERNAL VERIFICATION",
      "REQUIRED",
      "On the device, turn Data Roaming ON for the US Mobile line.",
      "Set Network Selection to Automatic.",
      "Toggle Airplane Mode ON for 30 seconds, then OFF.",
      "Wait for the phone to search/register.",
      "If Automatic fails, try manual network selection only if supported roaming partner",
      "guidance exists.",
      "Confirm APN if data is the only part failing.",
      "Escalate if native roaming is eligible/provisioned, device settings are correct, and no",
      "service persists."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Cellular > select US Mobile line > Data Roaming ON.",
        "Settings > Cellular > Network Selection > Automatic ON.",
        "Toggle Airplane Mode ON for 30 seconds, then OFF.",
        "Confirm correct line is active if using dual SIM/travel eSIM."
      ],
      "android": [
        "Settings > Network & Internet / Connections > SIMs > select US Mobile line > Roaming",
        "ON.",
        "Mobile Networks > Network Operators > Select Automatically ON.",
        "Toggle Airplane Mode ON for 30 seconds, then OFF.",
        "Confirm correct SIM/eSIM is active."
      ],
      "general": [
        "Confirm customer is trying to use Native Roaming, not Travel eSIM.",
        "Confirm country and network.",
        "Check plan/add-on/destination support. INTERNAL VERIFICATION REQUIRED",
        "Check domestic registration/usage history if required. INTERNAL VERIFICATION",
        "REQUIRED",
        "On the device, turn Data Roaming ON for the US Mobile line.",
        "Set Network Selection to Automatic.",
        "Toggle Airplane Mode ON for 30 seconds, then OFF.",
        "Wait for the phone to search/register.",
        "If Automatic fails, try manual network selection only if supported roaming partner",
        "guidance exists.",
        "Confirm APN if data is the only part failing.",
        "Escalate if native roaming is eligible/provisioned, device settings are correct, and no",
        "service persists."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Let’s make sure your main US Mobile line is allowed to register on the local network. Please \nturn Data Roaming ON for the US Mobile line, set Network Selection to Automatic, then turn \nAirplane Mode ON for 30 seconds and OFF again. \nI’ll check the roaming eligibility and destination support on my end while your phone searches \nfor a partner network."
      }
    ],
    "zendeskNote": "Issue: Native roaming no service / SOS abroad \nNetwork: [Warp / Dark Star / Light Speed] \nDestination: [Country] \nDevice/OS: [Device + OS] \nSIM/eSIM: [eSIM / pSIM / dual SIM] \nSymptoms: [SOS / No Service / searching / data only / calls fail] \nSteps tried: Data Roaming ON, Network Selection Automatic, Airplane toggle, APN checked if \nneeded \nInternal checks: Plan/add-on, destination support, domestic usage, roaming provisioning \nINTERNAL VERIFICATION REQUIRED \nSuspected cause: Missing roaming eligibility, domestic registration issue, device setting, or \nforeign partner registration failure \nNext action: Escalate if fully provisioned but still rejected/no service",
    "escalation": {
      "neededWhen": [
        "Plan/add-on and destination support confirmed.",
        "Domestic registration requirement confirmed.",
        "Data Roaming ON.",
        "Network Selection Automatic.",
        "Device restarted/Airplane Mode toggled.",
        "No service persists or foreign network rejects registration."
      ],
      "evidenceNeeded": [
        "Plan/add-on, destination support, domestic usage, roaming",
        "provisioning, partner-network registration, HLR/VLR review."
      ],
      "summaryTemplate": "Native roaming failure. Destination: [Country]. Network: [X]. Device/OS: [X]. Plan/add-on \nverified: [Yes/No]. Domestic usage confirmed: [Yes/No]. Data Roaming ON. Network Selection \nAutomatic. APN checked if relevant. Current state: [SOS/No Service/etc.]. Requesting roaming \nprovisioning / HLR-HSS / VLR registration review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Plan/add-on and destination support confirmed.",
      "Domestic registration requirement confirmed.",
      "Data Roaming ON.",
      "Network Selection Automatic.",
      "Device restarted/Airplane Mode toggled.",
      "No service persists or foreign network rejects registration."
    ],
    "escalationFormat": [
      "Native roaming failure. Destination: [Country]. Network: [X]. Device/OS: [X]. Plan/add-on ",
      "verified: [Yes/No]. Domestic usage confirmed: [Yes/No]. Data Roaming ON. Network Selection ",
      "Automatic. APN checked if relevant. Current state: [SOS/No Service/etc.]. Requesting roaming ",
      "provisioning / HLR-HSS / VLR registration review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "pre-departure-checklist-travel-options",
      "asymmetrical-roaming-failures-data-vs-voicesms",
      "travel-esim-limitations-data-setup",
      "abroad-no-service-native-roaming-setup",
      "roaming-escalations-what-not-to-promise"
    ],
    "sourceAliases": [
      "X6",
      "P4",
      "P7"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Plan/add-on, destination support, domestic usage, roaming",
      "provisioning, partner-network registration, HLR/VLR review."
    ],
    "batch": "Batch 8",
    "aliases": [
      "abroad no service",
      "landed abroad no signal",
      "phone says sos abroad",
      "roaming not working",
      "data roaming toggle",
      "manual network selection abroad",
      "dark star roaming destination",
      "foreign",
      "network not connecting"
    ],
    "symptoms": [
      "abroad no service",
      "landed abroad no signal",
      "phone says sos abroad",
      "roaming not working",
      "data roaming toggle",
      "manual network selection abroad",
      "dark star roaming destination",
      "foreign",
      "network not connecting"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X6, P4, P7"
  },
  {
    "id": "asymmetrical-roaming-failures-data-vs-voicesms",
    "title": "Asymmetrical Roaming Failures — Data vs Voice/SMS",
    "category": "international-roaming",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "international-roaming",
      "batch8"
    ],
    "keywords": [
      "asymmetrical",
      "roaming",
      "failures",
      "data",
      "voice",
      "sms",
      "international-roaming"
    ],
    "customerPhrases": [
      "data works abroad but calls don’t",
      "data works but sms fails abroad",
      "calls work but data doesn’t",
      "roaming data not working",
      "roaming calls not working",
      "voice fails abroad",
      "sms fails abroad",
      "+1",
      "dialing abroad"
    ],
    "preview": {
      "problem": "Travel eSIM misunderstanding / Native Roaming partial failure / VoLTE issue / roaming data",
      "firstQuestion": "Are you using your main US Mobile line with Native Roaming, or a separate Travel",
      "firstAction": "Identify what works: data, calls, SMS, OTP, or none.",
      "escalateIf": "Native Roaming eligibility confirmed."
    },
    "quickAnswer": "Travel eSIM misunderstanding / Native Roaming partial failure / VoLTE issue / roaming data \nbucket issue / APN issue / destination voice-SMS limitation / dialing-format issue",
    "useWhen": "Use when customer reports: data works abroad but calls don’t, data works but SMS fails abroad, calls work but data doesn’t,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are you using your main US Mobile line with Native Roaming, or a separate Travel",
      "eSIM?",
      "What works right now: data, calls, SMS, or none?",
      "Are you dialing U.S. numbers with +1 before the number?"
    ],
    "quickChecks": [
      "Confirm Native Roaming vs Travel eSIM.",
      "Verify roaming data/voice/SMS balance or add-on state. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm Data Roaming is ON.",
      "Confirm APN if data fails.",
      "Confirm VoLTE/IMS and destination voice/SMS support if calls/SMS fail. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "quickSteps": [
      "Confirm Native Roaming vs Travel eSIM.",
      "Verify roaming data/voice/SMS balance or add-on state. INTERNAL VERIFICATION",
      "REQUIRED",
      "Confirm Data Roaming is ON.",
      "Confirm APN if data fails.",
      "Confirm VoLTE/IMS and destination voice/SMS support if calls/SMS fail. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "steps": [
      "Identify what works: data, calls, SMS, OTP, or none.",
      "Confirm whether customer is on Native Roaming or Travel eSIM.",
      "If Travel eSIM: explain it is data-only and will not provide normal voice/SMS.",
      "If Native Roaming and data fails:",
      "Confirm roaming data balance/add-on.",
      "Turn Data Roaming ON.",
      "Verify APN.",
      "Restart phone.",
      "If Native Roaming and voice/SMS fail:",
      "Confirm destination supports voice/SMS on that network/add-on.",
      "Confirm VoLTE/voice setting if visible.",
      "Use +1 for U.S. calls.",
      "Test SMS to a normal U.S. contact.",
      "If one service still fails after setup and eligibility checks, escalate with exact service",
      "affected. INTERNAL VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Cellular > Data Roaming ON for the active US Mobile line.",
        "Settings > Cellular > Voice & Data: confirm LTE/5G mode as appropriate.",
        "Dial U.S. numbers as +1 + area code + number.",
        "Confirm correct line is selected for calls/SMS/data if dual SIM."
      ],
      "android": [
        "SIM settings > Roaming ON.",
        "Mobile Networks > VoLTE/Enhanced Calling if visible.",
        "Verify APN for current network.",
        "Dial U.S. numbers using +1.",
        "Confirm default SIM for calls/SMS/data."
      ],
      "general": [
        "Identify what works: data, calls, SMS, OTP, or none.",
        "Confirm whether customer is on Native Roaming or Travel eSIM.",
        "If Travel eSIM: explain it is data-only and will not provide normal voice/SMS.",
        "If Native Roaming and data fails:",
        "Confirm roaming data balance/add-on.",
        "Turn Data Roaming ON.",
        "Verify APN.",
        "Restart phone.",
        "If Native Roaming and voice/SMS fail:",
        "Confirm destination supports voice/SMS on that network/add-on.",
        "Confirm VoLTE/voice setting if visible.",
        "Use +1 for U.S. calls.",
        "Test SMS to a normal U.S. contact.",
        "If one service still fails after setup and eligibility checks, escalate with exact service",
        "affected. INTERNAL VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Let’s separate which roaming service is failing. Travel eSIMs are data-only, so they won’t carry \nnormal calls or SMS on your US number. If you’re using Native Roaming, we’ll check the \nroaming balance, Data Roaming toggle, APN, and voice/SMS support for your destination. \nFor U.S. calls while abroad, please dial using +1 before the area code and number."
      }
    ],
    "zendeskNote": "Issue: Partial/asymmetrical roaming failure \nNetwork: [Warp / Dark Star / Light Speed] \nDestination: [Country] \nRoaming type: [Native Roaming / Travel eSIM / Unknown] \nDevice/OS: [Device + OS] \nWorks: [Data / Calls / SMS] \nFails: [Data / Calls / SMS / OTP] \nSteps tried: Data Roaming ON, APN checked, +1 dialing, VoLTE checked, restart \nInternal checks: Roaming balance/add-on, destination support, VLR voice/data registration \nINTERNAL VERIFICATION REQUIRED \nSuspected cause: Data bucket/APN issue, Travel eSIM limitation, voice/SMS roaming limitation, \nor partner registration issue \nNext action: Escalate exact failed service if eligible/provisioned",
    "escalation": {
      "neededWhen": [
        "Native Roaming eligibility confirmed.",
        "Destination support confirmed.",
        "Roaming balance/add-on active.",
        "Device settings/APN correct.",
        "One service still fails consistently."
      ],
      "evidenceNeeded": [
        "Roaming balance, destination voice/SMS/data support, add-on",
        "state, VLR registration, APN/provisioning."
      ],
      "summaryTemplate": "Asymmetrical roaming failure. Destination: [Country]. Network: [X]. Native/Travel eSIM: [X]. Data \nstatus: [works/fails]. Calls status: [works/fails]. SMS status: [works/fails]. Roaming \nbalance/add-on verified. APN/Data Roaming/VoLTE/+1 dialing checked. Requesting \nVLR/roaming service registration review for [data/voice/SMS]. INTERNAL VERIFICATION \nREQUIRED"
    },
    "escalationRequiredWhen": [
      "Native Roaming eligibility confirmed.",
      "Destination support confirmed.",
      "Roaming balance/add-on active.",
      "Device settings/APN correct.",
      "One service still fails consistently."
    ],
    "escalationFormat": [
      "Asymmetrical roaming failure. Destination: [Country]. Network: [X]. Native/Travel eSIM: [X]. Data ",
      "status: [works/fails]. Calls status: [works/fails]. SMS status: [works/fails]. Roaming ",
      "balance/add-on verified. APN/Data Roaming/VoLTE/+1 dialing checked. Requesting ",
      "VLR/roaming service registration review for [data/voice/SMS]. INTERNAL VERIFICATION ",
      "REQUIRED"
    ],
    "relatedPlaybooks": [
      "abroad-no-service-native-roaming-setup",
      "travel-esim-limitations-data-setup",
      "bank-otp-abroad-wi-fi-calling",
      "apndata"
    ],
    "sourceAliases": [
      "X6",
      "P4",
      "X1"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Roaming balance, destination voice/SMS/data support, add-on",
      "state, VLR registration, APN/provisioning."
    ],
    "batch": "Batch 8",
    "aliases": [
      "data works abroad but calls don’t",
      "data works but sms fails abroad",
      "calls work but data doesn’t",
      "roaming data not working",
      "roaming calls not working",
      "voice fails abroad",
      "sms fails abroad",
      "+1",
      "dialing abroad"
    ],
    "symptoms": [
      "data works abroad but calls don’t",
      "data works but sms fails abroad",
      "calls work but data doesn’t",
      "roaming data not working",
      "roaming calls not working",
      "voice fails abroad",
      "sms fails abroad",
      "+1",
      "dialing abroad"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X6, P4, X1"
  },
  {
    "id": "bank-otp-abroad-wi-fi-calling",
    "title": "Bank OTP Abroad & Wi-Fi Calling",
    "category": "international-roaming",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "international-roaming",
      "batch8"
    ],
    "keywords": [
      "bank",
      "otp",
      "abroad",
      "calling",
      "international-roaming"
    ],
    "customerPhrases": [
      "bank otp abroad",
      "cannot receive 2fa abroad",
      "short code not coming overseas",
      "wi-fi calling",
      "abroad",
      "bank code not coming while traveling",
      "verification code abroad",
      "travel esim bank code"
    ],
    "preview": {
      "problem": "A2P/short-code international routing block / Travel eSIM misunderstanding / Wi-Fi Calling not",
      "firstQuestion": "Can you receive normal SMS from friends/family, or only bank codes are failing?",
      "firstAction": "Confirm whether the issue is only bank/short codes or all SMS.",
      "escalateIf": "Standard SMS fails abroad despite eligible/provisioned Native Roaming."
    },
    "quickAnswer": "A2P/short-code international routing block / Travel eSIM misunderstanding / Wi-Fi Calling not \nset up / E911 not registered / hotel Wi-Fi firewall / standard SMS roaming failure",
    "useWhen": "Use when customer reports: bank OTP abroad, cannot receive 2FA abroad, short code not coming overseas, Wi-Fi Calling",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Can you receive normal SMS from friends/family, or only bank codes are failing?",
      "Did you enable Wi-Fi Calling while still in the U.S.?",
      "Are you using Native Roaming or a Travel eSIM?"
    ],
    "quickChecks": [
      "Confirm standard SMS works or fails.",
      "Confirm whether customer is using Travel eSIM only.",
      "Check Wi-Fi Calling/E911 status. INTERNAL VERIFICATION REQUIRED",
      "Test secure Wi-Fi, not captive portal/hotel Wi-Fi if possible.",
      "Ask customer to use Airplane Mode + Wi-Fi Calling if already enabled."
    ],
    "quickSteps": [
      "Confirm standard SMS works or fails.",
      "Confirm whether customer is using Travel eSIM only.",
      "Check Wi-Fi Calling/E911 status. INTERNAL VERIFICATION REQUIRED",
      "Test secure Wi-Fi, not captive portal/hotel Wi-Fi if possible.",
      "Ask customer to use Airplane Mode + Wi-Fi Calling if already enabled."
    ],
    "steps": [
      "Confirm whether the issue is only bank/short codes or all SMS.",
      "If Travel eSIM only, explain it cannot receive normal SMS.",
      "If standard SMS fails too, use roaming SMS/Native Roaming troubleshooting.",
      "If standard SMS works but bank OTP fails, explain bank/short-code international routing",
      "can be blocked by the sender/aggregator.",
      "If Wi-Fi Calling was enabled before travel:",
      "Connect to stable secure Wi-Fi.",
      "Turn Airplane Mode ON.",
      "Turn Wi-Fi back ON if needed.",
      "Confirm Wi-Fi Calling shows active.",
      "Request the bank code again.",
      "If Wi-Fi Calling was not enabled before travel, do not promise it can be activated abroad.",
      "Suggest alternate bank verification methods temporarily: app push, email, authenticator",
      "app, backup code, or bank support.",
      "Escalate only if standard SMS fails or Wi-Fi Calling SMS should work but does not after",
      "verification. INTERNAL VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Cellular > Wi-Fi Calling.",
        "Use Airplane Mode ON + Wi-Fi ON to force Wi-Fi Calling if already enabled.",
        "Confirm “Wi-Fi Calling” indicator if visible.",
        "Check Messages filters/Unknown Senders."
      ],
      "android": [
        "Settings > Network & Internet / Connections > Wi-Fi Calling.",
        "Use Airplane Mode ON + Wi-Fi ON to force Wi-Fi Calling if already enabled.",
        "Check Google Messages spam/blocked folder.",
        "Confirm correct SIM selected for SMS."
      ],
      "general": [
        "Confirm whether the issue is only bank/short codes or all SMS.",
        "If Travel eSIM only, explain it cannot receive normal SMS.",
        "If standard SMS fails too, use roaming SMS/Native Roaming troubleshooting.",
        "If standard SMS works but bank OTP fails, explain bank/short-code international routing",
        "can be blocked by the sender/aggregator.",
        "If Wi-Fi Calling was enabled before travel:",
        "Connect to stable secure Wi-Fi.",
        "Turn Airplane Mode ON.",
        "Turn Wi-Fi back ON if needed.",
        "Confirm Wi-Fi Calling shows active.",
        "Request the bank code again.",
        "If Wi-Fi Calling was not enabled before travel, do not promise it can be activated abroad.",
        "Suggest alternate bank verification methods temporarily: app push, email, authenticator",
        "app, backup code, or bank support.",
        "Escalate only if standard SMS fails or Wi-Fi Calling SMS should work but does not after",
        "verification. INTERNAL VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Bank codes are more sensitive than normal texts, and some banks block or delay those \nmessages over international routes. If Wi-Fi Calling was already enabled, the best test is to \nconnect to secure Wi-Fi, turn Airplane Mode ON, leave Wi-Fi ON, and then request the code \nagain. \nIf you are using only a Travel eSIM, that eSIM is data-only and cannot receive SMS codes for \nyour normal phone number."
      }
    ],
    "zendeskNote": "Issue: Bank OTP / short code abroad \nNetwork: [Warp / Dark Star / Light Speed] \nDestination: [Country] \nRoaming type: [Native / Travel eSIM / Wi-Fi Calling] \nDevice/OS: [Device + OS] \n\nStandard SMS: [Works/Fails] \nSender/short code: [Bank/service] \nSteps tried: Wi-Fi Calling check, Airplane Mode + Wi-Fi test, Travel eSIM limitation explained, \nspam filters checked \nInternal checks: Wi-Fi Calling/E911, SMS feature, roaming status INTERNAL VERIFICATION \nREQUIRED \nSuspected cause: Bank/A2P international routing block, Travel eSIM limitation, or broader SMS \nroaming issue \nNext action: Use alternate bank verification or escalate if standard SMS/Wi-Fi Calling SMS fails",
    "escalation": {
      "neededWhen": [
        "Standard SMS fails abroad despite eligible/provisioned Native Roaming.",
        "Wi-Fi Calling is verified active, but SMS to normal domestic contacts fails over Wi-Fi.",
        "Customer is locked out of critical accounts and standard SMS routing appears broadly",
        "broken.",
        "Multiple services fail after port/Teleport/travel beyond expected routing window."
      ],
      "evidenceNeeded": [
        "E911/Wi-Fi Calling status, SMS feature state, Native Roaming",
        "state, standard SMS routing, roaming registration."
      ],
      "summaryTemplate": "OTP/SMS abroad issue. Destination: [Country]. Network: [X]. Standard SMS: [works/fails]. \nBank/short code: [X]. Wi-Fi Calling enabled/E911: [Yes/No]. Airplane Mode + Wi-Fi test result: \n[X]. Travel eSIM used: [Yes/No]. Requesting SMS/Wi-Fi Calling/roaming routing review if \nstandard SMS fails. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Standard SMS fails abroad despite eligible/provisioned Native Roaming.",
      "Wi-Fi Calling is verified active, but SMS to normal domestic contacts fails over Wi-Fi.",
      "Customer is locked out of critical accounts and standard SMS routing appears broadly",
      "broken.",
      "Multiple services fail after port/Teleport/travel beyond expected routing window."
    ],
    "escalationFormat": [
      "OTP/SMS abroad issue. Destination: [Country]. Network: [X]. Standard SMS: [works/fails]. ",
      "Bank/short code: [X]. Wi-Fi Calling enabled/E911: [Yes/No]. Airplane Mode + Wi-Fi test result: ",
      "[X]. Travel eSIM used: [Yes/No]. Requesting SMS/Wi-Fi Calling/roaming routing review if ",
      "standard SMS fails. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "bank-otp-short-codes",
      "wi-fi-calling-e911-setup",
      "travel-esim-limitations-data-setup",
      "asymmetrical-roaming-failures-data-vs-voicesms",
      "abroad-no-service-native-roaming-setup"
    ],
    "sourceAliases": [
      "X6",
      "X4",
      "X5",
      "P5"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "E911/Wi-Fi Calling status, SMS feature state, Native Roaming",
      "state, standard SMS routing, roaming registration."
    ],
    "batch": "Batch 8",
    "aliases": [
      "bank otp abroad",
      "cannot receive 2fa abroad",
      "short code not coming overseas",
      "wi-fi calling",
      "abroad",
      "bank code not coming while traveling",
      "verification code abroad",
      "travel esim bank code"
    ],
    "symptoms": [
      "bank otp abroad",
      "cannot receive 2fa abroad",
      "short code not coming overseas",
      "wi-fi calling",
      "abroad",
      "bank code not coming while traveling",
      "verification code abroad",
      "travel esim bank code"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X6, X4, X5, P5"
  },
  {
    "id": "cruise-maritime-border-roaming",
    "title": "Cruise, Maritime & Border Roaming",
    "category": "international-roaming",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "international-roaming",
      "batch8"
    ],
    "keywords": [
      "cruise",
      "maritime",
      "border",
      "roaming",
      "international-roaming"
    ],
    "customerPhrases": [
      "cruise roaming",
      "maritime roaming",
      "airplane roaming",
      "aviation roaming",
      "border roaming",
      "connected to canada",
      "connected to mexico",
      "roaming near border",
      "ship wi-fi",
      "roaming charges",
      "on ship",
      "mnc 901"
    ],
    "preview": {
      "problem": "Unsupported maritime/aviation network / border tower overlap / accidental roaming / manual",
      "firstQuestion": "Are you on a cruise/ship/airplane, or near a U.S. border?",
      "firstAction": "Identify scenario: cruise/maritime, aviation, or land border.",
      "escalateIf": "Customer disputes maritime/foreign roaming usage."
    },
    "quickAnswer": "Unsupported maritime/aviation network / border tower overlap / accidental roaming / manual \nnetwork selection needed / billing usage dispute",
    "useWhen": "Use when customer reports: cruise roaming, maritime roaming, airplane roaming, aviation roaming, border roaming,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are you on a cruise/ship/airplane, or near a U.S. border?",
      "What carrier/network name does the phone show?",
      "Are you using cellular roaming or ship/hotel Wi-Fi?"
    ],
    "quickChecks": [
      "If on cruise/airplane, advise Airplane Mode and use Wi-Fi only.",
      "If near border, turn off Automatic Network Selection and choose the correct domestic",
      "network if available.",
      "Check actual physical location and destination.",
      "Check roaming usage logs if billing dispute exists. INTERNAL VERIFICATION",
      "REQUIRED",
      "Check Wi-Fi Calling setup if using ship Wi-Fi."
    ],
    "quickSteps": [
      "If on cruise/airplane, advise Airplane Mode and use Wi-Fi only.",
      "If near border, turn off Automatic Network Selection and choose the correct domestic",
      "network if available.",
      "Check actual physical location and destination.",
      "Check roaming usage logs if billing dispute exists. INTERNAL VERIFICATION",
      "REQUIRED",
      "Check Wi-Fi Calling setup if using ship Wi-Fi."
    ],
    "steps": [
      "Identify scenario: cruise/maritime, aviation, or land border.",
      "Cruise/aviation:",
      "Turn Airplane Mode ON immediately.",
      "Turn Wi-Fi ON only if using ship/aircraft Wi-Fi.",
      "Use Wi-Fi Calling/OTT apps if available.",
      "Do not rely on cellular maritime/aviation roaming.",
      "Border:",
      "Go to Network Selection.",
      "Turn Automatic OFF.",
      "Select the correct domestic host network if available.",
      "If unable to hold domestic network, keep roaming off or use Wi-Fi Calling.",
      "If billing/usage issue is reported, document time/location and request usage review.",
      "INTERNAL VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Cruise/airplane: Airplane Mode ON, then Wi-Fi ON if needed.",
        "Border: Settings > Cellular > Network Selection > Automatic OFF, select available",
        "domestic network.",
        "Data Roaming OFF if avoiding foreign tower attachment."
      ],
      "android": [
        "Cruise/airplane: Airplane Mode ON, then Wi-Fi ON.",
        "Border: Settings > Connections / Mobile Networks > Network Operators > turn off",
        "automatic selection and choose domestic network.",
        "Data Roaming OFF if avoiding foreign tower attachment."
      ],
      "general": [
        "Identify scenario: cruise/maritime, aviation, or land border.",
        "Cruise/aviation:",
        "Turn Airplane Mode ON immediately.",
        "Turn Wi-Fi ON only if using ship/aircraft Wi-Fi.",
        "Use Wi-Fi Calling/OTT apps if available.",
        "Do not rely on cellular maritime/aviation roaming.",
        "Border:",
        "Go to Network Selection.",
        "Turn Automatic OFF.",
        "Select the correct domestic host network if available.",
        "If unable to hold domestic network, keep roaming off or use Wi-Fi Calling.",
        "If billing/usage issue is reported, document time/location and request usage review.",
        "INTERNAL VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Cruise ships and airplanes use special cellular networks that are different from normal land \nroaming, so the safest option is to turn Airplane Mode ON and use Wi-Fi only. If Wi-Fi Calling is \nalready enabled, you may be able to call/text over the ship’s Wi-Fi. \nIf you’re near a U.S. border, your phone may be grabbing a stronger Canadian or Mexican \ntower. In that case, turn off Automatic Network Selection and manually choose the domestic \nnetwork."
      }
    ],
    "zendeskNote": "Issue: Cruise/maritime/border roaming \nLocation: [Ship / airport / border city / country] \nNetwork shown: [X] \nDevice/OS: [Device + OS] \nSymptoms: [Roaming indicator / no service / unexpected usage / battery drain] \nSteps tried: Airplane Mode, Wi-Fi only, manual network selection, Data Roaming OFF/ON as \nappropriate \nInternal checks: Usage logs/billing review if disputed INTERNAL VERIFICATION REQUIRED \nNext action: Customer educated / usage dispute escalated if needed",
    "escalation": {
      "neededWhen": [
        "Customer disputes maritime/foreign roaming usage.",
        "Usage logs conflict with customer’s report.",
        "Border roaming persists despite manual domestic selection and customer is in a strong",
        "domestic coverage area.",
        "Multiple border-area reports suggest routing/network issue."
      ],
      "evidenceNeeded": [
        "Roaming usage logs, billing review, disputed charges, partner",
        "network records, local border network behavior."
      ],
      "summaryTemplate": "Cruise/border roaming issue. Location: [X]. Network shown: [X]. Device/OS: [X]. Customer \naction: [Airplane Mode/manual selection/etc.]. Usage disputed: [Yes/No]. Usage timestamps: \n[X]. Requesting usage/billing/network review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Customer disputes maritime/foreign roaming usage.",
      "Usage logs conflict with customer’s report.",
      "Border roaming persists despite manual domestic selection and customer is in a strong",
      "domestic coverage area.",
      "Multiple border-area reports suggest routing/network issue."
    ],
    "escalationFormat": [
      "Cruise/border roaming issue. Location: [X]. Network shown: [X]. Device/OS: [X]. Customer ",
      "action: [Airplane Mode/manual selection/etc.]. Usage disputed: [Yes/No]. Usage timestamps: ",
      "[X]. Requesting usage/billing/network review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "wi-fi-calling-abroad",
      "roaming-escalations-what-not-to-promise",
      "billing-refund-review",
      "network-choice-coverage-band-troubleshooting"
    ],
    "sourceAliases": [
      "X6",
      "X9",
      "X7"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Roaming usage logs, billing review, disputed charges, partner",
      "network records, local border network behavior."
    ],
    "batch": "Batch 8",
    "aliases": [
      "cruise roaming",
      "maritime roaming",
      "airplane roaming",
      "aviation roaming",
      "border roaming",
      "connected to canada",
      "connected to mexico",
      "roaming near border",
      "ship wi-fi",
      "roaming charges",
      "on ship",
      "mnc 901"
    ],
    "symptoms": [
      "cruise roaming",
      "maritime roaming",
      "airplane roaming",
      "aviation roaming",
      "border roaming",
      "connected to canada",
      "connected to mexico",
      "roaming near border",
      "ship wi-fi",
      "roaming charges",
      "on ship",
      "mnc 901"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X6, X9, X7"
  },
  {
    "id": "travel-esim-limitations-data-setup",
    "title": "Travel eSIM Limitations & Data Setup",
    "category": "esim-sim",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "esim-sim",
      "batch8"
    ],
    "keywords": [
      "travel",
      "esim",
      "limitations",
      "data",
      "setup",
      "esim-sim"
    ],
    "customerPhrases": [
      "travel esim limitations",
      "travel esim no texts",
      "travel esim phone number",
      "travel esim expired",
      "travel esim no data",
      "travel esim deleted",
      "data-only esim",
      "default data line",
      "travel esim roaming"
    ],
    "preview": {
      "problem": "Travel eSIM misunderstanding / data-only limitation / expired or depleted eSIM / locked device /",
      "firstQuestion": "Are you trying to use internet data, or make normal phone calls/send SMS?",
      "firstAction": "Clarify the Travel eSIM is data-only.",
      "escalateIf": "Travel eSIM is valid and active."
    },
    "quickAnswer": "Travel eSIM misunderstanding / data-only limitation / expired or depleted eSIM / locked device / \nwrong default data line / roaming toggle off / deleted profile",
    "useWhen": "Use when customer reports: travel eSIM limitations, travel eSIM no texts, travel eSIM phone number, travel eSIM expired,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are you trying to use internet data, or make normal phone calls/send SMS?",
      "Is your phone unlocked?",
      "Is the Travel eSIM selected as your Cellular Data line?"
    ],
    "quickChecks": [
      "Verify Travel eSIM purchase, validity/expiration, and data balance. INTERNAL",
      "VERIFICATION REQUIRED",
      "Confirm device is carrier-unlocked.",
      "Confirm Travel eSIM is installed and enabled.",
      "Confirm Travel eSIM is selected for Cellular Data/Mobile Data.",
      "Confirm Data Roaming is ON for the Travel eSIM."
    ],
    "quickSteps": [
      "Verify Travel eSIM purchase, validity/expiration, and data balance. INTERNAL",
      "VERIFICATION REQUIRED",
      "Confirm device is carrier-unlocked.",
      "Confirm Travel eSIM is installed and enabled.",
      "Confirm Travel eSIM is selected for Cellular Data/Mobile Data.",
      "Confirm Data Roaming is ON for the Travel eSIM."
    ],
    "steps": [
      "Clarify the Travel eSIM is data-only.",
      "Confirm phone is unlocked.",
      "Confirm Travel eSIM is installed and enabled.",
      "Set Travel eSIM as Cellular Data/Mobile Data line.",
      "Turn Data Roaming ON for the Travel eSIM profile.",
      "Turn VPN/Private DNS off for testing.",
      "Restart phone.",
      "Check travel eSIM validity and data balance. INTERNAL VERIFICATION REQUIRED",
      "If deleted, check whether profile can be restored/reissued or must be repurchased under",
      "current policy. INTERNAL VERIFICATION REQUIRED",
      "Escalate if active, valid, selected, and still zero data."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Cellular > Cellular Data > select Travel eSIM.",
        "Select Travel eSIM profile > Data Roaming ON.",
        "Turn Allow Cellular Data Switching OFF during testing.",
        "Keep primary line active only if needed for calls/SMS and avoid confusing default line",
        "selection."
      ],
      "android": [
        "Settings > Connections / SIM Manager > Mobile Data / Data Service > select Travel",
        "eSIM.",
        "Select Travel eSIM > Roaming ON.",
        "Disable Private DNS/VPN for testing.",
        "Restart."
      ],
      "general": [
        "Clarify the Travel eSIM is data-only.",
        "Confirm phone is unlocked.",
        "Confirm Travel eSIM is installed and enabled.",
        "Set Travel eSIM as Cellular Data/Mobile Data line.",
        "Turn Data Roaming ON for the Travel eSIM profile.",
        "Turn VPN/Private DNS off for testing.",
        "Restart phone.",
        "Check travel eSIM validity and data balance. INTERNAL VERIFICATION REQUIRED",
        "If deleted, check whether profile can be restored/reissued or must be repurchased under",
        "current policy. INTERNAL VERIFICATION REQUIRED",
        "Escalate if active, valid, selected, and still zero data."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "A Travel eSIM is for internet data only. It does not come with a normal phone number, so \nstandard cellular calls and SMS — including many bank codes — will not work through that \nTravel eSIM. \n\nFor data, please set the Travel eSIM as your Cellular Data line and turn Data Roaming ON for \nthat Travel eSIM profile."
      }
    ],
    "zendeskNote": "Issue: Travel eSIM limitation / setup issue \nDestination: [Country] \nDevice/OS: [Device + OS] \nTravel eSIM status: [Installed / deleted / not installed / unknown] \nCustomer goal: [Data / calls / SMS / OTP] \nSteps tried: Data line selected, Data Roaming ON, VPN/DNS off, restart \nInternal checks: Purchase date, validity/expiration, data balance, reissue/refund eligibility \nINTERNAL VERIFICATION REQUIRED \nSuspected cause: Data-only limitation, expired/depleted eSIM, wrong data line, locked device, \nor profile issue \nNext action: Educate / reconfigure / escalate if active valid eSIM has zero data",
    "escalation": {
      "neededWhen": [
        "Travel eSIM is valid and active.",
        "Data remains available.",
        "Device is unlocked.",
        "Travel eSIM is selected for data.",
        "Data Roaming ON.",
        "Still zero throughput."
      ],
      "evidenceNeeded": [
        "Travel eSIM purchase, validity/expiration, data usage,",
        "reissue/refund eligibility, provider profile state."
      ],
      "summaryTemplate": "Travel eSIM data failure. Destination: [Country]. Device/OS: [X]. Travel eSIM installed: [Yes/No]. \nValidity/data balance: [X]. Device unlocked: [Yes/No]. Data line set to Travel eSIM. Data \nRoaming ON. VPN/DNS off. Result: zero data. Requesting Travel eSIM profile/provider review. \nINTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Travel eSIM is valid and active.",
      "Data remains available.",
      "Device is unlocked.",
      "Travel eSIM is selected for data.",
      "Data Roaming ON.",
      "Still zero throughput."
    ],
    "escalationFormat": [
      "Travel eSIM data failure. Destination: [Country]. Device/OS: [X]. Travel eSIM installed: [Yes/No]. ",
      "Validity/data balance: [X]. Device unlocked: [Yes/No]. Data line set to Travel eSIM. Data ",
      "Roaming ON. VPN/DNS off. Result: zero data. Requesting Travel eSIM profile/provider review. ",
      "INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "pre-departure-checklist-travel-options",
      "asymmetrical-roaming-failures-data-vs-voicesms",
      "bank-otp-abroad-wi-fi-calling",
      "esim-install-failures"
    ],
    "sourceAliases": [
      "X6",
      "X3",
      "X7"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Travel eSIM purchase, validity/expiration, data usage,",
      "reissue/refund eligibility, provider profile state."
    ],
    "batch": "Batch 8",
    "aliases": [
      "travel esim limitations",
      "travel esim no texts",
      "travel esim phone number",
      "travel esim expired",
      "travel esim no data",
      "travel esim deleted",
      "data-only esim",
      "default data line",
      "travel esim roaming"
    ],
    "symptoms": [
      "travel esim limitations",
      "travel esim no texts",
      "travel esim phone number",
      "travel esim expired",
      "travel esim no data",
      "travel esim deleted",
      "data-only esim",
      "default data line",
      "travel esim roaming"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X6, X3, X7"
  },
  {
    "id": "satellite-ntn-expectations-emergency-sos",
    "title": "Satellite / NTN Expectations & Emergency SOS",
    "category": "international-roaming",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "international-roaming",
      "batch8"
    ],
    "keywords": [
      "satellite",
      "ntn",
      "expectations",
      "emergency",
      "sos",
      "international-roaming"
    ],
    "customerPhrases": [
      "satellite",
      "ntn",
      "apple emergency sos",
      "messages via satellite",
      "starlink texting",
      "direct to cell",
      "no",
      "coverage in woods",
      "emergency sos",
      "remote area",
      "can i text by satellite"
    ],
    "preview": {
      "problem": "Emergency safety / device satellite feature vs carrier service / unsupported or experimental",
      "firstQuestion": "Are you in immediate danger or needing urgent medical/police help?",
      "firstAction": "",
      "escalateIf": "Customer is in active danger and unable to reach emergency services."
    },
    "quickAnswer": "Emergency safety / device satellite feature vs carrier service / unsupported or experimental \ndirect-to-cell expectation / remote coverage limitation",
    "useWhen": "Use when customer reports: satellite, NTN, Apple Emergency SOS, Messages via satellite, Starlink texting, direct to cell, no",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are you in immediate danger or needing urgent medical/police help?",
      "What device model are you using?",
      "Are you completely outside normal cellular/Wi-Fi coverage?"
    ],
    "quickChecks": [
      "If immediate danger: tell customer to call 911/use local emergency services/Apple",
      "Emergency SOS if available.",
      "Identify device model and OS.",
      "Separate Apple/device satellite features from US Mobile network service.",
      "Do not promise Android or carrier satellite SMS unless officially supported and verified.",
      "If no emergency, explain limitations and supported alternatives.",
      "Step-by-step troubleshooting / safety flow:",
      "Ask if there is immediate danger.",
      "If yes, prioritize emergency action:",
      "Try 911/local emergency number from any available phone.",
      "Use Apple Emergency SOS via satellite if supported.",
      "Ask nearby people/authorities for help if available.",
      "If no immediate danger, identify device and feature being asked about.",
      "Explain Apple satellite features are built into supported iPhones and operate",
      "independently of normal US Mobile cellular service.",
      "Explain direct-to-cell/NTN availability is not something to rely on unless officially",
      "supported for the device/location/network.",
      "For remote travel, recommend planning with offline maps, emergency beacon/satellite",
      "messenger, and Wi-Fi Calling where Wi-Fi exists.",
      "Escalate internally only if this is tied to an active service failure or safety-sensitive case."
    ],
    "quickSteps": [
      "If immediate danger: tell customer to call 911/use local emergency services/Apple",
      "Emergency SOS if available.",
      "Identify device model and OS.",
      "Separate Apple/device satellite features from US Mobile network service.",
      "Do not promise Android or carrier satellite SMS unless officially supported and verified.",
      "If no emergency, explain limitations and supported alternatives.",
      "Step-by-step troubleshooting / safety flow:",
      "Ask if there is immediate danger.",
      "If yes, prioritize emergency action:",
      "Try 911/local emergency number from any available phone.",
      "Use Apple Emergency SOS via satellite if supported.",
      "Ask nearby people/authorities for help if available.",
      "If no immediate danger, identify device and feature being asked about.",
      "Explain Apple satellite features are built into supported iPhones and operate",
      "independently of normal US Mobile cellular service.",
      "Explain direct-to-cell/NTN availability is not something to rely on unless officially",
      "supported for the device/location/network.",
      "For remote travel, recommend planning with offline maps, emergency beacon/satellite",
      "messenger, and Wi-Fi Calling where Wi-Fi exists.",
      "Escalate internally only if this is tied to an active service failure or safety-sensitive case."
    ],
    "steps": [],
    "deviceSpecificSteps": {
      "iphone": [
        "Check whether device supports Apple satellite features.",
        "Use Apple Emergency SOS instructions shown on the phone when out of coverage.",
        "Keep clear view of sky if using satellite features.",
        "Do not present Apple satellite as US Mobile-provided service."
      ],
      "android": [
        "Satellite capability varies by device, OS, region, and carrier support.",
        "Do not promise SMS over satellite unless officially supported and verified.",
        "Use emergency services, Wi-Fi, or dedicated satellite safety devices where needed.",
        "Copy-ready customer reply — emergency:",
        "If you or someone nearby is in immediate danger, please try 911 or the local emergency number",
        "right now from any available phone. If you have a supported iPhone and no cellular coverage,",
        "use the Emergency SOS via satellite option shown on the phone. Your safety comes first.",
        "Copy-ready customer reply — general satellite question:",
        "Satellite features are usually built into the phone or a separate satellite service, not normal US",
        "Mobile cellular coverage. Some iPhones have Apple Emergency SOS or Messages via Satellite",
        "where supported, but that operates through Apple’s satellite system. We should not rely on",
        "normal SMS over satellite unless the device, location, and carrier support are officially",
        "confirmed."
      ]
    },
    "copyTemplates": [],
    "zendeskNote": "Issue: Satellite / NTN / emergency coverage inquiry \nDevice/OS: [Device + OS] \nLocation/context: [Remote / emergency / general question] \nCustomer state: [Emergency / no emergency] \nGuidance given: Emergency services / Apple SOS distinction / carrier limitation explained \n\nInternal checks: Safety escalation if needed INTERNAL VERIFICATION REQUIRED \nNext action: Safety escalation or customer education",
    "escalation": {
      "neededWhen": [
        "Customer is in active danger and unable to reach emergency services.",
        "Customer reports emergency service failure.",
        "Remote loss of service creates immediate safety risk.",
        "Legal/safety review is needed."
      ],
      "evidenceNeeded": [
        "Safety escalation process, official satellite/NTN support status,",
        "emergency-service handling protocol."
      ],
      "summaryTemplate": "URGENT SAFETY / SATELLITE CONTEXT. Customer location/context: [X]. Device: [X]. \nCustomer reports [danger/no coverage/emergency]. Guidance given: 911/local \nemergency/Apple SOS if available. Requesting leadership/safety review. INTERNAL \nVERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Customer is in active danger and unable to reach emergency services.",
      "Customer reports emergency service failure.",
      "Remote loss of service creates immediate safety risk.",
      "Legal/safety review is needed."
    ],
    "escalationFormat": [
      "URGENT SAFETY / SATELLITE CONTEXT. Customer location/context: [X]. Device: [X]. ",
      "Customer reports [danger/no coverage/emergency]. Guidance given: 911/local ",
      "emergency/Apple SOS if available. Requesting leadership/safety review. INTERNAL ",
      "VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "roaming-escalations-what-not-to-promise",
      "network-choice-coverage-band-troubleshooting",
      "wi-fi-calling-e911-setup",
      "known-issues"
    ],
    "sourceAliases": [
      "X6",
      "X10",
      "X7"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Safety escalation process, official satellite/NTN support status,",
      "emergency-service handling protocol."
    ],
    "batch": "Batch 8",
    "aliases": [
      "satellite",
      "ntn",
      "apple emergency sos",
      "messages via satellite",
      "starlink texting",
      "direct to cell",
      "no",
      "coverage in woods",
      "emergency sos",
      "remote area",
      "can i text by satellite"
    ],
    "symptoms": [
      "satellite",
      "ntn",
      "apple emergency sos",
      "messages via satellite",
      "starlink texting",
      "direct to cell",
      "no",
      "coverage in woods",
      "emergency sos",
      "remote area",
      "can i text by satellite"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X6, X10, X7"
  },
  {
    "id": "roaming-escalations-what-not-to-promise",
    "title": "Roaming Escalations & What Not To Promise",
    "category": "international-roaming",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "international-roaming",
      "batch8"
    ],
    "keywords": [
      "roaming",
      "escalations",
      "what",
      "not",
      "promise",
      "international-roaming"
    ],
    "customerPhrases": [
      "roaming escalation",
      "roaming not fixed",
      "refund for roaming",
      "promise bank code",
      "roaming eta",
      "foreign partner issue",
      "vlr",
      "hlr",
      "roaming ticket",
      "what not to promise"
    ],
    "preview": {
      "problem": "Roaming support boundary / third-party partner dependency / escalation evidence gap /",
      "firstQuestion": "What country are you in and which network is your line on?",
      "firstAction": "",
      "escalateIf": "Native Roaming should be active and supported, but device cannot register after all"
    },
    "quickAnswer": "Roaming support boundary / third-party partner dependency / escalation evidence gap / \nrefund/billing review / unsafe promise risk",
    "useWhen": "Use when customer reports: roaming escalation, roaming not fixed, refund for roaming, promise bank code, roaming ETA,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "What country are you in and which network is your line on?",
      "Is Data Roaming ON and Network Selection set to Automatic?",
      "Are you using Native Roaming or a Travel eSIM?",
      "Quick checks before escalation:",
      "Verify plan/add-on/destination support. INTERNAL VERIFICATION REQUIRED",
      "Verify domestic usage/registration if required. INTERNAL VERIFICATION REQUIRED",
      "Verify Data Roaming ON and Network Selection Automatic.",
      "Verify APN and correct line selected.",
      "Verify exact service failure: no service, data only, voice/SMS only, OTP only, Travel eSIM",
      "data only.",
      "What not to promise:",
      "Do not promise bank codes will arrive.",
      "Do not promise Wi-Fi Calling can be activated for the first time while abroad.",
      "Do not promise cruise/airplane cellular service.",
      "Do not promise coverage everywhere in a country or inside every building.",
      "Do not promise an exact ETA from foreign roaming partners.",
      "Do not promise refunds/credits without billing/account review.",
      "Do not say “this is definitely an outage” unless verified.",
      "Step-by-step escalation readiness:",
      "Identify roaming type: Native Roaming or Travel eSIM.",
      "Confirm country and city/region.",
      "Confirm customer network: Warp, Dark Star, Light Speed.",
      "Confirm plan/add-on/destination support. INTERNAL VERIFICATION REQUIRED",
      "Confirm domestic usage/registration if needed. INTERNAL VERIFICATION REQUIRED",
      "Confirm device settings:",
      "Data Roaming ON.",
      "Network Selection Automatic.",
      "Correct SIM/eSIM selected.",
      "APN correct if data affected.",
      "Confirm issue scope:",
      "No service/SOS.",
      "Data fails.",
      "Calls/SMS fail.",
      "OTP only fails.",
      "Travel eSIM zero data.",
      "Get exact error, partner network shown, and timestamp.",
      "Escalate with requested action:",
      "Native Roaming registration review.",
      "HLR/HSS refresh.",
      "VLR/partner network registration check.",
      "Travel eSIM provider/profile review.",
      "SMS/OTP routing review."
    ],
    "quickChecks": [],
    "quickSteps": [],
    "steps": [],
    "deviceSpecificSteps": {
      "iphone": [
        "Confirm Data Roaming ON.",
        "Confirm Network Selection Automatic.",
        "Confirm correct line selected.",
        "If Travel eSIM, confirm Travel eSIM selected for data.",
        "Check VPN/Private Relay if data issue."
      ],
      "android": [
        "Confirm Roaming ON.",
        "Confirm Network Operators set to Automatic.",
        "Confirm correct SIM/eSIM selected.",
        "Verify APN if data affected.",
        "Disable VPN/Private DNS for testing."
      ]
    },
    "copyTemplates": [
      {
        "label": "Refund/billing-safe",
        "text": "I understand why you’re asking about a refund or credit if roaming didn’t work as expected. I \ncan’t promise an adjustment from chat, but I can document the technical issue and route it for \naccount/billing review."
      }
    ],
    "zendeskNote": "Issue: Roaming escalation \nRoaming type: [Native Roaming / Travel eSIM] \nNetwork: [Warp / Dark Star / Light Speed] \nDestination: [Country/city] \n\nDevice/OS: [Device + OS] \nSIM/eSIM: [eSIM / pSIM / dual SIM] \nPlan/add-on: [Verified / unknown] INTERNAL VERIFICATION REQUIRED \nDomestic usage: [Confirmed / not confirmed / not required] INTERNAL VERIFICATION \nREQUIRED \nSettings verified: Data Roaming [ON/OFF], Network Selection [Auto/manual], APN [verified/not], \ncorrect line [yes/no] \nSymptoms: [SOS / no data / no calls / no SMS / OTP only / Travel eSIM data fail] \nTimestamp: [X] \nCustomer impact: [Travel/no service/bank codes/work/etc.] \nRequested action: [HLR/HSS/VLR review / Travel eSIM profile review / SMS routing review / \nbilling review]",
    "escalation": {
      "neededWhen": [
        "Native Roaming should be active and supported, but device cannot register after all",
        "settings are verified.",
        "Travel eSIM is active/valid/selected but has zero data.",
        "Standard SMS/calls fail despite eligible/provisioned Native Roaming.",
        "Customer has urgent travel/safety/business impact.",
        "Billing/refund review is requested after documented service failure."
      ],
      "evidenceNeeded": [
        "Plan/add-on, domestic usage, roaming provisioning,",
        "HLR/HSS/VLR status, partner network response, Travel eSIM validity, billing/refund review.",
        "Batch 8 Agent Import Notes",
        "Create these as separate cards",
        "Pre-Departure Checklist & Travel Options",
        "Abroad No Service & Native Roaming Setup",
        "Asymmetrical Roaming Failures — Data vs Voice/SMS",
        "Bank OTP Abroad & Wi-Fi Calling",
        "Cruise, Maritime & Border Roaming",
        "Travel eSIM Limitations & Data Setup",
        "Satellite / NTN Expectations & Emergency SOS",
        "Roaming Escalations & What Not To Promise",
        "Suggested category mapping",
        "International / Roaming",
        "Pre-Departure Checklist & Travel Options",
        "Abroad No Service & Native Roaming Setup",
        "Asymmetrical Roaming Failures",
        "Cruise, Maritime & Border Roaming",
        "Roaming Escalations & What Not To Promise",
        "Travel eSIM",
        "Travel eSIM Limitations & Data Setup",
        "Messaging / Calls / Voicemail",
        "Bank OTP Abroad & Wi-Fi Calling",
        "Wi-Fi Calling",
        "Bank OTP Abroad & Wi-Fi Calling",
        "Pre-Departure Checklist & Travel Options",
        "Security / Safety",
        "Satellite / NTN Expectations & Emergency SOS",
        "Bank OTP Abroad & Wi-Fi Calling",
        "Suggested pinned/common cards from Batch 8",
        "Abroad No Service & Native Roaming Setup",
        "Travel eSIM Limitations & Data Setup",
        "Bank OTP Abroad & Wi-Fi Calling",
        "Pre-Departure Checklist & Travel Options",
        "Roaming Escalations & What Not To Promise",
        "Cruise, Maritime & Border Roaming",
        "UI rule",
        "Show short preview first:",
        "Problem",
        "First question",
        "First action",
        "Escalate if",
        "Then full card opens with:",
        "Ask customer first",
        "Quick checks",
        "Step-by-step troubleshooting",
        "iPhone steps",
        "Android steps",
        "Copy-ready reply",
        "Zendesk note",
        "Escalation summary",
        "Related playbooks",
        "Source aliases",
        "Confidence",
        "Needs internal verification",
        "Merge notes for later",
        "Batch 4 has Wi-Fi Calling & E911.",
        "Batch 8 Wi-Fi Calling abroad should link to it, not duplicate it.",
        "Batch 5 has Bank OTP / 2FA after port.",
        "Batch 8 Bank OTP Abroad should become the travel-specific OTP subsection.",
        "Batch 6 has Coverage/Network Choice.",
        "Batch 8 roaming coverage should link to coverage but stay separate because foreign",
        "partner roaming has different escalation rules.",
        "Safety rule for agent",
        "For travel/roaming:",
        "Never promise bank OTP delivery.",
        "Never promise Wi-Fi Calling can be activated for the first time abroad.",
        "Never promise exact roaming restoration ETA.",
        "Never promise cruise/aviation cellular support.",
        "Never promise refunds/credits without billing review.",
        "Never call something an outage unless verified.",
        "Always separate Native Roaming, Travel eSIM, and Wi-Fi Calling.",
        "Mark plan/add-on/destination support, domestic usage, E911, roaming registration,",
        "Travel eSIM validity, usage logs, and billing review as INTERNAL VERIFICATION",
        "REQUIRED."
      ],
      "summaryTemplate": "Roaming escalation. Type: [Native/Travel eSIM]. Destination: [X]. Network: [X]. Device/OS: [X]. \nPlan/add-on verified: [Yes/No]. Domestic usage confirmed: [Yes/No/NA]. Data Roaming ON. \nNetwork Selection Automatic. APN/correct line checked. Symptom: [X]. Partner network shown: \n[X]. Timestamp: [X]. Requesting [HLR/HSS/VLR/Travel eSIM/SMS routing/billing] review. \nINTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Native Roaming should be active and supported, but device cannot register after all",
      "settings are verified.",
      "Travel eSIM is active/valid/selected but has zero data.",
      "Standard SMS/calls fail despite eligible/provisioned Native Roaming.",
      "Customer has urgent travel/safety/business impact.",
      "Billing/refund review is requested after documented service failure."
    ],
    "escalationFormat": [
      "Roaming escalation. Type: [Native/Travel eSIM]. Destination: [X]. Network: [X]. Device/OS: [X]. ",
      "Plan/add-on verified: [Yes/No]. Domestic usage confirmed: [Yes/No/NA]. Data Roaming ON. ",
      "Network Selection Automatic. APN/correct line checked. Symptom: [X]. Partner network shown: ",
      "[X]. Timestamp: [X]. Requesting [HLR/HSS/VLR/Travel eSIM/SMS routing/billing] review. ",
      "INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "abroad-no-service-native-roaming-setup",
      "asymmetrical-roaming-failures-data-vs-voicesms",
      "travel-esim-limitations-data-setup",
      "bank-otp-abroad-wi-fi-calling",
      "plan-billing-management-top-up-plan-change-snooze-usage-payment",
      "refunds"
    ],
    "sourceAliases": [
      "X6",
      "P5",
      "P7",
      "X7"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Plan/add-on, domestic usage, roaming provisioning,",
      "HLR/HSS/VLR status, partner network response, Travel eSIM validity, billing/refund review.",
      "Batch 8 Agent Import Notes",
      "Create these as separate cards",
      "Pre-Departure Checklist & Travel Options",
      "Abroad No Service & Native Roaming Setup",
      "Asymmetrical Roaming Failures — Data vs Voice/SMS",
      "Bank OTP Abroad & Wi-Fi Calling",
      "Cruise, Maritime & Border Roaming",
      "Travel eSIM Limitations & Data Setup",
      "Satellite / NTN Expectations & Emergency SOS",
      "Roaming Escalations & What Not To Promise",
      "Suggested category mapping",
      "International / Roaming",
      "Pre-Departure Checklist & Travel Options",
      "Abroad No Service & Native Roaming Setup",
      "Asymmetrical Roaming Failures",
      "Cruise, Maritime & Border Roaming",
      "Roaming Escalations & What Not To Promise",
      "Travel eSIM",
      "Travel eSIM Limitations & Data Setup",
      "Messaging / Calls / Voicemail",
      "Bank OTP Abroad & Wi-Fi Calling",
      "Wi-Fi Calling",
      "Bank OTP Abroad & Wi-Fi Calling",
      "Pre-Departure Checklist & Travel Options",
      "Security / Safety",
      "Satellite / NTN Expectations & Emergency SOS",
      "Bank OTP Abroad & Wi-Fi Calling",
      "Suggested pinned/common cards from Batch 8",
      "Abroad No Service & Native Roaming Setup",
      "Travel eSIM Limitations & Data Setup",
      "Bank OTP Abroad & Wi-Fi Calling",
      "Pre-Departure Checklist & Travel Options",
      "Roaming Escalations & What Not To Promise",
      "Cruise, Maritime & Border Roaming",
      "UI rule",
      "Show short preview first:",
      "Problem",
      "First question",
      "First action",
      "Escalate if",
      "Then full card opens with:",
      "Ask customer first",
      "Quick checks",
      "Step-by-step troubleshooting",
      "iPhone steps",
      "Android steps",
      "Copy-ready reply",
      "Zendesk note",
      "Escalation summary",
      "Related playbooks",
      "Source aliases",
      "Confidence",
      "Needs internal verification",
      "Merge notes for later",
      "Batch 4 has Wi-Fi Calling & E911.",
      "Batch 8 Wi-Fi Calling abroad should link to it, not duplicate it.",
      "Batch 5 has Bank OTP / 2FA after port.",
      "Batch 8 Bank OTP Abroad should become the travel-specific OTP subsection.",
      "Batch 6 has Coverage/Network Choice.",
      "Batch 8 roaming coverage should link to coverage but stay separate because foreign",
      "partner roaming has different escalation rules.",
      "Safety rule for agent",
      "For travel/roaming:",
      "Never promise bank OTP delivery.",
      "Never promise Wi-Fi Calling can be activated for the first time abroad.",
      "Never promise exact roaming restoration ETA.",
      "Never promise cruise/aviation cellular support.",
      "Never promise refunds/credits without billing review.",
      "Never call something an outage unless verified.",
      "Always separate Native Roaming, Travel eSIM, and Wi-Fi Calling.",
      "Mark plan/add-on/destination support, domestic usage, E911, roaming registration,",
      "Travel eSIM validity, usage logs, and billing review as INTERNAL VERIFICATION",
      "REQUIRED."
    ],
    "batch": "Batch 8",
    "aliases": [
      "roaming escalation",
      "roaming not fixed",
      "refund for roaming",
      "promise bank code",
      "roaming eta",
      "foreign partner issue",
      "vlr",
      "hlr",
      "roaming ticket",
      "what not to promise"
    ],
    "symptoms": [
      "roaming escalation",
      "roaming not fixed",
      "refund for roaming",
      "promise bank code",
      "roaming eta",
      "foreign partner issue",
      "vlr",
      "hlr",
      "roaming ticket",
      "what not to promise"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X6, P5, P7, X7"
  },
  {
    "id": "refund-policy-safe-language",
    "title": "Refund Policy & Safe Language",
    "category": "plans-billing",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "plans-billing",
      "batch9"
    ],
    "keywords": [
      "refund",
      "policy",
      "safe",
      "language",
      "plans-billing"
    ],
    "customerPhrases": [
      "refund",
      "credit",
      "waiver",
      "refund my plan",
      "zero usage refund",
      "annual plan refund",
      "top-up refund",
      "deleted esim refund",
      "sim refund",
      "shipping refund",
      "cancel and refund",
      "billing dispute"
    ],
    "preview": {
      "problem": "Billing dispute / refund eligibility / policy review / credit request / cancellation request",
      "firstQuestion": "Is this refund request for a service plan, top-up, SIM kit, device, shipping charge, or",
      "firstAction": "",
      "escalateIf": "Any refund/credit requires manual calculation."
    },
    "quickAnswer": "Billing dispute / refund eligibility / policy review / credit request / cancellation request",
    "useWhen": "Use when customer reports: refund, credit, waiver, refund my plan, zero usage refund, annual plan refund, top-up refund,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Is this refund request for a service plan, top-up, SIM kit, device, shipping charge, or",
      "something else?",
      "When was the purchase or renewal?",
      "Has the line used any calls, texts, data, hotspot, roaming, or top-up data since",
      "purchase?"
    ],
    "quickChecks": [
      "Verify purchase date, activation date, and plan type. INTERNAL VERIFICATION",
      "REQUIRED",
      "Verify usage: data, calls, texts, hotspot, roaming, top-ups. INTERNAL VERIFICATION",
      "REQUIRED",
      "Identify product type: monthly plan, annual plan, top-up, SIM, shipping, device,",
      "perk/promo, Travel eSIM.",
      "Check policy/eligibility before giving any refund expectation. INTERNAL VERIFICATION",
      "REQUIRED",
      "If eligible or unclear, route to Billing with factual notes. INTERNAL VERIFICATION",
      "REQUIRED",
      "Step-by-step troubleshooting / handling:",
      "Acknowledge the billing concern.",
      "Identify what the customer wants refunded.",
      "Check usage and purchase dates internally. INTERNAL VERIFICATION REQUIRED",
      "Check whether the service/item is eligible under current policy. INTERNAL",
      "VERIFICATION REQUIRED",
      "If clearly eligible, say you will submit/process through the correct billing path, not that it is",
      "guaranteed unless you have authority and confirmation.",
      "If not eligible, explain policy calmly and offer any available alternative only if supported.",
      "If partial refund/credit calculation is needed, route to Billing. INTERNAL VERIFICATION",
      "REQUIRED",
      "If cancellation would immediately stop service or risk the number, warn the customer",
      "before action.",
      "Never promise refund timing unless confirmed by billing/payment processor policy.",
      "Document exact decision, policy basis, and customer response."
    ],
    "quickSteps": [
      "Verify purchase date, activation date, and plan type. INTERNAL VERIFICATION",
      "REQUIRED",
      "Verify usage: data, calls, texts, hotspot, roaming, top-ups. INTERNAL VERIFICATION",
      "REQUIRED",
      "Identify product type: monthly plan, annual plan, top-up, SIM, shipping, device,",
      "perk/promo, Travel eSIM.",
      "Check policy/eligibility before giving any refund expectation. INTERNAL VERIFICATION",
      "REQUIRED",
      "If eligible or unclear, route to Billing with factual notes. INTERNAL VERIFICATION",
      "REQUIRED",
      "Step-by-step troubleshooting / handling:",
      "Acknowledge the billing concern.",
      "Identify what the customer wants refunded.",
      "Check usage and purchase dates internally. INTERNAL VERIFICATION REQUIRED",
      "Check whether the service/item is eligible under current policy. INTERNAL",
      "VERIFICATION REQUIRED",
      "If clearly eligible, say you will submit/process through the correct billing path, not that it is",
      "guaranteed unless you have authority and confirmation.",
      "If not eligible, explain policy calmly and offer any available alternative only if supported.",
      "If partial refund/credit calculation is needed, route to Billing. INTERNAL VERIFICATION",
      "REQUIRED",
      "If cancellation would immediately stop service or risk the number, warn the customer",
      "before action.",
      "Never promise refund timing unless confirmed by billing/payment processor policy.",
      "Document exact decision, policy basis, and customer response."
    ],
    "steps": [],
    "deviceSpecificSteps": {
      "iphone": [
        "N/A"
      ],
      "android": [
        "N/A",
        "Copy-ready customer reply — safe general:",
        "I can review this for you. Refunds and credits depend on the plan type, purchase date, and",
        "whether the line has had any usage, so I’ll need to check the account details first. I don’t want to",
        "promise the wrong outcome before verifying it, but I’ll document everything clearly for billing",
        "review.",
        "Copy-ready customer reply — if eligible after verification:",
        "I’ve verified the key details and will submit this to Billing for review/processing. Please note that",
        "if the refund requires cancelling the line, service on that line may stop once the request is",
        "processed. I’ll make sure that is documented before anything is finalized.",
        "Copy-ready customer reply — if not eligible after verification:",
        "I checked the account details against the refund rules, and this charge does not appear eligible",
        "for a refund based on the verified usage/date/product type. I understand that’s not the answer",
        "you were hoping for, so I’ll still document the case clearly if you want it reviewed by Billing."
      ]
    },
    "copyTemplates": [],
    "zendeskNote": "Issue: Refund / credit / billing adjustment request \nProduct/charge: [Monthly plan / Annual plan / Top-up / SIM / Shipping / Device / Travel eSIM / \nOther] \nNetwork/line: [Warp / Dark Star / Light Speed / N/A] \nPurchase/renewal date: [X] \nActivation date: [X] \nUsage verified: [Data/calls/texts/hotspot/roaming/top-up] INTERNAL VERIFICATION \nREQUIRED \nPolicy/eligibility: [Eligible / Not eligible / Needs Billing review] \nCustomer request: [Full refund / partial refund / credit / waiver / cancellation] \nAction: [Explained policy / submitted to Billing / declined with explanation / pending info] \nNext action: Billing review or customer confirmation",
    "escalation": {
      "neededWhen": [
        "Any refund/credit requires manual calculation.",
        "Customer disputes policy or usage records.",
        "Customer requests exception/waiver.",
        "Annual plan, device, shipping, SIM kit, Travel eSIM, or top-up refund requires",
        "policy/billing review.",
        "Customer is upset or threatens chargeback/legal action.",
        "Cancellation could risk number loss or service interruption."
      ],
      "evidenceNeeded": [
        "Purchase date, activation date, usage, product type, policy",
        "eligibility, billing gateway, refund/credit authority."
      ],
      "summaryTemplate": "Billing/refund review requested. Charge/product: [X]. Purchase date: [X]. Plan/type: [X]. Usage \nverified: [X]. Customer request: [X]. Policy result: [eligible/not eligible/unclear]. Customer impact: \n[X]. Requesting Billing review and final refund/credit decision. INTERNAL VERIFICATION \nREQUIRED"
    },
    "escalationRequiredWhen": [
      "Any refund/credit requires manual calculation.",
      "Customer disputes policy or usage records.",
      "Customer requests exception/waiver.",
      "Annual plan, device, shipping, SIM kit, Travel eSIM, or top-up refund requires",
      "policy/billing review.",
      "Customer is upset or threatens chargeback/legal action.",
      "Cancellation could risk number loss or service interruption."
    ],
    "escalationFormat": [
      "Billing/refund review requested. Charge/product: [X]. Purchase date: [X]. Plan/type: [X]. Usage ",
      "verified: [X]. Customer request: [X]. Policy result: [eligible/not eligible/unclear]. Customer impact: ",
      "[X]. Requesting Billing review and final refund/credit decision. INTERNAL VERIFICATION ",
      "REQUIRED"
    ],
    "relatedPlaybooks": [
      "plan-changes-annual-vs-monthly-issues",
      "autopay-payment-failures",
      "shared-data-pools-top-ups",
      "device-returns",
      "sim-shipping-orders"
    ],
    "sourceAliases": [
      "X7",
      "P1",
      "P6",
      "P9"
    ],
    "confidence": "Medium-High because exact refund rules and authority require account/current\npolicy verification",
    "internalVerificationRequired": [
      "Purchase date, activation date, usage, product type, policy",
      "eligibility, billing gateway, refund/credit authority."
    ],
    "batch": "Batch 9",
    "aliases": [
      "refund",
      "credit",
      "waiver",
      "refund my plan",
      "zero usage refund",
      "annual plan refund",
      "top-up refund",
      "deleted esim refund",
      "sim refund",
      "shipping refund",
      "cancel and refund",
      "billing dispute"
    ],
    "symptoms": [
      "refund",
      "credit",
      "waiver",
      "refund my plan",
      "zero usage refund",
      "annual plan refund",
      "top-up refund",
      "deleted esim refund",
      "sim refund",
      "shipping refund",
      "cancel and refund",
      "billing dispute"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X7, P1, P6, P9"
  },
  {
    "id": "plan-changes-annual-vs-monthly-issues",
    "title": "Plan Changes & Annual vs Monthly Issues",
    "category": "plans-billing",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "plans-billing",
      "batch9"
    ],
    "keywords": [
      "plan",
      "changes",
      "annual",
      "monthly",
      "issues",
      "plans-billing"
    ],
    "customerPhrases": [
      "change plan",
      "downgrade plan",
      "upgrade plan",
      "annual plan",
      "monthly plan",
      "mid-cycle change",
      "price",
      "increased",
      "snooze line",
      "pause service",
      "cancel annual",
      "plan renewal",
      "plan starts today",
      "end of",
      "cycle"
    ],
    "preview": {
      "problem": "Plan lifecycle / renewal timing / annual-vs-monthly expectation / mid-cycle change impact /",
      "firstQuestion": "Do you want the change to happen today or at the next renewal?",
      "firstAction": "",
      "escalateIf": "Customer requests exception/credit for mid-cycle or annual change."
    },
    "quickAnswer": "Plan lifecycle / renewal timing / annual-vs-monthly expectation / mid-cycle change impact / \npause or snooze request / promo expiration",
    "useWhen": "Use when customer reports: change plan, downgrade plan, upgrade plan, annual plan, monthly plan, mid-cycle change, price",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Do you want the change to happen today or at the next renewal?",
      "Are you on a monthly or annual plan right now?",
      "Are you trying to change service, pause the number, or lower the bill?"
    ],
    "quickChecks": [
      "Verify current plan type and renewal date. INTERNAL VERIFICATION REQUIRED",
      "Check whether plan change can be scheduled for end of cycle. INTERNAL",
      "VERIFICATION REQUIRED",
      "Check immediate change impact before customer confirms. INTERNAL VERIFICATION",
      "REQUIRED",
      "Check promo/discount status if price changed. INTERNAL VERIFICATION REQUIRED",
      "Check pause/snooze availability for that line. INTERNAL VERIFICATION REQUIRED",
      "Step-by-step troubleshooting / handling:",
      "Identify desired outcome: upgrade, downgrade, pause, cancel, annual/monthly",
      "conversion, or price explanation.",
      "Check current plan and renewal date. INTERNAL VERIFICATION REQUIRED",
      "Explain the two timing options:",
      "Immediate change: may start now and affect current cycle.",
      "End-of-cycle change: waits until renewal.",
      "If annual plan is involved, verify restrictions and available options before advising.",
      "INTERNAL VERIFICATION REQUIRED",
      "If customer wants to pause/hold number, check current pause/snooze option and cost.",
      "INTERNAL VERIFICATION REQUIRED",
      "If price increased, check promo expiration, tax/fee change, plan change, or renewal",
      "difference.",
      "Get explicit customer confirmation before applying immediate changes.",
      "Document what was explained and what the customer chose."
    ],
    "quickSteps": [
      "Verify current plan type and renewal date. INTERNAL VERIFICATION REQUIRED",
      "Check whether plan change can be scheduled for end of cycle. INTERNAL",
      "VERIFICATION REQUIRED",
      "Check immediate change impact before customer confirms. INTERNAL VERIFICATION",
      "REQUIRED",
      "Check promo/discount status if price changed. INTERNAL VERIFICATION REQUIRED",
      "Check pause/snooze availability for that line. INTERNAL VERIFICATION REQUIRED",
      "Step-by-step troubleshooting / handling:",
      "Identify desired outcome: upgrade, downgrade, pause, cancel, annual/monthly",
      "conversion, or price explanation.",
      "Check current plan and renewal date. INTERNAL VERIFICATION REQUIRED",
      "Explain the two timing options:",
      "Immediate change: may start now and affect current cycle.",
      "End-of-cycle change: waits until renewal.",
      "If annual plan is involved, verify restrictions and available options before advising.",
      "INTERNAL VERIFICATION REQUIRED",
      "If customer wants to pause/hold number, check current pause/snooze option and cost.",
      "INTERNAL VERIFICATION REQUIRED",
      "If price increased, check promo expiration, tax/fee change, plan change, or renewal",
      "difference.",
      "Get explicit customer confirmation before applying immediate changes.",
      "Document what was explained and what the customer chose."
    ],
    "steps": [],
    "deviceSpecificSteps": {
      "iphone": [
        "N/A"
      ],
      "android": [
        "N/A"
      ]
    },
    "copyTemplates": [
      {
        "label": "Annual/monthly safe",
        "text": "Annual and monthly plans can have different rules for changes, pauses, cancellations, and \ncredits. I’ll review the current plan state first, then explain the options that are actually available \non your line."
      }
    ],
    "zendeskNote": "Issue: Plan change / annual-monthly / pause request \nCurrent plan: [X] \nRequested plan/action: [X] \nTiming requested: [Immediate / End of cycle / Unsure] \nRenewal date: [X] \nPromo/discount: [X] \nCustomer informed of impact: [Yes/No] \nInternal checks: Plan eligibility, plan-change impact, pause/snooze availability, billing impact \nINTERNAL VERIFICATION REQUIRED \nAction: [Guided customer / scheduled change / applied change / escalated Billing] \nNext action: [Pending customer confirmation / Billing review / completed]",
    "escalation": {
      "neededWhen": [
        "Customer requests exception/credit for mid-cycle or annual change.",
        "Annual plan conversion/cancellation/service credit is involved.",
        "Plan change fails in dashboard/backend.",
        "Customer disputes price increase or promo expiration.",
        "Pause/snooze eligibility is unclear or blocked."
      ],
      "evidenceNeeded": [
        "Current plan, renewal date, promo state, plan-change eligibility,",
        "pause/snooze availability, billing impact."
      ],
      "summaryTemplate": "Plan-change review. Current plan: [X]. Requested action: [X]. Timing: [immediate/end-cycle]. \nRenewal date: [X]. Customer informed of impact: [Yes/No]. Issue/block: [X]. Requesting \nBilling/account review for plan change/credit/exception. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Customer requests exception/credit for mid-cycle or annual change.",
      "Annual plan conversion/cancellation/service credit is involved.",
      "Plan change fails in dashboard/backend.",
      "Customer disputes price increase or promo expiration.",
      "Pause/snooze eligibility is unclear or blocked."
    ],
    "escalationFormat": [
      "Plan-change review. Current plan: [X]. Requested action: [X]. Timing: [immediate/end-cycle]. ",
      "Renewal date: [X]. Customer informed of impact: [Yes/No]. Issue/block: [X]. Requesting ",
      "Billing/account review for plan change/credit/exception. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "refund-policy-safe-language",
      "autopay-issues",
      "perks-promos-discounts",
      "appdashboard",
      "self-service"
    ],
    "sourceAliases": [
      "X7",
      "X8",
      "P1"
    ],
    "confidence": "Medium-High because plan-change behavior and policy require account/current\nplan verification",
    "internalVerificationRequired": [
      "Current plan, renewal date, promo state, plan-change eligibility,",
      "pause/snooze availability, billing impact."
    ],
    "batch": "Batch 9",
    "aliases": [
      "change plan",
      "downgrade plan",
      "upgrade plan",
      "annual plan",
      "monthly plan",
      "mid-cycle change",
      "price",
      "increased",
      "snooze line",
      "pause service",
      "cancel annual",
      "plan renewal",
      "plan starts today",
      "end of",
      "cycle"
    ],
    "symptoms": [
      "change plan",
      "downgrade plan",
      "upgrade plan",
      "annual plan",
      "monthly plan",
      "mid-cycle change",
      "price",
      "increased",
      "snooze line",
      "pause service",
      "cancel annual",
      "plan renewal",
      "plan starts today",
      "end of",
      "cycle"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X7, X8, P1"
  },
  {
    "id": "shared-data-pools-top-ups-rollover",
    "title": "Shared Data Pools, Top-Ups & Rollover",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "apn-data",
      "batch9"
    ],
    "keywords": [
      "shared",
      "data",
      "pools",
      "top",
      "ups",
      "rollover",
      "apn-data"
    ],
    "customerPhrases": [
      "shared data",
      "pool",
      "data pool empty",
      "top-up",
      "auto top-up",
      "rollover",
      "data ran out on all lines",
      "access fee",
      "$2 per gb",
      "pool charge",
      "all lines no data",
      "data stopped in pool"
    ],
    "preview": {
      "problem": "Pool data depletion / top-up behavior / auto top-up charge / rollover misunderstanding /",
      "firstQuestion": "Are you on a shared data pool or an unlimited plan?",
      "firstAction": "",
      "escalateIf": "Pool has available data but lines cannot use data."
    },
    "quickAnswer": "Pool data depletion / top-up behavior / auto top-up charge / rollover misunderstanding / \nshared-line data suspension / billing question",
    "useWhen": "Use when customer reports: shared data, pool, data pool empty, top-up, auto top-up, rollover, data ran out on all lines,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are you on a shared data pool or an unlimited plan?",
      "Are all lines affected or only one line?",
      "Did you manually buy a top-up, or did Auto Top-Up trigger?"
    ],
    "quickChecks": [
      "Verify pool balance and affected lines. INTERNAL VERIFICATION REQUIRED",
      "Check whether auto top-up is enabled and whether it triggered. INTERNAL",
      "VERIFICATION REQUIRED",
      "Verify top-up purchase, usage, and rollover eligibility. INTERNAL VERIFICATION",
      "REQUIRED",
      "Check if a new line was added or access fee/proration changed. INTERNAL",
      "VERIFICATION REQUIRED",
      "Confirm AutoPay status if rollover depends on it. INTERNAL VERIFICATION",
      "REQUIRED",
      "Step-by-step troubleshooting / handling:",
      "Confirm plan type: shared pool vs unlimited.",
      "Check pool balance and line usage. INTERNAL VERIFICATION REQUIRED",
      "If pool is empty, explain that adding data/top-up may be needed to restore data.",
      "If auto top-up triggered, show/explain the trigger event and usage pattern. INTERNAL",
      "VERIFICATION REQUIRED",
      "If customer asks about rollover, verify whether the data type is eligible. INTERNAL",
      "VERIFICATION REQUIRED",
      "If a top-up was unused and customer requests refund, route to Billing review. INTERNAL",
      "VERIFICATION REQUIRED",
      "If pool has data but all lines have no data, escalate for pool provisioning/data block",
      "review. INTERNAL VERIFICATION REQUIRED"
    ],
    "quickSteps": [
      "Verify pool balance and affected lines. INTERNAL VERIFICATION REQUIRED",
      "Check whether auto top-up is enabled and whether it triggered. INTERNAL",
      "VERIFICATION REQUIRED",
      "Verify top-up purchase, usage, and rollover eligibility. INTERNAL VERIFICATION",
      "REQUIRED",
      "Check if a new line was added or access fee/proration changed. INTERNAL",
      "VERIFICATION REQUIRED",
      "Confirm AutoPay status if rollover depends on it. INTERNAL VERIFICATION",
      "REQUIRED",
      "Step-by-step troubleshooting / handling:",
      "Confirm plan type: shared pool vs unlimited.",
      "Check pool balance and line usage. INTERNAL VERIFICATION REQUIRED",
      "If pool is empty, explain that adding data/top-up may be needed to restore data.",
      "If auto top-up triggered, show/explain the trigger event and usage pattern. INTERNAL",
      "VERIFICATION REQUIRED",
      "If customer asks about rollover, verify whether the data type is eligible. INTERNAL",
      "VERIFICATION REQUIRED",
      "If a top-up was unused and customer requests refund, route to Billing review. INTERNAL",
      "VERIFICATION REQUIRED",
      "If pool has data but all lines have no data, escalate for pool provisioning/data block",
      "review. INTERNAL VERIFICATION REQUIRED"
    ],
    "steps": [],
    "deviceSpecificSteps": {
      "iphone": [
        "N/A"
      ],
      "android": [
        "N/A"
      ]
    },
    "copyTemplates": [
      {
        "label": "Auto top-up charge",
        "text": "I can see why that charge was confusing. I’ll check whether Auto Top-Up was enabled and what \nusage event triggered it, then we can confirm whether the charge matches the pool settings."
      }
    ],
    "zendeskNote": "Issue: Shared data pool / top-up / rollover \nPool/plan: [X] \nAffected lines: [All / Some / One] \nPool balance: [X] INTERNAL VERIFICATION REQUIRED \nTop-up: [Manual / Auto / None] \nAutoPay: [On/Off] \nCustomer issue: [No data / unexpected charge / rollover question / refund request] \nInternal checks: Pool balance, usage ledger, auto top-up trigger, rollover eligibility, access fees \nINTERNAL VERIFICATION REQUIRED \nAction: Explained pool behavior / guided top-up / escalated Billing \nNext action: [Pending / resolved / Billing review]",
    "escalation": {
      "neededWhen": [
        "Pool has available data but lines cannot use data.",
        "Auto top-up appears incorrect or customer disputes charge.",
        "Top-up refund/credit requires review.",
        "Rollover or access fee calculation is disputed.",
        "Usage ledger and dashboard display conflict."
      ],
      "evidenceNeeded": [
        "Pool balance, usage ledger, auto top-up trigger, top-up price,",
        "rollover eligibility, access fees, refund eligibility."
      ],
      "summaryTemplate": "Shared pool/top-up issue. Pool: [X]. Affected lines: [X]. Pool balance: [X]. Top-up event: \n[manual/auto]. AutoPay: [X]. Customer dispute: [X]. Usage ledger reviewed: [Yes/No]. \nRequesting Billing/provisioning review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Pool has available data but lines cannot use data.",
      "Auto top-up appears incorrect or customer disputes charge.",
      "Top-up refund/credit requires review.",
      "Rollover or access fee calculation is disputed.",
      "Usage ledger and dashboard display conflict."
    ],
    "escalationFormat": [
      "Shared pool/top-up issue. Pool: [X]. Affected lines: [X]. Pool balance: [X]. Top-up event: ",
      "[manual/auto]. AutoPay: [X]. Customer dispute: [X]. Usage ledger reviewed: [Yes/No]. ",
      "Requesting Billing/provisioning review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "mobile-data-not-working-bars-but-no-internet",
      "slow-data-throttle",
      "refund-policy-safe-language",
      "plan-changes-annual-vs-monthly-issues"
    ],
    "sourceAliases": [
      "X7",
      "P1",
      "X8"
    ],
    "confidence": "Medium-High because pool/top-up rules require current account verification",
    "internalVerificationRequired": [
      "Pool balance, usage ledger, auto top-up trigger, top-up price,",
      "rollover eligibility, access fees, refund eligibility."
    ],
    "batch": "Batch 9",
    "aliases": [
      "shared data",
      "pool",
      "data pool empty",
      "top-up",
      "auto top-up",
      "rollover",
      "data ran out on all lines",
      "access fee",
      "$2 per gb",
      "pool charge",
      "all lines no data",
      "data stopped in pool"
    ],
    "symptoms": [
      "shared data",
      "pool",
      "data pool empty",
      "top-up",
      "auto top-up",
      "rollover",
      "data ran out on all lines",
      "access fee",
      "$2 per gb",
      "pool charge",
      "all lines no data",
      "data stopped in pool"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X7, P1, X8"
  },
  {
    "id": "perks-promos-discounts",
    "title": "Perks, Promos & Discounts",
    "category": "plans-billing",
    "secondaryCategories": [],
    "priority": "normal",
    "tags": [
      "plans-billing",
      "batch9"
    ],
    "keywords": [
      "perks",
      "promos",
      "discounts",
      "plans-billing"
    ],
    "customerPhrases": [
      "perks",
      "promo",
      "promo code did not work",
      "student discount",
      "discount missing",
      "coupon",
      "stack",
      "promo codes",
      "perk not applied",
      "subscription perk",
      "autopay discount",
      "expired promo"
    ],
    "preview": {
      "problem": "Promo eligibility / discount validation / missing code at checkout / perk proof review / AutoPay or",
      "firstQuestion": "Which promo, discount, or perk are you trying to use?",
      "firstAction": "",
      "escalateIf": "Valid promo did not apply despite eligibility."
    },
    "quickAnswer": "Promo eligibility / discount validation / missing code at checkout / perk proof review / AutoPay or \nplan requirement / expired or non-stackable offer",
    "useWhen": "Use when customer reports: perks, promo, promo code did not work, student discount, discount missing, coupon, stack",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Which promo, discount, or perk are you trying to use?",
      "Did you enter it during checkout, or are you asking after purchase?",
      "Which plan and how many active lines are on the account?"
    ],
    "quickChecks": [
      "Verify promo/perk eligibility. INTERNAL VERIFICATION REQUIRED",
      "Verify active plan and number of qualifying lines. INTERNAL VERIFICATION",
      "REQUIRED",
      "Verify AutoPay status if required. INTERNAL VERIFICATION REQUIRED",
      "Verify promo code spelling, expiration, and stackability. INTERNAL VERIFICATION",
      "REQUIRED",
      "Check whether manual credit/review is allowed. INTERNAL VERIFICATION REQUIRED",
      "Step-by-step troubleshooting / handling:",
      "Identify the exact promo/perk/discount.",
      "Check eligibility rules and account state. INTERNAL VERIFICATION REQUIRED",
      "If student discount, verify the correct education verification path.",
      "If subscription perk, verify plan/line eligibility and proof requirements.",
      "If promo code missed at checkout, do not promise retroactive credit; route to Billing if",
      "policy allows review.",
      "If promo expired or not stackable, explain clearly.",
      "Document exact promo name/code, customer expectation, and verified result."
    ],
    "quickSteps": [
      "Verify promo/perk eligibility. INTERNAL VERIFICATION REQUIRED",
      "Verify active plan and number of qualifying lines. INTERNAL VERIFICATION",
      "REQUIRED",
      "Verify AutoPay status if required. INTERNAL VERIFICATION REQUIRED",
      "Verify promo code spelling, expiration, and stackability. INTERNAL VERIFICATION",
      "REQUIRED",
      "Check whether manual credit/review is allowed. INTERNAL VERIFICATION REQUIRED",
      "Step-by-step troubleshooting / handling:",
      "Identify the exact promo/perk/discount.",
      "Check eligibility rules and account state. INTERNAL VERIFICATION REQUIRED",
      "If student discount, verify the correct education verification path.",
      "If subscription perk, verify plan/line eligibility and proof requirements.",
      "If promo code missed at checkout, do not promise retroactive credit; route to Billing if",
      "policy allows review.",
      "If promo expired or not stackable, explain clearly.",
      "Document exact promo name/code, customer expectation, and verified result."
    ],
    "steps": [],
    "deviceSpecificSteps": {
      "iphone": [
        "N/A"
      ],
      "android": [
        "N/A"
      ]
    },
    "copyTemplates": [
      {
        "label": "Missed code",
        "text": "If a promo code was missed at checkout, I can document it and route it for review, but I can’t \nguarantee a retroactive credit until Billing confirms eligibility."
      }
    ],
    "zendeskNote": "Issue: Promo / perk / discount review \nPromo/perk name or code: [X] \nPlan/lines: [X] \nAutoPay: [On/Off] \nCustomer claim: [Code failed / discount missing / perk not applied / student verification failed] \nInternal checks: Eligibility, expiration, stackability, plan/line requirements, proof/receipt \nINTERNAL VERIFICATION REQUIRED \nAction: Explained eligibility / routed Billing / pending proof / denied per policy \nNext action: Billing review or customer proof needed",
    "escalation": {
      "neededWhen": [
        "Valid promo did not apply despite eligibility.",
        "Student/education verification fails for a valid customer.",
        "Perk proof/receipt requires manual review.",
        "Customer missed code at checkout and asks for retroactive credit.",
        "Discount disappeared unexpectedly and account appears eligible."
      ],
      "evidenceNeeded": [
        "Promo terms, eligibility, line count, plan type, AutoPay,",
        "proof/receipt, manual credit authority."
      ],
      "summaryTemplate": "Promo/perk review. Promo/code: [X]. Plan/line eligibility: [X]. AutoPay: [X]. Customer claim: [X]. \nEligibility checked: [Yes/No]. Issue: [code failed/missed/expired/verification fail]. Requesting \nBilling/promo review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Valid promo did not apply despite eligibility.",
      "Student/education verification fails for a valid customer.",
      "Perk proof/receipt requires manual review.",
      "Customer missed code at checkout and asks for retroactive credit.",
      "Discount disappeared unexpectedly and account appears eligible."
    ],
    "escalationFormat": [
      "Promo/perk review. Promo/code: [X]. Plan/line eligibility: [X]. AutoPay: [X]. Customer claim: [X]. ",
      "Eligibility checked: [Yes/No]. Issue: [code failed/missed/expired/verification fail]. Requesting ",
      "Billing/promo review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "autopay-payment-failures",
      "plan-changes-annual-vs-monthly-issues",
      "refund-policy-safe-language"
    ],
    "sourceAliases": [
      "X7",
      "P1",
      "X8"
    ],
    "confidence": "Medium-High because promo terms can change",
    "internalVerificationRequired": [
      "Promo terms, eligibility, line count, plan type, AutoPay,",
      "proof/receipt, manual credit authority."
    ],
    "batch": "Batch 9",
    "aliases": [
      "perks",
      "promo",
      "promo code did not work",
      "student discount",
      "discount missing",
      "coupon",
      "stack",
      "promo codes",
      "perk not applied",
      "subscription perk",
      "autopay discount",
      "expired promo"
    ],
    "symptoms": [
      "perks",
      "promo",
      "promo code did not work",
      "student discount",
      "discount missing",
      "coupon",
      "stack",
      "promo codes",
      "perk not applied",
      "subscription perk",
      "autopay discount",
      "expired promo"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X7, P1, X8"
  },
  {
    "id": "autopay-payment-failures-taxes-lockouts",
    "title": "AutoPay, Payment Failures, Taxes & Lockouts",
    "category": "plans-billing",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "plans-billing",
      "batch9"
    ],
    "keywords": [
      "autopay",
      "payment",
      "failures",
      "taxes",
      "lockouts",
      "plans-billing"
    ],
    "customerPhrases": [
      "payment failed",
      "autopay failed",
      "card declined",
      "incorrect zip",
      "payment lockout",
      "suspicious",
      "payment",
      "too many attempts",
      "taxes and fees",
      "service suspended payment",
      "bill higher",
      "invoice",
      "question",
      "pay my bill"
    ],
    "preview": {
      "problem": "Payment gateway decline / AVS mismatch / AutoPay failure / payment security lock / tax-fee",
      "firstQuestion": "What exact error message do you see when paying?",
      "firstAction": "",
      "escalateIf": "Account is payment-locked or fraud-flagged."
    },
    "quickAnswer": "Payment gateway decline / AVS mismatch / AutoPay failure / payment security lock / tax-fee \nquestion / suspended service after failed payment",
    "useWhen": "Use when customer reports: payment failed, AutoPay failed, card declined, incorrect ZIP, payment lockout, suspicious",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "What exact error message do you see when paying?",
      "Did your card, billing ZIP, bank, or address recently change?",
      "Is your service currently suspended or still working?"
    ],
    "quickChecks": [
      "Check payment/invoice logs for decline reason. INTERNAL VERIFICATION REQUIRED",
      "Check account/line status and whether service is suspended. INTERNAL",
      "VERIFICATION REQUIRED",
      "Check if AutoPay is enabled/disabled. INTERNAL VERIFICATION REQUIRED",
      "Check if repeated attempts triggered security lockout. INTERNAL VERIFICATION",
      "REQUIRED",
      "For tax/fee questions, review invoice line items. INTERNAL VERIFICATION REQUIRED",
      "Step-by-step troubleshooting / handling:",
      "Ask for exact error shown to customer.",
      "Check billing/payment logs. INTERNAL VERIFICATION REQUIRED",
      "If ZIP/AVS mismatch, advise customer to use the billing ZIP exactly as their bank has it.",
      "If card declined, advise trying another card or contacting bank, but do not blame the",
      "bank without log evidence.",
      "If AutoPay failed, guide customer to update payment method and manually pay",
      "outstanding balance if self-service allows.",
      "If account is locked from too many attempts, escalate to Billing/security review.",
      "INTERNAL VERIFICATION REQUIRED",
      "If payment succeeded but service remains suspended, escalate provisioning/billing sync",
      "review. INTERNAL VERIFICATION REQUIRED",
      "If bill/taxes changed, explain invoice line items after verifying.",
      "Never ask for full card number, CVV, or sensitive payment details in chat."
    ],
    "quickSteps": [
      "Check payment/invoice logs for decline reason. INTERNAL VERIFICATION REQUIRED",
      "Check account/line status and whether service is suspended. INTERNAL",
      "VERIFICATION REQUIRED",
      "Check if AutoPay is enabled/disabled. INTERNAL VERIFICATION REQUIRED",
      "Check if repeated attempts triggered security lockout. INTERNAL VERIFICATION",
      "REQUIRED",
      "For tax/fee questions, review invoice line items. INTERNAL VERIFICATION REQUIRED",
      "Step-by-step troubleshooting / handling:",
      "Ask for exact error shown to customer.",
      "Check billing/payment logs. INTERNAL VERIFICATION REQUIRED",
      "If ZIP/AVS mismatch, advise customer to use the billing ZIP exactly as their bank has it.",
      "If card declined, advise trying another card or contacting bank, but do not blame the",
      "bank without log evidence.",
      "If AutoPay failed, guide customer to update payment method and manually pay",
      "outstanding balance if self-service allows.",
      "If account is locked from too many attempts, escalate to Billing/security review.",
      "INTERNAL VERIFICATION REQUIRED",
      "If payment succeeded but service remains suspended, escalate provisioning/billing sync",
      "review. INTERNAL VERIFICATION REQUIRED",
      "If bill/taxes changed, explain invoice line items after verifying.",
      "Never ask for full card number, CVV, or sensitive payment details in chat."
    ],
    "steps": [],
    "deviceSpecificSteps": {
      "iphone": [
        "N/A"
      ],
      "android": [
        "N/A",
        "Copy-ready customer reply — payment failure:",
        "I can help check the payment issue. Please don’t send any full card number or CVV here. I’ll",
        "review the billing error on the account side. If it’s a ZIP/address mismatch, you may need to",
        "enter the billing ZIP exactly as your bank has it, then use Pay My Bill to retry.",
        "Copy-ready customer reply — lockout:",
        "It looks like there may be a payment security lock after multiple attempts. For safety, I’m going to",
        "route this to Billing rather than asking you to keep retrying. That prevents more failed attempts",
        "and lets the team review the payment gateway status.",
        "Copy-ready customer reply — taxes/fees:",
        "I can review the invoice breakdown for you. Taxes and fees can vary by billing ZIP and plan",
        "details, so I’ll check the actual invoice line items before explaining the charge."
      ]
    },
    "copyTemplates": [],
    "zendeskNote": "Issue: AutoPay / payment failure / tax-fee question \nLine/account: [Masked] \nPayment error: [incorrect_zip / card_declined / lockout / unknown] \nService status: [Active / Suspended / At risk] \nAutoPay: [On/Off] \nInvoice/charge: [X] \nInternal checks: Payment logs, invoice, gateway error, lockout/security status, service state \nINTERNAL VERIFICATION REQUIRED \nAction: Guided update payment / Pay My Bill / escalated Billing / explained invoice \nNext action: Billing clears lockout or confirms charge",
    "escalation": {
      "neededWhen": [
        "Account is payment-locked or fraud-flagged.",
        "Payment shows successful but service remains suspended.",
        "Customer disputes taxes/fees or invoice amount.",
        "Repeated declines occur with no clear customer-fixable cause.",
        "Customer claims unauthorized charge."
      ],
      "evidenceNeeded": [
        "Payment logs, invoice, taxes/fees, AutoPay status, service",
        "suspension, gateway lockout, security flags."
      ],
      "summaryTemplate": "Payment/Billing issue. Error: [X]. AutoPay: [X]. Service status: [X]. Last charge/payment attempt: \n[X]. Customer action tried: [X]. Gateway logs: [X]. Requesting Billing review for payment \nlockout/decline/suspension/invoice dispute. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Account is payment-locked or fraud-flagged.",
      "Payment shows successful but service remains suspended.",
      "Customer disputes taxes/fees or invoice amount.",
      "Repeated declines occur with no clear customer-fixable cause.",
      "Customer claims unauthorized charge."
    ],
    "escalationFormat": [
      "Payment/Billing issue. Error: [X]. AutoPay: [X]. Service status: [X]. Last charge/payment attempt: ",
      "[X]. Customer action tried: [X]. Gateway logs: [X]. Requesting Billing review for payment ",
      "lockout/decline/suspension/invoice dispute. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "plan-changes-annual-vs-monthly-issues",
      "refund-policy-safe-language",
      "appdashboard-self-service",
      "account-securityfraud"
    ],
    "sourceAliases": [
      "X9",
      "X7",
      "X8",
      "P9"
    ],
    "confidence": "High for handling flow; exact error/fees require account verification",
    "internalVerificationRequired": [
      "Payment logs, invoice, taxes/fees, AutoPay status, service",
      "suspension, gateway lockout, security flags."
    ],
    "batch": "Batch 9",
    "aliases": [
      "payment failed",
      "autopay failed",
      "card declined",
      "incorrect zip",
      "payment lockout",
      "suspicious",
      "payment",
      "too many attempts",
      "taxes and fees",
      "service suspended payment",
      "bill higher",
      "invoice",
      "question",
      "pay my bill"
    ],
    "symptoms": [
      "payment failed",
      "autopay failed",
      "card declined",
      "incorrect zip",
      "payment lockout",
      "suspicious",
      "payment",
      "too many attempts",
      "taxes and fees",
      "service suspended payment",
      "bill higher",
      "invoice",
      "question",
      "pay my bill"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X9, X7, X8, P9"
  },
  {
    "id": "sim-shipping-lost-packages-wrong-sims",
    "title": "SIM Shipping, Lost Packages & Wrong SIMs",
    "category": "start-here",
    "secondaryCategories": [],
    "priority": "normal",
    "tags": [
      "start-here",
      "batch9"
    ],
    "keywords": [
      "sim",
      "shipping",
      "lost",
      "packages",
      "wrong",
      "sims",
      "start-here"
    ],
    "customerPhrases": [
      "sim shipping",
      "starter kit",
      "lost sim package",
      "delayed shipping",
      "wrong sim",
      "wrong color sim",
      "sim",
      "card already used",
      "tracking not moving",
      "replacement sim",
      "overnight shipping",
      "esim instead"
    ],
    "preview": {
      "problem": "Order fulfillment / shipping delay / wrong SIM network / ICCID already used / SIM replacement /",
      "firstQuestion": "Do you have the tracking number or order number?",
      "firstAction": "",
      "escalateIf": "Package appears lost/stalled and replacement is needed."
    },
    "quickAnswer": "Order fulfillment / shipping delay / wrong SIM network / ICCID already used / SIM replacement / \neSIM fallback",
    "useWhen": "Use when customer reports: SIM shipping, starter kit, lost SIM package, delayed shipping, wrong SIM, wrong color SIM, SIM",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Do you have the tracking number or order number?",
      "What SIM/network did you intend to order, and what SIM did you receive?",
      "Does your phone support eSIM for faster activation?"
    ],
    "quickChecks": [
      "Check order status and tracking. INTERNAL VERIFICATION REQUIRED",
      "Verify shipping address if replacement is needed. INTERNAL VERIFICATION",
      "REQUIRED",
      "Verify SIM/ICCID status if “already used.” INTERNAL VERIFICATION REQUIRED",
      "Confirm device eSIM compatibility as a faster option. INTERNAL VERIFICATION",
      "REQUIRED",
      "Check if wrong SIM/network was sent. INTERNAL VERIFICATION REQUIRED",
      "Step-by-step troubleshooting / handling:",
      "Identify issue: delayed/lost package, wrong SIM, already-used SIM, customer ordered",
      "pSIM but phone is eSIM-only.",
      "Check tracking and order status. INTERNAL VERIFICATION REQUIRED",
      "If delayed but still moving, set expectation based on tracking.",
      "If lost/stalled, route Logistics for replacement if eligible. INTERNAL VERIFICATION",
      "REQUIRED",
      "Offer eSIM activation if device supports it and customer wants faster setup.",
      "If wrong SIM/network, verify intended network and received SIM. INTERNAL",
      "VERIFICATION REQUIRED",
      "If “SIM already used,” check ICCID mapping. INTERNAL VERIFICATION REQUIRED",
      "For shipping fee refund/replacement, use safe Billing/Logistics review language."
    ],
    "quickSteps": [
      "Check order status and tracking. INTERNAL VERIFICATION REQUIRED",
      "Verify shipping address if replacement is needed. INTERNAL VERIFICATION",
      "REQUIRED",
      "Verify SIM/ICCID status if “already used.” INTERNAL VERIFICATION REQUIRED",
      "Confirm device eSIM compatibility as a faster option. INTERNAL VERIFICATION",
      "REQUIRED",
      "Check if wrong SIM/network was sent. INTERNAL VERIFICATION REQUIRED",
      "Step-by-step troubleshooting / handling:",
      "Identify issue: delayed/lost package, wrong SIM, already-used SIM, customer ordered",
      "pSIM but phone is eSIM-only.",
      "Check tracking and order status. INTERNAL VERIFICATION REQUIRED",
      "If delayed but still moving, set expectation based on tracking.",
      "If lost/stalled, route Logistics for replacement if eligible. INTERNAL VERIFICATION",
      "REQUIRED",
      "Offer eSIM activation if device supports it and customer wants faster setup.",
      "If wrong SIM/network, verify intended network and received SIM. INTERNAL",
      "VERIFICATION REQUIRED",
      "If “SIM already used,” check ICCID mapping. INTERNAL VERIFICATION REQUIRED",
      "For shipping fee refund/replacement, use safe Billing/Logistics review language."
    ],
    "steps": [],
    "deviceSpecificSteps": {
      "iphone": [
        "Confirm whether iPhone has physical SIM tray.",
        "U.S. iPhone 14 and newer models are eSIM-only, so pivot to eSIM if applicable.",
        "For eSIM-compatible iPhones, use eSIM activation flow if customer agrees."
      ],
      "android": [
        "Confirm device supports eSIM if offering instant activation.",
        "If using pSIM, insert correctly and check SIM Manager.",
        "If SIM not detected, use Physical SIM troubleshooting card.",
        "Copy-ready customer reply — delayed/lost SIM:",
        "I’ll check the order and tracking first. If the SIM is still moving, I’ll give you the latest status. If it",
        "appears lost or stalled, I can route it for replacement review. If your phone supports eSIM, we",
        "may be able to activate you much faster without waiting for the physical SIM.",
        "Copy-ready customer reply — wrong/used SIM:",
        "Let me verify the SIM’s ICCID and the network it was meant for. If the SIM was already used or",
        "does not match the network you selected, I’ll document that and route it for the correct",
        "replacement or eSIM option."
      ]
    },
    "copyTemplates": [],
    "zendeskNote": "Issue: SIM shipping / wrong SIM / ICCID issue \nOrder/tracking: [X] \nShipping address verified: [Yes/No] \nRequested network: [Warp / Dark Star / Light Speed] \nSIM received: [Color/network/ICCID last 4] \nDevice/eSIM compatibility: [Yes/No/Unknown] \nSymptoms: [Delayed / lost / wrong SIM / already used / no SIM detected] \nInternal checks: Tracking, ICCID status, order history, replacement eligibility INTERNAL \nVERIFICATION REQUIRED \nAction: Offered eSIM / routed Logistics / pending customer confirmation \nNext action: Replacement, eSIM activation, or billing/shipping review",
    "escalation": {
      "neededWhen": [
        "Package appears lost/stalled and replacement is needed.",
        "Wrong network SIM was shipped.",
        "ICCID shows already active/used when customer reports brand-new kit.",
        "Customer paid for expedited shipping and delivery failed.",
        "Shipping/refund exception is requested."
      ],
      "evidenceNeeded": [
        "Tracking, order status, shipping address, ICCID status,",
        "replacement eligibility, shipping fee/refund review."
      ],
      "summaryTemplate": "SIM order/logistics issue. Order: [X]. Tracking: [X]. Issue: [lost/wrong SIM/already \nused/delayed]. Address verified: [Yes/No]. Intended network: [X]. Received SIM: [X]. eSIM \noption offered: [Yes/No]. Requesting Logistics/Billing review for replacement/shipping \nadjustment. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Package appears lost/stalled and replacement is needed.",
      "Wrong network SIM was shipped.",
      "ICCID shows already active/used when customer reports brand-new kit.",
      "Customer paid for expedited shipping and delivery failed.",
      "Shipping/refund exception is requested."
    ],
    "escalationFormat": [
      "SIM order/logistics issue. Order: [X]. Tracking: [X]. Issue: [lost/wrong SIM/already ",
      "used/delayed]. Address verified: [Yes/No]. Intended network: [X]. Received SIM: [X]. eSIM ",
      "option offered: [Yes/No]. Requesting Logistics/Billing review for replacement/shipping ",
      "adjustment. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "physical-sim-not-working-invalid-sim-iccid-checks",
      "esim-install-qr-code-failures",
      "device-compatibility",
      "refund-policy-safe-language",
      "refund-policy-safe-language"
    ],
    "sourceAliases": [
      "X7",
      "X3",
      "X9",
      "X8"
    ],
    "confidence": "Medium-High because shipping timelines/replacement rules require order\nverification",
    "internalVerificationRequired": [
      "Tracking, order status, shipping address, ICCID status,",
      "replacement eligibility, shipping fee/refund review."
    ],
    "batch": "Batch 9",
    "aliases": [
      "sim shipping",
      "starter kit",
      "lost sim package",
      "delayed shipping",
      "wrong sim",
      "wrong color sim",
      "sim",
      "card already used",
      "tracking not moving",
      "replacement sim",
      "overnight shipping",
      "esim instead"
    ],
    "symptoms": [
      "sim shipping",
      "starter kit",
      "lost sim package",
      "delayed shipping",
      "wrong sim",
      "wrong color sim",
      "sim",
      "card already used",
      "tracking not moving",
      "replacement sim",
      "overnight shipping",
      "esim instead"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X7, X3, X9, X8"
  },
  {
    "id": "device-shop-returns-warranty",
    "title": "Device Shop, Returns & Warranty",
    "category": "start-here",
    "secondaryCategories": [],
    "priority": "normal",
    "tags": [
      "start-here",
      "batch9"
    ],
    "keywords": [
      "device",
      "shop",
      "returns",
      "warranty",
      "start-here"
    ],
    "customerPhrases": [
      "device shop",
      "return phone",
      "warranty",
      "broken phone",
      "refurbished phone",
      "restocking fee",
      "rma",
      "return label",
      "device refund",
      "damaged device",
      "find my",
      "frp",
      "manufacturer warranty"
    ],
    "preview": {
      "problem": "Device return / RMA eligibility / warranty path / restocking fee dispute / warehouse inspection /",
      "firstQuestion": "Are you trying to return the device, or file a warranty claim for a defect?",
      "firstAction": "",
      "escalateIf": "Return eligibility is disputed."
    },
    "quickAnswer": "Device return / RMA eligibility / warranty path / restocking fee dispute / warehouse inspection / \nmanufacturer claim",
    "useWhen": "Use when customer reports: device shop, return phone, warranty, broken phone, refurbished phone, restocking fee, RMA,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are you trying to return the device, or file a warranty claim for a defect?",
      "When was the device delivered?",
      "Is the device in original condition with all packaging/accessories?"
    ],
    "quickChecks": [
      "Verify delivery date and return window. INTERNAL VERIFICATION REQUIRED",
      "Verify device condition/usage if required by policy. INTERNAL VERIFICATION",
      "REQUIRED",
      "Check RMA eligibility and return instructions. INTERNAL VERIFICATION REQUIRED",
      "Explain device locks must be removed before return.",
      "Route warranty vs return correctly. INTERNAL VERIFICATION REQUIRED",
      "Step-by-step troubleshooting / handling:",
      "Identify request: return, exchange, defect/warranty, damaged shipment, or refund status.",
      "Verify delivery date and order. INTERNAL VERIFICATION REQUIRED",
      "Check whether request is inside return window. INTERNAL VERIFICATION REQUIRED",
      "Check condition requirements and any restocking/shipping terms. INTERNAL",
      "VERIFICATION REQUIRED",
      "If return eligible, send/trigger RMA through approved process. INTERNAL",
      "VERIFICATION REQUIRED",
      "Tell customer not to ship without RMA instructions if required.",
      "Tell customer to remove device locks before return:",
      "iPhone: Find My/iCloud lock off.",
      "Android: Google account/FRP removed.",
      "If outside return window or warranty issue, route to manufacturer/warranty path if",
      "applicable.",
      "Do not promise refund until warehouse inspection and billing review are complete.",
      "INTERNAL VERIFICATION REQUIRED"
    ],
    "quickSteps": [
      "Verify delivery date and return window. INTERNAL VERIFICATION REQUIRED",
      "Verify device condition/usage if required by policy. INTERNAL VERIFICATION",
      "REQUIRED",
      "Check RMA eligibility and return instructions. INTERNAL VERIFICATION REQUIRED",
      "Explain device locks must be removed before return.",
      "Route warranty vs return correctly. INTERNAL VERIFICATION REQUIRED",
      "Step-by-step troubleshooting / handling:",
      "Identify request: return, exchange, defect/warranty, damaged shipment, or refund status.",
      "Verify delivery date and order. INTERNAL VERIFICATION REQUIRED",
      "Check whether request is inside return window. INTERNAL VERIFICATION REQUIRED",
      "Check condition requirements and any restocking/shipping terms. INTERNAL",
      "VERIFICATION REQUIRED",
      "If return eligible, send/trigger RMA through approved process. INTERNAL",
      "VERIFICATION REQUIRED",
      "Tell customer not to ship without RMA instructions if required.",
      "Tell customer to remove device locks before return:",
      "iPhone: Find My/iCloud lock off.",
      "Android: Google account/FRP removed.",
      "If outside return window or warranty issue, route to manufacturer/warranty path if",
      "applicable.",
      "Do not promise refund until warehouse inspection and billing review are complete.",
      "INTERNAL VERIFICATION REQUIRED"
    ],
    "steps": [],
    "deviceSpecificSteps": {
      "iphone": [
        "Sign out of iCloud if required.",
        "Turn off Find My before return.",
        "Erase personal data only after customer has backed up and understands.",
        "Remove SIM/eSIM if needed per return instructions."
      ],
      "android": [
        "Remove Google account before reset to avoid FRP lock.",
        "Back up data first.",
        "Factory reset only if part of return prep and customer confirms data backup.",
        "Remove SIM/eSIM if required by instructions.",
        "Copy-ready customer reply — return:",
        "I can check the return eligibility for you. Device returns depend on delivery date, condition,",
        "usage, and the RMA process, so I’ll verify the order first. Please don’t mail the device back until",
        "we confirm the return instructions.",
        "Copy-ready customer reply — warranty:",
        "If this is a defect rather than a return request, the next step may be the warranty path instead of",
        "a standard return. I’ll check the order date and device status first, then guide you to the correct",
        "option.",
        "Copy-ready customer reply — refund-safe:",
        "A device refund is not final until the return is received and inspected under the return policy. I’ll",
        "document the request and help start the correct RMA process if the order qualifies."
      ]
    },
    "copyTemplates": [],
    "zendeskNote": "Issue: Device return / RMA / warranty \nOrder/device: [Model/order] \nDelivery date: [X] \nRequest type: [Return / Warranty / Exchange / Damaged / Refund status] \nCondition/usage: [X] INTERNAL VERIFICATION REQUIRED \nReturn window: [Eligible / Not eligible / Needs review] \nCustomer advised: Remove Find My/iCloud or Google FRP before return \nInternal checks: Order, delivery, return eligibility, restocking/shipping terms, RMA status \nINTERNAL VERIFICATION REQUIRED \nAction: RMA initiated / warranty path explained / escalated Billing/Warehouse \nNext action: Await device return/inspection or review",
    "escalation": {
      "neededWhen": [
        "Return eligibility is disputed.",
        "Customer disputes restocking fee or inspection result.",
        "Device returned damaged/locked or warehouse rejects RMA.",
        "Refund status is delayed after warehouse receipt.",
        "Warranty vs return responsibility is unclear."
      ],
      "evidenceNeeded": [
        "Delivery date, return window, condition, usage, RMA eligibility,",
        "restocking/shipping terms, warehouse inspection, refund processing.",
        "Batch 9 Agent Import Notes",
        "Create these as separate cards",
        "Refund Policy & Safe Language",
        "Plan Changes & Annual vs Monthly Issues",
        "Shared Data Pools, Top-Ups & Rollover",
        "Perks, Promos & Discounts",
        "AutoPay, Payment Failures, Taxes & Lockouts",
        "SIM Shipping, Lost Packages & Wrong SIMs",
        "Device Shop, Returns & Warranty",
        "Suggested category mapping",
        "Plans / Billing",
        "Refund Policy & Safe Language",
        "Plan Changes & Annual vs Monthly Issues",
        "Shared Data Pools, Top-Ups & Rollover",
        "Perks, Promos & Discounts",
        "AutoPay, Payment Failures, Taxes & Lockouts",
        "Orders",
        "SIM Shipping, Lost Packages & Wrong SIMs",
        "Device Shop, Returns & Warranty",
        "Devices / Watches",
        "SIM Shipping, Lost Packages & Wrong SIMs",
        "Device Shop, Returns & Warranty",
        "eSIM / SIM",
        "SIM Shipping, Lost Packages & Wrong SIMs",
        "Suggested pinned/common cards from Batch 9",
        "Refund Policy & Safe Language",
        "AutoPay, Payment Failures, Taxes & Lockouts",
        "Plan Changes & Annual vs Monthly Issues",
        "Shared Data Pools, Top-Ups & Rollover",
        "SIM Shipping, Lost Packages & Wrong SIMs",
        "UI rule",
        "Show short preview first:",
        "Problem",
        "First question",
        "First action",
        "Escalate if",
        "Then full card opens with:",
        "Ask customer first",
        "Quick checks",
        "Step-by-step troubleshooting",
        "iPhone steps",
        "Android steps",
        "Copy-ready reply",
        "Zendesk note",
        "Escalation summary",
        "Related playbooks",
        "Source aliases",
        "Confidence",
        "Needs internal verification",
        "Billing safety rule for agent",
        "For billing, refunds, credits, waivers, returns, promos, shipping, and device orders:",
        "Never promise a refund, credit, waiver, replacement, shipping refund, promo credit, or",
        "return approval before account/internal verification.",
        "Never ask for full card numbers, CVV, full payment details, or unnecessary PII.",
        "Never tell the customer “you are definitely not eligible” unless policy and account facts",
        "are verified.",
        "Use “I’ll check,” “I’ll submit for review,” “Billing will review,” and “needs account/internal",
        "verification.”",
        "Warn before cancellation if service or number could be affected.",
        "Mark all account, billing, gateway, promo, RMA, usage, tracking, and refund actions as",
        "INTERNAL VERIFICATION REQUIRED.",
        "Merge notes for later",
        "Batch 9 Refund Policy should become the master safe-language billing card.",
        "Plan Changes should link to App/Dashboard self-service from Batch 11.",
        "SIM Shipping should link to Batch 3 Physical SIM and Batch 7 Device Compatibility.",
        "Payment Failures should link to Batch 12 Error Dictionary for exact errors like",
        "incorrect_zip",
        ",",
        "card_declined",
        ", and payment lockouts."
      ],
      "summaryTemplate": "Device return/warranty review. Device: [X]. Order/delivery date: [X]. Request: \n[return/warranty/refund]. Eligibility: [X]. Condition/usage: [X]. Customer advised to remove \n\ndevice locks. Issue/dispute: [X]. Requesting Billing/Warehouse/RMA review. INTERNAL \nVERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Return eligibility is disputed.",
      "Customer disputes restocking fee or inspection result.",
      "Device returned damaged/locked or warehouse rejects RMA.",
      "Refund status is delayed after warehouse receipt.",
      "Warranty vs return responsibility is unclear."
    ],
    "escalationFormat": [
      "Device return/warranty review. Device: [X]. Order/delivery date: [X]. Request: ",
      "[return/warranty/refund]. Eligibility: [X]. Condition/usage: [X]. Customer advised to remove ",
      "",
      "device locks. Issue/dispute: [X]. Requesting Billing/Warehouse/RMA review. INTERNAL ",
      "VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "refund-policy-safe-language",
      "sim-shipping-orders",
      "device-compatibility"
    ],
    "sourceAliases": [
      "X7",
      "X3",
      "X8"
    ],
    "confidence": "Medium-High because return/warranty terms require order/current policy\nverification",
    "internalVerificationRequired": [
      "Delivery date, return window, condition, usage, RMA eligibility,",
      "restocking/shipping terms, warehouse inspection, refund processing.",
      "Batch 9 Agent Import Notes",
      "Create these as separate cards",
      "Refund Policy & Safe Language",
      "Plan Changes & Annual vs Monthly Issues",
      "Shared Data Pools, Top-Ups & Rollover",
      "Perks, Promos & Discounts",
      "AutoPay, Payment Failures, Taxes & Lockouts",
      "SIM Shipping, Lost Packages & Wrong SIMs",
      "Device Shop, Returns & Warranty",
      "Suggested category mapping",
      "Plans / Billing",
      "Refund Policy & Safe Language",
      "Plan Changes & Annual vs Monthly Issues",
      "Shared Data Pools, Top-Ups & Rollover",
      "Perks, Promos & Discounts",
      "AutoPay, Payment Failures, Taxes & Lockouts",
      "Orders",
      "SIM Shipping, Lost Packages & Wrong SIMs",
      "Device Shop, Returns & Warranty",
      "Devices / Watches",
      "SIM Shipping, Lost Packages & Wrong SIMs",
      "Device Shop, Returns & Warranty",
      "eSIM / SIM",
      "SIM Shipping, Lost Packages & Wrong SIMs",
      "Suggested pinned/common cards from Batch 9",
      "Refund Policy & Safe Language",
      "AutoPay, Payment Failures, Taxes & Lockouts",
      "Plan Changes & Annual vs Monthly Issues",
      "Shared Data Pools, Top-Ups & Rollover",
      "SIM Shipping, Lost Packages & Wrong SIMs",
      "UI rule",
      "Show short preview first:",
      "Problem",
      "First question",
      "First action",
      "Escalate if",
      "Then full card opens with:",
      "Ask customer first",
      "Quick checks",
      "Step-by-step troubleshooting",
      "iPhone steps",
      "Android steps",
      "Copy-ready reply",
      "Zendesk note",
      "Escalation summary",
      "Related playbooks",
      "Source aliases",
      "Confidence",
      "Needs internal verification",
      "Billing safety rule for agent",
      "For billing, refunds, credits, waivers, returns, promos, shipping, and device orders:",
      "Never promise a refund, credit, waiver, replacement, shipping refund, promo credit, or",
      "return approval before account/internal verification.",
      "Never ask for full card numbers, CVV, full payment details, or unnecessary PII.",
      "Never tell the customer “you are definitely not eligible” unless policy and account facts",
      "are verified.",
      "Use “I’ll check,” “I’ll submit for review,” “Billing will review,” and “needs account/internal",
      "verification.”",
      "Warn before cancellation if service or number could be affected.",
      "Mark all account, billing, gateway, promo, RMA, usage, tracking, and refund actions as",
      "INTERNAL VERIFICATION REQUIRED.",
      "Merge notes for later",
      "Batch 9 Refund Policy should become the master safe-language billing card.",
      "Plan Changes should link to App/Dashboard self-service from Batch 11.",
      "SIM Shipping should link to Batch 3 Physical SIM and Batch 7 Device Compatibility.",
      "Payment Failures should link to Batch 12 Error Dictionary for exact errors like",
      "incorrect_zip",
      ",",
      "card_declined",
      ", and payment lockouts."
    ],
    "batch": "Batch 9",
    "aliases": [
      "device shop",
      "return phone",
      "warranty",
      "broken phone",
      "refurbished phone",
      "restocking fee",
      "rma",
      "return label",
      "device refund",
      "damaged device",
      "find my",
      "frp",
      "manufacturer warranty"
    ],
    "symptoms": [
      "device shop",
      "return phone",
      "warranty",
      "broken phone",
      "refurbished phone",
      "restocking fee",
      "rma",
      "return label",
      "device refund",
      "damaged device",
      "find my",
      "frp",
      "manufacturer warranty"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X7, X3, X8"
  },
  {
    "id": "app-dashboard-bug-troubleshooting",
    "title": "App & Dashboard Bug Troubleshooting",
    "category": "app-dashboard",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "app-dashboard",
      "batch10"
    ],
    "keywords": [
      "app",
      "dashboard",
      "bug",
      "troubleshooting",
      "app-dashboard"
    ],
    "customerPhrases": [
      "app bug",
      "dashboard bug",
      "app crashing",
      "dashboard won’t load",
      "something went wrong",
      "try again",
      "later",
      "button not working",
      "page stuck",
      "cannot click",
      "login issue",
      "app cache",
      "web dashboard"
    ],
    "preview": {
      "problem": "App version issue / expired session / browser cache / API timeout / VPN or Private Relay",
      "firstQuestion": "Are you using the mobile app or the web dashboard?",
      "firstAction": "Capture exact error text and screenshot if available.",
      "escalateIf": "Critical self-service flow fails on both app and web."
    },
    "quickAnswer": "App version issue / expired session / browser cache / API timeout / VPN or Private Relay \ninterference / platform bug / account lock",
    "useWhen": "Use when customer reports: app bug, dashboard bug, app crashing, dashboard won’t load, something went wrong, try again",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are you using the mobile app or the web dashboard?",
      "What exact error message do you see?",
      "Does the same issue happen if you try the website from a browser?"
    ],
    "quickChecks": [
      "Ask app version, OS version, and device model.",
      "Force-close app, update app, log out/in.",
      "Try web dashboard to check app-vs-web parity.",
      "Turn off VPN, Private Relay, ad blocker, or Private DNS for testing.",
      "Check whether there is a known platform issue or account lock. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "quickSteps": [
      "Ask app version, OS version, and device model.",
      "Force-close app, update app, log out/in.",
      "Try web dashboard to check app-vs-web parity.",
      "Turn off VPN, Private Relay, ad blocker, or Private DNS for testing.",
      "Check whether there is a known platform issue or account lock. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "steps": [
      "Capture exact error text and screenshot if available.",
      "Ask what action the customer was trying to complete.",
      "Have customer force-close app and reopen.",
      "Have customer update the app from App Store/Play Store.",
      "Log out and log back in.",
      "If Android, clear US Mobile app cache.",
      "If iPhone, turn off iCloud Private Relay/VPN temporarily.",
      "Ask customer to try the same action on the web dashboard.",
      "If web works but app fails, document as app-specific bug candidate.",
      "If both app and web fail, check account/API/platform status internally. INTERNAL",
      "VERIFICATION REQUIRED",
      "If login/account locked/2FA issue appears, use secure account verification flow.",
      "INTERNAL VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Force-close app and reopen.",
        "Update app from App Store.",
        "Turn off VPN/iCloud Private Relay temporarily.",
        "Try Safari or desktop browser.",
        "Capture screenshot of exact error."
      ],
      "android": [
        "Force-close app.",
        "Update app from Play Store.",
        "Settings > Apps > US Mobile > Storage > Clear Cache.",
        "Turn off VPN/Private DNS temporarily.",
        "Try Chrome or desktop browser."
      ],
      "general": [
        "Capture exact error text and screenshot if available.",
        "Ask what action the customer was trying to complete.",
        "Have customer force-close app and reopen.",
        "Have customer update the app from App Store/Play Store.",
        "Log out and log back in.",
        "If Android, clear US Mobile app cache.",
        "If iPhone, turn off iCloud Private Relay/VPN temporarily.",
        "Ask customer to try the same action on the web dashboard.",
        "If web works but app fails, document as app-specific bug candidate.",
        "If both app and web fail, check account/API/platform status internally. INTERNAL",
        "VERIFICATION REQUIRED",
        "If login/account locked/2FA issue appears, use secure account verification flow.",
        "INTERNAL VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "That error may be an app session or cache issue, so let’s isolate whether it’s the app or the \naccount/dashboard. Please force-close the app, check for an update, log back in, and try again. \nIf it still fails, please try the same action from the web dashboard. Tell me whether it fails in both \nplaces or only in the app."
      }
    ],
    "zendeskNote": "Issue: App/dashboard bug or login issue \nPlatform: [iOS app / Android app / Web / Both] \nApp version: [X] \nDevice/OS: [X] \nFlow attempted: [Activation / payment / top-up / eSIM / plan change / other] \nError: [Exact error] \nSteps tried: App updated, cache/session cleared, VPN/Private Relay off, web parity tested \nInternal checks: Account lock, known API/platform issue, 2FA/login status INTERNAL \nVERIFICATION REQUIRED \nResult: [Works on web / fails both / reproducible bug / pending]",
    "escalation": {
      "neededWhen": [
        "Critical self-service flow fails on both app and web.",
        "Payment, activation, eSIM install, login, or porting flow is blocked.",
        "Multiple users report same app/dashboard bug.",
        "Exact reproducible steps are available.",
        "Account appears locked or 2FA cannot be completed."
      ],
      "evidenceNeeded": [
        "Account lock, 2FA reset, password/account actions, platform/API",
        "outage, engineering bug submission."
      ],
      "summaryTemplate": "Bug candidate / dashboard issue. Platform: [iOS/Android/Web]. Version: [X]. Flow: [X]. Exact \nsteps: [X]. Expected result: [X]. Actual result/error: [X]. Web parity: [works/fails]. Customer \nimpact: [activation/payment/no service/etc.]. Requesting engineering/platform review. \nINTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Critical self-service flow fails on both app and web.",
      "Payment, activation, eSIM install, login, or porting flow is blocked.",
      "Multiple users report same app/dashboard bug.",
      "Exact reproducible steps are available.",
      "Account appears locked or 2FA cannot be completed."
    ],
    "escalationFormat": [
      "Bug candidate / dashboard issue. Platform: [iOS/Android/Web]. Version: [X]. Flow: [X]. Exact ",
      "steps: [X]. Expected result: [X]. Actual result/error: [X]. Web parity: [works/fails]. Customer ",
      "impact: [activation/payment/no service/etc.]. Requesting engineering/platform review. ",
      "INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "autopay-payment-failures-taxes-lockouts",
      "activate-new-line",
      "esim-install-qr-code-failures",
      "appdashboard-self-service",
      "messaging-routing-errors-error-97-invalid-destination",
      "dictionary"
    ],
    "sourceAliases": [
      "X8",
      "X10",
      "X9",
      "P9"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Account lock, 2FA reset, password/account actions, platform/API",
      "outage, engineering bug submission."
    ],
    "batch": "Batch 10",
    "aliases": [
      "app bug",
      "dashboard bug",
      "app crashing",
      "dashboard won’t load",
      "something went wrong",
      "try again",
      "later",
      "button not working",
      "page stuck",
      "cannot click",
      "login issue",
      "app cache",
      "web dashboard"
    ],
    "symptoms": [
      "app bug",
      "dashboard bug",
      "app crashing",
      "dashboard won’t load",
      "something went wrong",
      "try again",
      "later",
      "button not working",
      "page stuck",
      "cannot click",
      "login issue",
      "app cache",
      "web dashboard"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X8, X10, X9, P9"
  },
  {
    "id": "activate-a-new-line-transfer-number-in",
    "title": "Activate a New Line & Transfer Number In",
    "category": "activation",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "activation",
      "batch10"
    ],
    "keywords": [
      "activate",
      "new",
      "line",
      "transfer",
      "number",
      "activation"
    ],
    "customerPhrases": [
      "activate new line",
      "add a line",
      "transfer number in",
      "keep my number",
      "port in",
      "how to activate",
      "where do i click",
      "new number",
      "physical sim activation",
      "esim activation"
    ],
    "preview": {
      "problem": "Customer onboarding / self-service navigation / IMEI compatibility / port-in credential issue / SIM",
      "firstQuestion": "Are you getting a new number, or keeping your existing number?",
      "firstAction": "",
      "escalateIf": "Activation wizard will not advance despite valid fields."
    },
    "quickAnswer": "Customer onboarding / self-service navigation / IMEI compatibility / port-in credential issue / SIM \nor eSIM activation issue",
    "useWhen": "Use when customer reports: activate new line, add a line, transfer number in, keep my number, port in, how to activate,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are you getting a new number, or keeping your existing number?",
      "Are you activating eSIM or a physical SIM?",
      "Is your phone unlocked?"
    ],
    "quickChecks": [
      "Confirm customer is logged into dashboard/app.",
      "Confirm device compatibility/IMEI. INTERNAL VERIFICATION REQUIRED IF",
      "CHECKING TOOLS",
      "If porting, confirm account number, transfer PIN, and billing ZIP from old carrier.",
      "If pSIM, confirm correct ICCID/SIM/network.",
      "If activation stalls, check activation/port status internally. INTERNAL VERIFICATION",
      "REQUIRED",
      "Step-by-step self-service flow:",
      "Sign in to US Mobile dashboard/app.",
      "From home/dashboard, choose Add a new line or current equivalent.",
      "Choose activation path:",
      "Get a new number",
      "Keep my number / Transfer my number",
      "Choose SIM type:",
      "eSIM if device supports it.",
      "Physical SIM if using SIM kit.",
      "Enter/check IMEI if prompted.",
      "If keeping number, enter donor carrier details:",
      "Account number.",
      "Transfer PIN.",
      "Billing ZIP.",
      "Previous carrier.",
      "Choose network/plan if prompted.",
      "Review and submit.",
      "Keep old carrier service active until port completes.",
      "If activation or port gets stuck/rejected, use Activation or Port Rejection playbook.",
      "INTERNAL VERIFICATION REQUIRED"
    ],
    "quickSteps": [
      "Confirm customer is logged into dashboard/app.",
      "Confirm device compatibility/IMEI. INTERNAL VERIFICATION REQUIRED IF",
      "CHECKING TOOLS",
      "If porting, confirm account number, transfer PIN, and billing ZIP from old carrier.",
      "If pSIM, confirm correct ICCID/SIM/network.",
      "If activation stalls, check activation/port status internally. INTERNAL VERIFICATION",
      "REQUIRED",
      "Step-by-step self-service flow:",
      "Sign in to US Mobile dashboard/app.",
      "From home/dashboard, choose Add a new line or current equivalent.",
      "Choose activation path:",
      "Get a new number",
      "Keep my number / Transfer my number",
      "Choose SIM type:",
      "eSIM if device supports it.",
      "Physical SIM if using SIM kit.",
      "Enter/check IMEI if prompted.",
      "If keeping number, enter donor carrier details:",
      "Account number.",
      "Transfer PIN.",
      "Billing ZIP.",
      "Previous carrier.",
      "Choose network/plan if prompted.",
      "Review and submit.",
      "Keep old carrier service active until port completes.",
      "If activation or port gets stuck/rejected, use Activation or Port Rejection playbook.",
      "INTERNAL VERIFICATION REQUIRED"
    ],
    "steps": [],
    "deviceSpecificSteps": {
      "iphone": [
        "Check Carrier Lock: Settings > General > About > “No SIM restrictions.”",
        "If using eSIM, keep Wi-Fi on.",
        "If U.S. iPhone 14 or newer, use eSIM, not physical SIM."
      ],
      "android": [
        "Check SIM Manager after activation.",
        "If eSIM, keep Wi-Fi on and use Add eSIM flow.",
        "If pSIM, ensure SIM is inserted and enabled."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Let’s start from the dashboard. Click Add a new line, then choose whether you want a new \nnumber or want to keep your current number. \nIf you’re keeping your number, please have your old carrier account number, transfer PIN, and \nbilling ZIP ready. Also, keep your old service active until the transfer completes."
      }
    ],
    "zendeskNote": "Issue: Activation / port-in self-service guidance \nActivation type: [New number / Port-in] \nSIM type: [eSIM / pSIM] \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \n\nDevice/OS: [X] \nCustomer guided through: Add new line > activation path > IMEI/SIM > plan > submit \nPort details ready: [Yes/No] \nInternal checks: Activation/port status if stalled INTERNAL VERIFICATION REQUIRED \nResult: [Submitted / stuck / rejected / pending]",
    "escalation": {
      "neededWhen": [
        "Activation wizard will not advance despite valid fields.",
        "eSIM or pSIM activation fails after correct steps.",
        "Port is stuck, rejected, or partial/split.",
        "IMEI compatibility passes but activation blocks.",
        "Customer has no service after dashboard says active."
      ],
      "evidenceNeeded": [
        "Activation status, port status, IMEI compatibility, ICCID/EID",
        "mapping, manual override."
      ],
      "summaryTemplate": "Activation/port-in issue. Type: [new number/port]. SIM: [eSIM/pSIM]. Network: [X]. Device/OS: \n[X]. Step failed: [X]. Error: [exact]. Port donor: [X] if applicable. Credentials verified: [Yes/No]. \nRequesting activation/porting review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Activation wizard will not advance despite valid fields.",
      "eSIM or pSIM activation fails after correct steps.",
      "Port is stuck, rejected, or partial/split.",
      "IMEI compatibility passes but activation blocks.",
      "Customer has no service after dashboard says active."
    ],
    "escalationFormat": [
      "Activation/port-in issue. Type: [new number/port]. SIM: [eSIM/pSIM]. Network: [X]. Device/OS: ",
      "[X]. Step failed: [X]. Error: [exact]. Port donor: [X] if applicable. Credentials verified: [Yes/No]. ",
      "Requesting activation/porting review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "new-line-activation-pending",
      "port-rejections-account-pin-zip-mismatch",
      "esim-install-qr-code-failures",
      "physical-sim-not-working-invalid-sim-iccid-checks",
      "carrier-lock-sim-not-supported",
      "carrier-lock-sim-not-supported"
    ],
    "sourceAliases": [
      "X8",
      "X5",
      "X3",
      "P3"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Activation status, port status, IMEI compatibility, ICCID/EID",
      "mapping, manual override."
    ],
    "batch": "Batch 10",
    "aliases": [
      "activate new line",
      "add a line",
      "transfer number in",
      "keep my number",
      "port in",
      "how to activate",
      "where do i click",
      "new number",
      "physical sim activation",
      "esim activation"
    ],
    "symptoms": [
      "activate new line",
      "add a line",
      "transfer number in",
      "keep my number",
      "port in",
      "how to activate",
      "where do i click",
      "new number",
      "physical sim activation",
      "esim activation"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X8, X5, X3, P3"
  },
  {
    "id": "install-esim-download-apn",
    "title": "Install eSIM & Download APN",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "apn-data",
      "batch10"
    ],
    "keywords": [
      "install",
      "esim",
      "download",
      "apn",
      "apn-data"
    ],
    "customerPhrases": [
      "install esim",
      "qr code",
      "view qr code",
      "download apn",
      "apn setup",
      "esim install",
      "data not working",
      "after esim",
      "safari apn",
      "android apn",
      "where do i tap"
    ],
    "preview": {
      "problem": "eSIM installation guidance / APN profile missing / wrong default data line / old eSIM conflict /",
      "firstQuestion": "Are you on iPhone or Android?",
      "firstAction": "",
      "escalateIf": "QR says expired/used/no longer valid."
    },
    "quickAnswer": "eSIM installation guidance / APN profile missing / wrong default data line / old eSIM conflict / \nQR code used or invalid / Android manual APN required",
    "useWhen": "Use when customer reports: install eSIM, QR code, view QR code, download APN, APN setup, eSIM install, data not working",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are you on iPhone or Android?",
      "Are you connected to stable Wi-Fi?",
      "Did the eSIM install successfully, or is the issue data after install?"
    ],
    "quickChecks": [
      "Confirm eSIM status and QR/profile state. INTERNAL VERIFICATION REQUIRED IF",
      "REISSUE NEEDED",
      "Confirm stable Wi-Fi and VPN off.",
      "Check for old/pending eSIM profiles.",
      "Confirm correct line is selected for data.",
      "Confirm APN settings/profile if data fails after install.",
      "Step-by-step self-service flow — eSIM:",
      "Sign in to US Mobile app/dashboard.",
      "Open the relevant line.",
      "Look for View QR Code, Install eSIM, or current eSIM install option.",
      "On phone:",
      "iPhone: Settings > Cellular > Add eSIM > Use QR Code.",
      "Android: Settings > SIM Manager / Network & Internet > Add eSIM.",
      "Keep Wi-Fi on until install completes.",
      "After install, confirm the US Mobile eSIM is ON.",
      "Select US Mobile as default for cellular data if needed.",
      "Restart and test calls/SMS/data.",
      "Step-by-step self-service flow — APN:",
      "Confirm network: Warp, Dark Star, or Light Speed.",
      "If iPhone and APN profile is needed:",
      "Use Safari.",
      "Visit the approved APN download path.",
      "Download profile.",
      "Go to Settings > General > VPN & Device Management.",
      "Tap Install.",
      "If Android:",
      "Settings > Mobile Networks > Access Point Names.",
      "Add the correct APN for the active network.",
      "Save and select it.",
      "Restart and test with Wi-Fi off."
    ],
    "quickSteps": [
      "Confirm eSIM status and QR/profile state. INTERNAL VERIFICATION REQUIRED IF",
      "REISSUE NEEDED",
      "Confirm stable Wi-Fi and VPN off.",
      "Check for old/pending eSIM profiles.",
      "Confirm correct line is selected for data.",
      "Confirm APN settings/profile if data fails after install.",
      "Step-by-step self-service flow — eSIM:",
      "Sign in to US Mobile app/dashboard.",
      "Open the relevant line.",
      "Look for View QR Code, Install eSIM, or current eSIM install option.",
      "On phone:",
      "iPhone: Settings > Cellular > Add eSIM > Use QR Code.",
      "Android: Settings > SIM Manager / Network & Internet > Add eSIM.",
      "Keep Wi-Fi on until install completes.",
      "After install, confirm the US Mobile eSIM is ON.",
      "Select US Mobile as default for cellular data if needed.",
      "Restart and test calls/SMS/data.",
      "Step-by-step self-service flow — APN:",
      "Confirm network: Warp, Dark Star, or Light Speed.",
      "If iPhone and APN profile is needed:",
      "Use Safari.",
      "Visit the approved APN download path.",
      "Download profile.",
      "Go to Settings > General > VPN & Device Management.",
      "Tap Install.",
      "If Android:",
      "Settings > Mobile Networks > Access Point Names.",
      "Add the correct APN for the active network.",
      "Save and select it.",
      "Restart and test with Wi-Fi off."
    ],
    "steps": [],
    "deviceSpecificSteps": {
      "iphone": [
        "Use Safari for APN profile download.",
        "Install under VPN & Device Management.",
        "Remove old APN profiles if they conflict.",
        "Disable Allow Cellular Data Switching during testing.",
        "Keep Wi-Fi on for eSIM install, then test cellular with Wi-Fi off."
      ],
      "android": [
        "Add eSIM from SIM Manager / Network & Internet.",
        "Manually enter APN.",
        "Select saved APN with radio button.",
        "Turn off Private DNS/VPN during testing.",
        "Restart."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "To install the eSIM, connect to Wi-Fi, open your US Mobile dashboard/app, choose your line, \nand select the eSIM/QR option. Then go to your phone settings and add the eSIM by scanning \nthe QR code. \nIf the eSIM installs but data does not work, we’ll check the APN next. iPhone uses a \nSafari-downloaded profile, while Android usually needs the APN typed manually."
      }
    ],
    "zendeskNote": "Issue: eSIM install / APN setup \nNetwork: [Warp / Dark Star / Light Speed] \nDevice/OS: [X] \nSIM/eSIM: eSIM \nTrigger: [Activation / device transfer / Teleport / reissue] \nSymptoms: [QR fail / eSIM installed no data / APN missing / MMS fail] \nSteps tried: Wi-Fi verified, QR/app flow used, old profiles checked, APN installed/entered, \ndefault data line checked, rebooted \nInternal checks: QR/profile state, EID/IMEI, eSIM reissue if needed INTERNAL VERIFICATION \nREQUIRED \nResult: [Resolved / pending / escalated]",
    "escalation": {
      "neededWhen": [
        "QR says expired/used/no longer valid.",
        "eSIM fails with exact install error after Wi-Fi/profile checks.",
        "EID/IMEI mismatch is suspected.",
        "eSIM installs but account shows active and no service/data persists.",
        "APN is correct but data/MMS still fails."
      ],
      "evidenceNeeded": [
        "EID/IMEI match, QR/profile state, eSIM reissue, APN/backend",
        "provisioning."
      ],
      "summaryTemplate": "eSIM/APN issue. Network: [X]. Device/OS: [X]. Error: [exact]. Wi-Fi stable, VPN off, old profiles \nchecked. EID/IMEI verified: [Yes/No]. APN verified: [Yes/No]. Requesting eSIM profile reissue or \ndata provisioning review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "QR says expired/used/no longer valid.",
      "eSIM fails with exact install error after Wi-Fi/profile checks.",
      "EID/IMEI mismatch is suspected.",
      "eSIM installs but account shows active and no service/data persists.",
      "APN is correct but data/MMS still fails."
    ],
    "escalationFormat": [
      "eSIM/APN issue. Network: [X]. Device/OS: [X]. Error: [exact]. Wi-Fi stable, VPN off, old profiles ",
      "checked. EID/IMEI verified: [Yes/No]. APN verified: [Yes/No]. Requesting eSIM profile reissue or ",
      "data provisioning review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "esim-install-qr-code-failures",
      "iphone-apnprofile-logic",
      "android-apn-setup",
      "warp-apn-setup-mms-configuration",
      "apn-escalation-triggers",
      "teleport-recovery"
    ],
    "sourceAliases": [
      "X8",
      "X9",
      "X1",
      "X3"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "EID/IMEI match, QR/profile state, eSIM reissue, APN/backend",
      "provisioning."
    ],
    "batch": "Batch 10",
    "aliases": [
      "install esim",
      "qr code",
      "view qr code",
      "download apn",
      "apn setup",
      "esim install",
      "data not working",
      "after esim",
      "safari apn",
      "android apn",
      "where do i tap"
    ],
    "symptoms": [
      "install esim",
      "qr code",
      "view qr code",
      "download apn",
      "apn setup",
      "esim install",
      "data not working",
      "after esim",
      "safari apn",
      "android apn",
      "where do i tap"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X8, X9, X1, X3"
  },
  {
    "id": "switch-networks-teleport-transfer-to-new-device",
    "title": "Switch Networks / Teleport & Transfer to New Device",
    "category": "network-signal",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "network-signal",
      "batch10"
    ],
    "keywords": [
      "switch",
      "networks",
      "teleport",
      "transfer",
      "new",
      "device",
      "network-signal"
    ],
    "customerPhrases": [
      "switch networks",
      "teleport",
      "change network",
      "transfer line to new phone",
      "new device",
      "move esim",
      "device transfer",
      "internal port",
      "network switch stuck",
      "teleport pending"
    ],
    "preview": {
      "problem": "Network switch / internal transfer / eSIM device transfer / profile collision / account verification /",
      "firstQuestion": "Are you changing networks for better coverage, or moving the same line to a new",
      "firstAction": "",
      "escalateIf": "Teleport is stuck/pending beyond normal flow."
    },
    "quickAnswer": "Network switch / internal transfer / eSIM device transfer / profile collision / account verification / \nTeleport stuck / device compatibility issue",
    "useWhen": "Use when customer reports: switch networks, Teleport, change network, transfer line to new phone, new device, move eSIM,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are you changing networks for better coverage, or moving the same line to a new",
      "phone?",
      "Are you using eSIM or physical SIM?",
      "Which network are you switching from and to, if this is Teleport?"
    ],
    "quickChecks": [
      "Confirm goal: Teleport vs device transfer.",
      "Verify account/security eligibility if credentials or transfer action are needed. INTERNAL",
      "VERIFICATION REQUIRED",
      "Verify device compatibility for destination network. INTERNAL VERIFICATION",
      "REQUIRED",
      "Check Teleport/network-switch limits or status. INTERNAL VERIFICATION REQUIRED",
      "If eSIM transfer, verify EID/IMEI for new device. INTERNAL VERIFICATION REQUIRED",
      "Step-by-step flow — Teleport / switch networks:",
      "Confirm current network and desired destination network.",
      "Check device compatibility for destination network. INTERNAL VERIFICATION",
      "REQUIRED",
      "Check current Teleport eligibility/status/limits. INTERNAL VERIFICATION REQUIRED",
      "Complete any required account/security verification. INTERNAL VERIFICATION",
      "REQUIRED",
      "Guide customer through current dashboard/app Teleport or network-switch flow if",
      "self-service is available.",
      "If credentials are required, provide only through approved verified process. INTERNAL",
      "VERIFICATION REQUIRED",
      "After switch completes, install new eSIM or insert correct pSIM if required.",
      "Delete/disable old inactive eSIM only after new service is confirmed.",
      "Apply destination-network APN if data/MMS fails.",
      "Escalate if switch is stuck or destination service fails after correct setup.",
      "Step-by-step flow — transfer to new device:",
      "Confirm old and new device models.",
      "Confirm new device is unlocked and compatible.",
      "Confirm eSIM/pSIM type.",
      "If pSIM, move SIM if compatible and supported.",
      "If eSIM, use app/dashboard Transfer line to eSIM or current equivalent if available.",
      "Verify EID/IMEI for new device. INTERNAL VERIFICATION REQUIRED",
      "Install new eSIM over Wi-Fi.",
      "Test calls/SMS/data.",
      "Remove old eSIM only after new one works."
    ],
    "quickSteps": [
      "Confirm goal: Teleport vs device transfer.",
      "Verify account/security eligibility if credentials or transfer action are needed. INTERNAL",
      "VERIFICATION REQUIRED",
      "Verify device compatibility for destination network. INTERNAL VERIFICATION",
      "REQUIRED",
      "Check Teleport/network-switch limits or status. INTERNAL VERIFICATION REQUIRED",
      "If eSIM transfer, verify EID/IMEI for new device. INTERNAL VERIFICATION REQUIRED",
      "Step-by-step flow — Teleport / switch networks:",
      "Confirm current network and desired destination network.",
      "Check device compatibility for destination network. INTERNAL VERIFICATION",
      "REQUIRED",
      "Check current Teleport eligibility/status/limits. INTERNAL VERIFICATION REQUIRED",
      "Complete any required account/security verification. INTERNAL VERIFICATION",
      "REQUIRED",
      "Guide customer through current dashboard/app Teleport or network-switch flow if",
      "self-service is available.",
      "If credentials are required, provide only through approved verified process. INTERNAL",
      "VERIFICATION REQUIRED",
      "After switch completes, install new eSIM or insert correct pSIM if required.",
      "Delete/disable old inactive eSIM only after new service is confirmed.",
      "Apply destination-network APN if data/MMS fails.",
      "Escalate if switch is stuck or destination service fails after correct setup.",
      "Step-by-step flow — transfer to new device:",
      "Confirm old and new device models.",
      "Confirm new device is unlocked and compatible.",
      "Confirm eSIM/pSIM type.",
      "If pSIM, move SIM if compatible and supported.",
      "If eSIM, use app/dashboard Transfer line to eSIM or current equivalent if available.",
      "Verify EID/IMEI for new device. INTERNAL VERIFICATION REQUIRED",
      "Install new eSIM over Wi-Fi.",
      "Test calls/SMS/data.",
      "Remove old eSIM only after new one works."
    ],
    "steps": [],
    "deviceSpecificSteps": {
      "iphone": [
        "Confirm Carrier Lock = “No SIM restrictions.”",
        "Use Wi-Fi for eSIM install/transfer.",
        "Check Settings > Cellular after transfer.",
        "Disable old eSIM only after new line works.",
        "If dual SIM, select correct default line."
      ],
      "android": [
        "Confirm SIM Manager shows correct SIM/eSIM active.",
        "Use Wi-Fi for eSIM download.",
        "Set US Mobile as default for calls/SMS/data.",
        "Enter APN manually if needed after Teleport.",
        "Restart."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Let’s first separate the two options. If you’re changing coverage networks, that’s a network \nswitch/Teleport. If you’re just moving the same line to a new phone, that’s a device transfer. \nWhich one are you trying to do, and are you using eSIM or a physical SIM? I’ll guide you \nthrough the correct flow so we don’t accidentally start the wrong process."
      }
    ],
    "zendeskNote": "Issue: Teleport / network switch / device transfer \nCustomer goal: [Switch networks / transfer device] \nCurrent network: [Warp / Dark Star / Light Speed] \nDestination network/device: [X] \nSIM type: [eSIM / pSIM] \nDevice/OS: [Old device / New device] \nSteps tried: Eligibility checked, device compatibility checked, flow started, eSIM/APN handled \nInternal checks: Teleport eligibility/status, security verification, EID/IMEI, transfer limits \nINTERNAL VERIFICATION REQUIRED \nResult: [Completed / pending / stuck / failed]",
    "escalation": {
      "neededWhen": [
        "Teleport is stuck/pending beyond normal flow.",
        "Credentials/verification cannot be completed.",
        "eSIM transfer fails due to EID/IMEI/profile issue.",
        "Destination network activation completes but line has SOS/no data/MMS failure.",
        "Customer risks losing service during transfer."
      ],
      "evidenceNeeded": [
        "Teleport eligibility, current flow, transfer PIN/credentials,",
        "2FA/security, EID/IMEI, switch status, stuck transfer."
      ],
      "summaryTemplate": "Teleport/device transfer issue. Goal: [network switch/device transfer]. From: [X]. To: [X]. \nDevice/OS: [X]. SIM type: [eSIM/pSIM]. Step failed: [X]. Error: [exact]. Eligibility/security verified: \n[Yes/No]. EID/IMEI checked: [Yes/No]. Requesting transfer/Teleport provisioning review. \nINTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Teleport is stuck/pending beyond normal flow.",
      "Credentials/verification cannot be completed.",
      "eSIM transfer fails due to EID/IMEI/profile issue.",
      "Destination network activation completes but line has SOS/no data/MMS failure.",
      "Customer risks losing service during transfer."
    ],
    "escalationFormat": [
      "Teleport/device transfer issue. Goal: [network switch/device transfer]. From: [X]. To: [X]. ",
      "Device/OS: [X]. SIM type: [eSIM/pSIM]. Step failed: [X]. Error: [exact]. Eligibility/security verified: ",
      "[Yes/No]. EID/IMEI checked: [Yes/No]. Requesting transfer/Teleport provisioning review. ",
      "INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "teleport-recovery",
      "esim-install-qr-code-failures",
      "apndata",
      "carrier-lock-sim-not-supported",
      "port-out-security"
    ],
    "sourceAliases": [
      "X8",
      "P7",
      "X5",
      "X3"
    ],
    "confidence": "Medium-High because current Teleport/self-service flow and limits may change",
    "internalVerificationRequired": [
      "Teleport eligibility, current flow, transfer PIN/credentials,",
      "2FA/security, EID/IMEI, switch status, stuck transfer."
    ],
    "batch": "Batch 10",
    "aliases": [
      "switch networks",
      "teleport",
      "change network",
      "transfer line to new phone",
      "new device",
      "move esim",
      "device transfer",
      "internal port",
      "network switch stuck",
      "teleport pending"
    ],
    "symptoms": [
      "switch networks",
      "teleport",
      "change network",
      "transfer line to new phone",
      "new device",
      "move esim",
      "device transfer",
      "internal port",
      "network switch stuck",
      "teleport pending"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X8, P7, X5, X3"
  },
  {
    "id": "plan-billing-management-top-up-plan-change-snooze-usage-payment",
    "title": "Plan & Billing Management — Top-Up, Plan Change, Snooze, Usage, Payment",
    "category": "plans-billing",
    "secondaryCategories": [],
    "priority": "normal",
    "tags": [
      "plans-billing",
      "batch10"
    ],
    "keywords": [
      "plan",
      "billing",
      "management",
      "top",
      "change",
      "snooze",
      "usage",
      "payment",
      "plans-billing"
    ],
    "customerPhrases": [
      "update payment method",
      "add top-up",
      "change plan",
      "pause line",
      "snooze line",
      "view usage",
      "check",
      "balance",
      "pay bill",
      "autopay",
      "where do i click",
      "usage circles",
      "payment card"
    ],
    "preview": {
      "problem": "Dashboard navigation / billing self-service / top-up purchase / plan change timing / payment",
      "firstQuestion": "Are you trying to add data, change plan, update payment, pause service, or view usage?",
      "firstAction": "",
      "escalateIf": "Top-up purchased but not applied."
    },
    "quickAnswer": "Dashboard navigation / billing self-service / top-up purchase / plan change timing / payment \nupdate / usage review / pause or snooze request",
    "useWhen": "Use when customer reports: update payment method, add top-up, change plan, pause line, snooze line, view usage, check",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are you trying to add data, change plan, update payment, pause service, or view usage?",
      "Do you want the change today or next cycle?",
      "Are you on a monthly or annual plan?"
    ],
    "quickChecks": [
      "Verify current plan and renewal date. INTERNAL VERIFICATION REQUIRED",
      "Verify top-up eligibility/usage if needed. INTERNAL VERIFICATION REQUIRED",
      "Verify AutoPay/payment status if payment issue exists. INTERNAL VERIFICATION",
      "REQUIRED",
      "Verify pause/snooze availability before quoting. INTERNAL VERIFICATION REQUIRED",
      "Check if dashboard action fails across app/web. INTERNAL VERIFICATION",
      "REQUIRED",
      "Step-by-step self-service flows:",
      "View usage:",
      "Log in to dashboard/app.",
      "Open line card.",
      "Review usage circles/usage section.",
      "If usage seems wrong, escalate for usage ledger review. INTERNAL VERIFICATION",
      "REQUIRED",
      "Add top-up:",
      "Open line or pool.",
      "Select Add more, Top up, or current equivalent.",
      "Choose amount.",
      "Confirm payment.",
      "If purchased but not applied, escalate Billing/provisioning. INTERNAL VERIFICATION",
      "REQUIRED",
      "Change plan:",
      "Open line.",
      "Choose plan management / change plan.",
      "Select immediate vs next-cycle option if available.",
      "Explain impact before immediate change.",
      "Confirm only after customer agrees.",
      "If plan change fails, escalate. INTERNAL VERIFICATION REQUIRED",
      "Update payment method:",
      "Go to Settings / Billing / Payment Method.",
      "Add or update card.",
      "If bill is due, use Pay My Bill or current payment action.",
      "If payment fails, use Payment Failures card.",
      "Pause/Snooze line:",
      "Open line/plan management.",
      "Look for pause/snooze/number hold option if available.",
      "Verify cost, eligibility, and service impact before confirming. INTERNAL VERIFICATION",
      "REQUIRED"
    ],
    "quickSteps": [
      "Verify current plan and renewal date. INTERNAL VERIFICATION REQUIRED",
      "Verify top-up eligibility/usage if needed. INTERNAL VERIFICATION REQUIRED",
      "Verify AutoPay/payment status if payment issue exists. INTERNAL VERIFICATION",
      "REQUIRED",
      "Verify pause/snooze availability before quoting. INTERNAL VERIFICATION REQUIRED",
      "Check if dashboard action fails across app/web. INTERNAL VERIFICATION",
      "REQUIRED",
      "Step-by-step self-service flows:",
      "View usage:",
      "Log in to dashboard/app.",
      "Open line card.",
      "Review usage circles/usage section.",
      "If usage seems wrong, escalate for usage ledger review. INTERNAL VERIFICATION",
      "REQUIRED",
      "Add top-up:",
      "Open line or pool.",
      "Select Add more, Top up, or current equivalent.",
      "Choose amount.",
      "Confirm payment.",
      "If purchased but not applied, escalate Billing/provisioning. INTERNAL VERIFICATION",
      "REQUIRED",
      "Change plan:",
      "Open line.",
      "Choose plan management / change plan.",
      "Select immediate vs next-cycle option if available.",
      "Explain impact before immediate change.",
      "Confirm only after customer agrees.",
      "If plan change fails, escalate. INTERNAL VERIFICATION REQUIRED",
      "Update payment method:",
      "Go to Settings / Billing / Payment Method.",
      "Add or update card.",
      "If bill is due, use Pay My Bill or current payment action.",
      "If payment fails, use Payment Failures card.",
      "Pause/Snooze line:",
      "Open line/plan management.",
      "Look for pause/snooze/number hold option if available.",
      "Verify cost, eligibility, and service impact before confirming. INTERNAL VERIFICATION",
      "REQUIRED"
    ],
    "steps": [],
    "deviceSpecificSteps": {
      "iphone": [
        "N/A, app/dashboard driven."
      ],
      "android": [
        "N/A, app/dashboard driven."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "You can manage most billing actions from your dashboard. Tell me which action you’re trying to \ncomplete — add data, change plan, update payment, pause service, or view usage — and I’ll \nguide you to the right section. \nBefore any plan change, I’ll also confirm whether you want it today or at the next renewal so \nthere are no billing surprises."
      }
    ],
    "zendeskNote": "Issue: Billing self-service guidance \nRequested action: [Top-up / plan change / payment update / usage / pause-snooze] \nCurrent plan: [X] \nRenewal date: [X] \nCustomer timing preference: [Immediate / next cycle / unknown] \nSteps guided: [Dashboard path] \nInternal checks: Plan/usage/payment/top-up/pause eligibility INTERNAL VERIFICATION \nREQUIRED \nResult: [Completed / failed / pending / escalated]",
    "escalation": {
      "neededWhen": [
        "Top-up purchased but not applied.",
        "Payment method updates but service remains suspended.",
        "Plan change fails or causes disputed charge.",
        "Usage shown in dashboard conflicts with ledger.",
        "Pause/snooze unavailable despite expected eligibility."
      ],
      "evidenceNeeded": [
        "Plan, renewal date, top-up usage, payment status, pause/snooze",
        "eligibility, dashboard error, billing impact."
      ],
      "summaryTemplate": "Billing self-service issue. Action: [X]. Plan: [X]. Renewal date: [X]. Customer attempted path: [X]. \nError/result: [X]. Payment/top-up/usage logs checked: [Yes/No]. Requesting Billing/dashboard \nreview. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Top-up purchased but not applied.",
      "Payment method updates but service remains suspended.",
      "Plan change fails or causes disputed charge.",
      "Usage shown in dashboard conflicts with ledger.",
      "Pause/snooze unavailable despite expected eligibility."
    ],
    "escalationFormat": [
      "Billing self-service issue. Action: [X]. Plan: [X]. Renewal date: [X]. Customer attempted path: [X]. ",
      "Error/result: [X]. Payment/top-up/usage logs checked: [Yes/No]. Requesting Billing/dashboard ",
      "review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "plan-changes-annual-vs-monthly-issues",
      "autopay-payment-failures",
      "shared-data-pools-top-ups-rollover",
      "refund-policy-safe-language",
      "app-bug",
      "network-choice-coverage-band-troubleshooting"
    ],
    "sourceAliases": [
      "X8",
      "X7",
      "X9"
    ],
    "confidence": "Medium-High because dashboard paths and billing options can change",
    "internalVerificationRequired": [
      "Plan, renewal date, top-up usage, payment status, pause/snooze",
      "eligibility, dashboard error, billing impact."
    ],
    "batch": "Batch 10",
    "aliases": [
      "update payment method",
      "add top-up",
      "change plan",
      "pause line",
      "snooze line",
      "view usage",
      "check",
      "balance",
      "pay bill",
      "autopay",
      "where do i click",
      "usage circles",
      "payment card"
    ],
    "symptoms": [
      "update payment method",
      "add top-up",
      "change plan",
      "pause line",
      "snooze line",
      "view usage",
      "check",
      "balance",
      "pay bill",
      "autopay",
      "where do i click",
      "usage circles",
      "payment card"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X8, X7, X9"
  },
  {
    "id": "port-out-info-transfer-pin",
    "title": "Port-Out Info & Transfer PIN",
    "category": "port-in-out",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "port-in-out",
      "batch10"
    ],
    "keywords": [
      "port",
      "out",
      "info",
      "transfer",
      "pin",
      "port-in-out"
    ],
    "customerPhrases": [
      "port out",
      "transfer pin",
      "account number",
      "leave us mobile",
      "port-out info",
      "where is my transfer pin",
      "support required",
      "number transfer",
      "cancel and keep number"
    ],
    "preview": {
      "problem": "Port-out request / account number location / transfer PIN security / identity verification / fraud",
      "firstQuestion": "Are you moving your number to another carrier, or just trying to pause/keep it safe?",
      "firstAction": "",
      "escalateIf": "Customer fails verification but demands PIN."
    },
    "quickAnswer": "Port-out request / account number location / transfer PIN security / identity verification / fraud \nprevention / churn request",
    "useWhen": "Use when customer reports: port out, transfer PIN, account number, leave US Mobile, port-out info, where is my transfer PIN,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are you moving your number to another carrier, or just trying to pause/keep it safe?",
      "Are you the account holder or authorized user?",
      "Do you have access to your registered verification method?"
    ],
    "quickChecks": [
      "Verify identity through approved flow. INTERNAL VERIFICATION REQUIRED",
      "Confirm account/line is eligible for port-out. INTERNAL VERIFICATION REQUIRED",
      "Guide to account number location if self-service is available.",
      "Generate/provide transfer PIN only after verification. INTERNAL VERIFICATION",
      "REQUIRED",
      "Warn customer not to cancel before the port completes.",
      "Step-by-step handling:",
      "Acknowledge request without blocking.",
      "Ask whether a service issue can be fixed, but do not pressure.",
      "Verify identity/security. INTERNAL VERIFICATION REQUIRED",
      "Guide customer to account number if visible in dashboard/account settings.",
      "Generate/provide transfer PIN only through approved verified support process.",
      "INTERNAL VERIFICATION REQUIRED",
      "Tell customer to keep the line active until the new carrier completes the transfer.",
      "Explain cancellation/billing impact safely and only after verification. INTERNAL",
      "VERIFICATION REQUIRED",
      "If customer fails verification or shows fraud indicators, escalate Security. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "quickSteps": [
      "Verify identity through approved flow. INTERNAL VERIFICATION REQUIRED",
      "Confirm account/line is eligible for port-out. INTERNAL VERIFICATION REQUIRED",
      "Guide to account number location if self-service is available.",
      "Generate/provide transfer PIN only after verification. INTERNAL VERIFICATION",
      "REQUIRED",
      "Warn customer not to cancel before the port completes.",
      "Step-by-step handling:",
      "Acknowledge request without blocking.",
      "Ask whether a service issue can be fixed, but do not pressure.",
      "Verify identity/security. INTERNAL VERIFICATION REQUIRED",
      "Guide customer to account number if visible in dashboard/account settings.",
      "Generate/provide transfer PIN only through approved verified support process.",
      "INTERNAL VERIFICATION REQUIRED",
      "Tell customer to keep the line active until the new carrier completes the transfer.",
      "Explain cancellation/billing impact safely and only after verification. INTERNAL",
      "VERIFICATION REQUIRED",
      "If customer fails verification or shows fraud indicators, escalate Security. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "steps": [],
    "deviceSpecificSteps": {
      "iphone": [
        "N/A"
      ],
      "android": [
        "N/A"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "I can help with the port-out information. For your security, I’ll need to complete account \nverification before providing the transfer PIN. \nPlease do not cancel the US Mobile line manually. Keep it active until the new carrier confirms \nthe port is complete, so the number stays protected during the transfer."
      }
    ],
    "zendeskNote": "Issue: Port-out info / transfer PIN request \nRequester: [Account holder / authorized / unknown] \nVerification: [Completed / failed / pending] INTERNAL VERIFICATION REQUIRED \nAccount number path given: [Yes/No] \nTransfer PIN: [Provided / not provided / blocked] \nCustomer intent: [Leaving / moving carrier / parking number / unresolved issue] \n\nSecurity concerns: [None / failed verification / ATO risk] \nNext action: Customer to submit port with new carrier / Security review if needed",
    "escalation": {
      "neededWhen": [
        "Customer fails verification but demands PIN.",
        "Fraud/ATO indicators appear.",
        "Account ownership is disputed.",
        "Transfer PIN generation is blocked despite successful verification.",
        "Customer reports unauthorized port-out."
      ],
      "evidenceNeeded": [
        "Identity verification, account number path, transfer PIN generation,",
        "port-out eligibility, fraud flags, billing/cancellation impact."
      ],
      "summaryTemplate": "Port-out/security issue. Verification: [passed/failed/pending]. Customer role: [X]. Requested: \naccount number/transfer PIN. PIN provided: [Yes/No]. Risk indicators: [X]. Requesting manual \nsecurity/port-out review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Customer fails verification but demands PIN.",
      "Fraud/ATO indicators appear.",
      "Account ownership is disputed.",
      "Transfer PIN generation is blocked despite successful verification.",
      "Customer reports unauthorized port-out."
    ],
    "escalationFormat": [
      "Port-out/security issue. Verification: [passed/failed/pending]. Customer role: [X]. Requested: ",
      "account number/transfer PIN. PIN provided: [Yes/No]. Risk indicators: [X]. Requesting manual ",
      "security/port-out review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "port-out-process-transfer-pin-security",
      "sim-swap-fraud-concerns",
      "appdashboard-bug",
      "port-rejections-account-pin-zip-mismatch",
      "port-out-process-transfer-pin-security"
    ],
    "sourceAliases": [
      "X8",
      "X5",
      "X7"
    ],
    "confidence": "High for security flow; exact dashboard path/tool requires verification",
    "internalVerificationRequired": [
      "Identity verification, account number path, transfer PIN generation,",
      "port-out eligibility, fraud flags, billing/cancellation impact."
    ],
    "batch": "Batch 10",
    "aliases": [
      "port out",
      "transfer pin",
      "account number",
      "leave us mobile",
      "port-out info",
      "where is my transfer pin",
      "support required",
      "number transfer",
      "cancel and keep number"
    ],
    "symptoms": [
      "port out",
      "transfer pin",
      "account number",
      "leave us mobile",
      "port-out info",
      "where is my transfer pin",
      "support required",
      "number transfer",
      "cancel and keep number"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X8, X5, X7"
  },
  {
    "id": "manage-watch-enable-roaming",
    "title": "Manage Watch & Enable Roaming",
    "category": "devices-watches",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "devices-watches",
      "batch10"
    ],
    "keywords": [
      "manage",
      "watch",
      "enable",
      "roaming",
      "devices-watches"
    ],
    "customerPhrases": [
      "manage watch",
      "add apple watch",
      "add pixel watch",
      "enable roaming",
      "dark star roaming",
      "roaming destination",
      "watch add-on",
      "travel esim",
      "where do i click",
      "support-required actions"
    ],
    "preview": {
      "problem": "Watch add-on provisioning / watch network eligibility / roaming setup / destination setup / Travel",
      "firstQuestion": "Are you trying to set up a watch, enable Native Roaming, or buy a Travel eSIM?",
      "firstAction": "",
      "escalateIf": "Watch support/eligibility verified but activation fails."
    },
    "quickAnswer": "Watch add-on provisioning / watch network eligibility / roaming setup / destination setup / Travel \neSIM purchase / dashboard navigation",
    "useWhen": "Use when customer reports: manage watch, add Apple Watch, add Pixel Watch, enable roaming, Dark Star roaming,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are you trying to set up a watch, enable Native Roaming, or buy a Travel eSIM?",
      "Which network is the line on?",
      "For roaming, what country are you traveling to?"
    ],
    "quickChecks": [
      "For watch: verify network, watch model, host device, and plan/add-on eligibility.",
      "INTERNAL VERIFICATION REQUIRED",
      "For roaming: verify destination, plan/add-on, and domestic usage if required. INTERNAL",
      "VERIFICATION REQUIRED",
      "Confirm app/dashboard is updated and accessible.",
      "Confirm device settings: Data Roaming/Wi-Fi Calling/watch pairing.",
      "Escalate if add-on/provisioning succeeds but service does not work. INTERNAL",
      "VERIFICATION REQUIRED",
      "Step-by-step flow — watch:",
      "Confirm watch type: Apple Watch or Pixel Watch.",
      "Confirm host line network and eligibility. INTERNAL VERIFICATION REQUIRED",
      "Confirm companion vs standalone setup if applicable.",
      "Open dashboard/app line settings/add-ons.",
      "Select watch add-on/setup option if available.",
      "Continue setup in Watch app or watch companion app as required.",
      "Keep phone and watch nearby, Bluetooth ON, and stable connection.",
      "If setup fails, collect exact error and watch EID. INTERNAL VERIFICATION REQUIRED",
      "Step-by-step flow — Native Roaming:",
      "Confirm network and destination.",
      "Check plan/add-on/destination support. INTERNAL VERIFICATION REQUIRED",
      "Complete any app/dashboard roaming destination setup if required.",
      "On phone, turn Data Roaming ON.",
      "Set Network Selection to Automatic while abroad.",
      "Toggle Airplane Mode after landing.",
      "Escalate if eligible/provisioned but still no service. INTERNAL VERIFICATION",
      "REQUIRED",
      "Step-by-step flow — Travel eSIM:",
      "Open international/travel eSIM section in dashboard/app if available.",
      "Select destination country/region and plan.",
      "Confirm device is unlocked.",
      "Install Travel eSIM via QR/app flow.",
      "Set Travel eSIM as Cellular Data line.",
      "Turn Data Roaming ON for Travel eSIM.",
      "Explain Travel eSIM is data-only."
    ],
    "quickSteps": [
      "For watch: verify network, watch model, host device, and plan/add-on eligibility.",
      "INTERNAL VERIFICATION REQUIRED",
      "For roaming: verify destination, plan/add-on, and domestic usage if required. INTERNAL",
      "VERIFICATION REQUIRED",
      "Confirm app/dashboard is updated and accessible.",
      "Confirm device settings: Data Roaming/Wi-Fi Calling/watch pairing.",
      "Escalate if add-on/provisioning succeeds but service does not work. INTERNAL",
      "VERIFICATION REQUIRED",
      "Step-by-step flow — watch:",
      "Confirm watch type: Apple Watch or Pixel Watch.",
      "Confirm host line network and eligibility. INTERNAL VERIFICATION REQUIRED",
      "Confirm companion vs standalone setup if applicable.",
      "Open dashboard/app line settings/add-ons.",
      "Select watch add-on/setup option if available.",
      "Continue setup in Watch app or watch companion app as required.",
      "Keep phone and watch nearby, Bluetooth ON, and stable connection.",
      "If setup fails, collect exact error and watch EID. INTERNAL VERIFICATION REQUIRED",
      "Step-by-step flow — Native Roaming:",
      "Confirm network and destination.",
      "Check plan/add-on/destination support. INTERNAL VERIFICATION REQUIRED",
      "Complete any app/dashboard roaming destination setup if required.",
      "On phone, turn Data Roaming ON.",
      "Set Network Selection to Automatic while abroad.",
      "Toggle Airplane Mode after landing.",
      "Escalate if eligible/provisioned but still no service. INTERNAL VERIFICATION",
      "REQUIRED",
      "Step-by-step flow — Travel eSIM:",
      "Open international/travel eSIM section in dashboard/app if available.",
      "Select destination country/region and plan.",
      "Confirm device is unlocked.",
      "Install Travel eSIM via QR/app flow.",
      "Set Travel eSIM as Cellular Data line.",
      "Turn Data Roaming ON for Travel eSIM.",
      "Explain Travel eSIM is data-only."
    ],
    "steps": [],
    "deviceSpecificSteps": {
      "iphone": [
        "Watch: use Apple Watch app after dashboard/add-on eligibility is confirmed.",
        "Roaming: Settings > Cellular > Data Roaming ON.",
        "Travel eSIM: Settings > Cellular > Cellular Data > select Travel eSIM.",
        "Wi-Fi Calling should be set up before travel."
      ],
      "android": [
        "Pixel Watch: use Pixel Watch app and keep phone/watch connected.",
        "Roaming: Settings > Network & Internet / Connections > SIMs > Roaming ON.",
        "Travel eSIM: SIM Manager > Mobile Data/Data Service > select Travel eSIM."
      ]
    },
    "copyTemplates": [
      {
        "label": "Roaming setup",
        "text": "For Native Roaming, we need to confirm your line is eligible for the destination, then turn Data \nRoaming ON in your phone settings. If your network requires app destination setup, I’ll guide \nyou through that before you travel."
      }
    ],
    "zendeskNote": "Issue: Watch / Roaming / Travel eSIM self-service guidance \nRequested flow: [Watch / Native Roaming / Travel eSIM] \nNetwork: [Warp / Dark Star / Light Speed] \nDevice/OS: [Phone + watch if applicable] \nDestination: [Country if roaming] \nSteps guided: [Add-on / destination setup / Data Roaming / Travel eSIM install] \nInternal checks: Watch eligibility/EID, plan/add-on, destination support, domestic usage, Travel \n\neSIM validity INTERNAL VERIFICATION REQUIRED \nResult: [Completed / pending / failed / escalated]",
    "escalation": {
      "neededWhen": [
        "Watch support/eligibility verified but activation fails.",
        "Watch app says carrier not supported despite expected support.",
        "Roaming destination/add-on is active but line cannot register abroad.",
        "Travel eSIM is valid/selected but has zero data.",
        "App/dashboard blocks required add-on or destination setup."
      ],
      "evidenceNeeded": [
        "Watch support, EID pairing, plan/add-on, destination support,",
        "domestic usage, roaming provisioning, Travel eSIM validity.",
        "Batch 10 Agent Import Notes",
        "Create these as separate cards",
        "App & Dashboard Bug Troubleshooting",
        "Activate a New Line & Transfer Number In",
        "Install eSIM & Download APN",
        "Switch Networks / Teleport & Transfer to New Device",
        "Plan & Billing Management — Top-Up, Plan Change, Snooze, Usage, Payment",
        "Port-Out Info & Transfer PIN",
        "Manage Watch & Enable Roaming",
        "Suggested category mapping",
        "App / Dashboard",
        "App & Dashboard Bug Troubleshooting",
        "Activate a New Line & Transfer Number In",
        "Install eSIM & Download APN",
        "Switch Networks / Teleport & Transfer to New Device",
        "Plan & Billing Management",
        "Port-Out Info & Transfer PIN",
        "Manage Watch & Enable Roaming",
        "Activation",
        "Activate a New Line & Transfer Number In",
        "eSIM / SIM",
        "Install eSIM & Download APN",
        "Switch Networks / Teleport & Transfer to New Device",
        "Port-In / Port-Out",
        "Activate a New Line & Transfer Number In",
        "Port-Out Info & Transfer PIN",
        "Switch Networks / Teleport & Transfer to New Device",
        "Plans / Billing",
        "Plan & Billing Management",
        "International / Roaming",
        "Manage Watch & Enable Roaming",
        "Devices / Watches",
        "Manage Watch & Enable Roaming",
        "Switch Networks / Teleport & Transfer to New Device",
        "Suggested pinned/common cards from Batch 10",
        "App & Dashboard Bug Troubleshooting",
        "Activate a New Line & Transfer Number In",
        "Install eSIM & Download APN",
        "Switch Networks / Teleport & Transfer to New Device",
        "Plan & Billing Management",
        "Port-Out Info & Transfer PIN",
        "UI rule",
        "Show short preview first:",
        "Problem",
        "First question",
        "First action",
        "Escalate if",
        "Then full card opens with:",
        "Where to click / tap",
        "Ask customer first",
        "Quick checks",
        "Step-by-step troubleshooting",
        "iPhone steps",
        "Android steps",
        "Copy-ready reply",
        "Zendesk note",
        "Escalation summary",
        "Related playbooks",
        "Source aliases",
        "Confidence",
        "Needs internal verification",
        "Merge notes for later",
        "Batch 3 already has Activation/eSIM failure cards. Batch 10 should provide the",
        "self-service click path, not duplicate the deep troubleshooting.",
        "Batch 5 already has Port-Out Transfer PIN Security. Batch 10 should become the",
        "dashboard/self-service version of that card.",
        "Batch 8 already has roaming setup. Batch 10 should provide the app/dashboard",
        "click-path layer.",
        "Batch 9 already has plan/billing policy cards. Batch 10 should provide the customer",
        "navigation layer.",
        "Batch 7 already has watch compatibility. Batch 10 should provide the watch setup",
        "click-path layer.",
        "Safety rule for agent",
        "For app/dashboard self-service:",
        "Always separate customer self-service steps from support-required actions.",
        "Never expose transfer PINs, account credentials, IMEI/EID/ICCID, billing details, or",
        "security actions without verification.",
        "Never promise current dashboard paths are exact forever; use “current equivalent”",
        "where UI may change.",
        "Never promise refunds, credits, plan-change impact, watch support, roaming eligibility, or",
        "Teleport limits without verification.",
        "Mark account status, activation status, transfer PINs, eSIM reissue, payment/billing",
        "actions, Teleport status, watch EID, roaming eligibility, and platform outages as",
        "INTERNAL VERIFICATION REQUIRED."
      ],
      "summaryTemplate": "Watch/roaming setup issue. Flow: [watch/roaming/travel eSIM]. Network: [X]. Device/watch: [X]. \nDestination if roaming: [X]. Eligibility verified: [Yes/No]. Step failed: [X]. Error: [exact]. \nRequesting provisioning/app/roaming/watch EID review. INTERNAL VERIFICATION \nREQUIRED"
    },
    "escalationRequiredWhen": [
      "Watch support/eligibility verified but activation fails.",
      "Watch app says carrier not supported despite expected support.",
      "Roaming destination/add-on is active but line cannot register abroad.",
      "Travel eSIM is valid/selected but has zero data.",
      "App/dashboard blocks required add-on or destination setup."
    ],
    "escalationFormat": [
      "Watch/roaming setup issue. Flow: [watch/roaming/travel eSIM]. Network: [X]. Device/watch: [X]. ",
      "Destination if roaming: [X]. Eligibility verified: [Yes/No]. Step failed: [X]. Error: [exact]. ",
      "Requesting provisioning/app/roaming/watch EID review. INTERNAL VERIFICATION ",
      "REQUIRED"
    ],
    "relatedPlaybooks": [
      "wearables-setup",
      "abroad-no-service-native-roaming-setup",
      "travel-esim-limitations-data-setup",
      "wi-fi-calling-e911-setup",
      "app-bug",
      "network-choice-coverage-band-troubleshooting"
    ],
    "sourceAliases": [
      "X8",
      "X6",
      "X3",
      "P3"
    ],
    "confidence": "Medium-High because watch/roaming dashboard flows and eligibility can change",
    "internalVerificationRequired": [
      "Watch support, EID pairing, plan/add-on, destination support,",
      "domestic usage, roaming provisioning, Travel eSIM validity.",
      "Batch 10 Agent Import Notes",
      "Create these as separate cards",
      "App & Dashboard Bug Troubleshooting",
      "Activate a New Line & Transfer Number In",
      "Install eSIM & Download APN",
      "Switch Networks / Teleport & Transfer to New Device",
      "Plan & Billing Management — Top-Up, Plan Change, Snooze, Usage, Payment",
      "Port-Out Info & Transfer PIN",
      "Manage Watch & Enable Roaming",
      "Suggested category mapping",
      "App / Dashboard",
      "App & Dashboard Bug Troubleshooting",
      "Activate a New Line & Transfer Number In",
      "Install eSIM & Download APN",
      "Switch Networks / Teleport & Transfer to New Device",
      "Plan & Billing Management",
      "Port-Out Info & Transfer PIN",
      "Manage Watch & Enable Roaming",
      "Activation",
      "Activate a New Line & Transfer Number In",
      "eSIM / SIM",
      "Install eSIM & Download APN",
      "Switch Networks / Teleport & Transfer to New Device",
      "Port-In / Port-Out",
      "Activate a New Line & Transfer Number In",
      "Port-Out Info & Transfer PIN",
      "Switch Networks / Teleport & Transfer to New Device",
      "Plans / Billing",
      "Plan & Billing Management",
      "International / Roaming",
      "Manage Watch & Enable Roaming",
      "Devices / Watches",
      "Manage Watch & Enable Roaming",
      "Switch Networks / Teleport & Transfer to New Device",
      "Suggested pinned/common cards from Batch 10",
      "App & Dashboard Bug Troubleshooting",
      "Activate a New Line & Transfer Number In",
      "Install eSIM & Download APN",
      "Switch Networks / Teleport & Transfer to New Device",
      "Plan & Billing Management",
      "Port-Out Info & Transfer PIN",
      "UI rule",
      "Show short preview first:",
      "Problem",
      "First question",
      "First action",
      "Escalate if",
      "Then full card opens with:",
      "Where to click / tap",
      "Ask customer first",
      "Quick checks",
      "Step-by-step troubleshooting",
      "iPhone steps",
      "Android steps",
      "Copy-ready reply",
      "Zendesk note",
      "Escalation summary",
      "Related playbooks",
      "Source aliases",
      "Confidence",
      "Needs internal verification",
      "Merge notes for later",
      "Batch 3 already has Activation/eSIM failure cards. Batch 10 should provide the",
      "self-service click path, not duplicate the deep troubleshooting.",
      "Batch 5 already has Port-Out Transfer PIN Security. Batch 10 should become the",
      "dashboard/self-service version of that card.",
      "Batch 8 already has roaming setup. Batch 10 should provide the app/dashboard",
      "click-path layer.",
      "Batch 9 already has plan/billing policy cards. Batch 10 should provide the customer",
      "navigation layer.",
      "Batch 7 already has watch compatibility. Batch 10 should provide the watch setup",
      "click-path layer.",
      "Safety rule for agent",
      "For app/dashboard self-service:",
      "Always separate customer self-service steps from support-required actions.",
      "Never expose transfer PINs, account credentials, IMEI/EID/ICCID, billing details, or",
      "security actions without verification.",
      "Never promise current dashboard paths are exact forever; use “current equivalent”",
      "where UI may change.",
      "Never promise refunds, credits, plan-change impact, watch support, roaming eligibility, or",
      "Teleport limits without verification.",
      "Mark account status, activation status, transfer PINs, eSIM reissue, payment/billing",
      "actions, Teleport status, watch EID, roaming eligibility, and platform outages as",
      "INTERNAL VERIFICATION REQUIRED."
    ],
    "batch": "Batch 10",
    "aliases": [
      "manage watch",
      "add apple watch",
      "add pixel watch",
      "enable roaming",
      "dark star roaming",
      "roaming destination",
      "watch add-on",
      "travel esim",
      "where do i click",
      "support-required actions"
    ],
    "symptoms": [
      "manage watch",
      "add apple watch",
      "add pixel watch",
      "enable roaming",
      "dark star roaming",
      "roaming destination",
      "watch add-on",
      "travel esim",
      "where do i click",
      "support-required actions"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X8, X6, X3, P3"
  },
  {
    "id": "esim-hardware-carrier-lock-errors",
    "title": "eSIM Hardware & Carrier Lock Errors",
    "category": "devices-watches",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "devices-watches",
      "batch11"
    ],
    "keywords": [
      "esim",
      "hardware",
      "carrier",
      "lock",
      "errors",
      "devices-watches"
    ],
    "customerPhrases": [
      "no usable data found",
      "cellular plan cannot be added",
      "cellular plans from this carrier cannot be",
      "added",
      "sim not supported",
      "sim not valid",
      "carrier locked",
      "device compatibility",
      "esim unsupported"
    ],
    "preview": {
      "problem": "Carrier lock / eSIM unsupported device / device compatibility issue / IMEI-EID mismatch /",
      "firstQuestion": "What exact error message do you see?",
      "firstAction": "Ask for exact error text and device model.",
      "escalateIf": "Device shows “No SIM restrictions” but still shows carrier-lock/SIM-not-supported error."
    },
    "quickAnswer": "Carrier lock / eSIM unsupported device / device compatibility issue / IMEI-EID mismatch / \nwhitelist or provisioning issue",
    "useWhen": "Use when customer reports: No usable data found, Cellular plan cannot be added, Cellular plans from this carrier cannot be",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "What exact error message do you see?",
      "Does your phone show “No SIM restrictions” under Carrier Lock?",
      "What exact phone model are you using?"
    ],
    "quickChecks": [
      "iPhone: Settings > General > About > Carrier Lock.",
      "Confirm the device supports eSIM if using eSIM.",
      "Confirm device is not carrier-locked.",
      "Check IMEI/EID compatibility if tools are available. INTERNAL VERIFICATION",
      "REQUIRED",
      "If eSIM unsupported, pivot to physical SIM if the device supports it."
    ],
    "quickSteps": [
      "iPhone: Settings > General > About > Carrier Lock.",
      "Confirm the device supports eSIM if using eSIM.",
      "Confirm device is not carrier-locked.",
      "Check IMEI/EID compatibility if tools are available. INTERNAL VERIFICATION",
      "REQUIRED",
      "If eSIM unsupported, pivot to physical SIM if the device supports it."
    ],
    "steps": [
      "Ask for exact error text and device model.",
      "If iPhone, check Carrier Lock. It should say “No SIM restrictions.”",
      "If locked, advise customer to contact the original carrier or seller to unlock the device.",
      "If device does not support eSIM, explain that eSIM cannot be installed and check pSIM",
      "option.",
      "If unlocked and eSIM-compatible, verify IMEI/EID and profile state. INTERNAL",
      "VERIFICATION REQUIRED",
      "If unlocked but still rejected, escalate for compatibility/provisioning review. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > General > About > Carrier Lock.",
        "Required result: “No SIM restrictions.”",
        "Confirm iPhone model supports eSIM.",
        "If using U.S. iPhone 14 or newer, use eSIM because physical SIM tray may not exist."
      ],
      "android": [
        "Check Settings > About phone for model and IMEI/EID.",
        "Check SIM/network lock status if visible.",
        "Manual network selection showing multiple carriers can help indicate unlocked behavior,",
        "but it is not a final compatibility guarantee.",
        "Confirm eSIM support before using QR flow."
      ],
      "general": [
        "Ask for exact error text and device model.",
        "If iPhone, check Carrier Lock. It should say “No SIM restrictions.”",
        "If locked, advise customer to contact the original carrier or seller to unlock the device.",
        "If device does not support eSIM, explain that eSIM cannot be installed and check pSIM",
        "option.",
        "If unlocked and eSIM-compatible, verify IMEI/EID and profile state. INTERNAL",
        "VERIFICATION REQUIRED",
        "If unlocked but still rejected, escalate for compatibility/provisioning review. INTERNAL",
        "VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "That error usually means the phone is either still locked to the carrier it came from, or the device \ndoes not support the eSIM/profile being installed. Please check this first: on iPhone, go to \nSettings > General > About > Carrier Lock. It needs to say “No SIM restrictions.” \nIf it shows a lock, the original carrier has to unlock the phone before US Mobile can activate it."
      }
    ],
    "zendeskNote": "Error exact: [No usable data found / Cellular plan cannot be added / SIM not supported / SIM \nnot valid] \nDevice/OS: [Model + OS] \nSIM/eSIM: [eSIM / pSIM] \nCarrier Lock: [No SIM restrictions / locked / unknown] \nTrigger: [Activation / eSIM install / device transfer / Teleport] \nSteps tried: Carrier Lock checked, eSIM support checked, Wi-Fi checked, IMEI/EID reviewed \nInternal checks: IMEI/EID compatibility, whitelist/provisioning state INTERNAL VERIFICATION \nREQUIRED \nResult: [Locked / incompatible / needs pSIM / escalated]",
    "escalation": {
      "neededWhen": [
        "Device shows “No SIM restrictions” but still shows carrier-lock/SIM-not-supported error.",
        "IMEI/EID appears compatible but eSIM install fails repeatedly.",
        "Compatibility checker result conflicts with device behavior.",
        "Customer’s active line is blocked because the device cannot register despite passing",
        "checks."
      ],
      "evidenceNeeded": [
        "IMEI/EID compatibility, whitelist state, eSIM profile state,",
        "provisioning review."
      ],
      "summaryTemplate": "Device/eSIM compatibility error. Exact error: [X]. Device/OS: [X]. Carrier Lock: [X]. eSIM \nsupport: [Yes/No]. IMEI/EID checked: [Yes/No]. Customer attempted install/activation and error \npersists. Requesting IMEI/EID whitelist or compatibility/provisioning review. INTERNAL \nVERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Device shows “No SIM restrictions” but still shows carrier-lock/SIM-not-supported error.",
      "IMEI/EID appears compatible but eSIM install fails repeatedly.",
      "Compatibility checker result conflicts with device behavior.",
      "Customer’s active line is blocked because the device cannot register despite passing",
      "checks."
    ],
    "escalationFormat": [
      "Device/eSIM compatibility error. Exact error: [X]. Device/OS: [X]. Carrier Lock: [X]. eSIM ",
      "support: [Yes/No]. IMEI/EID checked: [Yes/No]. Customer attempted install/activation and error ",
      "persists. Requesting IMEI/EID whitelist or compatibility/provisioning review. INTERNAL ",
      "VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "carrier-lock-sim-not-supported",
      "esim-install-qr-code-failures",
      "iphone-compatibility-esim-dual-sim-triage",
      "bandsvolteidentifiers"
    ],
    "sourceAliases": [
      "X9",
      "X3",
      "P3"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "IMEI/EID compatibility, whitelist state, eSIM profile state,",
      "provisioning review."
    ],
    "batch": "Batch 11",
    "aliases": [
      "no usable data found",
      "cellular plan cannot be added",
      "cellular plans from this carrier cannot be",
      "added",
      "sim not supported",
      "sim not valid",
      "carrier locked",
      "device compatibility",
      "esim unsupported"
    ],
    "symptoms": [
      "no usable data found",
      "cellular plan cannot be added",
      "cellular plans from this carrier cannot be",
      "added",
      "sim not supported",
      "sim not valid",
      "carrier locked",
      "device compatibility",
      "esim unsupported"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X9, X3, P3"
  },
  {
    "id": "esim-download-activation-errors",
    "title": "eSIM Download & Activation Errors",
    "category": "esim-sim",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "esim-sim",
      "batch11"
    ],
    "keywords": [
      "esim",
      "download",
      "activation",
      "errors",
      "esim-sim"
    ],
    "customerPhrases": [
      "qr code no longer valid",
      "profile already downloaded",
      "unable to complete cellular plan change",
      "activation pending",
      "sm-dp+ error",
      "esim stuck",
      "esim already used",
      "qr expired"
    ],
    "preview": {
      "problem": "Consumed QR/profile token / Wi-Fi interruption / pending profile / EID mismatch / old profile",
      "firstQuestion": "What exact error appears on the screen?",
      "firstAction": "Ask for exact error text and screenshot if possible.",
      "escalateIf": "EID/IMEI matches but SM-DP+ or profile download error persists."
    },
    "quickAnswer": "Consumed QR/profile token / Wi-Fi interruption / pending profile / EID mismatch / old profile \nconflict / backend provisioning delay / eSIM reissue needed",
    "useWhen": "Use when customer reports: QR code no longer valid, Profile already downloaded, Unable to complete cellular plan change,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "What exact error appears on the screen?",
      "Are you connected to stable Wi-Fi with VPN off?",
      "Do you see the eSIM already listed in Cellular/SIM settings?"
    ],
    "quickChecks": [
      "Confirm Wi-Fi is stable and VPN/Private Relay/Private DNS is off.",
      "Check if profile is already installed but toggled off.",
      "Check for old or pending eSIM profiles.",
      "Verify EID/IMEI matches the account/profile. INTERNAL VERIFICATION REQUIRED",
      "Check QR/profile state before reissue. INTERNAL VERIFICATION REQUIRED"
    ],
    "quickSteps": [
      "Confirm Wi-Fi is stable and VPN/Private Relay/Private DNS is off.",
      "Check if profile is already installed but toggled off.",
      "Check for old or pending eSIM profiles.",
      "Verify EID/IMEI matches the account/profile. INTERNAL VERIFICATION REQUIRED",
      "Check QR/profile state before reissue. INTERNAL VERIFICATION REQUIRED"
    ],
    "steps": [
      "Ask for exact error text and screenshot if possible.",
      "Connect to stable private Wi-Fi.",
      "Turn off VPN/Private Relay/Private DNS temporarily.",
      "Check if eSIM profile is already installed:",
      "If installed, toggle it ON and select for data/calls if needed.",
      "If stuck/pending, confirm safe removal before deleting.",
      "Restart phone.",
      "Retry install only if QR/profile is still valid.",
      "If QR says no longer valid/used, verify profile state and reissue only after account",
      "verification. INTERNAL VERIFICATION REQUIRED",
      "If SM-DP+ or EID-related error persists, escalate. INTERNAL VERIFICATION",
      "REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Cellular: check for pending or installed eSIM.",
        "Add eSIM > Use QR Code only after confirming QR is valid.",
        "Keep Wi-Fi on during install.",
        "Do not delete active eSIM unless support confirms it is safe."
      ],
      "android": [
        "Settings > SIM Manager / Network & Internet > SIMs.",
        "Check if downloaded eSIM exists but is toggled off.",
        "Keep Wi-Fi on.",
        "Restart after install attempt."
      ],
      "general": [
        "Ask for exact error text and screenshot if possible.",
        "Connect to stable private Wi-Fi.",
        "Turn off VPN/Private Relay/Private DNS temporarily.",
        "Check if eSIM profile is already installed:",
        "If installed, toggle it ON and select for data/calls if needed.",
        "If stuck/pending, confirm safe removal before deleting.",
        "Restart phone.",
        "Retry install only if QR/profile is still valid.",
        "If QR says no longer valid/used, verify profile state and reissue only after account",
        "verification. INTERNAL VERIFICATION REQUIRED",
        "If SM-DP+ or EID-related error persists, escalate. INTERNAL VERIFICATION",
        "REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "That eSIM error usually means the phone either lost connection during the download, the profile \nis already sitting in your cellular settings, or the QR code has already been used. Please stay on \nstable Wi-Fi and check your Cellular/SIM settings first to see if the eSIM is already listed there. \nIf the QR is truly expired or already used, I’ll need to verify the account before issuing a fresh \neSIM profile."
      }
    ],
    "zendeskNote": "Error exact: [QR no longer valid / Profile already downloaded / Unable to complete cellular plan \nchange / Activation pending / SM-DP+ error] \nDevice/OS: [X] \nNetwork: [Warp / Dark Star / Light Speed] \nTrigger: [Activation / reissue / device transfer / Teleport] \nSteps tried: Wi-Fi verified, VPN off, old/pending profiles checked, rebooted, eSIM state checked \nInternal checks: EID/IMEI match, ICCID/profile state, QR status, activation status INTERNAL \n\nVERIFICATION REQUIRED \nAction: [Guided retry / reissued eSIM / escalated]",
    "escalation": {
      "neededWhen": [
        "EID/IMEI matches but SM-DP+ or profile download error persists.",
        "Second QR/profile fails after Wi-Fi/profile cleanup.",
        "Activation remains pending/stuck after normal wait and restart.",
        "Backend blocks reissue or shows profile state conflict."
      ],
      "evidenceNeeded": [
        "EID/IMEI, QR/profile state, ICCID mapping, eSIM reissue,",
        "activation status."
      ],
      "summaryTemplate": "eSIM download/activation error. Exact error: [X]. Device/OS: [X]. Network: [X]. EID/IMEI verified: \n[Yes/No]. Wi-Fi stable and VPN off. Old/pending profiles checked. QR/profile state: [X]. \nRequesting eSIM profile/SM-DP+/activation provisioning review. INTERNAL VERIFICATION \nREQUIRED"
    },
    "escalationRequiredWhen": [
      "EID/IMEI matches but SM-DP+ or profile download error persists.",
      "Second QR/profile fails after Wi-Fi/profile cleanup.",
      "Activation remains pending/stuck after normal wait and restart.",
      "Backend blocks reissue or shows profile state conflict."
    ],
    "escalationFormat": [
      "eSIM download/activation error. Exact error: [X]. Device/OS: [X]. Network: [X]. EID/IMEI verified: ",
      "[Yes/No]. Wi-Fi stable and VPN off. Old/pending profiles checked. QR/profile state: [X]. ",
      "Requesting eSIM profile/SM-DP+/activation provisioning review. INTERNAL VERIFICATION ",
      "REQUIRED"
    ],
    "relatedPlaybooks": [
      "esim-install-qr-code-failures",
      "deleted-active-esim-reissue",
      "appdashboard-esim-install",
      "carrier-lock-sim-not-supported",
      "esim-hardware-carrier-lock-errors"
    ],
    "sourceAliases": [
      "X9",
      "P3",
      "P7"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "EID/IMEI, QR/profile state, ICCID mapping, eSIM reissue,",
      "activation status."
    ],
    "batch": "Batch 11",
    "aliases": [
      "qr code no longer valid",
      "profile already downloaded",
      "unable to complete cellular plan change",
      "activation pending",
      "sm-dp+ error",
      "esim stuck",
      "esim already used",
      "qr expired"
    ],
    "symptoms": [
      "qr code no longer valid",
      "profile already downloaded",
      "unable to complete cellular plan change",
      "activation pending",
      "sm-dp+ error",
      "esim stuck",
      "esim already used",
      "qr expired"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X9, P3, P7"
  },
  {
    "id": "messaging-routing-errors-error-97-invalid-destination",
    "title": "Messaging Routing Errors — Error 97 & Invalid Destination",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "apn-data",
      "batch11"
    ],
    "keywords": [
      "messaging",
      "routing",
      "errors",
      "error",
      "invalid",
      "destination",
      "apn-data"
    ],
    "customerPhrases": [
      "error 97",
      "invalid destination address",
      "message not sent",
      "sms origination denied",
      "text failed",
      "mms failed",
      "group message failed",
      "message failed to send"
    ],
    "preview": {
      "problem": "SMS feature/provisioning issue / plan or messaging allotment issue / MMS data/APN issue /",
      "firstQuestion": "Does the error happen with plain SMS, picture/group MMS, or both?",
      "firstAction": "Ask for exact error and whether SMS or MMS is affected.",
      "escalateIf": "Error 97 persists after SMS feature/account check."
    },
    "quickAnswer": "SMS feature/provisioning issue / plan or messaging allotment issue / MMS data/APN issue / \nGoogle Messages cache/RCS issue / recipient formatting issue / routing issue",
    "useWhen": "Use when customer reports: Error 97, Invalid destination address, Message not sent, SMS origination denied, text failed,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Does the error happen with plain SMS, picture/group MMS, or both?",
      "Does it happen with every contact or only one?",
      "Are you using iPhone, Google Messages, Samsung Messages, or another messaging",
      "app?"
    ],
    "quickChecks": [
      "Check SMS/text feature and plan state. INTERNAL VERIFICATION REQUIRED",
      "Test plain SMS to one known contact.",
      "For MMS, turn Wi-Fi off and confirm mobile data works.",
      "For Android, turn RCS off temporarily and clear Messages cache.",
      "Verify APN/MMSC if MMS is affected."
    ],
    "quickSteps": [
      "Check SMS/text feature and plan state. INTERNAL VERIFICATION REQUIRED",
      "Test plain SMS to one known contact.",
      "For MMS, turn Wi-Fi off and confirm mobile data works.",
      "For Android, turn RCS off temporarily and clear Messages cache.",
      "Verify APN/MMSC if MMS is affected."
    ],
    "steps": [
      "Ask for exact error and whether SMS or MMS is affected.",
      "Test plain SMS to one contact.",
      "If plain SMS fails with Error 97, check SMS feature/plan/routing internally. INTERNAL",
      "VERIFICATION REQUIRED",
      "If MMS/group fails, turn Wi-Fi off and test mobile data.",
      "Verify APN/MMSC.",
      "If Android/Google Messages:",
      "Turn RCS off temporarily.",
      "Clear Messages cache.",
      "Restart.",
      "Re-test SMS and MMS separately.",
      "Escalate if errors persist after feature, APN, app, and routing checks. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Messages > Send as SMS ON.",
        "MMS Messaging and Group Messaging ON if available.",
        "Test with non-iMessage contact.",
        "If after port/Teleport, confirm normal carrier SMS works first."
      ],
      "android": [
        "Confirm default SMS app.",
        "Google Messages > RCS chats OFF for testing.",
        "Settings > Apps > Messages > Storage & cache > Clear cache.",
        "Avoid clearing app data/storage unless customer understands it can reset app settings.",
        "Verify APN includes MMS where required.",
        "Copy-ready customer reply — Error 97:",
        "Error 97 usually points to the texting feature or routing on the line, so I’ll check the account-side",
        "messaging status. While I do that, please try sending a plain text with no photo or group chat to",
        "one person and tell me if the same error appears.",
        "Copy-ready customer reply — Invalid destination:",
        "“Invalid destination address” often happens with Android messaging, group/MMS, or RCS",
        "fallback. Let’s isolate it by turning RCS off temporarily, clearing the Messages app cache,",
        "restarting, and then testing one plain SMS followed by one picture message."
      ],
      "general": [
        "Ask for exact error and whether SMS or MMS is affected.",
        "Test plain SMS to one contact.",
        "If plain SMS fails with Error 97, check SMS feature/plan/routing internally. INTERNAL",
        "VERIFICATION REQUIRED",
        "If MMS/group fails, turn Wi-Fi off and test mobile data.",
        "Verify APN/MMSC.",
        "If Android/Google Messages:",
        "Turn RCS off temporarily.",
        "Clear Messages cache.",
        "Restart.",
        "Re-test SMS and MMS separately.",
        "Escalate if errors persist after feature, APN, app, and routing checks. INTERNAL",
        "VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [],
    "zendeskNote": "Error exact: [Error 97 / Invalid destination address / Message not sent] \nNetwork: [Warp / Dark Star / Light Speed] \nDevice/OS: [X] \nMessaging app: [iMessage / Google Messages / Samsung Messages / Other] \nSymptoms: SMS [works/fails], MMS [works/fails], RCS [on/off], scope [one/all contacts] \nSteps tried: SMS isolated, Wi-Fi off, data verified, APN/MMSC checked, RCS off, cache cleared, \nrebooted \nInternal checks: SMS feature, text allotment, MMS routing, account provisioning INTERNAL \nVERIFICATION REQUIRED \nResult: [Resolved / escalated]",
    "escalation": {
      "neededWhen": [
        "Error 97 persists after SMS feature/account check.",
        "Invalid destination persists across contacts after RCS/cache/APN checks.",
        "SMS or MMS fails to all recipients despite account active.",
        "Multiple users report same exact error after network/app update."
      ],
      "evidenceNeeded": [
        "SMS feature, text allotment, MMS routing, reprovisioning,",
        "SMSC/MMSC trace."
      ],
      "summaryTemplate": "Messaging error. Exact error: [X]. Network: [X]. Device/OS/app: [X]. SMS result: [X]. MMS result: \n[X]. Data works: [Yes/No]. APN/MMSC verified: [Yes/No]. RCS/cache test completed. \nRequesting SMS/MMS feature or routing review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Error 97 persists after SMS feature/account check.",
      "Invalid destination persists across contacts after RCS/cache/APN checks.",
      "SMS or MMS fails to all recipients despite account active.",
      "Multiple users report same exact error after network/app update."
    ],
    "escalationFormat": [
      "Messaging error. Exact error: [X]. Network: [X]. Device/OS/app: [X]. SMS result: [X]. MMS result: ",
      "[X]. Data works: [Yes/No]. APN/MMSC verified: [Yes/No]. RCS/cache test completed. ",
      "Requesting SMS/MMS feature or routing review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "smsmms-triage",
      "rcs-imessage-activation-fallback",
      "pixel-rcsinvalid-destination",
      "apn-data-routing-errors"
    ],
    "sourceAliases": [
      "X9",
      "X4",
      "X1",
      "P3"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "SMS feature, text allotment, MMS routing, reprovisioning,",
      "SMSC/MMSC trace."
    ],
    "batch": "Batch 11",
    "aliases": [
      "error 97",
      "invalid destination address",
      "message not sent",
      "sms origination denied",
      "text failed",
      "mms failed",
      "group message failed",
      "message failed to send"
    ],
    "symptoms": [
      "error 97",
      "invalid destination address",
      "message not sent",
      "sms origination denied",
      "text failed",
      "mms failed",
      "group message failed",
      "message failed to send"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X9, X4, X1, P3"
  },
  {
    "id": "apn-data-routing-errors",
    "title": "APN & Data Routing Errors",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "apn-data",
      "batch11"
    ],
    "keywords": [
      "apn",
      "data",
      "routing",
      "errors",
      "apn-data"
    ],
    "customerPhrases": [
      "pdp authentication failure",
      "could not activate cellular data network",
      "no internet connection",
      "data broken",
      "mobile data not working",
      "bars but no internet",
      "apn error",
      "data routing"
    ],
    "preview": {
      "problem": "APN mismatch / cellular data route failure / data balance or throttle issue / suspended line /",
      "firstQuestion": "Are you seeing this with Wi-Fi turned off?",
      "firstAction": "Confirm exact error and device type.",
      "escalateIf": "APN is correct."
    },
    "quickAnswer": "APN mismatch / cellular data route failure / data balance or throttle issue / suspended line / \neSIM profile issue / backend data provisioning issue",
    "useWhen": "Use when customer reports: PDP authentication failure, Could not activate cellular data network, No internet connection,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are you seeing this with Wi-Fi turned off?",
      "Which network are you on: Warp, Dark Star, or Light Speed?",
      "Did this start after activation, Teleport, eSIM change, or plan renewal?"
    ],
    "quickChecks": [
      "Turn Wi-Fi off and test cellular only.",
      "Verify plan/data balance and line status. INTERNAL VERIFICATION REQUIRED",
      "Verify APN for the active network.",
      "Turn VPN/Private DNS/Data Saver off.",
      "Reset network settings if APN/cache issue suspected."
    ],
    "quickSteps": [
      "Turn Wi-Fi off and test cellular only.",
      "Verify plan/data balance and line status. INTERNAL VERIFICATION REQUIRED",
      "Verify APN for the active network.",
      "Turn VPN/Private DNS/Data Saver off.",
      "Reset network settings if APN/cache issue suspected."
    ],
    "steps": [
      "Confirm exact error and device type.",
      "Turn Wi-Fi off.",
      "Confirm mobile data is ON for the correct SIM/eSIM.",
      "Check account/data status. INTERNAL VERIFICATION REQUIRED",
      "Verify APN:",
      "Warp: correct Warp APN/profile.",
      "Dark Star: correct",
      "ereseller",
      "APN/MMSC settings.",
      "Light Speed: correct",
      "wholesale",
      "or applicable APN/profile.",
      "Remove old/conflicting APN profiles where safe.",
      "Restart phone.",
      "Reset Network Settings if needed.",
      "Test web browsing with Wi-Fi off.",
      "Escalate if APN/account/device checks pass and data still fails. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Confirm correct line selected for cellular data.",
        "Remove old APN profiles if conflicting.",
        "Install correct APN profile through Safari if needed.",
        "Settings > General > Transfer or Reset iPhone > Reset > Reset Network Settings.",
        "Warn that saved Wi-Fi networks/passwords are removed."
      ],
      "android": [
        "Settings > Mobile Networks > Access Point Names.",
        "Check APN spelling and remove accidental spaces.",
        "APN protocol: IPv4/IPv6 if required by current guide.",
        "Save and select APN.",
        "Turn off Data Saver and Private DNS for testing."
      ],
      "general": [
        "Confirm exact error and device type.",
        "Turn Wi-Fi off.",
        "Confirm mobile data is ON for the correct SIM/eSIM.",
        "Check account/data status. INTERNAL VERIFICATION REQUIRED",
        "Verify APN:",
        "Warp: correct Warp APN/profile.",
        "Dark Star: correct",
        "ereseller",
        "APN/MMSC settings.",
        "Light Speed: correct",
        "wholesale",
        "or applicable APN/profile.",
        "Remove old/conflicting APN profiles where safe.",
        "Restart phone.",
        "Reset Network Settings if needed.",
        "Test web browsing with Wi-Fi off.",
        "Escalate if APN/account/device checks pass and data still fails. INTERNAL",
        "VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "That error means your phone may be connected to the tower, but the cellular data path is not \nbeing accepted correctly. Let’s check the data route. \nPlease turn Wi-Fi off, confirm mobile data is on, and tell me whether you’re using iPhone or \nAndroid. I’ll also check the line’s data status while we verify the APN."
      }
    ],
    "zendeskNote": "Error exact: [PDP authentication failure / Could not activate cellular data network / no internet] \nNetwork: [Warp / Dark Star / Light Speed] \nDevice/OS: [X] \nSIM/eSIM: [X] \nTrigger: [Activation / Teleport / eSIM change / renewal / sudden] \nSteps tried: Wi-Fi off, data line selected, APN verified, VPN/DNS off, network reset, reboot \nInternal checks: Data balance, line status, throttle/suspension, data provisioning INTERNAL \nVERIFICATION REQUIRED \nResult: [Resolved / escalated]",
    "escalation": {
      "neededWhen": [
        "APN is correct.",
        "Data balance/plan status is valid.",
        "Device is compatible and correct line selected.",
        "Network reset/reboot completed.",
        "PDP/data error persists."
      ],
      "evidenceNeeded": [
        "Data balance, throttle/suspension, line provisioning,",
        "PGW/PCRF/data routing, backend refresh."
      ],
      "summaryTemplate": "Data routing error. Exact error: [X]. Network: [X]. Device/OS: [X]. APN verified: [Yes/No]. Data \nbalance/status: [X]. VPN/DNS/Data Saver off. Network reset completed. Requesting data \nprovisioning / PGW-PCRF / line sync review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "APN is correct.",
      "Data balance/plan status is valid.",
      "Device is compatible and correct line selected.",
      "Network reset/reboot completed.",
      "PDP/data error persists."
    ],
    "escalationFormat": [
      "Data routing error. Exact error: [X]. Network: [X]. Device/OS: [X]. APN verified: [Yes/No]. Data ",
      "balance/status: [X]. VPN/DNS/Data Saver off. Network reset completed. Requesting data ",
      "provisioning / PGW-PCRF / line sync review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "mobile-data-not-working-bars-but-no-internet",
      "warp-apn-setup-mms-configuration",
      "post-teleport-data-failure",
      "speedthrottle"
    ],
    "sourceAliases": [
      "X9",
      "X1",
      "X2",
      "P2"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Data balance, throttle/suspension, line provisioning,",
      "PGW/PCRF/data routing, backend refresh."
    ],
    "batch": "Batch 11",
    "aliases": [
      "pdp authentication failure",
      "could not activate cellular data network",
      "no internet connection",
      "data broken",
      "mobile data not working",
      "bars but no internet",
      "apn error",
      "data routing"
    ],
    "symptoms": [
      "pdp authentication failure",
      "could not activate cellular data network",
      "no internet connection",
      "data broken",
      "mobile data not working",
      "bars but no internet",
      "apn error",
      "data routing"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X9, X1, X2, P2"
  },
  {
    "id": "network-registration-errors-sos-no-service",
    "title": "Network Registration Errors — SOS / No Service",
    "category": "network-signal",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "network-signal",
      "batch11"
    ],
    "keywords": [
      "network",
      "registration",
      "errors",
      "sos",
      "service",
      "network-signal"
    ],
    "customerPhrases": [
      "no service",
      "sos only",
      "searching",
      "emergency calls only",
      "not registered on network",
      "no signal",
      "network unavailable",
      "registration failed"
    ],
    "preview": {
      "problem": "Network registration failure / activation or port issue / billing or line status issue / device lock or",
      "firstQuestion": "Did this start after activation, port-in, Teleport, renewal, or device change?",
      "firstAction": "Identify trigger: sudden, activation, port, Teleport, renewal, device change.",
      "escalateIf": "Account active and clear."
    },
    "quickAnswer": "Network registration failure / activation or port issue / billing or line status issue / device lock or \ncompatibility / SIM/eSIM issue / coverage/local network issue / post-Teleport provisioning issue",
    "useWhen": "Use when customer reports: No Service, SOS only, Searching, Emergency calls only, Not registered on network, no signal,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Did this start after activation, port-in, Teleport, renewal, or device change?",
      "Are you using eSIM or physical SIM?",
      "What ZIP code or general area are you in?"
    ],
    "quickChecks": [
      "Check account/line status and billing/renewal. INTERNAL VERIFICATION REQUIRED",
      "Check activation, port, or Teleport status if relevant. INTERNAL VERIFICATION",
      "REQUIRED",
      "Toggle Airplane Mode ON for 30 seconds, then OFF.",
      "Confirm SIM/eSIM is installed, enabled, and selected.",
      "Check device unlock/compatibility and local issue reports. INTERNAL VERIFICATION",
      "REQUIRED"
    ],
    "quickSteps": [
      "Check account/line status and billing/renewal. INTERNAL VERIFICATION REQUIRED",
      "Check activation, port, or Teleport status if relevant. INTERNAL VERIFICATION",
      "REQUIRED",
      "Toggle Airplane Mode ON for 30 seconds, then OFF.",
      "Confirm SIM/eSIM is installed, enabled, and selected.",
      "Check device unlock/compatibility and local issue reports. INTERNAL VERIFICATION",
      "REQUIRED"
    ],
    "steps": [
      "Identify trigger: sudden, activation, port, Teleport, renewal, device change.",
      "Check account/line status. INTERNAL VERIFICATION REQUIRED",
      "Check activation/port/Teleport status. INTERNAL VERIFICATION REQUIRED",
      "Airplane Mode ON for 30 seconds, then OFF.",
      "Restart phone.",
      "Confirm correct SIM/eSIM is enabled.",
      "Confirm Network Selection is Automatic.",
      "Check Carrier Lock/device compatibility.",
      "Reset Network Settings if basic checks fail.",
      "Escalate if account/device/SIM checks pass and SOS/No Service persists. INTERNAL",
      "VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "Settings > Cellular: confirm US Mobile line is ON.",
        "Settings > General > About > Carrier Lock = “No SIM restrictions.”",
        "Settings > Cellular > Network Selection > Automatic.",
        "Reset Network Settings if needed, with Wi-Fi password warning."
      ],
      "android": [
        "Settings > SIM Manager / SIMs: confirm SIM/eSIM is ON.",
        "Network Operators > Select Automatically.",
        "Preferred network type: 5G/LTE/Auto if available.",
        "Reseat pSIM if physical SIM.",
        "Reset network settings if needed."
      ],
      "general": [
        "Identify trigger: sudden, activation, port, Teleport, renewal, device change.",
        "Check account/line status. INTERNAL VERIFICATION REQUIRED",
        "Check activation/port/Teleport status. INTERNAL VERIFICATION REQUIRED",
        "Airplane Mode ON for 30 seconds, then OFF.",
        "Restart phone.",
        "Confirm correct SIM/eSIM is enabled.",
        "Confirm Network Selection is Automatic.",
        "Check Carrier Lock/device compatibility.",
        "Reset Network Settings if basic checks fail.",
        "Escalate if account/device/SIM checks pass and SOS/No Service persists. INTERNAL",
        "VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "I know SOS/No Service is stressful. It means the phone is not fully registering on the normal \nnetwork. Let’s force a clean reconnection first. \nPlease turn Airplane Mode ON for 30 seconds, then OFF, and restart the phone. While you do \nthat, I’ll check whether the line is active and whether anything is stuck from activation, porting, \nrenewal, or a network switch."
      }
    ],
    "zendeskNote": "Error exact: [SOS Only / No Service / Not registered on network / Searching] \nNetwork: [Warp / Dark Star / Light Speed] \nDevice/OS: [X] \nSIM/eSIM: [eSIM / pSIM] \nTrigger: [Activation / Port / Teleport / Renewal / Device change / Sudden] \nLocation: [ZIP/general area] \nSteps tried: Airplane toggle, reboot, SIM/eSIM enabled, network selection auto, network reset \nInternal checks: Account active, billing, activation/port/Teleport status, local issue reports \nINTERNAL VERIFICATION REQUIRED \nResult: [Resolved / escalated]",
    "escalation": {
      "neededWhen": [
        "Account active and clear.",
        "Activation/port/Teleport complete.",
        "Device unlocked and compatible.",
        "SIM/eSIM installed and enabled.",
        "Network reset/reboot completed.",
        "SOS/No Service persists."
      ],
      "evidenceNeeded": [
        "Account status, billing, activation, port, Teleport, local network",
        "health, backend registration/provisioning."
      ],
      "summaryTemplate": "Network registration error. Exact error: [X]. Network: [X]. Device/OS: [X]. SIM type: [X]. Trigger: \n[X]. Location: [X]. Account/activation/port/Teleport checked: [X]. Device unlocked/compatible. \nAirplane/reboot/network reset done. Requesting subscriber registration / HSS-HLR / location \nupdate review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Account active and clear.",
      "Activation/port/Teleport complete.",
      "Device unlocked and compatible.",
      "SIM/eSIM installed and enabled.",
      "Network reset/reboot completed.",
      "SOS/No Service persists."
    ],
    "escalationFormat": [
      "Network registration error. Exact error: [X]. Network: [X]. Device/OS: [X]. SIM type: [X]. Trigger: ",
      "[X]. Location: [X]. Account/activation/port/Teleport checked: [X]. Device unlocked/compatible. ",
      "Airplane/reboot/network reset done. Requesting subscriber registration / HSS-HLR / location ",
      "update review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "sos-only-no-service-triage",
      "new-line-activation-not-working-activation-pending",
      "esim-install-qr-code-failures",
      "porting-bank-code-delays",
      "network-choice-coverage-band-troubleshooting"
    ],
    "sourceAliases": [
      "X9",
      "P3",
      "P7",
      "P4"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Account status, billing, activation, port, Teleport, local network",
      "health, backend registration/provisioning."
    ],
    "batch": "Batch 11",
    "aliases": [
      "no service",
      "sos only",
      "searching",
      "emergency calls only",
      "not registered on network",
      "no signal",
      "network unavailable",
      "registration failed"
    ],
    "symptoms": [
      "no service",
      "sos only",
      "searching",
      "emergency calls only",
      "not registered on network",
      "no signal",
      "network unavailable",
      "registration failed"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X9, P3, P7, P4"
  },
  {
    "id": "billing-payment-decline-errors",
    "title": "Billing & Payment Decline Errors",
    "category": "error-dictionary",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "error-dictionary",
      "batch11"
    ],
    "keywords": [
      "billing",
      "payment",
      "decline",
      "errors",
      "error-dictionary"
    ],
    "customerPhrases": [
      "incorrect_zip",
      "card_declined",
      "payment failed",
      "avs mismatch",
      "card verification failed",
      "too many",
      "attempts",
      "payment lockout",
      "autopay failed",
      "payment succeeded but line suspended"
    ],
    "preview": {
      "problem": "Payment gateway decline / AVS ZIP mismatch / bank decline / fraud/security lock / AutoPay",
      "firstQuestion": "What exact payment error do you see?",
      "firstAction": "Ask for exact error.",
      "escalateIf": "Account is payment-locked."
    },
    "quickAnswer": "Payment gateway decline / AVS ZIP mismatch / bank decline / fraud/security lock / AutoPay \nfailure / billing-service sync issue",
    "useWhen": "Use when customer reports: incorrect_zip, card_declined, payment failed, AVS mismatch, card verification failed, too many",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "What exact payment error do you see?",
      "Did your billing ZIP, card, bank, or address recently change?",
      "Is your line still active or currently suspended?"
    ],
    "quickChecks": [
      "Check payment logs and exact error code. INTERNAL VERIFICATION REQUIRED",
      "Check AutoPay status and invoice status. INTERNAL VERIFICATION REQUIRED",
      "Check line/service status. INTERNAL VERIFICATION REQUIRED",
      "Check for payment lockout/security flag. INTERNAL VERIFICATION REQUIRED",
      "Do not ask for full card number, CVV, or sensitive payment details."
    ],
    "quickSteps": [
      "Check payment logs and exact error code. INTERNAL VERIFICATION REQUIRED",
      "Check AutoPay status and invoice status. INTERNAL VERIFICATION REQUIRED",
      "Check line/service status. INTERNAL VERIFICATION REQUIRED",
      "Check for payment lockout/security flag. INTERNAL VERIFICATION REQUIRED",
      "Do not ask for full card number, CVV, or sensitive payment details."
    ],
    "steps": [
      "Ask for exact error.",
      "Check internal billing/payment logs. INTERNAL VERIFICATION REQUIRED",
      "If",
      "incorrect_zip",
      ", ask customer to confirm the billing ZIP exactly as shown with their",
      "card issuer.",
      "If",
      "card_declined",
      ", customer may need to contact bank or try another supported",
      "payment method.",
      "If too many attempts/payment lockout, stop retries and escalate Billing/security review.",
      "INTERNAL VERIFICATION REQUIRED",
      "If payment succeeded but service remains suspended, escalate billing/provisioning sync",
      "review. INTERNAL VERIFICATION REQUIRED",
      "If invoice/taxes are questioned, review invoice line items. INTERNAL VERIFICATION",
      "REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "N/A"
      ],
      "android": [
        "N/A",
        "Copy-ready customer reply — incorrect_zip:",
        "The payment system is showing a ZIP/address verification mismatch. Please don’t send card",
        "details here. The safest next step is to check the billing ZIP with your card issuer or bank",
        "statement, then re-enter the card using that exact ZIP.",
        "Copy-ready customer reply — card_declined:",
        "The payment processor is showing a card decline. That can happen because of bank rules,",
        "fraud filters, card limits, or card details. You can try another card, or contact the card issuer to",
        "approve the charge before retrying.",
        "Copy-ready customer reply — lockout:",
        "Because there have been multiple failed attempts, I don’t want you to keep retrying and trigger",
        "more security blocks. I’m going to route this for Billing review so the payment lock can be",
        "checked safely."
      ],
      "general": [
        "Ask for exact error.",
        "Check internal billing/payment logs. INTERNAL VERIFICATION REQUIRED",
        "If",
        "incorrect_zip",
        ", ask customer to confirm the billing ZIP exactly as shown with their",
        "card issuer.",
        "If",
        "card_declined",
        ", customer may need to contact bank or try another supported",
        "payment method.",
        "If too many attempts/payment lockout, stop retries and escalate Billing/security review.",
        "INTERNAL VERIFICATION REQUIRED",
        "If payment succeeded but service remains suspended, escalate billing/provisioning sync",
        "review. INTERNAL VERIFICATION REQUIRED",
        "If invoice/taxes are questioned, review invoice line items. INTERNAL VERIFICATION",
        "REQUIRED"
      ]
    },
    "copyTemplates": [],
    "zendeskNote": "Error exact: [incorrect_zip / card_declined / payment failed / too many attempts] \nTrigger: [AutoPay / manual payment / renewal / plan change] \nService status: [Active / suspended / pending] \nPayment status: [failed / succeeded / pending] \nInternal checks: Payment logs, invoice, AutoPay, gateway response, security lockout \nINTERNAL VERIFICATION REQUIRED \nAction: [Advised ZIP match / alternate card / Billing escalation / Pay My Bill] \nResult: [Resolved / pending / escalated]",
    "escalation": {
      "neededWhen": [
        "Account is payment-locked.",
        "Payment succeeded but plan/line did not renew.",
        "Customer is suspended despite valid payment.",
        "Customer disputes charge/taxes/fees.",
        "Payment error persists with multiple valid methods."
      ],
      "evidenceNeeded": [
        "Billing gateway logs, AVS result, AutoPay status, invoice, payment",
        "lockout, service suspension, refund/credit."
      ],
      "summaryTemplate": "Payment error. Exact error: [X]. Trigger: [AutoPay/manual]. Payment status: [X]. Service status: \n[X]. Customer tried: [X]. Gateway/log result: [X]. Requesting Billing review for \ndecline/lockout/sync/invoice dispute. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Account is payment-locked.",
      "Payment succeeded but plan/line did not renew.",
      "Customer is suspended despite valid payment.",
      "Customer disputes charge/taxes/fees.",
      "Payment error persists with multiple valid methods."
    ],
    "escalationFormat": [
      "Payment error. Exact error: [X]. Trigger: [AutoPay/manual]. Payment status: [X]. Service status: ",
      "[X]. Customer tried: [X]. Gateway/log result: [X]. Requesting Billing review for ",
      "decline/lockout/sync/invoice dispute. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "autopay-payment-failures",
      "appdashboard-bug",
      "refund-policy-safe-language",
      "plan-changes-annual-vs-monthly-issues"
    ],
    "sourceAliases": [
      "X9",
      "X7",
      "X8"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Billing gateway logs, AVS result, AutoPay status, invoice, payment",
      "lockout, service suspension, refund/credit."
    ],
    "batch": "Batch 11",
    "aliases": [
      "incorrect_zip",
      "card_declined",
      "payment failed",
      "avs mismatch",
      "card verification failed",
      "too many",
      "attempts",
      "payment lockout",
      "autopay failed",
      "payment succeeded but line suspended"
    ],
    "symptoms": [
      "incorrect_zip",
      "card_declined",
      "payment failed",
      "avs mismatch",
      "card verification failed",
      "too many",
      "attempts",
      "payment lockout",
      "autopay failed",
      "payment succeeded but line suspended"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X9, X7, X8"
  },
  {
    "id": "porting-rejection-strings",
    "title": "Porting Rejection Strings",
    "category": "port-in-out",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "port-in-out",
      "batch11"
    ],
    "keywords": [
      "porting",
      "rejection",
      "strings",
      "port-in-out"
    ],
    "customerPhrases": [
      "transfer pin invalid",
      "account number invalid",
      "zip mismatch",
      "old carrier rejected",
      "name",
      "mismatch",
      "address mismatch",
      "port rejected",
      "number lock",
      "port protection",
      "donor rejection"
    ],
    "preview": {
      "problem": "Donor carrier credential mismatch / port lock / inactive donor account / fraud protection / LNP",
      "firstQuestion": "Did you generate a transfer PIN specifically for porting, or use your normal login/account",
      "firstAction": "Read/check exact rejection code internally. INTERNAL VERIFICATION REQUIRED",
      "escalateIf": "Customer verifies details from donor bill/app but rejection continues."
    },
    "quickAnswer": "Donor carrier credential mismatch / port lock / inactive donor account / fraud protection / LNP \nrejection / SPID or routing issue",
    "useWhen": "Use when customer reports: Transfer PIN invalid, Account number invalid, ZIP mismatch, Old carrier rejected, Name",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Did you generate a transfer PIN specifically for porting, or use your normal login/account",
      "PIN?",
      "Can you verify account number and ZIP from the old carrier app or bill?",
      "Is Number Lock, Port Protection, or Account Takeover Protection enabled with the old",
      "carrier?"
    ],
    "quickChecks": [
      "Check exact rejection string/code. INTERNAL VERIFICATION REQUIRED",
      "Identify rejected field: PIN, account number, ZIP, name, address, lock, inactive account.",
      "Confirm donor carrier and prepaid/postpaid/VoIP type.",
      "Ask customer to verify details from donor source, not memory.",
      "Resubmit only after corrected details are confirmed. INTERNAL VERIFICATION",
      "REQUIRED"
    ],
    "quickSteps": [
      "Check exact rejection string/code. INTERNAL VERIFICATION REQUIRED",
      "Identify rejected field: PIN, account number, ZIP, name, address, lock, inactive account.",
      "Confirm donor carrier and prepaid/postpaid/VoIP type.",
      "Ask customer to verify details from donor source, not memory.",
      "Resubmit only after corrected details are confirmed. INTERNAL VERIFICATION",
      "REQUIRED"
    ],
    "steps": [
      "Read/check exact rejection code internally. INTERNAL VERIFICATION REQUIRED",
      "Tell customer only the specific field that failed.",
      "If Transfer PIN invalid, ask them to generate a fresh number transfer PIN from donor",
      "carrier.",
      "If account number invalid, guide them to donor carrier’s official account-number location.",
      "If ZIP mismatch, ask for exact billing ZIP on donor account/bill.",
      "If port lock/protection active, ask customer to disable it with donor.",
      "Confirm old account remains active.",
      "Resubmit port after correction. INTERNAL VERIFICATION REQUIRED",
      "Escalate if verified details still reject."
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "N/A"
      ],
      "android": [
        "N/A"
      ],
      "general": [
        "Read/check exact rejection code internally. INTERNAL VERIFICATION REQUIRED",
        "Tell customer only the specific field that failed.",
        "If Transfer PIN invalid, ask them to generate a fresh number transfer PIN from donor",
        "carrier.",
        "If account number invalid, guide them to donor carrier’s official account-number location.",
        "If ZIP mismatch, ask for exact billing ZIP on donor account/bill.",
        "If port lock/protection active, ask customer to disable it with donor.",
        "Confirm old account remains active.",
        "Resubmit port after correction. INTERNAL VERIFICATION REQUIRED",
        "Escalate if verified details still reject."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Your previous carrier rejected the transfer because one of the secure details did not match their \nrecords. This is usually the account number, transfer PIN, billing ZIP, or a number lock. \nPlease generate a fresh transfer PIN from your old carrier and verify the account number and \nZIP from their app or latest bill. Once we have the corrected detail, we can resubmit the port."
      }
    ],
    "zendeskNote": "Error exact: [Transfer PIN invalid / Account number invalid / ZIP mismatch / Name mismatch / \nport lock] \nDonor carrier: [X] \nAccount type: [Prepaid / Postpaid / VoIP / Landline / Unknown] \nRejected field: [X] \nCustomer verification source: [Bill / donor app / donor support / unknown] \nOld account active: [Yes/No/Unknown] \nInternal checks: Rejection code, LSR status, resubmission status INTERNAL VERIFICATION \nREQUIRED \nAction: [Requested corrected info / resubmitted / escalated]",
    "escalation": {
      "neededWhen": [
        "Customer verifies details from donor bill/app but rejection continues.",
        "Donor confirms details verbally but LNP rejects electronically.",
        "Rejection code is unclear or inconsistent.",
        "Port is stuck after multiple correct resubmissions.",
        "Number-loss risk or split service appears."
      ],
      "evidenceNeeded": [
        "Exact LNP rejection, LSR status, donor response, resubmission,",
        "NPAC/LNP review."
      ],
      "summaryTemplate": "Port rejection. Donor: [X]. Rejection code/string: [X]. Rejected field: [X]. Customer verified details \nfrom [source]. Old account active: [Yes/No]. Port protection disabled: [Yes/No]. Resubmissions: \n[X]. Requesting manual LSR/LNP review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Customer verifies details from donor bill/app but rejection continues.",
      "Donor confirms details verbally but LNP rejects electronically.",
      "Rejection code is unclear or inconsistent.",
      "Port is stuck after multiple correct resubmissions.",
      "Number-loss risk or split service appears."
    ],
    "escalationFormat": [
      "Port rejection. Donor: [X]. Rejection code/string: [X]. Rejected field: [X]. Customer verified details ",
      "from [source]. Old account active: [Yes/No]. Port protection disabled: [Yes/No]. Resubmissions: ",
      "[X]. Requesting manual LSR/LNP review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "port-rejections-account-pin-zip-mismatch",
      "carrier-by-carrier-porting-rules",
      "port-in-delays-wireless-vs-wireline-timelines",
      "customer-cannot-receive-2fa-bank-codes-after-port-or-teleport",
      "customer-cannot-receive-2fa-bank-codes-after-port-or-teleport"
    ],
    "sourceAliases": [
      "X9",
      "X5",
      "P7"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Exact LNP rejection, LSR status, donor response, resubmission,",
      "NPAC/LNP review."
    ],
    "batch": "Batch 11",
    "aliases": [
      "transfer pin invalid",
      "account number invalid",
      "zip mismatch",
      "old carrier rejected",
      "name",
      "mismatch",
      "address mismatch",
      "port rejected",
      "number lock",
      "port protection",
      "donor rejection"
    ],
    "symptoms": [
      "transfer pin invalid",
      "account number invalid",
      "zip mismatch",
      "old carrier rejected",
      "name",
      "mismatch",
      "address mismatch",
      "port rejected",
      "number lock",
      "port protection",
      "donor rejection"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X9, X5, P7"
  },
  {
    "id": "app-dashboard-contact-carrier-errors",
    "title": "App, Dashboard & “Contact Carrier” Errors",
    "category": "error-dictionary",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "error-dictionary",
      "batch11"
    ],
    "keywords": [
      "app",
      "dashboard",
      "contact",
      "carrier",
      "errors",
      "error-dictionary"
    ],
    "customerPhrases": [
      "something went wrong",
      "session expired",
      "try again later",
      "contact carrier",
      "account locked",
      "set up",
      "personal hotspot",
      "personal hotspot missing",
      "wi-fi calling contact carrier",
      "dashboard error",
      "app",
      "screen error"
    ],
    "preview": {
      "problem": "App session/API issue / account lock / missing E911 / Wi-Fi Calling provisioning / hotspot",
      "firstQuestion": "What exact message do you see and where does it appear?",
      "firstAction": "Identify where the error appears:",
      "escalateIf": "Account locked and verification/reset is required."
    },
    "quickAnswer": "App session/API issue / account lock / missing E911 / Wi-Fi Calling provisioning / hotspot \nentitlement or APN issue / platform bug / browser or VPN interference",
    "useWhen": "Use when customer reports: Something went wrong, Session expired, Try again later, Contact carrier, Account locked, Set up",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "What exact message do you see and where does it appear?",
      "Is it in the US Mobile app/dashboard or in your phone settings?",
      "Is it for Wi-Fi Calling, Personal Hotspot, login, payment, or another action?"
    ],
    "quickChecks": [
      "For app/dashboard: log out/in, clear cache, update app, try web.",
      "Turn off VPN, Private Relay, ad blocker, or Private DNS.",
      "For Wi-Fi Calling: verify E911 and Wi-Fi Calling feature state. INTERNAL",
      "VERIFICATION REQUIRED",
      "For Personal Hotspot: verify plan/hotspot allowance, APN, and entitlement. INTERNAL",
      "VERIFICATION REQUIRED",
      "For Account locked: use secure account verification. INTERNAL VERIFICATION",
      "REQUIRED"
    ],
    "quickSteps": [
      "For app/dashboard: log out/in, clear cache, update app, try web.",
      "Turn off VPN, Private Relay, ad blocker, or Private DNS.",
      "For Wi-Fi Calling: verify E911 and Wi-Fi Calling feature state. INTERNAL",
      "VERIFICATION REQUIRED",
      "For Personal Hotspot: verify plan/hotspot allowance, APN, and entitlement. INTERNAL",
      "VERIFICATION REQUIRED",
      "For Account locked: use secure account verification. INTERNAL VERIFICATION",
      "REQUIRED"
    ],
    "steps": [
      "Identify where the error appears:",
      "App/dashboard.",
      "iPhone/Android cellular settings.",
      "Wi-Fi Calling.",
      "Personal Hotspot.",
      "Payment/login.",
      "If app/dashboard:",
      "Log out.",
      "Force-close app.",
      "Update app.",
      "Clear cache/browser cache.",
      "Try web dashboard.",
      "If “Contact carrier” for Wi-Fi Calling:",
      "Verify E911 address setup.",
      "Toggle Wi-Fi Calling after E911 setup.",
      "Test on home Wi-Fi.",
      "Escalate if feature should be active but toggle fails.",
      "If “Contact carrier” for Personal Hotspot:",
      "Verify hotspot allowance/feature.",
      "Check APN/hotspot APN.",
      "Restart phone.",
      "Escalate if allowance and APN are correct but hotspot remains blocked.",
      "If Account locked:",
      "Do not bypass verification.",
      "Follow secure unlock/reset flow. INTERNAL VERIFICATION REQUIRED"
    ],
    "deviceSpecificSteps": {
      "iphone": [
        "For app/dashboard: update app and try Safari/web dashboard.",
        "Turn off iCloud Private Relay/VPN for testing.",
        "Wi-Fi Calling: Settings > Cellular > Wi-Fi Calling.",
        "Hotspot: Settings > Cellular > Cellular Data Network if APN fields are available.",
        "Reset Network Settings only after basic checks."
      ],
      "android": [
        "Clear app cache: Settings > Apps > US Mobile > Storage > Clear Cache.",
        "Turn off VPN/Private DNS.",
        "Wi-Fi Calling path varies by device.",
        "Hotspot APN/DUN may require manual APN check.",
        "Restart after APN/feature changes.",
        "Copy-ready customer reply — app/dashboard:",
        "That message can happen when the app session or browser cache gets stuck. Please log out,",
        "close the app completely, check for an update, and log back in. If it still fails, try the same action",
        "on the web dashboard so we can tell whether it is app-only or account/platform-related.",
        "Copy-ready customer reply — Wi-Fi Calling contact carrier:",
        "For Wi-Fi Calling, the phone may show “Contact carrier” if the emergency address or Wi-Fi",
        "Calling feature is not fully set up. I’ll check the account-side status, and please make sure you’re",
        "testing on a stable home Wi-Fi network.",
        "Copy-ready customer reply — Personal Hotspot:",
        "For Personal Hotspot, that message can mean the phone needs the correct hotspot/APN",
        "settings or the line’s hotspot feature needs review. I’ll check the hotspot status on the account",
        "while we verify the phone settings."
      ],
      "general": [
        "Identify where the error appears:",
        "App/dashboard.",
        "iPhone/Android cellular settings.",
        "Wi-Fi Calling.",
        "Personal Hotspot.",
        "Payment/login.",
        "If app/dashboard:",
        "Log out.",
        "Force-close app.",
        "Update app.",
        "Clear cache/browser cache.",
        "Try web dashboard.",
        "If “Contact carrier” for Wi-Fi Calling:",
        "Verify E911 address setup.",
        "Toggle Wi-Fi Calling after E911 setup.",
        "Test on home Wi-Fi.",
        "Escalate if feature should be active but toggle fails.",
        "If “Contact carrier” for Personal Hotspot:",
        "Verify hotspot allowance/feature.",
        "Check APN/hotspot APN.",
        "Restart phone.",
        "Escalate if allowance and APN are correct but hotspot remains blocked.",
        "If Account locked:",
        "Do not bypass verification.",
        "Follow secure unlock/reset flow. INTERNAL VERIFICATION REQUIRED"
      ]
    },
    "copyTemplates": [],
    "zendeskNote": "Error exact: [Something went wrong / Session expired / Contact carrier / Account locked / Set up \nPersonal Hotspot] \nLocation of error: [App / Web / iPhone settings / Android settings / Wi-Fi Calling / Hotspot] \nPlatform/device: [X] \nFlow attempted: [Login / payment / Wi-Fi Calling / hotspot / eSIM / plan change] \nSteps tried: App update, cache clear, web parity, VPN/Private Relay off, E911/APN/hotspot \nchecks \nInternal checks: Account lock, E911, Wi-Fi Calling feature, hotspot entitlement, platform/API \nstatus INTERNAL VERIFICATION REQUIRED \nResult: [Resolved / escalated]",
    "escalation": {
      "neededWhen": [
        "Account locked and verification/reset is required.",
        "App/web both fail on critical flow.",
        "“Contact carrier” persists after E911/feature checks.",
        "Hotspot allowance/APN is correct but hotspot remains blocked.",
        "Multiple users report same app/dashboard error."
      ],
      "evidenceNeeded": [
        "Account lock, E911, Wi-Fi Calling feature, hotspot entitlement,",
        "app/API outage, payment/login status.",
        "Batch 11 Agent Import Notes",
        "Create these as separate cards",
        "eSIM Hardware & Carrier Lock Errors",
        "eSIM Download & Activation Errors",
        "Messaging Routing Errors — Error 97 & Invalid Destination",
        "APN & Data Routing Errors",
        "Network Registration Errors — SOS / No Service",
        "Billing & Payment Decline Errors",
        "Porting Rejection Strings",
        "App, Dashboard & “Contact Carrier” Errors",
        "Suggested category mapping",
        "Error Dictionary",
        "All Batch 11 cards",
        "eSIM / SIM",
        "eSIM Hardware & Carrier Lock Errors",
        "eSIM Download & Activation Errors",
        "APN / Data",
        "APN & Data Routing Errors",
        "App, Dashboard & “Contact Carrier” Errors",
        "Messaging / Calls / Voicemail",
        "Messaging Routing Errors",
        "Network / Signal",
        "Network Registration Errors — SOS / No Service",
        "Plans / Billing",
        "Billing & Payment Decline Errors",
        "Port-In / Port-Out",
        "Porting Rejection Strings",
        "App / Dashboard",
        "App, Dashboard & “Contact Carrier” Errors",
        "Suggested pinned/common cards from Batch 11",
        "eSIM Download & Activation Errors",
        "APN & Data Routing Errors",
        "Network Registration Errors — SOS / No Service",
        "Messaging Routing Errors — Error 97 & Invalid Destination",
        "Billing & Payment Decline Errors",
        "App, Dashboard & “Contact Carrier” Errors",
        "UI rule",
        "Each Error Dictionary card should show this fast preview first:",
        "Exact error",
        "Usually means",
        "First question",
        "First action",
        "Escalate if",
        "Then full card opens with:",
        "Customer phrases / variants",
        "Likely causes",
        "Quick checks",
        "Step-by-step troubleshooting",
        "iPhone steps",
        "Android steps",
        "Copy-ready reply",
        "Zendesk note",
        "Escalation summary",
        "Related playbooks",
        "Source aliases",
        "Confidence",
        "Needs internal verification",
        "Search-index rule for agent",
        "Index these fields heavily:",
        "Exact error string",
        "Error variants",
        "Customer phrases",
        "Device type",
        "Network",
        "Related playbooks",
        "Category",
        "First action",
        "Examples:",
        "Search “PDP” → APN & Data Routing Errors",
        "Search “incorrect_zip” → Billing & Payment Decline Errors",
        "Search “SIM not supported” → eSIM Hardware & Carrier Lock Errors",
        "Search “QR no longer valid” → eSIM Download & Activation Errors",
        "Search “Error 97” → Messaging Routing Errors",
        "Search “SOS only” → Network Registration Errors",
        "Search “Contact carrier” → App, Dashboard & Feature Errors",
        "Merge notes for later",
        "Batch 11 should not replace deep troubleshooting cards. It should become the fast error",
        "lookup layer.",
        "Each error card should link to deeper cards:",
        "eSIM errors → Batch 3 / Batch 7",
        "APN errors → Batch 2",
        "Messaging errors → Batch 4",
        "Porting errors → Batch 5",
        "Billing errors → Batch 9",
        "App/dashboard errors → Batch 10",
        "Roaming-related errors → Batch 8",
        "Safety rule for agent",
        "For exact error messages:",
        "Do not say an error “strictly means” one cause unless account/device facts confirm it.",
        "Always ask for the exact error text and where it appears.",
        "Do not reissue eSIMs, unlock accounts, refresh provisioning, apply refunds, clear",
        "payment locks, or resubmit ports without internal verification.",
        "Do not expose full IMEI, EID, ICCID, card details, account numbers, transfer PINs, or",
        "payment data in visible notes.",
        "Mark backend/account actions as INTERNAL VERIFICATION REQUIRED."
      ],
      "summaryTemplate": "App/dashboard/feature error. Exact error: [X]. Location: [app/web/settings]. Device/OS: [X]. \nFlow: [X]. Cache/web parity tested: [X]. Feature checks: E911/hotspot/APN/account lock [X]. \nRequesting platform/feature provisioning review. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Account locked and verification/reset is required.",
      "App/web both fail on critical flow.",
      "“Contact carrier” persists after E911/feature checks.",
      "Hotspot allowance/APN is correct but hotspot remains blocked.",
      "Multiple users report same app/dashboard error."
    ],
    "escalationFormat": [
      "App/dashboard/feature error. Exact error: [X]. Location: [app/web/settings]. Device/OS: [X]. ",
      "Flow: [X]. Cache/web parity tested: [X]. Feature checks: E911/hotspot/APN/account lock [X]. ",
      "Requesting platform/feature provisioning review. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "app-dashboard-bug-troubleshooting",
      "wi-fi-calling-e911-setup",
      "hotspot-not-working-hotspot-apn",
      "payment-errors",
      "esim-install-qr-code-failures"
    ],
    "sourceAliases": [
      "X9",
      "X8",
      "X4",
      "X1"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Account lock, E911, Wi-Fi Calling feature, hotspot entitlement,",
      "app/API outage, payment/login status.",
      "Batch 11 Agent Import Notes",
      "Create these as separate cards",
      "eSIM Hardware & Carrier Lock Errors",
      "eSIM Download & Activation Errors",
      "Messaging Routing Errors — Error 97 & Invalid Destination",
      "APN & Data Routing Errors",
      "Network Registration Errors — SOS / No Service",
      "Billing & Payment Decline Errors",
      "Porting Rejection Strings",
      "App, Dashboard & “Contact Carrier” Errors",
      "Suggested category mapping",
      "Error Dictionary",
      "All Batch 11 cards",
      "eSIM / SIM",
      "eSIM Hardware & Carrier Lock Errors",
      "eSIM Download & Activation Errors",
      "APN / Data",
      "APN & Data Routing Errors",
      "App, Dashboard & “Contact Carrier” Errors",
      "Messaging / Calls / Voicemail",
      "Messaging Routing Errors",
      "Network / Signal",
      "Network Registration Errors — SOS / No Service",
      "Plans / Billing",
      "Billing & Payment Decline Errors",
      "Port-In / Port-Out",
      "Porting Rejection Strings",
      "App / Dashboard",
      "App, Dashboard & “Contact Carrier” Errors",
      "Suggested pinned/common cards from Batch 11",
      "eSIM Download & Activation Errors",
      "APN & Data Routing Errors",
      "Network Registration Errors — SOS / No Service",
      "Messaging Routing Errors — Error 97 & Invalid Destination",
      "Billing & Payment Decline Errors",
      "App, Dashboard & “Contact Carrier” Errors",
      "UI rule",
      "Each Error Dictionary card should show this fast preview first:",
      "Exact error",
      "Usually means",
      "First question",
      "First action",
      "Escalate if",
      "Then full card opens with:",
      "Customer phrases / variants",
      "Likely causes",
      "Quick checks",
      "Step-by-step troubleshooting",
      "iPhone steps",
      "Android steps",
      "Copy-ready reply",
      "Zendesk note",
      "Escalation summary",
      "Related playbooks",
      "Source aliases",
      "Confidence",
      "Needs internal verification",
      "Search-index rule for agent",
      "Index these fields heavily:",
      "Exact error string",
      "Error variants",
      "Customer phrases",
      "Device type",
      "Network",
      "Related playbooks",
      "Category",
      "First action",
      "Examples:",
      "Search “PDP” → APN & Data Routing Errors",
      "Search “incorrect_zip” → Billing & Payment Decline Errors",
      "Search “SIM not supported” → eSIM Hardware & Carrier Lock Errors",
      "Search “QR no longer valid” → eSIM Download & Activation Errors",
      "Search “Error 97” → Messaging Routing Errors",
      "Search “SOS only” → Network Registration Errors",
      "Search “Contact carrier” → App, Dashboard & Feature Errors",
      "Merge notes for later",
      "Batch 11 should not replace deep troubleshooting cards. It should become the fast error",
      "lookup layer.",
      "Each error card should link to deeper cards:",
      "eSIM errors → Batch 3 / Batch 7",
      "APN errors → Batch 2",
      "Messaging errors → Batch 4",
      "Porting errors → Batch 5",
      "Billing errors → Batch 9",
      "App/dashboard errors → Batch 10",
      "Roaming-related errors → Batch 8",
      "Safety rule for agent",
      "For exact error messages:",
      "Do not say an error “strictly means” one cause unless account/device facts confirm it.",
      "Always ask for the exact error text and where it appears.",
      "Do not reissue eSIMs, unlock accounts, refresh provisioning, apply refunds, clear",
      "payment locks, or resubmit ports without internal verification.",
      "Do not expose full IMEI, EID, ICCID, card details, account numbers, transfer PINs, or",
      "payment data in visible notes.",
      "Mark backend/account actions as INTERNAL VERIFICATION REQUIRED."
    ],
    "batch": "Batch 11",
    "aliases": [
      "something went wrong",
      "session expired",
      "try again later",
      "contact carrier",
      "account locked",
      "set up",
      "personal hotspot",
      "personal hotspot missing",
      "wi-fi calling contact carrier",
      "dashboard error",
      "app",
      "screen error"
    ],
    "symptoms": [
      "something went wrong",
      "session expired",
      "try again later",
      "contact carrier",
      "account locked",
      "set up",
      "personal hotspot",
      "personal hotspot missing",
      "wi-fi calling contact carrier",
      "dashboard error",
      "app",
      "screen error"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X9, X8, X4, X1"
  },
  {
    "id": "zendesk-ticket-statuses-sla-discipline",
    "title": "Zendesk Ticket Statuses & SLA Discipline",
    "category": "zendesk-ops",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "zendesk-ops",
      "batch12"
    ],
    "keywords": [
      "zendesk",
      "ticket",
      "statuses",
      "sla",
      "discipline",
      "zendesk-ops"
    ],
    "customerPhrases": [
      "zendesk statuses",
      "new",
      "open",
      "pending",
      "on-hold",
      "solved",
      "when to use pending",
      "when to use",
      "on-hold",
      "sla discipline",
      "first reply time",
      "next reply time",
      "ticket cleanup"
    ],
    "preview": {
      "problem": "Agent workflow / SLA management / ticket hygiene / waiting-state handling",
      "firstQuestion": "Am I waiting for the customer to send information or test something?",
      "firstAction": "New ticket arrives. Read full customer message first.",
      "escalateIf": "Ticket is near an SLA breach and requires urgent ownership."
    },
    "quickAnswer": "Agent workflow / SLA management / ticket hygiene / waiting-state handling",
    "useWhen": "Use when customer reports: Zendesk statuses, New, Open, Pending, On-hold, Solved, when to use Pending, when to use",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Am I waiting for the customer to send information or test something?",
      "Am I waiting for an internal team, network partner, billing, fraud, or engineering?",
      "Has the customer’s issue actually been resolved or only explained?"
    ],
    "quickChecks": [
      "If waiting for customer info, use Pending if configured.",
      "If waiting for internal/vendor action, use On-hold if configured.",
      "If actively working or customer is waiting on agent reply, use Open.",
      "Solve only after the issue is resolved or the customer’s question is fully answered.",
      "Before solving, check public reply, internal note, fields, tags, and escalation state."
    ],
    "quickSteps": [
      "If waiting for customer info, use Pending if configured.",
      "If waiting for internal/vendor action, use On-hold if configured.",
      "If actively working or customer is waiting on agent reply, use Open.",
      "Solve only after the issue is resolved or the customer’s question is fully answered.",
      "Before solving, check public reply, internal note, fields, tags, and escalation state."
    ],
    "steps": [
      "New ticket arrives. Read full customer message first.",
      "Send a useful first reply quickly:",
      "Acknowledge issue.",
      "Ask minimum needed question.",
      "Give first safe action if possible.",
      "If asking customer for information or testing:",
      "Status recommendation: Pending.",
      "Add clear customer-facing ask.",
      "Add internal note if needed.",
      "If escalating or waiting for internal/backend/vendor action:",
      "Status recommendation: On-hold if configured.",
      "Send public reply setting expectation.",
      "Add internal note with escalation summary.",
      "If issue is resolved:",
      "Confirm all customer questions were answered.",
      "Confirm no promised follow-up remains.",
      "Confirm fields/tags/notes are clean.",
      "Status recommendation: Solved.",
      "If the customer replies after solve, re-open and continue.",
      "Copy-ready customer reply — waiting for customer:",
      "I’ll wait for that detail so I can check the right path and avoid repeating steps you already tried.",
      "Once you send it over, I’ll continue from there.",
      "Copy-ready customer reply — waiting for internal team:",
      "I’ve escalated this with the details we tested already. I’m keeping the case open while we wait",
      "for the internal review, and I’ll update you as soon as there’s movement.",
      "Copy-ready customer reply — solved confirmation:",
      "I’m glad we got this sorted. I’ll mark this as resolved for now, but if the same issue comes back,",
      "reply here and we can reopen the case."
    ],
    "deviceSpecificSteps": {
      "general": [
        "New ticket arrives. Read full customer message first.",
        "Send a useful first reply quickly:",
        "Acknowledge issue.",
        "Ask minimum needed question.",
        "Give first safe action if possible.",
        "If asking customer for information or testing:",
        "Status recommendation: Pending.",
        "Add clear customer-facing ask.",
        "Add internal note if needed.",
        "If escalating or waiting for internal/backend/vendor action:",
        "Status recommendation: On-hold if configured.",
        "Send public reply setting expectation.",
        "Add internal note with escalation summary.",
        "If issue is resolved:",
        "Confirm all customer questions were answered.",
        "Confirm no promised follow-up remains.",
        "Confirm fields/tags/notes are clean.",
        "Status recommendation: Solved.",
        "If the customer replies after solve, re-open and continue.",
        "Copy-ready customer reply — waiting for customer:",
        "I’ll wait for that detail so I can check the right path and avoid repeating steps you already tried.",
        "Once you send it over, I’ll continue from there.",
        "Copy-ready customer reply — waiting for internal team:",
        "I’ve escalated this with the details we tested already. I’m keeping the case open while we wait",
        "for the internal review, and I’ll update you as soon as there’s movement.",
        "Copy-ready customer reply — solved confirmation:",
        "I’m glad we got this sorted. I’ll mark this as resolved for now, but if the same issue comes back,",
        "reply here and we can reopen the case."
      ]
    },
    "copyTemplates": [],
    "zendeskNote": "Issue: Zendesk status / SLA workflow \nCurrent state: [New / Open / Pending / On-hold / Solved] \nReason for status: [Waiting for customer / waiting internal / resolved / active work] \nCustomer ask sent: [Yes/No] \nInternal action needed: [Yes/No] \nFollow-up needed: [Yes/No] \nNext action: [Await customer / await internal update / solve / continue troubleshooting]",
    "escalation": {
      "neededWhen": [
        "Ticket is near an SLA breach and requires urgent ownership.",
        "Customer has no service, safety, fraud, porting, billing, or escalation-sensitive issue.",
        "The ticket is stuck between teams without clear owner.",
        "The status does not reflect the actual waiting state."
      ],
      "evidenceNeeded": [
        "Actual Zendesk status setup, SLA rules, automations, group",
        "ownership, vendor/internal waiting state."
      ],
      "summaryTemplate": "SLA/workflow risk. Ticket: [ID]. Current status: [X]. Customer impact: [X]. Waiting on: \n[customer/internal/vendor/unknown]. Last public reply: [time]. Required action: [owner update / \nescalation / status correction]. INTERNAL VERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Ticket is near an SLA breach and requires urgent ownership.",
      "Customer has no service, safety, fraud, porting, billing, or escalation-sensitive issue.",
      "The ticket is stuck between teams without clear owner.",
      "The status does not reflect the actual waiting state."
    ],
    "escalationFormat": [
      "SLA/workflow risk. Ticket: [ID]. Current status: [X]. Customer impact: [X]. Waiting on: ",
      "[customer/internal/vendor/unknown]. Last public reply: [time]. Required action: [owner update / ",
      "escalation / status correction]. INTERNAL VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "internal-notes-escalation-format",
      "customer-update-while-escalated",
      "pattern-tracking-known-issue-logging"
    ],
    "sourceAliases": [
      "P9",
      "P7",
      "P6"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Actual Zendesk status setup, SLA rules, automations, group",
      "ownership, vendor/internal waiting state."
    ],
    "batch": "Batch 12",
    "aliases": [
      "zendesk statuses",
      "new",
      "open",
      "pending",
      "on-hold",
      "solved",
      "when to use pending",
      "when to use",
      "on-hold",
      "sla discipline",
      "first reply time",
      "next reply time",
      "ticket cleanup"
    ],
    "symptoms": [
      "zendesk statuses",
      "new",
      "open",
      "pending",
      "on-hold",
      "solved",
      "when to use pending",
      "when to use",
      "on-hold",
      "sla discipline",
      "first reply time",
      "next reply time",
      "ticket cleanup"
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "P9, P7, P6"
  },
  {
    "id": "internal-notes-escalations-severity",
    "title": "Internal Notes, Escalations & Severity",
    "category": "escalations",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "escalations",
      "batch12"
    ],
    "keywords": [
      "internal",
      "notes",
      "escalations",
      "severity"
    ],
    "customerPhrases": [
      "internal note",
      "public reply vs internal note",
      "escalation note",
      "escalation format",
      "severity",
      "priority",
      "evidence requirements",
      "tier 2 handoff",
      "engineering handoff",
      "network escalation"
    ],
    "preview": {
      "problem": "Escalation quality / internal documentation / severity classification / evidence gap / backend",
      "firstQuestion": "Have frontline steps been completed and documented?",
      "firstAction": "",
      "escalateIf": "Frontline steps fail and backend/account action is required."
    },
    "quickAnswer": "Escalation quality / internal documentation / severity classification / evidence gap / backend \nhandoff",
    "useWhen": "Use when customer reports: internal note, public reply vs internal note, escalation note, escalation format, severity, priority,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Have frontline steps been completed and documented?",
      "Do I have exact evidence, not just a general complaint?",
      "What specific backend/internal action am I asking for?",
      "Quick checks before escalation:",
      "Confirm network: Warp, Dark Star, Light Speed, or unknown.",
      "Confirm device/OS.",
      "Confirm SIM type: eSIM or physical SIM.",
      "Confirm trigger: activation, port, Teleport, renewal, device change, travel, sudden.",
      "Confirm exact symptom and exact error.",
      "Confirm steps tried and results.",
      "Confirm customer impact.",
      "Confirm requested action.",
      "Severity guide — use only if this matches actual internal setup:",
      "Critical / P0: Large-scale outage, core platform issue, safety-impacting mass failure.",
      "Urgent / P1: Individual severe impact such as total no service with urgent need,",
      "suspected fraud, safety risk, stuck port with high risk.",
      "High / P2: Major partial loss such as no SMS/OTP, no data after full triage, port stuck",
      "beyond expected path.",
      "Normal / P3: Individual issue with workaround or standard escalation.",
      "Low / P4: Cosmetic, informational, non-urgent request.",
      "Step-by-step escalation workflow:",
      "Finish documented Level 1 checks.",
      "Write a clear public reply first if the customer is waiting.",
      "Switch to internal note before adding backend details.",
      "Use structured internal note:",
      "Issue",
      "Network",
      "Device/OS",
      "SIM/eSIM",
      "Trigger",
      "Symptoms",
      "Steps tried",
      "Results",
      "Evidence",
      "Suspected cause",
      "Requested action",
      "Escalate to the correct group only after evidence is complete.",
      "Set ticket status based on waiting state:",
      "Pending if waiting for customer.",
      "On-hold if waiting for internal/vendor team and configured.",
      "Follow up with customer when escalation updates.",
      "Copy-ready customer reply — escalation:",
      "We’ve ruled out the basic device and settings causes, so this now needs an internal",
      "provisioning/network review. I’m escalating it with the exact steps already tested so you don’t",
      "have to repeat the same troubleshooting again.",
      "Copy-ready customer reply — no exact ETA:",
      "I can’t promise an exact repair time from here, but I’ve documented the issue and sent it to the",
      "right team with the evidence they need. I’ll update you as soon as they respond.",
      "Zendesk internal note template:",
      "Issue: [Customer symptom]",
      "Network: [Warp / Dark Star / Light Speed / Unknown]",
      "Device/OS: [Device + OS]",
      "SIM/eSIM: [eSIM / pSIM]",
      "Trigger: [Activation / Port / Teleport / Renewal / Device change / Travel / Sudden]",
      "Symptoms: [Exact behavior and scope]",
      "Error: [Exact error message]",
      "Location/time: [ZIP/general area + timestamps if relevant]",
      "Steps tried: [Step 1/result, Step 2/result, Step 3/result]",
      "Evidence: [Screenshots/logs/speed tests/call examples if available]",
      "Suspected cause: [Provisioning / routing / APN / eSIM profile / porting / billing / app bug /",
      "unknown]",
      "Customer impact: [No service / no OTP / no data / travel / billing / safety]",
      "Requested action: [Exact backend/internal review needed]"
    ],
    "quickChecks": [],
    "quickSteps": [],
    "steps": [],
    "deviceSpecificSteps": {},
    "copyTemplates": [],
    "zendeskNote": "",
    "escalation": {
      "neededWhen": [
        "Frontline steps fail and backend/account action is required.",
        "Port/eSIM/Teleport/provisioning is stuck.",
        "Customer has no service after account/device checks pass.",
        "SMS/OTP, fraud, billing, or safety impact is high.",
        "Multiple similar cases suggest a pattern."
      ],
      "evidenceNeeded": [
        "Severity taxonomy, actual escalation groups, ticket routing,",
        "backend actions, incident ownership."
      ],
      "summaryTemplate": "[Priority] — [Feature/network] — [Symptom]. Customer on [network] using [device/OS], \n[eSIM/pSIM]. Trigger: [X]. Exact error/symptom: [X]. Steps completed: [X]. Evidence: [X]. \nSuspected cause: [X]. Requested action: [specific review/rebuild/trace/check]. INTERNAL \nVERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Frontline steps fail and backend/account action is required.",
      "Port/eSIM/Teleport/provisioning is stuck.",
      "Customer has no service after account/device checks pass.",
      "SMS/OTP, fraud, billing, or safety impact is high.",
      "Multiple similar cases suggest a pattern."
    ],
    "escalationFormat": [
      "[Priority] — [Feature/network] — [Symptom]. Customer on [network] using [device/OS], ",
      "[eSIM/pSIM]. Trigger: [X]. Exact error/symptom: [X]. Steps completed: [X]. Evidence: [X]. ",
      "Suspected cause: [X]. Requested action: [specific review/rebuild/trace/check]. INTERNAL ",
      "VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "zendesk-statuses",
      "pattern-tracking-known-issue-logging",
      "urgent-no-service-safety-fraud",
      "customer-update",
      "while-escalated"
    ],
    "sourceAliases": [
      "P7",
      "P9",
      "P3"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Severity taxonomy, actual escalation groups, ticket routing,",
      "backend actions, incident ownership."
    ],
    "batch": "Batch 12",
    "aliases": [
      "internal note",
      "public reply vs internal note",
      "escalation note",
      "escalation format",
      "severity",
      "priority",
      "evidence requirements",
      "tier 2 handoff",
      "engineering handoff",
      "network escalation"
    ],
    "symptoms": [
      "internal note",
      "public reply vs internal note",
      "escalation note",
      "escalation format",
      "severity",
      "priority",
      "evidence requirements",
      "tier 2 handoff",
      "engineering handoff",
      "network escalation"
    ],
    "intent": [
      "Ask Customer",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "P7, P9, P3"
  },
  {
    "id": "macro-usage-reply-templates",
    "title": "Macro Usage & Reply Templates",
    "category": "zendesk-ops",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "zendesk-ops",
      "batch12"
    ],
    "keywords": [
      "macro",
      "usage",
      "reply",
      "templates",
      "zendesk-ops"
    ],
    "customerPhrases": [
      "macro usage",
      "reply template",
      "humanize macro",
      "what not to say",
      "what not to promise",
      "customer",
      "angry",
      "de-escalation",
      "robotic reply",
      "copy-ready reply"
    ],
    "preview": {
      "problem": "Customer communication / tone control / macro hygiene / safe-language discipline",
      "firstQuestion": "Did I name the customer’s actual pain point?",
      "firstAction": "",
      "escalateIf": "Customer requests supervisor/manager."
    },
    "quickAnswer": "Customer communication / tone control / macro hygiene / safe-language discipline",
    "useWhen": "Use when customer reports: macro usage, reply template, humanize macro, what not to say, what not to promise, customer",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Did I name the customer’s actual pain point?",
      "Did I remove generic filler?",
      "Am I promising anything I cannot verify?"
    ],
    "quickChecks": [
      "Personalize the first sentence.",
      "Keep the reply short and action-first.",
      "Ask only the next needed question, not a huge checklist.",
      "Separate public reply from internal note.",
      "Use safe language for refunds, credits, ETAs, backend actions, outages, and",
      "escalations.",
      "Step-by-step macro handling:",
      "Pick the closest macro/template.",
      "Remove robotic generic opening.",
      "Add one specific empathy/ownership sentence.",
      "Keep only the steps relevant to this customer’s issue.",
      "Remove unsupported promises:",
      "“Guaranteed”",
      "“Definitely fixed”",
      "“Refund approved”",
      "“Outage confirmed”",
      "“Will be restored in one hour”",
      "Add one clear next action.",
      "Add one direct question if needed.",
      "Check tone:",
      "Angry customer: calm, serious, no cheerful punctuation.",
      "Confused customer: simple, step-by-step.",
      "Technical customer: precise and concise.",
      "Check Zendesk fields/status before sending.",
      "Bad macro style:",
      "We apologize for the inconvenience. Please restart your phone and let us know if the issue",
      "persists.",
      "Better macro style:",
      "I understand the line is showing SOS, so I don’t want to waste your time with random steps.",
      "Please turn Airplane Mode ON for 30 seconds and OFF again while I check the line status and",
      "activation state on my end.",
      "Copy-ready customer reply — angry customer:",
      "I understand why this is frustrating, especially since you’ve already tried basic troubleshooting. I",
      "won’t repeat the same steps without a reason. I’m going to check the line status first, then we’ll",
      "only test the next step that actually narrows this down.",
      "Copy-ready customer reply — escalation:",
      "This needs an internal review now. I’ve documented the device, network, exact error, and the",
      "steps already tested, so the next team has a complete handoff instead of starting over.",
      "Copy-ready customer reply — billing safe:",
      "I can review this for you, but I don’t want to promise a credit or refund before checking the",
      "account details. I’ll verify the charge, usage, and policy first, then give you the correct path."
    ],
    "quickSteps": [
      "Personalize the first sentence.",
      "Keep the reply short and action-first.",
      "Ask only the next needed question, not a huge checklist.",
      "Separate public reply from internal note.",
      "Use safe language for refunds, credits, ETAs, backend actions, outages, and",
      "escalations.",
      "Step-by-step macro handling:",
      "Pick the closest macro/template.",
      "Remove robotic generic opening.",
      "Add one specific empathy/ownership sentence.",
      "Keep only the steps relevant to this customer’s issue.",
      "Remove unsupported promises:",
      "“Guaranteed”",
      "“Definitely fixed”",
      "“Refund approved”",
      "“Outage confirmed”",
      "“Will be restored in one hour”",
      "Add one clear next action.",
      "Add one direct question if needed.",
      "Check tone:",
      "Angry customer: calm, serious, no cheerful punctuation.",
      "Confused customer: simple, step-by-step.",
      "Technical customer: precise and concise.",
      "Check Zendesk fields/status before sending.",
      "Bad macro style:",
      "We apologize for the inconvenience. Please restart your phone and let us know if the issue",
      "persists.",
      "Better macro style:",
      "I understand the line is showing SOS, so I don’t want to waste your time with random steps.",
      "Please turn Airplane Mode ON for 30 seconds and OFF again while I check the line status and",
      "activation state on my end.",
      "Copy-ready customer reply — angry customer:",
      "I understand why this is frustrating, especially since you’ve already tried basic troubleshooting. I",
      "won’t repeat the same steps without a reason. I’m going to check the line status first, then we’ll",
      "only test the next step that actually narrows this down.",
      "Copy-ready customer reply — escalation:",
      "This needs an internal review now. I’ve documented the device, network, exact error, and the",
      "steps already tested, so the next team has a complete handoff instead of starting over.",
      "Copy-ready customer reply — billing safe:",
      "I can review this for you, but I don’t want to promise a credit or refund before checking the",
      "account details. I’ll verify the charge, usage, and policy first, then give you the correct path."
    ],
    "steps": [],
    "deviceSpecificSteps": {},
    "copyTemplates": [],
    "zendeskNote": "Issue: Macro/template used \nTemplate: [Name/type] \nCustomization added: [Pain point acknowledged / customer-specific step / safe language] \nUnsupported promises removed: [Yes/No] \nCustomer tone: [Calm / frustrated / urgent / abusive] \nStatus/tags checked: [Yes/No] \nNext action: [Customer testing / internal review / solved / escalated]",
    "escalation": {
      "neededWhen": [
        "Customer requests supervisor/manager.",
        "Customer is highly escalated due to repeated macro-like replies.",
        "Customer is abusive or threatening.",
        "Customer issue requires exception, credit, refund, or policy review.",
        "Customer has safety, fraud, or total no-service impact."
      ],
      "evidenceNeeded": [
        "Refund/credit/exception authority, supervisor routing, internal",
        "policy."
      ],
      "summaryTemplate": "Communication escalation / supervisor request. Customer is [frustrated/abusive/requesting \nsupervisor]. Issue: [X]. Steps already provided: [X]. Customer concern: [X]. Requested action: \nmanagement review / exception review / de-escalation support. INTERNAL VERIFICATION \nREQUIRED"
    },
    "escalationRequiredWhen": [
      "Customer requests supervisor/manager.",
      "Customer is highly escalated due to repeated macro-like replies.",
      "Customer is abusive or threatening.",
      "Customer issue requires exception, credit, refund, or policy review.",
      "Customer has safety, fraud, or total no-service impact."
    ],
    "escalationFormat": [
      "Communication escalation / supervisor request. Customer is [frustrated/abusive/requesting ",
      "supervisor]. Issue: [X]. Steps already provided: [X]. Customer concern: [X]. Requested action: ",
      "management review / exception review / de-escalation support. INTERNAL VERIFICATION ",
      "REQUIRED"
    ],
    "relatedPlaybooks": [
      "zendesk-statuses",
      "internal-notes-escalations",
      "refund-safe-language",
      "urgent-safetyfraud"
    ],
    "sourceAliases": [
      "P6",
      "P5",
      "X7"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Refund/credit/exception authority, supervisor routing, internal",
      "policy."
    ],
    "batch": "Batch 12",
    "aliases": [
      "macro usage",
      "reply template",
      "humanize macro",
      "what not to say",
      "what not to promise",
      "customer",
      "angry",
      "de-escalation",
      "robotic reply",
      "copy-ready reply"
    ],
    "symptoms": [
      "macro usage",
      "reply template",
      "humanize macro",
      "what not to say",
      "what not to promise",
      "customer",
      "angry",
      "de-escalation",
      "robotic reply",
      "copy-ready reply"
    ],
    "intent": [
      "Ask Customer",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "P6, P5, X7"
  },
  {
    "id": "pattern-tracking-known-issue-logging",
    "title": "Pattern Tracking & Known Issue Logging",
    "category": "zendesk-ops",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "zendesk-ops",
      "batch12"
    ],
    "keywords": [
      "pattern",
      "tracking",
      "known",
      "issue",
      "logging",
      "zendesk-ops"
    ],
    "customerPhrases": [
      "pattern tracking",
      "known issue",
      "repeated issue",
      "bug candidate",
      "outage",
      "tags",
      "fields",
      "views",
      "incident",
      "multiple customers",
      "same error",
      "same zip",
      "same device"
    ],
    "preview": {
      "problem": "Incident detection / bug candidate / repeated issue / support analytics / Zendesk tagging /",
      "firstQuestion": "Have I seen this exact symptom more than once recently?",
      "firstAction": "",
      "escalateIf": "Three or more similar independent cases appear in a short window."
    },
    "quickAnswer": "Incident detection / bug candidate / repeated issue / support analytics / Zendesk tagging / \nknown-issue discipline",
    "useWhen": "Use when customer reports: pattern tracking, known issue, repeated issue, bug candidate, outage, tags, fields, views,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Have I seen this exact symptom more than once recently?",
      "Do affected customers share network, device, OS, app version, location, trigger, or",
      "error?",
      "Is there official confirmation, or only early signal?",
      "Pattern confidence guide:",
      "One-off: One case only. Do not call it a pattern.",
      "Possible pattern: Two similar cases, or one case plus outside/internal signal. Monitor",
      "and tag.",
      "Repeated pattern: Three or more similar independent cases in a short window. Log and",
      "escalate if impact is meaningful.",
      "Bug candidate: Multiple cases with clear reproduction steps.",
      "Incident candidate: Sudden high volume of identical cases with shared",
      "network/feature/location/time.",
      "Step-by-step pattern logging:",
      "Capture the exact symptom wording.",
      "Capture shared dimensions:",
      "Network",
      "Feature",
      "Device",
      "OS/app version",
      "SIM/eSIM",
      "Trigger",
      "Error",
      "Location/ZIP if relevant",
      "Time window",
      "Tag/field the ticket consistently if Zendesk setup supports it.",
      "Add a short internal pattern note.",
      "Do not tell the customer “known issue” unless officially confirmed.",
      "If threshold is met, escalate as bug/pattern candidate.",
      "Keep a non-PII tracker with:",
      "Date",
      "Ticket ID",
      "Network",
      "Feature",
      "Device/OS",
      "Symptom",
      "Trigger",
      "Resolution/escalation status",
      "Confidence",
      "Copy-ready customer reply — not confirmed:",
      "I can’t confirm this as a widespread issue yet, but I’m checking your report against other live",
      "cases and our status sources. I’ll troubleshoot your line directly while we watch for any broader",
      "pattern.",
      "Copy-ready customer reply — confirmed internal issue:",
      "We’re aware of an issue affecting this service, and the team is already working on it. I’ll keep",
      "your ticket linked to the investigation and update you when there’s a confirmed fix or next step."
    ],
    "quickChecks": [],
    "quickSteps": [],
    "steps": [],
    "deviceSpecificSteps": {},
    "copyTemplates": [],
    "zendeskNote": "Pattern signal: [Possible / Repeated / Bug candidate / Incident candidate] \nFeature/network: [X] \nDevice/OS/app version: [X] \nSymptom: [Exact wording/error] \n\nTrigger: [Activation / port / Teleport / app update / renewal / sudden] \nCase count: [X] in [time window] \nShared factors: [Network/device/location/version/etc.] \nEvidence: [Ticket IDs/screenshots/repro steps/status source]",
    "escalation": {
      "neededWhen": [
        "Three or more similar independent cases appear in a short window.",
        "Five or more reproducible app/feature cases appear.",
        "Ten or more identical cases arrive quickly and suggest incident.",
        "Multiple customers in same ZIP/network report sudden SOS/no service.",
        "Billing/payment/login/activation flow breaks across app and web."
      ],
      "evidenceNeeded": [
        "Official known issue status, incident commander/NOC",
        "confirmation, Zendesk tag/field setup, bug/incident workflow."
      ],
      "summaryTemplate": "Pattern/bug candidate. Feature: [X]. Network: [X]. Platform/device: [X]. Exact symptom/error: \n[X]. Cases seen: [X] over [time]. Repro steps: [X]. Customer impact: [X]. Evidence: [ticket \nIDs/screenshots]. Confidence: [Low/Medium/High]. Requesting triage/confirmation. INTERNAL \nVERIFICATION REQUIRED"
    },
    "escalationRequiredWhen": [
      "Three or more similar independent cases appear in a short window.",
      "Five or more reproducible app/feature cases appear.",
      "Ten or more identical cases arrive quickly and suggest incident.",
      "Multiple customers in same ZIP/network report sudden SOS/no service.",
      "Billing/payment/login/activation flow breaks across app and web."
    ],
    "escalationFormat": [
      "Pattern/bug candidate. Feature: [X]. Network: [X]. Platform/device: [X]. Exact symptom/error: ",
      "[X]. Cases seen: [X] over [time]. Repro steps: [X]. Customer impact: [X]. Evidence: [ticket ",
      "IDs/screenshots]. Confidence: [Low/Medium/High]. Requesting triage/confirmation. INTERNAL ",
      "VERIFICATION REQUIRED"
    ],
    "relatedPlaybooks": [
      "known-issues",
      "app-dashboard-bugs",
      "urgent-no-service-rare-safety-fraud-cases",
      "internal-escalations"
    ],
    "sourceAliases": [
      "P8",
      "X10",
      "P9"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Official known issue status, incident commander/NOC",
      "confirmation, Zendesk tag/field setup, bug/incident workflow."
    ],
    "batch": "Batch 12",
    "aliases": [
      "pattern tracking",
      "known issue",
      "repeated issue",
      "bug candidate",
      "outage",
      "tags",
      "fields",
      "views",
      "incident",
      "multiple customers",
      "same error",
      "same zip",
      "same device"
    ],
    "symptoms": [
      "pattern tracking",
      "known issue",
      "repeated issue",
      "bug candidate",
      "outage",
      "tags",
      "fields",
      "views",
      "incident",
      "multiple customers",
      "same error",
      "same zip",
      "same device"
    ],
    "intent": [
      "Ask Customer",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "P8, X10, P9"
  },
  {
    "id": "urgent-no-service-rare-safety-fraud-cases",
    "title": "Urgent No-Service, Rare Safety & Fraud Cases",
    "category": "zendesk-ops",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "zendesk-ops",
      "batch12"
    ],
    "keywords": [
      "urgent",
      "service",
      "rare",
      "safety",
      "fraud",
      "cases",
      "zendesk-ops"
    ],
    "customerPhrases": [
      "urgent no service",
      "medical emergency",
      "i’m in danger",
      "no service emergency",
      "domestic violence",
      "privacy risk",
      "number stolen",
      "sim swap",
      "unauthorized port",
      "account takeover",
      "fraud",
      "can’t receive",
      "bank codes"
    ],
    "preview": {
      "problem": "Life safety / account takeover / unauthorized SIM swap / unauthorized port-out / urgent total",
      "firstQuestion": "Are you in immediate danger or do you need emergency help right now?",
      "firstAction": "",
      "escalateIf": ""
    },
    "quickAnswer": "Life safety / account takeover / unauthorized SIM swap / unauthorized port-out / urgent total \nservice loss / domestic violence or privacy-sensitive case",
    "useWhen": "Use when customer reports: urgent no service, medical emergency, I’m in danger, no service emergency, domestic violence,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are you in immediate danger or do you need emergency help right now?",
      "Did you lose service suddenly without making any changes?",
      "Did you receive any email, code, or alert about SIM/eSIM/port/account changes you did",
      "not request?"
    ],
    "quickChecks": [
      "If immediate danger, direct customer to emergency services from any available phone",
      "and nearby assistance.",
      "If suspected SIM swap/ATO, do not use SMS verification.",
      "Check recent SIM/eSIM/port/login/password changes. INTERNAL VERIFICATION",
      "REQUIRED",
      "Initiate approved account protection/freeze workflow if available. INTERNAL",
      "VERIFICATION REQUIRED",
      "Escalate to Security/Fraud/Leadership immediately when risk is credible. INTERNAL",
      "VERIFICATION REQUIRED",
      "Step-by-step safety flow:",
      "Stop normal troubleshooting if customer reports danger, medical emergency, domestic",
      "violence, or fraud.",
      "Ask if they are in immediate danger.",
      "If yes:",
      "Advise emergency services/local emergency number from any available phone.",
      "Ask them to seek nearby assistance if possible.",
      "Escalate internally as urgent safety case.",
      "If no immediate danger but no service:",
      "Check line status quickly.",
      "Prioritize restoring service or workaround.",
      "Escalate if standard restoration is not immediate.",
      "If fraud/SIM swap suspected:",
      "Do not verify by SMS.",
      "Use approved non-SMS verification.",
      "Check logs for recent SIM/eSIM/port/account changes.",
      "Freeze/hold sensitive actions if available.",
      "Escalate Fraud/Security.",
      "If domestic violence/privacy-sensitive:",
      "Ask for safe contact method.",
      "Avoid unnecessary notifications.",
      "Do not expose location/account details.",
      "Escalate to management/security workflow.",
      "Keep updates short, frequent, and calm.",
      "Copy-ready customer reply — immediate danger:",
      "If you or someone nearby is in immediate danger or needs urgent medical help, please try 911",
      "or the local emergency number from any available phone right now, and ask anyone nearby for",
      "assistance. I’m treating this as urgent on our side while you focus on safety.",
      "Copy-ready customer reply — suspected fraud/SIM swap:",
      "This could be a security issue, so I’m treating it urgently. Please stop relying on SMS codes for",
      "now and secure your email and financial accounts. I’m going to escalate this for immediate",
      "fraud review and avoid using SMS verification if the number may be compromised.",
      "Copy-ready customer reply — urgent no service:",
      "I understand this is urgent because you’re completely without service. I’m going to prioritize line",
      "status and provisioning checks first instead of walking you through a long checklist. Please",
      "confirm your device model and whether this started after any account or SIM change."
    ],
    "quickSteps": [
      "If immediate danger, direct customer to emergency services from any available phone",
      "and nearby assistance.",
      "If suspected SIM swap/ATO, do not use SMS verification.",
      "Check recent SIM/eSIM/port/login/password changes. INTERNAL VERIFICATION",
      "REQUIRED",
      "Initiate approved account protection/freeze workflow if available. INTERNAL",
      "VERIFICATION REQUIRED",
      "Escalate to Security/Fraud/Leadership immediately when risk is credible. INTERNAL",
      "VERIFICATION REQUIRED",
      "Step-by-step safety flow:",
      "Stop normal troubleshooting if customer reports danger, medical emergency, domestic",
      "violence, or fraud.",
      "Ask if they are in immediate danger.",
      "If yes:",
      "Advise emergency services/local emergency number from any available phone.",
      "Ask them to seek nearby assistance if possible.",
      "Escalate internally as urgent safety case.",
      "If no immediate danger but no service:",
      "Check line status quickly.",
      "Prioritize restoring service or workaround.",
      "Escalate if standard restoration is not immediate.",
      "If fraud/SIM swap suspected:",
      "Do not verify by SMS.",
      "Use approved non-SMS verification.",
      "Check logs for recent SIM/eSIM/port/account changes.",
      "Freeze/hold sensitive actions if available.",
      "Escalate Fraud/Security.",
      "If domestic violence/privacy-sensitive:",
      "Ask for safe contact method.",
      "Avoid unnecessary notifications.",
      "Do not expose location/account details.",
      "Escalate to management/security workflow.",
      "Keep updates short, frequent, and calm.",
      "Copy-ready customer reply — immediate danger:",
      "If you or someone nearby is in immediate danger or needs urgent medical help, please try 911",
      "or the local emergency number from any available phone right now, and ask anyone nearby for",
      "assistance. I’m treating this as urgent on our side while you focus on safety.",
      "Copy-ready customer reply — suspected fraud/SIM swap:",
      "This could be a security issue, so I’m treating it urgently. Please stop relying on SMS codes for",
      "now and secure your email and financial accounts. I’m going to escalate this for immediate",
      "fraud review and avoid using SMS verification if the number may be compromised.",
      "Copy-ready customer reply — urgent no service:",
      "I understand this is urgent because you’re completely without service. I’m going to prioritize line",
      "status and provisioning checks first instead of walking you through a long checklist. Please",
      "confirm your device model and whether this started after any account or SIM change."
    ],
    "steps": [],
    "deviceSpecificSteps": {},
    "copyTemplates": [],
    "zendeskNote": "URGENT SAFETY / FRAUD RISK \nCase type: [Immediate danger / medical / no service / SIM swap / unauthorized port / domestic \nviolence/privacy] \nCustomer report: [Exact statement] \nCurrent service state: [No service / SOS / unknown] \nVerification method: [Non-SMS / pending / failed] \nInternal checks: SIM/eSIM changes, port-out requests, login/password/security events, line \nstatus INTERNAL VERIFICATION REQUIRED \nActions taken: [Safety guidance / account protection / fraud escalation / leadership escalation] \nCustomer impact: [Safety / banking / 2FA / no service / privacy risk] \nNext action: [Security/Fraud/Leadership review / restore service / follow-up] \nEscalate immediately if: \n\n● Customer reports physical danger or medical emergency. \n● Customer reports domestic violence/privacy risk. \n● Customer reports unauthorized SIM swap, eSIM change, or port-out. \n● Customer suddenly loses service with account-change alerts. \n● Customer cannot pass SMS verification because number may be compromised. \n● Customer is stranded/traveling/isolated with no service and urgent impact. \nEscalation summary — safety: \nURGENT SAFETY. Customer reports [danger/medical/no service]. Location context: [if safely \nprovided]. Device/service state: [X]. Guidance given: emergency services/nearby assistance. \nInternal action requested: urgent service/leadership review. INTERNAL VERIFICATION \nREQUIRED \nEscalation summary — fraud: \nURGENT FRAUD / SIM SWAP / ATO. Customer reports [X]. Sudden service loss: [Yes/No]. \nUnauthorized alerts: [SIM/eSIM/port/login/password]. Verification: [non-SMS \ncompleted/pending]. Account protection requested/applied: [X]. Requesting immediate \nSecurity/Fraud review. INTERNAL VERIFICATION REQUIRED",
    "escalation": {
      "neededWhen": [],
      "evidenceNeeded": [
        "Account protection/freeze, SIM/eSIM/port logs, non-SMS",
        "verification, fraud escalation, leadership/safety protocol.",
        "Batch 12 Agent Import Notes",
        "Create these as separate cards",
        "Zendesk Ticket Statuses & SLA Discipline",
        "Internal Notes, Escalations & Severity",
        "Macro Usage & Reply Templates",
        "Pattern Tracking & Known Issue Logging",
        "Urgent No-Service, Rare Safety & Fraud Cases",
        "Suggested category mapping",
        "Zendesk Ops",
        "Zendesk Ticket Statuses & SLA Discipline",
        "Internal Notes, Escalations & Severity",
        "Macro Usage & Reply Templates",
        "Pattern Tracking & Known Issue Logging",
        "Urgent No-Service, Rare Safety & Fraud Cases",
        "Escalations",
        "Internal Notes, Escalations & Severity",
        "Pattern Tracking & Known Issue Logging",
        "Urgent No-Service, Rare Safety & Fraud Cases",
        "Reply Templates",
        "Macro Usage & Reply Templates",
        "Known Issues",
        "Pattern Tracking & Known Issue Logging",
        "Security / Fraud",
        "Urgent No-Service, Rare Safety & Fraud Cases",
        "Suggested pinned/common cards from Batch 12",
        "Internal Notes, Escalations & Severity",
        "Zendesk Ticket Statuses & SLA Discipline",
        "Macro Usage & Reply Templates",
        "Pattern Tracking & Known Issue Logging",
        "Urgent No-Service, Rare Safety & Fraud Cases",
        "UI rule",
        "These cards should show an agent-operation preview first:",
        "When to use",
        "First decision",
        "First action",
        "Status recommendation",
        "Escalate if",
        "Then full card opens with:",
        "Ask yourself first",
        "Quick checks",
        "Step-by-step workflow",
        "Copy-ready customer replies",
        "Zendesk internal note template",
        "Escalation summary",
        "Related playbooks",
        "Source aliases",
        "Confidence",
        "Needs internal verification",
        "Search-index rule for agent",
        "Index these phrases heavily:",
        "Pending",
        "On-hold",
        "Solved",
        "SLA",
        "Internal note",
        "Escalation summary",
        "Severity",
        "Macro",
        "Public reply",
        "Known issue",
        "Pattern",
        "Bug candidate",
        "Incident",
        "Safety",
        "Fraud",
        "SIM swap",
        "Unauthorized port",
        "Safety rule for agent",
        "For Zendesk ops and escalations:",
        "Never mix public replies with internal notes.",
        "Never expose backend assumptions, account details, fraud indicators, or internal system",
        "names to customers unless approved.",
        "Never escalate vague notes like “data broken.”",
        "Never call something a known issue or outage until officially confirmed.",
        "Never use SMS verification if SIM swap/account takeover is suspected.",
        "Never promise exact ETAs, refunds, credits, or backend fixes.",
        "Mark ticket routing, severity, incident status, account freeze, fraud review, backend",
        "actions, and vendor status as INTERNAL VERIFICATION REQUIRED.",
        "Merge notes for later",
        "Batch 12 is the operational layer for all previous troubleshooting batches.",
        "Every technical card should link to:",
        "Internal Notes & Escalations",
        "Zendesk Statuses",
        "Macro Usage",
        "Pattern Tracking should link to Known Issues.",
        "Urgent Safety/Fraud should link to Porting/Security and SOS/No Service cards."
      ],
      "summaryTemplate": ""
    },
    "escalationRequiredWhen": [],
    "escalationFormat": [],
    "relatedPlaybooks": [
      "sim-swap-fraud-concerns",
      "port-out-security",
      "sos-only-no-service-triage",
      "roaming-escalations-what-not-to-promise",
      "internal-notes-escalations-severity",
      "known-issues"
    ],
    "sourceAliases": [
      "X10",
      "P7",
      "X5",
      "P5"
    ],
    "confidence": "High",
    "internalVerificationRequired": [
      "Account protection/freeze, SIM/eSIM/port logs, non-SMS",
      "verification, fraud escalation, leadership/safety protocol.",
      "Batch 12 Agent Import Notes",
      "Create these as separate cards",
      "Zendesk Ticket Statuses & SLA Discipline",
      "Internal Notes, Escalations & Severity",
      "Macro Usage & Reply Templates",
      "Pattern Tracking & Known Issue Logging",
      "Urgent No-Service, Rare Safety & Fraud Cases",
      "Suggested category mapping",
      "Zendesk Ops",
      "Zendesk Ticket Statuses & SLA Discipline",
      "Internal Notes, Escalations & Severity",
      "Macro Usage & Reply Templates",
      "Pattern Tracking & Known Issue Logging",
      "Urgent No-Service, Rare Safety & Fraud Cases",
      "Escalations",
      "Internal Notes, Escalations & Severity",
      "Pattern Tracking & Known Issue Logging",
      "Urgent No-Service, Rare Safety & Fraud Cases",
      "Reply Templates",
      "Macro Usage & Reply Templates",
      "Known Issues",
      "Pattern Tracking & Known Issue Logging",
      "Security / Fraud",
      "Urgent No-Service, Rare Safety & Fraud Cases",
      "Suggested pinned/common cards from Batch 12",
      "Internal Notes, Escalations & Severity",
      "Zendesk Ticket Statuses & SLA Discipline",
      "Macro Usage & Reply Templates",
      "Pattern Tracking & Known Issue Logging",
      "Urgent No-Service, Rare Safety & Fraud Cases",
      "UI rule",
      "These cards should show an agent-operation preview first:",
      "When to use",
      "First decision",
      "First action",
      "Status recommendation",
      "Escalate if",
      "Then full card opens with:",
      "Ask yourself first",
      "Quick checks",
      "Step-by-step workflow",
      "Copy-ready customer replies",
      "Zendesk internal note template",
      "Escalation summary",
      "Related playbooks",
      "Source aliases",
      "Confidence",
      "Needs internal verification",
      "Search-index rule for agent",
      "Index these phrases heavily:",
      "Pending",
      "On-hold",
      "Solved",
      "SLA",
      "Internal note",
      "Escalation summary",
      "Severity",
      "Macro",
      "Public reply",
      "Known issue",
      "Pattern",
      "Bug candidate",
      "Incident",
      "Safety",
      "Fraud",
      "SIM swap",
      "Unauthorized port",
      "Safety rule for agent",
      "For Zendesk ops and escalations:",
      "Never mix public replies with internal notes.",
      "Never expose backend assumptions, account details, fraud indicators, or internal system",
      "names to customers unless approved.",
      "Never escalate vague notes like “data broken.”",
      "Never call something a known issue or outage until officially confirmed.",
      "Never use SMS verification if SIM swap/account takeover is suspected.",
      "Never promise exact ETAs, refunds, credits, or backend fixes.",
      "Mark ticket routing, severity, incident status, account freeze, fraud review, backend",
      "actions, and vendor status as INTERNAL VERIFICATION REQUIRED.",
      "Merge notes for later",
      "Batch 12 is the operational layer for all previous troubleshooting batches.",
      "Every technical card should link to:",
      "Internal Notes & Escalations",
      "Zendesk Statuses",
      "Macro Usage",
      "Pattern Tracking should link to Known Issues.",
      "Urgent Safety/Fraud should link to Porting/Security and SOS/No Service cards."
    ],
    "batch": "Batch 12",
    "aliases": [
      "urgent no service",
      "medical emergency",
      "i’m in danger",
      "no service emergency",
      "domestic violence",
      "privacy risk",
      "number stolen",
      "sim swap",
      "unauthorized port",
      "account takeover",
      "fraud",
      "can’t receive",
      "bank codes"
    ],
    "symptoms": [
      "urgent no service",
      "medical emergency",
      "i’m in danger",
      "no service emergency",
      "domestic violence",
      "privacy risk",
      "number stolen",
      "sim swap",
      "unauthorized port",
      "account takeover",
      "fraud",
      "can’t receive",
      "bank codes"
    ],
    "intent": [
      "Ask Customer",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "X10, P7, X5, P5"
  },
  {
    "id": "no-service-sos-only",
    "title": "No Service & SOS Only",
    "category": "network-signal",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "network-signal",
      "batch13"
    ],
    "keywords": [
      "service",
      "sos",
      "only",
      "network-signal"
    ],
    "customerPhrases": [
      "no service",
      "sos only",
      "searching",
      "emergency calls only",
      "not registered on network",
      "no bars",
      "phone has no signal."
    ],
    "preview": {
      "problem": "The phone is not registering normally on the network. The trigger matters most: activation, port,",
      "firstQuestion": "Did this start suddenly, or right after activation, port-in, Teleport, plan renewal, or a device/eSIM",
      "firstAction": "Ask the customer to turn Airplane Mode ON for 30 seconds, then OFF, while checking line",
      "escalateIf": "Account is active, device is unlocked/compatible, activation/port/Teleport is clear, reset steps are"
    },
    "quickAnswer": "The phone is not registering normally on the network. The trigger matters most: activation, port, \nTeleport, billing/renewal, device change, deleted eSIM, coverage, outage, or device lock.",
    "useWhen": "Use when customer reports: No service, SOS only, Searching, Emergency calls only, not registered on network, no bars,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Did this start suddenly, or right after activation, port-in, Teleport, plan renewal, or a device/eSIM",
      "change?"
    ],
    "quickChecks": [
      "Account/line active? INTERNAL VERIFICATION REQUIRED",
      "Billing/renewal issue? INTERNAL VERIFICATION REQUIRED",
      "Activation/port/Teleport complete? INTERNAL VERIFICATION REQUIRED",
      "SIM/eSIM installed and enabled?",
      "Device unlocked and compatible?",
      "Coverage/local issue? INTERNAL VERIFICATION REQUIRED"
    ],
    "quickSteps": [
      "Account/line active? INTERNAL VERIFICATION REQUIRED",
      "Billing/renewal issue? INTERNAL VERIFICATION REQUIRED",
      "Activation/port/Teleport complete? INTERNAL VERIFICATION REQUIRED",
      "SIM/eSIM installed and enabled?",
      "Device unlocked and compatible?",
      "Coverage/local issue? INTERNAL VERIFICATION REQUIRED"
    ],
    "steps": [
      "Ask the customer to turn Airplane Mode ON for 30 seconds, then OFF, while checking line",
      "status internally."
    ],
    "deviceSpecificSteps": {
      "general": [
        "Ask the customer to turn Airplane Mode ON for 30 seconds, then OFF, while checking line",
        "status internally."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "I know seeing SOS/No Service is stressful. Let’s first force a clean reconnection. Please turn \nAirplane Mode ON for 30 seconds, then OFF, and restart the phone if it still stays on SOS. While \nyou do that, I’ll check whether the line is active and whether anything is stuck from activation, \nporting, renewal, or a network switch."
      }
    ],
    "zendeskNote": "Issue: SOS / No Service \nNetwork: [Warp / Dark Star / Light Speed / Unknown] \nDevice/OS: [X] \nSIM/eSIM: [eSIM / pSIM] \nTrigger: [Activation / Port / Teleport / Renewal / Device change / Sudden] \nLocation: [ZIP/general area] \nSteps tried: Airplane Mode, reboot, SIM/eSIM enabled, Network Selection Auto \nInternal checks: Account active, billing, activation/port/Teleport status, local issue INTERNAL \nVERIFICATION REQUIRED \nNext action: Route to deep SOS/No Service playbook or escalate if registration still fails",
    "escalation": {
      "neededWhen": [
        "Account is active, device is unlocked/compatible, activation/port/Teleport is clear, reset steps are",
        "done, and SOS/No Service persists."
      ],
      "evidenceNeeded": [],
      "summaryTemplate": ""
    },
    "escalationRequiredWhen": [
      "Account is active, device is unlocked/compatible, activation/port/Teleport is clear, reset steps are",
      "done, and SOS/No Service persists."
    ],
    "escalationFormat": [],
    "relatedPlaybooks": [
      "sos-only-no-service-triage",
      "batch-11-network-registration-errors",
      "batch-5-port-in-delays",
      "batch-10-teleport-device-transfer",
      "batch-12-urgent-no-service-safety-cases"
    ],
    "sourceAliases": [],
    "confidence": "verified",
    "internalVerificationRequired": [],
    "batch": "Batch 13",
    "aliases": [
      "no service",
      "sos only",
      "searching",
      "emergency calls only",
      "not registered on network",
      "no bars",
      "phone has no signal."
    ],
    "symptoms": [
      "no service",
      "sos only",
      "searching",
      "emergency calls only",
      "not registered on network",
      "no bars",
      "phone has no signal."
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "Batch 13"
  },
  {
    "id": "bars-but-no-internet-data-not-working",
    "title": "Bars But No Internet / Data Not Working",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "apn-data",
      "batch13"
    ],
    "keywords": [
      "bars",
      "but",
      "internet",
      "data",
      "not",
      "working",
      "apn-data"
    ],
    "customerPhrases": [
      "bars but no internet",
      "data not working",
      "calls work but data does not",
      "only works on wi-fi",
      "can",
      "text/call but no mobile internet",
      "pdp authentication failure."
    ],
    "preview": {
      "problem": "Radio connection may be working, but cellular data routing is failing. Main causes: APN, data",
      "firstQuestion": "Is Wi-Fi completely off, and does the issue happen on cellular data only?",
      "firstAction": "Turn Wi-Fi off, confirm mobile data is ON, and identify the network: Warp, Dark Star, or Light",
      "escalateIf": "APN is correct, data balance/account state is valid, VPN/DNS/Data Saver are off, reset/reboot"
    },
    "quickAnswer": "Radio connection may be working, but cellular data routing is failing. Main causes: APN, data \nbalance, wrong data line, VPN/Private DNS, account data state, throttle/block, or provisioning.",
    "useWhen": "Use when customer reports: Bars but no internet, data not working, calls work but data does not, only works on Wi-Fi, can",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Is Wi-Fi completely off, and does the issue happen on cellular data only?"
    ],
    "quickChecks": [
      "Data balance/plan state valid? INTERNAL VERIFICATION REQUIRED",
      "Correct network/APN?",
      "Correct SIM/eSIM selected for cellular data?",
      "VPN/Private DNS/Data Saver off?",
      "Recent activation/Teleport/eSIM change?"
    ],
    "quickSteps": [
      "Data balance/plan state valid? INTERNAL VERIFICATION REQUIRED",
      "Correct network/APN?",
      "Correct SIM/eSIM selected for cellular data?",
      "VPN/Private DNS/Data Saver off?",
      "Recent activation/Teleport/eSIM change?"
    ],
    "steps": [
      "Turn Wi-Fi off, confirm mobile data is ON, and identify the network: Warp, Dark Star, or Light",
      "Speed."
    ],
    "deviceSpecificSteps": {
      "general": [
        "Turn Wi-Fi off, confirm mobile data is ON, and identify the network: Warp, Dark Star, or Light",
        "Speed."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "If calls or texts work but mobile data does not, the line may be active but the data path is not \nrouting correctly. Please turn Wi-Fi off completely and confirm mobile data is ON. I’ll check the \nline’s data status while we verify the APN for your network."
      }
    ],
    "zendeskNote": "Issue: Data not working / bars but no internet \nNetwork: [Warp / Dark Star / Light Speed] \nDevice/OS: [X] \nSIM/eSIM: [X] \nTrigger: [Activation / Teleport / eSIM change / Renewal / Sudden] \nSymptoms: Calls [work/fail], SMS [work/fail], data [fails], Wi-Fi off test [yes/no] \nSteps tried: Wi-Fi off, data line selected, APN checked, VPN/DNS off, reboot \nInternal checks: Data balance, throttle/suspension, provisioning INTERNAL VERIFICATION \nREQUIRED \nNext action: Route to APN/Data deep card",
    "escalation": {
      "neededWhen": [
        "APN is correct, data balance/account state is valid, VPN/DNS/Data Saver are off, reset/reboot",
        "done, and data still fails."
      ],
      "evidenceNeeded": [],
      "summaryTemplate": ""
    },
    "escalationRequiredWhen": [
      "APN is correct, data balance/account state is valid, VPN/DNS/Data Saver are off, reset/reboot",
      "done, and data still fails."
    ],
    "escalationFormat": [],
    "relatedPlaybooks": [
      "batch-2-mobile-data-not-working",
      "batch-2-network-specific-apn-cards",
      "apn-data-routing-errors",
      "batch-6-slow-data-throttle-vs-congestion"
    ],
    "sourceAliases": [],
    "confidence": "verified",
    "internalVerificationRequired": [],
    "batch": "Batch 13",
    "aliases": [
      "bars but no internet",
      "data not working",
      "calls work but data does not",
      "only works on wi-fi",
      "can",
      "text/call but no mobile internet",
      "pdp authentication failure."
    ],
    "symptoms": [
      "bars but no internet",
      "data not working",
      "calls work but data does not",
      "only works on wi-fi",
      "can",
      "text/call but no mobile internet",
      "pdp authentication failure."
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "Batch 13"
  },
  {
    "id": "mms-picture-group-text-fails",
    "title": "MMS / Picture / Group Text Fails",
    "category": "apn-data",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "apn-data",
      "batch13"
    ],
    "keywords": [
      "mms",
      "picture",
      "group",
      "text",
      "fails",
      "apn-data"
    ],
    "customerPhrases": [
      "pictures won’t send",
      "mms fails",
      "group messages split",
      "texts work but pictures don’t",
      "android",
      "group chat broken",
      "iphone to android photos fail."
    ],
    "preview": {
      "problem": "Regular SMS may work while MMS fails because MMS needs cellular data, correct",
      "firstQuestion": "Do plain texts work, and is the issue only with picture/group messages?",
      "firstAction": "Turn Wi-Fi off, make sure cellular data is ON, and test one picture message.",
      "escalateIf": "Data works, SMS works, APN/MMSC and device toggles are correct, but MMS still fails"
    },
    "quickAnswer": "Regular SMS may work while MMS fails because MMS needs cellular data, correct \nAPN/MMSC, MMS feature state, and device messaging settings.",
    "useWhen": "Use when customer reports: Pictures won’t send, MMS fails, group messages split, texts work but pictures don’t, Android",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Do plain texts work, and is the issue only with picture/group messages?"
    ],
    "quickChecks": [
      "Plain SMS works?",
      "Cellular data works with Wi-Fi off?",
      "Data balance sufficient? INTERNAL VERIFICATION REQUIRED",
      "APN/MMSC correct?",
      "iPhone MMS/Group Messaging toggles ON or Android APN type includes MMS?"
    ],
    "quickSteps": [
      "Plain SMS works?",
      "Cellular data works with Wi-Fi off?",
      "Data balance sufficient? INTERNAL VERIFICATION REQUIRED",
      "APN/MMSC correct?",
      "iPhone MMS/Group Messaging toggles ON or Android APN type includes MMS?"
    ],
    "steps": [
      "Turn Wi-Fi off, make sure cellular data is ON, and test one picture message."
    ],
    "deviceSpecificSteps": {
      "general": [
        "Turn Wi-Fi off, make sure cellular data is ON, and test one picture message."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Picture and group messages use cellular data, even when regular texts work. Please turn Wi-Fi \noff, make sure mobile data is ON, and try sending one picture message. I’ll also check whether \nthe line has enough data and whether the MMS settings are correct."
      }
    ],
    "zendeskNote": "Issue: MMS/group messaging failure \nNetwork: [X] \nDevice/OS: [X] \nMessaging app: [iMessage / Google Messages / Samsung Messages / Other] \nSMS: [Works/Fails] \nMMS: [Fails] \nData with Wi-Fi off: [Works/Fails] \nSteps tried: Wi-Fi off, cellular data on, APN/MMSC checked, MMS toggles checked \nInternal checks: Data balance, MMS feature/routing INTERNAL VERIFICATION REQUIRED \nNext action: Route to MMS deep card",
    "escalation": {
      "neededWhen": [
        "Data works, SMS works, APN/MMSC and device toggles are correct, but MMS still fails",
        "consistently."
      ],
      "evidenceNeeded": [],
      "summaryTemplate": ""
    },
    "escalationRequiredWhen": [
      "Data works, SMS works, APN/MMSC and device toggles are correct, but MMS still fails",
      "consistently."
    ],
    "escalationFormat": [],
    "relatedPlaybooks": [
      "batch-4-sms",
      "sms-mms-group-messaging-triage",
      "batch-2-mms-fails-but-sms-works",
      "batch-11-messaging-routing-errors",
      "batch-7-pixel-rcs-invalid-destination"
    ],
    "sourceAliases": [],
    "confidence": "verified",
    "internalVerificationRequired": [],
    "batch": "Batch 13",
    "aliases": [
      "pictures won’t send",
      "mms fails",
      "group messages split",
      "texts work but pictures don’t",
      "android",
      "group chat broken",
      "iphone to android photos fail."
    ],
    "symptoms": [
      "pictures won’t send",
      "mms fails",
      "group messages split",
      "texts work but pictures don’t",
      "android",
      "group chat broken",
      "iphone to android photos fail."
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "Batch 13"
  },
  {
    "id": "porting-delay-old-sim-still-works-bank-codes-missing",
    "title": "Porting Delay / Old SIM Still Works / Bank Codes Missing",
    "category": "port-in-out",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "port-in-out",
      "batch13"
    ],
    "keywords": [
      "porting",
      "delay",
      "old",
      "sim",
      "still",
      "works",
      "bank",
      "codes",
      "missing",
      "port-in-out"
    ],
    "customerPhrases": [
      "number stuck",
      "port taking too long",
      "old carrier still works",
      "bank codes not coming",
      "otp not",
      "received after port",
      "short code missing",
      "transfer rejected."
    ],
    "preview": {
      "problem": "There are two very different cases:",
      "firstQuestion": "Does your old carrier SIM still show service, or has the number already moved to US Mobile?",
      "firstAction": "Check port status internally if old SIM still works. If port is complete, test normal SMS separately",
      "escalateIf": "Port stuck beyond expected path with no clear rejection, split service appears, or standard SMS"
    },
    "quickAnswer": "There are two very different cases: \n1. Old SIM still works → port may not be complete. \n2. Port complete and normal SMS works but bank codes fail → A2P/short-code routing \ndelay or sender cache issue.",
    "useWhen": "Use when customer reports: Number stuck, port taking too long, old carrier still works, bank codes not coming, OTP not",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Does your old carrier SIM still show service, or has the number already moved to US Mobile?"
    ],
    "quickChecks": [
      "Port status/rejection code? INTERNAL VERIFICATION REQUIRED",
      "Old account still active?",
      "Old SIM still works?",
      "Normal SMS works?",
      "Bank/short-code only failing?",
      "Recent port within 72 hours?"
    ],
    "quickSteps": [
      "Port status/rejection code? INTERNAL VERIFICATION REQUIRED",
      "Old account still active?",
      "Old SIM still works?",
      "Normal SMS works?",
      "Bank/short-code only failing?",
      "Recent port within 72 hours?"
    ],
    "steps": [
      "Check port status internally if old SIM still works. If port is complete, test normal SMS separately",
      "from bank/OTP messages."
    ],
    "deviceSpecificSteps": {
      "general": [
        "Check port status internally if old SIM still works. If port is complete, test normal SMS separately",
        "from bank/OTP messages."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Let’s separate the port status from the bank-code issue. If your old SIM still works, the transfer \nmay not be fully complete yet. If the number already moved and normal texts work, bank codes \ncan take longer because banks use separate security-routing systems. I’ll check the port status \nfirst."
      }
    ],
    "zendeskNote": "Issue: Port delay / OTP delay \nDonor carrier: [X] \nPort submitted: [Date/time] \nOld SIM active: [Yes/No] \nUS Mobile service active: [Yes/No/Partial] \nNormal SMS: [Works/Fails] \nOTP/short code: [Works/Fails] \nInternal checks: Port status, rejection code, FOC/commit date, SMS feature INTERNAL \nVERIFICATION REQUIRED \nNext action: Correct port rejection, monitor routing, or escalate",
    "escalation": {
      "neededWhen": [
        "Port stuck beyond expected path with no clear rejection, split service appears, or standard SMS",
        "works but OTP/short codes fail beyond the normal post-port window."
      ],
      "evidenceNeeded": [],
      "summaryTemplate": ""
    },
    "escalationRequiredWhen": [
      "Port stuck beyond expected path with no clear rejection, split service appears, or standard SMS",
      "works but OTP/short codes fail beyond the normal post-port window."
    ],
    "escalationFormat": [],
    "relatedPlaybooks": [
      "batch-5-port-in-delays",
      "batch-5-port-rejections",
      "batch-5-customer-cannot-receive-2fa",
      "porting-rejection-strings",
      "batch-4-bank-otp-short-codes"
    ],
    "sourceAliases": [],
    "confidence": "verified",
    "internalVerificationRequired": [],
    "batch": "Batch 13",
    "aliases": [
      "number stuck",
      "port taking too long",
      "old carrier still works",
      "bank codes not coming",
      "otp not",
      "received after port",
      "short code missing",
      "transfer rejected."
    ],
    "symptoms": [
      "number stuck",
      "port taking too long",
      "old carrier still works",
      "bank codes not coming",
      "otp not",
      "received after port",
      "short code missing",
      "transfer rejected."
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "Batch 13"
  },
  {
    "id": "after-teleport-network-switch-nothing-works",
    "title": "After Teleport / Network Switch Nothing Works",
    "category": "esim-sim",
    "secondaryCategories": [],
    "priority": "critical",
    "tags": [
      "esim-sim",
      "batch13"
    ],
    "keywords": [
      "after",
      "teleport",
      "network",
      "switch",
      "nothing",
      "works",
      "esim-sim"
    ],
    "customerPhrases": [
      "after teleport nothing works",
      "switched networks and lost service",
      "esim disappeared",
      "old esim",
      "still showing",
      "new qr not working",
      "no data after network switch."
    ],
    "preview": {
      "problem": "Network switch may be incomplete, new eSIM/profile may not be installed, old profile may still",
      "firstQuestion": "Which network were you switching from and which network were you switching to?",
      "firstAction": "Check Teleport/switch status internally before telling customer to delete anything.",
      "escalateIf": "Teleport shows complete, new eSIM is installed/enabled, old profile conflict is cleared, APN is"
    },
    "quickAnswer": "Network switch may be incomplete, new eSIM/profile may not be installed, old profile may still \nbe selected, APN may be wrong for the destination network, or backend switch/provisioning \nmay be stuck.",
    "useWhen": "Use when customer reports: After Teleport nothing works, switched networks and lost service, eSIM disappeared, old eSIM",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Which network were you switching from and which network were you switching to?"
    ],
    "quickChecks": [
      "Teleport status complete/pending/failed? INTERNAL VERIFICATION REQUIRED",
      "New eSIM installed and ON?",
      "Old eSIM still active/selected?",
      "Correct destination APN?",
      "Device compatible with destination network? INTERNAL VERIFICATION REQUIRED"
    ],
    "quickSteps": [
      "Teleport status complete/pending/failed? INTERNAL VERIFICATION REQUIRED",
      "New eSIM installed and ON?",
      "Old eSIM still active/selected?",
      "Correct destination APN?",
      "Device compatible with destination network? INTERNAL VERIFICATION REQUIRED"
    ],
    "steps": [
      "Check Teleport/switch status internally before telling customer to delete anything."
    ],
    "deviceSpecificSteps": {
      "general": [
        "Check Teleport/switch status internally before telling customer to delete anything."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "After a network switch, the phone needs the new network profile and settings. Before deleting \nanything, I’m going to check whether the switch completed and whether the new eSIM/profile is \nactive. Which network were you switching from and to?"
      }
    ],
    "zendeskNote": "Issue: Post-Teleport / network switch failure \nFrom network: [X] \nTo network: [X] \nDevice/OS: [X] \nSIM/eSIM: [X] \nSwitch status: [Complete/Pending/Failed/Unknown] INTERNAL VERIFICATION REQUIRED \n\nSymptoms: [SOS / no data / SMS fail / MMS fail / QR error] \nSteps tried: New eSIM checked, old profile checked, APN checked, reboot \nNext action: Route to Teleport/eSIM recovery",
    "escalation": {
      "neededWhen": [
        "Teleport shows complete, new eSIM is installed/enabled, old profile conflict is cleared, APN is",
        "correct, and service still fails."
      ],
      "evidenceNeeded": [],
      "summaryTemplate": ""
    },
    "escalationRequiredWhen": [
      "Teleport shows complete, new eSIM is installed/enabled, old profile conflict is cleared, APN is",
      "correct, and service still fails."
    ],
    "escalationFormat": [],
    "relatedPlaybooks": [
      "batch-10-switch-networks-teleport-transfer",
      "esim-install-qr-code-failures",
      "post-teleport-data-mms-failure",
      "esim-download-activation-errors",
      "batch-12-internal-notes-escalation"
    ],
    "sourceAliases": [],
    "confidence": "verified",
    "internalVerificationRequired": [],
    "batch": "Batch 13",
    "aliases": [
      "after teleport nothing works",
      "switched networks and lost service",
      "esim disappeared",
      "old esim",
      "still showing",
      "new qr not working",
      "no data after network switch."
    ],
    "symptoms": [
      "after teleport nothing works",
      "switched networks and lost service",
      "esim disappeared",
      "old esim",
      "still showing",
      "new qr not working",
      "no data after network switch."
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "Batch 13"
  },
  {
    "id": "slow-data-video-buffering-speed-complaints",
    "title": "Slow Data / Video Buffering / Speed Complaints",
    "category": "start-here",
    "secondaryCategories": [],
    "priority": "normal",
    "tags": [
      "start-here",
      "batch13"
    ],
    "keywords": [
      "slow",
      "data",
      "video",
      "buffering",
      "speed",
      "complaints",
      "start-here"
    ],
    "customerPhrases": [
      "slow data",
      "throttled",
      "data crawling",
      "video buffering",
      "fast.com slow",
      "data waster",
      "speed test low",
      "1 mbps",
      "deprioritized."
    ],
    "preview": {
      "problem": "Could be high-speed data used, hard throttle, congestion/QCI, weak signal, video management,",
      "firstQuestion": "Are speeds always around the same low number, or do they change by time/location?",
      "firstAction": "Run one clean speed test with Wi-Fi/VPN off, and check usage/throttle state internally.",
      "escalateIf": "Customer has unused high-speed data, no device limiter, APN/data works, and speeds remain"
    },
    "quickAnswer": "Could be high-speed data used, hard throttle, congestion/QCI, weak signal, video management, \nVPN/Private Relay, Data Saver, or false throttle.",
    "useWhen": "Use when customer reports: Slow data, throttled, data crawling, video buffering, Fast.com slow, Data Waster, speed test low,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Are speeds always around the same low number, or do they change by time/location?"
    ],
    "quickChecks": [
      "Usage/throttle state? INTERNAL VERIFICATION REQUIRED",
      "Wi-Fi/VPN/Private Relay/Data Saver off?",
      "Download and upload results?",
      "Happens everywhere or one place/time?",
      "Only video slow or all data slow?"
    ],
    "quickSteps": [
      "Usage/throttle state? INTERNAL VERIFICATION REQUIRED",
      "Wi-Fi/VPN/Private Relay/Data Saver off?",
      "Download and upload results?",
      "Happens everywhere or one place/time?",
      "Only video slow or all data slow?"
    ],
    "steps": [
      "Run one clean speed test with Wi-Fi/VPN off, and check usage/throttle state internally."
    ],
    "deviceSpecificSteps": {
      "general": [
        "Run one clean speed test with Wi-Fi/VPN off, and check usage/throttle state internally."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Slow data can come from usage limits, congestion, signal quality, video settings, or phone \nsettings like VPN/Data Saver. Please turn Wi-Fi and VPN off and run one speed test. Send me \nthe download and upload result while I check the line’s usage state."
      }
    ],
    "zendeskNote": "Issue: Slow data / video buffering \nNetwork: [X] \nDevice/OS: [X] \nUsage/throttle state: [X] INTERNAL VERIFICATION REQUIRED \nSpeed test: DL [X], UL [X], ping [X] \nScope: [All data / video only / hotspot only / one location] \nSteps tried: Wi-Fi off, VPN off, Data Saver off, outdoor test, Data Waster checked \nNext action: Route to speed/QCI/video card",
    "escalation": {
      "neededWhen": [
        "Customer has unused high-speed data, no device limiter, APN/data works, and speeds remain",
        "abnormally low across locations/times."
      ],
      "evidenceNeeded": [],
      "summaryTemplate": ""
    },
    "escalationRequiredWhen": [
      "Customer has unused high-speed data, no device limiter, APN/data works, and speeds remain",
      "abnormally low across locations/times."
    ],
    "escalationFormat": [],
    "relatedPlaybooks": [
      "batch-6-slow-data-throttling-vs-congestion",
      "batch-6-video-buffering-data-waster",
      "batch-6-speed-test-interpretation",
      "batch-2-data-not-working-if-no-data-at-all"
    ],
    "sourceAliases": [],
    "confidence": "verified",
    "internalVerificationRequired": [],
    "batch": "Batch 13",
    "aliases": [
      "slow data",
      "throttled",
      "data crawling",
      "video buffering",
      "fast.com slow",
      "data waster",
      "speed test low",
      "1 mbps",
      "deprioritized."
    ],
    "symptoms": [
      "slow data",
      "throttled",
      "data crawling",
      "video buffering",
      "fast.com slow",
      "data waster",
      "speed test low",
      "1 mbps",
      "deprioritized."
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "Batch 13"
  },
  {
    "id": "hotspot-not-working",
    "title": "Hotspot Not Working",
    "category": "hotspot",
    "secondaryCategories": [],
    "priority": "normal",
    "tags": [
      "hotspot",
      "batch13"
    ],
    "keywords": [
      "hotspot",
      "not",
      "working"
    ],
    "customerPhrases": [
      "hotspot not working",
      "laptop connects but no internet",
      "personal hotspot missing",
      "contact carrier",
      "hotspot slow",
      "tethering stopped",
      "hotspot toggle greyed out."
    ],
    "preview": {
      "problem": "Could be hotspot bucket used, hotspot APN/DUN missing, iPhone Personal Hotspot APN",
      "firstQuestion": "Does mobile data work on the phone itself, and is only hotspot failing?",
      "firstAction": "Check hotspot usage/allowance internally, then test one connected device with VPN/Data Saver",
      "escalateIf": "Hotspot allowance remains, phone data works, APN/DUN is correct, VPN/DNS/Data Saver are"
    },
    "quickAnswer": "Could be hotspot bucket used, hotspot APN/DUN missing, iPhone Personal Hotspot APN \nmissing, Data Saver/VPN issue, plan entitlement issue, or connected-device problem.",
    "useWhen": "Use when customer reports: Hotspot not working, laptop connects but no internet, Personal Hotspot missing, Contact Carrier,",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Does mobile data work on the phone itself, and is only hotspot failing?"
    ],
    "quickChecks": [
      "Phone data works?",
      "Hotspot allowance/bucket available? INTERNAL VERIFICATION REQUIRED",
      "iPhone says Contact Carrier or Personal Hotspot missing?",
      "Android APN type includes DUN if needed?",
      "VPN/Private DNS/Data Saver off?"
    ],
    "quickSteps": [
      "Phone data works?",
      "Hotspot allowance/bucket available? INTERNAL VERIFICATION REQUIRED",
      "iPhone says Contact Carrier or Personal Hotspot missing?",
      "Android APN type includes DUN if needed?",
      "VPN/Private DNS/Data Saver off?"
    ],
    "steps": [
      "Check hotspot usage/allowance internally, then test one connected device with VPN/Data Saver",
      "off."
    ],
    "deviceSpecificSteps": {
      "general": [
        "Check hotspot usage/allowance internally, then test one connected device with VPN/Data Saver",
        "off."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Let’s check whether this is the phone’s data or only the hotspot path. First, does mobile data \nwork normally on the phone when Wi-Fi is off? I’ll check the hotspot allowance while we verify \nthe hotspot/APN settings."
      }
    ],
    "zendeskNote": "Issue: Hotspot not working \nNetwork: [X] \nDevice/OS: [X] \nPhone data: [Works/Fails] \nHotspot issue: [No internet / missing toggle / Contact Carrier / slow] \nHotspot usage: [X] INTERNAL VERIFICATION REQUIRED \nSteps tried: One-device test, VPN/DNS/Data Saver off, hotspot APN/DUN checked \nNext action: Route to hotspot APN or hotspot speed card",
    "escalation": {
      "neededWhen": [
        "Hotspot allowance remains, phone data works, APN/DUN is correct, VPN/DNS/Data Saver are",
        "off, and hotspot still gives 0/no internet."
      ],
      "evidenceNeeded": [],
      "summaryTemplate": ""
    },
    "escalationRequiredWhen": [
      "Hotspot allowance remains, phone data works, APN/DUN is correct, VPN/DNS/Data Saver are",
      "off, and hotspot still gives 0/no internet."
    ],
    "escalationFormat": [],
    "relatedPlaybooks": [
      "hotspot-not-working-hotspot-apn",
      "hotspot-speed-limits",
      "batch-11-appdashboard-contact-carrier-errors"
    ],
    "sourceAliases": [],
    "confidence": "verified",
    "internalVerificationRequired": [],
    "batch": "Batch 13",
    "aliases": [
      "hotspot not working",
      "laptop connects but no internet",
      "personal hotspot missing",
      "contact carrier",
      "hotspot slow",
      "tethering stopped",
      "hotspot toggle greyed out."
    ],
    "symptoms": [
      "hotspot not working",
      "laptop connects but no internet",
      "personal hotspot missing",
      "contact carrier",
      "hotspot slow",
      "tethering stopped",
      "hotspot toggle greyed out."
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "Batch 13"
  },
  {
    "id": "error-97-invalid-destination-messaging-error",
    "title": "Error 97 / Invalid Destination / Messaging Error",
    "category": "messaging-calls-voicemail",
    "secondaryCategories": [],
    "priority": "important",
    "tags": [
      "messaging-calls-voicemail",
      "batch13"
    ],
    "keywords": [
      "error",
      "invalid",
      "destination",
      "messaging",
      "messaging-calls-voicemail"
    ],
    "customerPhrases": [
      "error 97",
      "invalid destination address",
      "message not sent",
      "sms failed",
      "mms failed",
      "group chat",
      "error",
      "android messages error."
    ],
    "preview": {
      "problem": "Error 97 often points to SMS feature/routing or line provisioning. Invalid destination is often",
      "firstQuestion": "Does this happen with normal SMS, picture/group messages, or both?",
      "firstAction": "Separate SMS from MMS/RCS, then check account-side messaging feature if SMS fails.",
      "escalateIf": "Error persists after SMS/MMS isolation, RCS/cache/APN checks, and account-side messaging"
    },
    "quickAnswer": "Error 97 often points to SMS feature/routing or line provisioning. Invalid destination is often \nAndroid/Google Messages, RCS, MMS/group, APN, cache, or recipient-format related.",
    "useWhen": "Use when customer reports: Error 97, Invalid destination address, message not sent, SMS failed, MMS failed, group chat",
    "doNotUseWhen": "Do not use before verifying line status.",
    "customerQuestions": [
      "Does this happen with normal SMS, picture/group messages, or both?"
    ],
    "quickChecks": [
      "Plain SMS works?",
      "MMS/group only fails?",
      "Android/Google Messages/RCS involved?",
      "Data works with Wi-Fi off?",
      "SMS/MMS feature state? INTERNAL VERIFICATION REQUIRED"
    ],
    "quickSteps": [
      "Plain SMS works?",
      "MMS/group only fails?",
      "Android/Google Messages/RCS involved?",
      "Data works with Wi-Fi off?",
      "SMS/MMS feature state? INTERNAL VERIFICATION REQUIRED"
    ],
    "steps": [
      "Separate SMS from MMS/RCS, then check account-side messaging feature if SMS fails."
    ],
    "deviceSpecificSteps": {
      "general": [
        "Separate SMS from MMS/RCS, then check account-side messaging feature if SMS fails."
      ]
    },
    "copyTemplates": [
      {
        "label": "Copy customer reply",
        "text": "Let’s separate the message type first. Please try sending one plain text with no picture or group \nchat. If that works, we’ll troubleshoot MMS/RCS. If it fails too, I’ll check the line’s messaging \nfeature and routing."
      }
    ],
    "zendeskNote": "Issue: Messaging error \nExact error: [Error 97 / Invalid destination / Message failed] \nNetwork: [X] \nDevice/OS: [X] \nMessaging app: [X] \nSMS: [Works/Fails] \nMMS: [Works/Fails] \nRCS/iMessage: [On/Off] \nSteps tried: SMS/MMS isolated, RCS off, cache cleared, APN/MMSC checked, reboot \nInternal checks: SMS/MMS feature/routing INTERNAL VERIFICATION REQUIRED \nNext action: Route to messaging error card",
    "escalation": {
      "neededWhen": [
        "Error persists after SMS/MMS isolation, RCS/cache/APN checks, and account-side messaging",
        "feature review."
      ],
      "evidenceNeeded": [],
      "summaryTemplate": ""
    },
    "escalationRequiredWhen": [
      "Error persists after SMS/MMS isolation, RCS/cache/APN checks, and account-side messaging",
      "feature review."
    ],
    "escalationFormat": [],
    "relatedPlaybooks": [
      "messaging-routing-errors-error-97-invalid-destination",
      "batch-4-smsmmsrcsimessage",
      "batch-7-pixel-rcs-invalid-destination",
      "batch-2-mms-apn",
      "batch-13-agent-import-notes",
      "create-these-as-start-here-cards",
      "no-service-sos-only",
      "bars-but-no-internet-data-not-working",
      "mms-picture-group-text-fails",
      "porting-delay-old-sim-still-works-bank-codes-missing",
      "after-teleport-network-switch-nothing-works",
      "slow-data-video-buffering-speed-complaints",
      "hotspot-not-working",
      "error-97-invalid-destination-messaging-error",
      "suggested-site-placement",
      "these-should-appear-in",
      "start-here",
      "common-live-issues",
      "pinned-playbooks",
      "fast-triage",
      "search-suggestions",
      "ui-rule-for-start-here-cards",
      "each-card-should-show-only-this-first",
      "customer-says",
      "usually-means",
      "first-question",
      "first-action",
      "route-to-deeper-card",
      "escalate-if",
      "then-expandable-sections-can-show",
      "quick-checks",
      "copy-ready-reply",
      "zendesk-note",
      "related-deeper-playbooks",
      "needs-internal-verification",
      "search-index-rule",
      "index-customer-wording-heavily",
      "sos",
      "no-service",
      "bars-but-no-internet",
      "data-not-working",
      "pictures-wont-send",
      "mms",
      "bank-codes",
      "otp",
      "old-sim-still-works",
      "teleport",
      "esim-disappeared",
      "slow-data",
      "throttled",
      "data-waster",
      "hotspot",
      "error-97",
      "invalid-destination",
      "merge-notes",
      "batch-13-overlaps-with-batch-1-and-the-deeper-batches-final-site-should-use-batch-13-as-the",
      "front-door-routing-layer",
      "not-duplicate-full-troubleshooting",
      "use-this-structure",
      "batch-13-quick-triage",
      "batch-2-deep-apndatammshotspot",
      "batch-3-deep-activationsimesimsos",
      "batch-4-deep-messagingcallsvoicemail",
      "batch-5-deep-portingsecurity",
      "batch-6-deep-speedqcicoverage",
      "batch-7-deep-deviceswatches",
      "batch-8-deep-internationalroaming",
      "batch-9-deep-billingorders",
      "batch-10-dashboard-click-paths",
      "batch-11-exact-error-lookup",
      "batch-12-zendeskescalationpattern-ops",
      "safety-rule-for-agent",
      "for-start-here-cards",
      "keep-the-visible-card-short",
      "do-not-show-huge-diagnostic-lists-by-default",
      "do-not-promise-backend-fixes",
      "refunds",
      "etas",
      "outage-status",
      "or-account-actions",
      "ask-the-first-decisive-question-only",
      "route-to-the-deeper-card-after-the-first-triage-step",
      "mark-account",
      "plan-billing-management-top-up-plan-change-snooze-usage-payment",
      "provisioning",
      "porting-bank-code-delays",
      "teleport-esim-recovery",
      "throttle",
      "hotspot-configuration",
      "sms-routing",
      "and-outage",
      "checks-as-internal-verification-required"
    ],
    "sourceAliases": [],
    "confidence": "verified",
    "internalVerificationRequired": [],
    "batch": "Batch 13",
    "aliases": [
      "error 97",
      "invalid destination address",
      "message not sent",
      "sms failed",
      "mms failed",
      "group chat",
      "error",
      "android messages error."
    ],
    "symptoms": [
      "error 97",
      "invalid destination address",
      "message not sent",
      "sms failed",
      "mms failed",
      "group chat",
      "error",
      "android messages error."
    ],
    "intent": [
      "Ask Customer",
      "Troubleshoot",
      "Fix",
      "Template",
      "Escalate"
    ],
    "lastUpdated": "June 2026",
    "sourceDoc": "Batch 13"
  }
];
