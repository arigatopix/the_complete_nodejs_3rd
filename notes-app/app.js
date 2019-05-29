// import package
const validator = require("validator");
const chalk = require("chalk");
// import another files
// const utils = require("./utils");
// const getNotes = require("./notes");

// * จะเข้าไปใช้ variable ใน utils.js ไม่ได้ ต้อง export module  จาก module ก่อน
// console.log(utils.name);

// * import and use function
// const sum = utils.add(2, 5);
// console.log(sum);

// * assigment get notes from notes.js
// const msg = getNotes();
// console.log(msg);

// * import package validator
// console.log(validator.isEmail("bas@gmail.com"));
// console.log(validator.isURL("bit/tamsreport"));

// * import chalk package library
console.log(chalk.blue.inverse.bold("Sucess!"));
console.log(chalk.red.inverse.bold("Error!"));
console.log(chalk.bold.bgCyan("Pastel"));

// arg vector รับค่า input จาก command line
console.log(process.argv); // ได้ array dir ของ node.js และได้รับค่าจาก cmd

// input command
const command = process.argv[2];

if (command === "add") {
  console.log("Adding note!");
} else if (command === "remove") {
  console.log("Removing note!");
}
