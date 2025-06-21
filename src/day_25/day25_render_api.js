/**
 * This script fetches a list of users from an API and renders them to the DOM.
 */

// Bring in our reusable function from yesterday.
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
};

// --- DOM Elements ---
const fetchButton = document.querySelector('#fetch-users-button');
const userList = document.querySelector('#user-list-container');

const handleFetchUsers = async () => {
  // 1. Show a loading message (our English task).
  userList.textContent = 'Loading users...';

  // 2. FETCH the data.
  const users = await fetchData('https://jsonplaceholder.typicode.com/users');

  // 3. Clear the loading message.
  userList.innerHTML = ''; // .innerHTML = '' is a quick way to delete all children.

  if (users) {
    // 4. RENDER the data.
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });
  } else {
    // Handle the error case
    userList.textContent = 'Failed to load users.';
  }
};

// Attach the event listener to the button
fetchButton.addEventListener('click', handleFetchUsers);