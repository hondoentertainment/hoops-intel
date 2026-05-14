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

  episodeTitle: "The Beard Is Back: Harden's 30-Point OT Masterpiece and the Chaos of Elimination Friday",

  coldOpen:
    "Nine points down. Under four minutes left. On the road. Against a sixty-win team. Most nights, that's a wrap — you take the loss, you go home, you start packing. But James Harden? James Harden went to the free-throw line, and he just. kept. going. Eleven-of-fourteen. Three blocks. A six-assist OT performance that had all of us eating every single 'washed' take we ever made. Cleveland is one win from the Eastern Conference Finals, Detroit is staring down the barrel of elimination, and Friday night might be the most consequential evening of the entire 2026 playoffs. Two series. Two elimination games. Two Conference Finals berths decided in a single night. Strap in — this is Hoops Intel, and the NBA is doing what it always does: absolutely refusing to be boring.",

  rundown: [
    {
      topic: "Harden's Masterpiece: The Comeback, the OT, and What It All Means for Cleveland",
      segment: "opener",
      duration: "8 min",
      keyStats: [
        "Harden: 30 PTS, 8 REB, 6 AST, 3 BLK — playoff-best performance at age 36",
        "Harden went 11-of-14 from the line — the clutch free-throw barrage that swung the game",
        "Cleveland trailed by nine with under four minutes left in regulation",
        "CLE outscored DET 14-10 in overtime to seal the 117-113 final",
        "Max Strus: 6-of-8 from three (75%), 20 PTS — best long-range efficiency of the 2026 playoffs",
        "Evan Mobley: 19 PTS, 8 REB, 8 AST, 3 BLK — one assist shy of a playoff triple-double on the road",
      ],
      debateAngle:
        "Is this the single most important game in James Harden's post-Houston career — and does a championship run in Cleveland officially rewrite his playoff legacy? The 'disappears in big moments' narrative has followed him for a decade. Wednesday night in Detroit was the loudest possible rebuttal. But one game doesn't erase the history. Does it need to?",
      suggestedQuote:
        "At 36 years old, James Harden just walked into a 60-win team's building, down nine in the fourth quarter, and personally dragged Cleveland back from the ledge. If you still want to call him a playoff ghost after last night, you've got to ask yourself — what does it take? What does the man have to do?",
      relevantPlayers: [
        "James Harden",
        "Donovan Mitchell",
        "Evan Mobley",
        "Max Strus",
        "Jarrett Allen",
        "Cade Cunningham",
      ],
    },
    {
      topic: "Cade Cunningham and the Cruelty of Being Great on a Team That Isn't Enough",
      segment: "deep-dive",
      duration: "9 min",
      keyStats: [
        "Cunningham: 39 PTS, 7 REB, 9 AST, 6-of-10 from three in 48 minutes — best losing line of the 2026 playoffs",
        "Cunningham finished the game at -4 despite his historic stat line",
        "Detroit's supporting cast shot 22-of-57 around him",
        "Tobias Harris went 6-of-19 from the field",
        "Daniss Jenkins added 19 points but the Pistons managed just 10 in overtime",
        "Detroit has not won a road game since Game 2 of the first-round series vs. Orlando",
      ],
      debateAngle:
        "Cade Cunningham did everything a franchise player is supposed to do and his team still lost. Is this a Damian Lillard in Portland situation — a generational player trapped on a team that just isn't built to win? Or is Detroit's supporting cast good enough, and this is simply a one-game failure that doesn't define the roster? How long does a franchise give a player this gifted before the construction around him needs a total rethink?",
      suggestedQuote:
        "Thirty-nine points. Nine assists. Six threes. Forty-eight minutes. And they lost. I don't know what else Cade Cunningham is supposed to do. You can't manufacture a supporting cast in the middle of an overtime playoff game. Tobias Harris shot six-of-nineteen. That's not a Cade problem. That's a roster problem.",
      relevantPlayers: [
        "Cade Cunningham",
        "Tobias Harris",
        "Daniss Jenkins",
        "Ausar Thompson",
        "James Harden",
        "Donovan Mitchell",
      ],
    },
    {
      topic: "Hot Take: The Knicks Are Secretly the Most Dangerous Team Left in the East",
      segment: "hot-take",
      duration: "6 min",
      keyStats: [
        "Knicks swept Philadelphia — most dominant sweep of the 2026 playoffs",
        "Jalen Brunson averaging 27.8 PPG and 6.3 APG across the postseason",
        "NYK fully rested with extended preparation time for the East Finals",
        "Cleveland playing on short rest after a grueling 48-minute OT road game",
        "OG Anunoby questionable — Knicks won the sweep without him, meaning his return is a net add",
        "CLE went 2-0 at home in the series vs. DET — but Brunson has the experience of deep playoff runs",
      ],
      debateAngle:
        "Everyone's focused on Harden's comeback and Wembanyama's greatness, but the most dangerous team in the East right now is the team nobody's talking about. New York swept Philadelphia without OG Anunoby, Brunson is healthy, and the Knicks are sitting on a couch watching Cleveland and Detroit beat each other up in overtime. Fresh legs in a Conference Finals series is a legitimate, underrated advantage. Fight us.",
      suggestedQuote:
        "While Cleveland is grinding through overtime road games and Detroit is living on Cade Cunningham's back, the Knicks are resting. Fully rested. OG Anunoby might actually come back for the East Finals. Brunson has done this before. I'm not saying New York wins — I'm saying the basketball world is sleeping on them right now, and that's exactly how they like it.",
      relevantPlayers: [
        "Jalen Brunson",
        "OG Anunoby",
        "James Harden",
        "Donovan Mitchell",
        "Evan Mobley",
        "Cade Cunningham",
      ],
    },
    {
      topic: "Rapid Fire: Elimination Friday Preview, Wembanyama's Redemption, OKC's Patience, and the Injury Watch",
      segment: "rapid-fire",
      duration: "5 min",
      keyStats: [
        "SAS leads MIN 3-2 — Wembanyama posted 27 PTS, 17 REB, 3 BLK in Game 5 rout",
        "Anthony Edwards had a quiet 20-point Game 5 but is Probable for Game 6 despite hyperextended knee",
        "Donte DiVincenzo is OUT for the remainder of Minnesota's postseason — torn right Achilles",
        "OKC is a perfect 8-0, having swept both PHX and LAL — fully rested for the West Finals",
        "Luka Doncic's season is over (hamstring), eliminating LAL's wildcard factor",
        "Dylan Harper posted a 12-PTS, 10-REB double-double in SAS's Game 5 rout as a rookie",
      ],
      debateAngle:
        "Can Anthony Edwards deliver a 40-point legacy game to force a Game 7, or is Wembanyama simply too dominant right now for a banged-up, DiVincenzo-less Wolves team to handle? And on the other side — is Oklahoma City's rest advantage over both SAS and MIN so significant that whoever comes out of that series is already at a deficit before tip-off of the West Finals?",
      suggestedQuote:
        "Friday night is everything. Detroit needs a road win they haven't been able to get. Minnesota needs the performance of Anthony Edwards's life. Wembanyama is on a freight train. Oklahoma City hasn't played in what feels like two weeks. The Conference Finals could be completely set by Friday at midnight. Tell me another sport that does this.",
      relevantPlayers: [
        "Victor Wembanyama",
        "Anthony Edwards",
        "Dylan Harper",
        "Shai Gilgeous-Alexander",
        "Donte DiVincenzo",
        "Luka Doncic",
      ],
    },
    {
      topic: "Looking Ahead: What a Dream Conference Finals Weekend Looks Like and Who's Holding the Trophy in June",
      segment: "closer",
      duration: "5 min",
      keyStats: [
        "OKC -170 Finals favorites entering Thursday per latest odds update",
        "SAS +340 — best odds among non-OKC remaining teams",
        "NYK shortened after PHI sweep, seen as legitimate contender",
        "If both higher seeds close out Friday: OKC-SAS West Finals, NYK-CLE East Finals",
        "Ajay Mitchell averaging 20.5 PPG off bench in OKC's 8-0 run — historic bench production",
        "CLE is 2-0 at home vs. DET with double-digit wins in Games 3 and 4",
      ],
      debateAngle:
        "If it's OKC versus SAS in the West, we get Shai Gilgeous-Alexander against Victor Wembanyama — the two best players in the league playing for the right to go to the Finals. That's the series the NBA deserves. But is the dream scenario also the one that ends with an OKC championship so inevitable it takes the drama out of June? Or does Wembanyama's ceiling make San Antonio the one team that can actually push back?",
      suggestedQuote:
        "Imagine waking up Saturday morning and the bracket is set: Thunder versus Spurs in the West, Knicks versus Cavaliers in the East. SGA against Wemby. Brunson against Harden or Cunningham. That's the best possible outcome for the sport. Friday night could deliver exactly that. Don't you dare make other plans.",
      relevantPlayers: [
        "Shai Gilgeous-Alexander",
        "Victor Wembanyama",
        "Jalen Brunson",
        "James Harden",
        "Donovan Mitchell",
        "Ajay Mitchell",
      ],
    },
  ],

  socialClip:
    "CLIP DESCRIPTION — 'The Comeback Sequence' (approx. 90 seconds): Begin with the host reading Harden's final stat line cold — no intro, no context, just '30 points. 8 rebounds. 6 assists. 3 blocks. Eleven-of-fourteen from the line. Thirty-six years old.' Then cut to the debate angle: 'Cleveland was down nine with four minutes left. On the road. Against the one-seed. And James Harden just refused.' Close with the Cade contrast — 'Cunningham scored 39 and still lost. The NBA is genuinely unhinged right now and I would not have it any other way.' Ideal for Instagram Reels, TikTok, and YouTube Shorts. Thumbnail: split-screen of Harden at the line vs. Cunningham's dejected bench reaction. Caption: 'The Beard silenced every doubter. 🔥 #HoopsIntel #NBAPlayoffs'",

  tweetThread: [
    "🎙️ NEW EPISODE — Hoops Intel Vol. 2026 · No. 141\n\n'The Beard Is Back: Harden's 30-Point OT Masterpiece and the Chaos of Elimination Friday'\n\nCleveland is ONE WIN from the East Finals. Friday is going to be chaos. Let's go. 🧵",

    "James Harden at 36 years old:\n\n30 PTS · 8 REB · 6 AST · 3 BLK\n11-of-14 from the line\nCleveland down 9 with under 4 minutes left\n\nHe went to the free-throw line and just WILLED them back.\n\nThe playoff ghost narrative is done. We're retiring it. [2/5]",

    "Cade Cunningham scored 39 points, dished 9 assists, hit 6 threes, played 48 minutes.\n\nAnd lost.\n\nTobias Harris: 6-of-19.\nDetroit's supporting cast: 22-of-57.\n\nYou can't win an overtime playoff game if only one guy shows up. This is a roster problem, not a Cade problem. [3/5]",

    "ELIMINATION FRIDAY is here:\n\n🏀 DET @ CLE — 1-seed needs a road win (hasn't happened this series)\n🏀 SAS @ MIN — Wemby going for the close-out, Edwards fighting for his playoff life\n\nBoth Conference Finals berths decided Friday night.\n\nDon't make other plans. [4/5]",

    "The dream scenario:\n\n⚡ OKC vs. SAS — West Finals (SGA vs. Wembanyama)\n🗽 NYK vs. CLE — East Finals (Brunson vs. Harden/Mitchell)\n\nFriday night could deliver exactly that bracket.\n\nFull breakdown on today's episode 🎧 → hoopsintel.net\n\n#NBAPlayoffs #HoopsIntel [5/5]",
  ],
};
