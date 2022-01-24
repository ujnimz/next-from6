import PropTypes from 'prop-types';
import {motion} from 'framer-motion';

const Email = ({colorClass = 'text-primary'}) => {
  return (
    <motion.div>
      <svg
        className={`fill-current ${colorClass}`}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 49.872 49.86'
      >
        <path
          id='Icon_awesome-instagram'
          d='M24.936,14.384A12.784,12.784,0,1,0,37.72,27.168,12.763,12.763,0,0,0,24.936,14.384Zm0,21.095a8.311,8.311,0,1,1,8.311-8.311,8.326,8.326,0,0,1-8.311,8.311ZM41.224,13.861a2.982,2.982,0,1,1-2.982-2.982A2.975,2.975,0,0,1,41.224,13.861Zm8.467,3.026c-.189-3.994-1.1-7.532-4.028-10.447S39.211,2.613,35.216,2.413c-4.117-.234-16.455-.234-20.572,0C10.662,2.6,7.124,3.514,4.2,6.429S.37,12.882.17,16.876c-.234,4.117-.234,16.455,0,20.572C.359,41.442,1.271,44.98,4.2,47.9s6.453,3.827,10.447,4.028c4.117.234,16.455.234,20.572,0,3.994-.189,7.532-1.1,10.447-4.028s3.827-6.453,4.028-10.447c.234-4.117.234-16.444,0-20.56ZM44.373,41.865a8.414,8.414,0,0,1-4.74,4.74c-3.282,1.3-11.07,1-14.7,1s-11.426.289-14.7-1a8.414,8.414,0,0,1-4.74-4.74c-1.3-3.282-1-11.07-1-14.7s-.289-11.426,1-14.7a8.414,8.414,0,0,1,4.74-4.74c3.282-1.3,11.07-1,14.7-1s11.426-.289,14.7,1a8.414,8.414,0,0,1,4.74,4.74c1.3,3.282,1,11.07,1,14.7S45.675,38.594,44.373,41.865Z'
          transform='translate(0.005 -2.238)'
        />
      </svg>
    </motion.div>
  );
};

Email.propTypes = {
  colorClass: PropTypes.string,
};

export default Email;
