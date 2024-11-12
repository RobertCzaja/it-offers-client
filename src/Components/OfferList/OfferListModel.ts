export type OfferListModel = {
    id: string,
    technology: string,
    title: string,
    salaryFrom?: number,
    salaryTo?: number,
    salaryCurrency?: string,
    requiredSkills: string[],
    publishedAt: Date,
    seniority: string,
    companyName: string,
    companyCity: string,
}

export type OfferListResponse = {
    list: OfferListItemResponse[],
}

export type OfferListItemResponse = {
    id: string,
    technology: string,
    title: string,
    link: string,
    publishedAt: string,
    createdAt: string,
    companyId: string,
    companyName: string,
    companyCity: string,
    companyStreet: string,
    remoteInterview: boolean,
    workplace: string,
    time: string,
    seniority: string,
    categories: OfferCategory[],
    salaries: OfferSalary[],
}

export type OfferCategory = {
    id: string,
    name: string,
    createdAt: string,
}

export type OfferSalary = {
    from: number,
    to: number,
    currency: string,
    employmentType: string,
    isOriginal: boolean,
}