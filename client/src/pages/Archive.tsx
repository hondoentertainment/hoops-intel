import { useMemo, useState } from "react";
import ToolPageLayout from "../components/ToolPageLayout";
import { DeskFilterChip, DeskSearchField, EmptyState, EnhancedButton } from "../components/enhanced/EnhancedUi";
import { archiveEditions } from "../lib/archiveData";
import { editionSearchHaystack } from "../lib/archiveSearch";
import { slugify } from "../lib/searchUtils";

function matchesSearch(edition: Record<string, unknown>, query: string): boolean {
  if (!query.trim()) return true;
  const q = query.toLowerCase().trim();
  return editionSearchHaystack(edition).includes(q);
}

function matchesTag(edition: any, tag: string): boolean {
  if (!tag) return true;
  return (edition.tags || []).some((t: string) => t.toLowerCase() === tag.toLowerCase());
}

function matchesMonth(edition: any, month: string): boolean {
  if (!month) return true;
  return String(edition.date || "").startsWith(month);
}

function ArchiveCard({ edition }: { edition: any }) {
  const topPlayer = edition.topPlayer as string | undefined;
  const displayDate = edition.displayDate || edition.date || "Archive edition";
  const gamesCount = edition.gamesCount ?? edition.gamesPlayed ?? 0;
  const headline = edition.headline || edition.subheadline || "Edition recap";
  const subheadline = edition.headline ? edition.subheadline : undefined;
  return (
    <article className="enhanced-card archive-card p-5 min-w-0">
      <div className="flex items-center justify-between mb-3 gap-2 min-w-0">
        <p className="enhanced-kicker hi-title">{displayDate}</p>
        <span className="desk-chip shrink-0" style={{ background: "rgba(142,200,240,0.14)", color: "var(--hi-accent-text,#146a8c)" }}>
          {gamesCount} {gamesCount === 1 ? "game" : "games"}
        </span>
      </div>
      <h2 className="editorial-heading text-[var(--hi-text,#0a0a0a)] text-lg mb-2">{headline}</h2>
      {subheadline ? (
        <p className="text-sm mb-3" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>{subheadline}</p>
      ) : null}
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--hi-text,#0a0a0a)" }}>{edition.topStory}</p>
      {topPlayer ? (
        <p className="text-xs mb-4">
          <span style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>Top performer: </span>
          <a
            href={`/player/${slugify(topPlayer)}`}
            className="font-semibold"
            style={{ color: "var(--hi-accent-text,#146a8c)" }}
          >
            {topPlayer}
          </a>
          {edition.topStatLine ? (
            <span className="mono-data ml-2" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
              {edition.topStatLine}
            </span>
          ) : null}
        </p>
      ) : null}
      <div className="flex flex-wrap gap-1.5">
        {(edition.tags || []).map((tag: string) => (
          <span key={tag} className="desk-chip" style={{ background: "rgba(142,200,240,0.1)", color: "var(--hi-accent-text,#146a8c)" }}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

const PAGE_SIZE = 12;

const ALL_TAGS = Array.from(
  new Set(archiveEditions.flatMap((e: any) => e.tags || [])),
).slice(0, 12);

const ALL_MONTHS = Array.from(
  new Set(archiveEditions.map((e: any) => String(e.date || "").slice(0, 7)).filter(Boolean)),
).sort().reverse();

export default function Archive() {
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("");
  const [month, setMonth] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => archiveEditions.filter((e: any) => matchesSearch(e, search) && matchesTag(e, tag) && matchesMonth(e, month)),
    [search, tag, month],
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handleSearch = (val: string) => {
    setSearch(val);
    setPage(1);
  };

  return (
    <ToolPageLayout
      subtitle="ARCHIVE"
      sectionLabel="Past editions"
      title="Archive"
      description="Every morning brief the desk has published — search by topic, month, or player."
      showRelated={false}
    >
        <div className="mb-4 flex flex-wrap gap-2">
          <DeskFilterChip active={!tag} onClick={() => { setTag(""); setPage(1); }}>
            All topics
          </DeskFilterChip>
          {ALL_TAGS.map((t) => (
            <DeskFilterChip
              key={t}
              active={tag === t}
              onClick={() => { setTag(t === tag ? "" : t); setPage(1); }}
            >
              {t}
            </DeskFilterChip>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <DeskSearchField
            id="archive-search"
            label="Search editions"
            value={search}
            onChange={handleSearch}
            placeholder="Search players, teams, stories..."
          />
          <div>
            <label htmlFor="archive-month" className="sr-only">Filter by month</label>
            <select
              id="archive-month"
              value={month}
              onChange={(e) => { setMonth(e.target.value); setPage(1); }}
              className="desk-field text-base sm:text-sm outline-none"
            >
              <option value="">All months</option>
              {ALL_MONTHS.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="text-xs mb-4" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
          {filtered.length} edition{filtered.length !== 1 ? "s" : ""} found
          {totalPages > 1 && ` · Page ${currentPage} of ${totalPages}`}
        </div>

        <div className="space-y-4">
          {paged.map((edition: any) => (
            <ArchiveCard key={edition.id} edition={edition} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center gap-4">
            <EmptyState
              kicker="Archive"
              title="No editions match"
              body="Clear the search or pick another topic to see past morning briefs."
              pill="TRY AGAIN"
              pillTone="accent"
            />
            <EnhancedButton variant="ghost" onClick={() => { setSearch(""); setTag(""); setMonth(""); }}>
              Clear filters
            </EnhancedButton>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
              className="px-3 py-1.5 rounded text-xs font-medium min-h-[44px]"
              style={{ background: currentPage <= 1 ? "var(--hi-surface-2,#f3f3f0)" : "var(--hi-accent-soft,#d7eef9)", color: currentPage <= 1 ? "var(--hi-muted,#5c5c58)" : "var(--hi-accent-text,#146a8c)" }}
            >
              Previous
            </button>
            <span className="text-xs mono-data" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>{currentPage} / {totalPages}</span>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage >= totalPages}
              className="px-3 py-1.5 rounded text-xs font-medium min-h-[44px]"
              style={{ background: currentPage >= totalPages ? "var(--hi-surface-2,#f3f3f0)" : "var(--hi-accent-soft,#d7eef9)", color: currentPage >= totalPages ? "var(--hi-muted,#5c5c58)" : "var(--hi-accent-text,#146a8c)" }}
            >
              Next
            </button>
          </div>
        )}
    </ToolPageLayout>
  );
}
