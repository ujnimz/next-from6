import PropTypes from 'prop-types';
import Image from 'next/image';
import ImageError from './ImageError';

const SingleImage = ({image, ...rest}) => {
  if (!image.data) {
    return <ImageError />;
  }

  const {url, width, height, alternativeText = 'image'} = image.data.attributes;
  return (
    <Image
      //loader={myLoader}
      layout='responsive'
      src={`${url}`}
      alt={alternativeText}
      height={height}
      width={width}
      placeholder='blur'
      blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcOmtuPQAF5QJN8XXMfAAAAABJRU5ErkJggg=='
      {...rest}
    />
  );
};

SingleImage.propTypes = {
  image: PropTypes.object.isRequired,
  rest: PropTypes.object,
};

export default SingleImage;
