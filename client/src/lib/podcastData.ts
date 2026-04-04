// Podcast Companion — Daily Episode Blueprint
// Last updated: April 3, 2026
// Generated from today's Hoops Intel edition

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

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

// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════

export const podcastCompanion: PodcastCompanionData = {
  date: "April 3, 2026",
  episodeTitle:
    "Jokić's Triple-Double Drops OKC Again, Brunson Hits 50, and the Warriors Are Done",
  rundown: [
    {
      topic: "Jokić 34/14/11 — Denver Wins 8 Straight and OKC Keeps Losing to Nikola",
      segment: "opener",
      duration: "5-7 min",
      keyStats: [
        "Jokić: 34 PTS, 14 REB, 11 AST — triple-double in 38 minutes",
        "Denver 124, OKC 119 — Nuggets' 8th consecutive win",
        "Jokić has now triple-doubled against OKC in 4 of his last 6 matchups",
        "Denver improved to 47-25, surging into the top-4 of the West",
        "SGA scored 38 in a losing effort — OKC now 3-7 against the Nuggets over two seasons",
      ],
      debateAngle:
        "Is Jokić the single biggest threat to OKC's title aspirations? The Thunder have no real answer for him — SGA can't guard him, and their bigs can't contain his passing. Does this performance reshape how we think about the West playoff picture?",
      suggestedQuote:
        "Nikola Jokić put up 34, 14, and 11 against the team with the best record in the West. It wasn't luck — it's the fourth time in six tries he's triple-doubled against Oklahoma City. Denver is on an 8-game win streak and OKC simply has no answer for the Joker.",
      relevantPlayers: [
        "Nikola Jokić",
        "Shai Gilgeous-Alexander",
        "Jamal Murray",
        "Chet Holmgren",
      ],
    },
    {
      topic: "Brunson's 34-Point Night Pushes Knicks to 50 Wins — The Legacy Conversation",
      segment: "deep-dive",
      duration: "8-10 min",
      keyStats: [
        "Brunson: 34 PTS, 4 REB, 8 AST in 115-109 win over Cleveland",
        "New York's 50th win of the season — first time since 2012-13",
        "Brunson is averaging 31.2 PPG over his last 10 games",
        "Knicks are 50-21, holding the 2-seed in the East",
        "Brunson has now led the Knicks to back-to-back 50-win seasons",
      ],
      debateAngle:
        "Where does Brunson rank in Knicks franchise history right now? He's delivering 50-win seasons that Madison Square Garden hasn't seen in over a decade. Is he already the best Knick since Patrick Ewing, and what does his ceiling look like come playoff time?",
      suggestedQuote:
        "Fifty wins. Jalen Brunson just gave the Knicks their 50th win of the season for the second straight year. That hasn't happened since the Carmelo Anthony era. At 34 points and 8 assists against a good Cleveland team, Brunson isn't just the best player in New York — he might be the best story in the East.",
      relevantPlayers: [
        "Jalen Brunson",
        "OG Anunoby",
        "Darius Garland",
        "Evan Mobley",
      ],
    },
    {
      topic: "Booker Drops 35 and the Warriors Are Officially Done — Phoenix Crushes Golden State",
      segment: "hot-take",
      duration: "5-7 min",
      keyStats: [
        "Booker: 35 PTS, 6 REB on 13-21 FG in 122-101 Phoenix win",
        "Warriors allowed 122 points and lost by 21 — their 5th loss in 6 games",
        "Golden State has been outscored by 14.3 points per game over their last 5",
        "Phoenix improved to 42-29 — solidified a top-6 West seed",
        "Warriors are now 33-38 and in serious play-in jeopardy",
      ],
      debateAngle:
        "Hot take: the Warriors' dynasty is finished — not just this season, but structurally. This roster has no path to being a title contender again. Booker carved them up like it was a preseason game. Is this finally the moment we declare the Golden State era over?",
      suggestedQuote:
        "Devin Booker scored 35 and the Warriors lost by 21 at home. This wasn't competitive. Golden State is 33-38, heading toward the play-in with a roster that can't guard anyone. The dynasty is done. Close the book.",
      relevantPlayers: [
        "Devin Booker",
        "Kevin Durant",
        "Stephen Curry",
        "Bradley Beal",
      ],
    },
    {
      topic:
        "Rapid-Fire: Trae 31/11 Keeps Hawks Hot, Banchero Survives Against Charlotte, Magic Grind",
      segment: "rapid-fire",
      duration: "4-5 min",
      keyStats: [
        "Trae Young: 31 PTS, 11 AST in 121-117 Atlanta win over Philadelphia — Hawks W2",
        "Banchero: 26 PTS, 8 REB, 6 AST in 104-98 Orlando win over Charlotte",
        "Magic survived a sloppy game — won despite 17 turnovers",
        "Hawks are 39-31 and firmly in the East play-in picture",
        "Banchero has scored 25+ in 5 straight games",
      ],
      debateAngle:
        "Is Trae Young finally giving Atlanta what they've always needed from him — consistent, winning basketball when it matters? And is Banchero quietly having the best 25-and-under season of anyone not named Wemby?",
      suggestedQuote:
        "Trae Young had 31 and 11 and the Hawks won again. Atlanta keeps winning quietly while everyone looks at the top of the East. Meanwhile Banchero dropped 26-8-6 and survived a sloppy Orlando win. These two are the most interesting players in the next wave.",
      relevantPlayers: [
        "Trae Young",
        "Paolo Banchero",
        "Jalen Johnson",
        "LaMelo Ball",
      ],
    },
    {
      topic: "Tonight's Preview: DET @ BOS on ESPN, Wemby at Minnesota, LeBron vs. Houston",
      segment: "closer",
      duration: "3-4 min",
      keyStats: [
        "DET @ BOS — 7:30 PM ET, ESPN — potential first-round playoff preview",
        "SAS @ MIN — 8:00 PM ET, TNT — Wemby vs. Gobert, the defensive chess match of the week",
        "HOU @ LAL — 10:00 PM ET, TNT — Sengun vs. AD with West seeding on the line",
        "MIL @ IND — 7:00 PM ET — Giannis vs. Pacers, East seeding implications",
        "TOR @ PHI — 7:00 PM ET — safe to skip, both teams playing out the string",
      ],
      debateAngle:
        "The DET-BOS game on ESPN is the most important game of the night. If Detroit wins in Boston, it sends a message about who the real East contender below the Knicks is. Can the Pistons do it on the road against the defending champs?",
      suggestedQuote:
        "Detroit goes to Boston tonight on ESPN. After what Jokić just did to OKC and Brunson just did for the Knicks, the East is setting up beautifully for the playoffs. Don't sleep on this Pistons team. They are a problem for everyone.",
      relevantPlayers: [
        "Cade Cunningham",
        "Jayson Tatum",
        "Victor Wembanyama",
        "LeBron James",
        "Anthony Edwards",
      ],
    },
  ],
  coldOpen:
    "What's up everybody — welcome back to the show. Last night, Nikola Jokić put up 34, 14, and 11 against the best record in the West and Denver won their eighth straight game. Jalen Brunson scored 34 points and gave the Knicks their 50th win of the season for the first time in over a decade. And Devin Booker dropped 35 as the Suns demolished the Warriors by 21 in Golden State. The NBA regular season is entering its final stretch and the picture is coming into focus fast. Let's break it all down.",
  socialClip:
    "The Brunson legacy deep-dive is the clip to pull. The Knicks hit 50 wins, haven't done it back-to-back since the Carmelo era, and Brunson is doing it without the superstar hype he deserves. The historical comparison to franchise greats drives engagement from the MSG faithful and the broader NBA fan base.",
  tweetThread: [
    "1/ NEW EPISODE: Jokić's 34/14/11 drops OKC, Brunson hits 50 wins, Booker ends the Warriors debate. Everything from last night. A thread.",
    "2/ Nikola Jokić had 34 points, 14 rebounds, and 11 assists against the team with the best record in the West. Denver has won EIGHT STRAIGHT. OKC has no answer for him — 4 triple-doubles in his last 6 tries against the Thunder. The Joker is the West's biggest wildcard.",
    "3/ Jalen Brunson scored 34 and gave the Knicks their 50th win of the season. Back-to-back 50-win seasons in New York. That hasn't happened since 2013. Brunson isn't just the best player on this team — he's building a legacy at MSG.",
    "4/ Devin Booker dropped 35 and the Warriors lost by 21 at home. Golden State is 33-38. Their last 5 games: -14.3 per game. The dynasty is officially over. Booker barely broke a sweat.",
    "5/ Also last night: Trae Young had 31 and 11 as Atlanta kept winning. Banchero dropped 26-8-6 in a Magic survive job over Charlotte. The East play-in is going to be chaos.",
    "6/ Tonight: DET @ BOS on ESPN at 7:30 — best game of the night, potential playoff preview. Then Wemby vs. Gobert on TNT at 8. Then LeBron vs. Houston at 10. It's a good Friday for basketball. Full breakdown in today's episode.",
  ],
};
