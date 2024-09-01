// ~ def imp
// const sum = require('./math.js'); // module.exports

// console.log(sum(1, 2));

// ~ named imp
// const Math = require('./math.js');

// console.log(Math.sum(10, 20));
// console.log(Math.mult(10, 20));

// req
// const { sum, mult } = require("./math.js");
// console.log(sum(10, 20));
// console.log(mult(10, 20));

const os = require("node:os");
const fs = require("node:fs");
const fsPromises = require("node:fs/promises");
const path = require("node:path");

console.log(os.cpus());
console.log(os.version());

console.log(global);
console.log(process.env); // змінні оточення

console.log(__dirname);
console.log(__filename);

// sync
try {
  const file = fs.readFileSync("./math.js", { encoding: "utf-8" });
  console.log(file);
} catch (err) {
  console.log(err);
}

// async callback
// error first
fs.readFile("./math.js", { encoding: "utf-8" }, (err, file) => {
  if (err) {
    return console.log("err :>> ", err);
  }
  console.log("file :>> ", file);
});

//async promises
fsPromises
  .readFile("./math.js", { encoding: "utf-8" })
  .then((file) => console.log(file))
  .catch((err) => console.log(err));

// path.join() - формує шлях
// path.resolve() - формує абсолютний шлях
