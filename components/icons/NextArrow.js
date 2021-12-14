import React from 'react';

const NextArrow = ({colorClass = 'primary'}) => {
  return (
    <svg
      id='NextArrow'
      className={`fill-current text-${colorClass}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 18.06 18.06'
    >
      <path d='M0,10.16H13.72L7.39,16.48,9,18.06l9-9L9,0,7.45,1.58,13.72,7.9H0Z' />
    </svg>
  );
};

export default NextArrow;
