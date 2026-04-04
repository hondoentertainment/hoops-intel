// Watch Priority Ranker — Tonight's games ranked by watchability
// Data sourced from gamePreviews in pulseData.ts
// Last updated: April 4, 2026

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
  date: "Friday, April 4, 2026",
  games: [
    {
      rank: 1,
      homeTeam: "SAS",
      awayTeam: "OKC",
      time: "8:30 PM ET",
      tv: "ESPN",
      watchScore: 96,
      factors: {
        starPower: 20,
        playoffImplications: 20,
        rivalry: 18,
        entertainment: 19,
        storyline: 19,
      },
      headline: "1-Seed Showdown — Wemby's Spurs Host SGA's Thunder at 59-18 Apiece",
      mustWatch: true,
      storyline:
        "This is the game of the regular season. San Antonio's 11-game win streak — capped by Wemby's 28/12/5/4BLK demolition of Minnesota last night — has pulled the Spurs dead even with OKC at 59-18. Both teams are playing for the 1-seed, home court through the West playoffs, and bragging rights between the two best young stars in basketball. The Spurs are the hottest team in the league and the Thunder need to answer. This has playoff intensity baked into every possession.",
      keyMatchup:
        "Victor Wembanyama vs. Chet Holmgren — two 7-foot unicorns who can shoot, block, and handle, going head-to-head with the 1-seed on the line.",
    },
    {
      rank: 2,
      homeTeam: "LAL",
      awayTeam: "DEN",
      time: "10:00 PM ET",
      tv: "TNT",
      watchScore: 89,
      factors: {
        starPower: 19,
        playoffImplications: 18,
        rivalry: 17,
        entertainment: 18,
        storyline: 17,
      },
      headline: "Luka's Lakers vs. Jokic's Nuggets — West 3 vs. 4 Under the Lights",
      mustWatch: true,
      storyline:
        "The Lakers are riding a 4-game win streak with Luka looking unstoppable (32/7/9 last night) and now host Denver in a TNT late-night special separating the 3 and 4 seeds in the West. Jokic and the Nuggets have owned this matchup historically, but Luka has changed the calculus entirely. Two MVP-caliber playmakers going at each other with seeding and potential playoff matchup implications makes this the best late game of the week.",
      keyMatchup:
        "Luka Doncic vs. Nikola Jokic — two of the most cerebral offensive players alive, each capable of bending the game to his will in completely different ways.",
    },
    {
      rank: 3,
      homeTeam: "NYK",
      awayTeam: "CLE",
      time: "7:30 PM ET",
      tv: "TNT",
      watchScore: 84,
      factors: {
        starPower: 17,
        playoffImplications: 17,
        rivalry: 17,
        entertainment: 17,
        storyline: 16,
      },
      headline: "Knicks-Cavs Rematch at the Garden — East Heavyweights Collide Again",
      mustWatch: false,
      storyline:
        "New York and Cleveland have been trading haymakers all season, and this rematch at MSG has real postseason preview energy. Brunson and the Knicks are rolling, Cleveland is trying to hold position in a tightening East race, and the Garden crowd will be electric. With Boston pulling ahead on a 6-game win streak, neither team can afford a slip. This is the early-evening appetizer before the Western Conference headliners.",
      keyMatchup:
        "Jalen Brunson vs. Darius Garland — two undersized, fearless point guards who thrive in big moments and will each try to put their stamp on this rivalry.",
    },
    {
      rank: 4,
      homeTeam: "MIA",
      awayTeam: "ATL",
      time: "7:30 PM ET",
      tv: "",
      watchScore: 72,
      factors: {
        starPower: 14,
        playoffImplications: 17,
        rivalry: 13,
        entertainment: 14,
        storyline: 14,
      },
      headline: "Play-In Pressure Cooker — Hawks and Heat Battle for Survival",
      mustWatch: false,
      storyline:
        "Both Atlanta and Miami are fighting for their postseason lives in the East play-in race, and a loss here could be devastating for either side. Trae Young has been carrying the Hawks with big scoring nights and Miami's veteran-heavy roster knows how to win desperate games. This is the kind of under-the-radar matchup where someone's season effectively ends even though there are still games left to play. High stakes, low margin for error.",
      keyMatchup:
        "Trae Young vs. Jimmy Butler — Atlanta's engine against Miami's closer, both needing a signature performance to keep their team's season alive.",
    },
    {
      rank: 5,
      homeTeam: "TOR",
      awayTeam: "CHA",
      time: "7:00 PM ET",
      tv: "",
      watchScore: 51,
      factors: {
        starPower: 11,
        playoffImplications: 12,
        rivalry: 8,
        entertainment: 10,
        storyline: 10,
      },
      headline: "Play-In Desperation — Charlotte and Toronto Claw at the East's Last Spots",
      mustWatch: false,
      storyline:
        "Two teams on the fringes of the play-in race meet in what amounts to a desperation game for both. Neither Toronto nor Charlotte has the firepower to scare anyone in the postseason, but the loser here is essentially done. LaMelo Ball and Scottie Barnes provide some young star intrigue, but the overall product is likely to be sloppy and low-stakes compared to the rest of tonight's slate. Background noise for a stacked Friday.",
      keyMatchup:
        "LaMelo Ball vs. Scottie Barnes — two dynamic young talents trying to will their teams into postseason relevance in a game most fans won't be watching.",
    },
  ],
  topPick: {
    gameIndex: 0,
    reason:
      "OKC @ SAS is the regular-season game of the year. Both teams are 59-18, tied for the 1-seed, and playing with playoff intensity. Wemby is coming off a 28/12/5/4BLK masterpiece and the Spurs are on an 11-game heater. SGA and the Thunder need to respond. This is must-watch from tip to buzzer — the kind of Friday night game you build your evening around.",
  },
  sleeper: {
    gameIndex: 3,
    reason:
      "ATL @ MIA is a play-in desperation game that could produce genuine intensity. Both teams are fighting for survival, Trae Young has been on a tear, and Miami plays with a different edge when their backs are against the wall. Worth flipping to during breaks from the marquee games — the stakes are higher than the national profile suggests.",
  },
  skipIt: {
    gameIndex: 4,
    reason:
      "CHA @ TOR is two fringe play-in teams stumbling toward the finish line. Neither roster has the depth or consistency to be compelling, and this game will be overshadowed by three superior matchups airing at the same time or shortly after. Save your attention for the 1-seed showdown.",
  },
};
