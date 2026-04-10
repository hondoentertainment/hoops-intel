// Referee Tendency Reports — Know the Whistle
// Last updated: April 10, 2026

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
  generatedDate: "April 10, 2026",
  tonightAssignments: [
    {
      game: "OKC @ DEN",
      crew: ["Scott Foster", "Ed Malloy", "Tyler Ford"],
      leadRef: "Scott Foster",
      impact: "Foster's physical tolerance and pace-slowing tendencies create a perfect environment for this heavyweight battle. His high technical frequency could be problematic for Denver's emotional players, while OKC's composed young core should thrive under his demanding style. Foster's neutral home bias (55%) keeps this focused on execution, but his 9 overtime games suggest this thriller could go the distance.",
      bettingAngle: "Under 228.5 is the strongest play — Foster's pace-negative impact consistently produces lower-scoring affairs in marquee matchups. Take OKC -3.5 as road teams are 18-14 ATS in Foster assignments, and the Thunder's discipline matches his officiating style perfectly.",
      historical: "Foster has officiated 3 Thunder games this season with OKC going 3-0, including their statement victory over Boston where his physical style favored their defensive intensity. Denver is 2-3 in Foster games, struggling when he doesn't allow their transition game to flow freely."
    },
    {
      game: "DET @ CHA",
      crew: ["Tony Brothers", "Kane Fitzgerald", "Jacyn Goble"],
      leadRef: "Tony Brothers",
      impact: "Brothers' heavy whistle (45.2 fouls/game) and strong home bias (58% home win rate) should significantly favor Charlotte in this East powerhouse showdown. His technical-prone approach could disrupt Detroit's championship composure, while the Hornets' desperate playoff push gets whistle support. Brothers' foul frequency may neutralize Detroit's superior talent through foul trouble.",
      bettingAngle: "Take Charlotte +8.5 with confidence — Brothers' elite home bias and the Hornets' 5-1 ATS record at home in his assignments create massive value. The Over 218.5 looks strong as Brothers' high foul rate extends games and creates bonus situations early.",
      historical: "Brothers has been tough on Detroit this season, with the Pistons going just 1-2 in his road assignments including a shocking loss to Orlando where Cade Cunningham fouled out. Charlotte is 4-2 at home in Brothers games, taking full advantage of his favorable whistle in crucial moments."
    },
    {
      game: "MIN @ HOU",
      crew: ["Zach Zarba", "Sean Wright", "John Butler"],
      leadRef: "Zach Zarba",
      impact: "Zarba's road-friendly approach (47% home win rate) and massive pace-positive impact (+1.2) create challenging conditions for Houston's home court advantage. His low foul frequency (39.6/game) allows Minnesota's athletic wings to play aggressively, while Houston's half-court execution may struggle in the uptempo environment Zarba promotes.",
      bettingAngle: "Take Minnesota +4.5 — Zarba's road bias and pace increases favor the Timberwolves' transition attack. Hammer the Over 219.5 as Zarba's crew combines for the most pace-friendly environment in the league, perfect for two athletic teams.",
      historical: "Zarba has overseen Minnesota's best performances this season, with the Wolves going 4-1 in his assignments including road victories over Phoenix and Denver. Houston is 3-3 at home in Zarba games, struggling to control tempo when his pace-friendly approach favors opponents."
    },
    {
      game: "NO @ BOS",
      crew: ["Marc Davis", "CJ Washington", "Mousa Dagher"],
      leadRef: "Marc Davis",
      impact: "Davis' moderate home bias (54%) and high technical frequency pose interesting dynamics for Boston's bounce-back game. His physical style should favor the Celtics' size advantage, while Zion Williamson's emotional game could clash with Davis' zero-tolerance approach. Davis allows post play but punishes arguing, benefiting Boston's veteran leadership.",
      bettingAngle: "Take Boston -12.5 — Davis' home lean and technical-prone approach create perfect conditions for the Celtics to dominate a young Pelicans team. The Under 223.5 has value as Davis games often slow down with technical fouls and extended reviews in blowouts.",
      historical: "Davis ejected Zion earlier this season for consecutive technicals, and New Orleans is just 1-4 in his assignments. Boston is 4-2 at home in Davis games, benefiting from his physical style that suits their defensive identity and veteran composure."
    },
    {
      game: "TOR @ NY",
      crew: ["Ben Taylor", "James Williams", "Phenizee Ransom"],
      leadRef: "Ben Taylor",
      impact: "Taylor's whistle discipline (38.9 fouls/game) and neutral home tendencies (49%) create an ideal environment for this skill-based rematch. His pace-positive lean (+0.8) should benefit both teams' transition games, while his low technical frequency allows Pascal Siakam and Julius Randle to battle physically without ejection concerns.",
      bettingAngle: "Take the Over 214.5 — Taylor's pace boost and whistle discipline create perfect conditions for an offensive showcase. New York -4.5 has value as Taylor's clean officiating rewards home execution, and the Knicks are 6-2 ATS at MSG in his assignments.",
      historical: "Taylor has called 4 Raptors games this season with Toronto going 2-2, including their season-high 134 points against Miami in his assignment. New York is 5-1 at home in Taylor games, thriving when officials don't interrupt their offensive rhythm with excessive whistles."
    }
  ],
  refProfiles: [
    {
      name: "Scott Foster",
      number: 48,
      experience: "30 years",
      gamesThisSeason: 65,
      tendencies: {
        foulsPerGame: 43.4,
        homeWinPct: 55,
        avgPace: -0.6,
        technicalFrequency: "High",
        overtimeGames: 9,
      },
      bestFor: "Physical defensive teams, veteran stars who know how to work officials",
      worstFor: "Young guards who rely on drawing touch fouls, transition-heavy offenses",
      notableGame: "Leading tonight's OKC-DEN crew where his physical style and overtime tendency could produce an epic playoff-preview battle between the West's top contenders."
    },
    {
      name: "Tony Brothers",
      number: 25,
      experience: "30 years",
      gamesThisSeason: 63,
      tendencies: {
        foulsPerGame: 45.2,
        homeWinPct: 58,
        avgPace: -0.9,
        technicalFrequency: "High",
        overtimeGames: 6,
      },
      bestFor: "Home teams, physical post players, veteran teams with strong leadership",
      worstFor: "Road favorites, young teams prone to emotional reactions",
      notableGame: "Officiating tonight's DET-CHA matchup where his home bias could be the difference in Charlotte's desperate playoff push against the East's top seed."
    },
    {
      name: "Zach Zarba",
      number: 15,
      experience: "20 years",
      gamesThisSeason: 62,
      tendencies: {
        foulsPerGame: 39.6,
        homeWinPct: 47,
        avgPace: 1.2,
        technicalFrequency: "Low",
        overtimeGames: 4,
      },
      bestFor: "Athletic teams, transition-heavy offenses, road underdogs",
      worstFor: "Teams that depend on getting to the free-throw line, grind-it-out styles",
      notableGame: "Leading tonight's MIN-HOU crew where his pace-positive approach and road bias create challenging conditions for the Rockets' home playoff positioning."
    },
    {
      name: "Ben Taylor",
      number: 46,
      experience: "19 years",
      gamesThisSeason: 58,
      tendencies: {
        foulsPerGame: 38.9,
        homeWinPct: 49,
        avgPace: 0.8,
        technicalFrequency: "Low",
        overtimeGames: 2,
      },
      bestFor: "Skilled offensive teams, teams that play clean basketball",
      worstFor: "Teams that need favorable whistles to create offense, physical defensive schemes",
      notableGame: "Officiating tonight's TOR-NY rematch where his whistle discipline should reward pure basketball execution in this crucial Eastern Conference battle."
    },
    {
      name: "Marc Davis",
      number: 36,
      experience: "25 years",
      gamesThisSeason: 61,
      tendencies: {
        foulsPerGame: 44.0,
        homeWinPct: 54,
        avgPace: -0.3,
        technicalFrequency: "High",
        overtimeGames: 6,
      },
      bestFor: "Veteran teams with strong leadership, home favorites, interior offenses",
      worstFor: "Young teams that argue calls, emotionally volatile players",
      notableGame: "Leading tonight's NO-BOS assignment where his technical-prone approach could be problematic for New Orleans' young core in a potential blowout."
    },
    {
      name: "Ed Malloy",
      number: 14,
      experience: "23 years",
      gamesThisSeason: 60,
      tendencies: {
        foulsPerGame: 40.1,
        homeWinPct: 48,
        avgPace: 1.5,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "High-scoring offensive teams, road teams, pace-and-space systems",
      worstFor: "Grind-it-out defensive teams that rely on physicality",
      notableGame: "Supporting Scott Foster in tonight's OKC-DEN thriller where his pace-positive impact could accelerate what's expected to be a methodical playoff-style battle."
    },
    {
      name: "Kane Fitzgerald",
      number: 5,
      experience: "16 years",
      gamesThisSeason: 61,
      tendencies: {
        foulsPerGame: 42.3,
        homeWinPct: 53,
        avgPace: 0.2,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Balanced teams with multiple scoring options, neutral game environments",
      worstFor: "Teams that need extreme officiating tendencies to succeed",
      notableGame: "Supporting Tony Brothers in tonight's DET-CHA game where his balanced approach provides stability to Brothers' more aggressive home-biased whistle."
    },
    {
      name: "Sean Wright",
      number: 4,
      experience: "18 years",
      gamesThisSeason: 59,
      tendencies: {
        foulsPerGame: 42.8,
        homeWinPct: 59,
        avgPace: -0.4,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Home teams, interior-focused offenses, defensive schemes",
      worstFor: "Road teams seeking neutral whistles, perimeter-heavy attacks",
      notableGame: "Working with Zach Zarba in tonight's MIN-HOU matchup where his home bias conflicts with Zarba's road-friendly tendencies, creating unpredictable dynamics."
    },
    {
      name: "James Williams",
      number: 60,
      experience: "12 years",
      gamesThisSeason: 57,
      tendencies: {
        foulsPerGame: 41.7,
        homeWinPct: 52,
        avgPace: 2.1,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Athletic wings, transition offenses, high-scoring games",
      worstFor: "Methodical half-court teams, post-up heavy offenses",
      notableGame: "Supporting Ben Taylor in tonight's TOR-NY rematch where his extreme pace-positive impact (+2.1) could create the night's highest-scoring affair."
    },
    {
      name: "Tyler Ford",
      number: 39,
      experience: "15 years",
      gamesThisSeason: 56,
      tendencies: {
        foulsPerGame: 43.7,
        homeWinPct: 51,
        avgPace: -0.7,
        technicalFrequency: "Average",
        overtimeGames: 7,
      },
      bestFor: "Physical playoff-style games, teams with veteran leadership",
      worstFor: "Young teams that need pace to succeed, perimeter-oriented offenses",
      notableGame: "Working under Scott Foster in tonight's OKC-DEN heavyweight bout where his pace-negative impact supports Foster's grind-it-out approach in this potential classic."
    }
  ],
  weeklyTrend: "Tonight's massive 15-game slate features the most diverse officiating philosophies of the season, creating drastically different game environments that will test every team's adaptability. The marquee OKC-DEN battle gets Scott Foster's physical, overtime-prone approach, setting up a potential instant classic between the West's top seeds. Meanwhile, Charlotte gets Tony Brothers' home-heavy whistle against Detroit, providing the Hornets with their best chance to upset the East's top seed in a crucial playoff positioning game. The most intriguing subplot involves Zach Zarba's road-friendly, pace-positive crew handling MIN-HOU, where his tendencies directly conflict with Houston's home court advantage and half-court style. Ben Taylor's whistle discipline creates ideal conditions for the TOR-NY skill showcase, while Marc Davis brings his technical-heavy approach to what could be a NO-BOS blowout. After yesterday's contrasting styles across six games, tonight's expanded slate allows for even more dramatic officiating variations. The combination of home-biased crews (Brothers, Wright) and road-friendly officials (Zarba, Malloy) means location could trump talent in multiple outcomes. Foster's assignment to the night's most competitive game suggests the NBA wants pure basketball to decide this West showdown, while Brothers' placement in Charlotte indicates potential for a major upset. The pace disparities are extreme — from Foster's -0.6 impact slowing down OKC-DEN to James Williams' +2.1 boost potentially creating a TOR-NY shootout. Teams that can adapt to their assigned officiating style will have significant advantages, making referee tendencies potentially more decisive than talent gaps in tonight's playoff positioning battles."
};
