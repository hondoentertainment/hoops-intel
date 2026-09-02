import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const require = createRequire(import.meta.url);
const { evaluateOpsReadiness } = require(join(dirname(fileURLToPath(import.meta.url)), "../lib/ops-readiness.cjs"));

const liveLike = {
  stripe: { checkoutReady: false, webhookReady: false },
  billingUrls: { appBaseConfigured: true },
  push: { vapidKeyPairReady: false, vapidSubjectConfigured: true, notifyAuthReady: false },
  supabase: { serverReady: false },
  creatorQueue: { adminConfigured: false },
  emailDigest: { resendReady: false, intakeInboxReady: false },
  pushDispatch: { apiUrlConfigured: true },
  llm: { anthropicSeriesIntelReady: false },
  gaps: ["stripe checkout", "stripe webhook", "push notify", "supabase server", "resend", "anthropic"],
  ready: false,
};

const allGreen = {
  stripe: { checkoutReady: true, webhookReady: true },
  billingUrls: { appBaseConfigured: true },
  push: { vapidKeyPairReady: true, vapidSubjectConfigured: true, notifyAuthReady: true },
  supabase: { serverReady: true },
  emailDigest: { resendReady: true, intakeInboxReady: true },
  pushDispatch: { apiUrlConfigured: true },
  llm: { anthropicSeriesIntelReady: true },
  gaps: [],
  ready: true,
};

test("live-like payload with URL defaults true still fails closed", () => {
  const verdict = evaluateOpsReadiness(liveLike);
  assert.equal(verdict.ready, false);
  assert.ok(verdict.gaps.length > 0);
  assert.ok(verdict.gaps.includes("stripe.checkoutReady") || verdict.gaps.includes("stripe checkout"));
});

test("empty gaps[] with secret flags false does not count as ready", () => {
  const verdict = evaluateOpsReadiness({
    ...liveLike,
    gaps: [],
    ready: undefined,
  });
  assert.equal(verdict.ready, false);
  assert.ok(verdict.gaps.includes("stripe.checkoutReady"));
  assert.ok(verdict.gaps.includes("push.notifyAuthReady"));
  assert.ok(verdict.gaps.includes("llm.anthropicSeriesIntelReady"));
});

test("missing gaps field fails closed even if every secret flag is true", () => {
  const { gaps, ready, ...rest } = allGreen;
  const verdict = evaluateOpsReadiness(rest);
  assert.equal(verdict.ready, false);
  assert.ok(verdict.gaps.includes("gaps missing"));
});

test("invalid or empty payload fails closed", () => {
  assert.equal(evaluateOpsReadiness(null).ready, false);
  assert.equal(evaluateOpsReadiness("").ready, false);
  assert.equal(evaluateOpsReadiness([]).ready, false);
});

test("all secret flags true and empty gaps is ready", () => {
  const verdict = evaluateOpsReadiness(allGreen);
  assert.equal(verdict.ready, true);
  assert.deepEqual(verdict.gaps, []);
});

test("ready:false blocks close even when gaps is empty and flags are true", () => {
  const verdict = evaluateOpsReadiness({ ...allGreen, ready: false });
  assert.equal(verdict.ready, false);
});
