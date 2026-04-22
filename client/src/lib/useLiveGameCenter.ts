import { useEffect, useMemo, useRef, useState } from "react";
import type { LiveGame } from "./espnApi";
import { clockToSeconds, fetchGameCenter, type GameCenterPayload } from "./liveGameCenter";

const GAME_CENTER_POLL_MS = 20_000;

export interface ClutchState {
  gameId: string;
  label: string;
  scoreDiff: number;
}

function isClutchGame(game: LiveGame): boolean {
  if (game.status !== "in") return false;
  if (game.period < 4) return false;
  const withinTwoMinutes = clockToSeconds(game.clock) <= 120;
  const withinFivePoints = Math.abs(game.homeScore - game.awayScore) <= 5;
  return withinTwoMinutes && withinFivePoints;
}

function buildClutchLabel(game: LiveGame): string {
  return `${game.awayTeam} ${game.awayScore} - ${game.homeTeam} ${game.homeScore} · Q${game.period} ${game.clock}`;
}

async function maybeNotifyClutch(game: LiveGame, enabled: boolean): Promise<void> {
  if (!enabled || typeof Notification === "undefined") return;
  if (Notification.permission === "default") {
    await Notification.requestPermission().catch(() => {});
  }
  if (Notification.permission !== "granted") return;
  new Notification("Hoops Intel Clutch Alert", {
    body: `${game.awayTeam} vs ${game.homeTeam} is within 5 in the final 2:00.`,
    icon: "/assets/logo.png",
    tag: `clutch-${game.id}`,
  });
}

export function useLiveGameCenter(games: LiveGame[], clutchAlertsEnabled: boolean) {
  const [payloadByGameId, setPayloadByGameId] = useState<Record<string, GameCenterPayload>>({});
  const notifiedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const liveGames = games.filter((g) => g.status === "in");
    if (liveGames.length === 0) return;

    let mounted = true;

    async function refreshAll() {
      const results = await Promise.all(
        liveGames.map(async (game) => {
          try {
            const payload = await fetchGameCenter(game);
            return [game.id, payload] as const;
          } catch {
            return null;
          }
        }),
      );
      if (!mounted) return;
      setPayloadByGameId((prev) => {
        const next = { ...prev };
        for (const item of results) {
          if (!item) continue;
          const [id, payload] = item;
          next[id] = payload;
        }
        return next;
      });
    }

    refreshAll();
    const timer = setInterval(refreshAll, GAME_CENTER_POLL_MS);
    return () => {
      mounted = false;
      clearInterval(timer);
    };
  }, [games]);

  useEffect(() => {
    const clutchGames = games.filter(isClutchGame);
    clutchGames.forEach((game) => {
      if (notifiedRef.current.has(game.id)) return;
      notifiedRef.current.add(game.id);
      maybeNotifyClutch(game, clutchAlertsEnabled).catch(() => {});
    });
  }, [games, clutchAlertsEnabled]);

  const clutchGames = useMemo<ClutchState[]>(
    () =>
      games
        .filter(isClutchGame)
        .map((g) => ({
          gameId: g.id,
          label: buildClutchLabel(g),
          scoreDiff: Math.abs(g.homeScore - g.awayScore),
        })),
    [games],
  );

  return { payloadByGameId, clutchGames };
}
