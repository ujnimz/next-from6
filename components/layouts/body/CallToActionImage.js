import {useEffect} from 'react';
import PropTypes from 'prop-types';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import From6Button from '../../elements/From6Button';

const CallToActionImage = ({
  text,
  buttonText,
  buttonLink,
  buttonStyle,
  backgroundImage,
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
      bgColor: backgroundImage.data ? 'bg-tangerine/70' : 'bg-tangerine',
      color: 'text-charcoal',
      spanColor: 'text-white',
      button: {
        color: backgroundImage.data ? 'text-tangerine' : 'text-white',
        bgColor: backgroundImage.data ? 'bg-white' : 'bg-tangerine',
        outline: 'border-white',
        afterBg: 'after:bg-tangerine',
        afterBorder: 'after:border-white',
      },
    },
    charcoal: {
      bgColor: backgroundImage.data ? 'bg-charcoal/70' : 'bg-charcoal',
      color: 'text-white',
      spanColor: 'text-tangerine',
      button: {
        color: backgroundImage.data ? 'text-tangerine' : 'text-white',
        bgColor: backgroundImage.data ? 'bg-white' : 'bg-charcoal',
        outline: 'border-white',
        afterBg: 'after:bg-charcoal',
        afterBorder: 'after:border-white',
      },
    },
    atlantic: {
      bgColor: backgroundImage.data ? 'bg-atlantic/70' : 'bg-atlantic',
      color: 'text-white',
      spanColor: 'text-charcoal',
      button: {
        color: backgroundImage.data ? 'text-atlantic' : 'text-white',
        bgColor: backgroundImage.data ? 'bg-white' : 'bg-atlantic',
        outline: 'border-white',
        afterBg: 'after:bg-atlantic',
        afterBorder: 'after:border-white',
      },
    },
    lime: {
      bgColor: backgroundImage.data ? 'bg-lime/20' : 'bg-lime',
      color: 'text-lime',
      spanColor: 'text-charcoal',
      button: {
        color: backgroundImage.data ? 'text-lime' : 'text-white',
        bgColor: backgroundImage.data ? 'bg-white' : 'bg-lime',
        outline: 'border-white',
        afterBg: 'after:bg-lime',
        afterBorder: 'after:border-white',
      },
    },
    white: {
      bgColor: backgroundImage.data ? 'bg-base-100/70' : 'bg-base-100',
      color: 'text-tangerine',
      spanColor: 'text-base-content',
      button: {
        color: backgroundImage.data ? 'text-white' : 'text-base-content',
        bgColor: backgroundImage.data ? 'bg-charcoal' : 'bg-white',
        outline: 'border-base-content',
        afterBg: 'after:bg-base-100',
        afterBorder: 'after:border-base-content',
      },
    },
    black: {
      bgColor: backgroundImage.data ? 'bg-black/70' : 'bg-black',
      color: 'text-tangerine',
      spanColor: 'text-white',
      button: {
        color: backgroundImage.data ? 'text-black' : 'text-white',
        bgColor: backgroundImage.data ? 'bg-white' : 'bg-black',
        outline: 'border-white',
        afterBg: 'after:bg-black',
        afterBorder: 'after:border-white',
      },
    },
  };

  const newTitle = text
    .replace(
      '[',
      `<span class='font-bold ${styleConfig[buttonStyle].spanColor}'>`,
    )
    .replace(']', '</span>');

  return (
    <div
      ref={viewRef}
      className={`bg-no-repeat bg-center bg-cover`}
      style={
        backgroundImage.data
          ? {
              backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_HOST}${backgroundImage.data.attributes.url})`,
            }
          : {}
      }
    >
      <div
        className={`flex justify-center ${styleConfig[buttonStyle].bgColor}`}
      >
        <div className='container flex justify-around items-center flex-wrap py-10 lg:py-14'>
          <div className='flex flex-col items-center justify-between w-full md:w-2/4 p-10'>
            <motion.div
              className='mb-10'
              variants={textVariants}
              initial='hidden'
              animate={controls}
            >
              <h2
                className={`text-4xl font-light text-center max-w-2xl ${styleConfig[buttonStyle].color}`}
                dangerouslySetInnerHTML={{__html: newTitle}}
              />
            </motion.div>
            <motion.div
              className='w-72'
              variants={textVariants}
              initial='hidden'
              animate={controls}
            >
              <From6Button
                title={buttonText}
                buttonLink={buttonLink}
                buttonStyle={styleConfig[buttonStyle].button}
                solid={backgroundImage.data != undefined}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

CallToActionImage.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundImage: PropTypes.object.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string.isRequired,
};

export default CallToActionImage;
