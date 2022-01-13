import Image from 'next/image';

const SingleImage = ({image, ...rest}) => {
  const {url, width, height, alternativeText = 'image'} = image.data.attributes;
  return (
    <Image
      //loader={myLoader}
      layout='responsive'
      src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}${url}`}
      alt={alternativeText}
      height={height}
      width={width}
      {...rest}
    />
  );
};

export default SingleImage;
