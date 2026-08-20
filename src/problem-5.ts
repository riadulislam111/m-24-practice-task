// Esports Tournament Player Stats

// TODO: define a type for a player

type Player = {
  name: string;
  scores: number[];
};

function getPlayerStats(player: Player): {
  name: string;
  average: number;
  rank: string;
} {
  let totalScore: number = player.scores.reduce(
    (acc, current) => acc + current,
    0,
  );
  let averageScore: number = totalScore / player.scores.length;

  let rank: string = "";
  if (averageScore >= 80) {
    rank = "MVP";
  } else {
    rank = "Rookie";
  }

  return {
    name: player.name,
    average: averageScore,
    rank,
  };
}

// console.log(getPlayerStats({
//     name: "Nova",
//     scores: [90, 85, 95, 80]
// }));

// console.log(getPlayerStats({
//     name: "Zex",
//     scores: [60, 55, 70, 50]
// }));
