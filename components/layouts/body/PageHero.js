import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useViewportScroll, motion, useTransform} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import useWindowDimensions from '../../../themes/useWindowDimensions';
import SingleImage from '../../elements/SingleImage';

const PageHero = ({image}) => {
  const {width, height} = useWindowDimensions();

  const [vpEnd, setVpEnd] = useState(height);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  const {scrollY} = useViewportScroll();

  const x2 = useTransform(scrollY, [0, vpEnd], [-100, 100]);
  useEffect(() => {
    if (entry) {
      setVpEnd(entry.boundingClientRect.bottom + heightRatio * width);
    }

    return () => {
      setVpEnd(0);
    };
  }, [entry]);

  const heightRatio =
    image.data.attributes.height / image.data.attributes.width;
  const widthRatio = image.data.attributes.width / image.data.attributes.height;

  return (
    <div
      ref={ref}
      className='flex justify-center items-center overflow-hidden w-full'
      style={{
        height: heightRatio * width,
      }}
    >
      <div>
        <motion.div
          style={{
            y: x2,
            width: width + 400,
            height: heightRatio * (width + 200),
          }}
        >
          <SingleImage image={image} />
        </motion.div>
      </div>
    </div>
  );
};

PageHero.propTypes = {
  image: PropTypes.object.isRequired,
};

export default PageHero;
