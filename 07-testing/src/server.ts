import express, { Request, Response, NextFunction } from "express";
import userRouter from "./routes/users.routes";
import taskRouter from "./routes/tasks.routes";
// Instaniate the app
const app = express();

// Add any global middleware
app.use(express.json());

// Add routers and routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Hello world" });
});

export default app;
