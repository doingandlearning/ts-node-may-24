import { Router, Request, Response } from "express";

const router = Router();

// Add some routes
router.get("/", (req: Request, res: Response) => {
  res.send("Not implemented yet.");
});

router.post("/", (req: Request, res: Response) => {
  res.send("Not implemented yet.");
});

router
  .route("/")
  .get((req: Request, res: Response) => {
    res.send("Not implemented yet.");
  })
  .post((req: Request, res: Response) => {
    res.send("Not implemented yet.");
  });

export default router;
