import React from 'react';

function FullWidthImage({source}) {
  return (
    <div className='fullImage-container'>
      <img src={source} alt="story-book" width="100%" height="100%"/>
    </div>
  );
}

export default FullWidthImage;
