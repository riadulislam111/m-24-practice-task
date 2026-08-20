"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findMenuItemsByTag(menu, tag) {
    let tagItem = menu.filter((item) => {
        return item.tag === tag;
    });
    return tagItem;
}
const menu = [
    { name: "Veggie Bowl", price: 350, tag: "vegan" },
    { name: "Tofu Wrap", price: 300, tag: "vegan" },
    { name: "Chicken Wings", price: 450, tag: "spicy" },
    { name: "Beef Burger", price: 500, tag: "spicy" }
];
// console.log(findMenuItemsByTag(menu, "vegan"));
// console.log(findMenuItemsByTag(menu, "gluten-free"));
//# sourceMappingURL=problem-7.js.map