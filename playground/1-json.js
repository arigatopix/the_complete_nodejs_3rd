const fs = require("fs");

// * JSON converse
/* 
const book = {
  title: "The Node.js complete guide",
  author: "Andrew Mead"
};

// * converse to JSON
const bookJSON = JSON.stringify(book);
// จะเข้าไปใช้งาน property เช่น bookJSON.title ไม่ได้
// console.log(bookJSON);

// write to file
fs.writeFileSync("1-json.json", bookJSON);

// --------------
// * Converse to Object
// const parseData = JSON.parse(bookJSON);
// console.log(parseData);
// console.log(parseData.author);
 */

// * Read json file
/* 
// ดึงข้อมูลจาก 1-json.json โดยใช้ node.js จะได้ buffer เป็นก้อนๆ
const dataBuffer = fs.readFileSync("1-json.json");
// แปลงจาก buffer เป็น string
const dataJSON = dataBuffer.toString();
// แปลง json เป็น object
const data = JSON.parse(dataJSON);
// output
console.log(data.title);
 */

// * Assignment *
// Load and parse the JSON data (Buffer > toString())
// LOAD
const dataBuffer = fs.readFileSync("1-json.json");
// Buffer to JSON
const dataJSON = dataBuffer.toString();
// JSON to Object
const data = JSON.parse(dataJSON);
console.log(data);

// Change the name and age property using your info
const ownData = { ...data, name: "Teeruch", age: 26 };

// Stringify to JSON
const ownDataJSON = JSON.stringify(ownData);

// Write to 1-json.json
fs.writeFileSync("1-json.json", ownDataJSON);
