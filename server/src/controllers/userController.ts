import { Request, Response } from "express";
import { getPrisma } from "../lib/prisma";

export const getUsers = async (req: Request, res: Response): Promise<void> =>
{
  try {
    const prisma = getPrisma();
    const users = await prisma.users.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users" });
  }
}