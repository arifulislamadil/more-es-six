const numbers = [5, 13, 7, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number < 10);
console.log(bigNumbers);
//Output: [30]


const products = [
    { name: 'Laptop', price: 32000, brand: 'Lenovo', color: 'Silver' },
    { name: 'Phone', price: 700, brand: 'Iphone', color: 'Golden' },
    { name: 'Watch', price: 3000, brand: 'Casio', color: 'Yellow' },
    { name: 'Aunglass', price: 300, brand: 'Ribon', color: 'Blue' },
    { name: 'Camera', price: 9000, brand: 'Lenovo', color: 'Gray' },
];
const bigNumbers = products.filter(product => product.price > 4000);
console.log(bigNumbers);
//Output: [30]