import http, { IncomingMessage, ServerResponse } from "node:http";

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hello, Companies House!!</h1>");
  }
);

// function respond(req: IncomingMessage, res: ServerResponse) {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.end("<h1>Hello, Companies House!!</h1>");
// }

// const respond = (req: IncomingMessage, res: ServerResponse) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.end("<h1>Hello, Companies House!!</h1>");
// }

// const add = (a, b) => a + b
// const result = add(1,3)  // will equal 3!

// tsx --watch src/01-server.ts

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
