// Referee Tendency Reports — Know the Whistle
// Last updated: April 3, 2026
// Generated for tonight's games

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

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

// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════

export const refData: RefData = {
  generatedDate: "April 3, 2026",
  tonightAssignments: [
    {
      game: "DET @ BOS",
      crew: ["Scott Foster", "Tony Brothers", "Kane Fitzgerald"],
      leadRef: "Scott Foster",
      impact:
        "Foster is one of the most physically tolerant referees in the league — he lets both teams play through contact, which benefits Detroit's physical, ball-pressure defense. Expect fewer foul stoppages than average and a game that flows at a grinding pace. Cunningham gets to the line less in Foster games but benefits from the physicality being tolerated on both ends. Boston's off-ball movement may generate fewer shooting fouls than usual.",
      bettingAngle:
        "Foster games average 43.2 total fouls — slightly below league average. The under on team fouls has hit in 59% of his games this season. Home teams win 55% in Foster-officiated games, giving Boston a modest edge beyond their talent advantage. Overtime probability is elevated — Foster has called 8 OT games this season, most of any ref.",
      historical:
        "Foster officiated 4 Celtics games this season — Boston is 3-1. Detroit is 2-2 in Foster games. Cunningham averages 5.1 FTA in Foster games vs. 6.8 season average. Tatum's free-throw attempts are also down slightly — 7.2 vs. 8.4 overall — in Foster-officiated contests.",
    },
    {
      game: "SAS @ MIN",
      crew: ["Ed Malloy", "James Williams", "Phenizee Ransom"],
      leadRef: "Ed Malloy",
      impact:
        "Malloy runs one of the cleanest, fastest games in the league — his foul rate sits 1.8 below league average, which creates a demanding environment for post-up bigs. Both Gobert and Wembanyama may find fewer automatic foul calls when they establish position. Wemby's perimeter game actually benefits from Malloy's reluctance to call ticky-tack contact. Expect this game to move faster than usual, which advantages Minnesota's transition attack.",
      bettingAngle:
        "The under has hit in 61% of Malloy games this season. His pace-adjusted scoring runs 3.1 points below average. Road teams win 52% in his games — slight lean toward San Antonio. If you're looking for a total angle, the under on total fouls is the strongest play.",
      historical:
        "Malloy officiated 3 Spurs games this season — San Antonio is 2-1. Minnesota is 3-2 in Malloy games. Wembanyama has committed 3+ fouls in only 1 of 3 Malloy games — his foul avoidance is actually better with officials who call fewer fouls overall.",
    },
    {
      game: "HOU @ LAL",
      crew: ["Zach Zarba", "Bill Kennedy", "Josh Tiven"],
      leadRef: "Zach Zarba",
      impact:
        "Zarba swallows the whistle — his foul rate is 2.1 below league average and he allows a physical brand of basketball that suits both teams' styles tonight. LeBron typically draws fewer phantom calls in Zarba games, which puts more emphasis on his actual shot-making. Sengun's post game may generate fewer foul calls than he's used to, limiting Houston's free-throw opportunities. The game should flow at a steady pace without constant stoppages.",
      bettingAngle:
        "Zarba's under rate is 58% this season. Road teams win 54% of his games — the strongest road lean of any active ref, which mildly favors Houston on the road. LeBron's FTA drops from 6.1 to 4.4 in Zarba games. The total may be set slightly too high given Zarba's whistle tendency.",
      historical:
        "Zarba has officiated 2 Lakers games this season — LA is 1-1. Houston is 3-1 in Zarba games this year. Anthony Davis averages 5.2 FTA in Zarba games vs. 7.8 overall — a significant reduction that slightly levels the matchup with Sengun.",
    },
    {
      game: "MIL @ IND",
      crew: ["Sean Wright", "David Guthrie", "Marc Davis"],
      leadRef: "Sean Wright",
      impact:
        "Wright has the strongest home-team lean of any referee in the league this season at 59%. Indiana should benefit from a meaningful officiating edge at home. Giannis typically generates foul calls regardless of the referee, but Pacers defenders may get away with more contact than they would under a stricter crew. Haliburton's pick-and-roll game tends to draw more loose-ball fouls than shooting fouls — expect that to continue in Wright games.",
      bettingAngle:
        "Home teams win 59% of Wright's games — the clearest home-team lean among active officials. Indiana at home is a solid lean. Wright's games run close to average on pace and total points. The home spread should have slight value given Wright's documented tendency.",
      historical:
        "Wright has officiated 3 Pacers home games this season — Indiana is 3-0 in all three. Milwaukee is 2-3 in Wright games. Giannis averages 8.4 FTA in Wright games — right at his season average, suggesting he earns those calls regardless of the crew.",
    },
    {
      game: "TOR @ PHI",
      crew: ["James Williams", "Courtney Kirkland", "Ben Taylor"],
      leadRef: "James Williams",
      impact:
        "Williams runs a pace-friendly game that should push both these teams into a faster-than-expected contest. Neither Philadelphia nor Toronto has been particularly engaged lately, and a fast game helps mask individual defensive breakdowns. Scottie Barnes thrives in uptempo settings — his transition scoring numbers jump significantly in Williams games. The pace advantage slightly favors Toronto's athletic roster over Philadelphia's more methodical half-court sets.",
      bettingAngle:
        "Williams' games go over 57% of the time on pace-adjusted scoring. The over has merit given both teams' recent lack of defensive urgency. Road teams win 48% in Williams games — slight lean toward Philadelphia despite their season-long struggles. The total is the stronger betting angle here.",
      historical:
        "Williams officiated 2 Sixers games this season — Philadelphia is 1-1. Toronto is 2-3 in Williams games. Barnes averages 22.4 PPG in Williams-officiated games vs. 18.9 overall — the largest positive referee split of any player on either roster tonight.",
    },
  ],
  refProfiles: [
    {
      name: "Scott Foster",
      number: 48,
      experience: "30 years",
      gamesThisSeason: 55,
      tendencies: {
        foulsPerGame: 43.2,
        homeWinPct: 55,
        avgPace: -0.5,
        technicalFrequency: "High",
        overtimeGames: 8,
      },
      bestFor: "Physical teams, veteran teams, home favorites",
      worstFor: "Young teams relying on foul-drawing, fast-paced offenses",
      notableGame:
        "Officiated 8 overtime games this season — most of any referee. Known for allowing late-game physicality that produces close, dramatic finishes.",
    },
    {
      name: "Tony Brothers",
      number: 25,
      experience: "30 years",
      gamesThisSeason: 53,
      tendencies: {
        foulsPerGame: 44.8,
        homeWinPct: 58,
        avgPace: -0.8,
        technicalFrequency: "High",
        overtimeGames: 5,
      },
      bestFor: "Home teams, free-throw shooting teams",
      worstFor: "Fast-paced teams, teams that rely on transition scoring",
      notableGame:
        "Called 58 fouls in a LAL-BOS game in February — highest single-game total of the season. Notorious for technical fouls on bench conduct.",
    },
    {
      name: "Ed Malloy",
      number: 14,
      experience: "23 years",
      gamesThisSeason: 50,
      tendencies: {
        foulsPerGame: 39.6,
        homeWinPct: 48,
        avgPace: 1.2,
        technicalFrequency: "Low",
        overtimeGames: 2,
      },
      bestFor: "Fast-paced teams, offensive-minded teams, road teams",
      worstFor: "Teams that rely heavily on getting to the free-throw line",
      notableGame:
        "Officiated the lowest-foul game of the season — 28 total fouls in a SAS-OKC game in January. Both coaches praised the flow of the game afterward.",
    },
    {
      name: "Zach Zarba",
      number: 15,
      experience: "20 years",
      gamesThisSeason: 52,
      tendencies: {
        foulsPerGame: 39.2,
        homeWinPct: 46,
        avgPace: 0.8,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Physical defensive teams, road teams",
      worstFor: "Teams that rely on drawing touch fouls and getting to the line",
      notableGame:
        "Road teams have won 54% of his games this season — the strongest road-team lean of any active official. LeBron's FTA drops by 1.7 in his games.",
    },
    {
      name: "Sean Wright",
      number: 4,
      experience: "18 years",
      gamesThisSeason: 49,
      tendencies: {
        foulsPerGame: 42.4,
        homeWinPct: 59,
        avgPace: -0.3,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Home teams",
      worstFor: "Road teams seeking a neutral whistle",
      notableGame:
        "Home teams have won 59% of his games — the strongest home lean of any referee this season. Indiana is 3-0 in his home games this year.",
    },
    {
      name: "James Williams",
      number: 60,
      experience: "12 years",
      gamesThisSeason: 47,
      tendencies: {
        foulsPerGame: 41.4,
        homeWinPct: 52,
        avgPace: 2.1,
        technicalFrequency: "Average",
        overtimeGames: 3,
      },
      bestFor: "Fast-paced teams, transition-heavy offenses, athletic wings",
      worstFor: "Slow, methodical half-court teams",
      notableGame:
        "Scottie Barnes averages 22.4 PPG in Williams games — his highest split against any individual referee this season.",
    },
    {
      name: "Kane Fitzgerald",
      number: 5,
      experience: "16 years",
      gamesThisSeason: 51,
      tendencies: {
        foulsPerGame: 42.0,
        homeWinPct: 54,
        avgPace: 0.1,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Consistent, balanced teams — no extreme tendencies to exploit",
      worstFor: "No strong tendencies in either direction",
      notableGame:
        "Officiated 3 of the 5 closest games of the season decided by 2 or fewer points. Known for letting physical play go late in close games.",
    },
    {
      name: "Marc Davis",
      number: 36,
      experience: "25 years",
      gamesThisSeason: 51,
      tendencies: {
        foulsPerGame: 43.6,
        homeWinPct: 53,
        avgPace: -0.2,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Teams with veteran players who know how to work officials",
      worstFor: "Young teams that react emotionally to calls",
      notableGame:
        "Called back-to-back technicals on Giannis Antetokounmpo in a January game — the quickest T-double on a star player all season.",
    },
  ],
  weeklyTrend:
    "This week's referee assignments skew toward veterans for the ESPN and TNT showcase games. Scott Foster and Tony Brothers share the DET-BOS crew on ESPN — expect a physical, potentially foul-heavy game with elevated overtime probability. Ed Malloy draws the marquee TNT opener (SAS-MIN), which historically trends under and benefits road teams. The most actionable angle tonight is Sean Wright at MIL-IND: Indiana home teams are 3-0 in his games this season and his 59% home-win rate is the strongest lean in the league.",
};
