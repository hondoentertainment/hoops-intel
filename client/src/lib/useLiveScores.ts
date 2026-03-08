// Hook for polling live NBA scores from ESPN API
import { useState, useEffect, useCallback } from "react";
import { fetchScoreboard, type ESPNScoreboard } from "./espnApi";

const POLL_INTERVAL_LIVE = 30_000;   // 30s when games are in progress
const POLL_INTERVAL_IDLE = 300_000;  // 5min when no games active

export function useLiveScores() {
  const [data, setData] = useState<ESPNScoreboard | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    try {
      const result = await fetchScoreboard();
      setData(result);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();

    const interval = setInterval(() => {
      // Poll faster when games are live
      const hasLive = data?.games.some((g) => g.status === "in");
      const now = Date.now();
      const elapsed = now - (data?.fetchedAt ?? 0);
      const threshold = hasLive ? POLL_INTERVAL_LIVE : POLL_INTERVAL_IDLE;
      if (elapsed >= threshold) {
        refresh();
      }
    }, POLL_INTERVAL_LIVE);

    return () => clearInterval(interval);
  }, [refresh, data?.fetchedAt, data?.games]);

  return { data, loading, error, refresh };
}
