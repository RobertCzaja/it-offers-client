import React, {useState} from 'react';
import './resource/App.css';
import {UserProvider} from "./Context/useAuth";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Home} from "./Components/Home";
import {About} from "./Components/About";
import {Navbar} from "./Components/Navbar";
import LoginPage from "./Pages/LoginPages/LoginPage";
import LoginForm from "./Components/LoginForm/LoginForm";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {

    //const [theme, setTheme] = useState('light');

    return (
        <>
            <UserProvider>
                <div className='container'>{/*className={`container ${theme}`*/}
                    {/* <Navbar theme={theme} setTheme={setTheme}/> */}
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/new-login' element={<LoginForm />} />
                    </Routes>
                </div>

            </UserProvider>
        </>
    );
}

export default App;
