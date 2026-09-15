#!/usr/bin/env node
import { existsSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { assertWellFormedRss, editionIso, extractLiveEdition } from "./generate-rss.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function readDist(name) {
  const path = join(root, "dist", name);
  if (!existsSync(path)) {
    console.error(`Missing RSS bundle: ${path}\nRun \`npm run build\` first.`);
    process.exit(1);
  }
  return readFileSync(path, "utf8");
}

const feed = readDist("feed.xml");
const rss = readDist("rss.xml");

for (const [name, xml] of [
  ["dist/feed.xml", feed],
  ["dist/rss.xml", rss],
]) {
  if (/<(?:html|!doctype html)/i.test(xml)) {
    console.error(`${name} looks like SPA HTML — Vercel fallback likely swallowed the feed.`);
    process.exit(1);
  }
  assertWellFormedRss(xml);
}

if (feed !== rss) {
  console.error("dist/feed.xml and dist/rss.xml must be identical.");
  process.exit(1);
}

const live = extractLiveEdition(readFileSync(join(root, "client/src/lib/pulseData.ts"), "utf8"));
const guid = feed.match(/<guid>([^<]+)<\/guid>/)?.[1] ?? "";
if (!live?.date || !guid.endsWith(`/edition/${live.date}`)) {
  console.error(
    `Newest RSS item (${guid || "missing"}) does not match live edition ${live?.date || "unknown"}.`,
  );
  process.exit(1);
}

const pub = feed.match(/<pubDate>([^<]+)<\/pubDate>/)?.[1];
const pubIso = pub ? editionIso(new Date(pub).toISOString().slice(0, 10)) : "";
if (pubIso !== live.date) {
  console.error(`Newest RSS pubDate (${pub}) does not match live edition ${live.date}.`);
  process.exit(1);
}

const items = (feed.match(/<item>/g) || []).length;
console.log(`✓ dist/feed.xml and dist/rss.xml well-formed RSS (${items} items, newest ${live.date})`);
