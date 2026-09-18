#!/usr/bin/env node
import { existsSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { assertWellFormedSitemap } from "./generate-sitemap.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sitemapPath = join(root, "dist/sitemap.xml");

if (!existsSync(sitemapPath)) {
  console.error(`Missing sitemap bundle: ${sitemapPath}\nRun \`npm run build\` first.`);
  process.exit(1);
}

const xml = readFileSync(sitemapPath, "utf8");
assertWellFormedSitemap(xml);

const urls = (xml.match(/<url>/g) || []).length;
if (urls < 20) {
  console.error(`dist/sitemap.xml looks like a fallback (${urls} urls) — generation likely failed.`);
  process.exit(1);
}

const lastmods = (xml.match(/<lastmod>/g) || []).length;
if (lastmods !== urls) {
  console.error(`dist/sitemap.xml missing lastmod on some URLs (${lastmods} lastmod / ${urls} url).`);
  process.exit(1);
}

const dailyRoutes = ["/", "/tonight", "/injuries"];
for (const path of dailyRoutes) {
  const escaped = path === "/" ? "/" : path.replace(/\//g, "\\/");
  const block = xml.match(
    new RegExp(
      `<url>\\s*<loc>https:\\/\\/hoopsintel\\.net${escaped}<\\/loc>\\s*<lastmod>\\d{4}-\\d{2}-\\d{2}<\\/lastmod>\\s*<changefreq>daily<\\/changefreq>\\s*<priority>\\d(?:\\.\\d+)?<\\/priority>`,
    ),
  );
  if (!block) {
    console.error(`dist/sitemap.xml missing lastmod/priority block for ${path}`);
    process.exit(1);
  }
}

console.log(`✓ dist/sitemap.xml well-formed (${urls} urls, lastmod on daily desk routes)`);
