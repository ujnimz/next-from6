import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
} from 'framer-motion';
import ParticlesCavas from '../../elements/ParticlesCavas';
import Rocket from '../../icons/Rocket';
import Atom from '../../icons/Atom';
import CloudA from '../../icons/CloudA';
import CloudB from '../../icons/CloudB';
import Baloon from '../../icons/Baloon';
import TextSlider from '../../elements/TextSlider';

const HomeSlider = ({data}) => {
  const {sliderTexts, ogvVideo, webmVideo, mp4Video, fallbackImage} = data;
  const [windowHeight, setWindowHeight] = useState(null);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    return () => {
      setWindowHeight(null);
    };
  }, []);

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
      <header className='relative flex h-screen overflow-hidden'>
        <div className='relative flex flex-col justify-between w-full z-30 p-5'>
          <div className='absolute top-0 left-0 h-screen w-full overflow-hidden'>
            <ParticlesCavas />
          </div>
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
            {/* <AnimatedText textArray={sliderTexts} /> */}
            <TextSlider textArray={sliderTexts} />
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
          playsInline
          className='absolute z-10 w-screen h-screen top-0 left-0 filter blur-xs transform scale-110 object-cover'
          poster={fallbackImage.data.attributes.url}
        >
          <source
            // src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}${ogvVideo.data.attributes.url}`}
            src={`${ogvVideo.data.attributes.url}`}
            type='video/ogv'
          />
          <source
            // src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}${webmVideo.data.attributes.url}`}
            src={`${webmVideo.data.attributes.url}`}
            type='video/webm'
          />
          <source
            // src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}${mp4Video.data.attributes.url}`}
            src={`${mp4Video.data.attributes.url}`}
            type='video/mp4'
          />
          <img
            src={fallbackImage.data.attributes.url}
            title='Your browser does not support the <video> tag'
          />
          Your browser does not support the video tag.
        </video>
      </header>
    </AnimatePresence>
  );
};

HomeSlider.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomeSlider;
