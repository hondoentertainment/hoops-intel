#!/usr/bin/env node
// sync-playoff-data.mjs — Writes ESPN-derived playoff series into client/src/lib/playoffData.ts
// by replacing the `playoffSeries` export. Run after fetch-playoff-series.mjs.
//
// Skips if .daily-data/playoff-series.json is missing or has zero series (keeps last committed state).

import { readFileSync, writeFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");
const SNAP = join(ROOT, ".daily-data/playoff-series.json");
const OUT = join(ROOT, "client/src/lib/playoffData.ts");

function q(s) {
  return JSON.stringify(s ?? "");
}

function formatGame(g) {
  const parts = [
    `gameNumber: ${g.gameNumber}`,
    `date: ${q(g.date)}`,
    `homeTeam: ${q(g.homeTeam)}`,
    `awayTeam: ${q(g.awayTeam)}`,
    `homeScore: ${g.homeScore === null || g.homeScore === undefined ? "null" : g.homeScore}`,
    `awayScore: ${g.awayScore === null || g.awayScore === undefined ? "null" : g.awayScore}`,
    `status: ${q(g.status)}`,
  ];
  if (g.time) parts.push(`time: ${q(g.time)}`);
  if (g.tv) parts.push(`tv: ${q(g.tv)}`);
  if (g.topPerformer) parts.push(`topPerformer: ${q(g.topPerformer)}`);
  if (g.topLine) parts.push(`topLine: ${q(g.topLine)}`);
  return `      { ${parts.join(", ")} }`;
}

function formatSeries(s) {
  const gamesInner = (s.games || []).map(formatGame).join(",\n");
  const parts = [
    `seriesId: ${q(s.seriesId)}`,
    `conference: ${q(s.conference)}`,
    `round: ${q(s.round)}`,
    `higherSeed: ${s.higherSeed}`,
    `lowerSeed: ${s.lowerSeed}`,
    `higherTeam: ${q(s.higherTeam)}`,
    `lowerTeam: ${q(s.lowerTeam)}`,
    `higherWins: ${s.higherWins}`,
    `lowerWins: ${s.lowerWins}`,
    `status: ${q(s.status)}`,
  ];
  if (s.winner) parts.push(`winner: ${q(s.winner)}`);
  if (s.eliminationGame) parts.push(`eliminationGame: true`);
  parts.push(`summary: ${q(s.summary)}`);
  parts.push(`games: [\n${gamesInner}\n    ]`);
  return `  {\n    ${parts.join(",\n    ")},\n  }`;
}

function main() {
  if (!existsSync(SNAP)) {
    console.log("[sync-playoff-data] No playoff-series.json — skipping.");
    return;
  }
  let data;
  try {
    data = JSON.parse(readFileSync(SNAP, "utf8"));
  } catch (e) {
    console.warn("[sync-playoff-data] Invalid JSON — skipping:", e.message);
    return;
  }
  const series = data.series || [];
  if (series.length === 0) {
    console.log("[sync-playoff-data] Empty series array — skipping (keeping committed playoffData.ts).");
    return;
  }

  const src = readFileSync(OUT, "utf8");
  const startMark = "// BEGIN_PLAYOFF_SERIES_SYNC";
  const endMark = "// END_PLAYOFF_SERIES_SYNC";

  const block = `${startMark}
export const playoffSeries: PlayoffSeries[] = [
${series.map(formatSeries).join(",\n")}
];
${endMark}`;

  let next;
  if (src.includes(startMark) && src.includes(endMark)) {
    next = src.replace(/\/\/ BEGIN_PLAYOFF_SERIES_SYNC[\s\S]*?\/\/ END_PLAYOFF_SERIES_SYNC/, block);
  } else {
    // Match LF or CRLF; allow any run of newlines before playoffMovers. Note: `\r?\n+`
    // is wrong here — it only eats one CRLF; blank lines are `\r\n\r\n` on Windows.
    const re =
      /export const playoffSeries: PlayoffSeries\[\] = \[[\s\S]*?\r?\n\];(?:\r?\n)+export const playoffMovers/;
    if (!re.test(src)) {
      console.error("[sync-playoff-data] Could not find playoffSeries export — abort.");
      process.exit(1);
    }
    next = src.replace(re, `${block}\n\nexport const playoffMovers`);
  }

  writeFileSync(OUT, next, "utf8");
  console.log(`✅ playoffData.ts — synced ${series.length} series from ESPN snapshot`);
}

main();
