// PickEm Component — Daily Pick'em widget
// Self-contained: inlines Supabase REST fetch, handles auth, localStorage fallback

import { useState, useEffect, useCallback } from "react";

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

export interface GamePreview {
  homeTeam: string;
  homeRecord: string;
  awayTeam: string;
  awayRecord: string;
  time: string;
  tv: string;
  spread?: string;
  overUnder?: string;
  keyMatchup?: string;
  storyline?: string;
  prediction?: string;
  featured?: boolean;
  /** Unique game identifier, e.g. "LAL-HOU-20260318" */
  gameId?: string;
}

export interface PickEmProps {
  games: GamePreview[];
  editionDate: string; // "2026-03-18"
}

type SubmitState = "idle" | "loading" | "locked" | "error";

interface UserPick {
  gameId: string;
  pickedTeam: string;
}

interface LeaderboardEntry {
  user_id: string;
  total_settled: number;
  correct_picks: number;
  accuracy_pct: number | null;
  current_streak: number;
}

// ═══════════════════════════════════════════════════════════
// INLINE SUPABASE REST HELPER
// ═══════════════════════════════════════════════════════════

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

function getStoredToken(): string | null {
  return localStorage.getItem("hoops-intel-auth-token");
}

async function picksDbFetch(
  table: string,
  options: {
    method?: string;
    query?: string;
    body?: unknown;
    token?: string | null;
  } = {}
): Promise<unknown> {
  const { method = "GET", query = "", body, token } = options;
  const headers: Record<string, string> = {
    apikey: SUPABASE_ANON_KEY,
    "Content-Type": "application/json",
    Prefer: method === "POST" ? "return=representation" : "count=exact",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const url = `${SUPABASE_URL}/rest/v1/${table}${query ? `?${query}` : ""}`;
  const res = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const errText = await res.text().catch(() => res.statusText);
    throw new Error(`DB error ${res.status}: ${errText}`);
  }
  return res.json();
}

async function getCurrentUser(): Promise<{ id: string } | null> {
  const token = getStoredToken();
  if (!token || !SUPABASE_URL) return null;
  try {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
        apikey: SUPABASE_ANON_KEY,
      },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

// ═══════════════════════════════════════════════════════════
// LOCAL STORAGE HELPERS
// ═══════════════════════════════════════════════════════════

function getLocalStorageKey(editionDate: string): string {
  return `hoops-intel-picks-${editionDate}`;
}

function loadLocalPicks(editionDate: string): Record<string, string> {
  try {
    const raw = localStorage.getItem(getLocalStorageKey(editionDate));
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

function saveLocalPicks(editionDate: string, picks: Record<string, string>): void {
  try {
    localStorage.setItem(getLocalStorageKey(editionDate), JSON.stringify(picks));
  } catch {
    // Ignore storage errors
  }
}

function isLockedLocally(editionDate: string): boolean {
  try {
    return localStorage.getItem(`hoops-intel-picks-locked-${editionDate}`) === "true";
  } catch {
    return false;
  }
}

function setLockedLocally(editionDate: string): void {
  try {
    localStorage.setItem(`hoops-intel-picks-locked-${editionDate}`, "true");
  } catch {
    // Ignore storage errors
  }
}

// ═══════════════════════════════════════════════════════════
// GAME CARD
// ═══════════════════════════════════════════════════════════

interface GameCardProps {
  game: GamePreview;
  gameId: string;
  pickedTeam: string | null;
  locked: boolean;
  onPick: (gameId: string, team: string) => void;
}

function GameCard({ game, gameId, pickedTeam, locked, onPick }: GameCardProps) {
  const awayPicked = pickedTeam === game.awayTeam;
  const homePicked = pickedTeam === game.homeTeam;

  return (
    <div
      className="rounded-xl p-4 relative overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${game.featured ? "rgba(14,165,233,0.25)" : "rgba(255,255,255,0.06)"}`,
        boxShadow: game.featured ? "0 0 20px rgba(14,165,233,0.08)" : "none",
      }}
    >
      {game.featured && (
        <div
          className="absolute top-0 right-0 px-2 py-0.5 text-xs font-semibold rounded-bl-lg"
          style={{
            background: "rgba(14,165,233,0.2)",
            color: "#0EA5E9",
            fontFamily: "'Barlow Condensed', sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          FEATURED
        </div>
      )}

      {/* Time / TV */}
      <div className="flex items-center gap-2 mb-3">
        <span
          className="text-xs font-medium"
          style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'JetBrains Mono', monospace" }}
        >
          {game.time}
        </span>
        {game.tv && (
          <span
            className="px-1.5 py-0.5 rounded text-xs font-semibold"
            style={{
              background: "rgba(14,165,233,0.1)",
              color: "#0EA5E9",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            {game.tv}
          </span>
        )}
        {game.spread && (
          <span
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            {game.spread}
          </span>
        )}
      </div>

      {/* Team Buttons */}
      <div className="flex items-center gap-2">
        {/* Away Team */}
        <button
          onClick={() => !locked && onPick(gameId, game.awayTeam)}
          disabled={locked}
          className="flex-1 rounded-lg py-3 px-4 text-center transition-all duration-200"
          style={{
            background: awayPicked
              ? "rgba(14,165,233,0.2)"
              : "rgba(255,255,255,0.04)",
            border: `2px solid ${awayPicked ? "#0EA5E9" : "rgba(255,255,255,0.08)"}`,
            cursor: locked ? "default" : "pointer",
            transform: awayPicked && !locked ? "scale(1.02)" : "scale(1)",
          }}
        >
          <div
            className="text-lg font-bold leading-none mb-0.5"
            style={{
              color: awayPicked ? "#0EA5E9" : "rgba(255,255,255,0.85)",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            {game.awayTeam}
          </div>
          <div
            className="text-xs"
            style={{
              color: awayPicked ? "rgba(14,165,233,0.7)" : "rgba(255,255,255,0.35)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {game.awayRecord}
          </div>
          {awayPicked && (
            <div
              className="text-xs font-semibold mt-1"
              style={{ color: "#0EA5E9", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              YOUR PICK
            </div>
          )}
        </button>

        <div
          className="text-xs font-bold px-2"
          style={{ color: "rgba(255,255,255,0.25)", fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          @
        </div>

        {/* Home Team */}
        <button
          onClick={() => !locked && onPick(gameId, game.homeTeam)}
          disabled={locked}
          className="flex-1 rounded-lg py-3 px-4 text-center transition-all duration-200"
          style={{
            background: homePicked
              ? "rgba(14,165,233,0.2)"
              : "rgba(255,255,255,0.04)",
            border: `2px solid ${homePicked ? "#0EA5E9" : "rgba(255,255,255,0.08)"}`,
            cursor: locked ? "default" : "pointer",
            transform: homePicked && !locked ? "scale(1.02)" : "scale(1)",
          }}
        >
          <div
            className="text-lg font-bold leading-none mb-0.5"
            style={{
              color: homePicked ? "#0EA5E9" : "rgba(255,255,255,0.85)",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            {game.homeTeam}
          </div>
          <div
            className="text-xs"
            style={{
              color: homePicked ? "rgba(14,165,233,0.7)" : "rgba(255,255,255,0.35)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {game.homeRecord}
          </div>
          {homePicked && (
            <div
              className="text-xs font-semibold mt-1"
              style={{ color: "#0EA5E9", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              YOUR PICK
            </div>
          )}
        </button>
      </div>

      {/* Key Matchup */}
      {game.keyMatchup && (
        <div
          className="mt-2 text-xs"
          style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans', sans-serif" }}
        >
          {game.keyMatchup}
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// ACCURACY DISPLAY
// ═══════════════════════════════════════════════════════════

interface AccuracyDisplayProps {
  userId: string;
}

function AccuracyDisplay({ userId }: AccuracyDisplayProps) {
  const [entry, setEntry] = useState<LeaderboardEntry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!SUPABASE_URL) { setLoading(false); return; }
    picksDbFetch("pick_leaderboard", {
      query: `user_id=eq.${encodeURIComponent(userId)}&select=*`,
    })
      .then((data) => {
        const rows = data as LeaderboardEntry[];
        setEntry(rows[0] ?? null);
      })
      .catch(() => setEntry(null))
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) {
    return (
      <div
        className="rounded-lg px-4 py-3 mt-4 animate-pulse"
        style={{ background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.15)" }}
      >
        <div className="h-3 w-32 rounded" style={{ background: "rgba(255,255,255,0.08)" }} />
      </div>
    );
  }

  if (!entry || entry.total_settled === 0) {
    return (
      <div
        className="rounded-lg px-4 py-3 mt-4 text-xs"
        style={{
          background: "rgba(14,165,233,0.06)",
          border: "1px solid rgba(14,165,233,0.15)",
          color: "rgba(255,255,255,0.5)",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        No settled picks yet — check back after games conclude.
      </div>
    );
  }

  return (
    <div
      className="rounded-lg px-4 py-3 mt-4 flex items-center gap-6"
      style={{ background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.15)" }}
    >
      <div className="text-center">
        <div
          className="text-2xl font-bold leading-none"
          style={{ color: "#0EA5E9", fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {entry.accuracy_pct !== null ? `${entry.accuracy_pct}%` : "—"}
        </div>
        <div
          className="text-xs mt-0.5"
          style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}
        >
          Season Accuracy
        </div>
      </div>
      <div className="text-center">
        <div
          className="text-2xl font-bold leading-none"
          style={{ color: "#10B981", fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {entry.correct_picks}
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "1rem" }}>
            /{entry.total_settled}
          </span>
        </div>
        <div
          className="text-xs mt-0.5"
          style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}
        >
          Correct / Total
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// MAIN PICKEM COMPONENT
// ═══════════════════════════════════════════════════════════

export default function PickEm({ games, editionDate }: PickEmProps) {
  const [picks, setPicks] = useState<Record<string, string>>(() =>
    loadLocalPicks(editionDate)
  );
  const [submitState, setSubmitState] = useState<SubmitState>(() =>
    isLockedLocally(editionDate) ? "locked" : "idle"
  );
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [userId, setUserId] = useState<string | null>(null);
  const [authChecked, setAuthChecked] = useState(false);

  // Derive a stable gameId from the game object
  const getGameId = useCallback(
    (game: GamePreview): string => {
      if (game.gameId) return game.gameId;
      // Fallback: construct from teams + editionDate (strip dashes)
      const dateCompact = editionDate.replace(/-/g, "");
      return `${game.awayTeam}-${game.homeTeam}-${dateCompact}`;
    },
    [editionDate]
  );

  // Check auth on mount
  useEffect(() => {
    getCurrentUser()
      .then((u) => setUserId(u?.id ?? null))
      .finally(() => setAuthChecked(true));
  }, []);

  const handlePick = useCallback(
    (gameId: string, team: string) => {
      setPicks((prev) => {
        const next = { ...prev, [gameId]: team };
        saveLocalPicks(editionDate, next);
        return next;
      });
    },
    [editionDate]
  );

  const pickedCount = Object.keys(picks).length;
  const totalGames = games.length;

  const handleSubmit = async () => {
    if (pickedCount === 0) return;
    setSubmitState("loading");
    setErrorMsg("");

    const token = getStoredToken();
    const pickRows: UserPick[] = Object.entries(picks).map(([gameId, pickedTeam]) => ({
      gameId,
      pickedTeam,
    }));

    // If authenticated, persist to Supabase
    if (token && userId && SUPABASE_URL) {
      try {
        const rows = pickRows.map(({ gameId, pickedTeam }) => ({
          user_id: userId,
          edition_date: editionDate,
          game_id: gameId,
          picked_team: pickedTeam,
        }));

        // Upsert each pick (unique on user_id + edition_date + game_id)
        await picksDbFetch("picks", {
          method: "POST",
          body: rows,
          token,
          query: "on_conflict=user_id,edition_date,game_id",
        });
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Failed to save picks";
        setErrorMsg(msg);
        setSubmitState("error");
        return;
      }
    }

    // Always lock locally regardless of auth
    setLockedLocally(editionDate);
    setSubmitState("locked");
  };

  const isLocked = submitState === "locked";
  const isLoading = submitState === "loading";

  return (
    <div>
      {/* Auth Notice */}
      {authChecked && !userId && (
        <div
          className="rounded-lg px-4 py-3 mb-4 text-sm flex items-center gap-2"
          style={{
            background: "rgba(245,158,11,0.08)",
            border: "1px solid rgba(245,158,11,0.2)",
            color: "rgba(245,158,11,0.9)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <span>&#9888;</span>
          <span>
            Sign in to save your picks and appear on the leaderboard. Picks are saved locally for now.
          </span>
        </div>
      )}

      {/* Locked Banner */}
      {isLocked && (
        <div
          className="rounded-lg px-4 py-3 mb-4 flex items-center gap-3"
          style={{
            background: "rgba(16,185,129,0.08)",
            border: "1px solid rgba(16,185,129,0.25)",
          }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0"
            style={{ background: "rgba(16,185,129,0.15)", color: "#10B981" }}
          >
            &#10003;
          </div>
          <div>
            <div
              className="font-semibold text-sm"
              style={{ color: "#10B981", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.04em" }}
            >
              LOCKED IN — {pickedCount} of {totalGames} picks submitted
            </div>
            <div
              className="text-xs mt-0.5"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}
            >
              {userId
                ? "Your picks are saved. Accuracy updates after games conclude."
                : "Sign in to track your picks across the season."}
            </div>
          </div>
        </div>
      )}

      {/* Game Cards */}
      <div className="space-y-3 mb-5">
        {games.map((game) => {
          const gameId = getGameId(game);
          return (
            <GameCard
              key={gameId}
              game={game}
              gameId={gameId}
              pickedTeam={picks[gameId] ?? null}
              locked={isLocked}
              onPick={handlePick}
            />
          );
        })}
      </div>

      {/* Error */}
      {submitState === "error" && (
        <div
          className="rounded-lg px-4 py-3 mb-4 text-sm"
          style={{
            background: "rgba(244,63,94,0.08)",
            border: "1px solid rgba(244,63,94,0.2)",
            color: "rgba(244,63,94,0.9)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {errorMsg || "Failed to save picks. Please try again."}
        </div>
      )}

      {/* Submit Button */}
      {!isLocked && (
        <div className="flex items-center gap-3">
          <button
            onClick={handleSubmit}
            disabled={isLoading || pickedCount === 0}
            className="flex-1 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
            style={{
              background:
                pickedCount === 0
                  ? "rgba(255,255,255,0.06)"
                  : isLoading
                  ? "rgba(14,165,233,0.3)"
                  : "linear-gradient(135deg, #0EA5E9, #0284C7)",
              color:
                pickedCount === 0 ? "rgba(255,255,255,0.3)" : "#fff",
              cursor: pickedCount === 0 || isLoading ? "not-allowed" : "pointer",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.06em",
              fontSize: "0.95rem",
            }}
          >
            {isLoading
              ? "LOCKING IN..."
              : pickedCount === 0
              ? "SELECT YOUR PICKS"
              : `LOCK IN ${pickedCount} PICK${pickedCount > 1 ? "S" : ""}`}
          </button>
          {pickedCount > 0 && pickedCount < totalGames && (
            <div
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              {totalGames - pickedCount} remaining
            </div>
          )}
        </div>
      )}

      {/* Season Accuracy (post-lock, authenticated) */}
      {isLocked && userId && <AccuracyDisplay userId={userId} />}
    </div>
  );
}
