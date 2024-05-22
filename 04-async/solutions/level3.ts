// Reusing the Todo and User interfaces defined in the previous levels
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  // Add other necessary fields
}

// Step-by-step implementation guide for students
// 1. Define the Todo and User interfaces if not already defined

// 2. Create an async function named fetchConcurrentData
async function fetchConcurrentData(): Promise<void> {
  try {
    // 3. Use Promise.all to perform fetch requests concurrently
    const [todosResponse, usersResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos"),
      fetch("https://jsonplaceholder.typicode.com/users"),
    ]);

    // 4. Convert both responses to JSON format and cast them to the appropriate types
    const todos: Todo[] = await todosResponse.json();
    const users: User[] = await usersResponse.json();

    // 5. Print the todos data to the console
    console.log("Todos:", todos);
    // 6. Print the users data to the console
    console.log("Users:", users);
  } catch (error) {
    // 7. Handle any errors
    console.error("Error fetching data:", error);
  }
}

// 8. Call the fetchConcurrentData function
fetchConcurrentData();
