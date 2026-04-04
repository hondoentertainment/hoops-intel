// Historical Context Engine — Past Meets Present
// Last updated: April 4, 2026
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
  generatedDate: "April 3, 2026",
  comparisons: [
    {
      currentEvent:
        "Jokic triple-double machine — 34/14/11 vs OKC as Denver extends winning streak to 8",
      player: "Nikola Jokic",
      team: "DEN",
      historicalParallel: {
        player: "Oscar Robertson",
        season: "1961-62",
        stat:
          "30.8 PPG / 12.5 RPG / 11.4 APG — the only player to average a triple-double for an entire season until Westbrook did it in 2016-17",
        context:
          "Oscar Robertson's 1961-62 season stood alone for over half a century as the pinnacle of all-around basketball excellence. He didn't just flirt with triple-doubles — he lived in them, night after night, with a consistency that seemed almost fictional.",
      },
      comparison:
        "Jokic's 34/14/11 line against OKC is the kind of stat line Robertson used to post routinely in a radically different era. What makes Jokic's version arguably more impressive is the context: he's doing it against elite modern defenses built around switching, analytics, and length. Robertson never faced a defense designed specifically to neutralize triple-double threats. Jokic is also doing it as a center, a position that historically produces rebounders and shot-blockers, not playmakers. His passing vision from the post is without historical precedent at his size.",
      verdict: "Matching stride",
    },
    {
      currentEvent:
        "Denver Nuggets riding an 8-game winning streak into the final stretch of the regular season",
      player: "Nikola Jokic",
      team: "DEN",
      historicalParallel: {
        player: "Russell Westbrook",
        season: "2016-17",
        stat:
          "31.6 PPG / 10.7 RPG / 10.4 APG — averaged a triple-double and willed OKC to the playoffs as a one-man wrecking crew",
        context:
          "Westbrook's 2016-17 MVP campaign was fueled by rage and relentlessness after Durant's departure. He averaged a triple-double and dragged the Thunder to 47 wins through sheer force of will, closing the season with a historic late-season surge.",
      },
      comparison:
        "Denver's 8-game streak has the same feel as OKC's late push in 2016-17, but with a critical difference: Jokic elevates everyone around him rather than carrying the load alone. Westbrook's triple-doubles came with a usage rate north of 41 percent. Jokic's come while making Jamal Murray and Michael Porter Jr. look like All-Stars. The Nuggets' streak is built on offensive beauty, not one man's fury. Both approaches win games, but Jokic's version is more sustainable heading into the playoffs.",
      verdict: "On pace to surpass",
    },
    {
      currentEvent:
        "San Antonio Spurs rip off a 10-game winning streak behind Wembanyama's two-way dominance",
      player: "Victor Wembanyama",
      team: "SAS",
      historicalParallel: {
        player: "Tim Duncan",
        season: "2002-03",
        stat:
          "23.3 PPG / 12.9 RPG / 3.9 APG / 2.9 BPG — anchored a Spurs team that finished 60-22 and won the championship",
        context:
          "Duncan's 2002-03 Spurs were the prototype of San Antonio dominance: methodical, suffocating on defense, and built around a generational big man who controlled both ends of the floor. That team's late-season winning streaks were a preview of their championship run.",
      },
      comparison:
        "The parallels between Wembanyama's Spurs and Duncan's early-2000s dynasty are becoming impossible to ignore. Both players anchor their team's defense at an elite level while generating efficient offense from the post and mid-range. Duncan's 2002-03 team went on a similar late-season tear — winning 13 of their final 15 — and rode that momentum to a title. Wembanyama's 10-game streak carries the same feel: a young franchise cornerstone learning what dominance feels like in real time. The key difference is Wembanyama's perimeter versatility, which gives these Spurs a dimension Duncan's teams never had.",
      verdict: "Matching stride",
    },
    {
      currentEvent:
        "Jalen Brunson pushes the Knicks to 50 wins — cementing himself among franchise greats at MSG",
      player: "Jalen Brunson",
      team: "NYK",
      historicalParallel: {
        player: "Patrick Ewing",
        season: "1992-93",
        stat:
          "24.2 PPG / 12.1 RPG / 1.9 BPG — led the Knicks to 60 wins and the Eastern Conference Finals in Pat Riley's system",
        context:
          "Ewing's 1992-93 season remains the gold standard for Knicks basketball. That team was physical, relentless, and built around a dominant big man who embodied New York toughness. Ewing carried the franchise on his back for a decade without ever winning a championship, but his impact on the city was immeasurable.",
      },
      comparison:
        "Brunson reaching 50 wins invites the inevitable Ewing and Frazier comparisons. He lacks Ewing's size and Frazier's cool mystique, but Brunson has something neither of them sustained: consistent, modern-era winning at MSG without a second superstar demanding the spotlight. Ewing needed Starks and Oakley. Frazier had Reed and DeBusschere. Brunson is the unquestioned engine of these Knicks, and 50 wins in back-to-back seasons puts him in a tier of Knicks relevance that only Ewing and Frazier have occupied. The championship question remains, but the regular-season legacy is already written.",
      verdict: "On pace to surpass",
    },
    {
      currentEvent:
        "Shai Gilgeous-Alexander leading the MVP race with a 59-18 record and 30+ PPG scoring",
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      historicalParallel: {
        player: "Stephen Curry",
        season: "2015-16",
        stat:
          "30.1 PPG / 6.7 APG / 5.4 RPG — unanimous MVP on a 73-9 team that redefined what a regular season could look like",
        context:
          "Curry's 2015-16 season was the most dominant individual-team combination in regular-season history. He won MVP unanimously while leading the Warriors to the best record ever. The combination of individual brilliance and team dominance set a standard that may never be matched.",
      },
      comparison:
        "SGA's MVP case is built on the same foundation as Curry's 2015-16 campaign: elite individual scoring on the league's best team. OKC's 59-18 record projects to roughly 63 wins, which would put it in rare air alongside Curry's Warriors, Jordan's Bulls, and Duncan's Spurs. SGA's 32+ PPG on elite efficiency mirrors Curry's 30.1 PPG, though their styles could not be more different — Curry rewrote the game from beyond the arc while SGA dominates in the mid-range and at the rim. The MVP voters love the combination of best player on the best team, and SGA checks both boxes emphatically.",
      verdict: "Matching stride",
    },
  ],
  milestoneWatch: [
    {
      player: "Victor Wembanyama",
      team: "SAS",
      milestone: "DPOY award as a sophomore with potential MVP votes",
      current: "Leading the league in blocks and rim protection metrics at age 22",
      needed: "Sustained dominance through the final stretch and a deep playoff run",
      projectedDate: "Awards announced in late April / early May 2026",
      significance:
        "Winning DPOY as a sophomore would make Wembanyama one of the youngest ever to claim the award. Receiving MVP votes on top of it would place him in a conversation with Hakeem Olajuwon and David Robinson as two-way big men who dominated both ends before their prime. The 10-game winning streak only strengthens his case.",
    },
    {
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      milestone: "60 wins in a single season",
      current: "59-18 record with 5 games remaining",
      needed: "1 more win in final 5 games",
      projectedDate: "Virtually guaranteed — likely within the next 1-2 games",
      significance:
        "A 60-win season would be the first in OKC franchise history and only the second in the combined Seattle/OKC timeline (the 1995-96 SuperSonics won 64). For SGA, it would lock up the MVP award and validate OKC's patient rebuild as one of the most successful in modern NBA history.",
    },
    {
      player: "Jalen Brunson",
      team: "NYK",
      milestone: "Franchise single-season scoring record chase",
      current: "1,881 points through 71 games (26.5 PPG)",
      needed: "Approaching Carmelo Anthony's 2012-13 mark of 1,920 points (28.7 PPG in 67 games)",
      projectedDate: "On pace to surpass Carmelo within the next 2-3 games",
      significance:
        "Brunson passing Carmelo for single-season points scored would be a symbolic torch-passing moment for the franchise. Melo was the last Knick to carry the scoring mantle at MSG with this level of consistency. Brunson doing it while winning 50+ games adds a dimension Carmelo's Knicks teams rarely achieved.",
    },
    {
      player: "Nikola Jokic",
      team: "DEN",
      milestone: "Triple-double season count approaching 30",
      current: "27 triple-doubles this season (97 career)",
      needed: "3 more this season to hit 30 and 100 career",
      projectedDate: "At his pace of roughly one every 3.5 games, both milestones are reachable before the regular season ends",
      significance:
        "Thirty triple-doubles in a season would tie Russell Westbrook's 2020-21 mark and further cement Jokic as the most complete statistical force at the center position in NBA history. Reaching 100 career triple-doubles would make him only the fifth player ever to reach that number, joining Oscar Robertson, Westbrook, Magic Johnson, and Jason Kidd.",
    },
  ],
  thisWeekInHistory: [
    {
      year: 1987,
      event:
        "Michael Jordan erupted for 61 points against the Atlanta Hawks on April 16, 1987 — but his early-April stretch that season was equally ferocious. Jordan was averaging 37.1 PPG for the season and routinely dropped 40+ in April as the Bulls pushed for a playoff spot. His scoring that month was a relentless assault on the record books.",
      players: ["Michael Jordan"],
    },
    {
      year: 1984,
      event:
        "Larry Bird's Boston Celtics clinched the best record in the Eastern Conference in early April 1984, finishing 62-20. Bird was in the middle of his first MVP season, averaging 24.2 PPG / 10.1 RPG / 6.6 APG, and the Celtics were a juggernaut built on passing, toughness, and Bird's supernatural court vision. That team would go on to win the championship over the Lakers in seven games.",
      players: ["Larry Bird", "Robert Parish", "Kevin McHale"],
    },
    {
      year: 2019,
      event:
        "Dirk Nowitzki played his final home game at the American Airlines Center on April 9, 2019, scoring 30 points in a loss to the Phoenix Suns. The arena was electric with tributes, tears, and a 21-season career flashing before Dallas's eyes. Nowitzki finished with 31,560 career points and the eternal love of an entire city.",
      players: ["Dirk Nowitzki"],
    },
  ],
  streakWatch: [
    {
      player: "Victor Wembanyama",
      team: "SAS",
      streak: "10-game team winning streak (active)",
      record: "17 — San Antonio Spurs franchise record (2013-14 season)",
      gamesAway: 7,
    },
    {
      player: "Nikola Jokic",
      team: "DEN",
      streak: "8-game team winning streak (active)",
      record: "15 — Denver franchise record (2012-13 season)",
      gamesAway: 7,
    },
    {
      player: "Kawhi Leonard",
      team: "LAC",
      streak: "6-game team winning streak (active)",
      record: "11 — Los Angeles Clippers franchise record (2024-25 season)",
      gamesAway: 5,
    },
    {
      player: "Jayson Tatum",
      team: "BOS",
      streak: "5-game team winning streak (active)",
      record: "19 — Boston Celtics franchise record (2008-09 season)",
      gamesAway: 14,
    },
  ],
  narrative:
    "April 3, 2026 finds the NBA in a rare convergence of generational talent and historic team runs. The Spurs' 10-game winning streak behind Wembanyama's two-way brilliance is drawing direct parallels to the Duncan-era dynasty that defined San Antonio for two decades. Denver's 8-game surge, powered by Jokic's triple-double artistry, has the Nuggets looking like a team no one wants to face in the playoffs. Meanwhile, SGA sits on the doorstep of 60 wins and an MVP trophy in Oklahoma City, and Brunson is rewriting Knicks history one 50-win season at a time. Four franchises, four transformational players, four separate histories being written simultaneously — and the playoffs haven't even started yet.",
};
