"use strict";
// Esports Tournament Player Stats
Object.defineProperty(exports, "__esModule", { value: true });
function getPlayerStats(player) {
    let totalScore = player.scores.reduce((acc, current) => acc + current, 0);
    let averageScore = totalScore / player.scores.length;
    let rank = "";
    if (averageScore >= 80) {
        rank = "MVP";
    }
    else {
        rank = "Rookie";
    }
    return {
        name: player.name,
        average: averageScore,
        rank
    };
}
console.log(getPlayerStats({
    name: "Nova",
    scores: [90, 85, 95, 80]
}));
// Expected output:
// { name: "Nova", average: 87.5, rank: "MVP" }
// another example:
console.log(getPlayerStats({
    name: "Zex",
    scores: [60, 55, 70, 50]
}));
// Expected output:
// { name: "Zex", average: 58.75, rank: "Rookie" }
//# sourceMappingURL=problem-5.js.map