import React from 'react';
import {BootstrapDialog} from "./BootstrapDialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

interface CommonDialogProps {
    title: string,
    open: boolean;
    handleClose: () => void,
    children: React.ReactNode,
}

export const CommonDialog = ({title, open, handleClose, children}: CommonDialogProps) => {
    return <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth='xl'
    >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            {title}
        </DialogTitle>
        <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
                position: 'absolute',
                right: 8,
                top: 8,
                color: theme.palette.grey[500],
            })}
        >
            <CloseIcon />
        </IconButton>
        <DialogContent dividers sx={{
            display: 'flex',
            flexDirection: 'column',
            m: 'auto',
            width: '80vw',
            height: '80vh'
        }}>
            {children}
        </DialogContent>
        <DialogActions>
            <Button autoFocus onClick={handleClose}>
                Close
            </Button>
        </DialogActions>
    </BootstrapDialog>
}