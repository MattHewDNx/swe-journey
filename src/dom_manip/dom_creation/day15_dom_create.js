/**
 * This script dynamically renders a list of to-do items to the DOM.
 */
const todos = [
    { task: "Master Git and GitHub", completed: true },
    { task: "Learn JavaScript fundamentals", completed: true },
    { task: "Build a dynamic to-do list", completed: false },
    { task: "Prepare for technical interviews", completed: false }
];

// 1. Select the parent container where the list will be rendered.
const listContainer = document.querySelector('#todo-list-container');

// 2. Loop through the data using a modern array method.
todos.forEach((todo) => {
    // a. Create a new list item (<li>) element.
    const listItem = document.createElement('li');

    // b. Set the text content of the list item.
    listItem.textContent = todo.task;

    // c. (Bonus) If the task is completed, add a CSS class to change its style.
    if (todo.completed === true) {
        listItem.classList.add('completed-task');
    }

    // d. Append the new list item to its parent container (the <ul>).
    listContainer.appendChild(listItem);
});