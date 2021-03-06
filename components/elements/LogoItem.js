import {useState} from 'react';
import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import SingleImage from './SingleImage';

const LogoItem = ({logo}) => {
  const [onLink, setOnLink] = useState(false);

  const {image} = logo;
  return (
    <motion.div
      className='flex flex-col flex-1'
      onHoverStart={() => setOnLink(true)}
      onHoverEnd={() => setOnLink(false)}
    >
      <div className='overflow-hidden'>
        <motion.div
          animate={onLink ? {scale: 1.1} : {scale: 1}}
          transition={{duration: 0.5, ease: 'easeInOut'}}
          // className={`transition-grayscale duration-300 ${
          //   onLink ? 'grayscale-0' : 'grayscale'
          // }`}
          className='contrast-0'
        >
          <SingleImage image={image} />
        </motion.div>
      </div>
    </motion.div>
  );
};

LogoItem.propTypes = {
  logo: PropTypes.object.isRequired,
};

export default LogoItem;
