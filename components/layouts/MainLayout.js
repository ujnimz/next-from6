import React from 'react';
import MainHeader from './header/MainHeader';

const MainLayout = ({children}) => {
  return (
    <div className='content'>
      <MainHeader />
      <div className='container mx-auto pl-20'>{children}</div>
    </div>
  );
};

export default MainLayout;
