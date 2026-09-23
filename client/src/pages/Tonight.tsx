import EditorialShell from "../components/EditorialShell";
import DataTrustBadge from "../components/DataTrustBadge";
import { CampDeskEmpty, DeskPanel, EnhancedButton, GamePreviewCard, PageHero, StatCard } from "../components/enhanced/EnhancedUi";
import { campOpenDisplay, daysUntilIso, CAMP_OPEN_ISO, hasTonightSlate } from "../lib/enhancedDesk";
import { campIntelCards, campScheduleStatus } from "../lib/campDesk";
import { deskStaleNote, lastUpdatedStamp } from "../lib/dataTrust";
import { gamePreviews, pulseEdition } from "../lib/pulseData";
import { makeGameId } from "../lib/gameCenter";
import { tonightPlayerLinks, type TonightSlateGame } from "../lib/tonightPlayerLinks";

function TonightPlayerLinks({ game }: { game: TonightSlateGame }) {
  const links = tonightPlayerLinks(game);
  if (links.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-1.5 px-1" data-testid="tonight-player-links">
      <span className="enhanced-kicker">Players</span>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="desk-chip"
          style={{
            background: "var(--hi-accent-soft,#d7eef9)",
            color: "var(--hi-text,#0a0a0a)",
            textDecoration: "none",
          }}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}

export default function Tonight() {
  const campDays = daysUntilIso(CAMP_OPEN_ISO);
  const slateOpen = hasTonightSlate();
  const deskCards = campIntelCards(3);
  const schedule = campScheduleStatus();
  const openDate = campOpenDisplay();
  const freshness = lastUpdatedStamp();
  const stale = deskStaleNote();

  return (
    <EditorialShell header={{ subtitle: "TONIGHT" }}>
      <div className="desk-page-stack">
        {stale && (
          <p className="text-xs" role="status" data-testid="tonight-stale-note" style={{ color: "#F59E0B" }}>
            {stale}
          </p>
        )}
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
                <div
                  key={preview.gameId || `${preview.awayTeam}-${preview.homeTeam}`}
                  className="flex flex-col gap-2 min-w-0"
                  data-testid="tonight-game-card"
                >
                  <a href={`/game/${preview.gameId || makeGameId(preview.awayTeam, preview.homeTeam, pulseEdition.date)}`}>
                    <GamePreviewCard
                      status={preview.featured ? "FEATURED" : "TONIGHT"}
                      when={`${preview.time ?? ""}${preview.tv ? ` · ${preview.tv}` : ""}`}
                      away={preview.awayTeam}
                      home={preview.homeTeam}
                      network={preview.tv || ""}
                      note={preview.storyline || preview.keyMatchup || ""}
                    />
                  </a>
                  <TonightPlayerLinks game={preview} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <DataTrustBadge variant="edition" />
              <p className="text-xs" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
                {freshness}
              </p>
            </div>
            <CampDeskEmpty
              title={`Waiting on ${openDate}`}
              body="Season desk is coming. The desk, tools, archive, and Ask stay live. Live scores stay held until ~Oct 1 — empty slate until real tip-offs, never invented."
              pill="NOT TONIGHT"
              footnote="Scores and injury crons return around October 1"
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
                <p className="text-xs" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
                  {schedule.games
                    .slice(0, 3)
                    .map((game) => `${game.away} @ ${game.home}`)
                    .join(" · ")}
                  {campDays > 0 ? ` · ${campDays === 1 ? "one day" : `${campDays} days`} out` : ""}
                </p>
              </DeskPanel>
            ) : null}
            <div className="flex flex-wrap gap-2">
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
