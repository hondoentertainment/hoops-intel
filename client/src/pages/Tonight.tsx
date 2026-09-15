import EditorialShell from "../components/EditorialShell";
import DataTrustBadge from "../components/DataTrustBadge";
import { DeskPanel, EmptyState, EnhancedButton, GamePreviewCard, PageHero, StatCard } from "../components/enhanced/EnhancedUi";
import { campOpenDisplay, daysUntilIso, CAMP_OPEN_ISO, hasTonightSlate } from "../lib/enhancedDesk";
import { campIntelCards, campScheduleStatus } from "../lib/campDesk";
import { lastUpdatedStamp } from "../lib/dataTrust";
import { gamePreviews, pulseEdition } from "../lib/pulseData";
import { makeGameId } from "../lib/gameCenter";

export default function Tonight() {
  const campDays = daysUntilIso(CAMP_OPEN_ISO);
  const slateOpen = hasTonightSlate();
  const deskCards = campIntelCards(3);
  const schedule = campScheduleStatus();
  const openDate = campOpenDisplay();
  const freshness = lastUpdatedStamp();

  return (
    <EditorialShell>
      <div className="desk-page-stack">
        {slateOpen ? (
          <>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <PageHero
                kicker="Tonight"
                title={`${gamePreviews.length} games on the ESPN board`}
                description="Tip-offs from today’s edition — we never invent a slate."
                meta={freshness}
              />
              <DataTrustBadge variant="edition" className="self-start shrink-0" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {(gamePreviews as Array<{
                gameId?: string;
                awayTeam: string;
                homeTeam: string;
                time?: string;
                tv?: string;
                featured?: boolean;
                storyline?: string;
                keyMatchup?: string;
              }>).map((preview) => (
                <a
                  key={preview.gameId || `${preview.awayTeam}-${preview.homeTeam}`}
                  href={`/game/${preview.gameId || makeGameId(preview.awayTeam, preview.homeTeam, pulseEdition.date)}`}
                >
                  <GamePreviewCard
                    status={preview.featured ? "FEATURED" : "TONIGHT"}
                    when={`${preview.time ?? ""}${preview.tv ? ` · ${preview.tv}` : ""}`}
                    away={preview.awayTeam}
                    home={preview.homeTeam}
                    network={preview.tv || ""}
                    note={preview.storyline || preview.keyMatchup || ""}
                  />
                </a>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <DataTrustBadge variant="edition" />
              <p className="text-xs" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
                {freshness}
              </p>
            </div>
            <EmptyState
              kicker="Tonight"
              title={`Waiting on ${openDate}`}
              body="The desk stays honest — empty slate until real tip-offs."
              pill="NOT TONIGHT"
              footnote="Camp openers land on ESPN schedule"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {deskCards.map((card) => (
                <a key={`${card.kicker}-${card.title}`} href={card.href}>
                  <StatCard kicker={card.kicker} value={card.team ?? card.kicker} sub={card.title} />
                </a>
              ))}
            </div>
            {schedule.kind === "espn-upcoming" ? (
              <DeskPanel kicker="ESPN camp-week slate" hint={schedule.sub}>
                <p className="text-xs" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
                  {schedule.games
                    .slice(0, 3)
                    .map((game) => `${game.away} @ ${game.home}`)
                    .join(" · ")}
                  {campDays > 0 ? ` · ${campDays === 1 ? "one day" : `${campDays} days`} out` : ""}
                </p>
              </DeskPanel>
            ) : null}
            <div className="flex flex-wrap gap-2">
              <EnhancedButton href="/#camp-intel">Open camp intel</EnhancedButton>
              <EnhancedButton href="/lineups" variant="ghost">
                Rotation battles
              </EnhancedButton>
            </div>
          </>
        )}
      </div>
    </EditorialShell>
  );
}
