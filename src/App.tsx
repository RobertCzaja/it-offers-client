import React from 'react';
import './resource/App.css';
import {UserProvider} from "./Context/useAuth";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from "react-router-dom";

function App() {
    return (
        <div>test1</div>
        /*<>
            <UserProvider>
                <div>something</div>
                <ToastContainer/>
            </UserProvider>
        </>*/
    );
}

export default App;
