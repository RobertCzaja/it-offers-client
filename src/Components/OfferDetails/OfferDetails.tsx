import {OfferDetailsConnector, OfferDetailsDto} from "./OfferDetailsConnector";

interface OfferDetailsProps {
    offerId: string
}

export const OfferDetails = ({offerId}: OfferDetailsProps) => {

    const details: OfferDetailsDto = OfferDetailsConnector(offerId);

    return (
        <div>
            <div>OfferDetails {offerId}</div>
            <div>{details.title}</div>
            <div>{details.url}</div>
        </div>
    )
}