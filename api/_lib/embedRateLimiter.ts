/** Best-effort per warm isolate IP / key rate limit — mirrors contact-intake pattern. */

export function rateWindow(mapKey: string, maxPerWindow: number, windowMs: number): boolean {
  const g = globalThis as typeof globalThis & { __hiEmbedRate?: Map<string, number[]> };
  if (!g.__hiEmbedRate) g.__hiEmbedRate = new Map();
  const map = g.__hiEmbedRate;
  const now = Date.now();
  const start = now - windowMs;
  const stamps = (map.get(mapKey) ?? []).filter((t) => t > start);
  if (stamps.length >= maxPerWindow) return false;
  stamps.push(now);
  map.set(mapKey, stamps);
  return true;
}
