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
  generatedDate: "August 31, 2026",
  weekLabel: "Week of August 31–6, 2026",
  players: [
    {
      rank: 1,
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      clutchRating: 98,
      clutchPts: 9.4,
      clutchFgPct: 54.2,
      clutchFtPct: 96.1,
      gameWinners: 7,
      clutchPlusMinus: +14.3,
      biggestMoment:
        "With 11 seconds left and OKC down one against the Clippers in Game 4, SGA caught a screen at the elbow, pump-faked Kawhi's ghost out of the building, and drew the foul — then calmly drained both free throws without looking at the crowd. The arena didn't breathe until both shots were through.",
      trend: "up",
    },
    {
      rank: 2,
      player: "Victor Wembanyama",
      team: "SAS",
      clutchRating: 97,
      clutchPts: 8.8,
      clutchFgPct: 51.7,
      clutchFtPct: 88.4,
      gameWinners: 6,
      clutchPlusMinus: +13.1,
      biggestMoment:
        "Wembanyama's left-handed turnaround over two defenders with 4.3 seconds on the clock in Game 7 of the Western Conference Finals was the single most unguardable shot anyone has attempted in a deciding game since the modern era began. The ball was in the air for what felt like a geological epoch before splitting the net.",
      trend: "stable",
    },
    {
      rank: 3,
      player: "De'Aaron Fox",
      team: "SAS",
      clutchRating: 95,
      clutchPts: 8.1,
      clutchFgPct: 49.3,
      clutchFtPct: 91.8,
      gameWinners: 5,
      clutchPlusMinus: +11.7,
      biggestMoment:
        "Fox drove baseline in the Finals with 18 seconds remaining, absorbed contact from two Miami defenders, converted the layup, and pointed directly at Wembanyama before the whistle even blew — then made the free throw. It was a performance in three acts delivered in under two seconds.",
      trend: "stable",
    },
    {
      rank: 4,
      player: "Jalen Brunson",
      team: "NYK",
      clutchRating: 94,
      clutchPts: 9.1,
      clutchFgPct: 47.6,
      clutchFtPct: 94.2,
      gameWinners: 6,
      clutchPlusMinus: +10.4,
      biggestMoment:
        "Game 7, Eastern Conference Finals, Madison Square Garden. Brunson received the inbound with 6.1 seconds left and the Celtics defense already collapsing — he hesitated, then fired a pull-up mid-range over Jaylen Brown's outstretched hand that went in and out three times before finally deciding it wanted to be part of New York lore.",
      trend: "stable",
    },
    {
      rank: 5,
      player: "Donovan Mitchell",
      team: "CLE",
      clutchRating: 91,
      clutchPts: 8.6,
      clutchFgPct: 46.1,
      clutchFtPct: 89.7,
      gameWinners: 5,
      clutchPlusMinus: +8.9,
      biggestMoment:
        "Mitchell's step-back three over Paolo Banchero with 2.8 seconds remaining in a February elimination game was textbook Spida — weight balanced, no hesitation, arm fully extended like he'd already decided the outcome before the possession started. Cleveland needed that shot and he knew it.",
      trend: "up",
    },
    {
      rank: 6,
      player: "Anthony Edwards",
      team: "MIN",
      clutchRating: 89,
      clutchPts: 8.3,
      clutchFgPct: 44.8,
      clutchFtPct: 82.3,
      gameWinners: 4,
      clutchPlusMinus: +7.6,
      biggestMoment:
        "Edwards went coast-to-coast in 2.9 seconds off a Minnesota defensive rebound in overtime against Denver, absorbing Jokic's last-resort charge attempt and converting the and-one with a flex that registered on three separate Vine successor apps before the ball hit the floor.",
      trend: "stable",
    },
    {
      rank: 7,
      player: "LeBron James",
      team: "LAL",
      clutchRating: 88,
      clutchPts: 7.9,
      clutchFgPct: 48.2,
      clutchFtPct: 79.1,
      gameWinners: 4,
      clutchPlusMinus: +7.1,
      biggestMoment:
        "At 41 years old, LeBron posted up in the final minute against Phoenix, spun baseline on his third step, and dropped a soft hook over Kevin Durant that banked in softly off the glass — then jogged back on defense like he was running a light Tuesday practice. The Suns bench just stared.",
      trend: "up",
    },
    {
      rank: 8,
      player: "Kyrie Irving",
      team: "DAL",
      clutchRating: 87,
      clutchPts: 8.7,
      clutchFgPct: 50.4,
      clutchFtPct: 85.6,
      gameWinners: 4,
      clutchPlusMinus: +6.2,
      biggestMoment:
        "Irving's behind-the-back crossover in the final minute against Golden State left Steph Curry stumbling sideways before Kyrie rose for a floating mid-range that kissed the backboard and fell through. It was less basketball and more performance art with a scoreboard attached.",
      trend: "stable",
    },
    {
      rank: 9,
      player: "Nikola Jokic",
      team: "DEN",
      clutchRating: 86,
      clutchPts: 7.4,
      clutchFgPct: 52.1,
      clutchFtPct: 76.3,
      gameWinners: 3,
      clutchPlusMinus: +5.8,
      biggestMoment:
        "Jokic's no-look bounce pass through three defenders to find Aaron Gordon cutting baseline for a dunk with 38 seconds left — while being fouled — was not a shot, but it was absolutely a clutch play, the kind that reminds you the man processes basketball the way chess grandmasters process pawns.",
      trend: "down",
    },
    {
      rank: 10,
      player: "Stephen Curry",
      team: "GSW",
      clutchRating: 85,
      clutchPts: 8.2,
      clutchFgPct: 43.9,
      clutchFtPct: 92.4,
      gameWinners: 4,
      clutchPlusMinus: +4.9,
      biggestMoment:
        "Curry hit a 31-footer in the final minute against Sacramento — off two dribbles, no screen, with De'Aaron Fox six feet behind him — and turned away before it went in. It went in. The arena response registered on the Richter scale application his wife downloaded as a joke.",
      trend: "stable",
    },
    {
      rank: 11,
      player: "Jayson Tatum",
      team: "BOS",
      clutchRating: 83,
      clutchPts: 7.6,
      clutchFgPct: 41.2,
      clutchFtPct: 87.9,
      gameWinners: 3,
      clutchPlusMinus: +3.7,
      biggestMoment:
        "Tatum isolated against Karl-Anthony Towns in the final minute of Game 6 against New York, drove left, pulled up at the free throw line, and buried the go-ahead jumper with 14 seconds remaining — a sequence Boston had drawn up, Tatum had practiced ten thousand times, and Towns simply could not stop anyway.",
      trend: "down",
    },
    {
      rank: 12,
      player: "Darius Garland",
      team: "CLE",
      clutchRating: 81,
      clutchPts: 6.8,
      clutchFgPct: 45.3,
      clutchFtPct: 90.1,
      gameWinners: 3,
      clutchPlusMinus: +4.2,
      biggestMoment:
        "Garland's floater through contact over Bam Adebayo with 7 seconds left tied the game in February, and he hit the free throw to complete the three-point play with the calm of someone who had already seen how the night ended. Cleveland won in overtime and Garland had nine clutch points in the final three minutes alone.",
      trend: "up",
    },
    {
      rank: 13,
      player: "Desmond Bane",
      team: "MEM",
      clutchRating: 79,
      clutchPts: 6.4,
      clutchFgPct: 46.7,
      clutchFtPct: 88.3,
      gameWinners: 3,
      clutchPlusMinus: +3.1,
      biggestMoment:
        "Bane caught a skip pass in the corner against Milwaukee with 5 seconds on the shot clock, pump-faked to get Khris Middleton airborne, and drilled the three-pointer that gave Memphis a four-point lead with 1:12 remaining. It was the quietest needle-threading of any clutch moment this season.",
      trend: "up",
    },
    {
      rank: 14,
      player: "Paolo Banchero",
      team: "ORL",
      clutchRating: 77,
      clutchPts: 6.9,
      clutchFgPct: 43.1,
      clutchFtPct: 81.7,
      gameWinners: 2,
      clutchPlusMinus: +2.8,
      biggestMoment:
        "Banchero posted up in the right block with 22 seconds left against Indiana, dropped his shoulder once, then spun baseline and finished with his left hand before the Pacers' defense could rotate — a post move so clean it looked borrowed from a mid-90s instructional tape.",
      trend: "stable",
    },
    {
      rank: 15,
      player: "Tyrese Haliburton",
      team: "IND",
      clutchRating: 75,
      clutchPts: 5.9,
      clutchFgPct: 40.8,
      clutchFtPct: 86.6,
      gameWinners: 2,
      clutchPlusMinus: +1.9,
      biggestMoment:
        "Haliburton split two defenders with a hesitation dribble at halfcourt, pushed into the paint, and found Myles Turner cutting behind the defense for an alley-oop that sealed a three-point win over Milwaukee — a play where Haliburton made the right decision at exactly the moment most point guards collapse under the weight of taking the shot themselves.",
      trend: "stable",
    },
    {
      rank: 16,
      player: "Alperen Sengun",
      team: "HOU",
      clutchRating: 73,
      clutchPts: 5.6,
      clutchFgPct: 50.9,
      clutchFtPct: 72.4,
      gameWinners: 2,
      clutchPlusMinus: +1.4,
      biggestMoment:
        "Sengun caught a lob in the paint with 34 seconds left against Golden State, absorbed a foul from Draymond Green, and made both free throws with 72.4% clutch free throw efficiency threatening to cost him dearly — but didn't this time. His post footwork in those final possessions was the best thing happening in that building.",
      trend: "stable",
    },
    {
      rank: 17,
      player: "Ja Morant",
      team: "MEM",
      clutchRating: 71,
      clutchPts: 6.1,
      clutchFgPct: 38.7,
      clutchFtPct: 78.2,
      gameWinners: 2,
      clutchPlusMinus: -0.6,
      biggestMoment:
        "Morant's pull-up three over Darius Garland with 9 seconds left against Cleveland barely cleared the front of the rim but splashed through to give Memphis a two-point lead — a shot that had no business going in but somehow found the net anyway, as if the basketball had decided to protect its own reputation.",
      trend: "down",
    },
    {
      rank: 18,
      player: "Evan Mobley",
      team: "CLE",
      clutchRating: 68,
      clutchPts: 4.8,
      clutchFgPct: 47.2,
      clutchFtPct: 69.8,
      gameWinners: 1,
      clutchPlusMinus: +0.9,
      biggestMoment:
        "Mobley's block on a Giannis Antetokounmpo fastbreak dunk attempt with 1:44 remaining and Cleveland up one was the kind of defensive play that never shows up in clutch scoring metrics but absolutely determined the outcome — he met Giannis at the rim, rejected the attempt cleanly, and Cleveland's bench erupted before the ball cleared the paint.",
      trend: "stable",
    },
    {
      rank: 19,
      player: "Franz Wagner",
      team: "ORL",
      clutchRating: 66,
      clutchPts: 5.2,
      clutchFgPct: 39.4,
      clutchFtPct: 83.1,
      gameWinners: 1,
      clutchPlusMinus: -1.3,
      biggestMoment:
        "Wagner's driving layup with 28 seconds left against Chicago gave Orlando a one-point lead and held up — a straightforward play made valuable entirely by the moment it occupied, with Wagner showing the composure to attack rather than settle when the defense was daring him to shoot a three.",
      trend: "up",
    },
    {
      rank: 20,
      player: "Trae Young",
      team: "ATL",
      clutchRating: 58,
      clutchPts: 6.7,
      clutchFgPct: 33.1,
      clutchFtPct: 91.3,
      gameWinners: 1,
      clutchPlusMinus: -5.8,
      biggestMoment:
        "Young hit a stepback three against Charlotte to give Atlanta a three-point lead with 2:10 remaining — then watched the Hawks surrender six unanswered points in the final 90 seconds as he failed to create anything on three consecutive possessions. The shot was elite. Everything that followed was not.",
      trend: "down",
    },
  ],
  clutchKing: {
    player: "Shai Gilgeous-Alexander",
    team: "OKC",
    description:
      "Shai Gilgeous-Alexander did not flinch once this season when the lights were brightest, and the final statistical accounting confirms what every defense that tried to guard him already knew: there is no late-game scenario he has not prepared for. His 54.2% clutch field goal percentage is the best among the top-10 volume scorers in clutch situations, and his 96.1% clutch free throw rate is essentially a mathematical argument against fouling him. Seven game-winners across the season is the headline number, but the more telling figure is his +14.3 clutch plus-minus — OKC simply does not lose when the game gets tight and SGA is operating. He is the most complete late-game player in the league right now, combining creation, shot-making, free throw excellence, and composure into a package that feels less like a basketball player in crunch time and more like a closing argument.",
  },
  worstInClutch: {
    player: "Trae Young",
    team: "ATL",
    description:
      "Trae Young's clutch résumé this season reads like a tale of two possessions: the first one, where he conjures a genuinely spectacular stepback three that has no right to go in, and every possession after that, where things become somewhat less spectacular. His -5.8 clutch plus-minus is the worst among players who appear in this ranking — which, to be fair, still gets him onto the list, so at least there's that. Atlanta has lost six games this season in which Trae had the ball with under a minute remaining and a chance to either tie or take the lead, which is not entirely his fault but is at least partly a statistic that exists. He shoots 91.3% from the free throw line in clutch moments, which is outstanding, and 33.1% from the field, which is less outstanding. The gap between those two numbers is essentially the Trae Young clutch experience in numerical form.",
  },
  weeklyHighlight:
    "The week of August 31 technically falls in the dead period — no live games, no clutch moments being manufactured in real time — but the season's clutch narrative has already been written, and it belongs to Shai Gilgeous-Alexander and the Oklahoma City Thunder in a way that no other player-team combination can honestly dispute. SGA's seven game-winners across the 2025-26 season were not all created equal: the Game 4 free throws against the Clippers were execution under pressure, the pull-up three against Dallas in February was creation under pressure, and the mid-range fadeaway that closed out Memphis in the second round was something closer to inevitability under pressure. Jalen Brunson's Game 7 pull-up against Boston remains the single most emotionally charged clutch moment the East produced all season — Madison Square Garden has hosted louder moments, but none where the weight of a franchise and a city were balanced so precisely on a single mid-range jumper. Victor Wembanyama's left-handed turnaround in the Western Conference Finals deserves its own category entirely, because calling it a clutch shot implies that other human beings could replicate the attempt and simply choose not to, which is not accurate. The season's clutch undercard belonged to Donovan Mitchell and Desmond Bane, both of whom demonstrated quiet, repeatable late-game excellence that never generated the cultural moment that SGA or Brunson earned but absolutely shaped playoff series outcomes. And then there is Trae Young, who continues to be the most confounding late-game player in the sport — capable of the perfect shot in the worst moment, followed immediately by the worst shot in a moment that needed perfection.",
};