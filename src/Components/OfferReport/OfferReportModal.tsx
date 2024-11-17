import {CommonDialog} from "../../Common/Dialog/CommonDialog";
import {Box} from "@mui/material";
import {OfferCategory, OfferListItemResponse} from "../OfferList/OfferListModel";
import {CategoriesReport, CategoryReportItem} from "./OfferReportModel";


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
    )

    return <CommonDialog open={open} handleClose={handleClose} title="Report">
        <Box>test</Box>
    </CommonDialog>

}