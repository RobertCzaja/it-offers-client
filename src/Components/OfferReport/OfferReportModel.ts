export type CategoriesReport = {
    [categoryId: string]: CategoryReport;
}

type CategoryReport = {
    amount: number;
    name: string;
}

export type CategoryReportItem = CategoryReport & {id: string};