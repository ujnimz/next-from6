import React from 'react';
import {motion} from 'framer-motion';

const Heading = ({title, tag, textColor, spanColor, controls}) => {
  const textVariants = {
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

  const newTitle = title
    .replace('[', `<span class='font-bold ${spanColor}'>`)
    .replace(']', '</span>');

  const HeadingTag = `${tag}`;

  return (
    <motion.div
      className='text-center max-w-5xl'
      variants={textVariants}
      initial='hidden'
      animate={controls}
    >
      <HeadingTag
        className={`text-4xl md:text-5xl font-light text-center leading-none md:leading-tight ${textColor}`}
      >
        <span dangerouslySetInnerHTML={{__html: newTitle}} />
      </HeadingTag>
    </motion.div>
  );
};

export default Heading;
