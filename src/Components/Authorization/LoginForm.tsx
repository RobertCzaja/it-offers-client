import React, {useState} from 'react';
import {
    Alert, Box, Card,
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
import Typography from "@mui/material/Typography";
import './LoginForm.css';
import {useNavigate} from "react-router-dom";

type LoginFormValues = {
    email: string
    password: string
}

export const LoginForm = () => {
    const navigate = useNavigate();
    const [showSnackbar, setShowSnackbar] = useState<boolean>(false);
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

    const onSubmit: SubmitHandler<LoginFormValues> = (data: LoginFormValues, e) => {
        setLoading(true);
        FetchToken(data).then((token: Token) => {
            saveToken(token.token);
            setLoading(false);
            setAuthResultMessage('Successfully logged');
            setShowSnackbar(true);
            setAuthMessageSeverity('success');
            e?.target.reset();
            navigate("/offers");
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
        <Box display="flex" justifyContent="center" alignItems="center" width={250}>
            <Card className="login-card">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid2 container spacing={1}>
                        <Grid2 size={12}>
                            <Typography align="center" variant="h6" className="login-title">Sign in</Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <TextField
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                size="small"
                                label="Email"
                                className="input-field"
                                {...register("email", {
                                    required: true,
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Invalid email',
                                    },
                                })}
                            />
                        </Grid2>
                        <Grid2 size={12}>
                            <TextField
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                type="password"
                                size="small"
                                label="Password"
                                className="input-field"
                                {...register("password", {
                                    required: true,
                                    minLength: { value: 5, message: "Min 5 chars" },
                                    maxLength: { value: 12, message: "Max 12 chars" },
                                })}
                            />
                        </Grid2>
                        <Grid2 size={12}>
                            <LoadingButton
                                loading={loading}
                                type="submit"
                                className="login-btn"
                                variant="outlined"
                            >
                                Login
                            </LoadingButton>
                        </Grid2>
                    </Grid2>
                </form>
                <Snackbar open={showSnackbar} autoHideDuration={2000} onClose={handleCloseErrorSnackbar}>
                    <Alert severity={authMessageSeverity}>{authResultMessage}</Alert>
                </Snackbar>
            </Card>
        </Box>
    </>
}