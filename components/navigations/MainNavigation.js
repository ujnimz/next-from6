import React, {useState} from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';

const MainNavigation = () => {
  const [isHovered, setHovered] = useState({hover: false, key: null});

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

  const itemVariants = {
    hide: {
      opacity: 0,
      x: -10,
    },
    show: {opacity: 1, x: 0},
  };

  const mainVariants = {
    hide: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    show: {
      transition: {
        delayChildren: 2,
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div className='flex flex-1 items-center'>
      <nav>
        <motion.ul
          className='text-base-content text-sm font-light text-secondary pt-10'
          initial='hide'
          animate='show'
          variants={mainVariants}
        >
          {navArray.map(item => (
            <motion.li key={item.id} className='mb-0.5' variants={itemVariants}>
              <Link href={item.link}>
                <a
                  className='block p-0.5'
                  onMouseEnter={() => setHovered({hover: true, key: item.id})}
                  onMouseLeave={() => setHovered({hover: false, key: item.id})}
                >
                  {item.title}
                  <motion.div
                    className='bg-primary rounded h-0.5'
                    initial={false}
                    animate={{
                      width:
                        isHovered.hover && isHovered.key === item.id
                          ? '100%'
                          : 0,
                    }}
                    transition={{ease: 'anticipate', duration: 0.5}}
                  ></motion.div>
                </a>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
