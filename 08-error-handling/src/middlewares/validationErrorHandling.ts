import { Request, Response, NextFunction } from "express";

export function validationErrorHandling(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.name === "SyntaxError") {
    res.status(400).json({ message: "That was silly!" });
  } else {
    next(error);
  }
}
