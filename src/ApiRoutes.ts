import {UrlCreator} from "./Helpers/UrlCreator";
import {HttpVerb} from "http-request-mock/src/types";

export interface RouteInterface {
    method: HttpVerb;
    url: string;
}

export class ApiRoutes {
    static readonly OFFER_DETAILS: RouteInterface = {method: 'GET', url: UrlCreator('/offers-details')};
}