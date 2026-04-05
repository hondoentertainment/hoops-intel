// Watch Priority Ranker — Tonight's games ranked by watchability
// Data sourced from gamePreviews in pulseData.ts
// Last updated: April 5, 2026

export interface WatchableGame {
  rank: number;
  homeTeam: string;
  awayTeam: string;
  time: string;
  tv: string;
  watchScore: number; // 0-100
  factors: {
    starPower: number; // 0-20
    playoffImplications: number; // 0-20
    rivalry: number; // 0-20
    entertainment: number; // 0-20
    storyline: number; // 0-20
  };
  headline: string;
  mustWatch: boolean;
  storyline: string;
  keyMatchup: string;
}

export interface WatchGuideData {
  date: string;
  games: WatchableGame[];
  topPick: { gameIndex: number; reason: string };
  sleeper: { gameIndex: number; reason: string };
  skipIt: { gameIndex: number; reason: string };
}

export const watchGuideData: WatchGuideData = {
  date: "Saturday, April 5, 2026",
  games: [
    {
      rank: 1,
      homeTeam: "NYK",
      awayTeam: "DET",
      time: "7:30 PM ET",
      tv: "ABC",
      watchScore: 95,
      factors: {
        starPower: 19,
        playoffImplications: 19,
        rivalry: 17,
        entertainment: 20,
        storyline: 20,
      },
      headline: "Saturday Primetime on ABC — East 1 vs. 3, Brunson's 51-Win Knicks Host Surging Detroit",
      mustWatch: true,
      storyline:
        "The marquee Saturday night game on ABC features two of the East's best. Brunson dropped 28/7 last night to push the Knicks to 51 wins, and New York is playing with the kind of confidence that makes the Garden feel like a playoff arena every night. Detroit has been one of the league's best stories and sits third in the East. This is the premier national TV window of the night — big stakes, big stage, big atmosphere.",
      keyMatchup:
        "Jalen Brunson vs. Cade Cunningham — two franchise point guards battling for East supremacy on the biggest stage of the regular-season Saturday slate.",
    },
    {
      rank: 2,
      homeTeam: "DEN",
      awayTeam: "OKC",
      time: "9:30 PM ET",
      tv: "TNT",
      watchScore: 93,
      factors: {
        starPower: 20,
        playoffImplications: 19,
        rivalry: 18,
        entertainment: 18,
        storyline: 18,
      },
      headline: "Jokic vs. SGA III — Thunder Desperate After Losing 3 Straight for First Time All Season",
      mustWatch: true,
      storyline:
        "OKC has lost three straight games for the first time all season and surrendered the 1-seed to San Antonio after Wemby's 32/10/6/3BLK masterpiece last night. Now the Thunder walk into Denver, where Luka just ended the Nuggets' 8-game win streak. Jokic and SGA are two MVP-caliber players who produce elite theater every time they share a floor. OKC is desperate, Denver is stinging from last night's loss — this is a powder keg on TNT.",
      keyMatchup:
        "Shai Gilgeous-Alexander vs. Nikola Jokic — the third installment of the season's best individual rivalry, with OKC needing a statement win to stop the bleeding.",
    },
    {
      rank: 3,
      homeTeam: "ATL",
      awayTeam: "BOS",
      time: "8:00 PM ET",
      tv: "ESPN",
      watchScore: 85,
      factors: {
        starPower: 18,
        playoffImplications: 16,
        rivalry: 15,
        entertainment: 18,
        storyline: 18,
      },
      headline: "Celtics W6 vs. Hawks W3 — Two Streaking Teams Collide on ESPN",
      mustWatch: false,
      storyline:
        "Boston's 6-game win streak meets Atlanta's 3-game heater in a compelling style clash on ESPN. Trae Young dropped 28/9 last night and has the Hawks rolling, while the Celtics have been dominant on both ends during their streak. This is a fascinating test for Atlanta — can Trae's hot stretch hold up against the East's best defense? And can Boston maintain their momentum against a Hawks team playing with genuine confidence for the first time in months?",
      keyMatchup:
        "Trae Young vs. Derrick White — Atlanta's offensive engine against Boston's elite perimeter defender, a matchup that will define the game's tempo and outcome.",
    },
    {
      rank: 4,
      homeTeam: "PHX",
      awayTeam: "LAC",
      time: "10:00 PM ET",
      tv: "",
      watchScore: 76,
      factors: {
        starPower: 17,
        playoffImplications: 15,
        rivalry: 15,
        entertainment: 15,
        storyline: 14,
      },
      headline: "Booker vs. Kawhi — Late-Night West Showdown in the Desert",
      mustWatch: false,
      storyline:
        "The late window features two of the West's most talented wings going head-to-head in Phoenix. Booker has been carrying the Suns through a tight playoff race, and Kawhi Leonard's health and availability remain the story of the Clippers' season. When both are on the floor, this is an elite basketball matchup. The question is whether it has enough playoff stakes to justify the 10 PM start — but for hoops junkies, Booker vs. Kawhi is always appointment television.",
      keyMatchup:
        "Devin Booker vs. Kawhi Leonard — two elite two-way wings with contrasting styles, each capable of taking over a game in the fourth quarter.",
    },
    {
      rank: 5,
      homeTeam: "ORL",
      awayTeam: "PHI",
      time: "6:00 PM ET",
      tv: "",
      watchScore: 68,
      factors: {
        starPower: 14,
        playoffImplications: 18,
        rivalry: 12,
        entertainment: 12,
        storyline: 12,
      },
      headline: "Play-In Battle — Sixers and Magic Scrap for Postseason Positioning",
      mustWatch: false,
      storyline:
        "The early window features a play-in battle between two teams desperate for postseason traction. Philadelphia and Orlando are both fighting for positioning in the East's crowded middle, and a loss here could mean the difference between a favorable play-in matchup and a brutal one. Neither team inspires overwhelming confidence, but the stakes are real and the urgency will be palpable from tip-off.",
      keyMatchup:
        "Tyrese Maxey vs. Paolo Banchero — two young franchise cornerstones carrying heavy loads, each trying to will their team into the playoffs.",
    },
  ],
  topPick: {
    gameIndex: 0,
    reason:
      "DET @ NYK on ABC is the Saturday primetime headliner. Brunson just put up 28/7 to push the Knicks to 51 wins, the Garden will be rocking, and Detroit as the East's 3-seed makes this a legitimate playoff preview. ABC's national window, electric atmosphere, elite guard play — this is the game you build your Saturday night around.",
  },
  sleeper: {
    gameIndex: 3,
    reason:
      "LAC @ PHX is buried in the 10 PM window but Booker vs. Kawhi is always worth watching when both are healthy. Phoenix is fighting for seeding and the Clippers are the definition of a wildcard. Worth flipping to after the TNT game winds down — these two have a way of producing memorable fourth quarters.",
  },
  skipIt: {
    gameIndex: 4,
    reason:
      "PHI @ ORL at 6 PM is a play-in battle with real stakes but limited star power and entertainment value compared to the rest of tonight's loaded slate. The early tip means it won't compete with the primetime games, and neither team has been consistent enough to promise a compelling product.",
  },
};
