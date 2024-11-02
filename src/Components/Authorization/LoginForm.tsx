import React, {useState} from 'react';
import {
    Box,
    Grid2,
    TextField
} from "@mui/material";
import Button from "@mui/material/Button";
import {FetchToken} from "./FetchToken";
import {Token} from "./AuthorizationTypes";

export const LoginForm = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (event: React.SyntheticEvent) => {
        console.log(email, password); // todo to remove
        FetchToken({email: email, password: password}).then((token: Token) => console.log(token.value));
        // todo set it in global context
    }

    // todo add email validation; password some simple length validation
    // todo use form react package

    return <>
        <Box component="form" noValidate sx={{mt: 3}}>
            <Grid2 container spacing={2}>
                <Grid2>
                   <TextField
                       name="email"
                       required
                       value={email}
                       onChange={e => setEmail(e.target.value)}
                       fullWidth
                       id="email"
                       label="Email"
                       autoFocus
                       size="small"
                   />
                   <TextField
                       name="password"
                       required
                       value={password}
                       onChange={e => setPassword(e.target.value)}
                       fullWidth
                       id="password"
                       label="Password"
                       autoFocus
                       size="small"
                   />

                    <Button variant="outlined" onClick={handleSubmit}>Login</Button>
                </Grid2>
            </Grid2>
        </Box>
    </>
}