// 82-0 Challenge — spin an era, draft a five, chase the perfect season
// localStorage: "hoops-82-0-best" (best record), "hoops-82-0-history" (recent
// runs), "hoops-82-0-daily" (today's best on the Daily Wheel)

import { useEffect, useRef, useState } from "react";
import ToolPageLayout from "../components/ToolPageLayout";
import ShareButton from "../components/ShareButton";
import { ERA_LABELS, type EraPlayer, type TeamEraPool } from "../lib/eightyTwoZeroData";
import {
  availablePlayers,
  createRng,
  dailyWheelLabel,
  dailyWheelSeed,
  draftCoverage,
  gameStrip,
  monthlySplits,
  randomPool,
  respinEra,
  respinTeam,
  simulateSeason,
  type LineupSlot,
  type SeasonResult,
} from "../lib/eightyTwoZeroSim";
import { getTeamColor, getTeamName, readableTextOn } from "../lib/teamColors";

const BEST_KEY = "hoops-82-0-best";
const HISTORY_KEY = "hoops-82-0-history";
const DAILY_KEY = "hoops-82-0-daily";
const SLOT_COUNT = 5;
const HISTORY_LIMIT = 5;
const SPIN_MS = 650;
const SPIN_TICK_MS = 70;
const REVEAL_TICK_MS = 24;

type Mode = "free" | "daily";

interface RunRecord {
  wins: number;
  losses: number;
  lineup: string[];
  mode: Mode;
}

interface DailyRecord extends RunRecord {
  seed: string;
}

function loadJson<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw) as T;
  } catch {
    // ignore
  }
  return null;
}

function saveJson(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore
  }
}

function prefersReducedMotion(): boolean {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

function statLine(pl: EraPlayer): string {
  const parts = [`${pl.pts.toFixed(1)} PTS`, `${pl.reb.toFixed(1)} REB`, `${pl.ast.toFixed(1)} AST`];
  if (pl.stl >= 1.5) parts.push(`${pl.stl.toFixed(1)} STL`);
  if (pl.blk >= 1.5) parts.push(`${pl.blk.toFixed(1)} BLK`);
  return parts.join(" · ");
}

function CoverageChip({ ok, okLabel, needLabel }: { ok: boolean; okLabel: string; needLabel: string }) {
  return (
    <span
      className="mono-data text-[10px] px-2 py-0.5 rounded-full border"
      style={{
        borderColor: ok ? "rgba(16,185,129,0.5)" : "rgba(245,158,11,0.5)",
        color: ok ? "#10B981" : "#F59E0B",
        background: ok ? "rgba(16,185,129,0.08)" : "rgba(245,158,11,0.08)",
      }}
    >
      {ok ? `✓ ${okLabel}` : `△ ${needLabel}`}
    </span>
  );
}

export default function EightyTwoZero() {
  const [mode, setMode] = useState<Mode>("free");
  const [slots, setSlots] = useState<LineupSlot[]>([]);
  const [pool, setPool] = useState<TeamEraPool>(() => randomPool());
  const [displayPool, setDisplayPool] = useState<TeamEraPool | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [teamRespinUsed, setTeamRespinUsed] = useState(false);
  const [eraRespinUsed, setEraRespinUsed] = useState(false);
  const [result, setResult] = useState<SeasonResult | null>(null);
  const [revealed, setRevealed] = useState(0);
  const [best, setBest] = useState<RunRecord | null>(() => loadJson<RunRecord>(BEST_KEY));
  const [history, setHistory] = useState<RunRecord[]>(() => loadJson<RunRecord[]>(HISTORY_KEY) ?? []);
  const [daily, setDaily] = useState<DailyRecord | null>(() => {
    const stored = loadJson<DailyRecord>(DAILY_KEY);
    return stored && stored.seed === dailyWheelSeed() ? stored : null;
  });

  const rngRef = useRef<() => number>(Math.random);
  const spinTimers = useRef<number[]>([]);
  const revealTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      spinTimers.current.forEach((t) => window.clearInterval(t));
      if (revealTimer.current !== null) window.clearInterval(revealTimer.current);
    };
  }, []);

  // Keyboard flow: 1-3 drafts, T/E re-spin, Enter runs it back. The handler
  // lives in a ref so one listener always sees current state.
  const keyHandler = useRef<(e: KeyboardEvent) => void>(() => {});
  keyHandler.current = (e: KeyboardEvent) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = (e.target as HTMLElement)?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || (e.target as HTMLElement)?.isContentEditable) return;
    if (result) {
      if (e.key === "Enter" && revealed >= 82) {
        e.preventDefault();
        startRun(mode);
      } else if (e.key === "Enter") {
        e.preventDefault();
        skipReveal();
      }
      return;
    }
    if (spinning) return;
    const num = Number.parseInt(e.key, 10);
    if (num >= 1 && num <= choices.length) {
      e.preventDefault();
      pickPlayer(choices[num - 1]);
    } else if (e.key.toLowerCase() === "t") {
      handleRespinTeam();
    } else if (e.key.toLowerCase() === "e") {
      handleRespinEra();
    }
  };
  useEffect(() => {
    const listener = (e: KeyboardEvent) => keyHandler.current(e);
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, []);

  function clearSpinTimers() {
    spinTimers.current.forEach((t) => window.clearInterval(t));
    spinTimers.current = [];
  }

  function spinTo(next: TeamEraPool) {
    clearSpinTimers();
    if (prefersReducedMotion()) {
      setPool(next);
      return;
    }
    setSpinning(true);
    // Cycle cosmetic pools fast, then settle on the real one.
    const cycle = window.setInterval(() => setDisplayPool(randomPool()), SPIN_TICK_MS);
    const settle = window.setTimeout(() => {
      window.clearInterval(cycle);
      spinTimers.current = spinTimers.current.filter((t) => t !== cycle);
      setDisplayPool(null);
      setPool(next);
      setSpinning(false);
    }, SPIN_MS);
    spinTimers.current.push(cycle, settle as unknown as number);
  }

  function drawPool(taken: LineupSlot[]): TeamEraPool {
    let next = randomPool(rngRef.current);
    for (let i = 0; i < 20 && availablePlayers(next, taken).length === 0; i++) {
      next = randomPool(rngRef.current);
    }
    return next;
  }

  function nextSpin(taken: LineupSlot[]) {
    setTeamRespinUsed(false);
    setEraRespinUsed(false);
    spinTo(drawPool(taken));
  }

  function startRun(nextMode: Mode) {
    setMode(nextMode);
    rngRef.current = nextMode === "daily" ? createRng(dailyWheelSeed()) : Math.random;
    setSlots([]);
    setResult(null);
    setRevealed(0);
    if (revealTimer.current !== null) {
      window.clearInterval(revealTimer.current);
      revealTimer.current = null;
    }
    nextSpin([]);
  }

  function beginReveal() {
    if (prefersReducedMotion()) {
      setRevealed(82);
      return;
    }
    setRevealed(0);
    const timer = window.setInterval(() => {
      setRevealed((n) => {
        if (n + 1 >= 82) {
          window.clearInterval(timer);
          revealTimer.current = null;
          return 82;
        }
        return n + 1;
      });
    }, REVEAL_TICK_MS);
    revealTimer.current = timer;
  }

  function skipReveal() {
    if (revealTimer.current !== null) {
      window.clearInterval(revealTimer.current);
      revealTimer.current = null;
    }
    setRevealed(82);
  }

  function recordRun(season: SeasonResult, taken: LineupSlot[]) {
    const run: RunRecord = { wins: season.wins, losses: season.losses, lineup: taken.map((s) => s.player.name), mode };
    if (!best || season.wins > best.wins) {
      saveJson(BEST_KEY, run);
      setBest(run);
    }
    const nextHistory = [run, ...history].slice(0, HISTORY_LIMIT);
    saveJson(HISTORY_KEY, nextHistory);
    setHistory(nextHistory);
    if (mode === "daily" && (!daily || season.wins > daily.wins)) {
      const dailyRun: DailyRecord = { ...run, seed: dailyWheelSeed() };
      saveJson(DAILY_KEY, dailyRun);
      setDaily(dailyRun);
    }
  }

  function pickPlayer(player: EraPlayer) {
    if (spinning || result) return;
    const taken = [...slots, { player, team: pool.team, era: pool.era }];
    setSlots(taken);
    if (taken.length === SLOT_COUNT) {
      const season = simulateSeason(taken.map((s) => s.player));
      setResult(season);
      recordRun(season, taken);
      beginReveal();
    } else {
      nextSpin(taken);
    }
  }

  function handleRespinTeam() {
    if (teamRespinUsed || spinning) return;
    setTeamRespinUsed(true);
    let next = respinTeam(pool, rngRef.current);
    for (let i = 0; i < 20 && availablePlayers(next, slots).length === 0; i++) {
      next = respinTeam(pool, rngRef.current);
    }
    spinTo(next);
  }

  function handleRespinEra() {
    if (eraRespinUsed || spinning) return;
    setEraRespinUsed(true);
    const next = respinEra(pool, rngRef.current);
    if (availablePlayers(next, slots).length > 0) spinTo(next);
  }

  const shownPool = spinning && displayPool ? displayPool : pool;
  const teamColor = getTeamColor(shownPool.team);
  const choices = availablePlayers(pool, slots);
  const coverage = draftCoverage(slots.map((s) => s.player));
  const strip = result ? gameStrip(result) : [];
  const revealedWins = strip.slice(0, revealed).filter(Boolean).length;
  const revealDone = result !== null && revealed >= 82;
  const splits = result ? monthlySplits(result.lossGames) : [];
  const perfect = result?.wins === 82;

  const shareText = result
    ? mode === "daily"
      ? `The 82-0 Daily Wheel (${dailyWheelLabel()}) gave me ${slots.map((s) => s.player.name).join(", ")} — they went ${result.wins}–${result.losses}. Spin the same wheel → hoopsintel.net/82-0`
      : `My five went ${result.wins}–${result.losses} in the 82-0 Challenge: ${slots.map((s) => s.player.name).join(", ")}. Beat that → hoopsintel.net/82-0`
    : "";

  return (
    <ToolPageLayout
      subtitle="GAMES & CHALLENGES"
      maxWidth="xl"
      relatedHref="/82-0"
      breadcrumbs={[{ label: "Today's desk", href: "/" }, { label: "Tools", href: "/tools" }, { label: "82-0" }]}
    >
      <p className="section-label mb-2">THE 82-0 CHALLENGE</p>
      <h1 className="display-heading text-2xl sm:text-3xl mb-3" style={{ color: "var(--hi-heading,#fff)" }}>
        Can your five go 82-0?
      </h1>
      <p className="text-sm mb-4 max-w-2xl leading-relaxed" style={{ color: "var(--hi-muted,rgba(255,255,255,0.6))" }}>
        Spin a franchise and an era, draft one player, repeat until you have a starting five. Then we play out a full
        82-game season against history&apos;s buzzsaws. One team re-spin and one era re-spin per slot — spend them
        wisely. Same five, same record, every time: no take-backs, no lucky reruns.{" "}
        <span className="hidden sm:inline mono-data text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>
          Keys: 1–3 draft · T/E re-spin · Enter runs it back.
        </span>
      </p>

      {/* Mode toggle */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <button
          type="button"
          onClick={() => startRun("free")}
          className="desk-section-pill"
          data-active={mode === "free" ? "true" : undefined}
        >
          Free spin
        </button>
        <button
          type="button"
          onClick={() => startRun("daily")}
          className="desk-section-pill"
          data-active={mode === "daily" ? "true" : undefined}
        >
          Daily Wheel · {dailyWheelLabel()}
        </button>
        {mode === "daily" && (
          <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>
            Everyone gets the same spins today — the draft is on you.
          </span>
        )}
        {daily && (
          <span className="mono-data text-[11px] ml-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            TODAY&apos;S WHEEL BEST: {daily.wins}–{daily.losses}
          </span>
        )}
      </div>

      {/* Lineup rail */}
      <div className="grid grid-cols-5 gap-2 mb-3" aria-label="Your starting five">
        {Array.from({ length: SLOT_COUNT }, (_, i) => {
          const slot = slots[i];
          const color = slot ? getTeamColor(slot.team) : "rgba(255,255,255,0.08)";
          const isNext = !slot && i === slots.length && !result;
          return (
            <div
              key={i}
              className="rounded-lg border p-2 min-h-[84px] flex flex-col justify-between"
              style={{
                borderColor: slot ? color : isNext ? "rgba(14,165,233,0.5)" : "rgba(255,255,255,0.12)",
                background: slot ? `${color}22` : "rgba(255,255,255,0.03)",
              }}
            >
              <div className="mono-data text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                {i + 1}
              </div>
              {slot ? (
                <div>
                  <div className="text-xs font-bold leading-tight" style={{ color: "var(--hi-heading,#fff)" }}>
                    {slot.player.name}
                  </div>
                  <div className="mono-data text-[10px] mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {slot.team} · {ERA_LABELS[slot.era]}
                  </div>
                </div>
              ) : (
                <div className="text-[11px]" style={{ color: isNext ? "#0EA5E9" : "rgba(255,255,255,0.3)" }}>
                  {isNext ? "On the clock" : "Empty"}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Draft strength meter */}
      {!result && slots.length > 0 && (
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 min-w-[180px] flex-1 max-w-xs">
            <span className="mono-data text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              RAW STRENGTH
            </span>
            <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (coverage.rawStrength / 240) * 100)}%`, background: "#0EA5E9" }}
              />
            </div>
            <span className="mono-data text-xs font-bold" style={{ color: "#0EA5E9" }}>
              {Math.round(coverage.rawStrength)}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <CoverageChip ok={coverage.hasCenter} okLabel="Rim protected" needLabel="No center" />
            <CoverageChip ok={coverage.hasGuard} okLabel="Backcourt set" needLabel="No guard" />
            <CoverageChip ok={coverage.onPaceAssists} okLabel="Ball moves" needLabel="Light playmaking" />
            <CoverageChip ok={coverage.onPaceRebounds} okLabel="Owns the glass" needLabel="Thin on boards" />
          </div>
        </div>
      )}
      {!result && slots.length === 0 && <div className="mb-5" />}

      {result ? (
        /* ── Season reveal + results ── */
        <div
          className="rounded-2xl border p-6 sm:p-8 text-center"
          style={{
            background: "rgba(255,255,255,0.03)",
            borderColor: perfect && revealDone ? "rgba(245,158,11,0.6)" : "rgba(255,255,255,0.1)",
          }}
        >
          <p className="section-label mb-2">{revealDone ? "FINAL RECORD" : "SEASON IN PROGRESS"}</p>
          <div
            className={`mono-data font-bold text-6xl sm:text-7xl mb-4 ${perfect && revealDone ? "animate-pulse" : ""}`}
            role="status"
            style={{
              color: revealDone
                ? perfect
                  ? "#F59E0B"
                  : result.wins >= 73
                    ? "#10B981"
                    : result.wins >= 50
                      ? "#0EA5E9"
                      : "#F43F5E"
                : "rgba(255,255,255,0.85)",
            }}
          >
            {revealedWins}–{revealed - revealedWins}
          </div>

          {/* 82-game strip */}
          <div className="flex flex-wrap justify-center gap-1 max-w-lg mx-auto mb-4" aria-hidden>
            {strip.map((won, i) => {
              const shown = i < revealed;
              const loss = result.lossGames.find((l) => l.gameNumber === i + 1);
              return (
                <span
                  key={i}
                  title={shown && loss ? `Game ${loss.gameNumber}: L vs the ${loss.opponent}` : undefined}
                  className="rounded-sm"
                  style={{
                    width: 10,
                    height: 14,
                    background: !shown ? "rgba(255,255,255,0.08)" : won ? "#10B981" : "#F43F5E",
                    transition: "background 120ms",
                  }}
                />
              );
            })}
          </div>

          {!revealDone ? (
            <button
              type="button"
              onClick={skipReveal}
              className="mono-data text-xs underline"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Skip to the final record
            </button>
          ) : (
            <>
              {/* Monthly splits */}
              <div className="mono-data text-[11px] mb-4 flex flex-wrap justify-center gap-x-3 gap-y-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                {splits.map((s) => (
                  <span key={s.label}>
                    {s.label}{" "}
                    <span style={{ color: s.losses === 0 ? "#10B981" : "#F43F5E" }}>
                      {s.wins}-{s.losses}
                    </span>
                  </span>
                ))}
              </div>

              <p className="text-sm mb-5 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
                {result.verdict}
              </p>

              <div className="mono-data text-xs mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
                STRENGTH RATING {Math.round(result.rating.total)}
                {result.rating.total < result.rating.base && (
                  <span> (base {Math.round(result.rating.base)} − {Math.round(result.rating.base - result.rating.total)} balance penalties)</span>
                )}
              </div>

              {result.lossGames.length > 0 && (
                <div className="max-w-sm mx-auto mb-6 text-left">
                  <p className="section-label mb-2 text-center">THE NIGHTS IT DIED</p>
                  <ul className="space-y-1">
                    {result.lossGames.slice(0, 8).map((loss) => (
                      <li key={loss.gameNumber} className="mono-data text-xs flex justify-between" style={{ color: "rgba(255,255,255,0.55)" }}>
                        <span style={{ color: "#F43F5E" }}>L — Game {loss.gameNumber}</span>
                        <span>vs the {loss.opponent}</span>
                      </li>
                    ))}
                    {result.lossGames.length > 8 && (
                      <li className="mono-data text-xs text-center" style={{ color: "rgba(255,255,255,0.35)" }}>
                        …and {result.lossGames.length - 8} more
                      </li>
                    )}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => startRun(mode)}
                  className="min-h-[44px] px-6 rounded-xl font-bold text-sm"
                  style={{ background: "#0EA5E9", color: "#050D1A" }}
                >
                  Run it back
                </button>
                <ShareButton tweetText={shareText} size="md" />
              </div>
            </>
          )}
        </div>
      ) : (
        /* ── Spin + pick ── */
        <div className="rounded-2xl border border-white/10 overflow-hidden" style={{ background: "rgba(255,255,255,0.03)" }}>
          <div
            className="px-5 py-4 flex flex-wrap items-center justify-between gap-3"
            style={{ background: `${teamColor}33`, borderBottom: `2px solid ${teamColor}`, transition: "background 120ms, border-color 120ms" }}
          >
            <div>
              <p className="section-label mb-1">
                SLOT {slots.length + 1} OF {SLOT_COUNT} — {spinning ? "SPINNING…" : "THE WHEEL SAYS"}
              </p>
              <div className="display-heading text-xl sm:text-2xl" style={{ color: "var(--hi-heading,#fff)" }} aria-live="polite">
                {getTeamName(shownPool.team)}{" "}
                <span className="mono-data text-sm align-middle px-2 py-0.5 rounded" style={{ background: teamColor, color: readableTextOn(teamColor) }}>
                  {ERA_LABELS[shownPool.era]}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleRespinTeam}
                disabled={teamRespinUsed || spinning}
                className="min-h-[40px] px-3 rounded-lg text-xs font-bold border border-white/20 disabled:opacity-30"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                ↻ Re-spin team{teamRespinUsed ? " (used)" : ""}
              </button>
              <button
                type="button"
                onClick={handleRespinEra}
                disabled={eraRespinUsed || spinning}
                className="min-h-[40px] px-3 rounded-lg text-xs font-bold border border-white/20 disabled:opacity-30"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                ↻ Re-spin era{eraRespinUsed ? " (used)" : ""}
              </button>
            </div>
          </div>

          <div className="p-5 grid gap-3 sm:grid-cols-3" style={{ opacity: spinning ? 0.35 : 1, transition: "opacity 150ms" }}>
            {(spinning ? shownPool.players : choices).map((pl, idx) => (
              <button
                key={pl.name}
                type="button"
                onClick={() => pickPlayer(pl)}
                disabled={spinning}
                className="text-left rounded-xl border border-white/10 p-4 transition-colors hover:border-sky-500/60 focus-visible:ring-2 focus-visible:ring-sky-500/50 outline-none disabled:cursor-default"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm" style={{ color: "var(--hi-heading,#fff)" }}>
                    {pl.name}
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="mono-data text-[10px] px-1.5 py-0.5 rounded bg-white/10 hidden sm:inline" style={{ color: "rgba(255,255,255,0.4)" }} aria-hidden>
                      {idx + 1}
                    </kbd>
                    <span className="mono-data text-[10px] px-1.5 py-0.5 rounded bg-white/10" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {pl.pos}
                    </span>
                  </span>
                </div>
                <div className="mono-data text-[11px]" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {statLine(pl)}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Best + recent runs */}
      {(best || history.length > 0) && (
        <div className="mt-8">
          {best && (
            <p className="mono-data text-xs mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
              YOUR BEST: {best.wins}–{best.losses} ({best.lineup.join(", ")})
            </p>
          )}
          {history.length > 0 && (
            <div>
              <p className="section-label mb-2">RECENT RUNS</p>
              <ul className="space-y-1">
                {history.map((run, i) => (
                  <li key={i} className="mono-data text-xs flex flex-wrap gap-x-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                    <span style={{ color: run.wins === 82 ? "#F59E0B" : run.wins >= 73 ? "#10B981" : "rgba(255,255,255,0.75)" }}>
                      {run.wins}–{run.losses}
                    </span>
                    {run.mode === "daily" && <span style={{ color: "#0EA5E9" }}>[daily]</span>}
                    <span>{run.lineup.join(", ")}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </ToolPageLayout>
  );
}
