import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import {marked} from 'marked';
import DOMPurify from 'dompurify';

const Paragraph = ({paragraph, controls}) => {
  const {text, align, textType} = paragraph;
  console.log(textType);
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

  const getListItems = text => {
    return text.split('\n').map(item => item.replace(/- /g, ''));
  };

  const getParagraph = text => {
    return DOMPurify.sanitize(marked.parse(text));
  };

  const ListTag = textType === 'bulletList' ? `ol` : `ol`;

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
      {textType === 'paragraph' ? (
        <div
          className={`${styleConfig[align].textAlign} text-base-content font-light text-2xl leading-snug`}
          dangerouslySetInnerHTML={{__html: getParagraph(text)}}
        />
      ) : (
        <ListTag
          className={
            textType === 'bulletList'
              ? `list-inside list-disc`
              : `list-inside list-decimal`
          }
        >
          {getListItems(text).map((item, index) => (
            <li
              className='list-item font-light text-2xl leading-relaxed '
              key={index}
            >
              {item}
            </li>
          ))}
        </ListTag>
      )}
    </motion.div>
  );
};

Paragraph.propTypes = {
  paragraph: PropTypes.object.isRequired,
  controls: PropTypes.object.isRequired,
};

export default Paragraph;
