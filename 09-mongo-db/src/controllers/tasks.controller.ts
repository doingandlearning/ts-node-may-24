import { Request, Response } from "express";
import { Task } from "../models/tasks.model";

const tasks: Task[] = [];
let taskId = 0;

function getNewId() {
  return ++taskId;
}

// Create a new task
export function createTask(req: Request, res: Response) {
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Title and description are required" });
  }
  const newTask: Task = {
    id: getNewId(),
    title,
    description,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
}

// Get all tasks
export function getAllTasks(req: Request, res: Response) {
  res.status(200).json(tasks);
}

// Get task by ID
export function getTaskById(req: Request, res: Response) {
  const { id } = req.params;
  const task = tasks.find((t) => t.id === parseInt(id));
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.status(200).json(task);
}

// Update a task by ID
export function updateTask(req: Request, res: Response) {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const task = tasks.find((t) => t.id === parseInt(id));
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  if (title) task.title = title;
  if (description) task.description = description;
  if (completed !== undefined) task.completed = completed;
  res.status(200).json(task);
}

// Delete a task by ID
export function deleteTask(req: Request, res: Response) {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(id));
  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }
  tasks.splice(taskIndex, 1);
  res.status(204).send();
}
