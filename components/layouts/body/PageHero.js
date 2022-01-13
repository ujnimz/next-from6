import React from 'react';
import SingleImage from '../../elements/SingleImage';

const PageHero = ({image}) => {
  return (
    <div className='flex justify-center items-center overflow-hidden'>
      <div className='w-full'>
        <SingleImage image={image} priority />
      </div>
    </div>
  );
};

export default PageHero;
