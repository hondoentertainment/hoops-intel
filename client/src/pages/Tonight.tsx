import SiteHeader from "../components/SiteHeader";
import { EnhancedButton, GamePreviewCard, SectionHeader, StatCard } from "../components/enhanced/EnhancedUi";
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
      <main id="main-content" tabIndex={-1} className="px-4 md:px-7 py-5 flex flex-col gap-4 outline-none max-md:gap-3.5">
        <SectionHeader
          eyebrow="TONIGHT'S SLATE"
          title={slateOpen ? `${gamePreviews.length} games tonight` : "No games tonight"}
          action="Watch guide →"
          actionHref="/watch-guide"
        />

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
          <div className="enhanced-card flex flex-col gap-2 p-5 max-md:p-4">
            <p className="editorial-heading text-[1.375rem] leading-8 text-[var(--hi-text,#f3f6fa)]">
              The slate is empty. The desk is not.
            </p>
            <p className="editorial-body mobile-readable text-[var(--hi-text,#f3f6fa)]">
              Nothing on tonight’s ESPN schedule. Training camp opens October 3
              {campDays > 0 ? ` — ${campDays === 1 ? "one day" : `${campDays} days`}` : ""}.
              Roster battles, cuts, and Pulse of the camp live on the morning desk — not as invented matchups here.
            </p>
            <p className="mobile-readable" style={{ color: "var(--hi-text-secondary,#8b9bb0)" }}>
              {schedule.kind === "espn-upcoming"
                ? schedule.sub
                : "Scores is not a standalone route — recaps land on the desk when games exist."}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <EnhancedButton href="/#camp-intel">Open camp intel</EnhancedButton>
              <EnhancedButton href="/lineups" variant="ghost">
                Rotation battles
              </EnhancedButton>
            </div>
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
          </>
        ) : null}
      </main>
    </div>
  );
}
