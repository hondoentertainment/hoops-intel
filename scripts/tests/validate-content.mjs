#!/usr/bin/env node
// validate-content.mjs — Content validation tests for pulseData.ts
//
// Tiers:
//   --hard-only     Structural + enum checks (blocking in CI verify job).
//   --advisory-only Date alignment, featured previews, postseason seed placeholders (advisory CI job).
//   --all (default) Run both tiers; exits non-zero if hard OR advisory failures.
//
// Usage:
//   node scripts/tests/validate-content.mjs [--hard-only | --advisory-only | --all]

import { readFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import {
  TEAM_ABBR_SET,
  VALID_FANTASY_ACTIONS,
  VALID_INJURY_STATUSES,
  VALID_EDITION_CONTEXTS,
  GAME_ID_PATTERN,
  isEspnSyncedTeamAbbrev,
} from "../lib/content-quality-constants.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "../..");
const PULSE_PATH = join(ROOT, "client/src/lib/pulseData.ts");
const PLAYOFF_PATH = join(ROOT, "client/src/lib/playoffData.ts");

function parseCliMode(argv) {
  if (argv.includes("--hard-only")) return "hard";
  if (argv.includes("--advisory-only")) return "advisory";
  return "all";
}

// ── Test runner ─────────────────────────────────────────────

let passed = 0;
let failed = 0;
const failures = [];

function test(tier, name, fn) {
  try {
    fn();
    passed++;
    console.log(`  [PASS] ${name}`);
  } catch (err) {
    failed++;
    failures.push({ tier, name, error: err.message });
    console.log(`  [FAIL] ${name}`);
    console.log(`         ${err.message}`);
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(`${message}: expected ${expected}, got ${actual}`);
  }
}

// ── Parse pulseData.ts ──────────────────────────────────────

function extractExport(content, name) {
  const regex = new RegExp(`export\\s+const\\s+${name}\\s*=\\s*`);
  const match = regex.exec(content);
  if (!match) return undefined;

  const start = match.index + match[0].length;
  let depth = 0;
  let inString = false;
  let escape = false;
  let i = start;

  for (; i < content.length; i++) {
    const ch = content[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (ch === "\\") {
      escape = true;
      continue;
    }
    if (ch === '"' && !escape) {
      inString = !inString;
      continue;
    }
    if (inString) continue;
    if (ch === "{" || ch === "[") depth++;
    if (ch === "}" || ch === "]") {
      depth--;
      if (depth === 0) {
        i++;
        break;
      }
    }
  }

  const jsonStr = content.slice(start, i).replace(/;\s*$/, "").trim();
  try {
    return new Function(`"use strict"; return (${jsonStr});`)();
  } catch (err) {
    throw new Error(
      `Failed to parse export "${name}": ${err.message ?? "invalid literal"}`,
    );
  }
}

function main() {
  const runMode = parseCliMode(process.argv.slice(2));
  console.log("\n=== Content Validation Tests ===\n");
  console.log(`Mode: ${runMode}\n`);

  let content;
  try {
    content = readFileSync(PULSE_PATH, "utf8");
  } catch (err) {
    console.error(`pulseData.ts not found at ${PULSE_PATH}`);
    process.exit(1);
  }

  const exports = {};

  function shouldRunTier(tLabel) {
    if (runMode === "hard") return tLabel === "hard";
    if (runMode === "advisory") return tLabel === "advisory";
    return true;
  }

  const exportNames = [
    "pulseEdition", "narrative", "tickerItems", "gameResults",
    "pulseIndex", "statLeaders", "mediaReactions", "injuryUpdates",
    "gamePreviews", "rookieWatch", "fantasyAlerts",
    "eastStandings", "westStandings",
    "historyFact", "triviaQuestion", "hoopsIQ",
  ];

  /** Parse pulse exports synchronously — hard / all modes rely on structured data. */
  function loadAllExports() {
    for (const name of exportNames) {
      const val = extractExport(content, name);
      if (val === undefined) throw new Error(`Export "${name}" not found`);
      exports[name] = val;
    }
  }

  // ── Hard: fences + export parse ────────────────────────────

  if (shouldRunTier("hard")) {
    test("hard", "pulseData.ts has no markdown code fences", () => {
      assert(!content.includes("```"), 'File contains markdown code fences (`) — likely raw LLM output');
    });

    test("hard", "pulseData.ts can be parsed (all exports are valid literals)", () => {
      loadAllExports();
    });

    if (!exports.pulseEdition) {
      console.log("\nSkipping remaining hard structural tests.");

      console.log(`\n--- Results: ${passed} passed, ${failed} failed ---`);
      if (failures.length > 0) {
        console.log("\nFailures:");
        for (const f of failures) {
          console.log(`  [${f.tier}] ${f.name}: ${f.error}`);
        }
      }
      console.log("");
      process.exit(1);
    }
  }

  if (runMode === "advisory") {
    try {
      for (const name of ["pulseEdition", "gamePreviews", "triviaQuestion"]) {
        exports[name] = extractExport(content, name);
        if (exports[name] === undefined) throw new Error(`Missing export ${name}`);
      }
    } catch (e) {
      console.error("Advisory parse failed:", e.message || e);
      process.exit(1);
    }
  }

  // ── Hard: pulse edition ─────────────────────────────────────

  if (shouldRunTier("hard") && exports.pulseEdition) {
    test("hard", "pulseEdition has required metadata", () => {
      const edition = exports.pulseEdition;
      assert(edition.date, "pulseEdition.date required");
      assert(edition.edition != null && String(edition.edition).length > 0, "pulseEdition.edition required");
      assert(edition.editionContext, "pulseEdition.editionContext required");
      assert(
        VALID_EDITION_CONTEXTS.has(edition.editionContext),
        `Invalid editionContext: "${edition.editionContext}"`,
      );
    });
  }

  // ── Hard: game results ─────────────────────────────────────

  if (shouldRunTier("hard") && exports.gameResults) {
    test("hard", "game results have valid teams, scores, statuses, gameIds", () => {
      const results = exports.gameResults;
      assert(Array.isArray(results), "gameResults should be an array");
      assert(results.length > 0, "gameResults should not be empty");
      for (const game of results) {
        assert(
          TEAM_ABBR_SET.has(game.homeTeam),
          `Invalid home team abbreviation: "${game.homeTeam}"`,
        );
        assert(
          TEAM_ABBR_SET.has(game.awayTeam),
          `Invalid away team abbreviation: "${game.awayTeam}"`,
        );
        assert(
          typeof game.homeScore === "number" && game.homeScore >= 0,
          `Invalid home score for ${game.homeTeam} vs ${game.awayTeam}: ${game.homeScore}`,
        );
        assert(
          typeof game.awayScore === "number" && game.awayScore >= 0,
          `Invalid away score for ${game.homeTeam} vs ${game.awayTeam}: ${game.awayScore}`,
        );
        assert(
          game.status === "final",
          `Game ${game.homeTeam} vs ${game.awayTeam} has unexpected status: "${game.status}"`,
        );
        if (game.gameId != null && game.gameId !== "") {
          assert(
            GAME_ID_PATTERN.test(String(game.gameId)),
            `Invalid gameId "${game.gameId}" (expected ABB-ABB-YYYYMMDD)`,
          );
        }
      }
    });
  }

  // ── Hard: pulse index ──────────────────────────────────────

  if (shouldRunTier("hard") && exports.pulseIndex) {
    test("hard", "pulse index has exactly 10 entries ranked 1-10", () => {
      const index = exports.pulseIndex;
      assert(Array.isArray(index), "pulseIndex should be an array");
      assertEqual(index.length, 10, "pulseIndex length");
      const ranks = index.map((e) => e.rank).sort((a, b) => a - b);
      for (let i = 0; i < 10; i++) {
        assertEqual(ranks[i], i + 1, `Rank at position ${i}`);
      }
      for (const entry of index) {
        assert(
          TEAM_ABBR_SET.has(entry.team),
          `Invalid team in pulse index: "${entry.team}" for ${entry.player}`,
        );
        assert(
          typeof entry.indexScore === "number" && entry.indexScore > 0,
          `Invalid indexScore for ${entry.player}: ${entry.indexScore}`,
        );
        assert(
          ["up", "down", "stable", "new"].includes(entry.trend),
          `Invalid trend for ${entry.player}: "${entry.trend}"`,
        );
      }
    });
  }

  // ── Hard: standings ─────────────────────────────────────────

  if (shouldRunTier("hard") && exports.eastStandings && exports.westStandings) {
    test("hard", "standings have 10 entries per conference", () => {
      const east = exports.eastStandings;
      const west = exports.westStandings;
      assert(Array.isArray(east), "eastStandings should be an array");
      assert(Array.isArray(west), "westStandings should be an array");
      assertEqual(east.length, 10, "eastStandings length");
      assertEqual(west.length, 10, "westStandings length");

      for (const entry of east) {
        assert(
          TEAM_ABBR_SET.has(entry.team),
          `Invalid team in east standings: "${entry.team}"`,
        );
        assertEqual(entry.conf, "east", `East standings entry ${entry.team} has conf`);
        assert(typeof entry.wins === "number", `wins should be a number for ${entry.team}`);
        assert(typeof entry.losses === "number", `losses should be a number for ${entry.team}`);
      }
      for (const entry of west) {
        assert(
          TEAM_ABBR_SET.has(entry.team),
          `Invalid team in west standings: "${entry.team}"`,
        );
        assertEqual(entry.conf, "west", `West standings entry ${entry.team} has conf`);
        assert(typeof entry.wins === "number", `wins should be a number for ${entry.team}`);
        assert(typeof entry.losses === "number", `losses should be a number for ${entry.team}`);
      }

      const eastRanks = east.map((e) => e.rank).sort((a, b) => a - b);
      const westRanks = west.map((e) => e.rank).sort((a, b) => a - b);
      for (let i = 0; i < 10; i++) {
        assertEqual(eastRanks[i], i + 1, `East rank at position ${i}`);
        assertEqual(westRanks[i], i + 1, `West rank at position ${i}`);
      }
    });
  }

  // ── Hard: game previews (teams only) ───────────────────────

  if (shouldRunTier("hard") && exports.gamePreviews) {
    test("hard", "game previews have valid team abbreviations", () => {
      const previews = exports.gamePreviews;
      assert(Array.isArray(previews), "gamePreviews should be an array");
      assert(previews.length > 0, "gamePreviews should not be empty");
      for (const preview of previews) {
        assert(
          TEAM_ABBR_SET.has(preview.homeTeam),
          `Invalid home team in preview: "${preview.homeTeam}"`,
        );
        assert(
          TEAM_ABBR_SET.has(preview.awayTeam),
          `Invalid away team in preview: "${preview.awayTeam}"`,
        );
      }
    });
  }

  // ── Hard: fantasy ───────────────────────────────────────────

  if (shouldRunTier("hard") && exports.fantasyAlerts) {
    test("hard", "fantasy alerts have valid actions and metadata", () => {
      const alerts = exports.fantasyAlerts;
      assert(Array.isArray(alerts), "fantasyAlerts should be an array");
      assert(alerts.length > 0, "fantasyAlerts should not be empty");
      for (const alert of alerts) {
        assert(
          VALID_FANTASY_ACTIONS.has(alert.action),
          `Invalid fantasy action for ${alert.player}: "${alert.action}"`,
        );
        assert(
          TEAM_ABBR_SET.has(alert.team),
          `Invalid team in fantasy alert: "${alert.team}" for ${alert.player}`,
        );
        assert(
          ["high", "medium", "low"].includes(alert.urgency),
          `Invalid urgency for ${alert.player}: "${alert.urgency}"`,
        );
      }
    });
  }

  // ── Hard: injuries ──────────────────────────────────────────

  if (shouldRunTier("hard") && exports.injuryUpdates) {
    test("hard", "injury updates have valid status and team abbreviations", () => {
      const injuries = exports.injuryUpdates;
      assert(Array.isArray(injuries), "injuryUpdates should be an array");
      assert(injuries.length > 0, "injuryUpdates should not be empty");
      for (const injury of injuries) {
        assert(
          VALID_INJURY_STATUSES.has(injury.status),
          `Invalid injury status for ${injury.player}: "${injury.status}"`,
        );
        assert(
          TEAM_ABBR_SET.has(injury.team),
          `Invalid team in injury: "${injury.team}" for ${injury.player}`,
        );
        assert(
          typeof injury.injury === "string" && injury.injury.length > 0,
          `Missing injury description for ${injury.player}`,
        );
      }
    });
  }

  // ═══════════════════════════════════════════════════════════
  // Advisory tier
  // ═══════════════════════════════════════════════════════════

  if (shouldRunTier("advisory")) {
    test("advisory", "header date aligns with pulseEdition.date", () => {
      const edition = exports.pulseEdition;
      assert(edition.date, "pulseEdition should have a date");
      const editionDate = new Date(edition.date);
      assert(!Number.isNaN(editionDate.getTime()), `Could not parse edition date: "${edition.date}"`);
      const headerMatch = content.match(/\/\/ Last updated:\s*(.+?)\s*\(/);
      assert(headerMatch, "Could not find header date");
      const headerDate = new Date(headerMatch[1].trim());
      assert(!Number.isNaN(headerDate.getTime()), `Could not parse header date: "${headerMatch[1]}"`);
      assertEqual(
        editionDate.toDateString(),
        headerDate.toDateString(),
        "Edition date should match header date",
      );
    });

    test("advisory", "trivia question id aligns with edition date when parseable", () => {
      const edition = exports.pulseEdition;
      const editionDate = new Date(edition.date);
      const trivia = exports.triviaQuestion;
      if (!trivia?.id) return;
      const triviaDate = new Date(trivia.id);
      if (Number.isNaN(triviaDate.getTime())) return;
      assertEqual(
        editionDate.toDateString(),
        triviaDate.toDateString(),
        "Trivia question date should match edition date",
      );
    });

    test("advisory", "game previews include exactly one featured game", () => {
      const previews = exports.gamePreviews;
      assert(Array.isArray(previews), "gamePreviews should be an array");
      const featured = previews.filter((p) => p.featured === true);
      assertEqual(featured.length, 1, "Number of featured games");
    });

    test("advisory", "placeholder playoff seeds absent when publishing postseason editions", () => {
      const ctx = exports.pulseEdition?.editionContext ?? "";
      if (ctx !== "playoffs" && ctx !== "finals") return;
      if (!existsSync(PLAYOFF_PATH)) return;
      const playbook = readFileSync(PLAYOFF_PATH, "utf8");
      const innerStart = playbook.indexOf("// BEGIN_PLAYOFF_SERIES_SYNC");
      const innerEnd = playbook.indexOf("// END_PLAYOFF_SERIES_SYNC");
      assert(innerStart >= 0 && innerEnd > innerStart, "playoff markers missing");
      const inner = playbook.slice(innerStart, innerEnd);

      /** Rough series-object slices — advisory heuristic only */
      function* seriesSlices() {
        const re = /\{\s*\n\s*seriesId:/g;
        let m;
        while ((m = re.exec(inner)) !== null) {
          const braceStart = m.index;
          let depth = 0;
          let inString = false;
          let esc = false;
          for (let i = braceStart; i < inner.length; i++) {
            const ch = inner[i];
            if (esc) {
              esc = false;
              continue;
            }
            if (ch === "\\") {
              esc = true;
              continue;
            }
            if (ch === "\"") {
              inString = !inString;
              continue;
            }
            if (inString) continue;
            if (ch === "{") depth++;
            if (ch === "}") {
              depth--;
              if (depth === 0) {
                yield inner.slice(braceStart, i + 1);
                break;
              }
            }
          }
        }
      }

      for (const slab of seriesSlices()) {
        if (!/\bhigherSeed:\s*99\b/.test(slab)) continue;
        const teamFields = [...slab.matchAll(/\b(?:higher|lower)Team:\s*"([^"]+)"/g)].map((x) => x[1]);
        const hasSyncedTeam = teamFields.some((t) => t !== "" && t !== "TBD" && isEspnSyncedTeamAbbrev(t));
        if (hasSyncedTeam) {
          throw new Error(
            "Playoff bracket still uses placeholder seeds (99) for a matchup with synced teams — run playoff:sync.",
          );
        }
      }
    });
  }

  // ── Summary ─────────────────────────────────────────────────

  const hardFail =
    failures.filter((f) => f.tier === "hard").length > 0;
  const advisoryFail =
    failures.filter((f) => f.tier === "advisory").length > 0;

  console.log(`\n--- Results: ${passed} passed, ${failed} failed ---`);
  if (failures.length > 0) {
    console.log("\nFailures:");
    for (const f of failures) {
      console.log(`  [${f.tier}] ${f.name}: ${f.error}`);
    }
  }
  console.log("");

  if (runMode === "hard") process.exit(hardFail ? 1 : 0);
  if (runMode === "advisory") process.exit(advisoryFail ? 1 : 0);
  process.exit(hardFail || advisoryFail ? 1 : 0);
}

main();
