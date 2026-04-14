// Referee Tendency Reports — Know the Whistle
// Last updated: April 14, 2026

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
  generatedDate: "April 14, 2026",
  tonightAssignments: [
    {
      game: "MIA @ CHA",
      crew: ["Zach Zarba", "Kane Fitzgerald", "Sean Wright"],
      leadRef: "Zach Zarba",
      impact: "Zarba's road-neutral tendencies (47% home win rate) and pace-positive style (+1.2) favor Miami's balanced attack over Charlotte's home-court advantage. His low foul rate (39.6 per game) benefits athletic wings like Jaime Jaquez Jr. and gives Bam Adebayo room to operate without early foul trouble. The low technical frequency keeps emotional play-in atmosphere manageable.",
      bettingAngle: "Take the UNDER 218.5 despite Zarba's pace-positive reputation. His 39.6 fouls per game is well below league average, which typically reduces free throw attempts and keeps totals lower in high-pressure elimination games where teams tighten defensively.",
      historical: "Zarba has worked 4 Heat games this season (2-2 record) and 3 Hornets games (1-2). Miami averaged 113.5 PPG in his games while Charlotte managed just 104.7, suggesting his whistle style favors Miami's veteran roster over Charlotte's younger core. No technical fouls issued in any of those 7 combined games."
    },
    {
      game: "POR @ PHX",
      crew: ["Ed Malloy", "James Williams", "Ben Taylor"],
      leadRef: "Ed Malloy",
      impact: "Malloy's extreme pace-positive style (+1.5) and road-friendly whistle (48% home win rate) creates an ideal environment for Portland's transition offense led by Anfernee Simons. His low foul rate (40.1 per game) benefits athletic guards who attack in transition. Phoenix's half-court execution may struggle against his pace acceleration tendencies.",
      bettingAngle: "Strong OVER 232.5 play. Malloy's +1.5 pace impact is among the highest on staff, and his low foul frequency means fewer clock stoppages. James Williams on the crew adds another pace-positive voice (+2.1 impact). This total could easily exceed 240 points with these pace accelerators.",
      historical: "Malloy worked 3 Trail Blazers games this season (Portland 2-1) where they averaged 119.7 PPG, well above their season average. He handled 2 Suns games (Phoenix 1-1) with an average total of 241 points. His presence consistently pushes Phoenix games over the total due to Devin Booker's comfort level with Malloy's veteran-friendly approach."
    }
  ],
  refProfiles: [
    {
      name: "Zach Zarba",
      number: 15,
      experience: "20 years",
      gamesThisSeason: 64,
      tendencies: {
        foulsPerGame: 39.6,
        homeWinPct: 47,
        avgPace: 1.2,
        technicalFrequency: "Low",
        overtimeGames: 4,
      },
      bestFor: "Athletic teams, transition-heavy offenses, road underdogs",
      worstFor: "Teams that depend on getting to the free-throw line, grind-it-out styles",
      notableGame: "Assigned to tonight's MIA-CHA play-in elimination game, bringing his tournament-tested experience and road-neutral approach to a volatile atmosphere. His pace-positive style and low technical frequency make him the league's preferred choice for high-stakes games where emotional control is paramount. Zarba's whistle discipline has been exemplary throughout the season's final month."
    },
    {
      name: "Ed Malloy",
      number: 14,
      experience: "23 years",
      gamesThisSeason: 62,
      tendencies: {
        foulsPerGame: 40.1,
        homeWinPct: 48,
        avgPace: 1.5,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "High-scoring offensive teams, road teams, pace-and-space systems",
      worstFor: "Grind-it-out defensive teams that rely on physicality",
      notableGame: "Leading tonight's POR-PHX crew in what projects as the highest-scoring play-in game. Malloy's extreme pace-positive tendencies (+1.5) and road-friendly whistle create an ideal environment for Anfernee Simons' explosive scoring. His assignment suggests the league expects a fast-paced, high-scoring affair in the desert."
    },
    {
      name: "Scott Foster",
      number: 48,
      experience: "30 years",
      gamesThisSeason: 67,
      tendencies: {
        foulsPerGame: 43.4,
        homeWinPct: 55,
        avgPace: -0.6,
        technicalFrequency: "High",
        overtimeGames: 9,
      },
      bestFor: "Physical defensive teams, veteran stars who know how to work officials",
      worstFor: "Young guards who rely on drawing touch fouls, transition-heavy offenses",
      notableGame: "Rested from tonight's play-in assignments after working the regular season finale slate. Foster's physical tolerance and veteran-friendly whistle make him a likely candidate for Wednesday's elimination games, where his experience in high-pressure situations and overtime tendency could prove crucial for managing volatile atmospheres."
    },
    {
      name: "Tony Brothers",
      number: 25,
      experience: "30 years",
      gamesThisSeason: 65,
      tendencies: {
        foulsPerGame: 45.2,
        homeWinPct: 58,
        avgPace: -0.9,
        technicalFrequency: "High",
        overtimeGames: 6,
      },
      bestFor: "Home teams, physical post players, veteran teams with strong leadership",
      worstFor: "Road favorites, young teams prone to emotional reactions",
      notableGame: "Held out of tonight's assignments due to his pronounced home bias and high technical frequency. The league is saving Brothers for potential Wednesday elimination games where his physical tolerance and veteran respect could manage heated atmospheres, though his assignment patterns suggest he'll work the game with the more established home team."
    },
    {
      name: "Kane Fitzgerald",
      number: 5,
      experience: "16 years",
      gamesThisSeason: 63,
      tendencies: {
        foulsPerGame: 42.3,
        homeWinPct: 53,
        avgPace: 0.2,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Balanced teams with multiple scoring options, neutral game environments",
      worstFor: "Teams that need extreme officiating tendencies to succeed",
      notableGame: "Supporting Zarba's crew in tonight's MIA-CHA elimination game, providing veteran stability and balanced tendencies. Fitzgerald's neutral approach and average technical frequency complement Zarba's road-friendly style, creating a crew that won't artificially favor either team's style of play."
    },
    {
      name: "Marc Davis",
      number: 36,
      experience: "25 years",
      gamesThisSeason: 63,
      tendencies: {
        foulsPerGame: 44.0,
        homeWinPct: 54,
        avgPace: -0.3,
        technicalFrequency: "High",
        overtimeGames: 6,
      },
      bestFor: "Veteran teams with strong leadership, home favorites, interior offenses",
      worstFor: "Young teams that argue calls, emotionally volatile players",
      notableGame: "Rested from tonight's play-in assignments after handling Sunday's emotional LAC-GSW finale featuring Stephen Curry's return. Davis is being preserved for potential Warriors elimination games, where his veteran-friendly whistle and ability to manage high-profile moments could be crucial for Curry's continued playoff run."
    },
    {
      name: "James Williams",
      number: 60,
      experience: "12 years",
      gamesThisSeason: 59,
      tendencies: {
        foulsPerGame: 41.7,
        homeWinPct: 52,
        avgPace: 2.1,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Athletic wings, transition offenses, high-scoring games",
      worstFor: "Methodical half-court teams, post-up heavy offenses",
      notableGame: "Supporting Malloy's crew in tonight's POR-PHX game, bringing the staff's most extreme pace-positive tendencies (+2.1) to a matchup that already projects high-scoring. Williams' assignment alongside Malloy suggests the league expects this game to exceed its 232.5 total, possibly reaching 250+ points."
    },
    {
      name: "Ben Taylor",
      number: 46,
      experience: "19 years",
      gamesThisSeason: 60,
      tendencies: {
        foulsPerGame: 38.9,
        homeWinPct: 49,
        avgPace: 0.8,
        technicalFrequency: "Low",
        overtimeGames: 2,
      },
      bestFor: "Skilled offensive teams, teams that play clean basketball",
      worstFor: "Teams that need favorable whistles to create offense, physical defensive schemes",
      notableGame: "Third member of tonight's POR-PHX crew, providing whistle discipline and neutral tendencies to balance Williams' pace acceleration. Taylor's low foul rate (38.9) and minimal technical frequency ensure the game's flow won't be disrupted by whistle interference, allowing skilled offensive players like Devin Booker and Anfernee Simons to operate freely."
    },
    {
      name: "Sean Wright",
      number: 4,
      experience: "18 years",
      gamesThisSeason: 61,
      tendencies: {
        foulsPerGame: 42.8,
        homeWinPct: 59,
        avgPace: -0.4,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Home teams, interior-focused offenses, defensive schemes",
      worstFor: "Road teams seeking neutral whistles, perimeter-heavy attacks",
      notableGame: "Third member of tonight's MIA-CHA crew, providing the only home-bias tendency (59% home win rate) on a crew led by road-neutral Zarba. Wright's interior-friendly approach could benefit Charlotte's frontcourt length against Miami's smaller lineup, though his moderate pace-negative tendency may limit transition opportunities."
    },
    {
      name: "John Goble",
      number: 30,
      experience: "14 years",
      gamesThisSeason: 56,
      tendencies: {
        foulsPerGame: 40.5,
        homeWinPct: 46,
        avgPace: 1.8,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Road underdogs, athletic perimeter players, fast-break offenses",
      worstFor: "Home favorites expecting friendly whistles, interior grinding styles",
      notableGame: "Available for Wednesday's elimination games after contributing to Sunday's shocking OKC-PHX finale where his road-favorable tendencies helped create the environment for Phoenix's 32-point upset. Goble's pace-positive approach and road bias make him a potential assignment for any Wednesday elimination game featuring a road underdog."
    }
  ],
  weeklyTrend: "The play-in tournament's opening night features the league's most strategically balanced referee assignments of the season, with each crew specifically constructed to manage the unique pressures of elimination basketball while maintaining competitive integrity. The MIA-CHA assignment of Zach Zarba's crew represents the gold standard of tournament officiating — Zarba's road-neutral approach (47% home win rate) eliminates any systematic bias, while his pace-positive tendencies (+1.2) and low foul frequency (39.6 per game) create an environment where athletic talent can decide the outcome rather than whistle patterns. Kane Fitzgerald's presence as second official provides veteran stability without extreme tendencies, while Sean Wright's moderate home bias (59%) is carefully balanced by the crew's overall neutrality. This assignment suggests the league views this as the night's most volatile emotional environment, requiring officials who won't artificially influence the outcome through whistle bias. The POR-PHX crew selection tells a different story about league expectations. Ed Malloy's extreme pace-positive tendencies (+1.5) combined with James Williams' staff-leading +2.1 pace impact creates an environment designed for offensive explosion. Ben Taylor's whistle discipline (38.9 fouls per game) ensures the acceleration won't be disrupted by excessive clock stoppages. This crew construction suggests internal projections have this game easily exceeding its 232.5 total, with the officials specifically chosen to facilitate high-scoring basketball rather than manage defensive grinding. The league's decision to rest Scott Foster and Tony Brothers from tonight's assignments is strategically sound — both officials carry pronounced biases (Foster's veteran favoritism, Brothers' home bias) that could artificially influence single-elimination outcomes. Instead, they're being preserved for Wednesday's elimination games where their experience managing heated atmospheres may prove more valuable than their tendencies prove problematic. Marc Davis' absence tonight after handling Curry's emotional return Sunday suggests he's being saved for a potential Warriors elimination game, where his veteran-friendly whistle could prove crucial for managing the sport's most scrutinized comeback story. The weekend's assignment patterns reveal sophisticated game theory by the officiating department. Tonight's crews are built for neutrality and flow, allowing talent to determine advancement. Wednesday's elimination assignments will likely emphasize experience and crowd control over neutral tendencies, as the league prioritizes managing volatile atmospheres over maintaining statistical balance. The referee assignment decisions may prove as consequential as the roster moves in determining which teams advance to face the 76ers and Lakers in the conference semifinals."
};
