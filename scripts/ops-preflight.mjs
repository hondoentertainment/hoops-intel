#!/usr/bin/env node
// ops-preflight.mjs — env presence checklist for ops (never prints secret values).

/** Keys that fail --strict when missing. */
const KEYS = [
  "STRIPE_SECRET_KEY",
  "STRIPE_PRICE_MONTHLY",
  "STRIPE_PRICE_ANNUAL",
  "STRIPE_WEBHOOK_SECRET",
  "APP_BASE_URL",
  "VAPID_PUBLIC_KEY",
  "VAPID_PRIVATE_KEY",
  "VAPID_SUBJECT",
  "PUSH_API_SECRET",
  "PUSH_API_URL",
  "SUPABASE_URL",
  "SUPABASE_SERVICE_KEY",
  "RESEND_API_KEY",
  "ANTHROPIC_API_KEY",
  "CONTACT_INBOUND_EMAIL",
  "GUEST_PULSE_ADMIN_SECRET",
  "ODDS_API_KEY",
];

/** Reported for visibility; never fail --strict (social can dry-run without them). */
const OPTIONAL_KEYS = [
  "TWITTER_API_KEY",
  "TWITTER_API_SECRET",
  "TWITTER_ACCESS_TOKEN",
  "TWITTER_ACCESS_SECRET",
  "BLUESKY_HANDLE",
  "BLUESKY_APP_PASSWORD",
];

const strict = process.argv.includes("--strict");

function statusFor(key) {
  const v = process.env[key];
  return v && String(v).length > 0 ? "set" : "missing";
}

console.log("Ops preflight — required env keys (values never shown)\n");
let anyMissing = false;
for (const key of KEYS) {
  const s = statusFor(key);
  if (s === "missing") anyMissing = true;
  console.log(`  ${key}: ${s}`);
}

console.log("\nOptional — social distribution (workflow dry-runs when unset)\n");
for (const key of OPTIONAL_KEYS) {
  console.log(`  ${key}: ${statusFor(key)}`);
}
console.log("");

if (strict && anyMissing) {
  console.error("Strict mode: one or more required keys missing — exiting 1");
  process.exit(1);
}

process.exit(0);
