// Task1
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100000); // 100000
console.log(100_000); // 100000
console.log(1_0_0_0_0_0); // 100000
console.log(10_00_00); // 100000
console.log(1e4 + 9e4); // 100000
console.log(2e4 + 8e4); // 100000
console.log(3e4 + 7e4); // 100000
console.log(4e4 + 6e4); // 100000
console.log(5e4 + 5e4); // 100000
console.log(5e4 + 50_000); // 100000


// Task2
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991


// Task3
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16


//Task4
let myVar = "100.56789 Views";

console.log(Math.trunc(parseInt(myVar))); // 100
console.log((parseFloat(myVar).toFixed(2))); // 100.57


// Task5
let num = 10;

console.log(Number.isInteger(num) + true); // 2


// Task5
let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(flt.toFixed(false)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.ceil(flt - true)); // 10
console.log(Math.round(flt)); // 10


// Task6
console.log(Math.random() * 4); // 0 || 1 || 2 || 3 || 4