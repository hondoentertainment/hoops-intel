#!/usr/bin/env node
// generate-momentum.mjs — Daily Momentum Engine generator
// Fetches yesterday's NBA games from ESPN + calls Claude API to analyze momentum swings
// Run daily at 6am PST via GitHub Actions (after generate-edition.mjs)
//
// Usage:
//   node scripts/generate-momentum.mjs

import { claudeGenerate } from "./lib/claude-client.mjs";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { toESPNDate, toDisplayDate, toISODate } from "./lib/daily-dates.mjs";
import { stampGeneratedDate } from "./lib/stamp-generated-date.mjs";
import { writeGeneratedFile } from "./lib/write-generated-file.mjs";
import { isNbaFranchiseAbbrev } from "./lib/content-quality-constants.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

// ── ESPN scoreboard API ────────────────────────────────────

async function fetchESPN(espnDate) {
  const url = `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=${espnDate}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`ESPN API ${url} returned ${res.status}`);
  return res.json();
}

// 8K truncated mid-string on a 12-game slate (2026-10-17 #465). Retry at
// 16K like history/sentiment rather than committing a cut-off file.
const MOMENTUM_MAX_TOKENS = 16384;

export function parseMomentumGames(espnData) {
  return (espnData.events || [])
    .map((e) => {
      const comp = e.competitions?.[0];
      if (!comp) return null;
      const home = comp.competitors.find((c) => c.homeAway === "home");
      const away = comp.competitors.find((c) => c.homeAway === "away");
      const done = comp.status?.type?.completed ?? false;

      const leaders = (comp.leaders || []).map((l) => ({
        category: l.name,
        player: l.leaders?.[0]?.athlete?.displayName ?? "",
        team: l.leaders?.[0]?.team?.abbreviation ?? "",
        value: l.leaders?.[0]?.displayValue ?? "",
      }));

      return {
        status: done ? "final" : "scheduled",
        homeTeam: home?.team?.abbreviation ?? "",
        homeTeamFull: home?.team?.displayName ?? "",
        homeRecord: home?.records?.[0]?.summary ?? "",
        homeScore: done ? parseInt(home?.score ?? "0") : null,
        awayTeam: away?.team?.abbreviation ?? "",
        awayTeamFull: away?.team?.displayName ?? "",
        awayRecord: away?.records?.[0]?.summary ?? "",
        awayScore: done ? parseInt(away?.score ?? "0") : null,
        time: comp.status?.type?.shortDetail ?? "",
        venue: comp.venue?.fullName ?? "",
        leaders,
      };
    })
    .filter(
      (g) => g && isNbaFranchiseAbbrev(g.homeTeam) && isNbaFranchiseAbbrev(g.awayTeam),
    );
}

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
  generatedDate: string;
  date: string;
  games: MomentumSwing[];
  gameOfTheNight: string;
  topClutchPerformer: { player: string; team: string; clutchRating: number; description: string };
}

export const momentumData: MomentumData = {
  generatedDate: "${toISODate(0)}",
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
- Narratives should be vivid, editorial, 2-4 sentences
- On a large slate keep swings to 2-3 per game so the file is complete
- The TypeScript must be syntactically valid and importable
- The file MUST end with a closing \`};\` for export const momentumData`;
}

// ── Main ────────────────────────────────────────────────────

async function main() {
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
    const espnData = await fetchESPN(yesterdayESPN);
    games = parseMomentumGames(espnData);
  } catch (err) {
    console.error("❌ ESPN fetch error:", err.message);
    process.exit(1);
  }

  const finalGames = games.filter((g) => g.status === "final");
  console.log(`   Found ${finalGames.length} completed games`);

  if (finalGames.length === 0) {
    const outPath = join(ROOT, "client", "src", "lib", "momentumData.ts");
    const next = stampGeneratedDate(readFileSync(outPath, "utf8"), toISODate(0));
    writeFileSync(outPath, next, "utf8");
    console.log("⚠  No completed games found. Stamped generatedDate; left game narratives unchanged.");
    process.exit(0);
  }

  // Read pulse context
  const pulseContext = readPulseContext();
  console.log("📊 Loaded pulseData.ts context");

  const prompt = buildPrompt(displayDate, pulseContext, JSON.stringify(finalGames, null, 2));
  const outPath = join(ROOT, "client", "src", "lib", "momentumData.ts");

  async function generateOnce(attempt) {
    console.log(`🤖 Calling Claude (max_tokens=${MOMENTUM_MAX_TOKENS}, attempt ${attempt}/2)...`);
    const message = await claudeGenerate("momentum", {
      max_tokens: MOMENTUM_MAX_TOKENS,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    if (message.stop_reason === "max_tokens") {
      console.warn("⚠ Claude output was truncated (hit max_tokens)");
    }

    const block = message.content.find((b) => b.type === "text");
    if (!block) throw new Error("No text block in Claude response");
    return block.text
      .replace(/^```(?:typescript|ts)?\n?/m, "")
      .replace(/\n?```$/m, "")
      .trim();
  }

  const result = await writeGeneratedFile(outPath, generateOnce, { retries: 2 });
  if (!result.ok) {
    throw new Error(`momentumData.ts failed validation: ${result.reason}`);
  }

  writeFileSync(outPath, stampGeneratedDate(readFileSync(outPath, "utf8"), toISODate(0)), "utf8");
  console.log(`✅ Momentum Engine data written to: ${outPath}`);
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) {
  main().catch((err) => {
    console.error("Fatal error:", err);
    process.exit(1);
  });
}
