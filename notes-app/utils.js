console.log('from utils.js');

const name = 'Teeruch';

const add = (a, b) => {
  return a + b;
}

// ต้อง exports ให้ไฟล์อื่น ไฟล์อื่นใช้งานไม่ได้ (คนละ scope)
module.exports = {
  name,
  add
}