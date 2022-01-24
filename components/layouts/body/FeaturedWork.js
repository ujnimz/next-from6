import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
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

const FeaturedWork = ({text, link, image, height = 100}) => {
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
    useTransform(scrollY, [350, windowHeight + scrollY.current], [60, 100]),
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

  const newTitle = text
    .replace('[', "<span class='font-bold text-primary'>")
    .replace(']', '</span>');

  const imageUrl = `${process.env.NEXT_PUBLIC_IMAGE_HOST}${image.data.attributes.url}`;

  return (
    <div>
      <motion.div
        ref={viewRef}
        className={`flex justify-center py-10 lg:py-14 bg-no-repeat bg-center bg-cover`}
        style={{backgroundImage: `url(${imageUrl})`}}
        variants={parentVariants}
        initial='hidden'
        animate={controls}
      >
        <motion.div
          className='container flex items-center'
          style={{height: height}}
          key='content'
          variants={childVariants}
        >
          <Link href={link}>
            <a className='cursor-pointer'>
              <motion.div
                className='bg-charcoal w-2/3 p-3 lg:p-10 notch-large'
                style={{y: y2}}
                initial={{y: 0}}
                onHoverStart={() => setOnLink(true)}
                onHoverEnd={() => setOnLink(false)}
              >
                <div className='mb-6'>
                  <h3
                    className='text-secondary-content font-regular text-3xl'
                    dangerouslySetInnerHTML={{__html: newTitle}}
                  />
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

FeaturedWork.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  height: PropTypes.number,
};

export default FeaturedWork;
