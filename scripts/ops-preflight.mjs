#!/usr/bin/env node
// ops-preflight.mjs — env presence checklist for ops (never prints secret values).

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
console.log("");

if (strict && anyMissing) {
  console.error("Strict mode: one or more keys missing — exiting 1");
  process.exit(1);
}

process.exit(0);
