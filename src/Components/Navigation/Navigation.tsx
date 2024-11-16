import React from 'react';
import {AppBar, Box, IconButton, Toolbar} from "@mui/material";
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';

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
                    <Button color="inherit" href="/">Home</Button>
                    <Button color="inherit" href="/offers">Offers</Button>
                    <Button color="inherit" href="/login">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </>
}