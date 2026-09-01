import { pulseEdition, pulseIndex, injuryUpdates, narrative } from "../../lib/pulseData";
import { slugify } from "../../lib/searchUtils";
import { dispatchAskPrompt } from "../../lib/askShortcuts";
import { isFinalsActive, finalistTeams } from "../../lib/playoffData";
import {
  compactPulseStats,
  deskAskChips,
  deskEyebrow,
  editionUpdatedLabel,
  formatPulseScore,
  hasTonightSlate,
  heroStats,
  mobileHeroStats,
  padRank,
  pulseTrendMark,
  shortInjuryLine,
  tickerWireText,
} from "../../lib/enhancedDesk";
import { EnhancedButton, InjuryChip, SectionHeader, StatCard } from "./EnhancedUi";

function PulseRow({
  rank,
  player,
  team,
  keyStats,
  note,
  indexScore,
  teamRecord,
  trend,
  compact = false,
}: (typeof pulseIndex)[number] & { compact?: boolean }) {
  const mark = pulseTrendMark(trend);
  return (
    <a
      href={`/player/${slugify(player)}`}
      className="enhanced-card grid grid-cols-[1.75rem_minmax(0,1fr)_4rem] items-start gap-x-3 px-3 py-3 md:px-4 w-full min-w-0 overflow-hidden hover:border-[var(--hi-accent,#1ec8f5)]/40 transition-colors"
    >
      <p className="mono-data pulse-score font-bold text-lg md:text-xl self-center" style={{ color: "var(--hi-accent,#1ec8f5)" }}>
        {padRank(rank)}
      </p>
      <div className="min-w-0 overflow-hidden">
        <div className="flex items-baseline gap-2 min-w-0">
          <span className="text-base font-semibold leading-5 text-[var(--hi-text,#f3f6fa)] truncate">{player}</span>
          <span className="text-xs font-bold tracking-[0.6px] shrink-0" style={{ color: "var(--hi-accent,#1ec8f5)" }}>
            {team}
          </span>
        </div>
        <p className="text-sm leading-5 mt-0.5 truncate" style={{ color: "var(--hi-text-secondary,#8b9bb0)" }}>
          {compact ? compactPulseStats(keyStats) : keyStats}
        </p>
        <p className={`editorial-body mobile-readable mt-1 text-[var(--hi-text,#f3f6fa)] ${compact ? "line-clamp-2" : "line-clamp-2"}`}>
          {note}
        </p>
      </div>
      <div className="flex flex-col items-end gap-0.5 min-w-0 text-right">
        <span className="text-xs font-bold leading-none" style={{ color: mark.color }}>
          {mark.mark}
        </span>
        <span className="mono-data pulse-score font-bold text-[22px] text-[var(--hi-text,#f3f6fa)]">{formatPulseScore(indexScore)}</span>
        <span className="text-xs leading-4" style={{ color: "var(--hi-text-secondary,#8b9bb0)" }}>
          {teamRecord}
        </span>
      </div>
    </a>
  );
}

export function EnhancedTicker() {
  return (
    <div
      className="hidden md:flex items-center gap-4 px-4 md:px-7 py-2 overflow-hidden"
      style={{ background: "var(--hi-surface-2,#121c2c)" }}
      aria-label="Edition wire"
    >
      <p className="enhanced-kicker shrink-0">{deskEyebrow()}</p>
      <p className="text-xs truncate" style={{ color: "var(--hi-text-secondary,#8b9bb0)" }}>
        {tickerWireText()}
      </p>
    </div>
  );
}

export default function EnhancedDesk({ showMyPulse }: { showMyPulse: boolean }) {
  const finalsOn = isFinalsActive();
  const finalists = finalistTeams();
  const finalistSet = new Set(finalists.map((t) => t.toUpperCase()));
  const pulseRows = finalsOn
    ? pulseIndex.filter((player) => finalistSet.has(player.team.toUpperCase()))
    : pulseIndex;
  const desktopPulse = pulseRows.slice(0, 4);
  const mobilePulse = pulseRows.slice(0, 3);
  const railInjuries = injuryUpdates.slice(0, 4);
  const chips = deskAskChips();
  const desktopStats = heroStats();
  const mobileStats = mobileHeroStats();

  return (
    <div className="px-4 md:px-7 py-4 md:py-5">
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="flex-1 min-w-0 flex flex-col gap-3.5">
          <div className="flex flex-col gap-2">
            <p className="enhanced-kicker">
              {deskEyebrow()} · {pulseEdition.date.toUpperCase()}
            </p>
            <h1 className="editorial-heading text-[var(--hi-text,#f3f6fa)] text-[30px] leading-[34px] max-md:text-[1.5rem] max-md:leading-8">
              {narrative.headline}
            </h1>
            <p className="text-xs md:text-xs max-md:mobile-readable max-md:text-[var(--hi-text-secondary,#8b9bb0)]" style={{ color: "var(--hi-text-secondary,#8b9bb0)" }}>
              <span className="hidden md:inline">By Will Henderson · Hoops Intel · {editionUpdatedLabel()}</span>
              <span className="md:hidden">
                Will Henderson · 5:03 AM PT
                {hasTonightSlate() ? "" : " · no games tonight"}
              </span>
            </p>
            <div className="flex flex-wrap gap-2 items-center">
              <EnhancedButton href="#pulse-index">Read the brief</EnhancedButton>
              <EnhancedButton href="/my-pulse" variant="ghost">
                {showMyPulse ? "My Pulse" : "Set My Pulse"}
              </EnhancedButton>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 xl:grid-cols-4 gap-2.5">
            {desktopStats.map((card) => (
              <StatCard key={card.kicker} {...card} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 md:hidden">
            {mobileStats.map((card) => (
              <StatCard key={card.kicker} {...card} />
            ))}
          </div>

          <div id="pulse-index" className="hidden md:block">
            <SectionHeader
              eyebrow="HOMEPAGE MODULE"
              title="Pulse Index"
              action="How Pulse works →"
              actionHref="/pulse-methodology"
            />
          </div>
          <div className="md:hidden">
            <SectionHeader
              eyebrow="PULSE INDEX"
              title="Today's board"
              action="Full →"
              actionHref="/pulse-history"
            />
          </div>

          <div className="hidden md:flex flex-col gap-2">
            {desktopPulse.map((row) => (
              <PulseRow key={row.rank} {...row} />
            ))}
          </div>
          <div className="flex flex-col gap-2 md:hidden">
            {mobilePulse.map((row) => (
              <PulseRow key={row.rank} {...row} compact />
            ))}
          </div>
        </div>

        <aside className="hidden md:flex w-full lg:w-[320px] shrink-0 flex-col gap-4">
          <SectionHeader
            eyebrow="INJURY WIRE"
            title="Desk tags"
            action="Full report →"
            actionHref="/injuries"
          />
          <div className="flex flex-col gap-2">
            {railInjuries.map((injury) => (
              <a
                key={injury.player}
                href={`/player/${slugify(injury.player)}`}
                className="enhanced-card flex flex-col gap-1 p-2.5"
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-[var(--hi-text,#f3f6fa)]">{injury.player}</span>
                  <span className="text-[11px] font-bold" style={{ color: "var(--hi-accent,#1ec8f5)" }}>
                    {injury.team}
                  </span>
                  <InjuryChip status={injury.status} />
                </div>
                <p className="text-[11px]" style={{ color: "var(--hi-text-secondary,#8b9bb0)" }}>
                  {shortInjuryLine(injury.injury)}
                </p>
              </a>
            ))}
          </div>

          <div className="enhanced-card flex flex-col gap-2 p-3.5">
            <p className="enhanced-kicker">Ask Hoops Intel</p>
            <p className="editorial-body text-xs leading-4 text-[var(--hi-text,#f3f6fa)]">
              Shortcuts open the assistant with today’s edition context.
            </p>
            {chips.map((chip) => (
              <button
                key={chip}
                type="button"
                className="text-left text-[11px] font-medium px-2.5 py-2 rounded-md min-h-11"
                style={{ background: "var(--hi-surface-2,#121c2c)", color: "var(--hi-text,#f3f6fa)" }}
                onClick={() => dispatchAskPrompt(chip)}
              >
                {chip}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
