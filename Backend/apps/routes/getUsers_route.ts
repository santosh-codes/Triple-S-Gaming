import { Router } from "express";
import { getUsers } from "../controllers/getUsers";

export const getUsersRouter = Router();

getUsersRouter.get("/", getUsers);
