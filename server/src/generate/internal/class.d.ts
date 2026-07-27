import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.users`: Exposes CRUD operations for the **Users** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Users
  * const users = await prisma.users.findMany()
  * ```
  */
    get users(): Prisma.UsersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.products`: Exposes CRUD operations for the **Products** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Products
      * const products = await prisma.products.findMany()
      * ```
      */
    get products(): Prisma.ProductsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.sales`: Exposes CRUD operations for the **Sales** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Sales
      * const sales = await prisma.sales.findMany()
      * ```
      */
    get sales(): Prisma.SalesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.purchases`: Exposes CRUD operations for the **Purchases** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Purchases
      * const purchases = await prisma.purchases.findMany()
      * ```
      */
    get purchases(): Prisma.PurchasesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.expenses`: Exposes CRUD operations for the **Expenses** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Expenses
      * const expenses = await prisma.expenses.findMany()
      * ```
      */
    get expenses(): Prisma.ExpensesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.salesSummary`: Exposes CRUD operations for the **SalesSummary** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SalesSummaries
      * const salesSummaries = await prisma.salesSummary.findMany()
      * ```
      */
    get salesSummary(): Prisma.SalesSummaryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.purchaseSummary`: Exposes CRUD operations for the **PurchaseSummary** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PurchaseSummaries
      * const purchaseSummaries = await prisma.purchaseSummary.findMany()
      * ```
      */
    get purchaseSummary(): Prisma.PurchaseSummaryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.expenseSummary`: Exposes CRUD operations for the **ExpenseSummary** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ExpenseSummaries
      * const expenseSummaries = await prisma.expenseSummary.findMany()
      * ```
      */
    get expenseSummary(): Prisma.ExpenseSummaryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.expenseByCategory`: Exposes CRUD operations for the **ExpenseByCategory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ExpenseByCategories
      * const expenseByCategories = await prisma.expenseByCategory.findMany()
      * ```
      */
    get expenseByCategory(): Prisma.ExpenseByCategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map