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

export default function EmbedPublisherStats() {
  const [days, setDays] = useState<DayOption>(7);
  const [widgetFilter, setWidgetFilter] = useState<WidgetFilter>("all");
  const [counts, setCounts] = useState<Record<string, unknown>>({});
  const [series, setSeries] = useState<TimeseriesRow[]>([]);
  const [flags, setFlags] = useState<{ unavailable?: boolean; error?: string }>({});
  const [hosts, setHosts] = useState<{ host: string; loads: number }[]>([]);

  useEffect(() => {
    let canceled = false;
    const q = `?days=${days}`;
    Promise.all([
      fetch(`/api/embed-analytics-summary${q}`).then((r) => r.json()),
      fetch(`/api/embed-analytics-timeseries${q}`).then((r) => r.json()),
      fetch(`/api/embed-analytics-domains${q}`).then((r) => r.json()),
    ])
      .then(([sum, ts, dom]) => {
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

  const chronSeries = useMemo(() => [...series].reverse(), [series]);

  const sparklineByWidget = useMemo(() => {
    const ids = ["pulse", "ticker", "injury"] as const;
    return Object.fromEntries(ids.map((id) => [id, chronSeries.map((r) => r[id])])) as Record<
      WidgetId,
      number[]
    >;
  }, [chronSeries]);

  const displayHosts = useMemo(() => hosts.slice(0, 15), [hosts]);

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
    const header = "host,loads\n";
    const body = hosts.map((h) => `${h.host},${h.loads}`).join("\n");
    return new Blob([header + body], { type: "text/csv;charset=utf-8" });
  }, [hosts]);

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
              className="px-4 py-2 rounded-lg text-xs font-semibold transition-all"
              style={{
                background: "rgba(14,165,233,0.12)",
                color: "#7DD3FC",
                border: "1px solid rgba(14,165,233,0.35)",
              }}
            >
              Export loads CSV
            </button>
            <button
              type="button"
              onClick={exportHostsCsv}
              disabled={hosts.length === 0}
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
              {totalLoads > 0 ? totalLoads.toLocaleString() : "—"}
            </div>
          </div>
          {periodTrend !== null && totalLoads > 0 ? (
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
                  {rollup.some((x) => x.loads > 0) ? r.loads : "—"}
                </div>
                <WidgetSparkline values={sparklineByWidget[r.id]} />
                <div className="text-[10px] mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Total loads ({days}d)
                </div>
              </div>
            );
          })}
        </div>

        {displayHosts.length > 0 && (
          <div
            className="rounded-xl overflow-hidden mb-10"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="px-5 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
                Top referrer hosts ({days}d)
              </span>
            </div>
            <ul className="divide-y divide-white/[0.06]">
              {displayHosts.map((h) => (
                <li key={h.host} className="px-5 py-3 flex justify-between gap-3 text-sm">
                  <span className="mono-data text-white/80 truncate">{h.host}</span>
                  <span className="mono-data text-sky-300 shrink-0">{h.loads}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

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
                {series.length === 0 ? (
                  <tr>
                    <td
                      colSpan={tableColumns.length + 1}
                      className="px-5 py-10 text-center text-xs"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      No rows yet for this window.
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

        <p className="mt-8 text-xs text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
          <a href="/widgets" className="text-sky-400 underline underline-offset-2">
            ← Back to widgets
          </a>
        </p>
    </ToolPageLayout>
  );
}
