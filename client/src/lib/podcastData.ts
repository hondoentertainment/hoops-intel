// Podcast Companion — Daily Episode Blueprint
// Last updated: May 19, 2026
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
  date: "May 19, 2026",

  episodeTitle:
    "41 and 24: Wembanyama Rewrites History in Double OT — Plus ECF Game 1 Preview at the Garden",

  coldOpen:
    "Forty-one points. Twenty-four rebounds. Forty-nine minutes. Double overtime. On the road. Against the defending champions. Without his co-star. Victor Wembanyama is twenty-one years old — and last night in Oklahoma City, he produced the most dominant single-game playoff performance of 2026. The Thunder's perfect postseason run? Gone. The Western Conference Finals? San Antonio leads one-nothing. And tonight — tonight — the Eastern Conference Finals ignite at Madison Square Garden. Eight days of rest for New York. Forty-eight hours of survival for Cleveland. Jalen Brunson versus Donovan Mitchell. MSG is going to be deafening. Buckle in. This is Hoops Intel. Let's get into it.",

  socialClip:
    "BEST CLIP FOR SOCIAL — 'The 41/24 Reality Check' (90 seconds): Open with the final buzzer graphic from SAS 122, OKC 115 in double OT, then cut to the host reading Wembanyama's full stat line cold — no music, no buildup, just the numbers in silence. Follow immediately with the line: 'He did that without De'Aaron Fox. On the road. Against a team that had won eight straight playoff games. At twenty-one years old.' Pause. Then: 'Tell me who stops this man in June.' Hard cut to the Hoops Intel logo. Post to all platforms with caption: 'The stat line that broke the internet — and the case for the most dominant playoff performance of 2026.' Tag Wembanyama, SAS, and use #WCF #NBAPlayoffs #HoopsIntel.",

  rundown: [
    {
      topic:
        "Wembanyama's 41/24: The Greatest Conference Finals Game 1 of the Modern Era",
      segment: "opener",
      duration: "9 min",
      keyStats: [
        "41 PTS · 24 REB · 3 AST · +16 in 49 minutes of double-overtime play",
        "Most points and most rebounds in any single 2026 playoff game — both records set on the same night",
        "Wembanyama played without De'Aaron Fox, who sat with an ankle sprain",
        "OKC entered the game 8-0 in the 2026 playoffs — their unbeaten run ended here",
        "San Antonio won 122-115 in 2OT on the road — controlled both overtime periods",
        "Wembanyama's Finals odds shifted from +350 to +180 overnight after this performance",
      ],
      debateAngle:
        "Is this the single greatest Conference Finals Game 1 performance in the modern era — and does it already make Wembanyama the Playoff MVP frontrunner, or is one game too small a sample to knock SGA off the throne?",
      suggestedQuote:
        "Look, we can debate the greatest playoff performances of all time all we want — but in the context of 2026, in the context of this postseason, what Wembanyama did last night is untouchable. Forty-one and twenty-four on the road in double overtime without your co-star against the defending champions. That's not a stat line. That's a statement. The kind that echoes for twenty years.",
      relevantPlayers: [
        "Victor Wembanyama",
        "De'Aaron Fox",
        "Shai Gilgeous-Alexander",
      ],
    },
    {
      topic:
        "San Antonio's Depth Exposed OKC's Ceiling — Harper's Record Steals, Castle's Quiet Masterpiece, and What It All Means for the Series",
      segment: "deep-dive",
      duration: "10 min",
      keyStats: [
        "Dylan Harper: 24 PTS · 11 REB · 6 AST · 7 STL — tied the NBA playoff single-game steals record",
        "Stephon Castle: 17 PTS · 6 REB · 11 AST in 49 minutes — ran the offense with Fox-level composure",
        "SGA shot 8-of-24 from the field, finished minus-15 — worst efficiency game of his 2026 postseason",
        "Alex Caruso exploded for 31 points off the bench — most by any OKC reserve in the 2026 playoffs",
        "Jalen Williams remains out with a hamstring strain — no return timeline for the WCF",
        "OKC shot just 41% inside the arc with Wembanyama altering shots from the drop-back",
      ],
      debateAngle:
        "The real story buried under Wembanyama's headline is this: San Antonio beat a nearly full-strength OKC roster with three players — a second-year guard, a third-year point guard, and a twenty-one-year-old alien — while their best player sat in a suit. Is this the moment we realize the Spurs' depth makes them more dangerous than OKC's two-star system, especially with Williams already out?",
      suggestedQuote:
        "Dylan Harper posting 24, 11, 6, and seven steals in a Conference Finals road win is one of the most extraordinary second-year performances in playoff history. But here's the part nobody is talking about: he didn't fill in for De'Aaron Fox. He made you forget Fox existed. And Stephon Castle ran a half-court offense against OKC's elite defense for forty-nine minutes without panicking once. The Spurs aren't a one-man show. They're a machine — and Oklahoma City is just now realizing how well-built that machine is.",
      relevantPlayers: [
        "Dylan Harper",
        "Stephon Castle",
        "Alex Caruso",
        "Jalen Williams",
        "Shai Gilgeous-Alexander",
        "Victor Wembanyama",
      ],
    },
    {
      topic:
        "Hot Take: SGA Is Not the Playoff MVP Frontrunner Anymore — and OKC Is in Real Trouble Without Williams",
      segment: "hot-take",
      duration: "7 min",
      keyStats: [
        "SGA's Playoff MVP odds shifted from -150 to +150 after Game 1 — Wembanyama now at +180",
        "SGA: 8-of-24 FG, minus-15 — the worst shooting game by a Playoff MVP frontrunner in a Conference Finals opener this decade",
        "OKC is still favored at -130 in the series despite losing Game 1 at home",
        "Jalen Williams has missed every playoff game since May 3 with no return timeline",
        "Caruso's 31-point explosion is almost certainly unsustainable over a seven-game series",
        "Wembanyama has averaged 25.7 PPG, 11.9 RPG, and 3.1 BPG across 12 playoff games",
      ],
      debateAngle:
        "The hot take that everyone is dancing around but won't say directly: SGA is no longer the favorite to win this series, let alone the championship. One brutal shooting night doesn't erase eight great games — we all know that. But the structural problem for OKC is Jalen Williams. Caruso at thirty-one points is a miracle, not a plan. If Williams doesn't come back, can SGA carry a depleted Thunder roster against the most dominant player in the 2026 postseason?",
      suggestedQuote:
        "I'll say it plainly: the MVP race is over if Wembanyama's Spurs win the Finals. You can't watch what happened last night and hand it to anyone else. SGA is great. He's generational. But Wembanyama just did something on the road, in double overtime, without his second-best player, against the defending champions, at twenty-one years old — that no one in the conversation can match right now. The burden of proof has shifted entirely onto Oklahoma City.",
      relevantPlayers: [
        "Shai Gilgeous-Alexander",
        "Victor Wembanyama",
        "Jalen Williams",
        "Alex Caruso",
      ],
    },
    {
      topic:
        "Rapid Fire: ECF Game 1 Preview, Injury Updates, Fantasy Alerts, and Tonight's Must-Knows",
      segment: "rapid-fire",
      duration: "5 min",
      keyStats: [
        "CLE @ NYK — 8:00 PM ET on ESPN, ECF Game 1 — series tied 0-0",
        "New York has been off since May 11 — eight full days of rest after sweeping Philadelphia",
        "Cleveland won Game 7 vs Detroit by 31 on the road just 48 hours ago — minimum recovery time",
        "OG Anunoby is trending toward availability for New York tonight — practiced fully",
        "Spread: NYK -5.5 · Over/Under: 214.5 — Knicks are comfortable home favorites",
        "De'Aaron Fox's ankle sprain status for WCF Game 2 on Wednesday is TBD — evaluation Tuesday",
      ],
      debateAngle:
        "Rest versus momentum — the oldest debate in playoff basketball. History favors the rested team in this exact spot. But Cleveland just won a Game 7 by thirty-one points on the road forty-eight hours ago. Do the Cavaliers ride that wave straight into Madison Square Garden, or do their legs give out in the fourth quarter against a fresh, hungry Brunson?",
      suggestedQuote:
        "Real quick hits before tonight — OG Anunoby is trending toward playing, which is massive for New York's switching defense against Mitchell. Fox is a true question mark for Wednesday, which means Dylan Harper and Castle need to be ready to run it back. And on the fantasy side: if you don't have Wembanyama locked in your lineup for Game 2, that's on you. The man just posted forty-one and twenty-four. Sit him at your own risk.",
      relevantPlayers: [
        "Jalen Brunson",
        "Donovan Mitchell",
        "OG Anunoby",
        "Evan Mobley",
        "De'Aaron Fox",
        "James Harden",
        "Karl-Anthony Towns",
      ],
    },
    {
      topic:
        "Looking Ahead: Four Teams, Two Series, One Trophy — What We're Watching Before June 3",
      segment: "closer",
      duration: "4 min",
      keyStats: [
        "NBA Finals begin June 3 — four teams remain: SAS, OKC, NYK, CLE",
        "WCF Game 2: SAS @ OKC — Wednesday night, Paycom Center",
        "ECF Game 1 tonight: CLE @ NYK, 8 PM ET — ESPN",
        "Prediction: NYK 108, CLE 102 — Brunson's rest edge and MSG energy decide the opener",
        "SGA has never lost back-to-back playoff games — Game 2 bounce-back is the WCF's next great storyline",
        "This Day in NBA History: May 19, 2002 — Shaq's 36/12 in Game 7 vs Sacramento, now echoed by Wembanyama's 41/24",
      ],
      debateAngle:
        "The biggest question heading into the rest of this week isn't whether Wembanyama can sustain this level — it's whether anyone left in these two series can match it. Mitchell against Brunson tonight is a legitimate duel for Eastern supremacy. SGA's bounce-back game at home Wednesday is the most anticipated performance of the WCF. And lurking beneath all of it: what happens when De'Aaron Fox returns to a Spurs team that just won without him?",
      suggestedQuote:
        "Here's where we land tonight. Wembanyama just authored the most dominant Conference Finals Game 1 of the modern era. The East is about to answer. By midnight we'll know if Cleveland's momentum is real or if New York's rest is the great equalizer at Madison Square Garden. Either way — this is the best four teams left in the playoffs that we've seen in years. The Finals are two weeks away. Enjoy every single minute of it. We'll be back tomorrow with the ECF Game 1 reaction you need. See you then.",
      relevantPlayers: [
        "Victor Wembanyama",
        "Shai Gilgeous-Alexander",
        "Jalen Brunson",
        "Donovan Mitchell",
        "De'Aaron Fox",
        "Evan Mobley",
      ],
    },
  ],

  tweetThread: [
    "🧵 HOOPS INTEL DAILY — May 19, 2026 // Today's episode in five tweets. Wembanyama just rewrote history. The East ignites tonight. Let's go. 👇 #NBAPlayoffs #HoopsIntel",

    "1/ Victor Wembanyama: 41 PTS · 24 REB · 3 AST · +16 in 49 MIN of double overtime. On the road. Without De'Aaron Fox. Against the defending champions. At 21 years old. The most dominant Conference Finals Game 1 performance of the modern era. San Antonio leads the WCF 1-0. 🕷️ #WCF",

    "2/ The Spurs' supporting cast was just as stunning. Dylan Harper: 24/11/6 + SEVEN STEALS — tying the NBA playoff single-game record. Stephon Castle: 17/6/11 in 49 minutes running the offense with Fox-level composure. OKC's depth problem is real. Caruso's 31 won't happen again. 📊 #NBAPlayoffs",

    "3/ SGA finished 8-of-24 with a minus-15 — his worst game of the 2026 postseason. His Finals odds flipped from -150 to +150. Wembanyama is now the Playoff MVP frontrunner at +180. SGA has NEVER lost back-to-back playoff games. Wednesday at Paycom Center is must-watch television. ⚡ #WCF #OKC",

    "4/ TONIGHT — ECF Game 1. CLE @ NYK. 8 PM ET. ESPN. 🏟️ Eight days of rest for New York. Forty-eight hours for Cleveland. OG Anunoby trending toward available. Brunson is rested, at home, and hungry. Mitchell is battle-tested and dangerous. MSG is going to be LOUD. Our prediction: NYK 108, CLE 102. 🗽",

    "5/ Four teams left. Finals start June 3. The West belongs to a 21-year-old who just posted 41 and 24 in double overtime. The East determines its champion starting tonight. 🏆 Full breakdown on today's episode of Hoops Intel — link in bio. Subscribe, share, and we'll see you tomorrow. #HoopsIntel #NBAPlayoffs",
  ],
};
