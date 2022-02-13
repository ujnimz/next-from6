import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useViewportScroll, motion, useTransform} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import useWindowDimensions from '../../../themes/useWindowDimensions';
import SingleImage from '../../elements/SingleImage';

const ParallaxImage = ({image, animate}) => {
  const {width, height} = useWindowDimensions();

  const [vpEnd, setVpEnd] = useState(height);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  const {scrollY} = useViewportScroll();
  const y2 =
    animate === 'left' || animate === 'right'
      ? useTransform(
          scrollY,
          [0, vpEnd],
          [
            animate === 'right' ? -(width / 10) : width / 10,
            animate === 'right' ? width / 10 : -(width / 10),
          ],
        )
      : 0;

  const x2 =
    animate === 'up' || animate === 'down'
      ? useTransform(
          scrollY,
          [0, vpEnd],
          [animate === 'down' ? -100 : 100, animate === 'down' ? 100 : -100],
        )
      : 0;

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
      className='flex justify-center items-center overflow-hidden w-full my-10 lg:my-14'
      style={
        animate === 'none'
          ? {}
          : {
              height: heightRatio * width,
            }
      }
    >
      <div
        className={animate === 'none' ? 'container mx-auto notch-large' : ''}
      >
        <motion.div
          style={
            animate === 'none'
              ? {}
              : {
                  y: x2,
                  x: y2,
                  width: width + 400,
                  height: heightRatio * (width + 400),
                }
          }
        >
          <SingleImage image={image} />
        </motion.div>
      </div>
    </div>
  );
};

ParallaxImage.propTypes = {
  image: PropTypes.object.isRequired,
  animate: PropTypes.string.isRequired,
};

export default ParallaxImage;
