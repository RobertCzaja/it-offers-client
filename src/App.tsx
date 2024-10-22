import React from 'react';
import './resource/App.css';
import {UserProvider} from "./Context/useAuth";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Home} from "./Components/Home";
import {About} from "./Components/About";
import {Navbar} from "./Components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </>

        /*<>
            <UserProvider>
                <div>something</div>
                <ToastContainer/>
            </UserProvider>
        </>*/
    );
}

export default App;
