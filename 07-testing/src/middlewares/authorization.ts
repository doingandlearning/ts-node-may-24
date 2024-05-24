import { NextFunction, Request, Response } from "express";

export default function authorization(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // to get out of the way as quickly as possible!
  if (!req.headers || !req.headers["authorization"]) {
    res.statusCode = 403;
    res.json({ error: "Missing JWT token" });
  } else {
    next();
  }
}