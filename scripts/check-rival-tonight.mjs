#!/usr/bin/env node
// check-rival-tonight.mjs — Fire rival-topic pushes for tonight's slate (gamePreviews).

import { extractPulseExport } from "./lib/read-pulse-exports.mjs";
import { pushAlreadySent, pushMarkSent } from "./lib/push-dispatch-log.mjs";
import { firePushNotify, isPushDryRun } from "./lib/push-fire.mjs";
const REQUIRED = ["SUPABASE_URL", "SUPABASE_SERVICE_KEY", "PUSH_API_URL", "PUSH_API_SECRET"];
const missing = REQUIRED.filter((k) => !process.env[k]);
if (missing.length) {
  console.log(`[check-rival-tonight] Skipping — missing env: ${missing.join(", ")}`);
  process.exit(0);
}

const { SUPABASE_URL, SUPABASE_SERVICE_KEY, PUSH_API_URL, PUSH_API_SECRET } = process.env;

async function firePush(payload) {
  const res = await fetch(PUSH_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret: PUSH_API_SECRET, ...payload }),
  });
  if (!res.ok) throw new Error(`push-notify ${res.status}: ${await res.text().catch(() => "")}`);
}

async function main() {
  const edition = extractPulseExport("pulseEdition");
  const previews = extractPulseExport("gamePreviews") || [];
  const date = edition?.date ?? new Date().toISOString().slice(0, 10);

  if (!previews.length) {
    console.log("[check-rival-tonight] No game previews — nothing to send.");
    return;
  }

  for (const g of previews) {
    const away = g.awayTeam;
    const home = g.homeTeam;
    if (!away || !home) continue;
    const eventKey = `rival:${date}:${[away, home].sort().join("-")}`;
    if (await pushAlreadySent(SUPABASE_URL, SUPABASE_SERVICE_KEY, eventKey)) continue;

    try {
      await firePushNotify({
        pushApiUrl: PUSH_API_URL,
        pushApiSecret: PUSH_API_SECRET,
        payload: {
          topic: "rival",
          title: `Rivalry night: ${away} @ ${home}`,
          body: `${g.spread ?? "Lines on the board"} · ${g.time ?? "Tip TBD"}${g.tv ? ` · ${g.tv}` : ""}`,
          rivalAway: away,
          rivalHome: home,
          url: "https://hoopsintel.net/#scores",
        },
      });
      await pushMarkSent(SUPABASE_URL, SUPABASE_SERVICE_KEY, eventKey);
      console.log(`[rival] sent for ${away} @ ${home}`);
    } catch (err) {
      console.error(`[rival] failed ${away}@${home}:`, err.message);
    }
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
