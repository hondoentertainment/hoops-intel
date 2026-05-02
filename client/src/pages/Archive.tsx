import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import { archiveEditions } from "../lib/archiveData";
import { editionSearchHaystack } from "../lib/archiveSearch";

// ═══════════════════════════════════════════════════════════
// ARCHIVE SEARCH — Filter and search past editions
// ═══════════════════════════════════════════════════════════

function matchesSearch(edition: Record<string, unknown>, query: string): boolean {
  if (!query.trim()) return true;
  const q = query.toLowerCase().trim();
  const hay = editionSearchHaystack(edition);
  return hay.includes(q);
}

function ArchiveCard({ edition }: { edition: any }) {
  return (
    <div className="glass-card rounded-lg p-5 transition-all hover:border-sky-500/30">
      <div className="flex items-center justify-between mb-3">
        <div className="section-label">{edition.displayDate}</div>
        <div
          className="mono-data text-xs px-2 py-0.5 rounded"
          style={{
            background: "rgba(14,165,233,0.1)",
            color: "#0EA5E9",
          }}
        >
          {edition.gamesCount} GAMES
        </div>
      </div>
      <h3 className="display-heading text-white text-lg mb-2">
        {edition.headline}
      </h3>
      <p
        className="text-sm mb-3"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        {edition.subheadline}
      </p>
      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: "rgba(255,255,255,0.65)" }}
      >
        {edition.topStory}
      </p>
      <div className="flex items-center gap-3 mb-3">
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          <span
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            TOP PLAYER
          </span>
          <span className="text-xs font-semibold text-white">
            {edition.topPlayer}
          </span>
          <span
            className="mono-data text-xs"
            style={{ color: "#10B981" }}
          >
            {edition.topStatLine}
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {edition.tags.map((tag: string) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded"
            style={{
              background: "rgba(14,165,233,0.08)",
              color: "rgba(14,165,233,0.7)",
              border: "1px solid rgba(14,165,233,0.15)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// ARCHIVE PAGE — Main export
// ═══════════════════════════════════════════════════════════

const PAGE_SIZE = 12;

export default function Archive() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const filtered = archiveEditions.filter((e: any) => matchesSearch(e, search));
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  // Reset to page 1 when search changes
  const handleSearch = (val: string) => {
    setSearch(val);
    setPage(1);
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="ARCHIVE" />

      {/* Search */}
      <div className="container py-8">
        <div className="section-label mb-2">PAST EDITIONS</div>
        <h1 className="display-heading text-white text-3xl mb-6">Archive</h1>
        <div className="mb-6">
          <label htmlFor="archive-search" className="sr-only">
          Search editions
        </label>
        <input
            id="archive-search"
            type="search"
            placeholder="Search players, teams, stories..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2.5 rounded-lg text-sm outline-none"
            style={{
              background: "rgba(255,255,255,0.05)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          />
        </div>
        <div
          className="text-xs mb-4"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          {filtered.length} edition{filtered.length !== 1 ? "s" : ""} found
          {totalPages > 1 && ` · Page ${currentPage} of ${totalPages}`}
        </div>

        {/* Edition Cards */}
        <div className="space-y-4">
          {paged.map((edition: any) => (
            <ArchiveCard key={edition.id} edition={edition} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div
            className="text-center py-12 text-sm"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            No editions match your search.
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
              className="px-3 py-1.5 rounded text-xs font-medium transition-colors"
              style={{
                background: currentPage <= 1 ? "rgba(255,255,255,0.03)" : "rgba(14,165,233,0.1)",
                color: currentPage <= 1 ? "rgba(255,255,255,0.2)" : "#0EA5E9",
                cursor: currentPage <= 1 ? "default" : "pointer",
              }}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 2)
              .reduce<(number | "...")[]>((acc, p, idx, arr) => {
                if (idx > 0 && p - (arr[idx - 1] ?? 0) > 1) acc.push("...");
                acc.push(p);
                return acc;
              }, [])
              .map((p, i) =>
                p === "..." ? (
                  <span key={`ellipsis-${i}`} className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>...</span>
                ) : (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className="w-8 h-8 rounded text-xs font-medium transition-colors"
                    style={{
                      background: p === currentPage ? "#0EA5E9" : "rgba(255,255,255,0.05)",
                      color: p === currentPage ? "white" : "rgba(255,255,255,0.5)",
                    }}
                  >
                    {p}
                  </button>
                )
              )}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage >= totalPages}
              className="px-3 py-1.5 rounded text-xs font-medium transition-colors"
              style={{
                background: currentPage >= totalPages ? "rgba(255,255,255,0.03)" : "rgba(14,165,233,0.1)",
                color: currentPage >= totalPages ? "rgba(255,255,255,0.2)" : "#0EA5E9",
                cursor: currentPage >= totalPages ? "default" : "pointer",
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
