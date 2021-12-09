import React, {useState, useEffect, useRef} from 'react';
import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
} from 'framer-motion';

import NET from 'vanta/dist/vanta.net.min';
import Bulb from '../../icons/Bulb';
import Rocket from '../../icons/Rocket';
import Atom from '../../icons/Atom';
import CloudA from '../../icons/CloudA';
import CloudB from '../../icons/CloudB';
import Baloon from '../../icons/Baloon';
import AnimatedText from '../../elements/AnimatedText';

const HomeSlider = () => {
  const [windowHeight, setWindowHeight] = useState(null);
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    return () => {
      setWindowHeight(null);
    };
  }, []);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          alpha: true,
          el: myRef.current,
          color: 0xff9e16,
          backgroundColor: 0x24282a,
          scale: 1.0,
          scaleMobile: 1.0,
          spacing: 20.0,
          backgroundOpacity: 0.1,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const {scrollY} = useViewportScroll();

  const yCloudA = useTransform(scrollY, [0, windowHeight], [0, 0]);
  const xCloudA = useTransform(scrollY, [0, windowHeight], [0, -800]);
  const yCloudB = useTransform(scrollY, [0, windowHeight], [0, 0]);
  const xCloudB = useTransform(scrollY, [0, windowHeight], [0, 400]);
  const yRocket = useTransform(scrollY, [0, windowHeight], [120, -50]);
  const xRocket = useTransform(scrollY, [0, windowHeight], [0, 200]);
  const yBaloon = useTransform(scrollY, [0, windowHeight], [0, -300]);
  const xBaloon = useTransform(scrollY, [0, windowHeight], [0, -500]);
  const yAtom = useTransform(scrollY, [0, windowHeight], [-120, -100]);
  const xAtom = useTransform(scrollY, [0, windowHeight], [50, 500]);
  const yText = useTransform(scrollY, [0, windowHeight], [0, -200]);
  return (
    <AnimatePresence>
      <header className='relative flex h-screen overflow-hidden mb-8 lg:mb-14'>
        <div className='relative flex flex-col justify-between w-full z-30 p-5'>
          <div
            ref={myRef}
            className='absolute top-0 left-0 h-screen w-full opacity-60'
          />
          <div className='flex justify-evenly mt-28 p-10'>
            <motion.div
              className='w-36 h-36'
              style={{y: yCloudA, x: xCloudA}}
              initial={{scale: 0, opacity: 0, x: 600, y: 400}}
              animate={{
                scale: 1,
                opacity: 1,
                x: 0,
                y: 0,
                transition: {duration: 1, ease: 'circOut'},
              }}
              drag
              dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
              dragElastic={0.8}
            >
              <CloudA />
            </motion.div>
            <motion.div
              className=' w-36 h-36'
              style={{y: yRocket, x: xRocket}}
              initial={{scale: 0, opacity: 0, x: 0, y: 400}}
              animate={{
                scale: 1,
                opacity: 1,
                x: 0,
                y: 120,
                transition: {duration: 1, ease: 'circOut'},
              }}
              drag
              dragConstraints={{top: 120, left: 0, right: 0, bottom: 0}}
              dragElastic={0.8}
            >
              <Rocket />
            </motion.div>
            <motion.div
              className='w-32 h-32'
              style={{y: yCloudB, x: xCloudB}}
              initial={{scale: 0, opacity: 0, x: -600, y: 400}}
              animate={{
                scale: 1,
                opacity: 1,
                x: 0,
                y: 0,
                transition: {duration: 1, ease: 'circOut'},
              }}
              drag
              dragConstraints={{top: 0, left: -100, right: 0, bottom: 0}}
              dragElastic={0.8}
            >
              <CloudB />
            </motion.div>
          </div>

          <motion.div
            className='flex justify-center z-10'
            style={{y: yText, x: 0}}
            initial={{scale: 0, opacity: 0}}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {duration: 1, ease: 'circOut'},
            }}
          >
            <AnimatedText />
          </motion.div>

          <div className='flex justify-around p-10'>
            <motion.div
              className='w-36 h-36'
              style={{y: yBaloon, x: xBaloon}}
              initial={{scale: 0, opacity: 0, x: 600, y: -400}}
              animate={{
                scale: 1,
                opacity: 1,
                x: 0,
                y: 0,
                transition: {duration: 1, ease: 'circOut'},
              }}
              drag
              dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
              dragElastic={0.8}
            >
              <Baloon />
            </motion.div>
            <motion.div
              className='w-36 h-36'
              style={{y: yAtom, x: xAtom}}
              initial={{scale: 0, opacity: 0, x: -600, y: -400}}
              animate={{
                scale: 1,
                opacity: 1,
                x: 50,
                y: -120,
                transition: {duration: 1, ease: 'circOut'},
              }}
              drag
              dragConstraints={{top: -120, left: 50, right: 0, bottom: 0}}
              dragElastic={0.8}
            >
              <Atom />
            </motion.div>
          </div>
        </div>

        <video
          autoPlay
          loop
          muted
          className='absolute z-10 w-auto min-w-full min-h-full max-w-none filter blur-sm transform scale-110 object-fill'
        >
          <source src='/video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </header>
    </AnimatePresence>
  );
};

export default HomeSlider;
