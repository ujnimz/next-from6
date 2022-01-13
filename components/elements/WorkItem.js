import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
import SingleImage from './SingleImage';

const WorkItem = ({work}) => {
  const [onLink, setOnLink] = useState(false);
  const {title, slug, clientName, thumbnail, work_categories} = work.attributes;
  console.log(title);
  return (
    <div
      className={`filter-item ${work_categories.data
        .map(cat => cat.attributes.slug)
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
            <Link href={`/${slug}`}>
              <SingleImage image={thumbnail} />
              {/* <Image
                //loader={myLoader}
                className='block cursor-pointer'
                src={work.thumbnail}
                alt='alt'
                layout='responsive'
                height={450}
                width={650}
              /> */}
            </Link>
          </motion.div>
        </div>

        <div className='flex flex-col justify-between mr-3 lg:mr-10'>
          <Link href={`/${slug}`}>
            <a className='text-tangerine font-bold text-lg lg:text-xl mb-1'>
              {title}
            </a>
          </Link>
          <span className='text-base-content text-sm font-light'>
            Client: {clientName}
          </span>
          <span className='text-base-content text-sm font-light'>
            {work_categories.data.map(cat => cat.attributes.title).join(' | ')}
          </span>
        </div>
        <div className='h-6' />
      </motion.div>
    </div>
  );
};

export default WorkItem;
