import React, {useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LogoItem from '../../elements/LogoItem';

const LogoSlider = ({logos, sliderType}) => {
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
    <div ref={viewRef} className='flex justify-center bg-accent-focus'>
      <motion.div
        className='container py-10 lg:py-14'
        variants={divVariants}
        initial='hidden'
        animate={controls}
      >
        {sliderType === 'carousel' ? (
          <Carousel
            containerClass='flex justify-between w-full flex-wrap'
            itemClass='flex overflow-hidden border-8 border-accent'
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
        ) : (
          <div className='flex justify-center flex-wrap'>
            {logos.map((logo, index) => (
              <div key={index} className='w-1/6'>
                <LogoItem logo={logo} key={index} />
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default LogoSlider;
