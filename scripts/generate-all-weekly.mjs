#!/usr/bin/env node
// generate-all-weekly.mjs — Convenience script to run all weekly generation scripts
// Usage: node scripts/generate-all-weekly.mjs

import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

// ── Pre-flight: check for required secrets ─────────────────────────────────
if (!process.env.ANTHROPIC_API_KEY) {
  console.log("🏀 Hoops Intel — Weekly Generation Runner");
  console.log("⏭️  Skipping — ANTHROPIC_API_KEY not set.");
  console.log("   Add it as a GitHub repository secret to enable this workflow.");
  process.exit(0);
}

const WEEKLY_SCRIPTS = [
  { name: "Trade Value", script: "generate-trade-value.mjs" },
  { name: "Lineups", script: "generate-lineups.mjs" },
  { name: "Tactics", script: "generate-tactics.mjs" },
  { name: "Projections", script: "generate-projections.mjs" },
  { name: "Draft", script: "generate-draft.mjs" },
  { name: "Clutch", script: "generate-clutch.mjs" },
  { name: "Trade Sim", script: "generate-trade-sim.mjs" },
  { name: "Community Pulse", script: "generate-community-pulse.mjs" },
];

async function main() {
  console.log("🏀 Hoops Intel — Weekly Generation Runner");
  console.log(`   Running ${WEEKLY_SCRIPTS.length} scripts...\n`);

  const results = [];
  let passed = 0;
  let failed = 0;

  for (const { name, script } of WEEKLY_SCRIPTS) {
    const scriptPath = join(__dirname, script);
    console.log(`── ${name} (${script}) ──`);

    try {
      execSync(`node ${scriptPath}`, {
        cwd: ROOT,
        stdio: "inherit",
        env: process.env,
        timeout: 120_000, // 2 minute timeout per script
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
  console.log("  Weekly Generation Summary");
  console.log("══════════════════════════════════════════");
  for (const r of results) {
    const icon = r.status === "success" ? "✅" : "❌";
    console.log(`  ${icon} ${r.name}`);
  }
  console.log(`\n  Passed: ${passed}/${WEEKLY_SCRIPTS.length}`);
  console.log(`  Failed: ${failed}/${WEEKLY_SCRIPTS.length}`);
  console.log("══════════════════════════════════════════\n");

  if (failed > 0) {
    console.log(`⚠️  ${failed} script(s) failed — check logs above for details.`);
    process.exit(1);
  } else {
    console.log("🎉 All weekly scripts completed successfully!");
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
