import {OfferDetailsConnector, OfferDetailsDto} from "./OfferDetailsConnector";
import HttpRequestMock from 'http-request-mock';
import axios from "axios";

interface OfferDetailsProps {
    offerId: string
}

/**
 * todo why is render twice
 */
export const OfferDetails = ({offerId}: OfferDetailsProps) => {

    const mocker = HttpRequestMock.setup();
    mocker.mock({
        url: 'https://www.api.com/some-api',
        method: 'get',
        delay: 1000,
        status: 200,
        headers: {
            'content-type': 'application/json',
            'some-header': 'value',
        },
        body: {body: 'something'}
    });

    const fetch = async () => {
        return await axios
            .get('https://www.api.com/some-api')
            .then(response => {
                // todo check if it's 200 ok
                return response.data;
            });
    };

    fetch().then(data => {console.log(data);})

    return (
        <div>
            <div>OfferDetails {offerId}</div>
        </div>
    )
}