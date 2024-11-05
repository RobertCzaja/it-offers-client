import axios from "axios";
import {MockedHttp} from "../../Mocks/MockedHttpConnection";
import {ApiRoutes} from "../../Helpers/ApiRoutes";
import {OfferDetailsResponse} from "./OfferDetailsResponse";
import {AxiosFactory} from "../../Helpers/AxiosFactory";

export const FetchOfferDetails = async (offerId: string): Promise<OfferDetailsResponse> => {
    MockedHttp.offerDetails(offerId);

    return await axios(AxiosFactory(ApiRoutes.OFFER_DETAILS(offerId))).then(response => {
        return response.data;
    });
}