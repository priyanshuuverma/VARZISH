import React from "react";
import './Checkbox.css';

function Checkbox()
{
    return(
        <>
        <div class="wrap-check-29">
  <div class="cbx">
    <input id="cbx-29" type="checkbox"/>
    <label for="cbx-29"></label>
    <svg width="15" height="14" viewbox="0 0 15 14" fill="none">
      <path d="M2 8.36364L6.23077 12L13 2"></path>
    </svg>
  </div>
  
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <filter id="goo-12">
        <fegaussianblur in="SourceGraphic" stddeviation="4" result="blur"></fegaussianblur>
        <fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo-12"></fecolormatrix>
        <feblend in="SourceGraphic" in2="goo-12"></feblend>
      </filter>
    </defs>
  </svg>
</div>
        </>
    )
}

export default Checkbox;