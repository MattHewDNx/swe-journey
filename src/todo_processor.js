/**
 * This script defines a list of to-do tasks and contains
 * a function to process this list, logging only the tasks
 * that are not yet complete.
 */

// 1. Data: An array of to-do objects. 
const todos = [
  { id: 1, task: "Learn JavaScript fundamentals", completed: true },
  { id: 2, task: "Master Git and GitHub", completed: true },
  { id: 3, task: "Build a to-do list processor", completed: false },
  { id: 4, task: "Prepare for technical interviews", completed: false }
];

/**
 * Finds and logs all incomplete tasks from a list of todos.
 * @param {Array} todoList - An array of to-do objects.
 */
function logIncompleteTasks(todoList) {
  console.log("--- Incomplete Tasks ---");
  // 2. Logic: Loop through the list.
  for (let i = 0; i < todoList.length; i++) {
    const currentTodo = todoList[i];

    // 3. Decision: Check if the current task is NOT complete.
    if (currentTodo.completed === false) {
      // 4. Action: If it's not complete, log the task's name.
      console.log(currentTodo.task);
    }
  }
}

// 5. Execution: Call the function with our data.
logIncompleteTasks(todos);