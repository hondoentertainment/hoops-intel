import { editionUpdatedLabel, espnSourceLabel, liveScoresTrustLabel } from "../lib/dataTrust";

type Variant = "edition" | "espn" | "live";

export default function DataTrustBadge({
  variant = "edition",
  fetchedAt,
  className = "",
}: {
  variant?: Variant;
  fetchedAt?: number;
  className?: string;
}) {
  const label =
    variant === "live"
      ? liveScoresTrustLabel(fetchedAt)
      : variant === "espn"
        ? espnSourceLabel(fetchedAt)
        : editionUpdatedLabel();

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium mono-data ${className}`}
      style={{
        background: "var(--hi-surface-2,#EFECE4)",
        color: "var(--hi-success,#1B7A45)",
        border: "1px solid var(--hi-hairline,#E4E0D6)",
      }}
      title={label}
    >
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
      {label}
    </span>
  );
}
