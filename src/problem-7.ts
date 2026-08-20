// Food Delivery Menu Filter
type MenuItem = {
    name: string,
    price: number,
    tag: string
}
function findMenuItemsByTag(menu: MenuItem[], tag: string): MenuItem[] {
 


    
    let tagItem:MenuItem[] = menu.filter((item) => {
       return item.tag === tag;
    });
  return tagItem;
}

const menu:MenuItem[] = [
    { name: "Veggie Bowl", price: 350, tag: "vegan" },
    { name: "Tofu Wrap", price: 300, tag: "vegan" },
    { name: "Chicken Wings", price: 450, tag: "spicy" },
    { name: "Beef Burger", price: 500, tag: "spicy" }
];
 
// console.log(findMenuItemsByTag(menu, "vegan"));
 
// console.log(findMenuItemsByTag(menu, "gluten-free"));

