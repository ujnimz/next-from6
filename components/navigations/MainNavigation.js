import React from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';

const MainNavigation = ({open, navOpen}) => {
  const navArray = [
    {
      id: 0,
      title: 'Money Transfer',
      link: '/',
      sub: [
        {
          id: 0,
          title: 'Check Latest Rates',
          link: '/',
        },
        {
          id: 1,
          title: 'Use Currency Converter',
          link: '/',
        },
        {
          id: 2,
          title: 'Send Money Online',
          link: '/',
        },
        {
          id: 3,
          title: 'View Money Transfer Options',
          link: '/',
        },
      ],
    },
    {
      id: 1,
      title: 'Currency Exchange',
      link: '/',
      sub: [
        {
          id: 0,
          title: 'Check Latest Rates',
          link: '/',
        },
        {
          id: 1,
          title: 'Use Currency Converter',
          link: '/',
        },
        {
          id: 2,
          title: 'Currency Buy Back',
          link: '/',
        },
      ],
    },
    {
      id: 2,
      title: 'Bill Payments',
      link: '/',
      sub: [
        {
          id: 0,
          title: 'Credit Card Payments',
          link: '/',
        },
        {
          id: 1,
          title: 'Social Security Payments',
          link: '/',
        },
        {
          id: 2,
          title: 'Insurance Payments',
          link: '/',
        },
        {
          id: 3,
          title: 'Telecom Payments',
          link: '/',
        },
        {
          id: 4,
          title: 'LMRA & Flexi Permit Monthly Payments',
          link: '/',
        },
        {
          id: 5,
          title: 'Rent Payments',
          link: '/',
        },
        {
          id: 6,
          title: 'Fee Payments',
          link: '/',
        },
        {
          id: 7,
          title: 'International Utility Bill Payments',
          link: '/',
        },
      ],
    },
    {
      id: 3,
      title: 'Branches',
      link: '/',
    },
    {
      id: 4,
      title: 'News',
      link: '/',
    },
    {
      id: 5,
      title: 'FAQs',
      link: '/',
    },
    {
      id: 6,
      title: 'About Us',
      link: '/',
    },
  ];

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -10,
    },
    opened: {opacity: 1, x: 0},
  };

  const mainVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    opened: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div className='flex flex-1 items-center'>
      <nav>
        <motion.ul className='text-base-content text-sm text-primary-content'>
          {navArray.map(item => (
            <motion.li
              key={item.id}
              className='mb-1'
              onClick={() => navOpen(!open)}
            >
              <Link href={item.link}>
                <a className='block p-1'>{item.title}</a>
              </Link>
              {item.sub ? (
                <motion.ul
                  className='text-base-content text-xs ml-3 text-accent'
                  initial='closed'
                  animate={open ? 'opened' : 'closed'}
                  variants={mainVariants}
                >
                  {item.sub.map(subItem => (
                    <motion.li
                      key={subItem.id}
                      variants={itemVariants}
                      whileHover={{scale: 1.1}}
                    >
                      <Link href={subItem.link}>
                        <a className='block p-1'>{subItem.title}</a>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              ) : (
                ''
              )}
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
