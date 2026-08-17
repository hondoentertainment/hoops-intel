// Auto-generated Clutch Factor Rankings data
// Weekly rankings of the NBA's most clutch performers

export interface ClutchPlayer {
  rank: number;
  player: string;
  team: string;
  clutchRating: number;
  clutchPts: number;
  clutchFgPct: number;
  clutchFtPct: number;
  gameWinners: number;
  clutchPlusMinus: number;
  biggestMoment: string;
  trend: "up" | "down" | "stable";
}

export interface ClutchData {
  generatedDate: string;
  weekLabel: string;
  players: ClutchPlayer[];
  clutchKing: { player: string; team: string; description: string };
  worstInClutch: { player: string; team: string; description: string };
  weeklyHighlight: string;
}

export const clutchData: ClutchData = {
  generatedDate: "August 17, 2026",
  weekLabel: "Week of August 17–23, 2026",
  players: [
    {
      rank: 1,
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      clutchRating: 98,
      clutchPts: 9.4,
      clutchFgPct: 54.2,
      clutchFtPct: 96.1,
      gameWinners: 8,
      clutchPlusMinus: 14.7,
      biggestMoment:
        "With 11.3 seconds left and OKC down one to Memphis in Game 5 of the second round, SGA dribbled off a Holmgren screen, drew contact from Jaren Jackson Jr. at the elbow, and calmly converted both free throws before sealing the win with a chase-down steal on the ensuing inbound. The sequence lasted six seconds and ended a series.",
      trend: "up",
    },
    {
      rank: 2,
      player: "De'Aaron Fox",
      team: "SAS",
      clutchRating: 96,
      clutchPts: 8.7,
      clutchFgPct: 51.8,
      clutchFtPct: 93.4,
      gameWinners: 7,
      clutchPlusMinus: 12.1,
      biggestMoment:
        "Fox posted a season-defining clutch performance in Game 7 of the Western Conference Finals, scoring 14 of his 31 points in the final 4:42 — including a pull-up three off the dribble over two defenders with 1:09 left that gave San Antonio the lead for good. The shot clock was at two when he released it.",
      trend: "up",
    },
    {
      rank: 3,
      player: "Victor Wembanyama",
      team: "SAS",
      clutchRating: 95,
      clutchPts: 7.9,
      clutchFgPct: 49.6,
      clutchFtPct: 88.7,
      gameWinners: 6,
      clutchPlusMinus: 13.9,
      biggestMoment:
        "In the Finals, with Boston down three and driving for a potential tying possession, Wembanyama read the entry pass, materialized from the weak side, and pinned a Tatum layup attempt against the glass with his off hand — a block so geometrically improbable that the arena went silent for a full beat before erupting. The possession ended the series.",
      trend: "stable",
    },
    {
      rank: 4,
      player: "Jalen Brunson",
      team: "NYK",
      clutchRating: 94,
      clutchPts: 8.2,
      clutchFgPct: 50.3,
      clutchFtPct: 95.8,
      gameWinners: 7,
      clutchPlusMinus: 11.4,
      biggestMoment:
        "Brunson's 44-point Game 7 against Indiana included a mid-range pull-up over Pascal Siakam with 34 seconds remaining that gave New York a three-point cushion it would not relinquish — the kind of contested mid-range that only three or four players in the league can manufacture off the bounce in a hostile road environment.",
      trend: "stable",
    },
    {
      rank: 5,
      player: "Nikola Jokic",
      team: "DEN",
      clutchRating: 93,
      clutchPts: 7.6,
      clutchFgPct: 52.7,
      clutchFtPct: 84.2,
      gameWinners: 5,
      clutchPlusMinus: 10.8,
      biggestMoment:
        "Against Minnesota in a January overtime game, Jokic received a post entry with 18 seconds on the clock, pump-faked Rudy Gobert into the air twice, and hit an off-balance floater over the outstretched hand that banked in off the glass — then immediately set the trap defense that forced the turnover sealing the win.",
      trend: "stable",
    },
    {
      rank: 6,
      player: "Stephon Castle",
      team: "SAS",
      clutchRating: 91,
      clutchPts: 6.8,
      clutchFgPct: 47.9,
      clutchFtPct: 91.3,
      gameWinners: 4,
      clutchPlusMinus: 9.6,
      biggestMoment:
        "Castle announced his arrival as a playoff closer in Game 3 against Houston, hitting back-to-back pull-up jumpers in the final 90 seconds of a one-possession game while being guarded by the Rockets' best perimeter defender — his second make came off a live-ball steal he initiated himself, turning a broken play into a dagger in real time.",
      trend: "up",
    },
    {
      rank: 7,
      player: "Anthony Edwards",
      team: "MIN",
      clutchRating: 89,
      clutchPts: 7.1,
      clutchFgPct: 44.8,
      clutchFtPct: 87.6,
      gameWinners: 5,
      clutchPlusMinus: 7.3,
      biggestMoment:
        "Edwards took over a hostile road elimination game in Denver with four consecutive clutch-minute points — a driving layup through contact and a step-back three from the logo — before the final sequence unraveled on a turnover, a bittersweet ending that encapsulates his season's clutch narrative: elite execution, imperfect closing.",
      trend: "down",
    },
    {
      rank: 8,
      player: "Jayson Tatum",
      team: "BOS",
      clutchRating: 88,
      clutchPts: 7.3,
      clutchFgPct: 46.1,
      clutchFtPct: 89.4,
      gameWinners: 4,
      clutchPlusMinus: 6.8,
      biggestMoment:
        "Tatum erupted for 11 clutch-minute points in a March showdown against New York, hitting a corner three, a driving hook, and two free throws in a span of 2:17 that turned a four-point deficit into a two-point lead — a burst of sustained clutch output that reminded the East he remains one of its most dangerous late-game architects.",
      trend: "stable",
    },
    {
      rank: 9,
      player: "Damian Lillard",
      team: "MIL",
      clutchRating: 87,
      clutchPts: 7.8,
      clutchFgPct: 43.6,
      clutchFtPct: 94.7,
      gameWinners: 5,
      clutchPlusMinus: 5.9,
      biggestMoment:
        "Lillard hit a 34-foot buzzer-beater against Chicago in February — stepping back past the three-point line while a defender's hand was in his face — that was so far back the arena's shot clock operator didn't initially register it as a made basket. The celebration began one delayed second after the ball had been in the net.",
      trend: "up",
    },
    {
      rank: 10,
      player: "Alperen Sengun",
      team: "HOU",
      clutchRating: 85,
      clutchPts: 6.4,
      clutchFgPct: 53.1,
      clutchFtPct: 79.8,
      gameWinners: 3,
      clutchPlusMinus: 8.4,
      biggestMoment:
        "Sengun engineered a stunning fourth-quarter comeback against Dallas with six clutch-minute points — all from the post, all off his own creation — capped by a drop-step hook over Luka Doncic's outstretched arm that tied the game with 41 seconds left and sent Rocket fans into a frenzy the Toyota Center could barely contain.",
      trend: "up",
    },
    {
      rank: 11,
      player: "Donovan Mitchell",
      team: "CLE",
      clutchRating: 84,
      clutchPts: 7.2,
      clutchFgPct: 45.3,
      clutchFtPct: 91.1,
      gameWinners: 4,
      clutchPlusMinus: 5.2,
      biggestMoment:
        "Mitchell turned a must-win road game in Orlando into a personal showcase, dropping 13 points in the final 4:30 — including a crossover pull-up that drew a foul and three successive free throws in the final minute — the kind of methodical late-game deconstruction that reminds scouts why his clutch reputation has outlasted every roster rebuild around him.",
      trend: "stable",
    },
    {
      rank: 12,
      player: "Paolo Banchero",
      team: "ORL",
      clutchRating: 82,
      clutchPts: 6.1,
      clutchFgPct: 46.8,
      clutchFtPct: 86.3,
      gameWinners: 3,
      clutchPlusMinus: 6.1,
      biggestMoment:
        "Banchero posted the defining clutch moment of Orlando's season in a February overtime thriller against Boston, catching a lob at the right block, absorbing contact from Jaylen Brown, and converting the and-one with his left hand — a play that showcased the physical evolution that has turned him into the East's most underrated late-game power forward.",
      trend: "up",
    },
    {
      rank: 13,
      player: "LeBron James",
      team: "LAL",
      clutchRating: 81,
      clutchPts: 6.6,
      clutchFgPct: 48.2,
      clutchFtPct: 78.9,
      gameWinners: 3,
      clutchPlusMinus: 4.7,
      biggestMoment:
        "At 41 years old, LeBron conjured one final classic clutch sequence against Golden State in March — a spinning left-handed layup through traffic, a late-possession hockey assist that manufactured a Reaves three, and a defensive deflection to seal the game — three acts in three minutes that confirmed his late-game intelligence remains uncommon regardless of the mileage.",
      trend: "stable",
    },
    {
      rank: 14,
      player: "Tyrese Haliburton",
      team: "IND",
      clutchRating: 79,
      clutchPts: 5.8,
      clutchFgPct: 43.1,
      clutchFtPct: 88.6,
      gameWinners: 3,
      clutchPlusMinus: 5.5,
      biggestMoment:
        "Haliburton's clutch orchestration in a close January win over Miami showcased his most underappreciated skill — with Indiana down two in the final 90 seconds, he ran the same DHO action three consecutive possessions, varying the read each time, generating two open looks and a drawn foul in a sequence that looked unremarkable until you watched it twice.",
      trend: "stable",
    },
    {
      rank: 15,
      player: "Devin Booker",
      team: "PHX",
      clutchRating: 77,
      clutchPts: 6.9,
      clutchFgPct: 41.7,
      clutchFtPct: 90.2,
      gameWinners: 2,
      clutchPlusMinus: 3.1,
      biggestMoment:
        "Booker went for 16 clutch-minute points in a spectacular but ultimately losing effort against OKC in April, hitting four consecutive field goals in the final five minutes in what felt like a one-man attempt to outrun the Thunder's roster depth — a performance that was individually flawless and organizationally insufficient, which is the specific heartbreak of Phoenix's current chapter.",
      trend: "down",
    },
    {
      rank: 16,
      player: "Jaylen Brown",
      team: "BOS",
      clutchRating: 75,
      clutchPts: 5.9,
      clutchFgPct: 42.4,
      clutchFtPct: 85.1,
      gameWinners: 2,
      clutchPlusMinus: 2.8,
      biggestMoment:
        "Brown delivered a visceral clutch moment in Game 4 against New York, catching a skip pass in the corner and burying a three over Karl-Anthony Towns's contest with 58 seconds left to cut the deficit to two — the kind of cold-blooded spot-up look that makes him uniquely valuable alongside a primary creator who collapses defenses.",
      trend: "stable",
    },
    {
      rank: 17,
      player: "Cade Cunningham",
      team: "DET",
      clutchRating: 73,
      clutchPts: 5.7,
      clutchFgPct: 41.2,
      clutchFtPct: 83.7,
      gameWinners: 2,
      clutchPlusMinus: 1.9,
      biggestMoment:
        "Cunningham had a quietly remarkable clutch stretch in Detroit's upset win over Milwaukee in March, manufacturing six points in the final 3:20 through pure shot creation — a step-back two over Brook Lopez and a pull-up three from the wing — the kind of sequence a rebuilding franchise screenshot and shows recruits when making the case for joining.",
      trend: "up",
    },
    {
      rank: 18,
      player: "Trae Young",
      team: "ATL",
      clutchRating: 70,
      clutchPts: 6.1,
      clutchFgPct: 38.9,
      clutchFtPct: 88.4,
      gameWinners: 2,
      clutchPlusMinus: -1.4,
      biggestMoment:
        "Young authored a 14-point clutch-minute explosion against Charlotte that meant nothing in the standings but everything as a personal statement — five-of-seven shooting, two free throws, one absurd floater from eight feet while falling out of bounds — the kind of performance that makes Atlanta fans equal parts exhilarated and exhausted by the same player.",
      trend: "stable",
    },
    {
      rank: 19,
      player: "Zion Williamson",
      team: "NOP",
      clutchRating: 67,
      clutchPts: 5.3,
      clutchFgPct: 49.1,
      clutchFtPct: 68.2,
      gameWinners: 1,
      clutchPlusMinus: -2.6,
      biggestMoment:
        "When Zion attacks the paint in clutch situations — as he did against Sacramento in February, drawing three fouls in the final four minutes — the efficiency is self-evident. The problem is the free throw line, where his 68.2% rate in clutch minutes costs New Orleans one to two points per late-game possession, making opponents increasingly comfortable sending him there.",
      trend: "down",
    },
    {
      rank: 20,
      player: "Russell Westbrook",
      team: "LAC",
      clutchRating: 61,
      clutchPts: 4.8,
      clutchFgPct: 34.7,
      clutchFtPct: 80.3,
      gameWinners: 1,
      clutchPlusMinus: -5.8,
      biggestMoment:
        "Westbrook did Westbrook things in a January loss to Phoenix — driving baseline in the final minute for a spectacular circus layup that banked in off the glass and had the bench celebrating, followed immediately by a full-court turnover that ended the possession in the other team's favor. Both plays happened in 9.4 seconds. Both were peak Westbrook.",
      trend: "down",
    },
  ],
  clutchKing: {
    player: "Shai Gilgeous-Alexander",
    team: "OKC",
    description:
      "SGA claims the Clutch King title this week not by a narrow margin but by a structural one — his 98 clutch rating reflects the rare combination of volume, efficiency, and ice that separates true closers from players who simply perform well in proximity to the buzzer. His 9.4 clutch points per game lead the top 20, his 96.1% clutch free throw rate is the league's highest in late-game situations, and his eight game-winners this season are two more than any player in the rankings. What makes SGA's clutch profile historically significant is the absence of panic in his decision tree — he has not forced a game-winning attempt when the math did not support it, which means every late-game possession Oklahoma City runs through him carries a positive expected value the defense has no reliable counter to.",
  },
  worstInClutch: {
    player: "Russell Westbrook",
    team: "LAC",
    description:
      "Westbrook's -5.8 clutch plus-minus and 34.7% clutch field goal percentage tell a story his highlights generously omit — for every spectacular baseline finish that sends a bench unit into orbit, there exists a corresponding turnover, an ill-advised step-back three, or a full-speed drive into a defense that has had twelve years to study his tendencies and three timeouts to prepare for exactly this possession. To his credit, Westbrook remains the only player in these rankings who can generate a standing ovation and a coaching staff migraine within the same eight-second window. Los Angeles keeps him in late-game lineups because his upside is real, his motor never quits, and nobody has figured out a more polite way to tell a future Hall of Famer that sometimes the correct clutch play is to hand the ball to someone else.",
  },
  weeklyHighlight:
    "The week's clutch narrative opened and closed around the San Antonio–Oklahoma City axis, which now defines the league's competitive ceiling the way the Warriors-Cavaliers rivalry once did. De'Aaron Fox's Game 7 masterpiece — 14 points in the final 4:42, capped by a pull-up three over two defenders with the shot clock bleeding — was the season's best individual clutch performance by a player not named Shai Gilgeous-Alexander, and it arrived on the league's biggest remaining stage. The counterpoint came quietly from Stephon Castle, whose back-to-back pull-up jumpers in Game 3 against Houston marked the moment San Antonio's coaching staff stopped managing him in late-game situations and started designing for him — a distinction that carries enormous implications for the franchise's next four seasons. Wembanyama's Finals block — the weak-side pin on Tatum's driving layup that ended Boston's last realistic possession — deserves its own paragraph in the season's clutch canon, because it was not a basketball play so much as a physics revision: the geometry of the contest suggested the ball was going in, and then it did not, because of a wingspan that has no useful precedent in the sport's history. Meanwhile, Damian Lillard's 34-foot February buzzer-beater in Chicago reminded a viewing audience that the league's most theatrical closer is still operating at full theatrical capacity, and Zion Williamson's ongoing negotiation with the free throw line continues to be the clutch subplot nobody has resolved — his 49.1% field goal rate inside the arc in clutch minutes is elite, and his 68.2% from the line is the specific inefficiency that prevents him from being a true franchise closer rather than a devastating weapon who becomes slightly less devastating when fouled intentionally in the fourth quarter.",
};