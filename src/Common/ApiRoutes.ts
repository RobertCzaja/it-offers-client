import {HttpVerb} from "http-request-mock/src/types";
import {UrlCreator} from "./UrlCreator";

export interface RouteInterface {
    method: HttpVerb;
    url: string;
    params?: {
      [key:string]: any
    };
}

export class ApiRoutes {
    public static readonly AUTH: RouteInterface = {method: 'POST', url: UrlCreator('/auth')};

    static OFFER_DETAILS(offerId: string): RouteInterface {
        return {method: 'GET', url: UrlCreator(`/offers-details/${offerId}`)}
    }

    static OFFERS({technologies,dateFrom, dateTo}: { technologies?: string, dateFrom?: string, dateTo?: string}): RouteInterface {
        return {method: 'GET', url: UrlCreator(`/offers`), params: {technologies, dateFrom, dateTo}}
    }
}