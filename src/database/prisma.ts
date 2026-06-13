import "dotenv/config"
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3"
import { PrismaClient } from "../generated/prisma/client.js"

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error("DATABASE_URL não encontrada no .env")
}

const adapter = new PrismaBetterSqlite3({
  url: connectionString,
})

export const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV !== "production" ? ["query"] : [],
})