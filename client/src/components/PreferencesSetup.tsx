import { useState, useEffect, useRef, useMemo } from "react";
import {
  getPreferences,
  setPreferences,
  type UserPreferences,
} from "../lib/userPreferences";
import {
  pulseIndex,
  rookieWatch,
  gameResults,
  fantasyAlerts,
  injuryUpdates,
} from "../lib/pulseData";

// All 30 NBA teams
const ALL_TEAMS = [
  "ATL", "BOS", "BRK", "CHA", "CHI", "CLE",
  "DAL", "DEN", "DET", "GSW", "HOU", "IND",
  "LAC", "LAL", "MEM", "MIA", "MIL", "MIN",
  "NOP", "NYK", "OKC", "ORL", "PHI", "PHX",
  "POR", "SAC", "SAS", "TOR", "UTA", "WAS",
];

const MAX_TEAMS = 5;
const MAX_PLAYERS = 10;

// Build player list from all data sources
function buildPlayerList(): string[] {
  const names = new Set<string>();
  for (const p of pulseIndex) names.add(p.player);
  for (const r of rookieWatch) names.add(r.player);
  for (const g of gameResults) names.add(g.topPerformer);
  for (const a of fantasyAlerts) names.add(a.player);
  for (const inj of injuryUpdates) names.add(inj.player);
  return Array.from(names).sort();
}

interface Props {
  onClose: () => void;
  onSave?: (prefs: UserPreferences) => void;
}

export default function PreferencesSetup({ onClose, onSave }: Props) {
  const [teams, setTeams] = useState<string[]>([]);
  const [players, setPlayers] = useState<string[]>([]);
  const [enabled, setEnabled] = useState(true);
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const allPlayers = useMemo(() => buildPlayerList(), []);

  // Load existing preferences on mount
  useEffect(() => {
    const prefs = getPreferences();
    setTeams(prefs.favoriteTeams);
    setPlayers(prefs.favoritePlayers);
    setEnabled(prefs.enablePersonalization);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  const toggleTeam = (team: string) => {
    setTeams((prev) => {
      if (prev.includes(team)) return prev.filter((t) => t !== team);
      if (prev.length >= MAX_TEAMS) return prev;
      return [...prev, team];
    });
  };

  const addPlayer = (player: string) => {
    if (players.includes(player) || players.length >= MAX_PLAYERS) return;
    setPlayers((prev) => [...prev, player]);
    setSearch("");
    setShowSuggestions(false);
  };

  const removePlayer = (player: string) => {
    setPlayers((prev) => prev.filter((p) => p !== player));
  };

  const suggestions = search.length >= 1
    ? allPlayers.filter(
        (p) =>
          p.toLowerCase().includes(search.toLowerCase()) &&
          !players.includes(p)
      ).slice(0, 8)
    : [];

  const handleSave = () => {
    const prefs: UserPreferences = {
      favoriteTeams: teams,
      favoritePlayers: players,
      enablePersonalization: enabled,
      rivalPairs: getPreferences().rivalPairs,
    };
    setPreferences(prefs);
    onSave?.(prefs);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl"
        style={{
          background: "#0A1628",
          border: "1px solid rgba(14,165,233,0.25)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b sticky top-0 z-10"
          style={{
            borderColor: "rgba(255,255,255,0.08)",
            background: "#0A1628",
          }}
        >
          <div>
            <div className="section-label text-xs mb-0.5">CUSTOMIZE</div>
            <div className="text-lg font-bold text-white">My Pulse Setup</div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded flex items-center justify-center transition-colors hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-5 space-y-6">
          {/* Enable Toggle */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-white">
                Enable My Pulse
              </div>
              <div
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Personalize your daily edition based on favorites
              </div>
            </div>
            <button
              onClick={() => setEnabled(!enabled)}
              className="relative w-11 h-6 rounded-full transition-colors"
              style={{
                background: enabled
                  ? "#0EA5E9"
                  : "rgba(255,255,255,0.15)",
              }}
            >
              <div
                className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform"
                style={{
                  transform: enabled
                    ? "translateX(22px)"
                    : "translateX(2px)",
                }}
              />
            </button>
          </div>

          {/* Team Selection */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="section-label">FAVORITE TEAMS</div>
              <div
                className="text-xs font-medium px-2 py-0.5 rounded"
                style={{
                  background:
                    teams.length >= MAX_TEAMS
                      ? "rgba(244,63,94,0.15)"
                      : "rgba(14,165,233,0.15)",
                  color:
                    teams.length >= MAX_TEAMS ? "#F43F5E" : "#0EA5E9",
                }}
              >
                {teams.length}/{MAX_TEAMS} selected
              </div>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-6 gap-2">
              {ALL_TEAMS.map((team) => {
                const selected = teams.includes(team);
                const disabled =
                  !selected && teams.length >= MAX_TEAMS;
                return (
                  <button
                    key={team}
                    onClick={() => !disabled && toggleTeam(team)}
                    className="py-2.5 rounded text-xs font-bold tracking-wider transition-all"
                    style={{
                      background: selected
                        ? "rgba(14,165,233,0.2)"
                        : "rgba(255,255,255,0.04)",
                      border: selected
                        ? "2px solid #0EA5E9"
                        : "2px solid rgba(255,255,255,0.08)",
                      color: selected
                        ? "#0EA5E9"
                        : disabled
                        ? "rgba(255,255,255,0.2)"
                        : "rgba(255,255,255,0.6)",
                      boxShadow: selected
                        ? "0 0 12px rgba(14,165,233,0.3)"
                        : "none",
                      cursor: disabled ? "not-allowed" : "pointer",
                      opacity: disabled ? 0.4 : 1,
                    }}
                  >
                    {team}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Player Selection */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="section-label">FAVORITE PLAYERS</div>
              <div
                className="text-xs font-medium px-2 py-0.5 rounded"
                style={{
                  background:
                    players.length >= MAX_PLAYERS
                      ? "rgba(244,63,94,0.15)"
                      : "rgba(14,165,233,0.15)",
                  color:
                    players.length >= MAX_PLAYERS
                      ? "#F43F5E"
                      : "#0EA5E9",
                }}
              >
                {players.length}/{MAX_PLAYERS} selected
              </div>
            </div>

            {/* Search Input */}
            <div className="relative mb-3">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  ref={searchRef}
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  placeholder="Search players..."
                  disabled={players.length >= MAX_PLAYERS}
                  className="flex-1 bg-transparent text-sm text-white outline-none placeholder-white/30"
                />
              </div>

              {/* Suggestions dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div
                  className="absolute left-0 right-0 top-full mt-1 rounded-lg overflow-hidden z-20 shadow-xl"
                  style={{
                    background: "#0F1D32",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {suggestions.map((p) => (
                    <button
                      key={p}
                      onClick={() => addPlayer(p)}
                      className="w-full text-left px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Selected players as chips */}
            {players.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {players.map((player) => (
                  <span
                    key={player}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: "rgba(14,165,233,0.15)",
                      color: "#0EA5E9",
                      border: "1px solid rgba(14,165,233,0.3)",
                    }}
                  >
                    {player}
                    <button
                      onClick={() => removePlayer(player)}
                      className="w-4 h-4 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                      style={{ color: "#0EA5E9" }}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            )}

            {players.length === 0 && (
              <div
                className="text-xs py-2"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                Search and add up to {MAX_PLAYERS} favorite players
              </div>
            )}
          </div>
        </div>

        {/* Footer with Save */}
        <div
          className="flex items-center justify-between px-6 py-4 border-t sticky bottom-0"
          style={{
            borderColor: "rgba(255,255,255,0.08)",
            background: "#0A1628",
          }}
        >
          <button
            onClick={onClose}
            className="px-4 py-2 rounded text-sm font-medium transition-colors hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: "#0EA5E9" }}
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
