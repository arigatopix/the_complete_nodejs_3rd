// Arrow function example
const square = x => x * x;

console.log(square(3));

// * ES5 syntax
// this คือ object ใน event
// const event = {
//   name: "Birthday Party",
//   printGuestList: function() {
//     console.log("Guest list for " + this.name);
//   }
// };

// * ES2015 syntax
// this จะเป็น global object (จะขยับขึ้นไป 1 step) เหมือนเป็น bind ของ global
// const event = {
//   name: "Birthday Party",
//   printGuestList: () => {
//     // undefined เพราะ this เป็นของนอก event object
//     console.log("Guest list for " + this.name);
//   }
// };

// * ES2015 กรณีจะใช้ method ใน object
const event = {
  name: "Birthday Party",
  guestList: ["Andrew", "Jen", "Mike"],
  printGuestList() {
    // ไม่มี :
    console.log("Guest list for " + this.name);

    // แสดงชื่อแต่ละคนใน guestList ใช้ this ได้ เพราะอยู่ใน object
    this.guestList.forEach(guest => {
      // แสดงชื่อใน array
      // this.name ไม่อยู่ใน function scope ดังนั้นการใช้ function(guest) จะ undefined
      // วิธีแก้มีสองวิธีคือ 1. ใช้ const that = this ใน printGuestList()
      // 2. ใช้ arrow function ตรง forEach
      console.log(guest + " is attending " + this.name);
    });
  }
};

event.printGuestList();
