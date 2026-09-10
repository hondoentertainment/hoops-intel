import { pulseEdition, pulseIndex, injuryUpdates, narrative } from "../../lib/pulseData";
import { slugify } from "../../lib/searchUtils";
import { dispatchAskPrompt } from "../../lib/askShortcuts";
import { isFinalsActive, finalistTeams } from "../../lib/playoffData";
import {
  campIntelCards,
  campScheduleStatus,
  campShortDate,
  isCampDesk,
  type CampCard,
  type CampScheduleRow,
} from "../../lib/campDesk";
import {
  compactPulseStats,
  deskAskChips,
  deskEyebrow,
  deskKickerLine,
  formatPulseScore,
  formatPulseTenths,
  hasTonightSlate,
  heroStats,
  mobileHeroStats,
  padRank,
  pulseTrendMark,
  shortInjuryLine,
  tickerWireText,
} from "../../lib/enhancedDesk";
import { editionPublishLabel } from "../../lib/pacificTime";
import {
  DeskInset,
  DeskPanel,
  EnhancedButton,
  InjuryChip,
  SectionHeader,
  StatCard,
  StatusPill,
} from "./EnhancedUi";

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
          <span className="text-base font-semibold leading-5 text-[var(--hi-text,#f2f5fa)] truncate">{player}</span>
          <span className="text-xs font-bold tracking-[0.6px] shrink-0" style={{ color: "var(--hi-accent,#1ec8f5)" }}>
            {team}
          </span>
        </div>
        <p className="text-sm leading-5 mt-0.5 truncate" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
          {compact ? compactPulseStats(keyStats) : keyStats}
        </p>
        <p className="editorial-body mobile-readable mt-1 text-[var(--hi-text,#f2f5fa)] line-clamp-2">{note}</p>
      </div>
      <div className="flex flex-col items-end gap-0.5 min-w-0 text-right">
        <span className="text-xs font-bold leading-none" style={{ color: mark.color }}>
          {mark.mark}
        </span>
        <span className="mono-data pulse-score font-bold text-[22px] text-[var(--hi-text,#f2f5fa)]">{formatPulseScore(indexScore)}</span>
        <span className="text-xs leading-4" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
          {teamRecord}
        </span>
      </div>
    </a>
  );
}

function CompactPulseRow({
  rank,
  player,
  team,
  indexScore,
}: Pick<(typeof pulseIndex)[number], "rank" | "player" | "team" | "indexScore">) {
  return (
    <a
      href={`/player/${slugify(player)}`}
      className="desk-inset flex items-center gap-3 px-3 py-2.5 min-h-11 min-w-0 overflow-hidden"
    >
      <span className="mono-data text-xs font-bold shrink-0 w-4" style={{ color: "var(--hi-accent,#1ec8f5)" }}>
        {rank}
      </span>
      <span className="flex-1 min-w-0 text-[13px] font-medium text-[var(--hi-text,#f2f5fa)] truncate">{player}</span>
      <span className="text-[11px] font-medium shrink-0" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
        {team}
      </span>
      <span className="mono-data text-sm font-bold shrink-0 pulse-score" style={{ color: "var(--hi-accent,#1ec8f5)" }}>
        {formatPulseTenths(indexScore)}
      </span>
    </a>
  );
}

function CampIntelRow({ card }: { card: CampCard }) {
  const kicker = card.team ? `${card.kicker} · ${card.team}` : card.kicker;
  return (
    <DeskInset href={card.href} className="flex flex-col gap-1 p-3">
      <p className="text-[10px] font-semibold tracking-[0.8px] uppercase" style={{ color: "var(--hi-accent,#1ec8f5)" }}>
        {kicker}
      </p>
      <p className="text-sm font-semibold leading-[17px] text-[var(--hi-text,#f2f5fa)] line-clamp-2">{card.title}</p>
      <p className="text-xs leading-[18px] line-clamp-2" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
        {card.body}
      </p>
    </DeskInset>
  );
}

function CampSlateCard({ game }: { game: CampScheduleRow }) {
  const dateLabel = game.dateIso ? campShortDate(game.dateIso) : game.when.split(" ")[0] ?? game.when;
  return (
    <DeskInset className="flex flex-col gap-1.5 p-2.5 w-[152px] shrink-0">
      <p className="text-[11px] font-semibold text-[var(--hi-text,#f2f5fa)]">{dateLabel}</p>
      <p className="text-[11px] truncate" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
        {game.away} @ {game.home}
      </p>
      <StatusPill tone="warn">NOT TONIGHT</StatusPill>
    </DeskInset>
  );
}

export function EnhancedTicker() {
  return (
    <div
      className="hidden md:flex items-center gap-4 px-4 md:px-7 py-2 overflow-hidden"
      style={{ background: "var(--hi-surface-2,#12171f)" }}
      aria-label="Edition wire"
    >
      <p className="enhanced-kicker shrink-0">{deskEyebrow()}</p>
      <p className="text-xs truncate" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
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
  const campMode = isCampDesk() && !hasTonightSlate();
  const intel = campIntelCards(3);
  const mobileIntel = intel.slice(0, 2);
  const schedule = campScheduleStatus();

  return (
    <div className="px-4 md:px-7 py-6 md:py-6">
      <div className="flex flex-col gap-[22px]">
        <div id="today-desk" className="flex flex-col gap-2.5 max-w-[980px] min-w-0">
          <p className="enhanced-kicker">
            {deskKickerLine()}
          </p>
          <h1 className="hidden md:block editorial-heading text-[var(--hi-text,#f2f5fa)] text-[32px] leading-[38px]">
            {narrative.headline}
          </h1>
          <h1 className="md:hidden editorial-heading text-[var(--hi-text,#f2f5fa)] text-[1.5rem] leading-8">
            {campMode ? pulseEdition.date : narrative.headline}
          </h1>
          <p className="text-xs max-md:mobile-readable" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
            <span className="hidden md:inline">Will Henderson · Updated {editionPublishLabel()}</span>
            <span className="md:hidden">
              {campMode
                ? `Camp opens Oct 3. Tonight stays empty.`
                : `Will Henderson · ${editionPublishLabel()}${hasTonightSlate() ? "" : " · no games tonight"}`}
            </span>
          </p>
          <div className="desk-hairline mt-1" />
          {!campMode ? (
            <div className="flex flex-wrap gap-2 items-center">
              <EnhancedButton href="#pulse-index">Read the brief</EnhancedButton>
              <EnhancedButton href="/my-pulse" variant="ghost">
                {showMyPulse ? "My Pulse" : "Set My Pulse"}
              </EnhancedButton>
            </div>
          ) : null}
        </div>

        <div className="hidden md:grid grid-cols-3 gap-3 max-w-[936px]">
          {desktopStats.slice(0, 3).map((card) => (
            <StatCard key={card.kicker} {...card} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {mobileStats.map((card) => (
            <StatCard key={card.kicker} {...card} />
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-5 items-start">
          <div className="flex-1 min-w-0 flex flex-col gap-4">
            {campMode ? (
              <DeskPanel id="camp-intel" kicker="Before the slate" hint="Camp intel · storylines before tip-offs return">
                <div className="hidden md:flex flex-col gap-3">
                  {intel.map((card) => (
                    <CampIntelRow key={`${card.kicker}-${card.title}`} card={card} />
                  ))}
                </div>
                <div className="flex flex-col gap-2 md:hidden">
                  {mobileIntel.map((card) => (
                    <CampIntelRow key={`${card.kicker}-${card.title}`} card={card} />
                  ))}
                </div>
              </DeskPanel>
            ) : null}

            {campMode ? (
              <DeskPanel id="pulse-index" kicker="Pulse of the camp">
                <div className="hidden md:flex flex-col gap-3">
                  {desktopPulse.map((row) => (
                    <CompactPulseRow key={row.rank} rank={row.rank} player={row.player} team={row.team} indexScore={row.indexScore} />
                  ))}
                </div>
                <div className="flex flex-col gap-2 md:hidden">
                  {mobilePulse.map((row) => (
                    <CompactPulseRow key={row.rank} rank={row.rank} player={row.player} team={row.team} indexScore={row.indexScore} />
                  ))}
                </div>
              </DeskPanel>
            ) : (
              <>
                <div id="pulse-index" className="hidden md:block">
                  <SectionHeader eyebrow="HOMEPAGE MODULE" title="Pulse Index" action="How Pulse works →" actionHref="/pulse-methodology" />
                </div>
                <div className="md:hidden">
                  <SectionHeader eyebrow="PULSE INDEX" title="Today's board" action="Full →" actionHref="/pulse-history" />
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
              </>
            )}

            {campMode && schedule.kind !== "empty" ? (
              <DeskPanel id="camp-schedule" kicker="ESPN camp-week slate" hint={schedule.sub} className="hidden md:flex">
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {schedule.games.map((game) => (
                    <CampSlateCard key={`${game.away}-${game.home}-${game.when}`} game={game} />
                  ))}
                </div>
              </DeskPanel>
            ) : null}
          </div>

          <aside id="injuries" className="hidden md:flex w-full lg:w-[420px] shrink-0 flex-col gap-4">
            <DeskPanel kicker={campMode ? "Camp Watch" : "Injury Wire"} hint={campMode ? "Last known" : "Desk tags"}>
              <div className="flex flex-col gap-2.5">
                {railInjuries.map((injury) => (
                  <a
                    key={injury.player}
                    href={`/player/${slugify(injury.player)}`}
                    className="desk-inset flex items-center gap-2 px-2.5 py-2 min-h-11 min-w-0"
                  >
                    <span className="flex-1 min-w-0 text-xs font-medium text-[var(--hi-text,#f2f5fa)] truncate">
                      {injury.player}
                    </span>
                    <span className="text-[11px] font-medium shrink-0" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
                      {injury.team}
                    </span>
                    <InjuryChip status={injury.status} />
                  </a>
                ))}
              </div>
              {campMode ? (
                <p className="sr-only">
                  Editorial tags from today’s edition. The live injury cron stays dark through September. {railInjuries.map((i) => shortInjuryLine(i.injury)).join("; ")}
                </p>
              ) : null}
            </DeskPanel>

            {campMode ? (
              <DeskPanel kicker="Tonight">
                <DeskInset className="flex flex-col items-center justify-center gap-2 p-[18px] text-center">
                  <p className="text-sm font-semibold text-[var(--hi-text,#f2f5fa)]">Slate clear</p>
                  <p className="text-xs" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
                    No invented tip-offs. Camp opens Oct 3.
                  </p>
                  <StatusPill tone="accent">EMPTY · HONEST</StatusPill>
                </DeskInset>
              </DeskPanel>
            ) : null}

            <DeskPanel kicker="Ask Hoops Intel" hint="Shortcuts into the desk AI">
              {chips.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  className="desk-inset text-left text-xs font-normal px-2.5 py-2 min-h-11 w-full text-[var(--hi-text,#f2f5fa)]"
                  onClick={() => dispatchAskPrompt(chip)}
                >
                  {chip}
                </button>
              ))}
              <EnhancedButton href="/ask" className="w-full">Ask Hoops Intel</EnhancedButton>
            </DeskPanel>
          </aside>

          {campMode ? (
            <div className="md:hidden w-full flex flex-col gap-3">
              <DeskPanel kicker="Tonight">
                <p className="text-sm" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
                  Slate clear · not tonight
                </p>
              </DeskPanel>
              {schedule.kind !== "empty" ? (
                <DeskPanel kicker="ESPN camp-week slate" hint={schedule.sub}>
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {schedule.games.slice(0, 3).map((game) => (
                      <CampSlateCard key={`${game.away}-${game.home}-${game.when}`} game={game} />
                    ))}
                  </div>
                </DeskPanel>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
