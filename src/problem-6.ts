// Problem 6 — Music App Feature Access

type Tier = "free" | "pro" | "premium";
 
function canAccessOfflineMode(tier: Tier): boolean {
 
    if(tier === "free") {
        return false;
    } else if (tier === "pro") {
        return true;
    } else if (tier === "premium")
        return true;
    
 
}

// console.log(canAccessOfflineMode("free"));
// console.log(canAccessOfflineMode("pro"));
// console.log(canAccessOfflineMode("premium"));


