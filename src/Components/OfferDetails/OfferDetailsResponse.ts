import {HttpResponseBody} from "../../Common/HttpInterfaces";

export interface OfferDetailsResponse extends HttpResponseBody {
    id: string,
    title: string,
    url: string,
    company: CompanyBasicResponse
    createdAt: Date,
    publishedAt: Date,
    seniority: string,
    workplace: string,
    time: string,
    remoteInterview: boolean,
    categories: OfferCategoryResponse[],
    salaries: OfferSalaryResponse[],
}

interface OfferSalaryResponse {
    from: number,
    to: number,
    currency: string,
    type: string,
    isOriginal: boolean,
}

interface OfferCategoryResponse {
    id: string,
    name: string,
}

interface CompanyBasicResponse {
    id: string,
    name: string,
    city: string,
    street: string,
}