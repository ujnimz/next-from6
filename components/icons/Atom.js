import React from 'react';
import {motion} from 'framer-motion';

const Atom = ({colorClass = 'text-primary'}) => {
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
        id='Atom'
        className={`stroke-current ${colorClass}`}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 279.77 298.34'
      >
        <path
          d='M118,26.76c8-13.89,17.35-21.93,27.41-21.93,28.63,0,51.85,65,51.85,145.17s-23.22,145.17-51.85,145.17S93.59,230.17,93.59,150c0-37.17,5-71.08,13.19-96.75'
          transform='translate(-13.04 -0.83)'
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 8,
          }}
        />
        <path
          d='M55.18,235.31c-17.44.56-30.15-3.52-35.47-12.72-14.31-24.8,30.37-77.4,99.8-117.49S256.83,52.62,271.15,77.41s-30.36,77.4-99.8,117.49c-30.46,17.59-60.63,29.85-86.1,36'
          transform='translate(-13.04 -0.83)'
          //style='fill:none;stroke:#ff9e18;stroke-linecap:round;stroke-linejoin:round;stroke-width:8px'
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 8,
          }}
        />
        <path
          d='M267.71,226.94c-19.68,18.72-83.27,5.45-148.2-32C50.08,154.81,5.4,102.21,19.71,77.41S101.92,65,171.35,105.1c52.94,30.56,91.49,68.4,100.47,95.64'
          transform='translate(-13.04 -0.83)'
          //style='fill:none;stroke:#ff9e18;stroke-linecap:round;stroke-linejoin:round;stroke-width:8px'
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 8,
          }}
        />
        <path
          d='M111,25.94A13.91,13.91,0,1,1,97.09,39.85,13.9,13.9,0,0,1,111,25.94Z'
          transform='translate(-13.04 -0.83)'
          //style='fill:none;stroke:#ff9e18;stroke-miterlimit:22.9255847930908;stroke-width:8px'
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 8,
          }}
        />
        <path
          d='M70.45,220.78A13.92,13.92,0,1,1,56.54,234.7a13.92,13.92,0,0,1,13.91-13.92Z'
          transform='translate(-13.04 -0.83)'
          //style='fill:none;stroke:#ff9e18;stroke-miterlimit:22.9255847930908;stroke-width:8px'
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 8,
          }}
        />
        <path
          d='M274.9,200.24A13.91,13.91,0,1,1,261,214.15a13.91,13.91,0,0,1,13.92-13.91Z'
          transform='translate(-13.04 -0.83)'
          //style='fill:none;stroke:#ff9e18;stroke-miterlimit:22.9255847930908;stroke-width:8px'
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 8,
          }}
        />
        <path
          d='M145.43,126.05a24,24,0,1,1-24,24,23.95,23.95,0,0,1,24-24Z'
          transform='translate(-13.04 -0.83)'
          //style='fill:none;stroke:#ff9e18;stroke-miterlimit:22.9255847930908;stroke-width:8px'
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 8,
          }}
        />
      </svg>
    </motion.div>
  );
};

export default Atom;
