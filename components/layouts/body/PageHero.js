import React from 'react';
import Image from 'next/image';

const PageHero = ({hero}) => {
  return (
    <div className='flex justify-center items-center overflow-hidden mb-6 lg:mb-10'>
      <div className='w-full'>
        <Image
          priority
          //loader={myLoader}
          className='block'
          src={hero.image}
          alt='ALT tag'
          layout='responsive'
          height={760}
          width={1920}
        />
      </div>
    </div>
  );
};

export default PageHero;
