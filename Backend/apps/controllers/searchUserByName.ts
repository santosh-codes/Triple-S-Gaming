import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const searchUserByName = async (req: Request, res: Response) => {
  try {
    const name: string = req.body.name as string;
    if (!name) {
      return res.status(404).json({ error: "Please Enter a Name" });
    }
    const users = await prisma.user.findMany({
      where: {
        name: name,
      },
    });
    if (!users.length) {
      return res.status(404).json({ error: "User Not Found" });
    }
    res.send(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
