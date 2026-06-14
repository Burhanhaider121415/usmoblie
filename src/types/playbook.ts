export type PlaybookIntent =
  | "Explain"
  | "Troubleshoot"
  | "Ask Customer"
  | "Fix"
  | "Escalate"
  | "Template"
  | "Glossary";

export type PlaybookPriority = "normal" | "important" | "critical";

export type PlaybookConfidence = "dummy" | "draft" | "verified";

export interface CopyTemplate {
  label: string;
  text: string;
}

export interface DeviceSpecificSteps {
  iphone?: string[];
  android?: string[];
  general?: string[];
}

export interface Playbook {
  id: string;
  title: string;
  category: string;
  priority?: PlaybookPriority;
  aliases: string[];
  keywords: string[];
  symptoms: string[];
  intent: PlaybookIntent[];
  useWhen: string;
  doNotUseWhen?: string;
  quickAnswer: string;
  customerQuestions: string[];
  quickSteps: string[];
  deviceSpecificSteps?: DeviceSpecificSteps;
  copyTemplates: CopyTemplate[];
  escalationRequiredWhen: string[];
  escalationFormat?: string[];
  relatedPlaybooks: string[];
  sourceDoc?: string;
  lastUpdated?: string;
  confidence?: PlaybookConfidence;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}
