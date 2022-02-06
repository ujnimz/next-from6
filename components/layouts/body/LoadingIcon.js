import React from 'react';
import {motion} from 'framer-motion';

const LoadingIcon = () => {
  return (
    <div className='h-screen width-full flex flex-col justify-center items-center'>
      <ul className='flex space-x-2'>
        <motion.li
          animate={{rotate: 360}}
          transition={{ease: 'easeInOut', duration: 2, repeat: Infinity}}
        >
          <div className='h-2 w-2 bg-accent' />
        </motion.li>
        <motion.li
          animate={{rotate: 360}}
          transition={{ease: 'easeInOut', duration: 2, repeat: Infinity}}
        >
          <div className='h-2 w-2 bg-accent' />
        </motion.li>
        <motion.li
          animate={{rotate: 360}}
          transition={{ease: 'easeInOut', duration: 2, repeat: Infinity}}
        >
          <div className='h-2 w-2 bg-accent' />
        </motion.li>
      </ul>
    </div>
  );
};

export default LoadingIcon;
