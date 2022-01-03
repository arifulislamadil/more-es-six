//var , let , const
var name = "adil";
name = "Arif";
var name = "sharif";

let name2 = "Lal";
name2 = "Kal";

const name3 = "Kali";
console.log(name3);
// templete string
const num3 = 33;
const song = `amar shoh to
prane bajay bashiy valobashi ${num3}
`
console.log(song);

//Default Parameter
function addNumber(num1, num2 = 0) {
    return num1 + num2;
}

console.log(addNumber(3));

//spread operator
const numbers = [1, 2, 3, 4, 5, 6];
const numbersMax = Math.max(...numbers);
console.log(numbersMax);

//arrow function
const square = (a, b) => a * b;
const square = a => a * 3;
console.log(square(3));