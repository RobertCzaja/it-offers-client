import {Navigate, Outlet} from "react-router-dom";
import {Navigation} from "../Navigation/Navigation";
import {useAuth} from "../Authorization/AuthContext";
import React from "react";

export const Layout = () => {
    const auth = useAuth();

    if (null === auth.user) {
        //return <Navigate to="/login" />
    }

    return <>
        <Navigation />
        <Outlet />
    </>
}