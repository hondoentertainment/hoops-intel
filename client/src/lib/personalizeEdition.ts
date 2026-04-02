// Personalization Engine — Client-side re-sorting of edition data
// All functions return new arrays (immutable) and add isPersonalized flags

import type { UserPreferences } from "./userPreferences";

// ═══════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════

function mentionsTeam(text: string, teams: string[]): boolean {
  const upper = text.toUpperCase();
  return teams.some((t) => upper.includes(t.toUpperCase()));
}

function mentionsPlayer(text: string, players: string[]): boolean {
  const lower = text.toLowerCase();
  return players.some((p) => lower.includes(p.toLowerCase()));
}

function mentionsAny(text: string, prefs: UserPreferences): boolean {
  return mentionsTeam(text, prefs.favoriteTeams) || mentionsPlayer(text, prefs.favoritePlayers);
}

// ═══════════════════════════════════════════════════════════
// TICKER
// ═══════════════════════════════════════════════════════════

export function personalizeTickerItems(
  items: Array<{ text: string; type: string }>,
  prefs: UserPreferences
): Array<{ text: string; type: string; isPersonalized?: boolean }> {
  if (!prefs.enablePersonalization) return items;
  const favs: typeof items & { isPersonalized?: boolean }[] = [];
  const rest: typeof items = [];
  for (const item of items) {
    if (mentionsAny(item.text, prefs)) {
      favs.push({ ...item, isPersonalized: true });
    } else {
      rest.push(item);
    }
  }
  return [...favs, ...rest];
}

// ═══════════════════════════════════════════════════════════
// GAME RESULTS
// ═══════════════════════════════════════════════════════════

export function personalizeGameResults<T extends { homeTeam: string; awayTeam: string; topPerformer: string; recap: string }>(
  results: T[],
  prefs: UserPreferences
): Array<T & { isPersonalized?: boolean }> {
  if (!prefs.enablePersonalization) return results;
  const favs: Array<T & { isPersonalized?: boolean }> = [];
  const rest: Array<T & { isPersonalized?: boolean }> = [];
  for (const game of results) {
    const isFav =
      prefs.favoriteTeams.some(
        (t) => t.toUpperCase() === game.homeTeam.toUpperCase() || t.toUpperCase() === game.awayTeam.toUpperCase()
      ) ||
      prefs.favoritePlayers.some(
        (p) => p.toLowerCase() === game.topPerformer.toLowerCase() || game.recap.toLowerCase().includes(p.toLowerCase())
      );
    if (isFav) {
      favs.push({ ...game, isPersonalized: true });
    } else {
      rest.push(game);
    }
  }
  return [...favs, ...rest];
}

// ═══════════════════════════════════════════════════════════
// PULSE INDEX — Highlight (don't re-sort) favorite players
// ═══════════════════════════════════════════════════════════

export function personalizePulseIndex<T extends { player: string; team: string }>(
  index: T[],
  prefs: UserPreferences
): Array<T & { isPersonalized?: boolean }> {
  if (!prefs.enablePersonalization) return index;
  return index.map((entry) => {
    const isFav =
      prefs.favoritePlayers.some((p) => p.toLowerCase() === entry.player.toLowerCase()) ||
      prefs.favoriteTeams.some((t) => t.toUpperCase() === entry.team.toUpperCase());
    return isFav ? { ...entry, isPersonalized: true } : entry;
  });
}

// ═══════════════════════════════════════════════════════════
// GAME PREVIEWS
// ═══════════════════════════════════════════════════════════

export function personalizeGamePreviews<T extends { homeTeam: string; awayTeam: string }>(
  previews: T[],
  prefs: UserPreferences
): Array<T & { isPersonalized?: boolean }> {
  if (!prefs.enablePersonalization) return previews;
  const favs: Array<T & { isPersonalized?: boolean }> = [];
  const rest: Array<T & { isPersonalized?: boolean }> = [];
  for (const preview of previews) {
    const isFav = prefs.favoriteTeams.some(
      (t) => t.toUpperCase() === preview.homeTeam.toUpperCase() || t.toUpperCase() === preview.awayTeam.toUpperCase()
    );
    if (isFav) {
      favs.push({ ...preview, isPersonalized: true });
    } else {
      rest.push(preview);
    }
  }
  return [...favs, ...rest];
}

// ═══════════════════════════════════════════════════════════
// FANTASY ALERTS
// ═══════════════════════════════════════════════════════════

export function personalizeFantasyAlerts<T extends { player: string; team: string }>(
  alerts: T[],
  prefs: UserPreferences
): Array<T & { isPersonalized?: boolean }> {
  if (!prefs.enablePersonalization) return alerts;
  const favs: Array<T & { isPersonalized?: boolean }> = [];
  const rest: Array<T & { isPersonalized?: boolean }> = [];
  for (const alert of alerts) {
    const isFav =
      prefs.favoritePlayers.some((p) => p.toLowerCase() === alert.player.toLowerCase()) ||
      prefs.favoriteTeams.some((t) => t.toUpperCase() === alert.team.toUpperCase());
    if (isFav) {
      favs.push({ ...alert, isPersonalized: true });
    } else {
      rest.push(alert);
    }
  }
  return [...favs, ...rest];
}

// ═══════════════════════════════════════════════════════════
// INJURY UPDATES
// ═══════════════════════════════════════════════════════════

export function personalizeInjuryUpdates<T extends { player: string; team: string }>(
  injuries: T[],
  prefs: UserPreferences
): Array<T & { isPersonalized?: boolean }> {
  if (!prefs.enablePersonalization) return injuries;
  const favs: Array<T & { isPersonalized?: boolean }> = [];
  const rest: Array<T & { isPersonalized?: boolean }> = [];
  for (const injury of injuries) {
    const isFav =
      prefs.favoritePlayers.some((p) => p.toLowerCase() === injury.player.toLowerCase()) ||
      prefs.favoriteTeams.some((t) => t.toUpperCase() === injury.team.toUpperCase());
    if (isFav) {
      favs.push({ ...injury, isPersonalized: true });
    } else {
      rest.push(injury);
    }
  }
  return [...favs, ...rest];
}

// ═══════════════════════════════════════════════════════════
// MASTER PERSONALIZATION
// ═══════════════════════════════════════════════════════════

export interface EditionData {
  tickerItems: Array<{ text: string; type: string }>;
  gameResults: Array<{ homeTeam: string; awayTeam: string; topPerformer: string; recap: string; [key: string]: any }>;
  pulseIndex: Array<{ player: string; team: string; [key: string]: any }>;
  gamePreviews: Array<{ homeTeam: string; awayTeam: string; [key: string]: any }>;
  fantasyAlerts: Array<{ player: string; team: string; [key: string]: any }>;
  injuryUpdates: Array<{ player: string; team: string; [key: string]: any }>;
}

export interface PersonalizedEdition {
  tickerItems: ReturnType<typeof personalizeTickerItems>;
  gameResults: ReturnType<typeof personalizeGameResults>;
  pulseIndex: ReturnType<typeof personalizePulseIndex>;
  gamePreviews: ReturnType<typeof personalizeGamePreviews>;
  fantasyAlerts: ReturnType<typeof personalizeFantasyAlerts>;
  injuryUpdates: ReturnType<typeof personalizeInjuryUpdates>;
}

export function personalizeEdition(data: EditionData, prefs: UserPreferences): PersonalizedEdition {
  return {
    tickerItems: personalizeTickerItems(data.tickerItems, prefs),
    gameResults: personalizeGameResults(data.gameResults, prefs),
    pulseIndex: personalizePulseIndex(data.pulseIndex, prefs),
    gamePreviews: personalizeGamePreviews(data.gamePreviews, prefs),
    fantasyAlerts: personalizeFantasyAlerts(data.fantasyAlerts, prefs),
    injuryUpdates: personalizeInjuryUpdates(data.injuryUpdates, prefs),
  };
}
