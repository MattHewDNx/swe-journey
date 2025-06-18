/**
 * This script demonstrates modern array methods (.filter and .map)
 * to process a list of to-do tasks.
 */
const todos = [
  { id: 1, task: "Learn JavaScript fundamentals", completed: true },
  { id: 2, task: "Master Git and GitHub", completed: true },
  { id: 3, task: "Use modern array methods", completed: false },
  { id: 4, task: "Prepare for technical interviews", completed: false }
];

// 1. SELECT only the incomplete tasks using .filter()
// The filter method loops through 'todos' and returns a NEW array
// containing only the items where our callback function returns 'true'.
const incompleteTasks = todos.filter((todo) => {
  return todo.completed === false;
});

// We can make the above even shorter! If an arrow function is one line
// that returns a value, you can remove the {} and 'return'.
// const incompleteTasks = todos.filter(todo => todo.completed === false);

console.log("--- Incomplete Tasks (Objects) ---");
console.log(incompleteTasks);


// 2. TRANSFORM the result into an array of just the task names using .map()
// The map method takes the 'incompleteTasks' array and returns a NEW array
// where each item has been converted into just its task name.
const incompleteTaskNames = incompleteTasks.map((todo) => {
  return todo.task;
});
// const incompleteTaskNames = incompleteTasks.map(todo => todo.task);

console.log("\n--- Incomplete Task Names (Strings) ---");
console.log(incompleteTaskNames);