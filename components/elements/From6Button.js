import React, {useState} from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import F6Icon from '../icons';

const From6Button = ({
  solid,
  buttonLink = '/',
  title = 'Button Text',
  buttonStyle,
}) => {
  const [onLink, setOnLink] = useState(false);

  return (
    <Link href={buttonLink}>
      <div className='overflow-hidden'>
        <motion.a
          className={
            solid
              ? `relative cursor-pointer flex justify-between items-center w-full p-2 ${buttonStyle.bgColor} notch-small`
              : `relative cursor-pointer flex justify-between items-center w-full p-2 ${buttonStyle.outline} border-l-2 border-t-2 border-r-2 before:content-[""] before:block before:absolute before:top-1 before:right-0 before:border-right-2 border-b-2 before:border-bottom-2 after:content-[""] after:block after:absolute after:-right-5 after:-bottom-5 after:h-9 after:w-9 ${buttonStyle.afterBg} after:border-2 ${buttonStyle.afterBorder} after:rotate-45`
          }
          onHoverStart={() => setOnLink(true)}
          onHoverEnd={() => setOnLink(false)}
        >
          <span
            className={`${buttonStyle.color} text-xl font-bold leading-snug`}
          >
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
            <F6Icon colorClass={buttonStyle.color} icon='next-arrow' />
          </motion.div>
        </motion.a>
      </div>
    </Link>
  );
};

export default From6Button;
