// User Preferences — localStorage-based with optional Supabase sync
// Key: hoops-intel-preferences

import { isSupabaseConfigured, getFavorites, toggleFavorite } from "./supabaseClient";

export interface UserPreferences {
  favoriteTeams: string[];      // Team abbreviations: ["OKC", "DEN", "SAS"]
  favoritePlayers: string[];    // Full names: ["Nikola Jokić", "Shai Gilgeous-Alexander"]
  enablePersonalization: boolean;
}

const STORAGE_KEY = "hoops-intel-preferences";
const MAX_TEAMS = 5;
const MAX_PLAYERS = 10;

const DEFAULT_PREFS: UserPreferences = {
  favoriteTeams: [],
  favoritePlayers: [],
  enablePersonalization: true,
};

export function getPreferences(): UserPreferences {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PREFS };
    const parsed = JSON.parse(raw);
    return {
      favoriteTeams: Array.isArray(parsed.favoriteTeams) ? parsed.favoriteTeams.slice(0, MAX_TEAMS) : [],
      favoritePlayers: Array.isArray(parsed.favoritePlayers) ? parsed.favoritePlayers.slice(0, MAX_PLAYERS) : [],
      enablePersonalization: parsed.enablePersonalization !== false,
    };
  } catch {
    return { ...DEFAULT_PREFS };
  }
}

export function setPreferences(prefs: UserPreferences): void {
  const sanitized: UserPreferences = {
    favoriteTeams: prefs.favoriteTeams.slice(0, MAX_TEAMS),
    favoritePlayers: prefs.favoritePlayers.slice(0, MAX_PLAYERS),
    enablePersonalization: prefs.enablePersonalization,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitized));
  // Best-effort Supabase sync
  syncToSupabase(sanitized);
}

export function addFavoriteTeam(team: string): void {
  const prefs = getPreferences();
  if (prefs.favoriteTeams.length >= MAX_TEAMS) return;
  if (prefs.favoriteTeams.includes(team)) return;
  prefs.favoriteTeams.push(team);
  setPreferences(prefs);
}

export function removeFavoriteTeam(team: string): void {
  const prefs = getPreferences();
  prefs.favoriteTeams = prefs.favoriteTeams.filter((t) => t !== team);
  setPreferences(prefs);
}

export function addFavoritePlayer(player: string): void {
  const prefs = getPreferences();
  if (prefs.favoritePlayers.length >= MAX_PLAYERS) return;
  if (prefs.favoritePlayers.includes(player)) return;
  prefs.favoritePlayers.push(player);
  setPreferences(prefs);
}

export function removeFavoritePlayer(player: string): void {
  const prefs = getPreferences();
  prefs.favoritePlayers = prefs.favoritePlayers.filter((p) => p !== player);
  setPreferences(prefs);
}

export function togglePersonalization(): void {
  const prefs = getPreferences();
  prefs.enablePersonalization = !prefs.enablePersonalization;
  setPreferences(prefs);
}

export function hasPreferences(): boolean {
  const prefs = getPreferences();
  return prefs.favoriteTeams.length > 0 || prefs.favoritePlayers.length > 0;
}

// ═══════════════════════════════════════════════════════════
// SUPABASE SYNC (best-effort, non-blocking)
// ═══════════════════════════════════════════════════════════

async function syncToSupabase(prefs: UserPreferences): Promise<void> {
  if (!isSupabaseConfigured) return;
  const token = localStorage.getItem("hoops-intel-auth-token");
  if (!token) return;

  try {
    const current = await getFavorites();
    // Sync teams
    for (const team of prefs.favoriteTeams) {
      if (!current.teams.includes(team)) {
        await toggleFavorite("team", team);
      }
    }
    for (const team of current.teams) {
      if (!prefs.favoriteTeams.includes(team)) {
        await toggleFavorite("team", team);
      }
    }
    // Sync players
    for (const player of prefs.favoritePlayers) {
      if (!current.players.includes(player)) {
        await toggleFavorite("player", player);
      }
    }
    for (const player of current.players) {
      if (!prefs.favoritePlayers.includes(player)) {
        await toggleFavorite("player", player);
      }
    }
  } catch {
    // Silently ignore sync errors
  }
}
