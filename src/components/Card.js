import React from 'react';

function Card(props) {
  const { children, reverse = false } = props;
  return (
    <div className={ reverse ? 'card reverse' : 'card' }>
      { children }
    </div>
  );
}

export default Card;
