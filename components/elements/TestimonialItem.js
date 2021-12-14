import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';

const TestimonialItem = ({testimonial}) => {
  const [onLink, setOnLink] = useState(false);

  return (
    <motion.div
      className='flex justify-center items-center flex-col max-w-3xl'
      onHoverStart={() => setOnLink(true)}
      onHoverEnd={() => setOnLink(false)}
    >
      <div className='mb-4'>
        <p className='font-light text-xl text-center'>{testimonial.text}</p>
      </div>
      <motion.div
        className='w-16 h-16 rounded-full'
        animate={onLink ? {scale: 1.1} : {scale: 1}}
        transition={{duration: 0.5, ease: 'easeInOut'}}
      >
        <Image
          //loader={myLoader}
          className='rounded-full'
          src={testimonial.avatar}
          alt={testimonial.author}
          layout='responsive'
          height={60}
          width={60}
        />
      </motion.div>
      <div>
        <span className='text-lg text-center'>{testimonial.author}</span>
      </div>
      <div className='mb-2'>
        <span className='text-sm text-center italic'>{testimonial.title}</span>
      </div>
      <div className='h-0.5 w-5 bg-primary' />
      <div className='mb-3'>
        <span className='text-sm text-center'>{testimonial.company}</span>
      </div>
    </motion.div>
  );
};

export default TestimonialItem;
