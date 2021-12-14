import React, {useState} from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import NextArrow from '../icons/NextArrow';

const BorderButton = () => {
  const [onLink, setOnLink] = useState(false);

  return (
    <Link href='/'>
      <div className='overflow-hidden'>
        <motion.a
          className='relative cursor-pointer flex justify-between items-center w-full p-2 border-primary-content border-l-2 border-t-2 border-r-2 before:content-[""] before:block before:absolute before:top-1 before:right-0 before:border-right-2 border-b-2 before:border-bottom-2 after:content-[""] after:border-primary-content after:block after:absolute after:-right-5 after:-bottom-5 after:h-9 after:w-9 after:bg-primary after:border-2 after:rotate-45'
          onHoverStart={() => setOnLink(true)}
          onHoverEnd={() => setOnLink(false)}
        >
          <span className='text-base-400 text-lg'>Start Now</span>
          <motion.div
            className='flex w-5 h-5 mr-3'
            animate={
              onLink
                ? {
                    x: 10,
                    transition: {duration: 0.5, ease: 'easeInOut'},
                  }
                : {
                    x: 0,
                    transition: {duration: 0.5, ease: 'easeInOut'},
                  }
            }
          >
            <NextArrow colorClass='primary-content' />
          </motion.div>
        </motion.a>
      </div>
    </Link>
  );
};

export default BorderButton;
