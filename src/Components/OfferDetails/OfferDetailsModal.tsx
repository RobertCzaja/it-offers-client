import React from 'react';
import {Box, Tab, Tabs} from "@mui/material";
import {OfferDetails} from "./OfferDetails";
import './OfferDetailsModal.css';
import {CommonDialog} from "../../Common/Dialog/CommonDialog";

interface OfferDetailsModalProps {
    open: boolean;
    handleClose: () => void,
    offerId: string,
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function OfferDetailsTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`offer-details-tabpanel-${index}`}
            aria-labelledby={`offer-details-tab-${index}`}
            className="offer-details-tab-panel"
            {...other}
        >
            {value === index && <Box className='offer-details-tab-panel-box'>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `offer-details-${index}`,
        'aria-controls': `offer-details-${index}`,
    };
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
                    <Tab label="Details" {...a11yProps(0)} />
                    <Tab label="Categories" {...a11yProps(1)} />
                    <Tab label="Salary" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <OfferDetailsTabPanel  value={value} index={0}>
                <OfferDetails offerId={offerId}></OfferDetails>
            </OfferDetailsTabPanel>
            <OfferDetailsTabPanel value={value} index={1}>
                Categories
            </OfferDetailsTabPanel>
            <OfferDetailsTabPanel value={value} index={2}>
                Salary
            </OfferDetailsTabPanel>
        </CommonDialog>
    );
}
