// EV Scooter Rental Fee Calculator
type VehicleType = "scooter" | "ebike" | "moped";
 type UnlockFee = {
    scooter: 10,
    ebike: 15,
    moped: 25
 }
 type CostPerMinute = {
    scooter: 2,
    ebike: 3,
    moped: 5,
 }
function calculateRentalFee(vehicle: VehicleType, minutes: number): number {
    
    if(vehicle === "scooter") {
         return 10 + (minutes * 2)
}
 if(vehicle === "ebike"){
   return 15 + (minutes * 3) 
 }
 if(vehicle === "moped"){
    return 25 + (minutes * 5)
 }
 
}
// console.log(calculateRentalFee("scooter", 20));
 
// console.log(calculateRentalFee("ebike", 20));
 
// console.log(calculateRentalFee("moped", 20));
// console.log(calculateRentalFee("moped", 0));
