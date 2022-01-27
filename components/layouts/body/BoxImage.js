import React from 'react';
import PropTypes from 'prop-types';
import SingleImage from '../../elements/SingleImage';

const BoxImage = ({image, full}) => {
  const fullClass = full ? 'h-screen' : 'h-auto';
  return (
    <div className='flex justify-center items-center overflow-hidden h-auto'>
      <div className={`w-full ${fullClass}`}>
        <SingleImage image={image} priority />
      </div>
    </div>
  );
};

BoxImage.propTypes = {
  image: PropTypes.object.isRequired,
  full: PropTypes.string,
};

export default BoxImage;
