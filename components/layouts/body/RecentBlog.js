import React, {useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import BlogItem from '../../elements/BlogItem';

const posts = [
  {
    id: 0,
    image:
      '/images/posts/4-Reasons-you-need-to-advertise-on-TikTok-1024x683.jpeg',
    title: '4 Reasons you need to Advertise on TikTok',
    date: '23/06/2020',
    link: '/',
  },
  {
    id: 1,
    image:
      '/images/posts/digital-transformation-due-to-global-viral-outbreak-1024x683.jpeg',
    title: 'Digital transformation due to global viral outbreak',
    date: '23/06/2020',
    link: '/',
  },
  {
    id: 2,
    image: '/images/posts/From6_April_Corona_Blog_Post-1024x683.jpeg',
    title: 'What can your brand do to survive the quarantine?',
    date: '23/06/2020',
    link: '/',
  },
];

const RecentBlog = () => {
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
        {posts.map((post, index) => (
          <BlogItem post={post} key={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default RecentBlog;
