import React, {useEffect, useState} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LogoItem from '../../elements/LogoItem';

const logos = [
  {
    id: 0,
    image: '/images/logos/aubh-logo.png',
    title: 'AUBH',
    link: '/',
  },
  {
    id: 1,
    image: '/images/logos/bfc-logo.png',
    title: 'BFC',
    link: '/',
  },
  {
    id: 2,
    image: '/images/logos/bisb-logo.png',
    title: 'BisB',
    link: '/',
  },
  {
    id: 3,
    image: '/images/logos/edb-logo.png',
    title: 'EDB',
    link: '/',
  },
  {
    id: 4,
    image: '/images/logos/gib-logo.png',
    title: 'EDB',
    link: '/',
  },
  {
    id: 5,
    image: '/images/logos/ila-logo.png',
    title: 'EDB',
    link: '/',
  },
  {
    id: 6,
    image: '/images/logos/kooheji-logo.png',
    title: 'EDB',
    link: '/',
  },
  {
    id: 7,
    image: '/images/logos/mumtalakat-logo.png',
    title: 'EDB',
    link: '/',
  },
  {
    id: 8,
    image: '/images/logos/nbb-logo.png',
    title: 'EDB',
    link: '/',
  },
];

function LogoSlider() {
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
      items: 6,
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 5,
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 4,
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 2,
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
          itemClass='flex overflow-hidden border-8 border-base-100'
          responsive={responsive}
          autoPlaySpeed={2000}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          arrows={false}
          showDots={false}
          infinite
          autoPlay
        >
          {logos.map((logo, index) => (
            <LogoItem logo={logo} key={index} />
          ))}
        </Carousel>
      </motion.div>
    </div>
  );
}

export default LogoSlider;
