import {useEffect} from 'react';
import PropTypes from 'prop-types';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
//import Magnifier from '../../icons/Magnifier';
import Heart from '../../icons/Heart';
import From6Button from '../../elements/From6Button';
import F6Icon from '../../icons';

const FeaturedBox = ({
  text,
  leftIcon,
  rightIcon,
  buttonText,
  buttonLink,
  style,
  bgImage,
}) => {
  // Viewport animation
  const [viewRef, inView] = useInView({threshold: 0.7});

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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

  const styleConfig = {
    tangerine: {
      bgColor: bgImage.data ? 'bg-tangerine/70' : 'bg-tangerine',
      color: 'text-charcoal',
      spanColor: 'text-white',
      button: {
        color: bgImage.data ? 'text-tangerine' : 'text-white',
        bgColor: bgImage.data ? 'bg-white' : 'bg-tangerine',
        outline: 'border-white',
        afterBg: 'after:bg-tangerine',
        afterBorder: 'after:border-white',
      },
    },
    charcoal: {
      bgColor: bgImage.data ? 'bg-charcoal/70' : 'bg-charcoal',
      color: 'text-white',
      spanColor: 'text-tangerine',
      button: {
        color: bgImage.data ? 'text-tangerine' : 'text-white',
        bgColor: bgImage.data ? 'bg-white' : 'bg-charcoal',
        outline: 'border-white',
        afterBg: 'after:bg-charcoal',
        afterBorder: 'after:border-white',
      },
    },
    atlantic: {
      bgColor: bgImage.data ? 'bg-atlantic/70' : 'bg-atlantic',
      color: 'text-white',
      spanColor: 'text-charcoal',
      button: {
        color: bgImage.data ? 'text-atlantic' : 'text-white',
        bgColor: bgImage.data ? 'bg-white' : 'bg-atlantic',
        outline: 'border-white',
        afterBg: 'after:bg-atlantic',
        afterBorder: 'after:border-white',
      },
    },
    lime: {
      bgColor: bgImage.data ? 'bg-lime/70' : 'bg-lime',
      color: 'text-white',
      spanColor: 'text-charcoal',
      button: {
        color: bgImage.data ? 'text-lime' : 'text-white',
        bgColor: bgImage.data ? 'bg-white' : 'bg-lime',
        outline: 'border-white',
        afterBg: 'after:bg-lime',
        afterBorder: 'after:border-white',
      },
    },
    white: {
      bgColor: bgImage.data ? 'bg-base-100/70' : 'bg-base-100',
      color: 'text-tangerine',
      spanColor: 'text-base-content',
      button: {
        color: bgImage.data ? 'text-white' : 'text-base-content',
        bgColor: bgImage.data ? 'bg-charcoal' : 'bg-white',
        outline: 'border-base-content',
        afterBg: 'after:bg-base-100',
        afterBorder: 'after:border-base-content',
      },
    },
    black: {
      bgColor: bgImage.data ? 'bg-black/70' : 'bg-black',
      color: 'text-tangerine',
      spanColor: 'text-white',
      button: {
        color: bgImage.data ? 'text-black' : 'text-white',
        bgColor: bgImage.data ? 'bg-white' : 'bg-black',
        outline: 'border-white',
        afterBg: 'after:bg-black',
        afterBorder: 'after:border-white',
      },
    },
  };

  const newTitle = text
    .replace('[', `<span class='font-bold ${styleConfig[style].spanColor}'>`)
    .replace(']', '</span>');

  return (
    <div ref={viewRef}>
      <div
        className='bg-no-repeat bg-center bg-cover'
        style={
          bgImage.data
            ? {
                backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_HOST}${bgImage.data.attributes.url})`,
              }
            : {}
        }
      >
        <div className={`flex justify-center ${styleConfig[style].bgColor}`}>
          <div className='container flex justify-around items-center flex-wrap py-10 lg:py-14'>
            <div className='flex justify-center w-full md:w-1/4'>
              <div className='w-52 h-52 opacity-50 p-3'>
                <F6Icon
                  colorClass={styleConfig[style].spanColor}
                  icon={leftIcon}
                />
              </div>
            </div>
            <div className='flex flex-col items-center justify-between w-full md:w-2/4 py-5'>
              <motion.div
                className='mb-10'
                variants={textVariants}
                initial='hidden'
                animate={controls}
              >
                <h2
                  className={`text-4xl font-light text-center max-w-2xl ${styleConfig[style].color}`}
                  dangerouslySetInnerHTML={{__html: newTitle}}
                />
              </motion.div>
              {buttonText !== '' && buttonText ? (
                <motion.div
                  className='w-72'
                  variants={textVariants}
                  initial='hidden'
                  animate={controls}
                >
                  <From6Button
                    title={buttonText}
                    buttonLink={buttonLink}
                    buttonStyle={styleConfig[style].button}
                    solid={bgImage.data}
                  />
                </motion.div>
              ) : null}
            </div>

            <div className='flex justify-center w-full md:w-1/4'>
              <div className='w-52 h-52 opacity-50 p-3'>
                <F6Icon
                  colorClass={styleConfig[style].spanColor}
                  icon={rightIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FeaturedBox.propTypes = {
  text: PropTypes.string.isRequired,
  leftIcon: PropTypes.string.isRequired,
  rightIcon: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  bgImage: PropTypes.object,
};

export default FeaturedBox;
