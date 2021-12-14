import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';

const LogoItem = ({logo}) => {
  const [onLink, setOnLink] = useState(false);

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
            src={logo.image}
            alt={logo.title}
            layout='responsive'
            height={60}
            width={130}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LogoItem;
