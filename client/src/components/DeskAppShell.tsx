import type { ReactNode } from "react";
import SiteHeader, { type SiteHeaderProps } from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { AskInFlowCta } from "./AskHoopsIntel";

export type DeskAppShellProps = {
  children: ReactNode;
  header?: SiteHeaderProps;
  footer?: boolean;
  askInFlow?: boolean;
  padded?: boolean;
  mainClassName?: string;
  shellClassName?: string;
};

export default function DeskAppShell({
  children,
  header,
  footer = true,
  askInFlow = true,
  padded = true,
  mainClassName = "",
  shellClassName = "",
}: DeskAppShellProps) {
  return (
    <div
      className={`min-h-screen has-mobile-tabbar ${shellClassName}`.trim()}
      style={{ background: "var(--hi-bg-page, #07090e)" }}
    >
      <SiteHeader {...header} />
      <main
        id="main-content"
        tabIndex={-1}
        className={`outline-none ${padded ? "desk-page-main" : ""} ${mainClassName}`.trim()}
      >
        {children}
        {askInFlow ? (
          <div className="desk-page-ask">
            <AskInFlowCta />
          </div>
        ) : null}
      </main>
      {footer ? <SiteFooter /> : null}
    </div>
  );
}
