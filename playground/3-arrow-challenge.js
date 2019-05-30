//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
  getTasksToDo() {
    // filter array ออกมา เอาเฉพาะ incompleted
    // พร้อมกับ return ไปใช้งานข้างนอก
    return this.tasks.filter(task => task.completed === false);

    // return เอาไปใช้งานนอก object
    // return taskToDo;
  },
  tasks: [
    {
      text: "Grocery shopping",
      completed: true
    },
    {
      text: "Clean yard",
      completed: false
    },
    {
      text: "Film course",
      completed: false
    }
  ]
};

// output
console.log(tasks.getTasksToDo());
