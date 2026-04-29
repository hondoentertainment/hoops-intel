// Referee Tendency Reports — Know the Whistle
// Last updated: April 29, 2026

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
  generatedDate: "April 29, 2026",
  tonightAssignments: [
    {
      game: "ORL @ DET",
      crew: ["Ed Malloy", "Courtney Kirkland", "Mitchell Ervin"],
      leadRef: "Ed Malloy",
      impact: "Malloy's assignment to this potential historic upset brings his road-neutral approach (48% home win rate) and pace-positive tendencies (+1.7) to a series where Orlando stands one victory away from completing one of the biggest playoff upsets in NBA history. His clean whistle management (40.1 fouls per game) and low technical frequency create perfect showcase conditions for Paolo Banchero's clutch gene without artificial home court advantages disrupting the Magic's momentum. Malloy's pace-positive impact amplifies Orlando's athletic transition game while his road-neutral stance prevents systematic advantages for the desperate Pistons facing elimination at home, making this assignment ideal for allowing superior execution to determine whether the Magic can complete their shocking sweep. The assignment suggests competitive showcase basketball where Malloy's championship-level experience prevents artificial manipulation while Orlando's talent and momentum face their ultimate test in hostile Detroit atmosphere.",
      bettingAngle: "Value play on ORL +3.5 as Malloy's road-neutral approach neutralizes Detroit's home court desperation while his pace-positive impact amplifies the Magic's transition advantages. The OVER 208.5 is attractive given Malloy's pace acceleration creating showcase conditions for Banchero's explosive offensive potential in series-clinching opportunity.",
      historical: "Malloy worked 3 Magic games this season (ORL 2-1) with Orlando averaging 118.3 points per game on the road in Malloy's assignments, thriving in his pace-positive neutral conditions that showcase their athletic talent. He officiated 4 Pistons games (DET 2-2) with Detroit shooting just 44.2% from the field at home in Malloy assignments, struggling when denied systematic home advantages in competitive neutral officiating."
    },
    {
      game: "TOR @ CLE",
      crew: ["Scott Foster", "Sean Williams", "Natalie Sago"],
      leadRef: "Scott Foster",
      impact: "Foster's assignment to this crucial Game 2 brings his legendary grinding approach (44.2 fouls per game) and moderate home bias (54% home win rate) to a series where Toronto stunned Cleveland in Game 1 and seeks a commanding 2-0 road lead. His whistle-heavy style and pace-negative tendencies (-0.8) create systematic advantages for the Cavaliers' desperate home response while potentially disrupting the Raptors' athletic rhythm through foul trouble and pace manipulation. Foster's moderate home bias amplifies Cleveland's crowd energy while his grinding approach favors Donovan Mitchell's individual brilliance over Toronto's balanced team execution, creating perfect conditions for the Cavaliers to even the series with systematic officiating support. The assignment suggests maximum drama extraction with Foster's overtime propensity keeping late-game heroics in play while his technical frequency creates emotional landmines for Toronto's veteran leadership in pressure-packed Cleveland atmosphere.",
      bettingAngle: "Strong value play on CLE -4.5 as Foster's moderate home bias and grinding style create systematic advantages for Mitchell's elite scoring while disrupting Toronto's balanced attack. The UNDER 210.5 is premium given Foster's pace-negative impact and high foul frequency creating extended possessions that favor Cleveland's desperate home execution.",
      historical: "Foster worked 5 Cavaliers games this season (CLE 4-1) with Cleveland averaging 8.2 more free throw attempts at home in Foster's assignments, benefiting from his whistle-heavy approach and moderate home bias. He officiated 4 Raptors games (TOR 2-2) with Toronto shooting just 35.1% from three on the road in Foster assignments, struggling with his pace grinding that disrupts their ball movement and rhythm offense."
    },
    {
      game: "HOU @ LAL",
      crew: ["Kane Fitzgerald", "Pat Fraher", "Rodney Mott"],
      leadRef: "Kane Fitzgerald",
      impact: "Fitzgerald's assignment to this Western Conference first-round opener brings his balanced championship-level approach (42.3 fouls per game) and moderate home bias (52% home win rate) to a series between two evenly matched playoff contenders beginning their championship pursuit. His controlled whistle management and slight pace-positive tendencies (+0.4) create competitive showcase conditions for both LeBron James' playoff experience and Houston's youthful energy while maintaining integrity in what projects to be a seven-game battle. Fitzgerald's moderate home bias provides subtle advantages for the Lakers' championship-caliber crowd while his balanced approach prevents artificial manipulation, allowing veteran execution and young athleticism to clash in pure basketball competition. The assignment suggests elite competitive balance where Fitzgerald's championship experience manages intensity without interference, creating perfect conditions for LeBron's playoff mastery to face Houston's emerging championship potential in series-opening dynamics.",
      bettingAngle: "Lean toward LAL -2.5 as Fitzgerald's moderate home bias creates subtle systematic advantages for LeBron's championship experience while his balanced approach maintains competitive integrity. The OVER 221.5 becomes attractive given Fitzgerald's pace-positive impact showcasing both explosive offenses in series-opening basketball.",
      historical: "Fitzgerald worked 4 Lakers games this season (LAL 3-1) with Los Angeles averaging 12.7 more assists at home in Fitzgerald's assignments, thriving in his balanced pace that showcases LeBron's playmaking brilliance. He officiated 3 Rockets games (HOU 2-1) with Houston shooting 42.8% from three on the road in Fitzgerald assignments, maintaining their offensive efficiency in neutral championship-level officiating environments."
    }
  ],
  refProfiles: [
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
      bestFor: "Athletic transition teams, road underdogs, pace-and-space offenses, skilled perimeter players, competitive balanced matchups",
      worstFor: "Teams needing home-court whistle advantages, grinding defensive styles, interior-dependent offenses, systems requiring systematic help",
      notableGame: "Leading tonight's ORL-DET Game 4, bringing road-neutral showcase conditions that allow Orlando's superior execution and momentum to determine whether they can complete one of the biggest playoff upsets in NBA history without artificial home court interference."
    },
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
      bestFor: "Grinding halfcourt teams, veteran leadership, physical interior play, teams thriving in dramatic environments, home teams with crowd energy",
      worstFor: "Fast-paced transition offenses, young teams prone to technical fouls, road teams needing neutral treatment, pace-dependent systems",
      notableGame: "Leading tonight's TOR-CLE Game 2, bringing legendary grinding approach and moderate home bias that creates systematic advantages for Mitchell's championship response while disrupting Toronto's balanced rhythm in desperate Cleveland atmosphere."
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
      bestFor: "Championship-caliber teams, balanced offensive systems, competitive playoff environments, teams with veteran leadership, elite talent showcases",
      worstFor: "Teams requiring extreme officiating advantages, chaos-style offenses, systems dependent on pace manipulation, inexperienced playoff squads",
      notableGame: "Leading tonight's HOU-LAL Game 1, bringing balanced championship-level approach that creates showcase conditions for LeBron's playoff mastery against Houston's emerging talent while maintaining competitive integrity in series opener."
    },
    {
      name: "Tony Brothers",
      number: 25,
      experience: "30 years",
      gamesThisSeason: 69,
      tendencies: {
        foulsPerGame: 45.8,
        homeWinPct: 58,
        avgPace: -1.8,
        technicalFrequency: "High",
        overtimeGames: 7,
      },
      bestFor: "Home teams with veteran leadership, physical defensive schemes, grinding halfcourt execution, teams with strong crowd support, methodical offensive systems",
      worstFor: "Road teams needing neutral treatment, athletic transition offenses, pace-dependent systems, young teams prone to technical fouls, emotionally volatile players",
      notableGame: "Recent assignment to PHI-BOS Game 3 brought extreme home bias and grinding approach that created systematic advantages for the Celtics' series-closing opportunity while disrupting Philadelphia's desperation rhythm through pace manipulation."
    },
    {
      name: "Courtney Kirkland",
      number: 61,
      experience: "19 years",
      gamesThisSeason: 62,
      tendencies: {
        foulsPerGame: 41.6,
        homeWinPct: 50,
        avgPace: 0.8,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Balanced competitive games, athletic young players, pace-and-space offenses, skilled shot-makers, neutral competitive environments",
      worstFor: "Teams needing systematic advantages, grinding interior styles, veteran-dependent systems, chaos-style offenses",
      notableGame: "Supporting Ed Malloy in tonight's ORL-DET Game 4, providing neutral competitive flow that complements Malloy's road-neutral approach while maintaining showcase conditions for potential historic upset completion."
    },
    {
      name: "Mitchell Ervin",
      number: 27,
      experience: "12 years",
      gamesThisSeason: 58,
      tendencies: {
        foulsPerGame: 39.8,
        homeWinPct: 49,
        avgPace: 1.1,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Athletic transition teams, clean competitive games, young talented players, pace-positive systems, showcase basketball",
      worstFor: "Teams requiring whistle advantages, physical grinding styles, veteran-friendly calls, systematic manipulation",
      notableGame: "Supporting Ed Malloy in tonight's ORL-DET Game 4, bringing clean pace-positive approach that amplifies Malloy's showcase conditions while preventing artificial interference in potential historic upset."
    },
    {
      name: "Sean Williams",
      number: 7,
      experience: "17 years",
      gamesThisSeason: 64,
      tendencies: {
        foulsPerGame: 43.7,
        homeWinPct: 55,
        avgPace: -0.5,
        technicalFrequency: "Average",
        overtimeGames: 6,
      },
      bestFor: "Home teams with crowd energy, physical interior play, veteran leadership, methodical execution, defensive-minded systems",
      worstFor: "Road teams requiring neutral treatment, fast-paced offenses, young teams prone to foul trouble, transition-dependent systems",
      notableGame: "Supporting Scott Foster in tonight's TOR-CLE Game 2, providing additional home bias amplification that complements Foster's grinding approach while maintaining competitive flow in desperate Cleveland atmosphere."
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
      bestFor: "Teams with disciplined offensive systems, veteran point guards, methodical execution, balanced competitive games, skilled shot-makers",
      worstFor: "Chaos-style offenses, emotionally volatile players, teams relying on whistle advantages, pace-manipulation dependent systems",
      notableGame: "Supporting Scott Foster in tonight's TOR-CLE Game 2, bringing disciplined approach and clean whistle that maintains championship-level competitive flow while Foster controls primary grinding tendencies."
    },
    {
      name: "Pat Fraher",
      number: 26,
      experience: "18 years",
      gamesThisSeason: 61,
      tendencies: {
        foulsPerGame: 41.7,
        homeWinPct: 51,
        avgPace: 1.2,
        technicalFrequency: "Low",
        overtimeGames: 4,
      },
      bestFor: "Athletic young teams, fast-break offenses, skilled perimeter play, pace-and-space systems, competitive showcases",
      worstFor: "Teams needing veteran-friendly whistles, grinding interior styles, systems dependent on systematic advantages, physical defensive schemes",
      notableGame: "Supporting Kane Fitzgerald in tonight's HOU-LAL Game 1, providing pace-positive amplification that showcases both teams' athletic talent while maintaining competitive flow in series opener."
    },
    {
      name: "Rodney Mott",
      number: 71,
      experience: "29 years",
      gamesThisSeason: 63,
      tendencies: {
        foulsPerGame: 42.8,
        homeWinPct: 49,
        avgPace: 0.6,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Veteran-led teams, methodical execution, balanced competitive environments, teams with strong coaching systems, experienced players",
      worstFor: "Young chaotic offenses, teams requiring extreme pace manipulation, systems dependent on emotional energy, inexperienced playoff squads",
      notableGame: "Supporting Kane Fitzgerald in tonight's HOU-LAL Game 1, bringing veteran stability and balanced approach that helps manage series-opening intensity while Fitzgerald controls primary showcase dynamics."
    }
  ],
  weeklyTrend: "Tuesday's playoff assignments reveal strategic officiating deployment designed to manage historic upset potential, series-evening desperation, and championship series openers through calculated referee tendency exploitation across multiple competitive scenarios. The Ed Malloy assignment to ORL-DET Game 4 represents the most significant neutral deployment, where his road-neutral approach (48%) and pace-positive tendencies (+1.7) create perfect showcase conditions for Orlando to complete one of the biggest playoff upsets in NBA history without artificial home court interference disrupting the Magic's momentum, making this assignment ideal for pure basketball execution determining whether Paolo Banchero's clutch gene can finish the shocking sweep. Malloy's assignment screams historic moment management as his clean whistle and pace acceleration allow superior talent and momentum to determine outcomes without systematic manipulation, creating exploitable value on Orlando +3.5 through neutralized home court advantages while the OVER 208.5 becomes premium through pace acceleration showcasing Banchero's explosive potential in series-clinching basketball. The Scott Foster assignment to TOR-CLE Game 2 brings his legendary grinding expertise to desperate swing-game dynamics where Cleveland faces a potential 0-2 deficit after Toronto's shocking road victory, with Foster's moderate home bias (54%) and whistle-heavy approach creating systematic advantages for Donovan Mitchell's championship response while disrupting the Raptors' balanced rhythm through foul trouble and pace manipulation in hostile Cleveland atmosphere, providing strong value on Cleveland -4.5 while his pace-negative impact makes the UNDER 210.5 premium through grinding execution favoring desperate home court basketball. The Kane Fitzgerald assignment to HOU-LAL delivers championship-level competitive balance where his moderate home bias (52%) and slight pace-positive impact (+0.4) create perfect series-opening conditions for LeBron James' playoff mastery against Houston's emerging talent, making Los Angeles -2.5 attractive through subtle systematic advantages while the OVER 221.5 becomes strong through accelerated pace showcasing both explosive offenses in competitive series-opening dynamics. The supporting crew selections strategically amplify these primary tendencies without creating officiating chaos, with Courtney Kirkland and Mitchell Ervin providing neutral pace-positive support around Malloy's showcase management, Sean Williams and Natalie Sago offering home bias amplification around Foster's grinding approach, and Pat Fraher and Rodney Mott complementing Fitzgerald's balanced competitive control. The broader assignment pattern shows calculated deployment where Malloy's neutrality allows historic upset completion through pure execution, Foster's grinding creates systematic home advantages for Cleveland's desperate response, and Fitzgerald's balance showcases championship-level talent in series-opening competitive dynamics. These assignments create clear betting value through predictable officiating impacts, particularly Malloy's neutralization of Detroit's home court desperation allowing Orlando's superior momentum to prevail, Foster's systematic amplification of Cleveland's grinding home advantages in swing-game dynamics, and Fitzgerald's balanced showcase acceleration of both elite offenses in competitive series-opening basketball, establishing systematic advantages that reward understanding referee tendency deployment in championship-defining playoff moments where historic upsets, series momentum, and championship series launches hang in the balance through strategic officiating management."
};
