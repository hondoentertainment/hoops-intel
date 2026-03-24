#!/usr/bin/env node
// generate-lineups.mjs — Weekly Lineup Intelligence generator
// Calls Claude API with pulse data context to generate lineup analysis for top 10 teams
// Run weekly on Monday at 7am PST via GitHub Actions
//
// Usage:
//   node scripts/generate-lineups.mjs
//   node scripts/generate-lineups.mjs --week "Week of March 22–28, 2026"

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

// Compute default week label: "Week of <Mon>–<Sun>, YYYY"
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

// ── Read pulseData.ts as context ────────────────────────────

function readPulseContext() {
  const pulseDataPath = join(ROOT, "client", "src", "lib", "pulseData.ts");
  try {
    const raw = readFileSync(pulseDataPath, "utf8");
    // Extract pulse index and standings for context
    const indexMatch = raw.match(/export const pulseIndex\s*=\s*(\[[\s\S]*?\]);/);
    const standingsMatch = raw.match(/export const standings\s*=\s*(\{[\s\S]*?\});/);
    let context = "";
    if (indexMatch) {
      context += `Pulse Index (top 10 players):\n${indexMatch[1]}\n\n`;
    }
    if (standingsMatch) {
      context += `Standings:\n${standingsMatch[1]}\n\n`;
    }
    if (!context) {
      context = raw.slice(0, 5000);
    }
    return context;
  } catch (err) {
    console.warn("⚠  Could not read pulseData.ts:", err.message);
    return "(pulseData.ts not available)";
  }
}

// ── Claude prompt ───────────────────────────────────────────

function buildPrompt(weekLabel, generatedDate, pulseContext) {
  return `You are the Hoops Intel AI analyst. Generate the weekly Lineup Intelligence report — analyzing the best, worst, and closing lineups for the top 10 NBA teams.

Context from current pulseData.ts:
${pulseContext}

Week: ${weekLabel}
Generated: ${generatedDate}

Return ONLY a valid TypeScript module with this exact structure — no markdown fences, no commentary, just the TypeScript:

// Lineup Intelligence — Weekly lineup analysis
// Last updated: ${generatedDate}
// Live at: https://hoopsintel.net/lineups

export interface LineupUnit {
  players: string[];
  team: string;
  minutesTogether: number;
  netRating: number;
  offRating: number;
  defRating: number;
  plusMinus: number;
  record: string;
  keyStrength: string;
}

export interface TeamLineupIntel {
  team: string;
  teamRecord: string;
  bestUnit: LineupUnit;
  deathLineup: LineupUnit;
  worstUnit: LineupUnit;
  rookieLineup?: LineupUnit;
  newLookLineup?: LineupUnit;
  narrative: string;
}

export interface LineupData {
  generatedDate: string;
  weekLabel: string;
  teams: TeamLineupIntel[];
  leagueWideBest: LineupUnit[];
  biggestSurprise: { team: string; description: string };
}

export const lineupData: LineupData = {
  generatedDate: "${generatedDate}",
  weekLabel: "${weekLabel}",
  leagueWideBest: [
    // Top 5 lineups in the NBA by net rating (min 30 minutes)
  ],
  biggestSurprise: {
    team: "...",
    description: "2-3 sentence description of the most surprising lineup finding"
  },
  teams: [
    // 10 teams, each with bestUnit, deathLineup, worstUnit, optional rookieLineup/newLookLineup
    // Sort by team record (best first)
    // Narratives: 3-5 sentences, editorial voice, specific insights
  ],
};

Rules:
- Include exactly 10 teams (the top contenders + any surprising teams)
- leagueWideBest: top 5 lineups across the league, sorted by net rating
- Each team needs bestUnit, deathLineup, worstUnit at minimum
- Add rookieLineup for teams with notable rookie contributions
- Add newLookLineup for teams with significant mid-season trades
- netRating: per 100 possessions (range roughly -15 to +25 for extremes)
- offRating/defRating: per 100 possessions (range roughly 95-125)
- minutesTogether: realistic (300-500 for starters, 30-100 for closers, 30-90 for worst units)
- record: either "Equivalent to XX-YY pace" or "X-Y in games when closing"
- Death lineup = the unit used in the final 5 minutes of close games
- Players must be real current NBA players on the correct teams
- Narratives must be specific, editorial, and reference recent performance
- The TypeScript must be syntactically valid and importable`;
}

// ── Write output ────────────────────────────────────────────

function writeOutput(content) {
  const outPath = join(ROOT, "client", "src", "lib", "lineupData.ts");
  writeFileSync(outPath, content, "utf8");
  return outPath;
}

// ── Main ────────────────────────────────────────────────────

async function main() {
  const weekLabel = getArg("--week") ?? defaultWeekLabel();
  const generatedDate = displayDate();

  console.log("🏀 Hoops Intel — Lineup Intelligence Generator");
  console.log(`   Week:      ${weekLabel}`);
  console.log(`   Generated: ${generatedDate}`);
  console.log("");

  // Read pulse context
  const pulseContext = readPulseContext();
  console.log("📊 Loaded pulseData.ts context");

  // Init Anthropic client
  const client = new Anthropic();

  console.log("🤖 Calling Claude (claude-sonnet-4-6)...");
  const prompt = buildPrompt(weekLabel, generatedDate, pulseContext);

  let responseText;
  try {
    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 12000,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const block = message.content.find((b) => b.type === "text");
    if (!block) throw new Error("No text block in Claude response");
    responseText = block.text;
  } catch (err) {
    console.error("❌ Claude API error:", err.message);
    process.exit(1);
  }

  // Strip any accidental markdown fences
  responseText = responseText
    .replace(/^```(?:typescript|ts)?\n?/m, "")
    .replace(/\n?```$/m, "")
    .trim();

  // Write to file
  let outPath;
  try {
    outPath = writeOutput(responseText);
  } catch (err) {
    console.error("❌ Failed to write output:", err.message);
    process.exit(1);
  }

  console.log(`✅ Lineup Intelligence written to: ${outPath}`);
  console.log("");
  console.log("Next steps:");
  console.log("  1. Review client/src/lib/lineupData.ts for accuracy");
  console.log("  2. Commit and deploy");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
