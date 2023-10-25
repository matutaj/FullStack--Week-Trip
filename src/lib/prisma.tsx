import { PrismaClient } from "@prisma/client";
interface nome {
    prisma: any
}
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma: any = globalForPrisma.prisma || new PrismaClient({
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