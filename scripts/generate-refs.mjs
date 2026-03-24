#!/usr/bin/env node
// generate-refs.mjs — Daily referee reports generator
// Reads today's pulseData.ts (game previews) and generates ref tendency reports via Claude API
// Run daily after generate-edition.mjs completes

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

// ── Date helpers ───────────────────────────────────────────
function toDisplayDate(daysOffset = 0) {
  const d = new Date();
  const la = new Date(d.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
  la.setDate(la.getDate() + daysOffset);
  return la.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

// ── Main ──────────────────────────────────────────────────
async function main() {
  const client = new Anthropic();
  const editionDate = toDisplayDate(0);

  console.log(`🏁 Generating Referee Reports for ${editionDate}...`);

  // Read today's edition data (includes game previews for tonight)
  const pulseData = readFileSync(join(ROOT, "client/src/lib/pulseData.ts"), "utf8");

  // Read previous ref data for continuity
  let prevRefs = "";
  try {
    prevRefs = readFileSync(join(ROOT, "client/src/lib/refData.ts"), "utf8");
  } catch {
    console.log("   No previous ref data found — generating fresh.");
  }

  const prompt = `You are an NBA referee analyst for Hoops Intel. Generate tonight's complete referee reports data file based on the scheduled games.

## Today's Edition Data (includes tonight's game previews)
${pulseData}

${prevRefs ? `## Previous Ref Data (for continuity on ref profiles)\n${prevRefs}` : ""}

## Output Format
Generate a complete TypeScript file that exports referee data. The file must follow this exact structure:

\`\`\`ts
// Referee Tendency Reports — Know the Whistle
// Last updated: ${editionDate}

export interface RefereeProfile {
  name: string;
  number: number;
  experience: string;
  gamesThisSeason: number;
  tendencies: {
    foulsPerGame: number;
    homeWinPct: number;
    avgPace: number;
    technicalFrequency: "High" | "Average" | "Low";
    overtimeGames: number;
  };
  bestFor: string;
  worstFor: string;
  notableGame: string;
}

export interface TonightRefAssignment {
  game: string;
  crew: string[];
  leadRef: string;
  impact: string;
  bettingAngle: string;
  historical: string;
}

export interface RefData {
  generatedDate: string;
  tonightAssignments: TonightRefAssignment[];
  refProfiles: RefereeProfile[];
  weeklyTrend: string;
}

export const refData: RefData = { ... };
\`\`\`

## Instructions
1. Create a referee assignment for EACH game listed in tonight's schedule (gamePreviews)
2. Use real NBA referee names (Tony Brothers, Scott Foster, Ed Malloy, Kane Fitzgerald, etc.)
3. Each assignment needs a 3-person crew with a designated lead ref
4. Write impact predictions that connect referee tendencies to the specific matchup
5. Include a betting angle for each game based on the ref's historical patterns
6. Add historical context for how this ref has called games involving these teams
7. Generate 8-10 referee profiles with realistic tendency data
8. Fouls per game should range from 38-46 (league avg ~42)
9. Home win percentages should range from 46-60%
10. Pace impact should range from -2.0 to +2.5
11. Write a weekly trend summary noting patterns in this week's assignments
12. Keep ref numbers accurate where possible (Tony Brothers #25, Scott Foster #48, etc.)

Output ONLY the complete TypeScript file. No markdown fences, no explanation.`;

  console.log("🤖 Calling Claude API...");

  const msg = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 10000,
    messages: [{ role: "user", content: prompt }],
  });

  const content = msg.content[0]?.type === "text" ? msg.content[0].text : "";

  // Clean up any markdown fences
  let cleaned = content.replace(/^```(?:typescript|ts)?\n?/gm, "").replace(/```$/gm, "").trim();

  // Write the file
  const outPath = join(ROOT, "client/src/lib/refData.ts");
  writeFileSync(outPath, cleaned + "\n", "utf8");

  console.log(`✅ Wrote ${outPath}`);
  console.log(`   Content length: ${cleaned.length} chars`);
}

main().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
