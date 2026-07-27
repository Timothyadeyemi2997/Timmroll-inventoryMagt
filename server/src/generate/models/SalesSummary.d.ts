import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model SalesSummary
 *
 */
export type SalesSummaryModel = runtime.Types.Result.DefaultSelection<Prisma.$SalesSummaryPayload>;
export type AggregateSalesSummary = {
    _count: SalesSummaryCountAggregateOutputType | null;
    _avg: SalesSummaryAvgAggregateOutputType | null;
    _sum: SalesSummarySumAggregateOutputType | null;
    _min: SalesSummaryMinAggregateOutputType | null;
    _max: SalesSummaryMaxAggregateOutputType | null;
};
export type SalesSummaryAvgAggregateOutputType = {
    totalValue: number | null;
    changePercentage: number | null;
};
export type SalesSummarySumAggregateOutputType = {
    totalValue: number | null;
    changePercentage: number | null;
};
export type SalesSummaryMinAggregateOutputType = {
    salesSummaryId: string | null;
    totalValue: number | null;
    changePercentage: number | null;
    date: Date | null;
};
export type SalesSummaryMaxAggregateOutputType = {
    salesSummaryId: string | null;
    totalValue: number | null;
    changePercentage: number | null;
    date: Date | null;
};
export type SalesSummaryCountAggregateOutputType = {
    salesSummaryId: number;
    totalValue: number;
    changePercentage: number;
    date: number;
    _all: number;
};
export type SalesSummaryAvgAggregateInputType = {
    totalValue?: true;
    changePercentage?: true;
};
export type SalesSummarySumAggregateInputType = {
    totalValue?: true;
    changePercentage?: true;
};
export type SalesSummaryMinAggregateInputType = {
    salesSummaryId?: true;
    totalValue?: true;
    changePercentage?: true;
    date?: true;
};
export type SalesSummaryMaxAggregateInputType = {
    salesSummaryId?: true;
    totalValue?: true;
    changePercentage?: true;
    date?: true;
};
export type SalesSummaryCountAggregateInputType = {
    salesSummaryId?: true;
    totalValue?: true;
    changePercentage?: true;
    date?: true;
    _all?: true;
};
export type SalesSummaryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SalesSummary to aggregate.
     */
    where?: Prisma.SalesSummaryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SalesSummaries to fetch.
     */
    orderBy?: Prisma.SalesSummaryOrderByWithRelationInput | Prisma.SalesSummaryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SalesSummaryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SalesSummaries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SalesSummaries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SalesSummaries
    **/
    _count?: true | SalesSummaryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SalesSummaryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SalesSummarySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SalesSummaryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SalesSummaryMaxAggregateInputType;
};
export type GetSalesSummaryAggregateType<T extends SalesSummaryAggregateArgs> = {
    [P in keyof T & keyof AggregateSalesSummary]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSalesSummary[P]> : Prisma.GetScalarType<T[P], AggregateSalesSummary[P]>;
};
export type SalesSummaryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalesSummaryWhereInput;
    orderBy?: Prisma.SalesSummaryOrderByWithAggregationInput | Prisma.SalesSummaryOrderByWithAggregationInput[];
    by: Prisma.SalesSummaryScalarFieldEnum[] | Prisma.SalesSummaryScalarFieldEnum;
    having?: Prisma.SalesSummaryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SalesSummaryCountAggregateInputType | true;
    _avg?: SalesSummaryAvgAggregateInputType;
    _sum?: SalesSummarySumAggregateInputType;
    _min?: SalesSummaryMinAggregateInputType;
    _max?: SalesSummaryMaxAggregateInputType;
};
export type SalesSummaryGroupByOutputType = {
    salesSummaryId: string;
    totalValue: number;
    changePercentage: number | null;
    date: Date;
    _count: SalesSummaryCountAggregateOutputType | null;
    _avg: SalesSummaryAvgAggregateOutputType | null;
    _sum: SalesSummarySumAggregateOutputType | null;
    _min: SalesSummaryMinAggregateOutputType | null;
    _max: SalesSummaryMaxAggregateOutputType | null;
};
export type GetSalesSummaryGroupByPayload<T extends SalesSummaryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SalesSummaryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SalesSummaryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SalesSummaryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SalesSummaryGroupByOutputType[P]>;
}>>;
export type SalesSummaryWhereInput = {
    AND?: Prisma.SalesSummaryWhereInput | Prisma.SalesSummaryWhereInput[];
    OR?: Prisma.SalesSummaryWhereInput[];
    NOT?: Prisma.SalesSummaryWhereInput | Prisma.SalesSummaryWhereInput[];
    salesSummaryId?: Prisma.StringFilter<"SalesSummary"> | string;
    totalValue?: Prisma.FloatFilter<"SalesSummary"> | number;
    changePercentage?: Prisma.FloatNullableFilter<"SalesSummary"> | number | null;
    date?: Prisma.DateTimeFilter<"SalesSummary"> | Date | string;
};
export type SalesSummaryOrderByWithRelationInput = {
    salesSummaryId?: Prisma.SortOrder;
    totalValue?: Prisma.SortOrder;
    changePercentage?: Prisma.SortOrderInput | Prisma.SortOrder;
    date?: Prisma.SortOrder;
};
export type SalesSummaryWhereUniqueInput = Prisma.AtLeast<{
    salesSummaryId?: string;
    AND?: Prisma.SalesSummaryWhereInput | Prisma.SalesSummaryWhereInput[];
    OR?: Prisma.SalesSummaryWhereInput[];
    NOT?: Prisma.SalesSummaryWhereInput | Prisma.SalesSummaryWhereInput[];
    totalValue?: Prisma.FloatFilter<"SalesSummary"> | number;
    changePercentage?: Prisma.FloatNullableFilter<"SalesSummary"> | number | null;
    date?: Prisma.DateTimeFilter<"SalesSummary"> | Date | string;
}, "salesSummaryId">;
export type SalesSummaryOrderByWithAggregationInput = {
    salesSummaryId?: Prisma.SortOrder;
    totalValue?: Prisma.SortOrder;
    changePercentage?: Prisma.SortOrderInput | Prisma.SortOrder;
    date?: Prisma.SortOrder;
    _count?: Prisma.SalesSummaryCountOrderByAggregateInput;
    _avg?: Prisma.SalesSummaryAvgOrderByAggregateInput;
    _max?: Prisma.SalesSummaryMaxOrderByAggregateInput;
    _min?: Prisma.SalesSummaryMinOrderByAggregateInput;
    _sum?: Prisma.SalesSummarySumOrderByAggregateInput;
};
export type SalesSummaryScalarWhereWithAggregatesInput = {
    AND?: Prisma.SalesSummaryScalarWhereWithAggregatesInput | Prisma.SalesSummaryScalarWhereWithAggregatesInput[];
    OR?: Prisma.SalesSummaryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SalesSummaryScalarWhereWithAggregatesInput | Prisma.SalesSummaryScalarWhereWithAggregatesInput[];
    salesSummaryId?: Prisma.StringWithAggregatesFilter<"SalesSummary"> | string;
    totalValue?: Prisma.FloatWithAggregatesFilter<"SalesSummary"> | number;
    changePercentage?: Prisma.FloatNullableWithAggregatesFilter<"SalesSummary"> | number | null;
    date?: Prisma.DateTimeWithAggregatesFilter<"SalesSummary"> | Date | string;
};
export type SalesSummaryCreateInput = {
    salesSummaryId: string;
    totalValue: number;
    changePercentage?: number | null;
    date: Date | string;
};
export type SalesSummaryUncheckedCreateInput = {
    salesSummaryId: string;
    totalValue: number;
    changePercentage?: number | null;
    date: Date | string;
};
export type SalesSummaryUpdateInput = {
    salesSummaryId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    changePercentage?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalesSummaryUncheckedUpdateInput = {
    salesSummaryId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    changePercentage?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalesSummaryCreateManyInput = {
    salesSummaryId: string;
    totalValue: number;
    changePercentage?: number | null;
    date: Date | string;
};
export type SalesSummaryUpdateManyMutationInput = {
    salesSummaryId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    changePercentage?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalesSummaryUncheckedUpdateManyInput = {
    salesSummaryId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    changePercentage?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalesSummaryCountOrderByAggregateInput = {
    salesSummaryId?: Prisma.SortOrder;
    totalValue?: Prisma.SortOrder;
    changePercentage?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
};
export type SalesSummaryAvgOrderByAggregateInput = {
    totalValue?: Prisma.SortOrder;
    changePercentage?: Prisma.SortOrder;
};
export type SalesSummaryMaxOrderByAggregateInput = {
    salesSummaryId?: Prisma.SortOrder;
    totalValue?: Prisma.SortOrder;
    changePercentage?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
};
export type SalesSummaryMinOrderByAggregateInput = {
    salesSummaryId?: Prisma.SortOrder;
    totalValue?: Prisma.SortOrder;
    changePercentage?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
};
export type SalesSummarySumOrderByAggregateInput = {
    totalValue?: Prisma.SortOrder;
    changePercentage?: Prisma.SortOrder;
};
export type SalesSummarySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    salesSummaryId?: boolean;
    totalValue?: boolean;
    changePercentage?: boolean;
    date?: boolean;
}, ExtArgs["result"]["salesSummary"]>;
export type SalesSummarySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    salesSummaryId?: boolean;
    totalValue?: boolean;
    changePercentage?: boolean;
    date?: boolean;
}, ExtArgs["result"]["salesSummary"]>;
export type SalesSummarySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    salesSummaryId?: boolean;
    totalValue?: boolean;
    changePercentage?: boolean;
    date?: boolean;
}, ExtArgs["result"]["salesSummary"]>;
export type SalesSummarySelectScalar = {
    salesSummaryId?: boolean;
    totalValue?: boolean;
    changePercentage?: boolean;
    date?: boolean;
};
export type SalesSummaryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"salesSummaryId" | "totalValue" | "changePercentage" | "date", ExtArgs["result"]["salesSummary"]>;
export type $SalesSummaryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SalesSummary";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        salesSummaryId: string;
        totalValue: number;
        changePercentage: number | null;
        date: Date;
    }, ExtArgs["result"]["salesSummary"]>;
    composites: {};
};
export type SalesSummaryGetPayload<S extends boolean | null | undefined | SalesSummaryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SalesSummaryPayload, S>;
export type SalesSummaryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SalesSummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SalesSummaryCountAggregateInputType | true;
};
export interface SalesSummaryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SalesSummary'];
        meta: {
            name: 'SalesSummary';
        };
    };
    /**
     * Find zero or one SalesSummary that matches the filter.
     * @param {SalesSummaryFindUniqueArgs} args - Arguments to find a SalesSummary
     * @example
     * // Get one SalesSummary
     * const salesSummary = await prisma.salesSummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesSummaryFindUniqueArgs>(args: Prisma.SelectSubset<T, SalesSummaryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SalesSummaryClient<runtime.Types.Result.GetResult<Prisma.$SalesSummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SalesSummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesSummaryFindUniqueOrThrowArgs} args - Arguments to find a SalesSummary
     * @example
     * // Get one SalesSummary
     * const salesSummary = await prisma.salesSummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesSummaryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SalesSummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SalesSummaryClient<runtime.Types.Result.GetResult<Prisma.$SalesSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SalesSummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesSummaryFindFirstArgs} args - Arguments to find a SalesSummary
     * @example
     * // Get one SalesSummary
     * const salesSummary = await prisma.salesSummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesSummaryFindFirstArgs>(args?: Prisma.SelectSubset<T, SalesSummaryFindFirstArgs<ExtArgs>>): Prisma.Prisma__SalesSummaryClient<runtime.Types.Result.GetResult<Prisma.$SalesSummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SalesSummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesSummaryFindFirstOrThrowArgs} args - Arguments to find a SalesSummary
     * @example
     * // Get one SalesSummary
     * const salesSummary = await prisma.salesSummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesSummaryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SalesSummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SalesSummaryClient<runtime.Types.Result.GetResult<Prisma.$SalesSummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SalesSummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesSummaries
     * const salesSummaries = await prisma.salesSummary.findMany()
     *
     * // Get first 10 SalesSummaries
     * const salesSummaries = await prisma.salesSummary.findMany({ take: 10 })
     *
     * // Only select the `salesSummaryId`
     * const salesSummaryWithSalesSummaryIdOnly = await prisma.salesSummary.findMany({ select: { salesSummaryId: true } })
     *
     */
    findMany<T extends SalesSummaryFindManyArgs>(args?: Prisma.SelectSubset<T, SalesSummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalesSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SalesSummary.
     * @param {SalesSummaryCreateArgs} args - Arguments to create a SalesSummary.
     * @example
     * // Create one SalesSummary
     * const SalesSummary = await prisma.salesSummary.create({
     *   data: {
     *     // ... data to create a SalesSummary
     *   }
     * })
     *
     */
    create<T extends SalesSummaryCreateArgs>(args: Prisma.SelectSubset<T, SalesSummaryCreateArgs<ExtArgs>>): Prisma.Prisma__SalesSummaryClient<runtime.Types.Result.GetResult<Prisma.$SalesSummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SalesSummaries.
     * @param {SalesSummaryCreateManyArgs} args - Arguments to create many SalesSummaries.
     * @example
     * // Create many SalesSummaries
     * const salesSummary = await prisma.salesSummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SalesSummaryCreateManyArgs>(args?: Prisma.SelectSubset<T, SalesSummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SalesSummaries and returns the data saved in the database.
     * @param {SalesSummaryCreateManyAndReturnArgs} args - Arguments to create many SalesSummaries.
     * @example
     * // Create many SalesSummaries
     * const salesSummary = await prisma.salesSummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SalesSummaries and only return the `salesSummaryId`
     * const salesSummaryWithSalesSummaryIdOnly = await prisma.salesSummary.createManyAndReturn({
     *   select: { salesSummaryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SalesSummaryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SalesSummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalesSummaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SalesSummary.
     * @param {SalesSummaryDeleteArgs} args - Arguments to delete one SalesSummary.
     * @example
     * // Delete one SalesSummary
     * const SalesSummary = await prisma.salesSummary.delete({
     *   where: {
     *     // ... filter to delete one SalesSummary
     *   }
     * })
     *
     */
    delete<T extends SalesSummaryDeleteArgs>(args: Prisma.SelectSubset<T, SalesSummaryDeleteArgs<ExtArgs>>): Prisma.Prisma__SalesSummaryClient<runtime.Types.Result.GetResult<Prisma.$SalesSummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SalesSummary.
     * @param {SalesSummaryUpdateArgs} args - Arguments to update one SalesSummary.
     * @example
     * // Update one SalesSummary
     * const salesSummary = await prisma.salesSummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SalesSummaryUpdateArgs>(args: Prisma.SelectSubset<T, SalesSummaryUpdateArgs<ExtArgs>>): Prisma.Prisma__SalesSummaryClient<runtime.Types.Result.GetResult<Prisma.$SalesSummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SalesSummaries.
     * @param {SalesSummaryDeleteManyArgs} args - Arguments to filter SalesSummaries to delete.
     * @example
     * // Delete a few SalesSummaries
     * const { count } = await prisma.salesSummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SalesSummaryDeleteManyArgs>(args?: Prisma.SelectSubset<T, SalesSummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SalesSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesSummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesSummaries
     * const salesSummary = await prisma.salesSummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SalesSummaryUpdateManyArgs>(args: Prisma.SelectSubset<T, SalesSummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SalesSummaries and returns the data updated in the database.
     * @param {SalesSummaryUpdateManyAndReturnArgs} args - Arguments to update many SalesSummaries.
     * @example
     * // Update many SalesSummaries
     * const salesSummary = await prisma.salesSummary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SalesSummaries and only return the `salesSummaryId`
     * const salesSummaryWithSalesSummaryIdOnly = await prisma.salesSummary.updateManyAndReturn({
     *   select: { salesSummaryId: true },
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
    updateManyAndReturn<T extends SalesSummaryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SalesSummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalesSummaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SalesSummary.
     * @param {SalesSummaryUpsertArgs} args - Arguments to update or create a SalesSummary.
     * @example
     * // Update or create a SalesSummary
     * const salesSummary = await prisma.salesSummary.upsert({
     *   create: {
     *     // ... data to create a SalesSummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesSummary we want to update
     *   }
     * })
     */
    upsert<T extends SalesSummaryUpsertArgs>(args: Prisma.SelectSubset<T, SalesSummaryUpsertArgs<ExtArgs>>): Prisma.Prisma__SalesSummaryClient<runtime.Types.Result.GetResult<Prisma.$SalesSummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SalesSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesSummaryCountArgs} args - Arguments to filter SalesSummaries to count.
     * @example
     * // Count the number of SalesSummaries
     * const count = await prisma.salesSummary.count({
     *   where: {
     *     // ... the filter for the SalesSummaries we want to count
     *   }
     * })
    **/
    count<T extends SalesSummaryCountArgs>(args?: Prisma.Subset<T, SalesSummaryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SalesSummaryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SalesSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalesSummaryAggregateArgs>(args: Prisma.Subset<T, SalesSummaryAggregateArgs>): Prisma.PrismaPromise<GetSalesSummaryAggregateType<T>>;
    /**
     * Group by SalesSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesSummaryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SalesSummaryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SalesSummaryGroupByArgs['orderBy'];
    } : {
        orderBy?: SalesSummaryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SalesSummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SalesSummary model
     */
    readonly fields: SalesSummaryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SalesSummary.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SalesSummaryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the SalesSummary model
 */
export interface SalesSummaryFieldRefs {
    readonly salesSummaryId: Prisma.FieldRef<"SalesSummary", 'String'>;
    readonly totalValue: Prisma.FieldRef<"SalesSummary", 'Float'>;
    readonly changePercentage: Prisma.FieldRef<"SalesSummary", 'Float'>;
    readonly date: Prisma.FieldRef<"SalesSummary", 'DateTime'>;
}
/**
 * SalesSummary findUnique
 */
export type SalesSummaryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: Prisma.SalesSummarySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: Prisma.SalesSummaryOmit<ExtArgs> | null;
    /**
     * Filter, which SalesSummary to fetch.
     */
    where: Prisma.SalesSummaryWhereUniqueInput;
};
/**
 * SalesSummary findUniqueOrThrow
 */
export type SalesSummaryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: Prisma.SalesSummarySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: Prisma.SalesSummaryOmit<ExtArgs> | null;
    /**
     * Filter, which SalesSummary to fetch.
     */
    where: Prisma.SalesSummaryWhereUniqueInput;
};
/**
 * SalesSummary findFirst
 */
export type SalesSummaryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: Prisma.SalesSummarySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: Prisma.SalesSummaryOmit<ExtArgs> | null;
    /**
     * Filter, which SalesSummary to fetch.
     */
    where?: Prisma.SalesSummaryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SalesSummaries to fetch.
     */
    orderBy?: Prisma.SalesSummaryOrderByWithRelationInput | Prisma.SalesSummaryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SalesSummaries.
     */
    cursor?: Prisma.SalesSummaryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SalesSummaries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SalesSummaries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SalesSummaries.
     */
    distinct?: Prisma.SalesSummaryScalarFieldEnum | Prisma.SalesSummaryScalarFieldEnum[];
};
/**
 * SalesSummary findFirstOrThrow
 */
export type SalesSummaryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: Prisma.SalesSummarySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: Prisma.SalesSummaryOmit<ExtArgs> | null;
    /**
     * Filter, which SalesSummary to fetch.
     */
    where?: Prisma.SalesSummaryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SalesSummaries to fetch.
     */
    orderBy?: Prisma.SalesSummaryOrderByWithRelationInput | Prisma.SalesSummaryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SalesSummaries.
     */
    cursor?: Prisma.SalesSummaryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SalesSummaries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SalesSummaries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SalesSummaries.
     */
    distinct?: Prisma.SalesSummaryScalarFieldEnum | Prisma.SalesSummaryScalarFieldEnum[];
};
/**
 * SalesSummary findMany
 */
export type SalesSummaryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: Prisma.SalesSummarySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: Prisma.SalesSummaryOmit<ExtArgs> | null;
    /**
     * Filter, which SalesSummaries to fetch.
     */
    where?: Prisma.SalesSummaryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SalesSummaries to fetch.
     */
    orderBy?: Prisma.SalesSummaryOrderByWithRelationInput | Prisma.SalesSummaryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SalesSummaries.
     */
    cursor?: Prisma.SalesSummaryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SalesSummaries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SalesSummaries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SalesSummaries.
     */
    distinct?: Prisma.SalesSummaryScalarFieldEnum | Prisma.SalesSummaryScalarFieldEnum[];
};
/**
 * SalesSummary create
 */
export type SalesSummaryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: Prisma.SalesSummarySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: Prisma.SalesSummaryOmit<ExtArgs> | null;
    /**
     * The data needed to create a SalesSummary.
     */
    data: Prisma.XOR<Prisma.SalesSummaryCreateInput, Prisma.SalesSummaryUncheckedCreateInput>;
};
/**
 * SalesSummary createMany
 */
export type SalesSummaryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesSummaries.
     */
    data: Prisma.SalesSummaryCreateManyInput | Prisma.SalesSummaryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SalesSummary createManyAndReturn
 */
export type SalesSummaryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: Prisma.SalesSummarySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: Prisma.SalesSummaryOmit<ExtArgs> | null;
    /**
     * The data used to create many SalesSummaries.
     */
    data: Prisma.SalesSummaryCreateManyInput | Prisma.SalesSummaryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SalesSummary update
 */
export type SalesSummaryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: Prisma.SalesSummarySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: Prisma.SalesSummaryOmit<ExtArgs> | null;
    /**
     * The data needed to update a SalesSummary.
     */
    data: Prisma.XOR<Prisma.SalesSummaryUpdateInput, Prisma.SalesSummaryUncheckedUpdateInput>;
    /**
     * Choose, which SalesSummary to update.
     */
    where: Prisma.SalesSummaryWhereUniqueInput;
};
/**
 * SalesSummary updateMany
 */
export type SalesSummaryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesSummaries.
     */
    data: Prisma.XOR<Prisma.SalesSummaryUpdateManyMutationInput, Prisma.SalesSummaryUncheckedUpdateManyInput>;
    /**
     * Filter which SalesSummaries to update
     */
    where?: Prisma.SalesSummaryWhereInput;
    /**
     * Limit how many SalesSummaries to update.
     */
    limit?: number;
};
/**
 * SalesSummary updateManyAndReturn
 */
export type SalesSummaryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: Prisma.SalesSummarySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: Prisma.SalesSummaryOmit<ExtArgs> | null;
    /**
     * The data used to update SalesSummaries.
     */
    data: Prisma.XOR<Prisma.SalesSummaryUpdateManyMutationInput, Prisma.SalesSummaryUncheckedUpdateManyInput>;
    /**
     * Filter which SalesSummaries to update
     */
    where?: Prisma.SalesSummaryWhereInput;
    /**
     * Limit how many SalesSummaries to update.
     */
    limit?: number;
};
/**
 * SalesSummary upsert
 */
export type SalesSummaryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: Prisma.SalesSummarySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: Prisma.SalesSummaryOmit<ExtArgs> | null;
    /**
     * The filter to search for the SalesSummary to update in case it exists.
     */
    where: Prisma.SalesSummaryWhereUniqueInput;
    /**
     * In case the SalesSummary found by the `where` argument doesn't exist, create a new SalesSummary with this data.
     */
    create: Prisma.XOR<Prisma.SalesSummaryCreateInput, Prisma.SalesSummaryUncheckedCreateInput>;
    /**
     * In case the SalesSummary was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SalesSummaryUpdateInput, Prisma.SalesSummaryUncheckedUpdateInput>;
};
/**
 * SalesSummary delete
 */
export type SalesSummaryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: Prisma.SalesSummarySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: Prisma.SalesSummaryOmit<ExtArgs> | null;
    /**
     * Filter which SalesSummary to delete.
     */
    where: Prisma.SalesSummaryWhereUniqueInput;
};
/**
 * SalesSummary deleteMany
 */
export type SalesSummaryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SalesSummaries to delete
     */
    where?: Prisma.SalesSummaryWhereInput;
    /**
     * Limit how many SalesSummaries to delete.
     */
    limit?: number;
};
/**
 * SalesSummary without action
 */
export type SalesSummaryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: Prisma.SalesSummarySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: Prisma.SalesSummaryOmit<ExtArgs> | null;
};
//# sourceMappingURL=SalesSummary.d.ts.map