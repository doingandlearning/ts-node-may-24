import express, { Request, Response, NextFunction } from "express";
import userRouter from "./routes/users.routes";
import taskRouter from "./routes/tasks.routes";
import authorization from "./middlewares/authorization";
import { errorHandling } from "./middlewares/errorHandling";
import { validationErrorHandling } from "./middlewares/validationErrorHandling";
// Instaniate the app
const app = express();

// Add any global middleware
app.use(express.json());

// Add routers and routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  throw new Error("Something went wrong!");
  res.json({ message: "Hello world" });
});

app.use(validationErrorHandling);
app.use(errorHandling);

export default app;
