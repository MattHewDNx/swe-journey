// -- User Profile --
/**
 * Generates a personalized greeting string.
 * @param {string} firstName - The user's first name.
 * @param {number} age - The user's current age.
 * @returns {string} A complete greeting sentence.
 */
function createGreeting(firstName, age) {
  const message = "Hello, my name is " + firstName + " and I am " + age + " years old.";
  return message;
}

// Store the user's first name as a string.
let firstName = "Matthew";

// Store the user's last name as a string.
let lastName = "Nugraha";

// Store the user's age as a number.
let age = 20; // Change this to your age

// Store the user's student status as a boolean.
let isStudent = true;

// -- Output --
// Print the stored values to the console to verify them.
const myProfile = createGreeting(firstName, age);
console.log(myProfile);