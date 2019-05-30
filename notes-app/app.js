// import package
const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

// import another files
const notes = require("./notes");

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
    // option เอาไว้ระบุการรับค่าจาก command
    title: {
      // บอกว่า option นี้คืออะไร
      describe: "Note title",
      // ตั้งค่าให้กรอก command line เข้ามา ถ้าไม่มี option นี้ตอนสั่ง command ก็จะ error
      demandOption: true,
      // type ว่าให้ใส่ string เท่านั้น
      type: "string"
    },
    body: {
      // Challenge
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    // แสดงผลข้อความเมื่อเรียกใช้ command
    // เก็บข้อมูลใน JSON file
    notes.addNote(argv.title, argv.body);
  }
});

// crate 'remove' command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    // สร้าง option
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    // call notes.js to remove title
    notes.removeNote(argv.title);
  }
});

// create 'list' command
yargs.command({
  command: "list",
  describe: "list your notes",
  handler() {
    console.log("Listing out all note");
  }
});

// create 'read' command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler() {
    console.log("Reading a note");
  }
});

// * output ต้องมี clg เพราะว่าต้องแสดงผลใน command line
// แสดงผลเป็น object
// console.log(yargs.argv);

// output โดยใช้ yargs.parse() จะแสดงผลตาม command ที่สร้าง
// แสดงผล function() ใน command
yargs.parse();
