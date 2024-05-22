import { Router, Request, Response } from "express";

const router = Router();

// Add some routes
router.get("/", (req: Request, res: Response) => {
  res.send("Not implemented yet.");
});

router.post("/", (req: Request, res: Response) => {
  res.send("Not implemented yet.");
});

router.get("/:userId", (req: Request, res: Response) => {
  res.send("Not implemented yet.");
});

router.delete("/:userId", (req: Request, res: Response) => {
  res.send("Not implemented yet.");
});

router.put("/:userId", (req: Request, res: Response) => {
  res.send("Not implemented yet.");
});

export default router;
