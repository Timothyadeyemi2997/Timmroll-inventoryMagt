import { PrismaClient } from "../generate/client";
import { PrismaPg } from "@prisma/adapter-pg";

let prisma: PrismaClient | undefined;

export function getPrisma(): PrismaClient {
  if (!prisma) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not set — check .env and dotenv load order");
    }
    const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
    prisma = new PrismaClient({ adapter });
  }
  return prisma;
}