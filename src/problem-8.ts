// Notification Center Renderer
// TODO: define types for LikeNotification and SystemNotification
// (remember: actionUrl on SystemNotification is optional)
 
type LikeNotification = {
    type: "like",
    fromUser: string
}

type SystemNotification = {
    type: "system",
    message: string,
    actionUrl?: string;

}

function renderNotification(notification: LikeNotification | SystemNotification): string {
   if (notification.type === "like") {
    return `${notification.fromUser} liked your post.`
   } 
   if(notification.type === "system") {
    if(notification.actionUrl){
        return `System: ${notification.message} (Tap to view)`
    }
    return `System: ${notification.message}`
   }
 
   return ";"
}

console.log(renderNotification({ type: "like", fromUser: "Aisha" }));
console.log(renderNotification({ type: "system", message: "Maintenance complete."}));
console.log(renderNotification({ type: "system", message: "Your subscription is expiring soon.", actionUrl: "/billing" }));
