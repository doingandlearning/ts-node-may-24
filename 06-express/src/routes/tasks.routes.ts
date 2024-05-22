import { Router } from "express";
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.get("/:id", getTaskById);
router.put("/:id", updateTask); // Use PUT for full updates
router.patch("/:id", updateTask); // Use PATCH for partial updates
router.delete("/:id", deleteTask);

export default router;
