import type { CSSProperties, ReactNode } from "react";
import { playerProfileHref } from "../lib/playersIndex";

export function PlayerNameLink({
  name,
  className,
  style,
  lastNameOnly = false,
  children,
}: {
  name: string;
  className?: string;
  style?: CSSProperties;
  lastNameOnly?: boolean;
  children?: ReactNode;
}) {
  const href = playerProfileHref(name);
  const label = children ?? (lastNameOnly ? name.split(" ").slice(-1)[0] : name);
  if (!href) {
    return (
      <span className={className} style={style}>
        {label}
      </span>
    );
  }
  return (
    <a href={href} className={className} style={style}>
      {label}
    </a>
  );
}
