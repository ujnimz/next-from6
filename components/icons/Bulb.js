import PropTypes from 'prop-types';
import {motion} from 'framer-motion';

const Bulb = ({colorClass = 'text-primary'}) => {
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
        id='Layer_1'
        className={`fill-current ${colorClass}`}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 267.97 295.36'
      >
        <path
          d='M229.62,134.16c1.35-19-5.5-37.64-19.3-52.45C193.92,64.11,170.19,54,145.19,54c-24.85,0-48.49,10-64.85,27.5C66.46,96.32,59.51,115,60.77,134.13c2.45,37.34,15.51,47.46,27,56.39,8.87,6.88,15.88,12.31,17.14,31.7a5.6,5.6,0,0,0,1.2,3.13,4.9,4.9,0,0,0,.18,1.19,5.72,5.72,0,0,0,5.53,4.27,5.55,5.55,0,0,0,1.45-.19l70-18.37a5.81,5.81,0,0,0,2-.64h0l.28-.16a5.74,5.74,0,0,0,2.84-4.16c3.38-8.8,8.7-13,14.83-17.93C214.42,180.48,227,170.42,229.62,134.16ZM196.14,180.4c-6.55,5.22-13.29,10.61-17.78,21.32l-62.3,16.34c-2.28-21.87-11.91-29.35-21.25-36.59-10.55-8.17-20.51-15.89-22.62-48.09-1-15.92,4.82-31.57,16.5-44,14-15,35.12-23.87,56.5-23.87s42.73,9,56.76,24.06c11.6,12.46,17.37,28,16.25,43.83C216,164.6,206.34,172.28,196.14,180.4Z'
          transform='translate(-11.21 -2.32)'
        />
        <path
          d='M181.34,254.42,110.4,273a5.72,5.72,0,0,0,1.45,11.26,6,6,0,0,0,1.45-.18l5.14-1.35a5.6,5.6,0,0,0,1.11,2.81c5.79,7.59,15.38,12.12,25.67,12.12,17.11,0,31-12.45,31-27.75a5.73,5.73,0,0,0-.45-2.23l8.43-2.21a5.72,5.72,0,1,0-2.9-11.07Zm-36.12,31.82a21.09,21.09,0,0,1-15.56-6.43l35.12-9.21C164.35,279.28,155.75,286.24,145.22,286.24Z'
          transform='translate(-11.21 -2.32)'
        />
        <path
          d='M181.34,227.68,110.4,246.29a5.72,5.72,0,0,0,1.45,11.26,5.55,5.55,0,0,0,1.45-.19l70.94-18.6a5.73,5.73,0,1,0-2.9-11.08Z'
          transform='translate(-11.21 -2.32)'
        />
        <path
          d='M147.63,37.6a5.72,5.72,0,0,0,5.72-5.72V8A5.73,5.73,0,0,0,141.9,8V31.88A5.73,5.73,0,0,0,147.63,37.6Z'
          transform='translate(-11.21 -2.32)'
        />
        <path
          d='M230.1,37,213.24,53.81a5.72,5.72,0,1,0,8.1,8.09l16.85-16.85A5.72,5.72,0,0,0,230.1,37Z'
          transform='translate(-11.21 -2.32)'
        />
        <path
          d='M273.45,128.12H249.62a5.73,5.73,0,0,0,0,11.45h23.83a5.73,5.73,0,1,0,0-11.45Z'
          transform='translate(-11.21 -2.32)'
        />
        <path
          d='M217.9,201.91a5.72,5.72,0,0,0-8.1,8.09l16.86,16.85a5.72,5.72,0,0,0,8.09-8.09Z'
          transform='translate(-11.21 -2.32)'
        />
        <path
          d='M72.49,61.9a5.72,5.72,0,1,0,8.09-8.09L63.73,37A5.72,5.72,0,0,0,55.63,45Z'
          transform='translate(-11.21 -2.32)'
        />
        <path
          d='M40.77,123.25H16.93a5.73,5.73,0,0,0,0,11.45H40.77a5.73,5.73,0,0,0,0-11.45Z'
          transform='translate(-11.21 -2.32)'
        />
        <path
          d='M69.05,201.91,52.19,218.77a5.72,5.72,0,1,0,8.1,8.09L77.14,210a5.72,5.72,0,1,0-8.09-8.09Z'
          transform='translate(-11.21 -2.32)'
        />
        <path
          d='M184.43,108.11a5.72,5.72,0,0,0-7.8,2.16L142,171.33l-20.66-28.45a5.72,5.72,0,1,0-9.26,6.73L138,185.25a5.71,5.71,0,0,0,4.63,2.36H143a5.76,5.76,0,0,0,4.66-2.9l39-68.8A5.73,5.73,0,0,0,184.43,108.11Z'
          transform='translate(-11.21 -2.32)'
        />
      </svg>
    </motion.div>
  );
};

Bulb.propTypes = {
  colorClass: PropTypes.string,
};

export default Bulb;
