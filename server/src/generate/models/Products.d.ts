import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Products
 *
 */
export type ProductsModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductsPayload>;
export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null;
    _avg: ProductsAvgAggregateOutputType | null;
    _sum: ProductsSumAggregateOutputType | null;
    _min: ProductsMinAggregateOutputType | null;
    _max: ProductsMaxAggregateOutputType | null;
};
export type ProductsAvgAggregateOutputType = {
    price: number | null;
    rating: number | null;
    stockQuantity: number | null;
};
export type ProductsSumAggregateOutputType = {
    price: number | null;
    rating: number | null;
    stockQuantity: number | null;
};
export type ProductsMinAggregateOutputType = {
    productId: string | null;
    name: string | null;
    price: number | null;
    rating: number | null;
    stockQuantity: number | null;
};
export type ProductsMaxAggregateOutputType = {
    productId: string | null;
    name: string | null;
    price: number | null;
    rating: number | null;
    stockQuantity: number | null;
};
export type ProductsCountAggregateOutputType = {
    productId: number;
    name: number;
    price: number;
    rating: number;
    stockQuantity: number;
    _all: number;
};
export type ProductsAvgAggregateInputType = {
    price?: true;
    rating?: true;
    stockQuantity?: true;
};
export type ProductsSumAggregateInputType = {
    price?: true;
    rating?: true;
    stockQuantity?: true;
};
export type ProductsMinAggregateInputType = {
    productId?: true;
    name?: true;
    price?: true;
    rating?: true;
    stockQuantity?: true;
};
export type ProductsMaxAggregateInputType = {
    productId?: true;
    name?: true;
    price?: true;
    rating?: true;
    stockQuantity?: true;
};
export type ProductsCountAggregateInputType = {
    productId?: true;
    name?: true;
    price?: true;
    rating?: true;
    stockQuantity?: true;
    _all?: true;
};
export type ProductsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: Prisma.ProductsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?: Prisma.ProductsOrderByWithRelationInput | Prisma.ProductsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProductsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType;
};
export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
    [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProducts[P]> : Prisma.GetScalarType<T[P], AggregateProducts[P]>;
};
export type ProductsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductsWhereInput;
    orderBy?: Prisma.ProductsOrderByWithAggregationInput | Prisma.ProductsOrderByWithAggregationInput[];
    by: Prisma.ProductsScalarFieldEnum[] | Prisma.ProductsScalarFieldEnum;
    having?: Prisma.ProductsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductsCountAggregateInputType | true;
    _avg?: ProductsAvgAggregateInputType;
    _sum?: ProductsSumAggregateInputType;
    _min?: ProductsMinAggregateInputType;
    _max?: ProductsMaxAggregateInputType;
};
export type ProductsGroupByOutputType = {
    productId: string;
    name: string;
    price: number;
    rating: number | null;
    stockQuantity: number;
    _count: ProductsCountAggregateOutputType | null;
    _avg: ProductsAvgAggregateOutputType | null;
    _sum: ProductsSumAggregateOutputType | null;
    _min: ProductsMinAggregateOutputType | null;
    _max: ProductsMaxAggregateOutputType | null;
};
export type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductsGroupByOutputType[P]>;
}>>;
export type ProductsWhereInput = {
    AND?: Prisma.ProductsWhereInput | Prisma.ProductsWhereInput[];
    OR?: Prisma.ProductsWhereInput[];
    NOT?: Prisma.ProductsWhereInput | Prisma.ProductsWhereInput[];
    productId?: Prisma.StringFilter<"Products"> | string;
    name?: Prisma.StringFilter<"Products"> | string;
    price?: Prisma.FloatFilter<"Products"> | number;
    rating?: Prisma.FloatNullableFilter<"Products"> | number | null;
    stockQuantity?: Prisma.IntFilter<"Products"> | number;
    Sales?: Prisma.SalesListRelationFilter;
    Purchases?: Prisma.PurchasesListRelationFilter;
};
export type ProductsOrderByWithRelationInput = {
    productId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    rating?: Prisma.SortOrderInput | Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    Sales?: Prisma.SalesOrderByRelationAggregateInput;
    Purchases?: Prisma.PurchasesOrderByRelationAggregateInput;
};
export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    productId?: string;
    AND?: Prisma.ProductsWhereInput | Prisma.ProductsWhereInput[];
    OR?: Prisma.ProductsWhereInput[];
    NOT?: Prisma.ProductsWhereInput | Prisma.ProductsWhereInput[];
    name?: Prisma.StringFilter<"Products"> | string;
    price?: Prisma.FloatFilter<"Products"> | number;
    rating?: Prisma.FloatNullableFilter<"Products"> | number | null;
    stockQuantity?: Prisma.IntFilter<"Products"> | number;
    Sales?: Prisma.SalesListRelationFilter;
    Purchases?: Prisma.PurchasesListRelationFilter;
}, "productId">;
export type ProductsOrderByWithAggregationInput = {
    productId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    rating?: Prisma.SortOrderInput | Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    _count?: Prisma.ProductsCountOrderByAggregateInput;
    _avg?: Prisma.ProductsAvgOrderByAggregateInput;
    _max?: Prisma.ProductsMaxOrderByAggregateInput;
    _min?: Prisma.ProductsMinOrderByAggregateInput;
    _sum?: Prisma.ProductsSumOrderByAggregateInput;
};
export type ProductsScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductsScalarWhereWithAggregatesInput | Prisma.ProductsScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductsScalarWhereWithAggregatesInput | Prisma.ProductsScalarWhereWithAggregatesInput[];
    productId?: Prisma.StringWithAggregatesFilter<"Products"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Products"> | string;
    price?: Prisma.FloatWithAggregatesFilter<"Products"> | number;
    rating?: Prisma.FloatNullableWithAggregatesFilter<"Products"> | number | null;
    stockQuantity?: Prisma.IntWithAggregatesFilter<"Products"> | number;
};
export type ProductsCreateInput = {
    productId: string;
    name: string;
    price: number;
    rating?: number | null;
    stockQuantity: number;
    Sales?: Prisma.SalesCreateNestedManyWithoutProductInput;
    Purchases?: Prisma.PurchasesCreateNestedManyWithoutProductInput;
};
export type ProductsUncheckedCreateInput = {
    productId: string;
    name: string;
    price: number;
    rating?: number | null;
    stockQuantity: number;
    Sales?: Prisma.SalesUncheckedCreateNestedManyWithoutProductInput;
    Purchases?: Prisma.PurchasesUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductsUpdateInput = {
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    Sales?: Prisma.SalesUpdateManyWithoutProductNestedInput;
    Purchases?: Prisma.PurchasesUpdateManyWithoutProductNestedInput;
};
export type ProductsUncheckedUpdateInput = {
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    Sales?: Prisma.SalesUncheckedUpdateManyWithoutProductNestedInput;
    Purchases?: Prisma.PurchasesUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductsCreateManyInput = {
    productId: string;
    name: string;
    price: number;
    rating?: number | null;
    stockQuantity: number;
};
export type ProductsUpdateManyMutationInput = {
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductsUncheckedUpdateManyInput = {
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductsCountOrderByAggregateInput = {
    productId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
};
export type ProductsAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
};
export type ProductsMaxOrderByAggregateInput = {
    productId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
};
export type ProductsMinOrderByAggregateInput = {
    productId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
};
export type ProductsSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
};
export type ProductsScalarRelationFilter = {
    is?: Prisma.ProductsWhereInput;
    isNot?: Prisma.ProductsWhereInput;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ProductsCreateNestedOneWithoutSalesInput = {
    create?: Prisma.XOR<Prisma.ProductsCreateWithoutSalesInput, Prisma.ProductsUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: Prisma.ProductsCreateOrConnectWithoutSalesInput;
    connect?: Prisma.ProductsWhereUniqueInput;
};
export type ProductsUpdateOneRequiredWithoutSalesNestedInput = {
    create?: Prisma.XOR<Prisma.ProductsCreateWithoutSalesInput, Prisma.ProductsUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: Prisma.ProductsCreateOrConnectWithoutSalesInput;
    upsert?: Prisma.ProductsUpsertWithoutSalesInput;
    connect?: Prisma.ProductsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductsUpdateToOneWithWhereWithoutSalesInput, Prisma.ProductsUpdateWithoutSalesInput>, Prisma.ProductsUncheckedUpdateWithoutSalesInput>;
};
export type ProductsCreateNestedOneWithoutPurchasesInput = {
    create?: Prisma.XOR<Prisma.ProductsCreateWithoutPurchasesInput, Prisma.ProductsUncheckedCreateWithoutPurchasesInput>;
    connectOrCreate?: Prisma.ProductsCreateOrConnectWithoutPurchasesInput;
    connect?: Prisma.ProductsWhereUniqueInput;
};
export type ProductsUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: Prisma.XOR<Prisma.ProductsCreateWithoutPurchasesInput, Prisma.ProductsUncheckedCreateWithoutPurchasesInput>;
    connectOrCreate?: Prisma.ProductsCreateOrConnectWithoutPurchasesInput;
    upsert?: Prisma.ProductsUpsertWithoutPurchasesInput;
    connect?: Prisma.ProductsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductsUpdateToOneWithWhereWithoutPurchasesInput, Prisma.ProductsUpdateWithoutPurchasesInput>, Prisma.ProductsUncheckedUpdateWithoutPurchasesInput>;
};
export type ProductsCreateWithoutSalesInput = {
    productId: string;
    name: string;
    price: number;
    rating?: number | null;
    stockQuantity: number;
    Purchases?: Prisma.PurchasesCreateNestedManyWithoutProductInput;
};
export type ProductsUncheckedCreateWithoutSalesInput = {
    productId: string;
    name: string;
    price: number;
    rating?: number | null;
    stockQuantity: number;
    Purchases?: Prisma.PurchasesUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductsCreateOrConnectWithoutSalesInput = {
    where: Prisma.ProductsWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductsCreateWithoutSalesInput, Prisma.ProductsUncheckedCreateWithoutSalesInput>;
};
export type ProductsUpsertWithoutSalesInput = {
    update: Prisma.XOR<Prisma.ProductsUpdateWithoutSalesInput, Prisma.ProductsUncheckedUpdateWithoutSalesInput>;
    create: Prisma.XOR<Prisma.ProductsCreateWithoutSalesInput, Prisma.ProductsUncheckedCreateWithoutSalesInput>;
    where?: Prisma.ProductsWhereInput;
};
export type ProductsUpdateToOneWithWhereWithoutSalesInput = {
    where?: Prisma.ProductsWhereInput;
    data: Prisma.XOR<Prisma.ProductsUpdateWithoutSalesInput, Prisma.ProductsUncheckedUpdateWithoutSalesInput>;
};
export type ProductsUpdateWithoutSalesInput = {
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    Purchases?: Prisma.PurchasesUpdateManyWithoutProductNestedInput;
};
export type ProductsUncheckedUpdateWithoutSalesInput = {
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    Purchases?: Prisma.PurchasesUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductsCreateWithoutPurchasesInput = {
    productId: string;
    name: string;
    price: number;
    rating?: number | null;
    stockQuantity: number;
    Sales?: Prisma.SalesCreateNestedManyWithoutProductInput;
};
export type ProductsUncheckedCreateWithoutPurchasesInput = {
    productId: string;
    name: string;
    price: number;
    rating?: number | null;
    stockQuantity: number;
    Sales?: Prisma.SalesUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductsCreateOrConnectWithoutPurchasesInput = {
    where: Prisma.ProductsWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductsCreateWithoutPurchasesInput, Prisma.ProductsUncheckedCreateWithoutPurchasesInput>;
};
export type ProductsUpsertWithoutPurchasesInput = {
    update: Prisma.XOR<Prisma.ProductsUpdateWithoutPurchasesInput, Prisma.ProductsUncheckedUpdateWithoutPurchasesInput>;
    create: Prisma.XOR<Prisma.ProductsCreateWithoutPurchasesInput, Prisma.ProductsUncheckedCreateWithoutPurchasesInput>;
    where?: Prisma.ProductsWhereInput;
};
export type ProductsUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: Prisma.ProductsWhereInput;
    data: Prisma.XOR<Prisma.ProductsUpdateWithoutPurchasesInput, Prisma.ProductsUncheckedUpdateWithoutPurchasesInput>;
};
export type ProductsUpdateWithoutPurchasesInput = {
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    Sales?: Prisma.SalesUpdateManyWithoutProductNestedInput;
};
export type ProductsUncheckedUpdateWithoutPurchasesInput = {
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    Sales?: Prisma.SalesUncheckedUpdateManyWithoutProductNestedInput;
};
/**
 * Count Type ProductsCountOutputType
 */
export type ProductsCountOutputType = {
    Sales: number;
    Purchases: number;
};
export type ProductsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Sales?: boolean | ProductsCountOutputTypeCountSalesArgs;
    Purchases?: boolean | ProductsCountOutputTypeCountPurchasesArgs;
};
/**
 * ProductsCountOutputType without action
 */
export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: Prisma.ProductsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ProductsCountOutputType without action
 */
export type ProductsCountOutputTypeCountSalesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalesWhereInput;
};
/**
 * ProductsCountOutputType without action
 */
export type ProductsCountOutputTypeCountPurchasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchasesWhereInput;
};
export type ProductsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    productId?: boolean;
    name?: boolean;
    price?: boolean;
    rating?: boolean;
    stockQuantity?: boolean;
    Sales?: boolean | Prisma.Products$SalesArgs<ExtArgs>;
    Purchases?: boolean | Prisma.Products$PurchasesArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["products"]>;
export type ProductsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    productId?: boolean;
    name?: boolean;
    price?: boolean;
    rating?: boolean;
    stockQuantity?: boolean;
}, ExtArgs["result"]["products"]>;
export type ProductsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    productId?: boolean;
    name?: boolean;
    price?: boolean;
    rating?: boolean;
    stockQuantity?: boolean;
}, ExtArgs["result"]["products"]>;
export type ProductsSelectScalar = {
    productId?: boolean;
    name?: boolean;
    price?: boolean;
    rating?: boolean;
    stockQuantity?: boolean;
};
export type ProductsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"productId" | "name" | "price" | "rating" | "stockQuantity", ExtArgs["result"]["products"]>;
export type ProductsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Sales?: boolean | Prisma.Products$SalesArgs<ExtArgs>;
    Purchases?: boolean | Prisma.Products$PurchasesArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ProductsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ProductsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Products";
    objects: {
        Sales: Prisma.$SalesPayload<ExtArgs>[];
        Purchases: Prisma.$PurchasesPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        productId: string;
        name: string;
        price: number;
        rating: number | null;
        stockQuantity: number;
    }, ExtArgs["result"]["products"]>;
    composites: {};
};
export type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductsPayload, S>;
export type ProductsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductsCountAggregateInputType | true;
};
export interface ProductsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Products'];
        meta: {
            name: 'Products';
        };
    };
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductsClient<runtime.Types.Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductsClient<runtime.Types.Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductsClient<runtime.Types.Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductsClient<runtime.Types.Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     *
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     *
     * // Only select the `productId`
     * const productsWithProductIdOnly = await prisma.products.findMany({ select: { productId: true } })
     *
     */
    findMany<T extends ProductsFindManyArgs>(args?: Prisma.SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     *
     */
    create<T extends ProductsCreateArgs>(args: Prisma.SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma.Prisma__ProductsClient<runtime.Types.Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProductsCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Products and only return the `productId`
     * const productsWithProductIdOnly = await prisma.products.createManyAndReturn({
     *   select: { productId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     *
     */
    delete<T extends ProductsDeleteArgs>(args: Prisma.SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductsClient<runtime.Types.Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProductsUpdateArgs>(args: Prisma.SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductsClient<runtime.Types.Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Products and only return the `productId`
     * const productsWithProductIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { productId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ProductsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: Prisma.SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductsClient<runtime.Types.Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(args?: Prisma.Subset<T, ProductsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Prisma.Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>;
    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends ProductsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductsGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Products model
     */
    readonly fields: ProductsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Products.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Sales<T extends Prisma.Products$SalesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Products$SalesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    Purchases<T extends Prisma.Products$PurchasesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Products$PurchasesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Products model
 */
export interface ProductsFieldRefs {
    readonly productId: Prisma.FieldRef<"Products", 'String'>;
    readonly name: Prisma.FieldRef<"Products", 'String'>;
    readonly price: Prisma.FieldRef<"Products", 'Float'>;
    readonly rating: Prisma.FieldRef<"Products", 'Float'>;
    readonly stockQuantity: Prisma.FieldRef<"Products", 'Int'>;
}
/**
 * Products findUnique
 */
export type ProductsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: Prisma.ProductsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Products
     */
    omit?: Prisma.ProductsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductsInclude<ExtArgs> | null;
    /**
     * Filter, which Products to fetch.
     */
    where: Prisma.ProductsWhereUniqueInput;
};
/**
 * Products findUniqueOrThrow
 */
export type ProductsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: Prisma.ProductsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Products
     */
    omit?: Prisma.ProductsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductsInclude<ExtArgs> | null;
    /**
     * Filter, which Products to fetch.
     */
    where: Prisma.ProductsWhereUniqueInput;
};
/**
 * Products findFirst
 */
export type ProductsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: Prisma.ProductsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Products
     */
    omit?: Prisma.ProductsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductsInclude<ExtArgs> | null;
    /**
     * Filter, which Products to fetch.
     */
    where?: Prisma.ProductsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?: Prisma.ProductsOrderByWithRelationInput | Prisma.ProductsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     */
    cursor?: Prisma.ProductsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     */
    distinct?: Prisma.ProductsScalarFieldEnum | Prisma.ProductsScalarFieldEnum[];
};
/**
 * Products findFirstOrThrow
 */
export type ProductsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: Prisma.ProductsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Products
     */
    omit?: Prisma.ProductsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductsInclude<ExtArgs> | null;
    /**
     * Filter, which Products to fetch.
     */
    where?: Prisma.ProductsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?: Prisma.ProductsOrderByWithRelationInput | Prisma.ProductsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     */
    cursor?: Prisma.ProductsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     */
    distinct?: Prisma.ProductsScalarFieldEnum | Prisma.ProductsScalarFieldEnum[];
};
/**
 * Products findMany
 */
export type ProductsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: Prisma.ProductsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Products
     */
    omit?: Prisma.ProductsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductsInclude<ExtArgs> | null;
    /**
     * Filter, which Products to fetch.
     */
    where?: Prisma.ProductsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?: Prisma.ProductsOrderByWithRelationInput | Prisma.ProductsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Products.
     */
    cursor?: Prisma.ProductsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     */
    distinct?: Prisma.ProductsScalarFieldEnum | Prisma.ProductsScalarFieldEnum[];
};
/**
 * Products create
 */
export type ProductsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: Prisma.ProductsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Products
     */
    omit?: Prisma.ProductsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Products.
     */
    data: Prisma.XOR<Prisma.ProductsCreateInput, Prisma.ProductsUncheckedCreateInput>;
};
/**
 * Products createMany
 */
export type ProductsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: Prisma.ProductsCreateManyInput | Prisma.ProductsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Products createManyAndReturn
 */
export type ProductsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: Prisma.ProductsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Products
     */
    omit?: Prisma.ProductsOmit<ExtArgs> | null;
    /**
     * The data used to create many Products.
     */
    data: Prisma.ProductsCreateManyInput | Prisma.ProductsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Products update
 */
export type ProductsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: Prisma.ProductsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Products
     */
    omit?: Prisma.ProductsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Products.
     */
    data: Prisma.XOR<Prisma.ProductsUpdateInput, Prisma.ProductsUncheckedUpdateInput>;
    /**
     * Choose, which Products to update.
     */
    where: Prisma.ProductsWhereUniqueInput;
};
/**
 * Products updateMany
 */
export type ProductsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: Prisma.XOR<Prisma.ProductsUpdateManyMutationInput, Prisma.ProductsUncheckedUpdateManyInput>;
    /**
     * Filter which Products to update
     */
    where?: Prisma.ProductsWhereInput;
    /**
     * Limit how many Products to update.
     */
    limit?: number;
};
/**
 * Products updateManyAndReturn
 */
export type ProductsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: Prisma.ProductsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Products
     */
    omit?: Prisma.ProductsOmit<ExtArgs> | null;
    /**
     * The data used to update Products.
     */
    data: Prisma.XOR<Prisma.ProductsUpdateManyMutationInput, Prisma.ProductsUncheckedUpdateManyInput>;
    /**
     * Filter which Products to update
     */
    where?: Prisma.ProductsWhereInput;
    /**
     * Limit how many Products to update.
     */
    limit?: number;
};
/**
 * Products upsert
 */
export type ProductsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: Prisma.ProductsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Products
     */
    omit?: Prisma.ProductsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: Prisma.ProductsWhereUniqueInput;
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: Prisma.XOR<Prisma.ProductsCreateInput, Prisma.ProductsUncheckedCreateInput>;
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProductsUpdateInput, Prisma.ProductsUncheckedUpdateInput>;
};
/**
 * Products delete
 */
export type ProductsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: Prisma.ProductsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Products
     */
    omit?: Prisma.ProductsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductsInclude<ExtArgs> | null;
    /**
     * Filter which Products to delete.
     */
    where: Prisma.ProductsWhereUniqueInput;
};
/**
 * Products deleteMany
 */
export type ProductsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: Prisma.ProductsWhereInput;
    /**
     * Limit how many Products to delete.
     */
    limit?: number;
};
/**
 * Products.Sales
 */
export type Products$SalesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: Prisma.SalesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Sales
     */
    omit?: Prisma.SalesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SalesInclude<ExtArgs> | null;
    where?: Prisma.SalesWhereInput;
    orderBy?: Prisma.SalesOrderByWithRelationInput | Prisma.SalesOrderByWithRelationInput[];
    cursor?: Prisma.SalesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SalesScalarFieldEnum | Prisma.SalesScalarFieldEnum[];
};
/**
 * Products.Purchases
 */
export type Products$PurchasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: Prisma.PurchasesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchases
     */
    omit?: Prisma.PurchasesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PurchasesInclude<ExtArgs> | null;
    where?: Prisma.PurchasesWhereInput;
    orderBy?: Prisma.PurchasesOrderByWithRelationInput | Prisma.PurchasesOrderByWithRelationInput[];
    cursor?: Prisma.PurchasesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchasesScalarFieldEnum | Prisma.PurchasesScalarFieldEnum[];
};
/**
 * Products without action
 */
export type ProductsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: Prisma.ProductsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Products
     */
    omit?: Prisma.ProductsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductsInclude<ExtArgs> | null;
};
//# sourceMappingURL=Products.d.ts.map