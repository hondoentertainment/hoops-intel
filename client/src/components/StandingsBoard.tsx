import { useState } from "react";
import TeamLogo from "./TeamLogo";
import {
  cutoffAfter,
  defaultSortDirection,
  sortStandings,
  zoneLabel,
  type NbaStandings,
  type SortDirection,
  type StandingRow,
  type StandingSortKey,
  type StandingZone,
} from "../lib/standings";

const COLUMNS: { key: StandingSortKey | "last10" | "home" | "away"; label: string; sortable: boolean; title: string }[] = [
  { key: "rank", label: "#", sortable: true, title: "Playoff seed" },
  { key: "wins", label: "W", sortable: true, title: "Wins" },
  { key: "losses", label: "L", sortable: true, title: "Losses" },
  { key: "pct", label: "PCT", sortable: true, title: "Win percentage" },
  { key: "gb", label: "GB", sortable: true, title: "Games behind the conference leader" },
  { key: "streak", label: "STRK", sortable: true, title: "Current streak" },
  { key: "last10", label: "L10", sortable: false, title: "Record over the last 10 games" },
  { key: "home", label: "HOME", sortable: false, title: "Home record" },
  { key: "away", label: "AWAY", sortable: false, title: "Road record" },
];

const ZONE_RULE: Record<StandingZone, string> = {
  playoff: "var(--hi-success, #1B7A45)",
  "play-in": "var(--hi-warn, #7C2D12)",
  out: "var(--hi-control-border, #827C70)",
};

const ZONE_WASH: Record<StandingZone, string> = {
  playoff: "var(--hi-surface, #FFFFFF)",
  "play-in": "var(--hi-brand-soft, #F8E6E8)",
  out: "var(--hi-surface-2, #EFECE4)",
};

function formatUpdated(fetchedAt: number): string {
  return new Date(fetchedAt).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
}

function StandingsNotice({
  title,
  body,
  onRetry,
}: {
  title: string;
  body: string;
  onRetry?: () => void;
}) {
  return (
    <div
      role="alert"
      className="rounded-2xl border p-4"
      style={{ background: "var(--hi-surface, #FFFFFF)", borderColor: "var(--hi-control-border, #827C70)" }}
    >
      <p className="text-sm font-semibold" style={{ color: "var(--hi-text, #14120B)" }}>
        {title}
      </p>
      <p className="text-sm mt-1 max-w-2xl" style={{ color: "var(--hi-muted, #686359)" }}>
        {body}
      </p>
      {onRetry ? (
        <button
          type="button"
          onClick={onRetry}
          className="mt-3 inline-flex items-center min-h-11 px-4 rounded-full text-sm font-semibold"
          style={{ background: "var(--hi-cta, #14120B)", color: "var(--hi-cta-ink, #F6F4EF)" }}
        >
          Retry
        </button>
      ) : null}
    </div>
  );
}

function SortButton({
  label,
  title,
  active,
  direction,
  onClick,
}: {
  label: string;
  title: string;
  active: boolean;
  direction: SortDirection;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className="section-label min-h-11 min-w-11 px-1 inline-flex items-center justify-center rounded-lg focus-visible:outline focus-visible:ring-2"
      style={{ outlineColor: "var(--hi-focus, #1D4E89)" }}
      aria-pressed={active}
    >
      {label}
      {active ? (direction === "asc" ? " ↑" : " ↓") : ""}
    </button>
  );
}

function ConferenceTable({
  title,
  rows,
  sortKey,
  direction,
  onSort,
  tableId,
}: {
  title: string;
  rows: StandingRow[];
  sortKey: StandingSortKey;
  direction: SortDirection;
  onSort: (key: StandingSortKey) => void;
  tableId: string;
}) {
  const ordered = sortStandings(rows, sortKey, direction);
  return (
    <div id={tableId} className="min-w-0">
      <h3 className="editorial-heading text-xl mb-3" style={{ color: "var(--hi-text, #14120B)" }}>
        {title}
      </h3>
      <div
        className="overflow-x-auto rounded-2xl border"
        style={{ borderColor: "var(--hi-control-border, #827C70)", background: "var(--hi-surface, #FFFFFF)" }}
      >
        <table className="w-full text-sm border-collapse">
          <caption className="sr-only">
            {title}. Seeds 1 through 6 are playoff berths, 7 through 10 are the play-in, and 11 through 15 are out.
          </caption>
          <thead>
            <tr style={{ background: "var(--hi-surface-2, #EFECE4)" }}>
              <th scope="col" aria-sort={sortKey === "rank" ? (direction === "asc" ? "ascending" : "descending") : "none"} className="sticky left-0 z-30 w-14 min-w-14 text-left" style={{ background: "var(--hi-surface-2, #EFECE4)" }}>
                <SortButton label="#" title="Playoff seed" active={sortKey === "rank"} direction={direction} onClick={() => onSort("rank")} />
              </th>
              <th scope="col" className="sticky left-14 z-20 text-left px-2 py-2 section-label" style={{ background: "var(--hi-surface-2, #EFECE4)" }}>
                Team
              </th>
              {COLUMNS.slice(1).map((column) => (
                <th
                  key={column.label}
                  scope="col"
                  aria-sort={
                    column.sortable && sortKey === column.key
                      ? direction === "asc"
                        ? "ascending"
                        : "descending"
                      : undefined
                  }
                  className="text-center"
                >
                  {column.sortable && column.key !== "last10" && column.key !== "home" && column.key !== "away" ? (
                    <SortButton
                      label={column.label}
                      title={column.title}
                      active={sortKey === column.key}
                      direction={direction}
                      onClick={() => onSort(column.key as StandingSortKey)}
                    />
                  ) : (
                    <span className="section-label inline-flex items-center justify-center min-h-11 px-2" title={column.title}>
                      {column.label}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ordered.map((row) => {
              const cut = cutoffAfter(row, sortKey, direction);
              return (
                <ConferenceRows key={row.team} row={row} cut={cut} />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ConferenceRows({ row, cut }: { row: StandingRow; cut: "play-in" | "out" | null }) {
  const wash = ZONE_WASH[row.zone];
  return (
    <>
      <tr data-testid="standings-row" data-team={row.team} data-zone={row.zone} className="border-t" style={{ borderColor: "var(--hi-hairline, #E4E0D6)", background: wash }}>
        <td className="sticky left-0 z-20 w-14 min-w-14 p-0 mono-data text-center" style={{ background: wash, color: "var(--hi-text, #14120B)", boxShadow: `inset 3px 0 0 ${ZONE_RULE[row.zone]}` }}>
          <span className="inline-flex items-center justify-center min-h-11 w-14">{row.seed}</span>
        </td>
        <th scope="row" className="sticky left-14 z-10 text-left font-normal" style={{ background: wash }}>
          <a
            href={`/team/${row.team.toLowerCase()}`}
            className="flex items-center gap-2 min-h-11 px-2 underline-offset-2 hover:underline focus-visible:outline focus-visible:ring-2 rounded-lg"
            style={{ color: "var(--hi-text, #14120B)", outlineColor: "var(--hi-focus, #1D4E89)" }}
          >
            <TeamLogo team={row.team} size={24} />
            <span className="whitespace-nowrap">
              <span className="font-semibold hidden sm:inline">{row.shortName}</span>
              <span
                className="mono-data text-xs sm:font-normal font-semibold"
                style={{ marginLeft: 8, color: "var(--hi-muted, #686359)" }}
              >
                <span className="sm:hidden" style={{ color: "var(--hi-text, #14120B)" }}>
                  {row.team}
                </span>
                <span className="hidden sm:inline">{row.team}</span>
              </span>
            </span>
          </a>
        </th>
        <td className="text-center mono-data px-2" style={{ color: "var(--hi-text, #14120B)" }}>{row.wins}</td>
        <td className="text-center mono-data px-2" style={{ color: "var(--hi-text, #14120B)" }}>{row.losses}</td>
        <td className="text-center mono-data px-2" style={{ color: "var(--hi-text, #14120B)" }}>{row.pct}</td>
        <td className="text-center mono-data px-2" style={{ color: "var(--hi-text, #14120B)" }}>{row.gb}</td>
        <td className="text-center px-2">
          {row.streak === "—" ? (
            <span className="mono-data" style={{ color: "var(--hi-muted, #686359)" }}>—</span>
          ) : (
            <span
              className="inline-flex items-center justify-center min-h-7 px-1.5 rounded mono-data text-xs font-semibold"
              style={
                row.streak.startsWith("W")
                  ? { background: "#E5F4EC", color: "var(--hi-success, #1B7A45)" }
                  : { background: "#F8E8E8", color: "var(--hi-danger, #9B2C2C)" }
              }
            >
              {row.streak}
            </span>
          )}
        </td>
        <td className="text-center mono-data px-2" style={{ color: "var(--hi-text, #14120B)" }}>{row.last10}</td>
        <td className="text-center mono-data px-2" style={{ color: "var(--hi-text, #14120B)" }}>{row.home}</td>
        <td className="text-center mono-data px-2" style={{ color: "var(--hi-text, #14120B)" }}>{row.away}</td>
      </tr>
      {cut ? (
        <tr>
          <td
            colSpan={10}
            className="text-left px-3 py-2 text-xs font-semibold"
            style={{
              background: "var(--hi-surface-2, #EFECE4)",
              color: "var(--hi-text, #14120B)",
              borderTop: "2px solid var(--hi-control-border, #827C70)",
            }}
          >
            {cut === "play-in" ? "Play-in · seeds 7–10" : "Out · seeds 11–15"}
          </td>
        </tr>
      ) : null}
    </>
  );
}

export default function StandingsBoard({
  data,
  loading,
  error,
  onRetry,
  framed = false,
}: {
  data: NbaStandings | null;
  loading: boolean;
  error: string | null;
  onRetry: () => void;
  framed?: boolean;
}) {
  const [sortKey, setSortKey] = useState<StandingSortKey>("rank");
  const [direction, setDirection] = useState<SortDirection>("asc");

  const onSort = (key: StandingSortKey) => {
    if (sortKey === key) {
      setDirection((current) => (current === "asc" ? "desc" : "asc"));
      return;
    }
    setSortKey(key);
    setDirection(defaultSortDirection(key));
  };

  const headingId = framed ? "standings-heading" : undefined;

  return (
    <div data-testid="standings-board" className="min-w-0 max-w-full">
      {framed ? (
        <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="enhanced-kicker mb-2">Conference standings</p>
            <h2 id={headingId} className="editorial-heading text-2xl" style={{ color: "var(--hi-text, #14120B)" }}>
              Standings
            </h2>
          </div>
          <a
            href="/standings"
            className="inline-flex items-center min-h-11 text-sm font-semibold underline-offset-2 hover:underline"
            style={{ color: "var(--hi-brand, #C8102E)" }}
          >
            Open full standings page
          </a>
        </div>
      ) : null}

      <p className="text-sm mb-4 max-w-3xl" style={{ color: "var(--hi-muted, #686359)" }}>
        {data
          ? `${data.seasonLabel} records from ESPN. Seeds 1–6 are playoff berths, 7–10 are the play-in, and 11–15 are out. Updated ${formatUpdated(data.fetchedAt)}.`
          : "Both conferences, all 30 teams. Seeds 1–6 are playoff berths, 7–10 are the play-in, and 11–15 are out."}
      </p>

      <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-5 text-sm" aria-label="Seed cutoffs">
        {(["playoff", "play-in", "out"] as StandingZone[]).map((zone) => (
          <li key={zone} className="inline-flex items-center gap-2 min-h-11" style={{ color: "var(--hi-text, #14120B)" }}>
            <span aria-hidden className="inline-block w-3 h-3 rounded-sm" style={{ background: ZONE_RULE[zone] }} />
            <span>
              {zoneLabel(zone)}
              {zone === "playoff" ? " · 1–6" : zone === "play-in" ? " · 7–10" : " · 11–15"}
            </span>
          </li>
        ))}
      </ul>

      {loading && !data ? (
        <p role="status" className="text-sm mb-4" style={{ color: "var(--hi-muted, #686359)" }}>
          Loading the league table from ESPN.
        </p>
      ) : null}

      {error && !data ? (
        <StandingsNotice
          title="Live standings are unavailable"
          body="ESPN's standings feed did not return a complete 30-team table. This board stays empty instead of showing a guessed or edition record."
          onRetry={onRetry}
        />
      ) : null}

      {error && data ? (
        <div className="mb-4">
          <StandingsNotice
            title="Couldn't refresh standings"
            body={`${error} The table below is the last complete ESPN table from this visit.`}
            onRetry={onRetry}
          />
        </div>
      ) : null}

      {data ? (
        <>
          <nav aria-label="Conferences" className="flex gap-2 mb-4">
            <a href="#standings-east" className="inline-flex items-center min-h-11 px-4 rounded-full border text-sm font-semibold" style={{ borderColor: "var(--hi-control-border, #827C70)", color: "var(--hi-text, #14120B)" }}>
              East
            </a>
            <a href="#standings-west" className="inline-flex items-center min-h-11 px-4 rounded-full border text-sm font-semibold" style={{ borderColor: "var(--hi-control-border, #827C70)", color: "var(--hi-text, #14120B)" }}>
              West
            </a>
          </nav>
          <div className="grid grid-cols-1 gap-8">
            <ConferenceTable title="Eastern Conference" rows={data.east} sortKey={sortKey} direction={direction} onSort={onSort} tableId="standings-east" />
            <ConferenceTable title="Western Conference" rows={data.west} sortKey={sortKey} direction={direction} onSort={onSort} tableId="standings-west" />
          </div>
          <p className="text-xs mt-4" style={{ color: "var(--hi-muted, #686359)" }}>
            Swipe the table for streak, last 10, home, and away.{" "}
            <a href="https://www.espn.com/nba/standings" className="underline underline-offset-2" style={{ color: "var(--hi-accent-text, #1D4E89)" }} rel="noopener noreferrer" target="_blank">
              ESPN standings
            </a>
          </p>
        </>
      ) : null}
    </div>
  );
}
