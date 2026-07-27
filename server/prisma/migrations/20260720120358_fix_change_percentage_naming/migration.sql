/*
  Warnings:

  - You are about to drop the column `changePurchased` on the `PurchaseSummary` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PurchaseSummary" DROP COLUMN "changePurchased",
ADD COLUMN     "changePercentage" DOUBLE PRECISION;
