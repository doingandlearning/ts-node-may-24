import { Request, Response, NextFunction } from "express";
import { User } from "../models/users.model";

// const users: User[] = [];

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
}

export async function getAllUsers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    next(error);
  }
}

export async function getUserById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
}

export async function updateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, {
    new: true,
  });
  res.json(updatedUser);
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
