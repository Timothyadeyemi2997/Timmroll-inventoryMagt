import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ExpenseByCategory
 *
 */
export type ExpenseByCategoryModel = runtime.Types.Result.DefaultSelection<Prisma.$ExpenseByCategoryPayload>;
export type AggregateExpenseByCategory = {
    _count: ExpenseByCategoryCountAggregateOutputType | null;
    _avg: ExpenseByCategoryAvgAggregateOutputType | null;
    _sum: ExpenseByCategorySumAggregateOutputType | null;
    _min: ExpenseByCategoryMinAggregateOutputType | null;
    _max: ExpenseByCategoryMaxAggregateOutputType | null;
};
export type ExpenseByCategoryAvgAggregateOutputType = {
    amount: number | null;
};
export type ExpenseByCategorySumAggregateOutputType = {
    amount: number | null;
};
export type ExpenseByCategoryMinAggregateOutputType = {
    expenseByCategoryId: string | null;
    expenseSummaryId: string | null;
    category: string | null;
    amount: number | null;
    date: Date | null;
};
export type ExpenseByCategoryMaxAggregateOutputType = {
    expenseByCategoryId: string | null;
    expenseSummaryId: string | null;
    category: string | null;
    amount: number | null;
    date: Date | null;
};
export type ExpenseByCategoryCountAggregateOutputType = {
    expenseByCategoryId: number;
    expenseSummaryId: number;
    category: number;
    amount: number;
    date: number;
    _all: number;
};
export type ExpenseByCategoryAvgAggregateInputType = {
    amount?: true;
};
export type ExpenseByCategorySumAggregateInputType = {
    amount?: true;
};
export type ExpenseByCategoryMinAggregateInputType = {
    expenseByCategoryId?: true;
    expenseSummaryId?: true;
    category?: true;
    amount?: true;
    date?: true;
};
export type ExpenseByCategoryMaxAggregateInputType = {
    expenseByCategoryId?: true;
    expenseSummaryId?: true;
    category?: true;
    amount?: true;
    date?: true;
};
export type ExpenseByCategoryCountAggregateInputType = {
    expenseByCategoryId?: true;
    expenseSummaryId?: true;
    category?: true;
    amount?: true;
    date?: true;
    _all?: true;
};
export type ExpenseByCategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseByCategory to aggregate.
     */
    where?: Prisma.ExpenseByCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ExpenseByCategories to fetch.
     */
    orderBy?: Prisma.ExpenseByCategoryOrderByWithRelationInput | Prisma.ExpenseByCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ExpenseByCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ExpenseByCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ExpenseByCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ExpenseByCategories
    **/
    _count?: true | ExpenseByCategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ExpenseByCategoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ExpenseByCategorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseByCategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseByCategoryMaxAggregateInputType;
};
export type GetExpenseByCategoryAggregateType<T extends ExpenseByCategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateExpenseByCategory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExpenseByCategory[P]> : Prisma.GetScalarType<T[P], AggregateExpenseByCategory[P]>;
};
export type ExpenseByCategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseByCategoryWhereInput;
    orderBy?: Prisma.ExpenseByCategoryOrderByWithAggregationInput | Prisma.ExpenseByCategoryOrderByWithAggregationInput[];
    by: Prisma.ExpenseByCategoryScalarFieldEnum[] | Prisma.ExpenseByCategoryScalarFieldEnum;
    having?: Prisma.ExpenseByCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExpenseByCategoryCountAggregateInputType | true;
    _avg?: ExpenseByCategoryAvgAggregateInputType;
    _sum?: ExpenseByCategorySumAggregateInputType;
    _min?: ExpenseByCategoryMinAggregateInputType;
    _max?: ExpenseByCategoryMaxAggregateInputType;
};
export type ExpenseByCategoryGroupByOutputType = {
    expenseByCategoryId: string;
    expenseSummaryId: string;
    category: string;
    amount: number;
    date: Date;
    _count: ExpenseByCategoryCountAggregateOutputType | null;
    _avg: ExpenseByCategoryAvgAggregateOutputType | null;
    _sum: ExpenseByCategorySumAggregateOutputType | null;
    _min: ExpenseByCategoryMinAggregateOutputType | null;
    _max: ExpenseByCategoryMaxAggregateOutputType | null;
};
export type GetExpenseByCategoryGroupByPayload<T extends ExpenseByCategoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExpenseByCategoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExpenseByCategoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExpenseByCategoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExpenseByCategoryGroupByOutputType[P]>;
}>>;
export type ExpenseByCategoryWhereInput = {
    AND?: Prisma.ExpenseByCategoryWhereInput | Prisma.ExpenseByCategoryWhereInput[];
    OR?: Prisma.ExpenseByCategoryWhereInput[];
    NOT?: Prisma.ExpenseByCategoryWhereInput | Prisma.ExpenseByCategoryWhereInput[];
    expenseByCategoryId?: Prisma.StringFilter<"ExpenseByCategory"> | string;
    expenseSummaryId?: Prisma.StringFilter<"ExpenseByCategory"> | string;
    category?: Prisma.StringFilter<"ExpenseByCategory"> | string;
    amount?: Prisma.FloatFilter<"ExpenseByCategory"> | number;
    date?: Prisma.DateTimeFilter<"ExpenseByCategory"> | Date | string;
    expenseSummary?: Prisma.XOR<Prisma.ExpenseSummaryScalarRelationFilter, Prisma.ExpenseSummaryWhereInput>;
};
export type ExpenseByCategoryOrderByWithRelationInput = {
    expenseByCategoryId?: Prisma.SortOrder;
    expenseSummaryId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    expenseSummary?: Prisma.ExpenseSummaryOrderByWithRelationInput;
};
export type ExpenseByCategoryWhereUniqueInput = Prisma.AtLeast<{
    expenseByCategoryId?: string;
    AND?: Prisma.ExpenseByCategoryWhereInput | Prisma.ExpenseByCategoryWhereInput[];
    OR?: Prisma.ExpenseByCategoryWhereInput[];
    NOT?: Prisma.ExpenseByCategoryWhereInput | Prisma.ExpenseByCategoryWhereInput[];
    expenseSummaryId?: Prisma.StringFilter<"ExpenseByCategory"> | string;
    category?: Prisma.StringFilter<"ExpenseByCategory"> | string;
    amount?: Prisma.FloatFilter<"ExpenseByCategory"> | number;
    date?: Prisma.DateTimeFilter<"ExpenseByCategory"> | Date | string;
    expenseSummary?: Prisma.XOR<Prisma.ExpenseSummaryScalarRelationFilter, Prisma.ExpenseSummaryWhereInput>;
}, "expenseByCategoryId">;
export type ExpenseByCategoryOrderByWithAggregationInput = {
    expenseByCategoryId?: Prisma.SortOrder;
    expenseSummaryId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    _count?: Prisma.ExpenseByCategoryCountOrderByAggregateInput;
    _avg?: Prisma.ExpenseByCategoryAvgOrderByAggregateInput;
    _max?: Prisma.ExpenseByCategoryMaxOrderByAggregateInput;
    _min?: Prisma.ExpenseByCategoryMinOrderByAggregateInput;
    _sum?: Prisma.ExpenseByCategorySumOrderByAggregateInput;
};
export type ExpenseByCategoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExpenseByCategoryScalarWhereWithAggregatesInput | Prisma.ExpenseByCategoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExpenseByCategoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExpenseByCategoryScalarWhereWithAggregatesInput | Prisma.ExpenseByCategoryScalarWhereWithAggregatesInput[];
    expenseByCategoryId?: Prisma.StringWithAggregatesFilter<"ExpenseByCategory"> | string;
    expenseSummaryId?: Prisma.StringWithAggregatesFilter<"ExpenseByCategory"> | string;
    category?: Prisma.StringWithAggregatesFilter<"ExpenseByCategory"> | string;
    amount?: Prisma.FloatWithAggregatesFilter<"ExpenseByCategory"> | number;
    date?: Prisma.DateTimeWithAggregatesFilter<"ExpenseByCategory"> | Date | string;
};
export type ExpenseByCategoryCreateInput = {
    expenseByCategoryId: string;
    category: string;
    amount: number;
    date: Date | string;
    expenseSummary: Prisma.ExpenseSummaryCreateNestedOneWithoutExpenseByCategoryInput;
};
export type ExpenseByCategoryUncheckedCreateInput = {
    expenseByCategoryId: string;
    expenseSummaryId: string;
    category: string;
    amount: number;
    date: Date | string;
};
export type ExpenseByCategoryUpdateInput = {
    expenseByCategoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expenseSummary?: Prisma.ExpenseSummaryUpdateOneRequiredWithoutExpenseByCategoryNestedInput;
};
export type ExpenseByCategoryUncheckedUpdateInput = {
    expenseByCategoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseSummaryId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseByCategoryCreateManyInput = {
    expenseByCategoryId: string;
    expenseSummaryId: string;
    category: string;
    amount: number;
    date: Date | string;
};
export type ExpenseByCategoryUpdateManyMutationInput = {
    expenseByCategoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseByCategoryUncheckedUpdateManyInput = {
    expenseByCategoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    expenseSummaryId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseByCategoryListRelationFilter = {
    every?: Prisma.ExpenseByCategoryWhereInput;
    some?: Prisma.ExpenseByCategoryWhereInput;
    none?: Prisma.ExpenseByCategoryWhereInput;
};
export type ExpenseByCategoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ExpenseByCategoryCountOrderByAggregateInput = {
    expenseByCategoryId?: Prisma.SortOrder;
    expenseSummaryId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
};
export type ExpenseByCategoryAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type ExpenseByCategoryMaxOrderByAggregateInput = {
    expenseByCategoryId?: Prisma.SortOrder;
    expenseSummaryId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
};
export type ExpenseByCategoryMinOrderByAggregateInput = {
    expenseByCategoryId?: Prisma.SortOrder;
    expenseSummaryId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
};
export type ExpenseByCategorySumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type ExpenseByCategoryCreateNestedManyWithoutExpenseSummaryInput = {
    create?: Prisma.XOR<Prisma.ExpenseByCategoryCreateWithoutExpenseSummaryInput, Prisma.ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput> | Prisma.ExpenseByCategoryCreateWithoutExpenseSummaryInput[] | Prisma.ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput[];
    connectOrCreate?: Prisma.ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput | Prisma.ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput[];
    createMany?: Prisma.ExpenseByCategoryCreateManyExpenseSummaryInputEnvelope;
    connect?: Prisma.ExpenseByCategoryWhereUniqueInput | Prisma.ExpenseByCategoryWhereUniqueInput[];
};
export type ExpenseByCategoryUncheckedCreateNestedManyWithoutExpenseSummaryInput = {
    create?: Prisma.XOR<Prisma.ExpenseByCategoryCreateWithoutExpenseSummaryInput, Prisma.ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput> | Prisma.ExpenseByCategoryCreateWithoutExpenseSummaryInput[] | Prisma.ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput[];
    connectOrCreate?: Prisma.ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput | Prisma.ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput[];
    createMany?: Prisma.ExpenseByCategoryCreateManyExpenseSummaryInputEnvelope;
    connect?: Prisma.ExpenseByCategoryWhereUniqueInput | Prisma.ExpenseByCategoryWhereUniqueInput[];
};
export type ExpenseByCategoryUpdateManyWithoutExpenseSummaryNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseByCategoryCreateWithoutExpenseSummaryInput, Prisma.ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput> | Prisma.ExpenseByCategoryCreateWithoutExpenseSummaryInput[] | Prisma.ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput[];
    connectOrCreate?: Prisma.ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput | Prisma.ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput[];
    upsert?: Prisma.ExpenseByCategoryUpsertWithWhereUniqueWithoutExpenseSummaryInput | Prisma.ExpenseByCategoryUpsertWithWhereUniqueWithoutExpenseSummaryInput[];
    createMany?: Prisma.ExpenseByCategoryCreateManyExpenseSummaryInputEnvelope;
    set?: Prisma.ExpenseByCategoryWhereUniqueInput | Prisma.ExpenseByCategoryWhereUniqueInput[];
    disconnect?: Prisma.ExpenseByCategoryWhereUniqueInput | Prisma.ExpenseByCategoryWhereUniqueInput[];
    delete?: Prisma.ExpenseByCategoryWhereUniqueInput | Prisma.ExpenseByCategoryWhereUniqueInput[];
    connect?: Prisma.ExpenseByCategoryWhereUniqueInput | Prisma.ExpenseByCategoryWhereUniqueInput[];
    update?: Prisma.ExpenseByCategoryUpdateWithWhereUniqueWithoutExpenseSummaryInput | Prisma.ExpenseByCategoryUpdateWithWhereUniqueWithoutExpenseSummaryInput[];
    updateMany?: Prisma.ExpenseByCategoryUpdateManyWithWhereWithoutExpenseSummaryInput | Prisma.ExpenseByCategoryUpdateManyWithWhereWithoutExpenseSummaryInput[];
    deleteMany?: Prisma.ExpenseByCategoryScalarWhereInput | Prisma.ExpenseByCategoryScalarWhereInput[];
};
export type ExpenseByCategoryUncheckedUpdateManyWithoutExpenseSummaryNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseByCategoryCreateWithoutExpenseSummaryInput, Prisma.ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput> | Prisma.ExpenseByCategoryCreateWithoutExpenseSummaryInput[] | Prisma.ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput[];
    connectOrCreate?: Prisma.ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput | Prisma.ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput[];
    upsert?: Prisma.ExpenseByCategoryUpsertWithWhereUniqueWithoutExpenseSummaryInput | Prisma.ExpenseByCategoryUpsertWithWhereUniqueWithoutExpenseSummaryInput[];
    createMany?: Prisma.ExpenseByCategoryCreateManyExpenseSummaryInputEnvelope;
    set?: Prisma.ExpenseByCategoryWhereUniqueInput | Prisma.ExpenseByCategoryWhereUniqueInput[];
    disconnect?: Prisma.ExpenseByCategoryWhereUniqueInput | Prisma.ExpenseByCategoryWhereUniqueInput[];
    delete?: Prisma.ExpenseByCategoryWhereUniqueInput | Prisma.ExpenseByCategoryWhereUniqueInput[];
    connect?: Prisma.ExpenseByCategoryWhereUniqueInput | Prisma.ExpenseByCategoryWhereUniqueInput[];
    update?: Prisma.ExpenseByCategoryUpdateWithWhereUniqueWithoutExpenseSummaryInput | Prisma.ExpenseByCategoryUpdateWithWhereUniqueWithoutExpenseSummaryInput[];
    updateMany?: Prisma.ExpenseByCategoryUpdateManyWithWhereWithoutExpenseSummaryInput | Prisma.ExpenseByCategoryUpdateManyWithWhereWithoutExpenseSummaryInput[];
    deleteMany?: Prisma.ExpenseByCategoryScalarWhereInput | Prisma.ExpenseByCategoryScalarWhereInput[];
};
export type ExpenseByCategoryCreateWithoutExpenseSummaryInput = {
    expenseByCategoryId: string;
    category: string;
    amount: number;
    date: Date | string;
};
export type ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput = {
    expenseByCategoryId: string;
    category: string;
    amount: number;
    date: Date | string;
};
export type ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput = {
    where: Prisma.ExpenseByCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseByCategoryCreateWithoutExpenseSummaryInput, Prisma.ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput>;
};
export type ExpenseByCategoryCreateManyExpenseSummaryInputEnvelope = {
    data: Prisma.ExpenseByCategoryCreateManyExpenseSummaryInput | Prisma.ExpenseByCategoryCreateManyExpenseSummaryInput[];
    skipDuplicates?: boolean;
};
export type ExpenseByCategoryUpsertWithWhereUniqueWithoutExpenseSummaryInput = {
    where: Prisma.ExpenseByCategoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExpenseByCategoryUpdateWithoutExpenseSummaryInput, Prisma.ExpenseByCategoryUncheckedUpdateWithoutExpenseSummaryInput>;
    create: Prisma.XOR<Prisma.ExpenseByCategoryCreateWithoutExpenseSummaryInput, Prisma.ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput>;
};
export type ExpenseByCategoryUpdateWithWhereUniqueWithoutExpenseSummaryInput = {
    where: Prisma.ExpenseByCategoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExpenseByCategoryUpdateWithoutExpenseSummaryInput, Prisma.ExpenseByCategoryUncheckedUpdateWithoutExpenseSummaryInput>;
};
export type ExpenseByCategoryUpdateManyWithWhereWithoutExpenseSummaryInput = {
    where: Prisma.ExpenseByCategoryScalarWhereInput;
    data: Prisma.XOR<Prisma.ExpenseByCategoryUpdateManyMutationInput, Prisma.ExpenseByCategoryUncheckedUpdateManyWithoutExpenseSummaryInput>;
};
export type ExpenseByCategoryScalarWhereInput = {
    AND?: Prisma.ExpenseByCategoryScalarWhereInput | Prisma.ExpenseByCategoryScalarWhereInput[];
    OR?: Prisma.ExpenseByCategoryScalarWhereInput[];
    NOT?: Prisma.ExpenseByCategoryScalarWhereInput | Prisma.ExpenseByCategoryScalarWhereInput[];
    expenseByCategoryId?: Prisma.StringFilter<"ExpenseByCategory"> | string;
    expenseSummaryId?: Prisma.StringFilter<"ExpenseByCategory"> | string;
    category?: Prisma.StringFilter<"ExpenseByCategory"> | string;
    amount?: Prisma.FloatFilter<"ExpenseByCategory"> | number;
    date?: Prisma.DateTimeFilter<"ExpenseByCategory"> | Date | string;
};
export type ExpenseByCategoryCreateManyExpenseSummaryInput = {
    expenseByCategoryId: string;
    category: string;
    amount: number;
    date: Date | string;
};
export type ExpenseByCategoryUpdateWithoutExpenseSummaryInput = {
    expenseByCategoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseByCategoryUncheckedUpdateWithoutExpenseSummaryInput = {
    expenseByCategoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseByCategoryUncheckedUpdateManyWithoutExpenseSummaryInput = {
    expenseByCategoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseByCategorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    expenseByCategoryId?: boolean;
    expenseSummaryId?: boolean;
    category?: boolean;
    amount?: boolean;
    date?: boolean;
    expenseSummary?: boolean | Prisma.ExpenseSummaryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expenseByCategory"]>;
export type ExpenseByCategorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    expenseByCategoryId?: boolean;
    expenseSummaryId?: boolean;
    category?: boolean;
    amount?: boolean;
    date?: boolean;
    expenseSummary?: boolean | Prisma.ExpenseSummaryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expenseByCategory"]>;
export type ExpenseByCategorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    expenseByCategoryId?: boolean;
    expenseSummaryId?: boolean;
    category?: boolean;
    amount?: boolean;
    date?: boolean;
    expenseSummary?: boolean | Prisma.ExpenseSummaryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expenseByCategory"]>;
export type ExpenseByCategorySelectScalar = {
    expenseByCategoryId?: boolean;
    expenseSummaryId?: boolean;
    category?: boolean;
    amount?: boolean;
    date?: boolean;
};
export type ExpenseByCategoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"expenseByCategoryId" | "expenseSummaryId" | "category" | "amount" | "date", ExtArgs["result"]["expenseByCategory"]>;
export type ExpenseByCategoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    expenseSummary?: boolean | Prisma.ExpenseSummaryDefaultArgs<ExtArgs>;
};
export type ExpenseByCategoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    expenseSummary?: boolean | Prisma.ExpenseSummaryDefaultArgs<ExtArgs>;
};
export type ExpenseByCategoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    expenseSummary?: boolean | Prisma.ExpenseSummaryDefaultArgs<ExtArgs>;
};
export type $ExpenseByCategoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ExpenseByCategory";
    objects: {
        expenseSummary: Prisma.$ExpenseSummaryPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        expenseByCategoryId: string;
        expenseSummaryId: string;
        category: string;
        amount: number;
        date: Date;
    }, ExtArgs["result"]["expenseByCategory"]>;
    composites: {};
};
export type ExpenseByCategoryGetPayload<S extends boolean | null | undefined | ExpenseByCategoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExpenseByCategoryPayload, S>;
export type ExpenseByCategoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExpenseByCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExpenseByCategoryCountAggregateInputType | true;
};
export interface ExpenseByCategoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ExpenseByCategory'];
        meta: {
            name: 'ExpenseByCategory';
        };
    };
    /**
     * Find zero or one ExpenseByCategory that matches the filter.
     * @param {ExpenseByCategoryFindUniqueArgs} args - Arguments to find a ExpenseByCategory
     * @example
     * // Get one ExpenseByCategory
     * const expenseByCategory = await prisma.expenseByCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseByCategoryFindUniqueArgs>(args: Prisma.SelectSubset<T, ExpenseByCategoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExpenseByCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ExpenseByCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseByCategoryFindUniqueOrThrowArgs} args - Arguments to find a ExpenseByCategory
     * @example
     * // Get one ExpenseByCategory
     * const expenseByCategory = await prisma.expenseByCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseByCategoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExpenseByCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExpenseByCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ExpenseByCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseByCategoryFindFirstArgs} args - Arguments to find a ExpenseByCategory
     * @example
     * // Get one ExpenseByCategory
     * const expenseByCategory = await prisma.expenseByCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseByCategoryFindFirstArgs>(args?: Prisma.SelectSubset<T, ExpenseByCategoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExpenseByCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ExpenseByCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseByCategoryFindFirstOrThrowArgs} args - Arguments to find a ExpenseByCategory
     * @example
     * // Get one ExpenseByCategory
     * const expenseByCategory = await prisma.expenseByCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseByCategoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExpenseByCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExpenseByCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ExpenseByCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseByCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpenseByCategories
     * const expenseByCategories = await prisma.expenseByCategory.findMany()
     *
     * // Get first 10 ExpenseByCategories
     * const expenseByCategories = await prisma.expenseByCategory.findMany({ take: 10 })
     *
     * // Only select the `expenseByCategoryId`
     * const expenseByCategoryWithExpenseByCategoryIdOnly = await prisma.expenseByCategory.findMany({ select: { expenseByCategoryId: true } })
     *
     */
    findMany<T extends ExpenseByCategoryFindManyArgs>(args?: Prisma.SelectSubset<T, ExpenseByCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ExpenseByCategory.
     * @param {ExpenseByCategoryCreateArgs} args - Arguments to create a ExpenseByCategory.
     * @example
     * // Create one ExpenseByCategory
     * const ExpenseByCategory = await prisma.expenseByCategory.create({
     *   data: {
     *     // ... data to create a ExpenseByCategory
     *   }
     * })
     *
     */
    create<T extends ExpenseByCategoryCreateArgs>(args: Prisma.SelectSubset<T, ExpenseByCategoryCreateArgs<ExtArgs>>): Prisma.Prisma__ExpenseByCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ExpenseByCategories.
     * @param {ExpenseByCategoryCreateManyArgs} args - Arguments to create many ExpenseByCategories.
     * @example
     * // Create many ExpenseByCategories
     * const expenseByCategory = await prisma.expenseByCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ExpenseByCategoryCreateManyArgs>(args?: Prisma.SelectSubset<T, ExpenseByCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ExpenseByCategories and returns the data saved in the database.
     * @param {ExpenseByCategoryCreateManyAndReturnArgs} args - Arguments to create many ExpenseByCategories.
     * @example
     * // Create many ExpenseByCategories
     * const expenseByCategory = await prisma.expenseByCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ExpenseByCategories and only return the `expenseByCategoryId`
     * const expenseByCategoryWithExpenseByCategoryIdOnly = await prisma.expenseByCategory.createManyAndReturn({
     *   select: { expenseByCategoryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ExpenseByCategoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExpenseByCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ExpenseByCategory.
     * @param {ExpenseByCategoryDeleteArgs} args - Arguments to delete one ExpenseByCategory.
     * @example
     * // Delete one ExpenseByCategory
     * const ExpenseByCategory = await prisma.expenseByCategory.delete({
     *   where: {
     *     // ... filter to delete one ExpenseByCategory
     *   }
     * })
     *
     */
    delete<T extends ExpenseByCategoryDeleteArgs>(args: Prisma.SelectSubset<T, ExpenseByCategoryDeleteArgs<ExtArgs>>): Prisma.Prisma__ExpenseByCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ExpenseByCategory.
     * @param {ExpenseByCategoryUpdateArgs} args - Arguments to update one ExpenseByCategory.
     * @example
     * // Update one ExpenseByCategory
     * const expenseByCategory = await prisma.expenseByCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ExpenseByCategoryUpdateArgs>(args: Prisma.SelectSubset<T, ExpenseByCategoryUpdateArgs<ExtArgs>>): Prisma.Prisma__ExpenseByCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ExpenseByCategories.
     * @param {ExpenseByCategoryDeleteManyArgs} args - Arguments to filter ExpenseByCategories to delete.
     * @example
     * // Delete a few ExpenseByCategories
     * const { count } = await prisma.expenseByCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ExpenseByCategoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExpenseByCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ExpenseByCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseByCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpenseByCategories
     * const expenseByCategory = await prisma.expenseByCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ExpenseByCategoryUpdateManyArgs>(args: Prisma.SelectSubset<T, ExpenseByCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ExpenseByCategories and returns the data updated in the database.
     * @param {ExpenseByCategoryUpdateManyAndReturnArgs} args - Arguments to update many ExpenseByCategories.
     * @example
     * // Update many ExpenseByCategories
     * const expenseByCategory = await prisma.expenseByCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ExpenseByCategories and only return the `expenseByCategoryId`
     * const expenseByCategoryWithExpenseByCategoryIdOnly = await prisma.expenseByCategory.updateManyAndReturn({
     *   select: { expenseByCategoryId: true },
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
    updateManyAndReturn<T extends ExpenseByCategoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExpenseByCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ExpenseByCategory.
     * @param {ExpenseByCategoryUpsertArgs} args - Arguments to update or create a ExpenseByCategory.
     * @example
     * // Update or create a ExpenseByCategory
     * const expenseByCategory = await prisma.expenseByCategory.upsert({
     *   create: {
     *     // ... data to create a ExpenseByCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpenseByCategory we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseByCategoryUpsertArgs>(args: Prisma.SelectSubset<T, ExpenseByCategoryUpsertArgs<ExtArgs>>): Prisma.Prisma__ExpenseByCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ExpenseByCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseByCategoryCountArgs} args - Arguments to filter ExpenseByCategories to count.
     * @example
     * // Count the number of ExpenseByCategories
     * const count = await prisma.expenseByCategory.count({
     *   where: {
     *     // ... the filter for the ExpenseByCategories we want to count
     *   }
     * })
    **/
    count<T extends ExpenseByCategoryCountArgs>(args?: Prisma.Subset<T, ExpenseByCategoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExpenseByCategoryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ExpenseByCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseByCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpenseByCategoryAggregateArgs>(args: Prisma.Subset<T, ExpenseByCategoryAggregateArgs>): Prisma.PrismaPromise<GetExpenseByCategoryAggregateType<T>>;
    /**
     * Group by ExpenseByCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseByCategoryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ExpenseByCategoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExpenseByCategoryGroupByArgs['orderBy'];
    } : {
        orderBy?: ExpenseByCategoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExpenseByCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseByCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ExpenseByCategory model
     */
    readonly fields: ExpenseByCategoryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ExpenseByCategory.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ExpenseByCategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    expenseSummary<T extends Prisma.ExpenseSummaryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ExpenseSummaryDefaultArgs<ExtArgs>>): Prisma.Prisma__ExpenseSummaryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ExpenseByCategory model
 */
export interface ExpenseByCategoryFieldRefs {
    readonly expenseByCategoryId: Prisma.FieldRef<"ExpenseByCategory", 'String'>;
    readonly expenseSummaryId: Prisma.FieldRef<"ExpenseByCategory", 'String'>;
    readonly category: Prisma.FieldRef<"ExpenseByCategory", 'String'>;
    readonly amount: Prisma.FieldRef<"ExpenseByCategory", 'Float'>;
    readonly date: Prisma.FieldRef<"ExpenseByCategory", 'DateTime'>;
}
/**
 * ExpenseByCategory findUnique
 */
export type ExpenseByCategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: Prisma.ExpenseByCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: Prisma.ExpenseByCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpenseByCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which ExpenseByCategory to fetch.
     */
    where: Prisma.ExpenseByCategoryWhereUniqueInput;
};
/**
 * ExpenseByCategory findUniqueOrThrow
 */
export type ExpenseByCategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: Prisma.ExpenseByCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: Prisma.ExpenseByCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpenseByCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which ExpenseByCategory to fetch.
     */
    where: Prisma.ExpenseByCategoryWhereUniqueInput;
};
/**
 * ExpenseByCategory findFirst
 */
export type ExpenseByCategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: Prisma.ExpenseByCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: Prisma.ExpenseByCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpenseByCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which ExpenseByCategory to fetch.
     */
    where?: Prisma.ExpenseByCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ExpenseByCategories to fetch.
     */
    orderBy?: Prisma.ExpenseByCategoryOrderByWithRelationInput | Prisma.ExpenseByCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ExpenseByCategories.
     */
    cursor?: Prisma.ExpenseByCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ExpenseByCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ExpenseByCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ExpenseByCategories.
     */
    distinct?: Prisma.ExpenseByCategoryScalarFieldEnum | Prisma.ExpenseByCategoryScalarFieldEnum[];
};
/**
 * ExpenseByCategory findFirstOrThrow
 */
export type ExpenseByCategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: Prisma.ExpenseByCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: Prisma.ExpenseByCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpenseByCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which ExpenseByCategory to fetch.
     */
    where?: Prisma.ExpenseByCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ExpenseByCategories to fetch.
     */
    orderBy?: Prisma.ExpenseByCategoryOrderByWithRelationInput | Prisma.ExpenseByCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ExpenseByCategories.
     */
    cursor?: Prisma.ExpenseByCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ExpenseByCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ExpenseByCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ExpenseByCategories.
     */
    distinct?: Prisma.ExpenseByCategoryScalarFieldEnum | Prisma.ExpenseByCategoryScalarFieldEnum[];
};
/**
 * ExpenseByCategory findMany
 */
export type ExpenseByCategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: Prisma.ExpenseByCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: Prisma.ExpenseByCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpenseByCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which ExpenseByCategories to fetch.
     */
    where?: Prisma.ExpenseByCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ExpenseByCategories to fetch.
     */
    orderBy?: Prisma.ExpenseByCategoryOrderByWithRelationInput | Prisma.ExpenseByCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ExpenseByCategories.
     */
    cursor?: Prisma.ExpenseByCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ExpenseByCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ExpenseByCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ExpenseByCategories.
     */
    distinct?: Prisma.ExpenseByCategoryScalarFieldEnum | Prisma.ExpenseByCategoryScalarFieldEnum[];
};
/**
 * ExpenseByCategory create
 */
export type ExpenseByCategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: Prisma.ExpenseByCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: Prisma.ExpenseByCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpenseByCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a ExpenseByCategory.
     */
    data: Prisma.XOR<Prisma.ExpenseByCategoryCreateInput, Prisma.ExpenseByCategoryUncheckedCreateInput>;
};
/**
 * ExpenseByCategory createMany
 */
export type ExpenseByCategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpenseByCategories.
     */
    data: Prisma.ExpenseByCategoryCreateManyInput | Prisma.ExpenseByCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ExpenseByCategory createManyAndReturn
 */
export type ExpenseByCategoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: Prisma.ExpenseByCategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: Prisma.ExpenseByCategoryOmit<ExtArgs> | null;
    /**
     * The data used to create many ExpenseByCategories.
     */
    data: Prisma.ExpenseByCategoryCreateManyInput | Prisma.ExpenseByCategoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpenseByCategoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ExpenseByCategory update
 */
export type ExpenseByCategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: Prisma.ExpenseByCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: Prisma.ExpenseByCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpenseByCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a ExpenseByCategory.
     */
    data: Prisma.XOR<Prisma.ExpenseByCategoryUpdateInput, Prisma.ExpenseByCategoryUncheckedUpdateInput>;
    /**
     * Choose, which ExpenseByCategory to update.
     */
    where: Prisma.ExpenseByCategoryWhereUniqueInput;
};
/**
 * ExpenseByCategory updateMany
 */
export type ExpenseByCategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpenseByCategories.
     */
    data: Prisma.XOR<Prisma.ExpenseByCategoryUpdateManyMutationInput, Prisma.ExpenseByCategoryUncheckedUpdateManyInput>;
    /**
     * Filter which ExpenseByCategories to update
     */
    where?: Prisma.ExpenseByCategoryWhereInput;
    /**
     * Limit how many ExpenseByCategories to update.
     */
    limit?: number;
};
/**
 * ExpenseByCategory updateManyAndReturn
 */
export type ExpenseByCategoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: Prisma.ExpenseByCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: Prisma.ExpenseByCategoryOmit<ExtArgs> | null;
    /**
     * The data used to update ExpenseByCategories.
     */
    data: Prisma.XOR<Prisma.ExpenseByCategoryUpdateManyMutationInput, Prisma.ExpenseByCategoryUncheckedUpdateManyInput>;
    /**
     * Filter which ExpenseByCategories to update
     */
    where?: Prisma.ExpenseByCategoryWhereInput;
    /**
     * Limit how many ExpenseByCategories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpenseByCategoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ExpenseByCategory upsert
 */
export type ExpenseByCategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: Prisma.ExpenseByCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: Prisma.ExpenseByCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpenseByCategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the ExpenseByCategory to update in case it exists.
     */
    where: Prisma.ExpenseByCategoryWhereUniqueInput;
    /**
     * In case the ExpenseByCategory found by the `where` argument doesn't exist, create a new ExpenseByCategory with this data.
     */
    create: Prisma.XOR<Prisma.ExpenseByCategoryCreateInput, Prisma.ExpenseByCategoryUncheckedCreateInput>;
    /**
     * In case the ExpenseByCategory was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ExpenseByCategoryUpdateInput, Prisma.ExpenseByCategoryUncheckedUpdateInput>;
};
/**
 * ExpenseByCategory delete
 */
export type ExpenseByCategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: Prisma.ExpenseByCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: Prisma.ExpenseByCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpenseByCategoryInclude<ExtArgs> | null;
    /**
     * Filter which ExpenseByCategory to delete.
     */
    where: Prisma.ExpenseByCategoryWhereUniqueInput;
};
/**
 * ExpenseByCategory deleteMany
 */
export type ExpenseByCategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseByCategories to delete
     */
    where?: Prisma.ExpenseByCategoryWhereInput;
    /**
     * Limit how many ExpenseByCategories to delete.
     */
    limit?: number;
};
/**
 * ExpenseByCategory without action
 */
export type ExpenseByCategoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: Prisma.ExpenseByCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: Prisma.ExpenseByCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExpenseByCategoryInclude<ExtArgs> | null;
};
//# sourceMappingURL=ExpenseByCategory.d.ts.map