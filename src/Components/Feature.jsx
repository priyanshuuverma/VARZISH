import React from "react";
import Featurebox from "./featurebox";
import fimage1 from '../images/1.png';
import fimage2 from '../images/2.png';
import fimage3 from '../images/3.png';
import fimage4 from '../images/4.png';

function Feature(){
    return(
        <div id="features">
            <h1>FEATURES</h1>
            <div className="a-container">
                <Featurebox image={fimage1} title="Weight Lifting"/>
                <Featurebox image={fimage2} title="Get Your Coach"/>
                <Featurebox image={fimage3} title="Weight Loss"/>
                <Featurebox image={fimage4} title="Connect Your Fitness Center "/>

            </div>
        </div>
    )
}

export default Feature;