import React, {useEffect, useState} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {PietileCarousel} from 'pietile-carousel';
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

const ServicesSlider = () => {
  const [showCount, setShowCount] = useState(null);
  // Viewport animation
  const [viewRef, inView] = useInView({threshold: 0.5});
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const {innerWidth} = window;
    if (innerWidth > 1024) {
      setShowCount(4);
    } else if (innerWidth > 768) {
      setShowCount(2);
    } else {
      setShowCount(1);
    }

    return () => {
      setShowCount(null);
    };
  }, []);

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

  const carouselStyle = {
    width: 150,
    height: 100,
  };

  const itemStyle = {
    width: 200,
    height: 100,
  };

  return (
    <div className='flex justify-center'>
      <div className='container py-10 lg:py-14'>
        <PietileCarousel
          className='flex'
          count={showCount}
          margin={15}
          //autoplayInterval={0}
        >
          {services.map(service => (
            <div
              className='bg-accent px-6 lg:px-0'
              key={service.id}
              //variants={childVariants}
            >
              <ServiceBlock service={service} />
            </div>
          ))}
        </PietileCarousel>
        <div>{showCount}</div>
      </div>
    </div>
  );
};

export default ServicesSlider;
