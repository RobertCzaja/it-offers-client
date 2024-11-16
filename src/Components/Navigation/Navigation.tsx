import React from 'react';
import {AppBar, Box, Toolbar} from "@mui/material";
import Button from "@mui/material/Button";
import {InternalRoutes} from "./InternalRoutes";
import {useAuth} from "../Authorization/AuthContext";

export const Navigation = () => {
    const auth = useAuth();

    return <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" href={InternalRoutes.HOME}>Home</Button>
                    <Button color="inherit" href={InternalRoutes.OFFERS}>Offers</Button>
                    <Button color="inherit" onClick={() => {auth.logout()}}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </>
}