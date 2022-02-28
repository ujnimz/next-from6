import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';

const TextSlider = ({textArray}) => {
  const textArr = textArray.map(item => item.text);

  return (
    <div className='h-64 text-4xl md:text-6xl font-bold text-center text-white max-w-3xl'>
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

TextSlider.propTypes = {
  textArray: PropTypes.array.isRequired,
};

export default TextSlider;
