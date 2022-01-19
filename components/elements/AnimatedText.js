import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';

const AnimatedText = ({textArray}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const textArr = [
    'We are an Agency that get things done',
    'We combine insight, creativity and technology',
    'We work hard to be the best agency to work with',
  ];

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prev => {
        return prev + 1 === textArr.length ? 0 : prev + 1;
      });
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const mainVariants = {
    center: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: 1,
      },
    },
  };

  const charVariants = {
    enter: {
      opacity: 0,
      y: 0,
    },
    center: {
      opacity: 1,
      y: 15,
      transition: {
        duration: 0.03,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.h1
        className='text-4xl md:text-6xl font-bold text-center text-white max-w-xl'
        key={currentIndex}
        variants={mainVariants}
        initial='enter'
        animate='center'
        exit='exit'
      >
        {textArray[currentIndex].text.split('').map((char, index) => (
          <motion.span key={index} variants={charVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </AnimatePresence>
  );
};

export default AnimatedText;
