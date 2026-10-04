// edition-date-alignment.mjs — publication date, tonight's slugs, and sitemap lastmod
// must be the same calendar day. Claude sometimes writes "tomorrow" into pulseEdition.date.

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DESK_LASTMOD_PATHS = ["/", "/players", "/injuries", "/tonight"];

/** "October 4, 2026" → "2026-10-04". Display strings only — no Date timezone shift. */
export function displayDateToIso(display) {
  const m = String(display ?? "").trim().match(/^([A-Za-z]+)\s+(\d{1,2}),\s+(\d{4})$/);
  if (!m) return null;
  const month = MONTHS.findIndex((name) => name.toLowerCase() === m[1].toLowerCase()) + 1;
  if (!month) return null;
  const day = Number(m[2]);
  const year = Number(m[3]);
  if (day < 1 || day > 31) return null;
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function isoToDisplayDate(iso) {
  const m = String(iso ?? "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return null;
  const month = MONTHS[Number(m[2]) - 1];
  if (!month) return null;
  return `${month} ${Number(m[3])}, ${m[1]}`;
}

export function isoToEspnDate(iso) {
  const m = String(iso ?? "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return m ? `${m[1]}${m[2]}${m[3]}` : null;
}

function exportArrayBody(source, name) {
  const start = source.search(new RegExp(`export const ${name}\\s*=\\s*`));
  if (start < 0) return null;
  const bracket = source.indexOf("[", start);
  if (bracket < 0) return null;
  let depth = 0;
  for (let i = bracket; i < source.length; i++) {
    const ch = source[i];
    if (ch === "[") depth += 1;
    else if (ch === "]") {
      depth -= 1;
      if (depth === 0) return source.slice(bracket + 1, i);
    }
  }
  return null;
}

function pulseDisplayDate(source) {
  const block = source.match(/export const pulseEdition\s*=\s*\{([^}]*)\}/);
  return block?.[1]?.match(/\bdate:\s*"([^"]+)"/)?.[1] ?? null;
}

/**
 * Michael Malone was fired as Denver's coach in April 2025.
 * Karl Malone and Moses Malone stay allowed when the first name is present.
 * @param {string} source
 * @returns {string[]}
 */
export function staleDenverCoachHits(source) {
  const hits = [];
  const re = /\bMalone\b/gi;
  let match;
  while ((match = re.exec(source))) {
    const before = source.slice(Math.max(0, match.index - 8), match.index);
    if (/Karl\s+$/i.test(before) || /Moses\s+$/i.test(before)) continue;
    const window = source.slice(Math.max(0, match.index - 48), match.index + 48).replace(/\s+/g, " ").trim();
    hits.push(window);
  }
  return hits;
}

/**
 * Errors that must abort generate-edition.mjs before pulseData.ts is written.
 * @param {string} source
 * @param {{ editionDisplay: string, editionIso: string, tonightEspn: string }} expected
 * @returns {string[]}
 */
export function collectPulsePublicationErrors(source, expected) {
  const errors = [];
  const display = pulseDisplayDate(source);
  const parsed = displayDateToIso(display);
  if (display !== expected.editionDisplay) {
    errors.push(
      `pulseEdition.date is ${JSON.stringify(display)}; the pipeline publication date is ${JSON.stringify(expected.editionDisplay)}`,
    );
  }
  if (parsed !== expected.editionIso) {
    errors.push(`pulseEdition.date parses to ${parsed ?? "invalid"}, expected ${expected.editionIso}`);
  }

  const previews = exportArrayBody(source, "gamePreviews");
  if (previews == null) {
    errors.push("gamePreviews export is missing");
  } else if (previews.trim()) {
    for (const obj of previews.split(/\}\s*,\s*\{/)) {
      if (!/\bhomeTeam\s*:/.test(obj)) continue;
      const home = obj.match(/\bhomeTeam:\s*"([A-Z]{3})"/)?.[1];
      const away = obj.match(/\bawayTeam:\s*"([A-Z]{3})"/)?.[1];
      const id = obj.match(/\bgameId:\s*"([^"]+)"/)?.[1];
      const expectedId = `${away}-${home}-${expected.tonightEspn}`;
      if (!home || !away || id !== expectedId) {
        errors.push(`gamePreviews slug ${JSON.stringify(id ?? null)} must be ${expectedId}`);
      }
    }
  }

  for (const hit of staleDenverCoachHits(source)) {
    errors.push(
      `stale Denver coach reference (Michael Malone was fired in April 2025): "${hit}"`,
    );
  }
  return errors;
}

export function sitemapLastmod(xml, path) {
  const loc = `https://hoopsintel.net${path}`;
  const re = new RegExp(
    `<loc>${loc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc>\\s*<lastmod>([^<]+)</lastmod>`,
  );
  return xml.match(re)?.[1] ?? null;
}

export function tonightGameIds(pulseSource) {
  const previews = exportArrayBody(pulseSource, "gamePreviews") ?? "";
  return [...previews.matchAll(/\bgameId:\s*"([A-Z]{3}-[A-Z]{3}-\d{8})"/g)].map((m) => m[1]);
}

/**
 * Committed edition: archive id is the publication day. Display date, tonight's
 * slugs, and desk sitemap lastmods have to match it.
 * @param {{ pulseSource: string, archiveSource: string, sitemapXml: string }} files
 * @returns {string[]}
 */
export function collectCommittedEditionDateErrors(files) {
  const errors = [];
  const archiveStart = files.archiveSource.search(/export const archiveEditions\s*=\s*\[/);
  const archiveHead = archiveStart >= 0 ? files.archiveSource.slice(archiveStart) : files.archiveSource;
  const archiveId = archiveHead.match(/(?:["']id["']|\bid)\s*:\s*"(\d{4}-\d{2}-\d{2})"/)?.[1] ?? null;
  if (!archiveId) {
    errors.push("archive has no publication id");
    return errors;
  }
  const editionDisplay = isoToDisplayDate(archiveId);
  const tonightEspn = isoToEspnDate(archiveId);
  errors.push(
    ...collectPulsePublicationErrors(files.pulseSource, {
      editionDisplay,
      editionIso: archiveId,
      tonightEspn,
    }).filter((line) => !line.startsWith("stale Denver coach")),
  );
  for (const hit of staleDenverCoachHits(files.pulseSource)) {
    errors.push(`stale Denver coach reference (Michael Malone was fired in April 2025): "${hit}"`);
  }

  for (const path of DESK_LASTMOD_PATHS) {
    const lastmod = sitemapLastmod(files.sitemapXml, path);
    if (lastmod !== archiveId) {
      errors.push(`sitemap lastmod for ${path} is ${lastmod ?? "missing"}, expected ${archiveId}`);
    }
  }

  if (files.lineMovementSource) {
    const stamped = files.lineMovementSource.match(/lineMovementEditionDate\s*=\s*"([^"]+)"/)?.[1] ?? null;
    if (stamped !== editionDisplay) {
      errors.push(
        `lineMovementEditionDate is ${JSON.stringify(stamped)}; publication date is ${JSON.stringify(editionDisplay)}`,
      );
    }
  }
  if (files.lineOpenersSource) {
    const stamped = files.lineOpenersSource.match(/\beditionDate:\s*"([^"]+)"/)?.[1] ?? null;
    if (stamped !== editionDisplay) {
      errors.push(
        `line opener archive date is ${JSON.stringify(stamped)}; publication date is ${JSON.stringify(editionDisplay)}`,
      );
    }
  }

  for (const id of tonightGameIds(files.pulseSource)) {
    const path = `/game/${id}`;
    const lastmod = sitemapLastmod(files.sitemapXml, path);
    const gameIso = `${id.slice(-8, -4)}-${id.slice(-4, -2)}-${id.slice(-2)}`;
    if (gameIso !== archiveId) {
      errors.push(`${path} is dated ${gameIso}, publication id is ${archiveId}`);
    }
    if (lastmod !== gameIso) {
      errors.push(`sitemap lastmod for ${path} is ${lastmod ?? "missing"}, expected ${gameIso}`);
    }
  }
  return errors;
}
