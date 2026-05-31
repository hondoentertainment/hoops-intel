// Podcast Companion — Daily Episode Blueprint
// Last updated: May 31, 2026
// Generated from today's Hoops Intel edition

export interface TalkingPoint {
  topic: string;
  segment: "opener" | "deep-dive" | "hot-take" | "rapid-fire" | "closer";
  duration: string;
  keyStats: string[];
  debateAngle: string;
  suggestedQuote: string;
  relevantPlayers: string[];
}

export interface PodcastCompanionData {
  date: string;
  episodeTitle: string;
  rundown: TalkingPoint[];
  coldOpen: string;
  socialClip: string;
  tweetThread: string[];
}

export const podcastCompanion: PodcastCompanionData = {
  date: "May 31, 2026",

  episodeTitle:
    "One Win Away: Wembanyama Owns Paycom Center and the Spurs Are Knocking on the Finals Door",

  coldOpen:
    "Let me paint the picture for you. Paycom Center. Oklahoma City. Fifty-thousand-something Thunder fans doing everything they can to save their season. SGA on the floor. Jalen Williams back from injury. The most important game this franchise has played in years. And Victor Wembanyama — twenty-two years old — walked in, posted twenty-nine points, fifteen rebounds, four blocks, a plus-eighteen, and walked out with a 3-2 series lead. The Spurs are one win from the NBA Finals. OKC is one loss from going home. And the best player on the floor was not even close to breaking a sweat. It is May 31st, this is Hoops Intel, and the Western Conference Finals just got very, very real.",

  socialClip:
    "Best clip of the night: Stephon Castle draining his third consecutive three-pointer in the third quarter at Paycom Center — a hostile road environment — as the Spurs blow the game open and the OKC crowd goes silent. Cut to Pop on the sideline, not even reacting, because he expected it. Pair the clip with the stat: Castle, 22 points, plus-15, three triples, in what might have been the series-defining burst of the 2026 WCF. Caption it: 'Pop knew.' This one is built for short-form. Post it everywhere.",

  rundown: [
    {
      topic:
        "Spurs Win Game 5 on the Road — Wembanyama Posts 29/15/4 BLK and San Antonio Takes a 3-2 WCF Lead",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "Victor Wembanyama: 29 PTS, 15 REB, 4 BLK, +18 in a road Game 5",
        "Final score: SAS 111, OKC 103 — more comfortable than it sounds",
        "Spurs bench outscored OKC reserves by 14 points",
        "De'Aaron Fox: 22 PTS, 7 AST while managing three third-quarter fouls",
        "Stephon Castle: 22 PTS, 3 three-pointers, +15 in the deciding third quarter",
        "San Antonio now one win from the NBA Finals; OKC faces elimination in Game 6",
      ],
      debateAngle:
        "Is this already the most dominant individual playoff performance by a big man since the peak Shaquille O'Neal years in the early 2000s? Wembanyama is doing this on the road, against a sixty-four-win team, at twenty-two years old. At what point do we stop contextualizing it and just call it the best thing we have ever seen from a player at this age in the postseason?",
      suggestedQuote:
        "The Thunder had every advantage the building could give them — loud crowd, desperation energy, SGA going full SGA — and Wembanyama just turned all of it into background noise. That is not supposed to be possible for a twenty-two-year-old on the road in an elimination-stakes playoff game. And yet here we are.",
      relevantPlayers: [
        "Victor Wembanyama",
        "Shai Gilgeous-Alexander",
        "De'Aaron Fox",
        "Stephon Castle",
        "Jalen Williams",
      ],
    },
    {
      topic:
        "The Wembanyama Blueprint: How San Antonio's Two-Way Anchor Has Dismantled OKC's Entire Offensive System Across Five Games",
      segment: "deep-dive",
      duration: "10 minutes",
      keyStats: [
        "Wembanyama WCF averages: 30.2 PPG, 15.4 RPG, 3.8 BPG across 5 games",
        "Double-digit blocks across three consecutive WCF games — no other player in the series has more than 2 in any single game",
        "Wembanyama's +18 in Game 5 is the best single-game plus/minus of the last two WCF contests",
        "OKC's halfcourt offense, which improved in Game 5's first half, collapsed after Spurs third-quarter adjustments",
        "San Antonio went 36-5 at home in the regular season — Frost Bank Center awaits in Game 6",
        "Pop's rotations resulted in a 14-point bench margin — appearing in every single Spurs win this series",
      ],
      debateAngle:
        "Pop is clearly running a system that was designed around Wembanyama's unique ability to erase two problems at once — interior scoring AND rim protection — which frees the entire defensive scheme to crowd OKC's perimeter. The real question is: can any team in the NBA Finals stop this, or has San Antonio already found the blueprint that wins a championship?",
      suggestedQuote:
        "Here is what Oklahoma City cannot solve: every time they try to take Wembanyama away on offense, they open a lane for Fox or Castle. Every time they try to protect those lanes, Wemby is pulling up from eighteen feet or sealing the block and scoring over whoever they throw at him. Pop built this team specifically so that the defense of Wembanyama is always the wrong answer — and OKC is learning that in the worst way possible.",
      relevantPlayers: [
        "Victor Wembanyama",
        "Gregg Popovich",
        "De'Aaron Fox",
        "Stephon Castle",
        "Chet Holmgren",
      ],
    },
    {
      topic:
        "Hot Take: Jalen Williams' Fourth-Quarter Disappearance Is the Reason OKC Is Going Home — This Series Was Over the Moment He Went Down in Round Two",
      segment: "hot-take",
      duration: "6 minutes",
      keyStats: [
        "Williams played 22 minutes in Game 5 but was essentially absent in the fourth quarter",
        "OKC won zero of the four games Williams missed with the hamstring strain",
        "Williams' first-half return gave OKC visible offensive relief — second half told a different story",
        "SGA: 31 PTS in Game 5, still a losing effort — he cannot carry this alone",
        "OKC's bench has been outscored by 14+ points per game in Spurs wins this series",
        "Williams' Game 6 availability is officially uncertain pending a Wednesday injury report",
      ],
      debateAngle:
        "The hot take is this: Oklahoma City's season ended the day Jalen Williams felt that hamstring pop, and everything since has been a slow-motion confirmation. SGA is one of the five best players in the world and he still cannot close out Wembanyama without a healthy number-two option. The Thunder are not losing because of a talent gap — they are losing because their second-best player is running on one leg. Is this a series OKC wins in seven with a healthy Williams, or was San Antonio always the better team?",
      suggestedQuote:
        "Jalen Williams looked genuinely good in the first half. He was moving, scoring, giving SGA the pick-and-roll partner he has been starving for. And then the fourth quarter started and Williams was basically a spectator. That is the hamstring talking. And if that hamstring talks the same way in Game 6, Oklahoma City is going to watch the Finals from their couch next to the rest of us.",
      relevantPlayers: [
        "Jalen Williams",
        "Shai Gilgeous-Alexander",
        "Victor Wembanyama",
        "De'Aaron Fox",
        "Chet Holmgren",
      ],
    },
    {
      topic:
        "Rapid Fire: Castle's Breakout, Fox's Foul Trouble, KAT's Plus/Minus, the 1999 Rematch, and the Knicks Just Watching the World Burn",
      segment: "rapid-fire",
      duration: "5 minutes",
      keyStats: [
        "Stephon Castle WCF stats: 16.8 PPG, 4.2 APG, 2.4 three-pointers per game across 5 games",
        "De'Aaron Fox: 22 PTS, 7 AST in Game 5 while picking up 3 fouls in the third quarter alone",
        "Karl-Anthony Towns cumulative ECF plus/minus: +64 — best team-impact number on either ECF roster",
        "Jalen Brunson ECF sweep average: 33.3 PPG, 8.8 APG — resting in New York right now",
        "New York last played on May 25 — the Knicks have been resting for six days while the WCF plays out",
        "A 2026 Knicks-Spurs Finals would be a rematch of the 1999 series, 27 years later",
      ],
      debateAngle:
        "Four rapid-fire debate sparks: One — is Stephon Castle already the most important second-year player in a conference finals since someone want to fight me on this? Two — does De'Aaron Fox's foul management in the second half of Game 5 prove he is a different player than the Fox who lost close games in Sacramento? Three — are the Knicks actually getting better sitting at home watching film while their Finals opponent exhausts itself? Four — does the 1999 Knicks-Spurs rematch narrative actually matter for ratings or is it just something old people like us get excited about?",
      suggestedQuote:
        "Somewhere in New York, Jalen Brunson is watching Wembanyama post twenty-nine and fifteen on the road and circling plays on a tablet. The Knicks have been off for six days. They are rested, they are scouted, and they are watching their Finals opponent reveal every tendency in real time. That rest advantage is real and the NBA should be paying attention to it.",
      relevantPlayers: [
        "Stephon Castle",
        "De'Aaron Fox",
        "Karl-Anthony Towns",
        "Jalen Brunson",
        "Mikal Bridges",
      ],
    },
    {
      topic:
        "Looking Ahead: WCF Game 6, Thursday in San Antonio — Can OKC Stop the Spurs From Punching Their Finals Ticket?",
      segment: "closer",
      duration: "5 minutes",
      keyStats: [
        "Game 6: OKC @ SAS, Thursday June 5 — tip time TBD, NBC and Peacock",
        "Current spread: SAS -4.5, opened SAS -3.0 — moved on Williams injury signal",
        "Over/under: 212.5",
        "San Antonio went 36-5 at home in the 2025-26 regular season",
        "Pop has never lost a closeout home game in a conference finals in his coaching career",
        "Prediction: SAS 109, OKC 99 — Wembanyama closes the series with 30 points",
      ],
      debateAngle:
        "The closing question: Does Oklahoma City have any realistic path to winning two straight — one in San Antonio, one at home — against this Spurs team? What would it actually take? Williams has to be healthy enough to play full fourth-quarter minutes. SGA has to give them a 38-point performance on the road. OKC's three-point shooting has to recover from two consecutive cold nights. And they have to solve Wembanyama in a building where he has been even more dominant than on the road. The line moved from three to four and a half for a reason. We will see you Thursday night.",
      suggestedQuote:
        "Pop has never lost a closeout home game in a conference finals. Let that sit with you. He has been in this exact position — one win from the Finals, crowd behind him, best player on the floor — and he has closed every single time. Thursday night in San Antonio might be the most inevitable game of the 2026 playoffs. Or SGA does something we have never seen before and we all get a Game 7. Either way, do not miss it.",
      relevantPlayers: [
        "Victor Wembanyama",
        "Shai Gilgeous-Alexander",
        "Jalen Williams",
        "Gregg Popovich",
        "Stephon Castle",
        "De'Aaron Fox",
      ],
    },
  ],

  tweetThread: [
    "🎙️ NEW EPISODE — Hoops Intel Daily | May 31, 2026\n\n'One Win Away: Wembanyama Owns Paycom Center and the Spurs Are Knocking on the Finals Door'\n\nVictor Wembanyama. 29 PTS. 15 REB. 4 BLK. +18. On the road. In an elimination game. At 22 years old.\n\nThe Spurs lead 3-2. OKC is in serious trouble. Thread 👇",
    "The Wembanyama performance in Game 5 was the most complete two-way showing of the 2026 playoffs.\n\nHe controlled the tempo on both ends, neutralized OKC's transition offense, and gave Pop everything he needed when Fox went to the bench with foul trouble in the third quarter.\n\nHis WCF line: 30.2 PPG · 15.4 RPG · 3.8 BPG\n\nThere is no comparison right now.",
    "The hidden story of this series: depth.\n\nSAS bench outscored OKC reserves by 14 in Game 5. That margin has appeared in EVERY Spurs win.\n\nPop manufactured this advantage deliberately — Wembanyama forces opponents to overplay starters, which exhausts their rotation and opens the bench gap.\n\nThis is coaching. This is system. This is beautiful.",
    "Hot take on today's episode: Oklahoma City's season ended the day Jalen Williams felt that hamstring pop.\n\nHe played 22 minutes in Game 5. Was GONE in the fourth quarter. SGA put up 31 and it still was not enough.\n\nIf Williams cannot go full speed Thursday, the Thunder are watching the Finals from home.\n\nWednesday injury report is everything.",
    "Thursday. June 5. San Antonio. Frost Bank Center.\n\nPop has NEVER lost a closeout home game in a conference finals.\n\nSpurs are 36-5 at home. Line is SAS -4.5. Prediction: SAS 109, OKC 99.\n\nAnd if San Antonio closes — it is a 1999 Finals rematch. Knicks vs. Spurs. Brunson vs. Wembanyama. 27 years later.\n\nDo not sleep on Thursday night. 🔒🏆",
  ],
};
