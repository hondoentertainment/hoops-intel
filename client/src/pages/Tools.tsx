import { useMemo, useState } from "react";
import ToolPageLayout from "../components/ToolPageLayout";
import {
  DeskFilterChip,
  DeskLinkCard,
  DeskSearchField,
  EmptyState,
  EnhancedButton,
} from "../components/enhanced/EnhancedUi";
import {
  deskRailTools,
  publicToolsDirectory,
  TOOL_CATEGORY_ORDER,
  TOOL_CATEGORY_LABELS,
  type ToolCategory,
} from "../lib/siteNav";
import { lastUpdatedStamp } from "../lib/dataTrust";
import { POPULAR_SEARCH_DESTINATIONS } from "../lib/searchHistory";

const PUBLIC_TOOLS = publicToolsDirectory();
const FEATURED_TOOLS = deskRailTools();

const bySection = TOOL_CATEGORY_ORDER.reduce<Record<ToolCategory, typeof PUBLIC_TOOLS>>(
  (acc, cat) => {
    acc[cat] = PUBLIC_TOOLS.filter((t) => t.category === cat);
    return acc;
  },
  { play: [], desk: [], analysis: [], community: [], postseason: [], publishing: [] },
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

  const clearFilters = () => {
    setQuery("");
    setCategory("all");
  };

  return (
    <ToolPageLayout
      subtitle="TOOLS"
      sectionLabel="Feature directory"
      title="Every Hoops Intel tool"
      description="Daily desk and analysis tools. Search from any page, or press / to jump to a player, team, or story."
      heroMeta={lastUpdatedStamp()}
      maxWidth="xl"
      showRelated={false}
    >
      {category === "all" && !query.trim() ? (
        <section className="mb-8" aria-labelledby="tools-featured">
          <h2 id="tools-featured" className="enhanced-kicker mb-4">
            Featured through camp
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FEATURED_TOOLS.map((t) => (
              <li key={t.href}>
                <DeskLinkCard href={t.href} title={t.label} description={t.description} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="mb-4 flex flex-wrap gap-2">
        <DeskFilterChip active={category === "all"} onClick={() => setCategory("all")}>
          All
        </DeskFilterChip>
        {TOOL_CATEGORY_ORDER.map((cat) => (
          <DeskFilterChip key={cat} active={category === cat} onClick={() => setCategory(cat)}>
            {TOOL_CATEGORY_LABELS[cat]}
          </DeskFilterChip>
        ))}
      </div>

      <div className="mb-8">
        <DeskSearchField
          id="tools-filter"
          label="Filter tools"
          value={query}
          onChange={setQuery}
          placeholder="Filter by name or description…"
        />
        {query.trim() ? (
          <p className="text-xs mt-2" style={{ color: "var(--hi-text-secondary,#5c5c58)" }} role="status">
            {totalMatches === 0
              ? "No tools match — try Pulse or Injuries."
              : `${totalMatches} tool${totalMatches === 1 ? "" : "s"} found`}
          </p>
        ) : null}
      </div>

      {totalMatches === 0 ? (
        <div className="flex flex-col items-center gap-4">
          <EmptyState
            kicker="Directory"
            title="No tools match"
            body="Try a shorter keyword or browse popular destinations."
            pill="TRY AGAIN"
            pillTone="accent"
          />
          <div className="flex flex-wrap justify-center gap-2">
            {POPULAR_SEARCH_DESTINATIONS.map((d) => (
              <DeskFilterChip key={d.href} href={d.href}>
                {d.label}
              </DeskFilterChip>
            ))}
          </div>
          <EnhancedButton variant="ghost" onClick={clearFilters}>
            Clear filters
          </EnhancedButton>
        </div>
      ) : (
        <div className="space-y-10">
          {TOOL_CATEGORY_ORDER.map((cat) => {
            const items = filtered[cat];
            if (items.length === 0) return null;
            return (
              <section key={cat} aria-labelledby={`tools-cat-${cat}`}>
                <h2 id={`tools-cat-${cat}`} className="enhanced-kicker mb-4">
                  {TOOL_CATEGORY_LABELS[cat]}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {items.map((t) => (
                    <li key={t.href + t.label}>
                      <DeskLinkCard href={t.href} title={t.label} description={t.description} />
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
