// Problem 2 — Smart Home WiFi Signal Status


function getSignalStatus(strength: number): string {
 
    // write your code here
   if(strength <= 20){
    return "Weak";
   }else if(strength <= 50){
    return "Fair";
   } else if(strength <= 80) {
    return "Good";
   } else if(strength <=100) {
    return "Excellent";
   }
   return "invalid"
}


// console.log(getSignalStatus(10));
// // "Weak"
 
// console.log(getSignalStatus(35));
// // "Fair"
 
// console.log(getSignalStatus(65));
// // "Good"
 
// console.log(getSignalStatus(95));
// // "Excellent"
 
// // boundary values to double-check:
// console.log(getSignalStatus(20));
// console.log(getSignalStatus(21));
// console.log(getSignalStatus(80));

