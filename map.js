const numbers = [2, 4, 6, 8];
// const doubleIt = number => number * 2;
// console.log(doubleIt);
const result = numbers.map(a => a * 2);
console.log(result);
//Output: [ 4, 8, 12, 16 ]


const numbers = [2, 4, 6, 8];
const result = numbers.map(a => a * 2);
console.log(result);
//Output: [ 4, 8, 12, 16 ]

const numbers = [2, 4, 6, 8];
const result = numbers.map(a => a * a);
console.log(result);
//Output: [ 4, 8, 12, 16 ]

const products = [
    { name: 'Laptop', price: 32000, brand: 'Lenovo', color: 'Silver' },
    { name: 'Phone', price: 700, brand: 'Iphone', color: 'Golden' },
    { name: 'Watch', price: 3000, brand: 'Casio', color: 'Yellow' },
    { name: 'Aunglass', price: 300, brand: 'Ribon', color: 'Blue' },
    { name: 'Camera', price: 9000, brand: 'Lenovo', color: 'Gray' },
];

const getProduct = products.map(product => product.name);
console.log(getProduct);