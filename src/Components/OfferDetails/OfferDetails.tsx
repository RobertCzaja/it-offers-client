import {FetchOfferDetails, OfferDetailsDto} from "./FetchOfferDetails";
import {useEffect, useState} from "react";

interface OfferDetailsProps {
    offerId: string
}

/**
 * todo why is render twice
 */
export const OfferDetails = ({offerId}: OfferDetailsProps) => {

    const [offerDetails, setOfferDetails] = useState<OfferDetailsDto|null>(null);

    useEffect(() => {
        FetchOfferDetails(offerId).then(data => setOfferDetails(data));
    }, [offerId]);

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