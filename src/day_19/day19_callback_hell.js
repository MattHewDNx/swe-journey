/**
 * This script demonstrates "Callback Hell" by simulating a sequence of API calls.
 */

// Simulates fetching a user from a database after 1 second.
const getUser = (callback) => {
  setTimeout(() => {
    console.log("Finished fetching user.");
    const user = { id: 1, name: "Matthew" };
    callback(user);
  }, 1000);
};

// Simulates fetching posts for a user after 1 second.
const getPosts = (userId, callback) => {
  setTimeout(() => {
    console.log(`Finished fetching posts for user ${userId}.`);
    const posts = ["Post 1", "Post 2", "Post 3"];
    callback(posts);
  }, 1000);
};

// This is the "Pyramid of Doom"
console.log("Starting the process...");
getUser((user) => {
  console.log(`Got user: ${user.name}`);

  // The call to getPosts is NESTED inside the callback for getUser.
  getPosts(user.id, (posts) => {
    console.log("Got posts:", posts);

    // Imagine a third nested call here to get comments...
    // getComments(posts[0], (comments) => { ... });
  });
});
console.log("Process started! The script continues while data is being fetched.");