import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}

const prismadb = globalThis.prisma || new PrismaClient() // otherwise next will initiate bunch of instance with the hot reloading and causing warnings and degradation of performance
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb

export default prismadb;


