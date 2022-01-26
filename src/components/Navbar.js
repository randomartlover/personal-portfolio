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
      <div>
        {moment().format('Do MMMM, YYYY')}
        <em className='navigation'>
          Page: &nbsp;
          <div className='links'>
            <p><Link to="/"><i className="fas fa-igloo"/> Home </Link></p>
            <p><Link to="/projects"><i className="fas fa-puzzle-piece"/>Projects</Link></p>
            <p><Link to="/about"><i className="fas fa-user-astronaut"/> About-Me </Link></p>
          </div>
        </em>
      </div>
    </div>
  );
}

export default Navbar;
