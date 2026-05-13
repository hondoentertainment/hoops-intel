// Podcast Companion — Daily Episode Blueprint
// Last updated: May 14, 2026
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
  date: "May 14, 2026",

  episodeTitle: "Wemby Answered. Loudly. | Hoops Intel Ep. 140",

  coldOpen:
    "Forty-eight hours ago we were asking whether a 21-year-old had the composure to handle adversity on the biggest stage of his career. Last night, Victor Wembanyama walked into the Frost Bank Center and gave us the most complete individual performance of the 2026 playoffs — 27 points, 17 rebounds, 5 assists, 3 blocks, and not a single technical foul. The Spurs won by 29. Ant was quiet. Minnesota is desperate. And tonight, Cunningham and Mitchell meet in a Game 5 that could flip the entire East bracket. Let's get into it — this is Hoops Intel, Vol. 2026, No. 140.",

  rundown: [
    {
      topic: "Wembanyama's Redemption Game — The Most Complete Performance of the 2026 Playoffs",
      segment: "opener",
      duration: "8 min",
      keyStats: [
        "27 PTS on 9-of-16 FG (56.3%)",
        "17 REB — 15 defensive",
        "5 AST · 3 BLK · 0 technical fouls",
        "+24 plus-minus in a 29-point blowout",
        "8 Spurs players scored in double figures",
        "Keldon Johnson: 21 PTS on 8-of-11 off the bench"
      ],
      debateAngle:
        "Is the 'maturity question' surrounding Wembanyama officially dead after this performance — or does one composure game not erase the legitimate concern his Game 4 ejection raised about handling playoff pressure?",
      suggestedQuote:
        "We spent 48 hours psychoanalyzing a 21-year-old's composure and he responded with the most dominant, controlled, complete game of this entire playoff season. The kid didn't flinch. He didn't jaw back. He just played 40 minutes of perfect basketball. SEVENTEEN rebounds. He had more boards than four Minnesota players combined. I feel appropriately humbled. — Bill Simmons, The Ringer",
      relevantPlayers: [
        "Victor Wembanyama",
        "Keldon Johnson",
        "Stephon Castle",
        "Dylan Harper",
        "De'Aaron Fox"
      ]
    },
    {
      topic: "The Spurs Depth Machine — How San Antonio Suffocated Minnesota's Star-Driven Offense",
      segment: "deep-dive",
      duration: "10 min",
      keyStats: [
        "8 Spurs players in double figures — a 2026 playoff record",
        "Stephon Castle: 17 PTS · 6 AST · 8-of-11 FG",
        "Dylan Harper: 12 PTS · 10 REB double-double (+13)",
        "De'Aaron Fox: 18 PTS · 5 AST · +24",
        "Keldon Johnson: 21 PTS off bench on 8-of-11",
        "Julius Randle: -22 on 17 PTS and 10 REB for MIN"
      ],
      debateAngle:
        "Minnesota can conceivably match Wembanyama with Anthony Edwards on a great night — but can any team in the West actually replicate the Spurs' bench depth? Is San Antonio's roster construction the true competitive advantage over OKC, or does SGA's ceiling make that irrelevant in the West Finals?",
      suggestedQuote:
        "Minnesota can match the Spurs' stars. They simply cannot match the Spurs' roster. Eight players in double figures is not a fluke — it's a system. And that system right now is the deepest unit in the NBA playoffs. — Shams Charania, The Athletic",
      relevantPlayers: [
        "Victor Wembanyama",
        "Stephon Castle",
        "Dylan Harper",
        "Keldon Johnson",
        "De'Aaron Fox",
        "Anthony Edwards",
        "Julius Randle"
      ]
    },
    {
      topic: "HOT TAKE: Anthony Edwards Is Not Winning This Series — And Minnesota Shouldn't Come Back If He Plays Like This",
      segment: "hot-take",
      duration: "6 min",
      keyStats: [
        "Edwards: 20 PTS on 6-of-13 FG in a 29-point blowout",
        "Anthony Edwards averaging 6-of-13 in Game 5 — quietest outing of the series",
        "Edwards playing through hyperextended left knee — Game 6 status TBD",
        "Donte DiVincenzo out for postseason with torn right Achilles",
        "Minnesota must win two straight — at least one in San Antonio",
        "Randle: -22 on a 17/10 night — the supporting cast is crumbling"
      ],
      debateAngle:
        "The hot take: Minnesota SHOULD NOT advance past a 3-2 deficit against this Spurs team if their best player can only give them 20 on 13 shots. Edwards has been elite in this series — Games 1 through 3 were monster performances — but a team that needs historic heroism from their star every single night to stay alive is not built to beat the Thunder in the West Finals. If Ant can't go nuclear in Game 6, this series is exactly where it should end.",
      suggestedQuote:
        "Anthony Edwards at 20 points on 13 shots is not the version of Ant that wins on the road against a 62-win team. Minnesota needed 35-point Edwards in Game 5. They got Role Player Edwards, and the margin was 29 points. The window is not closed — but it requires something historic from him in Game 6. — Sam Quinn, CBS Sports",
      relevantPlayers: [
        "Anthony Edwards",
        "Julius Randle",
        "Donte DiVincenzo",
        "Victor Wembanyama"
      ]
    },
    {
      topic: "Rapid Fire — Tonight's DET-CLE Game 5, Cunningham Must-Bounce-Back, Mitchell Momentum, Playoff Movers",
      segment: "rapid-fire",
      duration: "5 min",
      keyStats: [
        "DET-CLE series: tied 2-2 — winner holds 3-2 lead with path to East Finals",
        "Donovan Mitchell: 33.5 PPG in East Semis · record-tying 43-pt second half in Game 4",
        "Cade Cunningham: -23 in Game 4 · playing at home tonight where DET went 2-0 to start",
        "Evan Mobley: +30 and 5 blocks in Game 4 — best two-way game of the 2026 postseason",
        "James Harden: 24 PTS · 11 AST · 9-of-9 from the stripe in series-evening Game 4",
        "OKC: perfect 8-0 in 2026 playoffs · +12.1 net rating · resting for West Finals",
        "Rested Knicks await the DET-CLE winner in the East Finals",
        "This Date in History: LeBron dropped 48 on these same Pistons in Game 5 ECF, May 13, 2007"
      ],
      debateAngle:
        "Cunningham vs. Mitchell: whose performance tonight matters more for their franchise's long-term narrative — the 1-seed's star who needs to erase a -23 nightmare at home, or the perennial question mark who put up a series-defining 43 in Game 4 and needs to prove it wasn't a peak?",
      suggestedQuote:
        "Tonight's Game 5 between Detroit and Cleveland is the last true toss-up in the second round. On this date in 2007, LeBron scored 48 against these same Pistons in double overtime. The stage is set for somebody to write their own chapter tonight. — Jake Fischer, Bleacher Report",
      relevantPlayers: [
        "Cade Cunningham",
        "Donovan Mitchell",
        "Evan Mobley",
        "James Harden",
        "Shai Gilgeous-Alexander",
        "Jalen Brunson"
      ]
    },
    {
      topic: "Looking Ahead — West Finals Preview, Wemby vs. SGA, and What a Generational Showdown Would Mean for the NBA",
      segment: "closer",
      duration: "7 min",
      keyStats: [
        "OKC: 8-0 in 2026 playoffs · +12.1 net rating · SGA averaging 30.1 PPG · 6.5 APG · 6.2 RPG",
        "SAS: 7-3 in playoffs at +8.4 net rating · can clinch Game 6 at Target Center",
        "Pulse Index: SGA 98.5 · Wembanyama 96.9 — the two highest-rated players in the West",
        "Stephon Castle: 80.5 Pulse Index, trending up — the emerging third star SAS needs in a West Finals",
        "OG Anunoby: Questionable for Knicks in East Finals — missed entire PHI sweep",
        "Luka Doncic: Out for season with hamstring — Lakers swept by OKC in West Semis",
        "Wembanyama is 21 years old — SGA is 27 — a West Finals matchup would be the most anticipated conference final in a generation"
      ],
      debateAngle:
        "If San Antonio closes this series in Game 6 and faces OKC in the West Finals, is this the most important series for the NBA's future in the last decade? Wembanyama vs. SGA — the incumbent two-time MVP versus the alien who might eventually take the throne — is the kind of generational collision the league has been building toward. And the question we have to ask: does OKC's perfect 8-0 record mean the Spurs depth doesn't matter, or is San Antonio actually built differently enough to be the first team to slow the Thunder?",
      suggestedQuote:
        "If the Spurs close this in Game 6, they'll face an OKC team that's 8-0 with a +12.1 net rating. That West Finals matchup — Wembanyama versus SGA — would be the most anticipated conference final in a generation. I'm not sure we've had a series with this much historical weight since Shaq and Kobe faced Duncan in 2003. — John Schuhmann, NBA.com",
      relevantPlayers: [
        "Victor Wembanyama",
        "Shai Gilgeous-Alexander",
        "Stephon Castle",
        "Ajay Mitchell",
        "Jalen Brunson",
        "OG Anunoby"
      ]
    }
  ],

  socialClip:
    "CLIP BRIEF — 'Wemby Grew Up On National Television' (Target length: 60–90 seconds for Instagram Reels / TikTok / X). Open on the graphic: 27 PTS · 17 REB · 5 AST · 3 BLK. Host reads the Tim Bontemps ESPN quote verbatim: 'Two days ago the biggest question in the NBA was whether Wembanyama had the composure to handle adversity. Tonight he answered with 27 points, 17 rebounds, and 3 blocks without a single complaint. He didn't just play well — he grew up in front of us.' Cut to the Bill Simmons kicker: 'SEVENTEEN rebounds. He had more boards than four Minnesota players combined. I feel appropriately humbled.' Close with the episode title card and tonight's DET-CLE Game 5 tease. This clip captures the dominant emotional arc of the episode — the vindication story — and the Simmons quote gives it a shareable, self-aware ending that will clip well across all platforms.",

  tweetThread: [
    "🎙️ HOOPS INTEL EP. 140 IS LIVE — 'Wemby Answered. Loudly.' Victor Wembanyama delivered 27 PTS, 17 REB, 5 AST, and 3 BLK in the most complete individual performance of the 2026 playoffs. Spurs lead 3-2. Full breakdown below. 🧵⬇️",

    "1/ We spent 48 hours asking if a 21-year-old had the composure to handle adversity. He responded with the best game of the playoff season — controlled, dominant, zero technicals, +24 in a 29-point win. The maturity question? Answered. Loudly. #Spurs #Wembanyama",

    "2/ The real story is the DEPTH. Eight Spurs in double figures. Keldon Johnson: 21 off the bench on 8-of-11. Stephon Castle: 17 PTS, 6 AST, 8-of-11. Dylan Harper: 12/10 double-double. De'Aaron Fox: 18 and 5 at +24. Minnesota can't match that roster. Nobody in the West can. #SAS",

    "3/ HOT TAKE OF THE DAY: Anthony Edwards at 20 points on 13 shots doesn't deserve to beat this Spurs team. Minnesota needs historic heroics in Game 6. The knee is a factor. DiVincenzo is gone. And Randle went -22 on a 17/10 night. The window is closing fast. #Timberwolves",

    "4/ TONIGHT: Cunningham vs. Mitchell, Game 5, 8 PM ET on ESPN. Series tied 2-2. Cade needs to erase a -23 nightmare. Mitchell needs to prove his record-tying 43-pt Game 4 was a turning point, not a peak. And yes — LeBron dropped 48 on these same Pistons on this exact date in 2007. Big stage. Somebody step up. #Pistons #Cavaliers",

    "5/ LOOKING AHEAD: If SAS closes in Game 6, Wembanyama vs. SGA in the West Finals is the most anticipated conference final in a generation. Two MVP-tier talents, generational stakes, and OKC is a perfect 8-0. That's the series the NBA has been building toward. Don't sleep. 🔗 Full episode at hoopsintel.net | #HoopsIntel #NBAPlayoffs"
  ]
};
