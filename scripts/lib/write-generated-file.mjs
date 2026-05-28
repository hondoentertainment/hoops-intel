// Write AI-generated TS data with truncation checks and optional retries.

import { existsSync, readFileSync, writeFileSync } from "fs";
import { validateOutput } from "./validate-output.mjs";

/**
 * @param {string} absPath
 * @param {string | ((attempt: number) => Promise<string> | string)} contentOrGenerate
 * @param {{ retries?: number }} [opts]
 */
export async function writeGeneratedFile(absPath, contentOrGenerate, opts = {}) {
  const retries = opts.retries ?? 2;
  const previous = existsSync(absPath) ? readFileSync(absPath, "utf8") : null;

  let lastReason = "unknown";
  for (let attempt = 1; attempt <= retries; attempt++) {
    const body =
      typeof contentOrGenerate === "function"
        ? await contentOrGenerate(attempt)
        : contentOrGenerate;
    writeFileSync(absPath, body, "utf8");
    const chk = await validateOutput(absPath);
    if (chk.ok) return { ok: true };
    lastReason = chk.reason;
    if (attempt < retries) {
      console.warn(`⚠ ${absPath}: ${chk.reason} — retry ${attempt + 1}/${retries}`);
    }
  }

  if (previous) writeFileSync(absPath, previous, "utf8");
  return { ok: false, reason: lastReason };
}
