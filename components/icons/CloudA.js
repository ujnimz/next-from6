import React from 'react';
import {motion} from 'framer-motion';

const CloudA = ({colorClass = 'text-primary'}) => {
  const getMovement = (min = -10, max = 10) => {
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
        id='CloudA'
        className={`fill-current ${colorClass}`}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 294.96 169.78'
      >
        <path
          d='M297.65,173.77c0-34-27.86-61.6-62.1-61.6A62.1,62.1,0,0,0,216.92,115a62.24,62.24,0,0,0-116-16.19,68.91,68.91,0,0,0-21.24,4.84H12.11a9.43,9.43,0,0,0,0,18.85h41.1a67.42,67.42,0,0,0-9.11,75.65h-32a9.43,9.43,0,0,0,0,18.85H46.79a9.39,9.39,0,0,0,7.72-4,68.88,68.88,0,0,0,50.84,22.39h130.2C269.79,235.38,297.65,207.74,297.65,173.77ZM55.31,167c0-27.27,22.42-49.46,50.29-49.46h0l1.12.06a9.38,9.38,0,0,0,9-6,43.28,43.28,0,0,1,83.47,16l-.05,1a9.42,9.42,0,0,0,14.22,8.5A43.42,43.42,0,0,1,235.55,131c23.85,0,43.25,19.18,43.25,42.75s-19.4,42.76-43.25,42.76H105.35C77.76,216.53,55.31,194.33,55.31,167Z'
          transform='translate(-2.69 -65.6)'
        />
      </svg>
    </motion.div>
  );
};

export default CloudA;
