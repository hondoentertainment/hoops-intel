import { useState } from "react";
import {
  teamLogoUrl,
  getTeamColor,
  getTeamName,
  normalizeTeam,
  readableTextOn,
} from "../lib/teamColors";

interface TeamLogoProps {
  team: string;
  /** Rendered px size (square). */
  size?: number;
  className?: string;
}

/**
 * Official ESPN team logo with a self-hosted colored crest fallback. The crest
 * renders instantly if the CDN 403s, the team is unknown, or the image is still
 * loading-failed — so a team mark is always present, never a broken image.
 */
export default function TeamLogo({ team, size = 24, className = "" }: TeamLogoProps) {
  const [failed, setFailed] = useState(false);
  const abbr = normalizeTeam(team);
  const url = teamLogoUrl(team);
  const name = getTeamName(team);

  if (!url || failed) {
    const bg = getTeamColor(team);
    return (
      <span
        className={`inline-flex items-center justify-center rounded-full shrink-0 font-bold leading-none ${className}`}
        style={{
          width: size,
          height: size,
          background: bg,
          color: readableTextOn(bg),
          fontSize: Math.max(8, Math.round(size * 0.4)),
          letterSpacing: "-0.02em",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)",
        }}
        role="img"
        aria-label={name}
        title={name}
      >
        {abbr.slice(0, 3)}
      </span>
    );
  }

  return (
    <img
      src={url}
      alt={name}
      title={name}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`shrink-0 object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
