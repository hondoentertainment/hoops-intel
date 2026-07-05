import { useState, useEffect, useRef, type ReactNode } from "react";
import {
  pulseEdition,
  narrative,
  tickerItems,
  gameResults,
  pulseIndex,
  statLeaders,
  mediaReactions,
  injuryUpdates,
  gamePreviews,
  rookieWatch,
  fantasyAlerts,
  eastStandings,
  westStandings,
} from "../lib/pulseData";
import { playoffTickerWireItems } from "../lib/playoffTickerDerived";
import { getTeamColor } from "../lib/teamColors";
import TeamLogo from "../components/TeamLogo";
import PlayerAvatar from "../components/PlayerAvatar";
import { useLiveScores } from "../lib/useLiveScores";
import type { LiveGame } from "../lib/espnApi";
import { slugify } from "../lib/searchUtils";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";
import { useFocusTrap } from "../hooks/useFocusTrap";
import { subscribeDigestEmail, readDigestSignupHint } from "../lib/subscribeDigest";
import BoxScoreCard from "../components/BoxScoreCard";
import ReactionBar from "../components/ReactionBar";
import SiteHeader from "../components/SiteHeader";
import DeskSectionNav from "../components/DeskSectionNav";
import MyPulseBanner from "../components/MyPulseBanner";
import PreferencesSetup from "../components/PreferencesSetup";
import { LiveScoreSkeleton } from "../components/PageSkeletons";
import { useToast } from "../contexts/ToastContext";
import RivalTonightBanner from "../components/RivalTonightBanner";
import ShareButton from "../components/ShareButton";
import { getFavorites } from "../lib/supabaseClient";
import { hasPreferences, getPreferences } from "../lib/userPreferences";
import {
  playoffSeries,
  playoffMovers,
  isPlayoffsActive,
  isFinalsActive,
  finalistTeams,
  resolveSeriesIntel,
  playoffSeriesForMatchup,
  type PlayoffSeries,
} from "../lib/playoffData";
import {
  nextPendingGame,
  nextPlayoffGameAcross,
  playoffSnapshot,
  scoringEdgeForSeries,
  todayISOLocal,
} from "../lib/playoffAnalytics";
import { makeGameId, topDeskGames, gameCenterTrustSignals } from "../lib/gameCenter";
import DataTrustBadge from "../components/DataTrustBadge";
import SixtySecondBriefing from "../components/SixtySecondBriefing";
import SectionErrorBoundary from "../components/SectionErrorBoundary";
import { AskPromptChips } from "../components/AskHoopsIntel";
import { dispatchAskPrompt } from "../lib/askShortcuts";
import { rationaleToBullets } from "../lib/pulseRationale";
import PickEmHomeBanner from "../components/PickEmHomeBanner";
import OffseasonDeskStrip from "../components/OffseasonDeskStrip";
import { isOffseasonDesk, offseasonPrimaryCta, activeEditionContext, editionContextDeskLabel } from "../lib/deskMode";
import { liveScoresTrustLabel } from "../lib/dataTrust";
import { lineMovementForMatchup, spreadMoved } from "../lib/lineMovement";
import { formatLineMovementBadge } from "../lib/spreadMovement";

function shortenPulsePreview(text: string, max = 110) {
  const t = text.trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max).trim()}…`;
}

function footerEmailOk(raw: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw.trim());
}

// ═══════════════════════════════════════════════════════════
// LIVE SCOREBAR — Real-time ESPN scores
// ═══════════════════════════════════════════════════════════

function fmtLiveScore(value: number | null) {
  return value != null && Number.isFinite(value) ? value : "—";
}

function ScoreboardTeamRow({ team, score, leading, dim }: { team: string; score: number | null; leading: boolean; dim: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span
        className="flex items-center gap-1.5 section-label text-xs"
        style={{ color: dim ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.75)" }}
      >
        <TeamLogo team={team} size={18} />
        {team}
      </span>
      <span
        className="mono-data text-sm font-bold tabular-nums"
        style={{ color: leading ? "#0EA5E9" : dim ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.8)" }}
      >
        {fmtLiveScore(score)}
      </span>
    </div>
  );
}

function ScoreboardCell({ g }: { g: LiveGame }) {
  const live = g.status === "in";
  const final = g.status === "post";
  const pre = g.status === "pre";
  const comparable = g.homeScore != null && g.awayScore != null;
  const awayLead = comparable && (g.awayScore as number) > (g.homeScore as number);
  const homeLead = comparable && (g.homeScore as number) > (g.awayScore as number);

  return (
    <div
      className="flex flex-col gap-1 px-3 py-1.5 rounded-md flex-shrink-0 min-w-[148px]"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <ScoreboardTeamRow team={g.awayTeam} score={g.awayScore} leading={awayLead} dim={final && !awayLead} />
      <ScoreboardTeamRow team={g.homeTeam} score={g.homeScore} leading={homeLead} dim={final && !homeLead} />
      <div className="flex items-center gap-1.5 pt-0.5" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        {live && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" aria-hidden />}
        <span
          className="mono-data text-[10px] font-semibold tracking-wide"
          style={{ color: live ? "#10B981" : pre ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.55)" }}
        >
          {final ? "FINAL" : g.statusDetail || (pre ? "Scheduled" : "")}
        </span>
        {pre && g.tv && g.tv !== "Local" ? (
          <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>· {g.tv}</span>
        ) : null}
      </div>
    </div>
  );
}

function LiveScorebar() {
  const { data, error, refresh, loading } = useLiveScores();
  const games = data?.games ?? [];
  const anyLive = games.some((g) => g.status === "in");

  if (loading && !data) {
    return <LiveScoreSkeleton />;
  }

  if (games.length > 0) {
    return (
      <div
        className="border-b overflow-hidden"
        style={{
          borderColor: anyLive ? "rgba(16,185,129,0.3)" : "rgba(14,165,233,0.2)",
          background: anyLive ? "rgba(16,185,129,0.05)" : "rgba(14,165,233,0.04)",
        }}
        aria-label="Today's NBA scoreboard"
      >
        <div className="container">
          <div className="flex items-center gap-3 py-2 overflow-x-auto">
            <div className="flex items-center gap-2 flex-shrink-0">
              {anyLive && <span className="w-2 h-2 rounded-full bg-emerald-400 motion-safe:animate-pulse" aria-hidden />}
              <span className={`section-label text-xs ${anyLive ? "text-emerald-400" : ""}`} style={anyLive ? undefined : { color: "#0EA5E9" }}>
                {anyLive ? "LIVE" : "TODAY"}
              </span>
              {data?.fetchedAt ? (
                <span className="text-[10px] mono-data hidden sm:inline" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {liveScoresTrustLabel(data.fetchedAt)}
                </span>
              ) : null}
            </div>
            {games.map((g) => (
              <ScoreboardCell key={g.id} g={g} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="border-b overflow-hidden"
        style={{ borderColor: "rgba(244,63,94,0.35)", background: "rgba(244,63,94,0.06)" }}
        role="status"
      >
        <div className="container flex flex-wrap items-center gap-3 py-2">
          <span className="text-xs text-rose-300">
            {/(network|fetch|failed)/i.test(error) ? "Live scores unreachable." : error}
          </span>
          <button
            type="button"
            onClick={() => void refresh()}
            className="text-xs font-semibold px-3 py-1.5 rounded-md min-h-[44px] sm:min-h-0"
            style={{ background: "rgba(14,165,233,0.2)", color: "#7dd3fc" }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return null;
}

// ═══════════════════════════════════════════════════════════
// TICKER BAR
// ═══════════════════════════════════════════════════════════

function TickerBar() {
  const [paused, setPaused] = useState(false);
  const derived = playoffTickerWireItems();
  const strip = derived.length ? [...derived, ...tickerItems] : tickerItems;
  const items = [...strip, ...strip];
  const textColors: Record<string, string> = {
    score: "text-slate-300", injury: "text-amber-400",
    news: "text-sky-400", alert: "text-emerald-400",
  };
  const dotColors: Record<string, string> = {
    score: "bg-slate-400", injury: "bg-amber-400",
    news: "bg-sky-400", alert: "bg-emerald-400",
  };

  const stripLabel = strip.map((i) => i.text).join(" · ");

  return (
    <div
      className="relative overflow-hidden border-b"
      style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.4)" }}
      aria-labelledby="desk-ticker-wire-label"
    >
      <div id="desk-ticker-wire-label" className="sr-only">
        Edition intel wire — editorial headlines and synced playoff notes ({strip.length}{" "}
        items): {stripLabel}
      </div>
      <div className="flex items-center">
        <div
          className="flex-shrink-0 px-3 py-1.5 z-10 flex items-center gap-1.5"
          style={{ background: "#0EA5E9", minWidth: 60 }}
          aria-hidden
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white motion-safe:animate-pulse" />
          <span className="section-label text-white text-xs font-bold tracking-widest">WIRE</span>
        </div>
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 text-[10px] px-2 py-1 rounded min-h-[32px] sm:min-h-0"
          style={{ background: "rgba(0,0,0,0.45)", color: "rgba(255,255,255,0.7)" }}
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={paused ? "Resume ticker" : "Pause ticker"}
        >
          {paused ? "▶" : "❚❚"}
        </button>
        <div className="flex-1 overflow-hidden" aria-hidden>
          <div className={`ticker-track${paused ? " ticker-track--paused" : ""}`}>
            {items.map((item, i) => (
              <span key={i} className="flex items-center gap-2 px-6 py-2.5 whitespace-nowrap">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotColors[item.type]}`} />
                <span className={`text-xs font-medium ${textColors[item.type]}`}>{item.text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// HERO SECTION
// ═══════════════════════════════════════════════════════════

function PlayoffHeroCta() {
  const finalsOn = isFinalsActive();
  const snap = playoffSnapshot(playoffSeries, todayISOLocal());
  const activeCount = playoffSeries.filter((s) => s.status !== "complete").length;
  const next = nextPlayoffGameAcross(playoffSeries);
  const nextLabel = next
    ? next.game.status === "live"
      ? `Live: ${next.game.awayTeam} @ ${next.game.homeTeam}`
      : `Next: ${next.game.time ?? next.game.date}${next.game.tv ? ` · ${next.game.tv}` : ""}`
    : snap.nextMilestone;

  return (
    <a
      href="/playoffs"
      className="min-h-[48px] inline-flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-3 px-5 py-2.5 rounded text-sm font-semibold text-white transition-all hover:opacity-95"
      style={{
        background: finalsOn
          ? "linear-gradient(135deg, #F43F5E, #BE123C)"
          : "linear-gradient(135deg, #F59E0B, #D97706)",
      }}
    >
      <span>{finalsOn ? "🏆 NBA Finals desk" : `🏆 Playoffs live · ${activeCount} active series`}</span>
      <span className="text-xs font-medium opacity-90 mono-data">{nextLabel}</span>
    </a>
  );
}

function HeroLeadStory() {
  const featured = gamePreviews.find((g) => g.featured) ?? gamePreviews[0];
  if (!featured) return null;
  return (
    <a
      href="#tonight"
      className="group inline-flex flex-wrap items-center gap-x-3 gap-y-2 mb-6 rounded-xl px-4 py-3 backdrop-blur transition-colors"
      style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.12)" }}
    >
      <span className="section-label text-[10px]" style={{ color: "#0EA5E9" }}>
        Tonight’s Marquee
      </span>
      <span className="flex items-center gap-1.5 text-sm font-bold text-white">
        <TeamLogo team={featured.awayTeam} size={26} />
        {featured.awayTeam}
      </span>
      <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>@</span>
      <span className="flex items-center gap-1.5 text-sm font-bold text-white">
        <TeamLogo team={featured.homeTeam} size={26} />
        {featured.homeTeam}
      </span>
      <span className="mono-data text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
        {featured.time}
        {featured.tv ? ` · ${featured.tv}` : ""}
      </span>
      <span className="text-xs font-semibold text-sky-300 group-hover:text-sky-200">
        Preview →
      </span>
    </a>
  );
}

function HeroSection({ showMyPulse }: { showMyPulse: boolean }) {
  const playoffsOn = isPlayoffsActive();
  const finalsOn = isFinalsActive();

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: finalsOn
          ? `linear-gradient(to bottom, rgba(190,18,60,0.35) 0%, rgba(5,13,26,0.88) 65%, var(--hi-bg-page) 100%), url('/assets/hero-bg.webp') center/cover no-repeat`
          : `linear-gradient(to bottom, rgba(5,13,26,0.3) 0%, rgba(5,13,26,0.85) 70%, var(--hi-bg-page) 100%), url('/assets/hero-bg.webp') center/cover no-repeat`,
        minHeight: 380,
      }}
    >
      <div className="container py-12 md:py-16">
        <div className="max-w-4xl animate-fade-up">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <div className="section-label">{finalsOn ? "NBA Finals Desk" : pulseEdition.edition}</div>
            <DataTrustBadge variant="edition" />
          </div>
          <h1 className="display-heading text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            {narrative.headline}
          </h1>
          <p className="text-base mb-4 max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            {finalsOn
              ? `${narrative.subhead} Follow the championship series on the Finals desk — live scores, series intel, and Pulse scoped to the last two teams standing.`
              : narrative.subhead}
          </p>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-semibold tracking-wide" style={{ color: "rgba(255,255,255,0.35)" }}>BY</span>
            <span className="text-xs font-semibold tracking-wide" style={{ color: "rgba(255,255,255,0.6)" }}>WILL HENDERSON</span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Hoops Intel</span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
            <a href="/pulse-methodology" className="text-xs text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
              How Pulse works
            </a>
          </div>
          <HeroLeadStory />
          <div className="flex flex-wrap gap-3 items-center">
            {showMyPulse ? (
              <a
                href="/my-pulse"
                className="min-h-[48px] inline-flex items-center px-5 py-2.5 rounded text-sm font-semibold text-white transition-all"
                style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}
              >
                Your desk →
              </a>
            ) : null}
            {playoffsOn ? (
              <PlayoffHeroCta />
            ) : (
              <a
                href="/playoffs"
                className="min-h-[48px] inline-flex items-center px-5 py-2.5 rounded text-sm font-semibold text-white transition-all hover:opacity-95"
                style={{ background: "linear-gradient(135deg, #F59E0B, #D97706)" }}
              >
                🏆 Playoff bracket
              </a>
            )}
            {finalsOn ? (
              <a
                href="/print-edition"
                className="min-h-[48px] inline-flex items-center px-5 py-2.5 rounded text-sm font-semibold transition-all"
                style={{ background: "rgba(244,63,94,0.15)", color: "#FDA4AF", border: "1px solid rgba(244,63,94,0.35)" }}
              >
                Finals print edition
              </a>
            ) : null}
            <a
              href="#scores"
              className="min-h-[48px] inline-flex items-center px-5 py-2.5 rounded text-sm font-semibold text-white transition-all"
              style={{ background: "#0EA5E9" }}
            >
              Today’s scores
            </a>
            <a
              href="#tonight"
              className="min-h-[48px] inline-flex items-center px-5 py-2.5 rounded text-sm font-semibold transition-all"
              style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              Tonight’s games
            </a>
          </div>
          <details className="mt-4 max-w-xl rounded-lg border border-white/10 bg-black/25 open:bg-black/35 px-4 py-2">
            <summary className="text-xs cursor-pointer select-none outline-none hover:text-sky-400 [&::-webkit-details-marker]:hidden [&::marker]:content-none flex items-center gap-2 justify-between py-2" style={{ color: "rgba(255,255,255,0.45)" }}>
              <span className="font-semibold uppercase tracking-wider section-label text-[10px]" style={{ color: "rgba(255,255,255,0.55)" }}>
                More actions
              </span>
              <span className="mono-data text-[10px]">▼</span>
            </summary>
            <div className="flex flex-wrap gap-3 items-center pb-3 pt-1 border-t border-white/10">
              <ShareButton
                url="https://hoopsintel.net"
                tweetText={`Today's Hoops Intel is live | ${pulseEdition.subtitle} hoopsintel.net`}
                size="md"
              />
              <a
                href="/my-pulse"
                className="min-h-[48px] inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-semibold transition-all hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, rgba(14,165,233,0.2), rgba(14,165,233,0.08))",
                  color: "#0EA5E9",
                  border: "1px solid rgba(14,165,233,0.3)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                My Pulse
              </a>
              <a href="/tools" className="text-xs font-medium underline-offset-4 hover:text-sky-400" style={{ color: "rgba(255,255,255,0.5)" }}>
                All tools →
              </a>
            </div>
          </details>
          {/* Personalization banner */}
          {showMyPulse && (
            <a
              href="/my-pulse"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg text-xs font-medium transition-all hover:opacity-90"
              style={{
                background: "rgba(14,165,233,0.1)",
                color: "#0EA5E9",
                border: "1px solid rgba(14,165,233,0.2)",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Personalized edition available
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px pulse-line" style={{ background: "linear-gradient(to right, transparent, #0EA5E9, transparent)" }} />
    </section>
  );
}

function TodayDeskSection() {
  const deskGames = topDeskGames(3);
  const trust = gameCenterTrustSignals();
  const urgentItems = [...playoffTickerWireItems(), ...tickerItems].slice(0, 4);

  return (
    <section id="today-desk" className="py-8 border-t border-white/[0.06]" aria-labelledby="today-desk-title">
      <div className="container">
        <div className="mb-5 space-y-4">
          <SectionErrorBoundary section="60-second read">
            <SixtySecondBriefing />
          </SectionErrorBoundary>
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
            <div className="section-label mb-2">ASK HOOPS INTEL</div>
            <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.45)" }}>
              Tap a shortcut — opens the AI assistant with today&apos;s edition context
            </p>
            <AskPromptChips onSelect={dispatchAskPrompt} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.9fr] gap-5">
          <div className="glass-card rounded-xl p-5">
            <div className="section-label mb-2">MORNING BRIEFING</div>
            <h2 id="today-desk-title" className="display-heading text-white text-2xl mb-3">{narrative.headline}</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.68)" }}>{narrative.subhead}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {deskGames.map((game) => (
                <a key={game.gameId} href={`/game/${game.gameId}`} className="rounded-lg p-3 bg-white/[0.04] hover:bg-white/[0.07] transition-colors">
                  <div className="section-label mb-1">{game.status} · {game.source.replace(/-/g, " ")}</div>
                  <div className="text-sm font-semibold text-white">{game.away.abbr} at {game.home.abbr}</div>
                  <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{shortenPulsePreview(game.subtitle || game.whyItMatters, 86)}</div>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="glass-card rounded-xl p-4">
              <div className="section-label mb-3">WHAT CHANGED</div>
              <div className="space-y-2">
                {urgentItems.map((item, i) => (
                  <div key={`${item.text}-${i}`} className="text-xs rounded p-2 bg-white/[0.035]" style={{ color: "rgba(255,255,255,0.65)" }}>
                    <span className="font-semibold text-sky-300 uppercase">{item.type}</span> · {item.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card rounded-xl p-4">
              <div className="section-label mb-3">HOW THIS EDITION WAS BUILT</div>
              <div className="grid grid-cols-1 gap-2">
                {trust.map((signal) => (
                  <div key={signal.label} className="flex justify-between gap-3 text-xs">
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>{signal.label}</span>
                    <span className="text-right text-white/75">{signal.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// GAME CARD — With clickable player/team links
// ═══════════════════════════════════════════════════════════

function GameCard({ game }: { game: (typeof gameResults)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const [tab, setTab] = useState<"recap" | "box" | "reactions">("recap");
  const homeWin = game.homeScore > game.awayScore;
  const awayWin = game.awayScore > game.homeScore;
  const gameHref = `/game/${game.gameId || makeGameId(game.awayTeam, game.homeTeam, pulseEdition.date)}`;

  return (
    <div
      className="glass-card rounded-lg overflow-hidden transition-all duration-200"
      style={{ borderLeft: `3px solid ${getTeamColor(homeWin ? game.homeTeam : game.awayTeam)}` }}
    >
      <button
        type="button"
        className="w-full p-4 text-left hover:bg-white/[0.02] transition-colors"
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3 flex-1">
            <a href={`/team/${game.awayTeam.toLowerCase()}`} className="flex flex-col items-center w-14" onClick={(e) => e.stopPropagation()}>
              <TeamLogo team={game.awayTeam} size={32} className="mb-1" />
              <div className="section-label mb-0.5" style={{ color: awayWin ? "#0EA5E9" : "rgba(255,255,255,0.4)" }}>{game.awayTeam}</div>
              <div className={`mono-data font-bold text-2xl ${awayWin ? "pulse-glow-blue" : ""}`} style={{ color: awayWin ? "#ffffff" : "rgba(255,255,255,0.5)" }}>{game.awayScore}</div>
            </a>
            <div className="text-xs text-center" style={{ color: "rgba(255,255,255,0.3)" }}>@</div>
            <a href={`/team/${game.homeTeam.toLowerCase()}`} className="flex flex-col items-center w-14" onClick={(e) => e.stopPropagation()}>
              <TeamLogo team={game.homeTeam} size={32} className="mb-1" />
              <div className="section-label mb-0.5" style={{ color: homeWin ? "#0EA5E9" : "rgba(255,255,255,0.4)" }}>{game.homeTeam}</div>
              <div className={`mono-data font-bold text-2xl ${homeWin ? "pulse-glow-blue" : ""}`} style={{ color: homeWin ? "#ffffff" : "rgba(255,255,255,0.5)" }}>{game.homeScore}</div>
            </a>
          </div>
          <div className="text-right">
            <div className="text-xs font-medium px-2 py-0.5 rounded mb-1 inline-block" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}>FINAL</div>
            <div className="text-xs" style={{ color: "#0EA5E9" }}>{expanded ? "▲ Collapse" : "▼ Expand"}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 py-2 px-3 rounded" style={{ background: "rgba(255,255,255,0.04)" }}>
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#0EA5E9" }} />
          <div>
            <a href={`/player/${slugify(game.topPerformer)}`} className="text-xs font-semibold text-white hover:text-sky-400 transition-colors" onClick={(e) => e.stopPropagation()}>
              {game.topPerformer}
            </a>
            <span className="text-xs ml-2 mono-data" style={{ color: "#10B981" }}>{game.topLine}</span>
          </div>
        </div>
      </button>
      <div className="px-4 pb-3">
        <a href={gameHref} className="inline-flex min-h-[44px] items-center text-xs font-semibold text-sky-300 hover:text-sky-200">
          Open Game Center →
        </a>
      </div>
      {expanded && (
        <div className="px-4 pb-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex gap-1 pt-3 pb-2" role="tablist" aria-label="Game details">
            {(["recap", "box", "reactions"] as const).map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tab === t}
                className="desk-section-pill !min-h-[36px]"
                data-active={tab === t ? "true" : undefined}
                onClick={() => setTab(t)}
              >
                {t === "recap" ? "Recap" : t === "box" ? "Box score" : "Reactions"}
              </button>
            ))}
          </div>
          {tab === "recap" && (
            <p className="text-sm leading-relaxed pt-2" style={{ color: "rgba(255,255,255,0.65)" }}>{game.recap}</p>
          )}
          {tab === "box" && (
            <div className="pt-2">
              <BoxScoreCard espnGameId={game.gameId} homeTeam={game.homeTeam} awayTeam={game.awayTeam} />
            </div>
          )}
          {tab === "reactions" && (
            <div className="pt-2">
              <ReactionBar itemId={`game-${game.gameId}`} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SCORES SECTION
// ═══════════════════════════════════════════════════════════

function ScoresSection({ favoriteTeams }: { favoriteTeams: string[] }) {
  const isPersonalized = favoriteTeams.length > 0;

  // Re-order so a favorite team's game appears first, preserving relative order otherwise
  const sortedGames = isPersonalized
    ? [...gameResults].sort((a, b) => {
        const aIsFav = favoriteTeams.some(
          (t) =>
            t.toUpperCase() === a.homeTeam.toUpperCase() ||
            t.toUpperCase() === a.awayTeam.toUpperCase()
        );
        const bIsFav = favoriteTeams.some(
          (t) =>
            t.toUpperCase() === b.homeTeam.toUpperCase() ||
            t.toUpperCase() === b.awayTeam.toUpperCase()
        );
        if (aIsFav && !bIsFav) return -1;
        if (!aIsFav && bIsFav) return 1;
        return 0;
      })
    : gameResults;

  return (
    <section id="scores" className="py-10">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div>
            <div className="section-label mb-1">LAST NIGHT</div>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="display-heading text-white text-2xl">Scores</h2>
              <DataTrustBadge variant="espn" />
              {isPersonalized && (
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(16,185,129,0.12)",
                    color: "#10B981",
                    border: "1px solid rgba(16,185,129,0.25)",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Personalized for you
                </div>
              )}
            </div>
          </div>
          <div className="mono-data text-sm px-3 py-1 rounded" style={{ background: "rgba(14,165,233,0.1)", color: "#0EA5E9", border: "1px solid rgba(14,165,233,0.2)" }}>
            {gameResults.length} GAMES
          </div>
        </div>
        {sortedGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {sortedGames.map((game) => (<GameCard key={game.gameId} game={game} />))}
          </div>
        ) : (
          <div
            className="glass-card rounded-lg px-6 py-10 text-center"
            style={{ border: "1px dashed rgba(255,255,255,0.12)" }}
          >
            <p className="section-label mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>NO GAMES</p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
              No games on last night&apos;s slate. Check{" "}
              <a href="/watch-guide" className="text-sky-400 underline">tonight&apos;s schedule</a> for the next tip-off.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

// Collapsible secondary edition blocks
function CollapsibleEditionExtras({
  narrative,
  media,
  rookieFantasy,
}: {
  narrative: ReactNode;
  media: ReactNode;
  rookieFantasy: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <section className="py-6 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="container">
        <button
          type="button"
          className="w-full flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 min-h-[56px] hover:bg-white/[0.05] transition-colors"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="text-left">
            <div className="section-label mb-1">FULL EDITION</div>
            <div className="text-sm font-semibold text-white">Lead story, desk read, rookies &amp; fantasy</div>
          </div>
          <span className="text-sky-400 text-sm font-semibold">{open ? "Hide ▲" : "Show ▼"}</span>
        </button>
        {open && (
          <div className="mt-4 space-y-0">
            {narrative}
            {media}
            {rookieFantasy}
          </div>
        )}
      </div>
    </section>
  );
}

function NarrativeSection() {
  return (
    <section className="py-10 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="section-label mb-2">THE LEAD</div>
            <h3 className="display-heading text-white text-xl mb-4">{narrative.headline}</h3>
            {narrative.body.map((paragraph: string, i: number) => (
              <p key={i} className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>{paragraph}</p>
            ))}
          </div>
          <div>
            <div className="section-label mb-3">STAT LEADERS</div>
            <div className="space-y-3">
              {statLeaders.map((stat: any, i: number) => (
                <div key={i} className="glass-card rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-medium mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>{stat.category.toUpperCase()}</div>
                      <a href={`/player/${slugify(stat.player)}`} className="text-sm font-semibold text-white hover:text-sky-400 transition-colors">{stat.player}</a>
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{stat.context}</div>
                    </div>
                    <div className="text-right">
                      <div className="mono-data text-2xl font-bold" style={{ color: "#0EA5E9" }}>{stat.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// PULSE INDEX — With sparkline mini-chart
// ═══════════════════════════════════════════════════════════

function Sparkline({ trend }: { trend: string }) {
  // Simple visual indicator based on trend
  const points = trend === "up" ? "2,14 6,10 10,12 14,6 18,8 22,2" : trend === "down" ? "2,2 6,6 10,4 14,10 18,8 22,14" : "2,8 6,7 10,9 14,7 18,8 22,8";
  const color = trend === "up" ? "#10B981" : trend === "down" ? "#F43F5E" : "#64748B";
  return (
    <svg width="28" height="16" viewBox="0 0 24 16" className="inline-block ml-1">
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Modal showing editorial rationale bullets for a Pulse Index ranking
function PulseNoteModal({
  bullets,
  playerName,
  playerSlug,
  onClose,
}: {
  bullets: string[];
  playerName: string;
  playerSlug: string;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  useBodyScrollLock(true);
  useFocusTrap(true, panelRef);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pulse-note-title"
        tabIndex={-1}
        className="w-full max-w-lg rounded-xl overflow-hidden shadow-2xl outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        style={{ background: "#0A1628", border: "1px solid rgba(14,165,233,0.25)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <div>
            <div id="pulse-note-sub" className="section-label text-xs mb-0.5">
              EXPLAIN THIS RANK
            </div>
            <div id="pulse-note-title" className="text-sm font-semibold text-white">
              {playerName}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.4)" }}
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="px-5 py-4 max-h-[min(65vh,24rem)] overflow-y-auto">
          <ul className="space-y-3">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                <span className="text-sky-400 font-bold shrink-0" aria-hidden>
                  {i + 1}.
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-5 pb-4 flex items-center justify-between gap-3">
          <a
            href={`/player/${playerSlug}`}
            className="text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
          >
            View {playerName} profile &rarr;
          </a>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            Escape to dismiss
          </span>
        </div>
      </div>
    </div>
  );
}

function PulseIndexSection() {
  const [activeNote, setActiveNote] = useState<{
    playerName: string;
    playerSlug: string;
    bullets: string[];
  } | null>(null);
  const prefs = getPreferences();
  const favPlayers = prefs.favoritePlayers.map((p) => p.toLowerCase());
  const favTeams = prefs.favoriteTeams.map((t) => t.toUpperCase());
  const finalsOn = isFinalsActive();
  const finalists = finalistTeams();
  const finalistSet = new Set(finalists.map((t) => t.toUpperCase()));
  const pulseRows = finalsOn
    ? pulseIndex.filter((player: { team: string }) => finalistSet.has(player.team.toUpperCase()))
    : pulseIndex;

  return (
    <section id="pulse-index" className="py-10 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="container">
        <div className="flex items-center justify-between mb-2">
          <div className="section-label">{finalsOn ? "FINALS PULSE" : "DAILY RANKINGS"}</div>
          <a href="/pulse-history" className="text-xs font-medium hover:underline" style={{ color: "#0EA5E9" }}>View History &rarr;</a>
        </div>
        <h2 className="display-heading text-white text-2xl mb-2">Pulse Index</h2>
        {finalsOn ? (
          <p className="text-xs mb-6 max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Scoped to finalist teams{finalists.length ? ` (${finalists.join(" · ")})` : ""} while the NBA Finals desk is active.
          </p>
        ) : (
          <div className="mb-6" />
        )}
        {finalsOn && pulseRows.length === 0 ? (
          <p className="text-sm rounded-lg px-4 py-3 mb-4" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.55)" }}>
            No Pulse rows match the synced finalist teams yet — check back after the next edition refresh.
          </p>
        ) : null}
        <div className="space-y-2">
          {pulseRows.map((player: any) => {
            const isUp = player.trend === "up";
            const isDown = player.trend === "down";
            const isFavorite = favPlayers.includes(player.player.toLowerCase()) || favTeams.includes(player.team.toUpperCase());
            return (
              <div key={player.rank} className="glass-card rounded-lg p-4 flex items-center gap-4" style={isFavorite ? { borderLeft: "3px solid #0EA5E9" } : {}}>
                <div className="mono-data text-2xl font-bold w-8 text-center" style={{ color: "#0EA5E9" }}>{player.rank}</div>
                <PlayerAvatar name={player.player} team={player.team} size={40} />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <a href={`/player/${slugify(player.player)}`} className="text-sm font-semibold text-white hover:text-sky-400 transition-colors">{player.player}</a>
                    <a href={`/team/${player.team.toLowerCase()}`} className="inline-flex items-center gap-1 text-xs px-1.5 py-0.5 rounded hover:bg-white/10 transition-colors" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}><TeamLogo team={player.team} size={14} />{player.team}</a>
                    {isFavorite && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#0EA5E9" className="flex-shrink-0">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    )}
                    <span className={`text-xs ${isUp ? "text-emerald-400" : isDown ? "text-rose-400" : "text-slate-400"}`}>
                      {isUp ? "▲" : isDown ? "▼" : "●"}
                    </span>
                    <Sparkline trend={player.trend} />
                  </div>
                  <div className="mono-data text-xs mb-1" style={{ color: "#10B981" }}>{player.keyStats}</div>
                  <div className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {shortenPulsePreview(String(player.note || ""))}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="text-right">
                    <div className="mono-data text-lg font-bold" style={{ color: "#0EA5E9" }}>{player.indexScore}</div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{player.teamRecord}</div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {/* "Why ranked here?" button */}
                    <button
                      type="button"
                      onClick={() =>
                        setActiveNote({
                          playerName: player.player,
                          playerSlug: slugify(player.player),
                          bullets: rationaleToBullets(
                            String(player.rationale || ""),
                            String(player.note || ""),
                          ),
                        })
                      }
                      className="min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0 flex items-center justify-center px-3 sm:w-9 sm:h-9 sm:p-0 rounded-full text-xs font-bold transition-colors hover:bg-sky-500/25"
                      style={{
                        background: "rgba(14,165,233,0.1)",
                        color: "#0EA5E9",
                        border: "1px solid rgba(14,165,233,0.25)",
                      }}
                      title="Explain this rank"
                      aria-label={`Explain why ${player.player} is ranked #${player.rank}`}
                    >
                      ?
                    </button>
                    {/* Share player card */}
                    <ShareButton
                      url={`https://hoopsintel.net/player/${slugify(player.player)}`}
                      tweetText={`${player.player} — Pulse Rank #${player.rank} | ${player.keyStats} hoopsintel.net/player/${slugify(player.player)}`}
                      size="sm"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Note modal */}
      {activeNote && (
        <PulseNoteModal
          bullets={activeNote.bullets}
          playerName={activeNote.playerName}
          playerSlug={activeNote.playerSlug}
          onClose={() => setActiveNote(null)}
        />
      )}
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// MEDIA REACTIONS
// ═══════════════════════════════════════════════════════════

function MediaReactionsSection() {
  const sentimentColors: Record<string, { color: string; bg: string }> = {
    hot: { color: "#F43F5E", bg: "rgba(244,63,94,0.1)" },
    cold: { color: "#0EA5E9", bg: "rgba(14,165,233,0.1)" },
    neutral: { color: "#F59E0B", bg: "rgba(245,158,11,0.1)" },
  };

  return (
    <section className="py-10 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="container">
        <div className="section-label mb-2">AROUND THE CONVERSATION</div>
        <h2 className="display-heading text-white text-2xl mb-2">Desk Read</h2>
        <p className="text-xs mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
          Generated conversation summary, not attributed reporting or direct quotes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {mediaReactions.map((reaction: any, i: number) => {
            const sc = sentimentColors[reaction.sentiment] || sentimentColors.neutral;
            return (
              <div key={i} className="glass-card rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: sc.bg, color: sc.color }}>{reaction.sentiment.toUpperCase()}</span>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{reaction.topic}</span>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>{reaction.quote}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-white">{reaction.author}</span>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{reaction.outlet}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// INJURY UPDATES — With player links
// ═══════════════════════════════════════════════════════════

function InjurySection() {
  const statusStyles: Record<string, { color: string; bg: string }> = {
    out: { color: "#F43F5E", bg: "rgba(244,63,94,0.1)" },
    questionable: { color: "#F59E0B", bg: "rgba(245,158,11,0.1)" },
    probable: { color: "#10B981", bg: "rgba(16,185,129,0.1)" },
    "day-to-day": { color: "#F59E0B", bg: "rgba(245,158,11,0.1)" },
    returning: { color: "#10B981", bg: "rgba(16,185,129,0.1)" },
  };

  return (
    <section id="injuries" className="py-10 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="container">
        <div className="section-label mb-2">INJURY WIRE</div>
        <h2 className="display-heading text-white text-2xl mb-6">Injury Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {injuryUpdates.map((injury: any, i: number) => {
            const ss = statusStyles[injury.status] || statusStyles.out;
            return (
              <div key={i} className="glass-card rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <a href={`/player/${slugify(injury.player)}`} className="text-sm font-semibold text-white hover:text-sky-400 transition-colors">{injury.player}</a>
                    <a href={`/team/${injury.team.toLowerCase()}`} className="text-xs px-1.5 py-0.5 rounded hover:bg-white/10 transition-colors" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}>{injury.team}</a>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded uppercase" style={{ background: ss.bg, color: ss.color }}>{injury.status}</span>
                </div>
                <div className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>{injury.injury}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{injury.timeline}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-5 text-right">
          <a
            href="/injuries"
            className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors hover:underline"
            style={{ color: "#0EA5E9" }}
          >
            Full Report
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// PLAYOFF SERIES — Live state above Tonight's Games during playoffs
// ═══════════════════════════════════════════════════════════

function PlayoffSection() {
  if (!isPlayoffsActive()) return null;

  const snap = playoffSnapshot(playoffSeries, todayISOLocal());
  const active = playoffSeries.filter((s) => s.status !== "complete");
  const matchBridge = active.filter((s) => s.eliminationGame);

  const statTiles = [
    { label: "Teams left", value: String(snap.teamsRemaining), color: "#10B981" },
    { label: "Eliminated", value: String(snap.teamsEliminated), color: "#F43F5E" },
    { label: "Finals played", value: String(snap.gamesPlayed), color: "#0EA5E9" },
    {
      label: snap.matchPointSeries > 0 ? "Match point" : snap.scheduledToday > 0 ? "Today" : "Status",
      value:
        snap.matchPointSeries > 0
          ? `${snap.matchPointSeries} series`
          : snap.scheduledToday > 0
            ? `${snap.scheduledToday} game${snap.scheduledToday === 1 ? "" : "s"}`
            : snap.liveGames > 0
              ? `${snap.liveGames} live`
              : snap.nextMilestone,
      color: "#F59E0B",
    },
  ];

  return (
    <section id="playoffs" className="py-10 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="container">
        <div className="flex items-center justify-between mb-2">
          <div className="section-label">POSTSEASON</div>
          <a href="/playoffs" className="text-xs font-medium" style={{ color: "#0EA5E9" }}>Full bracket &rarr;</a>
        </div>
        <h2 className="display-heading text-white text-2xl mb-2">Playoff Series</h2>
        <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
          {active.length} active series
          {(() => {
            const nx = nextPlayoffGameAcross(playoffSeries);
            if (!nx) return null;
            return nx.game.status === "live"
              ? " · Live now"
              : ` · Next tip: ${nx.game.time ?? nx.game.date}`;
          })()}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
          {statTiles.map((t) => (
            <div key={t.label} className="glass-card rounded-lg p-2.5 text-center">
              <div className="mono-data text-base font-bold" style={{ color: t.color }}>
                {t.value}
              </div>
              <div className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                {t.label}
              </div>
            </div>
          ))}
        </div>

        {matchBridge.length > 0 && (
          <p className="text-xs mb-4" style={{ color: "#F59E0B" }}>
            {matchBridge.length} series at match point — next win can end it (or force Game 7 pressure).
          </p>
        )}
        {matchBridge.length === 0 && (
          <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
            {snap.seriesActive} active · {snap.seriesComplete} decided · next: {snap.nextMilestone}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {active.map((s) => (
            <HomeSeriesCard key={s.seriesId} series={s} />
          ))}
        </div>
        {playoffMovers.length > 0 && <PlayoffMoversCard />}
      </div>
    </section>
  );
}

function HomeSeriesCard({ series }: { series: PlayoffSeries }) {
  const matchPoint = !!series.eliminationGame;
  const nextGame = nextPendingGame(series);
  const accent = matchPoint ? "rgba(245,158,11,0.75)" : "rgba(14,165,233,0.4)";
  const edge = scoringEdgeForSeries(series);

  const confLabel =
    series.conference === "east" ? "East" : series.conference === "west" ? "West" : "NBA Finals";

  return (
    <div className="glass-card rounded-lg p-3" style={{ borderLeft: `3px solid ${accent}` }}>
      <div className="flex items-center justify-between mb-2">
        <div className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>
          {confLabel} · ({series.higherSeed}) vs ({series.lowerSeed})
        </div>
        {matchPoint && (
          <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded" style={{ background: "rgba(245,158,11,0.18)", color: "#F59E0B" }}>
            Match pt
          </span>
        )}
      </div>
      <div className="space-y-1.5">
        <SeriesTeamLine team={series.higherTeam} seed={series.higherSeed} wins={series.higherWins} leading={series.higherWins > series.lowerWins} />
        <SeriesTeamLine team={series.lowerTeam} seed={series.lowerSeed} wins={series.lowerWins} leading={series.lowerWins > series.higherWins} />
      </div>
      <div className="mt-2 text-xs font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
        {series.summary}
      </div>
      {edge && (
        <div className="mt-2 text-[10px] leading-snug mono-data" style={{ color: "rgba(255,255,255,0.38)" }}>
          Finals only: avg {edge.avgTotalPoints} pts · {edge.avgMargin} avg spread · {edge.higher.team}{" "}
          {edge.higher.margin >= 0 ? "+" : ""}
          {edge.higher.margin}/G vs {edge.lower.team}{" "}
          {edge.lower.margin >= 0 ? "+" : ""}
          {edge.lower.margin}/G
        </div>
      )}
      {nextGame && (
        <div className="mt-1 text-[11px] mono-data" style={{ color: "rgba(255,255,255,0.35)" }}>
          {nextGame.status === "live" ? "Live" : "Next"} Game {nextGame.gameNumber}
          {(nextGame.status === "scheduled" || !nextGame.status) &&
            ` · ${nextGame.time ?? nextGame.date}${nextGame.tv ? ` · ${nextGame.tv}` : ""}`}
        </div>
      )}
    </div>
  );
}

function SeriesTeamLine({ team, seed, wins, leading }: { team: string; seed: number; wins: number; leading: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span
          className="w-5 h-5 rounded flex items-center justify-center text-[11px] font-bold"
          style={{
            background: leading ? "rgba(14,165,233,0.15)" : "rgba(255,255,255,0.05)",
            color: leading ? "#0EA5E9" : "rgba(255,255,255,0.5)",
          }}
        >
          {seed}
        </span>
        <a href={`/team/${team.toLowerCase()}`} className="text-sm font-semibold text-white hover:text-sky-400 transition-colors">
          {team}
        </a>
      </div>
      <div className="flex items-center gap-1">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: i < wins ? (leading ? "#0EA5E9" : "#10B981") : "rgba(255,255,255,0.1)" }} />
        ))}
        <span className="mono-data text-xs ml-1 font-bold" style={{ color: leading ? "#0EA5E9" : "rgba(255,255,255,0.5)" }}>{wins}</span>
      </div>
    </div>
  );
}

function PlayoffMoversCard() {
  return (
    <div className="mt-6 glass-card rounded-lg p-4">
      <div className="section-label mb-3" style={{ color: "#0EA5E9" }}>PLAYOFF RISERS &amp; FALLERS</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {playoffMovers.map((m, i) => (
          <div key={i} className="flex items-start gap-3 p-2 rounded" style={{ background: "rgba(255,255,255,0.02)" }}>
            <div
              className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold flex-shrink-0"
              style={{
                background: m.direction === "riser" ? "rgba(16,185,129,0.15)" : "rgba(244,63,94,0.15)",
                color: m.direction === "riser" ? "#10B981" : "#F43F5E",
              }}
              title={m.direction}
            >
              {m.direction === "riser" ? "↑" : "↓"}{Math.abs(m.delta)}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-white">{m.player} <span className="text-xs font-normal" style={{ color: "rgba(255,255,255,0.4)" }}>{m.team}</span></div>
              <div className="mono-data text-[11px]" style={{ color: "rgba(255,255,255,0.5)" }}>{m.playoffLine}</div>
              <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>{m.note}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// TONIGHT'S GAMES — With betting links
// ═══════════════════════════════════════════════════════════

function TonightSection() {
  return (
    <section id="tonight" className="py-10 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="container">
        <div className="section-label mb-2">TONIGHT'S SLATE</div>
        <h2 className="display-heading text-white text-2xl mb-6">Game Previews</h2>
        {gamePreviews.length > 0 ? (
          <div className="space-y-3">
            {gamePreviews.map((preview: any, i: number) => (<GamePreviewCard key={i} preview={preview} />))}
          </div>
        ) : (
          <div
            className="glass-card rounded-lg px-6 py-10 text-center"
            style={{ border: "1px dashed rgba(255,255,255,0.12)" }}
          >
            <p className="section-label mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>NO GAMES TONIGHT</p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
              Nothing on tonight&apos;s schedule. Browse the{" "}
              <a href="/watch-guide" className="text-sky-400 underline">watch guide</a> or catch up in the{" "}
              <a href="/archive" className="text-sky-400 underline">archive</a>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function GamePreviewCard({ preview }: { preview: any }) {
  const [expanded, setExpanded] = useState(false);
  const series = playoffSeriesForMatchup(preview.awayTeam, preview.homeTeam);
  const intel = series ? resolveSeriesIntel(series) : undefined;
  const gameHref = `/game/${preview.gameId || makeGameId(preview.awayTeam, preview.homeTeam, pulseEdition.date)}`;
  const lineMove = lineMovementForMatchup(preview.awayTeam, preview.homeTeam);
  const opener = preview.openingSpread || lineMove?.openingSpread;
  const closer = preview.spread || lineMove?.closingSpread;
  const moved = opener && closer && spreadMoved(opener, closer);
  const moveBadge = opener && closer ? formatLineMovementBadge(opener, closer) : null;

  return (
    <div className={`glass-card rounded-lg overflow-hidden ${preview.featured ? "ring-1 ring-sky-500/40" : ""}`}>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href={`/team/${preview.awayTeam.toLowerCase()}`} className="flex flex-col items-center gap-1">
              <TeamLogo team={preview.awayTeam} size={28} />
              <div className="section-label">{preview.awayTeam}</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{preview.awayRecord}</div>
            </a>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>@</div>
            <a href={`/team/${preview.homeTeam.toLowerCase()}`} className="flex flex-col items-center gap-1">
              <TeamLogo team={preview.homeTeam} size={28} />
              <div className="section-label">{preview.homeTeam}</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{preview.homeRecord}</div>
            </a>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-white">{preview.time}</div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{preview.tv}</div>
          </div>
          <div className="text-right ml-4">
            <div className="mono-data text-xs" style={{ color: "#0EA5E9" }} title="Vegas point spread — negative means favored">
              {closer}
            </div>
            {moveBadge ? (
              <div className="text-[10px] font-semibold text-amber-300/95" title="Morning opener → current board">
                {moveBadge}
              </div>
            ) : moved ? (
              <div className="mono-data text-[10px] text-emerald-300/90">
                {opener} → {closer}
              </div>
            ) : null}
            <div className="mono-data text-xs" style={{ color: "rgba(255,255,255,0.4)" }} title="Over/Under — projected combined total points">Total {preview.overUnder}</div>
          </div>
          <button
            type="button"
            className="ml-2 rounded tap-target px-2 text-xs font-semibold text-sky-300"
            aria-expanded={expanded}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "▲ Less" : "▼ More"}
          </button>
        </div>
        {preview.featured && (
          <div className="mt-2 text-xs font-semibold px-2 py-0.5 rounded inline-block" style={{ background: "rgba(14,165,233,0.15)", color: "#0EA5E9" }}>
            FEATURED GAME
          </div>
        )}
        {series && (
          <div className="mt-2 text-xs font-semibold px-2 py-0.5 rounded inline-block ml-2" style={{ background: "rgba(244,63,94,0.12)", color: "#F43F5E" }}>
            {series.summary}
          </div>
        )}
        <div className="mt-3 flex flex-wrap gap-3">
          <a href={gameHref} className="inline-flex min-h-[44px] items-center text-xs font-semibold text-sky-300 hover:text-sky-200">
            Game Center →
          </a>
          <a href="/pick-em" className="inline-flex min-h-[44px] items-center text-xs font-semibold text-emerald-300 hover:text-emerald-200">
            Pick &apos;Em →
          </a>
          <a href="/betting-intel" className="inline-flex min-h-[44px] items-center text-xs font-semibold text-white/50 hover:text-white/70">
            Lines →
          </a>
        </div>
      </div>
      {expanded && (
        <div className="px-4 pb-4 space-y-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {intel && (
            <div className="pt-3 space-y-2 mb-1" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "0.75rem" }}>
              <div className="text-xs font-medium mb-1" style={{ color: "#F43F5E" }}>H2H SERIES INTEL</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
                <span className="font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>Regular season:</span> {intel.regularSeasonH2H}
              </div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
                <span className="font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>Playoff history:</span> {intel.playoffHistory}
              </div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
                <span className="font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>Matchup to watch:</span> {intel.keyMatchup}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{intel.narrative}</p>
            </div>
          )}
          <div className="pt-3">
            <div className="text-xs font-medium mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>KEY MATCHUP</div>
            <div className="text-sm text-white">{preview.keyMatchup}</div>
          </div>
          <div>
            <div className="text-xs font-medium mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>STORYLINE</div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{preview.storyline}</p>
          </div>
          <div>
            <div className="text-xs font-medium mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>PREDICTION</div>
            <p className="text-sm" style={{ color: "#10B981" }}>{preview.prediction}</p>
          </div>
          <div className="pt-2 space-y-1">
            <div className="text-[10px] font-semibold uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>
              Sportsbook home (external) · 21+ where legal — gamble responsibly
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://sportsbook.draftkings.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-2 min-h-[44px] inline-flex items-center rounded transition-colors hover:bg-white/10"
                style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                DraftKings
              </a>
              <a
                href="https://sportsbook.fanduel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-2 min-h-[44px] inline-flex items-center rounded transition-colors hover:bg-white/10"
                style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                FanDuel
              </a>
              <a
                href="https://sports.betmgm.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-2 min-h-[44px] inline-flex items-center rounded transition-colors hover:bg-white/10"
                style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                BetMGM
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// ROOKIE WATCH & FANTASY ALERTS — With player links
// ═══════════════════════════════════════════════════════════

function RookieAndFantasySection() {
  return (
    <section className="py-10 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="section-label mb-2">ROOKIE WATCH</div>
            <h3 className="display-heading text-white text-xl mb-4">Top Rookies</h3>
            <div className="space-y-2">
              {rookieWatch.map((rookie: any) => (
                <div key={rookie.rank} className="glass-card rounded-lg p-3 flex items-center gap-3">
                  <div className="mono-data text-lg font-bold w-6 text-center" style={{ color: "#0EA5E9" }}>{rookie.rank}</div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white">
                      <a href={`/player/${slugify(rookie.player)}`} className="hover:text-sky-400 transition-colors">{rookie.player}</a>{" "}
                      <a href={`/team/${rookie.team.toLowerCase()}`} className="text-xs hover:text-sky-400 transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>{rookie.team}</a>
                    </div>
                    <div className="mono-data text-xs" style={{ color: "#10B981" }}>{rookie.statLine}</div>
                    <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{rookie.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="section-label mb-2">FANTASY ALERTS</div>
            <h3 className="display-heading text-white text-xl mb-4">Roster Moves</h3>
            <div className="space-y-2">
              {fantasyAlerts.map((alert: any, i: number) => {
                const actionColors: Record<string, { color: string; bg: string }> = {
                  add: { color: "#10B981", bg: "rgba(16,185,129,0.1)" },
                  drop: { color: "#F43F5E", bg: "rgba(244,63,94,0.1)" },
                  hold: { color: "#F59E0B", bg: "rgba(245,158,11,0.1)" },
                  stream: { color: "#0EA5E9", bg: "rgba(14,165,233,0.1)" },
                };
                const actionLabels: Record<string, string> = {
                  add: "Add to roster",
                  drop: "Drop from roster",
                  hold: "Keep on roster",
                  stream: "Short-term pickup",
                };
                const ac = actionColors[alert.action] || actionColors.hold;
                return (
                  <div key={i} className="glass-card rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded uppercase" style={{ background: ac.bg, color: ac.color }} title={actionLabels[alert.action]}>{alert.action}</span>
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{actionLabels[alert.action]}</span>
                      <a href={`/player/${slugify(alert.player)}`} className="text-sm font-semibold text-white hover:text-sky-400 transition-colors">{alert.player}</a>
                      <a href={`/team/${alert.team.toLowerCase()}`} className="text-xs hover:text-sky-400 transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>{alert.team}</a>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{alert.reason}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// INTERACTIVE STANDINGS — Sortable with playoff line
// ═══════════════════════════════════════════════════════════

function StandingsSection() {
  const [sortKey, setSortKey] = useState<string>("rank");
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (key: string) => {
    if (sortKey === key) { setSortAsc(!sortAsc); }
    else { setSortKey(key); setSortAsc(key === "rank"); }
  };

  const sortedStandings = (standings: any[]) => {
    const sorted = [...standings].sort((a, b) => {
      let aVal: any, bVal: any;
      switch (sortKey) {
        case "wins": aVal = a.wins; bVal = b.wins; break;
        case "losses": aVal = a.losses; bVal = b.losses; break;
        case "pct": aVal = parseFloat(a.pct); bVal = parseFloat(b.pct); break;
        case "streak":
          aVal = (a.streak.startsWith("W") ? 1 : -1) * parseInt(a.streak.slice(1));
          bVal = (b.streak.startsWith("W") ? 1 : -1) * parseInt(b.streak.slice(1));
          break;
        default: aVal = a.rank; bVal = b.rank;
      }
      return sortAsc ? aVal - bVal : bVal - aVal;
    });
    return sorted;
  };

  const SortHeader = ({ label, keyName, align = "center" }: { label: string; keyName: string; align?: string }) => (
    <th scope="col" className={`text-${align} px-1 py-2 sm:px-3`}>
      <button
        type="button"
        onClick={() => handleSort(keyName)}
        className="section-label w-full min-h-[44px] sm:min-h-0 flex items-center justify-center sm:inline cursor-pointer hover:text-sky-400 transition-colors select-none rounded-lg sm:rounded-none px-2 sm:px-0 focus-visible:outline focus-visible:ring-2 focus-visible:ring-sky-500"
      >
        {label} {sortKey === keyName ? (sortAsc ? "↑" : "↓") : ""}
      </button>
    </th>
  );

  const renderConference = (title: string, standings: any[]) => (
    <div>
      <h3 className="display-heading text-white text-lg mb-3">{title}</h3>
      <div className="glass-card rounded-lg overflow-x-auto">
        <table className="w-full min-w-[620px] text-xs">
          <thead>
            <tr style={{ background: "rgba(255,255,255,0.04)" }}>
              <SortHeader label="#" keyName="rank" align="left" />
              <th className="text-left px-3 py-2 section-label">TEAM</th>
              <SortHeader label="W" keyName="wins" />
              <SortHeader label="L" keyName="losses" />
              <SortHeader label="PCT" keyName="pct" />
              <th className="text-center px-3 py-2 section-label cursor-help" title="Games Behind — how many games back of the conference leader (0 = leading)">GB</th>
              <SortHeader label="STRK" keyName="streak" />
              <th className="text-center px-3 py-2 section-label cursor-help" title="Record over the last 10 games">L10</th>
            </tr>
          </thead>
          <tbody>
            {sortedStandings(standings).map((team: any, idx: number) => (
              <tr
                key={team.team}
                className="border-t"
                style={{
                  borderColor: team.rank === 6 && sortKey === "rank" ? "rgba(14,165,233,0.4)" : "rgba(255,255,255,0.04)",
                  borderTopWidth: team.rank === 7 && sortKey === "rank" ? 2 : undefined,
                  background: team.rank <= 6 ? "transparent" : team.rank <= 10 ? "rgba(245,158,11,0.03)" : "rgba(244,63,94,0.03)",
                }}
              >
                <td className="px-3 py-2 mono-data" style={{ color: "#0EA5E9" }}>{team.rank}</td>
                <td className="px-3 py-2 font-semibold">
                  <a href={`/team/${team.team.toLowerCase()}`} className="inline-flex items-center gap-2 text-white hover:text-sky-400 transition-colors">
                    <TeamLogo team={team.team} size={20} />
                    {team.team}
                  </a>
                  {team.rank === 6 && sortKey === "rank" && (
                    <span className="ml-2 text-[10px] px-1 py-0.5 rounded cursor-help" title="Seeds 1–6 clinch an automatic playoff berth" style={{ background: "rgba(14,165,233,0.1)", color: "#0EA5E9" }}>PLAYOFF</span>
                  )}
                  {team.rank === 10 && sortKey === "rank" && (
                    <span className="ml-2 text-[10px] px-1 py-0.5 rounded cursor-help" title="Seeds 7–10 enter the Play-In Tournament for the final two playoff spots" style={{ background: "rgba(245,158,11,0.1)", color: "#F59E0B" }}>PLAY-IN</span>
                  )}
                </td>
                <td className="text-center px-3 py-2 mono-data">{team.wins}</td>
                <td className="text-center px-3 py-2 mono-data">{team.losses}</td>
                <td className="text-center px-3 py-2 mono-data">{team.pct}</td>
                <td className="text-center px-3 py-2 mono-data">{team.gb}</td>
                <td className="text-center px-3 py-2">
                  {team.streak ? (
                    <span
                      className="inline-block mono-data text-xs font-bold px-1.5 py-0.5 rounded"
                      style={
                        team.streak.startsWith("W")
                          ? { background: "rgba(16,185,129,0.12)", color: "#10B981", border: "1px solid rgba(16,185,129,0.2)" }
                          : { background: "rgba(244,63,94,0.12)", color: "#F43F5E", border: "1px solid rgba(244,63,94,0.2)" }
                      }
                    >
                      {team.streak}
                    </span>
                  ) : null}
                </td>
                <td className="text-center px-3 py-2 mono-data">{team.last10}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {sortKey === "rank" && (
          <div className="px-3 py-2 flex flex-wrap gap-4 text-[10px]" style={{ background: "rgba(255,255,255,0.02)", color: "rgba(255,255,255,0.3)" }}>
            <span className="cursor-help" title="Top 6 in each conference clinch a playoff berth outright">1-6: <span style={{ color: "#10B981" }}>Playoff Seeds</span></span>
            <span className="cursor-help" title="Seeds 7–10 play a mini-tournament for the final two playoff spots in each conference">7-10: <span style={{ color: "#F59E0B" }}>Play-In Tournament</span></span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="standings" className="py-10 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="container">
        <div className="section-label mb-2">CONFERENCE STANDINGS</div>
        <h2 className="display-heading text-white text-2xl mb-6">Standings</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {renderConference("Eastern Conference", eastStandings)}
          {renderConference("Western Conference", westStandings)}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// FOOTER — With email subscription + RSS
// ═══════════════════════════════════════════════════════════

function Footer() {
  const { toast } = useToast();
  const digestId = "footer-digest-email";
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [apiError, setApiError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(() => readDigestSignupHint());

  const handleSubscribe = async () => {
    if (!footerEmailOk(email)) {
      setEmailError("Enter a valid email.");
      return;
    }
    setEmailError("");
    setApiError("");
    setSubmitting(true);
    const result = await subscribeDigestEmail(email);
    setSubmitting(false);
    if (result.ok) {
      setSubscribed(true);
      toast("Subscribed — morning digest at 5 AM PST");
    } else {
      setApiError(result.error);
    }
  };

  const digestDescribedBy =
    [emailError ? "footer-email-err" : "", apiError ? "footer-digest-api-err" : ""].filter(Boolean).join(" ") || undefined;

  return (
    <footer className="py-10 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded flex items-center justify-center font-bold text-white text-xs" style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}>HI</div>
              <span className="display-heading text-white text-sm">HOOPS INTEL</span>
            </div>
            <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>
              Daily NBA Intelligence · Updated Every Morning · {pulseEdition.edition}
            </p>
            <div className="flex gap-3">
              <a href="/archive" className="text-xs" style={{ color: "#0EA5E9" }}>Archive</a>
              <a href="/performance" className="text-xs" style={{ color: "#0EA5E9" }}>AI Performance</a>
              <a href="/feed.xml" className="text-xs" style={{ color: "#0EA5E9" }}>RSS Feed</a>
            </div>
          </div>

          {/* Daily Digest Signup */}
          <div>
            <div className="section-label mb-2">DAILY DIGEST</div>
            <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              Get the morning edition in your inbox at 5 AM PST
            </p>
            {subscribed ? (
              <div className="text-xs px-3 py-2 rounded" style={{ background: "rgba(16,185,129,0.1)", color: "#10B981" }}>
                ✓ You're subscribed to the daily digest
              </div>
            ) : (
              <div className="space-y-1">
                <label htmlFor={digestId} className="sr-only">
                  Email for daily Hoops Intel digest
                </label>
                <div className="flex flex-wrap gap-2">
                  <input
                    id={digestId}
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError("");
                      if (apiError) setApiError("");
                    }}
                    aria-invalid={emailError || apiError ? "true" : undefined}
                    aria-describedby={digestDescribedBy}
                    placeholder="you@domain.com"
                    className="flex-1 min-w-[min(100%,12rem)] min-h-[44px] px-3 py-2 rounded text-xs bg-white/5 text-white border border-white/10 outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50 sm:min-h-0"
                  />
                  <button
                    type="button"
                    onClick={() => void handleSubscribe()}
                    disabled={submitting}
                    className="min-h-[44px] px-4 py-2 rounded text-xs font-semibold text-white sm:min-h-0 disabled:opacity-50"
                    style={{ background: "#0EA5E9" }}
                  >
                    {submitting ? "Signing up…" : "Subscribe"}
                  </button>
                </div>
                {emailError ? (
                  <p id="footer-email-err" className="text-xs text-rose-400" role="alert">
                    {emailError}
                  </p>
                ) : null}
                {apiError ? (
                  <p id="footer-digest-api-err" className="text-xs text-rose-400" role="alert">
                    {apiError}
                  </p>
                ) : null}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <div className="section-label mb-2">QUICK LINKS</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <a href="#scores" className="text-xs hover:text-sky-400 transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>Scores</a>
              <a href="#pulse-index" className="text-xs hover:text-sky-400 transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>Pulse Index</a>
              <a href="#injuries" className="text-xs hover:text-sky-400 transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>Injuries</a>
              <a href="#tonight" className="text-xs hover:text-sky-400 transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>Tonight</a>
              <a href="/archive" className="text-xs hover:text-sky-400 transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>Archive</a>
              <a href="/tools" className="text-xs hover:text-sky-400 transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>All tools</a>
              <a href="/playoffs" className="text-xs hover:text-sky-400 transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>Playoffs</a>
              <a href="/pulse-methodology" className="text-xs hover:text-sky-400 transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>How Pulse works</a>
              <a href="/feed.xml" className="text-xs hover:text-sky-400 transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>RSS</a>
            </div>
          </div>
        </div>

        <div className="text-center pt-6 border-t" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} Hoops Intel · Not affiliated with the NBA · Data for entertainment purposes
          </p>
        </div>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════
// HOME PAGE — Main export
// ═══════════════════════════════════════════════════════════

export default function Home() {
  const { toast } = useToast();
  const [favoriteTeams, setFavoriteTeams] = useState<string[]>([]);
  const [showMyPulse, setShowMyPulse] = useState(false);
  const [showPrefsSetup, setShowPrefsSetup] = useState(false);

  // Fetch user favorites on mount for client-side personalization
  useEffect(() => {
    // Check localStorage preferences first
    if (hasPreferences()) {
      const prefs = getPreferences();
      if (prefs.favoriteTeams.length > 0) setFavoriteTeams(prefs.favoriteTeams);
      setShowMyPulse(true);
    }
    // Also check Supabase favorites (best-effort)
    getFavorites()
      .then(({ teams }) => {
        if (teams.length > 0) setFavoriteTeams((prev) => prev.length > 0 ? prev : teams);
      })
      .catch(() => {
        // Silently ignore — personalization is best-effort
      });
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader editionBadge={pulseEdition.date} />
      <RivalTonightBanner />
      <LiveScorebar />
      <TickerBar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection showMyPulse={showMyPulse} />
        <DeskSectionNav />
        <TodayDeskSection />
        <PickEmHomeBanner />
        {!showMyPulse ? <MyPulseBanner onSetup={() => setShowPrefsSetup(true)} /> : null}
        {isPlayoffsActive() ? <PlayoffSection /> : null}
        <ScoresSection favoriteTeams={favoriteTeams} />
        <PulseIndexSection />
        <InjurySection />
        <TonightSection />
        <CollapsibleEditionExtras
          narrative={<NarrativeSection />}
          media={<MediaReactionsSection />}
          rookieFantasy={<RookieAndFantasySection />}
        />
        <StandingsSection />
      </main>
      <Footer />
      {showPrefsSetup && (
        <PreferencesSetup
          onClose={() => setShowPrefsSetup(false)}
          onSave={() => {
            setShowPrefsSetup(false);
            setShowMyPulse(true);
            setFavoriteTeams(getPreferences().favoriteTeams);
            toast("My Pulse preferences saved");
          }}
        />
      )}
    </div>
  );
}
