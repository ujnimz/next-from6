import React, {useState} from 'react';
import Link from 'next/link';
import {motion, useCycle} from 'framer-motion';
import MenuIcon from '../elements/MenuIcon';
import ThemeSwitch from '../elements/ThemeSwitch';

const MainNavigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const navArray = [
    {
      id: 0,
      title: 'About',
      link: '/',
    },
    {
      id: 1,
      title: 'Services',
      link: '/',
    },
    {
      id: 2,
      title: 'Work',
      link: '/',
    },
    {
      id: 3,
      title: 'Blog',
      link: '/',
    },
    {
      id: 4,
      title: 'Contact',
      link: '/',
    },
  ];

  const menuVariants = {
    open: {
      transition: {staggerChildren: 0.07, delayChildren: 0.2},
    },
    closed: {
      transition: {staggerChildren: 0.05, staggerDirection: 1},
    },
  };

  const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: {stiffness: 1000, velocity: -100},
      },
    },
    closed: {
      y: -20,
      opacity: 0,
      transition: {
        y: {stiffness: 1000, velocity: -100},
      },
    },
  };

  const sidebar = {
    open: {
      height: 195,
      width: 150,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    closed: {
      height: 50,
      width: 100,
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <div className='relative flex flex-col'>
      <motion.nav
        initial='open'
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebar}
      >
        <motion.div
          className='absolute top-0 right-0 bottom-0 bg-primary -z-10 rounded-2xl'
          style={{width: 100, height: 50}}
          variants={sidebar}
        />

        <div className='flex justify-between'>
          <MenuIcon toggleOpen={toggleOpen} isOpen={isOpen} />
          <ThemeSwitch />
        </div>

        <motion.ul className='px-3 pb-9' variants={menuVariants}>
          {navArray.map(item => (
            <motion.li
              key={item.id}
              className='mb-0.5'
              variants={menuItemVariants}
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.95}}
            >
              <Link href={item.link}>
                <a className='text-primary-content text-sm font-light text-right block p-0.5'>
                  {item.title}
                </a>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default MainNavigation;
