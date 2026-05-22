import { useMemo, useState } from "react";
import ToolPageLayout from "../components/ToolPageLayout";
import {
  TOOLS_DIRECTORY,
  TOOL_CATEGORY_ORDER,
  TOOL_CATEGORY_LABELS,
  type ToolCategory,
} from "../lib/siteNav";
import { POPULAR_SEARCH_DESTINATIONS } from "../lib/searchHistory";

const bySection = TOOL_CATEGORY_ORDER.reduce<Record<ToolCategory, typeof TOOLS_DIRECTORY>>(
  (acc, cat) => {
    acc[cat] = TOOLS_DIRECTORY.filter((t) => t.category === cat);
    return acc;
  },
  { desk: [], postseason: [], analysis: [], community: [], publishing: [] },
);

export default function Tools() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ToolCategory | "all">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const next = { ...bySection };
    for (const cat of TOOL_CATEGORY_ORDER) {
      if (category !== "all" && category !== cat) {
        next[cat] = [];
        continue;
      }
      next[cat] = bySection[cat].filter(
        (t) => !q || t.label.toLowerCase().includes(q) || t.description.toLowerCase().includes(q),
      );
    }
    return next;
  }, [query, category]);

  const totalMatches = TOOL_CATEGORY_ORDER.reduce((n, cat) => n + filtered[cat].length, 0);

  return (
    <ToolPageLayout subtitle="TOOLS & LABS" maxWidth="xl" showRelated={false}>
        <p className="section-label mb-2">FEATURE DIRECTORY</p>
        <h1 className="display-heading text-2xl sm:text-3xl mb-4" style={{ color: "var(--hi-heading,#fff)" }}>
          Every Hoops Intel tool
        </h1>
        <p className="text-sm mb-6 max-w-2xl leading-relaxed" style={{ color: "var(--hi-muted,rgba(255,255,255,0.6))" }}>
          Jump straight to standings intel, simulations, embeddings, podcast mode, and the rest — same shell and search as the
          main desk (⌘K / Ctrl+K or press <kbd className="mono-data text-[10px] px-1 py-0.5 rounded bg-white/10">/</kbd>).
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory("all")}
            className="desk-section-pill"
            data-active={category === "all" ? "true" : undefined}
          >
            All
          </button>
          {TOOL_CATEGORY_ORDER.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className="desk-section-pill"
              data-active={category === cat ? "true" : undefined}
            >
              {TOOL_CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        <div className="mb-8">
          <label htmlFor="tools-filter" className="sr-only">
            Filter tools
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
              id="tools-filter"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter by name or description…"
              className="w-full min-h-[48px] pl-10 pr-4 py-2 rounded-xl text-base sm:text-sm bg-white/5 text-white border border-white/10 outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
            />
          </div>
          {query.trim() && (
            <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.45)" }} role="status">
              {totalMatches === 0 ? "No tools match — try Pulse or Injuries." : `${totalMatches} tool${totalMatches === 1 ? "" : "s"} found`}
            </p>
          )}
        </div>

        {totalMatches === 0 ? (
          <div className="rounded-xl p-6 border border-white/10 text-center">
            <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
              No tools match your filter. Try a shorter keyword or browse popular destinations.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {POPULAR_SEARCH_DESTINATIONS.map((d) => (
                <a key={d.href} href={d.href} className="desk-section-pill">
                  {d.label}
                </a>
              ))}
            </div>
            <button type="button" className="text-xs text-sky-400 underline" onClick={() => { setQuery(""); setCategory("all"); }}>
              Clear filters
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            {TOOL_CATEGORY_ORDER.map((cat) => {
              const items = filtered[cat];
              if (items.length === 0) return null;
              return (
                <section key={cat} aria-labelledby={`tools-cat-${cat}`}>
                  <h2 id={`tools-cat-${cat}`} className="section-label mb-4" style={{ color: "rgba(148,163,184,0.95)" }}>
                    {TOOL_CATEGORY_LABELS[cat]}
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {items.map((t) => (
                      <li key={t.href + t.label}>
                        <a
                          href={t.href}
                          className="glass-card block rounded-xl p-4 min-h-[4.75rem] transition-colors hover:border-sky-500/40 hover:bg-white/[0.05] outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50"
                        >
                          <span className="text-sm font-semibold text-[var(--hi-heading,#fff)]">{t.label}</span>
                          <p className="text-xs mt-1 leading-snug" style={{ color: "var(--hi-muted-sub,rgba(255,255,255,0.5))" }}>
                            {t.description}
                          </p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        )}
    </ToolPageLayout>
  );
}
