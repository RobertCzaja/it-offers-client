export type OfferListModel = {
    id: string,
    technology: string,
    title: string,
    salaryFrom: number,
    salaryTo: number,
    salaryCurrency: string,
    requiredSkills: string[],
    publishedAt: Date,
    seniority: string,
    companyName: string,
    companyCity: string,
}