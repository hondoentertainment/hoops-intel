import { gamePreviews, injuryUpdates, narrative, pulseEdition, pulseIndex, tickerItems, westStandings } from "./pulseData";
import { contextualAskChips } from "./askShortcuts";
import { activeEditionContext, editionContextDeskLabel, liveWireMonthGateClosed, type EditionContext } from "./deskMode";
import { canonicalizeTeamCode, isCanonicalTeamCode } from "./identity";
import { editionPublishLabel } from "./pacificTime";

export const ENHANCED_ACCENT = "#8ec8f0";
export const ENHANCED_ACCENT_TEXT = "#146a8c";
export const ENHANCED_CHIP = "#ff7a17";
export const ENHANCED_INK = "#0a0a0a";
export const CAMP_OPEN_ISO = "2026-10-03";

const WORD_DAYS: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
};

export function parseEditionDisplayDate(display = pulseEdition.date): Date | null {
  const parsed = new Date(`${display} 12:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function daysUntilIso(targetIso: string, from = parseEditionDisplayDate()): number {
  const start = from ?? new Date();
  const target = new Date(`${targetIso}T12:00:00`);
  const a = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
  const b = Date.UTC(target.getFullYear(), target.getMonth(), target.getDate());
  return Math.round((b - a) / 86_400_000);
}

export function formatPulseScore(score: number): string {
  return Number.isInteger(score) ? String(score) : score.toFixed(1);
}

/** Phone Pulse rows: drop unit suffixes so the stat line fits a 390px card. */
export function compactPulseStats(keyStats: string): string {
  return keyStats
    .replace(/\s+(PPG|RPG|BPG|APG|SPG|FG%|3P%)\b/gi, "")
    .replace(/\s+·\s+·/g, " · ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

export function padRank(rank: number): string {
  return String(rank).padStart(2, "0");
}

export function pulseTrendMark(trend: string): { mark: string; color: string } {
  if (trend === "up") return { mark: "▲", color: "#3DDC97" };
  if (trend === "down") return { mark: "▼", color: "#FF4D6A" };
  return { mark: "●", color: "#3DDC97" };
}

export function injuryStatusKey(status: string): string {
  return status.toLowerCase();
}

export function injuryChipTone(status: string): "danger" | "success" | "warn" {
  const key = injuryStatusKey(status);
  if (key === "out") return "danger";
  if (key === "probable") return "success";
  return "warn";
}

export function injuryStatusLabel(status: string): string {
  if (injuryStatusKey(status) === "day-to-day") return "Day-to-Day";
  if (!status) return status;
  return status
    .split(/[-_\s]+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("-");
}

export function lastNameOf(name: string): string {
  return name.split(" ").slice(-1)[0] ?? name;
}

export function formatPulseTenths(score: number): string {
  return score.toFixed(1);
}

export function seasonChipLabel(ctx: EditionContext = activeEditionContext()): string | null {
  switch (ctx) {
    case "preseason":
      return "PRESEASON";
    case "playoffs":
      return "PLAYOFFS";
    case "finals":
      return "FINALS";
    case "draft":
      return "DRAFT";
    case "free-agency":
      return "FREE AGENCY";
    case "summer-league":
      return "SUMMER";
    case "dead-period":
      return "OFFSEASON";
    default:
      return null;
  }
}

export function headerDateLabel(display = pulseEdition.date): string {
  const parsed = parseEditionDisplayDate(display);
  if (!parsed) return display;
  return parsed.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function injuryCounts(rows = injuryUpdates) {
  const out = rows.filter((r) => injuryStatusKey(r.status) === "out").length;
  const dtd = rows.filter((r) => injuryStatusKey(r.status) === "day-to-day").length;
  const probable = rows.filter((r) => injuryStatusKey(r.status) === "probable").length;
  const questionable = rows.filter((r) => injuryStatusKey(r.status) === "questionable").length;
  return { out, dtd, probable, questionable, all: rows.length };
}

export function shortInjuryLine(injury: string): string {
  const cleaned = injury.replace(/\s+/g, " ").trim();
  const paren = cleaned.match(/^(.+?)\s*\((.+)\)$/);
  if (paren) {
    const part = paren[1]!.replace(/\s+(soreness|sprain|strain|management)$/i, "").trim();
    const qualifier = paren[2]!.split(/\s+/)[0] ?? paren[2];
    return `${part} · ${qualifier.toLowerCase()}`;
  }
  return cleaned;
}

export function deskEyebrow(ctx: EditionContext = activeEditionContext()): string {
  return editionContextDeskLabel(ctx).toUpperCase();
}

export function deskKickerLine(ctx: EditionContext = activeEditionContext()): string {
  return `${deskEyebrow(ctx)} · ${pulseEdition.edition}`;
}

export function campOpenDisplay(iso = CAMP_OPEN_ISO): string {
  const parsed = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return "October 3";
  return parsed.toLocaleDateString("en-US", { month: "long", day: "numeric" });
}

export function editionUpdatedLabel(_display = pulseEdition.date): string {
  return `Updated ${editionPublishLabel()}`;
}

export function compactEditionDate(display = pulseEdition.date): string {
  const parsed = parseEditionDisplayDate(display);
  if (!parsed) return display;
  return parsed
    .toLocaleDateString("en-US", { month: "short", day: "numeric" })
    .replace(" ", " ")
    .toUpperCase();
}

export function murrayStandoff(): { value: string; sub: string } | null {
  const hay = [pulseEdition.subtitle, narrative.subhead, ...tickerItems.map((t) => t.text)].join(" ");
  const numbered = hay.match(/day\s+(\d+)/i);
  const spoken = hay.match(/day\s+(seventeen|eighteen|nineteen|twenty|sixteen|fifteen|fourteen)/i);
  const day = numbered ? Number(numbered[1]) : spoken ? WORD_DAYS[spoken[1]!.toLowerCase()] : null;
  if (!day) return null;
  return {
    value: `D${day}`,
    sub: /institutional/i.test(hay) ? "Silence now institutional" : "Extension silence ongoing",
  };
}

export type HeroStat = { kicker: string; value: string; sub: string };

export function heroStats(date = new Date()): HeroStat[] {
  const leader = pulseIndex[0];
  const west1 = westStandings[0];
  const campDays = daysUntilIso(CAMP_OPEN_ISO);
  const murray = murrayStandoff();
  const lastName = leader ? lastNameOf(leader.player) : "—";
  const gateClosed = liveWireMonthGateClosed(date);

  const cards: HeroStat[] = [];
  if (leader) {
    cards.push({
      kicker: "PULSE LEADER",
      value: lastName,
      sub: `${leader.team} · ${formatPulseScore(leader.indexScore)}`,
    });
  }
  if (gateClosed) {
    cards.push({
      kicker: "CAMP OPENS",
      value: campDays > 0 ? `${campDays} days` : campDays === 0 ? "Today" : "Open",
      sub: "October 3",
    });
  } else if (gamePreviews.length === 0) {
    cards.push({
      kicker: "TONIGHT",
      value: "Clear",
      sub: "No ESPN tip-offs",
    });
  } else {
    cards.push({
      kicker: "TONIGHT",
      value: String(gamePreviews.length),
      sub: gamePreviews.length === 1 ? "Tip-off posted" : "Tip-offs posted",
    });
  }

  // Empty slates stay a camp desk — last season's W-L is not tonight's scoreboard.
  if (gamePreviews.length === 0) {
    const unresolved = pulseIndex.filter((row) => row.trend === "down");
    if (unresolved.length > 0) {
      cards.push({
        kicker: "UNRESOLVED",
        value: `${unresolved.length} ${unresolved.length === 1 ? "issue" : "issues"}`,
        sub: unresolved.map((row) => lastNameOf(row.player)).join(" · "),
      });
    } else if (murray) {
      cards.push({ kicker: "MURRAY", value: murray.value, sub: murray.sub });
    }
    return cards.slice(0, 4);
  }

  if (murray) {
    cards.push({ kicker: "MURRAY", value: murray.value, sub: murray.sub });
  }
  if (west1) {
    cards.push({
      kicker: "WEST NO. 1",
      value: `${west1.wins}-${west1.losses}`,
      sub: `${west1.team} · full prep runway`,
    });
  }
  return cards;
}

export function mobileHeroStats(date = new Date()): HeroStat[] {
  const all = heroStats(date);
  const pulse = all.find((c) => c.kicker === "PULSE LEADER");
  const camp = all.find((c) => c.kicker === "CAMP OPENS" || c.kicker === "PRESEASON");
  const slate = all.find((c) => c.kicker === "TONIGHT");
  const second = camp
    ? { kicker: "CAMP", value: camp.value.replace(/ days$/, "d"), sub: camp.sub }
    : slate
      ? { kicker: "SLATE", value: slate.value, sub: slate.sub }
      : { kicker: "SLATE", value: "—", sub: "No tip-offs" };
  return [
    pulse
      ? { kicker: "PULSE", value: pulse.value.replace(/Wembanyama/, "Wemby"), sub: pulse.sub }
      : { kicker: "PULSE", value: "—", sub: "Board idle" },
    second,
  ];
}

export function deskAskChips(): string[] {
  if (gamePreviews.length === 0) {
    return [
      "Who leads Camp Pulse?",
      "When does camp open?",
      "Any unresolved injuries?",
    ];
  }
  return contextualAskChips().slice(0, 3);
}

export function tickerWireText(): string {
  return tickerItems
    .slice(0, 4)
    .map((item) => item.text.replace(/^(NEWS|ALERT|INJURY):\s*/i, ""))
    .join("  ·  ");
}

export type SampleLock = {
  away: string;
  home: string;
  when: string;
  network: string;
  note: string;
  lean: string;
};

export const SAMPLE_LOCKS: SampleLock[] = [
  {
    away: "NYK",
    home: "BOS",
    when: "Oct 3 · 7:00 PM ET",
    network: "LEAN NYK",
    lean: "LEAN NYK",
    note: "Camp-open lean only — Brunson settled, Anunoby probable. Not a Pulse bet.",
  },
  {
    away: "SAS",
    home: "HOU",
    when: "Oct 4 · 8:00 PM ET",
    network: "LEAN SAS",
    lean: "LEAN SAS",
    note: "Fox-Sengun. Houston freeze is already priced into camp design, not the spread.",
  },
];

export function hasTonightSlate(): boolean {
  return gamePreviews.length > 0;
}

const EDITION_MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

const PUBLISHED_GAME_ID = /^[A-Z]{3}-[A-Z]{3}-\d{8}$/;

export type TonightSlatePreview = {
  gameId?: string;
  awayTeam?: string;
  homeTeam?: string;
  time?: string;
  tv?: string;
  featured?: boolean;
};

export type TonightGameLink = {
  gameId: string;
  href: string;
  awayTeam: string;
  homeTeam: string;
  time: string;
  tv: string;
  featured: boolean;
};

/** Calendar stamp from an edition display date or ISO day. Empty when it does not parse. */
export function editionDateStamp(editionDate: string): string {
  const raw = String(editionDate ?? "").trim();
  const iso = raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) return `${iso[1]}${iso[2]}${iso[3]}`;
  const named = raw.match(/^([A-Za-z]+)\s+(\d{1,2}),\s+(\d{4})$/);
  if (!named) return "";
  const month = EDITION_MONTHS.indexOf(named[1].toLowerCase()) + 1;
  const day = Number(named[2]);
  if (month < 1 || day < 1 || day > 31) return "";
  return `${named[3]}${String(month).padStart(2, "0")}${String(day).padStart(2, "0")}`;
}

/**
 * One deep link per published preview. Order follows the edition.
 * A row is omitted when it has no canonical game id — nothing is invented.
 */
export function tonightGameLinks(
  previews: readonly TonightSlatePreview[] | null | undefined,
  editionDate: string,
): TonightGameLink[] {
  if (!previews || previews.length === 0) return [];
  const stamp = editionDateStamp(editionDate);
  const links: TonightGameLink[] = [];
  const seen = new Set<string>();
  for (const preview of previews) {
    const published = String(preview.gameId ?? "").trim().toUpperCase();
    let gameId = PUBLISHED_GAME_ID.test(published) ? published : "";
    let away = canonicalizeTeamCode(preview.awayTeam ?? "");
    let home = canonicalizeTeamCode(preview.homeTeam ?? "");
    if (!gameId) {
      if (!stamp || !isCanonicalTeamCode(away) || !isCanonicalTeamCode(home)) continue;
      gameId = `${away}-${home}-${stamp}`;
    }
    const [idAway, idHome] = gameId.split("-");
    if (!isCanonicalTeamCode(idAway) || !isCanonicalTeamCode(idHome)) continue;
    away = idAway;
    home = idHome;
    if (seen.has(gameId)) continue;
    seen.add(gameId);
    links.push({
      gameId,
      href: `/game/${gameId}`,
      awayTeam: away,
      homeTeam: home,
      time: String(preview.time ?? "").trim(),
      tv: String(preview.tv ?? "").trim(),
      featured: Boolean(preview.featured),
    });
  }
  return links;
}
