import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';

const WorkItem = ({work}) => {
  const [onLink, setOnLink] = useState(false);

  return (
    <div
      className={`filter-item ${work.categories
        .map(cat => cat.slug)
        .join(
          ' ',
        )} overflow-hidden w-full md:w-1/2 lg:w-1/3 border-8 px-2 border-base-100`}
    >
      <motion.div
        className='flex flex-col flex-1'
        onHoverStart={() => setOnLink(true)}
        onHoverEnd={() => setOnLink(false)}
      >
        <div className='overflow-hidden mb-3'>
          <motion.div
            animate={onLink ? {scale: 1.1} : {scale: 1}}
            transition={{duration: 0.3, ease: 'easeInOut'}}
          >
            <Link href={work.link}>
              <Image
                //loader={myLoader}
                className='block cursor-pointer'
                src={work.thumbnail}
                alt='alt'
                layout='responsive'
                height={450}
                width={650}
              />
            </Link>
          </motion.div>
        </div>

        <div className='flex flex-col justify-between mr-3 lg:mr-10'>
          <Link href={work.link}>
            <a className='text-tangerine font-bold text-lg lg:text-xl mb-1'>
              {work.title}
            </a>
          </Link>
          <span className='text-base-content text-sm font-light'>
            Client: {work.client}
          </span>
          <span className='text-base-content text-sm font-light'>
            {work.categories.map(cat => cat.title).join(' | ')}
          </span>
        </div>
        <div className='h-6' />
      </motion.div>
    </div>
  );
};

export default WorkItem;
