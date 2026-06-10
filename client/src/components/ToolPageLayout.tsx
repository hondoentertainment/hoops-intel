import { type ReactNode } from "react";
import { useLocation } from "wouter";
import SiteHeader from "./SiteHeader";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import { relatedToolsForHref } from "../lib/siteNav";

const MAX_WIDTH: Record<string, string> = {
  md: "max-w-3xl",
  lg: "max-w-4xl",
  xl: "max-w-5xl",
  "2xl": "max-w-6xl",
  "4xl": "max-w-4xl",
  full: "max-w-[1200px]",
};

export type ToolPageLayoutProps = {
  subtitle?: string;
  brandTitle?: string;
  editionBadge?: string;
  headerToolbarExtra?: ReactNode;
  sectionLabel?: string;
  title?: string;
  description?: string;
  breadcrumbs?: Crumb[];
  relatedHref?: string;
  maxWidth?: keyof typeof MAX_WIDTH;
  showRelated?: boolean;
  showBreadcrumbs?: boolean;
  /** Skip container, breadcrumbs, and related sidebar — header + children only */
  contentOnly?: boolean;
  shellClassName?: string;
  children: ReactNode;
};

export default function ToolPageLayout({
  subtitle = "TOOLS & LABS",
  brandTitle = "HOOPS INTEL",
  editionBadge,
  headerToolbarExtra,
  sectionLabel,
  title,
  description,
  breadcrumbs,
  relatedHref,
  maxWidth = "full",
  showRelated = true,
  showBreadcrumbs = true,
  contentOnly = false,
  shellClassName = "",
  children,
}: ToolPageLayoutProps) {
  const [location] = useLocation();
  const href = relatedHref ?? location.split("?")[0];
  const related = showRelated ? relatedToolsForHref(href) : [];
  const widthClass = MAX_WIDTH[maxWidth] ?? MAX_WIDTH.full;

  const defaultCrumbs: Crumb[] = breadcrumbs ?? [
    { label: "Today's desk", href: "/" },
    { label: "Tools", href: "/tools" },
    ...(title ? [{ label: title }] : []),
  ];

  if (contentOnly) {
    return (
      <div
        className={`min-h-screen ${shellClassName}`.trim()}
        style={{ background: "var(--hi-bg-page, #050D1A)" }}
      >
        <SiteHeader
          subtitle={subtitle}
          brandTitle={brandTitle}
          editionBadge={editionBadge}
          toolbarExtra={headerToolbarExtra}
        />
        <main id="main-content" tabIndex={-1} className="flex-1 flex flex-col min-h-0 outline-none">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen pb-8 ${shellClassName}`.trim()}
      style={{ background: "var(--hi-bg-page, #050D1A)" }}
    >
      <SiteHeader
        subtitle={subtitle}
        brandTitle={brandTitle}
        editionBadge={editionBadge}
        toolbarExtra={headerToolbarExtra}
      />
      <main id="main-content" tabIndex={-1} className={`container py-8 mx-auto px-4 ${widthClass}`}>
        {showBreadcrumbs && <Breadcrumbs items={defaultCrumbs} />}
        {(sectionLabel || title || description) && (
          <header className="mb-8">
            {sectionLabel && <p className="section-label mb-2">{sectionLabel}</p>}
            {title && (
              <h1 className="display-heading text-2xl sm:text-3xl mb-3" style={{ color: "var(--hi-heading,#fff)" }}>
                {title}
              </h1>
            )}
            {description && (
              <p className="text-sm max-w-2xl leading-relaxed" style={{ color: "var(--hi-muted,rgba(255,255,255,0.6))" }}>
                {description}
              </p>
            )}
          </header>
        )}
        <div className={related.length > 0 ? "grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_15rem] gap-8 items-start" : undefined}>
          <div className="min-w-0">{children}</div>
          {related.length > 0 && (
            <aside className="lg:sticky lg:top-20">
              <div className="glass-card rounded-xl p-4">
                <div className="section-label mb-3">RELATED TOOLS</div>
                <ul className="space-y-2">
                  {related.map((tool) => (
                    <li key={tool.href}>
                      <a
                        href={tool.href}
                        className="block text-xs font-medium text-sky-400 hover:text-sky-300 py-1.5"
                      >
                        {tool.label} →
                      </a>
                    </li>
                  ))}
                </ul>
                <a href="/tools" className="inline-block mt-3 text-[11px] text-white/45 hover:text-sky-400">
                  All tools directory
                </a>
              </div>
            </aside>
          )}
        </div>
      </main>
    </div>
  );
}
