interface User {
  id: number;
  name: string;
}

// Mock API call
function fetchUserFromAPI(id: number): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id >= 0) {
        resolve({ id, name: `username` });
      } else {
        reject(new Error("Invalid user ID"));
      }
    }, 1000);
  })
}

async function getUser(id: number): Promise<User> {
  try {
    const user = await fetchUserFromAPI(id);
    return user;
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error);
    throw error; // Re-throw the error after logging it
  }
}

// Example usage:
getUser(1)
  .then(user => console.log("Fetched user:", user))
  .catch(error => console.error("Error:", error));

getUser(-1)
  .then(user => console.log("Fetched user:", user))
  .catch(error => console.error("Error:", error));
