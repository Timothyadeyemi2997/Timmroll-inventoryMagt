import { Request, Response } from "express";
import { getPrisma } from "../lib/prisma";

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const prisma = getPrisma();
  try {
    const search = req.query.search?.toString() ?? "";
    const products = await prisma.products.findMany({
      where: {
        name: {
          contains: search,
        },
      },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving products" });
  }
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const prisma = getPrisma();
  try {
    const { productId, name, price, rating, stockQuantity } = req.body;
    const product = await prisma.products.create({
      data: {
        productId,
        name,
        price,
        rating,
        stockQuantity,
      },
    });
    res.status(201).json(product);
  } catch (error) {
    console.error("createProduct error:", error);
    res.status(500).json({ message: "Error creating product" });
  }
};