import React from 'react';
import {LoginForm} from "./LoginForm";
import Box from "@mui/material/Box";

export const LoginPage = () => {
    return <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
    >
        <LoginForm/>
    </Box>
}