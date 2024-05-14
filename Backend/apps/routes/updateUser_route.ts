import { Router } from "express";
import { updateUser } from "../controllers/updateUser";

export const updateUserRouter = Router();
updateUserRouter.put("/:id", updateUser);
