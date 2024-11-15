import React from 'react';
import "react-toastify/dist/ReactToastify.css";
import {Home} from "./Components/Home/Home";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./Components/Authorization/LoginPage";
import {Offers} from "./Components/Offers/Offers";
import {Layout} from "./Components/Layout/Layout";
import {NotFound} from "./Components/NotFound/NotFound";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/offers" element={<Offers/>} />
                    <Route path="/*" element={<NotFound/>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
