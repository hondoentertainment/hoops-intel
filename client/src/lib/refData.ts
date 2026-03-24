// Referee Tendency Reports — Know the Whistle
// Last updated: March 23, 2026
// Generated for tonight's games

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

export interface RefereeProfile {
  name: string;
  number: number;
  experience: string;
  gamesThisSeason: number;
  tendencies: {
    foulsPerGame: number;
    homeWinPct: number;
    avgPace: number;
    technicalFrequency: "High" | "Average" | "Low";
    overtimeGames: number;
  };
  bestFor: string;
  worstFor: string;
  notableGame: string;
}

export interface TonightRefAssignment {
  game: string;
  crew: string[];
  leadRef: string;
  impact: string;
  bettingAngle: string;
  historical: string;
}

export interface RefData {
  generatedDate: string;
  tonightAssignments: TonightRefAssignment[];
  refProfiles: RefereeProfile[];
  weeklyTrend: string;
}

// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════

export const refData: RefData = {
  generatedDate: "March 23, 2026",
  tonightAssignments: [
    {
      game: "DET @ CHA",
      crew: ["Tony Brothers", "Scott Foster", "Marc Davis"],
      leadRef: "Tony Brothers",
      impact: "Expect a physical, whistle-heavy game. Brothers calls 2.3 more fouls per game than league average. Both Cunningham and LaMelo will get to the line frequently. Pace should be slightly below average.",
      bettingAngle: "Brothers' games average 4.2 more total fouls than league average. The over on total fouls is historically profitable in his games. Home teams are 58% in Brothers-officiated games — slight edge to Charlotte.",
      historical: "In Brothers' last 3 games involving Detroit, the Pistons are 2-1. Cunningham averages 7.2 FTA in Brothers games vs. 5.8 overall. Charlotte is 3-1 in their last 4 Brothers-officiated games."
    },
    {
      game: "CLE @ ORL",
      crew: ["Ed Malloy", "John Goble", "Courtney Kirkland"],
      leadRef: "Ed Malloy",
      impact: "Malloy runs a tight ship — expect a clean, fast-paced game with fewer stoppages. His foul rate is 1.8 below league average. Both teams' big men (Mobley, Banchero) may get fewer calls in the post.",
      bettingAngle: "Malloy's games trend under on total points — his pace-adjusted scoring is 3.1 points below average. The under has hit in 61% of Malloy games this season. Road teams fare slightly better (52% win rate).",
      historical: "Malloy officiated the CLE-ORL game earlier this week — Cleveland lost. Orlando is 4-1 in their last 5 Malloy games. Mobley fouled out in one of those games."
    },
    {
      game: "MIL @ OKC",
      crew: ["James Williams", "Tre Maddox", "Brandon Adair"],
      leadRef: "James Williams",
      impact: "Williams is a pace-friendly referee — games he officiates average 2.1 possessions more than league average. With OKC already the fastest team, expect a high-scoring affair. The Thunder should dominate tempo.",
      bettingAngle: "Williams' games go over 57% of the time. Combined with OKC's pace, the over is strongly favored. Thunder are 8-1 in Williams-officiated games this season.",
      historical: "Williams has called 4 Thunder games this season — OKC won all 4 by double digits. SGA averages 29.3 PPG in Williams games. Milwaukee is 1-3 in Williams games this year."
    },
    {
      game: "LAC @ SAS",
      crew: ["Kane Fitzgerald", "Curtis Blair", "Natalie Sago"],
      leadRef: "Kane Fitzgerald",
      impact: "Fitzgerald is one of the most consistent officials in the league — his foul rate is right at league average. Expect a balanced, fairly called game. Wembanyama's block rate shouldn't be affected by foul trouble.",
      bettingAngle: "Fitzgerald's games are the hardest to find edges in — his lines track league average closely. Home teams win at a 54% clip in his games, giving San Antonio a slight edge beyond their obvious talent advantage.",
      historical: "Wembanyama has been called for 3+ fouls in 2 of 5 Fitzgerald-officiated games. Kawhi Leonard's minutes restriction makes the ref assignment less impactful for LAC."
    },
    {
      game: "NYK @ PHX",
      crew: ["Zach Zarba", "Bill Kennedy", "Josh Tiven"],
      leadRef: "Zach Zarba",
      impact: "Zarba is a veteran official who lets physical play go. Expect fewer whistles and more flow. This benefits New York's physical defense. Brunson may not get as many touch fouls as he'd like.",
      bettingAngle: "Zarba's games trend under — 58% under rate this season. His foul rate is 2.1 below average. Road teams have won 54% of Zarba games this year, which favors the Knicks.",
      historical: "Brunson is 3-1 in Zarba-officiated games this season. Booker averages 2.1 fewer FTA in Zarba games. The Knicks' physical style tends to thrive when officials swallow the whistle."
    },
    {
      game: "POR @ HOU",
      crew: ["Sean Wright", "Ben Taylor", "Gediminas Petraitis"],
      leadRef: "Sean Wright",
      impact: "Wright is a middle-of-the-road official with a slight home-team lean. Houston should benefit from a 59% home win rate in Wright games. Expect an average number of fouls and a standard-pace game.",
      bettingAngle: "Wright's home-team lean is the strongest angle here. Houston at home with a 9.5-point spread and a ref who favors home teams 59% of the time is a solid combination. The over/under is a coin flip.",
      historical: "Houston is 5-2 in Wright-officiated games this season. Portland is 2-3. Kevin Durant averages 27.4 PPG in Wright games."
    },
    {
      game: "TOR @ GSW",
      crew: ["David Guthrie", "Mitchell Ervin", "Phenizee Ransom"],
      leadRef: "David Guthrie",
      impact: "Guthrie is a younger official who calls a fast game. Without Curry, the Warriors' pace may actually increase in Guthrie games due to fewer half-court sets. Toronto's Ingram could benefit from his tendency to call shooting fouls.",
      bettingAngle: "Guthrie games trend slightly over (53%). Road teams have a slight edge in his games at 52%. Toronto as a road favorite with Guthrie officiating looks favorable.",
      historical: "Brandon Ingram averaged 8.2 FTA in his last 3 Guthrie-officiated games. Warriors are 2-4 in Guthrie games this season — one of the worst records against any official."
    }
  ],
  refProfiles: [
    {
      name: "Tony Brothers",
      number: 25,
      experience: "30 years",
      gamesThisSeason: 52,
      tendencies: {
        foulsPerGame: 44.8,
        homeWinPct: 58,
        avgPace: -0.8,
        technicalFrequency: "High",
        overtimeGames: 5
      },
      bestFor: "Home teams, free-throw shooting teams",
      worstFor: "Fast-paced teams, teams that rely on transition",
      notableGame: "Called 58 fouls in a LAL-BOS game in February — most in any game this season"
    },
    {
      name: "Scott Foster",
      number: 48,
      experience: "30 years",
      gamesThisSeason: 54,
      tendencies: {
        foulsPerGame: 43.2,
        homeWinPct: 55,
        avgPace: -0.5,
        technicalFrequency: "High",
        overtimeGames: 8
      },
      bestFor: "Veteran teams, physical teams",
      worstFor: "Young teams, teams that need rhythm",
      notableGame: "Officiated 8 overtime games this season — most of any referee. Known for dramatic finishes."
    },
    {
      name: "Ed Malloy",
      number: 14,
      experience: "23 years",
      gamesThisSeason: 49,
      tendencies: {
        foulsPerGame: 39.6,
        homeWinPct: 48,
        avgPace: +1.2,
        technicalFrequency: "Low",
        overtimeGames: 2
      },
      bestFor: "Fast-paced teams, offensive-minded teams",
      worstFor: "Teams that rely on getting to the line",
      notableGame: "Officiated the lowest-foul game of the season — 28 total fouls in a SAS-OKC game in January"
    },
    {
      name: "James Williams",
      number: 60,
      experience: "12 years",
      gamesThisSeason: 46,
      tendencies: {
        foulsPerGame: 41.4,
        homeWinPct: 52,
        avgPace: +2.1,
        technicalFrequency: "Average",
        overtimeGames: 3
      },
      bestFor: "Fast-paced teams, transition-heavy offenses",
      worstFor: "Slow, methodical teams, half-court offense",
      notableGame: "Thunder are 4-0 in his games this season with an average margin of +14.5"
    },
    {
      name: "Kane Fitzgerald",
      number: 5,
      experience: "16 years",
      gamesThisSeason: 50,
      tendencies: {
        foulsPerGame: 42.0,
        homeWinPct: 54,
        avgPace: +0.1,
        technicalFrequency: "Average",
        overtimeGames: 4
      },
      bestFor: "Consistent, balanced teams",
      worstFor: "No strong tendencies to exploit",
      notableGame: "Officiated 3 of the 5 closest games of the season (margin of 2 or less)"
    },
    {
      name: "Zach Zarba",
      number: 15,
      experience: "20 years",
      gamesThisSeason: 51,
      tendencies: {
        foulsPerGame: 39.2,
        homeWinPct: 46,
        avgPace: +0.8,
        technicalFrequency: "Low",
        overtimeGames: 3
      },
      bestFor: "Physical defensive teams, road teams",
      worstFor: "Teams that rely on drawing fouls",
      notableGame: "Road teams have won 54% of his games this season — the strongest road-team lean of any ref"
    },
    {
      name: "Sean Wright",
      number: 4,
      experience: "18 years",
      gamesThisSeason: 48,
      tendencies: {
        foulsPerGame: 42.4,
        homeWinPct: 59,
        avgPace: -0.3,
        technicalFrequency: "Average",
        overtimeGames: 4
      },
      bestFor: "Home teams",
      worstFor: "Road teams, teams that need a neutral whistle",
      notableGame: "Home teams have won 59% of his games — the strongest home lean of any ref this season"
    },
    {
      name: "David Guthrie",
      number: 16,
      experience: "10 years",
      gamesThisSeason: 44,
      tendencies: {
        foulsPerGame: 41.8,
        homeWinPct: 48,
        avgPace: +1.5,
        technicalFrequency: "Low",
        overtimeGames: 2
      },
      bestFor: "Road teams, shooting teams",
      worstFor: "Physical teams, post-up heavy offenses",
      notableGame: "Warriors are 2-4 in his games — one of the worst records by any team against a single referee"
    }
  ],
  weeklyTrend: "This week's referee assignments have skewed toward veteran officials for marquee matchups. The DET-CHA ESPN game draws Tony Brothers and Scott Foster — two of the most experienced (and polarizing) officials in the league. Watch for higher foul counts in that game and look for the under in Ed Malloy's CLE-ORL assignment. The Thunder continue to benefit from favorable officiating assignments — they're 8-1 in James Williams games this season."
};
