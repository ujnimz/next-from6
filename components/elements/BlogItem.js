import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import NextArrow from '../icons/NextArrow';
import SingleImage from './SingleImage';

const BlogItem = ({post}) => {
  const [onLink, setOnLink] = useState(false);
  const {title, thumbnail, date, slug} = post.attributes;

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
    <Link href={`/blog/${slug}`}>
      <motion.div
        ref={viewRef}
        variants={divVariants}
        initial='hidden'
        animate={controls}
        className='flex overflow-hidden w-full md:w-1/3 border-8 p-1 border-base-100 mb-3'
      >
        <motion.a
          className='flex flex-col cursor-pointer bg-base-200 hover:bg-primary flex-1 notch-large transition-all duration-300 ease-in-out'
          onHoverStart={() => setOnLink(true)}
          onHoverEnd={() => setOnLink(false)}
        >
          <div className='overflow-hidden'>
            <motion.div
              animate={onLink ? {scale: 1.1} : {scale: 1}}
              transition={{duration: 0.5, ease: 'easeInOut'}}
            >
              <SingleImage image={thumbnail} />
            </motion.div>
          </div>

          <div className='flex items-stretch justify-between p-4 flex-1'>
            <div className='flex flex-col justify-between w-5/6'>
              <h3 className='text-base-content text-lg leading-tight mb-2'>
                {title}
              </h3>
              <span className='text-base-content text-sm mb-2'>{date}</span>
              <span className='text-base-content'>Read More</span>
            </div>
            <motion.div
              className='flex w-5 mr-3'
              animate={
                onLink
                  ? {
                      x: 10,
                      transition: {duration: 0.5, ease: 'easeInOut'},
                    }
                  : {
                      x: 0,
                      transition: {duration: 0.5, ease: 'easeInOut'},
                    }
              }
            >
              <NextArrow
                colorClass={onLink ? 'text-primary-content' : 'text-primary'}
              />
            </motion.div>
          </div>
        </motion.a>
      </motion.div>
    </Link>
  );
};

export default BlogItem;
