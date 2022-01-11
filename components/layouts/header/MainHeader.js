import React from 'react';
import Link from 'next/link';
import Logo from '../../elements/Logo';
import MainNavigation from '../../navigations/MainNavigation';

const MainHeader = ({data}) => {
  const {navItems} = data.data.attributes;
  return (
    <div className='fixed w-full z-50'>
      <div className='flex justify-between items-start flex-wrap'>
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>

        <MainNavigation navItems={navItems} />
      </div>
    </div>
  );
};

export default MainHeader;
