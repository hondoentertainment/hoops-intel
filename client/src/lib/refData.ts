// Referee Tendency Reports — Know the Whistle
// Last updated: April 13, 2026

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
  generatedDate: "April 13, 2026",
  tonightAssignments: [],
  refProfiles: [
    {
      name: "Scott Foster",
      number: 48,
      experience: "30 years",
      gamesThisSeason: 66,
      tendencies: {
        foulsPerGame: 43.4,
        homeWinPct: 55,
        avgPace: -0.6,
        technicalFrequency: "High",
        overtimeGames: 9,
      },
      bestFor: "Physical defensive teams, veteran stars who know how to work officials",
      worstFor: "Young guards who rely on drawing touch fouls, transition-heavy offenses",
      notableGame: "Worked the season finale slate after yesterday's rest, bringing his trademark physical tolerance to the close of the regular season. His overtime tendency was not required in Sunday's finales, but his presence in marquee assignments kept emotional intensity in check as teams rested starters or chased seeding."
    },
    {
      name: "Tony Brothers",
      number: 25,
      experience: "30 years",
      gamesThisSeason: 64,
      tendencies: {
        foulsPerGame: 45.2,
        homeWinPct: 58,
        avgPace: -0.9,
        technicalFrequency: "High",
        overtimeGames: 6,
      },
      bestFor: "Home teams, physical post players, veteran teams with strong leadership",
      worstFor: "Road favorites, young teams prone to emotional reactions",
      notableGame: "Rested Sunday after his controversial DET-CHA assignment earlier in the week where his pronounced home bias nearly helped Charlotte steal a crucial road victory from the East's top seed. The league is monitoring his technical frequency heading into the play-in tournament, where emotional volatility is guaranteed."
    },
    {
      name: "Zach Zarba",
      number: 15,
      experience: "20 years",
      gamesThisSeason: 63,
      tendencies: {
        foulsPerGame: 39.6,
        homeWinPct: 47,
        avgPace: 1.2,
        technicalFrequency: "Low",
        overtimeGames: 4,
      },
      bestFor: "Athletic teams, transition-heavy offenses, road underdogs",
      worstFor: "Teams that depend on getting to the free-throw line, grind-it-out styles",
      notableGame: "Closed the regular season in strong form after his MIN-HOU thriller last week where his pace-positive approach helped generate the 136-132 overtime classic. Zarba is widely regarded as the most road-neutral official on staff and is expected to handle a marquee play-in assignment when the tournament opens Tuesday."
    },
    {
      name: "Ed Malloy",
      number: 14,
      experience: "23 years",
      gamesThisSeason: 61,
      tendencies: {
        foulsPerGame: 40.1,
        homeWinPct: 48,
        avgPace: 1.5,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "High-scoring offensive teams, road teams, pace-and-space systems",
      worstFor: "Grind-it-out defensive teams that rely on physicality",
      notableGame: "Handled Sunday's DEN-SAS finale with quiet efficiency, allowing Julian Strawther and the Nuggets to close out their 12-game winning streak without whistle controversy. His road-friendly tendencies matched Denver's status as the visiting 3-seed clincher, and his pace-positive style let the offense flow freely in a game with major seeding implications."
    },
    {
      name: "Marc Davis",
      number: 36,
      experience: "25 years",
      gamesThisSeason: 62,
      tendencies: {
        foulsPerGame: 44.0,
        homeWinPct: 54,
        avgPace: -0.3,
        technicalFrequency: "High",
        overtimeGames: 6,
      },
      bestFor: "Veteran teams with strong leadership, home favorites, interior offenses",
      worstFor: "Young teams that argue calls, emotionally volatile players",
      notableGame: "Assigned to Sunday's LAC-GSW season finale, where his veteran-friendly whistle created a low-foul environment in the first half before Stephen Curry's return energized both benches. Davis called a notably clean game in the second half despite the emotional weight of Curry's comeback, issuing zero technicals as both teams maintained composure in what became appointment viewing."
    },
    {
      name: "Kane Fitzgerald",
      number: 5,
      experience: "16 years",
      gamesThisSeason: 62,
      tendencies: {
        foulsPerGame: 42.3,
        homeWinPct: 53,
        avgPace: 0.2,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Balanced teams with multiple scoring options, neutral game environments",
      worstFor: "Teams that need extreme officiating tendencies to succeed",
      notableGame: "Worked Sunday's TOR-BRK finale in a neutral capacity as both teams played with full effort despite the lopsided result. His balanced approach did not interfere with Scottie Barnes' triple-double performance, and his average technical frequency kept the blowout from boiling over as Brooklyn's reserves grew frustrated in the fourth quarter."
    },
    {
      name: "Ben Taylor",
      number: 46,
      experience: "19 years",
      gamesThisSeason: 59,
      tendencies: {
        foulsPerGame: 38.9,
        homeWinPct: 49,
        avgPace: 0.8,
        technicalFrequency: "Low",
        overtimeGames: 2,
      },
      bestFor: "Skilled offensive teams, teams that play clean basketball",
      worstFor: "Teams that need favorable whistles to create offense, physical defensive schemes",
      notableGame: "Rested Sunday after a strong stretch through the final week of the regular season. His whistle discipline and neutral approach make him one of the league's most trusted officials for high-stakes assignments, and he is expected to be on the shortlist for play-in crews when the tournament opens Tuesday in Philadelphia and Phoenix."
    },
    {
      name: "James Williams",
      number: 60,
      experience: "12 years",
      gamesThisSeason: 58,
      tendencies: {
        foulsPerGame: 41.7,
        homeWinPct: 52,
        avgPace: 2.1,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Athletic wings, transition offenses, high-scoring games",
      worstFor: "Methodical half-court teams, post-up heavy offenses",
      notableGame: "Assigned to Sunday's MIA-ATL finale, where his extreme pace-positive tendencies contributed to Miami's season-high 143-point eruption against Atlanta's reserves. Williams' +2.1 pace impact is the highest on staff, and his assignment to that game was nearly predictive of the offensive explosion. He is a strong candidate for the MIA-CHA play-in elimination game Wednesday."
    },
    {
      name: "Sean Wright",
      number: 4,
      experience: "18 years",
      gamesThisSeason: 60,
      tendencies: {
        foulsPerGame: 42.8,
        homeWinPct: 59,
        avgPace: -0.4,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Home teams, interior-focused offenses, defensive schemes",
      worstFor: "Road teams seeking neutral whistles, perimeter-heavy attacks",
      notableGame: "Worked Sunday's IND-DET finale in a supporting role, where his home-bias tendency was somewhat neutralized by Detroit's dominant performance. Paul Reed's perfect 11-for-11 shooting game required no whistle assistance from Wright, but his interior-friendly approach likely contributed to Reed's comfort operating close to the basket throughout his historic shooting display."
    },
    {
      name: "John Goble",
      number: 30,
      experience: "14 years",
      gamesThisSeason: 55,
      tendencies: {
        foulsPerGame: 40.5,
        homeWinPct: 46,
        avgPace: 1.8,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Road underdogs, athletic perimeter players, fast-break offenses",
      worstFor: "Home favorites expecting friendly whistles, interior grinding styles",
      notableGame: "Handled Sunday's OKC-PHX finale where his road-favorable tendencies aligned perfectly with Phoenix's shocking 135-103 demolition of the Thunder's reserves. Goble's pace acceleration and road-positive whistle created an environment where Jamaree Bouyea and the Suns reserves could operate freely, contributing to the game-best +37 rating and the night's most surprising result."
    }
  ],
  weeklyTrend: "The 2025-26 regular season concluded Sunday with a final slate that underscored how dramatically officiating styles shape outcomes, even in games where starters rest and seeding is locked. The week's most significant officiating story was not a controversial call but rather the cumulative strategic effect of crew assignments across the final three days. Marc Davis' veteran-friendly, low-foul approach in LAC-GSW created the clean environment that allowed Stephen Curry's historic return to unfold without whistle interference — his two-way performance in 29 minutes was never threatened by foul trouble, and Davis issued zero technicals in an emotionally charged atmosphere. James Williams' extreme pace-positive tendencies in MIA-ATL were almost algorithmically perfect for a Heat team that went on to post a season-high 143 points against reserves, reinforcing the long-standing analytic argument that crew selection is itself a form of game management by the league office. John Goble's road-favorable approach in OKC-PHX contributed to the night's most shocking result, as Phoenix's reserves operated in an environment that neutralized whatever home-court residue remained in a building where OKC's starters had already retreated to the locker room. Ed Malloy's pace-positive neutrality in DEN-SAS gave Julian Strawther and the Nuggets room to close out their historic 12-game winning streak without interruption, while his road-friendly whistle meant Denver never faced the subtle tide-turning that home-biased officials can generate in close contests. Sean Wright's interior-friendly tendencies in IND-DET created the precise physical environment where Paul Reed's historic 11-for-11 performance could flourish — Wright's average of 42.8 fouls per game means interior contact is called consistently, and Reed's basket-to-basket activity benefited from that consistency throughout his perfect shooting night. Looking ahead to the play-in tournament opening Tuesday, the league faces its most consequential referee assignment decisions of the year. Every crew choice carries outsized weight in single-elimination or win-to-advance formats. Zach Zarba and Ben Taylor are the most likely candidates for the PHI-ORL and PHX-POR 7-8 matchups, where their neutral approaches and low technical frequencies will keep volatile elimination emotions manageable. The Wednesday elimination games — CHA-MIA and LAC-GSW — present more complex assignment challenges. The GSW-LAC rematch featuring Curry's full return is the most emotionally charged game of the play-in weekend, and the league will almost certainly avoid assigning Tony Brothers or Scott Foster to that crew given the home-bias concerns and the historic nature of Curry's comeback. James Williams' pace acceleration would suit the LAC-GSW shootout environment, but his relative inexperience in high-stakes situations may push the league toward the more seasoned Marc Davis or Kane Fitzgerald as lead officials. The MIA-CHA elimination game is quietly the most intriguing officiating assignment of the week — Charlotte's perimeter-heavy attack under Miller, Ball, and White is extremely sensitive to pace-negative crews, while Miami's balanced two-way style can adapt to most officiating environments. An assignment favoring Williams or Goble would tilt toward Miami's preferred pace, while Brothers or Foster would compress the game into Charlotte's defensive comfort zone. The regular season is complete, but the officiating chess match is just beginning. The next two weeks will produce the year's most impactful whistle decisions, and the crews assembled for play-in and first-round assignments will be analyzed as closely as the rosters they oversee."
};
