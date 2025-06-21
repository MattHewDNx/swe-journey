/**
 * This script refactors the promise chain from Day 21 into async/await syntax.
 */

// These functions simulate fetching data and return Promises.
// Carefully check every character on these two lines in your file.
const fetchUser = () => new Promise(resolve => setTimeout(() => resolve({ id: 1, name: "Matthew" }), 1000));
const fetchPosts = (userId) => new Promise(resolve => setTimeout(() => resolve([`Post 1 for user ${userId}`, `Post 2`]), 1000));
// 1. We create an 'async' function. This is where the magic happens.
const getPostsForUser = async () => {
  // 2. We use a try...catch block for error handling. This is the standard in async/await.
  try { 
    console.log("Starting to fetch data with async/await...");

    // 3. We 'await' the result. The function "pauses" here until the user is fetched.
    const user = await fetchUser();
    console.log(`Got user: ${user.name}`);

    // 4. Once we have the user, we 'await' the next result. The function pauses again.
    const posts = await fetchPosts(user.id);
    console.log("Got posts:", posts);

  } catch (error) {
    console.error("An error occurred:", error);
  }
};

// 5. Call the async function to start the entire process.
getPostsForUser();