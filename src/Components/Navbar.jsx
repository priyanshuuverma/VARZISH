import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Only import Link
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

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to="/main" className="logo">
                <img src={Logo} alt="Logo" />
            </Link>
            <Checkbox />
            <input type="checkbox" id="menu-btn" className="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><Link to="/main">Header</Link></li>
                <li><Link to="/features">FEATURES</Link></li>
                <li><Link to="/presentation">OFFERS</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
