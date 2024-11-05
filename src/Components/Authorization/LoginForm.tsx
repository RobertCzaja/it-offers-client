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
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [authResultMessage, setAuthResultMessage] = useState<string>('');
    const [authMessageSeverity, setAuthMessageSeverity] = useState<AlertColor>('success');
    const [loading, setLoading] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm<LoginFormValues>({defaultValues: {email: "", password: "",}});

    const handleCloseErrorSnackbar = () => {
        setShowSnackbar(false);
    };

    const onSubmit: SubmitHandler<LoginFormValues> = (data: LoginFormValues) => {
        setLoading(true);
        FetchToken(data).then((token: Token) => {
            saveToken(token.value);
            setLoading(false);
            setAuthResultMessage('Successfully logged');
            setShowSnackbar(true);
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
            setShowSnackbar(true);
            setAuthMessageSeverity('error');
        });
    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid2 container spacing={1} sx={{mt: 1, ml: 2}}>
                {/*todo on api add more precise cors origin*/}
                <TextField
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    size="small"
                    label="Email"
                    {...register("email", {
                        required: true,
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Invalid email',
                        },
                    })}
                />
                <TextField
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    type="password"
                    size="small"
                    label="Password"
                    {...register("password", {
                        required: true,
                        minLength: { value: 5, message: "Min 5 chars" },
                        maxLength: { value: 12, message: "Max 12 chars" },
                    })}
                />
                <LoadingButton
                    loading={loading}
                    type="submit"
                    style={{maxHeight: 40}}
                    variant="outlined"
                >
                    Login
                </LoadingButton>
            </Grid2>
        </form>
        <Snackbar open={showSnackbar} autoHideDuration={2000} onClose={handleCloseErrorSnackbar}>
            <Alert severity={authMessageSeverity}>{authResultMessage}</Alert>
        </Snackbar>
    </>
}