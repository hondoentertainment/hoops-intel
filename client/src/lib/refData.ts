// Referee Tendency Reports — Know the Whistle
// Last updated: April 8, 2026

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
  generatedDate: "April 8, 2026",
  tonightAssignments: [
    {
      game: "CLE @ ATL",
      crew: ["Scott Foster", "Kane Fitzgerald", "Courtney Kirkland"],
      leadRef: "Scott Foster",
      impact: "Foster's physical tolerance and home-neutral tendencies (55% home win rate) could benefit Cleveland's road position in this crucial playoff seeding battle. His 43.4 fouls per game average suggests moderate whistle discipline, allowing both teams' stars to establish rhythm. Foster's high technical frequency could be a factor if tensions rise in this playoff-atmosphere contest between desperate teams.",
      bettingAngle: "Under bettors should be cautious — Foster's 9 overtime games this season are second-most among active refs, and his physical style could keep this close enough for extra basketball. The pace will slow slightly (-0.6 impact) which favors Cleveland's half-court execution over Atlanta's transition game.",
      historical: "Foster has officiated 4 Hawks games this season with Atlanta going 2-2, but he's been excellent in Cavs games where Cleveland is 6-2 in his assignments. His most recent Hawks game was their March collapse against Miami where Trae Young picked up a technical for arguing calls — Foster's zero-tolerance approach could again impact Young's aggression level."
    },
    {
      game: "OKC @ LAC",
      crew: ["Zach Zarba", "Ed Malloy", "James Williams"],
      leadRef: "Zach Zarba",
      impact: "Zarba's road-friendly tendencies (47% home win rate) and pace-positive impact (+1.2) strongly favor Oklahoma City's transition attack and athleticism advantage. His 39.6 fouls per game is well below league average, which should benefit OKC's defensive intensity and allow Shai Gilgeous-Alexander to attack aggressively without ticky-tack whistles slowing his rhythm.",
      bettingAngle: "Take the Over with confidence — Zarba's pace-positive impact combined with low foul frequency creates optimal conditions for a high-scoring affair. Road teams are 23-11 ATS in Zarba's assignments this season, making OKC an attractive play after yesterday's dominant Lakers performance.",
      historical: "Zarba has been exceptional for the Thunder this season, with OKC going 7-1 in his assignments including two blowout victories. The Clippers are just 2-4 in Zarba games, struggling against his whistle-swallowing style that negates their veteran savvy in working officials for favorable calls."
    }
  ],
  refProfiles: [
    {
      name: "Tony Brothers",
      number: 25,
      experience: "30 years",
      gamesThisSeason: 59,
      tendencies: {
        foulsPerGame: 45.2,
        homeWinPct: 58,
        avgPace: -0.9,
        technicalFrequency: "High",
        overtimeGames: 6,
      },
      bestFor: "Home teams, physical post players, veteran teams",
      worstFor: "Fast-paced transition teams, young teams prone to emotional reactions",
      notableGame: "Called 61 fouls in yesterday's CLE-MEM game where Cleveland scored 142 points — his whistle-heavy style paradoxically led to the highest-scoring game of the season as both teams got into bonus situations early and often."
    },
    {
      name: "Scott Foster",
      number: 48,
      experience: "30 years",
      gamesThisSeason: 61,
      tendencies: {
        foulsPerGame: 43.4,
        homeWinPct: 55,
        avgPace: -0.6,
        technicalFrequency: "High",
        overtimeGames: 9,
      },
      bestFor: "Physical defensive teams, veteran stars who know how to work officials",
      worstFor: "Young guards who rely on drawing touch fouls",
      notableGame: "Tonight's CLE-ATL assignment marks his return to Atlanta where he'll face Trae Young again — their history includes multiple technical fouls and heated exchanges, making Foster's zero-tolerance approach a key storyline in this playoff-atmosphere contest."
    },
    {
      name: "Zach Zarba",
      number: 15,
      experience: "20 years",
      gamesThisSeason: 58,
      tendencies: {
        foulsPerGame: 39.6,
        homeWinPct: 47,
        avgPace: 1.2,
        technicalFrequency: "Low",
        overtimeGames: 4,
      },
      bestFor: "Athletic teams, transition-heavy offenses, road underdogs",
      worstFor: "Teams that depend on getting to the free-throw line",
      notableGame: "Leading tonight's OKC-LAC crew after the Thunder's dominant performance yesterday — his whistle-swallowing style should allow Shai Gilgeous-Alexander to continue his aggressive attacking approach without getting bogged down in free-throw contests."
    },
    {
      name: "Ed Malloy",
      number: 14,
      experience: "23 years",
      gamesThisSeason: 56,
      tendencies: {
        foulsPerGame: 40.1,
        homeWinPct: 48,
        avgPace: 1.5,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "High-scoring offensive teams, road teams, pace-and-space systems",
      worstFor: "Grind-it-out defensive teams that rely on physicality",
      notableGame: "Working tonight's OKC-LAC game as part of Zarba's crew — his pace-positive impact (+1.5) is the highest among active officials, making him perfect for a potential Thunder transition showcase."
    },
    {
      name: "Kane Fitzgerald",
      number: 5,
      experience: "16 years",
      gamesThisSeason: 57,
      tendencies: {
        foulsPerGame: 42.3,
        homeWinPct: 53,
        avgPace: 0.2,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Balanced teams with multiple scoring options",
      worstFor: "Teams that need extreme officiating tendencies to succeed",
      notableGame: "Part of tonight's CLE-ATL crew under Scott Foster — Fitzgerald's neutral tendencies provide balance to Foster's more aggressive whistle, potentially creating a fair environment for both teams' playoff positioning battle."
    },
    {
      name: "Sean Wright",
      number: 4,
      experience: "18 years",
      gamesThisSeason: 55,
      tendencies: {
        foulsPerGame: 42.8,
        homeWinPct: 59,
        avgPace: -0.4,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Home teams, interior-focused offenses",
      worstFor: "Road teams seeking neutral whistles, perimeter-heavy offenses",
      notableGame: "His 59% home-win rate remains the strongest home lean among active officials — Wright's assignment patterns consistently show he favors the home team in marginal calls and late-game situations, making him valuable for home underdogs."
    },
    {
      name: "James Williams",
      number: 60,
      experience: "12 years",
      gamesThisSeason: 53,
      tendencies: {
        foulsPerGame: 41.7,
        homeWinPct: 52,
        avgPace: 2.1,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Athletic wings, transition offenses, high-scoring games",
      worstFor: "Methodical half-court teams, post-up heavy offenses",
      notableGame: "Working tonight's OKC-LAC matchup as the third member of Zarba's pace-friendly crew — Williams' +2.1 pace impact is the most aggressive among all officials, virtually guaranteeing an up-tempo affair that favors Oklahoma City's athleticism."
    },
    {
      name: "Marc Davis",
      number: 36,
      experience: "25 years",
      gamesThisSeason: 57,
      tendencies: {
        foulsPerGame: 44.0,
        homeWinPct: 54,
        avgPace: -0.3,
        technicalFrequency: "High",
        overtimeGames: 6,
      },
      bestFor: "Veteran teams with strong leadership, home favorites",
      worstFor: "Young teams that argue calls, emotionally volatile players",
      notableGame: "Called double technicals on both benches in a heated March game between Miami and Philadelphia — Davis doesn't tolerate sideline antics and his technical frequency reflects his zero-tolerance approach to emotional outbursts."
    },
    {
      name: "Ben Taylor",
      number: 46,
      experience: "19 years",
      gamesThisSeason: 54,
      tendencies: {
        foulsPerGame: 38.9,
        homeWinPct: 49,
        avgPace: 0.8,
        technicalFrequency: "Low",
        overtimeGames: 2,
      },
      bestFor: "Defensive-minded teams, teams that play clean basketball",
      worstFor: "Teams that need favorable whistles to create offense",
      notableGame: "Officiated the season's lowest-foul game with just 26 total fouls in a January Spurs-Thunder matchup — Taylor's whistle discipline creates pure basketball environments where skill determines outcomes."
    },
    {
      name: "Courtney Kirkland",
      number: 61,
      experience: "15 years",
      gamesThisSeason: 52,
      tendencies: {
        foulsPerGame: 43.1,
        homeWinPct: 51,
        avgPace: 0.5,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Consistent, well-coached teams",
      worstFor: "Teams that rely on getting favorable bounces from officials",
      notableGame: "Working tonight's CLE-ATL game under Scott Foster — Kirkland's neutral approach provides balance to Foster's more aggressive tendencies, creating a fair environment for this crucial playoff positioning battle."
    }
  ],
  weeklyTrend: "Tonight's two-game slate features contrasting officiating philosophies that could significantly impact playoff positioning. The CLE-ATL assignment pairs Scott Foster's physical, high-technical approach with Kane Fitzgerald's balanced tendencies, creating an environment where veteran execution will be rewarded over emotional reactions. Foster's history with Trae Young adds intrigue to a game with massive seeding implications. Meanwhile, the OKC-LAC crew represents the most pace-positive combination possible — Zarba (+1.2), Malloy (+1.5), and Williams (+2.1) combine for a +4.8 pace impact that should create ideal conditions for Oklahoma City's transition attack coming off yesterday's dominant Lakers performance. The Thunder are 7-1 in Zarba assignments this season, while the Clippers struggle against his road-friendly tendencies. After yesterday's officiating variations — from Tony Brothers' whistle-heavy 61-foul game to Ben Taylor's free-flowing approach — tonight's crews represent polar opposites that will test different team strengths. Foster's physical tolerance in Atlanta rewards half-court execution, while Zarba's whistle discipline in Los Angeles favors athletic superiority. Both games carry massive playoff implications, and the officiating styles should amplify each matchup's natural dynamics rather than neutralize them."
};
