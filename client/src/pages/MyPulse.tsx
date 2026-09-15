import { useState, useMemo, type ReactNode } from "react";
import {
  pulseEdition,
  tickerItems,
  gameResults,
  pulseIndex,
  gamePreviews,
  fantasyAlerts,
  injuryUpdates,
} from "../lib/pulseData";
import { getPreferences, type UserPreferences } from "../lib/userPreferences";
import { personalizeEdition } from "../lib/personalizeEdition";
import { getTeamColor } from "../lib/teamColors";
import { slugify } from "../lib/searchUtils";
import { makeGameId } from "../lib/gameCenter";
import PreferencesSetup from "../components/PreferencesSetup";
import EditorialShell from "../components/EditorialShell";
import { EmptyState, EnhancedButton, InjuryChip, PageHero, SectionHeader } from "../components/enhanced/EnhancedUi";

// ═══════════════════════════════════════════════════════════
// MY PULSE PAGE
// ═══════════════════════════════════════════════════════════

export default function MyPulse() {
  const [prefs, setPrefs] = useState<UserPreferences>(() => getPreferences());
  const [showSetup, setShowSetup] = useState(false);

  const hasPrefs = prefs.favoriteTeams.length > 0 || prefs.favoritePlayers.length > 0;

  const personalized = useMemo(
    () =>
      personalizeEdition(
        { tickerItems, gameResults, pulseIndex, gamePreviews, fantasyAlerts, injuryUpdates },
        prefs
      ),
    [prefs]
  );

  // Filter data for "Your" sections
  const yourTeamPreviews = personalized.gamePreviews.filter(
    (p: any) => p.isPersonalized
  );
  const yourPlayerIndex = personalized.pulseIndex.filter(
    (p: any) => p.isPersonalized
  );
  const yourInjuries = personalized.injuryUpdates.filter(
    (p: any) => p.isPersonalized
  );
  const yourFantasy = personalized.fantasyAlerts.filter(
    (p: any) => p.isPersonalized
  );
  const yourGameResults = personalized.gameResults.filter(
    (p: any) => p.isPersonalized
  );

  const handleSave = (newPrefs: UserPreferences) => {
    setPrefs(newPrefs);
  };

  // If no preferences, show setup directly
  if (!hasPrefs && !showSetup) {
    return (
      <MyPulseShell onOpenSetup={() => setShowSetup(true)} prefs={prefs}>
        <EmptyState
          kicker="My Pulse"
          title="Set up My Pulse"
          body="Pick your favorite teams and players to get a personalized daily edition tailored just for you."
          pill="PERSONAL DESK"
          pillTone="accent"
        />
        <div className="flex justify-center">
          <EnhancedButton onClick={() => setShowSetup(true)}>Choose Favorites</EnhancedButton>
        </div>
        {showSetup && (
          <PreferencesSetup onClose={() => setShowSetup(false)} onSave={handleSave} />
        )}
      </MyPulseShell>
    );
  }

  return (
    <MyPulseShell onOpenSetup={() => setShowSetup(true)} prefs={prefs}>
      <PageHero
        kicker="Personalized edition"
        title="My Pulse"
        description={`${pulseEdition.edition} · ${pulseEdition.date}`}
      />

      {/* Your Teams Tonight */}
      {yourTeamPreviews.length > 0 && (
        <section className="desk-page-stack">
          <div>
            <SectionHeader eyebrow="Tonight" title="Your teams tonight" />
            <div className="space-y-3">
              {yourTeamPreviews.map((preview: any, i: number) => (
                <div
                  key={i}
                  className="enhanced-card p-4"
                  style={{ borderLeft: "3px solid var(--hi-accent,#1ec8f5)" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <a href={`/team/${preview.awayTeam.toLowerCase()}`} className="text-center">
                        <div className="section-label">{preview.awayTeam}</div>
                      </a>
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>@</div>
                      <a href={`/team/${preview.homeTeam.toLowerCase()}`} className="text-center">
                        <div className="section-label">{preview.homeTeam}</div>
                      </a>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-white">{preview.time}</div>
                      {preview.tv && (
                        <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{preview.tv}</div>
                      )}
                    </div>
                    <div className="text-right ml-4">
                      <div className="mono-data text-xs" style={{ color: "var(--hi-accent,#1ec8f5)" }}>{preview.spread}</div>
                      <div className="mono-data text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                        O/U {preview.overUnder}
                      </div>
                    </div>
                  </div>
                  {preview.storyline && (
                    <p className="text-xs mt-3 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {preview.storyline}
                    </p>
                  )}
                  <a
                    href={`/game/${preview.gameId || makeGameId(preview.awayTeam, preview.homeTeam, preview.time || pulseEdition.date)}`}
                    className="mt-3 inline-flex min-h-[44px] items-center text-xs font-semibold text-sky-300 hover:text-sky-200"
                  >
                    Open personalized Game Center →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Your Players */}
      {yourPlayerIndex.length > 0 && (
        <section className="pt-6">
          <div>
            <SectionHeader eyebrow="Pulse Index" title="Your players" />
            <div className="space-y-2">
              {yourPlayerIndex.map((player: any) => (
                <div key={player.rank} className="enhanced-card p-4 flex items-center gap-4" style={{ borderLeft: "3px solid var(--hi-accent,#1ec8f5)" }}>
                  <div className="mono-data text-2xl font-bold w-8 text-center" style={{ color: "var(--hi-accent,#1ec8f5)" }}>
                    {player.rank}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <a
                        href={`/player/${slugify(player.player)}`}
                        className="text-sm font-semibold text-white hover:text-sky-400 transition-colors"
                      >
                        {player.player}
                      </a>
                      <a
                        href={`/team/${player.team.toLowerCase()}`}
                        className="text-xs px-1.5 py-0.5 rounded hover:bg-white/10 transition-colors"
                        style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}
                      >
                        {player.team}
                      </a>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--hi-accent,#1ec8f5)" className="flex-shrink-0">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <div className="mono-data text-xs mb-1" style={{ color: "#10B981" }}>
                      {player.keyStats}
                    </div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {player.note}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="mono-data text-lg font-bold" style={{ color: "var(--hi-accent,#1ec8f5)" }}>
                      {player.indexScore}
                    </div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {player.teamRecord}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Your Game Results */}
      {yourGameResults.length > 0 && (
        <section className="pt-6">
          <div>
            <SectionHeader eyebrow="Last night" title="Your teams' results" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {yourGameResults.map((game: any) => {
                const homeWin = game.homeScore > game.awayScore;
                const awayWin = game.awayScore > game.homeScore;
                return (
                  <div
                    key={game.gameId}
                    className="enhanced-card p-4"
                    style={{ borderLeft: `3px solid ${getTeamColor(homeWin ? game.homeTeam : game.awayTeam)}` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <a href={`/team/${game.awayTeam.toLowerCase()}`} className="text-center w-12">
                        <div className="section-label mb-0.5" style={{ color: awayWin ? "var(--hi-accent,#1ec8f5)" : "rgba(255,255,255,0.4)" }}>{game.awayTeam}</div>
                        <div className="mono-data font-bold text-2xl" style={{ color: awayWin ? "#ffffff" : "rgba(255,255,255,0.5)" }}>{game.awayScore}</div>
                      </a>
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>@</div>
                      <a href={`/team/${game.homeTeam.toLowerCase()}`} className="text-center w-12">
                        <div className="section-label mb-0.5" style={{ color: homeWin ? "var(--hi-accent,#1ec8f5)" : "rgba(255,255,255,0.4)" }}>{game.homeTeam}</div>
                        <div className="mono-data font-bold text-2xl" style={{ color: homeWin ? "#ffffff" : "rgba(255,255,255,0.5)" }}>{game.homeScore}</div>
                      </a>
                      <div className="text-xs font-medium px-2 py-0.5 rounded ml-auto" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}>FINAL</div>
                    </div>
                    <div className="flex items-center gap-2 py-2 px-3 rounded" style={{ background: "rgba(255,255,255,0.04)" }}>
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--hi-accent,#1ec8f5)" }} />
                      <a href={`/player/${slugify(game.topPerformer)}`} className="text-xs font-semibold text-white hover:text-sky-400 transition-colors">
                        {game.topPerformer}
                      </a>
                      <span className="text-xs mono-data" style={{ color: "#10B981" }}>{game.topLine}</span>
                    </div>
                    <a
                      href={`/game/${game.gameId || makeGameId(game.awayTeam, game.homeTeam, pulseEdition.date)}`}
                      className="mt-3 inline-flex min-h-[44px] items-center text-xs font-semibold text-sky-300 hover:text-sky-200"
                    >
                      Open personalized Game Center →
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Personalized Injury Updates */}
      {yourInjuries.length > 0 && (
        <section className="pt-6">
          <div>
            <SectionHeader eyebrow="Injury wire" title="Your injury watch" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {yourInjuries.map((injury: any, i: number) => {
                return (
                  <div key={i} className="enhanced-card p-4" style={{ borderLeft: "3px solid var(--hi-accent,#1ec8f5)" }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <a href={`/player/${slugify(injury.player)}`} className="text-sm font-semibold text-white hover:text-sky-400 transition-colors">
                          {injury.player}
                        </a>
                        <a href={`/team/${injury.team.toLowerCase()}`} className="text-xs px-1.5 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}>
                          {injury.team}
                        </a>
                      </div>
                      <InjuryChip status={injury.status} />
                    </div>
                    <div className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>{injury.injury}</div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{injury.timeline}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Personalized Fantasy Alerts */}
      {yourFantasy.length > 0 && (
        <section className="pt-6">
          <div>
            <SectionHeader eyebrow="Fantasy" title="Your fantasy alerts" />
            <div className="space-y-2">
              {yourFantasy.map((alert: any, i: number) => {
                const actionColors: Record<string, { color: string; bg: string }> = {
                  add: { color: "#10B981", bg: "rgba(16,185,129,0.1)" },
                  drop: { color: "#F43F5E", bg: "rgba(244,63,94,0.1)" },
                  hold: { color: "#F59E0B", bg: "rgba(245,158,11,0.1)" },
                  stream: { color: "var(--hi-accent,#1ec8f5)", bg: "rgba(14,165,233,0.1)" },
                };
                const ac = actionColors[alert.action] || actionColors.hold;
                return (
                  <div key={i} className="enhanced-card p-3" style={{ borderLeft: "3px solid var(--hi-accent,#1ec8f5)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded uppercase" style={{ background: ac.bg, color: ac.color }}>{alert.action}</span>
                      <a href={`/player/${slugify(alert.player)}`} className="text-sm font-semibold text-white hover:text-sky-400 transition-colors">{alert.player}</a>
                      <a href={`/team/${alert.team.toLowerCase()}`} className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{alert.team}</a>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{alert.reason}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Personalized Feed (all ticker items) */}
      <section className="pt-6">
        <div>
          <SectionHeader eyebrow="Personalized feed" title="All updates" />
          <div className="space-y-2">
            {personalized.tickerItems.map((item: any, i: number) => {
              const dotColors: Record<string, string> = {
                score: "bg-slate-400",
                injury: "bg-amber-400",
                news: "bg-sky-400",
                alert: "bg-emerald-400",
              };
              return (
                <div
                  key={i}
                  className="enhanced-card px-4 py-3 flex items-start gap-3"
                  style={
                    item.isPersonalized
                      ? { borderLeft: "3px solid var(--hi-accent,#1ec8f5)" }
                      : {}
                  }
                >
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 mt-1.5 ${dotColors[item.type] || "bg-slate-400"}`} />
                  <div className="flex-1">
                    <div className="text-sm leading-relaxed" style={{ color: item.isPersonalized ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.6)" }}>
                      {item.text}
                    </div>
                  </div>
                  {item.isPersonalized && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--hi-accent,#1ec8f5)" className="flex-shrink-0 mt-1">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="pt-4">
        <EnhancedButton href="/" variant="ghost">
          View full edition
        </EnhancedButton>
      </div>

      {showSetup && (
        <PreferencesSetup onClose={() => setShowSetup(false)} onSave={handleSave} />
      )}
    </MyPulseShell>
  );
}

// ═══════════════════════════════════════════════════════════
// HEADER
// ═══════════════════════════════════════════════════════════

function MyPulseShell({
  onOpenSetup,
  prefs,
  children,
}: {
  onOpenSetup: () => void;
  prefs: UserPreferences;
  children: ReactNode;
}) {
  return (
    <EditorialShell
      mainClassName="desk-page-stack"
      header={{
        brandTitle: "MY PULSE",
        subtitle: "PERSONALIZED EDITION",
        editionBadge: pulseEdition.date,
        toolbarExtra: (
          <>
            {prefs.favoriteTeams.length > 0 ? (
              <div className="hidden lg:flex items-center gap-1.5 overflow-x-auto max-w-[min(52vw,18rem)] shrink">
                {prefs.favoriteTeams.map((team) => (
                  <a
                    key={team}
                    href={`/team/${team.toLowerCase()}`}
                    className="px-2 py-1 rounded text-xs font-bold tracking-wider whitespace-nowrap transition-colors hover:bg-sky-500/25"
                    style={{
                      background: "rgba(30,200,245,0.15)",
                      color: "var(--hi-accent,#1ec8f5)",
                      border: "1px solid rgba(30,200,245,0.3)",
                    }}
                  >
                    {team}
                  </a>
                ))}
              </div>
            ) : null}
            <button
              type="button"
              onClick={onOpenSetup}
              className="flex items-center gap-1 min-h-[44px] lg:min-h-0 px-2 sm:px-3 py-2 rounded-[10px] text-xs font-medium transition-colors hover:bg-white/10"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.6)",
                border: "1px solid var(--hi-border,#252b36)",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              <span className="hidden sm:inline">Edit preferences</span>
            </button>
          </>
        ),
      }}
    >
      {children}
    </EditorialShell>
  );
}
