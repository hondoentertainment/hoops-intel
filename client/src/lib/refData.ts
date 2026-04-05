// Referee Tendency Reports — Know the Whistle
// Last updated: April 5, 2026
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
  generatedDate: "April 5, 2026",
  tonightAssignments: [
    {
      game: "DET @ NYK",
      crew: ["Tony Brothers", "Marc Davis", "Ben Taylor"],
      leadRef: "Tony Brothers",
      impact:
        "Brothers draws the ABC headliner — Detroit at the Garden at 7:30 PM. His 58% home-win rate and high-foul style are tailor-made for a Knicks home game. Brunson — fresh off breaking the franchise scoring record — thrives in foul-heavy environments where his mid-range craft forces defenders into difficult closeouts. Detroit's young guards will struggle with Brothers' stop-and-start tempo, which neutralizes transition offense. Expect a physical, whistle-heavy game that plays into New York's half-court identity and MSG's emotional energy.",
      bettingAngle:
        "Brothers' games average 44.8 fouls — well above league average. Home teams win 58% of his games, giving New York a meaningful whistle edge. Brunson averages 8.9 FTA in Brothers games vs. 7.4 overall. Detroit's Cade Cunningham averages 5.8 FTA in Brothers games vs. 7.2 overall — a significant suppression. The home spread and the over both have merit given Brothers' documented tendencies.",
      historical:
        "Brothers has officiated 4 Knicks home games this season — New York is 3-1. Detroit is 1-3 in Brothers games. Brunson has scored 28+ points in all three Brothers games this year. The Pistons' young roster tends to pick up early fouls in Brothers games, which limits their rotation flexibility.",
    },
    {
      game: "OKC @ DEN",
      crew: ["Zach Zarba", "Bill Kennedy", "Josh Tiven"],
      leadRef: "Zach Zarba",
      impact:
        "Zarba draws the TNT marquee — OKC at Denver at 9:30 PM. His whistle-swallowing style creates a physical, free-flowing game that historically favors Jokic and the Nuggets. Road teams win 54% of Zarba's games, but OKC is the road team tonight — creating a rare split where Zarba's road lean actually favors the Thunder. SGA's free-throw attempts drop in Zarba games, which limits one of his key scoring avenues. Jokic thrives when referees let the game flow, and his pursuit of career triple-double number 100 benefits from fewer stoppages and more transition opportunities. This is a fascinating officiating dynamic.",
      bettingAngle:
        "Zarba's under rate is 58% this season — the total may be set too high for this matchup. SGA averages 5.8 FTA in Zarba games vs. 8.1 overall. Jokic averages a triple-double in Zarba games — 26.3 PPG / 13.1 RPG / 10.8 APG. Denver is 4-0 in Zarba games this year. OKC is 2-1. The under and Denver at home are the strongest angles, but Zarba's road lean adds a wrinkle that makes the spread less clear-cut than usual.",
      historical:
        "Zarba has officiated 4 Nuggets games this season — Denver is 4-0. OKC is 2-1 in Zarba games. Jokic's triple-double rate spikes to 75% in Zarba-officiated games. SGA has shot under 45% from the field in 2 of 3 Zarba games — the reduced free-throw volume forces him to generate more difficult shots.",
    },
    {
      game: "BOS @ ATL",
      crew: ["Scott Foster", "Ed Malloy", "Phenizee Ransom"],
      leadRef: "Scott Foster",
      impact:
        "Foster draws the ESPN assignment — Boston at Atlanta at 8:00 PM. His physical tolerance and 55% home-win rate give the Hawks a subtle officiating edge, but Boston's 7-game winning streak and defensive identity are well-suited to Foster's grind-it-out style. Tatum thrives in physical games where he can use his size advantage on switches. Trae Young's foul-drawing ability is somewhat diminished in Foster games, where the whistle stays quieter on perimeter contact. Expect a deliberate pace with fewer stoppages — which favors Boston's half-court defense over Atlanta's preferred uptempo attack.",
      bettingAngle:
        "Foster games average 43.2 total fouls — slightly below league average. Home teams win 55% of Foster games, giving Atlanta a modest edge. Trae Young averages 6.4 FTA in Foster games vs. 8.3 overall — a meaningful reduction. Tatum averages 7.8 FTA in Foster games vs. 7.1 overall — he actually benefits from Foster's physical style. The under on total fouls has hit in 59% of Foster games. Boston's defensive identity makes the under an attractive play.",
      historical:
        "Foster has officiated 3 Celtics games this season — Boston is 2-1. Atlanta is 2-2 in Foster games. Young has scored under 25 points in 2 of 3 Foster games — his floor game suffers when the foul-drawing avenue is limited. Foster has called 8 OT games this season, the most of any referee — overtime risk is always elevated with this crew.",
    },
    {
      game: "PHI @ ORL",
      crew: ["Sean Wright", "David Guthrie", "Courtney Kirkland"],
      leadRef: "Sean Wright",
      impact:
        "Wright's 59% home-win rate — the strongest home lean of any referee this season — gives Orlando a meaningful officiating edge at home. Joel Embiid's foul-drawing game is somewhat neutralized in Wright games, where the whistle tends to stay quiet on post-up contact. Paolo Banchero and the Magic benefit from Wright's home-friendly style, and Orlando's physical defensive identity should be rewarded with fewer marginal calls going Philadelphia's way. Tyrese Maxey's driving game also suffers when referees swallow the whistle on perimeter contact.",
      bettingAngle:
        "Home teams win 59% of Wright's games — the clearest home lean among active officials. Orlando at home is the strongest play on tonight's board from a referee-tendency standpoint. Embiid's FTA drops from 10.2 to 7.6 in Wright games — a massive reduction for a player whose offense depends on getting to the line. The spread favoring Orlando is the most actionable angle tonight.",
      historical:
        "Wright has officiated 3 Magic home games this season — Orlando is 2-1. Philadelphia is 1-3 in Wright games this year. Embiid averages 24.8 PPG in Wright games vs. 27.6 overall — the reduced free-throw volume suppresses his total scoring output. Banchero averages 23.4 PPG in Wright games vs. 21.8 overall.",
    },
    {
      game: "LAC @ PHX",
      crew: ["James Williams", "Kane Fitzgerald", "Natalie Sago"],
      leadRef: "James Williams",
      impact:
        "Williams runs a pace-friendly game that should push both the Clippers and Suns into a faster-than-expected contest. Kevin Durant thrives in uptempo Williams games — his transition scoring and mid-range efficiency both increase when the game flows. Devin Booker's shot creation also benefits from a fast pace with fewer stoppages. On the Clippers' side, James Harden's deliberate style is somewhat undermined by Williams' preference for pace. Expect a high-scoring, entertaining nightcap at 10:00 PM.",
      bettingAngle:
        "Williams' games go over 57% of the time on pace-adjusted scoring. Phoenix plays fast by default, and Williams amplifies that tendency. The over is the strongest angle on this game. Home teams win 52% of Williams games — a slight lean toward Phoenix but not strong enough to be highly actionable on the spread alone. Durant averages 29.4 PPG in Williams games vs. 27.1 overall.",
      historical:
        "Williams officiated 3 Suns games this season — Phoenix is 2-1. The Clippers are 1-2 in Williams games. Durant's scoring efficiency jumps to 51% from the field in Williams-officiated games vs. 48% overall. Booker averages 27.8 PPG in Williams games vs. 25.9 overall — both Phoenix stars benefit from the uptempo style.",
    },
  ],
  refProfiles: [
    {
      name: "Tony Brothers",
      number: 25,
      experience: "30 years",
      gamesThisSeason: 55,
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
        "Called 58 fouls in a LAL-BOS game in February — highest single-game total of the season. Tonight he leads the crew for DET-NYK on ABC, where his high-foul style should put Detroit's young guards in early foul trouble at MSG while Brunson extends his franchise scoring record.",
    },
    {
      name: "Zach Zarba",
      number: 15,
      experience: "20 years",
      gamesThisSeason: 54,
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
        "Road teams have won 54% of his games this season — the strongest road-team lean of any active official. Leads the OKC-DEN crew tonight on TNT, where Jokic is one triple-double from 100 career and the free-flowing style could be the perfect stage for history.",
    },
    {
      name: "Scott Foster",
      number: 48,
      experience: "30 years",
      gamesThisSeason: 57,
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
        "Officiated 8 overtime games this season — most of any referee. Draws the BOS-ATL ESPN assignment tonight, where his physical tolerance could suppress Trae Young's foul-drawing game and favor Boston's grinding defensive identity during their 7-game winning streak.",
    },
    {
      name: "Sean Wright",
      number: 4,
      experience: "18 years",
      gamesThisSeason: 51,
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
        "Home teams have won 59% of his games — the strongest home lean of any referee this season. Leads the PHI-ORL crew tonight, giving Orlando a documented officiating edge that could suppress Embiid's foul-drawing game and Maxey's driving lanes.",
    },
    {
      name: "James Williams",
      number: 60,
      experience: "12 years",
      gamesThisSeason: 49,
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
        "Kevin Durant averages 29.4 PPG in Williams games — a significant bump over his 27.1 season average. Leads LAC-PHX tonight, where the pace-friendly style should produce a high-scoring nightcap featuring Durant and Booker in a showcase environment.",
    },
    {
      name: "Ed Malloy",
      number: 14,
      experience: "23 years",
      gamesThisSeason: 52,
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
        "Officiated the lowest-foul game of the season — 28 total fouls in a SAS-OKC game in January. Joins Foster's crew tonight for BOS-ATL on ESPN, where his low-foul style reinforces Boston's defensive advantage.",
    },
    {
      name: "Marc Davis",
      number: 36,
      experience: "25 years",
      gamesThisSeason: 53,
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
        "Called back-to-back technicals on Giannis Antetokounmpo in a January game — the quickest T-double on a star player all season. Joins Brothers on the DET-NYK crew tonight at MSG on ABC.",
    },
    {
      name: "Kane Fitzgerald",
      number: 5,
      experience: "16 years",
      gamesThisSeason: 53,
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
        "Officiated 3 of the 5 closest games of the season decided by 2 or fewer points. Joins Williams on the LAC-PHX crew tonight for the 10:00 PM nightcap.",
    },
  ],
  weeklyTrend:
    "Tonight's five-game slate features three veteran lead officials on the national TV games, and each assignment carries actionable tendencies. Tony Brothers gets the ABC headliner — DET at NYK at 7:30 PM — where his 58% home-win rate and high-foul style are a gift for the Knicks and Brunson's record-extending campaign. Zach Zarba draws OKC-DEN on TNT at 9:30 PM, where his whistle-swallowing style and Denver's 4-0 record in Zarba games this season create a perfect storm for Jokic's 100th career triple-double pursuit. Scott Foster leads the ESPN crew for BOS-ATL at 8:00 PM, where his physical tolerance suppresses Trae Young's foul-drawing game and benefits Boston's grinding 7-game winning streak. The most actionable angle tonight: Sean Wright at PHI-ORL, where his league-leading 59% home-win rate and Embiid's dramatically reduced FTA in Wright games make Orlando the clear officiating beneficiary. The nightcap — James Williams at LAC-PHX at 10:00 PM — projects as the highest-scoring game on the board, with Durant and Booker both posting career-best splits in Williams-officiated games.",
};
