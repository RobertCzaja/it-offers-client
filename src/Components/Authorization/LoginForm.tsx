import React, {useState} from 'react';
import {FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const LoginForm = () => {

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSubmit = () => {
        console.log('fetch token');
    }

    // todo call FetchToken
    // todo add email validation; password some simple length validation
    // todo put into container
    // todo make small

    return <>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <TextField
                required id="email"
                label="Email"
                variant="outlined"
                size="small"
            />

            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                required
                id="outlined-adornment-password"
                size="small"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label={
                                showPassword ? 'hide the password' : 'display the password'
                            }
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label="Password"
            />

            <Button
                variant="outlined"
                onClick={handleSubmit}
            >
                Login
            </Button>
        </FormControl>
    </>
}