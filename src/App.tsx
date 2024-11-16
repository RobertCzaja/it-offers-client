import React from 'react';
import "react-toastify/dist/ReactToastify.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./Components/Authorization/LoginPage";
import {OffersPage} from "./Components/Offers/OffersPage";
import {Layout} from "./Components/Layout/Layout";
import {NotFound} from "./Components/NotFound/NotFound";
import AuthProvider from "./Components/Authorization/AuthContext";
import {InternalRoutes} from "./Components/Navigation/InternalRoutes";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path={InternalRoutes.HOME} element={<Layout/>}>
                    <Route index element={<OffersPage/>} />
                    <Route path={InternalRoutes.LOGIN} element={<LoginPage/>} />
                    <Route path={InternalRoutes.OFFERS} element={<OffersPage/>} />
                    <Route path={InternalRoutes.ANY} element={<NotFound/>} />
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;
