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
    image: '/images/digital-and-social@2x.jpeg',
    title: 'Digital & Social Media',
    link: '/',
  },
  {
    id: 2,
    image: '/images/integrated-coms@2x.jpeg',
    title: 'Integrated Communications',
    link: '/',
  },
  {
    id: 3,
    image: '/images/web-and-app@2x.jpeg',
    title: 'Website & App Design',
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

  return (
    <div ref={viewRef} className='flex justify-center py-10 lg:py-14'>
      <motion.div
        className='container flex justify-between flex-wrap'
        variants={parentVariants}
        initial='hidden'
        animate={controls}
      >
        {services.map(service => (
          <ServiceBlock service={service} key={service.id} />
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesGrid;
