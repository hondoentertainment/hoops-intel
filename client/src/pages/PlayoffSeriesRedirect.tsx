import SiteHeader from "../components/SiteHeader";
import Breadcrumbs from "../components/Breadcrumbs";
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
      <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
        <SiteHeader subtitle="PLAYOFFS" />
        <main className="container py-20 text-center">
          <div className="section-label mb-3">SERIES NOT FOUND</div>
          <h1 className="display-heading text-white text-2xl mb-4">No synced series for this ID</h1>
          <a href="/playoffs" className="text-sky-400 underline">Back to bracket</a>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="SERIES HUB" />
      <main id="main-content" tabIndex={-1} className="container py-8">
        <Breadcrumbs
          items={[
            { label: "Playoffs", href: "/playoffs" },
            { label: `${series.higherTeam} vs ${series.lowerTeam}` },
          ]}
        />

        <section
          className="glass-card rounded-xl p-5 md:p-6 mb-6"
          style={{ borderTop: `3px solid ${getTeamColor(series.higherTeam)}` }}
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <div className="section-label mb-2">{series.round.replace(/-/g, " ")} · {series.summary}</div>
              <h1 className="display-heading text-white text-3xl mb-2">
                {series.higherTeam} vs {series.lowerTeam}
              </h1>
              <p className="mono-data text-2xl font-black text-white">
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
            <p className="text-sm mt-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              {intel.narrative}
            </p>
          ) : null}

          <a
            href={`/playoffs#series-card-${series.seriesId}`}
            className="inline-flex mt-4 text-xs font-semibold text-sky-300 hover:text-sky-200"
          >
            Open bracket card →
          </a>
        </section>

        <section className="glass-card rounded-xl p-5 md:p-6">
          <div className="section-label mb-3">GAME-BY-GAME RECAP</div>
          <div className="space-y-3">
            {timeline.map((entry) => (
              <article
                key={entry.gameNumber}
                className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                      Game {entry.gameNumber} · {entry.date}
                    </div>
                    <div className="text-sm font-semibold text-white mt-1">
                      {entry.awayTeam} {entry.awayScore ?? "—"} @ {entry.homeTeam} {entry.homeScore ?? "—"}
                    </div>
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded"
                    style={{
                      background:
                        entry.status === "live"
                          ? "rgba(52,211,153,0.12)"
                          : entry.status === "final"
                            ? "rgba(244,63,94,0.12)"
                            : "rgba(255,255,255,0.06)",
                      color:
                        entry.status === "live" ? "#34d399" : entry.status === "final" ? "#fb7185" : "rgba(255,255,255,0.5)",
                    }}
                  >
                    {statusLabel(entry.status)}
                  </span>
                </div>

                {entry.topPerformer ? (
                  <div className="mono-data text-xs text-sky-300 mb-2">
                    ★ {entry.topPerformer}
                    {entry.topLine ? ` · ${entry.topLine}` : ""}
                  </div>
                ) : null}

                {entry.archiveHeadline ? (
                  <p className="text-xs leading-relaxed mb-2" style={{ color: "rgba(255,255,255,0.62)" }}>
                    {entry.archiveHeadline}
                  </p>
                ) : entry.archiveSnippet ? (
                  <p className="text-xs leading-relaxed mb-2" style={{ color: "rgba(255,255,255,0.62)" }}>
                    {entry.archiveSnippet}
                  </p>
                ) : null}

                <a href={entry.gameCenterHref} className="text-xs font-semibold text-sky-300 hover:text-sky-200">
                  Open Game Center →
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
