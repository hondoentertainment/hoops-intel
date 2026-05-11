// Shared Claude API client with model fallback + robust retry logic.
// Tries the preferred model first; on persistent overload, falls back to alternates.

import Anthropic from "@anthropic-ai/sdk";
import { loadLocalEnv } from "../load-local-env.mjs";

loadLocalEnv();

const MODEL_CHAIN = [
  "claude-sonnet-4-6",
  "claude-sonnet-4-20250514",
  "claude-3-5-sonnet-20241022",
];

const MAX_RETRIES_PER_MODEL = 3;
const BASE_DELAY_MS = 5_000;
const MAX_DELAY_MS = 60_000;

function isTransient(err) {
  const s = err?.status;
  return (
    s === 529 ||
    s === 503 ||
    s === 429 ||
    err?.error?.error?.type === "overloaded_error" ||
    err?.headers?.["x-should-retry"] === "true"
  );
}

let _client;

/** Return a singleton Anthropic client. */
export function getClient() {
  if (!_client) _client = new Anthropic();
  return _client;
}

/**
 * Call client.messages.create with automatic model fallback + retries.
 *
 * @param {string} label  – human-readable label for logs
 * @param {object} params – messages.create params (model field is overridden by fallback chain)
 * @param {object} [opts]
 * @param {string[]} [opts.models] – override the default model chain
 * @returns {Promise<import("@anthropic-ai/sdk").Message>}
 */
export async function claudeGenerate(label, params, opts = {}) {
  const client = getClient();
  const models = opts.models ?? MODEL_CHAIN;

  for (let mi = 0; mi < models.length; mi++) {
    const model = models[mi];
    for (let attempt = 1; attempt <= MAX_RETRIES_PER_MODEL; attempt++) {
      try {
        const result = await client.messages.create({ ...params, model });
        if (mi > 0 || attempt > 1) {
          console.log(`✓ ${label}: succeeded on ${model} (attempt ${attempt})`);
        }
        return result;
      } catch (err) {
        if (!isTransient(err)) throw err;
        const isLastModel = mi === models.length - 1;
        const isLastAttempt = attempt === MAX_RETRIES_PER_MODEL;
        if (isLastModel && isLastAttempt) throw err;

        if (isLastAttempt && !isLastModel) {
          console.log(
            `⚠ ${label}: ${model} overloaded after ${attempt} attempts — falling back to ${models[mi + 1]}`
          );
          break; // next model
        }

        const delayMs = Math.min(MAX_DELAY_MS, BASE_DELAY_MS * 2 ** (attempt - 1));
        console.log(
          `⚠ ${label}: ${model} returned ${err?.status ?? "?"} — retry ${attempt}/${MAX_RETRIES_PER_MODEL} in ${Math.round(delayMs / 1000)}s...`
        );
        await new Promise((r) => setTimeout(r, delayMs));
      }
    }
  }
}
