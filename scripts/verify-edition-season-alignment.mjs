#!/usr/bin/env node
/**
 * Guard: generate-edition.mjs must keep season-mode branches in sync with
 * scripts/lib/season-mode.mjs (P2 — Draft / FA / SL / preseason windows).
 * Fails CI if prompt injections are accidentally deleted or renamed.
 */

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const editionPath = join(ROOT, "scripts/generate-edition.mjs");
const edition = readFileSync(editionPath, "utf8");

const required = [
  ["seasonMode import", 'from "./lib/season-mode.mjs"'],
  ["cal from seasonMode", "seasonMode(new Date())"],
  ["playoff instruction block", "## PLAYOFF MODE"],
  ["free-agency branch", 'cal === "free-agency"'],
  ["free-agency copy block", "## FREE AGENCY WINDOW (season-mode)"],
  ["summer-league branch", 'cal === "summer-league"'],
  ["summer-league copy block", "## SUMMER LEAGUE WINDOW (season-mode)"],
  ["preseason branch", 'cal === "preseason"'],
  ["preseason copy block", "## PRESEASON WINDOW (season-mode)"],
  ["editionContext in Claude prompt", "pulseEdition.editionContext"],
];

for (const [label, needle] of required) {
  if (!edition.includes(needle)) {
    console.error(`[edition-align] ${label}: missing ${JSON.stringify(needle)} in generate-edition.mjs`);
    process.exit(1);
  }
}

console.log("[edition-align] OK — generate-edition.mjs season branches present");
