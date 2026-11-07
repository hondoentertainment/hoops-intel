/** Reader-facing copy when Ask, Pro, push, or email has no credentials yet. */

export type GatedFeature = "ask" | "pro" | "push" | "email";

const COPY: Record<GatedFeature, string> = {
  ask: "Ask Hoops Intel is coming soon.",
  pro: "Hoops Intel Pro is coming soon.",
  push: "Browser alerts are coming soon.",
  email: "The morning digest is coming soon.",
};

/** True when a server or env failure would otherwise name a missing key. */
export function isRawConfigError(message: string): boolean {
  return /not configured|misconfiguration|API key|STRIPE_|VAPID_|RESEND_|ANTHROPIC_|Required env:|missing\s+.+\bkey\b/i.test(
    message,
  );
}

export function comingSoonCopy(feature: GatedFeature): string {
  return COPY[feature];
}

/** Swap operator diagnostics for the feature's coming-soon line. Other errors pass through. */
export function publicFeatureError(feature: GatedFeature, raw: string): string {
  const message = raw.trim();
  if (!message || isRawConfigError(message)) return COPY[feature];
  return message;
}
