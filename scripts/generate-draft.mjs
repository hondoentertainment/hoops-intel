#!/usr/bin/env node
// generate-draft.mjs — Weekly Draft Stock Tracker generator
// Run weekly via GitHub Actions or manually
//
// Usage:
//   node scripts/generate-draft.mjs
//   node scripts/generate-draft.mjs --week "Week of March 23–29, 2026"

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

// ── CLI args ────────────────────────────────────────────────

function getArg(flag) {
  const idx = process.argv.indexOf(flag);
  if (idx !== -1 && process.argv[idx + 1]) {
    return process.argv[idx + 1];
  }
  return null;
}

function defaultWeekLabel() {
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
  const dayOfWeek = now.getDay();
  const daysToMon = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const mon = new Date(now);
  mon.setDate(now.getDate() + daysToMon);
  const sun = new Date(mon);
  sun.setDate(mon.getDate() + 6);

  const fmt = (d) =>
    d.toLocaleDateString("en-US", { month: "long", day: "numeric" });
  const year = sun.getFullYear();
  return `Week of ${fmt(mon)}–${fmt(sun).replace(/\D.*/, sun.getDate().toString())}, ${year}`;
}

function displayDate() {
  return new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
  ).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

// ── Read standings context ──────────────────────────────────

function readStandingsContext() {
  const pulseDataPath = join(ROOT, "client", "src", "lib", "pulseData.ts");
  try {
    const raw = readFileSync(pulseDataPath, "utf8");
    const eastMatch = raw.match(/export const eastStandings\s*=\s*(\[[\s\S]*?\]);/);
    const westMatch = raw.match(/export const westStandings\s*=\s*(\[[\s\S]*?\]);/);
    let context = "";
    if (eastMatch) context += `East Standings:\n${eastMatch[1]}\n`;
    if (westMatch) context += `West Standings:\n${westMatch[1]}\n`;
    return context || raw.slice(0, 3000);
  } catch (err) {
    console.warn("⚠  Could not read pulseData.ts:", err.message);
    return "(pulseData.ts not available)";
  }
}

// ── Claude prompt ───────────────────────────────────────────

function buildPrompt(weekLabel, standingsContext) {
  return `You are the Hoops Intel draft analyst. Generate the weekly Draft Stock Tracker — a big board of the top 30 prospects for the 2026 NBA Draft.

Context — current NBA standings (for tank watch):
${standingsContext}

Week: ${weekLabel}
Generated: ${displayDate()}

Return ONLY a valid TypeScript module with the exact structure shown below — no markdown fences, no commentary, just the TypeScript:

// Auto-generated Draft Stock Tracker data
// Weekly big board and scouting reports for the 2026 NBA Draft

export interface DraftProspect {
  rank: number; prevRank: number; name: string; school: string;
  position: string; height: string; age: number; scoutingGrade: number;
  projection: string; bestFit: string[]; strengths: string[]; weaknesses: string[];
  comparison: string; weeklyNote: string; trend: "rising" | "falling" | "stable";
  stats: { ppg: number; rpg: number; apg: number; fgPct: number; threePct: number };
}

export interface TeamNeed {
  team: string; record: string; lotteryOdds: string;
  primaryNeed: string; secondaryNeed: string; bestProspectFit: string; note: string;
}

export interface DraftData {
  generatedDate: string; weekLabel: string; classYear: number;
  bigBoard: DraftProspect[]; risers: { name: string; change: number; reason: string }[];
  fallers: { name: string; change: number; reason: string }[];
  tankWatch: TeamNeed[]; weeklyScoutReport: string;
}

export const draftData: DraftData = {
  generatedDate: "${displayDate()}",
  weekLabel: "${weekLabel}",
  classYear: 2026,
  bigBoard: [
    // 30 prospects — use real 2026 class names where known, plausible names otherwise
    // Each with detailed scouting data, NBA comparisons, and weekly notes
  ],
  risers: [ /* 3 risers with change amount and reason */ ],
  fallers: [ /* 3 fallers with change amount and reason */ ],
  tankWatch: [ /* bottom 8 teams from standings with lottery odds, needs, best fit */ ],
  weeklyScoutReport: "3-4 sentence narrative overview of the week in draft scouting",
};

Rules:
- Include exactly 30 prospects
- Use real college/international players from the 2026 class where possible
- prevRank should reflect plausible movement (1-3 spots)
- scoutingGrade: 95-100 for No. 1 pick, scales down
- NBA comparisons should be specific and relevant
- Tank watch should use actual bottom teams from the standings
- The TypeScript must be syntactically valid and importable`;
}

// ── Write output ────────────────────────────────────────────

function writeOutput(content) {
  const outPath = join(ROOT, "client", "src", "lib", "draftData.ts");
  writeFileSync(outPath, content, "utf8");
  return outPath;
}

// ── Main ────────────────────────────────────────────────────

async function main() {
  const weekLabel = getArg("--week") ?? defaultWeekLabel();
  const generatedDate = displayDate();

  console.log("🏀 Hoops Intel — Draft Stock Tracker Generator");
  console.log(`   Week:      ${weekLabel}`);
  console.log(`   Generated: ${generatedDate}`);
  console.log("");

  const standingsContext = readStandingsContext();
  console.log("📊 Loaded standings context");

  const client = new Anthropic();

  console.log("🤖 Calling Claude (claude-sonnet-4-6)...");
  const prompt = buildPrompt(weekLabel, standingsContext);

  let responseText;
  try {
    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 12288,
      messages: [{ role: "user", content: prompt }],
    });

    const block = message.content.find((b) => b.type === "text");
    if (!block) throw new Error("No text block in Claude response");
    responseText = block.text;
  } catch (err) {
    console.error("❌ Claude API error:", err.message);
    process.exit(1);
  }

  responseText = responseText
    .replace(/^```(?:typescript|ts)?\n?/m, "")
    .replace(/\n?```$/m, "")
    .trim();

  let outPath;
  try {
    outPath = writeOutput(responseText);
  } catch (err) {
    console.error("❌ Failed to write output:", err.message);
    process.exit(1);
  }

  console.log(`✅ Draft Stock Tracker written to: ${outPath}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
