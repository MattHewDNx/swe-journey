/**
 * This script demonstrates the asynchronous nature of JavaScript using setTimeout.
 */

console.log("1. Start of script.");

// setTimeout is asynchronous. It starts the timer but does NOT wait.
setTimeout(() => {
  // This callback function will run only AFTER the 2-second delay.
  console.log("3. This message is logged after 2 seconds.");
}, 2000); // 2000 milliseconds = 2 seconds

console.log("2. End of script.");