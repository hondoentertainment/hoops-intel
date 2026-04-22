import { useEffect, useMemo, useState } from "react";

interface BriefingPrefs {
  focus: "balanced" | "fantasy" | "betting" | "film";
  suppressRumors: boolean;
  clutchAlerts: boolean;
}

const PREFS_KEY = "hoops-intel-for-you-prefs";

function readPrefs(): BriefingPrefs {
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    if (!raw) {
      return { focus: "balanced", suppressRumors: false, clutchAlerts: true };
    }
    const parsed = JSON.parse(raw) as Partial<BriefingPrefs>;
    return {
      focus: parsed.focus ?? "balanced",
      suppressRumors: Boolean(parsed.suppressRumors),
      clutchAlerts: parsed.clutchAlerts !== false,
    };
  } catch {
    return { focus: "balanced", suppressRumors: false, clutchAlerts: true };
  }
}

function focusPill(
  id: BriefingPrefs["focus"],
  current: BriefingPrefs["focus"],
  label: string,
  onClick: () => void,
) {
  const active = id === current;
  return (
    <button
      key={id}
      onClick={onClick}
      className="px-2.5 py-1 rounded text-xs font-semibold transition-colors"
      style={{
        background: active ? "rgba(14,165,233,0.15)" : "rgba(255,255,255,0.04)",
        border: `1px solid ${active ? "rgba(14,165,233,0.35)" : "rgba(255,255,255,0.08)"}`,
        color: active ? "#0EA5E9" : "rgba(255,255,255,0.45)",
      }}
    >
      {label}
    </button>
  );
}

export default function ForYouBriefing({
  favoriteTeams,
  favoritePlayers,
  pulseIndex,
  gamePreviews,
  injuryUpdates,
  fantasyAlerts,
  onPrefsChange,
}: {
  favoriteTeams: string[];
  favoritePlayers: string[];
  pulseIndex: Array<{ player: string; team: string; trend: string; keyStats: string }>;
  gamePreviews: Array<{ homeTeam: string; awayTeam: string; time: string; tv: string; prediction: string; spread: string; featured?: boolean }>;
  injuryUpdates: Array<{ player: string; team: string; status: string; timeline: string }>;
  fantasyAlerts: Array<{ player: string; team: string; action: string; reason: string }>;
  onPrefsChange: (prefs: BriefingPrefs) => void;
}) {
  const [prefs, setPrefs] = useState<BriefingPrefs>(() => readPrefs());

  useEffect(() => {
    localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
    onPrefsChange(prefs);
  }, [prefs, onPrefsChange]);

  const preferredGames = useMemo(() => {
    const favSet = new Set(favoriteTeams.map((t) => t.toUpperCase()));
    const direct = gamePreviews.filter((g) => favSet.has(g.homeTeam.toUpperCase()) || favSet.has(g.awayTeam.toUpperCase()));
    return (direct.length > 0 ? direct : gamePreviews.filter((g) => g.featured)).slice(0, 2);
  }, [gamePreviews, favoriteTeams]);

  const playerWatch = useMemo(() => {
    const favPlayersSet = new Set(favoritePlayers.map((p) => p.toLowerCase()));
    const fromPulse = pulseIndex.filter((p) => favPlayersSet.has(p.player.toLowerCase()));
    return fromPulse.slice(0, 3);
  }, [favoritePlayers, pulseIndex]);

  const highImpactInjuries = useMemo(() => {
    const favSet = new Set(favoriteTeams.map((t) => t.toUpperCase()));
    return injuryUpdates
      .filter((i) => favSet.has(i.team.toUpperCase()) || favoritePlayers.some((p) => p.toLowerCase() === i.player.toLowerCase()))
      .slice(0, 2);
  }, [favoriteTeams, favoritePlayers, injuryUpdates]);

  const featuredFantasy = useMemo(() => {
    if (prefs.focus === "fantasy") return fantasyAlerts.slice(0, 3);
    return fantasyAlerts.filter((a) => a.action === "add" || a.action === "stream").slice(0, 2);
  }, [fantasyAlerts, prefs.focus]);

  const briefingBullets = useMemo(() => {
    const bullets: string[] = [];
    if (preferredGames.length > 0) {
      const g = preferredGames[0];
      bullets.push(`Priority game: ${g.awayTeam} @ ${g.homeTeam} (${g.time}, ${g.tv}).`);
    }
    if (playerWatch.length > 0) {
      bullets.push(`Player watch: ${playerWatch[0].player} (${playerWatch[0].trend}) — ${playerWatch[0].keyStats}.`);
    }
    if (prefs.focus === "betting" && preferredGames[0]?.spread && preferredGames[0].spread !== "—") {
      bullets.push(`Market lean: monitor ${preferredGames[0].awayTeam} @ ${preferredGames[0].homeTeam} spread (${preferredGames[0].spread}).`);
    }
    if (prefs.focus === "fantasy" && featuredFantasy.length > 0) {
      bullets.push(`Fantasy move: ${featuredFantasy[0].action.toUpperCase()} ${featuredFantasy[0].player} (${featuredFantasy[0].team}).`);
    }
    if (highImpactInjuries.length > 0) {
      bullets.push(`Injury impact: ${highImpactInjuries[0].player} (${highImpactInjuries[0].status}).`);
    }
    return bullets.slice(0, 4);
  }, [preferredGames, playerWatch, prefs.focus, featuredFantasy, highImpactInjuries]);

  return (
    <section className="py-8 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="container">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div>
            <div className="section-label mb-1">PERSONALIZED</div>
            <h2 className="display-heading text-white text-2xl">For You Briefing</h2>
          </div>
          <div className="flex items-center gap-2">
            {focusPill("balanced", prefs.focus, "Balanced", () => setPrefs((p) => ({ ...p, focus: "balanced" })))}
            {focusPill("fantasy", prefs.focus, "Fantasy", () => setPrefs((p) => ({ ...p, focus: "fantasy" })))}
            {focusPill("betting", prefs.focus, "Betting", () => setPrefs((p) => ({ ...p, focus: "betting" })))}
            {focusPill("film", prefs.focus, "Film", () => setPrefs((p) => ({ ...p, focus: "film" })))}
          </div>
        </div>

        <div className="glass-card rounded-lg p-4 mb-4">
          <div className="section-label mb-2">TODAY'S BRIEF</div>
          <div className="space-y-2">
            {briefingBullets.length === 0 ? (
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                Add favorite teams or players to unlock fully personalized briefings.
              </p>
            ) : (
              briefingBullets.map((b, i) => (
                <p key={`${b}-${i}`} className="text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
                  • {b}
                </p>
              ))
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div className="glass-card rounded-lg p-3">
            <div className="section-label mb-2">PRIORITY GAMES</div>
            <div className="space-y-2">
              {preferredGames.length === 0 ? (
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>No game priorities yet.</p>
              ) : (
                preferredGames.map((g) => (
                  <div key={`${g.awayTeam}-${g.homeTeam}`} className="text-xs rounded p-2" style={{ background: "rgba(255,255,255,0.03)" }}>
                    <div className="font-semibold text-white mb-1">{g.awayTeam} @ {g.homeTeam}</div>
                    <div style={{ color: "rgba(255,255,255,0.45)" }}>{g.time} · {g.tv}</div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="glass-card rounded-lg p-3">
            <div className="section-label mb-2">PLAYER WATCHLIST</div>
            <div className="space-y-2">
              {playerWatch.length === 0 ? (
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>No favorite players tracked yet.</p>
              ) : (
                playerWatch.map((p) => (
                  <div key={p.player} className="text-xs rounded p-2" style={{ background: "rgba(255,255,255,0.03)" }}>
                    <div className="font-semibold text-white mb-1">{p.player} · {p.team}</div>
                    <div style={{ color: "rgba(255,255,255,0.45)" }}>{p.keyStats}</div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="glass-card rounded-lg p-3">
            <div className="section-label mb-2">SETTINGS</div>
            <div className="space-y-2 text-xs">
              <label className="flex items-center justify-between p-2 rounded" style={{ background: "rgba(255,255,255,0.03)" }}>
                <span style={{ color: "rgba(255,255,255,0.65)" }}>Clutch alerts</span>
                <input
                  type="checkbox"
                  checked={prefs.clutchAlerts}
                  onChange={(e) => setPrefs((p) => ({ ...p, clutchAlerts: e.target.checked }))}
                />
              </label>
              <label className="flex items-center justify-between p-2 rounded" style={{ background: "rgba(255,255,255,0.03)" }}>
                <span style={{ color: "rgba(255,255,255,0.65)" }}>Suppress rumor-heavy items</span>
                <input
                  type="checkbox"
                  checked={prefs.suppressRumors}
                  onChange={(e) => setPrefs((p) => ({ ...p, suppressRumors: e.target.checked }))}
                />
              </label>
            </div>
            {featuredFantasy.length > 0 && (
              <div className="mt-3">
                <div className="section-label mb-1">TOP FANTASY FLAG</div>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {featuredFantasy[0].action.toUpperCase()} {featuredFantasy[0].player} — {featuredFantasy[0].reason}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
