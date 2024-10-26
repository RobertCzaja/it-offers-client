import {OfferDetailsConnector, OfferDetailsDto} from "./OfferDetailsConnector";
import HttpRequestMock from 'http-request-mock';
import axios from "axios";
import {useEffect, useState} from "react";

interface OfferDetailsProps {
    offerId: string
}

/**
 * todo why is render twice
 */
export const OfferDetails = ({offerId}: OfferDetailsProps) => {

    const [offerDetails, setOfferDetails] = useState<OfferDetailsDto|null>(null);

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
        body: {
            id: offerId,
            title: "One Identity Consultant z j. angielskim",
            url: "https://justjoin.it/job-offer/dmtech-polska-c-backend-developer-z-j-angielskim-iam--bydgoszcz-net",
        }
    });

    const fetchOfferDetails = async (): Promise<OfferDetailsDto> => {
        return await axios
            .get('https://www.api.com/some-api')
            .then(response => {
                // todo check if it's 200 ok
                return response.data;
            });
    };

    useEffect(() => {
        fetchOfferDetails().then(data => setOfferDetails(data));
    }, []);

    return (
        <div>
            <div className='offer-details'>OfferDetails</div>
            {offerDetails ? <div className='content'>
                <ul>
                    <li>{offerDetails.id}</li>
                    <li>{offerDetails.title}</li>
                    <li>{offerDetails.url}</li>
                </ul>
            </div> : null}
        </div>
    )
}