import {useEffect} from 'react';
import PropTypes from 'prop-types';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ServiceItem from '../../elements/ServiceItem';

const ServicesSlider = ({services, spacing}) => {
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
        className={`container ${
          spacing === 'none' ? 'py-0 lg:py-0' : 'py-10 lg:py-14'
        }`}
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
          showDots={true}
          infinite={true}
          autoPlay={true}
          draggable={true}
          swipeable={true}
          ssr={true} // means to render carousel on server-side.
        >
          {services.data.map((service, index) => (
            <ServiceItem service={service} key={index} />
          ))}
        </Carousel>
      </motion.div>
    </div>
  );
};

ServicesSlider.propTypes = {
  services: PropTypes.object.isRequired,
  spacing: PropTypes.string.isRequired,
};

export default ServicesSlider;
