import React from "react";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

type Props = {}

type LoginFormInputs = {
    userName: string;
    password: string;
}

const validation = Yup.object().shape({
    userName: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
});

const LoginPage = (props: Props) => {
    //const { loginUser } = useAuth();
    //const { register, handleSubmit, formState: { errors }} = useForm<LoginFormInputs>({ resolver: yupResolver(validation) })
    return (
        <div>LoginPage</div>
    )
}

export default LoginPage;