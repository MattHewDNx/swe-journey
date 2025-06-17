/**
 * This script defines a list of to-do tasks and contains
 * a function to process this list, logging only the tasks
 * that are not yet complete.
 */
const todos = [
  { id: 1, task: "Learn JavaScript fundamentals", completed: true },
  { id: 2, task: "Master Git and GitHub", completed: true },
  { id: 3, task: "Build a to-do list processor", completed: false },
  { id: 4, task: "Prepare for technical interviews", completed: false }
];

// REFACTORED to be an arrow function
const logIncompleteTasks = (todoList) => {
  console.log("--- Incomplete Tasks (ES6 Version) ---");
  for (let i = 0; i < todoList.length; i++) {
    const currentTodo = todoList[i];
    if (currentTodo.completed === false) {
      // REFACTORED to use a template literal
      console.log(`Task to complete: ${currentTodo.task}`);
    }
  }
};

logIncompleteTasks(todos);