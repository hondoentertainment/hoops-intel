#!/usr/bin/env node
/** Ensures seoConfig STATIC_SITEMAP_PATHS matches scripts/lib/public-routes.mjs */

import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { SEO_CONFIG_SITEMAP_PATHS } from "./lib/public-routes.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const seoFile = readFileSync(join(ROOT, "client/src/lib/seoConfig.ts"), "utf8");
const match = seoFile.match(/export const STATIC_SITEMAP_PATHS[^=]*=\s*\[([\s\S]*?)\];/);
if (!match) {
  console.error("Could not parse STATIC_SITEMAP_PATHS from seoConfig.ts");
  process.exit(1);
}

const fromSeo = [...match[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]).sort();
const expected = [...SEO_CONFIG_SITEMAP_PATHS].sort();

const missingInSeo = expected.filter((p) => !fromSeo.includes(p));
const extraInSeo = fromSeo.filter((p) => !expected.includes(p));

if (missingInSeo.length || extraInSeo.length) {
  console.error("Route manifest drift between public-routes.mjs and seoConfig.ts");
  if (missingInSeo.length) console.error("  Missing in seoConfig:", missingInSeo.join(", "));
  if (extraInSeo.length) console.error("  Extra in seoConfig:", extraInSeo.join(", "));
  process.exit(1);
}

console.log(`[route-manifest] OK — ${expected.length} static sitemap paths aligned`);
