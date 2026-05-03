#!/usr/bin/env node
// generate-all-daily.mjs — Convenience script to run all daily generation scripts
// Usage: node scripts/generate-all-daily.mjs

import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { loadLocalEnv } from "./load-local-env.mjs";
import { validateOutput } from "./lib/validate-output.mjs";

loadLocalEnv();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

// Scripts marked critical=true will abort the run (exit 1) if they fail.
// Secondary scripts (critical=false) produce exit code 2 (partial failure).
//
// `output` is the data file the script writes (when applicable). After the
// script exits 0 we run a TS parse check on the file using esbuild — this
// catches truncated AI output, duplicate keys, etc. before they reach
// commit. RSS Feed and Sitemap write XML, so they're skipped.
const DAILY_SCRIPTS = [
  { name: "Edition",     script: "generate-edition.mjs",     critical: true,  output: "client/src/lib/pulseData.ts"      },
  { name: "Watch Guide", script: "generate-watch-guide.mjs", critical: false, output: "client/src/lib/watchGuideData.ts" },
  { name: "Sentiment",   script: "generate-sentiment.mjs",   critical: false, output: "client/src/lib/sentimentData.ts"  },
  { name: "Momentum",    script: "generate-momentum.mjs",    critical: false, output: "client/src/lib/momentumData.ts"   },
  { name: "Podcast",     script: "generate-podcast.mjs",     critical: false, output: "client/src/lib/podcastData.ts"    },
  { name: "History",     script: "generate-history.mjs",     critical: false, output: "client/src/lib/historyData.ts"    },
  { name: "Refs",        script: "generate-refs.mjs",        critical: false, output: "client/src/lib/refData.ts"        },
  { name: "RSS Feed",    script: "generate-rss.mjs",         critical: false },
  { name: "Sitemap",     script: "generate-sitemap.mjs",     critical: false },
];

async function main() {
  // ── ESPN playoff snapshot → committed playoffData.ts (no API key) ───
  console.log("🏀 Hoops Intel — Daily Generation Runner");
  console.log("   Preflight: playoff series from ESPN scoreboards…\n");
  try {
    execSync(`node "${join(__dirname, "fetch-playoff-series.mjs")}"`, {
      cwd: ROOT,
      stdio: "inherit",
      env: process.env,
    });
    execSync(`node "${join(__dirname, "sync-playoff-data.mjs")}"`, {
      cwd: ROOT,
      stdio: "inherit",
      env: process.env,
    });
    const chk = await validateOutput(join(ROOT, "client/src/lib/playoffData.ts"));
    if (!chk.ok) console.warn(`⚠ playoffData.ts parse check: ${chk.reason} (left as-is if sync skipped)`);
    try {
      execSync(`node "${join(__dirname, "generate-series-intel.mjs")}"`, {
        cwd: ROOT,
        stdio: "inherit",
        env: process.env,
      });
      const chkIntel = await validateOutput(join(ROOT, "client/src/lib/playoffData.ts"));
      if (!chkIntel.ok) console.warn(`⚠ playoffData.ts after series intel: ${chkIntel.reason}`);
    } catch (intelErr) {
      console.warn(`⚠ Series intel (generate-series-intel.mjs): ${intelErr.message}`);
    }
  } catch (err) {
    console.warn(`⚠ Preflight playoff sync: ${err.message}`);
  }

  // ── Pre-flight: validate required environment variables ───
  if (!process.env.ANTHROPIC_API_KEY?.trim()) {
    console.error("❌ ANTHROPIC_API_KEY is not set.");
    console.error("   Set the ANTHROPIC_API_KEY repository secret in GitHub Settings → Secrets.");
    process.exit(1);
  }

  console.log("");
  console.log(`   Running ${DAILY_SCRIPTS.length} scripts...\n`);

  const results = [];
  let passed = 0;
  let failed = 0;
  let criticalFailed = false;

  for (const { name, script, critical, output } of DAILY_SCRIPTS) {
    const scriptPath = join(__dirname, script);
    console.log(`── ${name} (${script}) ──`);

    try {
      execSync(`node "${scriptPath}"`, {
        cwd: ROOT,
        stdio: "inherit",
        env: process.env,
        // No timeout — edition uses multi-minute overload retries (529).
      });
      // Validate the script's output file (TS data files only). Catches
      // syntactically broken Claude output before it gets committed and
      // breaks the Vercel build.
      if (output) {
        const check = await validateOutput(join(ROOT, output));
        if (!check.ok) {
          const reason = `invalid output (${check.reason})`;
          results.push({ name, status: "failed", error: reason });
          failed++;
          if (critical) criticalFailed = true;
          console.error(`❌ ${name} — FAILED: ${reason}\n`);
          continue;
        }
      }
      results.push({ name, status: "success" });
      passed++;
      console.log(`✅ ${name} — SUCCESS\n`);
    } catch (err) {
      results.push({ name, status: "failed", error: err.message });
      failed++;
      if (critical) criticalFailed = true;
      console.error(`❌ ${name} — FAILED: ${err.message}\n`);
    }
  }

  // ── Summary ───────────────────────────────────────────────
  console.log("\n══════════════════════════════════════════");
  console.log("  Daily Generation Summary");
  console.log("══════════════════════════════════════════");
  for (const r of results) {
    const icon = r.status === "success" ? "✅" : "❌";
    console.log(`  ${icon} ${r.name}`);
  }
  console.log(`\n  Passed: ${passed}/${DAILY_SCRIPTS.length}`);
  console.log(`  Failed: ${failed}/${DAILY_SCRIPTS.length}`);
  console.log("══════════════════════════════════════════\n");

  if (criticalFailed) {
    // Critical script (Edition) failed — hard failure
    console.log(`❌ Critical script(s) failed — aborting.`);
    process.exit(1);
  } else if (failed > 0) {
    // Only secondary scripts failed — partial success
    console.log(`⚠️  ${failed} secondary script(s) failed — edition generated but some content is missing.`);
    process.exit(2);
  } else {
    console.log("🎉 All daily scripts completed successfully!");
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
