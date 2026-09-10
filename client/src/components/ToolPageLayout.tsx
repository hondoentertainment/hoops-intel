import { type ReactNode } from "react";
import { useLocation } from "wouter";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import { DeskPanel, PageHero } from "./enhanced/EnhancedUi";
import { ENHANCED_ACCENT } from "../lib/enhancedDesk";
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
        style={{ background: "var(--hi-bg-page, #07090e)" }}
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
        <SiteFooter />
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen has-mobile-tabbar ${shellClassName}`.trim()}
      style={{ background: "var(--hi-bg-page, #07090e)" }}
    >
      <SiteHeader
        subtitle={subtitle}
        brandTitle={brandTitle}
        editionBadge={editionBadge}
        toolbarExtra={headerToolbarExtra}
      />
      <main id="main-content" tabIndex={-1} className={`container py-8 mx-auto px-4 ${widthClass}`}>
        {showBreadcrumbs && <Breadcrumbs items={defaultCrumbs} />}
        {title ? (
          <div className="mb-8">
            <PageHero
              kicker={sectionLabel || subtitle}
              title={title}
              description={description}
            />
          </div>
        ) : sectionLabel || description ? (
          <header className="mb-8 min-w-0">
            {sectionLabel ? <p className="enhanced-kicker mb-2">{sectionLabel}</p> : null}
            {description ? (
              <p className="mobile-readable max-w-2xl" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
                {description}
              </p>
            ) : null}
          </header>
        ) : null}
        <div className={related.length > 0 ? "grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_15rem] gap-8 items-start" : undefined}>
          <div className="min-w-0">{children}</div>
          {related.length > 0 && (
            <aside className="lg:sticky lg:top-20">
              <DeskPanel kicker="Related tools">
                <ul className="flex flex-col gap-1">
                  {related.map((tool) => (
                    <li key={tool.href}>
                      <a
                        href={tool.href}
                        className="desk-inset flex items-center min-h-11 px-3 text-xs font-medium"
                        style={{ color: ENHANCED_ACCENT }}
                      >
                        {tool.label} →
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="/tools"
                  className="inline-flex items-center min-h-11 text-[11px]"
                  style={{ color: "var(--hi-text-secondary,#8594a8)" }}
                >
                  All tools directory
                </a>
              </DeskPanel>
            </aside>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
