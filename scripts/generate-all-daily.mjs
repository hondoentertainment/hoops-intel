#!/usr/bin/env node
// generate-all-daily.mjs — In-process daily generation orchestrator
// Imports and calls each generator directly — no child process spawning.
// This eliminates timeout/SIGTERM issues and enables concurrency control.
//
// Usage: node scripts/generate-all-daily.mjs [--dry-run]

import Anthropic from "@anthropic-ai/sdk";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Import generators
import { generate as generateEdition } from "./generate-edition.mjs";
import { validate as validateSchema } from "./validate-schema.mjs";
import { generate as generateWatchGuide } from "./generate-watch-guide.mjs";
import { generate as generateSentiment } from "./generate-sentiment.mjs";
import { generate as generateMomentum } from "./generate-momentum.mjs";
import { generate as generatePodcast } from "./generate-podcast.mjs";
import { generate as generateHistory } from "./generate-history.mjs";
import { generate as generateRefs } from "./generate-refs.mjs";
import { generate as generateRss } from "./generate-rss.mjs";
import { generate as generateSitemap } from "./generate-sitemap.mjs";
import { generate as generateOgImages } from "./generate-og-images.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

// ── Pre-flight ────────────────────────────────────────────────────────────
if (!process.env.ANTHROPIC_API_KEY) {
  console.log("Hoops Intel — Daily Generation Runner");
  console.log("  Skipping — ANTHROPIC_API_KEY not set.");
  console.log("  Add it as a GitHub repository secret to enable this workflow.");
  process.exit(0);
}

const DRY_RUN = process.argv.includes("--dry-run");
if (DRY_RUN) {
  console.log("DRY RUN MODE — validating setup only");
  process.exit(0);
}

// ── Shared Anthropic client ────────────────────────────────��──────────────
const client = new Anthropic();

// ── Phase definitions ──────────────────────────────���──────────────────────

// Phase 1: Must run first — generates pulseData.ts that everything depends on
const PHASE_1 = [
  { name: "Edition", fn: generateEdition, needsClient: true },
];

// Phase 1.5: Validation — must pass before continuing
const VALIDATION = [
  { name: "Schema Validation", fn: validateSchema, needsClient: false },
];

// Phase 2: API-calling scripts — run with controlled concurrency
const PHASE_2_API = [
  { name: "Watch Guide", fn: generateWatchGuide, needsClient: true },
  { name: "Sentiment", fn: generateSentiment, needsClient: true },
  { name: "Momentum", fn: generateMomentum, needsClient: true },
  { name: "Podcast", fn: generatePodcast, needsClient: true },
  { name: "History", fn: generateHistory, needsClient: true },
  { name: "Refs", fn: generateRefs, needsClient: true },
];

// Phase 2: File-only scripts — run immediately (no API calls)
const PHASE_2_FILE = [
  { name: "RSS Feed", fn: generateRss, needsClient: false },
  { name: "Sitemap", fn: generateSitemap, needsClient: false },
  { name: "OG Images", fn: generateOgImages, needsClient: false },
];

const API_CONCURRENCY = 3; // max concurrent Claude API calls

// ── Runner ──────────────────────────────────────────────────────────────���─

async function runStep(step) {
  const start = Date.now();
  try {
    if (step.needsClient) {
      await step.fn({ client });
    } else {
      await step.fn();
    }
    const elapsed = ((Date.now() - start) / 1000).toFixed(1);
    return { name: step.name, status: "success", elapsed };
  } catch (err) {
    const elapsed = ((Date.now() - start) / 1000).toFixed(1);
    console.error(`   [x] ${step.name} failed: ${err.message}`);
    return { name: step.name, status: "failed", elapsed, error: err.message };
  }
}

async function runPhase(label, steps, { parallel = false, concurrency = 0 } = {}) {
  console.log(`\n── ${label} ──`);
  const start = Date.now();
  let results;

  if (parallel && concurrency > 0) {
    // Run with controlled concurrency (batches of N)
    console.log(`   Running ${steps.length} scripts (concurrency: ${concurrency})...`);
    results = [];
    for (let i = 0; i < steps.length; i += concurrency) {
      const batch = steps.slice(i, i + concurrency);
      const batchResults = await Promise.all(batch.map(runStep));
      results.push(...batchResults);
    }
  } else if (parallel) {
    // Run all in parallel (for file-only scripts)
    console.log(`   Running ${steps.length} scripts in parallel...`);
    results = await Promise.all(steps.map(runStep));
  } else {
    // Run sequentially
    results = [];
    for (const step of steps) {
      console.log(`   Running ${step.name}...`);
      results.push(await runStep(step));
    }
  }

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  const passed = results.filter((r) => r.status === "success").length;
  const failed = results.filter((r) => r.status === "failed").length;

  for (const r of results) {
    const icon = r.status === "success" ? "+" : "x";
    const suffix = r.error ? ` (${r.error})` : "";
    console.log(`   [${icon}] ${r.name} — ${r.elapsed}s${suffix}`);
  }
  console.log(`   Phase total: ${elapsed}s (${passed} passed, ${failed} failed)`);

  return results;
}

// ── Main ──────────────────────────────���─────────────────────────���─────────

async function main() {
  const totalStart = Date.now();
  const totalScripts = PHASE_1.length + VALIDATION.length + PHASE_2_API.length + PHASE_2_FILE.length;
  console.log("Hoops Intel — Daily Generation (In-Process)");
  console.log(`   Total scripts: ${totalScripts}`);

  // Phase 1: Generate edition (must complete before anything else)
  const p1 = await runPhase("Phase 1: Edition Generation", PHASE_1);
  if (p1.some((r) => r.status === "failed")) {
    console.error("\nEdition generation failed — aborting.");
    process.exit(1);
  }

  // Phase 1.5: Validate the generated pulseData.ts
  const val = await runPhase("Phase 1.5: Schema Validation", VALIDATION);
  if (val.some((r) => r.status === "failed")) {
    console.error("\nSchema validation failed — aborting.");
    process.exit(1);
  }

  // Phase 2: Content generation
  // File-only scripts first (instant, no API calls)
  const pFile = await runPhase("Phase 2a: File Generation", PHASE_2_FILE, { parallel: true });

  // API scripts with controlled concurrency (prevents rate limiting)
  const pApi = await runPhase("Phase 2b: AI Content Generation", PHASE_2_API, {
    parallel: true,
    concurrency: API_CONCURRENCY,
  });

  // ── Summary ──────────────────────────────────────���──────────────────────
  const allResults = [...p1, ...val, ...pFile, ...pApi];
  const passed = allResults.filter((r) => r.status === "success").length;
  const failed = allResults.filter((r) => r.status === "failed").length;
  const totalElapsed = ((Date.now() - totalStart) / 1000).toFixed(1);

  console.log("\n══════════════════════════════════════════");
  console.log("  Daily Generation Summary");
  console.log("══════════════════════════════════════════");
  for (const r of allResults) {
    const icon = r.status === "success" ? "+" : "x";
    console.log(`  [${icon}] ${r.name} (${r.elapsed}s)`);
  }
  console.log(`\n  Passed: ${passed}/${allResults.length}`);
  console.log(`  Failed: ${failed}/${allResults.length}`);
  console.log(`  Total time: ${totalElapsed}s`);
  console.log("══════════════════════════════════════════\n");

  // Write generation report for debugging
  const report = {
    date: new Date().toISOString(),
    totalTime: `${totalElapsed}s`,
    passed,
    failed,
    results: allResults.map((r) => ({ name: r.name, status: r.status, elapsed: r.elapsed, error: r.error })),
  };
  try {
    writeFileSync(join(ROOT, ".generation-report.json"), JSON.stringify(report, null, 2), "utf8");
  } catch { /* non-critical */ }

  if (failed > 0) {
    const criticalFail = [...p1, ...val].some((r) => r.status === "failed");
    const failedNames = allResults.filter((r) => r.status === "failed").map((r) => r.name).join(", ");
    if (criticalFail) {
      console.log(`${failed} critical script(s) failed: ${failedNames}`);
      process.exit(1);
    } else {
      // Exit with code 2 for partial failure — workflow can detect this
      console.log(`${failed} non-critical script(s) failed (${failedNames}) — edition was generated successfully.`);
      console.log("Exiting with code 2 (partial failure) to flag incomplete generation.");
      process.exit(2);
    }
  } else {
    console.log("All daily scripts completed successfully!");
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
