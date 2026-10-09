// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 9, 2026
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
  generatedDate: "2026-10-09",
  date: "October 9, 2026",
  gameOfTheNight: "WAS-NYK-20261008",
  topClutchPerformer: {
    player: "Jordan Poole",
    team: "WAS",
    clutchRating: 94,
    description:
      "Poole authored the defining moment of the preseason's opening week, draining a pull-up mid-range jumper with 38 seconds left at Madison Square Garden to give Washington a two-point lead it would not relinquish. In a building that buries road teams, he looked entirely unbothered.",
  },
  games: [
    {
      gameId: "WAS-NYK-20261008",
      teams: { home: "NYK", away: "WAS" },
      finalScore: { home: 109, away: 111 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:12",
          description:
            "Knicks open on a 12-4 run to establish early MSG command, crowd immediately volatile and hostile toward the Wizards bench.",
          runScore: "12-4 NYK",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:45",
          description:
            "Washington answers with a 14-3 retaliation run to close the half, erasing the deficit and entering halftime with unexpected momentum on the road.",
          runScore: "14-3 WAS",
          momentum: "away",
          keyPlayer: "Jordan Poole",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:30",
          description:
            "New York reclaims the building with a 9-2 stretch to open the third quarter, Brunson isolations carving Washington's switching scheme repeatedly.",
          runScore: "9-2 NYK",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "2:05",
          description:
            "Wizards execute a 7-0 closing burst to shock MSG into silence, flipping a three-point NYK lead into a four-point Washington advantage with under two minutes remaining.",
          runScore: "7-0 WAS",
          momentum: "away",
          keyPlayer: "Jordan Poole",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "0:18",
          description:
            "Brunson converts two free throws to pull NYK within two but Washington's defensive assignment holds and the final seconds expire on a missed Knicks three.",
          runScore: "2-0 NYK",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "notable",
        },
      ],
      clutchPlays: [
        {
          player: "Jordan Poole",
          team: "WAS",
          description:
            "Pull-up mid-range jumper over a closing defender with 38 seconds left gives Washington a 111-107 lead and effectively seals the stunning road upset at MSG.",
          timeRemaining: "0:38",
          winProbabilityShift: 31,
        },
        {
          player: "Kyle Kuzma",
          team: "WAS",
          description:
            "Defensive stop and outlet pass that ignited Washington's game-sealing 7-0 run, forcing a Brunson turnover on a critical NYK possession with 2:20 remaining.",
          timeRemaining: "2:20",
          winProbabilityShift: 18,
        },
        {
          player: "Jalen Brunson",
          team: "NYK",
          description:
            "Converted both free throws to trim the deficit to two with 18 seconds left, giving New York a final possession chance that ultimately fell short.",
          timeRemaining: "0:18",
          winProbabilityShift: -9,
        },
      ],
      narrative:
        "Madison Square Garden has seen a thousand upsets but rarely ones this surgically delivered. Washington entered as a nine-point underdog, absorbed New York's early energy like a team that had played this arena before, and then methodically dismantled the Knicks' corrective narrative over the final six minutes. Jordan Poole was the instrument — composed, precise, and completely indifferent to the crowd noise that typically suffocates road teams in this building. For New York, a second consecutive preseason loss means the organizational pressure is no longer hypothetical. The Wizards opened their window 1-0, and the address on that win could not have been more hostile.",
    },
    {
      gameId: "ATL-SAS-20261008",
      teams: { home: "SAS", away: "ATL" },
      finalScore: { home: 116, away: 123 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:22",
          description:
            "San Antonio asserts early home dominance with a 10-2 run, Wembanyama's rim protection immediately altering Atlanta's interior attack.",
          runScore: "10-2 SAS",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "9:00",
          description:
            "Atlanta opens the second quarter with an 11-0 blitz to flip the lead, Hawks ball movement dissecting a San Antonio scheme that had no answer for ATL's pace.",
          runScore: "11-0 ATL",
          momentum: "away",
          keyPlayer: "Trae Young",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "6:15",
          description:
            "Hawks extend their lead to 14 on a 13-5 run to open the third, breaking the game's competitive spine and forcing San Antonio into desperation sequences.",
          runScore: "13-5 ATL",
          momentum: "away",
          keyPlayer: "Dejounte Murray",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "4:00",
          description:
            "Spurs mount a late 12-3 pride run behind Wembanyama to trim the deficit to five, briefly threatening to make the final minutes uncomfortable for Atlanta.",
          runScore: "12-3 SAS",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative:
        "This was the West's most consequential upset of the preseason's opening week, and it arrived at a venue where Atlanta had no business winning by seven points. Trae Young's second-quarter orchestration was the pivotal variable — the Hawks dissolved San Antonio's defensive structure in a four-minute sequence that effectively decided the game's outcome before halftime arrived. Wembanyama competed, blocked shots, and refused to disappear, but the Spurs' organizational invulnerability narrative absorbed its first real cost in this window. Atlanta leaves Texas 1-1 with the kind of road credibility that changes how a front office reads its own team. San Antonio's preseason dominance story now carries a footnote it cannot erase.",
    },
    {
      gameId: "BOS-CLE-20261008",
      teams: { home: "CLE", away: "BOS" },
      finalScore: { home: 113, away: 124 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:00",
          description:
            "Cleveland's young core opens competitively with a 9-4 burst, forcing Boston's veterans into early communication breakdowns on defensive rotations.",
          runScore: "9-4 CLE",
          momentum: "home",
          keyPlayer: "Darius Garland",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "5:30",
          description:
            "Boston's veteran cohesion asserts itself with a commanding 18-5 second-quarter run that opens a double-digit lead, the talent gap becoming visually apparent.",
          runScore: "18-5 BOS",
          momentum: "away",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:00",
          description:
            "Celtics push the lead to 17 after a 10-3 stretch built on consecutive defensive stops, Cavaliers rotation players unable to generate any quality looks against Boston's scheme.",
          runScore: "10-3 BOS",
          momentum: "away",
          keyPlayer: "Jaylen Brown",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative:
        "Boston passed its preseason opener examination with the efficiency of a championship franchise that has taken this test before. The Celtics allowed Cleveland a brief early look at parity, then methodically compressed it into irrelevance over the second quarter with the kind of connected, purposeful basketball that separated them from the field last season. There were no alarm bells in this result — no unexpected lineups, no confusing shot selection, no signs of offseason rust that the scouting community will flag. For Cleveland, the young core competed with appropriate energy and lost to a team in a completely different organizational tier. That is the cleanest possible reading of this result.",
    },
    {
      gameId: "NOP-MIA-20261008",
      teams: { home: "MIA", away: "NOP" },
      finalScore: { home: 128, away: 118 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:00",
          description:
            "Miami establishes immediate home command with a 13-4 opening run, Heat defensive intensity suffocating New Orleans' early offensive structure.",
          runScore: "13-4 MIA",
          momentum: "home",
          keyPlayer: "Jimmy Butler",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "6:45",
          description:
            "New Orleans responds with a 12-3 counter to cut the Miami lead to four, Zion Williamson overpowering the Heat's interior defense in a sustained burst.",
          runScore: "12-3 NOP",
          momentum: "away",
          keyPlayer: "Zion Williamson",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "4:20",
          description:
            "Butler-led Heat close the third quarter on a 16-6 run to rebuild a comfortable double-digit cushion, turning a competitive game into a procedural finish.",
          runScore: "16-6 MIA",
          momentum: "home",
          keyPlayer: "Jimmy Butler",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative:
        "Miami is doing the thing that makes this franchise genuinely difficult to dismiss: winning by double digits at home with the kind of composed authority that suggests the system is already operational at full capacity. Two games, two convincing results, a combined plus-20 point differential — the Heat's preseason form is the East's quietest legitimacy statement. Jimmy Butler's presence in third-quarter situations continues to be the decisive variable, his ability to identify the exact possession where the opponent's resistance needs to be permanently ended is a skill that cannot be schemed or replicated. New Orleans leaves Kaseya 1-1 and the Pelicans' ambiguity deepens — they won their opener, lost this one, and neither result tells a definitive story.",
    },
    {
      gameId: "PHI-BRK-20261008",
      teams: { home: "BRK", away: "PHI" },
      finalScore: { home: 114, away: 108 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:15",
          description:
            "Philadelphia posts the game's first significant run with a 10-3 burst, Embiid asserting immediate interior dominance and Brooklyn's front line struggling to contain him.",
          runScore: "10-3 PHI",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "4:00",
          description:
            "Brooklyn answers with a 14-4 second-quarter run to flip the lead, Nets ball movement creating a string of open threes that Philadelphia's defensive scheme failed to close out on.",
          runScore: "14-4 BRK",
          momentum: "home",
          keyPlayer: "Ben Simmons",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "6:00",
          description:
            "Nets build their largest lead of the game on a 9-2 fourth-quarter sequence, Brooklyn's defensive discipline holding Embiid to a quiet final quarter.",
          runScore: "9-2 BRK",
          momentum: "home",
          keyPlayer: "Cam Thomas",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative:
        "Brooklyn's second preseason win carries more organizational weight than its placement in the final score suggests — the Nets have now defeated two opponents with winning records, and they have done it in ways that look structurally sound rather than statistically fortunate. Philadelphia came in off a Monday home win with Embiid posting strong early numbers, and Brooklyn methodically neutralized that momentum in the second quarter and never allowed it to re-emerge. The Nets are quietly 2-0, the East's second-cleanest preseason record behind Miami, and the front office conversation around this roster has a different texture than it had seven days ago. Embiid's organizational read absorbs a setback here — the early momentum from the 76ers' opening win over New York now feels less stable.",
    },
    {
      gameId: "SAC-LAL-20261008",
      teams: { home: "LAL", away: "SAC" },
      finalScore: { home: 114, away: 110 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:00",
          description:
            "Sacramento opens aggressively with a 10-4 run, De'Aaron Fox in transition creating chaos and the Lakers' defense looking disorganized against Kings pace.",
          runScore: "10-4 SAC",
          momentum: "away",
          keyPlayer: "De'Aaron Fox",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "8:30",
          description:
            "Los Angeles stabilizes and reclaims the lead with a 13-5 second-quarter response, LeBron's half-court possession management slowing the game to a tempo that neutralizes Sacramento's speed advantage.",
          runScore: "13-5 LAL",
          momentum: "home",
          keyPlayer: "LeBron James",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "2:45",
          description:
            "Kings push back with a 9-3 third-quarter run to tie the game, Domantas Sabonis punishing the Lakers' interior rotations with relentless post footwork.",
          runScore: "9-3 SAC",
          momentum: "away",
          keyPlayer: "Domantas Sabonis",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "3:30",
          description:
            "Lakers close the game with a decisive 10-3 fourth-quarter run to push to a seven-point lead before Sacramento's late cosmetic scoring trims the final margin to four.",
          runScore: "10-3 LAL",
          momentum: "home",
          keyPlayer: "Anthony Davis",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Anthony Davis",
          team: "LAL",
          description:
            "Back-to-back post scores in the opening three minutes of the fourth quarter that broke a tied game and established the Lakers' winning margin for good.",
          timeRemaining: "9:00",
          winProbabilityShift: 22,
        },
        {
          player: "De'Aaron Fox",
          team: "SAC",
          description:
            "Drives the length of the floor for a converted and-one to cut the deficit to two with 2:10 remaining, briefly threatening to fully reopen a game the Lakers thought they had managed.",
          timeRemaining: "2:10",
          winProbabilityShift: -14,
        },
      ],
      narrative:
        "This was a corrective result for Los Angeles and nothing more, and the coaching staff will read it exactly that way — with relief rather than with confidence. After Tuesday's 26-point demolition at Chase Center, the Lakers needed a win that demonstrated defensive organization and fourth-quarter composure, and they produced both in just enough quantities to beat an 0-2 Sacramento team that pushed them into genuine discomfort for three quarters. Anthony Davis was the decisive variable in the fourth, his interior scoring providing the stable, repeatable offensive mechanism that the Lakers' half-court sets require when the game slows down under national television pressure. Sacramento is now 0-2 and De'Aaron Fox's read as a franchise-shifting talent is quietly the West's most under-examined preseason subplot — the Kings are losing close games, not blowouts, and that is a different organizational conversation entirely.",
    },
  ],
};