/** Shared slate helpers for pulse-driven push dispatchers. */

/** Normalize pulseEdition.date ("May 21, 2026") to YYYY-MM-DD for event keys. */
export function editionDateKey(editionDate) {
  if (!editionDate) {
    return new Date().toISOString().slice(0, 10);
  }
  const parsed = Date.parse(String(editionDate));
  if (!Number.isNaN(parsed)) {
    const d = new Date(parsed);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }
  return String(editionDate).replace(/\s+/g, "-");
}

/** True when a playoff game row belongs to the edition calendar day. */
export function gameOnEditionDate(game, editionKey) {
  if (!editionKey || !game?.date) return false;
  const raw = String(game.date);
  if (raw.startsWith(editionKey)) return true;
  const iso = raw.match(/^(\d{4}-\d{2}-\d{2})/);
  if (iso) return iso[1] === editionKey;
  const parsed = Date.parse(raw);
  if (Number.isNaN(parsed)) return false;
  const d = new Date(parsed);
  const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  return key === editionKey;
}

export function teamsOnSlate(previews) {
  const set = new Set();
  for (const g of previews) {
    if (g.awayTeam) set.add(String(g.awayTeam).toUpperCase());
    if (g.homeTeam) set.add(String(g.homeTeam).toUpperCase());
  }
  return set;
}

/** Mirrors client playoffData.eliminationSeries(). */
export function eliminationSeries(playoffSeries) {
  if (!Array.isArray(playoffSeries)) return [];
  return playoffSeries.filter((s) => {
    if (s.status === "complete") return false;
    return s.higherWins === 3 || s.lowerWins === 3;
  });
}

export function findHeadToHeadPreview(previews, abbrA, abbrB) {
  const a = abbrA.toUpperCase();
  const b = abbrB.toUpperCase();
  return previews.find((g) => {
    const teams = [String(g.awayTeam).toUpperCase(), String(g.homeTeam).toUpperCase()];
    return teams.includes(a) && teams.includes(b);
  });
}

export function previewForTeam(previews, abbr) {
  const t = abbr.toUpperCase();
  return previews.find((g) => String(g.awayTeam).toUpperCase() === t || String(g.homeTeam).toUpperCase() === t);
}
