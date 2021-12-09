import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
import NextArrow from '../icons/NextArrow';

const ServiceBlock = ({service}) => {
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
    <motion.div
      className='flex flex-col bg-secondary notch flex-1'
      onHoverStart={() => setOnLink(true)}
      onHoverEnd={() => setOnLink(false)}
    >
      <Link href={service.link} className='flex-1'>
        <a className='cursor-pointer'>
          <div className='overflow-hidden'>
            <motion.div
              animate={onLink ? {scale: 1.1} : {scale: 1}}
              transition={{duration: 0.5, ease: 'easeInOut'}}
            >
              <Image
                //loader={myLoader}
                src={service.image}
                alt='ALT tag'
                layout='responsive'
                height={220}
                width={322}
              />
            </motion.div>
          </div>

          <div className='flex items-center justify-between p-4'>
            <h3 className='text-secondary-content text-lg lg:text-xl'>
              {service.title}
            </h3>
            <motion.div
              className='w-5 h-5 mr-5'
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
        </a>
      </Link>
    </motion.div>
  );
};

export default ServiceBlock;
