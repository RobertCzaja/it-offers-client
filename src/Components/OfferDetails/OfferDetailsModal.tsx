import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {Box, Tab, Tabs} from "@mui/material";
import {OfferDetails} from "./OfferDetails";
import './OfferDetailsModal.css';

interface OfferDetailsModalProps {
    open: boolean;
    handleClose: () => void,
    offerId: string,
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

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
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            maxWidth='xl'
        >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                Offer
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                })}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers sx={{
                display: 'flex',
                flexDirection: 'column',
                m: 'auto',
                width: '80vw',
                height: '80vh'
            }}>
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

            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Close
                </Button>
            </DialogActions>
        </BootstrapDialog>
    );
}
