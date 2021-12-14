import React, {useEffect, useState} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ServiceItem from '../../elements/ServiceItem';

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

const ServicesSlider = () => {
  // Viewport animation
  const [viewRef, inView] = useInView({threshold: 0.5});
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {max: 4000, min: 3000},
      items: 4,
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 4,
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 2,
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1,
    },
  };

  const divVariants = {
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

  return (
    <div ref={viewRef} className='flex justify-center'>
      <motion.div
        className='container py-10 lg:py-14'
        variants={divVariants}
        initial='hidden'
        animate={controls}
      >
        <Carousel
          containerClass='flex justify-between w-full flex-wrap'
          itemClass='flex overflow-hidden border-8 p-1 border-base-100 mb-10'
          responsive={responsive}
          autoPlaySpeed={4000}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          arrows={false}
          showDots
          infinite
          autoPlay
        >
          {services.map((service, index) => (
            <ServiceItem service={service} key={index} />
          ))}
        </Carousel>
      </motion.div>
    </div>
  );
};

export default ServicesSlider;
