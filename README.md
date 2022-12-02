# Run the solution

## 1. Red Cards

```
npm run exec
```
Solution in `redCardsByTeam.json`

# Tiny Interview #12

In this practice interview, you have three CSV files containing historical data of all FIFA World Cups between 1930 and 2014. The content and location of each file is available in the "Files" tab.

- `WorldCups.csv` contains data about each World Cup tournament : year, hosting country, ...
- `WorldCupMatches.csv` is related to all matches and their statistics: teams, stadium, score, ...
- `WorldCupPlayers.csv` contains individual informations for each player in every match (referenced by MatchID): name, goals scored, shirt number, ...

Select any language you want (click the three dots to the top-left of this editor), then answer the following questions:

---

## 1. Red cards

Which country received the most red cards per match on average?

Hints:
- All events related to players (such as red cards) during a match are in the 'Event' column of that player. For example, `P7' R110'` means the player scored a penalty kick at the 7th minute of this match and got a red card at the 110th.
- There are two teams tied for this record, and both were only present at the 2006 World Cup. What a year!

---

## 2. La Remontada

Which teams had the most comebacks? (Matches where they were losing at half-time but ended up winning)

Hints:
- Be careful: you also need to count matches won by penalty shootout. This case is specified in the "Win conditions" column of the match.
- The team you're looking for has won by comeback 10 times. Their first one was against a country that doesn't exist anymore!

---

## 3. The champion's curse

There is a famous malediction in the World Cup, saying that the winning team will not move past group stage on the following edition.

The curse was broken by France by qualifying in 2022 after winning in 2018 (allez les bleus!). Which other teams have also accomplished this, and in which years?

Hints:
- Any team who passed group stage will play in at least one match of "Round of 16", "Quarter-finals", "Semi-finals" or "Final".
- The curse was broken only 9 times between the first World Cup and 2014.

---

## 4. The underdog

There is a player who played in two World Cups, and started all his matches on the bench as a substitute. The first time he was called on the field was in the second half-time of his 8th match, and he managed to score a goal during that match. Who is this player?

Hints:
- Players who start the match as substitutes will have their "Line-up" column set to "N".
- All events related to players (such as red cards) during a match are in the 'Event' column of that player. For example, `I14' G80'` means the player entered the field at the 14th minute of this match and scored a goal at the 80th.

---

#### Want more?
Also check out [last week's interview](https://coderpad.io/blog/interviewing/tiny-interviews-world-cup-sql/) which had the same dataset loaded in a SQL database, with another set of questions to train your database skills!