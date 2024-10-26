import HttpRequestMock from "http-request-mock";
import {UrlCreator} from "./Helpers/UrlCreator";

export class MockedHttp {

    static offerDetails(path: string, offerId: string): void {
        const mocker = HttpRequestMock.setup();
        mocker.mock({
            url: UrlCreator(path),
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
    }
}