import React from 'react';
import {Link} from "react-router-dom";
import logo_light from '../Assets/logo-black.png';
import logo_dark from '../Assets/logo-white.png';
import search_icon_light from '../Assets/search-w.png';
import search_icon_dark from '../Assets/search-b.png';
import toogle_light from '../Assets/night.png';
import toogle_dark from '../Assets/day.png';
import '../resource/Navbar.css';



// @ts-ignore
export const Navbar = ({theme, setTheme}) => {

    const toggleMode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <nav className="navbar">

            <img src={theme == 'light' ? logo_light : logo_dark} alt="" className="logo"></img>

            <ul>
                <li><Link to='/' className="menu-item">Home</Link></li>
                <li><Link to='/about' className="menu-item">About</Link></li>
                <li><Link to='/login' className="menu-item">Login</Link></li>
            </ul>

            <div className='search-box'>
                <input type='text' placeholder='Search'/>
                <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt=""/>
            </div>

            <img onClick={() => {toggleMode()}} src={theme == 'light' ? toogle_light : toogle_dark} alt="" className='toggle-icon'/>

        </nav>
    )
}