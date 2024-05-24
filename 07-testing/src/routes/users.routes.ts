import { Router, Request, Response } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  replaceUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controller";
import authorization from "../middlewares/authorization";

const router = Router();

router.get("/", getAllUsers);
router.post("/", authorization, createUser);
router.get("/:userId", getUserById);
router.delete("/:userId", authorization, deleteUser);
router.put("/:userId", authorization, replaceUser);
router.patch("/:userId", authorization, updateUser);

export default router;
