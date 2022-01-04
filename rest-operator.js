const numbers = [2, 4, 6, 8, 10];
const multi = [];
for (const number of numbers) {
    const result = number * 2;
    multi.push(result);
}
console.log(multi);


const numbers = [2, 4, 6, 8, 10];
function dubleIt(num) {
    const multi = [];
    for (const number of numbers) {
        const result = number * 2;
        multi.push(result);
    }
    return multi
}
console.log(dubleIt(numbers));
//Output: [ 4, 8, 12, 16, 20 ]



function restOp(num) {
    let result = 0;
    for (let i of num) {
        const sum2 = i * i;
        const sum3 = result + sum2;
        result = result + sum3;
    }
    return result;
}
const result33 = [2, 4, 6, 8, 10]
console.log(restOp(result33));


//Rest Operator
function restOp(firstNum, ...args) {
    let result = [];
    for (let i in args) {
        const multi = firstNum * args[i];
        result.push(multi)
    }
    return result;
}
console.log(restOp(3, 2, 3, 5));
//Output:[ 6, 9, 15 ]