import { useMemo, useState } from "react";
import ToolPageLayout from "../components/ToolPageLayout";
import PlayerAvatar from "../components/PlayerAvatar";
import TeamLogo from "../components/TeamLogo";
import { EmptyState, EnhancedButton, InjuryChip } from "../components/enhanced/EnhancedUi";
import { getTeamColor } from "../lib/teamColors";
import {
  filterBrowsePlayers,
  listBrowsePlayers,
  type PlayerBrowseFilter,
} from "../lib/playersIndex";

const FILTERS: { key: PlayerBrowseFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "pulse", label: "On Pulse" },
  { key: "archive", label: "Archive" },
];

export default function Players() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<PlayerBrowseFilter>("all");
  const catalog = useMemo(() => listBrowsePlayers(), []);
  const rows = useMemo(() => filterBrowsePlayers(catalog, query, filter), [catalog, query, filter]);
  const pulseCount = catalog.filter((p) => p.pulseRank != null).length;

  return (
    <ToolPageLayout
      subtitle="PLAYERS"
      maxWidth="xl"
      showRelated={false}
      breadcrumbs={[
        { label: "Today's desk", href: "/" },
        { label: "Tools", href: "/tools" },
        { label: "Players" },
      ]}
    >
      <p className="enhanced-kicker mb-2">Player index</p>
      <h1 className="editorial-heading text-[var(--hi-text,#f2f5fa)] text-[32px] leading-9 mb-2 max-md:text-[1.5rem] max-md:leading-8">
        Browse player profiles
      </h1>
      <p className="mobile-readable mb-6 max-w-2xl" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
        Search the Pulse Index and archive coverage so sitemap player pages are one click from the desk.
        {pulseCount > 0 ? ` ${pulseCount} on today’s Pulse · ${catalog.length} indexable profiles.` : ""}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {FILTERS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setFilter(tab.key)}
            className="desk-section-pill"
            data-active={filter === tab.key ? "true" : undefined}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <label htmlFor="players-filter" className="sr-only">
          Search players
        </label>
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="2"
            aria-hidden
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            id="players-filter"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or team…"
            className="w-full min-h-[48px] pl-10 pr-4 py-2 rounded-xl text-base sm:text-sm bg-white/5 text-white border border-white/10 outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
          />
        </div>
        {query.trim() ? (
          <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.45)" }} role="status">
            {rows.length === 0
              ? "No players match — try a last name or a 3-letter team."
              : `${rows.length} player${rows.length === 1 ? "" : "s"} found`}
          </p>
        ) : null}
      </div>

      {rows.length === 0 ? (
        <EmptyState
          kicker="Players"
          title="No matches"
          body="Clear the search or switch to All to see Pulse and archive profiles."
          pill="TRY AGAIN"
          pillTone="accent"
        />
      ) : (
        <ul className="flex flex-col gap-2">
          {rows.map((player) => {
            const team = player.teams[0];
            return (
              <li key={player.slug}>
                <a
                  href={`/player/${player.slug}`}
                  className="enhanced-card flex items-center gap-3 p-3.5 min-h-11 min-w-0 overflow-hidden hover:bg-white/[0.04]"
                >
                  <PlayerAvatar name={player.name} team={team} size={44} />
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-semibold text-[var(--hi-text,#f2f5fa)] truncate">{player.name}</p>
                    <p className="text-xs truncate" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
                      {player.keyStats || player.label}
                      {player.mentions ? ` · ${player.mentions} mention${player.mentions === 1 ? "" : "s"}` : ""}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {player.injuryStatus ? <InjuryChip status={player.injuryStatus} /> : null}
                    {player.status !== "active" ? (
                      <span
                        className="text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded"
                        style={{
                          background: player.status === "retired" ? "rgba(245,158,11,0.12)" : "rgba(255,255,255,0.06)",
                          color: player.status === "retired" ? "#F59E0B" : "rgba(255,255,255,0.5)",
                        }}
                      >
                        {player.label}
                      </span>
                    ) : null}
                    {player.teams.map((abbr) => (
                      <span
                        key={abbr}
                        className="inline-flex items-center gap-1 text-[10px] font-bold"
                        style={{ color: getTeamColor(abbr) }}
                      >
                        <TeamLogo team={abbr} size={16} />
                        {abbr}
                      </span>
                    ))}
                    {player.pulseRank != null ? (
                      <span className="mono-data text-sm font-bold" style={{ color: "#0EA5E9" }}>
                        #{player.pulseRank}
                      </span>
                    ) : null}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 mt-8">
        <EnhancedButton href="/compare-players">Compare Pulse</EnhancedButton>
        <EnhancedButton href="/#pulse-index" variant="ghost">
          Today’s Pulse
        </EnhancedButton>
      </div>
    </ToolPageLayout>
  );
}
