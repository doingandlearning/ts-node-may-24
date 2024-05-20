Pretask:

- In the student directory run `npm install`.
- Run `npm run dev`
- Navigate to `http://localhost:3000` and confirm you can see `Welcome to My Portfolio`

Tasks:

1. Environment Variable Configuration:

Create a .env file to include a custom message for the homepage.
Update the server code to read and display this message on the homepage.

2. Dynamic About Page:

Extend the '/about' route to accept query parameters (e.g., name and skill).
Modify the About page to dynamically display these parameters.

3. Creating a New Route:

Add a new route '/portfolio' that displays a list of projects (use placeholder data).
Include navigation links on all pages to easily navigate between Home, About, Contact, and Portfolio.

---

Extension

4. Contact Form Enhancement:

Add error handling for the POST request in the '/contact' route.
Implement a feature to notify the user (on the webpage) when their message has been successfully saved.

5. Styling with CSS:

Create a CSS file to style the HTML pages.
Link this CSS file in the HTML headers of each page.

6. Adding Logging:

Implement logging for each request to the server, including the path accessed and the HTTP method used.
Save these logs to a file named 'access.log'.
