import React, {useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import TeamItem from '../../elements/TeamItem';

const team = [
  {
    id: 0,
    image: '/images/team/team-dummy.jpeg',
    imageHover: '/images/team/team-dummy-hover.jpeg',
    name: 'Adnan Al Arrayed',
    title: 'Managing Partner',
  },
  {
    id: 0,
    image: '/images/team/team-dummy.jpeg',
    imageHover: '/images/team/team-dummy-hover.jpeg',
    name: 'Samer Jamus',
    title: 'Managing Partner',
  },
  {
    id: 2,
    image: '/images/team/team-dummy.jpeg',
    imageHover: '/images/team/team-dummy-hover.jpeg',
    name: 'Bashar Daas',
    title: 'Partner, Creative Director',
  },
  {
    id: 3,
    image: '/images/team/team-dummy.jpeg',
    imageHover: '/images/team/team-dummy-hover.jpeg',
    name: 'Mohammed Elsum',
    title: 'Partner, Account Director',
  },
  {
    id: 4,
    image: '/images/team/team-dummy.jpeg',
    imageHover: '/images/team/team-dummy-hover.jpeg',
    name: 'Tom Romanski',
    title: 'Partner',
  },
  {
    id: 5,
    image: '/images/team/team-dummy.jpeg',
    imageHover: '/images/team/team-dummy-hover.jpeg',
    name: 'Chris Bell',
    title: 'Associate Creative Director',
  },
];

const Team = () => {
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
    <div ref={viewRef} className='flex justify-center py-10 lg:py-14'>
      <motion.div
        className='container flex justify-between flex-wrap'
        variants={divVariants}
        initial='hidden'
        animate={controls}
      >
        {team.map((member, index) => (
          <TeamItem member={member} key={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Team;
