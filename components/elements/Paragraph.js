import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import {marked} from 'marked';
import DOMPurify from 'dompurify';

const Paragraph = ({text, align, controls}) => {
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

  var cleanText = DOMPurify.sanitize(marked.parse(text));

  const styleConfig = {
    left: {textAlign: 'text-left', containerWidth: 'w-full'},
    center: {textAlign: 'text-center', containerWidth: 'max-w-5xl'},
    right: {textAlign: 'text-right', containerWidth: 'w-full'},
  };

  return (
    <motion.div
      className={`flex-1 mx-auto mb-6 last:mb-0 ${styleConfig[align].containerWidth}`}
      variants={textVariants}
      initial='hidden'
      animate={controls}
    >
      <div
        className={`${styleConfig[align].textAlign} text-base-content font-light text-2xl leading-snug`}
        dangerouslySetInnerHTML={{__html: cleanText}}
      />
    </motion.div>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
};

export default Paragraph;
