import React, {useEffect, useState} from 'react';
import Typography from "@mui/material/Typography";
import {FetchOfferDetails} from "./FetchOfferDetails";
import {CircularProgress} from "@mui/material";
import './OfferDetails.css';
import {OfferDetailsResponse} from "./OfferDetailsResponse";
import Button from "@mui/material/Button";

interface OfferDetailsProps {
    offerId: string;
}

export const OfferDetails = ({offerId}: OfferDetailsProps) => {
    const [offerDetails, setOfferDetails] = useState<OfferDetailsResponse>();

    useEffect(() => {
        FetchOfferDetails(offerId).then(response => setOfferDetails(response));
    }, [offerId]);

    return <>
        {offerDetails ? <>
            <Typography variant='h6'>{offerDetails.title}</Typography>
            <Button variant="outlined" href={offerDetails.url} target="_blank">JustJoinIt</Button>
            <ul>
                <li>{offerDetails.company.name}</li>
                <li>{offerDetails.company.city}</li>
                <li>{offerDetails.company.street}</li>
            </ul>
        </> : <div className='offer-details-container' >
            <CircularProgress/>
        </div>}
    </>
}