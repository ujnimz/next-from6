import React, {useEffect, useState} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestimonialItem from '../../elements/TestimonialItem';

const testimonials = [
  {
    id: 0,
    avatar: '/images/testimonials/testimonial-image-1.jpeg',
    text: 'For 8 years, From6 have been our trusted partners, they’re a part of the team.',
    author: 'James Williamson',
    title: 'Group Sales & Marketing Director',
    company: 'BFC',
  },
  {
    id: 1,
    avatar: '/images/testimonials/testimonial-image-1.jpeg',
    text: 'When we embarked on our journey of transformation, From6’s “inside-out” approach was key in shaping and communicating our values, purpose, mission and brand promise across all internal and external touch points.',
    author: 'Hisham Abu Alfateh',
    title: 'Manager – Marketing and Corporate Communications',
    company: 'National Bank of Bahrain',
  },
  {
    id: 2,
    avatar: '/images/testimonials/testimonial-image-1.jpeg',
    text: 'From6 are more than an agency, they are in the truest sense of the word partners. At every step of the project they were there for us.',
    author: 'Ben Leon',
    title: 'Interim COO',
    company: 'SalamAir',
  },
  {
    id: 3,
    avatar: '/images/testimonials/testimonial-image-1.jpeg',
    text: 'Collaborative and supportive are fundamental values in any relationship. It’s a pleasure to work with a team who lives by them.',
    author: 'Clotilde Malauzat',
    title: 'Director of Enrollment and Marketing Communications',
    company: 'AUBH',
  },
  {
    id: 4,
    avatar: '/images/testimonials/testimonial-image-1.jpeg',
    text: 'They were given a task and they made it happen. They got the core of who we wanted to be quickly and they brought it to life.',
    author: 'Hasan Jarrar',
    title: 'CEO',
    company: 'BISB',
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
          {testimonials.map((testimonial, index) => (
            <TestimonialItem testimonial={testimonial} key={index} />
          ))}
        </Carousel>
      </motion.div>
    </div>
  );
}

export default LogoSlider;
