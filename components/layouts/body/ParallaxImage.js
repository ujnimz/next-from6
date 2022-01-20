import React from 'react';
import {useViewportScroll, motion, useTransform} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import useWindowDimensions from '../../../themes/useWindowDimensions';
import SingleImage from '../../elements/SingleImage';

function ParallaxImage({image, animate, blockHeight}) {
  const {width} = useWindowDimensions();

  const {scrollY} = useViewportScroll();
  const y2 =
    animate === 'left' || animate === 'right'
      ? useTransform(scrollY, [0, 1500], [0, animate === 'right' ? 250 : 250])
      : 0;

  const x2 =
    animate === 'up' || animate === 'down'
      ? useTransform(scrollY, [0, 1500], [0, animate === 'down' ? 250 : -250])
      : 0;

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      style={{height: width / 2 - 250}}
      className='flex justify-center items-center overflow-hidden'
    >
      <div className='bg-accent flex justify-center'>
        <motion.div
          //className='w-full'
          style={{y: x2, x: y2, width: width + 400}}
        >
          <SingleImage image={image} />
        </motion.div>
      </div>
    </div>
  );
}

export default ParallaxImage;
