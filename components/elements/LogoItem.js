import React, {useState} from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';

const LogoItem = ({logo}) => {
  const [onLink, setOnLink] = useState(false);

  const {image} = logo;
  return (
    <motion.div
      className='flex flex-col flex-1'
      onHoverStart={() => setOnLink(true)}
      onHoverEnd={() => setOnLink(false)}
    >
      <div className='overflow-hidden'>
        <motion.div
          animate={onLink ? {scale: 1.1} : {scale: 1}}
          transition={{duration: 0.5, ease: 'easeInOut'}}
        >
          <Image
            //loader={myLoader}
            className={`transition-grayscale ${
              onLink ? 'grayscale-0' : 'grayscale'
            }`}
            layout='responsive'
            src={`http://localhost:1337${image.data.attributes.url}`}
            alt={image.data.attributes.alternativeText}
            height={image.data.attributes.height}
            width={image.data.attributes.width}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LogoItem;
