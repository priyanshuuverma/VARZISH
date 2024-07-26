import React, { useState, useEffect } from "react";
import Logo from '../images/logo.jpg';
// import { Link } from "react-scroll";
import Checkbox from "./Checkbox/Checkbox";
import { Router } from "react-router";
import { Link } from "react-router-dom";

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
            <Link to="main" className="logo" smooth={true} duration={1000}>
                <img src={Logo} alt="Logo" />
            </Link>
            <Checkbox />
            <input type="Checkbox" id="menu-btn" className="menu-btn" />
                  <label className="menu-icon" htmlFor="menu-btn">
                    <span className="nav-icon">

                    </span>
                    </label>    
                    <ul className="menu">
                        <li><Link to="main" smooth={true} duration={1000} >Header</Link></li>
                        <li><Link to="features"smooth={true} duration={1000}>FEATURES</Link></li>
                        <li><Link to="presentation"smooth={true} duration={1000}>OFFERS</Link></li>
                        <li><Link to="about"smooth={true} duration={1000}>ABOUT</Link></li>
                        <li><Link to="contact"smooth={true} duration={1000}>Contact</Link></li>

                        
                    </ul>  
            

            
        </nav>
    );
}

export default Navbar;
