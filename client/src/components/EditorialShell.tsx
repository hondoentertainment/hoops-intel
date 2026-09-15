import type { ReactNode } from "react";
import DeskAppShell from "./DeskAppShell";
import type { SiteHeaderProps } from "./SiteHeader";

export default function EditorialShell({
  children,
  header,
  footer = true,
  padded = true,
  askInFlow = true,
  mainClassName = "",
  shellClassName = "",
}: {
  children: ReactNode;
  header?: SiteHeaderProps;
  footer?: boolean;
  padded?: boolean;
  askInFlow?: boolean;
  mainClassName?: string;
  shellClassName?: string;
}) {
  return (
    <DeskAppShell
      header={header}
      footer={footer}
      padded={padded}
      askInFlow={askInFlow}
      mainClassName={mainClassName}
      shellClassName={shellClassName}
    >
      {children}
    </DeskAppShell>
  );
}
