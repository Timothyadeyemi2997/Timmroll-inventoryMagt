import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Users: 'Users';
    readonly Products: 'Products';
    readonly Sales: 'Sales';
    readonly Purchases: 'Purchases';
    readonly Expenses: 'Expenses';
    readonly SalesSummary: 'SalesSummary';
    readonly PurchaseSummary: 'PurchaseSummary';
    readonly ExpenseSummary: 'ExpenseSummary';
    readonly ExpenseByCategory: 'ExpenseByCategory';
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: 'ReadUncommitted';
    readonly ReadCommitted: 'ReadCommitted';
    readonly RepeatableRead: 'RepeatableRead';
    readonly Serializable: 'Serializable';
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UsersScalarFieldEnum: {
    readonly userId: 'userId';
    readonly name: 'name';
    readonly email: 'email';
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const ProductsScalarFieldEnum: {
    readonly productId: 'productId';
    readonly name: 'name';
    readonly price: 'price';
    readonly rating: 'rating';
    readonly stockQuantity: 'stockQuantity';
};
export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum];
export declare const SalesScalarFieldEnum: {
    readonly saleId: 'saleId';
    readonly productId: 'productId';
    readonly timestamp: 'timestamp';
    readonly quantity: 'quantity';
    readonly unitPrice: 'unitPrice';
    readonly totalAmount: 'totalAmount';
};
export type SalesScalarFieldEnum = (typeof SalesScalarFieldEnum)[keyof typeof SalesScalarFieldEnum];
export declare const PurchasesScalarFieldEnum: {
    readonly purchaseId: 'purchaseId';
    readonly productId: 'productId';
    readonly timestamp: 'timestamp';
    readonly quantity: 'quantity';
    readonly unitCost: 'unitCost';
    readonly totalCost: 'totalCost';
};
export type PurchasesScalarFieldEnum = (typeof PurchasesScalarFieldEnum)[keyof typeof PurchasesScalarFieldEnum];
export declare const ExpensesScalarFieldEnum: {
    readonly expenseId: 'expenseId';
    readonly category: 'category';
    readonly amount: 'amount';
    readonly timestamp: 'timestamp';
};
export type ExpensesScalarFieldEnum = (typeof ExpensesScalarFieldEnum)[keyof typeof ExpensesScalarFieldEnum];
export declare const SalesSummaryScalarFieldEnum: {
    readonly salesSummaryId: 'salesSummaryId';
    readonly totalValue: 'totalValue';
    readonly changePercentage: 'changePercentage';
    readonly date: 'date';
};
export type SalesSummaryScalarFieldEnum = (typeof SalesSummaryScalarFieldEnum)[keyof typeof SalesSummaryScalarFieldEnum];
export declare const PurchaseSummaryScalarFieldEnum: {
    readonly purchaseSummaryId: 'purchaseSummaryId';
    readonly totalPurchased: 'totalPurchased';
    readonly changePercentage: 'changePercentage';
    readonly date: 'date';
};
export type PurchaseSummaryScalarFieldEnum = (typeof PurchaseSummaryScalarFieldEnum)[keyof typeof PurchaseSummaryScalarFieldEnum];
export declare const ExpenseSummaryScalarFieldEnum: {
    readonly expenseSummaryId: 'expenseSummaryId';
    readonly totalExpenses: 'totalExpenses';
    readonly date: 'date';
};
export type ExpenseSummaryScalarFieldEnum = (typeof ExpenseSummaryScalarFieldEnum)[keyof typeof ExpenseSummaryScalarFieldEnum];
export declare const ExpenseByCategoryScalarFieldEnum: {
    readonly expenseByCategoryId: 'expenseByCategoryId';
    readonly expenseSummaryId: 'expenseSummaryId';
    readonly category: 'category';
    readonly amount: 'amount';
    readonly date: 'date';
};
export type ExpenseByCategoryScalarFieldEnum = (typeof ExpenseByCategoryScalarFieldEnum)[keyof typeof ExpenseByCategoryScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: 'asc';
    readonly desc: 'desc';
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: 'default';
    readonly insensitive: 'insensitive';
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: 'first';
    readonly last: 'last';
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map