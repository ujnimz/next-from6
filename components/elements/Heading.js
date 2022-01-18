import React from 'react';
import {motion} from 'framer-motion';

const Heading = ({title, tag, align, textColor, spanColor, controls}) => {
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

  const styleConfig = {
    left: {textAlign: 'text-left', containerWidth: 'max-w-full'},
    center: {textAlign: 'text-center', containerWidth: 'max-w-5xl'},
    right: {textAlign: 'text-right', containerWidth: 'max-w-full'},
  };

  return (
    <motion.div
      className={`flex-1 ${styleConfig[align].containerWidth}`}
      variants={textVariants}
      initial='hidden'
      animate={controls}
    >
      <HeadingTag
        className={`text-4xl md:text-5xl font-light leading-none md:leading-tight ${styleConfig[align].textAlign} ${textColor}`}
      >
        <span dangerouslySetInnerHTML={{__html: newTitle}} />
      </HeadingTag>
    </motion.div>
  );
};

export default Heading;
