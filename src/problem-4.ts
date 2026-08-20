// Music App Listening Time Tracker
// TODO: define a type for a single track
 
type Track = {
    title: string,
    minutes: number,
}

function calculateTotalListeningTime(track: Track[]): number {
 
    // write your code here
 if(track.length === 0) {
    return 0;
 }

 let total:number = track.reduce((acc, current) => acc + current.minutes, 0);
 return total;
}

const tracks = [
    { title: "Blinding Lights", minutes: 3 },
    { title: "Levitating", minutes: 4 },
    { title: "Peaches", minutes: 3 }
];
 
// console.log(calculateTotalListeningTime(tracks));
// 10
 
// another example:
const tracks2 = [
    { title: "Flowers", minutes: 3 },
    { title: "Anti-Hero", minutes: 4 }
];
 
// console.log(calculateTotalListeningTime(tracks2));
