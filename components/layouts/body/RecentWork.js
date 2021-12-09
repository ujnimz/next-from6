import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
  useAnimation,
} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import NextArrow from '../../icons/NextArrow';

const rand = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (+max - +min)) + +min;
};

const RecentWork = () => {
  // Viewport animation
  const [viewRef, inView] = useInView({threshold: 0.5});
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Parralax animation
  const [windowHeight, setWindowHeight] = useState(null);
  const [onLink, setOnLink] = useState(false);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    return () => {
      setWindowHeight(null);
    };
  }, []);

  const {scrollY} = useViewportScroll();

  const springConfig = {
    damping: 10,
    stiffness: 50,
    mass: rand(1, 2),
  };

  const y2 = useSpring(
    useTransform(
      scrollY,
      [windowHeight - 200, windowHeight + scrollY.current],
      [60, 100],
    ),
    springConfig,
  );

  const parentVariants = {
    hidden: {
      transition: {
        staggerChildren: 0.5,
        staggerDirection: -1,
      },
    },
    visible: {
      transition: {
        staggerChildren: 0.5,
        staggerDirection: 1,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
  };

  const linkVariants = {
    nowOut: {
      x: 0,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
    nowOn: {
      x: 15,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
  };

  return (
    <div ref={viewRef} className='flex justify-center overflow-hidden'>
      <motion.div
        className='container flex px-6 lg:px-0 py-10 lg:py-14 flex flex-wrap'
        variants={parentVariants}
        initial='hidden'
        animate={controls}
      >
        <motion.div
          className='w-full lg:w-2/3 lg-notch'
          key='left'
          variants={childVariants}
        >
          <Image
            //loader={myLoader}
            src='/images/works-slider.jpeg'
            alt='Picture of the author'
            layout='responsive'
            height={660}
            width={1462}
          />
        </motion.div>

        <motion.div
          className='w-full lg:w-1/3'
          key='right'
          variants={childVariants}
        >
          <Link href='/'>
            <a className='cursor-pointer'>
              <motion.div
                className='bg-secondary p-3 lg:p-10 notch hidden lg:block'
                style={{y: y2, x: -150}}
                initial={{y: 200, x: -150}}
                onHoverStart={() => setOnLink(true)}
                onHoverEnd={() => setOnLink(false)}
              >
                <div className='mb-6'>
                  <h3 className='text-secondary-content font-regular text-2xl'>
                    Innovative UI/UX for{' '}
                    <span className='text-primary'>mobile payments app</span>
                  </h3>
                </div>

                <div className='flex items-center'>
                  <span className='text-secondary-content font-regular text-sm '>
                    Find out more
                  </span>

                  <motion.div
                    className='w-5 h-5 ml-5'
                    variants={linkVariants}
                    animate={onLink ? 'nowOn' : 'nowOut'}
                  >
                    <NextArrow />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div className='bg-secondary p-3 lg:p-10 notch block lg:hidden'>
                <div className='mb-6'>
                  <h3 className='text-secondary-content font-regular text-xl'>
                    Innovative UI/UX for{' '}
                    <span className='text-primary'>mobile payments app</span>
                  </h3>
                </div>

                <div className='flex items-center'>
                  <span className='text-secondary-content font-regular text-sm '>
                    Find out more
                  </span>

                  <motion.div
                    className='w-5 h-5 ml-5'
                    variants={linkVariants}
                    animate={onLink ? 'nowOn' : 'nowOut'}
                  >
                    <NextArrow />
                  </motion.div>
                </div>
              </motion.div>
            </a>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RecentWork;
