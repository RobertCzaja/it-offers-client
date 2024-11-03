import axios from "axios";
import {MockedHttp} from "../../Mocks/MockedHttpConnection";
import {ApiRoutes} from "../../ApiRoutes";
import {OfferDetailsResponse} from "./OfferDetailsResponse";

export const FetchOfferDetails = async (offerId: string): Promise<OfferDetailsResponse> => {
    MockedHttp.offerDetails(offerId);

    return await axios(ApiRoutes.OFFER_DETAILS(offerId)).then(response => {
        return response.data;
    });
}