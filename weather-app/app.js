console.log("Starting");

setTimeout(() => {
  console.log("Delay 2 second...");
}, 2000);

setTimeout(() => {
  //? ใช้ setTimeOut 0 วินาทีจริง แต่จะแสดงผลหลังจาก 'Stopping'
  // setTimeout เป็น code ของ C++ ที่ทำงานเบื้องหลัง เมื่อ JS เจอมันจะเอา setTimeout ไว้ที่ background
  // ระหว่างนั้น JS จะ run script ทุกอย่างใน call stack โดยจะมี event loop คอยเช็คว่า call stack ทำงานจบรึยัง
  // หลังจาก stack run ทุกอย่าง ถึงจะเรียก function ใน background มาไว้ที่  callback queue
  // event loop จะเช็คก่อนว่ามี script ค้างที่ call stack หรือไม่ ถ้าหากไม่จะเรียก callback queue ไปแสดงผลใน call stack
  console.log("Delay 0 second...");
}, 0);

console.log("Stopping");

// event loop จะดู call stack กับ callback queue ถ้า stack ไม่มี จะส่งงานที่ queue ไปแสดงผล
