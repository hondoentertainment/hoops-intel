#!/usr/bin/env node
// Fail CI if duplicate edition ids appear at the top of archiveData.ts (retry bugs).

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");
const path = join(ROOT, "client/src/lib/archiveData.ts");

const lines = readFileSync(path, "utf8").split(/\r?\n/).slice(0, 45);
const ids = [];
const re = /["']id["']\s*:\s*["']([\d-]+)["']/;

for (const line of lines) {
  const m = line.match(re);
  if (m) ids.push(m[1]);
}

const seen = new Set();
const dup = [];
for (const id of ids) {
  if (seen.has(id)) dup.push(id);
  seen.add(id);
}

if (dup.length > 0) {
  console.error("[archive] Duplicate id(s) in archive header:", [...new Set(dup)]);
  process.exit(1);
}
console.log("[archive] No duplicate ids in archive header.");
