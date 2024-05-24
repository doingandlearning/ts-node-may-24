import { Request, Response, NextFunction } from "express";
import { User } from "../models/users.model";

const users: User[] = [];

export function createUser(req: Request, res: Response, next: NextFunction) {
  const user: User = req.body; // id!!
  if (!user.location || !user.name) {
    return res
      .status(400)
      .json({ message: "You need to send the location and name" });
  }
  user.id = String(users.length + 1);
  users.push(user);
  res.status(201).json(user);
}

export function getAllUsers(req: Request, res: Response, next: NextFunction) {
  return res.json(users);
}

export function getUserById(req: Request, res: Response, next: NextFunction) {
  const user = users.find((user) => user.id === req.params.userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
}

export function updateUser(req: Request, res: Response, next: NextFunction) {
  const userId = req.params.userId;
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  // ... spread operator
  users[userIndex] = { ...users[userIndex], ...req.body };

  res.json(users[userIndex]);
}

export function replaceUser(req: Request, res: Response, next: NextFunction) {
  const userId = req.params.userId;
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const user = req.body;

  if (!user.location || !user.name) {
    return res
      .status(400)
      .json({ message: "You need to send the location and name" });
  }

  user.id = userId;
  users[userIndex] = user;
  res.json(user);
}

export function deleteUser(req: Request, res: Response, next: NextFunction) {
  const userId = req.params.userId;
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(userIndex, 1);

  res.status(204).send();
}
// export default { createUser };
