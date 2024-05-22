import express, { Request, Response, NextFunction } from "express";

// Instaniate the app
const app = express();

// Add any global middleware

// Add routers and routes

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Hello world" });
});

// Add any error handling
const PORT = 3000;
// Server to start listening
app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
