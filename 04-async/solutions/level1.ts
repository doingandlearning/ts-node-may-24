// Step-by-step implementation guide for students
// 1. Define the Todo interface
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// 2. Create an async function named fetchData
async function fetchData(): Promise<void> {
  try {
    // 3. Use fetch to request data
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    // 4. Convert the response to JSON format and cast it to the Todo type
    const data: Todo = await response.json();
    debugger;
    // 5. Print the data to the console
    console.log(data);
  } catch (error) {
    // 6. Handle any errors
    console.error("Error fetching data:", error);
  }
}

// 7. Call the fetchData function

fetchData();
