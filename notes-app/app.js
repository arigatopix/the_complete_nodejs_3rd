// import package
const validator = require('validator');
const chalk = require('chalk');
// import another files
const utils = require('./utils');
const getNotes = require('./notes');

// * จะเข้าไปใช้ variable ใน utils.js ไม่ได้ ต้อง export module  จาก module ก่อน
console.log(utils.name);

// * import and use function
const sum = utils.add(2, 5);
console.log(sum);

// * assigment get notes from notes.js
const msg = getNotes();
console.log(msg);

// * import package validator
console.log(validator.isEmail('bas@gmail.com'));
console.log(validator.isURL('bit/tamsreport'));

// * import chalk package library
console.log(chalk.bold.bgRed('Hello World'));
console.log(chalk.bold.bgCyan('Pastel'));
console.log(chalk.inverse.bgCyan('Pastel'));
console.log(chalk.magenta.inverse.bold('Pastel'));
