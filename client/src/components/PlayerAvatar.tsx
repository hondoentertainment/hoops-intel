import { useState } from "react";
import { playerHeadshotIds } from "../lib/playerHeadshotData";
import { getTeamColor, readableTextOn } from "../lib/teamColors";

/**
 * Normalize a display name to a stable lookup key. MUST stay identical to the
 * `normalizePlayerName` in scripts/fetch-player-headshots.mjs, or headshots miss.
 */
export function normalizePlayerName(name: string): string {
  return (name || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[.'’]/g, "")
    .replace(/\b(jr|sr|ii|iii|iv)\b/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

export function headshotUrlForName(name: string): string | null {
  const id = playerHeadshotIds[normalizePlayerName(name)];
  return id ? `https://a.espncdn.com/i/headshots/nba/players/full/${id}.png` : null;
}

function initials(name: string): string {
  const parts = (name || "").trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

interface PlayerAvatarProps {
  name: string;
  /** Team abbreviation — tints the initials fallback. */
  team?: string;
  size?: number;
  className?: string;
}

/**
 * ESPN player headshot with a self-hosted initials crest fallback. The crest
 * renders instantly when we have no id for the player, the CDN 403s, or the
 * image errors — so a face-or-crest is always present, never a broken image.
 */
export default function PlayerAvatar({ name, team, size = 40, className = "" }: PlayerAvatarProps) {
  const [failed, setFailed] = useState(false);
  const url = headshotUrlForName(name);

  if (!url || failed) {
    const bg = team ? getTeamColor(team) : "#1E3A5F";
    return (
      <span
        className={`inline-flex items-center justify-center rounded-full shrink-0 font-bold leading-none ${className}`}
        style={{
          width: size,
          height: size,
          background: bg,
          color: readableTextOn(bg),
          fontSize: Math.max(9, Math.round(size * 0.36)),
          letterSpacing: "-0.02em",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)",
        }}
        role="img"
        aria-label={name}
        title={name}
      >
        {initials(name)}
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
      className={`shrink-0 rounded-full object-cover ${className}`}
      style={{ width: size, height: size, background: "rgba(255,255,255,0.06)" }}
    />
  );
}
