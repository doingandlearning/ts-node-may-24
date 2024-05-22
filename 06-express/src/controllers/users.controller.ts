import { Request, Response, NextFunction } from "express";
import { User } from "../models/users.model";

const users: User[] = [];

export function createUser(req: Request, res: Response, next: NextFunction) {
  const user: User = req.body;
  if (!user.location || !user.name) {
    return res
      .status(400)
      .json({ message: "You need to send the location and name" });
  }
  user.id = String(users.length + 1);
  users.push(user);
  res.json(user);
}

// export default { createUser };
