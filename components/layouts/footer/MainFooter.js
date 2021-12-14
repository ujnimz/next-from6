import React from 'react';
import Link from 'next/link';
import Email from '../../icons/Email';
import Call from '../../icons/Call';
import Social from '../../icons/Social';

const MainFooter = () => {
  return (
    <footer className='flex flex-col items-center justify-center bg-charcoal text-neutral-content'>
      <div className='container flex justify-between items-stretch px-3 lg:px-0 py-10 lg:py-14 flex flex-wrap'>
        <div className='flex flex-col items-center md:items-start w-full md:w-1/2 mb-6 md:mb-0'>
          <div className='mb-6'>
            <h3 className='text-tangerine text-2xl '>For Business Inquiries</h3>
          </div>
          <Link href='/'>
            <a className='flex items-stretch mb-3'>
              <div className='w-10 h-10 mr-3'>
                <Email colorClass='white' />
              </div>
              <div>
                <span className='text-white text-xl font-light'>
                  info@from6.com
                </span>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a className='flex items-stretch mb-3'>
              <div className='w-10 h-10 mr-3'>
                <Call colorClass='white' />
              </div>
              <div className='align-middle'>
                <span className='text-white text-xl font-light align-middle'>
                  (+973) 1700 1700
                </span>
              </div>
            </a>
          </Link>
        </div>

        <div className='flex flex-col items-center md:items-end w-full md:w-1/2'>
          <div className='mb-6'>
            <h3 className='text-tangerine text-2xl '>Follow Us @from6</h3>
          </div>
          <div className='flex items-stretch mb-3'>
            <div className='w-10 h-10 mr-3'>
              <Link href='/'>
                <a>
                  <Social type='instagram' colorClass='white' />
                </a>
              </Link>
            </div>
            <div className='w-10 h-10 mr-3'>
              <Link href='/'>
                <a>
                  <Social type='facebook' colorClass='white' />
                </a>
              </Link>
            </div>
            <div className='w-10 h-10 mr-3'>
              <Link href='/'>
                <a>
                  <Social type='linkedin' colorClass='white' />
                </a>
              </Link>
            </div>
            <div className='w-10 h-10 mr-3'>
              <Link href='/'>
                <a>
                  <Social type='twitter' colorClass='white' />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='container flex justify-center items-center px-3 lg:px-0 py-3 lg:py-3 flex flex-wrap'>
        <p className='text-xs font-light'>2022 © From6 Communications</p>
      </div>
    </footer>
  );
};

export default MainFooter;
