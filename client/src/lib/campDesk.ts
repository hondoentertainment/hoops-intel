import { slugify } from "./searchUtils";
import { activeEditionContext, isOffseasonDesk } from "./deskMode";
import { lineupData } from "./lineupData";
import { projectionsData } from "./projectionsData";
import { campScheduleGames } from "./campScheduleData";
import { gamePreviews, narrative, pulseIndex, tickerItems } from "./pulseData";

export type CampCard = {
  kicker: string;
  title: string;
  body: string;
  href: string;
  team?: string;
};

export type CampScheduleRow = {
  away: string;
  home: string;
  when: string;
  tv: string;
  note: string;
};

export type CampScheduleStatus = {
  kind: "tonight" | "espn-upcoming" | "empty";
  headline: string;
  sub: string;
  games: CampScheduleRow[];
};

const TEAM_TOKEN =
  /\b(ATL|BOS|BRK|CHA|CHI|CLE|DAL|DEN|DET|GSW|HOU|IND|LAC|LAL|MEM|MIA|MIL|MIN|NOP|NYK|OKC|ORL|PHI|PHX|POR|SAC|SAS|TOR|UTA|WAS)\b/;

function clip(text: string, max = 150): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).trimEnd()}…`;
}

function teamFromHay(hay: string): string | undefined {
  return hay.match(TEAM_TOKEN)?.[1];
}

function lastName(name: string): string {
  return name.split(" ").slice(-1)[0] ?? name;
}

/** Preseason, or any offseason day with no ESPN tonight slate. */
export function isCampDesk(date = new Date()): boolean {
  const ctx = activeEditionContext(date);
  return ctx === "preseason" || (isOffseasonDesk(date) && gamePreviews.length === 0);
}

export function campStorylines(limit = 3): CampCard[] {
  const skip = /no nba games tonight/i;
  const cards: CampCard[] = [];

  for (const item of tickerItems) {
    if (item.type === "score") continue;
    if (skip.test(item.text)) continue;
    const text = item.text.replace(/^(NEWS|ALERT|INJURY):\s*/i, "");
    cards.push({
      kicker: item.type === "injury" ? "CAMP WATCH" : item.type === "alert" ? "ALERT" : "STORYLINE",
      title: clip(text, 70),
      body: clip(text, 140),
      href: "/#camp-intel",
      team: teamFromHay(text),
    });
    if (cards.length >= limit) break;
  }

  if (cards.length < limit && narrative.subhead) {
    cards.push({
      kicker: "DESK",
      title: clip(narrative.subhead, 70),
      body: clip(narrative.body?.[0] ?? narrative.subhead, 140),
      href: "/#today-desk",
    });
  }

  return cards.slice(0, limit);
}

export function campRosterBattles(limit = 3): CampCard[] {
  const cards: CampCard[] = [];
  const surprise = lineupData.biggestSurprise;
  if (surprise) {
    cards.push({
      kicker: "ROTATION",
      title: `${surprise.team} camp question`,
      body: clip(surprise.description),
      href: "/lineups",
      team: surprise.team,
    });
  }

  for (const team of lineupData.teams) {
    if (cards.length >= limit) break;
    const unit = team.newLookLineup ?? team.rookieLineup ?? team.worstUnit;
    if (!unit) continue;
    const names = unit.players.map(lastName).join("–");
    const net = `${unit.netRating > 0 ? "+" : ""}${unit.netRating} net`;
    const kind = team.newLookLineup
      ? "new-look unit"
      : team.rookieLineup
        ? "rookie minutes"
        : "cut / minutes battle";
    cards.push({
      kicker: "MINUTES",
      title: `${team.team} ${kind}`,
      body: clip(`${names} · ${unit.minutesTogether} min · ${net}. ${unit.keyStrength}`),
      href: "/lineups",
      team: team.team,
    });
  }

  return cards.slice(0, limit);
}

export function campUnresolved(limit = 3): CampCard[] {
  const cards: CampCard[] = [];

  for (const player of pulseIndex.filter((row) => row.trend === "down")) {
    cards.push({
      kicker: "UNRESOLVED",
      title: `${player.player} · ${player.team}`,
      body: clip(player.note),
      href: `/player/${slugify(player.player)}`,
      team: player.team,
    });
    if (cards.length >= limit) break;
  }

  const faller = projectionsData.biggestFaller;
  if (faller && cards.length < limit) {
    cards.push({
      kicker: "OUTLOOK",
      title: `${faller.team} ${faller.change}`,
      body: clip(faller.reason),
      href: "/projections",
      team: faller.team,
    });
  }

  return cards.slice(0, limit);
}

export function campIntelCards(limit = 3): CampCard[] {
  const story = campStorylines(1);
  const battle = campRosterBattles(1);
  const open = campUnresolved(1);
  return [...story, ...battle, ...open].slice(0, limit);
}

type EditionPreview = {
  awayTeam: string;
  homeTeam: string;
  time?: string;
  tv?: string;
  storyline?: string;
  keyMatchup?: string;
};

export function campScheduleStatus(): CampScheduleStatus {
  const tonight = gamePreviews as EditionPreview[];
  if (tonight.length > 0) {
    return {
      kind: "tonight",
      headline: `${tonight.length} game${tonight.length === 1 ? "" : "s"} on ESPN tonight`,
      sub: "Live slate from the edition fetch — not an editorial invention.",
      games: tonight.slice(0, 3).map((game) => ({
        away: game.awayTeam,
        home: game.homeTeam,
        when: [game.time, game.tv].filter(Boolean).join(" · "),
        tv: game.tv ?? "",
        note: game.storyline || game.keyMatchup || "",
      })),
    };
  }

  if (campScheduleGames.length > 0) {
    return {
      kind: "espn-upcoming",
      headline: "ESPN camp-week slate",
      sub: "Not tonight. First tips when camp opens — pulled from ESPN, not invented.",
      games: campScheduleGames.slice(0, 3).map((game) => ({
        away: game.away,
        home: game.home,
        when: game.when,
        tv: game.tv,
        note: game.venue || "ESPN camp-week listing",
      })),
    };
  }

  return {
    kind: "empty",
    headline: "No games on the ESPN slate",
    sub: "Camp opens October 3. Tonight stays empty until ESPN posts a date.",
    games: [],
  };
}

export function campAskChips(): string[] {
  return [
    "Which rotation battles matter before camp?",
    "Who is unresolved heading into October?",
    "When does training camp open?",
  ];
}
