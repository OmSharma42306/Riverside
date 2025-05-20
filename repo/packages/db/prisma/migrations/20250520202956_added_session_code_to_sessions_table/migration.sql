/*
  Warnings:

  - A unique constraint covering the columns `[sessionCode]` on the table `Sessions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sessionCode` to the `Sessions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sessions" ADD COLUMN     "sessionCode" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Sessions_sessionCode_key" ON "Sessions"("sessionCode");
