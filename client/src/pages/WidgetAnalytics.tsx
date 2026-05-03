import { useEffect, useState } from "react";
import SiteHeader from "../components/SiteHeader";

type DayBucket = { day: string; pulse: number; ticker: number; injury: number };

export default function WidgetAnalytics() {
  const [days] = useState(21);
  const [series, setSeries] = useState<DayBucket[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let stop = false;
    fetch(`/api/embed-analytics-timeseries?days=${days}`)
      .then((r) => r.json())
      .then((j) => {
        if (stop) return;
        const s = Array.isArray(j.series) ? j.series : [];
        setSeries(s as DayBucket[]);
        if (j.error) setError(String(j.error));
      })
      .catch(() => !stop && setError("fetch_failed"));
    return () => {
      stop = true;
    };
  }, [days]);

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="PUBLISHER ANALYTICS" />

      <div className="container py-10 max-w-5xl">
        <p className="section-label mb-2">EMBED LOADS</p>
        <h1 className="display-heading text-white text-2xl sm:text-3xl mb-4">Publisher analytics dashboard</h1>
        <p className="text-sm mb-8 max-w-3xl leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>
          Rolling daily counts aggregated from iframe beacons.&nbsp;
          <a href="/widgets" className="text-sky-400 underline">
            Back to widgets
          </a>
          . Telemetry requires the Supabase migration that adds <span className="mono-data text-white/60">embed_agg_timeseries</span>.
        </p>

        {error && (
          <div className="mb-6 text-sm px-4 py-3 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-100/95">
            {error === "fetch_failed"
              ? "Could not reach analytics endpoint."
              : `Note: ${error} — totals may appear empty until the RPC is migrated.`}
          </div>
        )}

        <div className="space-y-2 mb-10">
          {series.length === 0 ? (
            <p className="text-sm text-white/45">No rows yet — embed traffic will populate stacked bars automatically.</p>
          ) : (
            series.map((row) => {
              const total = row.pulse + row.ticker + row.injury;
              const safe = Math.max(total, 1);
              const pulseW = (row.pulse / safe) * 100;
              const tickW = (row.ticker / safe) * 100;
              const injW = (row.injury / safe) * 100;
              return (
                <div key={row.day} className="flex gap-4 items-center text-xs mono-data">
                  <div className="w-28 shrink-0 text-white/45">{row.day}</div>
                  <div className="flex-1 h-7 rounded-lg overflow-hidden flex min-w-[120px]" style={{ background: "rgba(255,255,255,0.04)" }}>
                    {total === 0 ? (
                      <div className="h-full flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
                    ) : (
                      <>
                        <div title={`pulse ${row.pulse}`} className="h-full bg-sky-500/80" style={{ width: `${pulseW}%`, minWidth: row.pulse > 0 ? 2 : 0 }} />
                        <div title={`ticker ${row.ticker}`} className="h-full bg-emerald-500/75" style={{ width: `${tickW}%`, minWidth: row.ticker > 0 ? 2 : 0 }} />
                        <div title={`injury ${row.injury}`} className="h-full bg-fuchsia-500/70" style={{ width: `${injW}%`, minWidth: row.injury > 0 ? 2 : 0 }} />
                      </>
                    )}
                  </div>
                  <div className="w-36 text-right text-white/60 shrink-0">
                    Σ {row.pulse + row.ticker + row.injury}
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="flex gap-6 text-[11px] uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.35)" }}>
          <span className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-sm bg-sky-500/80" /> Pulse
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-sm bg-emerald-500/75" /> Ticker
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-sm bg-fuchsia-500/70" /> Injury
          </span>
        </div>
      </div>
    </div>
  );
}
