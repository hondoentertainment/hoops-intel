// Podcast Companion — Daily Episode Blueprint
// Last updated: May 13, 2026
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
  date: "May 13, 2026",

  episodeTitle: "History Half: Mitchell Ties the Record, OKC Goes Immortal, and Wemby's Night of Redemption Begins",

  coldOpen:
    "Thirty-nine points. One half. An NBA playoff record tied. Donovan Mitchell walked into Cleveland's most desperate moment last night and said — not tonight. Meanwhile in Los Angeles, Oklahoma City closed out the Lakers and stamped their passport to the Conference Finals at a perfect eight-and-oh. Two sweeps. Zero losses. No drama. And tonight? Victor Wembanyama walks back into Frost Bank Center carrying the weight of an ejection, a tied series, and the biggest game of his life. This is Hoops Intel. It is May 13th, 2026. Let's get into it.",

  socialClip:
    "The most shareable moment of the episode is the breakdown of Mitchell's 39-point second half — specifically the sequence where hosts walk through his shot-by-shot detonation after halftime: the first pull-up that signaled something was different, the free-throw line mastery at 13-of-15, and the moment Detroit simply stopped having answers. Clip the 90-second breakdown starting from the words 'He was quiet in the first half, and then the switch flipped' through the +30 Mobley context. Add the stat graphic: Mitchell 39 PTS in one half, NBA Playoff Record tied. This plays across Instagram Reels, TikTok, and X with maximum engagement.",

  rundown: [
    {
      topic: "Donovan Mitchell's Historic Half — 39 Points, a Record Tied, and a Season Saved",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "Mitchell finished with 43 PTS on 13-of-26 FG and 13-of-15 from the free-throw line",
        "39 second-half points ties the NBA postseason record",
        "Cleveland trailed at halftime and faced a potential 3-1 series hole before Mitchell detonated",
        "Evan Mobley posted 17 PTS · 8 REB · 5 BLK · 3 STL · +30 as the defensive anchor",
        "James Harden contributed 24 PTS and 11 AST going a perfect 9-for-9 from the stripe",
        "Cleveland's third quarter was 38-21 — that 17-point swing broke Detroit's will"
      ],
      debateAngle:
        "Is this the single greatest individual half in Cleveland Cavaliers postseason history — and where does it rank among the all-time playoff halves in NBA history? Does one transcendent half in a second-round game change how we evaluate Mitchell's place among this generation's elite playoff performers, or does he need to sustain this for a Finals run?",
      suggestedQuote:
        "Donovan Mitchell didn't just save Cleveland's season last night — he authored a chapter that will be on highlight reels for the next thirty years. Thirty-nine points after halftime. A record tied. A series that looked dead brought all the way back to even. That is what separating yourself from the field looks like in the NBA playoffs.",
      relevantPlayers: [
        "Donovan Mitchell",
        "Evan Mobley",
        "James Harden",
        "Cade Cunningham"
      ]
    },
    {
      topic: "OKC at 8-0 — Two Sweeps, Zero Losses, and the Making of a Dynasty",
      segment: "deep-dive",
      duration: "10 minutes",
      keyStats: [
        "Thunder are 8-0 in the 2026 playoffs — two sweeps, no game played past four",
        "SGA finished with 35 PTS · 8 AST · 6 REB · 12-of-15 from the free-throw line",
        "Ajay Mitchell — undrafted — scored 28 PTS on 12-of-19 FG with 4 steals off the bench",
        "Chet Holmgren's go-ahead dunk with 32.8 seconds remaining was the sweep-clinching dagger",
        "LeBron James posted 24 PTS · 12 REB in 40 minutes in what may be his final playoff game",
        "Austin Reaves scored 27 but committed 8 turnovers — a microcosm of the roster gap"
      ],
      debateAngle:
        "At 8-0 with two sweeps, is this Thunder team already the most dominant postseason run we've seen from a non-dynasty franchise in the modern era? And zoom out further — is OKC's player development operation, from SGA to Chet to an undrafted Ajay Mitchell averaging 20-plus off the bench, the single greatest front-office achievement in the NBA right now? What does it mean for LeBron that his Lakers were the team that got swept while his old team from 2007 is about to play the biggest game of the season tonight?",
      suggestedQuote:
        "Oklahoma City didn't just beat the Lakers last night. They made the gap between these two franchises official. Eight-and-oh. Two sweeps. An undrafted guard averaging twenty off the bench. A 23-year-old center with a clutch gene. And SGA running the whole operation like it's the most natural thing in the world. At what point do we stop calling this a run and start calling it a reign?",
      relevantPlayers: [
        "Shai Gilgeous-Alexander",
        "Chet Holmgren",
        "Ajay Mitchell",
        "LeBron James",
        "Austin Reaves"
      ]
    },
    {
      topic: "Hot Take — LeBron's Playoff Legacy Is Sealed, and the Torch Is Already Gone",
      segment: "hot-take",
      duration: "6 minutes",
      keyStats: [
        "LeBron played 40 minutes and posted 24 PTS · 12 REB in Game 4 at age 41",
        "The Lakers were swept by OKC without Luka Doncic due to hamstring strain",
        "OKC is 8-0 — they have not trailed in a series at any point this postseason",
        "The Thunder finished the regular season 64-18 — 11 games better than the Lakers",
        "Reaves had 27 PTS but 8 turnovers — the supporting cast could not match OKC's depth",
        "Bill Simmons on LeBron's Game 4 line: 'I genuinely don't know if we see him in the playoffs again'"
      ],
      debateAngle:
        "Here is the hot take: LeBron James's legacy does not need another postseason. He went out in a sweep at 41 years old with 24 and 12 in 40 minutes, which is both remarkable and irrelevant — because OKC is a different species and the Lakers were never going to compete in this series. The real debate is this: does the torch pass feel complete right now? Because SGA, Wembanyama, Edwards, and Mitchell are not waiting for LeBron's permission anymore. They have taken over the league. Is that a tragedy or just the natural order of things?",
      suggestedQuote:
        "Twenty-four and twelve. Forty minutes. Forty-one years old. In a sweep. Here's my take — LeBron James did everything a human being could do last night, and it still wasn't close enough to matter. That's not disrespect. That's the most honest tribute you can pay him. The next generation didn't just catch up. They already left.",
      relevantPlayers: [
        "LeBron James",
        "Shai Gilgeous-Alexander",
        "Victor Wembanyama",
        "Anthony Edwards",
        "Donovan Mitchell"
      ]
    },
    {
      topic: "Rapid Fire — Mobley's Monster Line, Brunson's Rest Advantage, Cunningham's Must-Respond Moment, and the Knicks Waiting Game",
      segment: "rapid-fire",
      duration: "5 minutes",
      keyStats: [
        "Mobley: 17 PTS · 8 REB · 5 BLK · 3 STL · +30 — the most complete two-way game of the second round",
        "Cade Cunningham posted a -23 in Game 4 despite averaging 25-plus PPG and 9-plus APG for the series",
        "Jalen Brunson averaged 27.8 PPG and 6.3 APG to lead the Knicks' sweep of Philadelphia",
        "OG Anunoby remains questionable for the East Finals with an undisclosed injury",
        "Harden went 9-of-9 from the free-throw line and 5-of-9 from three in his must-win vintage outing",
        "The East Finals matchup — Knicks versus either Detroit or Cleveland — begins after Game 5 in Detroit on Wednesday"
      ],
      debateAngle:
        "Four rapid-fire debates: One — Is Evan Mobley already the best two-way big man in the Eastern Conference? Two — Does Cade Cunningham's -23 in a must-win game make you genuinely nervous about Detroit's ceiling, or is one bad night noise? Three — Is Jalen Brunson's extended rest actually the Knicks' biggest competitive advantage heading into the East Finals? Four — If OG Anunoby misses the Conference Finals, is New York's championship window cracked?",
      suggestedQuote:
        "Evan Mobley went plus-thirty with five blocks and three steals and most people woke up this morning still talking about someone else. That's what happens when Donovan Mitchell ties a playoff record in the same game. But don't sleep on Mobley — he might be the reason Cleveland wins a championship before this is over.",
      relevantPlayers: [
        "Evan Mobley",
        "Cade Cunningham",
        "Jalen Brunson",
        "OG Anunoby",
        "James Harden"
      ]
    },
    {
      topic: "Looking Ahead — Wembanyama's Night of Redemption, Game 5 in San Antonio, and the West Finals Picture",
      segment: "closer",
      duration: "7 minutes",
      keyStats: [
        "Game 5: MIN at SAS, 8:00 PM ET on NBC and Peacock — series tied 2-2, winner takes commanding lead",
        "Wembanyama was ejected after just 12 minutes in Game 4 — San Antonio lost by five without him",
        "Edwards scored 36 in Game 4 on a hyperextended left knee without Donte DiVincenzo",
        "Dylan Harper erupted for 24 points on 8-of-11 shooting after Wembanyama's ejection in Game 4",
        "Vegas has San Antonio as 5.5-point home favorites with an over-under of 215.5",
        "The winner of SAS-MIN faces the 8-0 OKC Thunder in the Western Conference Finals"
      ],
      debateAngle:
        "The biggest question in basketball tonight: how does Victor Wembanyama respond? His Game 3 was a 39-point, 15-rebound masterpiece that announced him as the most talented player in this postseason. His Game 4 lasted 12 minutes before an ejection that cost San Antonio a potential series lead. Tonight he walks back into Frost Bank Center with the crowd behind him, a tied series, and Anthony Edwards — playing hurt — daring him to take over. Is Wembanyama's response tonight the defining moment of his young career? And if he delivers and San Antonio wins, is this series already the best of the 2026 postseason — even with OKC's perfection on the other side?",
      suggestedQuote:
        "Forget the record. Forget the ejection. Forget the stats from Game 3. Tonight is the simplest possible basketball story — can Victor Wembanyama handle the moment when the moment matters most? Anthony Edwards is playing on one knee without his best perimeter teammate and he still tied this series. That's the standard Wemby has to meet tonight. Game 5. Home floor. Frost Bank Center. This is what the playoffs are for.",
      relevantPlayers: [
        "Victor Wembanyama",
        "Anthony Edwards",
        "Dylan Harper",
        "Matas Buzelis",
        "Donte DiVincenzo"
      ]
    }
  ],

  tweetThread: [
    "🎙️ NEW EPISODE — Hoops Intel Daily, May 13, 2026\n\nDonovan Mitchell tied an NBA playoff record. OKC went 8-0. And tonight Victor Wembanyama gets his redemption shot.\n\nHere's everything that happened and everything that's coming. 🧵",

    "1/ MITCHELL MADE HISTORY.\n\n39 points in ONE HALF. Tied the NBA postseason record.\n\nFinal line: 43 PTS · 13-26 FG · 13-15 FT\n\nCleveland trailed at halftime and was staring down a 3-1 hole. Then Donovan Mitchell just... took over. Cleveland wins 112-103. Series tied 2-2.\n\nOne of the greatest halves ever played. 🔥",

    "2/ OKC IS 8-0. EIGHT. AND. OH.\n\nTwo sweeps. Zero losses. SGA with 35 and 8. Chet Holmgren with the go-ahead dunk at 32.8 seconds. Ajay Mitchell — undrafted — with 28 off the bench.\n\nLeBron gave 24 and 12 in 40 minutes at 41 years old. It still wasn't enough. The gap is real and now it's documented.\n\n⚡ Thunder to the West Finals.",

    "3/ HOT TAKE: The torch didn't just get passed. It got taken.\n\nSGA. Wembanyama. Edwards. Mitchell. They are not waiting for LeBron's permission. They already run this league.\n\nLeBron's legacy is sealed and it's legendary. But last night belonged to the next generation. That's not tragedy — that's basketball.\n\n👑 King forever. The game moves forward.",

    "4/ TONIGHT: Game 5. San Antonio. 8 PM ET on NBC.\n\nWembanyama returns after a 12-minute ejection that cost the Spurs the series lead.\nEdwards plays hurt on a hyperextended knee without DiVincenzo.\nDylan Harper waiting to explode again.\n\nThis is the best matchup left in the playoffs. And the winner faces an 8-0 OKC team.\n\nBuckle up. 🏀🔥\n\n→ Full episode at hoopsintel.net"
  ]
};
