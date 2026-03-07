# NBA Pulse — Edition Writing Examples

Annotated examples of well-crafted entries. Use these as quality benchmarks.

---

## Headline & Subtitle

**Good — specific, punchy, three distinct stories:**
```
subtitle: "Giddey Ties Pippen · Jokic's 35/13/9 in a Loss · Spurs' Streak Snapped"
```

**Avoid — vague or repetitive:**
```
subtitle: "Big Night of NBA Action · Multiple Stars Shine · Close Games"
```

**Rules:**
- Exactly 3 bullets separated by ` · ` (middot with spaces)
- Each bullet names a player or team — no generic phrases
- Ordered by narrative weight (biggest story first)

---

## Game Recap

**Good — narrative arc, specific numbers, context:**
```ts
recap: "Trailing 66-51 at halftime, Chicago erupted with a 27-0 run in the fourth quarter to end an 11-game losing streak. Giddey's triple-double was his 15th as a Bull, tying Scottie Pippen for second on the franchise's all-time list. Milwaukee missed 17 consecutive shots in the fourth. Bears coach Ben Johnson watched from a suite alongside Pippen.",
```

**Avoid — just listing stats:**
```ts
recap: "Giddey had 20 points, 14 rebounds, and 10 assists. The Bulls won 120-97. Milwaukee shot poorly.",
```

**Rules:**
- Lead with the story, not the score
- Include at least one specific number that tells the story (27-0 run, 17 missed shots)
- End with a detail that adds color or context (Pippen in the suite)
- 3–5 sentences

---

## Pulse Index Note

**Good — explains WHY the rank, not just what happened:**
```ts
note: "35/13/9 in a loss. Denver has lost 4 of 6 since All-Star break without Aaron Gordon.",
```

**Good — forward-looking context:**
```ts
note: "5+ weeks out with right calf strain. Return vs. Celtics tonight is the night's biggest story.",
```

**Avoid — just restating the stat line:**
```ts
note: "Had a great game with 35 points and 13 rebounds.",
```

**Rules:**
- 1–2 sentences max
- Explain the team/narrative context, not just the box score
- For injured players in the index: explain why they still matter tonight

---

## Media Reaction Quotes

**Good — sounds like the journalist's actual voice, takes a stance:**
```ts
{
  outlet: "ESPN",
  author: "Zach Lowe",
  quote: "Jokic put up 35/13/9 and it still wasn't enough. Denver's supporting cast has been a disaster since the All-Star break. This is a team that needs Aaron Gordon back desperately.",
  topic: "Denver's struggles without Gordon",
  sentiment: "cold",
}
```

**Good — hot take with specific detail:**
```ts
{
  outlet: "Bleacher Report",
  author: "Jake Fischer",
  quote: "Josh Giddey just tied Scottie Pippen for second on the Bulls' all-time triple-double list. Let that sink in. And they did it with a 27-0 run after trailing by 15 at halftime. Chicago is ALIVE.",
  topic: "Giddey ties Pippen, Bulls end skid",
  sentiment: "hot",
}
```

**Avoid — generic praise with no angle:**
```ts
{
  quote: "It was a great performance by Giddey tonight. The Bulls played well.",
  sentiment: "hot",
}
```

**Rules:**
- Write in the journalist's recognizable voice (Lowe = analytical; Simmons = pop culture references; Fischer = insider sourcing)
- Each quote should take a clear position or reveal something specific
- Cover 3–4 different stories across the 6 quotes — don't stack 3 quotes on the same game
- Mix sentiments: aim for 3 hot, 1–2 cold, 1 neutral

---

## Archive Entry

**Good — headline captures three distinct stories, topStory has a sharp angle:**
```ts
{
  id: "2026-03-02",
  date: "2026-03-02",
  displayDate: "March 2, 2026",
  headline: "Giddey Ties Pippen · Jokic's 35/13/9 in a Loss · Spurs' Streak Snapped",
  subheadline: "Chicago's 27-0 fourth-quarter run ends an 11-game skid as Giddey joins franchise history.",
  gamesCount: 11,
  topStory: "Josh Giddey recorded his 15th triple-double as a Bull — tying Scottie Pippen for second on the franchise's all-time list — as Chicago erased a 15-point halftime deficit with a 27-0 fourth-quarter run to snap an 11-game losing streak. Nikola Jokic posted 35/13/9 in Denver's loss to Minnesota, while the Spurs' 11-game win streak ended at MSG.",
  topPlayer: "Nikola Jokic",
  topStatLine: "35 PTS · 13 REB · 9 AST (loss)",
  tags: ["Giddey", "Jokic", "Wembanyama", "Spurs Streak", "Celtics", "Giannis Return"],
  players: ["Josh Giddey", "Nikola Jokic", "Victor Wembanyama", "Neemias Queta", "Shai Gilgeous-Alexander", "Luka Doncic", "Giannis Antetokounmpo"],
  teams: ["CHI", "Chicago Bulls", "DEN", "Denver Nuggets", "SAS", "San Antonio Spurs", "BOS", "Boston Celtics", "NYK", "New York Knicks", "OKC", "Oklahoma City Thunder"],
}
```

**Rules for `tags`:** 5–7 items. Mix player last names, team names, and story keywords. These are the clickable chips in the Archive filter UI.

**Rules for `players`:** Full names only. Include all players mentioned in the topStory + top performers from each game. This powers the player autocomplete search.

**Rules for `teams`:** Include both abbreviation AND full name for each team featured. This ensures both "BOS" and "Celtics" match in search.

---

## Fantasy Alert

**Good — specific, actionable, explains the fantasy logic:**
```ts
{
  player: "Neemias Queta",
  team: "BOS",
  action: "add",
  reason: "Career-high 27/17/3 with Tatum and Brown both out. Available in 70%+ of leagues. Start him as long as both are sidelined.",
  urgency: "high",
}
```

**Avoid — vague:**
```ts
{
  player: "Neemias Queta",
  action: "add",
  reason: "He played well last night.",
  urgency: "high",
}
```
