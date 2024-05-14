import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userID = req.params.id;
    const users = await prisma.user.delete({
      where: { id: userID },
    });
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(500).json({ error: "Bad Request" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
