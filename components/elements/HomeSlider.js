import React from 'react';

const HomeSlider = () => {
  return (
    <div className='h-screen bg-accent flex flex-wrap'>
      <div className='w-full lg:w-3/5 flex items-stretch'>
        <div className='flex flex-col flex-1 justify-around items-center'>
          <div className='bg-accent'>
            <h1>Introducing the Power of the BFC Pay App!</h1>
          </div>
          <div>
            <h1>Slider</h1>
          </div>
        </div>
      </div>
      <div className='bg-secondary w-full lg:w-2/5'>
        <h1>Rates</h1>
      </div>
    </div>
  );
};

export default HomeSlider;
