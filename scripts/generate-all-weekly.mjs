#!/usr/bin/env node
// generate-all-weekly.mjs — Optimized weekly generation runner
// Runs all weekly scripts in parallel with timeout, timing, and structured reporting.
// Usage: node scripts/generate-all-weekly.mjs
// Exit codes: 0 = all pass, 1 = critical failure, 2 = partial failure

import { spawn } from "child_process";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { validateOutput } from "./lib/validate-output.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

// ── CLI flags ──────────────────────────────────────────────────────────────
const DRY_RUN = process.argv.includes("--dry-run");
if (DRY_RUN) {
  console.log("DRY RUN MODE — will validate inputs but not generate content");
}

// ── Pre-flight: check for required secrets ─────────────────────────────────
if (!process.env.ANTHROPIC_API_KEY) {
  console.log("Hoops Intel — Weekly Generation Runner");
  console.log("Skipping — ANTHROPIC_API_KEY not set.");
  console.log("   Add it as a GitHub repository secret to enable this workflow.");
  process.exit(0);
}

// All weekly scripts are independent — run them all in parallel.
// `timeoutMs` overrides the default per-script timeout.
//
// Each script calls Anthropic with up to ~12-16K output tokens. Under load
// individual calls can take 2-3 minutes, and `claudeGenerate` retries with
// 5s→60s backoff on overload. The previous 3-minute default left no headroom
// when several scripts requested simultaneously, so we use a 6-minute default.
// The workflow itself still bounds total runtime via `timeout-minutes: 15`.
const DEFAULT_SCRIPT_TIMEOUT = 360_000; // 6 minutes per script
// `output` is the data file the script is expected to write. After every
// script finishes successfully we run a syntax/parse check against the file
// to catch truncated AI output, duplicate keys, etc. before they reach commit
// (which is what broke the 2026-04-20 Vercel build with `tradeSimData.ts`
// duplicate keys and `draftData.ts` unterminated string).
const WEEKLY_SCRIPTS = [
  { name: "Trade Value",     script: "generate-trade-value.mjs",   output: "client/src/lib/tradeValueData.ts" },
  { name: "Lineups",         script: "generate-lineups.mjs",       output: "client/src/lib/lineupData.ts" },
  { name: "Tactics",         script: "generate-tactics.mjs",       output: "client/src/lib/tacticsData.ts" },
  { name: "Projections",     script: "generate-projections.mjs",   output: "client/src/lib/projectionsData.ts" },
  { name: "Draft Intel",     script: "generate-draft.mjs",         output: "client/src/lib/draftData.ts" },
  { name: "Clutch Ratings",  script: "generate-clutch.mjs",        output: "client/src/lib/clutchData.ts" },
  { name: "Trade Simulator", script: "generate-trade-sim.mjs",     output: "client/src/lib/tradeSimData.ts" },
  { name: "Community Pulse", script: "generate-community-pulse.mjs", output: "client/src/lib/communityPulseData.ts" },
];

function runScript({ name, script, output, timeoutMs = DEFAULT_SCRIPT_TIMEOUT }) {
  return new Promise((resolve) => {
    const scriptPath = join(__dirname, script);
    const start = Date.now();

    const args = DRY_RUN ? [scriptPath, "--dry-run"] : [scriptPath];
    const child = spawn("node", args, {
      cwd: ROOT,
      env: process.env,
      stdio: "pipe",
    });

    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (d) => { stdout += d; });
    child.stderr.on("data", (d) => { stderr += d; });

    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      child.kill("SIGTERM");
    }, timeoutMs);

    child.on("close", async (code) => {
      clearTimeout(timer);
      const elapsed = ((Date.now() - start) / 1000).toFixed(1);
      if (code === 0) {
        // Validate the script's output file before declaring success so that
        // syntactically broken Claude output (truncated strings, duplicate
        // keys, etc.) is treated as a script failure rather than committed.
        if (output && !DRY_RUN) {
          const check = await validateOutput(join(ROOT, output));
          if (!check.ok) {
            console.error(`  [${name}] generated ${output} but it failed parse check: ${check.reason}`);
            resolve({ name, status: "failed", elapsed, error: `invalid output (${check.reason})` });
            return;
          }
        }
        resolve({ name, status: "success", elapsed });
      } else {
        if (stderr) console.error(`  [${name}] ${stderr.trim()}`);
        const reason = timedOut
          ? `timed out after ${(timeoutMs / 1000).toFixed(0)}s`
          : `exit code ${code}`;
        resolve({ name, status: "failed", elapsed, error: reason });
      }
    });

    child.on("error", (err) => {
      clearTimeout(timer);
      const elapsed = ((Date.now() - start) / 1000).toFixed(1);
      resolve({ name, status: "failed", elapsed, error: err.message });
    });
  });
}

async function main() {
  const totalStart = Date.now();
  console.log("Hoops Intel — Weekly Generation Runner");
  console.log(`   Total scripts: ${WEEKLY_SCRIPTS.length}`);
  console.log(`   Running all scripts in parallel...\n`);

  const results = await Promise.all(WEEKLY_SCRIPTS.map(runScript));

  const passed = results.filter((r) => r.status === "success").length;
  const failed = results.filter((r) => r.status === "failed").length;
  const totalElapsed = ((Date.now() - totalStart) / 1000).toFixed(1);

  // Summary
  console.log("\n══════════════════════════════════════════");
  console.log("  Weekly Generation Summary");
  console.log("══════════════════════════════════════════");
  for (const r of results) {
    const icon = r.status === "success" ? "+" : "x";
    const suffix = r.error ? ` (${r.error})` : "";
    console.log(`  [${icon}] ${r.name} — ${r.elapsed}s${suffix}`);
  }
  console.log(`\n  Passed: ${passed}/${results.length}`);
  console.log(`  Failed: ${failed}/${results.length}`);
  console.log(`  Total time: ${totalElapsed}s`);
  console.log("══════════════════════════════════════════\n");

  // Write generation report for debugging
  const report = {
    date: new Date().toISOString(),
    type: "weekly",
    totalTime: `${totalElapsed}s`,
    passed,
    failed,
    results: results.map((r) => ({
      name: r.name,
      status: r.status,
      elapsed: r.elapsed,
      error: r.error,
    })),
  };
  try {
    writeFileSync(
      join(ROOT, ".weekly-generation-report.json"),
      JSON.stringify(report, null, 2),
      "utf8"
    );
  } catch { /* non-critical */ }

  if (failed > 0) {
    const failedNames = results
      .filter((r) => r.status === "failed")
      .map((r) => r.name)
      .join(", ");
    if (failed === results.length) {
      console.log(`All ${failed} scripts failed: ${failedNames}`);
      process.exit(1);
    } else {
      console.log(
        `${failed} script(s) failed (${failedNames}) — ${passed} succeeded.`
      );
      console.log("Exiting with code 2 (partial failure).");
      process.exit(2);
    }
  } else {
    console.log("All weekly scripts completed successfully!");
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
