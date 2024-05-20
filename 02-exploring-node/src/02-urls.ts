import http, { IncomingMessage, ServerResponse } from "node:http";
import url from "node:url";

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const path = url.parse(req.url as string, true).path;
    const query = url.parse(req.url as string, true).query;
    res.setHeader("Content-Type", "text/html");

    if (path === "/") {
      res.write("Home Page");
    } else if (path === "/about") {
      res.write("About Page");
    } else {
      res.write("Not found");
    }
    res.statusCode = 200;
    console.log(query.name);
    // res.end("<h1>Hello, " + query.name + "!!</h1>");
    res.end(`<h1>Hello, ${query.name}!!</h1>`);
  }
);

// tsx --watch src/01-server.ts

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
