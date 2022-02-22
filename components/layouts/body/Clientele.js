import {useEffect} from 'react';
import PropTypes from 'prop-types';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LogoItem from '../../elements/LogoItem';

const Clientele = ({clientele, sliderType = 'carousel'}) => {
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
        {sliderType === 'carousel' ? (
          <Carousel
            containerClass='flex justify-between w-full flex-wrap'
            itemClass='flex overflow-hidden border-8 border-transparent'
            responsive={responsive}
            autoPlaySpeed={4000}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            arrows={false}
            showDots={false}
            infinite={true}
            autoPlay={true}
            draggable={true}
            swipeable={true}
          >
            {clientele.map((logo, index) => (
              <LogoItem logo={logo} key={index} />
            ))}
          </Carousel>
        ) : (
          <div className='flex justify-center flex-wrap'>
            {clientele.map((logo, index) => (
              <div key={index} className='w-1/3 md:w-1/4 lg:w-1/6'>
                <LogoItem logo={logo} key={index} />
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

Clientele.propTypes = {
  clientele: PropTypes.array.isRequired,
  sliderType: PropTypes.string,
};

export default Clientele;
