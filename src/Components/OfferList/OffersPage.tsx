import {Box, Grid2} from "@mui/material";
import React, {useState} from "react";
import {OfferListFilters} from "../OfferListFilters/OfferListFilters";
import Typography from "@mui/material/Typography";
import {OfferList} from "./OfferList";
import {OfferListModel, OfferListResponse} from "./OfferListModel";
import {OffersListFilters} from "../OfferListFilters/OfferListFiltersModel";
import {FetchOffersList} from "./FetchOffersList";
import {OfferListMapper} from "./OfferListMapper";
import Button from "@mui/material/Button";
import {OfferReportModal} from "../OfferReport/OfferReportModal";

export const OffersPage = () => {
    const [offers, setOffers] = useState<OfferListModel[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [showReportModal, setShowReportModal] = useState<boolean>(false);

    const fetchOffers = (filters: OffersListFilters): void => {
        setLoading(true);
        FetchOffersList(filters).then((offersList: OfferListResponse) => {
            setOffers(OfferListMapper(offersList));
            setLoading(false);
        })
    }

    const openReportModal = () => setShowReportModal(true);
    const closeReportModal = () => setShowReportModal(false);

    return <>
        <Grid2 container spacing={2} sx={{ m: "1em" }}>
                <Grid2 size={8}>
                    <Typography variant="h4" gutterBottom>OffersPage</Typography>
                </Grid2>
                <Grid2 size={4} container justifyContent="end">
                    {offers.length ? <Box><Button variant="outlined" onClick={openReportModal}>Report</Button></Box> : null}
                </Grid2>
            <Grid2 size={12}>
                <OfferListFilters loading={loading} fetchOffers={fetchOffers}/>
            </Grid2>
            <Grid2 size={12}>
                <OfferList loading={loading} offers={offers}/>
            </Grid2>
        </Grid2>
        <OfferReportModal open={showReportModal} handleClose={closeReportModal} />
    </>
}