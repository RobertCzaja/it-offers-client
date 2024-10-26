import HttpRequestMock from "http-request-mock";
import {ApiRoutes} from "./ApiRoutes";


export class MockedHttp {

    private static readonly mocker = HttpRequestMock.setup();

    static offerDetails(offerId: string): void {
        MockedHttp.mocker.mock({
            ...ApiRoutes.OFFER_DETAILS,
            ...{
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
            }
        });
    }
}