import React from 'react';
import {motion} from 'framer-motion';

const Mobile = ({colorClass = 'primary'}) => {
  return (
    <motion.div>
      <svg
        className={`fill-current text-${colorClass}`}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 32.764 47.656'
      >
        <path
          id='Icon_mobile'
          d='M36.212,1.928H9.405A2.987,2.987,0,0,0,6.427,4.907v41.7a2.987,2.987,0,0,0,2.979,2.979H36.212a2.987,2.987,0,0,0,2.979-2.979V4.907A2.987,2.987,0,0,0,36.212,1.928Zm-13.4,45.505a2.317,2.317,0,1,1,2.317-2.317A2.317,2.317,0,0,1,22.809,47.434Zm13.4-6.785H9.405V7.885H36.212Z'
          transform='translate(-6.427 -1.928)'
        />
      </svg>
    </motion.div>
  );
};

export default Mobile;
