#!/usr/bin/env node
// wait-for-deployment.mjs — Poll production until static assets reflect the local build.
//
// Uses public/feed.xml <lastBuildDate> (updated by daily generation) with a
// sitemap.xml <lastmod> fallback. Exits 0 immediately when production already
// matches — safe when no commit was pushed.
//
// Usage:
//   node scripts/wait-for-deployment.mjs
//   SMOKE_BASE_URL=https://preview.example npm run wait:deploy

import { readFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { fetchWithRetry } from "./lib/retry.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const base = (process.env.SMOKE_BASE_URL || process.argv.find((a) => a.startsWith("http")) || "https://hoopsintel.net").replace(
  /\/+$/,
  "",
);
const maxWaitMs = Number(process.env.DEPLOY_MAX_WAIT_MS || 600_000);
const intervalMs = Number(process.env.DEPLOY_POLL_MS || 15_000);
const skipWait = process.argv.includes("--skip-wait");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function readTag(path, tag) {
  if (!existsSync(path)) return null;
  const xml = readFileSync(path, "utf8");
  return xml.match(new RegExp(`<${tag}>([^<]+)</${tag}>`))?.[1] ?? null;
}

function readLocalFingerprint() {
  const feedBuild = readTag(join(ROOT, "public/feed.xml"), "lastBuildDate");
  if (feedBuild) return { kind: "feed", value: feedBuild };

  const sitemapPath = join(ROOT, "public/sitemap.xml");
  if (existsSync(sitemapPath)) {
    const xml = readFileSync(sitemapPath, "utf8");
    const mods = [...xml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)];
    const lastmod = mods.at(-1)?.[1];
    if (lastmod) return { kind: "sitemap", value: lastmod };
  }

  return null;
}

async function fetchRemote(path) {
  const res = await fetchWithRetry(
    `${base}${path}`,
    { headers: { "User-Agent": "HoopsIntelDeployWait/1.0", "Cache-Control": "no-cache" } },
    { maxRetries: 1, baseDelayMs: 500 },
  );
  return res.text();
}

function parseHttpDate(value) {
  const t = Date.parse(value);
  return Number.isNaN(t) ? null : t;
}

function remoteMatches(kind, remoteXml, expected) {
  if (kind === "feed") {
    const remote = remoteXml.match(/<lastBuildDate>([^<]+)<\/lastBuildDate>/)?.[1];
    if (!remote) return false;
    if (remote === expected) return true;
    const remoteTs = parseHttpDate(remote);
    const expectedTs = parseHttpDate(expected);
    // Production already has a build at or after our commit (e.g. prior bot push).
    return remoteTs != null && expectedTs != null && remoteTs >= expectedTs;
  }
  const mods = [...remoteXml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)];
  const remote = mods.at(-1)?.[1];
  if (!remote) return false;
  if (remote === expected) return true;
  return remote >= expected;
}

async function main() {
  if (skipWait) {
    console.log("[deploy-wait] --skip-wait — skipping poll");
    return;
  }

  const fingerprint = readLocalFingerprint();
  if (!fingerprint) {
    console.warn("[deploy-wait] no local feed/sitemap fingerprint — skipping wait");
    return;
  }

  const path = fingerprint.kind === "feed" ? "/feed.xml" : "/sitemap.xml";
  console.log(`[deploy-wait] waiting for ${base}${path} (${fingerprint.kind}: ${fingerprint.value})`);

  const start = Date.now();
  while (Date.now() - start < maxWaitMs) {
    try {
      const remoteXml = await fetchRemote(path);
      if (remoteMatches(fingerprint.kind, remoteXml, fingerprint.value)) {
        const elapsed = Math.round((Date.now() - start) / 1000);
        console.log(`[deploy-wait] ✓ production matches local fingerprint (${elapsed}s)`);
        return;
      }
      const preview =
        fingerprint.kind === "feed"
          ? remoteXml.match(/<lastBuildDate>([^<]+)<\/lastBuildDate>/)?.[1]
          : [...remoteXml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].at(-1)?.[1];
      console.log(`[deploy-wait] not live yet — remote ${fingerprint.kind} is "${preview ?? "?"}"`);
    } catch (err) {
      console.warn(`[deploy-wait] poll error: ${err.message}`);
    }
    await sleep(intervalMs);
  }

  console.error(`[deploy-wait] timed out after ${Math.round(maxWaitMs / 1000)}s`);
  process.exit(1);
}

main().catch((err) => {
  console.error("[deploy-wait] fatal:", err);
  process.exit(1);
});
