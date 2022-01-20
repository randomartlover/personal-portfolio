import React from 'react';
import { Link } from "react-router-dom";

import moment from 'moment';
import navBarBanner from '../assets/images/navbar-header.png';

function Navbar() {
  return (
    <div className='navbar'>
      <p>VOL: I <br /> NEWS AND EVENTS IN <br />THE LIFE OF ALEX</p>
      <div className='navbar-img-container'>
        <img src={navBarBanner} height="auto" width="100%" alt="well" />
      </div>
      <p>
        {moment().format('Do MMMM, YYYY')}
        <em>
          Page: &nbsp;
            <Link to="/">Home </Link>
            <Link to="/about">About-Me </Link>
            <Link to="/projects">Projects</Link>
        </em>
      </p>
    </div>
  );
}

export default Navbar;
