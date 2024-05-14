import { Router } from "express";
import { deleteUser } from "../controllers/deleteUser";

export const deleteUserRouter = Router();
deleteUserRouter.delete("/:id", deleteUser);
