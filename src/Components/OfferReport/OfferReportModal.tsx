import {CommonDialog} from "../../Common/Dialog/CommonDialog";
import {OfferCategory, OfferListItemResponse} from "../OfferList/OfferListModel";
import {CategoriesReport, CategoryReportItem} from "./OfferReportModel";
import React from "react";
import Typography from "@mui/material/Typography";
import {Box, Tab, Tabs} from "@mui/material";
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
import {a11yProps, CommonTabPanel} from "../../Common/Tab/CommonTabPanel";

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
    const [activeTab, setActiveTab] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, activeTab: number) => {
        setActiveTab(activeTab);
    };

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
    sortableCategories.sort((category1: CategoryReportItem , category2: CategoryReportItem) => category2.amount > category1.amount ? 1 : -1);
    const slicedSortableCategories: CategoryReportItem[] = sortableCategories.slice(0, LIMIT);

    const data = {
        labels: slicedSortableCategories.map(item => item.name),
        datasets: [
            {
                label: "Amount of offers",
                data: slicedSortableCategories.map(item => item.amount),
                borderWidth: 1,
                backgroundColor: randomColors(),
            }
        ],
    };

    return <CommonDialog open={open} handleClose={handleClose} title="Report">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={activeTab} onChange={handleChange} aria-label="offer statistics">
                <Tab label="Top Skills" {...a11yProps(0, 'offers-statistics')} />
                <Tab label="Tab 2" {...a11yProps(1, 'offers-statistics')} />
                <Tab label="Tab 3" {...a11yProps(1, 'offers-statistics')} />
            </Tabs>
        </Box>

        <CommonTabPanel name='offers-statistics-tab' value={activeTab} index={0}>
            <Typography>Most popular skills</Typography>
            <Box className='chart-container'>
                <Bar options={{}}  data={data}/>
            </Box>
        </CommonTabPanel>
        <CommonTabPanel name='offers-statistics-tab' value={activeTab} index={1}>
            Tab 2
        </CommonTabPanel>
        <CommonTabPanel name='offers-statistics-tab' value={activeTab} index={2}>
            Tab 3
        </CommonTabPanel>
    </CommonDialog>
}