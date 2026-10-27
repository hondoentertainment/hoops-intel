// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 27, 2026
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
  generatedDate: "2026-10-27",
  date: "October 27, 2026",
  gameOfTheNight: "MIN-CLE-20261026",
  topClutchPerformer: {
    player: "Donovan Mitchell",
    team: "CLE",
    clutchRating: 97,
    description: "Mitchell authored the night's defining closing sequence — 14 points in the fourth quarter to erase an eight-point deficit, then six more in overtime including back-to-back pull-up jumpers over Anthony Edwards that clinched Cleveland's survival. No player on the slate carried a higher win-probability burden and delivered more completely.",
  },
  games: [
    {
      gameId: "DEN-GSW-20261026",
      teams: { home: "DEN", away: "GSW" },
      finalScore: { home: 114, away: 134 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:44",
          description: "Golden State ripped off an 11-2 run capped by back-to-back Curry threes to seize a double-digit lead they would not relinquish. Denver's defensive rotations buckled under the Warriors' off-ball movement and the game's competitive window effectively closed here.",
          runScore: "11-2 GSW",
          momentum: "away",
          keyPlayer: "Stephen Curry",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:21",
          description: "Curry buried a step-back three over Nikola Jokic's outstretched hand to push the lead to 18, punctuating a 14-4 third-quarter stretch that finished Denver's defensive will. The Ball Arena crowd went silent.",
          runScore: "14-4 GSW",
          momentum: "away",
          keyPlayer: "Stephen Curry",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "8:10",
          description: "Denver strung together a brief 7-2 answer to cut the deficit to 13 but Golden State's reserves absorbed the run without urgency, confirming the outcome was never seriously in doubt after halftime.",
          runScore: "7-2 DEN",
          momentum: "home",
          keyPlayer: "Nikola Jokic",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "This was not a competitive game after the first six minutes of the second quarter — it was a Curry recital staged at altitude. The 20-point margin is as much a statement about Denver's defensive ceiling as it is about Golden State's offensive quality. The Warriors came into Ball Arena carrying a 1-3 record and left carrying a performance that resets every conversation about their viability as a contender.",
    },
    {
      gameId: "MIN-CLE-20261026",
      teams: { home: "CLE", away: "MIN" },
      finalScore: { home: 127, away: 125 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "4:15",
          description: "Minnesota unleashed a 13-4 run powered by Anthony Edwards drives and a Karl-Anthony Towns mid-range to build a 10-point cushion entering the fourth. The Timberwolves looked in complete control and Cleveland's offense stalled against their switching scheme.",
          runScore: "13-4 MIN",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "3:58",
          description: "Donovan Mitchell single-handedly dismantled Minnesota's fourth-quarter grip, scoring 10 straight Cleveland points — two pull-ups, a floater, and a corner three — to tie the game at 116 with under two minutes remaining. The crowd at Rocket Arena reached peak desperation energy.",
          runScore: "10-0 CLE",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "game-changing",
        },
        {
          quarter: "OT",
          timestamp: "1:22",
          description: "Mitchell converted back-to-back pull-up jumpers over Edwards in the final 90 seconds of overtime to give Cleveland a three-point lead it would not surrender. The closing sequence — two of the hardest shots attempted all night — was the individual crescendo of the slate.",
          runScore: "6-2 CLE",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Pull-up mid-range over Edwards to tie the game at 116 with 1:47 remaining in regulation — the shot that forced overtime and reframed the entire night.",
          timeRemaining: "1:47 Q4",
          winProbabilityShift: 31,
        },
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Step-back pull-up over a closing Edwards to push the OT lead to three with 48 seconds remaining — the dagger in a sequence that felt inevitable once Mitchell caught fire.",
          timeRemaining: "0:48 OT",
          winProbabilityShift: 44,
        },
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Driving floater through contact to cut the CLE lead to one with 28 seconds left in OT, keeping Minnesota's survival hopes alive for a final possession.",
          timeRemaining: "0:28 OT",
          winProbabilityShift: -18,
        },
        {
          player: "Darius Garland",
          team: "CLE",
          description: "Two clutch free throws with 12 seconds remaining in OT to seal a two-possession lead and extinguish Minnesota's final answer.",
          timeRemaining: "0:12 OT",
          winProbabilityShift: 22,
        },
      ],
      narrative: "This is the game of the night and one of the early season's defining individual performances. Mitchell produced his answer to every question Cleveland's skeptics could ask, dismantling a Minnesota team that had looked like the road's most imposing defensive unit for three and a half quarters. The Timberwolves' first loss of the season came not from a system failure but from one player refusing to let his team lose — and that distinction matters enormously for what both franchises carry into November.",
    },
    {
      gameId: "MEM-UTA-20261026",
      teams: { home: "UTA", away: "MEM" },
      finalScore: { home: 105, away: 110 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "6:02",
          description: "Utah put together a 9-2 burst to pull within three and send the Delta Center crowd into genuine belief. The Jazz's home energy was the most competitive atmospheric environment on the slate and Memphis looked briefly rattled by it.",
          runScore: "9-2 UTA",
          momentum: "home",
          keyPlayer: "Lauri Markkanen",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "7:44",
          description: "Morant responded to Utah's surge with seven consecutive Memphis points — a transition layup, a mid-range pull-up, and a step-back three — to push the Grizzlies back to a 10-point cushion. Memphis's veteran composure absorbed the home run without defensive concessions.",
          runScore: "7-0 MEM",
          momentum: "away",
          keyPlayer: "Ja Morant",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "2:30",
          description: "Memphis's defensive system clamped down to hold Utah to 21 fourth-quarter points, sealing the win with a combination of Bane perimeter defense and Morant's pressure on Utah's ball-handlers in the halfcourt.",
          runScore: "8-3 MEM",
          momentum: "away",
          keyPlayer: "Desmond Bane",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Ja Morant",
          team: "MEM",
          description: "Step-back three over Utah's closeout to push the lead to 10 at the 7:44 mark of the fourth — the shot that ended Utah's legitimate threat window after their third-quarter surge.",
          timeRemaining: "7:44 Q4",
          winProbabilityShift: 27,
        },
      ],
      narrative: "Memphis passed its most credible early-season road test in the most complete fashion the desk could have projected. The Grizzlies did not shoot it cleanly, did not get every call, and absorbed a genuine home-crowd atmosphere from a Utah team that competes harder than its record indicates — and still won by five. A 4-0 team that can win ugly in hostile environments is a team building legitimate contender infrastructure.",
    },
    {
      gameId: "PHX-OKC-20261026",
      teams: { home: "OKC", away: "PHX" },
      finalScore: { home: 125, away: 114 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "8:11",
          description: "Phoenix went on a 12-3 run to pull within two, with Kevin Durant taking over in isolation against OKC's switching scheme. The Thunder's defensive composure was tested and Paycom Center's energy briefly dipped.",
          runScore: "12-3 PHX",
          momentum: "away",
          keyPlayer: "Kevin Durant",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:12",
          description: "SGA scored 11 of OKC's final 17 points in the fourth, beginning with a Euro-step layup through Durant's contest that pushed the lead back to eight and broke Phoenix's closing resistance. The Thunder's fourth-quarter offensive system is built entirely around his gravity.",
          runScore: "11-4 OKC",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Shai Gilgeous-Alexander",
          team: "OKC",
          description: "Crossover pull-up jumper over Durant with 3:18 remaining to push the OKC lead to nine — the defining individual matchup moment of the game, SGA winning the duel against the player most viewed as his positional benchmark.",
          timeRemaining: "3:18 Q4",
          winProbabilityShift: 29,
        },
      ],
      narrative: "Oklahoma City's 4-0 start is not a mirage and this win against Durant and Phoenix is the clearest evidence yet. SGA's ability to close games against elite individual defenders — he finished this one 11-of-19 shooting against a Phoenix scheme designed to deny him exactly what he takes — is the Thunder's most valuable organizational asset. Phoenix's defensive ceiling was exposed again and their identity crisis deepens with every loss.",
    },
    {
      gameId: "CHI-BOS-20261026",
      teams: { home: "BOS", away: "CHI" },
      finalScore: { home: 134, away: 99 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "7:33",
          description: "Tatum erupted for 15 points in the third quarter, converting a six-point halftime lead into a 22-point advantage with four minutes remaining in the period. His third-quarter four-minute stretch — two threes, a mid-range, and a floater — was the moment the blowout became inevitable.",
          runScore: "19-6 BOS",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "9:45",
          description: "Boston's depth rotation — seven players with double figures — extended the lead to 35 in the fourth quarter as Chicago's defensive energy collapsed. The Celtics played the final period with genuine joy rather than urgency.",
          runScore: "14-5 BOS",
          momentum: "home",
          keyPlayer: "Payton Pritchard",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Boston's 35-point demolition is the East's most complete team statement of the early season. This was not a game decided by one player — it was a system performance where seven contributors reached double figures and the defensive assignments rotated with championship-level fluency. Chicago's 1-3 start is beginning to look structural rather than situational, and their identity problems were not solved by facing a Celtics team playing at this level of organizational cohesion.",
    },
    {
      gameId: "ATL-HOU-20261026",
      teams: { home: "HOU", away: "ATL" },
      finalScore: { home: 120, away: 110 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "4:50",
          description: "Sengun dominated Atlanta's interior rotation with six consecutive points — two post hooks and a putback — to push Houston's lead to 12. Atlanta had no answer for his footwork and the Rockets' halfcourt offense flowed entirely through him in the second quarter.",
          runScore: "10-3 HOU",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:22",
          description: "Trae Young engineered a 9-2 Atlanta run to cut the deficit to five, briefly reanimating the Hawks' competitiveness with two assisted threes and a pull-up floater. Houston responded by running their Sengun pick-and-roll more aggressively and the Atlanta interior collapsed.",
          runScore: "9-2 ATL",
          momentum: "away",
          keyPlayer: "Trae Young",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "6:14",
          description: "Houston's defensive system reasserted itself in the fourth, holding Young to 0-for-5 in the final frame while Sengun controlled the offensive glass. The Rockets' 4-0 start was never seriously threatened after Sengun's second-quarter dominance set the structural terms of the game.",
          runScore: "12-5 HOU",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "The most underreported organizational story on the slate continues to compound. Houston won the post battle in every quarter, held Young — one of the league's most creative offensive threats — to 22 points on inefficient volume, and moved to 4-0 without relying on a single go-to isolation play to close the game. Sengun's 27-13 line is the box score, but the system behind it is the real story the desk needs the basketball world to understand about this Rockets team.",
    },
    {
      gameId: "IND-MIL-20261026",
      teams: { home: "MIL", away: "IND" },
      finalScore: { home: 110, away: 102 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:18",
          description: "Indiana built a 9-point halftime lead on the back of efficient Tyrese Haliburton playmaking and Milwaukee's defensive breakdowns in pick-and-roll coverage. Fiserv Forum's desperation energy had not yet reached Giannis and the Bucks looked directionless.",
          runScore: "11-4 IND",
          momentum: "away",
          keyPlayer: "Tyrese Haliburton",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:55",
          description: "Giannis exploded for 14 third-quarter points — two dunks, a hook, two free throw sequences — to flip the game completely, turning a nine-point halftime deficit into a four-point lead entering the fourth. The crowd energy shifted from dread to belief and Indiana, playing on a back-to-back, wilted visibly.",
          runScore: "18-6 MIL",
          momentum: "home",
          keyPlayer: "Giannis Antetokounmpo",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Giannis preserved Milwaukee from an organizational catastrophe through the most individually dominant single quarter on the slate — 14 third-quarter points that swung a 9-point deficit into a 4-point lead in under ten minutes of game time. The Bucks' 1-3 record remains a systemic concern but this performance confirmed that as long as Giannis plays with this intensity the franchise is never in true freefall. Indiana's back-to-back fatigue was real and the desk accounts for it in contextualizing the result.",
    },
    {
      gameId: "DAL-MIA-20261026",
      teams: { home: "MIA", away: "DAL" },
      finalScore: { home: 109, away: 113 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "3:44",
          description: "Miami built a six-point halftime lead through sustained defensive pressure and Bam Adebayo interior control. Dallas's first-half offense was disjointed and Luka's right knee soreness was evident in his limited first-half aggressiveness — he attempted only five shots before the break.",
          runScore: "10-4 MIA",
          momentum: "home",
          keyPlayer: "Bam Adebayo",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "4:17",
          description: "Luka flipped the switch in the third quarter, scoring 11 second-half points in the first eight minutes after halftime, including a step-back three and a pull-up baseline jumper that gave Dallas its first lead. His second-half transformation despite the knee was the game's defining narrative thread.",
          runScore: "14-6 DAL",
          momentum: "away",
          keyPlayer: "Luka Doncic",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "2:55",
          description: "Miami cut the deficit to two on a Herro mid-range with under three minutes left, forcing Dallas's closing execution into sharper focus. Luka answered immediately with an off-the-dribble pull-up to restore breathing room.",
          runScore: "6-2 MIA",
          momentum: "home",
          keyPlayer: "Tyler Herro",
          impact: "notable",
        },
      ],
      clutchPlays: [
        {
          player: "Luka Doncic",
          team: "DAL",
          description: "Off-the-dribble pull-up mid-range over Bam Adebayo's contest with 2:31 remaining to restore a four-point Dallas lead after Miami had cut it to two — the answer shot that required both physical and mental resilience given his knee condition.",
          timeRemaining: "2:31 Q4",
          winProbabilityShift: 26,
        },
        {
          player: "Tyler Herro",
          team: "MIA",
          description: "Step-back three to cut the deficit to one with 1:04 remaining, generating the genuine final-minute tension that Miami's desperate 0-4 situation demanded.",
          timeRemaining: "1:04 Q4",
          winProbabilityShift: -19,
        },
        {
          player: "Luka Doncic",
          team: "DAL",
          description: "Two clutch free throws with 38 seconds remaining after drawing contact in the post — the composed finishing sequence that confirmed Dallas's survival in a road environment designed to consume struggling teams.",
          timeRemaining: "0:38 Q4",
          winProbabilityShift: 33,
        },
      ],
      narrative: "Luka Doncic played through documented right knee soreness to deliver 19 second-half points and eight assists that dismantled Miami's defensive game plan entirely. The Heat are 0-4 and their organizational crisis is now the East's loudest alarm — they had enough to beat a diminished Dallas in the first half and could not hold it. For Dallas, this win is about health management and clutch execution more than any tactical revelation; the fact that Luka closed it without his full physical toolkit is the detail the desk finds most significant.",
    },
    {
      gameId: "WAS-CHA-20261026",
      teams: { home: "CHA", away: "WAS" },
      finalScore: { home: 110, away: 103 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:21",
          description: "Washington built a brief 8-point lead on the back of Jordan Poole's second-quarter scoring burst, going on a 10-3 run that temporarily silenced the Spectrum Center crowd. Charlotte's defensive rotations on Poole's pull-up game were undisciplined in the first half.",
          runScore: "10-3 WAS",
          momentum: "away",
          keyPlayer: "Jordan Poole",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:03",
          description: "LaMelo Ball orchestrated a 14-4 Charlotte third-quarter run to swing the game from a five-point deficit to a nine-point lead. Three assists, a three-pointer, and two drives against Washington's scrambled help coverage — Ball's court vision in the third quarter was the game's decisive individual performance.",
          runScore: "14-4 CHA",
          momentum: "home",
          keyPlayer: "LaMelo Ball",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "LaMelo Ball continues to assert himself as the Southeast Division's most dangerous individual playmaker and Charlotte's 3-1 start is the division's quiet overperformance story of the early season. Washington had a real lead at halftime and Ball simply refused to let the game remain competitive — his third-quarter takeover was swift, decisive, and executed against a Washington zone he dissected with three assists in under four minutes. The Hornets closing defense holding Poole to 18 points is the structural detail that confirms this team has organizational depth beyond LaMelo's creation.",
    },
  ],
};