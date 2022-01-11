import React from 'react';
import MainHeader from './header/MainHeader';
import MainFooter from './footer/MainFooter';

const MainLayout = ({children, data}) => {
  const {footer, navigation} = data;
  return (
    <div className='content'>
      <MainHeader data={navigation} />
      {children}
      <MainFooter data={footer} />
    </div>
  );
};

export default MainLayout;
