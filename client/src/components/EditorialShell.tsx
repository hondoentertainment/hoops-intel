import type { ReactNode } from "react";
import SiteHeader, { type SiteHeaderProps } from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function EditorialShell({
  children,
  header,
  footer = true,
  mainClassName = "",
}: {
  children: ReactNode;
  header?: SiteHeaderProps;
  footer?: boolean;
  mainClassName?: string;
}) {
  return (
    <div className="min-h-screen has-mobile-tabbar" style={{ background: "var(--hi-bg-page,#07090e)" }}>
      <SiteHeader {...header} />
      <main id="main-content" tabIndex={-1} className={`outline-none ${mainClassName}`.trim()}>
        {children}
      </main>
      {footer ? <SiteFooter /> : null}
    </div>
  );
}
