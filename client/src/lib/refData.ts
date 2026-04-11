// Referee Tendency Reports — Know the Whistle
// Last updated: April 11, 2026

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
  generatedDate: "April 11, 2026",
  tonightAssignments: [],
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
      notableGame: "Available for weekend assignments after yesterday's absence. His physical style and overtime tendency could produce epic battles in upcoming playoff positioning games."
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
      notableGame: "Resting tonight after his controversial DET-CHA assignment yesterday where his home bias nearly helped Charlotte upset the East's top seed."
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
      notableGame: "Prepared for weekend slate after yesterday's MIN-HOU thriller where his pace-positive approach helped create the 136-132 overtime classic."
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
      notableGame: "Available for assignment after resting yesterday. His road-friendly approach and pace acceleration make him valuable for competitive weekend matchups."
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
      notableGame: "Fresh for weekend duty after yesterday's NO-BOS blowout where his technical-prone approach kept young Pelicans players in check during the rout."
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
      notableGame: "Ready for weekend assignments after solid work in yesterday's slate. His balanced approach provides stability for marquee playoff positioning battles."
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
      notableGame: "Available after yesterday's rest day. His whistle discipline and neutral approach make him ideal for skill-based matchups requiring pure basketball execution."
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
      notableGame: "Rested and ready after yesterday's break. His extreme pace-positive impact (+2.1) makes him perfect for up-tempo weekend showcases."
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
      notableGame: "Available for weekend slate with his strong home bias. His tendency to favor the home team makes him valuable for teams needing crowd support."
    },
    {
      name: "John Goble",
      number: 30,
      experience: "14 years",
      gamesThisSeason: 54,
      tendencies: {
        foulsPerGame: 40.5,
        homeWinPct: 46,
        avgPace: 1.8,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Road underdogs, athletic perimeter players, fast-break offenses",
      worstFor: "Home favorites expecting friendly whistles, interior grinding styles",
      notableGame: "Fresh for assignment after rest day. His road-favorable approach and pace acceleration create challenging environments for home teams expecting advantages."
    }
  ],
  weeklyTrend: "With no games scheduled tonight, the league's referee assignments take a strategic pause before the final weekend push. Yesterday's six-game slate showcased the dramatic impact officiating styles can have on outcomes — from Detroit clinching the East's top seed under neutral conditions to Miami's offensive explosion with pace-friendly whistles. The Anthony Edwards clutch performance in Minnesota's comeback victory demonstrated how pace-positive officials can create the perfect environment for athletic stars to shine in crucial moments. Tony Brothers' home-heavy whistle nearly delivered Charlotte a shocking upset over Detroit, while Marc Davis kept young players in check during Boston's statement bounce-back victory. Tonight's rest allows the league's most experienced officials — Foster, Zarba, Davis, and Malloy — to prepare for weekend assignments that will largely determine final playoff seeding. The contrast between yesterday's officiating impacts was stark: pace-positive crews enabled high-scoring affairs and comebacks, while whistle-heavy assignments favored methodical teams and home courts. Foster's overtime tendency wasn't needed yesterday, but his physical style remains ready for weekend playoff-preview battles. Brothers' controversial home bias proved decisive in tight games, while Zarba's road-friendly approach helped visiting teams steal crucial victories. The weekend slate will likely feature the season's most important referee assignments, with Foster and Davis expected to handle marquee matchups while Zarba and Malloy take road-heavy games where their neutral approaches can shine. Teams that struggled yesterday against unfavorable officiating styles will get chances to redeem themselves with different crews, while squads that thrived will hope for similar assignments. The final weekend's referee distribution could ultimately determine playoff seeding more than individual performances, making tonight's rest a crucial strategic pause before the season's most impactful whistles."
};
