import React from 'react';

const Paragraph = ({text}) => {
  return (
    <div className='flex justify-center items-center px-6 lg:px-6 py-2 first:pt-0 last:pb-0'>
      <p className='font-light text-xl text-base-content text-center'>{text}</p>
    </div>
  );
};

export default Paragraph;
