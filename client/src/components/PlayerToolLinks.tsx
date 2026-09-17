import { DeskFilterChip } from "./enhanced/EnhancedUi";
import { buildPlayerToolLinks } from "../lib/playerToolLinks";

export function PlayerToolLinks({
  name,
  team,
  live,
}: {
  name: string;
  team?: string;
  live: boolean;
}) {
  const links = buildPlayerToolLinks(name, team);

  return (
    <div className="enhanced-card p-4" data-testid="player-tool-links">
      <p className="enhanced-kicker mb-2">{live ? "Player labs" : "Archive profile"}</p>
      {!live ? (
        <p className="text-xs mb-3" style={{ color: "var(--hi-muted,#5c5c58)" }}>
          Compare, trade value, and projections track current NBA cards. This page stays archive-only.
        </p>
      ) : null}
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <DeskFilterChip key={link.href} href={live ? link.href : link.bareHref}>
            {link.label}
          </DeskFilterChip>
        ))}
      </div>
    </div>
  );
}
