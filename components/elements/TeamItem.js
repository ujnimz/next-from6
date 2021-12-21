import React, {useState} from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';

const TeamItem = ({member}) => {
  const [onLink, setOnLink] = useState(false);

  const itemVariants = {
    hidden: {
      opacity: 0,
      transform: 'rotateY(180deg)',
      transition: {duration: 0.3, ease: 'easeOut'},
    },
    visible: {
      opacity: 1,
      transform: 'rotateY(0deg)',
      transition: {duration: 0.3, ease: 'easeOut'},
    },
  };
  const itemHoverVariants = {
    hidden: {
      opacity: 0,
      transform: 'rotateY(180deg)',
      transition: {duration: 0.3, ease: 'easeOut'},
    },
    visible: {
      opacity: 1,
      transform: 'rotateY(0deg)',
      transition: {duration: 0.3, ease: 'easeOut'},
    },
  };

  return (
    <div className='flex overflow-hidden w-full md:w-1/3 border-8 p-1 border-base-100 mb-3'>
      <motion.div
        className='flex flex-col cursor-pointer flex-1 transition-all duration-300 ease-in-out'
        onHoverStart={() => setOnLink(true)}
        onHoverEnd={() => setOnLink(false)}
      >
        <div className='relative overflow-hidden'>
          <motion.div
            className='absolute top-0 left-0 h-full w-full'
            variants={itemHoverVariants}
            animate={onLink ? 'visible' : 'hidden'}
          >
            <Image
              //loader={myLoader}
              className='block'
              src={member.imageHover}
              alt='ALT tag'
              layout='responsive'
              height={585}
              width={426}
            />
          </motion.div>

          <motion.div
            className=''
            variants={itemVariants}
            animate={onLink ? 'hidden' : 'visible'}
          >
            <Image
              //loader={myLoader}
              className='block'
              src={member.image}
              alt='ALT tag'
              layout='responsive'
              height={585}
              width={426}
            />
          </motion.div>
        </div>

        <div className='flex flex-col items-start justify-between flex-1 py-2'>
          <h3 className='text-base-content text-lg lg:text-xl'>
            {member.name}
          </h3>
          <p className='text-accent text-sm font-light'>{member.title}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default TeamItem;
