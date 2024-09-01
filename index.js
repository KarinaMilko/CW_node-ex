// ~ def imp
// const sum = require('./math.js'); // module.exports

// console.log(sum(1, 2));

// ~ named imp
// const Math = require('./math.js');

// console.log(Math.sum(10, 20));
// console.log(Math.mult(10, 20));

// req
const { sum, mult } = require("./math.js");
console.log(sum(10, 20));
console.log(mult(10, 20));
