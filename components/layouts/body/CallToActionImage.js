import {useEffect} from 'react';
import PropTypes from 'prop-types';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import From6Button from '../../elements/From6Button';

const CallToActionImage = ({title, bgImage, buttonText, buttonLink}) => {
  // Viewport animation
  const [viewRef, inView] = useInView({threshold: 0.7});

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
  };

  const newTitle = title
    .replace('[', "<span class='font-bold text-primary'>")
    .replace(']', '</span>');

  return (
    <div
      ref={viewRef}
      className={`flex justify-center bg-primary bg-cover bg-center bg-no-repeat`}
      style={{backgroundImage: `url(${bgImage})`}}
    >
      <div className='container flex justify-around items-center flex-wrap py-10 lg:py-14'>
        <div className='flex flex-col items-center justify-between w-full md:w-2/4 p-10'>
          <motion.div
            className='mb-10'
            variants={textVariants}
            initial='hidden'
            animate={controls}
          >
            <h2
              className='text-4xl font-light text-charcole text-center max-w-xl'
              dangerouslySetInnerHTML={{__html: newTitle}}
            />
          </motion.div>
          <motion.div
            className='w-72'
            variants={textVariants}
            initial='hidden'
            animate={controls}
          >
            <From6Button
              solid
              title={buttonText}
              textColorClass='base-400'
              bgColorClass='base-100'
              buttonLink={buttonLink}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

CallToActionImage.propTypes = {
  title: PropTypes.string.isRequired,
  bgImage: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
};

export default CallToActionImage;
