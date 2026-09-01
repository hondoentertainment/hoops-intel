import SiteHeader from "../components/SiteHeader";
import { EnhancedButton, GamePreviewCard, SectionHeader, StatCard } from "../components/enhanced/EnhancedUi";
import {
  CAMP_OPENER_PREVIEWS,
  daysUntilIso,
  CAMP_OPEN_ISO,
  hasTonightSlate,
} from "../lib/enhancedDesk";
import { gamePreviews, pulseEdition } from "../lib/pulseData";
import { makeGameId } from "../lib/gameCenter";

export default function Tonight() {
  const campDays = daysUntilIso(CAMP_OPEN_ISO);
  const slateOpen = hasTonightSlate();

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
          <div className="enhanced-card flex flex-col gap-2 p-5">
            <p className="editorial-heading text-[22px] leading-[26px] text-[var(--hi-text,#f3f6fa)]">
              The dead period still has the floor.
            </p>
            <p className="editorial-body text-sm leading-5 text-[var(--hi-text,#f3f6fa)]">
              Nothing on tonight’s schedule. Preseason opens October 3
              {campDays > 0 ? ` — ${campDays === 1 ? "one day" : `${campDays} days`}` : ""}. Rotation battles
              and minutes caps move to Lineups until the first tip.
            </p>
            <p className="text-xs leading-[18px]" style={{ color: "var(--hi-text-secondary,#8b9bb0)" }}>
              Scores is not a standalone route — recaps live on the desk when games exist.
            </p>
            <div className="pt-1">
              <EnhancedButton href="/lineups" variant="ghost">
                Open lineups
              </EnhancedButton>
            </div>
          </div>
        )}

        {!slateOpen ? (
          <>
            <SectionHeader
              eyebrow="WHEN THE SLATE RETURNS"
              title="Camp openers · Oct 3"
              action="Add to Pulse →"
              actionHref="/my-pulse"
            />
            <p className="text-xs -mt-2" style={{ color: "var(--hi-text-secondary,#8b9bb0)" }}>
              Editorial camp-open watch list — not a live ESPN slate and not tonight’s scores.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {CAMP_OPENER_PREVIEWS.map((game) => (
                <GamePreviewCard
                  key={`${game.away}-${game.home}`}
                  status="PRESEASON"
                  when={game.when}
                  away={game.away}
                  home={game.home}
                  network={game.network}
                  note={game.note}
                />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <a href="/lineups">
                <StatCard
                  kicker="ROTATION BATTLES"
                  value="Lineups desk"
                  sub="Preseason desk prioritizes minutes caps and scheme teases."
                />
              </a>
              <StatCard
                kicker="MURRAY D17"
                value="DEN"
                sub="Silence is now institutional precedent — not reversible by one announcement."
              />
              <StatCard
                kicker="OKC PREP"
                value="Operational"
                sub="Preparation depth converting from abstract to camp decisions."
              />
            </div>
          </>
        ) : null}
      </main>
    </div>
  );
}
