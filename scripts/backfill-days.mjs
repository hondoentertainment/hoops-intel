#!/usr/bin/env node
// backfill-days.mjs — Run daily generation for one or more past dates
// Usage: node scripts/backfill-days.mjs 2026-03-25 2026-03-26 2026-03-27
// Each date runs edition + archive (+ RSS/sitemap) sequentially.
//
// Sets HOOPS_EDITION_DATE, GENERATION_DATE, and HOOPS_BACKFILL=1 so
// generate-all-daily skips live-only secondary scripts and playoff preflight.

import { spawn, execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

const dates = process.argv.slice(2);
if (dates.length === 0) {
  console.error("Usage: node scripts/backfill-days.mjs YYYY-MM-DD [YYYY-MM-DD ...]");
  process.exit(1);
}

for (const d of dates) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) {
    console.error(`Invalid date format: ${d} (expected YYYY-MM-DD)`);
    process.exit(1);
  }
}

function commitDate(date) {
  const shouldCommit =
    process.env.GITHUB_ACTIONS === "true" || process.env.HOOPS_BACKFILL_COMMIT === "1";
  if (!shouldCommit || process.env.HOOPS_BACKFILL_COMMIT === "0") return;

  let changed = true;
  try {
    execSync("git diff --quiet", { cwd: ROOT, stdio: "pipe" });
    changed = false;
  } catch {
    /* diff present */
  }

  if (!changed) {
    console.log(`  ℹ No file changes for ${date} — skipping commit.`);
    return;
  }

  console.log(`  📤 Committing backfill for ${date}...`);
  execSync("node scripts/validate-generated-structure.mjs", { cwd: ROOT, stdio: "inherit" });
  execSync('git add client/src/lib/ public/feed.xml public/sitemap.xml public/og/', { cwd: ROOT, stdio: "inherit" });
  execSync(`git commit -m "Backfill edition: ${date}"`, { cwd: ROOT, stdio: "inherit" });

  if (process.env.GITHUB_ACTIONS === "true") {
    execSync("git push origin main", { cwd: ROOT, stdio: "inherit" });
  }
}

function runForDate(date) {
  return new Promise((resolve, reject) => {
    console.log(`\n${"=".repeat(60)}`);
    console.log(`  Generating content for: ${date}`);
    console.log(`${"=".repeat(60)}`);

    const child = spawn("node", [join(__dirname, "generate-all-daily.mjs")], {
      cwd: ROOT,
      env: {
        ...process.env,
        HOOPS_BACKFILL: "1",
        HOOPS_EDITION_DATE: date,
        GENERATION_DATE: date,
      },
      stdio: "inherit",
    });

    child.on("close", (code) => {
      if (code === 0 || code === 2) {
        if (code === 2) {
          console.warn(`  ⚠ Partial failure for ${date} — edition generated, some non-critical scripts failed`);
        }
        try {
          commitDate(date);
        } catch (commitErr) {
          reject(new Error(`commit failed for ${date}: ${commitErr.message}`));
          return;
        }
        resolve();
      } else {
        reject(new Error(`generate-all-daily.mjs exited with code ${code} for date ${date}`));
      }
    });

    child.on("error", reject);
  });
}

async function main() {
  console.log(`Backfilling ${dates.length} day(s): ${dates.join(", ")}`);
  const start = Date.now();

  for (const date of dates) {
    await runForDate(date);
  }

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`\nBackfill complete! ${dates.length} day(s) processed in ${elapsed}s`);
}

main().catch((err) => {
  console.error("Backfill failed:", err.message);
  process.exit(1);
});
