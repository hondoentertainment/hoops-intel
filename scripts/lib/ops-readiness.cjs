/**
 * Shared evaluator for /api/ops-readiness payloads.
 *
 * Close/complete is allowed only when every secret flag is true AND gaps is
 * an empty array. URL defaults (APP_BASE_URL, PUSH_API_URL, VAPID_SUBJECT)
 * never count as ready. Missing/malformed payloads fail closed.
 */
const { readFileSync } = require("fs");

/** Secret flags that must all be true before an ops-readiness issue may close. */
const SECRET_READY_PATHS = [
  ["stripe.checkoutReady", (d) => d.stripe?.checkoutReady],
  ["stripe.webhookReady", (d) => d.stripe?.webhookReady],
  ["push.notifyAuthReady", (d) => d.push?.notifyAuthReady],
  ["supabase.serverReady", (d) => d.supabase?.serverReady],
  ["emailDigest.resendReady", (d) => d.emailDigest?.resendReady],
  ["llm.anthropicSeriesIntelReady", (d) => d.llm?.anthropicSeriesIntelReady],
];

function unique(items) {
  return [...new Set(items)];
}

function evaluateOpsReadiness(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return { ready: false, gaps: ["invalid payload"], reason: "invalid payload" };
  }

  const listedGaps = Array.isArray(payload.gaps)
    ? payload.gaps.map((g) => String(g)).filter(Boolean)
    : [];
  const flagGaps = SECRET_READY_PATHS.filter(([, get]) => get(payload) !== true).map(
    ([name]) => name,
  );

  if (!Array.isArray(payload.gaps)) {
    return {
      ready: false,
      gaps: unique(["gaps missing", ...listedGaps, ...flagGaps]),
      reason: "gaps missing",
    };
  }

  if (payload.ready === false) {
    return {
      ready: false,
      gaps: unique([...listedGaps, ...flagGaps]),
      reason: "ready flag false",
    };
  }

  const gaps = unique([...listedGaps, ...flagGaps]);
  if (gaps.length > 0) {
    return { ready: false, gaps, reason: "secret gaps" };
  }

  return { ready: true, gaps: [], reason: "ok" };
}

module.exports = { evaluateOpsReadiness, SECRET_READY_PATHS };

if (require.main === module) {
  let payload = null;
  try {
    payload = JSON.parse(readFileSync(0, "utf8"));
  } catch {
    payload = null;
  }
  const result = evaluateOpsReadiness(payload);
  if (result.gaps.length) console.log(result.gaps.join(", "));
  process.exit(result.ready ? 0 : 1);
}
