import React from 'react';
import Typical from 'react-typical';

const TextSlider = () => {
  const textArr = [
    'We are an Agency that get things done',
    3000,
    'We combine insight, creativity and technology',
    3000,
    'We work hard to be the best agency to work with',
    3000,
  ];

  return (
    <div>
      <Typical
        className='text-4xl md:text-6xl font-bold text-center text-white max-w-xl'
        steps={textArr}
        loop={Infinity}
        wrapper='h1'
      />
    </div>
  );
};

export default TextSlider;
