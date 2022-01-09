import React from 'react';
import moment from 'moment';
import navBarBanner from '../assets/images/navbar-header.png';

function Navbar() {
  return (
    <div className='navbar'>
      <p>VOL: I <br /> NEWS AND EVENTS IN <br />THE LIFE OF ALEX</p>
      <div className='navbar-img-container'>
        <img src={navBarBanner} height="100%" width="auto" alt="well" />
      </div>
      <p>
        {moment().format('Do MMMM, YYYY')}
        <em>
          Page: &nbsp;
          <select name="page">
            <option value="Home">Home</option>
            <option value="About Me">About Me</option>
            <option value="Projects">Projects</option>
          </select>
        </em>
      </p>
    </div>
  );
}

export default Navbar;