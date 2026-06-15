export type PlaybookIntent =
  | "Explain"
  | "Troubleshoot"
  | "Ask Customer"
  | "Fix"
  | "Escalate"
  | "Template"
  | "Glossary";

export type PlaybookPriority = "normal" | "important" | "critical" | "low";

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
  secondaryCategories?: string[];
  priority?: PlaybookPriority;
  aliases: string[];
  keywords: string[];
  symptoms: string[];
  intent: PlaybookIntent[];
  tags?: string[];
  customerPhrases?: string[];

  preview?: {
    problem: string;
    firstQuestion: string;
    firstAction: string;
    escalateIf: string;
  };

  quickAnswer: string;
  useWhen: string;
  doNotUseWhen?: string;

  customerQuestions: string[];
  quickChecks: string[];
  quickSteps: string[];
  steps: string[];

  deviceSpecificSteps?: DeviceSpecificSteps;
  copyTemplates: CopyTemplate[];
  zendeskNote?: string;

  escalation?: {
    neededWhen: string[];
    evidenceNeeded: string[];
    summaryTemplate: string;
  };
  escalationRequiredWhen: string[];
  escalationFormat?: string[];

  relatedPlaybooks: string[];
  sourceAliases?: string[];
  confidence?: string;
  internalVerificationRequired?: string[];
  batch?: string;
  lastUpdated?: string;
  sourceDoc?: string;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}
