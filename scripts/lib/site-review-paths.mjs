import { SITE_REVIEW_PATHS, SITEMAP_PRIVATE_PATHS } from "./public-routes.mjs";

const DEFAULT_ORIGIN = "https://hoopsintel.net";

/** Pathname from a sitemap <loc>, or the raw value when it is already a path. */
export function sitemapLocPath(loc, origin = DEFAULT_ORIGIN) {
  const value = String(loc || "");
  if (value.startsWith(origin)) {
    const rest = value.slice(origin.length);
    return rest || "/";
  }
  return value;
}

/**
 * Compact sitemap digest for the site-review prompt.
 * Full URLs blow past the excerpt cap and hide <lastmod>, which made the
 * nightly review report routes and freshness that were already in the file.
 */
export function summarizeSitemapXml(xml, origin = DEFAULT_ORIGIN) {
  const body = String(xml || "");
  const locs = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const lastmods = (body.match(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g) || []).length;
  const paths = locs.map((loc) => sitemapLocPath(loc, origin));
  return `${locs.length} urls, ${lastmods} lastmod: ${paths.join(" ")}`;
}

/**
 * Split monitored routes that are absent from sitemap.xml.
 * Private hubs and thin /player fixtures are expected absences.
 * publicAbsent is the set the generator should still add.
 */
export function classifySitemapCoverage(monitoredPaths, sitemapXml, origin = DEFAULT_ORIGIN) {
  const body = String(sitemapXml || "");
  const inSitemap = new Set(
    [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => sitemapLocPath(m[1], origin)),
  );
  const lastmods = (body.match(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g) || []).length;
  const absent = (monitoredPaths || []).filter((path) => path !== "/sitemap.xml" && !inSitemap.has(path));
  const privateAbsent = absent.filter((path) => SITEMAP_PRIVATE_PATHS.includes(path));
  const playerAbsent = absent.filter((path) => path.startsWith("/player/"));
  const publicAbsent = absent.filter(
    (path) => !SITEMAP_PRIVATE_PATHS.includes(path) && !path.startsWith("/player/"),
  );
  return {
    urlCount: inSitemap.size,
    lastmodCount: lastmods,
    privateAbsent,
    playerAbsent,
    publicAbsent,
  };
}

/** Match `slugify` in `client/src/lib/searchUtils.ts`. */
function slugify(name) {
  try {
    return String(name ?? "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  } catch {
    return String(name ?? "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }
}

function firstExportPlayer(fileText, exportName) {
  const block = String(fileText || "").match(new RegExp(`export const ${exportName}\\s*=\\s*\\[([\\s\\S]*?)\\]`));
  if (!block) return "";
  const m = block[1].match(/\bplayer:\s*"([^"]+)"/);
  return m?.[1] || "";
}

/** Representative /player/* fingerprints — not every sitemap profile. */
export function siteReviewPlayerSamplePaths(pulseFile = "") {
  const samples = [];
  const pulseLeader = firstExportPlayer(pulseFile, "pulseIndex");
  const injured = firstExportPlayer(pulseFile, "injuryUpdates");
  if (pulseLeader) samples.push(`/player/${slugify(pulseLeader)}`);
  if (injured) samples.push(`/player/${slugify(injured)}`);
  // Stable empty-state fixtures (retired / archive-only / prospect).
  for (const loc of ["/player/chris-paul", "/player/kawhi-leonard", "/player/vj-edgecombe"]) {
    samples.push(loc);
  }
  return [...new Set(samples)];
}

/** Tonight's /game/ URLs from gamePreviews gameIds — the nightly review list. */
export function siteReviewTonightGamePaths(pulseFile = "") {
  const start = String(pulseFile).search(/export const gamePreviews\s*=\s*\[/);
  if (start < 0) return [];
  const bracket = String(pulseFile).indexOf("[", start);
  let depth = 0;
  let body = "";
  for (let i = bracket; i < pulseFile.length; i++) {
    const ch = pulseFile[i];
    if (ch === "[") depth += 1;
    else if (ch === "]") {
      depth -= 1;
      if (depth === 0) {
        body = pulseFile.slice(bracket + 1, i);
        break;
      }
    }
  }
  return [...body.matchAll(/\bgameId:\s*"([A-Z]{3}-[A-Z]{3}-\d{8})"/g)].map((m) => `/game/${m[1]}`);
}

/** Static manifest + active playoff series + tonight's games + a player-profile sample. */
export function resolveSiteReviewPaths({ playoffFile = "", pulseFile = "" } = {}) {
  const paths = [...SITE_REVIEW_PATHS];
  for (const m of String(playoffFile || "").matchAll(/seriesId:\s*"([^"]+)"/g)) {
    const loc = `/playoffs/series/${m[1]}`;
    if (!paths.includes(loc)) paths.push(loc);
  }
  for (const loc of siteReviewTonightGamePaths(pulseFile)) {
    if (!paths.includes(loc)) paths.push(loc);
  }
  for (const loc of siteReviewPlayerSamplePaths(pulseFile)) {
    if (!paths.includes(loc)) paths.push(loc);
  }
  return paths;
}
