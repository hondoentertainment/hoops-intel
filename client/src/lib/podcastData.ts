// Podcast Companion — Daily Episode Blueprint
// Last updated: May 21, 2026
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
  date: "May 21, 2026",

  episodeTitle: "Brunson 38, History Made: The Greatest Conference Finals Comeback Ever — Plus WCF Game 2 Preview",

  coldOpen:
    "Twenty-two points down. Third quarter. Madison Square Garden going quiet. Cleveland looking every bit like the team that just demolished Detroit on the road to get here. And then — Jalen Brunson decided he wasn't done. Thirty-eight points. Forty-six minutes. A 44-11 run that nobody who was watching will ever forget. The Knicks just authored the largest comeback in Conference Finals history, and tonight, the Western Conference Finals are back on the floor in Oklahoma City. This is Hoops Intel. Let's get into it.",

  rundown: [
    {
      topic: "Jalen Brunson's 38-Point Masterpiece and the Greatest Conference Finals Comeback Ever",
      segment: "opener",
      duration: "8 min",
      keyStats: [
        "Brunson: 38 PTS, 15-29 FG, 46 MIN — scored 24 in Q4 and OT combined",
        "Knicks trailed by 22 points in Q3 — largest deficit overcome in Conference Finals history",
        "New York's closing run: 44-11 from the moment they began their surge",
        "Cleveland scored just 3 points in the entire overtime period, making 1 field goal",
        "Final score: NYK 115, CLE 104 (OT) — Knicks lead ECF 1-0",
        "Brunson's Playoff MVP odds shortened overnight to +350 after the performance"
      ],
      debateAngle:
        "Is Jalen Brunson's ECF Game 1 the single greatest individual clutch performance in Knicks playoff history — and does this one night make him the frontrunner for Playoff MVP over Wembanyama, whose 41/24 came in a win but without this level of stakes and drama?",
      suggestedQuote:
        "There is a version of Tuesday night where the Knicks are down 0-1, the Garden is deflated, and Cleveland is talking about stealing home court. Instead, Brunson played 46 minutes, scored 38, and turned a quiet arena into the loudest building in basketball. That's not just a great playoff game — that is a defining moment for a franchise.",
      relevantPlayers: ["Jalen Brunson", "Donovan Mitchell", "OG Anunoby", "Mikal Bridges", "Karl-Anthony Towns"]
    },
    {
      topic: "Cleveland's Blueprint Collapse: How the Cavaliers Blew 22 and What It Means for the Series",
      segment: "deep-dive",
      duration: "9 min",
      keyStats: [
        "James Harden: 3 assists in 42 minutes — entire Cleveland offensive system built on his playmaking",
        "Donovan Mitchell: 29 PTS but shot 4-of-11 from three and finished minus-13",
        "Evan Mobley: 15 PTS, 14 REB — faded in Q4 as the Knicks' run accelerated",
        "Cleveland led 83-69 heading into the fourth quarter",
        "OG Anunoby returned from injury: 13 PTS, 5 REB, plus-15 in 34 minutes",
        "Cavaliers have never trailed 0-2 in a Conference Finals and advanced"
      ],
      debateAngle:
        "The alarming number from Cleveland's meltdown isn't the 22-point lead they gave back — it's Harden's 3 assists in 42 minutes. Is Harden's role as floor general simply unsolvable against New York's switching defense with a healthy Anunoby, and if so, does Cleveland have any realistic path to winning this series?",
      suggestedQuote:
        "Harden controlling tempo was the engine that drove Cleveland through the Detroit series. Three assists in forty-two minutes tells you everything about how New York suffocated that engine in Game 1. OG Anunoby playing thirty-four minutes is a cheat code for Tom Thibodeau — and Cleveland has no answer for it right now.",
      relevantPlayers: ["James Harden", "Donovan Mitchell", "Evan Mobley", "OG Anunoby", "Jalen Brunson", "Landry Shamet"]
    },
    {
      topic: "Hot Take: Road Teams Are Running Both Conference Finals — Are We Watching the Biggest Upset Double of the Decade?",
      segment: "hot-take",
      duration: "6 min",
      keyStats: [
        "Road teams are 2-0 in the 2026 Conference Finals — last time that happened was 2018",
        "Both of those 2018 series went seven games",
        "OKC (64-18, best record in the West) lost at home in double overtime to San Antonio",
        "NYK (53-29, third seed) leads the ECF 1-0 after winning at home as the home team — wait, Brunson's team IS at home — Cleveland (fourth seed) blew Game 1 on the road at MSG",
        "No defending champion has ever rallied from 0-2 in the Conference Finals",
        "SGA shot 8-of-24 in WCF Game 1; Harden posted 3 assists in 42 minutes in ECF Game 1 — both top seeds' stars were neutralized"
      ],
      debateAngle:
        "Both number-one seeds in their respective conferences — OKC and Cleveland — lost Game 1 at or away from home in the Conference Finals. The two road teams, San Antonio and New York, control momentum in their series. Hot take: we are watching San Antonio and New York advance to the Finals, and the OKC and Cleveland 'favorites' narratives are already crumbling after one game each.",
      suggestedQuote:
        "I'll say it plainly — if you told me before these playoffs that both Conference Finals home teams would lose Game 1, I'd have laughed. Now I'm sitting here looking at SGA going eight-for-twenty-four and Harden putting up three assists and thinking: do OKC and Cleveland actually have a problem? Because Wembanyama and Brunson are playing at a completely different level right now.",
      relevantPlayers: ["Victor Wembanyama", "Jalen Brunson", "Shai Gilgeous-Alexander", "James Harden", "Dylan Harper", "Stephon Castle"]
    },
    {
      topic: "Rapid Fire: Shamet's Plus-25, Fox's Ankle, Williams Still Out, Caruso's Five Threes, and Tonight's WCF Game 2 Keys",
      segment: "rapid-fire",
      duration: "5 min",
      keyStats: [
        "Landry Shamet: plus-25 in just 17 bench minutes — game-best plus-minus in ECF Game 1",
        "De'Aaron Fox upgraded to Questionable for WCF Game 2 tonight after Tuesday shootaround — game-time decision",
        "Jalen Williams (OKC): still out indefinitely with hamstring strain, no return timeline for WCF",
        "Alex Caruso: 5 threes, 31 PTS off the bench — most threes by any player in the 2026 Conference Finals so far",
        "Dylan Harper WCF Game 1 line: 24 PTS, 11 REB, 6 AST, 7 STL — one of the defining rookie postseason games in NBA history",
        "OKC spread tonight: -4.5, over/under 222.5 — tip-off 8:30 PM ET on NBC and Peacock"
      ],
      debateAngle:
        "Rapid fire debate: Is Landry Shamet's plus-25 in 17 minutes the most underrated contribution of the entire 2026 playoffs so far? And does De'Aaron Fox returning for WCF Game 2 tonight actually flip the entire series dynamic against OKC — or is this Spurs team so deep it almost doesn't matter at this point?",
      suggestedQuote:
        "Nobody is talking about Landry Shamet right now and they should be. Plus twenty-five in seventeen minutes. The Knicks didn't just win on Brunson heroics — Thibodeau found lineup combinations that Cleveland simply couldn't solve, and Shamet was the x-factor nobody saw coming. That's how you win playoff series — in the margins.",
      relevantPlayers: ["Landry Shamet", "De'Aaron Fox", "Jalen Williams", "Alex Caruso", "Dylan Harper", "Stephon Castle"]
    },
    {
      topic: "Looking Ahead: SGA Must Respond Tonight — WCF Game 2 Preview and the Road to June 3",
      segment: "closer",
      duration: "7 min",
      keyStats: [
        "SGA's admission postgame: 'I have to be better' — shot 8-of-24 in WCF Game 1 loss",
        "SGA has never lost back-to-back playoff games in his career",
        "OKC prediction: 119-113 win in Game 2 — SGA projected for 35+ at home with crowd behind him",
        "NBA Finals begin June 3 on ABC — final four teams: SAS, OKC, NYK, CLE",
        "Wembanyama's playoff averages: 25.7 PPG, 11.9 RPG, 3.1 BPG — Playoff MVP frontrunner at 98.8 index score",
        "ECF Game 2: Thursday at MSG — Cleveland has never been down 0-2 in a Conference Finals and advanced"
      ],
      debateAngle:
        "Tonight is the most important game of Shai Gilgeous-Alexander's career. A loss puts OKC down 0-2 against a Spurs team that may have Fox back and already proved it can win at Paycom Center. Does SGA have the kind of bounce-back performance in him that erases Game 1 and resets the series — or has Wembanyama genuinely exposed a length problem that OKC cannot solve regardless of how well SGA plays?",
      suggestedQuote:
        "SGA has never dropped back-to-back playoff games. That streak gets tested tonight at Paycom Center, and it's the most compelling individual storyline in basketball right now. He's the defending champion, he's the best player on the best regular-season team in the West, and he was outplayed in Game 1. How he responds in the next forty-eight minutes tells us everything about whether OKC is actually a championship team — or just a great regular-season one.",
      relevantPlayers: ["Shai Gilgeous-Alexander", "Victor Wembanyama", "De'Aaron Fox", "Dylan Harper", "Stephon Castle", "Alex Caruso"]
    }
  ],

  socialClip:
    "CLIP DESCRIPTION — 'The Moment the Garden Erupted': Isolate Jalen Brunson's final 90 seconds of regulation and full overtime sequence from ECF Game 1. Open on the score graphic showing NYK down 22 in Q3, then cut directly to Brunson's go-ahead bucket in OT with the Garden crowd at peak volume. Overlay the stat crawl: '38 PTS · 46 MIN · 22 points erased · Largest comeback in Conference Finals history.' Close on Brunson's calm postgame face and the words: 'He just rewrote history.' Ideal for Instagram Reels, TikTok, and Twitter/X clip format — 60-90 seconds, vertical crop for mobile. This is the most shareable individual moment of the 2026 playoff run to date.",

  tweetThread: [
    "🎙️ NEW EPISODE — Hoops Intel Vol. 2026 · No. 151 | Brunson 38. History made. The Knicks erased 22. Cleveland scored THREE points in overtime. And tonight, SGA has to answer at Paycom Center. Full breakdown 🧵👇",
    "1/ Jalen Brunson scored 38 in 46 minutes, orchestrated a 44-11 run from 22 down, and dragged the Knicks past Cleveland 115-104 in overtime. It is the largest comeback in Conference Finals history. He scored 24 points in the fourth quarter and overtime alone. +350 Playoff MVP odds. He's earned every bit of it.",
    "2/ The most haunting number from Cleveland's collapse: James Harden's 3 assists in 42 minutes. The entire Cavaliers offensive system ran through his playmaking. Against New York's switching defense with OG Anunoby healthy — he was neutralized. If Harden can't function as a floor general, Cleveland cannot reach the Finals. Game 2 Thursday at MSG is a series-defining moment.",
    "3/ OG Anunoby played his first game in 12 days and was a +15 in 34 minutes. Landry Shamet posted a game-best +25 in just 17 bench minutes. This Knicks comeback wasn't solely Brunson heroics — Thibodeau found lineup combinations Cleveland couldn't solve. Playoff series are won in the margins. Right now, New York owns them.",
    "4/ Tonight: SAS @ OKC, 8:30 PM ET on NBC. De'Aaron Fox is Questionable after shootaround. SGA shot 8-of-24 in Game 1 and said 'I have to be better.' He's never dropped back-to-back playoff games. That streak gets tested tonight. Our prediction: OKC 119, SAS 113 — SGA erupts for 35+ and forces the series back to San Antonio tied 1-1.",
    "5/ Both Conference Finals home teams lost Game 1. Road teams are 2-0. Last time that happened was 2018 — both series went seven games. Wembanyama is at 98.8 on our Pulse Index. Brunson is at 97.4 and rising. The NBA Finals start June 3. We may be watching the two best stories in playoff basketball happening simultaneously. Don't sleep on a single game. 🏀 | hoopsintel.net"
  ]
};
