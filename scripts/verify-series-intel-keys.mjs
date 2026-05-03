#!/usr/bin/env node
// verify-series-intel-keys.mjs — Ensure seriesIntel keys cover every playoffSeries.seriesId.
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");
const PD = join(ROOT, "client/src/lib/playoffData.ts");

const src = readFileSync(PD, "utf8");
const syncStart = src.indexOf("export const playoffSeries");
const syncEnd = src.indexOf("];", syncStart);
if (syncStart < 0 || syncEnd < 0) {
  console.error("[series-intel-keys] Could not find playoffSeries export.");
  process.exit(1);
}
const syncBlock = src.slice(syncStart, syncEnd);
const seriesIds = [...syncBlock.matchAll(/seriesId:\s*"([^"]+)"/g)].map((m) => m[1]);

const intelStart = src.indexOf("export const seriesIntel");
const intelEnd = src.indexOf("\n};", intelStart);
if (intelStart < 0 || intelEnd < 0) {
  console.error("[series-intel-keys] Could not find seriesIntel export.");
  process.exit(1);
}
const intelBlock = src.slice(intelStart, intelEnd);
const intelKeys = new Set([...intelBlock.matchAll(/^\s*"([^"]+)":\s*\{/gm)].map((m) => m[1]));

const missing = seriesIds.filter((id) => !intelKeys.has(id));
if (missing.length) {
  console.error(`[series-intel-keys] ❌ playoffSeries rows lack seriesIntel entries: ${missing.join(", ")}`);
  console.error("           Run: npm run playoff:intel (after npm run playoff:fetch && sync)");
  process.exit(1);
}

console.log(`[series-intel-keys] OK — ${seriesIds.length} series, ${intelKeys.size} intel keys.`);
