"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const client_1 = require("../src/generate/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const adapter = new adapter_pg_1.PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new client_1.PrismaClient({ adapter });
async function deleteAllData(orderedFileNames) {
    const modelNames = orderedFileNames.map((fileName) => {
        const modelName = path_1.default.basename(fileName, path_1.default.extname(fileName));
        return modelName.charAt(0).toUpperCase() + modelName.slice(1);
    });
    for (const modelName of modelNames) {
        const model = prisma[modelName];
        if (model) {
            await model.deleteMany({});
            console.log(`Cleared data from ${modelName}`);
        }
        else {
            console.error(`Model ${modelName} not found. Please ensure the model name is correctly specified.`);
        }
    }
}
async function main() {
    const dataDirectory = path_1.default.join(__dirname, "seedData");
    const orderedFileNames = [
        "expenseSummary.json",
        "sales.json",
        "salesSummary.json",
        "purchases.json",
        "purchaseSummary.json",
        "users.json",
        "expenses.json",
        "expenseByCategory.json",
        "products.json",
    ];
    const seedOrder = [
        "products.json",
        "users.json",
        "sales.json",
        "purchases.json",
        "expenses.json",
        "salesSummary.json",
        "purchaseSummary.json",
        "expenseSummary.json",
        "expenseByCategory.json",
    ];
    await deleteAllData(orderedFileNames);
    for (const fileName of seedOrder) {
        const filePath = path_1.default.join(dataDirectory, fileName);
        const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        const modelName = path_1.default.basename(fileName, path_1.default.extname(fileName));
        const model = prisma[modelName];
        if (!model) {
            console.error(`No Prisma model matches the file name: ${fileName}`);
            continue;
        }
        for (const data of jsonData) {
            await model.create({
                data,
            });
        }
        console.log(`Seeded ${modelName} with data from ${fileName}`);
    }
}
main()
    .catch((e) => {
    console.error(e);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map