import { oddsBooksGames, type OddsBookQuote, type OddsBooksGame } from "./oddsBooksData";

export interface SpreadBucket {
  spread: string;
  count: number;
  sharePct: number;
  books: OddsBookQuote[];
  consensus: boolean;
}

export interface BookConsensusView {
  label: string;
  agree: number;
  total: number;
  agreementPct: number;
  buckets: SpreadBucket[];
  outliers: OddsBookQuote[];
  /** Same favorite side with more than one posted number. Null when the board is split or flat. */
  rangeLabel: string | null;
}

export { oddsBooksGames };
export type { OddsBookQuote, OddsBooksGame };

/** Lookup multi-book quotes for a matchup (either order). */
export function booksForMatchup(
  away: string,
  home: string,
  games: OddsBooksGame[] = oddsBooksGames,
): OddsBooksGame | undefined {
  return games.find((game) => sameBookMatchup(game, away, home));
}

/** Count how many books share the modal favorite-side string. First-seen wins a tie. */
export function consensusSummary(game: OddsBooksGame): { label: string; agree: number; total: number } | null {
  if (!game.books.length) return null;
  const counts = new Map<string, number>();
  for (const book of game.books) {
    counts.set(book.spread, (counts.get(book.spread) ?? 0) + 1);
  }
  let best = game.books[0].spread;
  let n = 0;
  for (const [spread, count] of counts) {
    if (count > n) {
      n = count;
      best = spread;
    }
  }
  return { label: best, agree: n, total: game.books.length };
}

const SPREAD_RE = /^([A-Za-z]{2,4})\s*([+-]?\d+(?:\.\d+)?)$/;

function formatPoint(team: string, point: number): string {
  return `${team} ${point > 0 ? "+" : ""}${point}`;
}

/** Posted min/max on one favorite side. Split boards stay unlabeled — no blended number. */
export function spreadRangeLabel(spreads: string[]): string | null {
  if (spreads.length < 2) return null;
  const parsed = spreads.map((spread) => {
    const match = spread.trim().match(SPREAD_RE);
    if (!match) return null;
    return { team: match[1].toUpperCase(), point: Number(match[2]) };
  });
  if (parsed.some((row) => row == null)) return null;
  const rows = parsed as { team: string; point: number }[];
  const teams = new Set(rows.map((row) => row.team));
  if (teams.size !== 1) return null;
  const points = rows.map((row) => row.point);
  const min = Math.min(...points);
  const max = Math.max(...points);
  if (min === max) return null;
  const team = rows[0].team;
  return `${formatPoint(team, min)} to ${formatPoint(team, max)}`;
}

export function consensusView(game: OddsBooksGame): BookConsensusView | null {
  const summary = consensusSummary(game);
  if (!summary) return null;

  const grouped = new Map<string, OddsBookQuote[]>();
  for (const book of game.books) {
    const list = grouped.get(book.spread) ?? [];
    list.push(book);
    grouped.set(book.spread, list);
  }
  const max = Math.max(...[...grouped.values()].map((books) => books.length));
  const buckets: SpreadBucket[] = [...grouped.entries()]
    .map(([spread, books]) => ({
      spread,
      count: books.length,
      sharePct: Math.round((books.length / max) * 100),
      books,
      consensus: spread === summary.label,
    }))
    .sort((a, b) => b.count - a.count || a.spread.localeCompare(b.spread));

  return {
    label: summary.label,
    agree: summary.agree,
    total: summary.total,
    agreementPct: Math.round((summary.agree / summary.total) * 100),
    buckets,
    outliers: game.books.filter((book) => book.spread !== summary.label),
    rangeLabel: spreadRangeLabel(game.books.map((book) => book.spread)),
  };
}

export function sameBookMatchup(
  game: { awayTeam: string; homeTeam: string },
  away: string,
  home: string,
): boolean {
  const a = away.toUpperCase();
  const h = home.toUpperCase();
  const ga = game.awayTeam.toUpperCase();
  const gh = game.homeTeam.toUpperCase();
  return (ga === a && gh === h) || (ga === h && gh === a);
}

/** Odds API rows that have no matching editorial preview. Real books[] only. */
export function bookGamesMissingFromPreviews(
  previews: Array<{ awayTeam: string; homeTeam: string }>,
  games: OddsBooksGame[] = oddsBooksGames,
): OddsBooksGame[] {
  return games.filter((game) => !previews.some((preview) => sameBookMatchup(game, preview.awayTeam, preview.homeTeam)));
}
