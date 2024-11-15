import React, {useState} from 'react';
import {OfferList} from "../OfferList/OfferList";
import {OfferListFilters} from "../OfferListFilters/OfferListFilters";
import {Grid2} from "@mui/material";
import Typography from '@mui/material/Typography';
import {LoginForm} from "../Authorization/LoginForm";
import {FetchOffersList} from "../OfferList/FetchOffersList";
import {OffersListFilters} from "../OfferListFilters/OfferListFiltersModel";
import {
    OfferListModel,
    OfferListResponse,
} from "../OfferList/OfferListModel";
import {OfferListMapper} from "../OfferList/OfferListMapper";
import Button from "@mui/material/Button";

export const Home = () => {
    const [offers, setOffers] = useState<OfferListModel[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchOffers = (filters: OffersListFilters): void => {
        setLoading(true);
        FetchOffersList(filters).then((offersList: OfferListResponse) => {
            setOffers(OfferListMapper(offersList));
            setLoading(false);
        })
    }

    return (
        <>
            Home
            {/*<LoginForm />*/}
            {/*<Grid2 container spacing={2} sx={{ m: "1em" }}>
                <Grid2 size={12}>
                    <Typography variant="h4" gutterBottom>Offers</Typography>
                </Grid2>
                <Grid2 size={12}>
                    <OfferListFilters fetchOffers={fetchOffers}/>
                </Grid2>
                <Grid2 size={12}>
                    <OfferList loading={loading} offers={offers}/>
                </Grid2>
            </Grid2>*/}
        </>
    )
}