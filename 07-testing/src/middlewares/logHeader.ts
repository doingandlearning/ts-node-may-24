import { NextFunction, Request, Response } from "express";

export default function logHeader(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // req.get("x-log")
  if (req.headers && req.headers["x-log"]) {
    console.log(`X-Log Header: ${req.headers["x-log"]}`);
  }
  next();
}