#!/usr/bin/env node
// generate-history.mjs — Daily historical context engine generator
// Reads today's pulseData.ts and generates historical comparisons via Claude API
// Run daily after generate-edition.mjs completes

import { claudeGenerate } from "./lib/claude-client.mjs";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { toDisplayDate } from "./lib/daily-dates.mjs";
import { writeGeneratedFile } from "./lib/write-generated-file.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

// ── Main ──────────────────────────────────────────────────
async function main() {
  const editionDate = toDisplayDate(0);

  console.log(`📜 Generating Historical Context Engine for ${editionDate}...`);

  // Read today's edition data
  const pulseData = readFileSync(join(ROOT, "client/src/lib/pulseData.ts"), "utf8");

  // Read previous history data for continuity
  let prevHistory = "";
  try {
    prevHistory = readFileSync(join(ROOT, "client/src/lib/historyData.ts"), "utf8");
  } catch {
    console.log("   No previous history data found — generating fresh.");
  }

  const prompt = `You are a basketball historian for Hoops Intel. Generate today's complete historical context engine data file. Draw parallels between current NBA events and historical moments.

## Today's Edition Data
${pulseData}

${prevHistory ? `## Previous History Data (for continuity)\n${prevHistory}` : ""}

## Output Format
Generate a complete TypeScript file that exports history data. The file must follow this exact structure:

\`\`\`ts
// Historical Context Engine — Past Meets Present
// Last updated: ${editionDate}

export interface HistoricalComparison {
  currentEvent: string;
  player: string;
  team: string;
  historicalParallel: {
    player: string;
    season: string;
    stat: string;
    context: string;
  };
  comparison: string;
  verdict: "On pace to surpass" | "Falling short" | "Matching stride";
}

export interface MilestoneWatch {
  player: string;
  team: string;
  milestone: string;
  current: string;
  needed: string;
  projectedDate: string;
  significance: string;
}

export interface HistoryData {
  generatedDate: string;
  comparisons: HistoricalComparison[];
  milestoneWatch: MilestoneWatch[];
  thisWeekInHistory: { year: number; event: string; players: string[] }[];
  streakWatch: { player: string; team: string; streak: string; record: string; gamesAway: number }[];
  narrative: string;
}

export const historyData: HistoryData = { ... };
\`\`\`

## Instructions
1. Generate 5-7 historical comparisons connecting current players/events to NBA history
2. Each comparison needs a current event, historical parallel with specific stats/season, and a verdict
3. Include 5-7 milestone watch items with realistic projected dates and progress
4. Add 4-6 "This Week in NBA History" events with accurate dates and players
5. Include 5-7 streak watch items comparing active streaks to records
6. Write a compelling narrative paragraph tying the historical themes together
7. Be historically accurate — use real NBA records, real seasons, real stats
8. Update milestones and streaks based on latest game results
9. Verdicts should be thoughtful: "On pace to surpass", "Falling short", or "Matching stride"

Output ONLY the complete TypeScript file. No markdown fences, no explanation. The file MUST end with \`};\` closing export const historyData.`;

  const outPath = join(ROOT, "client/src/lib/historyData.ts");

  async function generateOnce() {
    console.log("🤖 Calling Claude API...");
    const msg = await claudeGenerate("history", {
      max_tokens: 12000,
      messages: [{ role: "user", content: prompt }],
    });
    const content = msg.content[0]?.type === "text" ? msg.content[0].text : "";
    return content.replace(/^```(?:typescript|ts)?\n?/gm, "").replace(/```$/gm, "").trim() + "\n";
  }

  const result = await writeGeneratedFile(outPath, generateOnce, { retries: 2 });
  if (!result.ok) {
    throw new Error(`historyData.ts failed validation: ${result.reason}`);
  }

  console.log(`✅ Wrote ${outPath}`);
}

main().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
