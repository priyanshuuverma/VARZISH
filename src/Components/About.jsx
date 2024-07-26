import React from "react";
import aboutimage from '../images/about.jpg';

function About(){
    return(
        <div id="about">
            <div className="about-image">
                <img src={aboutimage} alt="" />

            </div>
            <div className="about-text">
                <h1>
                    LEARN MORE ABOUT US 
                </h1>
                <p>
                Lifting heavy weights was a popular activity in Ancient India, Persia, Egypt, China, and Greece, among other regions. Of these areas, we are going to focus exclusively on Ancient Greece and India. It is thanks to Ancient Athens that we have the very word gymnasium
                </p>
                <button className="b1">CAREER</button>
            </div>

        </div>
    )
}

export default About;