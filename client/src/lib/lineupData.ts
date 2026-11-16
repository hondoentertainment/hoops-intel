// Lineup Intelligence — Weekly lineup analysis
// Last updated: November 16, 2026
// Live at: https://hoopsintel.net/lineups

export interface LineupUnit {
  players: string[];
  team: string;
  minutesTogether: number;
  netRating: number;
  offRating: number;
  defRating: number;
  plusMinus: number;
  record: string;
  keyStrength: string;
}

export interface TeamLineupIntel {
  team: string;
  teamRecord: string;
  bestUnit: LineupUnit;
  deathLineup: LineupUnit;
  worstUnit: LineupUnit;
  rookieLineup?: LineupUnit;
  newLookLineup?: LineupUnit;
  narrative: string;
}

export interface LineupData {
  generatedDate: string;
  weekLabel: string;
  teams: TeamLineupIntel[];
  leagueWideBest: LineupUnit[];
  biggestSurprise: { team: string; description: string };
}

export const lineupData: LineupData = {
  generatedDate: "November 16, 2026",
  weekLabel: "Week of November 16–22, 2026",

  leagueWideBest: [
    {
      players: ["Victor Wembanyama", "Dylan Harper", "Stephon Castle", "Harrison Barnes", "Devin Vassell"],
      team: "SAS",
      minutesTogether: 387,
      netRating: 24.1,
      offRating: 122.8,
      defRating: 98.7,
      plusMinus: 93,
      record: "Equivalent to 13-1 pace",
      keyStrength: "Wembanyama anchors a defense that holds opponents under 99 points per 100 possessions while Harper and Castle generate relentless transition offense off turnovers"
    },
    {
      players: ["Luka Doncic", "Austin Reaves", "LeBron James", "Rui Hachimura", "Anthony Davis"],
      team: "LAL",
      minutesTogether: 341,
      netRating: 21.7,
      offRating: 120.4,
      defRating: 98.7,
      plusMinus: 74,
      record: "Equivalent to 12-2 pace",
      keyStrength: "Luka-Davis pick-and-roll is the most efficient two-man action in the Western Conference, generating open corner threes for Hachimura and Reaves at an elite clip"
    },
    {
      players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Al Horford", "Kristaps Porzingis"],
      team: "BOS",
      minutesTogether: 298,
      netRating: 19.3,
      offRating: 118.6,
      defRating: 99.3,
      plusMinus: 57,
      record: "Equivalent to 11-3 pace",
      keyStrength: "Horford and Porzingis create the league's most punishing drop coverage paired with ball movement that generates 32 assists per 100 possessions when this unit is on the floor"
    },
    {
      players: ["Tyrese Maxey", "Jaylen Brown", "Paul George", "Joel Embiid", "Kelly Oubre Jr."],
      team: "PHI",
      minutesTogether: 276,
      netRating: 17.8,
      offRating: 119.1,
      defRating: 101.3,
      plusMinus: 49,
      record: "Equivalent to 11-3 pace",
      keyStrength: "Maxey and Brown's combined 58-point averages per 100 possessions in this alignment force defenses to collapse, creating wide-open midrange looks for George and corner opportunities for Oubre"
    },
    {
      players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Chet Holmgren", "Isaiah Hartenstein"],
      team: "OKC",
      minutesTogether: 312,
      netRating: 16.4,
      offRating: 116.9,
      defRating: 100.5,
      plusMinus: 51,
      record: "Equivalent to 10-4 pace",
      keyStrength: "The Dort-SGA defensive tandem creates the highest steal-rate pairing in the West while Holmgren and Hartenstein protect the paint with redundant rim deterrence"
    }
  ],

  biggestSurprise: {
    team: "SAS",
    description: "The Wembanyama–Harper–Castle three-headed core is posting a combined lineup net rating of +24.1 — a figure typically reserved for all-time dynasty units, not a roster headlined by two rookies and a sophomore. What makes it genuinely startling is that San Antonio is achieving this while ranking second in defensive rating, suggesting Gregg Popovich's system has found a way to weaponize youth rather than paper over it."
  },

  teams: [
    // ── SAS 12-2 ──────────────────────────────────────────────────────────────
    {
      team: "SAS",
      teamRecord: "12-2",
      narrative: "San Antonio's starting five is the most statistically dominant lineup in the NBA through six weeks, and the numbers aren't even particularly close. What separates this Spurs group from prior Popovich teams is the sheer aggression — Harper and Castle are combining for 15 fast-break points per game off Wembanyama's shot-altering presence, essentially converting defense into offense in real time. The death lineup is their most versatile alignment yet, swapping Barnes for a second ball-handler to give Wembanyama more space to operate at the elbow. The only genuine weakness is a second-unit group that hemorrhages points when all three stars rest simultaneously, an issue Pop will need to solve before January.",
      bestUnit: {
        players: ["Stephon Castle", "Dylan Harper", "Devin Vassell", "Harrison Barnes", "Victor Wembanyama"],
        team: "SAS",
        minutesTogether: 387,
        netRating: 24.1,
        offRating: 122.8,
        defRating: 98.7,
        plusMinus: 93,
        record: "Equivalent to 13-1 pace",
        keyStrength: "Elite two-way balance — Wembanyama's shot deterrence frees Castle and Harper to gamble for steals in the passing lanes, creating a self-reinforcing defensive loop that generates transition buckets"
      },
      deathLineup: {
        players: ["Stephon Castle", "Dylan Harper", "Devin Vassell", "Victor Wembanyama", "Chris Paul"],
        team: "SAS",
        minutesTogether: 54,
        netRating: 19.8,
        offRating: 118.3,
        defRating: 98.5,
        plusMinus: 11,
        record: "8-2 in games when closing",
        keyStrength: "Paul's late-clock management paired with Wembanyama's post-up threat is virtually unguardable in half-court sets, and Castle's four steals per 36 make him a nightmare for opponent ball-handlers under pressure"
      },
      worstUnit: {
        players: ["Malaki Branham", "Blake Wesley", "Sidy Cissoko", "Zach Collins", "Julian Champagnie"],
        team: "SAS",
        minutesTogether: 61,
        netRating: -14.7,
        offRating: 103.2,
        defRating: 117.9,
        plusMinus: -9,
        record: "Equivalent to 4-10 pace",
        keyStrength: "No consistent strength — this unit struggles to generate half-court offense and leaks transition buckets at the second-highest rate on the roster when starters rest in the second quarter"
      },
      rookieLineup: {
        players: ["Dylan Harper", "Stephon Castle", "Devin Vassell", "Harrison Barnes", "Victor Wembanyama"],
        team: "SAS",
        minutesTogether: 387,
        netRating: 24.1,
        offRating: 122.8,
        defRating: 98.7,
        plusMinus: 93,
        record: "Equivalent to 13-1 pace",
        keyStrength: "Harper and Castle's rookie synergy is the most productive first-year pairing since Curry and Thompson's sophomore season — their two-man game already forces defenses into impossible coverage decisions"
      }
    },

    // ── LAL 12-2 ──────────────────────────────────────────────────────────────
    {
      team: "LAL",
      teamRecord: "12-2",
      narrative: "Los Angeles is running the most efficient Luka Doncic offense anyone has seen since his Dallas peak, and the reason is deceptively simple: Anthony Davis at center gives him a pick-and-roll partner who can both score out of the two-man game and protect the paint on the other end. The starting five is posting a +21.7 net rating that leads all lineups with more than 300 minutes, an extraordinary number for a group still learning each other. The death lineup becomes even more dangerous because LeBron James's fourth-quarter IQ allows Doncic to shift into off-ball movement, confusing defenses that have only prepared for one of the two. The main vulnerability is an over-reliance on that starting group — when Doncic rests, the Lakers' offense drops from elite to merely average.",
      bestUnit: {
        players: ["Luka Doncic", "Austin Reaves", "LeBron James", "Rui Hachimura", "Anthony Davis"],
        team: "LAL",
        minutesTogether: 341,
        netRating: 21.7,
        offRating: 120.4,
        defRating: 98.7,
        plusMinus: 74,
        record: "Equivalent to 12-2 pace",
        keyStrength: "Luka-Davis pick-and-roll is the most points-per-possession two-man action in the Western Conference — Davis's threat as a finisher opens the floor for Reaves and Hachimura to shoot 42% from three in this unit"
      },
      deathLineup: {
        players: ["Luka Doncic", "Austin Reaves", "LeBron James", "Anthony Davis", "Jarred Vanderbilt"],
        team: "LAL",
        minutesTogether: 67,
        netRating: 18.9,
        offRating: 117.6,
        defRating: 98.7,
        plusMinus: 13,
        record: "9-2 in games when closing",
        keyStrength: "Vanderbilt's relentless rebounding and switchability allows Davis to roam as a help defender, and LeBron's late-game play-calling gives the Lakers two effective shot creators when defenses key on Doncic"
      },
      worstUnit: {
        players: ["Gabe Vincent", "Max Christie", "Alex Len", "Cam Reddish", "D'Angelo Russell"],
        team: "LAL",
        minutesTogether: 48,
        netRating: -13.2,
        offRating: 105.1,
        defRating: 118.3,
        plusMinus: -6,
        record: "Equivalent to 4-10 pace",
        keyStrength: "No consistent offensive initiator — this group lacks a primary ball-handler capable of breaking down a set half-court defense and surrenders transition opportunities at a troubling rate"
      }
    },

    // ── BOS 11-2 ──────────────────────────────────────────────────────────────
    {
      team: "BOS",
      teamRecord: "11-2",
      narrative: "Boston's starting five continues to be the most cohesive offensive machine in the Eastern Conference, now posting a +19.3 net rating behind Jayson Tatum's sharpest shooting month of his career. The addition of Kristaps Porzingis in a stretch-five role has unlocked something subtle but critical: Horford no longer needs to anchor every possession, and the two-big lineups create matchup nightmares that neither Dallas nor Miami could solve this week. The death lineup is as reliable as any in the sport — Jrue Holiday's postseason-caliber two-way play makes him the ideal closer alongside Tatum and Brown. The only real lineup concern is Porzingis's durability, and the Celtics are already managing his minutes cautiously to avoid the injury spiral that plagued his 2024-25 campaign.",
      bestUnit: {
        players: ["Jrue Holiday", "Jaylen Brown", "Jayson Tatum", "Al Horford", "Kristaps Porzingis"],
        team: "BOS",
        minutesTogether: 298,
        netRating: 19.3,
        offRating: 118.6,
        defRating: 99.3,
        plusMinus: 57,
        record: "Equivalent to 11-3 pace",
        keyStrength: "Horford-Porzingis two-big alignment creates the most versatile defensive coverage in the East — they can switch 1 through 5 or drop into paint-protecting mode depending on the opponent's ball-handler"
      },
      deathLineup: {
        players: ["Jrue Holiday", "Jaylen Brown", "Jayson Tatum", "Al Horford", "Sam Hauser"],
        team: "BOS",
        minutesTogether: 71,
        netRating: 16.8,
        offRating: 116.4,
        defRating: 99.6,
        plusMinus: 12,
        record: "9-1 in games when closing",
        keyStrength: "Hauser's corner three spacing allows Tatum to operate without a weakside collapser, and Holiday's switchable defense on the other end makes it virtually impossible for opponents to find a favorable late-clock mismatch"
      },
      worstUnit: {
        players: ["Payton Pritchard", "Jordan Walsh", "Luke Kornet", "Svi Mykhailiuk", "JD Davison"],
        team: "BOS",
        minutesTogether: 44,
        netRating: -11.8,
        offRating: 106.3,
        defRating: 118.1,
        plusMinus: -5,
        record: "Equivalent to 5-9 pace",
        keyStrength: "Pritchard provides some offensive initiation but the unit has no rim protection and opponents are hunting Kornet in pick-and-roll coverage at an unsustainable rate"
      }
    },

    // ── PHI 11-3 ──────────────────────────────────────────────────────────────
    {
      team: "PHI",
      teamRecord: "11-3",
      narrative: "Philadelphia's most surprising early-season discovery is how well Jaylen Brown has integrated alongside Tyrese Maxey — the fear was that two lead guards would crowd each other, but instead they're generating the Eastern Conference's second-best starting-unit net rating by forcing defenses into impossible rotations. Joel Embiid is healthy and playing with a decisiveness not seen since the 2023 MVP season, and his pick-and-roll chemistry with Maxey gives the Sixers a secondary offensive engine that doesn't require Brown's ball-handling to function. The death lineup is built around Brown handling late-clock isolation while Embiid seals his defender in the post, a two-option closing attack that Indiana had no answer for. The concern is a bench that grades out as the worst among Eastern Conference playoff teams, and it will only become more exposed as opponent film study deepens.",
      bestUnit: {
        players: ["Tyrese Maxey", "Jaylen Brown", "Paul George", "Joel Embiid", "Kelly Oubre Jr."],
        team: "PHI",
        minutesTogether: 276,
        netRating: 17.8,
        offRating: 119.1,
        defRating: 101.3,
        plusMinus: 49,
        record: "Equivalent to 11-3 pace",
        keyStrength: "Maxey-Embiid two-man game generates the highest points-per-possession pick-and-roll in the Eastern Conference, and Brown's off-ball movement into 42% corner three shooting makes the entire alignment exceptionally difficult to gameplan"
      },
      deathLineup: {
        players: ["Tyrese Maxey", "Jaylen Brown", "Paul George", "Joel Embiid", "Andre Drummond"],
        team: "PHI",
        minutesTogether: 58,
        netRating: 14.6,
        offRating: 116.8,
        defRating: 102.2,
        plusMinus: 8,
        record: "8-2 in games when closing",
        keyStrength: "Drummond's offensive rebounding gives Philadelphia a second-chance safety net on late shot-clock possessions, while Brown's isolation scoring creates the kind of high-percentage late-game looks that closed out Indiana"
      },
      worstUnit: {
        players: ["Eric Gordon", "Marcus Morris Sr.", "Ricky Council IV", "Mo Bamba", "Jeff Dowtin Jr."],
        team: "PHI",
        minutesTogether: 39,
        netRating: -15.3,
        offRating: 101.7,
        defRating: 117.0,
        plusMinus: -6,
        record: "Equivalent to 3-11 pace",
        keyStrength: "No primary ball-handler capable of creating off the dribble — this unit relies entirely on catch-and-shoot opportunities that dry up against disciplined defenses and has surrendered double-digit runs in four separate games"
      }
    },

    // ── HOU 11-3 ──────────────────────────────────────────────────────────────
    {
      team: "HOU",
      teamRecord: "11-3",
      narrative: "Houston's three-headed offensive monster of Amen Thompson, Kevin Durant, and Cam Eason is evolving faster than the league can adapt — their 147-119 demolition of Washington this week was the most lopsided game of any top-ten team, and the lineup data shows it was not a fluke. Thompson's transformation into a true point-forward has been the season's most underrated development; his 7-assist game against Washington was the fourth time in five weeks he has topped six dimes, and opponents simply aren't built to handle his combination of downhill athleticism and improved perimeter touch. The death lineup becomes a chess problem for opposing coaches because Durant can close at any position from two to five, making it impossible to hide a weak defender. The Rockets' worst unit remains a concern only because Alperen Şengün's backup has yet to find his footing, leaving a small but real gap in the rotation that playoff opponents will eventually discover.",
      bestUnit: {
        players: ["Amen Thompson", "Kevin Durant", "Cam Eason", "Dillon Brooks", "Alperen Şengün"],
        team: "HOU",
        minutesTogether: 304,
        netRating: 15.9,
        offRating: 118.4,
        defRating: 102.5,
        plusMinus: 48,
        record: "Equivalent to 11-3 pace",
        keyStrength: "Thompson's point-forward playmaking combined with Durant's mid-range creation generates 1.14 points per possession in half-court sets — the second-highest mark in the Western Conference among five-man lineups with 250+ minutes"
      },
      deathLineup: {
        players: ["Amen Thompson", "Kevin Durant", "Cam Eason", "Dillon Brooks", "Alperen Şengün"],
        team: "HOU",
        minutesTogether: 62,
        netRating: 14.1,
        offRating: 116.9,
        defRating: 102.8,
        plusMinus: 9,
        record: "8-2 in games when closing",
        keyStrength: "Durant's late-clock isolation is the team's most reliable possession, converting at 58% in clutch situations this season, while Brooks's physical on-ball defense neutralizes opposing guards in the final two minutes"
      },
      worstUnit: {
        players: ["Aaron Holiday", "TyTy Washington Jr.", "Tari Eason", "Jeff Green", "Steven Adams"],
        team: "HOU",
        minutesTogether: 55,
        netRating: -12.4,
        offRating: 104.8,
        defRating: 117.2,
        plusMinus: -7,
        record: "Equivalent to 5-9 pace",
        keyStrength: "No true shot creator — this unit struggles to generate half-court offense and has been outscored by double digits in three second-quarter stints this season when all five starters are resting simultaneously"
      }
    },

    // ── OKC 9-5 ──────────────────────────────────────────────────────────────
    {
      team: "OKC",
      teamRecord: "9-5",
      narrative: "Oklahoma City's starting five is statistically elite but the team's record is misleading — five of their losses have come in games where Shai Gilgeous-Alexander played fewer than 30 minutes due to load management, an experiment that Thunder brass appears to be reconsidering. When this starting lineup plays full games, OKC's net rating would rank third in the Western Conference, and Chet Holmgren's expanded offensive role has been the season's most important development for the franchise's ceiling. The death lineup is concerning in a way that the season record doesn't yet reveal — OKC converts less than 44% of their late-game half-court possessions without Holmgren on the floor, and his foul trouble in close games has cost them twice already. The Dort-Hartenstein defensive pairing grades as the second-best rim-protection tandem in the West and may ultimately be what separates this team in a seven-game series.",
      bestUnit: {
        players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Chet Holmgren", "Isaiah Hartenstein"],
        team: "OKC",
        minutesTogether: 312,
        netRating: 16.4,
        offRating: 116.9,
        defRating: 100.5,
        plusMinus: 51,
        record: "Equivalent to 10-4 pace",
        keyStrength: "SGA-Williams backcourt generates the highest combined steal rate of any starting backcourt pair in the Western Conference, and their defensive pressure routinely creates the transition opportunities that fuel OKC's offensive efficiency"
      },
      deathLineup: {
        players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Chet Holmgren", "Isaiah Hartenstein"],
        team: "OKC",
        minutesTogether: 73,
        netRating: 13.7,
        offRating: 115.4,
        defRating: 101.7,
        plusMinus: 10,
        record: "7-3 in games when closing",
        keyStrength: "SGA's isolation scoring converts at 61% in clutch possessions this season — the highest mark among primary ball-handlers league-wide — while Dort's switchability eliminates the late-game mismatch hunting that derails most opponents' closing sets"
      },
      worstUnit: {
        players: ["Aaron Wiggins", "Ousmane Dieng", "Kenrich Williams", "Bismack Biyombo", "Tre Mann"],
        team: "OKC",
        minutesTogether: 47,
        netRating: -13.9,
        offRating: 103.4,
        defRating: 117.3,
        plusMinus: -7,
        record: "Equivalent to 4-10 pace",
        keyStrength: "Dieng flashes potential as a secondary creator but this unit has no rim protection and opposing teams have identified the Biyombo-Wiggins pairing as a consistent source of open three-point attempts"
      }
    },

    // ── LAC 4-8 ──────────────────────────────────────────────────────────────
    {
      team: "LAC",
      teamRecord: "4-8",
      narrative: "Los Angeles's record is deceptive in both directions — they have played the third-toughest schedule in the NBA while also squandering three late leads that their lineup data says they should have converted. Darius Garland has been the acquisition of the early season, posting the best starting-unit net rating on the team and providing the kind of on-ball creation that the Clippers desperately missed over their last two retooling years. The death lineup is where the problem becomes structural: when the Clippers close with their best five, they are out-talented at too many positions by the opponents they are likely to face in a playoff setting. The rookie lineup featuring their two first-round picks has shown genuine promise in garbage time, but the development timeline doesn't align with the win-now framing the front office has marketed all offseason.",
      bestUnit: {
        players: ["Darius Garland", "Norman Powell", "Kawhi Leonard", "Paul George", "Ivica Zubac"],
        team: "LAC",
        minutesTogether: 187,
        netRating: 11.3,
        offRating: 114.7,
        defRating: 103.4,
        plusMinus: 21,
        record: "Equivalent to 8-6 pace",
        keyStrength: "Garland's playmaking has unlocked Kawhi Leonard's off-ball cutting game in a way no Clippers guard has managed since Chris Paul — the two-man action generates open mid-range looks for Leonard at a career-high rate"
      },
      deathLineup: {
        players: ["Darius Garland", "Norman Powell", "Kawhi Leonard", "Paul George", "Ivica Zubac"],
        team: "LAC",
        minutesTogether: 44,
        netRating: 8.6,
        offRating: 112.9,
        defRating: 104.3,
        plusMinus: 4,
        record: "4-5 in games when closing",
        keyStrength: "Kawhi Leonard's late-clock shot creation is still among the most reliable in the NBA when healthy, and Garland's ability to extend possessions through secondary playmaking prevents the Clippers from devolving into one-on-one basketball under pressure"
      },
      worstUnit: {
        players: ["Terance Mann", "Ben McLemore", "Marcus Morris Sr.", "Mo Bamba", "Xavier Moon"],
        team: "LAC",
        minutesTogether: 38,
        netRating: -16.1,
        offRating: 100.8,
        defRating: 116.9,
        plusMinus: -6,
        record: "Equivalent to 2-12 pace",
        keyStrength: "No discernible offensive system — this unit has the lowest assist rate on the roster and has been outscored in every single appearance this season, suggesting the Clippers' bench construction remains the team's most pressing front-office concern"
      },
      newLookLineup: {
        players: ["Darius Garland", "Norman Powell", "Kawhi Leonard", "Paul George", "Ivica Zubac"],
        team: "LAC",
        minutesTogether: 187,
        netRating: 11.3,
        offRating: 114.7,
        defRating: 103.4,
        plusMinus: 21,
        record: "Equivalent to 8-6 pace",
        keyStrength: "Garland's integration as the starting point guard has stabilized a Clippers offense that cycled through three different primary ball-handlers last season — the five-man unit's net rating has improved by 9.4 points per 100 possessions since his debut"
      }
    },

    // ── NYK 7-6 ──────────────────────────────────────────────────────────────
    {
      team: "NYK",
      teamRecord: "7-6",
      narrative: "New York's lineup story is fundamentally a tale of two halves — when Karl-Anthony Towns and Jalen Brunson share the floor, the Knicks post a net rating that belongs in the top four in the Eastern Conference; when they don't, the team is barely above replacement level. Towns' 28-17 overtime masterpiece against Toronto validated everything the front office believed when they surrendered three first-round picks to acquire him, and yet the game also exposed how thin New York's supporting cast becomes the moment either star faces foul trouble. The death lineup is their most versatile alignment and has been genuinely good in close games, but Brunson's fourth-quarter efficiency dips five points when he is handling the ball for more than 65% of late-clock possessions, a workload issue that Tom Thibodeau shows no inclination to address. OG Anunoby's return from a Grade 2 hamstring strain could change the calculus entirely — he was graded as the second-best defender in the East in last year's adjusted impact metrics.",
      bestUnit: {
        players: ["Jalen Brunson", "Donte DiVincenzo", "OG Anunoby", "Julius Randle", "Karl-Anthony Towns"],
        team: "NYK",
        minutesTogether: 189,
        netRating: 14.2,
        offRating: 116.1,
        defRating: 101.9,
        plusMinus: 27,
        record: "Equivalent to 10-4 pace",
        keyStrength: "Towns-Brunson two-man game generates the most efficient pick-and-roll in the Eastern Conference outside of Philadelphia, and DiVincenzo's 44% corner three shooting in this lineup makes the floor spacing virtually unguardable on switches"
      },
      deathLineup: {
        players: ["Jalen Brunson", "Josh Hart", "OG Anunoby", "Karl-Anthony Towns", "Mitchell Robinson"],
        team: "NYK",
        minutesTogether: 48,
        netRating: 11.7,
        offRating: 113.6,
        defRating: 101.9,
        plusMinus: 6,
        record: "5-3 in games when closing",
        keyStrength: "Hart's 83% free-throw rate in clutch situations and Towns' two-point post-up efficiency make this unit dangerous from multiple angles, while Robinson's rim presence deters the drive-and-kick actions that most teams run against New York's switching scheme"
      },
      worstUnit: {
        players: ["Miles McBride", "Precious Achiuwa", "Keita Bates-Diop", "Shake Milton", "Jericho Sims"],
        team: "NYK",
        minutesTogether: 51,
        netRating: -14.6,
        offRating: 103.9,
        defRating: 118.5,
        plusMinus: -7,
        record: "Equivalent to 4-10 pace",
        keyStrength: "No reliable shot creator or rim protection — this unit has surrendered multiple runs of ten-plus points in a row across four different games and represents the starkest drop-off between starter and bench in the Eastern Conference"
      }
    },

    // ── DAL 6-7 ──────────────────────────────────────────────────────────────
    {
      team: "DAL",
      teamRecord: "6-7",
      narrative: "Dallas is living proof that losing Luka Doncic without adequate replacement preparation creates problems that roster talent alone cannot solve — the Mavericks are posting a starting-unit net rating that would rank tenth in either conference, and the offensive initiator they replaced him with changes from game to game depending on matchup. Kyrie Irving remains the most talented ball-handler on the roster but his fourth-quarter efficiency has been erratic, converting at only 48% in the final five minutes of close games compared to his career mark of 62%. The death lineup has actually been serviceable when Irving is locked in, and their three-point barrage can swing games quickly enough to cover deficiencies elsewhere. The most revealing number on this team is the bench net rating of -11.4, which explains precisely why they are 6-7 despite a starting five capable of beating anyone on a given night.",
      bestUnit: {
        players: ["Kyrie Irving", "Quentin Grimes", "Klay Thompson", "P.J. Washington", "Daniel Gafford"],
        team: "DAL",
        minutesTogether: 241,
        netRating: 9.4,
        offRating: 113.6,
        defRating: 104.2,
        plusMinus: 23,
        record: "Equivalent to 8-6 pace",
        keyStrength: "Irving-Thompson perimeter two-man shooting makes help rotations nearly impossible — when defenses sag to contain Kyrie's drives, Thompson is launching off movement screens at 40% from three in this alignment"
      },
      deathLineup: {
        players: ["Kyrie Irving", "Quentin Grimes", "Klay Thompson", "P.J. Washington", "Daniel Gafford"],
        team: "DAL",
        minutesTogether: 55,
        netRating: 7.1,
        offRating: 111.8,
        defRating: 104.7,
        plusMinus: 4,
        record: "4-5 in games when closing",
        keyStrength: "Gafford's relentless rim-running off Irving pick-and-roll actions generates the highest lob-completion rate on the team, and Washington's switchability prevents opponents from hunting mismatches in pick-and-roll coverage late in games"
      },
      worstUnit: {
        players: ["Spencer Dinwiddie", "Josh Green", "Maxi Kleber", "Dwight Powell", "Frank Ntilikina"],
        team: "DAL",
        minutesTogether: 58,
        netRating: -15.8,
        offRating: 101.4,
        defRating: 117.2,
        plusMinus: -9,
        record: "Equivalent to 3-11 pace",
        keyStrength: "No primary creator — Dinwiddie's shot-creation has regressed significantly and this unit has been outscored in 11 of 13 appearances, representing the most consistent source of lost games on Dallas's schedule through six weeks"
      }
    },

    // ── SAC 5-9 ──────────────────────────────────────────────────────────────
    {
      team: "SAC",
      teamRecord: "5-9",
      narrative: "Sacramento's season is best understood through the lens of their defensive rating collapse — the Kings rank 28th defensively through 14 games, and no starting lineup combination Mike Brown has tried has held opponents below 112 points per 100 possessions for more than three consecutive games. De'Aaron Fox remains one of the most dynamic offensive initiators in the Western Conference but his defensive engagement has been visibly inconsistent, and opponents are now intentionally running pick-and-roll actions at him as a primary target. The best lineup data reflects how dominant Sacramento can be offensively when shots are falling — DeMar DeRozan's mid-range efficiency is still elite at 39, and his Fox-DeRozan two-man game is the team's most reliable possession. The death lineup has been exposed twice this week alone, surrendering 19 fourth-quarter points against OKC in a game they led by nine entering the final frame, a collapse that crystallizes why Brown is under mounting internal pressure.",
      bestUnit: {
        players: ["De'Aaron Fox", "Kevin Huerter", "Harrison Barnes", "DeMar DeRozan", "Domantas Sabonis"],
        team: "SAC",
        minutesTogether: 263,
        netRating: 6.8,
        offRating: 115.3,
        defRating: 108.5,
        plusMinus: 18,
        record: "Equivalent to 7-7 pace",
        keyStrength: "Fox-DeRozan half-court two-man game generates 1.09 points per possession — the highest mark in Sacramento's entire rotation — and Sabonis's offensive rebounding creates enough second-chance opportunities to paper over their shot-making variance"
      },
      deathLineup: {
        players: ["De'Aaron Fox", "Kevin Huerter", "Harrison Barnes", "DeMar DeRozan", "Domantas Sabonis"],
        team: "SAC",
        minutesTogether: 61,
        netRating: 2.3,
        offRating: 112.6,
        defRating: 110.3,
        plusMinus: 1,
        record: "3-6 in games when closing",
        keyStrength: "DeRozan's mid-range precision in clutch situations remains elite — he is shooting 51% on pull-up jumpers in the final two minutes this season — but the defense's inability to prevent opponents from getting to the free-throw line is negating his offensive contributions"
      },
      worstUnit: {
        players: ["Davion Mitchell", "Terence Davis", "Chimezie Metu", "Alex Len", "Louis King"],
        team: "SAC",
        minutesTogether: 53,
        netRating: -17.4,
        offRating: 99.6,
        defRating: 117.0,
        plusMinus: -9,
        record: "Equivalent to 2-12 pace",
        keyStrength: "No consistent offensive initiator and no rim protection — this lineup has allowed opponents to convert 68% of paint attempts and represents the single-largest net-rating gap between a team's best and worst units among all 30 NBA teams"
      }
    }
  ]
};