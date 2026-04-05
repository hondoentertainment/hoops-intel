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
  generatedDate: "April 5, 2026",
  comparisons: [
    {
      currentEvent:
        "Wembanyama's Spurs have now won 12 straight after toppling OKC last night — the longest Spurs winning streak since the 2013-14 championship run, and tonight they rest while the league digests what just happened",
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
        "Wembanyama's 12-game streak now firmly surpasses Duncan's longest regular-season run in 2002-03 and is closing in on the franchise record of 17 set during the 2013-14 title season. Last night's win over OKC — the team with the best record in basketball — was the kind of statement that separates good streaks from historically significant ones. Duncan's Spurs proved themselves in similar April crucibles; Wembanyama just passed his biggest test yet. Five more wins ties the franchise record. The Spurs are off tonight, but the reverberations of that OKC win will be felt across every Western Conference playoff calculation.",
      verdict: "On pace to surpass",
    },
    {
      currentEvent:
        "Jayson Tatum and the Celtics ride a 7-game winning streak into Atlanta tonight on ESPN — Tatum is averaging 30 PPG in April and the 1-seed is within grasp",
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
        "Tatum's 7-game winning streak and 30 PPG April scoring average now mirrors Bird's late-season dominance in 1985-86 with uncanny precision. Bird used April to put teams away and sharpen his Celtics for the postseason; Tatum is doing the same, with each win tightening the vice on Cleveland's 1-seed hopes. Tonight's trip to Atlanta on ESPN is the kind of game Bird's Celtics would have treated as a tune-up — but Tatum cannot afford that luxury with the race this tight. The streak has transformed Boston from contender to favorite in the span of a week.",
      verdict: "Matching stride",
    },
    {
      currentEvent:
        "Luka Doncic extends his scoring tear to 8 straight games of 35+ PPG — Dallas is now 6-2 in that stretch and clinging to playoff positioning",
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
        "Luka's 35+ PPG streak has now reached 8 games — one away from tying James Harden's 2018-19 mark of 9 consecutive games at 36+ PPG. The Jordan parallels intensify with each passing night: both players carried heavy offensive loads because no one else could, and both transformed that burden into something approaching art. Jordan's April 1987 was the most prolific scoring month of his career; Luka's April 2026 is threatening to match it. The difference is sustainability — Jordan's Bulls were eliminated in the first round despite his heroics. Luka's Mavericks have a real chance to parlay this run into homecourt advantage.",
      verdict: "Matching stride",
    },
    {
      currentEvent:
        "OKC's 12-game winning streak ended in San Antonio last night — now they travel to Denver for a TNT showdown with Jokic and the surging Nuggets",
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      historicalParallel: {
        player: "Kevin Durant",
        season: "2012-13",
        stat:
          "28.1 PPG / 7.9 RPG / 4.6 APG — led OKC to 60 wins but the Thunder lost their final regular-season game at San Antonio before a playoff exit",
        context:
          "Durant's 2012-13 Thunder were the class of the Western Conference for most of the season, but a late loss to the Spurs foreshadowed vulnerability. That San Antonio defeat exposed matchup problems OKC never solved, and the Thunder were bounced in the second round by Memphis.",
      },
      comparison:
        "SGA's Thunder suffering their streak-ending loss in San Antonio echoes Durant's 2013 squad, which also stumbled against the Spurs at a pivotal late-season moment. The question now is whether OKC responds the way championship teams do — with a bounce-back win on a national stage. Tonight's trip to Denver on TNT is that opportunity. Durant's Thunder let the San Antonio loss snowball; SGA has a chance to prove this team is built differently. The 60-win milestone is still within reach with 4 games left, but the aura of invincibility took a hit last night in the Alamo City.",
      verdict: "Falling short",
    },
    {
      currentEvent:
        "Jokic and the Nuggets carry a 9-game winning streak into tonight's TNT showdown with a wounded OKC team — Denver smells blood",
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
        "Jokic's 9-game winning streak and his pursuit of 100 career triple-doubles continue to evoke Kareem's early-1970s dominance — another center who could do everything and whose teams won in bunches because of it. Tonight's matchup with OKC on TNT is the kind of game that could define Denver's playoff seeding. Kareem's Bucks feasted on wounded opponents; Jokic gets that chance tonight against a Thunder team reeling from last night's loss in San Antonio. If Denver can extend this streak to 10, they will have seized the momentum in the Western Conference at the most critical moment of the season.",
      verdict: "On pace to surpass",
    },
  ],
  milestoneWatch: [
    {
      player: "Victor Wembanyama",
      team: "SAS",
      milestone: "Longest Spurs winning streak since the 2013-14 championship season",
      current: "12-game winning streak — longest active streak in the NBA",
      needed: "5 more wins to tie the franchise record of 17 (set in 2013-14)",
      projectedDate: "If the streak continues, the franchise record could fall by April 12",
      significance:
        "Last night's victory over OKC pushed the streak to 12 and officially announced the Spurs as the hottest team in basketball. Tying or breaking the 2013-14 franchise record would place Wembanyama's first great Spurs run alongside the Duncan-Parker-Ginobili dynasty in the franchise's pantheon. The Spurs are off tonight, but five winnable games remain on the schedule.",
    },
    {
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      milestone: "60 wins in a single season",
      current: "59-19 record with 4 games remaining after last night's loss in San Antonio",
      needed: "1 more win in final 4 games — tonight at Denver on TNT is the next chance",
      projectedDate: "Should clinch within the next two games",
      significance:
        "The loss in San Antonio delayed the milestone but did not derail it. A 60-win season would still be the first in OKC franchise history. Clinching it tonight in Denver — on TNT against a surging Nuggets team — would turn a bounce-back game into a celebration. SGA's MVP case took a minor hit last night, and a dominant response tonight would repair the narrative.",
    },
    {
      player: "Nikola Jokic",
      team: "DEN",
      milestone: "100 career triple-doubles",
      current: "28 triple-doubles this season (99 career after last night's near-miss)",
      needed: "1 more to reach 100 career — tonight vs. OKC on TNT is the stage",
      projectedDate: "Could reach the milestone tonight against the Thunder",
      significance:
        "One hundred career triple-doubles would make Jokic only the fifth player in NBA history to reach that number, joining Oscar Robertson, Russell Westbrook, Magic Johnson, and Jason Kidd. Reaching it on national television against the team with the best record in basketball would be the most fitting stage imaginable for a milestone that defines Jokic's unique greatness.",
    },
    {
      player: "Jalen Brunson",
      team: "NYK",
      milestone: "Franchise single-season scoring record",
      current: "1,934 points through 73 games (26.5 PPG) — has already surpassed Carmelo Anthony's 2012-13 mark of 1,920",
      needed: "Record secured — now extending the mark with every game remaining",
      projectedDate: "Record was broken last night at MSG",
      significance:
        "Brunson officially claimed the Knicks' single-season scoring record last night, surpassing Carmelo Anthony's 2012-13 mark in front of the MSG faithful. Melo's scoring legacy at the Garden was sacred ground — Brunson now owns it. Tonight he hosts Detroit at 7:30 PM on ABC, with a chance to extend the record and push the Knicks toward a higher playoff seed.",
    },
  ],
  thisWeekInHistory: [
    {
      year: 1975,
      event:
        "On April 5, 1975, the Golden State Warriors defeated the Seattle SuperSonics in the regular-season finale to clinch the Western Conference's final playoff spot. That improbable Warriors team — led by Rick Barry — went on to sweep the Washington Bullets in the Finals, completing one of the greatest underdog runs in NBA history. Tonight's slate features its own desperate playoff pushes, as Detroit fights for relevance and Philadelphia battles Orlando for seeding.",
      players: ["Rick Barry", "Jamaal Wilkes", "Phil Smith"],
    },
    {
      year: 1993,
      event:
        "On April 5, 1993, Charles Barkley's Phoenix Suns beat the Lakers 112-104 to clinch the top seed in the Western Conference. Barkley had 31 points and 12 rebounds in a performance that cemented his MVP season. The Suns finished 62-20 and Barkley's late-season dominance carried Phoenix to the Finals — a reminder that April performances shape legacies. OKC's pursuit of 60 wins tonight in Denver carries the same gravity.",
      players: ["Charles Barkley", "Kevin Johnson", "Dan Majerle"],
    },
    {
      year: 2016,
      event:
        "On April 5, 2016, the Golden State Warriors sat at 70-8 with four games remaining, on the doorstep of breaking the 1995-96 Bulls' all-time wins record. Steph Curry was in the middle of the greatest shooting season in NBA history, and the basketball world held its breath for every remaining game. Tonight's pursuit of milestones — OKC chasing 60 wins, Jokic chasing 100 triple-doubles — captures that same late-season urgency.",
      players: ["Stephen Curry", "Klay Thompson", "Draymond Green"],
    },
  ],
  streakWatch: [
    {
      player: "Victor Wembanyama",
      team: "SAS",
      streak: "12-game team winning streak (active)",
      record: "17 — San Antonio Spurs franchise record (2013-14 season)",
      gamesAway: 5,
    },
    {
      player: "Nikola Jokic",
      team: "DEN",
      streak: "9-game team winning streak (active)",
      record: "15 — Denver franchise record (2012-13 season)",
      gamesAway: 6,
    },
    {
      player: "Jayson Tatum",
      team: "BOS",
      streak: "7-game team winning streak (active)",
      record: "19 — Boston Celtics franchise record (2008-09 season)",
      gamesAway: 12,
    },
    {
      player: "Luka Doncic",
      team: "DAL",
      streak: "8-game 35+ PPG scoring streak (active)",
      record: "9 — James Harden (2018-19 season, 36+ PPG)",
      gamesAway: 1,
    },
  ],
  narrative:
    "April 5, 2026 — Edition 93 — arrives with last night's seismic result still reverberating: Wembanyama's Spurs ended OKC's dominance with a statement win that pushed their streak to 12 and handed the Thunder their first loss in weeks. Now the ripple effects play out across tonight's five-game slate. OKC travels to Denver on TNT at 9:30 PM, where Jokic and a 9-game winning streak await a wounded Thunder team — the bounce-back narrative meets an unstoppable force, and Jokic is one triple-double away from 100 career. The ABC headliner is Detroit at the Garden at 7:30 PM, where Brunson — the new franchise scoring king — looks to extend his record. Boston visits Atlanta at 8:00 PM on ESPN with a 7-game winning streak and the 1-seed in sight. Philadelphia and Orlando clash at 6:00 PM in a playoff-seeding tussle, and the Clippers visit Phoenix at 10:00 PM to close the night. The regular season is down to its final days, and every game carries the weight of a season's worth of storylines.",
};
