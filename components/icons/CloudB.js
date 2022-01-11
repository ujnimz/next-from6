import React from 'react';
import {motion} from 'framer-motion';

const CloudB = ({colorClass = 'text-primary'}) => {
  const getMovement = (min = -15, max = 15) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <motion.div
      animate={{x: getMovement(), y: getMovement()}}
      transition={{
        ease: 'easeInOut',
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      <svg
        id='CloudB'
        className={`fill-current ${colorClass}`}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 296.02 158.79'
      >
        <path
          d='M49.59,229.88a47.44,47.44,0,0,1,0-94.87,46.92,46.92,0,0,1,10.19,1.11l5,1.09,1.55-4.83a61.46,61.46,0,0,1,87.79-35l3.79,2.06,2.94-3.15a79.39,79.39,0,1,1,58,133.63Zm0-79a31.53,31.53,0,0,0,0,63.05h169.2a63.49,63.49,0,1,0-50-102.63,14,14,0,0,1-10.57,4.82,13.9,13.9,0,0,1-7.46-2.21l-.38-.24a45.52,45.52,0,0,0-70.26,28.58l-.21,1.11a13.85,13.85,0,0,1-17.71,10.17A31.17,31.17,0,0,0,49.59,150.92Z'
          transform='translate(-2.16 -71.09)'
        />
      </svg>
    </motion.div>
  );
};

export default CloudB;
