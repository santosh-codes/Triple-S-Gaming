import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
  const { id, name, email, role } = req.body;
  try {
    const users = await prisma.user.create({
      data: {
        id,
        name,
        email,
        role,
      },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
