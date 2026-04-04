// Watch Priority Ranker — Tonight's games ranked by watchability
// Data sourced from gamePreviews in pulseData.ts
// Last updated: April 3, 2026

export interface WatchableGame {
  rank: number;
  homeTeam: string;
  awayTeam: string;
  time: string;
  tv: string;
  watchScore: number; // 0-100
  factors: {
    starPower: number; // 0-20
    playoffImplications: number; // 0-20
    rivalry: number; // 0-20
    entertainment: number; // 0-20
    storyline: number; // 0-20
  };
  headline: string;
  mustWatch: boolean;
  storyline: string;
  keyMatchup: string;
}

export interface WatchGuideData {
  date: string;
  games: WatchableGame[];
  topPick: { gameIndex: number; reason: string };
  sleeper: { gameIndex: number; reason: string };
  skipIt: { gameIndex: number; reason: string };
}

export const watchGuideData: WatchGuideData = {
  date: "Friday, April 3, 2026",
  games: [
    {
      rank: 1,
      homeTeam: "BOS",
      awayTeam: "DET",
      time: "7:30 PM ET",
      tv: "ESPN",
      watchScore: 91,
      factors: {
        starPower: 18,
        playoffImplications: 20,
        rivalry: 16,
        entertainment: 18,
        storyline: 19,
      },
      headline: "Pistons Push Into Boston — Can Detroit Steal a Statement Win?",
      mustWatch: true,
      storyline:
        "Detroit has been one of the league's hottest stories in the second half — a young, physical squad that no one wants to face in the playoffs. Boston, still the gold standard in the East, needs to prove it can handle upstart opponents without going through the motions. Tatum and Brown vs. Cade Cunningham and the Pistons' suffocating defense makes this the best pure basketball matchup of the night. With both teams potentially meeting in the first round, this is effectively a playoff preview with real energy.",
      keyMatchup:
        "Jaylen Brown vs. Cade Cunningham — two long, athletic wings who can make each other's lives miserable on both ends of the floor.",
    },
    {
      rank: 2,
      homeTeam: "MIN",
      awayTeam: "SAS",
      time: "8:00 PM ET",
      tv: "TNT",
      watchScore: 87,
      factors: {
        starPower: 19,
        playoffImplications: 18,
        rivalry: 14,
        entertainment: 18,
        storyline: 18,
      },
      headline: "Wembanyama in the Wolves' Den — Victor vs. the West's Best Defense",
      mustWatch: false,
      storyline:
        "Victor Wembanyama faces the stiffest defensive test of his young career in Minnesota. The Timberwolves have built their identity around suffocating coverage with Rudy Gobert anchoring the paint — exactly the kind of scheme designed to neutralize a perimeter-heavy big. Wemby has been historically good on the defensive end himself this season, setting up a chess match between two elite defensive frontcourts. Anthony Edwards will be looking to assert himself as the best player on the floor, a title Wemby won't concede cheaply.",
      keyMatchup:
        "Victor Wembanyama vs. Rudy Gobert — two generational defensive centers sharing the court, neither willing to be the weaker link.",
    },
    {
      rank: 3,
      homeTeam: "LAL",
      awayTeam: "HOU",
      time: "10:00 PM ET",
      tv: "TNT",
      watchScore: 82,
      factors: {
        starPower: 18,
        playoffImplications: 17,
        rivalry: 15,
        entertainment: 17,
        storyline: 15,
      },
      headline: "LeBron's House, Houston's Ambition — A Late-Night West Battle",
      mustWatch: false,
      storyline:
        "The Rockets have been knocking on the door of West relevance all season, and a road win in Los Angeles would announce their arrival in loud fashion. LeBron James, entering the final stretch of what may be his last deep playoff run, won't take Houston lightly — Alperen Sengun has emerged as one of the most interesting young bigs in the game and he matches up in ways that give the Lakers real problems. A late game worth staying up for with West seeding on the line.",
      keyMatchup:
        "Alperen Sengun vs. Anthony Davis — two elite big men with completely different styles who will each demand maximum defensive attention.",
    },
    {
      rank: 4,
      homeTeam: "IND",
      awayTeam: "MIL",
      time: "7:00 PM ET",
      tv: "",
      watchScore: 73,
      factors: {
        starPower: 15,
        playoffImplications: 16,
        rivalry: 14,
        entertainment: 15,
        storyline: 13,
      },
      headline: "Giannis Returns to Pacers Country — Rivalry With Real Seeding Stakes",
      mustWatch: false,
      storyline:
        "Milwaukee and Indiana have developed a genuine dislike for each other over the past two seasons, and this game carries playoff seeding implications for both clubs. Giannis Antetokounmpo against a Pacers defense that struggles with his physical style is always compelling, and Tyrese Haliburton's ability to push pace and find gaps in Milwaukee's coverage turns this into a true stylistic battle. Not appointment television, but the kind of game that quietly sneaks up on you.",
      keyMatchup:
        "Tyrese Haliburton vs. Damian Lillard — two elite point guards with different operating styles who will each try to dictate the tempo of the game.",
    },
    {
      rank: 5,
      homeTeam: "PHI",
      awayTeam: "TOR",
      time: "7:00 PM ET",
      tv: "",
      watchScore: 54,
      factors: {
        starPower: 11,
        playoffImplications: 12,
        rivalry: 10,
        entertainment: 11,
        storyline: 10,
      },
      headline: "Sixers Search for Consistency, Raptors Search for Relevance",
      mustWatch: false,
      storyline:
        "Philadelphia continues its season-long identity crisis while Toronto is in full rebuild mode, leaning on young talent and keeping an eye on lottery positioning. Neither team is playing for much tonight and the emotional stakes are about as low as they get this late in the year. Unless you have a strong fantasy interest in one of these rosters or are closely tracking lottery odds, this one is easy to skip.",
      keyMatchup:
        "Scottie Barnes vs. Paul George — a matchup of long wings where Barnes' athleticism and George's veteran craftiness could produce a few interesting possessions amid an otherwise forgettable contest.",
    },
  ],
  topPick: {
    gameIndex: 0,
    reason:
      "DET @ BOS has everything: star power, playoff implications, genuine tension between two teams that may meet in the first round, and a stylistic matchup that rewards close attention. If Detroit can steal one in Boston, the East bracket picture shifts significantly. Boston can't afford to look past anyone this deep in the season. Tune in from tip-off.",
  },
  sleeper: {
    gameIndex: 3,
    reason:
      "MIL @ IND quietly has real juice. The Pacers play at a pace that creates chaos, Giannis is capable of a 40-point eruption any night, and the playoff seeding implications for both teams are more significant than the national attention suggests. Worth flipping to during commercials and staying for.",
  },
  skipIt: {
    gameIndex: 4,
    reason:
      "TOR @ PHI is a dead rubber involving two franchises operating without urgency. Toronto is content to develop youth and Philadelphia is still trying to figure out what it is. Save your energy for the late TNT game.",
  },
};
