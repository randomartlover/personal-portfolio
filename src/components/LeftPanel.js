import React from 'react';

function LeftPanel(props) {
  return (
    <div className='left-panel'>
      {props.children}
    </div>
  );
}

export default LeftPanel;
