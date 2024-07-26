import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink
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
            <ScrollLink to="main" smooth={true} duration={1000} className="logo">
                <img src={Logo} alt="Logo" />
            </ScrollLink>
            <Checkbox />
            <input type="checkbox" id="menu-btn" className="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><ScrollLink to="main" smooth={true} duration={1000}>Header</ScrollLink></li>
                <li><ScrollLink to="features" smooth={true} duration={1000}>FEATURES</ScrollLink></li>
                <li><ScrollLink to="presentation" smooth={true} duration={1000}>OFFERS</ScrollLink></li>
                <li><ScrollLink to="about" smooth={true} duration={1000}>ABOUT</ScrollLink></li>
                <li><ScrollLink to="contact" smooth={true} duration={1000}>Contact</ScrollLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
