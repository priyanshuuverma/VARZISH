import React, { useState, useEffect } from "react";
import Logo from '../images/logo.jpg';
import Checkbox from "./Checkbox/Checkbox";

function Navbar() {
    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            changeBackground();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <a href="#main" className="logo">
                <img src={Logo} alt="Logo" />
            </a>
            <Checkbox />
            <input type="checkbox" id="menu-btn" className="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><a href="#main">Header</a></li>
                <li><a href="#features">FEATURES</a></li>
                <li><a href="#presentation">OFFERS</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
