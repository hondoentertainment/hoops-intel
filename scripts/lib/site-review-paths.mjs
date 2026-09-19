import { SITE_REVIEW_PATHS } from "./public-routes.mjs";

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

/** Static manifest + active playoff series + a player-profile sample. */
export function resolveSiteReviewPaths({ playoffFile = "", pulseFile = "" } = {}) {
  const paths = [...SITE_REVIEW_PATHS];
  for (const m of String(playoffFile || "").matchAll(/seriesId:\s*"([^"]+)"/g)) {
    const loc = `/playoffs/series/${m[1]}`;
    if (!paths.includes(loc)) paths.push(loc);
  }
  for (const loc of siteReviewPlayerSamplePaths(pulseFile)) {
    if (!paths.includes(loc)) paths.push(loc);
  }
  return paths;
}
