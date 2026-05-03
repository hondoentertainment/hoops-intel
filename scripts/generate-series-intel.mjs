#!/usr/bin/env node
// generate-series-intel.mjs — Regenerate seriesIntel for every active playoff series.
//
// For each series in .daily-data/playoff-series.json, asks Claude to produce:
//   - regularSeasonH2H
//   - playoffHistory
//   - keyMatchup
//   - narrative
//
// Writes the merged result back into client/src/lib/playoffData.ts by replacing
// the `seriesIntel` export. Run after fetch-playoff-series.mjs.

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { loadLocalEnv } from "./load-local-env.mjs";
import { claudeGenerate } from "./lib/claude-client.mjs";

loadLocalEnv();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

const rawMaxTokens = Number(process.env.SERIES_INTEL_MAX_TOKENS);
const maxTokens =
  Number.isFinite(rawMaxTokens) && rawMaxTokens >= 256
    ? Math.min(Math.floor(rawMaxTokens), 4096)
    : 1200;
console.log(`[series-intel] max_tokens=${maxTokens}`);

function loadSeries() {
  const path = join(ROOT, ".daily-data", "playoff-series.json");
  try {
    return JSON.parse(readFileSync(path, "utf8")).series ?? [];
  } catch {
    return [];
  }
}

function parseIntelJson(text) {
  const jsonStart = text.indexOf("{");
  const jsonEnd = text.lastIndexOf("}");
  if (jsonStart === -1 || jsonEnd === -1) throw new Error(`No JSON in response: ${text.slice(0, 200)}`);
  return JSON.parse(text.slice(jsonStart, jsonEnd + 1));
}

/** Reject empty / junk fields so we retry or fall back to placeholders less often. */
function validateIntelShape(obj) {
  const keys = ["regularSeasonH2H", "playoffHistory", "keyMatchup", "narrative"];
  for (const k of keys) {
    const v = obj[k];
    const minLen = k === "narrative" ? 48 : 20;
    if (typeof v !== "string" || v.trim().length < minLen) return `${k} too short or missing`;
    const lower = v.toLowerCase();
    if (
      lower.includes("i cannot") ||
      lower.includes("as an ai") ||
      lower.includes("json object")
    ) {
      return `${k} looks like refusal or meta-prose`;
    }
  }
  return null;
}

async function generateIntelForSeries(s, maxTokens) {
  const basePrompt = `You are the Hoops Intel editor. Produce a compact JSON object describing the H2H series intel for this NBA playoff matchup. Use factual basketball knowledge where verifiable; frame narrative with editorial voice.

Series: ${s.higherTeam} (seed ${s.higherSeed}) vs ${s.lowerTeam} (seed ${s.lowerSeed}) — ${s.conference === "east" ? "Eastern" : s.conference === "west" ? "Western" : ""} ${s.round.replace(/-/g, " ")}
Current state: ${s.summary}
Games played so far: ${s.games.filter((g) => g.status === "final").length}

Return ONLY a JSON object with this exact shape — no prose before or after:
{
  "regularSeasonH2H": "one sentence summarizing this season's regular-season head-to-head",
  "playoffHistory": "one sentence summarizing their postseason history against each other",
  "keyMatchup": "one sentence naming the single most important player matchup of the series with stat context",
  "narrative": "2-3 sentences of editorial framing — what has to happen for the underdog to win, or why the favorite is vulnerable"
}`;

  const strictSuffix =
    "\n\nAll string values must be substantive sentences (min ~15 words for narrative). No apologies, no preamble.";

  let lastErr = "";
  for (let attempt = 0; attempt < 2; attempt++) {
    const prompt = attempt === 0 ? basePrompt : `${basePrompt}${strictSuffix}`;
    const msg = await claudeGenerate(`series-intel:${s.seriesId}`, {
      max_tokens: maxTokens,
      messages: [{ role: "user", content: prompt }],
    });
    const text = msg.content[0].text.trim();
    let obj;
    try {
      obj = parseIntelJson(text);
    } catch (e) {
      lastErr = e.message;
      console.warn(`  [intel] JSON parse attempt ${attempt + 1} for ${s.seriesId}: ${lastErr}`);
      continue;
    }
    const bad = validateIntelShape(obj);
    if (!bad) return obj;
    lastErr = bad;
    console.warn(`  [intel] quality attempt ${attempt + 1} for ${s.seriesId}: ${bad}`);
  }
  throw new Error(lastErr || "exhausted intel retries");
}

function rewriteIntelExport(sourcePath, intelMap) {
  const src = readFileSync(sourcePath, "utf8");
  const re = /export const seriesIntel: Record<string, SeriesIntel> = \{[\s\S]*?\n\};/m;
  const entries = Object.entries(intelMap)
    .map(([id, v]) => {
      const safe = (s) => JSON.stringify(s);
      return `  ${safe(id)}: {\n    regularSeasonH2H: ${safe(v.regularSeasonH2H)},\n    playoffHistory: ${safe(v.playoffHistory)},\n    keyMatchup: ${safe(v.keyMatchup)},\n    narrative: ${safe(v.narrative)},\n  },`;
    })
    .join("\n");
  const replacement = `export const seriesIntel: Record<string, SeriesIntel> = {\n${entries}\n};`;
  if (!re.test(src)) throw new Error("Could not locate seriesIntel export in playoffData.ts");
  writeFileSync(sourcePath, src.replace(re, replacement), "utf8");
}

async function main() {
  const seriesRaw = loadSeries();
  const series = seriesRaw
    .map((s) => ({ ...s, seriesId: String(s.seriesId ?? "").trim() }))
    .filter((s) => s.seriesId);
  if (series.length === 0) {
    if (seriesRaw.length) console.warn("[series-intel] All rows missing seriesId — check .daily-data/playoff-series.json");
    console.log("[series-intel] No active series — skipping.");
    return;
  }
  const intel = {};
  for (const s of series) {
    try {
      console.log(`  [intel] ${s.seriesId}...`);
      intel[s.seriesId] = await generateIntelForSeries(s, maxTokens);
    } catch (err) {
      console.warn(`  [intel] failed for ${s.seriesId}: ${err.message}`);
    }
  }
  for (const s of series) {
    if (!intel[s.seriesId]) {
      console.warn(`  [intel] placeholder for ${s.seriesId} (generation failed)`);
      intel[s.seriesId] = {
        regularSeasonH2H: `${s.higherTeam} vs ${s.lowerTeam} — intel generation failed this run; re-run npm run playoff:intel.`,
        playoffHistory: `${s.summary}`,
        keyMatchup: `Watch ${s.higherTeam} vs ${s.lowerTeam} as the series shifts.`,
        narrative: `${s.summary} (Placeholder — Claude pass failed for this seriesId.)`,
      };
    }
  }
  rewriteIntelExport(join(ROOT, "client/src/lib/playoffData.ts"), intel);
  console.log(`✅ Rewrote seriesIntel for ${Object.keys(intel).length} series`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
