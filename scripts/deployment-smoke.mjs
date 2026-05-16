#!/usr/bin/env node
const base = (process.env.SMOKE_BASE_URL || process.argv[2] || "https://hoopsintel.net").replace(/\/+$/, "");

const checks = [
  { path: "/", type: "html" },
  { path: "/playoffs", type: "html" },
  { path: "/sitemap.xml", type: "xml" },
  { path: "/feed.xml", type: "xml", optional: true },
  { path: "/robots.txt", type: "text" },
  { path: "/api/ops-readiness", type: "json", optional: true },
  { path: "/api/player-intel", type: "json" },
  { path: "/api/game-center", type: "json" },
];

async function check({ path, type, optional }) {
  const url = `${base}${path}`;
  const start = Date.now();
  let res;
  try {
    res = await fetch(url, { headers: { "User-Agent": "HoopsIntelSmoke/1.0" } });
  } catch (err) {
    if (optional) return { ok: true, optional, path, note: `optional fetch failed: ${err.message}` };
    return { ok: false, path, error: `fetch failed: ${err.message}` };
  }
  const text = await res.text();
  const durationMs = Date.now() - start;
  if (!res.ok && !optional) return { ok: false, path, error: `HTTP ${res.status}`, durationMs };
  if (!res.ok && optional) return { ok: true, optional, path, note: `optional HTTP ${res.status}`, durationMs };
  if (type === "html" && !/<div id="root">/.test(text)) return { ok: false, path, error: "missing app root", durationMs };
  if (type === "xml" && !/^<\?xml|<rss|<urlset/.test(text.trim())) return { ok: false, path, error: "unexpected XML body", durationMs };
  if (type === "json") {
    try {
      JSON.parse(text);
    } catch {
      return { ok: false, path, error: "invalid JSON body", durationMs };
    }
  }
  return { ok: true, path, durationMs };
}

const results = await Promise.all(checks.map(check));
let failed = 0;
for (const result of results) {
  if (result.ok) {
    console.log(`[smoke] ✓ ${result.path}${result.durationMs ? ` (${result.durationMs}ms)` : ""}${result.note ? ` — ${result.note}` : ""}`);
  } else {
    failed++;
    console.error(`[smoke] ✗ ${result.path}: ${result.error}`);
  }
}

if (failed) {
  console.error(`[smoke] ${failed} check(s) failed for ${base}`);
  process.exit(1);
}
console.log(`[smoke] all checks passed for ${base}`);
