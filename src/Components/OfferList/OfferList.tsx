import React, {BaseSyntheticEvent, useState} from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {Chip, IconButton} from "@mui/material";
import './OfferList.css';
import InfoIcon from "@mui/icons-material/Info";
import {OfferListModel} from "./OfferListModel";
import {OfferDetailsModal} from "../OfferDetails/OfferDetailsModal";

interface OfferListProps {
    offers: OfferListModel[];
}

export const OfferList = ({offers}: OfferListProps) => {
    const dateFormatter = new Intl.DateTimeFormat("pl-PL");
    const [open, setOpen] = useState<boolean>(false);
    const [offerId, setOfferId] = useState<string>();
    const handleOpen = (e: BaseSyntheticEvent, offerId: string) => {
        setOfferId(offerId);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const columns: GridColDef[] = [
        { field: 'technology', headerName: '', width: 50, align: "center"},
        { field: 'seniority', headerName: 'Level', width: 75, align: "right" },
        { field: 'title', headerName: 'Job', width: 250 },
        { field: 'salaryFrom', headerName: 'From', type: 'number', width: 75 },
        { field: 'salaryTo', headerName: 'To', type: 'number', width: 75 },
        { field: 'salaryCurrency', headerName: 'Currency', width: 75 },
        {
            field: 'publishedAt',
            headerName: 'Published',
            type: 'date',
            width: 100,
            valueFormatter: (value) => dateFormatter.format(value),
        },
        { field: 'companyName', headerName: 'Company', width: 100 },
        { field: 'companyCity', headerName: 'City', width: 100 },
        {
            field: 'requiredSkills',
            headerName: 'Skills',
            width: 300,
            renderCell: (params) => <>
                {params.value.map(
                    (skill: string) => <Chip key={skill} size="small" label={skill} className='skill-chip' />
                )}
            </>
        },
        {
            field: 'id',
            headerName: 'Action',
            width: 100,
            sortable: false,
            renderCell: (params) =>
            <IconButton aria-label="details" size="small" onClick={(e) => handleOpen(e, params.value)}>
                <InfoIcon/>
            </IconButton>
        }
    ];

    return (
        <div className='offer-list'>
            <DataGrid rows={offers} columns={columns} />
            {offerId ? <OfferDetailsModal open={open} handleClose={handleClose} offerId={offerId}/> : null}
        </div>
    );
}