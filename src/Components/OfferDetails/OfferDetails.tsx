import React, {useEffect, useState} from 'react';
import Typography from "@mui/material/Typography";
import {FetchOfferDetails, OfferDetailsDto} from "./FetchOfferDetails";
import {Box, CircularProgress, LinearProgress, Stack} from "@mui/material";

interface OfferDetailsProps {
    offerId: string;
}

export const OfferDetails = ({offerId}: OfferDetailsProps) => {
    const [offerDetails, setOfferDetails] = useState<OfferDetailsDto>();

    // todo if its already fetched don't fetch for the second time

    useEffect(() => {
        console.log('in use effect');
        console.log(offerDetails);
        console.log('----');
        FetchOfferDetails(offerId).then(response => setOfferDetails(response));
    }, [offerId]);

    return <>
        {offerDetails ? <>
            <Typography>Details of {offerId}</Typography>
        </> : <div style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            minHeight: '100%'/*todo move to css*/
        }}>
            <CircularProgress/>
        </div>}
    </>
}