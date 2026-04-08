#!/usr/bin/env node
// generate-rss.mjs — Generates RSS feed from archiveData.ts
// Called by the daily update workflow after generating the edition

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function generate() {
  const archiveFile = readFileSync(
    join(ROOT, "client/src/lib/archiveData.ts"),
    "utf8"
  );

  // Extract edition objects using a simple regex approach
  const editions = [];
  const regex =
    /\{id:"([^"]+)",date:"([^"]+)",displayDate:"([^"]+)",headline:"([^"]+)",subheadline:"([^"]+)",gamesCount:(\d+),topStory:"([^"]+)",topPlayer:"([^"]+)",topStatLine:"([^"]+)"/g;
  let match;
  while ((match = regex.exec(archiveFile)) !== null) {
    editions.push({
      id: match[1],
      date: match[2],
      displayDate: match[3],
      headline: match[4],
      subheadline: match[5],
      gamesCount: parseInt(match[6]),
      topStory: match[7],
      topPlayer: match[8],
      topStatLine: match[9],
    });
  }

  const now = new Date().toUTCString();
  const items = editions
    .slice(0, 30)
    .map(
      (ed) => `    <item>
      <title>${escapeXml(ed.headline)}</title>
      <description>${escapeXml(ed.subheadline + " — " + ed.topStory)}</description>
      <link>https://hoopsintel.net/archive</link>
      <guid>https://hoopsintel.net/edition/${ed.id}</guid>
      <pubDate>${new Date(ed.date + "T12:00:00Z").toUTCString()}</pubDate>
    </item>`
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Hoops Intel — Daily NBA Scores &amp; Analysis</title>
    <link>https://hoopsintel.net</link>
    <description>Your daily NBA intelligence briefing with scores, player rankings, injury reports, and game previews.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="https://hoopsintel.net/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  const outPath = join(ROOT, "public", "feed.xml");
  writeFileSync(outPath, rss, "utf8");
  console.log(`✓ RSS feed written to public/feed.xml (${editions.length} editions)`);
}

// ── Standalone CLI entry point ────────────────────────────
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generate();
}
