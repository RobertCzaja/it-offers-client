import React from 'react';
import {AppBar, Box, IconButton, Toolbar} from "@mui/material";
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';
import {InternalRoutes} from "./InternalRoutes";

export const Navigation = () => {
    return <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Button color="inherit" href={InternalRoutes.HOME}>Home</Button>
                    <Button color="inherit" href={InternalRoutes.OFFERS}>Offers</Button>
                    <Button color="inherit" href={InternalRoutes.LOGIN}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </>
}