#!/usr/bin/env node
// generate-all-daily.mjs — Convenience script to run all daily generation scripts
// Usage: node scripts/generate-all-daily.mjs

import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { loadLocalEnv } from "./load-local-env.mjs";

loadLocalEnv();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

const DAILY_SCRIPTS = [
  { name: "Edition", script: "generate-edition.mjs" },
  { name: "Watch Guide", script: "generate-watch-guide.mjs" },
  { name: "Sentiment", script: "generate-sentiment.mjs" },
  { name: "Momentum", script: "generate-momentum.mjs" },
  { name: "Podcast", script: "generate-podcast.mjs" },
  { name: "History", script: "generate-history.mjs" },
  { name: "Refs", script: "generate-refs.mjs" },
  { name: "RSS Feed", script: "generate-rss.mjs" },
  { name: "Sitemap", script: "generate-sitemap.mjs" },
];

async function main() {
  console.log("🏀 Hoops Intel — Daily Generation Runner");
  console.log(`   Running ${DAILY_SCRIPTS.length} scripts...\n`);

  const results = [];
  let passed = 0;
  let failed = 0;

  for (const { name, script } of DAILY_SCRIPTS) {
    const scriptPath = join(__dirname, script);
    console.log(`── ${name} (${script}) ──`);

    try {
      execSync(`node "${scriptPath}"`, {
        cwd: ROOT,
        stdio: "inherit",
        env: process.env,
        // No timeout — edition uses multi-minute overload retries (529).
      });
      results.push({ name, status: "success" });
      passed++;
      console.log(`✅ ${name} — SUCCESS\n`);
    } catch (err) {
      results.push({ name, status: "failed", error: err.message });
      failed++;
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

  if (failed > 0) {
    console.log(`⚠️  ${failed} script(s) failed — check logs above for details.`);
    process.exit(1);
  } else {
    console.log("🎉 All daily scripts completed successfully!");
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
