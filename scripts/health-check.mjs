#!/usr/bin/env node
// health-check.mjs — Health check for the Hoops Intel content pipeline.
// Checks content freshness, required exports, secondary files, archive, and ESPN API.
// Exit codes: 0 = all pass, 1 = critical failure, 2 = warnings only
// Usage: node scripts/health-check.mjs

import { readFileSync, statSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");
const PULSE_PATH = join(ROOT, "client/src/lib/pulseData.ts");

const REQUIRED_EXPORTS = [
  "pulseEdition", "narrative", "tickerItems", "gameResults",
  "pulseIndex", "statLeaders", "mediaReactions", "injuryUpdates",
  "gamePreviews", "rookieWatch", "fantasyAlerts",
  "eastStandings", "westStandings",
  "historyFact", "triviaQuestion", "hoopsIQ",
];

const SECONDARY_FILES = [
  "watchGuideData.ts",
  "sentimentData.ts",
  "archiveData.ts",
  "momentumData.ts",
];

const FRESHNESS_HOURS = 36;
const ESPN_TIMEOUT_MS = 5000;

const results = [];

function check(name, pass, detail, critical = true) {
  results.push({ name, pass, detail, critical });
}

// ── Check 1: Content freshness ──────────────────────────────

function checkFreshness() {
  if (!existsSync(PULSE_PATH)) {
    check("content-freshness", false, "pulseData.ts does not exist", true);
    return;
  }

  const content = readFileSync(PULSE_PATH, "utf8");
  // Parse date from header: "// Last updated: March 30, 2026 (Vol. 2026 · No. 88)"
  const match = content.match(/\/\/ Last updated:\s*(.+?)\s*\(/);
  if (!match) {
    check("content-freshness", false, "Could not parse date from pulseData.ts header", true);
    return;
  }

  const dateStr = match[1].trim();
  const parsedDate = new Date(dateStr);
  if (isNaN(parsedDate.getTime())) {
    check("content-freshness", false, `Could not parse date string: "${dateStr}"`, true);
    return;
  }

  const now = new Date();
  const ageMs = now.getTime() - parsedDate.getTime();
  const ageHours = ageMs / (1000 * 60 * 60);

  if (ageHours > FRESHNESS_HOURS) {
    check("content-freshness", false, `Content is ${ageHours.toFixed(1)} hours old (limit: ${FRESHNESS_HOURS}h). Date in file: ${dateStr}`, true);
  } else {
    check("content-freshness", true, `Content is ${ageHours.toFixed(1)} hours old. Date in file: ${dateStr}`);
  }
}

// ── Check 2: Required exports ───────────────────────────────

function checkExports() {
  if (!existsSync(PULSE_PATH)) {
    check("required-exports", false, "pulseData.ts does not exist", true);
    return;
  }

  const content = readFileSync(PULSE_PATH, "utf8");
  const missing = [];

  for (const exp of REQUIRED_EXPORTS) {
    const pattern = new RegExp(`export\\s+const\\s+${exp}\\s*=`);
    if (!pattern.test(content)) {
      missing.push(exp);
    }
  }

  if (missing.length > 0) {
    check("required-exports", false, `Missing exports: ${missing.join(", ")}`, true);
  } else {
    check("required-exports", true, `All ${REQUIRED_EXPORTS.length} required exports found`);
  }
}

// ── Check 3: Secondary data files ───────────────────────────

function checkSecondaryFiles() {
  const libDir = join(ROOT, "client/src/lib");
  const missing = [];
  const empty = [];

  for (const file of SECONDARY_FILES) {
    const path = join(libDir, file);
    if (!existsSync(path)) {
      missing.push(file);
      continue;
    }
    const stat = statSync(path);
    if (stat.size === 0) {
      empty.push(file);
    }
  }

  if (missing.length > 0) {
    check("secondary-files", false, `Missing: ${missing.join(", ")}`, false);
  } else if (empty.length > 0) {
    check("secondary-files", false, `Empty: ${empty.join(", ")}`, false);
  } else {
    check("secondary-files", true, `All ${SECONDARY_FILES.length} secondary files exist and are non-empty`);
  }
}

// ── Check 4: Archive has entry for today (or yesterday if before 5 AM PST) ──

function checkArchive() {
  const archivePath = join(ROOT, "client/src/lib/archiveData.ts");
  if (!existsSync(archivePath)) {
    check("archive-entry", false, "archiveData.ts does not exist", false);
    return;
  }

  const content = readFileSync(archivePath, "utf8");

  // Determine expected date: today in PST, or yesterday if before 5 AM PST
  const now = new Date();
  // Convert to PST (UTC-8) — approximate; handles PDT (UTC-7) close enough
  const pstOffset = -8 * 60;
  const utcMs = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
  const pstMs = utcMs + (pstOffset * 60 * 1000);
  const pstDate = new Date(pstMs);
  const pstHour = pstDate.getHours();

  let expectedDate;
  if (pstHour < 5) {
    // Before 5 AM PST — check for yesterday's entry
    const yesterday = new Date(pstDate);
    yesterday.setDate(yesterday.getDate() - 1);
    expectedDate = yesterday;
  } else {
    expectedDate = pstDate;
  }

  const yyyy = expectedDate.getFullYear();
  const mm = String(expectedDate.getMonth() + 1).padStart(2, "0");
  const dd = String(expectedDate.getDate()).padStart(2, "0");
  const dateId = `${yyyy}-${mm}-${dd}`;

  if (content.includes(`"${dateId}"`)) {
    check("archive-entry", true, `Archive has entry for ${dateId}`);
  } else {
    check("archive-entry", false, `No archive entry for ${dateId}`, false);
  }
}

// ── Check 5: ESPN API reachable ─────────────────────────────

async function checkESPN() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const espnDate = `${yyyy}${mm}${dd}`;
  const url = `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=${espnDate}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ESPN_TIMEOUT_MS);

  try {
    const resp = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);
    if (resp.ok) {
      check("espn-api", true, `ESPN API reachable (status ${resp.status})`);
    } else {
      check("espn-api", false, `ESPN API returned status ${resp.status}`, false);
    }
  } catch (err) {
    clearTimeout(timeout);
    check("espn-api", false, `ESPN API unreachable: ${err.message}`, false);
  }
}

// ── Run all checks ──────────────────────────────────────────

async function main() {
  checkFreshness();
  checkExports();
  checkSecondaryFiles();
  checkArchive();
  await checkESPN();

  // Output report
  const report = {
    timestamp: new Date().toISOString(),
    checks: results,
    summary: {
      total: results.length,
      passed: results.filter(r => r.pass).length,
      failed: results.filter(r => !r.pass).length,
      criticalFailures: results.filter(r => !r.pass && r.critical).length,
      warnings: results.filter(r => !r.pass && !r.critical).length,
    },
  };

  console.log(JSON.stringify(report, null, 2));

  // Print human-readable summary
  console.log("\n--- Health Check Summary ---");
  for (const r of results) {
    const icon = r.pass ? "PASS" : (r.critical ? "FAIL" : "WARN");
    console.log(`  [${icon}] ${r.name}: ${r.detail}`);
  }
  console.log("");

  if (report.summary.criticalFailures > 0) {
    console.log(`RESULT: ${report.summary.criticalFailures} critical failure(s). Exiting with code 1.`);
    process.exit(1);
  } else if (report.summary.warnings > 0) {
    console.log(`RESULT: ${report.summary.warnings} warning(s), no critical failures. Exiting with code 2.`);
    process.exit(2);
  } else {
    console.log("RESULT: All checks passed.");
    process.exit(0);
  }
}

main();
