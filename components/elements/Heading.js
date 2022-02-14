import PropTypes from 'prop-types';
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
    h1: {fontSize: 'text-4xl md:text-5xl'},
    h2: {fontSize: 'text-3xl md:text-4xl'},
    h3: {fontSize: 'text-3xl md:text-3xl'},
    h4: {fontSize: 'text-3xl md:text-2xl'},
    h5: {fontSize: 'text-3xl md:text-xl'},
    h6: {fontSize: 'text-3xl md:text-lg'},
  };

  return (
    <motion.div
      className={`flex-1 ${styleConfig[align].containerWidth}`}
      variants={textVariants}
      initial='hidden'
      animate={controls}
    >
      <HeadingTag
        className={`${styleConfig[tag].fontSize} font-medium leading-none md:leading-tight ${styleConfig[align].textAlign} ${textColor}`}
      >
        <span dangerouslySetInnerHTML={{__html: newTitle}} />
      </HeadingTag>
    </motion.div>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  spanColor: PropTypes.string.isRequired,
  controls: PropTypes.object.isRequired,
};

export default Heading;
