import { Router } from "express";
import { searchUserByName } from "../controllers/searchUserByName";

export const searchUserByNameRouter = Router();
searchUserByNameRouter.get("/", searchUserByName);
