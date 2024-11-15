import {Outlet} from "react-router-dom";
import {Navigation} from "../Navbar/Navigation";

export const Layout = () => {
    return <>

        <Navigation />
        <Outlet />
    </>
}