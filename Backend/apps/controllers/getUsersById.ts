import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getUsersById = async (req: Request, res: Response) => {
  try {
    const userID = req.params.id;
    const users = await prisma.user.findUnique({
      where: { id: userID },
    });
    if (users) {
      res.json(users);
    } else {
      res.status(404).json({ error: "User not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
