// Lightweight client-side search index for Hoops Intel RAG
// Uses TF-IDF-like scoring across archive + current pulse data

import { archiveEditions } from "./archiveData";
import {
  pulseEdition,
  narrative,
  gameResults,
  pulseIndex,
  injuryUpdates,
  gamePreviews,
  rookieWatch,
  mediaReactions,
  tickerItems,
} from "./pulseData";

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

interface SearchDocument {
  id: string;
  type: "archive" | "narrative" | "game" | "player" | "injury" | "preview" | "rookie" | "media" | "ticker";
  title: string;
  content: string;
  tags: string[];
  players: string[];
  teams: string[];
  date?: string;
}

interface ScoredDocument {
  doc: SearchDocument;
  score: number;
}

// ═══════════════════════════════════════════════════════════
// TOKENIZER
// ═══════════════════════════════════════════════════════════

const STOP_WORDS = new Set([
  "the", "a", "an", "is", "are", "was", "were", "be", "been", "being",
  "have", "has", "had", "do", "does", "did", "will", "would", "could",
  "should", "may", "might", "shall", "can", "to", "of", "in", "for",
  "on", "with", "at", "by", "from", "as", "into", "through", "during",
  "before", "after", "above", "below", "between", "and", "but", "or",
  "not", "no", "so", "if", "than", "that", "this", "these", "those",
  "it", "its", "he", "she", "they", "them", "his", "her", "their",
  "what", "which", "who", "whom", "how", "when", "where", "why",
  "all", "each", "every", "both", "few", "more", "most", "other",
  "some", "such", "only", "own", "same", "just", "about", "also",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s'-]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOP_WORDS.has(t));
}

// ═══════════════════════════════════════════════════════════
// BUILD DOCUMENTS
// ═══════════════════════════════════════════════════════════

let _documents: SearchDocument[] | null = null;

function buildDocuments(): SearchDocument[] {
  if (_documents) return _documents;

  const docs: SearchDocument[] = [];

  // Current edition narrative
  docs.push({
    id: "current-narrative",
    type: "narrative",
    title: narrative.headline,
    content: [narrative.headline, narrative.subhead, ...narrative.body].join(" "),
    tags: ["current", "today", "latest", "narrative"],
    players: [],
    teams: [],
    date: pulseEdition.date,
  });

  // Current game results
  for (const game of gameResults) {
    docs.push({
      id: `game-${game.gameId}`,
      type: "game",
      title: `${game.awayTeam} ${game.awayScore} @ ${game.homeTeam} ${game.homeScore}`,
      content: [
        `${game.awayTeam} ${game.awayScore} at ${game.homeTeam} ${game.homeScore}`,
        game.topPerformer,
        game.topLine,
        game.recap,
      ].join(" "),
      tags: ["game", "score", "result", "final"],
      players: [game.topPerformer],
      teams: [game.homeTeam, game.awayTeam],
      date: pulseEdition.date,
    });
  }

  // Pulse index players
  for (const p of pulseIndex) {
    docs.push({
      id: `pulse-${p.player.replace(/\s/g, "-").toLowerCase()}`,
      type: "player",
      title: `${p.player} (#${p.rank} Pulse Index)`,
      content: [p.player, p.keyStats, p.note, p.rationale].join(" "),
      tags: ["pulse", "ranking", "index", "mvp", "player"],
      players: [p.player],
      teams: [p.team],
      date: pulseEdition.date,
    });
  }

  // Injury updates
  for (const inj of injuryUpdates) {
    docs.push({
      id: `injury-${inj.player.replace(/\s/g, "-").toLowerCase()}`,
      type: "injury",
      title: `${inj.player} Injury: ${inj.injury}`,
      content: [inj.player, inj.injury, inj.timeline, inj.impact, inj.status].join(" "),
      tags: ["injury", "health", "status", "out", "questionable"],
      players: [inj.player],
      teams: [inj.team],
    });
  }

  // Game previews
  for (const preview of gamePreviews) {
    docs.push({
      id: `preview-${preview.homeTeam}-${preview.awayTeam}`,
      type: "preview",
      title: `${preview.matchup} Preview`,
      content: [preview.matchup, preview.storyline, preview.prediction, preview.time, preview.spread].join(" "),
      tags: ["preview", "tonight", "upcoming", "matchup"],
      players: [],
      teams: [preview.homeTeam, preview.awayTeam],
    });
  }

  // Rookie watch
  for (const r of rookieWatch) {
    docs.push({
      id: `rookie-${r.player.replace(/\s/g, "-").toLowerCase()}`,
      type: "rookie",
      title: `Rookie Watch: ${r.player}`,
      content: [r.player, r.statLine, r.note].join(" "),
      tags: ["rookie", "roy", "rookie of the year", "draft"],
      players: [r.player],
      teams: [r.team],
    });
  }

  // Media reactions
  for (const m of mediaReactions) {
    docs.push({
      id: `media-${m.source}-${m.topic.replace(/\s/g, "-").toLowerCase()}`,
      type: "media",
      title: `${m.source}: ${m.topic}`,
      content: [m.quote, m.topic, m.author].join(" "),
      tags: ["media", "reaction", "analysis", "opinion"],
      players: [],
      teams: [],
    });
  }

  // Ticker highlights
  const tickerContent = tickerItems.map((t) => t.text).join(" ");
  docs.push({
    id: "ticker-summary",
    type: "ticker",
    title: "Today's Headlines & Ticker",
    content: tickerContent,
    tags: ["headlines", "news", "ticker", "scores", "breaking"],
    players: [],
    teams: [],
    date: pulseEdition.date,
  });

  // Archive editions
  for (const edition of archiveEditions) {
    docs.push({
      id: `archive-${edition.id}`,
      type: "archive",
      title: edition.headline,
      content: [
        edition.headline,
        edition.subheadline || "",
        edition.topStory || "",
        edition.topPlayer || "",
        edition.topStatLine || "",
        ...(edition.tags || []),
      ].join(" "),
      tags: edition.tags || [],
      players: edition.players || [],
      teams: edition.teams || [],
      date: edition.date,
    });
  }

  _documents = docs;
  return docs;
}

// ═══════════════════════════════════════════════════════════
// SCORING
// ═══════════════════════════════════════════════════════════

function scoreDocument(doc: SearchDocument, queryTokens: string[]): number {
  if (queryTokens.length === 0) return 0;

  let score = 0;
  const titleTokens = tokenize(doc.title);
  const contentTokens = tokenize(doc.content);
  const tagTokens = doc.tags.flatMap((t) => tokenize(t));
  const playerTokens = doc.players.flatMap((p) => tokenize(p));
  const teamTokens = doc.teams.map((t) => t.toLowerCase());

  for (const qt of queryTokens) {
    // Title match (weight: 5)
    const titleMatches = titleTokens.filter((t) => t.includes(qt) || qt.includes(t)).length;
    score += titleMatches * 5;

    // Tag match (weight: 4)
    const tagMatches = tagTokens.filter((t) => t.includes(qt) || qt.includes(t)).length;
    score += tagMatches * 4;

    // Player name match (weight: 4)
    const playerMatches = playerTokens.filter((t) => t.includes(qt) || qt.includes(t)).length;
    score += playerMatches * 4;

    // Team abbreviation match (weight: 3)
    const teamMatches = teamTokens.filter((t) => t === qt || t.includes(qt)).length;
    score += teamMatches * 3;

    // Content match (weight: 1, with frequency bonus)
    const contentMatches = contentTokens.filter((t) => t.includes(qt) || qt.includes(t)).length;
    score += Math.min(contentMatches, 10); // Cap content matches to avoid long docs dominating
  }

  // Boost current/recent data
  if (doc.type === "narrative" || doc.type === "game" || doc.type === "player") {
    score *= 1.2;
  }

  // Normalize by query length to avoid bias toward longer queries
  return score / queryTokens.length;
}

// ═══════════════════════════════════════════════════════════
// SEARCH
// ═══════════════════════════════════════════════════════════

function search(query: string, topK: number = 5): ScoredDocument[] {
  const docs = buildDocuments();
  const queryTokens = tokenize(query);

  if (queryTokens.length === 0) return [];

  const scored: ScoredDocument[] = docs
    .map((doc) => ({ doc, score: scoreDocument(doc, queryTokens) }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);

  return scored;
}

// ═══════════════════════════════════════════════════════════
// PUBLIC API
// ═══════════════════════════════════════════════════════════

export function searchContext(query: string): string {
  const results = search(query, 5);

  if (results.length === 0) {
    return `No specific context found for this query. Current edition: ${pulseEdition.date} (${pulseEdition.edition}).`;
  }

  const sections = results.map((r, i) => {
    const { doc } = r;
    // Truncate content to keep context manageable
    const truncated =
      doc.content.length > 800 ? doc.content.slice(0, 800) + "..." : doc.content;
    return `[${i + 1}] ${doc.type.toUpperCase()} — ${doc.title}${doc.date ? ` (${doc.date})` : ""}\n${truncated}`;
  });

  return `Current Edition: ${pulseEdition.date} (${pulseEdition.edition})\n\n${sections.join("\n\n")}`;
}

export function getSuggestedQuestions(): string[] {
  return [
    "Who's the MVP frontrunner?",
    "What happened in the Nuggets-Thunder game?",
    "Compare Knueppel vs Flagg for ROY",
    "Which teams are in the play-in race?",
  ];
}
