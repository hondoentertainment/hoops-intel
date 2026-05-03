#!/usr/bin/env node
// validate-schema.mjs — Validates pulseData.ts against the data schema
// Run after generate-edition.mjs to catch malformed output before committing

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import {
  TEAM_ABBR_SET,
  VALID_INJURY_STATUSES,
  PULSE_SENTIMENTS,
  GAME_ID_PATTERN,
} from "./lib/content-quality-constants.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

/** @param {string} content @param {string} exportName @returns {string | null} */
function extractConstArrayInner(content, exportName) {
  const re = new RegExp(`export\\s+const\\s+${exportName}\\s*=\\s*\\[`);
  const m = re.exec(content);
  if (!m) return null;
  const open = m.index + m[0].length - 1;
  let depth = 0;
  let inString = false;
  let escape = false;
  for (let i = open; i < content.length; i++) {
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
    if (ch === "[") depth++;
    if (ch === "]") {
      depth--;
      if (depth === 0) return content.slice(open + 1, i);
    }
  }
  return null;
}

function assert(condition, message) {
  if (!condition) throw new Error(`VALIDATION FAILED: ${message}`);
}

function assertType(val, type, field) {
  assert(typeof val === type, `${field} should be ${type}, got ${typeof val}`);
}

export function validate() {
  const filePath = join(ROOT, "client/src/lib/pulseData.ts");
  const content = readFileSync(filePath, "utf8");
  let errors = 0;

  // Check required exports exist
  const requiredExports = [
    "pulseEdition", "narrative", "tickerItems", "gameResults",
    "pulseIndex", "statLeaders", "mediaReactions", "injuryUpdates",
    "gamePreviews", "rookieWatch", "fantasyAlerts", "eastStandings", "westStandings",
  ];

  for (const name of requiredExports) {
    const regex = new RegExp(`export\\s+const\\s+${name}\\s*[=:]`);
    if (!regex.test(content)) {
      console.error(`MISSING EXPORT: ${name}`);
      errors++;
    }
  }

  // Check pulseEdition has required fields
  const editionMatch = content.match(/export\s+const\s+pulseEdition\s*[=:]\s*\{([^}]+)\}/);
  if (editionMatch) {
    const block = editionMatch[1];
    for (const field of ["date", "edition", "editionContext"]) {
      if (!block.includes(`${field}:`)) {
        console.error(`pulseEdition missing field: ${field}`);
        errors++;
      }
    }
    if (!block.includes("subtitle:")) {
      console.warn("WARNING: pulseEdition missing optional field: subtitle");
    }
  }

  // Check standings have correct conference values
  const eastMatch = content.match(/export\s+const\s+eastStandings/);
  const westMatch = content.match(/export\s+const\s+westStandings/);
  if (!eastMatch) { console.error("Missing eastStandings export"); errors++; }
  if (!westMatch) { console.error("Missing westStandings export"); errors++; }

  // Check team abbreviations are valid
  const teamRefs = content.matchAll(/team:\s*"([A-Z]{3})"/g);
  for (const m of teamRefs) {
    if (!TEAM_ABBR_SET.has(m[1])) {
      console.error(`Invalid team abbreviation: ${m[1]}`);
      errors++;
    }
  }

  const homeAwayRefs = [...content.matchAll(/(?:homeTeam|awayTeam):\s*"([A-Z]{3})"/g)];
  for (const m of homeAwayRefs) {
    if (!TEAM_ABBR_SET.has(m[1])) {
      console.error(`Invalid home/away team abbreviation: ${m[1]}`);
      errors++;
    }
  }

  // Check gameResults have required fields
  const gameIdMatches = [...content.matchAll(/gameId:\s*"([^"]+)"/g)];
  for (const m of gameIdMatches) {
    const id = m[1];
    if (!GAME_ID_PATTERN.test(id)) {
      console.error(`Invalid gameId format: ${id} (expected ABB-ABB-YYYYMMDD)`);
      errors++;
    }
  }

  // Check pulse index ranks 1-10
  const rankMatches = [...content.matchAll(/rank:\s*(\d+)/g)];
  const pulseRanks = rankMatches.map((m) => parseInt(m[1])).filter((r) => r >= 1 && r <= 10);
  if (pulseRanks.length < 10) {
    console.warn(`WARNING: Found ${pulseRanks.length} pulse index ranks (expected 10+)`);
  }

  const sentiments = [...content.matchAll(/sentiment:\s*"([^"]+)"/g)];
  for (const m of sentiments) {
    if (!PULSE_SENTIMENTS.has(m[1])) {
      console.error(`Invalid sentiment: ${m[1]}`);
      errors++;
    }
  }

  // Injury statuses only inside injuryUpdates (game rows use status: "final", etc.)
  const injuryInner = extractConstArrayInner(content, "injuryUpdates");
  if (injuryInner) {
    const injStatuses = [...injuryInner.matchAll(/status:\s*"([^"]+)"/g)];
    for (const m of injStatuses) {
      if (!VALID_INJURY_STATUSES.has(m[1])) {
        console.error(`Invalid injury status in injuryUpdates: ${m[1]}`);
        errors++;
      }
    }
  } else if (/\bexport\s+const\s+injuryUpdates\s*=/.test(content)) {
    console.error("Could not parse injuryUpdates array for status validation");
    errors++;
  }

  // Check file is valid TypeScript (no markdown fences)
  if (content.includes("```")) {
    console.error("File contains markdown code fences — likely raw LLM output");
    errors++;
  }

  if (errors > 0) {
    throw new Error(`${errors} validation error(s) found in pulseData.ts`);
  }

  console.log("✅ pulseData.ts schema validation passed");

  // ── Phase 2 output validation (warnings only, non-blocking) ──
  let warnings = 0;
  const phase2Files = [
    { file: "watchGuideData.ts", exports: ["watchGuideData"] },
    { file: "sentimentData.ts", exports: ["sentimentData"] },
    { file: "momentumData.ts", exports: ["momentumData"] },
    { file: "podcastData.ts", exports: ["podcastCompanion"] },
    { file: "historyData.ts", exports: ["historyData"] },
    { file: "refData.ts", exports: ["refData"] },
  ];

  for (const { file, exports: expectedExports } of phase2Files) {
    try {
      const p2Content = readFileSync(join(ROOT, "client/src/lib", file), "utf8");

      // Check for markdown fences (common LLM output issue)
      if (p2Content.includes("```")) {
        console.warn(`⚠️ ${file} contains markdown code fences`);
        warnings++;
      }

      // Check required exports
      for (const exp of expectedExports) {
        if (!new RegExp(`export\\s+const\\s+${exp}\\s*[=:]`).test(p2Content)) {
          console.warn(`⚠️ ${file} missing export: ${exp}`);
          warnings++;
        }
      }

      // Check file is not empty/tiny (likely failed generation)
      if (p2Content.length < 200) {
        console.warn(`⚠️ ${file} looks too small (${p2Content.length} chars) — possible generation failure`);
        warnings++;
      }
    } catch {
      console.warn(`⚠️ ${file} not found — may not have been generated yet`);
      warnings++;
    }
  }

  if (warnings > 0) {
    console.log(`⚠️ ${warnings} Phase 2 validation warning(s) — non-blocking`);
  } else {
    console.log("✅ Phase 2 output validation passed");
  }
}

// ── Standalone CLI entry point ────────────────────────────
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    validate();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
