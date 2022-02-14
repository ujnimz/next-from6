import {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';
import Paragraph from '../../elements/Paragraph';

const TextBlock = ({paragraphs}) => {
  // Viewport animation
  const [viewRef, inView] = useInView({threshold: 0.7});
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div ref={viewRef} className='flex justify-center py-6 lg:py-10'>
      <div className='container flex flex-col items-stretch px-6 lg:px-0'>
        {paragraphs.map((paragraph, index) => (
          <Paragraph key={index} paragraph={paragraph} controls={controls} />
        ))}
      </div>
    </div>
  );
};

TextBlock.propTypes = {
  paragraphs: PropTypes.array.isRequired,
};

export default TextBlock;
