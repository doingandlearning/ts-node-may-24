import { Router, Request, Response } from "express";
import { createUser, getAllUsers } from "../controllers/users.controller";
const router = Router();

// Add some routes
router.get("/", getAllUsers);
router.post("/", createUser);

router.get("/:userId", (req: Request, res: Response) => {
  res.send("Not implemented yet.");
});

router.delete("/:userId", (req: Request, res: Response) => {
  res.send("Not implemented yet.");
});

router.put("/:userId", (req: Request, res: Response) => {
  res.send("Not implemented yet.");
});

router.patch("/:userId", (req: Request, res: Response) => {
  res.send("Not implemented yet.");
});

export default router;
