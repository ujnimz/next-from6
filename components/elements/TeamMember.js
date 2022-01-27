import {useState} from 'react';
import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import SingleImage from './SingleImage';

const TeamMember = ({member}) => {
  const [onLink, setOnLink] = useState(false);

  const {image, hoverImage, name, jobTitle} = member;
  const itemVariants = {
    hidden: {
      opacity: 0,
      transform: 'rotateY(180deg)',
      transition: {duration: 0.3, ease: 'easeOut'},
    },
    visible: {
      opacity: 1,
      transform: 'rotateY(0deg)',
      transition: {duration: 0.3, ease: 'easeOut'},
    },
  };
  const itemHoverVariants = {
    hidden: {
      opacity: 0,
      transform: 'rotateY(180deg)',
      transition: {duration: 0.3, ease: 'easeOut'},
    },
    visible: {
      opacity: 1,
      transform: 'rotateY(0deg)',
      transition: {duration: 0.3, ease: 'easeOut'},
    },
  };

  return (
    <div className='flex overflow-hidden w-full md:w-1/3 border-8 p-1 border-base-100 mb-3'>
      <motion.div
        className='flex flex-col cursor-pointer flex-1 transition-all duration-300 ease-in-out'
        onHoverStart={() => setOnLink(true)}
        onHoverEnd={() => setOnLink(false)}
      >
        <div className='relative overflow-hidden h-full'>
          <motion.div
            className='absolute top-0 left-0 h-full w-full'
            variants={itemHoverVariants}
            animate={onLink ? 'visible' : 'hidden'}
          >
            <SingleImage image={hoverImage} />
          </motion.div>

          <motion.div
            className='h-full'
            variants={itemVariants}
            animate={onLink ? 'hidden' : 'visible'}
          >
            <SingleImage image={image} />
          </motion.div>
        </div>

        <div className='flex flex-col items-start justify-between flex-1 py-2'>
          <h3 className='text-base-content text-lg lg:text-xl'>{name}</h3>
          <p className='text-accent text-sm font-light'>{jobTitle}</p>
        </div>
      </motion.div>
    </div>
  );
};

TeamMember.propTypes = {
  member: PropTypes.object.isRequired,
};

export default TeamMember;
