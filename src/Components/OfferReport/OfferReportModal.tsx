import {CommonDialog} from "../../Common/Dialog/CommonDialog";
import {OfferCategory, OfferListItemResponse} from "../OfferList/OfferListModel";
import {CategoriesReport, CategoryReportItem, CategoryStats, CategoriesSeries} from "./OfferReportModel";
import {AxisOptions, Chart} from "react-charts";
import React from "react";
import Typography from "@mui/material/Typography";

interface OfferReportModalProps {
    open: boolean;
    handleClose: () => void,
    offers: OfferListItemResponse[],
}

export const OfferReportModal = ({offers, open, handleClose}: OfferReportModalProps) => {

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
        (categort1: CategoryReportItem , categort2: CategoryReportItem) => categort2.amount > categort1.amount ? 1 : -1
    );

    const primaryAxis = React.useMemo(
        (): AxisOptions<CategoryStats> => ({
            getValue: datum => datum.name,
        }),
        []
    )

    const secondaryAxes = React.useMemo(
        (): AxisOptions<CategoryStats>[] => [
            {
                getValue: datum => datum.amount,
            },
        ],
        []
    )

    const dataSeries2: CategoriesSeries[] = [];
    sortableCategories.slice(0, 20).forEach((category: CategoryReportItem) => {
        dataSeries2.push({label: category.name, data: [{name: category.name, amount: category.amount}]});
    });

    return <CommonDialog open={open} handleClose={handleClose} title="Report">
        <Typography>Most popular skills</Typography>
        <Chart options={{data: dataSeries2, primaryAxis, secondaryAxes,}}/>
    </CommonDialog>
}