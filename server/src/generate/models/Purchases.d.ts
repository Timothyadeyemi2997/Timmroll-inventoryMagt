import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Purchases
 *
 */
export type PurchasesModel = runtime.Types.Result.DefaultSelection<Prisma.$PurchasesPayload>;
export type AggregatePurchases = {
    _count: PurchasesCountAggregateOutputType | null;
    _avg: PurchasesAvgAggregateOutputType | null;
    _sum: PurchasesSumAggregateOutputType | null;
    _min: PurchasesMinAggregateOutputType | null;
    _max: PurchasesMaxAggregateOutputType | null;
};
export type PurchasesAvgAggregateOutputType = {
    quantity: number | null;
    unitCost: number | null;
    totalCost: number | null;
};
export type PurchasesSumAggregateOutputType = {
    quantity: number | null;
    unitCost: number | null;
    totalCost: number | null;
};
export type PurchasesMinAggregateOutputType = {
    purchaseId: string | null;
    productId: string | null;
    timestamp: Date | null;
    quantity: number | null;
    unitCost: number | null;
    totalCost: number | null;
};
export type PurchasesMaxAggregateOutputType = {
    purchaseId: string | null;
    productId: string | null;
    timestamp: Date | null;
    quantity: number | null;
    unitCost: number | null;
    totalCost: number | null;
};
export type PurchasesCountAggregateOutputType = {
    purchaseId: number;
    productId: number;
    timestamp: number;
    quantity: number;
    unitCost: number;
    totalCost: number;
    _all: number;
};
export type PurchasesAvgAggregateInputType = {
    quantity?: true;
    unitCost?: true;
    totalCost?: true;
};
export type PurchasesSumAggregateInputType = {
    quantity?: true;
    unitCost?: true;
    totalCost?: true;
};
export type PurchasesMinAggregateInputType = {
    purchaseId?: true;
    productId?: true;
    timestamp?: true;
    quantity?: true;
    unitCost?: true;
    totalCost?: true;
};
export type PurchasesMaxAggregateInputType = {
    purchaseId?: true;
    productId?: true;
    timestamp?: true;
    quantity?: true;
    unitCost?: true;
    totalCost?: true;
};
export type PurchasesCountAggregateInputType = {
    purchaseId?: true;
    productId?: true;
    timestamp?: true;
    quantity?: true;
    unitCost?: true;
    totalCost?: true;
    _all?: true;
};
export type PurchasesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to aggregate.
     */
    where?: Prisma.PurchasesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Purchases to fetch.
     */
    orderBy?: Prisma.PurchasesOrderByWithRelationInput | Prisma.PurchasesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PurchasesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Purchases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Purchases
    **/
    _count?: true | PurchasesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PurchasesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PurchasesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PurchasesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PurchasesMaxAggregateInputType;
};
export type GetPurchasesAggregateType<T extends PurchasesAggregateArgs> = {
    [P in keyof T & keyof AggregatePurchases]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePurchases[P]> : Prisma.GetScalarType<T[P], AggregatePurchases[P]>;
};
export type PurchasesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchasesWhereInput;
    orderBy?: Prisma.PurchasesOrderByWithAggregationInput | Prisma.PurchasesOrderByWithAggregationInput[];
    by: Prisma.PurchasesScalarFieldEnum[] | Prisma.PurchasesScalarFieldEnum;
    having?: Prisma.PurchasesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PurchasesCountAggregateInputType | true;
    _avg?: PurchasesAvgAggregateInputType;
    _sum?: PurchasesSumAggregateInputType;
    _min?: PurchasesMinAggregateInputType;
    _max?: PurchasesMaxAggregateInputType;
};
export type PurchasesGroupByOutputType = {
    purchaseId: string;
    productId: string;
    timestamp: Date;
    quantity: number;
    unitCost: number;
    totalCost: number;
    _count: PurchasesCountAggregateOutputType | null;
    _avg: PurchasesAvgAggregateOutputType | null;
    _sum: PurchasesSumAggregateOutputType | null;
    _min: PurchasesMinAggregateOutputType | null;
    _max: PurchasesMaxAggregateOutputType | null;
};
export type GetPurchasesGroupByPayload<T extends PurchasesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PurchasesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PurchasesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PurchasesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PurchasesGroupByOutputType[P]>;
}>>;
export type PurchasesWhereInput = {
    AND?: Prisma.PurchasesWhereInput | Prisma.PurchasesWhereInput[];
    OR?: Prisma.PurchasesWhereInput[];
    NOT?: Prisma.PurchasesWhereInput | Prisma.PurchasesWhereInput[];
    purchaseId?: Prisma.StringFilter<"Purchases"> | string;
    productId?: Prisma.StringFilter<"Purchases"> | string;
    timestamp?: Prisma.DateTimeFilter<"Purchases"> | Date | string;
    quantity?: Prisma.IntFilter<"Purchases"> | number;
    unitCost?: Prisma.FloatFilter<"Purchases"> | number;
    totalCost?: Prisma.FloatFilter<"Purchases"> | number;
    product?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.ProductsWhereInput>;
};
export type PurchasesOrderByWithRelationInput = {
    purchaseId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
    totalCost?: Prisma.SortOrder;
    product?: Prisma.ProductsOrderByWithRelationInput;
};
export type PurchasesWhereUniqueInput = Prisma.AtLeast<{
    purchaseId?: string;
    AND?: Prisma.PurchasesWhereInput | Prisma.PurchasesWhereInput[];
    OR?: Prisma.PurchasesWhereInput[];
    NOT?: Prisma.PurchasesWhereInput | Prisma.PurchasesWhereInput[];
    productId?: Prisma.StringFilter<"Purchases"> | string;
    timestamp?: Prisma.DateTimeFilter<"Purchases"> | Date | string;
    quantity?: Prisma.IntFilter<"Purchases"> | number;
    unitCost?: Prisma.FloatFilter<"Purchases"> | number;
    totalCost?: Prisma.FloatFilter<"Purchases"> | number;
    product?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.ProductsWhereInput>;
}, "purchaseId">;
export type PurchasesOrderByWithAggregationInput = {
    purchaseId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
    totalCost?: Prisma.SortOrder;
    _count?: Prisma.PurchasesCountOrderByAggregateInput;
    _avg?: Prisma.PurchasesAvgOrderByAggregateInput;
    _max?: Prisma.PurchasesMaxOrderByAggregateInput;
    _min?: Prisma.PurchasesMinOrderByAggregateInput;
    _sum?: Prisma.PurchasesSumOrderByAggregateInput;
};
export type PurchasesScalarWhereWithAggregatesInput = {
    AND?: Prisma.PurchasesScalarWhereWithAggregatesInput | Prisma.PurchasesScalarWhereWithAggregatesInput[];
    OR?: Prisma.PurchasesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PurchasesScalarWhereWithAggregatesInput | Prisma.PurchasesScalarWhereWithAggregatesInput[];
    purchaseId?: Prisma.StringWithAggregatesFilter<"Purchases"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"Purchases"> | string;
    timestamp?: Prisma.DateTimeWithAggregatesFilter<"Purchases"> | Date | string;
    quantity?: Prisma.IntWithAggregatesFilter<"Purchases"> | number;
    unitCost?: Prisma.FloatWithAggregatesFilter<"Purchases"> | number;
    totalCost?: Prisma.FloatWithAggregatesFilter<"Purchases"> | number;
};
export type PurchasesCreateInput = {
    purchaseId: string;
    timestamp: Date | string;
    quantity: number;
    unitCost: number;
    totalCost: number;
    product: Prisma.ProductsCreateNestedOneWithoutPurchasesInput;
};
export type PurchasesUncheckedCreateInput = {
    purchaseId: string;
    productId: string;
    timestamp: Date | string;
    quantity: number;
    unitCost: number;
    totalCost: number;
};
export type PurchasesUpdateInput = {
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    product?: Prisma.ProductsUpdateOneRequiredWithoutPurchasesNestedInput;
};
export type PurchasesUncheckedUpdateInput = {
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalCost?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type PurchasesCreateManyInput = {
    purchaseId: string;
    productId: string;
    timestamp: Date | string;
    quantity: number;
    unitCost: number;
    totalCost: number;
};
export type PurchasesUpdateManyMutationInput = {
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalCost?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type PurchasesUncheckedUpdateManyInput = {
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalCost?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type PurchasesListRelationFilter = {
    every?: Prisma.PurchasesWhereInput;
    some?: Prisma.PurchasesWhereInput;
    none?: Prisma.PurchasesWhereInput;
};
export type PurchasesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PurchasesCountOrderByAggregateInput = {
    purchaseId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
    totalCost?: Prisma.SortOrder;
};
export type PurchasesAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
    totalCost?: Prisma.SortOrder;
};
export type PurchasesMaxOrderByAggregateInput = {
    purchaseId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
    totalCost?: Prisma.SortOrder;
};
export type PurchasesMinOrderByAggregateInput = {
    purchaseId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
    totalCost?: Prisma.SortOrder;
};
export type PurchasesSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
    totalCost?: Prisma.SortOrder;
};
export type PurchasesCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.PurchasesCreateWithoutProductInput, Prisma.PurchasesUncheckedCreateWithoutProductInput> | Prisma.PurchasesCreateWithoutProductInput[] | Prisma.PurchasesUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PurchasesCreateOrConnectWithoutProductInput | Prisma.PurchasesCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.PurchasesCreateManyProductInputEnvelope;
    connect?: Prisma.PurchasesWhereUniqueInput | Prisma.PurchasesWhereUniqueInput[];
};
export type PurchasesUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.PurchasesCreateWithoutProductInput, Prisma.PurchasesUncheckedCreateWithoutProductInput> | Prisma.PurchasesCreateWithoutProductInput[] | Prisma.PurchasesUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PurchasesCreateOrConnectWithoutProductInput | Prisma.PurchasesCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.PurchasesCreateManyProductInputEnvelope;
    connect?: Prisma.PurchasesWhereUniqueInput | Prisma.PurchasesWhereUniqueInput[];
};
export type PurchasesUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.PurchasesCreateWithoutProductInput, Prisma.PurchasesUncheckedCreateWithoutProductInput> | Prisma.PurchasesCreateWithoutProductInput[] | Prisma.PurchasesUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PurchasesCreateOrConnectWithoutProductInput | Prisma.PurchasesCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.PurchasesUpsertWithWhereUniqueWithoutProductInput | Prisma.PurchasesUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.PurchasesCreateManyProductInputEnvelope;
    set?: Prisma.PurchasesWhereUniqueInput | Prisma.PurchasesWhereUniqueInput[];
    disconnect?: Prisma.PurchasesWhereUniqueInput | Prisma.PurchasesWhereUniqueInput[];
    delete?: Prisma.PurchasesWhereUniqueInput | Prisma.PurchasesWhereUniqueInput[];
    connect?: Prisma.PurchasesWhereUniqueInput | Prisma.PurchasesWhereUniqueInput[];
    update?: Prisma.PurchasesUpdateWithWhereUniqueWithoutProductInput | Prisma.PurchasesUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.PurchasesUpdateManyWithWhereWithoutProductInput | Prisma.PurchasesUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.PurchasesScalarWhereInput | Prisma.PurchasesScalarWhereInput[];
};
export type PurchasesUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.PurchasesCreateWithoutProductInput, Prisma.PurchasesUncheckedCreateWithoutProductInput> | Prisma.PurchasesCreateWithoutProductInput[] | Prisma.PurchasesUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PurchasesCreateOrConnectWithoutProductInput | Prisma.PurchasesCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.PurchasesUpsertWithWhereUniqueWithoutProductInput | Prisma.PurchasesUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.PurchasesCreateManyProductInputEnvelope;
    set?: Prisma.PurchasesWhereUniqueInput | Prisma.PurchasesWhereUniqueInput[];
    disconnect?: Prisma.PurchasesWhereUniqueInput | Prisma.PurchasesWhereUniqueInput[];
    delete?: Prisma.PurchasesWhereUniqueInput | Prisma.PurchasesWhereUniqueInput[];
    connect?: Prisma.PurchasesWhereUniqueInput | Prisma.PurchasesWhereUniqueInput[];
    update?: Prisma.PurchasesUpdateWithWhereUniqueWithoutProductInput | Prisma.PurchasesUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.PurchasesUpdateManyWithWhereWithoutProductInput | Prisma.PurchasesUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.PurchasesScalarWhereInput | Prisma.PurchasesScalarWhereInput[];
};
export type PurchasesCreateWithoutProductInput = {
    purchaseId: string;
    timestamp: Date | string;
    quantity: number;
    unitCost: number;
    totalCost: number;
};
export type PurchasesUncheckedCreateWithoutProductInput = {
    purchaseId: string;
    timestamp: Date | string;
    quantity: number;
    unitCost: number;
    totalCost: number;
};
export type PurchasesCreateOrConnectWithoutProductInput = {
    where: Prisma.PurchasesWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchasesCreateWithoutProductInput, Prisma.PurchasesUncheckedCreateWithoutProductInput>;
};
export type PurchasesCreateManyProductInputEnvelope = {
    data: Prisma.PurchasesCreateManyProductInput | Prisma.PurchasesCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type PurchasesUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.PurchasesWhereUniqueInput;
    update: Prisma.XOR<Prisma.PurchasesUpdateWithoutProductInput, Prisma.PurchasesUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.PurchasesCreateWithoutProductInput, Prisma.PurchasesUncheckedCreateWithoutProductInput>;
};
export type PurchasesUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.PurchasesWhereUniqueInput;
    data: Prisma.XOR<Prisma.PurchasesUpdateWithoutProductInput, Prisma.PurchasesUncheckedUpdateWithoutProductInput>;
};
export type PurchasesUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.PurchasesScalarWhereInput;
    data: Prisma.XOR<Prisma.PurchasesUpdateManyMutationInput, Prisma.PurchasesUncheckedUpdateManyWithoutProductInput>;
};
export type PurchasesScalarWhereInput = {
    AND?: Prisma.PurchasesScalarWhereInput | Prisma.PurchasesScalarWhereInput[];
    OR?: Prisma.PurchasesScalarWhereInput[];
    NOT?: Prisma.PurchasesScalarWhereInput | Prisma.PurchasesScalarWhereInput[];
    purchaseId?: Prisma.StringFilter<"Purchases"> | string;
    productId?: Prisma.StringFilter<"Purchases"> | string;
    timestamp?: Prisma.DateTimeFilter<"Purchases"> | Date | string;
    quantity?: Prisma.IntFilter<"Purchases"> | number;
    unitCost?: Prisma.FloatFilter<"Purchases"> | number;
    totalCost?: Prisma.FloatFilter<"Purchases"> | number;
};
export type PurchasesCreateManyProductInput = {
    purchaseId: string;
    timestamp: Date | string;
    quantity: number;
    unitCost: number;
    totalCost: number;
};
export type PurchasesUpdateWithoutProductInput = {
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalCost?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type PurchasesUncheckedUpdateWithoutProductInput = {
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalCost?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type PurchasesUncheckedUpdateManyWithoutProductInput = {
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalCost?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type PurchasesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    purchaseId?: boolean;
    productId?: boolean;
    timestamp?: boolean;
    quantity?: boolean;
    unitCost?: boolean;
    totalCost?: boolean;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchases"]>;
export type PurchasesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    purchaseId?: boolean;
    productId?: boolean;
    timestamp?: boolean;
    quantity?: boolean;
    unitCost?: boolean;
    totalCost?: boolean;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchases"]>;
export type PurchasesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    purchaseId?: boolean;
    productId?: boolean;
    timestamp?: boolean;
    quantity?: boolean;
    unitCost?: boolean;
    totalCost?: boolean;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchases"]>;
export type PurchasesSelectScalar = {
    purchaseId?: boolean;
    productId?: boolean;
    timestamp?: boolean;
    quantity?: boolean;
    unitCost?: boolean;
    totalCost?: boolean;
};
export type PurchasesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"purchaseId" | "productId" | "timestamp" | "quantity" | "unitCost" | "totalCost", ExtArgs["result"]["purchases"]>;
export type PurchasesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
};
export type PurchasesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
};
export type PurchasesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
};
export type $PurchasesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Purchases";
    objects: {
        product: Prisma.$ProductsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        purchaseId: string;
        productId: string;
        timestamp: Date;
        quantity: number;
        unitCost: number;
        totalCost: number;
    }, ExtArgs["result"]["purchases"]>;
    composites: {};
};
export type PurchasesGetPayload<S extends boolean | null | undefined | PurchasesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PurchasesPayload, S>;
export type PurchasesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PurchasesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PurchasesCountAggregateInputType | true;
};
export interface PurchasesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Purchases'];
        meta: {
            name: 'Purchases';
        };
    };
    /**
     * Find zero or one Purchases that matches the filter.
     * @param {PurchasesFindUniqueArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchasesFindUniqueArgs>(args: Prisma.SelectSubset<T, PurchasesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PurchasesClient<runtime.Types.Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Purchases that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchasesFindUniqueOrThrowArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchasesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PurchasesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurchasesClient<runtime.Types.Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesFindFirstArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchasesFindFirstArgs>(args?: Prisma.SelectSubset<T, PurchasesFindFirstArgs<ExtArgs>>): Prisma.Prisma__PurchasesClient<runtime.Types.Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Purchases that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesFindFirstOrThrowArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchasesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PurchasesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurchasesClient<runtime.Types.Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchases.findMany()
     *
     * // Get first 10 Purchases
     * const purchases = await prisma.purchases.findMany({ take: 10 })
     *
     * // Only select the `purchaseId`
     * const purchasesWithPurchaseIdOnly = await prisma.purchases.findMany({ select: { purchaseId: true } })
     *
     */
    findMany<T extends PurchasesFindManyArgs>(args?: Prisma.SelectSubset<T, PurchasesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Purchases.
     * @param {PurchasesCreateArgs} args - Arguments to create a Purchases.
     * @example
     * // Create one Purchases
     * const Purchases = await prisma.purchases.create({
     *   data: {
     *     // ... data to create a Purchases
     *   }
     * })
     *
     */
    create<T extends PurchasesCreateArgs>(args: Prisma.SelectSubset<T, PurchasesCreateArgs<ExtArgs>>): Prisma.Prisma__PurchasesClient<runtime.Types.Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Purchases.
     * @param {PurchasesCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchases = await prisma.purchases.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PurchasesCreateManyArgs>(args?: Prisma.SelectSubset<T, PurchasesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {PurchasesCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchases = await prisma.purchases.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Purchases and only return the `purchaseId`
     * const purchasesWithPurchaseIdOnly = await prisma.purchases.createManyAndReturn({
     *   select: { purchaseId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PurchasesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PurchasesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Purchases.
     * @param {PurchasesDeleteArgs} args - Arguments to delete one Purchases.
     * @example
     * // Delete one Purchases
     * const Purchases = await prisma.purchases.delete({
     *   where: {
     *     // ... filter to delete one Purchases
     *   }
     * })
     *
     */
    delete<T extends PurchasesDeleteArgs>(args: Prisma.SelectSubset<T, PurchasesDeleteArgs<ExtArgs>>): Prisma.Prisma__PurchasesClient<runtime.Types.Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Purchases.
     * @param {PurchasesUpdateArgs} args - Arguments to update one Purchases.
     * @example
     * // Update one Purchases
     * const purchases = await prisma.purchases.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PurchasesUpdateArgs>(args: Prisma.SelectSubset<T, PurchasesUpdateArgs<ExtArgs>>): Prisma.Prisma__PurchasesClient<runtime.Types.Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Purchases.
     * @param {PurchasesDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchases.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PurchasesDeleteManyArgs>(args?: Prisma.SelectSubset<T, PurchasesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchases = await prisma.purchases.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PurchasesUpdateManyArgs>(args: Prisma.SelectSubset<T, PurchasesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Purchases and returns the data updated in the database.
     * @param {PurchasesUpdateManyAndReturnArgs} args - Arguments to update many Purchases.
     * @example
     * // Update many Purchases
     * const purchases = await prisma.purchases.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Purchases and only return the `purchaseId`
     * const purchasesWithPurchaseIdOnly = await prisma.purchases.updateManyAndReturn({
     *   select: { purchaseId: true },
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
    updateManyAndReturn<T extends PurchasesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PurchasesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Purchases.
     * @param {PurchasesUpsertArgs} args - Arguments to update or create a Purchases.
     * @example
     * // Update or create a Purchases
     * const purchases = await prisma.purchases.upsert({
     *   create: {
     *     // ... data to create a Purchases
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchases we want to update
     *   }
     * })
     */
    upsert<T extends PurchasesUpsertArgs>(args: Prisma.SelectSubset<T, PurchasesUpsertArgs<ExtArgs>>): Prisma.Prisma__PurchasesClient<runtime.Types.Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchases.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchasesCountArgs>(args?: Prisma.Subset<T, PurchasesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PurchasesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurchasesAggregateArgs>(args: Prisma.Subset<T, PurchasesAggregateArgs>): Prisma.PrismaPromise<GetPurchasesAggregateType<T>>;
    /**
     * Group by Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PurchasesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PurchasesGroupByArgs['orderBy'];
    } : {
        orderBy?: PurchasesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PurchasesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchasesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Purchases model
     */
    readonly fields: PurchasesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Purchases.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PurchasesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductsDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductsClient<runtime.Types.Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Purchases model
 */
export interface PurchasesFieldRefs {
    readonly purchaseId: Prisma.FieldRef<"Purchases", 'String'>;
    readonly productId: Prisma.FieldRef<"Purchases", 'String'>;
    readonly timestamp: Prisma.FieldRef<"Purchases", 'DateTime'>;
    readonly quantity: Prisma.FieldRef<"Purchases", 'Int'>;
    readonly unitCost: Prisma.FieldRef<"Purchases", 'Float'>;
    readonly totalCost: Prisma.FieldRef<"Purchases", 'Float'>;
}
/**
 * Purchases findUnique
 */
export type PurchasesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Purchases to fetch.
     */
    where: Prisma.PurchasesWhereUniqueInput;
};
/**
 * Purchases findUniqueOrThrow
 */
export type PurchasesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Purchases to fetch.
     */
    where: Prisma.PurchasesWhereUniqueInput;
};
/**
 * Purchases findFirst
 */
export type PurchasesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Purchases to fetch.
     */
    where?: Prisma.PurchasesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Purchases to fetch.
     */
    orderBy?: Prisma.PurchasesOrderByWithRelationInput | Prisma.PurchasesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Purchases.
     */
    cursor?: Prisma.PurchasesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Purchases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Purchases.
     */
    distinct?: Prisma.PurchasesScalarFieldEnum | Prisma.PurchasesScalarFieldEnum[];
};
/**
 * Purchases findFirstOrThrow
 */
export type PurchasesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Purchases to fetch.
     */
    where?: Prisma.PurchasesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Purchases to fetch.
     */
    orderBy?: Prisma.PurchasesOrderByWithRelationInput | Prisma.PurchasesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Purchases.
     */
    cursor?: Prisma.PurchasesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Purchases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Purchases.
     */
    distinct?: Prisma.PurchasesScalarFieldEnum | Prisma.PurchasesScalarFieldEnum[];
};
/**
 * Purchases findMany
 */
export type PurchasesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Purchases to fetch.
     */
    where?: Prisma.PurchasesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Purchases to fetch.
     */
    orderBy?: Prisma.PurchasesOrderByWithRelationInput | Prisma.PurchasesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Purchases.
     */
    cursor?: Prisma.PurchasesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Purchases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Purchases.
     */
    distinct?: Prisma.PurchasesScalarFieldEnum | Prisma.PurchasesScalarFieldEnum[];
};
/**
 * Purchases create
 */
export type PurchasesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Purchases.
     */
    data: Prisma.XOR<Prisma.PurchasesCreateInput, Prisma.PurchasesUncheckedCreateInput>;
};
/**
 * Purchases createMany
 */
export type PurchasesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: Prisma.PurchasesCreateManyInput | Prisma.PurchasesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Purchases createManyAndReturn
 */
export type PurchasesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: Prisma.PurchasesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchases
     */
    omit?: Prisma.PurchasesOmit<ExtArgs> | null;
    /**
     * The data used to create many Purchases.
     */
    data: Prisma.PurchasesCreateManyInput | Prisma.PurchasesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PurchasesIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Purchases update
 */
export type PurchasesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Purchases.
     */
    data: Prisma.XOR<Prisma.PurchasesUpdateInput, Prisma.PurchasesUncheckedUpdateInput>;
    /**
     * Choose, which Purchases to update.
     */
    where: Prisma.PurchasesWhereUniqueInput;
};
/**
 * Purchases updateMany
 */
export type PurchasesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: Prisma.XOR<Prisma.PurchasesUpdateManyMutationInput, Prisma.PurchasesUncheckedUpdateManyInput>;
    /**
     * Filter which Purchases to update
     */
    where?: Prisma.PurchasesWhereInput;
    /**
     * Limit how many Purchases to update.
     */
    limit?: number;
};
/**
 * Purchases updateManyAndReturn
 */
export type PurchasesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: Prisma.PurchasesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchases
     */
    omit?: Prisma.PurchasesOmit<ExtArgs> | null;
    /**
     * The data used to update Purchases.
     */
    data: Prisma.XOR<Prisma.PurchasesUpdateManyMutationInput, Prisma.PurchasesUncheckedUpdateManyInput>;
    /**
     * Filter which Purchases to update
     */
    where?: Prisma.PurchasesWhereInput;
    /**
     * Limit how many Purchases to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PurchasesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Purchases upsert
 */
export type PurchasesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Purchases to update in case it exists.
     */
    where: Prisma.PurchasesWhereUniqueInput;
    /**
     * In case the Purchases found by the `where` argument doesn't exist, create a new Purchases with this data.
     */
    create: Prisma.XOR<Prisma.PurchasesCreateInput, Prisma.PurchasesUncheckedCreateInput>;
    /**
     * In case the Purchases was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PurchasesUpdateInput, Prisma.PurchasesUncheckedUpdateInput>;
};
/**
 * Purchases delete
 */
export type PurchasesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Purchases to delete.
     */
    where: Prisma.PurchasesWhereUniqueInput;
};
/**
 * Purchases deleteMany
 */
export type PurchasesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: Prisma.PurchasesWhereInput;
    /**
     * Limit how many Purchases to delete.
     */
    limit?: number;
};
/**
 * Purchases without action
 */
export type PurchasesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Purchases.d.ts.map