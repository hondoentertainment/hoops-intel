#!/usr/bin/env node
// generate-momentum.mjs — Daily Momentum Engine generator
// Fetches yesterday's NBA games from ESPN + calls Claude API to analyze momentum swings
// Run daily at 6am PST via GitHub Actions (after generate-edition.mjs)
//
// Usage:
//   node scripts/generate-momentum.mjs

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

import { toESPNDate, toDisplayDate } from "./lib/dates.mjs";
import { retryAsync, requireEnv } from "./lib/retry.mjs";
import { fetchESPNCached, parseGames } from "./lib/espn-cache.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

// ── Read pulseData.ts as context ────────────────────────────

function readPulseContext() {
  const pulseDataPath = join(ROOT, "client", "src", "lib", "pulseData.ts");
  try {
    const raw = readFileSync(pulseDataPath, "utf8");
    // Extract game results for context
    const match = raw.match(/export const gameResults\s*=\s*(\[[\s\S]*?\]);/);
    if (match) {
      return `Current game results:\n${match[1]}`;
    }
    return raw.slice(0, 4000);
  } catch (err) {
    console.warn("⚠  Could not read pulseData.ts:", err.message);
    return "(pulseData.ts not available)";
  }
}

// ── Claude prompt ───────────────────────────────────────────

function buildPrompt(displayDate, pulseContext, gamesJson) {
  return `You are the Hoops Intel AI analyst. Generate the daily Momentum Engine data — analyzing momentum swings, clutch plays, and game narratives for last night's NBA games.

Context — current game results from pulseData.ts:
${pulseContext}

ESPN game data:
${gamesJson}

Date for this analysis: ${displayDate}

Return ONLY a valid TypeScript module with this exact structure — no markdown fences, no commentary, just the TypeScript:

// Momentum Engine — Real-time narrative momentum shifts
// Last updated: ${displayDate}
// Live at: https://hoopsintel.net/momentum

export interface MomentumSwing {
  gameId: string;
  teams: { home: string; away: string };
  finalScore: { home: number; away: number };
  swings: {
    quarter: string;
    timestamp: string;
    description: string;
    runScore: string;
    momentum: "home" | "away";
    keyPlayer: string;
    impact: "game-changing" | "significant" | "notable";
  }[];
  clutchPlays: {
    player: string;
    team: string;
    description: string;
    timeRemaining: string;
    winProbabilityShift: number;
  }[];
  narrative: string;
}

export interface MomentumData {
  date: string;
  games: MomentumSwing[];
  gameOfTheNight: string;
  topClutchPerformer: { player: string; team: string; clutchRating: number; description: string };
}

export const momentumData: MomentumData = {
  date: "${displayDate}",
  gameOfTheNight: "...", // gameId of the most dramatic game
  topClutchPerformer: { ... },
  games: [
    // One MomentumSwing per game
    // Each game should have 2-5 momentum swings
    // Close games should have more clutch plays
    // Blowouts should have fewer swings but note the key run that broke it open
  ],
};

Rules:
- gameId format: "AWAY-HOME-YYYYMMDD" (e.g., "LAL-HOU-20260322")
- Each game needs 2-5 realistic momentum swings based on score progression
- Clutch plays: only for close games (within 10 points in final 5 minutes)
- winProbabilityShift: positive = favors the winning team, negative = favors the losing team
- clutchRating: 0-100 scale for the top clutch performer
- Narratives should be vivid, editorial, 3-5 sentences
- The TypeScript must be syntactically valid and importable`;
}

// ── Write output ────────────────────────────────────────────

function writeOutput(content) {
  const outPath = join(ROOT, "client", "src", "lib", "momentumData.ts");
  writeFileSync(outPath, content, "utf8");
  return outPath;
}

// ── Generate (callable from orchestrator or standalone) ───

export async function generate({ client }) {
  const displayDate = toDisplayDate(0);
  const yesterdayESPN = toESPNDate(-1);

  console.log("🏀 Hoops Intel — Momentum Engine Generator");
  console.log(`   Date:      ${displayDate}`);
  console.log(`   Games:     ${yesterdayESPN}`);
  console.log("");

  // Fetch ESPN data
  console.log("📡 Fetching ESPN scoreboard data...");
  let games;
  try {
    const espnData = await fetchESPNCached(yesterdayESPN);
    games = parseGames(espnData);
  } catch (err) {
    throw new Error(`ESPN fetch error: ${err.message}`);
  }

  const finalGames = games.filter((g) => g.status === "final");
  console.log(`   Found ${finalGames.length} completed games`);

  if (finalGames.length === 0) {
    console.log("⚠  No completed games found. Skipping generation.");
    return;
  }

  // Read pulse context
  const pulseContext = readPulseContext();
  console.log("📊 Loaded pulseData.ts context");

  console.log("🤖 Calling Claude (claude-sonnet-4-6)...");
  const prompt = buildPrompt(displayDate, pulseContext, JSON.stringify(finalGames, null, 2));

  let responseText;
  try {
    const message = await retryAsync(() => client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 8192,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    }));

    const block = message.content.find((b) => b.type === "text");
    if (!block) throw new Error("No text block in Claude response");
    responseText = block.text;
  } catch (err) {
    throw new Error(`Claude API error: ${err.message}`);
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
    throw new Error(`Failed to write output: ${err.message}`);
  }

  console.log(`✅ Momentum Engine data written to: ${outPath}`);
}

// ── Standalone CLI entry point ────────────────────────────
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  if (!requireEnv("ANTHROPIC_API_KEY", "generate-momentum")) process.exit(0);
  generate({ client: new Anthropic() }).catch((err) => {
    console.error("❌ Generation failed:", err);
    process.exit(1);
  });
}
