import PropTypes from 'prop-types';
import {marked} from 'marked';
import DOMPurify from 'dompurify';

const Paragraph = ({text, align}) => {
  var cleanText = DOMPurify.sanitize(marked.parse(text));

  const styleConfig = {
    left: {textAlign: 'text-left', containerWidth: 'max-w-full'},
    center: {textAlign: 'text-center', containerWidth: 'max-w-5xl'},
    right: {textAlign: 'text-right', containerWidth: 'max-w-full'},
  };

  return (
    <div
      className={`flex-1 mb-6 last:mb-0 ${styleConfig[align].containerWidth}`}
    >
      <div
        className={`${styleConfig[align].textAlign} text-base-content font-light text-2xl leading-snug`}
        dangerouslySetInnerHTML={{__html: cleanText}}
      />
    </div>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
};

export default Paragraph;
