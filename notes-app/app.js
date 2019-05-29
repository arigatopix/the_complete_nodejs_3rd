// import package
const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

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
// console.log(chalk.blue.inverse.bold("Sucess!"));
// console.log(chalk.red.inverse.bold("Error!"));
// console.log(chalk.bold.bgCyan("Pastel"));

// arg vector รับค่า input จาก command line
// console.log(process.argv); // ได้ array dir ของ node.js และได้รับค่าจาก cmd

// * input command
// const command = process.argv[2];

// if (command === "add") {
//   console.log("Adding note!");
// } else if (command === "remove") {
//   console.log("Removing note!");
// }

// * Work with yargs รับ input จาก command line

// Customize yargs version
// จะขึ้นใน --help ว่าสามารถเรียกใช้งานจาก cml คำสั่งอะไรได้บ้าง
yargs.version("1.1.0");

// * Create Command นอกเหนือจาก default สำหรับรับคำสั่งจาก command line

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    // option เอาไว้ระบุการรับค่าจาก command สามารถตั้ง data type ได้
    title: {
      describe: "Note title", // บอกว่า option นี้คืออะไร
      demandOption: true, // ตั้งค่าให้กรอก command line เข้ามา ถ้าไม่มี option นี้ตอนสั่ง command ก็จะ error
      type: "string" // type ว่าให้ใส่ string เท่านั้น
    }
  },
  handler: function(argv) {
    // แสดงผลข้อความเมื่อเรียกใช้ command
    console.log("Title: ", argv.title);
  }
});

// crate 'remove' command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("Removing a note!");
  }
});

// create 'list' command
yargs.command({
  command: "list",
  describe: "list your notes",
  handler: function() {
    console.log("Listing out all note");
  }
});

// create 'read' command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function() {
    console.log("Reading a note");
  }
});

// * output ต้องมี clg เพราะว่าต้องแสดงผลใน command line
// แสดงผลเป็น object
// console.log(yargs.argv);

// output โดยใช้ yargs.parse() จะแสดงผลตาม command ที่สร้าง
// แสดงผล function() ใน command
yargs.parse();
