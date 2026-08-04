#!/usr/bin/env node
// generate-trade-sim.mjs — Weekly Trade Simulator generator
// Run manually or via GitHub Actions once per week (e.g., Monday 6am PST)
//
// Usage:
//   node scripts/generate-trade-sim.mjs
//   node scripts/generate-trade-sim.mjs --week "Week of March 23–29, 2026"

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { validateOutput } from "./lib/validate-output.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");
const OUT_PATH = join(ROOT, "client", "src", "lib", "tradeSimData.ts");

// Trade sim payloads are large (30+ players + 6 proposals). 8K max_tokens
// truncated mid-string under weekly load (#273). A retry at the same ceiling
// is just a re-roll of the same constraint, so the second attempt gets more
// room rather than the same budget twice.
const TOKEN_LADDER = [16384, 24576];
const MAX_ATTEMPTS = TOKEN_LADDER.length;

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
  return `You are the Hoops Intel AI trade analyst. Generate the weekly Trade Simulator data — "What If" trade proposals, a tradeable player database, and hottest names on the market.

Context: ${pulseContext}

Week: ${weekLabel}

Return ONLY a valid TypeScript module with this exact structure — no markdown fences, no commentary, just the TypeScript:

// Auto-generated Trade Simulator data
// Weekly "What If" trade proposals and tradeable player database

export interface TradeablePlayer {
  name: string;
  team: string;
  position: string;
  age: number;
  salary: string;
  contractYears: number;
  ppg: number;
  rpg: number;
  apg: number;
  tradeValue: number;
  tradeable: boolean;
  untouchable: boolean;
}

export interface TradeProposal {
  id: string;
  team1: { team: string; sending: string[]; receiving: string[] };
  team2: { team: string; sending: string[]; receiving: string[] };
  salaryMatch: boolean;
  salaryDiff: string;
  aiVerdict: "approve" | "reject" | "conditional";
  aiAnalysis: string;
  team1Impact: { offense: number; defense: number; chemistry: number; future: number };
  team2Impact: { offense: number; defense: number; chemistry: number; future: number };
  winProjectionChange: { team1: string; team2: string };
}

export interface TradeSimData {
  generatedDate: string;
  players: TradeablePlayer[];
  featuredTrades: TradeProposal[];
  hottest: { player: string; team: string; reason: string }[];
}

export const tradeSimData: TradeSimData = {
  generatedDate: "${displayDate()}",
  players: [
    // 30+ players with realistic stats, salaries, ages, positions
    // Include tradeable: true for available players and tradeable: false, untouchable: true for franchise cornerstones
    // tradeValue: 0-100 scale (95+ for untouchable stars, lower for aging/expensive contracts)
    // salary: format "$XX.XM"
  ],
  featuredTrades: [
    // 6 AI-proposed trade scenarios, each with:
    // id: "trade-1" through "trade-6"
    // team1/team2: sending and receiving arrays (player names + draft picks as strings)
    // salaryMatch: boolean (true if within 25% threshold)
    // salaryDiff: descriptive string like "+$5.2M (within threshold)"
    // aiVerdict: "approve", "reject", or "conditional"
    // aiAnalysis: 2-3 sentences explaining the trade rationale, specific to this week
    // team1Impact/team2Impact: offense/defense/chemistry/future scores from -10 to +10
    // winProjectionChange: team1/team2 strings like "+3.5 wins" or "-2.0 wins"
    // Mix of verdicts: at least 2 approve, 1 reject, 1 conditional
  ],
  hottest: [
    // 6 players generating the most trade buzz
    // Each with player name, team abbreviation, and 1-2 sentence reason
  ],
};

Rules:
- Include at least 30 players in the players array
- Include exactly 6 featured trade proposals
- Include exactly 6 hottest names
- Keep aiAnalysis to 2 sentences max so the full module fits without truncation
- salaryDiff must reflect realistic NBA salary matching rules
- Impact scores must be between -10 and +10
- winProjectionChange must be formatted like "+3.5 wins" or "-2.0 wins"
- aiAnalysis must be specific to THIS week's context — not generic
- Include a mix of verdicts: at least 2 approve, at least 1 reject, at least 1 conditional
- Players in featuredTrades sending/receiving arrays should come from the players array where possible
- Use 3-letter NBA team abbreviations: ATL, BOS, BKN, CHA, CHI, CLE, DAL, DEN, DET, GSW, HOU, IND, LAC, LAL, MEM, MIA, MIL, MIN, NOP, NYK, OKC, ORL, PHI, PHX, POR, SAC, SAS, TOR, UTA, WAS
- The TypeScript must be syntactically valid and importable
- Emit the COMPLETE file ending with a closing }; — never stop mid-string`;
}

function stripFences(text) {
  return text
    .replace(/^```(?:typescript|ts)?\n?/m, "")
    .replace(/\n?```$/m, "")
    .trim();
}

async function generateOnce(client, prompt, attempt) {
  const maxTokens = TOKEN_LADDER[attempt - 1] ?? TOKEN_LADDER[TOKEN_LADDER.length - 1];
  console.log(`🤖 Calling Claude (claude-sonnet-4-6, max_tokens=${maxTokens}, attempt ${attempt}/${MAX_ATTEMPTS})...`);
  // The 24576 retry rung trips the SDK's 10-minute non-streaming guard
  // (#293), so stream and take the final message.
  const message = await client.messages
    .stream({
      model: "claude-sonnet-4-6",
      max_tokens: maxTokens,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    })
    .finalMessage();

  const block = message.content.find((b) => b.type === "text");
  if (!block) throw new Error("No text block in Claude response");

  if (message.stop_reason === "max_tokens") {
    console.warn("⚠ Claude hit max_tokens — output may be truncated");
  }

  return {
    text: stripFences(block.text),
    stopReason: message.stop_reason,
  };
}

// ── Main ────────────────────────────────────────────────────

async function main() {
  const weekLabel = getArg("--week") ?? defaultWeekLabel();
  const generatedDate = displayDate();

  console.log("🏀 Hoops Intel — Trade Simulator Generator");
  console.log(`   Week:      ${weekLabel}`);
  console.log(`   Generated: ${generatedDate}`);
  console.log("");

  // Read pulse context
  const pulseContext = readPulseContext();
  console.log("📊 Loaded pulseData.ts context");

  // Init Anthropic client
  const client = new Anthropic();
  const prompt = buildPrompt(weekLabel, pulseContext);

  let lastError = null;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    let responseText;
    try {
      const result = await generateOnce(client, prompt, attempt);
      responseText = result.text;
    } catch (err) {
      console.error("❌ Claude API error:", err.message);
      process.exit(1);
    }

    try {
      writeFileSync(OUT_PATH, responseText, "utf8");
    } catch (err) {
      console.error("❌ Failed to write output:", err.message);
      process.exit(1);
    }

    const check = await validateOutput(OUT_PATH);
    if (check.ok) {
      console.log(`✅ Trade Simulator data written to: ${OUT_PATH}`);
      console.log("");
      console.log("Next steps:");
      console.log("  1. Review client/src/lib/tradeSimData.ts for accuracy");
      console.log("  2. Verify the TradeSimulator page renders correctly");
      console.log("  3. Commit and deploy");
      return;
    }

    lastError = check.reason;
    console.error(`  [Trade Simulator] parse check failed: ${check.reason}`);
    if (attempt < MAX_ATTEMPTS) {
      console.warn("  Retrying generation once…");
    }
  }

  console.error(`❌ Trade Simulator generation failed after ${MAX_ATTEMPTS} attempts: ${lastError}`);
  process.exit(1);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
