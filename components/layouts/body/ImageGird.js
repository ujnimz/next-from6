import PropTypes from 'prop-types';
import SingleImage from '../../elements/SingleImage';

const ImageGird = ({singleImage, numberOfCols}) => {
  let classNames = '';
  switch (numberOfCols) {
    case 'two':
      classNames = 'w-full md:w-1/2 mb-10 md:mb-0 last:mb-0 notch-large';
      break;
    case 'three':
      classNames = 'w-full md:w-1/3 mb-10 md:mb-0 last:mb-0 notch-large';
      break;
    case 'four':
      classNames = 'w-full md:w-1/4 mb-10 md:mb-0 last:mb-0 notch-large';
      break;
    default:
      classNames = 'w-full md:w-1/2 mb-10 md:mb-0 last:mb-0 notch-large';
      break;
  }

  return (
    <div className='flex justify-center items-stretch py-10 lg:py-14'>
      <div className='container flex justify-between flex-wrap md:flex-nowrap md:space-x-8 space-x-0'>
        {singleImage.map((single, index) => (
          <div key={index} className={classNames}>
            <SingleImage image={single.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

ImageGird.propTypes = {
  singleImage: PropTypes.array.isRequired,
  numberOfCols: PropTypes.string.isRequired,
};

export default ImageGird;
