import React, {useState} from 'react';
import {
    Grid2,
    TextField
} from "@mui/material";
import {FetchToken} from "./FetchToken";
import {Token} from "./AuthorizationTypes";
import {SubmitHandler, useForm} from "react-hook-form";
import {LoadingButton} from "@mui/lab";

type LoginFormValues = {
    email: string
    password: string
}

export const LoginForm = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm<LoginFormValues>({defaultValues: {email: "", password: "",}});

    const onSubmit: SubmitHandler<LoginFormValues> = (data: LoginFormValues) => {
        setLoading(true);
        FetchToken(data).then((token: Token) => {
            setLoading(false);
        });
        // todo set it in global context
    }
    console.log('control');

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid2 container spacing={1} sx={{mt: 1, ml: 2}}>
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
    </>
}