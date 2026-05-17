// Podcast Companion — Daily Episode Blueprint
// Last updated: May 18, 2026
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
  date: "May 18, 2026",

  episodeTitle: "Game 7 Night in Detroit — One Dream Dies at Little Caesars Arena",

  coldOpen:
    "It's Sunday night, May 18th, and the NBA just hit its crescendo. One ticket left in the East. One building. One game. Little Caesars Arena is about to get LOUD — and Cade Cunningham is about to tell us exactly who he is. Meanwhile, twenty-four hours from right now, Shai Gilgeous-Alexander and Victor Wembanyama tip off in the most anticipated series of the 2026 playoffs. The next 48 hours might be the best two-day stretch in basketball this decade. You're locked in to Hoops Intel. Let's get into it.",

  rundown: [
    {
      topic: "Game 7: Detroit vs. Cleveland — The Last East Ticket Gets Punched Tonight",
      segment: "opener",
      duration: "9 min",
      keyStats: [
        "Series tied 3-3 — Detroit forced Game 7 with a 115-94 road blowout in Game 6, tying a 66-year-old NBA record for largest road win by a trailing team",
        "Cade Cunningham averaging 27.0 PPG and 8.5 APG across the series — rated the best player on either roster by every major metric",
        "Detroit is 31-9 at home this season — the second-best home record in the East",
        "Donovan Mitchell: 43 points in Game 4, then 6-of-20 for 18 points with a minus-25 in Game 6",
        "Larry Nance Jr. (illness) is DOUBTFUL, Caris LeVert (heel) is QUESTIONABLE — Cleveland's bench is thinning out at the worst possible moment",
        "Detroit is a 4.5-point favorite; over/under sits at 206.5 — 8:00 PM ET on Prime Video"
      ],
      debateAngle:
        "Is this series already Cade Cunningham's defining moment — regardless of tonight's outcome? He's been the best player in this series over six games, outplaying both Mitchell AND Harden on the biggest stages. If Detroit wins tonight, do we officially start talking about him as a top-5 player in the league?",
      suggestedQuote:
        "Cade Cunningham has been the best player in this series, full stop. Not Mitchell on his best night, not Harden in overtime — Cade, consistently, across six games, in both directions on the floor. Tonight is his coronation or his crucible. There is no middle ground at Little Caesars Arena.",
      relevantPlayers: [
        "Cade Cunningham",
        "Donovan Mitchell",
        "James Harden",
        "Larry Nance Jr.",
        "Caris LeVert",
        "Paul Reed"
      ]
    },
    {
      topic: "The Harden Paradox — Legacy Milestone, Turnover Disaster, and One Last Road Game 7",
      segment: "deep-dive",
      duration: "8 min",
      keyStats: [
        "James Harden passed Stephen Curry for 10th on the NBA all-time playoff scoring list during this series",
        "Harden posted 30 points and 3 blocks in Game 5 triple overtime — one of the great individual playoff performances of the 2026 postseason",
        "Harden then committed 8 turnovers in Game 6's 21-point collapse — the single biggest driver of Cleveland's blowout loss",
        "Series averages: 22.5 PPG, 7.0 APG, 5.8 RPG — genuinely strong across the board",
        "Harden is 36 years old playing a road Game 7 in a building with one of the loudest crowds in the East",
        "Mitchell went 6-of-20 in Game 6 — if Cleveland loses tonight, the Harden collapse shoulders enormous blame"
      ],
      debateAngle:
        "Does the 8-turnover Game 6 meltdown permanently overshadow the milestone of passing Curry on the all-time playoff scoring list? Or is playoff longevity and durability — across Houston, Brooklyn, Philly, and Cleveland — its own form of greatness that the basketball world has consistently undervalued when it comes to Harden?",
      suggestedQuote:
        "Here's the thing about James Harden passing Stephen Curry on the all-time playoff scoring list — it's a genuinely remarkable achievement that speaks to longevity, durability, and decades of postseason relevance. But the basketball internet doesn't care about that right now. They saw 8 turnovers. They saw minus-whatever in a blowout. That's the version of Harden that lives in the highlight reel tonight. Unless he answers the bell in Detroit.",
      relevantPlayers: [
        "James Harden",
        "Donovan Mitchell",
        "Cade Cunningham",
        "Stephen Curry"
      ]
    },
    {
      topic: "SGA vs. Wembanyama — Is This the Greatest WCF Matchup in a Generation?",
      segment: "hot-take",
      duration: "7 min",
      keyStats: [
        "Shai Gilgeous-Alexander: 30.1 PPG, 6.5 APG, 6.2 RPG — leads all remaining players in playoff scoring, 8-0 record, back-to-back sweeps",
        "Victor Wembanyama: 24.3 PPG, 10.8 RPG, 3.2 BPG — 21 years old, coasted through the clincher in just 27 minutes",
        "OKC is 8-0 in the 2026 playoffs and WITHOUT Jalen Williams (hamstring, no timeline) — they've been statistically fine without their second-best player",
        "San Antonio demolished Minnesota by 30 in a road clincher — Stephon Castle's 32/11/6 on 11-of-16 announced him as a genuine WCF factor",
        "OKC opened as a 6.5-point favorite with the over/under at 218.5 — tips tomorrow at 8:30 PM ET",
        "Finals odds: OKC -165, San Antonio +320 — the market respects the Spurs more than the casual conversation does"
      ],
      debateAngle:
        "Hot take incoming: Oklahoma City losing Jalen Williams might actually HELP them in this series. Here's why — without Williams, every offensive possession flows through SGA. There's no ball-movement ambiguity, no defensive rotations to exploit. It's pure SGA isolation basketball against the best individual defender in the world. San Antonio has to choose: guard Wembanyama's man or send him at SGA. Either way, something breaks.",
      suggestedQuote:
        "I'm going to say something that sounds crazy but I actually believe it: the most dangerous version of Oklahoma City is the one where SGA is the only option. When every possession ends with Shai, when every late-clock moment is his, when San Antonio can't shade their coverage because there's only one guy who absolutely must have the ball — that is terrifying. Williams being out might have accidentally unlocked the purest possible version of SGA basketball. And Wembanyama has to solve it.",
      relevantPlayers: [
        "Shai Gilgeous-Alexander",
        "Victor Wembanyama",
        "Stephon Castle",
        "De'Aaron Fox",
        "Jalen Williams",
        "Ajay Mitchell"
      ]
    },
    {
      topic: "Rapid Fire — Knicks Lurking, Paul Reed X-Factor, Anunoby Update, and Castle's Breakout",
      segment: "rapid-fire",
      duration: "5 min",
      keyStats: [
        "New York Knicks haven't played since May 11 — seven full days of rest heading into the East Finals, regardless of tonight's winner",
        "OG Anunoby practiced Saturday and called his hamstring 'not as bad as 2024' — trending toward availability for the East Finals opener",
        "Paul Reed went 7-of-9 for 17 points off the bench in Game 6's blowout — the unsung hero of Detroit's series-saving road win",
        "Stephon Castle's 32/11/6 in the Minnesota clincher pushed him to +1200 for Finals MVP — those odds will not last if he opens the WCF hot",
        "Knicks are +550 to win the title — the analytical community is circling this number as genuine value",
        "Miles McBride made 7-of-9 threes in the Knicks' 144-114 Game 4 demolition of Philadelphia — the best single-game 3PM performance of the 2026 playoffs"
      ],
      debateAngle:
        "Is New York the most dangerous team nobody is talking about? They swept Philly, they've been resting for a WEEK, their two best players are fully healthy, and they get to face a team that just survived a seven-game war with a two-day turnaround. The Knicks are sitting in the cut and everyone is focused on SGA and Wemby.",
      suggestedQuote:
        "Knicks fans are sitting at home tonight watching Game 7 knowing that whoever wins is staggering into a fully rested buzzsaw. Brunson hasn't played in seven days. KAT is fresh. Anunoby is practicing. New York at plus-five-fifty is the number everyone is whispering about, and by Tuesday morning the basketball world might finally start paying attention.",
      relevantPlayers: [
        "Jalen Brunson",
        "Karl-Anthony Towns",
        "OG Anunoby",
        "Miles McBride",
        "Paul Reed",
        "Stephon Castle"
      ]
    },
    {
      topic: "Looking Ahead — The Road to the June 3rd Finals Is Almost Fully Mapped",
      segment: "closer",
      duration: "4 min",
      keyStats: [
        "By midnight tonight, all four conference finalists will be locked — the bracket is set, the road to June 3rd is clear",
        "Western Conference Finals Game 1: San Antonio at Oklahoma City — 8:30 PM ET tomorrow night",
        "Eastern Conference Finals opponent for New York is decided tonight — either Detroit (60-22) or Cleveland (52-30) with two days of rest",
        "OKC sits at -165 to win the title; New York is the second-favorite at +550; San Antonio is +320",
        "Detroit's path if they win tonight: face NYK in the East Finals with massive crowd momentum but a short turnaround",
        "This Day in NBA History: May 18, 1997 — Michael Jordan scored 29 points as the Bulls beat Miami 96-90 in Game 1 of the Eastern Conference Finals en route to their fifth championship"
      ],
      debateAngle:
        "After tonight, who do you actually fear most heading into the conference finals? OKC is the logical pick at -165, but is the Wembanyama factor enough to genuinely threaten a perfect 8-0 machine? And can the Knicks, rested and healthy, actually pull off what nobody expects? Set your conference finals power rankings right now.",
      suggestedQuote:
        "By the time you wake up tomorrow morning, the 2026 playoff bracket is complete. SGA and Wemby tip off in less than 24 hours. The Knicks know their opponent. And whatever happens tonight in Detroit — whether it's Cade Cunningham's coronation or Donovan Mitchell's resurrection — the NBA Finals is six weeks away and the field is almost set. This is why we watch. See you on the other side.",
      relevantPlayers: [
        "Shai Gilgeous-Alexander",
        "Victor Wembanyama",
        "Jalen Brunson",
        "Cade Cunningham",
        "Donovan Mitchell",
        "Karl-Anthony Towns"
      ]
    }
  ],

  socialClip:
    "CLIP DESCRIPTION — Hot-Take Segment, approx. 45 seconds: Pull the moment where the host makes the case that OKC losing Jalen Williams might actually be an advantage — starting from 'I'm going to say something that sounds crazy but I actually believe it' through 'that is terrifying.' Pair with a split-screen graphic of SGA iso clips on the left and Wembanyama block highlights on the right. Caption: 'What if losing Jalen Williams accidentally unlocked the most dangerous version of SGA basketball? 👀 #WCF #HoopsIntel' — target Instagram Reels and TikTok, estimated high shareability due to the counterintuitive argument and WCF anticipation.",

  tweetThread: [
    "🏀 HOOPS INTEL PODCAST — May 18, 2026 🏀\n\nGame 7 Night in Detroit. One East Finals ticket. One building. 20,000 people ready to shake the walls at Little Caesars Arena.\n\nHere's everything you need to know before tip-off. 🧵 (1/5)",

    "Cade Cunningham has been the BEST player in the DET-CLE series across all six games. Not Mitchell. Not Harden. Cade — 27.0 PPG, 8.5 APG, two-way impact that has bent Cleveland's defense all series.\n\nTonight is his coronation or his crucible. There is no middle ground.\n\nDetector -4.5. 8 PM ET. Prime Video. (2/5)",

    "James Harden passed Stephen Curry for 10th on the all-time NBA playoff scoring list this postseason.\n\nAlso: 8 turnovers in a 21-point Game 6 blowout.\n\nTwo truths, one complicated legacy. Tonight's road Game 7 in Detroit writes the next chapter — one way or another. (3/5)",

    "HOT TAKE: Oklahoma City losing Jalen Williams might actually HELP them in the WCF.\n\nNo ball-movement ambiguity. Every possession through SGA. Pure isolation basketball against the best individual defender in the world.\n\nWembanyama has to solve it alone. Tomorrow night. 8:30 PM ET.\n\nThis is the matchup we've been waiting for. (4/5)",

    "By midnight tonight, the 2026 playoff bracket is COMPLETE.\n\n• WCF Game 1: SAS @ OKC — Monday 8:30 PM\n• ECF: NYK vs DET or CLE — two-day turnaround for the winner\n• Finals odds: OKC -165 | SAS +320 | NYK +550\n\nThe road to June 3rd is almost fully mapped. 🏆\n\nFull episode on all platforms now. #HoopsIntel #NBA #Playoffs (5/5)"
  ]
};
