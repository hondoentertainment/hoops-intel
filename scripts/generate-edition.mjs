#!/usr/bin/env node
// generate-edition.mjs — Daily NBA Pulse edition generator
// Fetches last night's NBA data from ESPN + calls Claude API to write the edition
// Run daily at 5am PST via GitHub Actions (.github/workflows/daily-update.yml)

import { claudeGenerate } from "./lib/claude-client.mjs";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { toESPNDate, toISODate, toDisplayDate } from "./lib/daily-dates.mjs";

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

// ── Parse a JS object/array literal export from pulseData.ts source.
//    Walks the source respecting string and bracket nesting, then evaluates
//    the literal inside an isolated Function scope. Previously-extracted
//    exports can be passed in via `scope` so that derived exports such as
//    `standings = [...eastStandings, ...westStandings]` resolve correctly.
//    Throws on any mismatch.
function extractExportLiteral(src, name, scope = {}) {
  const re = new RegExp(`export\\s+const\\s+${name}\\s*=\\s*`);
  const m = re.exec(src);
  if (!m) throw new Error("export not found");

  const start = m.index + m[0].length;
  let depth = 0, inStr = false, strCh = "", esc = false, end = -1;
  for (let i = start; i < src.length; i++) {
    const ch = src[i];
    if (esc) { esc = false; continue; }
    if (inStr) {
      if (ch === "\\") { esc = true; continue; }
      if (ch === strCh) { inStr = false; }
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") { inStr = true; strCh = ch; continue; }
    if (ch === "{" || ch === "[" || ch === "(") depth++;
    else if (ch === "}" || ch === "]" || ch === ")") depth--;
    else if (ch === ";" && depth === 0) { end = i; break; }
  }
  if (end < 0) throw new Error("could not find terminating ;");

  const literal = src.slice(start, end).trim();
  try {
    const keys = Object.keys(scope);
    const values = keys.map((k) => scope[k]);
    return new Function(...keys, `"use strict"; return (${literal});`)(...values);
  } catch (err) {
    throw new Error(`literal eval failed: ${err.message}`);
  }
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

  // ── Detect playoff mode ──────────────────────────────────
  // If any final/scheduled game has a populated ESPN `series` object OR any
  // team in the slate has played a playoff game already, flip the context.
  const playoffIndicators = [...finalGames, ...scheduledGames].filter((g) => {
    const text = `${g.time ?? ""} ${g.venue ?? ""} ${g.tv ?? ""}`.toLowerCase();
    return text.includes("playoff") || text.includes("game 1") || text.includes("game 2") || text.includes("game 3") || text.includes("game 4") || text.includes("game 5") || text.includes("game 6") || text.includes("game 7");
  });
  const isPlayoffMode = playoffIndicators.length > 0;
  if (isPlayoffMode) console.log("🏆 Playoff mode detected — Pulse Index will scope to active playoff rosters.");
  const playoffInstructions = isPlayoffMode
    ? `

## PLAYOFF MODE — CRITICAL OVERRIDES
- Pulse Index must ONLY include players on teams currently in the playoffs
- Weight last night's playoff performance heavily (game importance is the headline factor)
- Use playoff context in notes: "Game 2 swing performance", "elimination-game brilliance", "series-opener statement"
- Fantasy alerts should skip any player on an eliminated team
- Rookie Watch: only include rookies on active playoff rosters; drop the section entirely if empty
- Tonight's Games: describe each as a playoff matchup with series context (e.g. "BOS leads 2-0")
- Subtitle and narrative should lead with series-defining moments, not regular-season context
`
    : "";

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
${playoffInstructions}
## Instructions
1. Pick the night's best narrative — lead with the most dramatic/important game
2. Feature 4–6 game results (most significant first)
3. Write crisp, sharp copy — not a box score recitation; actual insights
4. Pulse Index: rank the top 10 performers editorially, not just by points. For each player in the pulseIndex, add a \`rationale\` field: a single sentence explaining specifically why this player deserves their exact rank position relative to the players ranked just above and below them.
5. Estimate spreads/O-U for tonight's games if not in the ESPN data (reasonable estimates)
6. Standings: export as TWO separate arrays — \`export const eastStandings = [...]\` and \`export const westStandings = [...]\`, then \`export const standings = [...eastStandings, ...westStandings];\`. Update by applying last night's results.
7. Media reactions: write 6 quotes in the authentic voice of each journalist/outlet
8. Keep all TypeScript exports exactly matching the schema — no extra fields, no missing ones
9. Format: single-line objects per export (no line breaks inside object literals) to match the existing style
10. Also generate a "This Day in NBA History" fact for ${editionDate}. Format as: export const historyFact = {year:YYYY,fact:"1-2 sentence historical fact about this date in NBA history.",players:["Player Name"]};
11. Also generate a Hoops IQ quiz with exactly 5 questions. Format as: export const hoopsIQ = {questions:[{question:"...",options:["A. ...", "B. ...", "C. ...", "D. ..."],answer:"B",explanation:"1-sentence explanation.",difficulty:"easy"}]};
12. Also generate a daily trivia question. Format as: export const triviaQuestion = {id:"${editionISO}",question:"...",options:["opt1","opt2","opt3","opt4"],correctIndex:N,explanation:"...",difficulty:"medium"};
13. CRITICAL: Keep injury impact field SHORT — use only "high", "medium", or "low" (not long sentences). Keep media quotes to 2-3 sentences max. Keep recap text concise. The file MUST stay under 15000 tokens total.
14. CRITICAL — team abbreviations MUST be exactly one of: ATL, BOS, BRK, CHA, CHI, CLE, DAL, DEN, DET, GSW, HOU, IND, LAC, LAL, MEM, MIA, MIL, MIN, NOP, NYK, OKC, ORL, PHI, PHX, POR, SAC, SAS, TOR, UTA, WAS. NEVER use "NY" (use "NYK"), "SA" (use "SAS"), "BKN" (use "BRK"), "NO" (use "NOP"), or "GS" (use "GSW"). Anything else will fail validation.
15. CRITICAL — injury status field MUST be exactly one of (case sensitive): "Out", "Day-to-Day", "Questionable", "Probable", "Doubtful". Never lowercase.
16. CRITICAL — every \`{\` must be matched by \`}\` and every \`[\` must be matched by \`]\` in every export. Special attention to the \`narrative.body\` array — it MUST be wrapped in \`[\` and \`]\` and end with \`]}\` before the trailing semicolon.

Output ONLY the complete TypeScript file. Start with the comment header. No markdown fences, no explanation.`;

  const pulseMsg = await claudeGenerate("pulse edition", {
    max_tokens: 16384,
    messages: [{ role: "user", content: pulsePrompt }],
  });

  const newPulseContent = pulseMsg.content[0].text.trim();

  if (pulseMsg.stop_reason === "max_tokens") {
    console.warn("⚠ Claude output was truncated (hit max_tokens) — regenerating is recommended");
  }

  const requiredExports = [
    "pulseEdition", "narrative", "tickerItems", "gameResults", "pulseIndex",
    "statLeaders", "mediaReactions", "injuryUpdates", "gamePreviews",
    "rookieWatch", "fantasyAlerts", "eastStandings", "westStandings",
    "standings", "historyFact", "hoopsIQ", "triviaQuestion",
  ];
  const missing = requiredExports.filter((e) => !newPulseContent.includes(`export const ${e}`));
  if (missing.length > 0) {
    console.error(`❌ pulseData.ts is missing exports: ${missing.join(", ")}`);
    console.error("   This usually means Claude hit max_tokens. Aborting to avoid a broken build.");
    process.exit(1);
  }

  // ── Parse-validate every export so a bracket/string mismatch never
  //    reaches the build (this is what broke the 2026-04-19 deploy).
  //    Evaluate in declaration order and accumulate a scope so that
  //    derived exports like `standings = [...eastStandings, ...westStandings]`
  //    can resolve their references.
  const parseErrors = [];
  const scope = {};
  for (const name of requiredExports) {
    try {
      scope[name] = extractExportLiteral(newPulseContent, name, scope);
    } catch (err) {
      parseErrors.push(`${name}: ${err.message}`);
    }
  }
  if (parseErrors.length > 0) {
    console.error("❌ pulseData.ts failed parse validation:");
    for (const e of parseErrors) console.error("   - " + e);
    console.error("   Aborting to avoid a broken build / failed Vercel deploy.");
    process.exit(1);
  }
  console.log("✓ all exports parse cleanly");

  writeFileSync(join(ROOT, "client/src/lib/pulseData.ts"), newPulseContent, "utf8");
  console.log("✓ pulseData.ts written");

  // ── Generate archive entry ───────────────────────────────
  console.log("📦 Generating archive entry...");

  const archivePrompt = `Based on this pulseData.ts, generate a single archive entry object for archiveData.ts.

${newPulseContent}

Required format — output ONLY this object literal (no export, no variable declaration, just the raw object):
{id:"${editionISO}",date:"${editionISO}",displayDate:"${editionDate}",headline:"...",subheadline:"...",gamesCount:N,topStory:"...",topPlayer:"...",topStatLine:"...",tags:[...5-7 keywords...],players:[...all full player names mentioned...],teams:[...alternating "ABB","Full Team Name" pairs...]}

Keep it to one line, valid JSON-compatible syntax (strings in double quotes, no trailing commas).`;

  const archiveMsg = await claudeGenerate("archive entry", {
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    messages: [{ role: "user", content: archivePrompt }],
  });

  // Strip any accidental markdown fences Claude tacked on.
  let archiveEntry = archiveMsg.content[0].text.trim()
    .replace(/^```(?:json|ts|typescript|js|javascript)?\n?/m, "")
    .replace(/\n?```$/m, "")
    .trim();
  // Drop a trailing semicolon or comma if Claude added one.
  archiveEntry = archiveEntry.replace(/[;,]+$/, "");

  // Validate the entry is a parseable JS object literal *before* we touch
  // archiveData.ts. The 2026-04-21 incident was caused by Claude returning
  // entries with broken keys like `tags:["..."]` (missing close-quote on
  // the key) which then poisoned the build for two days.
  const { transform } = await import("esbuild");
  try {
    await transform(`const __entry = ${archiveEntry};`, { loader: "ts", format: "esm" });
  } catch (err) {
    const first = (err.errors?.[0]?.text || err.message || String(err)).split("\n")[0];
    console.error(`❌ archive entry failed parse check: ${first}`);
    console.error("   Skipping archiveData.ts update — pulseData.ts already updated successfully.");
    return;
  }

  const archivePath = join(ROOT, "client/src/lib/archiveData.ts");
  const archiveBefore = readFileSync(archivePath, "utf8");

  // Skip if we've already prepended an entry for this date this run (or
  // earlier today). Avoids duplicate entries when the daily workflow
  // retries — that's how 2026-04-21 ended up with five entries.
  const dupRe = new RegExp(`["']?id["']?\\s*:\\s*["']${editionISO}["']`);
  if (dupRe.test(archiveBefore.split("\n").slice(0, 30).join("\n"))) {
    console.log(`ℹ archiveData.ts already has an entry for ${editionISO} — skipping prepend.`);
    return;
  }

  const archiveContent = archiveBefore.replace(
    "export const archiveEditions = [",
    `export const archiveEditions = [\n  ${archiveEntry},`
  );
  writeFileSync(archivePath, archiveContent, "utf8");

  // Final safety net: parse the whole file. If something we missed broke
  // it, roll back.
  try {
    await transform(readFileSync(archivePath, "utf8"), { loader: "ts", format: "esm" });
    console.log("✓ archiveData.ts updated");
  } catch (err) {
    writeFileSync(archivePath, archiveBefore, "utf8");
    const first = (err.errors?.[0]?.text || err.message || String(err)).split("\n")[0];
    console.error(`❌ archiveData.ts post-write parse failed: ${first}`);
    console.error("   Rolled back to previous archive content.");
  }

  console.log(`\n✅ Done! Vol. 2026 · No. ${editionNo} — ${editionDate}`);
}

main().catch((err) => {
  console.error("❌ Generation failed:", err);
  process.exit(1);
});
