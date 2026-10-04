import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Route, Router, Switch } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import type { ReactNode } from "react";
import { ToastProvider } from "../contexts/ToastContext";
import Player from "../pages/Player";
import PodcastCompanion from "../pages/PodcastCompanion";
import Tonight from "../pages/Tonight";
import WatchGuide from "../pages/WatchGuide";
import PickEm from "../pages/PickEm";
import { gamePreviews, pulseEdition } from "../lib/pulseData";
import { watchGuideData } from "../lib/watchGuideData";

function renderAt(path: string, tree: ReactNode) {
  const { hook } = memoryLocation({ path, static: true });
  return render(
    <ToastProvider>
      <Router hook={hook}>{tree}</Router>
    </ToastProvider>,
  );
}

describe("site review pages", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
  });

  afterEach(() => {
    cleanup();
  });

  it("shows Jamal Murray's injury-wire status and a profile canonical", async () => {
    renderAt(
      "/player/jamal-murray",
      <Switch>
        <Route path="/player/:slug" component={Player} />
      </Switch>,
    );
    expect(await screen.findByTestId("player-injury-badge")).toHaveTextContent("Day-to-Day");
    expect(screen.getByTestId("player-availability-as-of")).toHaveTextContent(pulseEdition.date);
    await waitFor(() => {
      expect(document.querySelector('link[rel="canonical"]')?.getAttribute("href")).toBe(
        "https://hoopsintel.net/player/jamal-murray",
      );
      expect(document.querySelector('meta[property="og:url"]')?.getAttribute("content")).toBe(
        "https://hoopsintel.net/player/jamal-murray",
      );
    });
  });

  it("labels a Pulse player missing from the injury wire as not listed", async () => {
    renderAt(
      "/player/shai-gilgeous-alexander",
      <Switch>
        <Route path="/player/:slug" component={Player} />
      </Switch>,
    );
    expect(await screen.findByTestId("player-availability-clear")).toHaveTextContent("Healthy / no injury listed");
    expect(screen.queryByTestId("player-injury-badge")).not.toBeInTheDocument();
  });

  it("does not invent an injury for an archive profile", async () => {
    renderAt(
      "/player/kawhi-leonard",
      <Switch>
        <Route path="/player/:slug" component={Player} />
      </Switch>,
    );
    expect(await screen.findByRole("heading", { name: "Kawhi Leonard" })).toBeInTheDocument();
    expect(screen.queryByTestId("player-injury-badge")).not.toBeInTheDocument();
    expect(screen.queryByTestId("player-availability-clear")).not.toBeInTheDocument();
  });

  it("keeps an empty tonight honest and a posted slate on the ESPN board", () => {
    renderAt("/tonight", <Tonight />);
    if (gamePreviews.length === 0) {
      expect(screen.getByText(/Waiting on|No games on the ESPN board/)).toBeInTheDocument();
      expect(screen.queryByTestId("tonight-player-links")).not.toBeInTheDocument();
    } else {
      expect(screen.getByText(`${gamePreviews.length} games on the ESPN board`)).toBeInTheDocument();
      expect(screen.getAllByTestId("tonight-game-card")).toHaveLength(gamePreviews.length);
    }
  });

  it("stamps a current watch guide and an outdated podcast", () => {
    renderAt("/watch-guide", <WatchGuide />);
    expect(screen.getByText(`Last updated: ${watchGuideData.displayDate}`)).toBeInTheDocument();
    expect(screen.queryByTestId("content-may-be-outdated")).not.toBeInTheDocument();

    cleanup();
    renderAt("/podcast-companion", <PodcastCompanion />);
    expect(screen.getByTestId("content-may-be-outdated")).toHaveTextContent("May be outdated");
    expect(screen.getByTestId("content-may-be-outdated")).toHaveTextContent("2026-08-25");
  });

  it("marks the closed pick board as for fun", () => {
    renderAt("/pick-em", <PickEm />);
    expect(screen.getByTestId("for-fun-chip")).toHaveTextContent(/for fun/i);
  });
});
