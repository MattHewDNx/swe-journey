/**
 * Demonstrates creating and accessing properties of an object.
 */

// Define a user object with the following properties:
// - id: A unique number.
// - username: A string for their login name.
// - isStudent: A boolean indicating their status.
// - skills: An array of strings listing their skills.
const user = {
  id: 1,
  username: "MatthewDNx",
  isStudent: true,
  skills: ["Git", "JavaScript", "HTML", "CSS"]
};

// --- Accessing Object Data ---
// 1. Log the entire object to see its structure.
console.log("The full user object:");
console.log(user);

// 2. Log a single property using dot notation.
console.log("Username:", user.username);

// 3. Log a value from the array INSIDE the object.
console.log("The user's first skill is:", user.skills[0]);