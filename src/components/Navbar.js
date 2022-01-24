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
        <em className='navigation'>
          <div>
            Page: &nbsp;
          </div>
          <div className='links'>
            <p><Link to="/"><i class="fas fa-igloo"/> Home </Link></p>
            <p><Link to="/about"><i class="fas fa-user-astronaut"/> About-Me </Link></p>
            <p><Link to="/projects"><i class="fas fa-puzzle-piece"/>Projects</Link></p>
          </div>
        </em>
      </p>
    </div>
  );
}

export default Navbar;
