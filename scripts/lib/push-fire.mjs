const DRY_RUN = process.argv.includes("--dry-run") || process.env.PUSH_DRY_RUN === "1";

export function isPushDryRun() {
  return DRY_RUN;
}

export async function firePushNotify({ pushApiUrl, pushApiSecret, payload }) {
  if (DRY_RUN) {
    console.log(`[push:dry-run] ${payload.topic} — ${payload.title}`);
    return { sent: 0, failed: 0, dryRun: true };
  }
  const res = await fetch(pushApiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret: pushApiSecret, ...payload }),
  });
  if (!res.ok) throw new Error(`push-notify ${res.status}: ${await res.text().catch(() => "")}`);
  return res.json();
}
