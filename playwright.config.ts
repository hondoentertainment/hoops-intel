import { existsSync } from "node:fs";
import { defineConfig, devices } from "@playwright/test";

// Visual smoke suite — boots the production build via `vite preview` and checks
// that key pages render and that every team mark resolves (real logo OR crest
// fallback).
//
// Locally / in the sandbox a Chromium is pre-installed at a fixed path; in CI
// `playwright install` provides its own managed browser, so only pin
// executablePath when the pre-installed binary actually exists.
const PINNED_CHROMIUM = process.env.PLAYWRIGHT_CHROMIUM_PATH || "/opt/pw-browsers/chromium";
const CHROMIUM = existsSync(PINNED_CHROMIUM) ? PINNED_CHROMIUM : undefined;
const PORT = 4173;

export default defineConfig({
  testDir: "./e2e",
  timeout: 30_000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"]],
  use: {
    baseURL: `http://127.0.0.1:${PORT}`,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        ...(CHROMIUM ? { launchOptions: { executablePath: CHROMIUM } } : {}),
      },
    },
  ],
  webServer: {
    // Pin the host so the served interface matches the 127.0.0.1 healthcheck
    // below — vite preview otherwise binds localhost/::1 and the check times out
    // on CI runners.
    command: `npm run preview -- --port ${PORT} --strictPort --host 127.0.0.1`,
    url: `http://127.0.0.1:${PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
