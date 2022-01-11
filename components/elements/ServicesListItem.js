import React, {useState} from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';

const ServicesListItem = ({service}) => {
  const [onLink, setOnLink] = useState(false);

  const {title, subServices} = service.attributes;

  const subServicesList = subServices
    .split('\n')
    .map(item => item.replace(/- /g, ''));

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
    <div className='flex overflow-hidden w-full md:w-1/2 lg:w-1/3 border-8 px-2 border-base-100 mb-4'>
      <motion.div
        className='flex flex-col flex-1 transition-all duration-300 ease-in-out'
        onHoverStart={() => setOnLink(true)}
        onHoverEnd={() => setOnLink(false)}
      >
        <div className='flex flex-col items-start justify-between pr-4'>
          <h3 className='text-tangerine text-xl lg:text-2xl mb-4'>{title}</h3>
          <div className='h-px w-full bg-accent' />
        </div>

        <div className='py-4'>
          <ul className='list-inside list-disc'>
            {subServicesList.map((item, index) => (
              <li
                className='list-item font-light text-xl leading-relaxed '
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesListItem;
