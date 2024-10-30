import React, {useEffect, useState} from 'react';
import Typography from "@mui/material/Typography";
import {FetchOfferDetails} from "./FetchOfferDetails";
import {Chip, CircularProgress, Grid2, Paper} from "@mui/material";
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
            <Grid2 container spacing={2}>
                <Grid2 size={10}>
                    <Typography variant='h6'>{offerDetails.title}</Typography>
                </Grid2>
                <Grid2 size={2}>
                    <Button variant="outlined" href={offerDetails.url} target="_blank">JustJoinIt</Button>
                </Grid2>
            </Grid2>
            <Grid2 container spacing={2} sx={{paddingTop: 1}}>
                <Grid2 size={4}>
                    <Paper elevation={3} sx={{p: 1}}>
                        <ul>
                            <li>Seniority: {offerDetails.seniority}</li>
                            <li>Time: {offerDetails.time}</li>
                            <li>Workplace: {offerDetails.workplace}</li>
                            <li>Remote interview: {offerDetails.remoteInterview ? 'yes' : 'no'}</li>
                        </ul>
                        <ul>
                            <li>Published at: {new Date(offerDetails.publishedAt).toLocaleString('pl-PL')}</li>
                            <li>Created at: {new Date(offerDetails.createdAt).toLocaleString('pl-PL')}</li>
                        </ul>
                    </Paper>
                </Grid2>
                <Grid2 size={4}>
                    <Paper elevation={3} sx={{p: 1}}>
                        <ul>
                            <li>{offerDetails.company.name}</li>
                            <li>{offerDetails.company.city}</li>
                            <li>{offerDetails.company.street}</li>
                        </ul>
                    </Paper>
                </Grid2>
                <Grid2 size={4}>
                    <Paper elevation={3} sx={{p: 1}}>
                        <div>
                            <Typography>Categories/Required skills</Typography>
                            {offerDetails.categories.map((category: OfferCategoryResponse) => <Chip
                                label={category.name}/>)}
                        </div>

                        <div>
                            <Typography>Salaries</Typography>
                            {offerDetails.salaries.map((salary: OfferSalaryResponse) => <Typography>
                                {salary.from} - {salary.to} {salary.currency} ({salary.type})
                            </Typography>)}
                        </div>
                    </Paper>
                </Grid2>
            </Grid2>
        </> : <div className='offer-details-container'>
            <CircularProgress/>
        </div>}
    </>
}