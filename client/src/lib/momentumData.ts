// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 3, 2026
// Live at: https://hoopsintel.net/momentum

export interface MomentumSwing {
  gameId: string;
  teams: { home: string; away: string };
  finalScore: { home: number; away: number };
  swings: {
    quarter: string;
    timestamp: string;
    description: string;
    runScore: string;
    momentum: "home" | "away";
    keyPlayer: string;
    impact: "game-changing" | "significant" | "notable";
  }[];
  clutchPlays: {
    player: string;
    team: string;
    description: string;
    timeRemaining: string;
    winProbabilityShift: number;
  }[];
  narrative: string;
}

export interface MomentumData {
  generatedDate: string;
  date: string;
  games: MomentumSwing[];
  gameOfTheNight: string;
  topClutchPerformer: { player: string; team: string; clutchRating: number; description: string };
}

export const momentumData: MomentumData = {
  generatedDate: "2026-11-03",
  date: "November 3, 2026",
  gameOfTheNight: "NOP-MEM-20261102",
  topClutchPerformer: {
    player: "Zion Williamson",
    team: "NOP",
    clutchRating: 97,
    description: "12 points in the final regulation stretch plus a go-ahead basket in overtime to end Memphis's perfect season. Williamson was the only player on the floor who looked certain when certainty was most expensive.",
  },
  games: [
    {
      gameId: "NOP-MEM-20261102",
      teams: { home: "MEM", away: "NOP" },
      finalScore: { home: 134, away: 135 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "4:12",
          description: "Memphis built its largest lead on a Jaren Jackson Jr. three-point play that pushed the margin to nine, sending FedExForum into full roar and setting up Williamson's response.",
          runScore: "14-5 MEM run",
          momentum: "home",
          keyPlayer: "Jaren Jackson Jr.",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:38",
          description: "Williamson hijacked the fourth quarter entirely, scoring eight straight Pelicans points to cut the Memphis lead to one and silence a crowd that had been celebrating prematurely.",
          runScore: "10-2 NOP run",
          momentum: "away",
          keyPlayer: "Zion Williamson",
          impact: "game-changing",
        },
        {
          quarter: "OT",
          timestamp: "0:38",
          description: "Williamson caught a post entry, spun baseline, and finished through contact for a go-ahead basket — the defining shot of Memphis's first loss and arguably the night's signature moment across the entire slate.",
          runScore: "5-2 NOP run",
          momentum: "away",
          keyPlayer: "Zion Williamson",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Zion Williamson",
          team: "NOP",
          description: "Go-ahead post spin and finish through contact with 38 seconds left in overtime to give New Orleans the lead for good.",
          timeRemaining: "0:38 OT",
          winProbabilityShift: 54,
        },
        {
          player: "Zion Williamson",
          team: "NOP",
          description: "Pull-up mid-range jumper to tie the game at 128 with 1:14 left in regulation, forcing overtime.",
          timeRemaining: "1:14 Q4",
          winProbabilityShift: 38,
        },
        {
          player: "Jaren Jackson Jr.",
          team: "MEM",
          description: "Back-to-back blocks in the final minute of regulation to preserve the tie and send the game to overtime.",
          timeRemaining: "0:52 Q4",
          winProbabilityShift: -22,
        },
      ],
      narrative: "This was the game the entire slate orbited around — Memphis's 6-0 perfection versus a Pelicans team riding one player's gravitational pull. The Grizzlies did everything right for three and a half quarters and still couldn't answer Williamson when the architecture of the game demanded it. New Orleans didn't win this game so much as Zion Williamson personally dismantled a perfect record. The final score will follow both franchises into their next ten conversations.",
    },
    {
      gameId: "BOS-HOU-20261102",
      teams: { home: "HOU", away: "BOS" },
      finalScore: { home: 109, away: 93 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:03",
          description: "Sengun posted up Boston's switching center four consecutive times, scoring eight straight Rockets points to build an 11-point halftime lead that never felt particularly at risk.",
          runScore: "11-3 HOU run",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:45",
          description: "Boston trimmed the deficit to seven on a Jaylen Brown triple, the Celtics' closest moment of the second half, before Houston responded immediately with a Sengun-anchored 9-2 burst.",
          runScore: "9-2 HOU run",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "The ROY audition the Hoops Intel desk circled delivered exactly what the preview promised — Sengun exposed every gap in Boston's frontcourt rotation and the Celtics had no structural answer across four quarters. Houston led wire-to-wire in a game that felt decided at halftime and confirmed by the third quarter. The 7-1 Rockets are now the NBA's most credible challenger to the league's elite, and Sengun's 31-14 is the kind of line that changes how Boston's front office spends the next two weeks.",
    },
    {
      gameId: "MIA-LAL-20261102",
      teams: { home: "LAL", away: "MIA" },
      finalScore: { home: 138, away: 117 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:21",
          description: "LeBron orchestrated a 13-2 Laker run with four assists and a pull-up three, pushing the lead to 16 and giving Los Angeles a margin Miami would never seriously threaten.",
          runScore: "13-2 LAL run",
          momentum: "home",
          keyPlayer: "LeBron James",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "2:10",
          description: "The Lakers' second unit kept the pedal down, extending the advantage to 24 and transforming what had been a comfortable lead into an emphatic statement about Los Angeles's depth.",
          runScore: "12-4 LAL run",
          momentum: "home",
          keyPlayer: "LeBron James",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "LeBron in efficiency mode is a different kind of dominant — no heroics required, no late drama, just 29 points and 11 assists distributed across a roster that knows exactly what it's doing. Los Angeles's 138-point output is their season high and the 21-point margin confirms the back-to-back home wins weren't circumstantial. Miami had no mechanism to slow the Lakers' ball movement, and by the third quarter the game had become a showcase rather than a contest.",
    },
    {
      gameId: "DET-CHA-20261102",
      teams: { home: "DET", away: "CHA" },
      finalScore: { home: 124, away: 91 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:44",
          description: "Cunningham ran pick-and-roll after pick-and-roll against Charlotte's overmatched defense, turning a 10-point lead into 20 with a seven-assist second quarter that put the game functionally out of reach.",
          runScore: "16-5 DET run",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:00",
          description: "Detroit's bench pushed the lead to 28 as the starters rested, confirming the Pistons' depth advantage is genuine and not dependent on Cunningham's minutes.",
          runScore: "11-3 DET run",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "The 33-point margin tells a story that the box score's individual numbers almost undersell — Detroit was simply a superior basketball team in every measurable category from the opening tip. Cunningham's floor general performance was clinical rather than spectacular, which is exactly the version of him that sustains over 82 games. The Pistons at 6-1 are building a point differential argument that the East's standings haven't fully caught up to yet.",
    },
    {
      gameId: "CHI-PHI-20261102",
      teams: { home: "PHI", away: "CHI" },
      finalScore: { home: 126, away: 107 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:33",
          description: "Embiid scored seven points in a 90-second stretch of the first quarter — two post buckets and a mid-range jumper — establishing the interior dominance that would define the game's entire architecture.",
          runScore: "12-3 PHI run",
          momentum: "home",
          keyPlayer: "Joel Embiid",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "7:15",
          description: "Embiid's third block of the night sparked a transition sequence that pushed the Philadelphia lead to 22, confirming the defensive dimension that makes this Sixers team genuinely two-way.",
          runScore: "10-2 PHI run",
          momentum: "home",
          keyPlayer: "Joel Embiid",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Philadelphia never gave Chicago a foothold and Embiid's 33-11 with three blocks is the complete performance the Sixers need as their season-long baseline. The 7-1 record is now tied for the NBA's best alongside Houston, and the two-team race at the top of the standings is the league's most compelling structural story heading into the second week. Xfinity Mobile Arena got the dominant home performance it needed.",
    },
    {
      gameId: "POR-DEN-20261102",
      teams: { home: "DEN", away: "POR" },
      finalScore: { home: 110, away: 118 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "3:52",
          description: "Denver held a six-point lead at halftime as Portland's shoulder-compromised Henderson managed the game conservatively, keeping the Blazers within striking distance without exposing himself unnecessarily.",
          runScore: "9-4 DEN run",
          momentum: "home",
          keyPlayer: "Nikola Jokic",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "5:10",
          description: "Henderson flipped the game entirely, orchestrating a 14-point Portland third quarter that wiped Denver's lead and swung the momentum by 20 points — the night's most dramatic single-quarter reversal outside of Memphis.",
          runScore: "20-6 POR run",
          momentum: "away",
          keyPlayer: "Scoot Henderson",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Henderson's shoulder was the pregame storyline and the third quarter was his answer — 14 of Portland's 20 third-quarter points came directly from his creation, turning a six-point deficit into a double-digit advantage that Denver never recovered from. A 6-1 Blazers team winning road games behind a compromised star is a genuinely alarming development for the Western Conference's middle class. This performance travels.",
    },
    {
      gameId: "OKC-CLE-20261102",
      teams: { home: "CLE", away: "OKC" },
      finalScore: { home: 112, away: 117 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "6:20",
          description: "Oklahoma City used a disciplined half-court set to build a 10-point third-quarter lead, the Thunder's ball movement carving Cleveland's zone apart at the seams.",
          runScore: "14-6 OKC run",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "3:41",
          description: "Cleveland clawed back to within three on a Darius Garland floater, transforming a comfortable OKC lead into a genuine fourth-quarter battle that tested the Thunder's closing composure.",
          runScore: "11-4 CLE run",
          momentum: "home",
          keyPlayer: "Darius Garland",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Shai Gilgeous-Alexander",
          team: "OKC",
          description: "Isolation pull-up jumper over Garland with 1:48 remaining to push the lead back to five and functionally seal the road win.",
          timeRemaining: "1:48 Q4",
          winProbabilityShift: 31,
        },
      ],
      narrative: "Cleveland made the Thunder earn every point of a five-point road win, and Rocket Arena's fourth-quarter energy nearly pulled off the comeback. SGA's closing isolation was the chess move that mattered — a pull-up over Garland at the moment Cleveland's crowd believed most. The Thunder at 5-2 are still building toward something, and wins like this one, ugly and contested, may be more instructive than their blowouts.",
    },
    {
      gameId: "ATL-IND-20261102",
      teams: { home: "IND", away: "ATL" },
      finalScore: { home: 104, away: 108 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "8:14",
          description: "Atlanta's ball movement generated 12 assists in the first half as the Hawks found consistent open looks against Indiana's scrambling defense, building a lead that fluctuated between six and ten.",
          runScore: "13-5 ATL run",
          momentum: "away",
          keyPlayer: "Trae Young",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "2:55",
          description: "Indiana cut the deficit to two on back-to-back Tyrese Haliburton free throws, the home crowd surging as the Pacers threatened a comeback before Atlanta steadied its ball handling.",
          runScore: "8-3 IND run",
          momentum: "home",
          keyPlayer: "Tyrese Haliburton",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Trae Young",
          team: "ATL",
          description: "Step-back three with 54 seconds left to push the Atlanta lead back to five and end Indiana's comeback momentum.",
          timeRemaining: "0:54 Q4",
          winProbabilityShift: 42,
        },
      ],
      narrative: "Indiana's 2-6 start has the hallmarks of a team that makes games close and then loses them anyway, and this four-point Atlanta win fits the template precisely. Trae Young's late step-back was the kind of shot that separates good teams from struggling ones — the confidence to take it, the skill to make it. Atlanta at 4-4 is quietly building a résumé of road wins that deserves more attention.",
    },
    {
      gameId: "BKN-NY-20261102",
      teams: { home: "NY", away: "BKN" },
      finalScore: { home: 103, away: 90 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:30",
          description: "New York's defense held Brooklyn to seven second-quarter points — the most suffocating defensive stretch either team produced all night — as the Knicks built a 13-point halftime cushion.",
          runScore: "16-7 NY run",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "8:00",
          description: "Brooklyn's 1-6 record came into sharp focus in the fourth as the Nets' offensive system produced nothing coherent against New York's switching scheme, the deficit staying safely in double digits throughout.",
          runScore: "10-5 NY run",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "The Battle of New York's current power balance is not close, and this 13-point Knicks win at Madison Square Garden made that hierarchy emphatically visible. Brooklyn at 1-6 is testing the patience of a rebuild that hasn't yet found its identity, while New York's defensive intensity gave the Garden crowd the gritty performance it expects from home games. The Knicks at 3-4 need wins like this to stabilize a middling Eastern record.",
    },
    {
      gameId: "WSH-ORL-20261102",
      teams: { home: "ORL", away: "WSH" },
      finalScore: { home: 94, away: 103 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "4:15",
          description: "Washington's second unit outscored Orlando's starters during a critical seven-minute stretch, turning a tied game into a double-digit Washington lead that exposed the Magic's depth concerns.",
          runScore: "18-7 WSH run",
          momentum: "away",
          keyPlayer: "Jordan Poole",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "5:00",
          description: "Orlando trimmed Washington's lead to five with a Paolo Banchero-led push, the Magic's best sustained offensive sequence of the game, before Washington's defense closed the door.",
          runScore: "10-4 ORL run",
          momentum: "home",
          keyPlayer: "Paolo Banchero",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Washington at 4-3 is one of the East's quiet overachievers, and a road win at Orlando — where the Magic have been difficult to beat in recent seasons — adds a credible entry to their résumé. Orlando's 2-5 record increasingly reflects a team caught between its youth movement's ceiling and its current competitive floor. The nine-point final margin was closer than the game's dominant middle stretches suggested.",
    },
    {
      gameId: "SAC-DAL-20261102",
      teams: { home: "DAL", away: "SAC" },
      finalScore: { home: 100, away: 115 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:22",
          description: "Sacramento opened with a 14-4 run that immediately exposed Dallas's defensive rotations and set a tone the Mavericks never fully reversed across four quarters.",
          runScore: "14-4 SAC run",
          momentum: "away",
          keyPlayer: "De'Aaron Fox",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "7:00",
          description: "Dallas trimmed the deficit to eight on a brief second-half run, the game's most hopeful moment for the home crowd, before Sacramento's pace immediately reasserted the visitor's control.",
          runScore: "10-5 DAL run",
          momentum: "home",
          keyPlayer: "Kyrie Irving",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Sacramento's 1-6 record is at war with the evidence of this performance — the Kings outplayed a Dallas team with far higher expectations from wire to wire at American Airlines Center. De'Aaron Fox's pace created problems Dallas couldn't solve schematically, and the 15-point road win is the kind of result that earns a franchise breathing room in a difficult early stretch. For Dallas at 4-3, questions about their defensive identity are becoming harder to dismiss.",
    },
    {
      gameId: "MIL-MIN-20261102",
      teams: { home: "MIN", away: "MIL" },
      finalScore: { home: 112, away: 100 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:11",
          description: "Minnesota's defensive intensity — the league's most discussed schematic identity — forced six Milwaukee turnovers across a 10-minute span, translating them into a 15-point run that defined the game's shape.",
          runScore: "15-4 MIN run",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "9:00",
          description: "Milwaukee's Damian Lillard briefly threatened with a personal 7-0 run early in the fourth, but Minnesota's defensive reset reasserted the double-digit margin before the Bucks could build genuine momentum.",
          runScore: "7-0 MIL run",
          momentum: "away",
          keyPlayer: "Damian Lillard",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Milwaukee at 1-6 is the NBA's most jarring underperformance story, and Target Center offered zero mercy for a Bucks team that still hasn't solved the defensive questions that plagued them last spring. Minnesota's 12-point win was controlled rather than spectacular — the Timberwolves simply applied their defensive system and waited for the turnovers to arrive. At 5-3, Minnesota is the West's most defensively credible team not named Houston.",
    },
    {
      gameId: "SA-UTAH-20261102",
      teams: { home: "SA", away: "UTAH" },
      finalScore: { home: 119, away: 97 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:45",
          description: "San Antonio's young core produced its most cohesive offensive sequence of the season — 11 consecutive points featuring four different scorers — turning a close early game into a 15-point halftime separation.",
          runScore: "15-4 SA run",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:30",
          description: "Wembanyama's shot-blocking presence erased two Utah fast-break opportunities in succession, with the Spurs converting both into transition scores that pushed the margin to 22.",
          runScore: "8-2 SA run",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "San Antonio at 5-2 continues to outperform the modest expectations attached to a young team built around a generational center, and the 22-point rout of Utah was the most complete home performance the Frost Bank Center has witnessed this season. Wembanyama's two-way impact — anchoring the defensive scheme while creating on the offensive end — is the engine the Spurs' entire competitive structure runs on. Utah's 1-6 record reflects a franchise still searching for its competitive identity.",
    },
    {
      gameId: "GS-PHX-20261102",
      teams: { home: "GS", away: "PHX" },
      finalScore: { home: 116, away: 113 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "5:15",
          description: "Golden State's movement offense generated four consecutive baskets off dribble handoffs — a sequence pure enough to feel like a throwback — building a nine-point lead that Chase Center received with the reverence of a crowd that remembers what this system looks like at its peak.",
          runScore: "12-4 GS run",
          momentum: "home",
          keyPlayer: "Stephen Curry",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "2:30",
          description: "Phoenix cut the deficit to one on a Kevin Durant mid-range jumper, the Suns' closest moment of the second half, triggering the game's most tense closing sequence.",
          runScore: "9-3 PHX run",
          momentum: "away",
          keyPlayer: "Kevin Durant",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Stephen Curry",
          team: "GS",
          description: "Off-the-dribble three from the logo with 48 seconds remaining to restore a four-point Golden State lead and effectively close out Phoenix's comeback attempt.",
          timeRemaining: "0:48 Q4",
          winProbabilityShift: 36,
        },
        {
          player: "Kevin Durant",
          team: "PHX",
          description: "Pull-up mid-range to cut the deficit to one with 2:30 remaining, forcing Golden State's bench into a timeout and generating Phoenix's most dangerous late-game possession.",
          timeRemaining: "2:30 Q4",
          winProbabilityShift: -24,
        },
      ],
      narrative: "The Warriors and Suns produced the second-most dramatic finish on the night's loaded slate — Curry versus Durant in a closing sequence that Chase Center will replay all week. Golden State's logo three with 48 seconds left was the kind of shot that belongs to exactly one player on Earth, and it landed through the net with the casual authority of someone who has been making this exact shot for fifteen years. The Warriors at 5-3 have the most reliable closing weapon in the West; Phoenix at 1-4 has Durant and an unresolved identity crisis around him.",
    },
    {
      gameId: "TOR-LAC-20261102",
      teams: { home: "LAC", away: "TOR" },
      finalScore: { home: 118, away: 125 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "3:00",
          description: "Toronto's ball movement — 18 first-half assists against LA Clippers' switching scheme — built a 12-point second-quarter lead that the Raptors maintained despite the Clippers' periodic challenges.",
          runScore: "14-5 TOR run",
          momentum: "away",
          keyPlayer: "Scottie Barnes",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "6:30",
          description: "The Clippers briefly closed to within four at the Intuit Dome, the home crowd briefly energized before Toronto's composure — the team's most underrated characteristic — reasserted the visitor's control.",
          runScore: "10-4 LAC run",
          momentum: "home",
          keyPlayer: "Scottie Barnes",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Toronto's road identity is developing into one of the East's more interesting subplots — the Raptors now have multiple road wins against Western Conference opponents and Scottie Barnes is performing at a level that demands expanded national coverage. The Clippers at 1-6 are the Intuit Dome's most uncomfortable early-season resident, a franchise that built a destination arena and hasn't yet given its fanbase a reason to feel settled. Seven points separates where these franchises are heading.",
    },
  ],
};