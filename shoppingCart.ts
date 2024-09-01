// basic object representing constants

enum Categories {
    ELECTRONICS = "Electronics",
    GROCERIES = "Groceries",
    CLOTHING = "Clothing"
};

interface StoreProduct {
    id: number;
    name: string;
    price: number;
    category: Categories;
};

const products: StoreProduct[] = [
    { id: 1, name: "Laptop", price: 999.99, category: Categories.ELECTRONICS },
    { id: 2, name: "T-Shirt", price: 19.99, category: Categories.CLOTHING },
    { id: 3, name: "Bananas", price: 1.99, category: Categories.GROCERIES }
];

let shoppingCart: StoreProduct[] = [];

const addToCart = (product: StoreProduct): void => {
    shoppingCart.push(product);
    console.log(`${product.name} has been added to your cart.`);
};

const calculateTotal = (cart: StoreProduct[]): string => {
    let total = 0;
    cart.forEach((item) => total += item.price);
    return total.toFixed(2);
};

const displayCart = (cart: StoreProduct[]): void => {
    if (cart.length === 0) {
        console.log("Your cart is empty.");
        return;
    }

    console.log("Your cart contains: ");
    cart.forEach((item) => {
        console.log(`- ${item.name} (${item.category}): $${item.price}`);
    });
    console.log(`Total: $${calculateTotal(cart)}`);
};

addToCart(products[0]); // Adding Laptop
addToCart(products[2]); // Adding Bananas
displayCart(shoppingCart);
