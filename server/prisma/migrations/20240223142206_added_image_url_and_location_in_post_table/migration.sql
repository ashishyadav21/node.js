-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "image_url" VARCHAR,
ADD COLUMN     "location" VARCHAR,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;