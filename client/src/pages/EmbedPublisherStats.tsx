import { useCallback, useEffect, useMemo, useState } from "react";
import ToolPageLayout from "../components/ToolPageLayout";

type DayOption = 7 | 14 | 30 | 90;
type WidgetId = "pulse" | "ticker" | "injury";
type WidgetFilter = "all" | WidgetId;

interface TimeseriesRow {
  d: string;
  pulse: number;
  ticker: number;
  injury: number;
}

type FetchFlags = {
  summaryUnavailable?: boolean;
  timeseriesUnavailable?: boolean;
  domainsUnavailable?: boolean;
  error?: string;
};

function WidgetSparkline({ values, color = "#0EA5E9" }: { values: number[]; color?: string }) {
  if (values.length < 2) return null;
  const w = 88;
  const h = 28;
  const max = Math.max(...values, 1);
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - (v / max) * (h - 4) - 2;
    return `${x},${y}`;
  });
  return (
    <svg width={w} height={h} className="mt-2 opacity-85" aria-hidden="true">
      <polyline
        points={pts.join(" ")}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function rowLoads(row: TimeseriesRow, filter: WidgetFilter): number {
  if (filter === "all") return row.pulse + row.ticker + row.injury;
  return row[filter];
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

function UnavailableBanner({ flags }: { flags: FetchFlags }) {
  const anyUnavailable =
    flags.summaryUnavailable || flags.timeseriesUnavailable || flags.domainsUnavailable;
  if (!anyUnavailable && !flags.error) return null;

  return (
    <div
      className="rounded-xl px-4 py-4 mb-6 text-xs space-y-2"
      style={{
        background: "rgba(251,191,36,0.08)",
        border: "1px solid rgba(251,191,36,0.25)",
        color: "rgba(253,224,71,0.95)",
      }}
      role="status"
    >
      <p className="font-semibold text-amber-100">Analytics backend unavailable</p>
      {flags.summaryUnavailable && flags.timeseriesUnavailable && flags.domainsUnavailable ? (
        <p>
          Supabase is not configured on this deployment (<code className="text-amber-200/90">SUPABASE_URL</code> + service
          key). Counts, daily rows, and referrer breakdown will stay empty until env is wired.
        </p>
      ) : (
        <ul className="list-disc pl-4 space-y-1 opacity-90">
          {flags.summaryUnavailable && <li>Summary rollups unavailable</li>}
          {flags.timeseriesUnavailable && <li>Daily timeseries unavailable</li>}
          {flags.domainsUnavailable && <li>Referrer / host breakdown unavailable</li>}
        </ul>
      )}
      {flags.error && flags.error !== "rpc_failed" && (
        <p className="opacity-90">Detail: {flags.error}</p>
      )}
      {flags.error === "rpc_failed" && (
        <p className="opacity-90">
          Aggregation RPC failed — run Supabase migrations (<code className="text-amber-200/90">embed_agg_*</code> functions).
        </p>
      )}
    </div>
  );
}

export default function EmbedPublisherStats() {
  const [days, setDays] = useState<DayOption>(7);
  const [widgetFilter, setWidgetFilter] = useState<WidgetFilter>("all");
  const [counts, setCounts] = useState<Record<string, unknown>>({});
  const [series, setSeries] = useState<TimeseriesRow[]>([]);
  const [flags, setFlags] = useState<FetchFlags>({});
  const [hosts, setHosts] = useState<{ host: string; loads: number }[]>([]);
  const [hostQuery, setHostQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let canceled = false;
    setLoading(true);
    const q = `?days=${days}`;
    Promise.all([
      fetch(`/api/embed-analytics-summary${q}`).then((r) => r.json()),
      fetch(`/api/embed-analytics-timeseries${q}`).then((r) => r.json()),
      fetch(`/api/embed-analytics-domains${q}`).then((r) => r.json()),
    ])
      .then(([sum, ts, dom]) => {
        if (canceled) return;
        const nextFlags: FetchFlags = {};
        if (sum && typeof sum === "object" && "unavailable" in sum && sum.unavailable) nextFlags.summaryUnavailable = true;
        if (ts && typeof ts === "object" && "unavailable" in ts && ts.unavailable) nextFlags.timeseriesUnavailable = true;
        if (dom && typeof dom === "object" && "unavailable" in dom && dom.unavailable) nextFlags.domainsUnavailable = true;
        if (sum && typeof sum === "object" && "error" in sum && typeof sum.error === "string") nextFlags.error = sum.error;
        else if (ts && typeof ts === "object" && "error" in ts && typeof ts.error === "string") nextFlags.error = ts.error;
        else if (dom && typeof dom === "object" && "error" in dom && typeof dom.error === "string") nextFlags.error = dom.error;
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
        if (dom && typeof dom === "object" && dom !== null && Array.isArray((dom as { hosts?: unknown }).hosts)) {
          setHosts((dom as { hosts: { host: string; loads: number }[] }).hosts ?? []);
        } else {
          setHosts([]);
        }
      })
      .catch(() => {
        if (!canceled) {
          setCounts({});
          setSeries([]);
          setHosts([]);
          setFlags({ summaryUnavailable: true, timeseriesUnavailable: true, domainsUnavailable: true, error: "fetch_failed" });
        }
      })
      .finally(() => {
        if (!canceled) setLoading(false);
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

  const chronSeries = useMemo(() => [...series].reverse(), [series]);

  const sparklineByWidget = useMemo(() => {
    const ids = ["pulse", "ticker", "injury"] as const;
    return Object.fromEntries(ids.map((id) => [id, chronSeries.map((r) => r[id])])) as Record<
      WidgetId,
      number[]
    >;
  }, [chronSeries]);

  const displayHosts = useMemo(() => {
    const q = hostQuery.trim().toLowerCase();
    const list = hosts.slice(0, 50);
    if (!q) return list.slice(0, 15);
    return list.filter((h) => h.host.toLowerCase().includes(q)).slice(0, 20);
  }, [hosts, hostQuery]);
  const hostTotal = useMemo(() => hosts.reduce((n, h) => n + h.loads, 0), [hosts]);

  const totalLoads = useMemo(() => {
    if (widgetFilter === "all") return rollup.reduce((n, r) => n + r.loads, 0);
    const row = rollup.find((r) => r.id === widgetFilter);
    return row?.loads ?? 0;
  }, [rollup, widgetFilter]);

  const periodTrend = useMemo(() => {
    if (series.length < 4) return null;
    const mid = Math.floor(series.length / 2);
    const older = series.slice(mid);
    const newer = series.slice(0, mid);
    const sum = (rows: TimeseriesRow[]) => rows.reduce((n, r) => n + rowLoads(r, widgetFilter), 0);
    const a = sum(older);
    const b = sum(newer);
    if (a === 0) return b > 0 ? 100 : 0;
    return Math.round(((b - a) / a) * 100);
  }, [series, widgetFilter]);

  const tableColumns = useMemo(() => {
    const ids = ["pulse", "ticker", "injury"] as const;
    if (widgetFilter === "all") return ids;
    return [widgetFilter];
  }, [widgetFilter]);

  const analyticsLive = !flags.summaryUnavailable && !flags.timeseriesUnavailable;
  const hasSeriesData = series.some((r) => r.pulse + r.ticker + r.injury > 0);
  const hasAnyLoads = totalLoads > 0;

  const csvBlob = useMemo(() => {
    if (widgetFilter === "all") {
      const header = "date,pulse,ticker,injury\n";
      const body = series.map((r) => `${r.d},${r.pulse},${r.ticker},${r.injury}`).join("\n");
      return new Blob([header + body], { type: "text/csv;charset=utf-8" });
    }
    const header = `date,${widgetFilter}\n`;
    const body = series.map((r) => `${r.d},${r[widgetFilter]}`).join("\n");
    return new Blob([header + body], { type: "text/csv;charset=utf-8" });
  }, [series, widgetFilter]);

  const hostsCsvBlob = useMemo(() => {
    const header = "host,loads,share_pct\n";
    const body = hosts
      .map((h) => {
        const pct = hostTotal > 0 ? ((h.loads / hostTotal) * 100).toFixed(1) : "0";
        return `${h.host},${h.loads},${pct}`;
      })
      .join("\n");
    return new Blob([header + body], { type: "text/csv;charset=utf-8" });
  }, [hosts, hostTotal]);

  const exportCsv = useCallback(() => {
    const url = URL.createObjectURL(csvBlob);
    const a = document.createElement("a");
    a.href = url;
    const suffix = widgetFilter === "all" ? "" : `-${widgetFilter}`;
    a.download = `hoops-intel-embed-loads-${days}d${suffix}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }, [csvBlob, days, widgetFilter]);

  const exportHostsCsv = useCallback(() => {
    const url = URL.createObjectURL(hostsCsvBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hoops-intel-embed-hosts-${days}d.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }, [hostsCsvBlob, days]);

  const dayChoices: DayOption[] = [7, 14, 30, 90];
  const widgetChoices: { value: WidgetFilter; label: string }[] = [
    { value: "all", label: "All widgets" },
    { value: "pulse", label: "Pulse" },
    { value: "ticker", label: "Ticker" },
    { value: "injury", label: "Injury" },
  ];
  const summaryLabel =
    widgetFilter === "all"
      ? `All widgets · ${days}d`
      : `${widgetChoices.find((w) => w.value === widgetFilter)?.label ?? widgetFilter} · ${days}d`;

  return (
    <ToolPageLayout subtitle="EMBED ANALYTICS">
      <div className="mb-8">
        <p
          className="text-[10px] font-bold tracking-widest uppercase mb-2"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          Publisher · iframe loads
        </p>
        <h1 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">Embed analytics</h1>
        <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.45)" }}>
          Rollups match Supabase <span className="mono-data text-white/70">embed_analytics_events</span>. Referrer hosts
          come from <span className="mono-data text-white/70">embed_agg_by_referrer</span> (parent page hostname on load).
        </p>
      </div>

      <UnavailableBanner flags={flags} />

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
        <span className="text-[10px] font-bold uppercase tracking-wider ml-2" style={{ color: "rgba(255,255,255,0.35)" }}>
          Widget
        </span>
        <select
          value={widgetFilter}
          onChange={(e) => setWidgetFilter(e.target.value as WidgetFilter)}
          className="px-3 py-2 rounded-lg text-xs font-semibold"
          style={{
            background: "rgba(255,255,255,0.05)",
            color: "rgba(255,255,255,0.75)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {widgetChoices.map((w) => (
            <option key={w.value} value={w.value}>
              {w.label}
            </option>
          ))}
        </select>
        <div className="ml-auto flex flex-wrap gap-2">
          <button
            type="button"
            onClick={exportCsv}
            disabled={!analyticsLive || !hasSeriesData}
            title={!hasSeriesData ? "No timeseries rows to export" : undefined}
            className="px-4 py-2 rounded-lg text-xs font-semibold transition-all disabled:opacity-40"
            style={{
              background: "rgba(14,165,233,0.12)",
              color: "#7DD3FC",
              border: "1px solid rgba(14,165,233,0.35)",
            }}
          >
            Export timeseries CSV
          </button>
          <button
            type="button"
            onClick={exportHostsCsv}
            disabled={hosts.length === 0}
            title={hosts.length === 0 ? "No referrer hosts in window" : undefined}
            className="px-4 py-2 rounded-lg text-xs font-semibold transition-all disabled:opacity-40"
            style={{
              background: "rgba(14,165,233,0.12)",
              color: "#7DD3FC",
              border: "1px solid rgba(14,165,233,0.35)",
            }}
          >
            Export hosts CSV
          </button>
        </div>
      </div>

      {loading ? (
        <p className="text-sm text-white/40 py-8 text-center">Loading analytics…</p>
      ) : (
        <>
          <div
            className="rounded-xl px-5 py-4 mb-6 flex flex-wrap items-end justify-between gap-4"
            style={{
              background: "rgba(14,165,233,0.08)",
              border: "1px solid rgba(14,165,233,0.22)",
            }}
          >
            <div>
              <div className="text-[10px] uppercase tracking-wide mb-1" style={{ color: "rgba(125,211,252,0.7)" }}>
                {summaryLabel}
              </div>
              <div className="text-4xl font-black mono-data" style={{ color: "#E0F2FE" }}>
                {flags.summaryUnavailable ? "—" : hasAnyLoads ? totalLoads.toLocaleString() : "0"}
              </div>
              {!flags.summaryUnavailable && !hasAnyLoads && (
                <p className="text-[10px] mt-1 text-white/35">No embed loads recorded yet in this window.</p>
              )}
            </div>
            {periodTrend !== null && hasAnyLoads ? (
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-wide text-white/40">2nd half vs 1st half</div>
                <div
                  className={`text-lg font-bold mono-data ${periodTrend >= 0 ? "text-emerald-300" : "text-rose-300"}`}
                >
                  {periodTrend >= 0 ? "+" : ""}
                  {periodTrend}%
                </div>
              </div>
            ) : null}
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {rollup.map((r) => {
              const dimmed = widgetFilter !== "all" && widgetFilter !== r.id;
              return (
                <div
                  key={r.id}
                  className="rounded-xl px-5 py-4 transition-opacity"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(14,165,233,0.18)",
                    opacity: dimmed ? 0.45 : 1,
                  }}
                >
                  <div className="text-[10px] uppercase tracking-wide mb-1" style={{ color: "rgba(125,211,252,0.7)" }}>
                    {r.label}
                  </div>
                  <div className="text-3xl font-black mono-data" style={{ color: "#E0F2FE" }}>
                    {flags.summaryUnavailable ? "—" : r.loads > 0 ? r.loads : "0"}
                  </div>
                  <WidgetSparkline values={sparklineByWidget[r.id]} />
                  <div className="text-[10px] mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>
                    Total loads ({days}d)
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="rounded-xl overflow-hidden mb-10"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="px-5 py-4 flex flex-wrap items-center justify-between gap-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
                Referrer / host breakdown ({days}d)
              </span>
              <input
                type="search"
                value={hostQuery}
                onChange={(e) => setHostQuery(e.target.value)}
                placeholder="Filter hosts…"
                className="px-3 py-1.5 rounded-lg text-xs max-w-[200px]"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.75)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />
            </div>
            {flags.domainsUnavailable ? (
              <div className="px-5 py-10 text-center text-xs text-amber-200/80">
                Host breakdown requires Supabase + <code className="text-amber-100/90">embed_agg_by_referrer</code> migration.
              </div>
            ) : displayHosts.length === 0 ? (
              <div className="px-5 py-10 text-center text-xs text-white/35">
                No referrer hosts yet — embed loads appear here once widgets are embedded on external pages.
              </div>
            ) : (
              <ul className="divide-y divide-white/[0.06]">
                {displayHosts.map((h) => {
                  const pct = hostTotal > 0 ? (h.loads / hostTotal) * 100 : 0;
                  return (
                    <li key={h.host} className="px-5 py-3">
                      <div className="flex justify-between gap-3 text-sm mb-1.5">
                        <span className="mono-data text-white/80 truncate">{h.host}</span>
                        <span className="mono-data text-sky-300 shrink-0">
                          {h.loads}
                          <span className="text-white/35 ml-2">{pct.toFixed(1)}%</span>
                        </span>
                      </div>
                      <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-sky-500/70"
                          style={{ width: `${Math.max(pct, 2)}%` }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
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
                    <th
                      className="text-left px-5 py-3 text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      Date
                    </th>
                    {tableColumns.map((id) => (
                      <th
                        key={id}
                        className="text-left px-5 py-3 text-[10px] font-bold uppercase tracking-wider"
                        style={{ color: "rgba(255,255,255,0.45)" }}
                      >
                        {id === "pulse" ? "Pulse" : id === "ticker" ? "Ticker" : "Injury"}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {flags.timeseriesUnavailable ? (
                    <tr>
                      <td colSpan={tableColumns.length + 1} className="px-5 py-10 text-center text-xs text-amber-200/80">
                        Timeseries unavailable — configure Supabase server env.
                      </td>
                    </tr>
                  ) : series.length === 0 ? (
                    <tr>
                      <td
                        colSpan={tableColumns.length + 1}
                        className="px-5 py-10 text-center text-xs"
                        style={{ color: "rgba(255,255,255,0.35)" }}
                      >
                        No daily rows yet for this window. Loads will appear after embed traffic is recorded.
                      </td>
                    </tr>
                  ) : (
                    series.map((row) => (
                      <tr key={row.d} style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                        <td className="px-5 py-3 mono-data text-white/85">{row.d}</td>
                        {tableColumns.map((id) => (
                          <td key={id} className="px-5 py-3 mono-data" style={{ color: "#7DD3FC" }}>
                            {row[id]}
                          </td>
                        ))}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      <p className="mt-8 text-xs text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
        <a href="/widgets" className="text-sky-400 underline underline-offset-2">
          ← Back to widgets
        </a>
      </p>
    </ToolPageLayout>
  );
}
