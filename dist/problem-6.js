"use strict";
// Problem 6 — Music App Feature Access
Object.defineProperty(exports, "__esModule", { value: true });
function canAccessOfflineMode(tier) {
    if (tier === "free") {
        return false;
    }
    else if (tier === "pro") {
        return true;
    }
    else if (tier === "premium")
        return true;
}
// console.log(canAccessOfflineMode("free"));
// console.log(canAccessOfflineMode("pro"));
// console.log(canAccessOfflineMode("premium"));
//# sourceMappingURL=problem-6.js.map