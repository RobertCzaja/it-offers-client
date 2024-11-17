import React from 'react';
import {Box, Tab, Tabs} from "@mui/material";
import {OfferDetails} from "./OfferDetails";
import './OfferDetailsModal.css';
import {CommonDialog} from "../../Common/Dialog/CommonDialog";
import {a11yProps, CommonTabPanel} from "../../Common/Tab/CommonTabPanel";

interface OfferDetailsModalProps {
    open: boolean;
    handleClose: () => void,
    offerId: string,
}

export const OfferDetailsModal = ({open, handleClose, offerId}: OfferDetailsModalProps) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <CommonDialog open={open} handleClose={handleClose} title="Offer">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="offer details">
                    <Tab label="Details" {...a11yProps(0, 'offer-details')} />
                    <Tab label="Categories" {...a11yProps(1, 'offer-details')} />
                    <Tab label="Salary" {...a11yProps(2, 'offer-details')} />
                </Tabs>
            </Box>
            <CommonTabPanel
                containerClass='offer-details-tab-panel'
                ariaLabel='offer-details-tab'
                boxClass='offer-details-tab-panel-box'
                name='offer-details-tabpanel'
                value={value}
                index={0}
            >
                <OfferDetails offerId={offerId}></OfferDetails>
            </CommonTabPanel>
            <CommonTabPanel
                containerClass='offer-details-tab-panel'
                ariaLabel='offer-details-tab'
                boxClass='offer-details-tab-panel-box'
                name='offer-details-tabpanel'
                value={value}
                index={1}
            >
                Categories
            </CommonTabPanel>
            <CommonTabPanel
                containerClass='offer-details-tab-panel'
                ariaLabel='offer-details-tab'
                boxClass='offer-details-tab-panel-box'
                name='offer-details-tabpanel'
                value={value}
                index={2}
            >
                Salary
            </CommonTabPanel>
        </CommonDialog>
    );
}
