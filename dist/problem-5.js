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
//# sourceMappingURL=problem-5.js.map