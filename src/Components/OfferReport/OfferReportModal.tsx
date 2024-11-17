import {CommonDialog} from "../../Common/Dialog/CommonDialog";
import {Box} from "@mui/material";


interface OfferReportModalProps {
    open: boolean;
    handleClose: () => void,
}

export const OfferReportModal = ({open, handleClose}: OfferReportModalProps) => {
    return <CommonDialog open={open} handleClose={handleClose} title="Report">
        <Box>test</Box>
    </CommonDialog>

}