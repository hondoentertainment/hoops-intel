// Shared retry utility for network requests.
// Retries with exponential backoff on transient failures.

const DEFAULT_OPTIONS = {
  maxRetries: 3,
  baseDelayMs: 1000,
  maxDelayMs: 15000,
  retryableStatusCodes: [408, 429, 500, 502, 503, 504],
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Retry a fetch call with exponential backoff.
 * @param {string} url
 * @param {RequestInit} fetchOptions
 * @param {object} retryOptions
 * @returns {Promise<Response>}
 */
export async function fetchWithRetry(url, fetchOptions = {}, retryOptions = {}) {
  const opts = { ...DEFAULT_OPTIONS, ...retryOptions };
  let lastError;

  for (let attempt = 0; attempt <= opts.maxRetries; attempt++) {
    try {
      const res = await fetch(url, {
        ...fetchOptions,
        signal: fetchOptions.signal ?? AbortSignal.timeout(15000),
      });

      if (res.ok) return res;

      if (opts.retryableStatusCodes.includes(res.status) && attempt < opts.maxRetries) {
        const delay = Math.min(opts.baseDelayMs * 2 ** attempt, opts.maxDelayMs);
        const jitter = Math.random() * delay * 0.3;
        console.warn(`  [retry] ${url} returned ${res.status}, retrying in ${Math.round(delay + jitter)}ms (attempt ${attempt + 1}/${opts.maxRetries})`);
        await sleep(delay + jitter);
        continue;
      }

      throw new Error(`HTTP ${res.status} from ${url}`);
    } catch (err) {
      lastError = err;
      if (attempt < opts.maxRetries && isTransientError(err)) {
        const delay = Math.min(opts.baseDelayMs * 2 ** attempt, opts.maxDelayMs);
        const jitter = Math.random() * delay * 0.3;
        console.warn(`  [retry] ${url} failed (${err.code || err.message}), retrying in ${Math.round(delay + jitter)}ms (attempt ${attempt + 1}/${opts.maxRetries})`);
        await sleep(delay + jitter);
        continue;
      }
    }
  }

  throw lastError;
}

function isTransientError(err) {
  const transientCodes = ["ECONNRESET", "ETIMEDOUT", "ECONNREFUSED", "UND_ERR_CONNECT_TIMEOUT", "UND_ERR_SOCKET", "FETCH_ERROR"];
  return transientCodes.includes(err.code) || err.message?.includes("timeout") || err.message?.includes("ENOTFOUND");
}

/**
 * Retry an async function with exponential backoff.
 * Useful for wrapping Anthropic SDK calls.
 * @param {() => Promise<T>} fn
 * @param {object} retryOptions
 * @returns {Promise<T>}
 */
export async function retryAsync(fn, retryOptions = {}) {
  const opts = { maxRetries: 2, baseDelayMs: 2000, maxDelayMs: 15000, ...retryOptions };
  let lastError;

  for (let attempt = 0; attempt <= opts.maxRetries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      const isRetryable = err.status === 429 || err.status === 500 || err.status === 502 ||
        err.status === 503 || err.status === 529 || isTransientError(err);

      if (isRetryable && attempt < opts.maxRetries) {
        const delay = Math.min(opts.baseDelayMs * 2 ** attempt, opts.maxDelayMs);
        console.warn(`  [retry] API call failed (${err.status || err.code || err.message}), retrying in ${Math.round(delay)}ms (attempt ${attempt + 1}/${opts.maxRetries})`);
        await sleep(delay);
        continue;
      }
    }
  }

  throw lastError;
}

/**
 * Check for required env var, log and exit gracefully if missing.
 * @param {string} varName
 * @param {string} scriptName
 * @returns {boolean}
 */
export function requireEnv(varName, scriptName) {
  if (!process.env[varName]) {
    console.log(`[${scriptName}] Skipping — ${varName} not set.`);
    return false;
  }
  return true;
}
