/**
 * Demonstrates iterating over an array of objects.
 */

const users = [
  { id: 1, username: "MatthewDNx", email: "matthew@example.com" },
  { id: 2, username: "JaneDoe", email: "jane@example.com" },
  { id: 3, username: "PeterJones", email: "peter@example.com" }
];

// Goal: Loop through the list of users and greet each one by their username.
console.log("--- User Greetings ---");
for (let i = 0; i < users.length; i++) {
  // 1. Access the current user object in the list.
  const currentUser = users[i];
  // 2. Access the 'username' property of that object.
  console.log("Welcome,", currentUser.username);
}

// --- (Bonus) Data Transformation ---
// Goal: Extract just the emails from the user objects into a new, simple array.
const userEmails = []; // Start with an empty array

for (let i = 0; i < users.length; i++) {
  const currentUser = users[i];
  userEmails.push(currentUser.email); // Add the current user's email to the new array
}

console.log("\n--- Transformed Data ---");
console.log("Here is a simple list of all user emails:", userEmails);