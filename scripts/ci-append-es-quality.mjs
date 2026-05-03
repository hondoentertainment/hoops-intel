#!/usr/bin/env node
// Appends Markdown to GITHUB_STEP_SUMMARY after daily generation — optional file .daily-data/espn-snapshot.json

import { appendFileSync, readFileSync, existsSync } from "fs";

const summaryPath = process.env.GITHUB_STEP_SUMMARY;
if (!summaryPath) process.exit(0);

const snapshotPath = ".daily-data/espn-snapshot.json";
if (!existsSync(snapshotPath)) {
  appendFileSync(summaryPath, "\n### ESPN snapshot — data quality\n\n_No `.daily-data/espn-snapshot.json` artifact for this workflow run._\n");
  process.exit(0);
}

let snap;
try {
  snap = JSON.parse(readFileSync(snapshotPath, "utf8"));
} catch {
  appendFileSync(summaryPath, "\n### ESPN snapshot — data quality\n\n**Parse error** reading espn-snapshot.json\n");
  process.exit(0);
}

const dq = snap.dataQuality ?? {};
const fm = dq.fetchMeta ?? [];
const lines = [
  "",
  "### Daily generation — ESPN snapshot",
  "",
  `| Metric | Value |`,
  `| --- | --- |`,
  `| Final games (stored) | ${(snap.finalGames ?? []).length} |`,
  `| Scheduled / live | ${(snap.scheduledGames ?? []).length} |`,
  `| Empty slate flag | ${dq.emptySlate ? "yes" : "no"} |`,
  `| ESPN empty-scoreboard fallback | ${dq.anyEmptyFallback ? "yes" : "no"} |`,
];

if (fm.length > 0) {
  lines.push("", "**Per-fetch** | live OK | stale cache | empty fallback");
  lines.push("| --- | :---: | :---: | :---:");
  for (const m of fm) {
    lines.push(
      `| ${m.espnDate ?? "?"} | ${m.liveFetchSucceeded ? "yes" : "no"} | ${m.usedDiskCacheFallback ? "yes" : ""} | ${m.usedEmptyFallback ? "YES" : ""} |`,
    );
  }
}
lines.push("");
appendFileSync(summaryPath, lines.join("\n"));
