import {CommonDialog} from "../../Common/Dialog/CommonDialog";
import {OfferCategory, OfferListItemResponse} from "../OfferList/OfferListModel";
import {CategoriesReport, CategoryReportItem} from "./OfferReportModel";
import React from "react";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";
import './OfferReportModal.css';
import {
    Chart as ChartJS,
    CategoryScale,
    BarElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Colors,
} from 'chart.js';
import {Bar} from "react-chartjs-2";
import {randomColors} from "./BarColors";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Colors
);

interface OfferReportModalProps {
    open: boolean;
    handleClose: () => void,
    offers: OfferListItemResponse[],
}

export const OfferReportModal = ({offers, open, handleClose}: OfferReportModalProps) => {
    const LIMIT: number = 20;
    const categoryReports: CategoriesReport = {};
    const sortableCategories: CategoryReportItem[] = [];

    offers.forEach((offer: OfferListItemResponse) => {
        offer.categories.forEach((category: OfferCategory) => {
            if (categoryReports.hasOwnProperty(category.id)) {
                categoryReports[category.id].amount++;
            } else {
                categoryReports[category.id] = {name: category.name, amount: 1};
            }
        });
    });

    for (const categoryId in categoryReports) {
        sortableCategories.push({...categoryReports[categoryId], ...{id: categoryId}});
    }
    sortableCategories.sort(
        (category1: CategoryReportItem , category2: CategoryReportItem) => category2.amount > category1.amount ? 1 : -1
    );

    const options = {};
    const data = {
        labels: sortableCategories.slice(0, LIMIT).map(item => item.name),
        datasets: [
            {
                label: "Amount of offers",
                data: sortableCategories.slice(0, LIMIT).map(item => item.amount),
                borderWidth: 1,
                backgroundColor: randomColors(),
            }
        ],
    };

    return <CommonDialog open={open} handleClose={handleClose} title="Report">
        <Typography>Most popular skills</Typography>
        <Box className='chart-container'>
            <Bar options={options}  data={data}/>
        </Box>
    </CommonDialog>
}