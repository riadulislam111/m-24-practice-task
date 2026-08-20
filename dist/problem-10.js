"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateRentalFee(vehicle, minutes) {
    if (vehicle === "scooter") {
        return (10 + minutes * 2);
    }
    if (vehicle === "ebike") {
        return (15 + minutes * 3);
    }
    if (vehicle === "moped") {
        return (25 + minutes * 5);
    }
}
console.log(calculateRentalFee("scooter", 20));
console.log(calculateRentalFee("ebike", 20));
console.log(calculateRentalFee("moped", 20));
console.log(calculateRentalFee("moped", 0));
//# sourceMappingURL=problem-10.js.map