import http, { IncomingMessage, ServerResponse } from "http";
import url from "url";
import fs from "fs";
import querystring from "querystring";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const port = process.env.PORT || 3000; // Use the provided PORT or default to 3000
const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const { pathname, query } = url.parse(req.url as string, true);

    if (pathname === "/") {
      const shoutOutMessage = process.argv[2] || "";
      const homepageHTML = `
            <html>
                <head>
                    <title>Portfolio</title>
                </head>
                <body>
                    <h1>Welcome to My Portfolio</h1>
                    <p>${shoutOutMessage}</p>
                    <p>${process.env.SECRET_STRING}</p>
                </body>
            </html>
        `;

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(homepageHTML);
    } else if (pathname === "/about") {
      console.log(query);
      const aboutHTML = `
            <html>
                <head>
                    <title>About Me</title>
                </head>
                <body>
                    <h1>About ${query["name"] || "Me"}</h1>
                    <p>I have skills in ${query.skills}.</p>
                </body>
            </html>
        `;

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(aboutHTML);
    } else if (pathname === "/contact") {
      if (req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", () => {
          const parsedData = querystring.parse(body);
          const userMessage = parsedData.message
            ? parsedData.message.replace(/\+/g, " ") + "\n"
            : "";
          fs.appendFile("messages.txt", userMessage, (err) => {
            if (err) {
              console.error(err);
            }
          });
          res.writeHead(302, { Location: "/contact" });
          res.end();
        });
      } else {
        fs.readFile("messages.txt", "utf8", (err, data) => {
          if (err) {
            console.error(err);
          } else {
            const contactHTML = `
                        <html>
                            <head>
                                <title>Contact Me</title>
                            </head>
                            <body>
                                <h1>Contact Me</h1>
                                <form method="POST">
                                    <textarea name="message" rows="4" cols="50" placeholder="Enter your message"></textarea>
                                    <br>
                                    <input type="submit" value="Submit">
                                </form>
                                <h2>Messages:</h2>
                                <pre>${data}</pre>
                            </body>
                        </html>
                    `;

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(contactHTML);
          }
        });
      }
    } else if (pathname === "/portfolio") {
      const projects = [
        { title: "Project 1", description: "This is project 1" },
        { title: "Project 2", description: "This is project 2" },
        { title: "Project 3", description: "This is project 3" },
      ];

      const portfolioHTML = `
          <html>
            <head>
              <title>Portfolio</title>
            </head>
            <body>
              <h1>My Portfolio</h1>
              <ul>
                ${projects
                  .map(
                    (project) =>
                      `<li><strong>${project.title}</strong>: ${project.description}</li>`
                  )
                  .join("")}
              </ul>
              <nav>
                <a href="/">Home</a> |
                <a href="/about">About</a> |
                <a href="/contact">Contact</a> |
                <a href="/portfolio">Portfolio</a>
              </nav>
            </body>
          </html>
        `;

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(portfolioHTML);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  }
);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
