import { useEffect } from "react";
import { useParams } from "wouter";
import { playoffSeries } from "../lib/playoffData";
import { useMetaTags } from "../lib/useMetaTags";
import { resolveSeriesIntel } from "../lib/playoffData";
import { SITE_ORIGIN } from "../lib/seoConfig";

export default function PlayoffSeriesRedirect() {
  const params = useParams<{ seriesId: string }>();
  const seriesId = params.seriesId ?? "";
  const series = playoffSeries.find((s) => s.seriesId === seriesId);
  const intel = series ? resolveSeriesIntel(series) : null;

  useMetaTags({
    title: series
      ? `${series.higherTeam} vs ${series.lowerTeam} Playoff Series | Hoops Intel`
      : "Playoff Series | Hoops Intel",
    description: intel?.narrative?.slice(0, 160) ?? "Live playoff series scores and intel on Hoops Intel.",
    canonicalUrl: `${SITE_ORIGIN}/playoffs#series-card-${seriesId}`,
    ogUrl: `${SITE_ORIGIN}/playoffs/series/${seriesId}`,
  });

  useEffect(() => {
    const target = `/playoffs#series-card-${encodeURIComponent(seriesId)}`;
    window.location.replace(target);
  }, [seriesId]);

  return (
    <main className="container py-20 text-center text-white/70 text-sm" role="status">
      Opening {series ? `${series.higherTeam} vs ${series.lowerTeam}` : "series"}…
    </main>
  );
}
