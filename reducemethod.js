let numbers = [1, 2, 3];
/* let sum = 0;
for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum); */

let sum = numbers.reduce(function (acc, curr){
    return acc + curr;
});
console.log(sum);

let shoppingCart = [{
    product: 'phone',
    qty: 1,
    price: 699
},
{
    product: 'Screen Protector',
    qty: 1,
    price: 9.98
},
{
    product: 'Memory Card',
    qty: 2,
    price: 20.99
}
];

let shop = shoppingCart.reduce(function(acc, curr){
    return acc + curr.price * curr.qty;
}, 0);
console.log(shop);

