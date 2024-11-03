import React from 'react';
import {
    Grid2,
    TextField
} from "@mui/material";
import Button from "@mui/material/Button";
import {FetchToken} from "./FetchToken";
import {Token} from "./AuthorizationTypes";
import {SubmitHandler, useForm} from "react-hook-form";

type LoginFormValues = {
    email: string
    password: string
}

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm<LoginFormValues>({defaultValues: {email: "", password: "",}});

    const onSubmit: SubmitHandler<LoginFormValues> = (data: LoginFormValues) => {
        FetchToken(data).then((token: Token) => console.log(token.value) /* todo remove*/);
        // todo set it in global context
    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid2 container spacing={1} sx={{mt: 1, ml: 2}}>
                <TextField
                    type="email"
                    size="small"
                    label="Email"
                    {...register("email")}
                />
                <TextField
                    type="password"
                    size="small"
                    label="Password"
                    slotProps={{ htmlInput: {minLength: 5, maxLength: 30} }}
                    {...register("password")}
                />
                <Button type="submit" variant="contained">Login</Button>
            </Grid2>
        </form>
    </>
}