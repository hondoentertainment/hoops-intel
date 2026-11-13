/**
 * Stops a daily edition from shipping invented leaders.
 *
 * ESPN's scoreboard payload does not include `competitions[].leaders`.
 * The generator used to hand the model finals with empty leader arrays and
 * an instruction to feature only 4–6 games, so star lines and a short
 * gameResults list could publish together. Box lines come from the summary
 * endpoint; these checks refuse a draft that disagrees with them.
 */

import { canonicalNbaAbbrev } from "./content-quality-constants.mjs";

const SUFFIX = /^(jr|sr|ii|iii|iv|v)$/i;

export function playerSurname(name) {
  const parts = String(name ?? "")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .split(/\s+/)
    .filter(Boolean);
  while (parts.length > 1 && SUFFIX.test(parts[parts.length - 1].replace(/\./g, ""))) {
    parts.pop();
  }
  return (parts[parts.length - 1] ?? "").toLowerCase();
}

export function normPlayerName(name) {
  return String(name ?? "")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

export function pulseIndexConsistencyErrors(index) {
  const errors = [];
  if (!Array.isArray(index)) return ["pulseIndex is not an array"];
  const seen = new Map();
  for (const row of index) {
    const name = row?.player ?? "";
    if (!name) {
      errors.push("pulseIndex row is missing a player");
      continue;
    }
    if (seen.has(name)) {
      errors.push(`duplicate Pulse player ${name} at ranks ${seen.get(name)} and ${row.rank}`);
    } else {
      seen.set(name, row.rank);
    }
    const surname = playerSurname(name);
    const about = `${row?.note ?? ""} ${row?.rationale ?? ""}`
      .normalize("NFD")
      .replace(/\p{M}/gu, "")
      .toLowerCase();
    if (surname && !about.includes(surname)) {
      errors.push(`Pulse rank ${row.rank} ${name} note/rationale does not mention ${surname}`);
    }
    if (!/\d+\s*PTS/i.test(String(row?.keyStats ?? ""))) {
      errors.push(`Pulse rank ${row.rank} ${name} keyStats has no point total`);
    }
  }
  return errors;
}

export function tickerFinalCoverageErrors(gameResults, tickerItems) {
  const errors = [];
  for (const item of tickerItems ?? []) {
    const text = String(item?.text ?? "");
    const match = text.match(/FINAL:\s*([A-Z]{2,3})\s+(\d+),\s*([A-Z]{2,3})\s+(\d+)/);
    if (!match) continue;
    const final = {
      a: match[1],
      as: Number(match[2]),
      b: match[3],
      bs: Number(match[4]),
    };
    const hit = (gameResults ?? []).some((game) => {
      const pairs = [
        [game.awayTeam, game.awayScore, game.homeTeam, game.homeScore],
        [game.homeTeam, game.homeScore, game.awayTeam, game.awayScore],
      ];
      return pairs.some(([t1, s1, t2, s2]) => t1 === final.a && s1 === final.as && t2 === final.b && s2 === final.bs);
    });
    if (!hit) {
      errors.push(`ticker final ${final.a} ${final.as}, ${final.b} ${final.bs} missing from gameResults`);
    }
  }
  return errors;
}

function countingMismatches(label, text, line) {
  const errors = [];
  const checks = [
    ["PTS", line.pts],
    ["REB", line.reb],
    ["AST", line.ast],
    ["STL", line.stl],
    ["BLK", line.blk],
    ["3PM", line.tpm],
  ];
  for (const [token, actual] of checks) {
    const match = String(text ?? "").match(new RegExp(`(\\d+)\\s*${token}`, "i"));
    if (!match) continue;
    if (Number(match[1]) !== actual) {
      errors.push(`${label} ${token} ${match[1]} does not match box ${actual}`);
    }
  }
  return errors;
}

export function playerLinesFromSummary(summary) {
  const lines = [];
  for (const team of summary?.boxscore?.players ?? []) {
    const abbr = canonicalNbaAbbrev(team?.team?.abbreviation ?? "");
    for (const athlete of team?.statistics?.[0]?.athletes ?? []) {
      if (athlete?.didNotPlay) continue;
      const stats = athlete.stats ?? [];
      if (!stats.length || stats[1] == null || stats[1] === "") continue;
      lines.push({
        player: athlete.athlete?.displayName ?? "",
        team: abbr,
        pts: Number(stats[1]),
        reb: Number(stats[5]),
        ast: Number(stats[6]),
        stl: Number(stats[8]),
        blk: Number(stats[9]),
        tpm: Number(String(stats[3] ?? "0").split("-")[0]),
        pm: Number(stats[13]),
      });
    }
  }
  return lines.filter((row) => row.player && Number.isFinite(row.pts));
}

export function promptPlayerLine(row) {
  const pm = row.pm > 0 ? `+${row.pm}` : String(row.pm);
  return `${row.player} (${row.team}) ${row.pts} PTS, ${row.reb} REB, ${row.ast} AST, ${row.stl} STL, ${row.blk} BLK, ${row.tpm} 3PM, ${pm}`;
}

export async function attachOfficialBoxLines(games, fetchImpl = fetch) {
  const finals = (games ?? []).filter((game) => game.status === "final");
  await Promise.all(
    finals.map(async (game) => {
      if (!game.eventId) {
        throw new Error(`final ${game.awayTeam} @ ${game.homeTeam} has no ESPN event id`);
      }
      const url = `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=${game.eventId}`;
      const res = await fetchImpl(url);
      if (!res.ok) throw new Error(`ESPN box ${url} returned ${res.status}`);
      const summary = await res.json();
      game.playerLines = playerLinesFromSummary(summary);
      if (!game.playerLines.length) {
        throw new Error(`ESPN box ${game.eventId} returned no player lines`);
      }
    }),
  );
}

function findLine(lines, name) {
  const key = normPlayerName(name);
  return (lines ?? []).find((row) => normPlayerName(row.player) === key);
}

export function gameResultBoxErrors(gameResults, finals) {
  const errors = [];
  if (!finals?.length) return errors;
  if ((gameResults?.length ?? 0) < finals.length) {
    errors.push(`gameResults has ${gameResults?.length ?? 0} rows; ESPN finals has ${finals.length}`);
  }
  for (const game of finals) {
    const away = canonicalNbaAbbrev(game.awayTeam);
    const home = canonicalNbaAbbrev(game.homeTeam);
    const row = (gameResults ?? []).find((result) => result.awayTeam === away && result.homeTeam === home);
    if (!row) {
      errors.push(`missing gameResults for ${away} @ ${home}`);
      continue;
    }
    if (row.awayScore !== game.awayScore || row.homeScore !== game.homeScore) {
      errors.push(`score mismatch ${away} @ ${home}`);
    }
    const line = findLine(game.playerLines, row.topPerformer);
    if (!line) {
      errors.push(`topPerformer ${row.topPerformer} is not in the box for ${away} @ ${home}`);
      continue;
    }
    errors.push(...countingMismatches(`${row.topPerformer} topLine`, row.topLine, line));
  }
  return errors;
}

export function pulseStatBoxErrors(pulseIndex, lines) {
  const errors = [];
  for (const row of pulseIndex ?? []) {
    const line = findLine(lines, row.player);
    if (!line) {
      errors.push(`Pulse player ${row.player} is not in the ESPN boxes`);
      continue;
    }
    errors.push(...countingMismatches(`Pulse ${row.player} keyStats`, row.keyStats, line));
  }
  return errors;
}

const LEADER_STAT = {
  Points: "pts",
  Rebounds: "reb",
  Assists: "ast",
  "3-Pointers": "tpm",
  Blocks: "blk",
  "+/-": "pm",
};

export function statLeaderBoxErrors(statLeaders, lines) {
  const errors = [];
  if (!lines?.length) return errors;
  for (const leader of statLeaders ?? []) {
    const key = LEADER_STAT[leader.category];
    if (!key) continue;
    const value = Number(String(leader.value ?? "").replace("+", ""));
    const line = findLine(lines, leader.player);
    if (!line) {
      errors.push(`stat leader ${leader.player} is not in the ESPN boxes`);
      continue;
    }
    if (line[key] !== value) {
      errors.push(`${leader.category} leader ${leader.player} value ${leader.value} does not match box ${line[key]}`);
    }
    const max = Math.max(...lines.map((row) => row[key]));
    if (value !== max) {
      errors.push(`${leader.category} leader ${leader.value} is not the slate high of ${max}`);
    }
  }
  return errors;
}

function formatLeaderValue(key, n) {
  return key === "pm" && n > 0 ? `+${n}` : String(n);
}

/**
 * One row per LEADER_STAT category from the ESPN boxes. Ties keep the
 * first player in `lines`. Nov 13 2026 regenerated the whole edition
 * because Rebounds was 14 instead of 15, then +/- was +21 instead of +27.
 */
export function slateStatLeaders(lines) {
  if (!lines?.length) return [];
  return Object.entries(LEADER_STAT).map(([category, key]) => {
    const max = Math.max(...lines.map((row) => row[key]));
    const row = lines.find((r) => r[key] === max);
    const value = formatLeaderValue(key, max);
    const context = category === "+/-"
      ? `${row.player} was ${value} on the slate, the high mark.`
      : `${row.player}'s ${value} ${category.toLowerCase()} led the slate.`;
    return { category, player: row.player, team: row.team, value, context };
  });
}

function existingLeaderContext(block) {
  const kept = new Map();
  for (const obj of block.matchAll(/\{[^{}]*\}/g)) {
    const category = obj[0].match(/\bcategory:\s*"([^"]+)"/)?.[1];
    const player = obj[0].match(/\bplayer:\s*"([^"]+)"/)?.[1];
    const value = obj[0].match(/\bvalue:\s*"([^"]+)"/)?.[1];
    const context = obj[0].match(/\bcontext:\s*"((?:\\.|[^"\\])*)"/)?.[1];
    if (category && player && value && context != null) {
      kept.set(category, { player, value, context: context.replace(/\\"/g, '"') });
    }
  }
  return kept;
}

/** Rewrite `export const statLeaders` from ESPN slate highs. Keep Claude's context when player+value already match. */
export function stampStatLeadersSource(source, lines) {
  const official = slateStatLeaders(lines);
  if (!official.length) return source;
  const match = String(source).match(/export const statLeaders\s*=\s*\[[\s\S]*?\];/);
  if (!match) return source;
  const kept = existingLeaderContext(match[0]);
  const rows = official.map((row) => {
    const prev = kept.get(row.category);
    const context = prev && prev.player === row.player && prev.value === row.value
      ? prev.context
      : row.context;
    return `{category:${JSON.stringify(row.category)},player:${JSON.stringify(row.player)},team: ${JSON.stringify(row.team)},value:${JSON.stringify(row.value)},context:${JSON.stringify(context)}}`;
  });
  return source.replace(match[0], `export const statLeaders = [\n  ${rows.join(",\n  ")}\n];`);
}

export function collectEditionBoxErrors(scope, finals) {
  const lines = (finals ?? []).flatMap((game) => game.playerLines ?? []);
  return [
    ...pulseIndexConsistencyErrors(scope?.pulseIndex),
    ...tickerFinalCoverageErrors(scope?.gameResults, scope?.tickerItems),
    ...gameResultBoxErrors(scope?.gameResults, finals),
    ...pulseStatBoxErrors(scope?.pulseIndex, lines),
    ...statLeaderBoxErrors(scope?.statLeaders, lines),
  ];
}
