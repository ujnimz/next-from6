import React from 'react';
import Typewriter from 'typewriter-effect';

const TextSlider = ({textArray}) => {
  const textArr = textArray.map(item => item.text);

  return (
    <div className='text-4xl md:text-6xl font-bold text-center text-white max-w-xl'>
      <Typewriter
        options={{
          strings: textArr,
          autoStart: true,
          loop: true,
          autoStart: true,
          cursor: '_',
          delay: 20,
          deleteSpeed: 10,
          pauseFor: 3000,
        }}
      />
    </div>
  );
};

export default TextSlider;
