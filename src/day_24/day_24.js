/**
 * This script demonstrates creating a reusable function for API calls.
 * This version SIMULATES the fetch call to avoid network issues.
 */

/**
 * SIMULATES fetching JSON data from a given URL.
 * @param {string} url - The URL of the API endpoint.
 * @returns {Promise<any|null>} The JSON data if successful, otherwise null.
 */
const fakeFetchData = async (url) => {
  console.log(`Pretending to fetch from: ${url}`);
  return new Promise((resolve) => {
    // Pretend it takes 1 second
    setTimeout(() => {
      // Return different fake data based on the URL
      if (url.includes('/todos/1')) {
        resolve({ id: 1, title: "Fake To-Do Item", completed: false });
      } else if (url.includes('/users')) {
        resolve([{ name: "Fake User 1" }, { name: "Fake User 2" }]);
      } else {
        resolve(null); // No data for other URLs
      }
    }, 1000);
  });
};

// --- Now we can USE our reusable function ---
const useTheFunction = async () => {
  console.log("Fetching a single to-do item...");
  const singleTodo = await fakeFetchData('https://jsonplaceholder.typicode.com/todos/1');
  if (singleTodo) {
    console.log("SUCCESS:", singleTodo);
  }

  console.log("\nFetching a list of users...");
  const users = await fakeFetchData('https://jsonplaceholder.typicode.com/users');
  if (users) {
    const userNames = users.map(user => user.name);
    console.log("SUCCESS: Got names of all users:", userNames);
  }
};

useTheFunction();