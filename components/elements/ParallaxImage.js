import React, {useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import {useViewportScroll, motion, useTransform} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

function ParallaxImage({imageUrl, height, rtl}) {
  const {scrollY} = useViewportScroll();
  const y2 = useTransform(scrollY, [0, 1500], [0, rtl ? 250 : -250]);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: false,
  });

  return (
    <div
      style={{height: height}}
      className='flex justify-center items-center overflow-hidden my-6 lg:my-10'
    >
      <div className='bg-accent' ref={ref}>
        <motion.div className='w-full block' style={{y: 0, x: y2, width: 2500}}>
          <Image
            //loader={myLoader}
            className='block'
            src={imageUrl}
            alt='ALT tag'
            layout='responsive'
            height={660}
            width={1920}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default ParallaxImage;
