// Historical Context Engine — Past Meets Present
// Last updated: April 5, 2026
// Generated from current season narratives

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

export interface HistoricalComparison {
  currentEvent: string;
  player: string;
  team: string;
  historicalParallel: {
    player: string;
    season: string;
    stat: string;
    context: string;
  };
  comparison: string;
  verdict: "On pace to surpass" | "Falling short" | "Matching stride";
}

export interface MilestoneWatch {
  player: string;
  team: string;
  milestone: string;
  current: string;
  needed: string;
  projectedDate: string;
  significance: string;
}

export interface HistoryData {
  generatedDate: string;
  comparisons: HistoricalComparison[];
  milestoneWatch: MilestoneWatch[];
  thisWeekInHistory: { year: number; event: string; players: string[] }[];
  streakWatch: {
    player: string;
    team: string;
    streak: string;
    record: string;
    gamesAway: number;
  }[];
  narrative: string;
}

// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════

export const historyData: HistoryData = {
  generatedDate: "April 4, 2026",
  comparisons: [
    {
      currentEvent:
        "Wembanyama's Spurs extend winning streak to 11 games — tonight they host SGA and OKC in a clash of the league's two most dominant forces",
      player: "Victor Wembanyama",
      team: "SAS",
      historicalParallel: {
        player: "Tim Duncan",
        season: "2002-03",
        stat:
          "23.3 PPG / 12.9 RPG / 3.9 APG / 2.9 BPG — anchored a Spurs team that finished 60-22 and won the championship",
        context:
          "Duncan's 2002-03 Spurs rattled off a 13-2 close to the regular season, building unstoppable momentum into a championship run. That late-season surge announced to the league that San Antonio was the team to beat, with Duncan controlling both ends of the floor at an all-time level.",
      },
      comparison:
        "Wembanyama's 11-game streak now surpasses Duncan's longest regular-season run in 2002-03, and the parallels keep deepening. Both players anchor elite defenses while generating efficient offense from the post and perimeter. The critical difference remains Wembanyama's three-point shooting and perimeter switchability — dimensions Duncan never possessed. Tonight's showdown with OKC is the kind of late-season litmus test that defines legacies. Duncan's Spurs proved themselves in similar April crucibles; Wembanyama gets his chance tonight on ESPN.",
      verdict: "On pace to surpass",
    },
    {
      currentEvent:
        "Jayson Tatum and the Celtics closing in on the 1-seed — Boston has won 6 straight and Tatum is averaging 29 PPG in April",
      player: "Jayson Tatum",
      team: "BOS",
      historicalParallel: {
        player: "Larry Bird",
        season: "1985-86",
        stat:
          "25.8 PPG / 9.8 RPG / 6.8 APG — led the Celtics to a 67-15 record and the championship, with a dominant April close",
        context:
          "Bird's 1985-86 Celtics are widely regarded as the greatest team in franchise history. Bird locked up the 1-seed in early April and used the final weeks to sharpen his team's execution, entering the playoffs as an overwhelming favorite. That team lost only one game in the entire Eastern Conference playoffs.",
      },
      comparison:
        "Tatum's April surge has the same feel as Bird's late-season dominance in 1985-86 — a superstar elevating his game when the 1-seed is within reach. Bird's Celtics were never in doubt for the top spot, while Tatum's group is in a dogfight with Cleveland. That competitive pressure may actually serve Boston better come playoff time. Bird thrived on the biggest stages, and Tatum is proving he can do the same. The 6-game winning streak has Boston playing its best basketball of the season at exactly the right time.",
      verdict: "Matching stride",
    },
    {
      currentEvent:
        "Luka Doncic on a historic scoring tear — 35+ PPG over his last 7 games as Dallas fights for playoff positioning",
      player: "Luka Doncic",
      team: "DAL",
      historicalParallel: {
        player: "Michael Jordan",
        season: "1986-87",
        stat:
          "37.1 PPG — Jordan's scoring average that season remains the highest since Wilt Chamberlain, with multiple 40+ point games in April alone",
        context:
          "Jordan's 1986-87 scoring explosion was a young superstar refusing to let his team fade. He averaged over 40 PPG in April, dragging a mediocre Bulls roster into the playoffs through sheer individual brilliance and an unquenchable competitive fire.",
      },
      comparison:
        "Luka's 35+ PPG stretch over the last seven games carries the same desperate brilliance as Jordan's April 1987 assault on the record books. Both players took over because they had to — their supporting casts demanded it. Jordan's Bulls were a playoff-or-bust team and he responded with the most prolific scoring month of his career. Luka is in a similar position: Dallas needs wins, and he is willing them into existence with an offensive workload that borders on unsustainable. The difference is Jordan's athleticism allowed him to maintain that pace; Luka's game relies on craft, which may prove more durable in the short term.",
      verdict: "Matching stride",
    },
    {
      currentEvent:
        "Cleveland Cavaliers battling Boston for the 1-seed — tonight's CLE @ NYK game is a statement opportunity",
      player: "Donovan Mitchell",
      team: "CLE",
      historicalParallel: {
        player: "LeBron James",
        season: "2008-09",
        stat:
          "28.4 PPG / 7.6 RPG / 7.2 APG — led Cleveland to a league-best 66-16 record and the MVP award",
        context:
          "LeBron's 2008-09 Cavaliers were a juggernaut built around one transcendent player and a supporting cast that maximized his brilliance. Cleveland clinched the 1-seed in early April and entered the playoffs as the overwhelming favorite, only to fall to Orlando in the Conference Finals.",
      },
      comparison:
        "Mitchell's Cavaliers chasing the 1-seed invites the inevitable LeBron comparison. The difference is stark: Mitchell leads a genuinely deep, balanced roster rather than carrying the franchise solo. Cleveland's path to the top seed is built on Mobley's defense, Garland's playmaking, and Allen's rim protection — a collective effort LeBron's early Cleveland teams never had. Tonight at MSG is the kind of road test that separates pretenders from contenders, and Mitchell has a chance to make a statement that even LeBron's early Cavs rarely managed: winning a meaningful April game in the Garden.",
      verdict: "Matching stride",
    },
    {
      currentEvent:
        "Jokic and the Nuggets take their 8-game winning streak to Los Angeles for a TNT showdown with the Lakers",
      player: "Nikola Jokic",
      team: "DEN",
      historicalParallel: {
        player: "Kareem Abdul-Jabbar",
        season: "1971-72",
        stat:
          "34.8 PPG / 16.6 RPG / 4.6 APG — dominated the league as a center who could score from anywhere and control every facet of the game",
        context:
          "Kareem's early-1970s Bucks were built around the most unstoppable offensive weapon the game had ever seen. His skyhook was indefensible, and his teams rode long winning streaks fueled by his consistent dominance in the post. The Bucks won 63 games that season and Kareem was the undisputed best player alive.",
      },
      comparison:
        "Jokic visiting the Lakers on TNT with an 8-game winning streak draws a direct line to Kareem's dominance in the early 1970s — another center who could do everything and whose teams won in bunches because of it. Kareem scored with the skyhook; Jokic scores with passing, vision, and an impossibly soft touch. Both players made their teammates dramatically better. The Denver-LA rivalry adds historical spice: Kareem eventually became a Laker. Jokic has spent his entire career making sure Denver never needs to look to Los Angeles for validation.",
      verdict: "On pace to surpass",
    },
  ],
  milestoneWatch: [
    {
      player: "Victor Wembanyama",
      team: "SAS",
      milestone: "Longest Spurs winning streak since the 2013-14 championship season",
      current: "11-game winning streak entering tonight's game vs. OKC",
      needed: "6 more wins to tie the franchise record of 17 (set in 2013-14)",
      projectedDate: "If the streak continues, the franchise record could fall by mid-April",
      significance:
        "Wembanyama is already carrying the longest Spurs winning streak since the Pop-Duncan dynasty era. Tying or breaking the franchise record would officially announce these Spurs as legitimate contenders, not a team still building toward relevance. The 2013-14 Spurs used their late-season streak as a springboard to one of the most dominant championship runs in NBA history.",
    },
    {
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      milestone: "60 wins in a single season",
      current: "59-18 record with 5 games remaining",
      needed: "1 more win in final 5 games — tonight at San Antonio is the first opportunity",
      projectedDate: "Could clinch tonight in San Antonio",
      significance:
        "A 60-win season would be the first in OKC franchise history and only the second in the combined Seattle/OKC timeline (the 1995-96 SuperSonics won 64). Clinching it on the road against a surging Spurs team would only add to the accomplishment. For SGA, win number 60 effectively locks up the MVP award.",
    },
    {
      player: "Nikola Jokic",
      team: "DEN",
      milestone: "100 career triple-doubles",
      current: "28 triple-doubles this season (98 career)",
      needed: "2 more to reach 100 career — tonight at LA Lakers on TNT is the stage",
      projectedDate: "At his pace of roughly one every 3 games, likely within the next week",
      significance:
        "One hundred career triple-doubles would make Jokic only the fifth player in NBA history to reach that number, joining Oscar Robertson, Russell Westbrook, Magic Johnson, and Jason Kidd. Doing it as a center — a position historically associated with rebounding and shot-blocking, not playmaking — makes it arguably the most impressive version of the milestone.",
    },
    {
      player: "Jalen Brunson",
      team: "NYK",
      milestone: "Franchise single-season scoring record",
      current: "1,908 points through 72 games (26.5 PPG)",
      needed: "13 more points to pass Carmelo Anthony's 2012-13 mark of 1,920 points",
      projectedDate: "Should surpass Carmelo tonight vs. Cleveland at MSG",
      significance:
        "Brunson breaking Carmelo's single-season scoring record at Madison Square Garden — against Cleveland in a game with 1-seed implications — would be a storybook moment. Melo's scoring legacy at MSG is sacred ground. Brunson claiming it while leading a 50+ win team adds a dimension Carmelo's Knicks teams never achieved.",
    },
  ],
  thisWeekInHistory: [
    {
      year: 1984,
      event:
        "Larry Bird's Boston Celtics clinched the best record in the Eastern Conference in early April 1984, finishing 62-20. Bird was in the middle of his first MVP season, averaging 24.2 PPG / 10.1 RPG / 6.6 APG, and the Celtics were a juggernaut built on passing, toughness, and Bird's supernatural court vision. That team went on to win the championship over the Lakers in seven games — a fitting parallel as Tatum's Celtics push for the 1-seed tonight.",
      players: ["Larry Bird", "Robert Parish", "Kevin McHale"],
    },
    {
      year: 2004,
      event:
        "On April 4, 2004, Shaquille O'Neal and the Lakers beat the Sacramento Kings 99-90 in a game that all but clinched the Pacific Division title. Shaq had 28 points and 11 rebounds in a dominant performance that previewed LA's eventual run to the Finals. The Lakers-Kings rivalry was at its peak, and April showdowns between the two teams carried playoff-level intensity — much like tonight's DEN-LAL matchup on TNT.",
      players: ["Shaquille O'Neal", "Kobe Bryant"],
    },
    {
      year: 2014,
      event:
        "The 2013-14 Spurs were in the middle of a 19-game winning streak in late March and early April — the longest in franchise history. That run was the foundation for their legendary championship campaign, in which they dismantled the Heat in five games with the most beautiful basketball the Finals had ever seen. Wembanyama's Spurs are chasing that same franchise record tonight.",
      players: ["Tim Duncan", "Tony Parker", "Manu Ginobili"],
    },
  ],
  streakWatch: [
    {
      player: "Victor Wembanyama",
      team: "SAS",
      streak: "11-game team winning streak (active)",
      record: "17 — San Antonio Spurs franchise record (2013-14 season)",
      gamesAway: 6,
    },
    {
      player: "Nikola Jokic",
      team: "DEN",
      streak: "8-game team winning streak (active)",
      record: "15 — Denver franchise record (2012-13 season)",
      gamesAway: 7,
    },
    {
      player: "Jayson Tatum",
      team: "BOS",
      streak: "6-game team winning streak (active)",
      record: "19 — Boston Celtics franchise record (2008-09 season)",
      gamesAway: 13,
    },
    {
      player: "Luka Doncic",
      team: "DAL",
      streak: "7-game 35+ PPG scoring streak (active)",
      record: "9 — James Harden (2018-19 season, 36+ PPG)",
      gamesAway: 2,
    },
  ],
  narrative:
    "April 4, 2026 — Edition 92 — delivers one of the most loaded Saturday slates of the entire season. The headline is OKC at San Antonio on ESPN: SGA chasing win number 60 against Wembanyama's Spurs and their 11-game winning streak. Something has to give, and the result will reshape the MVP conversation and the Western Conference playoff picture in a single evening. On TNT, Jokic brings his 8-game winning streak and his pursuit of 100 career triple-doubles to Los Angeles, where the Lakers are fighting for their playoff lives. The Eastern Conference gets its own marquee moment with Cleveland at the Garden — the Cavaliers and Knicks battling for seeding while Brunson is poised to break Carmelo's franchise scoring record on the MSG floor. Five games, five historic narratives, and the regular season running out of time to contain them all.",
};
