/*
  Warnings:

  - Added the required column `s3Url` to the `Tracks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tracks" ADD COLUMN     "s3Url" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "JoinSession" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "sessionId" INTEGER NOT NULL,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JoinSession_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "JoinSession" ADD CONSTRAINT "JoinSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JoinSession" ADD CONSTRAINT "JoinSession_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Sessions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
