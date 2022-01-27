import {useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {motion} from 'framer-motion';
import F6Icon from '../icons';

const ContactItem = ({contact, color = 'text-secondary-content'}) => {
  const [onLink, setOnLink] = useState(false);

  const {link, icon, text} = contact;
  return (
    <div className='flex justify-center items-stretch w-full md:w-1/3 mb-4 cursor-pointer'>
      <Link href={link}>
        <motion.a
          onHoverStart={() => setOnLink(true)}
          onHoverEnd={() => setOnLink(false)}
          className='flex'
        >
          <div className='w-10 h-10 mr-3'>
            <F6Icon colorClass={color} icon={icon} />
          </div>
          <motion.div
            animate={onLink ? {x: -5} : {x: 0}}
            transition={{duration: 0.5, ease: 'easeInOut'}}
          >
            <span className={`${color} text-xl font-light `}>{text}</span>
          </motion.div>
        </motion.a>
      </Link>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  color: PropTypes.string,
};

export default ContactItem;
