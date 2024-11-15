import React from 'react';
import './resource/App.css';
import "react-toastify/dist/ReactToastify.css";
import {Home} from "./Components/Home";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
    return (
        <>
            <div className='container'>
                <Home />
            </div>
        </>
    );
}

export default App;
