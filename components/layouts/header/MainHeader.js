import React, {useState} from 'react';
import Logo from '../../elements/Logo';
import MenuIcon from '../../elements/MenuIcon';
import MainNavigation from '../../navigations/MainNavigation';
import SidebarFooter from '../footer/SidebarFooter';

const MainHeader = () => {
  return (
    <div className='fixed w-full z-50'>
      <div className='flex justify-between items-start p-6'>
        <Logo />
        <MainNavigation />
      </div>
    </div>
  );
};

export default MainHeader;
