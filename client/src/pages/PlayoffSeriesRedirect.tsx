import { EmptyState, EnhancedButton } from "../components/enhanced/EnhancedUi";
import ToolPageLayout from "../components/ToolPageLayout";
import ShareButton from "../components/ShareButton";
import { SeriesTracker } from "../components/playoffs/SeriesTracker";
import { buildSeriesTimeline } from "../lib/seriesTimeline";
import { seriesById, resolveSeriesIntel } from "../lib/playoffData";
import { useMetaTags } from "../lib/useMetaTags";
import { SITE_ORIGIN } from "../lib/seoConfig";
import { getTeamColor } from "../lib/teamColors";
import { useParams } from "wouter";

function statusLabel(status: string) {
  if (status === "final") return "Final";
  if (status === "live") return "Live";
  return "Scheduled";
}

export default function PlayoffSeriesRedirect() {
  const params = useParams<{ seriesId: string }>();
  const seriesId = params.seriesId ?? "";
  const series = seriesById(seriesId);
  const intel = series ? resolveSeriesIntel(series) : null;
  const timeline = series ? buildSeriesTimeline(series) : [];
  const shareUrl = `${SITE_ORIGIN}/playoffs/series/${seriesId}`;

  useMetaTags({
    title: series
      ? `${series.higherTeam} vs ${series.lowerTeam} Playoff Series | Hoops Intel`
      : "Playoff Series | Hoops Intel",
    description: intel?.narrative?.slice(0, 160) ?? "Live playoff series scores and intel on Hoops Intel.",
    canonicalUrl: `${SITE_ORIGIN}/playoffs#series-card-${seriesId}`,
    ogUrl: shareUrl,
    ogImage: `${SITE_ORIGIN}/api/og?type=edition`,
  });

  if (!series) {
    return (
      <ToolPageLayout
        subtitle="PLAYOFFS"
        showRelated={false}
        breadcrumbs={[{ label: "Playoffs", href: "/playoffs" }, { label: "Not found" }]}
      >
        <EmptyState
          kicker="Series not found"
          title="No synced series for this ID"
          body="That series is not on the current playoff board."
          pill="OPEN BRACKET"
          pillTone="accent"
        />
        <div className="flex justify-center">
          <EnhancedButton href="/playoffs">Back to bracket</EnhancedButton>
        </div>
      </ToolPageLayout>
    );
  }

  return (
    <ToolPageLayout
      subtitle="SERIES HUB"
      showRelated={false}
      breadcrumbs={[
        { label: "Playoffs", href: "/playoffs" },
        { label: `${series.higherTeam} vs ${series.lowerTeam}` },
      ]}
    >
        <section
          className="enhanced-card p-5 md:p-6 mb-6"
          style={{ borderTop: `3px solid ${getTeamColor(series.higherTeam)}` }}
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <p className="enhanced-kicker mb-2">{series.round.replace(/-/g, " ")} · {series.summary}</p>
              <h1 className="editorial-heading text-[var(--hi-text,#0a0a0a)] text-[32px] leading-9 mb-2 max-md:text-[1.5rem]">
                {series.higherTeam} vs {series.lowerTeam}
              </h1>
              <p className="mono-data text-2xl font-black text-[var(--hi-text,#0a0a0a)]">
                {series.higherWins}–{series.lowerWins}
              </p>
            </div>
            <ShareButton
              url={shareUrl}
              tweetText={`${series.higherTeam} ${series.higherWins}–${series.lowerWins} ${series.lowerTeam} · ${series.summary} ${shareUrl.replace(/^https?:\/\//, "")}`}
              size="md"
            />
          </div>

          <SeriesTracker
            games={series.games}
            higherTeam={series.higherTeam}
            lowerTeam={series.lowerTeam}
          />

          {intel ? (
            <p className="mobile-readable mt-4" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
              {intel.narrative}
            </p>
          ) : null}

          <a
            href={`/playoffs#series-card-${series.seriesId}`}
            className="inline-flex items-center min-h-11 mt-4 text-sm font-semibold"
            style={{ color: "var(--hi-accent-text,#146a8c)" }}
          >
            Open bracket card →
          </a>
        </section>

        <section className="enhanced-card p-5 md:p-6">
          <p className="enhanced-kicker mb-3">Game-by-game recap</p>
          <div className="space-y-3">
            {timeline.map((entry) => (
              <article
                key={entry.gameNumber}
                className="desk-inset p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
                      Game {entry.gameNumber} · {entry.date}
                    </div>
                    <div className="text-sm font-semibold text-[var(--hi-text,#0a0a0a)] mt-1">
                      {entry.awayTeam} {entry.awayScore ?? "—"} @ {entry.homeTeam} {entry.homeScore ?? "—"}
                    </div>
                  </div>
                  <span
                    className="desk-chip"
                    style={{
                      background:
                        entry.status === "live"
                          ? "rgba(64,209,140,0.14)"
                          : entry.status === "final"
                            ? "rgba(255,77,106,0.14)"
                            : "rgba(255,255,255,0.06)",
                      color:
                        entry.status === "live" ? "var(--hi-success,#40d18c)" : entry.status === "final" ? "var(--hi-danger,#ff4d6a)" : "var(--hi-text-secondary,#5c5c58)",
                    }}
                  >
                    {statusLabel(entry.status)}
                  </span>
                </div>

                {entry.topPerformer ? (
                  <div className="mono-data text-xs mb-2" style={{ color: "var(--hi-accent-text,#146a8c)" }}>
                    ★ {entry.topPerformer}
                    {entry.topLine ? ` · ${entry.topLine}` : ""}
                  </div>
                ) : null}

                {entry.archiveHeadline ? (
                  <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
                    {entry.archiveHeadline}
                  </p>
                ) : entry.archiveSnippet ? (
                  <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
                    {entry.archiveSnippet}
                  </p>
                ) : null}

                <a href={entry.gameCenterHref} className="inline-flex items-center min-h-11 text-sm font-semibold" style={{ color: "var(--hi-accent-text,#146a8c)" }}>
                  Open Game Center →
                </a>
              </article>
            ))}
          </div>
        </section>
    </ToolPageLayout>
  );
}
