import React from 'react';
import {DataGrid, GridColDef, GridRowsProp} from '@mui/x-data-grid';
import {MockedData} from "../../Mocks/MockedData";
import {Chip} from "@mui/material";
import './OfferList.css';

export const OfferList = () => {
    const rows: GridRowsProp = MockedData.offers();

    const columns: GridColDef[] = [
        { field: 'technology', headerName: 'technology', width: 100 },
        { field: 'title', headerName: 'Job', width: 250 },
        { field: 'salaryFrom', headerName: 'From', type: 'number', width: 75 },
        { field: 'salaryTo', headerName: 'To', type: 'number', width: 75 },
        { field: 'salaryCurrency', headerName: 'Currency', width: 75 },
        { field: 'publishedAt', headerName: 'Published', width: 100 }, //todo check it there is not special type for date
        { field: 'seniority', headerName: 'Level', width: 100 },
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
    ];

    return (
        <>
            <div className='offer-list'>
                <DataGrid rows={rows} columns={columns} />
            </div>
        </>
    );
}