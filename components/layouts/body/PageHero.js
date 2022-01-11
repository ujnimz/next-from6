import React from 'react';
import Image from 'next/image';

const PageHero = ({image}) => {
  return (
    <div className='flex justify-center items-center overflow-hidden'>
      <div className='w-full'>
        <Image
          priority
          layout='responsive'
          src={`http://localhost:1337${image.data.attributes.url}`}
          alt={image.data.attributes.alternativeText}
          height={image.data.attributes.height}
          width={image.data.attributes.width}
        />
      </div>
    </div>
  );
};

export default PageHero;
