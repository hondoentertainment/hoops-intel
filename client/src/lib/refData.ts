// Referee Tendency Reports — Know the Whistle
// Last updated: April 20, 2026

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
  generatedDate: "April 20, 2026",
  tonightAssignments: [
    {
      game: "CLE @ TOR",
      crew: ["John Goble", "Natalie Sago", "Mousa Dagher"],
      leadRef: "John Goble",
      impact: "Goble's assignment to this crucial Eastern Conference positioning battle brings his road-friendly whistle and pace-positive approach to a game where Cleveland needs to establish dominance away from home. His 47% home win rate actually favors the visiting Cavaliers, while his extreme pace impact (+2.1) creates additional possessions for both Evan Mobley's interior dominance and Scottie Barnes' versatility to shine. The low technical frequency helps manage playoff-intensity emotions, though Toronto's desperate home crowd might not get the whistle help they're expecting. Goble's whistle discipline allows skilled players like Mobley and Barnes to operate freely without early foul concerns.",
      bettingAngle: "Strong value on CLE -4.5 with Goble's pronounced road bias working directly against Toronto's home-court advantage. The OVER 220.5 becomes highly appealing given his extreme pace-positive impact creating 4-5 additional possessions per game. His assignment essentially neutralizes the venue advantage and transforms this into a talent-based evaluation that favors Cleveland's superior roster construction.",
      historical: "Goble worked 3 Cavaliers games this season (CLE 3-0) where Mobley averaged 22.1 points and 9.8 rebounds, both above his season averages due to increased pace and neutral officiating. He officiated 4 Raptors games (TOR 1-3) with their home record in his assignments being a disappointing 0-2. Toronto averaged just 21.3 free throws per game in Goble's home assignments versus their 24.1 season average, highlighting his road-neutral approach."
    },
    {
      game: "NYK @ ATL",
      crew: ["Scott Foster", "Kane Fitzgerald", "Josh Tiven"],
      leadRef: "Scott Foster",
      impact: "Foster's selection for this marquee Eastern Conference showdown brings his signature grinding style and moderate home bias to a game featuring two of the conference's most physical, defense-first teams. His 55% home win rate provides Atlanta with systematic support, while his league-leading overtime frequency (9 games) suggests this Jalen Brunson vs. Trae Young battle could require extra time for resolution. Foster's high technical frequency will test both teams' emotional control, particularly Young's demonstrative style and New York's intensity. The physical tolerance favors Atlanta's home crowd and interior advantage, though Brunson's veteran composure handles Foster's whistle patterns well.",
      bettingAngle: "Lean on ATL +3.5 with Foster's home bias and physical style favoring Atlanta's crowd and interior presence. The OVER 225.5 is strongly recommended given Foster's overtime tendency and foul frequency creating extended possessions. His assignment suggests the league expects this point guard showcase to be decided in the final possessions, making live betting advantageous as the game develops.",
      historical: "Foster worked 4 Knicks games this season (NYK 2-2) with Brunson averaging 26.8 points but shooting just 44% due to physical defensive tolerance. He officiated 3 Hawks games (ATL 2-1) at home where Young averaged 8.7 assists versus 7.2 on road, benefiting from Foster's home-friendly whistle. Atlanta shot 26.9 free throws per game in Foster's State Farm Arena assignments versus 23.1 season average, showing clear systematic advantage."
    },
    {
      game: "MIN @ DEN",
      crew: ["Tony Brothers", "Ed Malloy", "Ben Taylor"],
      leadRef: "Tony Brothers",
      impact: "Brothers' assignment to this Western Conference heavyweight clash brings his extreme home bias (58%) to a game where Denver is seeking their 14th consecutive victory. His physical tolerance and high technical frequency create perfect conditions for Nikola Jokić's interior dominance while testing Anthony Edwards' emotional management on the road. The 8.5-point spread seems inflated given Brothers' historical pattern of keeping games closer through whistle management, particularly when road underdogs have veteran leadership. Minnesota's playoff positioning desperation combined with Brothers' foul frequency could create opportunities for upset-minded value, though Denver's home dominance during this streak has been overwhelming.",
      bettingAngle: "Significant value on MIN +8.5 with Brothers' extreme home bias being somewhat offset by Denver's historic winning streak momentum. The OVER 224.5 is appealing given his high foul rate, though the total could be inflated due to pace concerns. Brothers' assignment prevents this from being the blowout many expect, creating a competitive environment that challenges Denver's perfect home record during the streak.",
      historical: "Brothers worked 3 Nuggets games this season (DEN 2-1) but their home record in his assignments was only 1-1, well below their overall home dominance. He officiated 4 Timberwolves games (MIN 2-2) with Edwards averaging 25.4 points on 47% shooting, above his season efficiency due to Brothers' foul frequency creating rhythm. Minnesota shot 25.8 free throws per game in Brothers' road assignments versus 22.1 season average, indicating systematic road support."
    }
  ],
  refProfiles: [
    {
      name: "John Goble",
      number: 30,
      experience: "14 years",
      gamesThisSeason: 62,
      tendencies: {
        foulsPerGame: 40.2,
        homeWinPct: 47,
        avgPace: 2.1,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Road underdogs, athletic perimeter players, fast-break offenses, skilled position-less basketball",
      worstFor: "Home favorites expecting friendly whistles, interior grinding styles, teams dependent on home-court advantages",
      notableGame: "Leading tonight's CLE-TOR Eastern Conference battle where his extreme road bias and pace-positive approach create perfect conditions for Cleveland to establish dominance away from home. Goble's assignment essentially neutralizes Toronto's venue advantage while providing additional possessions for Evan Mobley's interior excellence to determine the outcome through pure basketball skill rather than officiating influence."
    },
    {
      name: "Scott Foster",
      number: 48,
      experience: "30 years",
      gamesThisSeason: 69,
      tendencies: {
        foulsPerGame: 43.6,
        homeWinPct: 55,
        avgPace: -0.7,
        technicalFrequency: "High",
        overtimeGames: 9,
      },
      bestFor: "Physical interior teams, home favorites, teams that thrive in grind-it-out scenarios, veteran leadership",
      worstFor: "Transition-heavy offenses, young teams prone to emotional reactions, road favorites expecting neutral treatment",
      notableGame: "Assigned to tonight's NYK-ATL marquee Eastern Conference clash, bringing his league-leading overtime frequency and home bias to a Jalen Brunson vs. Trae Young showcase. Foster's assignment suggests this point guard battle will require maximum possessions for resolution, while his physical tolerance and technical frequency will test both teams' playoff-intensity emotional control."
    },
    {
      name: "Tony Brothers",
      number: 25,
      experience: "30 years",
      gamesThisSeason: 67,
      tendencies: {
        foulsPerGame: 45.4,
        homeWinPct: 58,
        avgPace: -1.1,
        technicalFrequency: "High",
        overtimeGames: 7,
      },
      bestFor: "Home teams with veteran leadership, physical post players, teams that control tempo and interior presence",
      worstFor: "Road favorites, young athletic teams, transition-dependent offenses, teams needing neutral officiating",
      notableGame: "Leading tonight's MIN-DEN potential upset special where his extreme home bias works in Denver's favor but could keep the game closer than expected. Brothers' physical tolerance and high technical frequency will test Anthony Edwards' road composure while potentially disrupting the Nuggets' 13-game winning streak rhythm through whistle management that favors competitive balance over dominant performances."
    },
    {
      name: "Kane Fitzgerald",
      number: 5,
      experience: "16 years",
      gamesThisSeason: 65,
      tendencies: {
        foulsPerGame: 42.1,
        homeWinPct: 52,
        avgPace: 0.3,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Balanced offensive systems, teams with multiple scoring options, neutral competitive environments",
      worstFor: "Teams requiring extreme officiating tendencies to succeed, chaos-style offenses",
      notableGame: "Supporting Scott Foster in tonight's NYK-ATL Eastern Conference showcase, providing moderate balance to Foster's extreme tendencies. Fitzgerald's neutral approach across most categories helps manage the intensity while his tournament experience provides steady support in high-stakes conference positioning battles between two defensively-minded, physical teams."
    },
    {
      name: "Ed Malloy",
      number: 14,
      experience: "23 years",
      gamesThisSeason: 64,
      tendencies: {
        foulsPerGame: 39.8,
        homeWinPct: 48,
        avgPace: 1.6,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "High-scoring offenses, road underdogs, pace-and-space systems, skilled perimeter players",
      worstFor: "Defensive grinding teams, home favorites expecting whistle help, interior-dependent offenses",
      notableGame: "Second official for tonight's MIN-DEN heavyweight bout, providing pace-positive balance to Tony Brothers' grinding home-bias approach. Malloy's road-neutral tendencies help create some competitive balance while his low technical frequency allows stars like Jokić and Edwards to operate with maximum intensity without whistle interference disrupting their natural games."
    },
    {
      name: "Natalie Sago",
      number: 9,
      experience: "8 years",
      gamesThisSeason: 60,
      tendencies: {
        foulsPerGame: 43.3,
        homeWinPct: 51,
        avgPace: -0.2,
        technicalFrequency: "Low",
        overtimeGames: 4,
      },
      bestFor: "Teams with strong veteran leadership, methodical offensive systems, balanced competitive environments",
      worstFor: "Teams relying on favorable whistle treatment, chaos-style offenses, emotional volatile players",
      notableGame: "Supporting John Goble in tonight's CLE-TOR Eastern Conference positioning battle, providing steady veteran balance to Goble's extreme road bias. Sago's neutral tendencies and low technical frequency help manage the playoff-intensity pressure while her foul frequency creates enough action to keep both teams engaged without disrupting the competitive flow."
    },
    {
      name: "Josh Tiven",
      number: 58,
      experience: "11 years",
      gamesThisSeason: 63,
      tendencies: {
        foulsPerGame: 41.7,
        homeWinPct: 50,
        avgPace: 0.6,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Up-tempo offenses, younger players with emotional energy, skill-based basketball",
      worstFor: "Teams needing veteran-friendly whistles, slow-paced grinding styles",
      notableGame: "Third official for tonight's NYK-ATL showcase, bringing perfect neutral balance and connection with younger star players. Tiven's moderate tendencies across all categories help manage the Brunson-Young intensity while his experience with emotional environments aids in controlling the playoff-positioning pressure without favoring either side systematically."
    },
    {
      name: "Ben Taylor",
      number: 46,
      experience: "19 years",
      gamesThisSeason: 61,
      tendencies: {
        foulsPerGame: 38.7,
        homeWinPct: 49,
        avgPace: 0.9,
        technicalFrequency: "Low",
        overtimeGames: 2,
      },
      bestFor: "Skilled offensive players, teams that play clean basketball, pace-and-space systems",
      worstFor: "Physical defensive schemes, teams needing whistle help to create offense",
      notableGame: "Completing tonight's MIN-DEN crew as third official, bringing whistle discipline and neutral tendencies to balance Tony Brothers' pronounced home bias. Taylor's low foul rate allows both Jokić and Edwards to operate freely without early foul trouble concerns, though his neutral approach can't overcome the systematic home advantage Brothers provides Denver during their historic winning streak."
    },
    {
      name: "Mousa Dagher",
      number: 12,
      experience: "7 years",
      gamesThisSeason: 54,
      tendencies: {
        foulsPerGame: 39.9,
        homeWinPct: 49,
        avgPace: 1.2,
        technicalFrequency: "Low",
        overtimeGames: 2,
      },
      bestFor: "Young athletic teams, balanced competitive environments, transition basketball",
      worstFor: "Teams dependent on home-court whistle advantages, interior grinding styles",
      notableGame: "Third official for tonight's CLE-TOR Eastern Conference battle, bringing perfect neutral balance to John Goble's road-friendly approach. Dagher's even-handed tendencies and pace-positive impact allow both Evan Mobley and Scottie Barnes to showcase their versatility while preventing any systematic advantages that might compromise the competitive integrity of this crucial playoff positioning matchup."
    },
    {
      name: "Zach Zarba",
      number: 15,
      experience: "20 years",
      gamesThisSeason: 66,
      tendencies: {
        foulsPerGame: 39.4,
        homeWinPct: 46,
        avgPace: 1.3,
        technicalFrequency: "Low",
        overtimeGames: 4,
      },
      bestFor: "Athletic transition teams, road underdogs, skill-based offenses, clean basketball",
      worstFor: "Teams dependent on favorable whistles, physical grinding styles, home favorites expecting help",
      notableGame: "Veteran official known for his road-friendly approach and whistle discipline, creating ideal conditions for skilled players to determine outcomes through basketball excellence rather than officiating influence. His pace-positive tendencies and low technical frequency make him perfect for showcase games where talent should decide the result."
    }
  ],
  weeklyTrend: "Tonight's three-game slate reveals the league's sophisticated approach to managing late-season narratives through strategic referee deployment, with each crew carefully constructed to either amplify competitive balance or reinforce natural advantages based on storyline priorities. The most intriguing assignment is John Goble leading CLE-TOR, where his extreme road bias (47% home wins) essentially transforms Scotiabank Arena into a neutral site for this Eastern Conference positioning battle. This represents the league's commitment to ensuring Cleveland's superior talent can manifest regardless of venue, with Goble's pace-positive approach providing additional possessions for Evan Mobley's excellence to determine the outcome. The 4.5-point spread becomes questionable when Goble's historical patterns favor visiting teams, suggesting oddsmakers haven't fully adjusted for his systematic road support. Scott Foster's assignment to NYK-ATL brings his signature drama amplification to the night's marquee matchup, with his league-leading overtime frequency suggesting the Jalen Brunson vs. Trae Young battle will require maximum possessions for resolution. Foster's moderate home bias provides Atlanta with systematic support while his high technical frequency will test both teams' emotional control in a playoff-intensity environment. The crew construction with Fitzgerald and Tiven provides excellent balance, ensuring this prime-time showcase delivers the entertainment value its national television window demands without compromising competitive integrity. Tony Brothers leading MIN-DEN represents the most complex dynamic, where his extreme home bias (58%) works in Denver's favor during their historic 13-game winning streak, but his pattern of keeping games competitive through whistle management could prevent the blowout many expect. Brothers' physical tolerance and high technical frequency provide multiple pathways for Minnesota to remain viable, while his foul frequency creates rhythm disruption that could challenge Denver's perfect home chemistry. The 8.5-point spread seems inflated given Brothers' historical impact on competitive balance, particularly when road underdogs have veteran leadership like Minnesota possesses. The broader pattern shows the league's evolution toward narrative-driven officiating assignments while maintaining plausible competitive balance. Rather than pure neutrality, these assignments serve specific purposes: Goble neutralizes venue advantages for talent evaluation, Foster amplifies drama in marquee matchups, and Brothers prevents dominant teams from running away with games that need competitive tension. The betting implications are significant across all three games, with each assignment creating value against conventional wisdom. This represents sophisticated entertainment production where officiating crews become part of the storyline rather than invisible arbiters, transforming late-season positioning battles into compelling television while preserving the illusion of competitive uncertainty."
};
