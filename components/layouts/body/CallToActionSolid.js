import React, {useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import Magnifier from '../../icons/Magnifier';
import Heart from '../../icons/Heart';
import From6Button from '../../elements/From6Button';

const CallToActionSolid = ({title, buttonText, link}) => {
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
    .replace('[', "<span class='font-bold text-base-100'>")
    .replace(']', '</span>');

  return (
    <div ref={viewRef} className='flex justify-center bg-tangerine'>
      <div className='container flex justify-around items-center flex-wrap py-10 lg:py-14'>
        <div className='flex justify-center w-full md:w-1/4'>
          <div className='w-52 h-52 opacity-50 p-3'>
            <Magnifier colorClass='primary-content' />
          </div>
        </div>
        <div className='flex flex-col items-center justify-between w-full md:w-2/4 py-5'>
          <motion.div
            className='mb-10'
            variants={textVariants}
            initial='hidden'
            animate={controls}
          >
            <h2
              className='text-4xl font-light text-charcole text-center max-w-2xl'
              dangerouslySetInnerHTML={{__html: newTitle}}
            />
          </motion.div>
          {buttonText !== '' && buttonText ? (
            <motion.div
              className='w-72'
              variants={textVariants}
              initial='hidden'
              animate={controls}
            >
              <From6Button
                title={buttonText}
                textColorClass='base-300'
                borderColorClass='primary-content'
                iconColorClass='base-100'
              />
            </motion.div>
          ) : null}
        </div>

        <div className='flex justify-center w-full md:w-1/4'>
          <div className='w-52 h-52 opacity-50 p-3'>
            <Heart colorClass='primary-content' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSolid;
