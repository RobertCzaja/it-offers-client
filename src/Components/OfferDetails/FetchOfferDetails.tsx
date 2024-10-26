import axios from "axios";
import {MockedHttp} from "../../MockedHttpConnection";
import {ApiRoutes} from "../../ApiRoutes";
import {HttpResponseBody} from "../../Common/HttpInterfaces";

export interface OfferDetailsDto extends HttpResponseBody {
    id: string,
    title: string,
    url: string,
}

export const FetchOfferDetails = async (offerId: string): Promise<OfferDetailsDto> => {
    MockedHttp.offerDetails(offerId);

    return await axios(ApiRoutes.OFFER_DETAILS(offerId)).then(response => {
        return response.data;
    });
}