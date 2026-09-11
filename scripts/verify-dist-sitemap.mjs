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

console.log(`✓ dist/sitemap.xml well-formed (${urls} urls)`);
