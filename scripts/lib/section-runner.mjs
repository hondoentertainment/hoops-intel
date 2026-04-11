// Section runner — shared boilerplate for section generator scripts.
// Each section script uses this to load ESPN data, call Claude, and write output.

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { retryAsync, requireEnv } from "./retry.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..", "..");
const DATA_DIR = join(ROOT, ".daily-data");
const SECTIONS_DIR = join(DATA_DIR, "sections");
const PREVIOUS_DIR = join(DATA_DIR, "sections-previous");

export { ROOT, DATA_DIR, SECTIONS_DIR, PREVIOUS_DIR };

export function ensureDirs() {
  mkdirSync(SECTIONS_DIR, { recursive: true });
  mkdirSync(PREVIOUS_DIR, { recursive: true });
}

/** Load the shared ESPN snapshot. */
export function loadSnapshot() {
  const p = join(DATA_DIR, "espn-snapshot.json");
  if (!existsSync(p)) throw new Error("espn-snapshot.json not found — run fetch-espn-data.mjs first");
  return JSON.parse(readFileSync(p, "utf8"));
}

/** Check for --input flag and load manual JSON. */
export function loadManualInput() {
  const idx = process.argv.indexOf("--input");
  if (idx === -1 || !process.argv[idx + 1]) return null;
  const p = process.argv[idx + 1];
  return JSON.parse(readFileSync(p, "utf8"));
}

/** Write a section JSON to .daily-data/sections/<name>.json */
export function writeSection(name, data) {
  ensureDirs();
  const wrapped = { generatedAt: new Date().toISOString(), section: name, data };
  writeFileSync(join(SECTIONS_DIR, `${name}.json`), JSON.stringify(wrapped, null, 2), "utf8");
  console.log(`  ✓ Section "${name}" written`);
}

/** Read a section, falling back to previous day's version. */
export function readSection(name) {
  const current = join(SECTIONS_DIR, `${name}.json`);
  if (existsSync(current)) {
    const parsed = JSON.parse(readFileSync(current, "utf8"));
    return { data: parsed.data, source: "current", generatedAt: parsed.generatedAt };
  }
  const prev = join(PREVIOUS_DIR, `${name}.json`);
  if (existsSync(prev)) {
    const parsed = JSON.parse(readFileSync(prev, "utf8"));
    console.warn(`  ⚠️ Using previous day's "${name}" section`);
    return { data: parsed.data, source: "previous", generatedAt: parsed.generatedAt };
  }
  return null;
}

/** Archive current sections to sections-previous for next day fallback. */
export function archiveSections() {
  ensureDirs();
  const files = existsSync(SECTIONS_DIR) ? readdirSync(SECTIONS_DIR) : [];
  for (const f of files) {
    if (f.endsWith(".json")) {
      copyFileSync(join(SECTIONS_DIR, f), join(PREVIOUS_DIR, f));
    }
  }
}

/** Call Claude API with retry, extract JSON from response. */
export async function callClaude(prompt, { maxTokens = 2048, model = "claude-sonnet-4-6" } = {}) {
  if (!requireEnv("ANTHROPIC_API_KEY", "section-runner")) {
    throw new Error("ANTHROPIC_API_KEY not set");
  }
  const client = new Anthropic();
  const msg = await retryAsync(() => client.messages.create({
    model,
    max_tokens: maxTokens,
    messages: [{ role: "user", content: prompt }],
  }));
  let text = msg.content[0].text.trim();
  // Strip markdown fences
  text = text.replace(/^```(?:json|typescript|ts)?\n?/m, "").replace(/\n?```$/m, "");
  // Find JSON object or array
  const start = text.search(/[\[{]/);
  if (start === -1) throw new Error("No JSON found in Claude response");
  const firstChar = text[start];
  const endChar = firstChar === "{" ? "}" : "]";
  let depth = 0;
  let end = start;
  for (let i = start; i < text.length; i++) {
    if (text[i] === firstChar) depth++;
    else if (text[i] === endChar) depth--;
    if (depth === 0) { end = i; break; }
  }
  return JSON.parse(text.slice(start, end + 1));
}
