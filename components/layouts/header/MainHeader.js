import React, {useState} from 'react';
import Logo from '../../elements/Logo';
import MenuIcon from '../../elements/MenuIcon';
import MainNavigation from '../../navigations/MainNavigation';
import SidebarFooter from '../footer/SidebarFooter';
import ThemeSwitch from '../../elements/ThemeSwitch';

const MainHeader = () => {
  const [open, navOpen] = useState(false);

  return (
    <div
      className={`fixed h-screen flex flex-col overflow-hidden ${
        open ? `ml-0` : `-ml-60`
      } transition-all duration-700 ease-in-out`}
    >
      <div
        className={`flex absolute p-3 h-20 ${
          open ? `ml-0` : `ml-60`
        } transition-all duration-700 ease-in-out`}
      >
        <Logo open={open} />
      </div>

      <div className={`flex flex-1 bg-primary`}>
        <div className='flex flex-col p-3 w-60'>
          <MainNavigation open={open} navOpen={navOpen} />
          <SidebarFooter open={open} />
        </div>

        <div
          className={`flex flex-col items-center justify-between pt-3 w-20 ${
            open
              ? `bg-gradient-to-r from-primary to-primary-focus`
              : `bg-primary`
          } transition-colors duration-700 ease-in-out`}
        >
          <MenuIcon open={open} navOpen={navOpen} />
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
