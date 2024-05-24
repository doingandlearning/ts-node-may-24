"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTaskById = exports.getAllTasks = exports.createTask = void 0;
const tasks = [];
let taskId = 0;
function getNewId() {
    return ++taskId;
}
// Create a new task
function createTask(req, res) {
    const { title, description } = req.body;
    if (!title || !description) {
        return res
            .status(400)
            .json({ message: "Title and description are required" });
    }
    const newTask = {
        id: getNewId(),
        title,
        description,
        completed: false,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
}
exports.createTask = createTask;
// Get all tasks
function getAllTasks(req, res) {
    res.status(200).json(tasks);
}
exports.getAllTasks = getAllTasks;
// Get task by ID
function getTaskById(req, res) {
    const { id } = req.params;
    const task = tasks.find((t) => t.id === parseInt(id));
    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
}
exports.getTaskById = getTaskById;
// Update a task by ID
function updateTask(req, res) {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const task = tasks.find((t) => t.id === parseInt(id));
    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }
    if (title)
        task.title = title;
    if (description)
        task.description = description;
    if (completed !== undefined)
        task.completed = completed;
    res.status(200).json(task);
}
exports.updateTask = updateTask;
// Delete a task by ID
function deleteTask(req, res) {
    const { id } = req.params;
    const taskIndex = tasks.findIndex((t) => t.id === parseInt(id));
    if (taskIndex === -1) {
        return res.status(404).json({ message: "Task not found" });
    }
    tasks.splice(taskIndex, 1);
    res.status(204).send();
}
exports.deleteTask = deleteTask;
