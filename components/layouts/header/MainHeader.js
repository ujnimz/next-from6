import React, {useState} from 'react';
import Logo from '../../elements/Logo';
import MenuIcon from '../../elements/MenuIcon';
import MainNavigation from '../../navigations/MainNavigation';
import SidebarFooter from '../footer/SidebarFooter';
import ThemeSwitch from '../../elements/ThemeSwitch';

const MainHeader = () => {
  return (
    <div className='fixed h-screen flex flex-col overflow-hidden p-6'>
      <div className='flex-1'>
        <Logo />
        <MainNavigation />
      </div>

      <div className='flex flex-col items-center justify-between pt-3'>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default MainHeader;
