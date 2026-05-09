#!/usr/bin/env node
// site-review-agent.mjs — Daily production site fingerprint + change detection + AI recommendations.
// Usage: node scripts/site-review-agent.mjs
// Env: SITE_REVIEW_BASE_URL (default https://hoopsintel.net), ANTHROPIC_API_KEY (optional),
//      SITE_REVIEW_PATHS comma-separated override, SITE_REVIEW_SKIP_AI=1 to skip Claude.

import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { claudeGenerate } from "./lib/claude-client.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");
const CACHE_DIR = join(__dirname, ".cache");
const STATE_PATH = join(CACHE_DIR, "site-review-state.json");
const REPORT_MD = join(ROOT, "site-review-report.md");
const META_JSON = join(ROOT, "site-review-meta.json");

const DEFAULT_BASE = "https://hoopsintel.net";
/** Representative routes aligned with `client/src/lib/siteNav.ts` — adjust when shipping major IA changes */
const DEFAULT_PATHS = [
  "/",
  "/tools",
  "/archive",
  "/playoffs",
  "/injuries",
  "/performance",
  "/pulse-history",
  "/my-pulse",
  "/print-edition",
  "/momentum",
  "/lineups",
  "/trade-value",
  "/ask",
  "/betting-intel",
  "/community-pulse",
  "/widgets",
  "/account",
  "/pro",
  "/trivia",
  "/sitemap.xml",
];

const FETCH_TIMEOUT_MS = 25_000;
const MAX_EXCERPT = 3200;

function parsePaths() {
  const raw = process.env.SITE_REVIEW_PATHS?.trim();
  if (!raw) return DEFAULT_PATHS;
  return raw.split(",").map((p) => p.trim()).filter(Boolean);
}

function stripForHash(html, path) {
  let raw = html;
  if (path === "/sitemap.xml" || path.endsWith("/sitemap.xml")) {
    raw = raw.replace(/\s*<lastmod>[^<]*<\/lastmod>\s*/gi, "");
  }
  let s = raw.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  s = s.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");
  s = s.replace(/<!--[\s\S]*?-->/g, "");
  s = s.replace(/<[^>]+>/g, " ");
  s = s.replace(/\s+/g, " ").trim().toLowerCase();
  return s;
}

function htmlToExcerpt(html) {
  let s = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  s = s.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");
  s = s.replace(/<!--[\s\S]*?-->/g, "");
  s = s.replace(/<[^>]+>/g, " ");
  s = s.replace(/\s+/g, " ").trim();
  return s.length > MAX_EXCERPT ? `${s.slice(0, MAX_EXCERPT)}…` : s;
}

function fingerprint(html, path) {
  return createHash("sha256").update(stripForHash(html, path)).digest("hex");
}

async function fetchPath(base, path) {
  const url = `${base.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      redirect: "follow",
      headers: {
        "User-Agent": "HoopsIntel-SiteReview/1.0 (+https://hoopsintel.net)",
        Accept: "text/html, application/xml, text/xml;q=0.9, */*;q=0.8",
      },
    });
    const text = await res.text();
    return { path, url, ok: res.ok, status: res.status, html: text, error: null };
  } catch (err) {
    return { path, url, ok: false, status: 0, html: "", error: err?.message ?? String(err) };
  } finally {
    clearTimeout(t);
  }
}

function loadState() {
  try {
    if (!existsSync(STATE_PATH)) return null;
    return JSON.parse(readFileSync(STATE_PATH, "utf8"));
  } catch {
    return null;
  }
}

function saveState(payload) {
  mkdirSync(CACHE_DIR, { recursive: true });
  writeFileSync(STATE_PATH, JSON.stringify(payload, null, 2), "utf8");
}

async function runRecommendations({ base, results, previous, changedPaths, failed }) {
  if (process.env.SITE_REVIEW_SKIP_AI === "1" || process.env.SITE_REVIEW_SKIP_AI === "true") {
    return "_Skipping AI recommendations (`SITE_REVIEW_SKIP_AI`)._\n";
  }
  if (!process.env.ANTHROPIC_API_KEY?.trim()) {
    return "_No `ANTHROPIC_API_KEY` — recommendations section omitted. Set the secret in GitHub Actions to enable._\n";
  }

  const lines = results.map((r) => {
    const fp = r.html ? fingerprint(r.html, r.path) : "(no body)";
    const prev = previous?.fingerprints?.[r.path];
    const ch = prev && prev !== fp && r.ok ? "CHANGED" : prev && prev === fp && r.ok ? "same" : "—";
    return `- ${r.path} — HTTP ${r.status || "ERR"} — ${r.ok ? "ok" : "fail"} — vs last: ${ch}`;
  });

  const excerpts = results
    .filter((r) => r.ok && changedPaths.includes(r.path) && r.html)
    .map((r) => `### ${r.path}\n${htmlToExcerpt(r.html)}`)
    .join("\n\n");

  const failedNote =
    failed.length > 0
      ? `\nFailed routes: ${failed.map((f) => `${f.path} (${f.error || f.status})`).join("; ")}`
      : "";

  const prompt = `You are a senior product + editorial reviewer for Hoops Intel (https://hoopsintel.net), a daily NBA intelligence dashboard.

We ran an automated nightly production check.
Base URL: ${base}

Route summary:
${lines.join("\n")}
${failedNote}

The following excerpts are visible text from routes whose fingerprint **changed** since the last run (may be content updates, A/B output, or benign deployment drift). Use them only as hints:
${excerpts || "(No changed routes with successful fetches — site may be unchanged since last run.)"}

Write **Markdown** with these sections exactly (use ## headings):
## What looks new or different
2–5 bullets. If nothing material changed, say so plainly.

## Recommendations
4–7 bullets: UX, clarity, trust, SEO/accessibility, or content cadence. Be specific to this product (daily desk, tools directory, playoffs, Pro). Avoid generic platitudes.

## Risks or follow-ups
0–3 bullets only if warranted (broken flows, stale messaging, legal/sensitive wording). Otherwise say "None noted."

Keep total under 450 words. Tone: concise, actionable.`;

  const msg = await claudeGenerate("site-review", {
    max_tokens: 2048,
    messages: [{ role: "user", content: prompt }],
  });
  const text = msg.content.find((b) => b.type === "text");
  return text?.text?.trim() ?? "_No text in model response._\n";
}

async function main() {
  const base = (process.env.SITE_REVIEW_BASE_URL || DEFAULT_BASE).trim();
  const paths = parsePaths();
  const previous = loadState();

  const results = [];
  for (const path of paths) {
    results.push(await fetchPath(base, path));
  }

  const fingerprints = {};
  const failed = [];
  for (const r of results) {
    if (r.ok && r.html) fingerprints[r.path] = fingerprint(r.html, r.path);
    if (!r.ok) failed.push(r);
  }

  const prevFp = previous?.fingerprints ?? {};
  const changedPaths = [];
  for (const r of results) {
    if (!r.ok || !fingerprints[r.path]) continue;
    if (!prevFp[r.path]) continue;
    if (prevFp[r.path] !== fingerprints[r.path]) changedPaths.push(r.path);
  }

  const isFirstRun = previous === null || !previous.fingerprints || Object.keys(prevFp).length === 0;

  const notify =
    failed.length > 0 || (!isFirstRun && changedPaths.length > 0);

  let aiSection = "";
  try {
    aiSection = await runRecommendations({ base, results, previous, changedPaths, failed });
  } catch (err) {
    const msg = err?.message || String(err);
    const billing =
      /credit balance|too low to access|billing|payment_required/i.test(msg);
    aiSection = billing
      ? "## AI recommendations skipped\n_Anthropic API rejected the request (billing or credits). Add credits or set `SITE_REVIEW_SKIP_AI=1` in Actions to silence this section._\n"
      : `## AI recommendations failed\n\`\`\`\n${err?.stack || msg}\n\`\`\`\n`;
    console.error(err);
  }

  const now = new Date().toISOString();
  const report = `# Site review — ${now.slice(0, 10)}

**Base:** ${base}
**First fingerprinted run:** ${isFirstRun ? "yes (baseline — no issue will be opened for \"changes\")" : "no"}

## Fetch results

| Path | HTTP | OK |
|------|------|-----|
${results.map((r) => `| ${r.path} | ${r.status || "—"} | ${r.ok ? "yes" : "no"} |`).join("\n")}

${failed.length ? `### Errors\n${failed.map((f) => `- \`${f.path}\`: ${f.error || `status ${f.status}`} (${f.url})`).join("\n")}` : ""}

## Fingerprint changes (vs last run)

${isFirstRun ? "_Established baseline; every route will compare on the next run._" : changedPaths.length ? changedPaths.map((p) => `- \`${p}\``).join("\n") : "_No visible HTML changes detected on monitored routes._"}

---

${aiSection}
`;

  writeFileSync(REPORT_MD, report, "utf8");
  writeFileSync(
    META_JSON,
    JSON.stringify(
      {
        generatedAt: now,
        base,
        notify,
        isFirstRun,
        failedCount: failed.length,
        changedCount: changedPaths.length,
        changedPaths,
        pathsChecked: paths.length,
      },
      null,
      2
    ),
    "utf8"
  );

  saveState({ updatedAt: now, fingerprints: { ...prevFp, ...fingerprints } });

  console.log(report);
  console.log("\n---");
  console.log(`Wrote ${REPORT_MD} and ${META_JSON}`);
  console.log(`notify=${notify} failed=${failed.length} changed=${changedPaths.length} firstRun=${isFirstRun}`);

  if (failed.length > 0) process.exitCode = 1;
}

main();
