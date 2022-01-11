import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';

const TestimonialItem = ({testimonial}) => {
  const [onLink, setOnLink] = useState(false);

  const {message, name, jobTitle, company, avatar} = testimonial.attributes;

  return (
    <motion.div
      className='flex justify-center items-center flex-col max-w-3xl'
      onHoverStart={() => setOnLink(true)}
      onHoverEnd={() => setOnLink(false)}
    >
      <div className='mb-4'>
        <p className='font-light text-xl text-center'>{message}</p>
      </div>
      <motion.div
        className='w-16 h-16 rounded-full'
        animate={onLink ? {scale: 1.1} : {scale: 1}}
        transition={{duration: 0.5, ease: 'easeInOut'}}
      >
        <Image
          //loader={myLoader}
          className='rounded-full'
          src={`http://localhost:1337${avatar.data.attributes.url}`}
          alt={avatar.data.attributes.alternativeText}
          layout='responsive'
          height={avatar.data.attributes.height}
          width={avatar.data.attributes.width}
        />
      </motion.div>
      <div>
        <span className='text-lg text-center'>{name}</span>
      </div>
      <div className='mb-2'>
        <span className='text-sm text-center italic'>{jobTitle}</span>
      </div>
      <div className='h-0.5 w-5 bg-primary' />
      <div className='mb-3'>
        <span className='text-sm text-center'>{company}</span>
      </div>
    </motion.div>
  );
};

export default TestimonialItem;
