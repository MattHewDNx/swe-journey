/**
 * This script demonstrates basic DOM manipulation.
 */

console.log("Script loaded!");

// 1. Select an element from the DOM using its ID.
// The '#' signifies that we are looking for an ID.
const mainHeading = document.querySelector('#main-heading');

// 2. Change the text content of the selected element.
mainHeading.textContent = "Hello, DOM!";

// 3. Change the style of the element.
mainHeading.style.color = "blue";