import { Request, Response } from "express";
import { getPrisma } from "../lib/prisma";

export const getExpensesByCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const prisma = getPrisma();
  try {
    const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany(
      {
        orderBy: {
          date: "desc",
        },
      }
    );
    const expenseByCategorySummary = expenseByCategorySummaryRaw.map(
      (item) => ({
        ...item,
        amount: item.amount.toString()
      })
    );
    res.json(expenseByCategorySummary);
  } catch (error) {
    console.error("getExpensesByCategory error:", error);
    res.status(500).json({ message: "Error retriving expenses by category" });
  }
};