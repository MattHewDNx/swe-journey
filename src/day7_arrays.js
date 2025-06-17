/**
 * Demonstrates the creation and manipulation of an array.
 */

// This array holds my current software engineering skills.
// The elements represent Git, JavaScript, and HTML, respectively.
const skills = ["Git", "JavaScript", "HTML"];

// --- Accessing Array Elements ---
// Arrays are "zero-indexed", so the first item is at index 0.
const firstSkill = skills[0]; // Accesses "Git"
console.log("My first learned skill was:", firstSkill);

// --- Adding to an Array ---
// The .push() method adds a new item to the end of the array.
console.log("Original skills:", skills);
skills.push("CSS");
console.log("Skills after adding CSS:", skills);

// --- Checking the length ---
// The .length property tells you how many items are in the array.
const numberOfSkills = skills.length;
console.log("Total number of skills:", numberOfSkills);