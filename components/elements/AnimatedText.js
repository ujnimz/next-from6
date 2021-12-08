import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';

const AnimatedText = ({isVisible, text}) => {
  const [myText, setMyText] = React.useState('');

  const items = {
    hidden: {
      y: '200%',
      //opacity: 0,
      transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85},
    },
    visible: {
      y: 0,
      //opacity: 1,
      transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75},
    },
  };

  const mainVariants = {
    enter: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: 1,
      },
    },
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
    },
  };

  React.useEffect(() => {
    setMyText(text);
    return () => {
      setMyText('');
    };
  }, [text]);

  return (
    <>
      <motion.h1
        className='text-6xl font-bold text-center text-base-400'
        key={myText}
        variants={mainVariants}
        initial='enter'
        animate='center'
      >
        {myText.split('').map((char, index) =>
          char === '|' ? (
            <br key={index} />
          ) : (
            <motion.span key={index} variants={charVariants}>
              {char}
            </motion.span>
          ),
        )}
      </motion.h1>
    </>
  );
};

export default AnimatedText;
