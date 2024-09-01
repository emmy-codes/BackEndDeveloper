// basic object representing constants
var Categories;
(function (Categories) {
    Categories["ELECTRONICS"] = "Electronics";
    Categories["GROCERIES"] = "Groceries";
    Categories["CLOTHING"] = "Clothing";
})(Categories || (Categories = {}));
;
;
var products = [
    { id: 1, name: "Laptop", price: 999.99, category: Categories.ELECTRONICS },
    { id: 2, name: "T-Shirt", price: 19.99, category: Categories.CLOTHING },
    { id: 3, name: "Bananas", price: 1.99, category: Categories.GROCERIES }
];
var shoppingCart = [];
var addToCart = function (product) {
    shoppingCart.push(product);
    console.log("".concat(product.name, " has been added to your cart."));
};
var calculateTotal = function (cart) {
    var total = 0;
    cart.forEach(function (item) { return total += item.price; });
    return total.toFixed(2);
};
var displayCart = function (cart) {
    if (cart.length === 0) {
        console.log("Your cart is empty.");
        return;
    }
    console.log("Your cart contains: ");
    cart.forEach(function (item) {
        console.log("- ".concat(item.name, " (").concat(item.category, "): $").concat(item.price));
    });
    console.log("Total: $".concat(calculateTotal(cart)));
};
addToCart(products[0]); // Adding Laptop
addToCart(products[2]); // Adding Bananas
displayCart(shoppingCart);
