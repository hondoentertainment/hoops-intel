#!/usr/bin/env node
// validate-schema.mjs — Validates pulseData.ts against the data schema
// Run after generate-edition.mjs to catch malformed output before committing

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

const TEAM_ABBRS = new Set([
  "ATL","BOS","BRK","CHA","CHI","CLE","DAL","DEN","DET","GSW",
  "HOU","IND","LAC","LAL","MEM","MIA","MIL","MIN","NOP","NYK",
  "OKC","ORL","PHI","PHX","POR","SAC","SAS","TOR","UTA","WAS",
]);

function assert(condition, message) {
  if (!condition) throw new Error(`VALIDATION FAILED: ${message}`);
}

function assertType(val, type, field) {
  assert(typeof val === type, `${field} should be ${type}, got ${typeof val}`);
}

function main() {
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
    for (const field of ["date", "edition"]) {
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
    if (!TEAM_ABBRS.has(m[1])) {
      console.error(`Invalid team abbreviation: ${m[1]}`);
      errors++;
    }
  }

  // Check gameResults have required fields
  const gameIdMatches = [...content.matchAll(/gameId:\s*"([^"]+)"/g)];
  for (const m of gameIdMatches) {
    const id = m[1];
    if (!/^[A-Z]{3}-[A-Z]{3}-\d{8}$/.test(id)) {
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

  // Check sentiment values
  const sentiments = [...content.matchAll(/sentiment:\s*"([^"]+)"/g)];
  for (const m of sentiments) {
    if (!["hot", "cold", "neutral"].includes(m[1])) {
      console.error(`Invalid sentiment: ${m[1]}`);
      errors++;
    }
  }

  // Check injury status values
  const statuses = [...content.matchAll(/status:\s*"([^"]+)"/g)];
  const validStatuses = new Set(["out", "questionable", "probable", "day-to-day", "returning", "final"]);
  for (const m of statuses) {
    if (!validStatuses.has(m[1])) {
      console.error(`Invalid status: ${m[1]}`);
      errors++;
    }
  }

  // Check file is valid TypeScript (no markdown fences)
  if (content.includes("```")) {
    console.error("File contains markdown code fences — likely raw LLM output");
    errors++;
  }

  if (errors > 0) {
    console.error(`\n❌ ${errors} validation error(s) found`);
    process.exit(1);
  }

  console.log("✅ pulseData.ts schema validation passed");
}

main();
