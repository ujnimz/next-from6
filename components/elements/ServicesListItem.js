import React, {useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const ServicesListItem = ({service}) => {
  const {title, subServices} = service.attributes;

  const subServicesList = subServices
    .split('\n')
    .map(item => item.replace(/- /g, ''));

  // Viewport animation
  const [viewRef, inView] = useInView({threshold: 0.5});
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const container = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: 'easeIn',
      },
    },
  };

  const items = {
    visible: {opacity: 1, x: 0},
    hidden: {opacity: 0, x: 50},
  };

  return (
    <div
      ref={viewRef}
      className='flex overflow-hidden w-full md:w-1/2 lg:w-1/3 border-8 px-2 border-base-100 mb-4'
    >
      <div className='flex flex-col flex-1 transition-all duration-300 ease-in-out'>
        <motion.div
          initial='hidden'
          animate={controls}
          variants={items}
          className='flex flex-col items-start justify-between pr-4'
        >
          <h3 className='text-tangerine text-xl lg:text-2xl mb-4'>{title}</h3>
          <div className='h-px w-full bg-accent' />
        </motion.div>

        <div className='py-4'>
          <motion.ul
            variants={container}
            initial='hidden'
            animate={controls}
            className='list-inside list-disc'
          >
            {subServicesList.map((item, index) => (
              <motion.li
                className='list-item font-light text-xl leading-relaxed '
                key={index}
                variants={items}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesListItem;
