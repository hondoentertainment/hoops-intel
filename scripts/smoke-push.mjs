#!/usr/bin/env node
// smoke-push.mjs — Dry-run playoff + slate push dispatchers (no notifications sent).
//
//   node scripts/smoke-push.mjs
//   PUSH_DRY_RUN=1 node scripts/check-playoff-series.mjs

import { spawnSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const scripts = [
  ["check-playoff-series.mjs", "--dry-run"],
  ["check-clincher-preview.mjs"],
  ["check-tip-off-push.mjs"],
  ["check-rival-tonight.mjs"],
];

let failed = 0;
for (const [name, ...args] of scripts) {
  console.log(`\n▶ ${name} ${args.join(" ")}`);
  const r = spawnSync(process.execPath, [join(__dirname, name), ...args], {
    cwd: ROOT,
    stdio: "inherit",
    env: { ...process.env, PUSH_DRY_RUN: "1" },
  });
  if (r.status !== 0) failed++;
}

if (failed) {
  console.error(`\n❌ ${failed} smoke script(s) failed`);
  process.exit(1);
}
console.log("\n✅ Push smoke (dry-run) complete");
