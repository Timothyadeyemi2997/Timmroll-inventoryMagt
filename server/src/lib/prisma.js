"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrisma = getPrisma;
const client_1 = require("../generate/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
let prisma;
function getPrisma() {
    if (!prisma) {
        if (!process.env.DATABASE_URL) {
            throw new Error("DATABASE_URL is not set — check .env and dotenv load order");
        }
        const adapter = new adapter_pg_1.PrismaPg({ connectionString: process.env.DATABASE_URL });
        prisma = new client_1.PrismaClient({ adapter });
    }
    return prisma;
}
//# sourceMappingURL=prisma.js.map