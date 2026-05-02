#!/usr/bin/env node
// notify-fantasy-alerts.mjs — Web Push for today's high-signal fantasy rows.
//
// Targets subscribers filtered by player's team abbreviation (same path as injury
// pushes). Run after pulseData.ts is regenerated (e.g. chained from email-digest).
//
// Env:
//   PUSH_API_URL, PUSH_API_SECRET, SUPABASE_URL, SUPABASE_SERVICE_KEY (same as check-injuries)

import { extractPulseExport } from "./lib/read-pulse-exports.mjs";

const REQ = ["PUSH_API_URL", "PUSH_API_SECRET"];
const missing = REQ.filter((k) => !process.env[k]);
if (missing.length) {
  console.log(`[fantasy-push] Skipping — missing: ${missing.join(", ")}`);
  process.exit(0);
}

const { PUSH_API_URL, PUSH_API_SECRET } = process.env;

async function fireFantasyPush({ title, body, teamAbbr }) {
  const res = await fetch(PUSH_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: PUSH_API_SECRET,
      topic: "fantasy",
      title,
      body,
      teamAbbr,
      url: "https://hoopsintel.net/injuries",
    }),
  });
  if (!res.ok) throw new Error(`push-notify ${res.status}: ${await res.text().catch(() => "")}`);
  return res.json();
}

async function main() {
  const alerts = extractPulseExport("fantasyAlerts");
  if (!Array.isArray(alerts) || alerts.length === 0) {
    console.log("[fantasy-push] No fantasy alerts — exiting");
    return;
  }

  const hot = alerts.filter((a) => a && (a.urgency === "high" || a.urgency === "medium"));
  if (hot.length === 0) {
    console.log("[fantasy-push] No medium/high urgency rows — exiting");
    return;
  }

  const seen = new Set();
  let sent = 0;
  let errors = 0;

  for (const a of hot) {
    const team = a.team?.trim()?.toUpperCase();
    const player = a.player ?? "Fantasy alert";
    if (!team || team.length !== 3) continue;
    const key = `${team}:${player}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const title = `${a.urgency === "high" ? "⚡ Fantasy" : "Fantasy"}: ${player}`;
    const reason = typeof a.reason === "string" ? a.reason.slice(0, 180) : "";
    const body = `${a.action?.toUpperCase?.() ?? "WATCH"} — ${reason}${reason.length >= 180 ? "…" : ""}`;

    try {
      const r = await fireFantasyPush({ title, body, teamAbbr: team });
      console.log(`[fantasy-push] ${player} (${team}) → sent=${r.sent ?? "?"}`);
      sent++;
    } catch (e) {
      console.error(`[fantasy-push] ${player}: ${e.message}`);
      errors++;
    }
  }

  console.log(`[fantasy-push] Done — dispatched ${sent}, errors ${errors}`);
  if (errors > 0) process.exit(1);
}

main().catch((err) => {
  console.error("[fantasy-push] Fatal:", err);
  process.exit(1);
});
