import React from 'react';
import Burger from '@animated-burgers/burger-squeeze';
import '@animated-burgers/burger-squeeze/dist/styles.css';

const MenuIcon = ({open, navOpen}) => {
  return (
    <div
      className='flex flex-1 items-center cursor-pointer'
      onClick={() => navOpen(!open)}
    >
      <Burger isOpen={open} />
    </div>
  );
};

export default MenuIcon;
