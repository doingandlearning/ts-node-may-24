// Step-by-step implementation guide for students
// 1. Define the User and Post interfaces
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  // Add other necessary fields
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  // Add other necessary fields
}

// 2. Create an async function named fetchUserData
async function fetchUserData(): Promise<void> {
  try {
    // 3. Use fetch to request user data
    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    // 4. Convert the response to JSON format and cast it to the User type
    const userData: User = await userResponse.json();
    // 5. Print the user data to the console
    console.log("User Data:", userData);

    // 6. Extract the user ID from the user data
    const userId = userData.id;

    // 7. Use the user ID to fetch the user's posts
    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    );
    // 8. Convert the response to JSON format and cast it to the Post[] type
    const postsData: Post[] = await postsResponse.json();
    // 9. Print the posts data to the console
    console.log("Posts Data:", postsData);
  } catch (error) {
    // 10. Handle any errors
    console.error("Error fetching data:", error);
  }
}

// 11. Call the fetchUserData function
fetchUserData();
