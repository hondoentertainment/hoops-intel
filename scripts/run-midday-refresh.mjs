#!/usr/bin/env node
// run-midday-refresh.mjs — Midday generators with output validation and revert on failure.

import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { validateOutput } from "./lib/validate-output.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

function revertOutput(relPath) {
  try {
    execSync(`git checkout -- "${relPath}"`, { cwd: ROOT, stdio: "pipe" });
    console.warn(`   ↩ Reverted ${relPath} to last committed version`);
  } catch {
    console.warn(`   ↩ Could not revert ${relPath}`);
  }
}

const MIDDAY_SCRIPTS = [
  {
    name: "Sentiment",
    run: () => {
      execSync(
        `node scripts/generate-sentiment-daily.mjs || node scripts/generate-sentiment.mjs`,
        { cwd: ROOT, stdio: "inherit", env: process.env },
      );
    },
    output: "client/src/lib/sentimentData.ts",
  },
  { name: "Momentum", script: "generate-momentum.mjs", output: "client/src/lib/momentumData.ts" },
  { name: "Watch Guide", script: "generate-watch-guide.mjs", output: "client/src/lib/watchGuideData.ts" },
];

async function main() {
  if (!process.env.ANTHROPIC_API_KEY?.trim()) {
    console.error("❌ ANTHROPIC_API_KEY is not set.");
    process.exit(1);
  }

  let failed = 0;
  for (const job of MIDDAY_SCRIPTS) {
    console.log(`── ${job.name} ──`);
    try {
      if (job.run) {
        job.run();
      } else {
        execSync(`node scripts/${job.script}`, { cwd: ROOT, stdio: "inherit", env: process.env });
      }
      if (job.output) {
        const check = await validateOutput(join(ROOT, job.output));
        if (!check.ok) {
          revertOutput(job.output);
          failed++;
          console.error(`❌ ${job.name} — invalid output (${check.reason})\n`);
          continue;
        }
      }
      console.log(`✅ ${job.name} — OK\n`);
    } catch (err) {
      if (job.output) revertOutput(job.output);
      failed++;
      console.error(`❌ ${job.name} — ${err.message}\n`);
    }
  }

  try {
    execSync(`node scripts/fetch-line-odds.mjs`, { cwd: ROOT, stdio: "inherit", env: process.env });
  } catch {
    console.warn("⚠ fetch-line-odds skipped or failed");
  }
  try {
    execSync(`node scripts/sync-line-movement.mjs sync`, { cwd: ROOT, stdio: "inherit", env: process.env });
  } catch {
    console.warn("⚠ sync-line-movement skipped or failed");
  }

  if (failed > 0) {
    console.error(`❌ ${failed} midday script(s) failed`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
