#!/usr/bin/env node
// ops-preflight.mjs — env presence checklist for ops (never prints secret values).

const KEYS = [
  "STRIPE_SECRET_KEY",
  "STRIPE_PRICE_MONTHLY",
  "STRIPE_PRICE_ANNUAL",
  "STRIPE_WEBHOOK_SECRET",
  "VAPID_PUBLIC_KEY",
  "VAPID_PRIVATE_KEY",
  "PUSH_API_SECRET",
  "PUSH_API_URL",
  "SUPABASE_URL",
  "SUPABASE_SERVICE_KEY",
  "RESEND_API_KEY",
  "ANTHROPIC_API_KEY",
];

function statusFor(key) {
  const v = process.env[key];
  return v && String(v).length > 0 ? "set" : "missing";
}

console.log("Ops preflight — required env keys (values never shown)\n");
for (const key of KEYS) {
  console.log(`  ${key}: ${statusFor(key)}`);
}
console.log("");

process.exit(0);
