// Podcast Companion — Daily Episode Blueprint
// Last updated: June 9, 2026
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
  date: "June 9, 2026",

  episodeTitle:
    "Wemby Owns the Garden: Spurs Take 2-1 Finals Lead After 38-Point MSG Masterclass",

  coldOpen:
    "You know that moment when a visiting superstar walks into Madison Square Garden — the loudest, most unforgiving building in basketball — and just absolutely takes over? Like the crowd, the history, the pressure, none of it exists? Victor Wembanyama did that last night. Thirty-eight points. Fourteen rebounds. Five blocks. At MSG. In a road Finals game. The Spurs lead 2-1, and right now it genuinely feels like we are watching a 22-year-old rewrite what this sport is supposed to look like. This is Hoops Intel. Let's get into it.",

  rundown: [
    {
      topic: "Wembanyama's MSG Masterclass: The 38-Point Statement That Shifted the Finals",
      segment: "opener",
      duration: "8 min",
      keyStats: [
        "38 PTS — series-high, most dominant Finals scoring performance of 2026 postseason",
        "14 REB — Finals personal best, neutralized New York's second-chance offense",
        "5 BLK — deterred roughly a dozen more attempts beyond official blocks",
        "+14 plus/minus — best on the floor for either team in Game 3",
        "16 of SAS's first 28 points scored by Wembanyama",
        "22 points at halftime — the game was effectively over before the third quarter began",
      ],
      debateAngle:
        "Is Wembanyama's Game 3 already the single greatest Finals performance of the last decade, or do we wait until he wins a ring before we start making those claims? The numbers say yes. The trophy case says not yet.",
      suggestedQuote:
        "He walked into Madison Square Garden — the building that was supposed to save the Knicks' season — and turned it into a highlight reel before halftime. Thirty-eight points, fourteen boards, five blocks. On the road. In the Finals. At twenty-two years old. We are not watching a player peak. We are watching a player announce himself to history.",
      relevantPlayers: [
        "Victor Wembanyama",
        "De'Aaron Fox",
        "Jalen Brunson",
        "Karl-Anthony Towns",
      ],
    },
    {
      topic:
        "The Tactical Blueprint: How Castle and Wemby Dismantled Brunson's Left-Elbow Pull-Up Game",
      segment: "deep-dive",
      duration: "10 min",
      keyStats: [
        "Brunson shot 10-of-24 (41.7%) in Game 3 vs. Games 1 and 2 efficiency",
        "Stephon Castle: 3 STL, shadowed Brunson on every pick-and-roll",
        "Wembanyama: modified drop coverage, expanding late to contest pull-up attempts",
        "Castle finished with 17 PTS and +9 — the bonus production that proved he wasn't just a defensive stopper",
        "Fox scored on 4 consecutive fourth-quarter possessions against tired Knicks defenders",
        "KAT held to face-up game — Wemby's drop forced 18-foot jumpers instead of drives",
      ],
      debateAngle:
        "Gregg Popovich's defensive scheme in Game 3 was as sophisticated as anything we've seen in a Finals in years — but is Thibodeau good enough to crack it in Game 4, or does San Antonio have counters to every counter New York can throw at them?",
      suggestedQuote:
        "Here's the thing about what the Spurs did to Brunson — they didn't just guard him, they coached him out of his best shot. The left-elbow pull-up that won Game 1 for New York? Gone. Castle takes it away on the catch, and Wemby is right there if Brunson tries to probe the paint. Pop designed a defensive system in 48 hours that neutralized the Knicks' entire offensive identity. That's not scheme. That's art.",
      relevantPlayers: [
        "Stephon Castle",
        "Victor Wembanyama",
        "Jalen Brunson",
        "Karl-Anthony Towns",
        "De'Aaron Fox",
      ],
    },
    {
      topic:
        "Hot Take: De'Aaron Fox Is the Real Reason the Spurs Won Game 3 — Not Wembanyama",
      segment: "hot-take",
      duration: "6 min",
      keyStats: [
        "Fox: 26 PTS, 7 AST, +11 in Game 3",
        "Four consecutive fourth-quarter conversions by Fox when NYK cut the lead to nine",
        "Brunson: 29 PTS, 8 AST — comparable scoring night to Fox but on the losing team",
        "Fox attacked closeouts in transition all fourth quarter against tired Knicks defenders",
        "Wembanyama's +14 reflects dominance — Fox's closing run reflects winning",
        "SAS has two closers in Wemby and Fox — NYK has only Brunson",
      ],
      debateAngle:
        "Wembanyama built the lead. Fox protected it. When the Knicks had all the momentum of a comeback brewing in the fourth quarter, it was Fox who answered every single time. Does a 38-point monster performance overshadow the guy who actually closed the game out when it mattered most?",
      suggestedQuote:
        "I love the Wembanyama show as much as anyone — the thirty-eight points are incredible, the blocks are incredible, the whole performance is incredible. But if we're being honest about why San Antonio wins Game 3, it's because when New York got it to within nine with six minutes left and the Garden was shaking, De'Aaron Fox scored four straight possessions and killed the comeback before it started. That's the most important sequence of the entire Finals so far.",
      relevantPlayers: [
        "De'Aaron Fox",
        "Victor Wembanyama",
        "Jalen Brunson",
        "Mikal Bridges",
      ],
    },
    {
      topic: "Rapid Fire: Bridges' Quiet 22, Hart's 11 Boards, Anunoby's Three Blocks, and the Knicks' Path to a Game 4 Win",
      segment: "rapid-fire",
      duration: "5 min",
      keyStats: [
        "Mikal Bridges: 22 PTS, 4-of-7 from three — without him SAS wins by 12 instead of 4",
        "Josh Hart: 11 REB off the bench — best hustle performance from any reserve in Game 3",
        "OG Anunoby: 3 BLK — the only consistent interior deterrent NYK had against Wemby's post game",
        "Isaiah Hartenstein: day-to-day with left knee soreness heading into Game 4",
        "Game 4 line: SAS -1.5, moved from SAS -2.5 — market pricing this as a near coin flip",
        "Game 4: Wednesday, June 11, 8:00 PM ET, MSG, on ABC",
      ],
      debateAngle:
        "The line has moved a full point toward New York. The market believes Thibodeau adjusts and MSG forces a Game 5. Do you trust that, or is San Antonio's talent advantage too significant even on the road in a must-win atmosphere?",
      suggestedQuote:
        "Quick hits — Bridges' four threes kept the Spurs from blowing this thing open in the third quarter, which means we still have a series. Hart grabbed eleven boards playing through whatever that Garden energy was doing to everyone. Hartenstein is day-to-day with a knee — that matters for Game 4 because Thibodeau might need him as a physical option against Wembanyama. And the line is SAS minus one and a half, down from two and a half. Vegas thinks the Garden crowd is worth a point. I might actually agree.",
      relevantPlayers: [
        "Mikal Bridges",
        "Josh Hart",
        "OG Anunoby",
        "Isaiah Hartenstein",
        "Dalen Terry",
        "Stephon Castle",
      ],
    },
    {
      topic:
        "Looking Ahead: What Thibodeau Must Fix Before Game 4 — and a Historical Echo from 1994",
      segment: "closer",
      duration: "5 min",
      keyStats: [
        "NYK must win Game 4 to avoid 3-1 deficit — near-impossible to overcome against this SAS team",
        "Thibodeau adjustment needed: run Towns off screens into mid-post catches vs. face-up isolations",
        "Brunson needs new coverage-busting sets — left-elbow pull-up is fully taken away",
        "On June 9, 1994, Hakeem Olajuwon dropped 25-10 to give Houston a 2-1 lead over NYK at MSG — Rockets won the title",
        "2026 Finals prediction: NYK wins Game 4, 108-104 — Brunson 33 points, series goes to Game 5",
        "Wembanyama's Finals scoring average now above 30 PPG for the series",
      ],
      debateAngle:
        "History is echoing loudly tonight — June 9, 1994, Hakeem Olajuwon dominated the Knicks at MSG to give Houston a 2-1 Finals lead, and the Rockets went on to win it all. Is this 2026 Spurs team walking the exact same path, or do the Knicks have enough in them to rewrite the ending?",
      suggestedQuote:
        "Before we get out of here, let's take thirty seconds to acknowledge this: June 9th, 1994 — Hakeem Olajuwon, Madison Square Garden, 2-1 Houston lead in the NBA Finals. New York never won that series. Tonight it's June 9th, 2026, and San Antonio just took a 2-1 Finals lead at Madison Square Garden behind a dominant center performance. History doesn't repeat exactly — but it does rhyme. Wednesday is a must-win, the Garden will be unhinged, and Jalen Brunson will have something to say. See you then.",
      relevantPlayers: [
        "Victor Wembanyama",
        "Jalen Brunson",
        "Karl-Anthony Towns",
        "De'Aaron Fox",
        "Hakeem Olajuwon",
      ],
    },
  ],

  socialClip:
    "CLIP BRIEF — 'The Garden Goes Quiet' (Target: 60–75 seconds, vertical format for Reels/TikTok/Shorts): Open on the Game 3 final score graphic (NYK 111, SAS 115). Cut to Wembanyama stat line appearing one line at a time — 38 PTS… 14 REB… 5 BLK… +14 — with a beat drop between each stat. Host voiceover: 'Twenty-two years old. Madison Square Garden. Road Finals game. And he turned the loudest building in basketball into a library.' Cut to host delivering the Fox fourth-quarter closing run breakdown: 'Four straight possessions. Comeback dead.' End on the historical echo: 'June 9th, 1994 — Hakeem did the same thing in the same building. The Rockets won the championship.' Freeze on the 2-1 series graphic. Text overlay: 'Game 4. Wednesday. Must-win.' Tag: @HoopsIntel #WembanyamaSZN #NBAFinals",

  tweetThread: [
    "🎙️ NEW EPISODE — Hoops Intel | June 9, 2026\n\n'Wemby Owns the Garden: Spurs Take 2-1 Finals Lead After 38-Point MSG Masterclass'\n\nVictor Wembanyama just delivered the most dominant Finals performance of the 2026 postseason. Here's everything you need to know. 🧵 (1/5)",

    "38 PTS. 14 REB. 5 BLK. +14.\n\nOn the road. At Madison Square Garden. In the NBA Finals. At 22 years old.\n\nWembanyama scored 16 of San Antonio's first 28 points, had 22 by halftime, and the Garden crowd was dead before the fourth quarter even started.\n\nThis is a legacy-building performance in real time. (2/5)",

    "But here's the take you're not hearing enough: De'Aaron Fox CLOSED this game.\n\nWhen NYK cut it to nine with 6 minutes left and the Garden was ready to explode, Fox scored on FOUR STRAIGHT POSSESSIONS.\n\n26 PTS. 7 AST. +11.\n\nSAS doesn't just have one closer. They have two. NYK has one. (3/5)",

    "The tactical breakdown you need before Game 4:\n\n⚙️ Castle shadowed Brunson on every PnR\n⚙️ Wemby sat in drop, expanded late on pull-ups\n⚙️ Result: Brunson 10-of-24, left-elbow look is GONE\n⚙️ KAT's face-up game neutralized by Wemby's drop coverage\n\nThibodeau MUST design new sets. Run KAT off screens. Free Brunson from Castle. (4/5)",

    "History is whispering.\n\nJune 9, 1994: Hakeem Olajuwon drops 25-10 at MSG. Houston takes a 2-1 Finals lead. The Rockets win the championship.\n\nJune 9, 2026: Wembanyama drops 38-14-5 at MSG. San Antonio leads the Finals 2-1.\n\nGame 4. Wednesday. Must-win for New York.\n\nFull episode out now 👇 hoopsintel.net #NBAFinals #WembanyamaSZN (5/5)",
  ],
};
