import React, {useState} from 'react';
import {
    Alert,
    Grid2, Snackbar,
    TextField
} from "@mui/material";
import {FetchToken} from "./FetchToken";
import {Token} from "./AuthorizationTypes";
import {SubmitHandler, useForm} from "react-hook-form";
import {LoadingButton} from "@mui/lab";
import {saveToken} from "./TokenRepository";
import {AxiosError} from "axios";
import {AlertColor} from "@mui/material/Alert/Alert";

type LoginFormValues = {
    email: string
    password: string
}

export const LoginForm = () => {
    const [snackbar, setAuthSnackbar] = useState(false);
    const [authResultMessage, setAuthResultMessage] = useState<string>('');
    const [authMessageSeverity, setAuthMessageSeverity] = useState<AlertColor>('success');
    const [loading, setLoading] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm<LoginFormValues>({defaultValues: {email: "", password: "",}});

    const handleCloseErrorSnackbar = () => {
        setAuthSnackbar(false);
    };

    const onSubmit: SubmitHandler<LoginFormValues> = (data: LoginFormValues) => {
        setLoading(true);
        FetchToken(data).then((token: Token) => {
            saveToken(token.value);
            setLoading(false);
            setAuthResultMessage('Successfully logged');
            setAuthSnackbar(true);
            setAuthMessageSeverity('success');
        }).catch((errorResponse: AxiosError) => {
            switch (errorResponse.status) {
                case 401:
                    setAuthResultMessage('Invalid Credentials');
                    break;
                default:
                    setAuthResultMessage('Unknown error');
                    break;
            }
            setLoading(false);
            setAuthSnackbar(true);
            setAuthMessageSeverity('error');
        });
    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid2 container spacing={1} sx={{mt: 1, ml: 2}}>
                {/*todo better display error in both fields*/}
                {/*todo on api add more precise cors origin*/}
                <TextField
                    required
                    type="email"
                    size="small"
                    label="Email"
                    {...register("email")}
                />
                <TextField
                    required
                    type="password"
                    size="small"
                    label="Password"
                    slotProps={{ htmlInput: {minLength: 5, maxLength: 30} }}
                    {...register("password")}
                />
                <LoadingButton
                    loading={loading}
                    type="submit"
                    variant="outlined"
                >
                    Login
                </LoadingButton>
            </Grid2>
        </form>
        <Snackbar open={snackbar} autoHideDuration={2000} onClose={handleCloseErrorSnackbar}>
            <Alert severity={authMessageSeverity}>{authResultMessage}</Alert>
        </Snackbar>
    </>
}