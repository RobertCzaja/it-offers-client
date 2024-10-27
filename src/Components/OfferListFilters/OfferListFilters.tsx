import React, {useState} from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Dayjs} from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {ToggleButton, ToggleButtonGroup} from "@mui/material";

export const OfferListFilters = () => {
    // todo this month e.g. since 1-10-2024 to 27-10-2024
    // todo last month, dwo months ago
    // todo add validation 'from' cannot be greater that 'to'

    const [publishedAtFrom, setPublishedAtFrom] = useState<Dayjs|null>(null);
    const [publishedAtTo, setPublishedAtTo] = useState<Dayjs|null>(null);
    const [publishedAtScope, setPublishedAtScope] = useState('thisMonth');

    const handlePublishedAtScopeChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        console.log(newAlignment);
        //set publishedAtFrom & publishedAtTo
        setPublishedAtScope(newAlignment);
    };

    console.log(publishedAtFrom);
    console.log(publishedAtTo);

    return (
        <div className='offer-list-filters'>
            <ToggleButtonGroup
                color="primary"
                value={publishedAtScope}
                exclusive
                onChange={handlePublishedAtScopeChange}
                aria-label="Published at period"
            >
                <ToggleButton value="thisMonth">This</ToggleButton>
                <ToggleButton value="lastMonth">Last</ToggleButton>
                <ToggleButton value="penultimateMonth">Penultimate</ToggleButton>
            </ToggleButtonGroup>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Published from"
                    value={publishedAtFrom}
                    onChange={(value) => setPublishedAtFrom(value)}
                />
                <DatePicker
                    label="Published to"
                    value={publishedAtTo}
                    onChange={(value) => setPublishedAtTo(value)}
                />
            </LocalizationProvider>
        </div>
    )
}