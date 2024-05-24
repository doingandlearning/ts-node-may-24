import { NextFunction, Request, Response } from "express";
import { add } from "../utils/math";
export default function logHeader(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.headers && req.headers["x-log"]) {
    console.log(`X-Log Header: ${req.headers["x-log"]}`);
    add(1, 2);
  }
  next();
}
