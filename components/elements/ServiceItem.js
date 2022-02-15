import {useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {motion} from 'framer-motion';
import NextArrow from '../icons/NextArrow';
import SingleImage from './SingleImage';

const ServiceItem = ({service, linkWorks = true}) => {
  const [onLink, setOnLink] = useState(false);

  const {title, slug, thumbnail} = service.attributes;

  return (
    <Link
      href={
        linkWorks
          ? 'works'
          : {
              pathname: '/services/[slug]',
              query: {slug: slug},
            }
      }
    >
      <motion.a
        className='flex flex-col cursor-pointer bg-secondary hover:bg-primary flex-1 notch-large transition-all duration-300 ease-in-out'
        onHoverStart={() => setOnLink(true)}
        onHoverEnd={() => setOnLink(false)}
      >
        <div className='overflow-hidden'>
          <motion.div
            animate={onLink ? {scale: 1.1} : {scale: 1}}
            transition={{duration: 0.5, ease: 'easeInOut'}}
          >
            <SingleImage image={thumbnail} />
          </motion.div>
        </div>

        <div className='flex items-center justify-between p-4 flex-1'>
          <h3 className='text-secondary-content text-lg lg:text-xl'>{title}</h3>
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
            <NextArrow
              colorClass={onLink ? 'text-primary-content' : 'text-primary'}
            />
          </motion.div>
        </div>
      </motion.a>
    </Link>
  );
};

ServiceItem.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceItem;
