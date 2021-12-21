import React, {useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const Heading = ({title}) => {
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
    <div ref={viewRef} className='flex justify-center py-6 lg:py-10'>
      <div className='container flex justify-center px-6 lg:px-0'>
        <motion.h2
          className='text-4xl md:text-5xl font-light text-base-content text-center max-w-3xl'
          dangerouslySetInnerHTML={{__html: newTitle}}
          variants={textVariants}
          initial='hidden'
          animate={controls}
        />
      </div>
    </div>
  );
};

export default Heading;
