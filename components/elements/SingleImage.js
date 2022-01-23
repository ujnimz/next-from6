import Image from 'next/image';

const SingleImage = ({image, ...rest}) => {
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

export default SingleImage;
