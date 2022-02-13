import {useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {motion} from 'framer-motion';
import SingleImage from './SingleImage';

const WorkItem = ({work}) => {
  const [onLink, setOnLink] = useState(false);
  const {title, slug, clientName, thumbnail, workCategories} = work.attributes;

  return (
    <div
      className={`filter-item ${workCategories.data
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
        <div className='overflow-hidden mb-3 notch-large'>
          <motion.div
            animate={onLink ? {scale: 1.1} : {scale: 1}}
            transition={{duration: 0.3, ease: 'easeInOut'}}
          >
            <Link href={`/works/${slug}`}>
              <a className='cursor-pointer'>
                <SingleImage image={thumbnail} />
              </a>
            </Link>
          </motion.div>
        </div>

        <div className='flex flex-col justify-between mr-3 lg:mr-10'>
          <Link href={`/works/${slug}`}>
            <a className='text-tangerine font-bold text-lg lg:text-xl mb-1 cursor-pointer'>
              {title}
            </a>
          </Link>
          <span className='text-base-content text-sm font-light'>
            Client: {clientName}
          </span>
          <span className='text-base-content text-sm font-light'>
            {workCategories.data.map(cat => cat.attributes.title).join(' | ')}
          </span>
        </div>
        <div className='h-6' />
      </motion.div>
    </div>
  );
};

WorkItem.propTypes = {
  work: PropTypes.object.isRequired,
};

export default WorkItem;
