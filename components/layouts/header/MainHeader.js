import React from 'react';
import Logo from '../../elements/Logo';
import MainNavigation from '../../navigations/MainNavigation';

const MainHeader = () => {
  return (
    <div className='fixed w-full z-50'>
      <div className='flex justify-between items-start flex-wrap'>
        <Logo />
        <MainNavigation />
      </div>
    </div>
  );
};

export default MainHeader;
