/**
 * Players whose archive page is a thin shell.
 * generate-sitemap.mjs and validate-generated-structure.mjs both read this
 * list. A second copy is how /player/kawhi-leonard shipped on 2026-10-26
 * and the validator then failed the daily edition.
 * Indexed only when today's Pulse card has keyStats, a note, and indexScore.
 */
function slugify(name) {
  return String(name ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function shell(name, team) {
  const slug = slugify(name);
  return Object.freeze({
    name,
    team,
    slug,
    loc: `/player/${slug}`,
  });
}

export const THIN_PLAYER_SHELLS = Object.freeze([
  shell("Kawhi Leonard", "LAC"),
  shell("VJ Edgecombe", "PHI"),
  shell("Jamal Murray", "DEN"),
  shell("Ja Morant", "MEM"),
]);

export function isThinPlayerShellName(name) {
  const slug = slugify(name);
  return THIN_PLAYER_SHELLS.some((row) => row.slug === slug);
}

/** One line: the URL that failed, the rule id, and the fix. */
export function thinShellViolation(url, name) {
  return `${url} violates thin-player-shell: remove this URL from the sitemap, or add a substantive Pulse card (keyStats, note, and indexScore) for ${name} before indexing`;
}
