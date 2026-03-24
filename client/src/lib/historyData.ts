// Historical Context Engine — Past Meets Present
// Last updated: March 23, 2026
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
  streakWatch: { player: string; team: string; streak: string; record: string; gamesAway: number }[];
  narrative: string;
}

// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════

export const historyData: HistoryData = {
  generatedDate: "March 23, 2026",
  comparisons: [
    {
      currentEvent: "SGA's 130 consecutive 20-point games",
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      historicalParallel: {
        player: "Wilt Chamberlain",
        season: "1961-62",
        stat: "126 consecutive 20-point games (previously longest streak)",
        context: "Wilt averaged 50.4 PPG that season and his streak was considered untouchable for six decades. He played in an era with a faster pace and fewer teams."
      },
      comparison: "SGA has surpassed Wilt's record by 4 games and counting. While Wilt's scoring volume was higher (50.4 PPG vs SGA's 32.1 PPG), SGA is doing this in an era with more defensive sophistication, load management, and a 30-team league. SGA's consistency is arguably more impressive given modern rest protocols.",
      verdict: "On pace to surpass"
    },
    {
      currentEvent: "Hawks' 11-game winning streak",
      player: "Jalen Johnson",
      team: "ATL",
      historicalParallel: {
        player: "Dominique Wilkins",
        season: "1986-87",
        stat: "14-game winning streak — longest in Hawks franchise history",
        context: "The 1986-87 Hawks went 57-25 behind Dominique's 29.0 PPG and made the Eastern Conference Semifinals. That team was considered the best Hawks squad in the modern era."
      },
      comparison: "The 2025-26 Hawks are 3 wins away from matching the franchise record. Jalen Johnson's versatility (28/9/7 last night, 14 triple-doubles this season) gives Atlanta a different engine than Dominique's pure scoring. This Hawks team relies on depth and ball movement rather than one superstar.",
      verdict: "Matching stride"
    },
    {
      currentEvent: "Luka averaging 34.2 PPG over last 6 games for the Lakers",
      player: "Luka Dončić",
      team: "LAL",
      historicalParallel: {
        player: "Kobe Bryant",
        season: "2005-06",
        stat: "35.4 PPG — highest scoring season by a Laker since Shaq left",
        context: "Kobe carried a rebuilding Lakers team with Smush Parker and Kwame Brown. He scored 81 points against Toronto in January 2006 and led the league in scoring."
      },
      comparison: "Luka's current stretch mirrors Kobe's 2006 dominance, but with a key difference: Luka has Anthony Davis. Kobe was doing it alone. Luka's 38-point game with the clutch step-back three evokes Kobe's killer instinct, and the Lakers' 7-game winning streak suggests this version of LA is far more dangerous than Kobe's 2006 squad.",
      verdict: "Matching stride"
    },
    {
      currentEvent: "Spurs' 51-18 record through 69 games",
      player: "Victor Wembanyama",
      team: "SAS",
      historicalParallel: {
        player: "Tim Duncan",
        season: "2002-03",
        stat: "52-17 through 69 games — Duncan's championship season",
        context: "Duncan won the MVP and Finals MVP that year, leading the Spurs to the franchise's second title. He averaged 23.3 PPG, 12.9 RPG, and 3.9 APG."
      },
      comparison: "The 2025-26 Spurs are one game behind the pace of Duncan's 2003 championship team. Wembanyama's two-way impact is comparable — the Spurs are 18-1 when he plays 30+ minutes. If San Antonio maintains this pace, they'll finish with 60+ wins for just the third time in franchise history.",
      verdict: "Matching stride"
    },
    {
      currentEvent: "Brandon Ingram's three straight 28-point games for Toronto",
      player: "Brandon Ingram",
      team: "TOR",
      historicalParallel: {
        player: "Vince Carter",
        season: "2000-01",
        stat: "Four consecutive 28+ point games in February 2001",
        context: "Carter was the face of the Raptors and led Toronto to their first playoff series win that season. He averaged 27.6 PPG and made the Raptors nationally relevant."
      },
      comparison: "Ingram's immediate impact in Toronto echoes Carter's transformative effect on the franchise. Carter put Toronto on the map; Ingram is making the Raptors a legitimate playoff threat. Ingram's 52% three-point shooting over this stretch is unsustainable, but his shot creation and efficiency suggest a long-term fit.",
      verdict: "Matching stride"
    },
    {
      currentEvent: "Pistons' 49-19 record — best in the East",
      player: "Cade Cunningham",
      team: "DET",
      historicalParallel: {
        player: "Isiah Thomas",
        season: "1988-89",
        stat: "50-18 through 68 games — the Bad Boys' championship season",
        context: "Thomas averaged 18.2 PPG and 8.3 APG as the Pistons won their first NBA title. Detroit was built on defense, toughness, and depth."
      },
      comparison: "The 2025-26 Pistons are tracking remarkably close to the 1989 championship pace. Cunningham (24.9/10.1/5.6) is a more dominant scorer than Isiah was, while the team's identity is similarly built on balance and cohesion. The back spasms are concerning — Detroit's title hopes rest entirely on Cade's health.",
      verdict: "On pace to surpass"
    }
  ],
  milestoneWatch: [
    {
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      milestone: "150 consecutive 20-point games",
      current: "130 games",
      needed: "20 more games",
      projectedDate: "Late April 2026 (if streak continues through playoffs)",
      significance: "Would extend his own all-time record by 24 games beyond Wilt's previous mark. At his current pace, SGA would reach 150 before the end of the regular season if the streak holds."
    },
    {
      player: "Nikola Jokić",
      team: "DEN",
      milestone: "100 career triple-doubles",
      current: "94 career triple-doubles",
      needed: "6 more",
      projectedDate: "Mid-April 2026",
      significance: "Would become just the fifth player in NBA history to reach 100 triple-doubles, joining Oscar Robertson, Russell Westbrook, Magic Johnson, and Jason Kidd."
    },
    {
      player: "Luka Dončić",
      team: "LAL",
      milestone: "10,000 career assists",
      current: "9,847 career assists",
      needed: "153 more",
      projectedDate: "Early April 2026 (at current 8.1 APG pace)",
      significance: "Would become the youngest player to reach 10,000 career assists. Only 12 players in NBA history have reached this milestone."
    },
    {
      player: "Victor Wembanyama",
      team: "SAS",
      milestone: "200 blocks in a single season",
      current: "178 blocks (69 games)",
      needed: "22 more in 13 games",
      projectedDate: "On pace to reach ~201 blocks by season end",
      significance: "Would be the first player since Marcus Camby in 2006-07 to block 200+ shots in a season. Wemby is averaging 2.58 BPG."
    },
    {
      player: "Jalen Johnson",
      team: "ATL",
      milestone: "15 triple-doubles in a single season",
      current: "14 triple-doubles",
      needed: "1 more",
      projectedDate: "Could happen any game",
      significance: "Would be the most triple-doubles by a Hawks player in a single season. Only 7 players in NBA history have recorded 15+ triple-doubles in one season."
    },
    {
      player: "Cade Cunningham",
      team: "DET",
      milestone: "2,000 points in a single season",
      current: "1,692 points (68 games)",
      needed: "308 more in 14 games",
      projectedDate: "Needs 22 PPG over final 14 games",
      significance: "Would be the first Piston to score 2,000 points in a season since Jerry Stackhouse in 2000-01. Cunningham's 24.9 PPG pace puts him right on the edge."
    }
  ],
  thisWeekInHistory: [
    {
      year: 1996,
      event: "The Chicago Bulls clinched their 70th win of the season, on their way to the historic 72-10 record. Michael Jordan scored 35 points against the Raptors.",
      players: ["Michael Jordan", "Scottie Pippen", "Dennis Rodman"]
    },
    {
      year: 2008,
      event: "LeBron James recorded his 10th triple-double of the season as the Cavaliers beat the Wizards 102-96. He was 23 years old at the time.",
      players: ["LeBron James"]
    },
    {
      year: 2017,
      event: "Russell Westbrook recorded his 33rd triple-double of the season, tying the single-season record held by Oscar Robertson since 1961-62.",
      players: ["Russell Westbrook", "Oscar Robertson"]
    },
    {
      year: 1962,
      event: "Wilt Chamberlain scored 52 points against the Knicks — his 45th game of 50+ points that season. He would finish the year averaging 50.4 PPG.",
      players: ["Wilt Chamberlain"]
    },
    {
      year: 2019,
      event: "James Harden scored 61 points against the Spurs — his third 60-point game of the season. No other player has had more than one 60-point game in a single season.",
      players: ["James Harden"]
    }
  ],
  streakWatch: [
    {
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      streak: "130 consecutive 20-point games (active)",
      record: "130 — SGA's own record (surpassed Wilt's 126)",
      gamesAway: 0
    },
    {
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      streak: "11-game team winning streak",
      record: "15 — OKC franchise record (2012-13 season)",
      gamesAway: 4
    },
    {
      player: "Jalen Johnson",
      team: "ATL",
      streak: "11-game team winning streak",
      record: "14 — Hawks franchise record (1986-87 season)",
      gamesAway: 3
    },
    {
      player: "Luka Dončić",
      team: "LAL",
      streak: "7-game team winning streak",
      record: "10 — Lakers' longest this season",
      gamesAway: 3
    },
    {
      player: "Brandon Ingram",
      team: "TOR",
      streak: "3 consecutive 28+ point games",
      record: "7 — Vince Carter (2000-01) for Raptors",
      gamesAway: 4
    },
    {
      player: "Memphis Grizzlies",
      team: "MEM",
      streak: "9-game losing streak",
      record: "13 — Grizzlies franchise record (2008-09 season)",
      gamesAway: 4
    }
  ],
  narrative: "The 2025-26 NBA season is producing a remarkable convergence of historical parallels. SGA's 130-game scoring streak has already surpassed Wilt Chamberlain's six-decade-old record. The Hawks are chasing their own franchise history with an 11-game winning streak. Luka is channeling Kobe's 2006 Lakers dominance. And the Pistons are tracking the pace of the 1989 Bad Boys championship team. We're witnessing history in real time across multiple franchises — and the playoff race hasn't even begun."
};
