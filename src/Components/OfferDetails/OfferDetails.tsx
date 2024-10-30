import React, {useEffect, useState} from 'react';
import Typography from "@mui/material/Typography";
import {FetchOfferDetails} from "./FetchOfferDetails";
import {Chip, CircularProgress} from "@mui/material";
import './OfferDetails.css';
import {OfferCategoryResponse, OfferDetailsResponse, OfferSalaryResponse} from "./OfferDetailsResponse";
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
                <li>Seniority: {offerDetails.seniority}</li>
                <li>Time: {offerDetails.time}</li>
                <li>Workplace: {offerDetails.workplace}</li>
                <li>Remote interview: {offerDetails.remoteInterview ? 'yes' : 'no'}</li>
            </ul>
            <ul>
                <li>Published at: {offerDetails.publishedAt.toString()}</li>
                <li>Created at: {offerDetails.createdAt.toString()}</li>
            </ul>
            <ul>
                <li>{offerDetails.company.name}</li>
                <li>{offerDetails.company.city}</li>
                <li>{offerDetails.company.street}</li>
            </ul>

            <div>
                <Typography>Categories/Required skills</Typography>
                {offerDetails.categories.map((category: OfferCategoryResponse) => <Chip label={category.name}/>)}
            </div>

            <div>
                <Typography>Salaries</Typography>
                {offerDetails.salaries.map((salary: OfferSalaryResponse) => <Typography>
                    {salary.from} - {salary.to} {salary.currency} ({salary.type})
                </Typography>)}
            </div>

        </> : <div className='offer-details-container' >
            <CircularProgress/>
        </div>}
    </>
}