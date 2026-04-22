// Referee Tendency Reports — Know the Whistle
// Last updated: April 22, 2026

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
  generatedDate: "April 22, 2026",
  tonightAssignments: [
    {
      game: "ORL @ DET",
      crew: ["Scott Foster", "David Guthrie", "Tre Maddox"],
      leadRef: "Scott Foster",
      impact: "Foster's assignment to this playoff opener brings his notorious pace-grinding approach (-0.8 pace impact) and moderate home bias (54% home win rate) to a matchup where Detroit enters as 8.5-point favorites in their championship debut. His whistle-heavy style (44.2 fouls per game) and high technical frequency create systematic advantages for the veteran Pistons' halfcourt execution while potentially disrupting Orlando's youth-driven transition attack that keeps them competitive. Foster's tendency to reward disciplined veteran basketball over athletic chaos perfectly aligns with Detroit's championship experience, while his grinding style amplifies Cade Cunningham's methodical approach and neutralizes Paolo Banchero's fast-break opportunities. The Magic's young core faces emotional landmines in their first playoff road environment, with Foster's technical-happy whistle creating additional pressure on Anthony Black and other inexperienced players in hostile territory.",
      bettingAngle: "Strong play on DET -8.5 as Foster's home bias and pace-grinding style transform this from potential backdoor cover territory into systematic domination by the experienced Pistons. The UNDER 208.5 becomes highly attractive given Foster's pace-negative impact creating extended possessions that favor Detroit's halfcourt superiority. His assignment suggests the Magic's transition game gets neutralized while their young players face whistle pressure.",
      historical: "Foster worked 4 Pistons games this season (DET 3-1) with Detroit averaging 6.8 more free throw attempts at home in his assignments while maintaining their elite defensive metrics. He officiated 3 Magic games (ORL 1-2) with Orlando averaging 5.2 more turnovers on the road in Foster's games due to his whistle disrupting their pace. The Magic shot just 33.1% from three in Foster's road assignments compared to their 37.2% road average."
    },
    {
      game: "PHX @ OKC",
      crew: ["Tony Brothers", "Courtney Kirkland", "Phenizee Ransom"],
      leadRef: "Tony Brothers",
      impact: "Brothers' assignment to this Western Conference playoff opener brings his extreme home bias (58% home win rate) and grinding pace-negative approach (-1.3) to a game where Oklahoma City enters as massive 12.5-point favorites despite Phoenix's veteran playoff experience. His league-high foul frequency (45.8 per game) and technical-happy whistle create conditions that should systematically favor the Thunder's young core while potentially disrupting Phoenix's veteran rhythm and three-point shooting. Brothers' tendency to reward home crowds through favorable whistles amplifies OKC's natural advantages at the hostile Paycom Center, while his grinding style plays into Shai Gilgeous-Alexander's methodical scoring approach over Phoenix's need for pace and space. The assignment suggests maximum drama extraction from what should be a comfortable Thunder victory, with Brothers' overtime propensity keeping the door open for late-game heroics.",
      bettingAngle: "Lean toward OKC -12.5 as Brothers' extreme home bias and pace-grinding style create systematic advantages that push this beyond the already large spread. The UNDER 223.5 is extremely attractive given Brothers' pace-negative impact and high foul frequency creating extended possessions in a game with a massive total. His assignment transforms this from a shootout into a grinding affair favoring OKC's youth over Phoenix's aging legs.",
      historical: "Brothers worked 5 Thunder games this season (OKC 4-1) with Oklahoma City averaging 9.1 more free throw attempts at home in his assignments while shooting 51.2% from the field, well above their 48.7% home average. He officiated 4 Suns games (PHX 1-3) with Phoenix averaging 3.8 fewer three-point attempts on the road in Brothers' assignments, disrupting their offensive rhythm. The Suns shot just 34.2% from three in Brothers' road games compared to their 36.1% road average."
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
      notableGame: "Leading tonight's ORL-DET playoff opener, bringing legendary grinding style and moderate home bias that systematically favors Detroit's championship experience while creating whistle pressure for Orlando's young core in their first hostile playoff environment."
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
      notableGame: "Leading tonight's PHX-OKC playoff opener, bringing extreme home bias and whistle-heavy approach that amplifies Oklahoma City's natural advantages while disrupting Phoenix's veteran rhythm through pace manipulation and technical pressure."
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
      notableGame: "Road-neutral veteran whose pace-positive impact and clean whistle management create ideal showcase conditions for elite offensive talent while preventing systematic home-court advantages from determining outcomes."
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
      notableGame: "Veteran crew chief known for balanced approach that maintains competitive integrity while allowing natural team strengths to determine outcomes in high-stakes playoff environments."
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
      notableGame: "Supporting Scott Foster in tonight's ORL-DET playoff opener, providing veteran balance with pace-positive tendencies that help showcase young talent while Foster controls the overall game flow and home bias dynamics."
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
      notableGame: "Supporting Tony Brothers in tonight's PHX-OKC Western Conference playoff opener, bringing steady veteran presence to help manage high-stakes environment while Brothers controls the primary home bias and pace dynamics."
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
      notableGame: "Supporting Scott Foster in tonight's ORL-DET playoff opener, providing moderate home bias amplification and pace balance that complements Foster's grinding approach while maintaining competitive flow."
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
      notableGame: "Supporting Tony Brothers in tonight's PHX-OKC playoff opener, bringing pace-positive tendencies and clean whistle management that provides slight counter-balance to Brothers' grinding approach while maintaining overall home bias."
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
      notableGame: "Rising official known for disciplined approach and clean whistle management that maintains competitive flow while preventing systematic officiating interference in natural game dynamics."
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
      notableGame: "Road-neutral official whose pace-positive impact and clean whistle create perfect conditions for athletic teams to showcase their natural advantages while preventing systematic home-court bias from affecting outcomes."
    }
  ],
  weeklyTrend: "Tuesday's playoff opener assignments reveal sophisticated deployment strategies designed to maximize both entertainment value and predictable betting angles through systematic officiating tendencies in championship-defining matchups. The Scott Foster assignment to ORL-DET represents a classic grind-it-out approach where his pace-negative impact (-0.8) and moderate home bias (54%) transform Detroit's already substantial advantages into systematic domination territory, neutralizing Orlando's transition-dependent youth while rewarding the Pistons' veteran championship experience. This creates exploitable value on Detroit -8.5 as Foster's whistle historically disrupts young road teams' rhythm while amplifying home crowd energy through favorable calls. Conversely, the Tony Brothers assignment to PHX-OKC delivers maximum chaos potential with his extreme home bias (58%) and league-high foul frequency (45.8 per game) creating systematic advantages for Oklahoma City that push the already massive 12.5-point spread into blowout territory. Brothers' assignment suggests the league wants to showcase the Thunder's young core dominance while eliminating Phoenix's veteran upset potential through pace manipulation and whistle pressure. The supporting crew selections amplify these primary tendencies without creating officiating chaos, with David Guthrie and Tre Maddox providing balanced veteran presence around Foster's grinding approach, while Courtney Kirkland and Phenizee Ransom offer steady support for Brothers' more extreme tendencies. The broader pattern shows strategic assignment deployment where Foster's grinding reputation serves Detroit's championship narrative while Brothers' home bias maximizes Oklahoma City's natural advantages in what should be a statement victory. These assignments create clear betting value through predictable officiating impacts, particularly Foster's transformation of the DET-ORL total from a potential shootout into grinding affair, while Brothers' extreme home bias makes OKC's already large spread even more defensible through systematic whistle advantages that neutralize Phoenix's three-point shooting and veteran trickery."
};
