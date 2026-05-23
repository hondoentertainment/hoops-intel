import { pulseEdition } from "./pulseData";

/** Mirrors scripts/lib/season-mode.mjs — client-safe calendar windows. */
export type ClientSeasonMode =
  | "regular-season"
  | "playoffs"
  | "finals"
  | "draft"
  | "free-agency"
  | "summer-league"
  | "dead-period"
  | "preseason";

export type EditionContext =
  | "regular"
  | "playoffs"
  | "finals"
  | "draft"
  | "free-agency"
  | "summer-league"
  | "preseason";

const EDITION_CONTEXTS = new Set<string>([
  "regular",
  "playoffs",
  "finals",
  "draft",
  "free-agency",
  "summer-league",
  "preseason",
]);

const OFFSEASON_CONTEXTS = new Set<EditionContext>([
  "draft",
  "free-agency",
  "summer-league",
  "preseason",
]);

/** UTC calendar mode — keep in sync with scripts/lib/season-mode.mjs */
export function clientSeasonMode(date = new Date()): ClientSeasonMode {
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();

  if (month >= 10 || month <= 3) return "regular-season";
  if (month === 4 && day <= 15) return "regular-season";
  if (month === 4 && day > 15) return "playoffs";
  if (month === 5) return "playoffs";
  if (month === 6 && day <= 22) return "finals";
  if (month === 6 && day > 22) return "draft";
  if (month === 7 && day <= 10) return "free-agency";
  if (month === 7 && day > 10 && day <= 22) return "summer-league";
  if (month === 7 && day > 22) return "dead-period";
  if (month === 8) return "dead-period";
  if (month === 9) return "preseason";
  return "regular-season";
}

export function seasonModeToEditionContext(mode: ClientSeasonMode): EditionContext {
  switch (mode) {
    case "playoffs":
      return "playoffs";
    case "finals":
      return "finals";
    case "draft":
      return "draft";
    case "free-agency":
      return "free-agency";
    case "summer-league":
      return "summer-league";
    case "preseason":
      return "preseason";
    default:
      return "regular";
  }
}

/** Edition context from pulse data, with calendar fallback when unset or legacy. */
export function activeEditionContext(date = new Date()): EditionContext {
  const raw = pulseEdition.editionContext;
  if (raw && EDITION_CONTEXTS.has(raw)) return raw as EditionContext;
  return seasonModeToEditionContext(clientSeasonMode(date));
}

export function isOffseasonDesk(date = new Date()): boolean {
  return OFFSEASON_CONTEXTS.has(activeEditionContext(date));
}

export function isDraftDesk(date = new Date()): boolean {
  return activeEditionContext(date) === "draft";
}

export function offseasonPrimaryHref(date = new Date()): string {
  switch (activeEditionContext(date)) {
    case "draft":
      return "/draft";
    case "free-agency":
      return "/trade-value";
    case "summer-league":
      return "/draft";
    case "preseason":
      return "/lineups";
    default:
      return "/tools";
  }
}

export function offseasonPrimaryCta(date = new Date()): { label: string; href: string; emoji: string } {
  switch (activeEditionContext(date)) {
    case "draft":
      return { label: "Draft big board", href: "/draft", emoji: "📋" };
    case "free-agency":
      return { label: "Free agency desk", href: "/trade-value", emoji: "💰" };
    case "summer-league":
      return { label: "Summer League watch", href: "/draft", emoji: "☀️" };
    case "preseason":
      return { label: "Rotation battles", href: "/lineups", emoji: "🏀" };
    default:
      return { label: "All tools", href: "/tools", emoji: "🛠️" };
  }
}

export function editionContextDeskLabel(ctx: EditionContext = activeEditionContext()): string {
  switch (ctx) {
    case "finals":
      return "NBA Finals desk";
    case "playoffs":
      return "Playoffs desk";
    case "draft":
      return "Draft desk";
    case "free-agency":
      return "Free agency desk";
    case "summer-league":
      return "Summer League desk";
    case "preseason":
      return "Preseason desk";
    default:
      return "Regular season desk";
  }
}
