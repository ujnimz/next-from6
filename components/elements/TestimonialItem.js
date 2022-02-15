import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
import SingleImage from './SingleImage';
import F6Icon from '../icons';

const TestimonialItem = ({testimonial}) => {
  const [onLink, setOnLink] = useState(false);

  const {message, name, jobTitle, company, avatar} = testimonial.attributes;
  return (
    <motion.div
      className='flex justify-center items-center flex-col max-w-3xl mx-6'
      onHoverStart={() => setOnLink(true)}
      onHoverEnd={() => setOnLink(false)}
    >
      <div className='mb-4'>
        <p className='font-light text-xl text-center'>{message}</p>
      </div>
      {avatar.data ? (
        <motion.div
          className='w-16 h-16 rounded-full'
          animate={onLink ? {scale: 1.1} : {scale: 1}}
          transition={{duration: 0.5, ease: 'easeInOut'}}
        >
          <SingleImage image={avatar} className='rounded-full' />
        </motion.div>
      ) : (
        <motion.div
          className='w-12 h-12 rounded-full'
          animate={onLink ? {scale: 1.1} : {scale: 1}}
          transition={{duration: 0.5, ease: 'easeInOut'}}
        >
          <F6Icon colorClass='text-primary' icon='quote' />
        </motion.div>
      )}

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
