import { useCallback, useEffect, useMemo, useState } from "react";
import SiteHeader from "../components/SiteHeader";

type DayBucket = { day: string; pulse: number; ticker: number; injury: number };

const RANGE_OPTIONS = [7, 14, 21, 30] as const;

export default function WidgetAnalytics() {
  const [days, setDays] = useState<number>(21);
  const [series, setSeries] = useState<DayBucket[]>([]);
  const [summary, setSummary] = useState<Record<string, number>>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let stop = false;
    setError(null);
    Promise.all([
      fetch(`/api/embed-analytics-timeseries?days=${days}`).then((r) => r.json()),
      fetch(`/api/embed-analytics-summary?days=${days}`).then((r) => r.json()),
    ])
      .then(([ts, sum]) => {
        if (stop) return;
        const s = Array.isArray(ts.series) ? ts.series : [];
        setSeries(s as DayBucket[]);
        const c = sum?.counts && typeof sum.counts === "object" && sum.counts !== null ? sum.counts : {};
        const norm: Record<string, number> = {};
        for (const [k, v] of Object.entries(c))
          norm[k] = typeof v === "number" ? v : Number(v) || 0;
        setSummary(norm);
        if (ts.error) setError(String(ts.error));
      })
      .catch(() => !stop && setError("fetch_failed"));
    return () => {
      stop = true;
    };
  }, [days]);

  const totals = useMemo(() => {
    return {
      pulse: summary.pulse ?? 0,
      ticker: summary.ticker ?? 0,
      injury: summary.injury ?? 0,
      sum: (summary.pulse ?? 0) + (summary.ticker ?? 0) + (summary.injury ?? 0),
    };
  }, [summary]);

  const downloadCsv = useCallback(() => {
    const lines = ["day,pulse,ticker,injury,total"];
    for (const row of series) {
      const t = row.pulse + row.ticker + row.injury;
      lines.push(`${row.day},${row.pulse},${row.ticker},${row.injury},${t}`);
    }
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `embed-analytics-${days}d.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }, [series, days]);

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="PUBLISHER ANALYTICS" />

      <div className="container py-10 max-w-5xl">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <p className="section-label mb-2">EMBED LOADS</p>
            <h1 className="display-heading text-white text-2xl sm:text-3xl mb-4">Publisher analytics dashboard</h1>
            <p className="text-sm max-w-3xl leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>
              Rolling daily counts aggregated from iframe beacons.&nbsp;
              <a href="/widgets" className="text-sky-400 underline">
                Back to widgets
              </a>
              . Telemetry needs the Supabase RPCs referenced in the migration pack.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <label className="text-[11px] uppercase tracking-[0.18em]" style={{ color: "rgba(255,255,255,0.38)" }}>
              Window
              <select
                className="block mt-1 rounded-lg px-3 py-2 text-sm text-white/90 mono-data cursor-pointer border border-white/10 bg-white/[0.06]"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
              >
                {RANGE_OPTIONS.map((d) => (
                  <option key={d} value={d}>
                    Last {d} days
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              disabled={series.length === 0}
              onClick={() => downloadCsv()}
              className="mt-5 min-h-[40px] px-3 rounded-lg text-xs font-bold uppercase tracking-wider border border-white/14 text-white/85 hover:bg-white/[0.04] disabled:opacity-40"
            >
              CSV
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 mb-8">
          {(["pulse", "ticker", "injury"] as const).map((id) => (
            <div
              key={id}
              className="rounded-xl px-4 py-3 border border-white/[0.08] bg-white/[0.02]"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.35)" }}>
                {id}
              </div>
              <div className="text-2xl font-bold text-white/90 mono-data mt-1">{totals[id]}</div>
              <div className="text-[11px] mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                last {days}d (RPC summary)
              </div>
            </div>
          ))}
        </div>

        <p className="text-[11px] mb-8 mono-data" style={{ color: "rgba(255,255,255,0.42)" }}>
          Combined window Σ {totals.sum} · chart rows {series.length}
        </p>

        {error && (
          <div className="mb-6 text-sm px-4 py-3 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-100/95">
            {error === "fetch_failed"
              ? "Could not reach analytics endpoint."
              : `Note: ${error} — totals may appear empty until RPCs are migrated.`}
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
