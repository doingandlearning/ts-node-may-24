import { Router, Request, Response } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  replaceUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controller";
const router = Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:userId", getUserById);
router.delete("/:userId", deleteUser);
router.put("/:userId", replaceUser);
router.patch("/:userId", updateUser);

export default router;
