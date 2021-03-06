import React, {useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {motion} from 'framer-motion';
import MenuIcon from '../elements/MenuIcon';
import ThemeSwitch from '../elements/ThemeSwitch';

const MainNavigation = ({navItems}) => {
  const [isOpen, toggleOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    /**
     * Close menu if clicked on outside of the wrapper
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        toggleOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  const menuVariants = {
    open: {
      display: 'block',
      transition: {staggerChildren: 0.07, delayChildren: 0.2},
    },
    closed: {
      display: 'none',
      transition: {staggerChildren: 0.05, staggerDirection: 1, delay: 0.5},
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
    <div ref={wrapperRef} className='relative flex flex-col pr-6 pt-6'>
      <motion.nav
        className='relative drop-shadow-md'
        initial='open'
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebar}
      >
        <motion.div
          className='absolute top-0 right-0 bottom-0 bg-primary -z-10 rounded-2xl '
          variants={sidebar}
        />

        <div className='flex justify-between'>
          <MenuIcon toggleOpen={toggleOpen} isOpen={isOpen} />
          {/* <LocaleSwitch /> */}
          <ThemeSwitch />
        </div>

        <motion.ul
          className='px-3 pb-9'
          animate={isOpen ? 'open' : 'closed'}
          variants={menuVariants}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className='mb-0.5'
              variants={menuItemVariants}
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.95}}
              //onClick={() => toggleOpen(!isOpen)}
            >
              <Link href={`/${item.link}`}>
                <a className='text-primary-content text-sm font-light text-right block p-0.5'>
                  {item.text}
                </a>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </div>
  );
};

MainNavigation.propTypes = {
  navItems: PropTypes.array.isRequired,
};

export default MainNavigation;
