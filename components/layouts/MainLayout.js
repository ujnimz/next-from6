import React from 'react';
import MainHeader from './header/MainHeader';
import MainFooter from './footer/MainFooter';

const MainLayout = ({children}) => {
  return (
    <div className='content'>
      <MainHeader />
      {children}
      <MainFooter />
    </div>
  );
};

export default MainLayout;
