/**
 * This script fetches real data from a public API using fetch and async/await.
 */
// The URL of the public API endpoint we want to get data from.
const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

const getTodoData = async () => {
  console.log("Attempting to fetch data...");
  try {
    // Step 1: Make the initial network request.
    const response = await fetch(API_URL);

    // Step 2: Read the response body as JSON.
    const data = await response.json();

    console.log("Data fetched successfully!");
    console.log("Here is the first to-do item:", data);
    console.log(`The title is: "${data.title}"`);

  } catch (error) {
    // This will catch network errors or other issues with the fetch call.
    console.error("Oh no, an error occurred!", error);
  }
};

getTodoData();