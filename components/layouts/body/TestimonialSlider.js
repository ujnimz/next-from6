import {useEffect} from 'react';
import PropTypes from 'prop-types';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestimonialItem from '../../elements/TestimonialItem';

function LogoSlider({testimonials}) {
  const {data} = testimonials;
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
      items: 1,
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 1,
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 1,
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
          containerClass='flex'
          itemClass='flex justify-center items-stretch mb-3'
          responsive={responsive}
          autoPlaySpeed={4000}
          arrows={false}
          showDots
          infinite
          autoPlay
        >
          {data.map((testimonial, index) => (
            <TestimonialItem testimonial={testimonial} key={index} />
          ))}
        </Carousel>
      </motion.div>
    </div>
  );
}

LogoSlider.propTypes = {
  testimonials: PropTypes.object.isRequired,
};

export default LogoSlider;
