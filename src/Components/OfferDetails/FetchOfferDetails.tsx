import axios from "axios";
import {MockedHttp} from "../../Mocks/MockedHttpConnection";
import {ApiRoutes} from "../../ApiRoutes";
import {OfferDetailsResponse} from "./OfferDetailsResponse";
import {useContext} from "react";
import {AuthorizationContext} from "../Authorization/AuthorizationContext";

export const FetchOfferDetails = async (offerId: string): Promise<OfferDetailsResponse> => {
    MockedHttp.offerDetails(offerId);

    const authorization = useContext(AuthorizationContext); // todo

    return await axios(ApiRoutes.OFFER_DETAILS(offerId)).then(response => {
        return response.data;
    });
}