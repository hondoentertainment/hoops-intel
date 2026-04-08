// Referee Tendency Reports — Know the Whistle
// Last updated: April 7, 2026

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

export const refData: RefData = {
  generatedDate: "April 7, 2026",
  tonightAssignments: [],
  refProfiles: [
    {
      name: "Tony Brothers",
      number: 25,
      experience: "30 years",
      gamesThisSeason: 58,
      tendencies: {
        foulsPerGame: 45.2,
        homeWinPct: 58,
        avgPace: -0.9,
        technicalFrequency: "High",
        overtimeGames: 6,
      },
      bestFor: "Home teams, physical post players, veteran teams",
      worstFor: "Fast-paced transition teams, young teams prone to emotional reactions",
      notableGame:
        "Called 61 fouls in yesterday's CLE-MEM game where Cleveland scored 142 points — his whistle-heavy style paradoxically led to the highest-scoring game of the season as both teams got into bonus situations early and often.",
    },
    {
      name: "Scott Foster",
      number: 48,
      experience: "30 years",
      gamesThisSeason: 60,
      tendencies: {
        foulsPerGame: 43.4,
        homeWinPct: 55,
        avgPace: -0.6,
        technicalFrequency: "High",
        overtimeGames: 9,
      },
      bestFor: "Physical defensive teams, veteran stars who know how to work officials",
      worstFor: "Young guards who rely on drawing touch fouls",
      notableGame:
        "Officiated yesterday's NY-ATL thriller where Brunson hit clutch free throws with 12 seconds left — Foster's physical tolerance throughout the game made those final FTAs even more meaningful in the 108-105 Knicks victory.",
    },
    {
      name: "Zach Zarba",
      number: 15,
      experience: "20 years",
      gamesThisSeason: 57,
      tendencies: {
        foulsPerGame: 39.6,
        homeWinPct: 47,
        avgPace: 1.2,
        technicalFrequency: "Low",
        overtimeGames: 4,
      },
      bestFor: "Athletic teams, transition-heavy offenses, road underdogs",
      worstFor: "Teams that depend on getting to the free-throw line",
      notableGame:
        "His whistle-swallowing style was perfect for yesterday's SA-PHI game where Wembanyama dominated with 28 points and 5 blocks — Zarba let the physical play continue, allowing the Spurs to extend their streak to 13 games.",
    },
    {
      name: "Ed Malloy",
      number: 14,
      experience: "23 years",
      gamesThisSeason: 55,
      tendencies: {
        foulsPerGame: 40.1,
        homeWinPct: 48,
        avgPace: 1.5,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "High-scoring offensive teams, road teams, pace-and-space systems",
      worstFor: "Grind-it-out defensive teams that rely on physicality",
      notableGame:
        "Called yesterday's ORL-DET upset where Banchero scored 35 points — his free-flowing style allowed Orlando's offensive takeover to happen naturally without excessive stoppages that might have cooled off the Magic's hot shooting.",
    },
    {
      name: "Kane Fitzgerald",
      number: 5,
      experience: "16 years",
      gamesThisSeason: 56,
      tendencies: {
        foulsPerGame: 42.3,
        homeWinPct: 53,
        avgPace: 0.2,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Balanced teams with multiple scoring options",
      worstFor: "Teams that need extreme officiating tendencies to succeed",
      notableGame:
        "Worked yesterday's DEN-POR overtime thriller where Jokic posted a triple-double — Fitzgerald's neutral tendencies allowed the game to reach its natural conclusion without controversial calls affecting the outcome.",
    },
    {
      name: "Sean Wright",
      number: 4,
      experience: "18 years",
      gamesThisSeason: 54,
      tendencies: {
        foulsPerGame: 42.8,
        homeWinPct: 59,
        avgPace: -0.4,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Home teams, interior-focused offenses",
      worstFor: "Road teams seeking neutral whistles, perimeter-heavy offenses",
      notableGame:
        "His 59% home-win rate is the strongest home lean among active officials — Wright's assignment patterns show he consistently favors the home team in marginal calls and late-game situations.",
    },
    {
      name: "James Williams",
      number: 60,
      experience: "12 years",
      gamesThisSeason: 52,
      tendencies: {
        foulsPerGame: 41.7,
        homeWinPct: 52,
        avgPace: 2.1,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Athletic wings, transition offenses, high-scoring games",
      worstFor: "Methodical half-court teams, post-up heavy offenses",
      notableGame:
        "His pace-friendly style contributed to several 130+ point games this season — Williams' quick whistle on clear fouls but tolerance for physical play keeps games flowing at optimal speed.",
    },
    {
      name: "Marc Davis",
      number: 36,
      experience: "25 years",
      gamesThisSeason: 56,
      tendencies: {
        foulsPerGame: 44.0,
        homeWinPct: 54,
        avgPace: -0.3,
        technicalFrequency: "High",
        overtimeGames: 6,
      },
      bestFor: "Veteran teams with strong leadership, home favorites",
      worstFor: "Young teams that argue calls, emotionally volatile players",
      notableGame:
        "Called double technicals on both benches in a heated March game between Miami and Philadelphia — Davis doesn't tolerate sideline antics and his technical frequency reflects his zero-tolerance approach.",
    },
    {
      name: "Ben Taylor",
      number: 46,
      experience: "19 years",
      gamesThisSeason: 53,
      tendencies: {
        foulsPerGame: 38.9,
        homeWinPct: 49,
        avgPace: 0.8,
        technicalFrequency: "Low",
        overtimeGames: 2,
      },
      bestFor: "Defensive-minded teams, teams that play clean basketball",
      worstFor: "Teams that need favorable whistles to create offense",
      notableGame:
        "Officiated the season's lowest-foul game with just 26 total fouls in a January Spurs-Thunder matchup — Taylor's whistle discipline creates pure basketball environments where skill determines outcomes.",
    },
    {
      name: "Courtney Kirkland",
      number: 61,
      experience: "15 years",
      gamesThisSeason: 51,
      tendencies: {
        foulsPerGame: 43.1,
        homeWinPct: 51,
        avgPace: 0.5,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Consistent, well-coached teams",
      worstFor: "Teams that rely on getting favorable bounces from officials",
      notableGame:
        "Called a perfectly balanced game in yesterday's action where neither team could claim officiating influenced the outcome — Kirkland's neutral approach makes him ideal for high-stakes matchups.",
    },
  ],
  weeklyTrend:
    "No games tonight creates a perfect opportunity to analyze yesterday's officiating patterns and their impact on playoff positioning. Tony Brothers' whistle-heavy approach in Cleveland's 142-point explosion shows how high-foul games can paradoxically create offensive showcases when both teams reach bonus situations early. Scott Foster's physical tolerance in the Knicks-Hawks thriller allowed Brunson's clutch free throws to carry more weight since Foster had swallowed his whistle throughout the game. Meanwhile, Zach Zarba's free-flowing style perfectly complemented San Antonio's 13th straight win, letting Wembanyama's dominance occur naturally without excessive stoppages. The most impactful call was Ed Malloy's pace-friendly approach in Orlando's upset of Detroit — his quick whistles on clear fouls but tolerance for physical play allowed Banchero's 35-point takeover to develop organically. Tomorrow's slate will feature crews that have been rested, meaning we should expect sharper officiating and more consistent whistle patterns as teams make their final push for playoff positioning. The rest day also allows the league office to review yesterday's controversial calls and provide guidance to tomorrow's crews."
};
