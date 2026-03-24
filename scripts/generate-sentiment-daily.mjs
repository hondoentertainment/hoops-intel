#!/usr/bin/env node
// generate-sentiment-daily.mjs — Daily NBA Social Sentiment Pulse generator
// Reads current pulseData.ts for context + calls Claude API to generate sentiment analysis
// Run daily at 5:30am PST via GitHub Actions

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
  const client = new Anthropic(); // reads ANTHROPIC_API_KEY from env

  const editionDate = toDisplayDate(0);

  console.log(`📊 Generating Sentiment Pulse for ${editionDate}`);

  // Read context files
  const currentPulse = readFileSync(join(ROOT, "client/src/lib/pulseData.ts"), "utf8");
  const currentSentiment = (() => {
    try {
      return readFileSync(join(ROOT, "client/src/lib/sentimentData.ts"), "utf8");
    } catch {
      return "// No existing sentiment data";
    }
  })();

  console.log("🤖 Calling Claude API to generate sentiment analysis...");

  const prompt = `You are the social media analyst for Hoops Intel (hoopsintel.net), an NBA intelligence dashboard. Generate today's complete sentimentData.ts TypeScript file with social sentiment analysis.

## Edition Info
- Date: ${editionDate}

## Current pulseData.ts (for game results, standings, and player context)
${currentPulse}

## Current sentimentData.ts (for format reference — follow this structure EXACTLY)
${currentSentiment}

## Instructions

Generate a complete sentimentData.ts file with these sections:

### Interfaces (copy exactly from the current file)
- PlayerSentiment, TeamSentiment, SentimentData interfaces

### Data Requirements
1. **Players**: 15 players with sentiment analysis based on last night's games and season narratives
   - overallSentiment: -100 to +100 based on how the internet feels about them RIGHT NOW
   - twitterScore/redditScore: can differ (Reddit tends more analytical, Twitter more reactive)
   - volume: "viral" for players dominating discourse, "high" for trending, "moderate" for discussed, "low" for under-radar
   - topTake: the dominant internet opinion (1-2 sentences, written like a tweet/Reddit hot take)
   - contraryTake: the contrarian position (1-2 sentences)
   - performanceGap: positive means underrated by public, negative means overrated
   - buzzTopics: 4-6 hashtag-style topics driving discussion

2. **Teams**: 10 teams with fan mood analysis
   - fanMood: "ecstatic" | "optimistic" | "neutral" | "frustrated" | "furious"
   - moodScore: -100 to +100
   - topGrievance: what fans are complaining about most
   - brightSpot: the silver lining

3. **Viral Moment**: the single most-shared NBA clip/moment from last night
   - Include realistic engagement numbers (views, likes, retweets)

4. **Overrated/Underrated**: one player each with detailed explanation of why social media perception doesn't match reality

5. **Narrative**: 3-4 sentence summary of the NBA internet's vibe today — written with editorial flair

### Voice & Tone
- Hot takes should sound like real Twitter/Reddit posts — opinionated, specific, slightly unhinged
- Contrary takes should be thoughtful counterpoints
- Team grievances should capture real fan frustrations
- Write with personality — this is social media analysis, not a box score

### Format
- Start with the comment header
- Export the interfaces exactly as shown
- Export const sentimentData with all data
- Single export object, valid TypeScript
- Match the exact structure of the current file

Output ONLY the complete TypeScript file. Start with the comment header. No markdown fences, no explanation.`;

  const msg = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 8192,
    messages: [{ role: "user", content: prompt }],
  });

  const newContent = msg.content[0].text.trim();
  const outPath = join(ROOT, "client/src/lib/sentimentData.ts");
  writeFileSync(outPath, newContent, "utf8");
  console.log("✓ sentimentData.ts written");

  console.log(`\n✅ Sentiment Pulse generated for ${editionDate}`);
}

main().catch((err) => {
  console.error("❌ Sentiment generation failed:", err);
  process.exit(1);
});
