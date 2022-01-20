import React, {useState} from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import F6Icon from '../icons';

const ContactItem = ({contact, color = 'text-secondary-content'}) => {
  const [onLink, setOnLink] = useState(false);

  return (
    <Link href={contact.link}>
      <motion.a
        onHoverStart={() => setOnLink(true)}
        onHoverEnd={() => setOnLink(false)}
        className='flex justify-center items-stretch w-full sm:w-1/2 md:w-1/3 mb-4 cursor-pointer'
      >
        <div className='w-10 h-10 mr-3'>
          <F6Icon colorClass={color} icon={contact.icon} />
        </div>
        <motion.div
          animate={onLink ? {x: -5} : {x: 0}}
          transition={{duration: 0.5, ease: 'easeInOut'}}
        >
          <span className={`${color} text-xl font-light `}>{contact.text}</span>
        </motion.div>
      </motion.a>
    </Link>
  );
};

export default ContactItem;
