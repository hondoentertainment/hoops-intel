import { useMemo, useState } from "react";
import ToolPageLayout from "../components/ToolPageLayout";
import PlayerAvatar from "../components/PlayerAvatar";
import TeamLogo from "../components/TeamLogo";
import {
  DeskFilterChip,
  DeskSearchField,
  EmptyState,
  EnhancedButton,
  InjuryChip,
} from "../components/enhanced/EnhancedUi";
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
      sectionLabel="Player index"
      title="Browse player profiles"
      description={
        pulseCount > 0
          ? `Search the Pulse Index and archive coverage so sitemap player pages are one click from the desk. ${pulseCount} on today’s Pulse · ${catalog.length} indexable profiles.`
          : "Search the Pulse Index and archive coverage so sitemap player pages are one click from the desk."
      }
      maxWidth="xl"
      showRelated={false}
      breadcrumbs={[
        { label: "Today's desk", href: "/" },
        { label: "Tools", href: "/tools" },
        { label: "Players" },
      ]}
    >
      <div className="mb-4 flex flex-wrap gap-2">
        {FILTERS.map((tab) => (
          <DeskFilterChip key={tab.key} active={filter === tab.key} onClick={() => setFilter(tab.key)}>
            {tab.label}
          </DeskFilterChip>
        ))}
      </div>

      <div className="mb-6">
        <DeskSearchField
          id="players-filter"
          label="Search players"
          value={query}
          onChange={setQuery}
          placeholder="Search by name or team…"
        />
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
                      <span className="mono-data text-sm font-bold" style={{ color: "var(--hi-accent,#1ec8f5)" }}>
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
