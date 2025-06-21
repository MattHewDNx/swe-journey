/**
 * This script demonstrates how to chain promises to handle sequential async operations.
 */

// Simulates fetching a user. Resolves successfully.
const fetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "Matthew" }), 1000);
  });
};

// Simulates fetching posts for a user. Resolves successfully.
const fetchPosts = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([`Post 1 for user ${userId}`, `Post 2 for user ${userId}`]), 1000);
  });
};

console.log("Starting process...");
fetchUser()
  .then((user) => {
    console.log(`Got user: ${user.name}`);
    // IMPORTANT: We return the next promise in the chain.
    return fetchPosts(user.id); 
  })
  .then((posts) => {
    // This .then() handles the result of the fetchPosts promise.
    console.log("Got posts:", posts);
  })
  .catch((error) => {
    // This .catch() will run if ANY of the promises in the chain fail.
    console.error("An error occurred:", error);
  });