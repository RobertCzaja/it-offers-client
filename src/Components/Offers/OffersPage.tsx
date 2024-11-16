import {Grid2} from "@mui/material";
import React, {useState} from "react";
import {OfferListFilters} from "../OfferListFilters/OfferListFilters";
import Typography from "@mui/material/Typography";
import {OfferList} from "../OfferList/OfferList";
import {OfferListModel, OfferListResponse} from "../OfferList/OfferListModel";
import {OffersListFilters} from "../OfferListFilters/OfferListFiltersModel";
import {FetchOffersList} from "../OfferList/FetchOffersList";
import {OfferListMapper} from "../OfferList/OfferListMapper";

export const OffersPage = () => {
    const [offers, setOffers] = useState<OfferListModel[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchOffers = (filters: OffersListFilters): void => {
        setLoading(true);
        FetchOffersList(filters).then((offersList: OfferListResponse) => {
            setOffers(OfferListMapper(offersList));
            setLoading(false);
        })
    }
    return <>
        <Grid2 container spacing={2} sx={{ m: "1em" }}>
            <Grid2 size={12}>
                <Typography variant="h4" gutterBottom>OffersPage</Typography>
            </Grid2>
            <Grid2 size={12}>
                <OfferListFilters fetchOffers={fetchOffers}/>
            </Grid2>
            <Grid2 size={12}>
                <OfferList loading={loading} offers={offers}/>
            </Grid2>
        </Grid2>
    </>
}