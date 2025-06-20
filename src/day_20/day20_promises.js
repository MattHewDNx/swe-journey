/**
 * This script demonstrates how to use a Promise to handle an asynchronous result.
 */
// DO NOT worry about the inside of this function yet.
// Just know that it returns a Promise that will be fulfilled after 1 second.
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: 1, name: "Matthew" };
      resolve(user); // The Promise is fulfilled with the user data.
    }, 1000);
  });
};

console.log("Starting to fetch data...");

// This is how you USE a Promise:
fetchData()
  .then((user) => {
    // This callback function only runs AFTER the promise is fulfilled.
    // The 'user' parameter is the data that the promise was fulfilled with.
    console.log("Promise fulfilled!");
    console.log(`The user's name is ${user.name}`);
  });

console.log("Request has been sent. The script continues to run...");