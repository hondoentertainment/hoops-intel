import { useCallback, useEffect, useMemo, useState } from "react";
import SiteHeader from "../components/SiteHeader";

type DayOption = 7 | 14 | 30 | 90;

interface TimeseriesRow {
  d: string;
  pulse: number;
  ticker: number;
  injury: number;
}

function num(v: unknown): number {
  return typeof v === "number" && Number.isFinite(v) ? v : 0;
}

function parseSeries(raw: unknown): TimeseriesRow[] {
  if (!Array.isArray(raw)) return [];
  const out: TimeseriesRow[] = [];
  for (const item of raw) {
    if (!item || typeof item !== "object" || Array.isArray(item)) continue;
    const o = item as Record<string, unknown>;
    const d = o.d;
    if (typeof d !== "string") continue;
    out.push({
      d,
      pulse: num(o.pulse),
      ticker: num(o.ticker),
      injury: num(o.injury),
    });
  }
  return out;
}

export default function EmbedPublisherStats() {
  const [days, setDays] = useState<DayOption>(7);
  const [counts, setCounts] = useState<Record<string, unknown>>({});
  const [series, setSeries] = useState<TimeseriesRow[]>([]);
  const [flags, setFlags] = useState<{ unavailable?: boolean; error?: string }>({});

  useEffect(() => {
    let canceled = false;
    const q = `?days=${days}`;
    Promise.all([
      fetch(`/api/embed-analytics-summary${q}`).then((r) => r.json()),
      fetch(`/api/embed-analytics-timeseries${q}`).then((r) => r.json()),
    ])
      .then(([sum, ts]) => {
        if (canceled) return;
        const nextFlags: { unavailable?: boolean; error?: string } = {};
        if (sum && typeof sum === "object" && "unavailable" in sum && sum.unavailable) nextFlags.unavailable = true;
        if (sum && typeof sum === "object" && "error" in sum && typeof sum.error === "string") nextFlags.error = sum.error;
        if (ts && typeof ts === "object" && "unavailable" in ts && ts.unavailable) nextFlags.unavailable = true;
        if (ts && typeof ts === "object" && "error" in ts && typeof ts.error === "string") nextFlags.error = ts.error;
        setFlags(nextFlags);

        if (sum && typeof sum === "object" && sum !== null && "counts" in sum) {
          setCounts(sum.counts as Record<string, unknown>);
        } else {
          setCounts({});
        }
        if (ts && typeof ts === "object" && ts !== null && "series" in ts) {
          setSeries(parseSeries(ts.series));
        } else {
          setSeries([]);
        }
      })
      .catch(() => {
        if (!canceled) {
          setCounts({});
          setSeries([]);
          setFlags({ error: "fetch_failed" });
        }
      });
    return () => {
      canceled = true;
    };
  }, [days]);

  const rollup = useMemo(() => {
    const ids = ["pulse", "ticker", "injury"] as const;
    return ids.map((id) => ({
      id,
      label: id === "pulse" ? "Pulse" : id === "ticker" ? "Ticker" : "Injury",
      loads: typeof counts[id] === "number" ? (counts[id] as number) : 0,
    }));
  }, [counts]);

  const csvBlob = useMemo(() => {
    const header = "date,pulse,ticker,injury\n";
    const body = series.map((r) => `${r.d},${r.pulse},${r.ticker},${r.injury}`).join("\n");
    return new Blob([header + body], { type: "text/csv;charset=utf-8" });
  }, [series]);

  const exportCsv = useCallback(() => {
    const url = URL.createObjectURL(csvBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hoops-intel-embed-loads-${days}d.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }, [csvBlob, days]);

  const dayChoices: DayOption[] = [7, 14, 30, 90];

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="EMBED ANALYTICS" />

      <div className="container py-8 max-w-4xl">
        <div className="mb-8">
          <p
            className="text-[10px] font-bold tracking-widest uppercase mb-2"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Publisher · iframe loads
          </p>
          <h1 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">Embed analytics</h1>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.45)" }}>
            Rollups match Supabase <span className="mono-data text-white/70">embed_analytics_events</span> across the
            window you select. Daily rows use UTC calendar boundaries.
          </p>
        </div>

        {(flags.unavailable || flags.error) && (
          <div
            className="rounded-xl px-4 py-3 mb-6 text-xs"
            style={{
              background: "rgba(251,191,36,0.08)",
              border: "1px solid rgba(251,191,36,0.25)",
              color: "rgba(253,224,71,0.95)",
            }}
          >
            {flags.unavailable && <span>Supabase env not configured — showing empty series.</span>}
            {flags.error && flags.error !== "rpc_failed" && (
              <span className="block mt-1 opacity-90">Detail: {flags.error}</span>
            )}
            {flags.error === "rpc_failed" && (
              <span className="block mt-1 opacity-90">Aggregation RPC failed — check logs or migrations.</span>
            )}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>
            Period
          </span>
          <div className="flex flex-wrap gap-2">
            {dayChoices.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDays(d)}
                className="px-4 py-2 rounded-lg text-xs font-semibold transition-all"
                style={
                  days === d
                    ? { background: "#0EA5E9", color: "#fff" }
                    : {
                        background: "rgba(255,255,255,0.05)",
                        color: "rgba(255,255,255,0.55)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }
                }
              >
                {d} days
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={exportCsv}
            className="ml-auto px-4 py-2 rounded-lg text-xs font-semibold transition-all"
            style={{
              background: "rgba(14,165,233,0.12)",
              color: "#7DD3FC",
              border: "1px solid rgba(14,165,233,0.35)",
            }}
          >
            Export CSV
          </button>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {rollup.map((r) => (
            <div
              key={r.id}
              className="rounded-xl px-5 py-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(14,165,233,0.18)",
              }}
            >
              <div className="text-[10px] uppercase tracking-wide mb-1" style={{ color: "rgba(125,211,252,0.7)" }}>
                {r.label}
              </div>
              <div className="text-3xl font-black mono-data" style={{ color: "#E0F2FE" }}>
                {rollup.some((x) => x.loads > 0) ? r.loads : "—"}
              </div>
              <div className="text-[10px] mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>
                Total loads ({days}d)
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="px-5 py-4 flex items-center justify-between gap-3 flex-wrap"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>
              Daily breakdown
            </span>
            <span className="text-[10px] mono-data" style={{ color: "rgba(255,255,255,0.35)" }}>
              Newest first · UTC dates
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "rgba(0,0,0,0.25)" }}>
                  {["Date", "Pulse", "Ticker", "Injury"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-5 py-3 text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {series.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-5 py-10 text-center text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                      No rows yet for this window.
                    </td>
                  </tr>
                ) : (
                  series.map((row) => (
                    <tr key={row.d} style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                      <td className="px-5 py-3 mono-data text-white/85">{row.d}</td>
                      <td className="px-5 py-3 mono-data" style={{ color: "#7DD3FC" }}>
                        {row.pulse}
                      </td>
                      <td className="px-5 py-3 mono-data" style={{ color: "#7DD3FC" }}>
                        {row.ticker}
                      </td>
                      <td className="px-5 py-3 mono-data" style={{ color: "#7DD3FC" }}>
                        {row.injury}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-8 text-xs text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
          <a href="/widgets" className="text-sky-400 underline underline-offset-2">
            ← Back to widgets
          </a>
        </p>
      </div>
    </div>
  );
}
