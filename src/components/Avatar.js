import React from 'react';
import avatar from "../assets/images/avatar.jpg";

function Avatar() {
  return (
    <div className='avatar-container'>
      <img src={avatar} alt="alexandra" width="100%"/>
    </div>
  );
}

export default Avatar;
