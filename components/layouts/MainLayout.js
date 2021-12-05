import React from 'react';
import MainHeader from './header/MainHeader';

const MainLayout = ({children}) => {
  return (
    <div className='content'>
      <MainHeader />
      {children}
    </div>
  );
};

export default MainLayout;
