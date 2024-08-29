import { PrismaClient } from "@prisma/client";

const globalForPrismal = globalThis as unknown as { prisma: PrismaClient };

const prisma = globalForPrismal.prisma || new PrismaClient();

export default prisma;