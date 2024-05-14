import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const updateUser = async (req: Request, res: Response) => {
  const userID = req.params.id;
  const { name, email, role } = req.body;
  try {
    const users = await prisma.user.update({
      where: { id: userID },
      data: {
        name: name,
        email: email,
        role: role,
      },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
