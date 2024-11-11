import React from 'react';
import {OfferList} from "./OfferList/OfferList";
import {MockedData} from "../Mocks/MockedData";
import {OfferListFilters} from "./OfferListFilters/OfferListFilters";
import {Grid2} from "@mui/material";
import Typography from '@mui/material/Typography';
import {LoginForm} from "./Authorization/LoginForm";
import {FetchOffersList} from "./OfferList/FetchOffersList";
import {OffersListFilters} from "./OfferListFilters/OfferListFiltersModel";

export const Home = () => {
    const fetchOffers = (filters: OffersListFilters): void => {
        FetchOffersList(filters).then(data => console.log(data))/*todo get real data here*/
    }

    return (
        <>
            <LoginForm />
            <Grid2 container spacing={2} sx={{ m: "1em" }}>
                <Grid2 size={12}>
                    <Typography variant="h4" gutterBottom>Offers</Typography>
                </Grid2>
                <Grid2 size={12}>
                    <OfferListFilters fetchOffers={fetchOffers}/>
                </Grid2>
                <Grid2 size={12}>
                    <OfferList offers={MockedData.offers()}/>
                </Grid2>
            </Grid2>
        </>
    )
}