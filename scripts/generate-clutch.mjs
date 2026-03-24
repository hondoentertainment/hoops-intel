#!/usr/bin/env node
// generate-clutch.mjs — Weekly Clutch Factor Rankings generator
// Run manually or via GitHub Actions once per week (e.g., Monday 6am PST)
//
// Usage:
//   node scripts/generate-clutch.mjs
//   node scripts/generate-clutch.mjs --week "Week of March 23–29, 2026"

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
  // Find Monday of current week (day 0=Sun, 1=Mon … 6=Sat)
  const dayOfWeek = now.getDay(); // 0=Sun
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
    // Extract pulseIndex block for context (lines between the export and the closing bracket)
    const match = raw.match(/export const pulseIndex\s*=\s*(\[[\s\S]*?\]);/);
    if (match) {
      return `Current Pulse Index (top 10 players by today's performance score):\n${match[1]}`;
    }
    // Fallback: pass the first 3000 chars
    return raw.slice(0, 3000);
  } catch (err) {
    console.warn("⚠  Could not read pulseData.ts:", err.message);
    return "(pulseData.ts not available)";
  }
}

// ── Claude prompt ───────────────────────────────────────────

function buildPrompt(weekLabel, pulseContext) {
  return `You are the Hoops Intel AI analyst. Generate the weekly Clutch Factor Rankings — a ranking of the top 20 most clutch NBA players based on performance in clutch situations (final 5 minutes, score within 5 points).

Context: ${pulseContext}

Week: ${weekLabel}

The Clutch Rating scores players 0–100 on their clutch performance this season.
Key inputs: clutch points per game, clutch FG%, clutch FT%, game-winning shots, clutch +/-, big moments, recent clutch performances.

Return ONLY a valid TypeScript module with this exact structure — no markdown fences, no commentary, just the TypeScript:

// Auto-generated Clutch Factor Rankings data
// Weekly rankings of the NBA's most clutch performers

export interface ClutchPlayer {
  rank: number;
  player: string;
  team: string;
  clutchRating: number;
  clutchPts: number;
  clutchFgPct: number;
  clutchFtPct: number;
  gameWinners: number;
  clutchPlusMinus: number;
  biggestMoment: string;
  trend: "up" | "down" | "stable";
}

export interface ClutchData {
  generatedDate: string;
  weekLabel: string;
  players: ClutchPlayer[];
  clutchKing: { player: string; team: string; description: string };
  worstInClutch: { player: string; team: string; description: string };
  weeklyHighlight: string;
}

export const clutchData: ClutchData = {
  generatedDate: "${displayDate()}",
  weekLabel: "${weekLabel}",
  players: [
    // ... 20 players, each with:
    // rank (1–20), player (full name), team (3-letter abbr),
    // clutchRating (0–100 integer), clutchPts (float, 1 decimal),
    // clutchFgPct (float, 1 decimal), clutchFtPct (float, 1 decimal),
    // gameWinners (integer), clutchPlusMinus (float, 1 decimal),
    // biggestMoment (1-2 sentence vivid description of their biggest clutch play),
    // trend ("up"|"down"|"stable")
  ],
  clutchKing: {
    player: "...",
    team: "...",
    description: "3-4 sentences, editorial voice, explaining why this player is the clutch king this week"
  },
  worstInClutch: {
    player: "...",
    team: "...",
    description: "3-4 sentences, slightly humorous tone, about the worst clutch performer among rotation players"
  },
  weeklyHighlight: "A paragraph summarizing the week's clutch drama — specific plays, emerging storylines, narrative voice",
};

Rules:
- Include exactly 20 players
- clutchRating: 95–100 for dominant closers, lower for inconsistent clutch performers
- biggestMoment must be vivid and specific — not generic
- worstInClutch should have a slightly humorous, sympathetic tone
- weeklyHighlight should read like sports editorial — specific moments, narrative arc
- The TypeScript must be syntactically valid and importable`;
}

// ── Write output ────────────────────────────────────────────

function writeOutput(content) {
  const outPath = join(ROOT, "client", "src", "lib", "clutchData.ts");
  writeFileSync(outPath, content, "utf8");
  return outPath;
}

// ── Main ────────────────────────────────────────────────────

async function main() {
  const weekLabel = getArg("--week") ?? defaultWeekLabel();
  const generatedDate = displayDate();

  console.log("🏀 Hoops Intel — Clutch Factor Rankings Generator");
  console.log(`   Week:      ${weekLabel}`);
  console.log(`   Generated: ${generatedDate}`);
  console.log("");

  // Read pulse context
  const pulseContext = readPulseContext();
  console.log("📊 Loaded pulseData.ts context");

  // Init Anthropic client
  const client = new Anthropic();

  console.log("🤖 Calling Claude (claude-sonnet-4-6)...");
  const prompt = buildPrompt(weekLabel, pulseContext);

  let responseText;
  try {
    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 8192,
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

  console.log(`✅ Clutch Factor Rankings written to: ${outPath}`);
  console.log("");
  console.log("Next steps:");
  console.log("  1. Review client/src/lib/clutchData.ts for accuracy");
  console.log("  2. Ensure client/src/pages/ClutchFactor.tsx imports from clutchData");
  console.log("  3. Commit and deploy");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
