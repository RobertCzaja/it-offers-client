import React from 'react';
import { Box, Modal, Typography } from "@mui/material";

interface OfferDetailsModalProps {
    open: boolean;
    handleClose: () => void,
    offerId: string|null,
}

export const OfferDetailsModal = ({open, handleClose, offerId}: OfferDetailsModalProps) => {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        backgroundColor: "#e0e0e0",
                        position: "absolute",
                        width: "50%",
                        mt: "15%",
                        ml: "25%",
                    }}
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <Typography>{offerId}</Typography>
                </Box>
            </Modal>
        </div>
    );
}
