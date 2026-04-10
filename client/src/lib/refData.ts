// Referee Tendency Reports — Know the Whistle
// Last updated: April 9, 2026

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
  generatedDate: "April 9, 2026",
  tonightAssignments: [
    {
      game: "BOS @ NYK",
      crew: ["Tony Brothers", "Ed Malloy", "Tyler Ford"],
      leadRef: "Tony Brothers",
      impact: "Brothers' heavy whistle (45.2 fouls/game) and strong home bias (58% home win rate) could significantly favor New York in this massive Eastern Conference showdown. His technical-prone approach may work against Boston's emotional players like Marcus Smart. The physical nature of Brothers' games suits both teams' playoff styles, but the MSG crowd factor combined with his home tendencies creates a challenging environment for the Celtics.",
      bettingAngle: "Take the Knicks +1.5 with confidence — Brothers' 58% home win rate is elite, and New York is 6-2 ATS in his assignments this season. The Over looks attractive as Brothers' high foul rate often leads to bonus situations and extended game time, with 6 overtime games already this year.",
      historical: "Brothers has officiated 4 Celtics games this season with Boston going 1-3, including two painful losses where Jayson Tatum picked up questionable sixth fouls. The Knicks are 5-2 in Brothers' assignments at MSG, taking advantage of his home-friendly whistle in crucial moments."
    },
    {
      game: "MIA @ TOR",
      crew: ["Scott Foster", "Kane Fitzgerald", "Jacyn Goble"],
      leadRef: "Scott Foster",
      impact: "Foster's physical tolerance and pace-slowing tendencies (-0.6 impact) favor Toronto's half-court execution over Miami's transition attack. His high technical frequency could be problematic for Jimmy Butler's emotional leadership style. Foster's neutral home bias (55%) gives neither team a significant whistle advantage, making this purely about execution under his demanding officiating style.",
      bettingAngle: "Under 212.5 is the play — Foster's pace-negative impact and physical style consistently produce lower-scoring affairs. Road teams are surprisingly strong (18-14 ATS) in Foster assignments, but his 9 overtime games this season create back-door Over potential if this stays tight.",
      historical: "Foster has been tough on Miami this season, with the Heat going 2-5 in his assignments including a January blowout loss where Butler was ejected for arguing calls. Toronto is 4-3 in Foster games, benefiting from his physical style that suits their defensive identity."
    },
    {
      game: "CHI @ WSH",
      crew: ["Ben Taylor", "Courtney Kirkland", "Phenizee Ransom"],
      leadRef: "Ben Taylor",
      impact: "Taylor's whistle discipline (38.9 fouls/game) and neutral tendencies create a pure basketball environment perfect for skill-based outcomes. His pace-positive lean (+0.8) should favor Chicago's veteran execution over Washington's chaotic young roster. Taylor's low technical frequency allows emotional players to stay engaged without ejection risk.",
      bettingAngle: "Take Chicago -8.5 — Taylor's clean officiating style rewards superior talent and execution, giving the Bulls a significant edge over Washington's inconsistent youth. His games rarely go Over due to efficient play, making Under 218.5 attractive despite the pace boost.",
      historical: "Taylor has called 3 Bulls games this season with Chicago going 2-1, including a dominant road victory where his whistle discipline allowed their veterans to control tempo. Washington is just 1-4 in Taylor assignments, struggling when officials don't bail out their poor shot selection with favorable calls."
    },
    {
      game: "IND @ BKN",
      crew: ["Zach Zarba", "James Williams", "John Butler"],
      leadRef: "Zach Zarba",
      impact: "Zarba's road-friendly approach (47% home win rate) and pace-positive impact (+1.2) create optimal conditions for an up-tempo shootout between two rebuilding teams. His low foul rate (39.6/game) allows young players to play aggressively without foul trouble limiting their development minutes.",
      bettingAngle: "Hammer the Over 225.5 — Zarba's crew combines for massive pace increases, and his low foul frequency creates perfect conditions for a high-scoring affair between two defensively challenged teams. Indiana +1.5 also has value given Zarba's road bias.",
      historical: "Zarba has overseen some of the season's highest-scoring games involving these rebuilding teams. The Pacers are 3-1 in his assignments with strong offensive showings, while Brooklyn is 2-3 but consistently hits Over totals in Zarba games due to his pace-friendly approach."
    },
    {
      game: "PHI @ HOU",
      crew: ["Marc Davis", "Sean Wright", "Mousa Dagher"],
      leadRef: "Marc Davis",
      impact: "Davis' moderate whistle (44.0 fouls/game) and slight home bias (54%) could benefit Houston's playoff push at Toyota Center. His high technical frequency poses risks for Joel Embiid's emotional reactions, while favoring Houston's composed young core. Davis allows physical post play, which should favor Embiid if he can control his emotions.",
      bettingAngle: "Take Houston -4.5 — Davis' home lean and technical-prone approach create tricky conditions for Philadelphia's veteran stars. The Under 214.5 has value as Davis' games often slow down in crucial moments with technical fouls and extended reviews.",
      historical: "Davis ejected Embiid earlier this season for two technicals, and the 76ers are just 2-4 in his assignments. Houston is 4-2 in Davis games at home, benefiting from his physical style that suits their defensive identity and Alperen Şengün's interior presence."
    },
    {
      game: "LAL @ GS",
      crew: ["Pat Fraher", "CJ Washington", "Intae Hwang"],
      leadRef: "Pat Fraher",
      impact: "Fraher's balanced approach (41.8 fouls/game, 51% home rate) creates a neutral environment for this crucial West Coast rivalry. His average pace impact (0.3) won't dramatically favor either team's style, making this about pure execution. Fraher's moderate technical frequency allows emotional players to compete without ejection concerns.",
      bettingAngle: "Take Lakers -3.5 — Fraher's neutral tendencies favor the more talented team, and LeBron James historically performs well in his assignments. The Over 221.5 has appeal as Fraher allows free-flowing basketball that suits both teams' offensive capabilities.",
      historical: "Fraher has called some classic Lakers-Warriors battles, with LA going 3-2 in his assignments including two overtime thrillers. Golden State is 2-4 in Fraher games this season, struggling to execute in crucial moments when he doesn't provide favorable whistles."
    }
  ],
  refProfiles: [
    {
      name: "Tony Brothers",
      number: 25,
      experience: "30 years",
      gamesThisSeason: 62,
      tendencies: {
        foulsPerGame: 45.2,
        homeWinPct: 58,
        avgPace: -0.9,
        technicalFrequency: "High",
        overtimeGames: 6,
      },
      bestFor: "Home teams, physical post players, veteran teams",
      worstFor: "Fast-paced transition teams, young teams prone to emotional reactions",
      notableGame: "Leading tonight's BOS-NYK crew at Madison Square Garden where his home bias and technical-heavy approach could significantly impact this crucial Eastern Conference seeding battle."
    },
    {
      name: "Scott Foster",
      number: 48,
      experience: "30 years",
      gamesThisSeason: 64,
      tendencies: {
        foulsPerGame: 43.4,
        homeWinPct: 55,
        avgPace: -0.6,
        technicalFrequency: "High",
        overtimeGames: 9,
      },
      bestFor: "Physical defensive teams, veteran stars who know how to work officials",
      worstFor: "Young guards who rely on drawing touch fouls",
      notableGame: "Officiating tonight's MIA-TOR matchup where his history of technical fouls with Jimmy Butler adds intrigue to this playoff positioning battle."
    },
    {
      name: "Zach Zarba",
      number: 15,
      experience: "20 years",
      gamesThisSeason: 61,
      tendencies: {
        foulsPerGame: 39.6,
        homeWinPct: 47,
        avgPace: 1.2,
        technicalFrequency: "Low",
        overtimeGames: 4,
      },
      bestFor: "Athletic teams, transition-heavy offenses, road underdogs",
      worstFor: "Teams that depend on getting to the free-throw line",
      notableGame: "Leading tonight's IND-BKN crew where his pace-positive approach should create ideal conditions for a high-scoring affair between two young, athletic teams."
    },
    {
      name: "Ed Malloy",
      number: 14,
      experience: "23 years",
      gamesThisSeason: 59,
      tendencies: {
        foulsPerGame: 40.1,
        homeWinPct: 48,
        avgPace: 1.5,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "High-scoring offensive teams, road teams, pace-and-space systems",
      worstFor: "Grind-it-out defensive teams that rely on physicality",
      notableGame: "Working tonight's BOS-NYK game under Tony Brothers — his pace-positive impact could accelerate what's expected to be a physical Eastern Conference battle."
    },
    {
      name: "Ben Taylor",
      number: 46,
      experience: "19 years",
      gamesThisSeason: 57,
      tendencies: {
        foulsPerGame: 38.9,
        homeWinPct: 49,
        avgPace: 0.8,
        technicalFrequency: "Low",
        overtimeGames: 2,
      },
      bestFor: "Defensive-minded teams, teams that play clean basketball",
      worstFor: "Teams that need favorable whistles to create offense",
      notableGame: "Leading tonight's CHI-WSH assignment where his whistle discipline should reward Chicago's veteran execution over Washington's chaotic approach."
    },
    {
      name: "Marc Davis",
      number: 36,
      experience: "25 years",
      gamesThisSeason: 60,
      tendencies: {
        foulsPerGame: 44.0,
        homeWinPct: 54,
        avgPace: -0.3,
        technicalFrequency: "High",
        overtimeGames: 6,
      },
      bestFor: "Veteran teams with strong leadership, home favorites",
      worstFor: "Young teams that argue calls, emotionally volatile players",
      notableGame: "Officiating tonight's PHI-HOU matchup where his technical-prone approach could be problematic for Joel Embiid's emotional tendencies in a crucial game."
    },
    {
      name: "Kane Fitzgerald",
      number: 5,
      experience: "16 years",
      gamesThisSeason: 60,
      tendencies: {
        foulsPerGame: 42.3,
        homeWinPct: 53,
        avgPace: 0.2,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Balanced teams with multiple scoring options",
      worstFor: "Teams that need extreme officiating tendencies to succeed",
      notableGame: "Supporting Scott Foster in tonight's MIA-TOR game where his balanced approach provides stability to Foster's more aggressive whistle."
    },
    {
      name: "Sean Wright",
      number: 4,
      experience: "18 years",
      gamesThisSeason: 58,
      tendencies: {
        foulsPerGame: 42.8,
        homeWinPct: 59,
        avgPace: -0.4,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Home teams, interior-focused offenses",
      worstFor: "Road teams seeking neutral whistles, perimeter-heavy offenses",
      notableGame: "Working with Marc Davis in tonight's PHI-HOU game where his strong home bias could provide additional support for the Rockets' playoff push."
    },
    {
      name: "James Williams",
      number: 60,
      experience: "12 years",
      gamesThisSeason: 56,
      tendencies: {
        foulsPerGame: 41.7,
        homeWinPct: 52,
        avgPace: 2.1,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Athletic wings, transition offenses, high-scoring games",
      worstFor: "Methodical half-court teams, post-up heavy offenses",
      notableGame: "Supporting Zach Zarba in tonight's IND-BKN matchup where his extreme pace-positive impact (+2.1) virtually guarantees an up-tempo showcase."
    },
    {
      name: "Pat Fraher",
      number: 26,
      experience: "14 years",
      gamesThisSeason: 55,
      tendencies: {
        foulsPerGame: 41.8,
        homeWinPct: 51,
        avgPace: 0.3,
        technicalFrequency: "Average",
        overtimeGames: 3,
      },
      bestFor: "Skilled offensive teams, neutral game environments",
      worstFor: "Teams that rely on home cooking or favorable whistles",
      notableGame: "Leading tonight's LAL-GS crew where his neutral approach should create a fair environment for this crucial Western Conference rivalry at Chase Center."
    }
  ],
  weeklyTrend: "Tonight's six-game slate features the most diverse officiating philosophies of the season, creating vastly different game environments that will test various team strengths. The marquee BOS-NYK matchup gets Tony Brothers' home-heavy approach, giving the Knicks a significant whistle advantage in this crucial Eastern seeding battle. Meanwhile, the lottery teams in IND-BKN get Zach Zarba's pace-friendly crew that should produce fireworks in what could be the night's highest-scoring affair. Scott Foster returns to officiate MIA-TOR after yesterday's CLE-ATL assignment, bringing his physical style to another playoff positioning battle where Jimmy Butler's emotions will be tested. The most intriguing subplot involves Marc Davis handling PHI-HOU, where Joel Embiid's history of technical fouls meets Davis' zero-tolerance approach in a game with major seeding implications. Ben Taylor's assignment to CHI-WSH represents the cleanest officiating environment of the night, rewarding skill over gamesmanship. Pat Fraher's neutral approach for LAL-GS creates the fairest conditions for what should be the most competitive matchup. After yesterday's contrasting styles — from Tony Brothers' 45-foul games to Ben Taylor's whistle discipline — tonight's crew diversity allows teams to either capitalize on favorable tendencies or overcome challenging officiating environments. The combination of home-biased crews (Brothers, Wright) and road-friendly officials (Zarba, Malloy) across tonight's slate means location could be more decisive than talent in several outcomes."
};
