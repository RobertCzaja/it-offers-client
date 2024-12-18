import HttpRequestMock from "http-request-mock";
import {ApiRoutes} from "../Common/ApiRoutes";
import {OfferDetailsResponse} from "../Components/OfferDetails/OfferDetailsResponse";
import {Token} from "../Components/Authorization/AuthorizationTypes";
import env from "react-dotenv";
import {Environment} from "../Common/Environment";

export class MockedHttp {

    private static readonly mocker = HttpRequestMock.setup();

    static authorization(): void {
        if (env.APP !== Environment.DEV_NO_HTTP) return;

        const body: Token = {
            token: "egJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGEucGwiLCJmaXJzdE5hbWUiOiIiLCJsYXN0TmFtZSI6IiIsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwiZXhwIjoxNzMwNTYzODg4fQ.07PnI1nJQws913tKBvWfO4bxgdvaGzgU-vpgJf5CtlU"
        };
        MockedHttp.mocker.mock({
            ...ApiRoutes.AUTH,
            ...{
                delay: 1000,
                status: 200,
                headers: {'content-type': 'application/json', 'some-header': 'value',},
                body: body
            }
        });
    }

    static offerDetails(offerId: string): void {
        if (env.APP !== Environment.DEV_NO_HTTP) return;

        const body: OfferDetailsResponse = {
            id: offerId,
            title: "One Identity Consultant z j. angielskim",
            url: "https://justjoin.it/job-offer/dmtech-polska-c-backend-developer-z-j-angielskim-iam--bydgoszcz-net",
            company: {id: '73bb1199-7249-49cd-b40d-6434e2fbb039', name: 'SymbioticTech', city: 'Kraków', street: "Zabłocka 14A"},
            salaries: [{from: 12000, to: 18000, currency: 'PLN', type: 'b2b', isOriginal: true}],
            categories: [
                {id: "04961e58-ad3a-4e5a-8972-d5fc586dc10e", name: "AWS"},
                {id: "542bc8b5-4988-44f4-9459-bcc7c83e3329", name: "Docker"},
                {id: "61e8faf4-5b4a-43d8-b8d7-1380d522dda9", name: "Varnish"},
                {id: "6808712c-0c61-41b6-9299-9721496fc56a", name: "Zabbix"},
            ],
            createdAt: new Date("2024-10-13T06:31:54.1234Z"),
            publishedAt: new Date("2024-10-12T16:00:35.4342Z"),
            seniority: "senior",
            workplace: "office",
            time: "hybrid",
            remoteInterview: true
        };

        MockedHttp.mocker.mock({
            ...ApiRoutes.OFFER_DETAILS(offerId),
            ...{
                delay: 1000,
                status: 200,
                headers: {'content-type': 'application/json', 'some-header': 'value',},
                body: body
            }
        });
    }
}