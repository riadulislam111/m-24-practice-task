"use strict";
// Cloud Storage Usage Tracker
Object.defineProperty(exports, "__esModule", { value: true });
function updateStorageUsage(currentUsageMB, action) {
    if (action.type === "upload") {
        return currentUsageMB + action.sizeMB;
    }
    if (action.type === "delete") {
        let newUsage = currentUsageMB - action.sizeMB;
        if (newUsage < 0) {
            return 0;
        }
        return newUsage;
    }
    return currentUsageMB;
}
// console.log(updateStorageUsage(2000, { type: "upload", sizeMB: 500 }));
// console.log(updateStorageUsage(2000, { type: "delete", sizeMB: 800 }));
// console.log(updateStorageUsage(300, { type: "delete", sizeMB: 1000 }));
//# sourceMappingURL=problem-9.js.map