import Image from 'next/image';

const SingleImage = ({image}) => {
  const {url, width, height, alternativeText = 'image'} = image.data.attributes;
  return (
    <Image
      //loader={myLoader}
      layout='responsive'
      src={`http://localhost:1337${url}`}
      alt={alternativeText}
      height={height}
      width={width}
    />
  );
};

export default SingleImage;
