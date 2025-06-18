/**
 * This script demonstrates how to listen for and respond to user events.
 */

// State: This variable holds the current count.
let count = 0;

// 1. Select the elements we need to interact with.
const myButton = document.querySelector('#click-me-button');
const counterSpan = document.querySelector('#click-counter');

// 2. Define the function that will run when the event occurs.
const handleClick = () => {
  // a. Increment the count.
  count = count + 1;

  // b. Update the text on the page to show the new count.
  counterSpan.textContent = count;
};

// 3. Attach the event listener to the button.
// We tell it to listen for a 'click' and run the handleClick function when it happens.
myButton.addEventListener('click', handleClick);