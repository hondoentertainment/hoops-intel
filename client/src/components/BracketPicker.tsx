// BracketPicker — Series-level playoff bracket picks.
// Complements the per-game PickEm with a 30-day engagement loop.
// Uses the bracket_picks table (see supabase/series_snapshots_migration.sql).

import { useState, useEffect, useCallback } from "react";
import { playoffSeries, type PlayoffSeries } from "../lib/playoffData";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

function getStoredToken(): string | null {
  return localStorage.getItem("hoops-intel-auth-token");
}

interface BracketPick {
  series_id: string;
  picked_team: string;
  picked_in_games?: number;
}

function loadLocal(): Record<string, BracketPick> {
  try {
    const raw = localStorage.getItem("hoops-intel-bracket-picks");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveLocal(picks: Record<string, BracketPick>): void {
  try {
    localStorage.setItem("hoops-intel-bracket-picks", JSON.stringify(picks));
  } catch {
    // ignore
  }
}

async function getCurrentUser(): Promise<{ id: string } | null> {
  const token = getStoredToken();
  if (!token || !SUPABASE_URL) return null;
  try {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
      headers: { Authorization: `Bearer ${token}`, apikey: SUPABASE_ANON_KEY },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

async function persistPicks(userId: string, token: string, picks: Record<string, BracketPick>) {
  const rows = Object.values(picks).map((p) => ({
    user_id: userId,
    series_id: p.series_id,
    picked_team: p.picked_team,
    picked_in_games: p.picked_in_games ?? null,
  }));
  if (rows.length === 0) return;
  const res = await fetch(`${SUPABASE_URL}/rest/v1/bracket_picks?on_conflict=user_id,series_id`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Prefer: "return=representation,resolution=merge-duplicates",
    },
    body: JSON.stringify(rows),
  });
  if (!res.ok) throw new Error(`Bracket save failed: ${res.status}`);
}

function SeriesRow({
  series,
  pick,
  locked,
  onPick,
  onGamesChange,
}: {
  series: PlayoffSeries;
  pick: BracketPick | undefined;
  locked: boolean;
  onPick: (teamAbbr: string) => void;
  onGamesChange: (games: number) => void;
}) {
  const complete = series.status === "complete";
  const resolvedWinner = complete ? series.winner : undefined;
  const correct = resolvedWinner && pick?.picked_team === resolvedWinner;
  const wrong = resolvedWinner && pick && pick.picked_team !== resolvedWinner;

  const borderColor = correct
    ? "rgba(16,185,129,0.6)"
    : wrong
    ? "rgba(244,63,94,0.5)"
    : "rgba(255,255,255,0.08)";

  return (
    <div
      className="rounded-xl p-4"
      style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${borderColor}` }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>
          {series.conference === "east" ? "East" : "West"} · ({series.higherSeed}) vs ({series.lowerSeed}) · {series.round.replace(/-/g, " ")}
        </div>
        <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{series.summary}</div>
      </div>
      <div className="flex gap-2">
        {[series.higherTeam, series.lowerTeam].map((team) => {
          const selected = pick?.picked_team === team;
          return (
            <button
              key={team}
              disabled={locked}
              onClick={() => !locked && onPick(team)}
              className="flex-1 rounded-lg py-3 px-4 transition-all"
              style={{
                background: selected ? "rgba(14,165,233,0.2)" : "rgba(255,255,255,0.04)",
                border: `2px solid ${selected ? "#0EA5E9" : "rgba(255,255,255,0.08)"}`,
                cursor: locked ? "default" : "pointer",
              }}
            >
              <div className="text-lg font-bold" style={{ color: selected ? "#0EA5E9" : "rgba(255,255,255,0.85)", fontFamily: "'Barlow Condensed', sans-serif" }}>
                {team}
              </div>
              <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                {team === series.higherTeam ? `#${series.higherSeed}` : `#${series.lowerSeed}`}
              </div>
            </button>
          );
        })}
      </div>
      {pick?.picked_team && !locked && (
        <div className="mt-3 flex items-center gap-2 text-xs">
          <span style={{ color: "rgba(255,255,255,0.5)" }}>In</span>
          {[4, 5, 6, 7].map((g) => (
            <button
              key={g}
              onClick={() => onGamesChange(g)}
              className="px-2 py-1 rounded"
              style={{
                background: pick.picked_in_games === g ? "rgba(14,165,233,0.2)" : "rgba(255,255,255,0.04)",
                color: pick.picked_in_games === g ? "#0EA5E9" : "rgba(255,255,255,0.55)",
                border: `1px solid ${pick.picked_in_games === g ? "#0EA5E9" : "rgba(255,255,255,0.06)"}`,
              }}
            >
              {g}
            </button>
          ))}
          <span style={{ color: "rgba(255,255,255,0.3)" }}>games</span>
        </div>
      )}
      {correct && (
        <div className="mt-2 text-xs font-semibold" style={{ color: "#10B981" }}>✓ Correct — series complete</div>
      )}
      {wrong && (
        <div className="mt-2 text-xs font-semibold" style={{ color: "#F43F5E" }}>✗ Missed — {resolvedWinner} won the series</div>
      )}
    </div>
  );
}

export default function BracketPicker() {
  const [picks, setPicks] = useState<Record<string, BracketPick>>(() => loadLocal());
  const [userId, setUserId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string>("");
  const [savedAt, setSavedAt] = useState<Date | null>(null);

  useEffect(() => {
    getCurrentUser().then((u) => setUserId(u?.id ?? null));
  }, []);

  const handlePick = useCallback((seriesId: string, team: string) => {
    setPicks((prev) => {
      const next = { ...prev, [seriesId]: { series_id: seriesId, picked_team: team, picked_in_games: prev[seriesId]?.picked_in_games } };
      saveLocal(next);
      return next;
    });
  }, []);

  const handleGamesChange = useCallback((seriesId: string, games: number) => {
    setPicks((prev) => {
      if (!prev[seriesId]) return prev;
      const next = { ...prev, [seriesId]: { ...prev[seriesId], picked_in_games: games } };
      saveLocal(next);
      return next;
    });
  }, []);

  const handleSave = async () => {
    if (!userId) return;
    const token = getStoredToken();
    if (!token) return;
    setSaving(true);
    setSaveError("");
    try {
      await persistPicks(userId, token, picks);
      setSavedAt(new Date());
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  if (playoffSeries.length === 0) {
    return (
      <div className="rounded-lg p-4 text-sm" style={{ background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.5)" }}>
        Bracket picks open when the playoffs tip off.
      </div>
    );
  }

  const picked = Object.keys(picks).length;
  const total = playoffSeries.length;
  const activePicksOnActiveSeries = playoffSeries.filter((s) => s.status !== "complete" && picks[s.seriesId]);
  // Lock an individual pick if its series has started
  const lockedPerSeries = (s: PlayoffSeries) => s.games.some((g) => g.status !== "scheduled");

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="section-label" style={{ color: "#0EA5E9" }}>BRACKET PICKS</div>
          <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
            Pick one winner per series. Series-level picks lock when the series tips off.
          </div>
        </div>
        <div className="text-xs mono-data" style={{ color: "rgba(255,255,255,0.4)" }}>
          {picked}/{total}
        </div>
      </div>

      {!userId && (
        <div className="rounded-lg px-4 py-3 text-xs" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)", color: "rgba(245,158,11,0.9)" }}>
          Sign in to save bracket picks to the season leaderboard. Picks are saved locally for now.
        </div>
      )}

      <div className="space-y-3">
        {playoffSeries.map((s) => (
          <SeriesRow
            key={s.seriesId}
            series={s}
            pick={picks[s.seriesId]}
            locked={lockedPerSeries(s) || s.status === "complete"}
            onPick={(team) => handlePick(s.seriesId, team)}
            onGamesChange={(g) => handleGamesChange(s.seriesId, g)}
          />
        ))}
      </div>

      {userId && activePicksOnActiveSeries.length > 0 && (
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={handleSave}
            disabled={saving}
            className="py-3 px-6 rounded-xl font-semibold text-sm transition-all"
            style={{
              background: saving ? "rgba(14,165,233,0.3)" : "linear-gradient(135deg, #0EA5E9, #0284C7)",
              color: "#fff",
              cursor: saving ? "not-allowed" : "pointer",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.06em",
            }}
          >
            {saving ? "SAVING..." : `SAVE ${activePicksOnActiveSeries.length} PICK${activePicksOnActiveSeries.length > 1 ? "S" : ""}`}
          </button>
          {savedAt && !saveError && (
            <span className="text-xs" style={{ color: "#10B981" }}>✓ Saved {savedAt.toLocaleTimeString()}</span>
          )}
          {saveError && (
            <span className="text-xs" style={{ color: "#F43F5E" }}>{saveError}</span>
          )}
        </div>
      )}
    </div>
  );
}
