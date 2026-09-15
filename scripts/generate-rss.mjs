#!/usr/bin/env node
// generate-rss.mjs — Generates RSS 2.0 from archive + today's live edition.
// Called by the daily update workflow and `npm run build`.

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

const SITE = "https://hoopsintel.net";
const CANONICAL_FEED = `${SITE}/feed.xml`;
const FEED_PATHS = ["public/feed.xml", "public/rss.xml"];
const ITEM_LIMIT = 30;

export function escapeXml(str) {
  return String(str ?? "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function editionIso(value) {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return trimmed;
  const parsed = Date.parse(trimmed);
  if (Number.isNaN(parsed)) return "";
  return new Date(parsed).toISOString().slice(0, 10);
}

function readQuotedField(block, name) {
  const re = new RegExp(`(?:["']${name}["']|\\b${name})\\s*:\\s*"((?:\\\\.|[^"\\\\])*)"`);
  const m = block.match(re);
  if (!m) return "";
  return m[1].replace(/\\"/g, '"').replace(/\\n/g, "\n").replace(/\\\\/g, "\\");
}

function readNumericField(block, name) {
  const re = new RegExp(`(?:["']${name}["']|\\b${name})\\s*:\\s*(\\d+)`);
  const m = block.match(re);
  return m ? Number(m[1]) : null;
}

export function extractObjectLiterals(source) {
  const start = source.search(/export const archiveEditions\s*=\s*\[/);
  if (start < 0) return [];
  const bracket = source.indexOf("[", start);
  const objects = [];
  let i = bracket + 1;
  while (i < source.length) {
    const ch = source[i];
    if (ch === "]") break;
    if (ch === "{") {
      let depth = 0;
      let inStr = false;
      let escape = false;
      let j = i;
      for (; j < source.length; j++) {
        const c = source[j];
        if (inStr) {
          if (escape) {
            escape = false;
            continue;
          }
          if (c === "\\") {
            escape = true;
            continue;
          }
          if (c === '"') inStr = false;
          continue;
        }
        if (c === '"') {
          inStr = true;
          continue;
        }
        if (c === "{") depth++;
        else if (c === "}") {
          depth--;
          if (depth === 0) {
            objects.push(source.slice(i, j + 1));
            i = j + 1;
            break;
          }
        }
      }
      if (j >= source.length) break;
      continue;
    }
    i++;
  }
  return objects;
}

export function parseArchiveEdition(block) {
  const id = readQuotedField(block, "id");
  const rawDate = readQuotedField(block, "date") || readQuotedField(block, "displayDate");
  const iso = editionIso(rawDate) || editionIso(id.slice(0, 10));
  if (!id || !iso) return null;
  const headline = readQuotedField(block, "headline");
  const subheadline = readQuotedField(block, "subheadline");
  const topStory = readQuotedField(block, "topStory");
  const edition = readQuotedField(block, "edition");
  return {
    id,
    date: iso,
    displayDate: readQuotedField(block, "displayDate") || rawDate,
    headline: headline || subheadline || edition || `Hoops Intel — ${iso}`,
    subheadline,
    topStory,
    topPlayer: readQuotedField(block, "topPlayer"),
    topStatLine: readQuotedField(block, "topStatLine"),
    gamesCount: readNumericField(block, "gamesCount"),
  };
}

export function parseArchiveEditions(source) {
  return extractObjectLiterals(source)
    .map(parseArchiveEdition)
    .filter(Boolean);
}

export function extractLiveEdition(pulseSource) {
  const editionBlock = pulseSource.match(/export const pulseEdition\s*=\s*\{[\s\S]*?\};/);
  const narrativeBlock = pulseSource.match(/export const narrative\s*=\s*\{[\s\S]*?\n\};|export const narrative\s*=\s*\{[\s\S]*?\};/);
  const editionText = editionBlock?.[0] ?? pulseSource;
  const narrativeText = narrativeBlock?.[0] ?? pulseSource;
  const displayDate = readQuotedField(editionText, "date");
  const iso = editionIso(displayDate);
  if (!iso) return null;
  const headline = readQuotedField(narrativeText, "headline");
  const subhead = readQuotedField(narrativeText, "subhead");
  const subtitle = readQuotedField(editionText, "subtitle");
  return {
    id: iso,
    date: iso,
    displayDate: displayDate || iso,
    headline: headline || subtitle || `Hoops Intel — ${displayDate || iso}`,
    subheadline: subhead || subtitle,
    topStory: subtitle || subhead,
    topPlayer: "",
    topStatLine: "",
    gamesCount: 0,
  };
}

export function collectRssEditions(archiveSource, pulseSource) {
  const editions = parseArchiveEditions(archiveSource);
  const live = pulseSource ? extractLiveEdition(pulseSource) : null;
  if (live && !editions.some((ed) => ed.date === live.date)) {
    editions.unshift(live);
  }
  editions.sort((a, b) => {
    if (a.date !== b.date) return b.date.localeCompare(a.date);
    return String(b.id).localeCompare(String(a.id));
  });
  const seen = new Set();
  const unique = [];
  for (const ed of editions) {
    if (seen.has(ed.id)) continue;
    seen.add(ed.id);
    unique.push(ed);
  }
  return unique;
}

export function assertWellFormedRss(xml) {
  if (typeof xml !== "string" || !xml.startsWith("<?xml ")) {
    throw new Error("rss missing XML declaration");
  }
  if (/<(?:html|!doctype html)/i.test(xml)) {
    throw new Error("rss looks like HTML");
  }
  if (!xml.includes('<rss version="2.0"') || !xml.trimEnd().endsWith("</rss>")) {
    throw new Error("rss document truncated");
  }
  if (!xml.includes("<channel>") || !xml.includes("</channel>")) {
    throw new Error("rss channel truncated");
  }
  const opens = (xml.match(/<item>/g) || []).length;
  const closes = (xml.match(/<\/item>/g) || []).length;
  if (opens !== closes) {
    throw new Error(`rss item tags truncated (${opens} open / ${closes} close)`);
  }
  if (opens < 1) throw new Error("rss has no items");
  if (!xml.includes('rel="self"') || !xml.includes(CANONICAL_FEED)) {
    throw new Error("rss atom:self is missing or not the canonical feed");
  }
  return true;
}

function itemXml(ed) {
  const description = [ed.subheadline, ed.topStory].filter(Boolean).join(" — ");
  return `    <item>
      <title>${escapeXml(ed.headline)}</title>
      <description>${escapeXml(description)}</description>
      <link>${SITE}/archive</link>
      <guid>${SITE}/edition/${escapeXml(ed.id)}</guid>
      <pubDate>${new Date(`${ed.date}T12:00:00Z`).toUTCString()}</pubDate>
    </item>`;
}

export function buildRssXml(editions, { now = new Date(), selfHref = CANONICAL_FEED } = {}) {
  const items = editions.slice(0, ITEM_LIMIT);
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Hoops Intel — Daily NBA Scores &amp; Analysis</title>
    <link>${SITE}</link>
    <description>Your daily NBA intelligence briefing with scores, player rankings, injury reports, and game previews.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date(now).toUTCString()}</lastBuildDate>
    <atom:link href="${escapeXml(selfHref)}" rel="self" type="application/rss+xml"/>
${items.map(itemXml).join("\n")}
  </channel>
</rss>
`;
  assertWellFormedRss(rss);
  return rss;
}

export function generate({ write = true, now = new Date() } = {}) {
  const archiveSource = readFileSync(join(ROOT, "client/src/lib/archiveData.ts"), "utf8");
  const pulseSource = readFileSync(join(ROOT, "client/src/lib/pulseData.ts"), "utf8");
  const editions = collectRssEditions(archiveSource, pulseSource);
  if (!editions.length) {
    throw new Error("RSS generation parsed zero editions from archiveData.ts / pulseData.ts");
  }
  const live = extractLiveEdition(pulseSource);
  if (live && editions[0].date !== live.date) {
    throw new Error(
      `RSS newest item ${editions[0].date} does not match live edition ${live.date}`,
    );
  }
  const xml = buildRssXml(editions, { now, selfHref: CANONICAL_FEED });
  if (write) {
    for (const rel of FEED_PATHS) {
      writeFileSync(join(ROOT, rel), xml, "utf8");
    }
    console.log(
      `✓ RSS feed written to public/feed.xml and public/rss.xml (${editions.length} editions, newest ${editions[0].date})`,
    );
  }
  return { xml, editions: editions.slice(0, ITEM_LIMIT) };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generate();
}
