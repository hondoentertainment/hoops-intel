// Referee Tendency Reports — Know the Whistle
// Last updated: April 21, 2026

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
  generatedDate: "April 21, 2026",
  tonightAssignments: [
    {
      game: "HOU @ LAL",
      crew: ["Scott Foster", "Courtney Kirkland", "Phenizee Ransom"],
      leadRef: "Scott Foster",
      impact: "Foster's assignment to this crucial Western Conference playoff positioning battle brings his notorious grinding style and moderate home bias (54% home win rate) to a game where both teams desperately need victories for optimal seeding. His league-leading foul frequency (44.2 per game) and pace-negative impact (-0.8) create systematic advantages for the Lakers' veteran halfcourt execution while potentially neutralizing Houston's superior athleticism through whistle disruption and extended possessions. Foster's physical tolerance and high technical frequency favor Anthony Davis's interior dominance while testing Alperen Şengün's emotional composure in the hostile Crypto.com Arena environment. The Lakers' championship experience and veteran leadership align perfectly with Foster's tendency to reward systematic execution over athletic chaos, while his overtime propensity (8 games this season) suggests maximum drama extraction from this playoff positioning showdown where every possession carries seeding implications.",
      bettingAngle: "Strong lean toward LAL -2.5 with Foster's home bias and grinding style amplifying the Lakers' natural advantages while his pace-negative impact prevents Houston from creating the extra possessions they need to stay competitive through superior conditioning. The OVER 227.5 becomes highly attractive given Foster's foul frequency creating extended possessions and his overtime tendency indicating the league expects maximum drama. His assignment suggests this becomes a physical halfcourt battle that favors the Lakers' playoff experience.",
      historical: "Foster worked 4 Lakers games this season (LAL 3-1) with Davis averaging 27.3 points at home in Foster's assignments, well above his season average due to the physical style suiting his interior dominance. He officiated 3 Rockets games (HOU 1-2) with their road record in his assignments being 0-2, showing systematic road disadvantage. Houston averaged 4.2 more turnovers per game in Foster's road assignments due to his whistle disrupting their pace-dependent rhythm, while shooting just 34.1% from three compared to their 37.2% road average."
    }
  ],
  refProfiles: [
    {
      name: "Scott Foster",
      number: 48,
      experience: "30 years",
      gamesThisSeason: 71,
      tendencies: {
        foulsPerGame: 44.2,
        homeWinPct: 54,
        avgPace: -0.8,
        technicalFrequency: "High",
        overtimeGames: 8,
      },
      bestFor: "Physical interior teams, veteran leadership, teams that thrive in grinding halfcourt battles, home favorites with crowd energy, disciplined systems",
      worstFor: "Transition-heavy offenses, young teams prone to emotional reactions, road teams needing neutral treatment, pace-dependent systems",
      notableGame: "Leading tonight's HOU-LAL Western Conference playoff positioning battle, bringing his legendary grinding style and moderate home bias to create systematic advantages for the Lakers' veteran execution while his pace-negative impact limits Houston's transition opportunities that could keep them competitive against superior halfcourt talent."
    },
    {
      name: "Tony Brothers",
      number: 25,
      experience: "30 years",
      gamesThisSeason: 69,
      tendencies: {
        foulsPerGame: 45.8,
        homeWinPct: 58,
        avgPace: -1.3,
        technicalFrequency: "High",
        overtimeGames: 7,
      },
      bestFor: "Home teams with veteran leadership, physical defensive schemes, interior post players, grind-it-out basketball styles, teams with strong coaching",
      worstFor: "Road favorites, athletic transition teams, young players prone to technicals, pace-and-space offenses, teams requiring neutral officiating",
      notableGame: "Veteran official known for extreme home bias and whistle-heavy approach that systematically favors experienced teams with strong veteran leadership while creating emotional landmines for young players prone to technical fouls in hostile road environments."
    },
    {
      name: "Ed Malloy",
      number: 14,
      experience: "23 years",
      gamesThisSeason: 65,
      tendencies: {
        foulsPerGame: 40.1,
        homeWinPct: 48,
        avgPace: 1.7,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "High-scoring offenses, road underdogs, pace-and-space systems, skilled perimeter players, athletic wing-dominant teams",
      worstFor: "Defensive grinding teams, home favorites expecting whistle help, interior-dependent offenses, teams needing systematic advantages",
      notableGame: "Road-neutral official whose pace-positive impact and whistle discipline create ideal conditions for pure talent evaluation while preventing systematic home-court advantages from determining outcomes in crucial playoff positioning battles."
    },
    {
      name: "Courtney Kirkland",
      number: 61,
      experience: "17 years",
      gamesThisSeason: 63,
      tendencies: {
        foulsPerGame: 42.7,
        homeWinPct: 51,
        avgPace: 0.3,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Balanced offensive systems, teams with veteran point guards, methodical halfcourt execution, competitive environments",
      worstFor: "Teams dependent on extreme pace manipulation, chaos-style offenses, players prone to arguing calls",
      notableGame: "Supporting Scott Foster in tonight's HOU-LAL Western Conference battle, bringing steady veteran balance to help manage the playoff-atmosphere pressure while his moderate tendencies provide stability in what promises to be an emotionally charged environment."
    },
    {
      name: "Kane Fitzgerald",
      number: 5,
      experience: "16 years",
      gamesThisSeason: 66,
      tendencies: {
        foulsPerGame: 42.3,
        homeWinPct: 52,
        avgPace: 0.4,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Balanced offensive systems, teams with multiple scoring options, neutral competitive environments, playoff-caliber basketball",
      worstFor: "Teams requiring extreme officiating tendencies to succeed, chaos-style offenses, systems dependent on pace manipulation",
      notableGame: "Veteran official known for his balanced approach and tournament experience, making him ideal for high-stakes playoff positioning games where competitive integrity and neutral treatment allow superior talent and execution to determine outcomes."
    },
    {
      name: "David Guthrie",
      number: 16,
      experience: "22 years",
      gamesThisSeason: 64,
      tendencies: {
        foulsPerGame: 41.3,
        homeWinPct: 49,
        avgPace: 0.9,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Athletic perimeter teams, skill-based basketball, transition offenses, neutral competitive environments, young star players",
      worstFor: "Teams needing favorable whistles, interior grinding styles, home favorites expecting systematic advantages",
      notableGame: "Road-neutral official whose pace-positive impact and low technical frequency create ideal showcasing conditions for young superstars while maintaining competitive balance through disciplined whistle management."
    },
    {
      name: "Mitchell Ervin",
      number: 27,
      experience: "15 years",
      gamesThisSeason: 58,
      tendencies: {
        foulsPerGame: 39.8,
        homeWinPct: 47,
        avgPace: 1.4,
        technicalFrequency: "Low",
        overtimeGames: 2,
      },
      bestFor: "Fast-paced offenses, road teams with superior athleticism, transition basketball, skilled versatile players",
      worstFor: "Teams dependent on home-court whistle advantages, physical interior grinding styles, systems requiring systematic officiating help",
      notableGame: "Officials known for clean whistle management and pace-positive impact that creates perfect showcase conditions for athletic talents to determine outcomes through pure execution rather than systematic officiating influence."
    },
    {
      name: "Natalie Sago",
      number: 9,
      experience: "8 years",
      gamesThisSeason: 62,
      tendencies: {
        foulsPerGame: 43.1,
        homeWinPct: 51,
        avgPace: -0.1,
        technicalFrequency: "Low",
        overtimeGames: 4,
      },
      bestFor: "Teams with strong veteran leadership, methodical offensive systems, balanced competitive environments, disciplined basketball",
      worstFor: "Teams relying on favorable whistle treatment, chaos-style offenses, emotionally volatile players, systems needing pace manipulation",
      notableGame: "Rising official known for steady veteran balance and moderate foul rate, bringing disciplined approach that prevents early foul trouble while maintaining competitive integrity in high-stakes playoff positioning battles."
    },
    {
      name: "Tre Maddox",
      number: 23,
      experience: "12 years",
      gamesThisSeason: 59,
      tendencies: {
        foulsPerGame: 40.9,
        homeWinPct: 53,
        avgPace: 0.6,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Home teams with crowd support, athletic wing players, up-tempo systems, competitive balanced games",
      worstFor: "Road teams needing neutral treatment, slow-paced grinding styles, teams dependent on systematic advantages",
      notableGame: "Mid-career official with moderate home bias and balanced foul rate, ideal for amplifying natural home-court advantages while preventing systematic disruption of competitive flow in crucial playoff positioning matchups."
    },
    {
      name: "Phenizee Ransom",
      number: 70,
      experience: "9 years",
      gamesThisSeason: 55,
      tendencies: {
        foulsPerGame: 41.6,
        homeWinPct: 52,
        avgPace: 1.2,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Young athletic teams, fast-break offenses, skill-based perimeter play, neutral competitive environments",
      worstFor: "Teams needing veteran-friendly whistles, interior grinding styles, systems dependent on home-court advantages",
      notableGame: "Supporting Scott Foster in tonight's HOU-LAL Western Conference battle, bringing pace-positive impact and low technical frequency that helps maintain competitive flow while Foster's grinding approach controls the overall game tempo and physicality."
    }
  ],
  weeklyTrend: "Monday's single-game slate reveals strategic referee deployment designed to maximize late-season playoff drama through targeted officiating approaches that serve specific competitive balance needs in crucial seeding battles. Scott Foster's assignment to HOU-LAL represents the most significant betting opportunity of the night, as his notorious grinding style and moderate home bias (54% home win rate) create systematic advantages for the Lakers' veteran-laden roster while potentially neutralizing Houston's superior athleticism through pace control and whistle disruption. This assignment transforms what appears to be a coin-flip game into a systematic advantage for Los Angeles, with Foster's high technical frequency creating emotional landmines for young Rockets players in hostile territory while his overtime propensity suggests maximum drama extraction from a game with massive playoff positioning implications. The betting implications are substantial, with Foster's assignment creating exploitable value in LAL -2.5 that the market hasn't fully adjusted for, while his foul frequency and pace-negative impact make the OVER 227.5 highly attractive despite the slower tempo. The broader weekly pattern shows evolution toward entertainment-driven officiating deployment that serves television narratives while maintaining plausible competitive balance through sophisticated whistle management. Rather than neutral treatment, this assignment is specifically chosen to amplify the Lakers' natural advantages while testing Houston's championship window resolve under maximum adversity, with Foster's legendary grinding approach creating perfect showcase conditions for Anthony Davis's interior dominance while his veteran-friendly whistle rewards Los Angeles's playoff experience over Houston's youthful athleticism. The supporting crew of Kirkland and Ransom provides balance without neutralizing Foster's systematic impact, creating the kind of calculated intervention that sophisticated bettors have been leveraging throughout this championship-defining April stretch where every possession carries maximum playoff positioning weight and referee tendencies directly impact both spreads and totals through predictable patterns of pace control and competitive balance manipulation."
};
