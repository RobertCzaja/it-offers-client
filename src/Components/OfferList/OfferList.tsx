import React from 'react';
import {DataGrid, GridColDef, GridRowsProp} from '@mui/x-data-grid';

export const OfferList = () => {

    const rows: GridRowsProp = [
        {
            id: '7c353b81-74d8-4dcc-8506-4bafadc70a5a',
            technology: 'php',
            title: 'PHP Developer',
            salaryFrom: '15000',
            salaryTo: '24000',
            salaryCurrency: 'PLN',
            requiredSkills: 'PHP, MySql, PhpUnit',
            publishedAt: '2024-10-12',
            seniority: 'senior',
            companyName: 'Comarch',
            companyCity: 'Kraków',
        },
        {
            id: '56ad7f24-0871-49fd-996b-605d0011a354',
            technology: 'php',
            title: 'PHP Mid Developer/React',
            salaryFrom: '23000',
            salaryTo: '25500',
            salaryCurrency: 'PLN',
            requiredSkills: 'PHP, React, TypeScript, MongoDB',
            publishedAt: '2024-09-21',
            seniority: 'mid',
            companyName: 'AGTest',
            companyCity: 'Warszawa',
        },
    ];

    const columns: GridColDef[] = [
        { field: 'technology', headerName: 'technology', width: 100 },
        { field: 'title', headerName: 'Job', width: 250 },
        { field: 'salaryFrom', headerName: 'From', width: 75 },
        { field: 'salaryTo', headerName: 'To', width: 75 },
        { field: 'salaryCurrency', headerName: 'Currency', width: 75 },
        { field: 'publishedAt', headerName: 'Published', width: 100 },
        { field: 'seniority', headerName: 'Level', width: 100 },
        { field: 'companyName', headerName: 'Company', width: 100 },
        { field: 'companyCity', headerName: 'City', width: 100 },
        { field: 'requiredSkills', headerName: 'Skills', width: 300 },
    ];

    return (
        <>
            <DataGrid rows={rows} columns={columns} />
        </>
    );
}