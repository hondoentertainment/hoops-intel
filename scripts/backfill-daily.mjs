#!/usr/bin/env node
// backfill-daily.mjs — Run full daily pipeline for specific publication dates
//
// Usage:
//   node scripts/backfill-daily.mjs 2026-04-05 2026-04-06
//   node scripts/backfill-daily.mjs 4-5 4-6          (year defaults to 2026)

import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { loadLocalEnv } from "./load-local-env.mjs";

loadLocalEnv();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");
const RUNNER = join(__dirname, "generate-all-daily.mjs");

const DEFAULT_YEAR = 2026;

function parseDateArg(arg) {
  const t = arg.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(t)) return t;
  const m = t.match(/^(\d{1,2})-(\d{1,2})$/);
  if (m) {
    return `${DEFAULT_YEAR}-${m[1].padStart(2, "0")}-${m[2].padStart(2, "0")}`;
  }
  throw new Error(`Invalid date "${arg}" — use YYYY-MM-DD or M-D (e.g. 4-5)`);
}

function main() {
  const raw = process.argv.slice(2).filter((a) => !a.startsWith("-"));
  if (raw.length === 0) {
    console.error("Usage: node scripts/backfill-daily.mjs <date> [date...]");
    console.error("  Dates: YYYY-MM-DD or M-D (month-day, year " + DEFAULT_YEAR + ")");
    process.exit(1);
  }

  const dates = raw.map(parseDateArg);
  console.log(`🏀 Hoops Intel — Backfill ${dates.length} day(s): ${dates.join(", ")}\n`);

  const failed = [];
  for (const iso of dates) {
    console.log(`\n══════════════ ${iso} ══════════════\n`);
    try {
      execSync(`node "${RUNNER}"`, {
        cwd: ROOT,
        stdio: "inherit",
        env: { ...process.env, HOOPS_EDITION_DATE: iso },
      });
    } catch {
      failed.push(iso);
      console.log(`⚠ ${iso} had failures — continuing to next date...\n`);
    }
  }

  if (failed.length > 0) {
    console.log(`\n⚠ Backfill completed with errors on: ${failed.join(", ")}`);
    process.exit(1);
  }
  console.log("\n✅ Backfill finished for:", dates.join(", "));
}

main();
