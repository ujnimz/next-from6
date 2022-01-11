import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
import NextArrow from '../icons/NextArrow';

const ServiceItem = ({service}) => {
  const [onLink, setOnLink] = useState(false);

  const {title, slug, image} = service.attributes;

  return (
    <Link href={`/${slug}`}>
      <motion.a
        className='flex flex-col cursor-pointer bg-secondary hover:bg-primary flex-1 notch-large transition-all duration-300 ease-in-out'
        onHoverStart={() => setOnLink(true)}
        onHoverEnd={() => setOnLink(false)}
      >
        <div className='overflow-hidden'>
          <motion.div
            animate={onLink ? {scale: 1.1} : {scale: 1}}
            transition={{duration: 0.5, ease: 'easeInOut'}}
          >
            <Image
              className='block'
              src={`http://localhost:1337${image.data.attributes.url}`}
              alt={image.data.attributes.alternativeText}
              layout='responsive'
              height={image.data.attributes.height}
              width={image.data.attributes.width}
            />
          </motion.div>
        </div>

        <div className='flex items-center justify-between p-4 flex-1'>
          <h3 className='text-secondary-content text-lg lg:text-xl'>{title}</h3>
          <motion.div
            className='flex w-5 h-5 mr-3'
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
            <NextArrow
              iconColorClass={onLink ? 'primary-content' : 'primary'}
            />
          </motion.div>
        </div>
      </motion.a>
    </Link>
  );
};

export default ServiceItem;
