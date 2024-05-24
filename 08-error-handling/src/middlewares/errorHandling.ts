import { Request, Response, NextFunction } from "express";

export function errorHandling(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // CHAPIError

  // CHThirdPartyError

  // CHError
  res.status(400).json({ message: error.message });
}
