import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const { prisma } = globalForPrisma || new PrismaClient({
    log: ["query"],
});
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma



// import { PrismaClient } from "@prisma/client";

// declare global {
//     namespace NodeJS {
//         interface Global {
//             prisma: PrismaClient;
//         }
//     }
// }

// let prisma: PrismaClient;

// if (typeof window === "undefined") {
//     if (process.env.NODE_ENV === "production") {
//         prisma = new PrismaClient();
//         // } else {
//         //     if (!global.prisma) {
//         //         global.prisma = new PrismaClient();
//         //     }

//         //     prisma = global.prisma;

//     }
// }

// export { prisma } 