import csv from 'csv-parser';
import fs from 'fs';

interface Player {
  name: string;
  roundId: number;
  matchId: number;
  teamInitials: string;
  coachName: string;
  lineUp: string;
  shirtNumber: string;
  playerName: string;
  position: string;
  event: string;
  redCard: number;
}

const players: Player[] = [];

fs.createReadStream(__dirname + '/../csv/WorldCupPlayers.csv')
  .pipe(csv())
  .on('data', (data) => {
    const player: Player = {
      name: data['Player Name'],
      roundId: parseInt(data['RoundID']),
      matchId: parseInt(data['MatchID']),
      teamInitials: data['Team Initials'],
      coachName: data['Coach Name'],
      lineUp: data['Line-up'],
      shirtNumber: data['Shirt Number'],
      playerName: data['Player Name'],
      position: data['Position'],
      event: data['Event'],
      redCard: 0,
    };
    if (player.event.includes('R')) {
      player.redCard = player.event.split('R').length;
    }
    players.push(player);
  })
  .on('end', () => {
    const redCardsByTeam = players.reduce((acc, player) => {
      const team = player.teamInitials;
      acc[team] = acc[team] || {
        totalRedCards: 0,
        matches: [],
        averageRedCards: 0,
      };
      acc[team].matches.push(player.matchId);
      // remove duplicates
      acc[team].matches = [...new Set(acc[team].matches)];
      acc[team].totalRedCards += player.redCard;
      acc[team].averageRedCards =
        acc[team].totalRedCards / acc[team].matches.length;

      return acc;
    }, [] as unknown as { [key: string]: { totalRedCards: number; matches: number[]; averageRedCards: number } });
    // sort by avgRedCards
    const sortedRedCardsByTeam = Object.entries(redCardsByTeam).sort(
      (a, b) => b[1].averageRedCards - a[1].averageRedCards,
    );
    // save sortedRedCardsByTeam to a json file called redCardsByTeam.json
    fs.writeFileSync(
      __dirname + '/../redCardsByTeam.json',
      JSON.stringify(sortedRedCardsByTeam, null, 2),
    );
  });
