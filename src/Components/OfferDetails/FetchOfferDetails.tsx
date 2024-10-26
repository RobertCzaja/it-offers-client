import axios from "axios";
import HttpRequestMock from "http-request-mock";
import {UrlCreator} from "../../Helpers/UrlCreator";
import {MockedHttp} from "../../MockedHttpConnection";

export interface OfferDetailsDto {
    id: string,
    title: string,
    url: string,
}

export const FetchOfferDetails = async (offerId: string): Promise<OfferDetailsDto> => {
    const PATH_OFFER_DETAILS: string = '/offers-details';

    MockedHttp.offerDetails(PATH_OFFER_DETAILS, offerId)

    return await axios
        .get(UrlCreator(PATH_OFFER_DETAILS))
        .then(response => {
            // todo check if it's 200 ok
            return response.data;
        });
}