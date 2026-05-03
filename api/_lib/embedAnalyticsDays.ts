/** Clamp embed analytics ?days= for summary + timeseries APIs (default 8, range 1–90). */
export function parseEmbedAnalyticsDays(req: Request): number {
  let n = 8;
  try {
    const raw = new URL(req.url).searchParams.get("days");
    if (raw !== null && raw !== "") {
      const parsed = parseInt(raw, 10);
      if (Number.isFinite(parsed)) n = parsed;
    }
  } catch {
    /* keep default */
  }
  return Math.min(90, Math.max(1, n));
}
