#!/usr/bin/env node
// generate-edition.mjs — Daily NBA Pulse edition generator
// Fetches last night's NBA data from ESPN + calls Claude API to write the edition
// Run daily at 5am PST via GitHub Actions (.github/workflows/daily-update.yml)

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

// ── Date helpers ───────────────────────────────────────────
function toESPNDate(daysOffset = 0) {
  const d = new Date();
  // Interpret "today" as LA time so 5am PST = correct date
  const la = new Date(d.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
  la.setDate(la.getDate() + daysOffset);
  return la.toISOString().slice(0, 10).replace(/-/g, "");
}

function toISODate(daysOffset = 0) {
  const d = new Date();
  const la = new Date(d.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
  la.setDate(la.getDate() + daysOffset);
  return la.toISOString().slice(0, 10); // "2026-03-07"
}

function toDisplayDate(daysOffset = 0) {
  const d = new Date();
  const la = new Date(d.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
  la.setDate(la.getDate() + daysOffset);
  return la.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

// ── ESPN scoreboard API ────────────────────────────────────
async function fetchESPN(espnDate) {
  const url = `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=${espnDate}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`ESPN API ${url} returned ${res.status}`);
  return res.json();
}

function parseGames(espnData) {
  return (espnData.events || []).map((e) => {
    const comp = e.competitions[0];
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
      tv: (comp.broadcasts || []).map((b) => b.names?.join(", ")).filter(Boolean).join(" / ") || "Local",
      leaders,
    };
  });
}

// ── Read current edition number ────────────────────────────
function getLastEditionNumber() {
  try {
    const pulse = readFileSync(join(ROOT, "client/src/lib/pulseData.ts"), "utf8");
    const m = pulse.match(/No\.\s*(\d+)/);
    return m ? parseInt(m[1]) : 62;
  } catch {
    return 62;
  }
}

// ── Main ──────────────────────────────────────────────────
async function main() {
  const client = new Anthropic(); // reads ANTHROPIC_API_KEY from env

  const yesterdayESPN = toESPNDate(-1);
  const todayESPN = toESPNDate(0);
  const editionDate = toDisplayDate(0);   // e.g. "March 7, 2026"
  const editionISO = toISODate(0);        // e.g. "2026-03-07"
  const editionNo = getLastEditionNumber() + 1;

  console.log(`📅 Generating Vol. 2026 · No. ${editionNo} — ${editionDate}`);

  // Fetch game data
  console.log(`🏀 Fetching ESPN data for ${yesterdayESPN} (results) and ${todayESPN} (schedule)...`);
  let yesterdayGames, todayGames;
  try {
    yesterdayGames = parseGames(await fetchESPN(yesterdayESPN));
    todayGames = parseGames(await fetchESPN(todayESPN));
  } catch (err) {
    console.error("ESPN fetch error:", err.message);
    process.exit(1);
  }

  const finalGames = yesterdayGames.filter((g) => g.status === "final");
  const scheduledGames = todayGames.filter((g) => g.status !== "final");

  console.log(`   Yesterday: ${finalGames.length} final games`);
  console.log(`   Tonight:   ${scheduledGames.length} scheduled games`);

  // Read reference files
  const schema = readFileSync(join(ROOT, "references/data-schema.md"), "utf8");
  const currentPulse = readFileSync(join(ROOT, "client/src/lib/pulseData.ts"), "utf8");

  // ── Generate pulseData.ts ────────────────────────────────
  console.log("🤖 Calling Claude API to generate edition...");

  const pulsePrompt = `You are the editor of Hoops Intel (hoopsintel.net), a daily NBA intelligence dashboard with ESPN-meets-The-Athletic editorial voice. Generate today's complete pulseData.ts TypeScript file.

## Edition Info
- Publication date: ${editionDate}
- Edition: Vol. 2026 · No. ${editionNo}
- Content covers games played YESTERDAY (${yesterdayESPN})

## Yesterday's Game Results (${yesterdayESPN}) — ESPN API
${JSON.stringify(finalGames, null, 2)}

## Tonight's Schedule (${todayESPN}) — ESPN API
${JSON.stringify(scheduledGames, null, 2)}

## Data Schema (follow EXACTLY)
${schema}

## Current pulseData.ts (for format reference and standings continuity)
${currentPulse}

## Instructions
1. Pick the night's best narrative — lead with the most dramatic/important game
2. Feature 4–6 game results (most significant first)
3. Write crisp, sharp copy — not a box score recitation; actual insights
4. Pulse Index: rank the top 10 performers editorially, not just by points. For each player in the pulseIndex, add a \`rationale\` field: a single sentence explaining specifically why this player deserves their exact rank position relative to the players ranked just above and below them.
5. Estimate spreads/O-U for tonight's games if not in the ESPN data (reasonable estimates)
6. Update standings by applying last night's results to the current standings in the reference file
7. Media reactions: write 6 quotes in the authentic voice of each journalist/outlet
8. Keep all TypeScript exports exactly matching the schema — no extra fields, no missing ones
9. Format: single-line objects per export (no line breaks inside object literals) to match the existing style
10. Also generate a "This Day in NBA History" fact for ${editionDate}. Find a notable NBA event, record, or milestone that occurred on this calendar date in any prior year. If nothing notable occurred on this exact date, find something from the same week. Format as: export const historyFact = {year:YYYY,fact:"1-2 sentence historical fact about this date in NBA history.",players:["Player Name"]};
11. Also generate a Hoops IQ quiz with exactly 5 questions: 2 questions about last night's games (easy), 2 questions about season stats/standings/records (medium), and 1 historical/trivia question (hard). Format as: export const hoopsIQ = {questions:[{question:"...",options:["A. ...", "B. ...", "C. ...", "D. ..."],answer:"B",explanation:"1-sentence explanation with context.",difficulty:"easy"}]};

Output ONLY the complete TypeScript file. Start with the comment header. No markdown fences, no explanation.`;

  const pulseMsg = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 8192,
    messages: [{ role: "user", content: pulsePrompt }],
  });

  const newPulseContent = pulseMsg.content[0].text.trim();
  writeFileSync(join(ROOT, "client/src/lib/pulseData.ts"), newPulseContent, "utf8");
  console.log("✓ pulseData.ts written");

  // ── Generate archive entry ───────────────────────────────
  console.log("📦 Generating archive entry...");

  const archivePrompt = `Based on this pulseData.ts, generate a single archive entry object for archiveData.ts.

${newPulseContent}

Required format — output ONLY this object literal (no export, no variable declaration, just the raw object):
{id:"${editionISO}",date:"${editionISO}",displayDate:"${editionDate}",headline:"...",subheadline:"...",gamesCount:N,topStory:"...",topPlayer:"...",topStatLine:"...",tags:[...5-7 keywords...],players:[...all full player names mentioned...],teams:[...alternating "ABB","Full Team Name" pairs...]}

Keep it to one line, valid JSON-compatible syntax (strings in double quotes, no trailing commas).`;

  const archiveMsg = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    messages: [{ role: "user", content: archivePrompt }],
  });

  const archiveEntry = archiveMsg.content[0].text.trim();

  // Prepend to archiveData.ts
  const archivePath = join(ROOT, "client/src/lib/archiveData.ts");
  let archiveContent = readFileSync(archivePath, "utf8");
  archiveContent = archiveContent.replace(
    "export const archiveEditions = [",
    `export const archiveEditions = [\n  ${archiveEntry},`
  );
  writeFileSync(archivePath, archiveContent, "utf8");
  console.log("✓ archiveData.ts updated");

  console.log(`\n✅ Done! Vol. 2026 · No. ${editionNo} — ${editionDate}`);
}

main().catch((err) => {
  console.error("❌ Generation failed:", err);
  process.exit(1);
});
