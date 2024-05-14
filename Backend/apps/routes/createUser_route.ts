import { createUser } from "../controllers/createUser";
import { Router } from "express";

export const createUserRouter = Router();

createUserRouter.post("/", createUser);
