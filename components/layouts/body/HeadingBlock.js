import React, {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';
import Heading from '../../elements/Heading';

const HeadingBlock = ({title, tag, headingStyle, bgImage}) => {
  // Viewport animation
  const [viewRef, inView] = useInView({threshold: 0.7});
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const styleConfig = {
    tangerine: {
      bgColor: bgImage.data ? 'bg-tangerine/70' : 'bg-tangerine',
      color: 'text-charcoal',
      spanColor: 'text-white',
    },
    charcoal: {
      bgColor: bgImage.data ? 'bg-charcoal/70' : 'bg-charcoal',
      color: 'text-white',
      spanColor: 'text-tangerine',
    },
    atlantic: {
      bgColor: bgImage.data ? 'bg-atlantic/70' : 'bg-atlantic',
      color: 'text-white',
      spanColor: 'text-charcoal',
    },
    lime: {
      bgColor: bgImage.data ? 'bg-lime/70' : 'bg-lime',
      color: 'text-white',
      spanColor: 'text-charcoal',
    },
    white: {
      bgColor: bgImage.data ? 'bg-white/70' : 'bg-base-100',
      color: 'text-base-content',
      spanColor: 'text-tangerine',
    },
    black: {
      bgColor: bgImage.data ? 'bg-black/70' : 'bg-black',
      color: 'text-tangerine',
      spanColor: 'text-base-content',
    },
  };

  return (
    <div
      className='bg-no-repeat bg-center bg-cover'
      style={
        bgImage.data
          ? {
              backgroundImage: `url(http://localhost:1337${bgImage.data.attributes.url})`,
            }
          : {}
      }
    >
      <div
        ref={viewRef}
        className={`flex justify-center py-12 lg:py-20 ${styleConfig[headingStyle].bgColor}`}
      >
        <div className='container flex justify-center px-6 lg:px-0'>
          <Heading
            title={title}
            tag={tag}
            textColor={styleConfig[headingStyle].color}
            spanColor={styleConfig[headingStyle].spanColor}
            controls={controls}
          />
        </div>
      </div>
    </div>
  );
};

export default HeadingBlock;
