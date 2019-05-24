const utils = require('./utils');

// จะเข้าไปใช้ variable ใน utils.js ไม่ได้ ต้อง export module  จาก module ก่อน
console.log(utils.name);

// import and use function
const sum = utils.add(2,5);
console.log(sum);
