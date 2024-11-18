export type CategoriesReport = {
    [categoryId: string]: CategoryReport;
}

type CategoryReport = {
    amount: number;
    name: string;
}

export type CategoryReportItem = CategoryReport & {id: string};

export type OffersPerDay = {
    [date: string]: OffersDayAmount;
}

type OffersDayAmount = {
    [technology: string]: {amount: number};
}

export type OffersTimelineChartData = {
    labels: string[];
    technologies: {[technology: string]: number[]}
}

export type ChartDatasets = {
    label: string, data: number[]
}[]