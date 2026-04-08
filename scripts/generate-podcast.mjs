#!/usr/bin/env node
// generate-podcast.mjs — Daily podcast companion content generator
// Reads today's pulseData.ts and generates podcast talking points via Claude API
// Run daily after generate-edition.mjs completes

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

import { toDisplayDate } from "./lib/dates.mjs";
import { retryAsync, requireEnv } from "./lib/retry.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

// ── Generate (callable from orchestrator or standalone) ───
export async function generate({ client }) {
  const editionDate = toDisplayDate(0);

  console.log(`🎙️  Generating Podcast Companion for ${editionDate}...`);

  // Read today's edition data
  const pulseData = readFileSync(join(ROOT, "client/src/lib/pulseData.ts"), "utf8");

  const prompt = `You are a podcast producer for Hoops Intel, an NBA daily intelligence show. Generate today's complete podcast companion data file based on the current edition.

## Today's Edition Data
${pulseData}

## Output Format
Generate a complete TypeScript file that exports podcast companion data. The file must follow this exact structure:

\`\`\`ts
// Podcast Companion — Daily Episode Blueprint
// Last updated: ${editionDate}
// Generated from today's Hoops Intel edition

export interface TalkingPoint {
  topic: string;
  segment: "opener" | "deep-dive" | "hot-take" | "rapid-fire" | "closer";
  duration: string;
  keyStats: string[];
  debateAngle: string;
  suggestedQuote: string;
  relevantPlayers: string[];
}

export interface PodcastCompanionData {
  date: string;
  episodeTitle: string;
  rundown: TalkingPoint[];
  coldOpen: string;
  socialClip: string;
  tweetThread: string[];
}

export const podcastCompanion: PodcastCompanionData = { ... };
\`\`\`

## Instructions
1. Create an engaging episode title that captures the night's biggest stories
2. Write a 30-second cold open script that hooks the listener immediately
3. Generate 5 segments: opener (lead story), deep-dive (analytical segment), hot-take (debate topic), rapid-fire (quick hits), closer (looking ahead)
4. Each segment needs 4-6 key stats, a debate angle, and a suggested quote
5. Include a social clip description highlighting the most shareable moment
6. Write a 5-tweet thread summarizing the episode
7. Use conversational podcast language — energetic but informed
8. Duration estimates should be realistic (3-10 min per segment)

Output ONLY the complete TypeScript file. No markdown fences, no explanation.`;

  console.log("🤖 Calling Claude API...");

  const msg = await retryAsync(() => client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 8000,
    messages: [{ role: "user", content: prompt }],
  }));

  const content = msg.content[0]?.type === "text" ? msg.content[0].text : "";

  // Clean up any markdown fences
  let cleaned = content.replace(/^```(?:typescript|ts)?\n?/gm, "").replace(/```$/gm, "").trim();

  // Write the file
  const outPath = join(ROOT, "client/src/lib/podcastData.ts");
  writeFileSync(outPath, cleaned + "\n", "utf8");

  console.log(`✅ Wrote ${outPath}`);
  console.log(`   Content length: ${cleaned.length} chars`);
}

// ── Standalone CLI entry point ────────────────────────────
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  if (!requireEnv("ANTHROPIC_API_KEY", "generate-podcast")) process.exit(0);
  generate({ client: new Anthropic() }).catch((err) => {
    console.error("❌ Error:", err.message);
    process.exit(1);
  });
}
