import {UrlCreator} from "./UrlCreator";
import {HttpVerb} from "http-request-mock/src/types";

export interface RouteInterface {
    method: HttpVerb;
    url: string;
}

export class ApiRoutes {
    public static readonly AUTH: RouteInterface = {method: 'POST', url: UrlCreator('/auth')};

    static OFFER_DETAILS(offerId: string): RouteInterface {
        return {method: 'GET', url: UrlCreator(`/offers-details/${offerId}`)}
    }

    static OFFERS(): RouteInterface {
        return {method: 'GET', url: UrlCreator(`/offers`)}
    }
}