const shoppingCart = [
    { id: 1, product: "HDMI Cable", price: 10 },
    { id: 2, product: "USB-C Cable", price: 15 },
    { id: 3, product: "USB-C Hub", price: 25 },
];

//ADDING TO AN ARRAY
[...shoppingCart, { id: 4, product: "USB-C Adapter", price: 20 }];
//REMOVING FROM AN ARRAY
shoppingCart.filter((item) => item.id !== 2);
//UPDATING AN ARRAY 
shoppingCart.map((item) => {
    return {
        ...item,
        product: item.product.toLowerCase(),
    };
});