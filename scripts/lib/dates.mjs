// Shared date helpers for all generation scripts.
// Supports GENERATION_DATE env var (YYYY-MM-DD) for backfilling past days.

function getBaseDate() {
  const override = process.env.GENERATION_DATE;
  if (override) {
    // Parse as noon LA time to avoid timezone edge cases
    const d = new Date(`${override}T12:00:00-08:00`);
    if (isNaN(d.getTime())) throw new Error(`Invalid GENERATION_DATE: ${override}`);
    return d;
  }
  const d = new Date();
  return new Date(d.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
}

export function toESPNDate(daysOffset = 0) {
  const la = getBaseDate();
  la.setDate(la.getDate() + daysOffset);
  return la.toISOString().slice(0, 10).replace(/-/g, "");
}

export function toISODate(daysOffset = 0) {
  const la = getBaseDate();
  la.setDate(la.getDate() + daysOffset);
  return la.toISOString().slice(0, 10);
}

export function toDisplayDate(daysOffset = 0) {
  const la = getBaseDate();
  la.setDate(la.getDate() + daysOffset);
  return la.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}
