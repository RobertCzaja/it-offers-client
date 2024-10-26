import {UrlCreator} from "./Helpers/UrlCreator";
import {HttpVerb} from "http-request-mock/src/types";

export interface RouteInterface {
    method: HttpVerb;
    url: string;
}

export class ApiRoutes {
    static OFFER_DETAILS(offerId: string): RouteInterface {
        return {method: 'GET', url: UrlCreator(`/offers-details/${offerId}`)}
    }
}