import React, {useState} from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, {Dayjs} from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {Button, Grid2, ToggleButton, ToggleButtonGroup} from "@mui/material";
import './OfferListFilters.css';
import {PublishedAtScope} from "./OfferListFiltersModel";
import {MultiSelect} from "../../Common/MultiSelect/MultiSelect";
import {JobTechnologies} from "./JobTechnologies";

export const OfferListFilters = () => {
    const [publishedAtFrom, setPublishedAtFrom] = useState<Dayjs|null>(null);
    const [publishedAtTo, setPublishedAtTo] = useState<Dayjs|null>(null);
    const [publishedAtScope, setPublishedAtScope] = useState<PublishedAtScope|null>(null);
    const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

    const handlePublishedAtScopeChange = (event: React.MouseEvent<HTMLElement>, scope: PublishedAtScope) => {
        var from: Dayjs|null = null;
        var to: Dayjs|null = null;

        switch (scope) {
            case (null):
                from = null;
                to = null;
                break;
            case (PublishedAtScope.THIS_MONTH):
                from = dayjs().startOf('month');
                to = dayjs();
                break;
            case (PublishedAtScope.LAST_MONTH):
                from = dayjs().subtract(1,'month').startOf('month');
                to = dayjs().subtract(1, 'month').endOf('month');
                break;
            case (PublishedAtScope.PENULTIMATE_MONTH):
                from = dayjs().subtract(2,'month').startOf('month');
                to = dayjs().subtract(2, 'month').endOf('month');
                break;
            default:
                throw new Error('Unknown publishedAt scope: '+scope);
        }

        setPublishedAtFrom(from);
        setPublishedAtTo(to);
        setPublishedAtScope(scope);
    };

    /* todo needs to be implemented */
    const fetch = () => {
        console.log(publishedAtFrom, publishedAtTo, selectedTechnologies);
    }

    return (
        <div className='offer-list-filters'>
            <Grid2 container spacing={2}>
                <Grid2 size={12} container spacing={2}>
                    <ToggleButtonGroup
                        color="primary"
                        value={publishedAtScope}
                        exclusive
                        size="small"
                        onChange={handlePublishedAtScopeChange}
                        aria-label="Published at period"
                    >
                        <ToggleButton value={PublishedAtScope.THIS_MONTH}>This</ToggleButton>
                        <ToggleButton value={PublishedAtScope.LAST_MONTH}>Last</ToggleButton>
                        <ToggleButton value={PublishedAtScope.PENULTIMATE_MONTH}>Penultimate</ToggleButton>
                        <ToggleButton value="" disabled>Month</ToggleButton>
                        Month
                    </ToggleButtonGroup>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Published from"
                            value={publishedAtFrom}
                            slotProps={{ textField: { size: 'small' } }}
                            onChange={(value) => setPublishedAtFrom(value)}
                        />
                        <DatePicker
                            label="Published to"
                            value={publishedAtTo}
                            slotProps={{ textField: { size: 'small' } }}
                            onChange={(value) => setPublishedAtTo(value)}
                        />
                    </LocalizationProvider>
                </Grid2>
                <Grid2 size={12} container spacing={2}>
                    <MultiSelect
                        title='Technologies'
                        options={JobTechnologies()}
                        selected={selectedTechnologies}
                        setSelected={setSelectedTechnologies}
                    />
                    <Button variant="outlined" sx={{ width: 231 }} onClick={fetch}>
                        Search
                    </Button>
                </Grid2>
            </Grid2>
        </div>
    )
}