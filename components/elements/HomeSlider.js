import React from 'react';
import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import Bulb from '../icons/Bulb';
import Rocket from '../icons/Rocket';
import Atom from '../icons/Atom';
import CloudA from '../icons/CloudA';
import CloudB from '../icons/CloudB';
import Baloon from '../icons/Baloon';
import AnimatedText from '../elements/AnimatedText';

const textArr = [
  'We are an Agency | that get things done',
  'We combine insight, | creativity and technology',
  'We work hard to be the | best agency to work with',
];
//const textArr = ['We are'];

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide(prev => {
        return prev + 1 === textArr.length ? 0 : prev + 1;
      });
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const mainVariants = {
    hide: {
      transition: {
        staggerChildren: 3,
        staggerDirection: 1,
      },
    },
    show: {
      transition: {
        staggerChildren: 3,
        staggerDirection: -1,
      },
    },
    // exit: {
    //   transition: {
    //     staggerChildren: 3,
    //     staggerDirection: 1,
    //   },
    // },
  };

  const charVariants = {
    hide: {
      opacity: 0,
      x: 15,
      // transition: {
      //   duration: 0.5,
      //   repeat: Infinity,
      //   repeatType: 'reverse',
      //   repeatDelay: 3,
      // },
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 3,
      },
    },
    // exit: {
    //   opacity: 0,
    //   x: 15,
    //   transition: {
    //     duration: 0.5,
    //     repeat: Infinity,
    //     repeatType: 'reverse',
    //     repeatDelay: 3,
    //   },
    // },
  };

  const {scrollY} = useViewportScroll();

  const yCloudA = useTransform(scrollY, [100, 300], [0, 0]);
  const xCloudA = useTransform(scrollY, [0, 300], [-100, 800]);
  const yCloudB = useTransform(scrollY, [100, 300], [0, 0]);
  const xCloudB = useTransform(scrollY, [0, 300], [70, -800]);
  const yAtom = useTransform(scrollY, [100, 300], [20, -100]);
  const xAtom = useTransform(scrollY, [0, 300], [20, -300]);
  const yRocket = useTransform(scrollY, [0, 300], [0, -50]);
  const xRocket = useTransform(scrollY, [0, 300], [20, 200]);
  const y1 = useTransform(scrollY, [0, 300], [0, -200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -10]);
  const x1 = useTransform(scrollY, [0, 300], [0, 200]);
  //console.log(scrollYProgress);

  return (
    <AnimatePresence>
      <div className='h-screen flex justify-center items-stretch overflow-hidden'>
        <div className='flex flex-col justify-around w-full z-20'>
          <div className='flex justify-between mt-28 p-10'>
            <motion.div className='w-36 h-36' style={{y: yCloudB, x: xCloudB}}>
              <CloudB />
            </motion.div>
            <motion.div className=' w-36 h-36' style={{y: yRocket, x: xRocket}}>
              <Rocket />
            </motion.div>
            <motion.div className='w-32 h-32' style={{y: yCloudA, x: xCloudA}}>
              <CloudA />
            </motion.div>
          </div>

          <motion.div>
            <AnimatedText text={textArr[currentSlide]} />
          </motion.div>

          <div className='flex justify-around p-10'>
            <motion.div className='w-36 h-36' style={{y: y1, x: x1}}>
              <Baloon />
            </motion.div>
            <motion.div className='w-36 h-36' style={{y: y1, x: -100}}>
              <Rocket />
            </motion.div>
          </div>
        </div>
        <div className='absolute top-0 left-0 h-screen w-full bg-base-100 z-10 opacity-30'></div>
        <video
          autoPlay
          loop
          muted
          className='absolute w-auto min-w-full min-h-full max-w-none z-0 filter blur'
        >
          <source src='/video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </AnimatePresence>
  );
};

export default HomeSlider;
