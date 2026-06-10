import { useMemo, useState } from "react";
import ToolPageLayout from "../components/ToolPageLayout";
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
    <article className="glass-card archive-card rounded-lg p-5">
      <div className="flex items-center justify-between mb-3 gap-2">
        <div className="section-label">{displayDate}</div>
        <div className="mono-data text-xs px-2 py-0.5 rounded shrink-0" style={{ background: "rgba(14,165,233,0.1)", color: "#0EA5E9" }}>
          {gamesCount} {gamesCount === 1 ? "GAME" : "GAMES"}
        </div>
      </div>
      <h2 className="display-heading text-white text-lg mb-2">{headline}</h2>
      {subheadline ? (
        <p className="text-sm mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>{subheadline}</p>
      ) : null}
      <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>{edition.topStory}</p>
      {topPlayer ? (
        <p className="text-xs mb-4">
          <span style={{ color: "rgba(255,255,255,0.45)" }}>Top performer: </span>
          <a
            href={`/player/${slugify(topPlayer)}`}
            className="font-semibold text-sky-400 hover:text-sky-300"
          >
            {topPlayer}
          </a>
          {edition.topStatLine ? (
            <span className="mono-data ml-2" style={{ color: "rgba(255,255,255,0.45)" }}>
              {edition.topStatLine}
            </span>
          ) : null}
        </p>
      ) : null}
      <div className="flex flex-wrap gap-1.5">
        {(edition.tags || []).map((tag: string) => (
          <span key={tag} className="text-xs px-2 py-0.5 rounded" style={{ background: "rgba(14,165,233,0.08)", color: "rgba(14,165,233,0.7)", border: "1px solid rgba(14,165,233,0.15)" }}>
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
      sectionLabel="PAST EDITIONS"
      title="Archive"
      showRelated={false}
    >
        <div className="mb-4 flex flex-wrap gap-2">
          <button type="button" className="desk-section-pill" data-active={!tag ? "true" : undefined} onClick={() => { setTag(""); setPage(1); }}>
            All topics
          </button>
          {ALL_TAGS.map((t) => (
            <button
              key={t}
              type="button"
              className="desk-section-pill"
              data-active={tag === t ? "true" : undefined}
              onClick={() => { setTag(t === tag ? "" : t); setPage(1); }}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div>
            <label htmlFor="archive-search" className="sr-only">Search editions</label>
            <input
              id="archive-search"
              type="search"
              placeholder="Search players, teams, stories..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full min-h-[48px] px-4 py-2.5 rounded-lg text-base sm:text-sm outline-none bg-white/5 text-white border border-white/10 focus-visible:ring-2 focus-visible:ring-sky-500/50"
            />
          </div>
          <div>
            <label htmlFor="archive-month" className="sr-only">Filter by month</label>
            <select
              id="archive-month"
              value={month}
              onChange={(e) => { setMonth(e.target.value); setPage(1); }}
              className="w-full min-h-[48px] px-4 py-2.5 rounded-lg text-base sm:text-sm outline-none bg-white/5 text-white border border-white/10"
            >
              <option value="">All months</option>
              {ALL_MONTHS.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
          {filtered.length} edition{filtered.length !== 1 ? "s" : ""} found
          {totalPages > 1 && ` · Page ${currentPage} of ${totalPages}`}
        </div>

        <div className="space-y-4">
          {paged.map((edition: any) => (
            <ArchiveCard key={edition.id} edition={edition} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            No editions match. <button type="button" className="text-sky-400 underline" onClick={() => { setSearch(""); setTag(""); setMonth(""); }}>Clear filters</button>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
              className="px-3 py-1.5 rounded text-xs font-medium min-h-[44px]"
              style={{ background: currentPage <= 1 ? "rgba(255,255,255,0.03)" : "rgba(14,165,233,0.1)", color: currentPage <= 1 ? "rgba(255,255,255,0.2)" : "#0EA5E9" }}
            >
              Previous
            </button>
            <span className="text-xs mono-data" style={{ color: "rgba(255,255,255,0.45)" }}>{currentPage} / {totalPages}</span>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage >= totalPages}
              className="px-3 py-1.5 rounded text-xs font-medium min-h-[44px]"
              style={{ background: currentPage >= totalPages ? "rgba(255,255,255,0.03)" : "rgba(14,165,233,0.1)", color: currentPage >= totalPages ? "rgba(255,255,255,0.2)" : "#0EA5E9" }}
            >
              Next
            </button>
          </div>
        )}
    </ToolPageLayout>
  );
}
