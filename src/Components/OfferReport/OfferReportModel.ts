export type CategoriesReport = {
    [categoryId: string]: CategoryReport;
}

type CategoryReport = {
    amount: number;
    name: string;
}

export type CategoryReportItem = CategoryReport & {id: string};

export type CategoryStats = {
    name: string,
    amount: number,
}

export type CategoriesSeries = {
    label: string,
    data: CategoryStats[]
}
