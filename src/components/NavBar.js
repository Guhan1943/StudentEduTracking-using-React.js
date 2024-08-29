import React from 'react';
import { FaReact } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { RiDiscountPercentFill } from "react-icons/ri";
import { PiSquaresFour } from "react-icons/pi";
import './NavBar.css';

function NavBar () {
  return (

    <div class='section'>
      <div class='container-fulid'>
        <div class='row'>
          <span class='logo'><FaReact /></span>
          <span class='logo'><FaUsers /></span>
          <p>Student management</p>
          <span class='logo'><FaUsers /></span>
          <p>Student management</p>
          <span class='logo'><RiDiscountPercentFill /></span>
          <p>Quality Control</p>
          <span class='logo'><PiSquaresFour /></span>
          <p>Report Delivary</p>
          <span class='logo'><FaUsers /></span>
          <p>Student management</p> 
        </div>



      </div>
    </div>

  );
}


export default NavBar;