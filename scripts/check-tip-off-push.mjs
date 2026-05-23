#!/usr/bin/env node
// check-tip-off-push.mjs — Fire game-start pushes ~30 minutes before tip (favorite-team subs).

import { extractPulseExport } from "./lib/read-pulse-exports.mjs";
import { pushAlreadySent, pushMarkSent } from "./lib/push-dispatch-log.mjs";
import { firePushNotify } from "./lib/push-fire.mjs";
import { editionDateKey } from "./lib/push-slate.mjs";
import { tipWithinHours } from "./lib/tip-window.mjs";

const REQUIRED = ["SUPABASE_URL", "SUPABASE_SERVICE_KEY", "PUSH_API_URL", "PUSH_API_SECRET"];
const missing = REQUIRED.filter((k) => !process.env[k]);
if (missing.length) {
  console.log(`[check-tip-off-push] Skipping — missing env: ${missing.join(", ")}`);
  process.exit(0);
}

const { SUPABASE_URL, SUPABASE_SERVICE_KEY, PUSH_API_URL, PUSH_API_SECRET } = process.env;
const TIP_WINDOW_HOURS = 0.5;

async function main() {
  const edition = extractPulseExport("pulseEdition");
  const previews = extractPulseExport("gamePreviews") || [];
  const dateKey = editionDateKey(edition?.date);

  if (!previews.length) {
    console.log("[check-tip-off-push] No game previews — nothing to send.");
    return;
  }

  let fired = 0;
  for (const g of previews) {
    const away = g.awayTeam;
    const home = g.homeTeam;
    if (!away || !home) continue;

    const tipGame = { date: dateKey, time: g.time };
    if (!tipWithinHours(tipGame, TIP_WINDOW_HOURS)) continue;

    const eventKey = `game-start:${dateKey}:${away}-${home}`;
    if (await pushAlreadySent(SUPABASE_URL, SUPABASE_SERVICE_KEY, eventKey)) continue;

    for (const team of [away, home]) {
      try {
        await firePushNotify({
          pushApiUrl: PUSH_API_URL,
          pushApiSecret: PUSH_API_SECRET,
          payload: {
            topic: "game-start",
            title: `🏀 ${away} @ ${home} tips in ~30 min`,
            body: `${g.spread ?? "Lines on the board"} · ${g.time ?? "Tip soon"}${g.tv ? ` · ${g.tv}` : ""}`,
            teamAbbr: team,
            url: "https://hoopsintel.net/#scores",
          },
        });
      } catch (err) {
        console.error(`[game-start] push failed for ${team}:`, err.message);
      }
    }

    await pushMarkSent(SUPABASE_URL, SUPABASE_SERVICE_KEY, eventKey);
    console.log(`[game-start] sent for ${away} @ ${home}`);
    fired++;
  }

  console.log(`[check-tip-off-push] Processed ${previews.length} preview(s), fired ${fired}`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
