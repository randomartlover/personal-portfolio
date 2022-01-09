import React from 'react';
import Avatar from './Avatar';

function RightPanel(props) {
  return (
    <div className='right-panel'>
      <Avatar />
      {props.children}
    </div>
  );
}

export default RightPanel;
