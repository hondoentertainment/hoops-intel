// 82-0 Challenge — spin an era, draft a five, chase the perfect season
// Best record persisted at localStorage key "hoops-82-0-best"

import { useState } from "react";
import ToolPageLayout from "../components/ToolPageLayout";
import ShareButton from "../components/ShareButton";
import { ERA_LABELS, type EraPlayer, type TeamEraPool } from "../lib/eightyTwoZeroData";
import {
  availablePlayers,
  randomPool,
  respinEra,
  respinTeam,
  simulateSeason,
  type LineupSlot,
  type SeasonResult,
} from "../lib/eightyTwoZeroSim";
import { getTeamColor, getTeamName, readableTextOn } from "../lib/teamColors";

const BEST_KEY = "hoops-82-0-best";
const SLOT_COUNT = 5;

interface BestRecord {
  wins: number;
  losses: number;
  lineup: string[];
}

function loadBest(): BestRecord | null {
  try {
    const raw = localStorage.getItem(BEST_KEY);
    if (raw) return JSON.parse(raw) as BestRecord;
  } catch {
    // ignore
  }
  return null;
}

function saveBest(record: BestRecord) {
  try {
    localStorage.setItem(BEST_KEY, JSON.stringify(record));
  } catch {
    // ignore
  }
}

function statLine(pl: EraPlayer): string {
  const parts = [`${pl.pts.toFixed(1)} PTS`, `${pl.reb.toFixed(1)} REB`, `${pl.ast.toFixed(1)} AST`];
  if (pl.stl >= 1.5) parts.push(`${pl.stl.toFixed(1)} STL`);
  if (pl.blk >= 1.5) parts.push(`${pl.blk.toFixed(1)} BLK`);
  return parts.join(" · ");
}

export default function EightyTwoZero() {
  const [slots, setSlots] = useState<LineupSlot[]>([]);
  const [pool, setPool] = useState<TeamEraPool>(() => randomPool());
  const [teamRespinUsed, setTeamRespinUsed] = useState(false);
  const [eraRespinUsed, setEraRespinUsed] = useState(false);
  const [result, setResult] = useState<SeasonResult | null>(null);
  const [best, setBest] = useState<BestRecord | null>(() => loadBest());

  const choices = availablePlayers(pool, slots);

  function nextSpin(taken: LineupSlot[]) {
    let next = randomPool();
    // A spin with zero pickable players (all already drafted) is a dead end — reroll.
    for (let i = 0; i < 20 && availablePlayers(next, taken).length === 0; i++) {
      next = randomPool();
    }
    setPool(next);
    setTeamRespinUsed(false);
    setEraRespinUsed(false);
  }

  function pickPlayer(player: EraPlayer) {
    const taken = [...slots, { player, team: pool.team, era: pool.era }];
    setSlots(taken);
    if (taken.length === SLOT_COUNT) {
      const season = simulateSeason(taken.map((s) => s.player));
      setResult(season);
      if (!best || season.wins > best.wins) {
        const record = { wins: season.wins, losses: season.losses, lineup: taken.map((s) => s.player.name) };
        saveBest(record);
        setBest(record);
      }
    } else {
      nextSpin(taken);
    }
  }

  function handleRespinTeam() {
    if (teamRespinUsed) return;
    setTeamRespinUsed(true);
    let next = respinTeam(pool);
    for (let i = 0; i < 20 && availablePlayers(next, slots).length === 0; i++) {
      next = respinTeam(pool);
    }
    setPool(next);
  }

  function handleRespinEra() {
    if (eraRespinUsed) return;
    setEraRespinUsed(true);
    const next = respinEra(pool);
    if (availablePlayers(next, slots).length > 0) setPool(next);
  }

  function reset() {
    setSlots([]);
    setResult(null);
    nextSpin([]);
  }

  const teamColor = getTeamColor(pool.team);

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
      <p className="text-sm mb-6 max-w-2xl leading-relaxed" style={{ color: "var(--hi-muted,rgba(255,255,255,0.6))" }}>
        Spin a franchise and an era, draft one player, repeat until you have a starting five. Then we simulate a full
        82-game season against history&apos;s buzzsaws. One team re-spin and one era re-spin per slot — spend them
        wisely. Same five, same record, every time: no take-backs, no lucky reruns.
      </p>

      {/* Lineup rail */}
      <div className="grid grid-cols-5 gap-2 mb-8" aria-label="Your starting five">
        {Array.from({ length: SLOT_COUNT }, (_, i) => {
          const slot = slots[i];
          const color = slot ? getTeamColor(slot.team) : "rgba(255,255,255,0.08)";
          return (
            <div
              key={i}
              className="rounded-lg border p-2 min-h-[84px] flex flex-col justify-between"
              style={{
                borderColor: slot ? color : "rgba(255,255,255,0.12)",
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
                <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Empty
                </div>
              )}
            </div>
          );
        })}
      </div>

      {result ? (
        /* ── Season results ── */
        <div className="rounded-2xl border border-white/10 p-6 sm:p-8 text-center" style={{ background: "rgba(255,255,255,0.03)" }}>
          <p className="section-label mb-2">FINAL RECORD</p>
          <div
            className="mono-data font-bold text-6xl sm:text-7xl mb-3"
            style={{ color: result.wins === 82 ? "#F59E0B" : result.wins >= 73 ? "#10B981" : result.wins >= 50 ? "#0EA5E9" : "#F43F5E" }}
          >
            {result.wins}–{result.losses}
          </div>
          <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
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
              onClick={reset}
              className="min-h-[44px] px-6 rounded-xl font-bold text-sm"
              style={{ background: "#0EA5E9", color: "#050D1A" }}
            >
              Run it back
            </button>
            <ShareButton
              tweetText={`My five went ${result.wins}–${result.losses} in the 82-0 Challenge: ${slots
                .map((s) => s.player.name)
                .join(", ")}. Beat that → hoopsintel.net/82-0`}
              size="md"
            />
          </div>
        </div>
      ) : (
        /* ── Spin + pick ── */
        <div className="rounded-2xl border border-white/10 overflow-hidden" style={{ background: "rgba(255,255,255,0.03)" }}>
          <div
            className="px-5 py-4 flex flex-wrap items-center justify-between gap-3"
            style={{ background: `${teamColor}33`, borderBottom: `2px solid ${teamColor}` }}
          >
            <div>
              <p className="section-label mb-1">SLOT {slots.length + 1} OF {SLOT_COUNT} — THE WHEEL SAYS</p>
              <div className="display-heading text-xl sm:text-2xl" style={{ color: "var(--hi-heading,#fff)" }}>
                {getTeamName(pool.team)}{" "}
                <span className="mono-data text-sm align-middle px-2 py-0.5 rounded" style={{ background: teamColor, color: readableTextOn(teamColor) }}>
                  {ERA_LABELS[pool.era]}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleRespinTeam}
                disabled={teamRespinUsed}
                className="min-h-[40px] px-3 rounded-lg text-xs font-bold border border-white/20 disabled:opacity-30"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                ↻ Re-spin team{teamRespinUsed ? " (used)" : ""}
              </button>
              <button
                type="button"
                onClick={handleRespinEra}
                disabled={eraRespinUsed}
                className="min-h-[40px] px-3 rounded-lg text-xs font-bold border border-white/20 disabled:opacity-30"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                ↻ Re-spin era{eraRespinUsed ? " (used)" : ""}
              </button>
            </div>
          </div>

          <div className="p-5 grid gap-3 sm:grid-cols-3">
            {choices.map((pl) => (
              <button
                key={pl.name}
                type="button"
                onClick={() => pickPlayer(pl)}
                className="text-left rounded-xl border border-white/10 p-4 transition-colors hover:border-sky-500/60 focus-visible:ring-2 focus-visible:ring-sky-500/50 outline-none"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm" style={{ color: "var(--hi-heading,#fff)" }}>
                    {pl.name}
                  </span>
                  <span className="mono-data text-[10px] px-1.5 py-0.5 rounded bg-white/10" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {pl.pos}
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

      {best && (
        <p className="mono-data text-xs mt-6" style={{ color: "rgba(255,255,255,0.4)" }}>
          YOUR BEST: {best.wins}–{best.losses} ({best.lineup.join(", ")})
        </p>
      )}
    </ToolPageLayout>
  );
}
