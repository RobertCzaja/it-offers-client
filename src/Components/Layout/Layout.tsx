import {Outlet} from "react-router-dom";
import {Navigation} from "../Navigation/Navigation";
import {useAuth} from "../Authorization/AuthContext";
import React from "react";
import {LoginPage} from "../Authorization/LoginPage";
import {InternalRoutes} from "../Navigation/InternalRoutes";

export const Layout = () => {
    const auth = useAuth();

    if (null === auth.user) {
        window.history.replaceState(null, "", InternalRoutes.LOGIN)
        return <LoginPage/>
    }

    return <>
        <Navigation />
        <Outlet />
    </>
}