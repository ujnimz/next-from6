import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
import NextArrow from '../icons/NextArrow';

const BlogItem = ({post}) => {
  const [onLink, setOnLink] = useState(false);

  return (
    <Link href={post.link}>
      <div className='flex overflow-hidden w-full md:w-1/3 border-8 p-1 border-base-100 mb-3'>
        <motion.a
          className='flex flex-col cursor-pointer bg-base-200 hover:bg-primary flex-1 notch-large transition-all duration-300 ease-in-out'
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
                src={post.image}
                alt='ALT tag'
                layout='responsive'
                height={220}
                width={322}
              />
            </motion.div>
          </div>

          <div className='flex items-stretch justify-between p-4 flex-1'>
            <div className='flex flex-col justify-between mr-3 lg:mr-10'>
              <h3 className='text-base-content text-lg lg:text-xl mb-1'>
                {post.title}
              </h3>
              <span className='text-base-content text-sm'>{post.date}</span>
            </div>
            <motion.div
              className='flex items-center w-5 mr-3'
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
      </div>
    </Link>
  );
};

export default BlogItem;
