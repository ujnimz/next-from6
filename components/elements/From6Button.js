import React, {useState} from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import NextArrow from '../icons/NextArrow';

const From6Button = ({
  solid,
  title = 'Button Text',
  textColorClass = 'base-400',
  bgColorClass = 'base-200',
  borderColorClass = 'base-300',
  iconColorClass = 'primary',
}) => {
  const [onLink, setOnLink] = useState(false);

  return (
    <Link href='/'>
      <div className='overflow-hidden'>
        <motion.a
          className={
            solid
              ? `relative cursor-pointer flex justify-between items-center w-full p-2 bg-${bgColorClass} notch-small`
              : `relative cursor-pointer flex justify-between items-center w-full p-2 border-${borderColorClass} border-l-2 border-t-2 border-r-2 before:content-[""] before:block before:absolute before:top-1 before:right-0 before:border-right-2 border-b-2 before:border-bottom-2 after:content-[""] after:block after:absolute after:-right-5 after:-bottom-5 after:h-9 after:w-9 after:bg-primary after:border-2 after:border-${borderColorClass} after:rotate-45`
          }
          onHoverStart={() => setOnLink(true)}
          onHoverEnd={() => setOnLink(false)}
        >
          <span className={`text-${textColorClass} text-xl font-bold`}>
            {title}
          </span>
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
            <NextArrow iconColorClass={iconColorClass} />
          </motion.div>
        </motion.a>
      </div>
    </Link>
  );
};

export default From6Button;
