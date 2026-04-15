// Referee Tendency Reports — Know the Whistle
// Last updated: April 15, 2026

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
  generatedDate: "April 15, 2026",
  tonightAssignments: [
    {
      game: "ORL @ PHI",
      crew: ["Tony Brothers", "Ben Taylor", "Josh Tiven"],
      leadRef: "Tony Brothers",
      impact: "Brothers' strong home bias (58% home win rate) creates a significant edge for Philadelphia in this perfectly balanced 7v8 matchup. His physical tolerance and higher foul frequency (45.2 per game) benefit Tyrese Maxey's aggressive drives while potentially limiting Paolo Banchero's interior dominance through early foul trouble. The high technical frequency could be problematic if Orlando's young core gets emotional, but Paul George's veteran presence knows how to work Brothers effectively.",
      bettingAngle: "Strong lean on PHI -2.5 based on Brothers' pronounced home bias. His 58% home win rate is well above league average, and Philadelphia's veteran leadership (George, Kyle Lowry) knows how to leverage his whistle tendencies. The OVER 215.5 is also appealing given his higher foul rate typically means more free throws and clock stoppages that extend possessions.",
      historical: "Brothers worked 4 Sixers games this season (PHI 3-1) where they averaged 112.8 PPG at home versus 106.2 on the road, showcasing his home-friendly approach. He handled 2 Magic games (ORL 0-2) with Paolo Banchero averaging 6.5 fouls across those contests, suggesting his physical style doesn't favor Orlando's star. No technical fouls on Sixers players in Brothers' games; 3 on Magic players."
    },
    {
      game: "GSW @ LAC",
      crew: ["Marc Davis", "John Goble", "Natalie Sago"],
      leadRef: "Marc Davis",
      impact: "Davis' veteran-friendly whistle and moderate home bias (54%) creates an intriguing dynamic for Stephen Curry's elimination game. His higher technical frequency could be concerning given the emotional stakes, but his experience with high-profile moments makes him ideal for managing Curry's potential farewell. The pace-negative tendency (-0.3) may limit transition opportunities that favor Golden State's aging roster, while benefiting LAC's half-court execution.",
      bettingAngle: "Slight lean on LAC -4.5 given Davis' home bias and the fact that his veteran-friendly approach may favor Kawhi Leonard's playoff experience over Curry's emotional return narrative. The UNDER 218.5 makes sense with his pace-negative tendencies and higher foul frequency creating more clock stoppages in a pressure-packed elimination environment.",
      historical: "Davis officiated 3 Warriors games this season (GSW 1-2) including Curry's return game Sunday, where his veteran-friendly calls helped ease the superstar back into game action. He worked 3 Clippers games (LAC 2-1) with Kawhi Leonard shooting 47% from the field in Davis games versus 42% with other officials. His presence typically elevates star performances in high-stakes moments."
    }
  ],
  refProfiles: [
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
      notableGame: "Leading tonight's PHI-ORL elimination game, bringing his pronounced home bias and physical tolerance to Philadelphia's crucial 7v8 matchup. His assignment gives the Sixers a systematic advantage while his high technical frequency could prove problematic for Orlando's younger core if they let emotions take over in the hostile Wells Fargo Center environment."
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
      bestFor: "Veteran teams with strong leadership, home favorites, star players in big moments",
      worstFor: "Young teams that argue calls, emotionally volatile players",
      notableGame: "Assigned to tonight's GSW-LAC elimination game, tasked with managing Stephen Curry's potentially career-defining moment. Davis' veteran-friendly whistle and experience with high-profile situations make him the league's choice for handling the emotional weight of Curry's comeback story meeting sudden-death stakes at Intuit Dome."
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
      notableGame: "Held in reserve for Friday's elimination games after working Monday's emotional play-in contests. Foster's physical tolerance and overtime tendency (league-leading 9 OT games) make him the perfect choice for managing Friday's do-or-die atmosphere when teams will push every possession to its physical limit."
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
      notableGame: "Supporting Brothers' crew in tonight's PHI-ORL game, providing whistle discipline and neutral tendencies to balance the lead official's pronounced biases. Taylor's low foul rate allows skilled scorers like Paolo Banchero and Tyrese Maxey to operate freely without early foul trouble concerns."
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
      notableGame: "Second official for tonight's GSW-LAC elimination game, bringing road-favorable tendencies that could benefit Golden State's underdog status. His pace-positive approach (+1.8) creates opportunities for Curry's transition offense while his road bias provides systematic balance against Davis' moderate home favoritism."
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
      notableGame: "Being held for Friday's elimination games where his extreme pace-positive tendencies could create the fast-paced environment that favors whichever team survives tonight's physical battles. His road-friendly approach makes him ideal for the team that must travel after tonight's emotional victories."
    },
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
      notableGame: "Fresh off leading Monday's MIA-CHA elimination game with exceptional neutrality and game management. Zarba's tournament-tested experience and road-neutral approach make him a prime candidate for this weekend's first-round games, where his whistle discipline will be crucial for maintaining competitive integrity."
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
      notableGame: "Available for Friday's assignments after providing steady support in Monday's play-in action. Fitzgerald's balanced tendencies and playoff experience make him valuable for managing the pressure-cooker environment when Charlotte faces either tonight's loser in an elimination scenario."
    },
    {
      name: "Josh Tiven",
      number: 58,
      experience: "11 years",
      gamesThisSeason: 61,
      tendencies: {
        foulsPerGame: 41.8,
        homeWinPct: 51,
        avgPace: 0.5,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Up-tempo offenses, younger players who play with emotion",
      worstFor: "Teams that need veteran-friendly whistles, slow-paced grinding styles",
      notableGame: "Third member of tonight's PHI-ORL crew, providing neutral balance to Brothers' pronounced home bias. Tiven's moderate tendencies and younger officiating perspective help connect with Orlando's core while his average technical frequency won't artificially escalate the game's emotional temperature."
    },
    {
      name: "Natalie Sago",
      number: 9,
      experience: "8 years",
      gamesThisSeason: 58,
      tendencies: {
        foulsPerGame: 43.1,
        homeWinPct: 52,
        avgPace: -0.1,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Teams with strong veteran leadership, methodical offensive systems",
      worstFor: "Teams that rely on getting favorable whistle treatment",
      notableGame: "Completing tonight's GSW-LAC crew as the third official, bringing her steady approach and low technical frequency to an elimination game that could define Stephen Curry's legacy. Sago's neutral pace tendencies help balance Goble's pace-positive impact while maintaining game flow in this high-stakes environment."
    }
  ],
  weeklyTrend: "Tonight's play-in elimination assignments reveal a fascinating strategic philosophy from the officiating department, with each crew carefully constructed to either amplify or neutralize the existing advantages in perfectly balanced matchups. The PHI-ORL assignment represents the most aggressive home-court amplification we've seen in recent playoff history. Tony Brothers' 58% home win rate isn't just above league average—it's a systematic advantage being handed to Philadelphia in what's essentially a coin-flip game on paper. His physical tolerance and high technical frequency create the perfect storm for Philadelphia's veteran core (Paul George, Kyle Lowry) to leverage experience against Orlando's younger players who might crack under pressure. The league's decision to pair Brothers with Ben Taylor's whistle discipline suggests they want the physical advantage without whistle chaos disrupting the game's flow. This crew construction essentially transforms PHI -2.5 from a slight lean into a strong play based purely on systematic bias. The GSW-LAC assignment tells a completely different story about managing legacy narratives. Marc Davis' selection as lead official for Stephen Curry's potential elimination game represents the league's most star-conscious assignment of the season. Davis' veteran-friendly whistle and experience with high-profile moments creates the perfect environment for Curry's comeback story to reach its natural conclusion—whether that's elimination heartbreak or vintage magic. John Goble's road bias provides systematic balance against Davis' moderate home favoritism, while Natalie Sago's steady presence ensures the emotional weight won't overwhelm the game's competitive integrity. The betting implications are crystal clear: Brothers' crew creates artificial value on Philadelphia's spread, while Davis' crew suggests the league expects this elimination game to be decided by star-level execution rather than whistle patterns. The notable absences tell an equally important story. Scott Foster's absence from tonight's assignments—despite his tournament-tested experience—suggests the league is preserving his physical tolerance and overtime tendency for Friday's elimination games, where teams will be emotionally and physically drained from tonight's battles. Ed Malloy's pace-positive expertise is being saved for scenarios where offensive explosion might be needed to separate exhausted teams. The strategic deployment of officiating personnel has become as sophisticated as roster construction, with each assignment designed to either amplify existing advantages or create the optimal environment for the narratives the league wants to highlight. Tonight's crews will likely determine not just who advances, but how they advance—and that may prove just as important as the victories themselves when Friday's elimination games demand everything from the survivors."
};
