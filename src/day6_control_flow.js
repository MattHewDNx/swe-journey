/**
 * Determines a status message based on student status.
 * @param {boolean} isStudent - The user's student status.
 * @returns {string} A description of their current status.
 */
function getStatusDescription(isStudent) {
  // First, state the logic in plain English.
  // If the user is a student, return the student message. Otherwise, return the professional message.
  if (isStudent === true) {
    return "I am currently a student.";
  } else {
    return "I am a working professional.";
  }
}

// --- Calling the function ---
const matthewIsStudent = true;
const matthewStatus = getStatusDescription(matthewIsStudent);

console.log("Status:", matthewStatus);

// --- Try it with a different value ---
const jessicaIsStudent = false;
const jessicaStatus = getStatusDescription(jessicaIsStudent);
console.log("Status:", jessicaStatus);