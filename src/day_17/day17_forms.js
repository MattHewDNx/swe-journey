/**
 * This script handles user input from a form to display a greeting.
 */

// 1. Select the elements we need.
const greeterForm = document.querySelector('#greeter-form');
const nameInput = document.querySelector('#name-input');
const greetingDisplay = document.querySelector('#greeting-display');

// 2. Add an event listener to the FORM for the 'submit' event.
// The callback function automatically receives the 'event' object.
greeterForm.addEventListener('submit', (event) => {
    // a. PREVENT the default browser action (page reload). This is CRITICAL.
    event.preventDefault();

    // b. Get the text from the input field using the .value property.
    const userName = nameInput.value;

    // c. Update the h2 with the personalized greeting.
    greetingDisplay.textContent = `Hello, ${userName}!`;

    // d. (Bonus) Clear the input field for the next use.
    nameInput.value = '';
});