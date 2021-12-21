import React, {useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import ServicesListItem from '../../elements/ServicesListItem';

const servicesList = [
  {
    id: 0,
    title: 'Brand & Design',
    link: '/',
    subList: [
      {
        id: 0,
        title: 'Strategy',
      },
      {
        id: 1,
        title: 'Research & Insights',
      },
      {
        id: 2,
        title: 'Identity Design',
      },
      {
        id: 3,
        title: 'Implementation',
      },
      {
        id: 4,
        title: 'Brand Communication',
      },
      {
        id: 5,
        title: 'Employee Engagement',
      },
      {
        id: 6,
        title: 'Workshops',
      },
      {
        id: 7,
        title: 'Brand Architecture',
      },
      {
        id: 8,
        title: 'Brand Guidelines',
      },
      {
        id: 9,
        title: 'Packaging Design',
      },
    ],
  },
  {
    id: 1,
    title: 'Digital & Social Media',
    link: '/',
    subList: [
      {
        id: 0,
        title: 'Strategy',
      },
      {
        id: 1,
        title: 'Research & Insights',
      },
      {
        id: 2,
        title: 'Identity Design',
      },
      {
        id: 3,
        title: 'Implementation',
      },
      {
        id: 4,
        title: 'Brand Communication',
      },
      {
        id: 5,
        title: 'Employee Engagement',
      },
      {
        id: 6,
        title: 'Workshops',
      },
      {
        id: 7,
        title: 'Brand Architecture',
      },
      {
        id: 8,
        title: 'Brand Guidelines',
      },
      {
        id: 9,
        title: 'Packaging Design',
      },
    ],
  },
  {
    id: 2,
    title: 'Integrated Communications',
    link: '/',
    subList: [
      {
        id: 0,
        title: 'Strategy',
      },
      {
        id: 1,
        title: 'Research & Insights',
      },
      {
        id: 2,
        title: 'Identity Design',
      },
      {
        id: 3,
        title: 'Implementation',
      },
      {
        id: 4,
        title: 'Brand Communication',
      },
      {
        id: 5,
        title: 'Employee Engagement',
      },
      {
        id: 6,
        title: 'Workshops',
      },
      {
        id: 7,
        title: 'Brand Architecture',
      },
      {
        id: 8,
        title: 'Brand Guidelines',
      },
      {
        id: 9,
        title: 'Packaging Design',
      },
    ],
  },
  {
    id: 3,
    title: 'Public Relations',
    link: '/',
    subList: [
      {
        id: 0,
        title: 'Strategy',
      },
      {
        id: 1,
        title: 'Research & Insights',
      },
      {
        id: 2,
        title: 'Identity Design',
      },
      {
        id: 3,
        title: 'Implementation',
      },
      {
        id: 4,
        title: 'Brand Communication',
      },
      {
        id: 5,
        title: 'Employee Engagement',
      },
      {
        id: 6,
        title: 'Workshops',
      },
      {
        id: 7,
        title: 'Brand Architecture',
      },
      {
        id: 8,
        title: 'Brand Guidelines',
      },
      {
        id: 9,
        title: 'Packaging Design',
      },
    ],
  },
  {
    id: 4,
    title: 'Website & App Design',
    link: '/',
    subList: [
      {
        id: 0,
        title: 'Strategy',
      },
      {
        id: 1,
        title: 'Research & Insights',
      },
      {
        id: 2,
        title: 'Identity Design',
      },
      {
        id: 3,
        title: 'Implementation',
      },
      {
        id: 4,
        title: 'Brand Communication',
      },
      {
        id: 5,
        title: 'Employee Engagement',
      },
      {
        id: 6,
        title: 'Workshops',
      },
      {
        id: 7,
        title: 'Brand Architecture',
      },
      {
        id: 8,
        title: 'Brand Guidelines',
      },
      {
        id: 9,
        title: 'Packaging Design',
      },
    ],
  },
];

const ServicesList = () => {
  // Viewport animation
  const [viewRef, inView] = useInView({threshold: 0.5});
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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
    <div ref={viewRef} className='flex justify-center py-6 lg:py-10'>
      <motion.div
        className='container flex justify-center flex-wrap px-6 lg:px-0'
        variants={divVariants}
        initial='hidden'
        animate={controls}
      >
        {servicesList.map((service, index) => (
          <ServicesListItem service={service} key={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesList;
