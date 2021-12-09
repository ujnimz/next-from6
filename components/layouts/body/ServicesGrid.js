import React, {useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import ServiceBlock from '../../elements/ServiceBlock';

const services = [
  {
    id: 0,
    image: '/images/brand-and-design@2x.jpeg',
    title: 'Brand & Design',
    link: '/',
  },
  {
    id: 1,
    image: '/images/brand-and-design@2x.jpeg',
    title: 'Brand & Design',
    link: '/',
  },
  {
    id: 2,
    image: '/images/brand-and-design@2x.jpeg',
    title: 'Brand & Design',
    link: '/',
  },
  {
    id: 3,
    image: '/images/brand-and-design@2x.jpeg',
    title: 'Brand & Design',
    link: '/',
  },
];

const ServicesGrid = () => {
  // Viewport animation
  const [viewRef, inView] = useInView({threshold: 0.5});
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const parentVariants = {
    hidden: {
      transition: {
        staggerChildren: 0.3,
        staggerDirection: -1,
      },
    },
    visible: {
      transition: {
        staggerChildren: 0.3,
        staggerDirection: 1,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
  };

  return (
    <div ref={viewRef} className='flex justify-center overflow-hidden'>
      <motion.div
        className='container flex justify-between items-stretch px-6 lg:px-0 py-10 lg:py-14 space-x-0 md:space-x-4 space-y-8 md:space-y-0 flex-wrap md:flex-nowrap'
        variants={parentVariants}
        initial='hidden'
        animate={controls}
      >
        {services.map(service => (
          <motion.div
            className='w-full md:w-1/2 lg:w-1/4'
            key={service.id}
            variants={childVariants}
          >
            <ServiceBlock service={service} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesGrid;
