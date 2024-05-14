import { getUsersById } from "../controllers/getUsersById";
import { Router } from "express";

export const getUsersByIdRouter = Router();
getUsersByIdRouter.get("/:id", getUsersById);
