#!/usr/bin/env node
// assemble-pulse-data.mjs — Combines section JSONs into final pulseData.ts
// No API key needed. Purely deterministic assembly.
// Usage: node scripts/assemble-pulse-data.mjs

import { readFileSync, writeFileSync, existsSync, copyFileSync, readdirSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");
const DATA_DIR = join(ROOT, ".daily-data");
const SECTIONS_DIR = join(DATA_DIR, "sections");
const PREVIOUS_DIR = join(DATA_DIR, "sections-previous");
const OUTPUT = join(ROOT, "client/src/lib/pulseData.ts");

// Section definitions — order matters for the output file
const SECTIONS = [
  { name: "edition-meta", exports: ["pulseEdition", "narrative"], header: "EDITION METADATA" },
  { name: "ticker", exports: ["tickerItems"], header: "TICKER ITEMS" },
  { name: "game-results", exports: ["gameResults"], header: "GAME RESULTS" },
  { name: "pulse-index", exports: ["pulseIndex"], header: "PULSE INDEX (Top 10 Players)" },
  { name: "stat-leaders", exports: ["statLeaders"], header: "STAT LEADERS" },
  { name: "media-reactions", exports: ["mediaReactions"], header: "MEDIA REACTIONS" },
  { name: "injuries", exports: ["injuryUpdates"], header: "INJURY UPDATES" },
  { name: "game-previews", exports: ["gamePreviews"], header: "GAME PREVIEWS" },
  { name: "rookies-fantasy", exports: ["rookieWatch", "fantasyAlerts"], header: "ROOKIE WATCH & FANTASY" },
  { name: "standings", exports: ["eastStandings", "westStandings"], header: "STANDINGS" },
  { name: "history-trivia", exports: ["historyFact", "triviaQuestion", "hoopsIQ"], header: "HISTORY & TRIVIA" },
];

function readSection(name) {
  const current = join(SECTIONS_DIR, `${name}.json`);
  if (existsSync(current)) {
    const parsed = JSON.parse(readFileSync(current, "utf8"));
    return { data: parsed.data, source: "current" };
  }
  const prev = join(PREVIOUS_DIR, `${name}.json`);
  if (existsSync(prev)) {
    const parsed = JSON.parse(readFileSync(prev, "utf8"));
    console.warn(`  ⚠️ "${name}" — using previous day's content`);
    return { data: parsed.data, source: "previous" };
  }
  return null;
}

function serialize(value) {
  // Single-line JSON matching current pulseData.ts style
  return JSON.stringify(value);
}

function serializeArray(arr) {
  // Array with one item per line for readability
  const items = arr.map(item => `  ${JSON.stringify(item)}`);
  return `[\n${items.join(",\n")}\n]`;
}

function main() {
  let editionDate = "Unknown";
  let editionNo = "??";
  const lines = [];
  let loaded = 0;
  let fallback = 0;
  let missing = 0;

  for (const section of SECTIONS) {
    const result = readSection(section.name);
    if (!result) {
      console.error(`  ✗ "${section.name}" — NOT FOUND (no current or previous)`);
      missing++;
      continue;
    }
    if (result.source === "previous") fallback++;
    else loaded++;

    // Extract edition info for header
    if (section.name === "edition-meta" && result.data.pulseEdition) {
      editionDate = result.data.pulseEdition.date || editionDate;
      const m = (result.data.pulseEdition.edition || "").match(/No\.\s*(\d+)/);
      if (m) editionNo = m[1];
    }

    // Add section header
    lines.push("");
    lines.push("// ═══════════════════════════════════════════════════════════");
    lines.push(`// ${section.header}`);
    lines.push("// ═══════════════════════════════════════════════════════════");
    lines.push("");

    // Add exports
    for (const exp of section.exports) {
      const val = result.data[exp];
      if (val === undefined) {
        console.warn(`  ⚠️ "${section.name}" missing export: ${exp}`);
        continue;
      }
      if (Array.isArray(val)) {
        lines.push(`export const ${exp} = ${serializeArray(val)};`);
      } else {
        lines.push(`export const ${exp} = ${serialize(val)};`);
      }
      lines.push("");
    }
  }

  // Build final file
  const header = [
    `// NBA Pulse — Daily Edition Data`,
    `// Last updated: ${editionDate} (Vol. 2026 · No. ${editionNo})`,
    `// Live at: https://hoopsintel.net`,
  ];

  const output = [...header, ...lines].join("\n");
  writeFileSync(OUTPUT, output, "utf8");

  // Archive current sections for next-day fallback
  mkdirSync(PREVIOUS_DIR, { recursive: true });
  if (existsSync(SECTIONS_DIR)) {
    for (const f of readdirSync(SECTIONS_DIR)) {
      if (f.endsWith(".json")) {
        copyFileSync(join(SECTIONS_DIR, f), join(PREVIOUS_DIR, f));
      }
    }
  }

  console.log(`\n✅ pulseData.ts assembled — ${loaded} current, ${fallback} fallback, ${missing} missing`);
  if (missing > 0) process.exit(2); // partial
}

main();
