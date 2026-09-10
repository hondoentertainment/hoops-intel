import SiteHeader from "../components/SiteHeader";
import { DeskPanel, EnhancedButton, GamePreviewCard, SectionHeader, StatCard, StatusPill } from "../components/enhanced/EnhancedUi";
import { daysUntilIso, CAMP_OPEN_ISO, hasTonightSlate } from "../lib/enhancedDesk";
import { campIntelCards, campScheduleStatus } from "../lib/campDesk";
import { gamePreviews, pulseEdition } from "../lib/pulseData";
import { makeGameId } from "../lib/gameCenter";

export default function Tonight() {
  const campDays = daysUntilIso(CAMP_OPEN_ISO);
  const slateOpen = hasTonightSlate();
  const deskCards = campIntelCards(3);
  const schedule = campScheduleStatus();

  return (
    <div className="min-h-screen has-mobile-tabbar" style={{ background: "var(--hi-bg-page,#050d1a)" }}>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="px-4 md:px-7 py-6 flex flex-col gap-5 outline-none">
        <div className="flex flex-col gap-2 min-w-0">
          <h1 className="editorial-heading text-[var(--hi-text,#f2f5fa)] text-[30px] leading-[34px] max-md:text-[1.5rem] max-md:leading-8">
            Tonight
          </h1>
          <p className="mobile-readable max-w-2xl" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
            {slateOpen
              ? `${gamePreviews.length} games on the ESPN board.`
              : "No games on the board. Preseason desk stays honest — we never invent tip-offs."}
          </p>
        </div>

        {slateOpen ? (
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
        ) : (
          <div className="enhanced-card flex flex-col items-center justify-center text-center gap-2 px-6 py-12 max-md:px-4 max-md:py-10">
            <p className="font-semibold text-lg leading-6 text-[var(--hi-text,#f2f5fa)]">Waiting on Oct 3</p>
            <p className="text-sm max-w-md" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
              Camp openers land on ESPN schedule · not tonight
              {campDays > 0 ? ` · ${campDays === 1 ? "one day" : `${campDays} days`} out` : ""}.
            </p>
            <StatusPill tone="warn">NOT TONIGHT</StatusPill>
          </div>
        )}

        {!slateOpen ? (
          <>
            <SectionHeader
              eyebrow="ON THE DESK"
              title="Camp / preseason intel"
              action="Open desk →"
              actionHref="/#camp-intel"
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
        ) : null}
      </main>
    </div>
  );
}
