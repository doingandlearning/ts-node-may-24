### Level 1: Basic Fetch with Typings
**Objective**: Perform a straightforward fetch and print the data to the console with proper typings.

1. **Description**:
   - Fetch data from a public API (e.g., https://jsonplaceholder.typicode.com/todos/1).
   - Print the fetched data to the console.

2. **Instructions**:
   1. Define an interface `Todo` to type the API response.
   2. Create an async function named `fetchData`.
   3. Inside the function, use `fetch` to request data from `https://jsonplaceholder.typicode.com/todos/1`.
   4. Use `await` to wait for the response.
   5. Convert the response to JSON format and cast it to the `Todo` type.
   6. Print the data to the console.
   7. Handle any errors using a `try-catch` block.

### Level 2: Fetch and Chain Requests with Typings
**Objective**: Perform a fetch request, and use the result to query a second API with proper typings.

1. **Description**:
   - Fetch data from a public API (e.g., https://jsonplaceholder.typicode.com/users/1).
   - Use the result (user ID) to fetch related data from another endpoint (e.g., https://jsonplaceholder.typicode.com/users/{userId}/posts).
   - Print both sets of data to the console.

2. **Instructions**:
   1. Define interfaces `User` and `Post` to type the API responses.
   2. Create an async function named `fetchUserData`.
   3. Inside the function, use `fetch` to request data from `https://jsonplaceholder.typicode.com/users/1`.
   4. Use `await` to wait for the response.
   5. Convert the response to JSON format and cast it to the `User` type.
   6. Print the user data to the console.
   7. Extract the user ID from the user data.
   8. Use the user ID to fetch the user's posts from `https://jsonplaceholder.typicode.com/users/{userId}/posts`.
   9. Convert the response to JSON format and cast it to the `Post[]` type.
   10. Print the posts data to the console.
   11. Handle any errors using a `try-catch` block.

### Level 3: Fetch with Concurrency and Error Handling with Typings
**Objective**: Perform multiple fetch requests concurrently and handle potential errors gracefully with proper typings.

1. **Description**:
   - Fetch data from multiple endpoints concurrently (e.g., https://jsonplaceholder.typicode.com/todos, https://jsonplaceholder.typicode.com/users).
   - Use Promise.all to handle concurrent requests.
   - Print the results to the console.
   - Handle and log any errors that occur during the fetch operations.

2. **Instructions**:
   1. Define interfaces `Todo` and `User` to type the API responses.
   2. Create an async function named `fetchConcurrentData`.
   3. Inside the function, use `Promise.all` to perform fetch requests to `https://jsonplaceholder.typicode.com/todos` and `https://jsonplaceholder.typicode.com/users` concurrently.
   4. Use `await` to wait for both responses.
   5. Convert both responses to JSON format and cast them to the appropriate types.
   6. Print the todos data to the console.
   7. Print the users data to the console.
   8. Handle any errors using a `try-catch` block.
