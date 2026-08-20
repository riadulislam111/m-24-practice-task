"use strict";
// Notification Center Renderer
// TODO: define types for LikeNotification and SystemNotification
// (remember: actionUrl on SystemNotification is optional)
Object.defineProperty(exports, "__esModule", { value: true });
function renderNotification(notification) {
    if (notification.type === "like") {
        return `${notification.fromUser} liked your post.`;
    }
    if (notification.type === "system") {
        if (notification.actionUrl) {
            return `System: ${notification.message} (Tap to view)`;
        }
        return `System: ${notification.message}`;
    }
    return ";";
}
console.log(renderNotification({ type: "like", fromUser: "Aisha" }));
console.log(renderNotification({ type: "system", message: "Maintenance complete." }));
console.log(renderNotification({ type: "system", message: "Your subscription is expiring soon.", actionUrl: "/billing" }));
//# sourceMappingURL=problem-8.js.map