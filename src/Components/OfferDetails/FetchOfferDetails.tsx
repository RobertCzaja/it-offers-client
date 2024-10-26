import axios from "axios";
import HttpRequestMock from "http-request-mock";
import {UrlCreator} from "../../Helpers/UrlCreator";

export interface OfferDetailsDto {
    id: string,
    title: string,
    url: string,
}

export const FetchOfferDetails = async (offerId: string): Promise<OfferDetailsDto> => {

    const PATH_OFFER_DETAILS: string = '/offers-details';

    const mocker = HttpRequestMock.setup();
    mocker.mock({
        url: UrlCreator(PATH_OFFER_DETAILS),
        method: 'get',
        delay: 1000,
        status: 200,
        headers: {
            'content-type': 'application/json',
            'some-header': 'value',
        },
        body: {
            id: offerId,
            title: "One Identity Consultant z j. angielskim",
            url: "https://justjoin.it/job-offer/dmtech-polska-c-backend-developer-z-j-angielskim-iam--bydgoszcz-net",
        }
    });

    return await axios
        .get(UrlCreator(PATH_OFFER_DETAILS))
        .then(response => {
            // todo check if it's 200 ok
            return response.data;
        });
}