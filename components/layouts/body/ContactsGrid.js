import React from 'react';
import Link from 'next/link';
import Email from '../../icons/Email';
import Call from '../../icons/Call';

const ContactsGrid = () => {
  return (
    <div className='flex justify-center py-10 lg:py-14'>
      <div className='container flex justify-around flex-wrap'>
        <Link href='mailto:info@from6.com'>
          <a className='flex items-stretch mb-3'>
            <div className='w-10 h-10 mr-3'>
              <Email colorClass='base-300' />
            </div>
            <div>
              <span className='text-base-300 text-xl font-light'>
                info@from6.com
              </span>
            </div>
          </a>
        </Link>

        <Link href='tel:+97317003858'>
          <a className='flex items-stretch mb-3'>
            <div className='w-10 h-10 mr-3'>
              <Call colorClass='base-300' />
            </div>
            <div>
              <span className='text-base-300 text-xl font-light'>
                (+973) 1700 3858
              </span>
            </div>
          </a>
        </Link>

        <Link href='tel:+97317003859'>
          <a className='flex items-stretch mb-3'>
            <div className='w-10 h-10 mr-3'>
              <Call colorClass='base-300' />
            </div>
            <div>
              <span className='text-base-300 text-xl font-light'>
                (+973) 1700 3859
              </span>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ContactsGrid;
