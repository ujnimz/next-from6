import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
import NextArrow from '../icons/NextArrow';

const ServiceItem = ({service}) => {
  const [onLink, setOnLink] = useState(false);

  const linkVariants = {
    nowOut: {
      x: 0,
      transition: {duration: 0.5, ease: 'easeInOut'},
    },
    nowOn: {
      x: 15,
      transition: {duration: 0.5, ease: 'easeInOut'},
    },
  };

  return (
    <Link href={service.link}>
      <motion.a
        className='flex flex-col cursor-pointer bg-secondary flex-1 notch-large'
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
              className='block'
              src={service.image}
              alt='ALT tag'
              layout='responsive'
              height={220}
              width={322}
            />
          </motion.div>
        </div>

        <div className='flex items-center justify-between p-4 flex-1'>
          <h3 className='text-secondary-content text-lg lg:text-xl'>
            {service.title}
          </h3>
          <motion.div
            className='flex w-5 h-5 mr-3'
            variants={linkVariants}
            animate={
              onLink
                ? {
                    x: 10,
                    transition: {duration: 0.5, ease: 'easeInOut'},
                  }
                : {
                    x: 0,
                    transition: {duration: 0.5, ease: 'easeInOut'},
                  }
            }
          >
            <NextArrow />
          </motion.div>
        </div>
      </motion.a>
    </Link>
  );
};

export default ServiceItem;
