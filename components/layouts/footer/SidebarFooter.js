import React from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';

const MainFooter = ({open}) => {
  const getSocialIcons = name => {
    switch (name) {
      case 'facebook':
        return {
          __html:
            "<path d='M435.2,0H76.8A76.79,76.79,0,0,0,0,76.8V435.2A76.79,76.79,0,0,0,76.8,512H216V330H151V256h65V199.6c0-64.2,38.2-99.6,96.7-99.6,28,0,57.3,5,57.3,5v63H337.7c-31.8,0-41.7,19.8-41.7,40v48h71l-11.4,74H296V512H435.2A76.79,76.79,0,0,0,512,435.2V76.8A76.79,76.79,0,0,0,435.2,0Z' />",
        };
      case 'twitter':
        return {
          __html:
            "<path d='M435.2,0H76.8A76.79,76.79,0,0,0,0,76.8V435.2A76.79,76.79,0,0,0,76.8,512H435.2A76.79,76.79,0,0,0,512,435.2V76.8A76.79,76.79,0,0,0,435.2,0ZM402,189a200,200,0,0,1-32.2,120.86C309.42,402.35,185.49,428.38,93,368a200,200,0,0,0,105-29,72,72,0,0,1-67-50,72,72,0,0,0,32-1,72,72,0,0,1-56-69,72,72,0,0,0,32,7,72,72,0,0,1-22-94,200,200,0,0,0,145,74,72,72,0,0,1,122-65,72,72,0,0,0,45-17,72,72,0,0,1-32,40,72,72,0,0,0,40-12A199.89,199.89,0,0,1,402,189Z' />",
        };
      case 'instagram':
        return {
          __html:
            "<circle cx='256' cy='256' r='57' /><path d='M329,117H183a66.08,66.08,0,0,0-66,66V329a66.08,66.08,0,0,0,66,66H329a66.08,66.08,0,0,0,66-66V183A66.08,66.08,0,0,0,329,117ZM256,343a87,87,0,1,1,87-87A87.1,87.1,0,0,1,256,343Zm91-157a21,21,0,1,1,21-21A21,21,0,0,1,347,186Z' /><circle cx='347' cy='165' r='9' /><path d='M435.2,0H76.8A76.79,76.79,0,0,0,0,76.8V435.2A76.79,76.79,0,0,0,76.8,512H435.2A76.79,76.79,0,0,0,512,435.2V76.8A76.79,76.79,0,0,0,435.2,0ZM425,329a96.11,96.11,0,0,1-96,96H183a96.11,96.11,0,0,1-96-96V183a96.11,96.11,0,0,1,96-96H329a96.11,96.11,0,0,1,96,96Z' />",
        };
      case 'youtube':
        return {
          __html:
            "<path d='M435.2,0H76.8A76.79,76.79,0,0,0,0,76.8V435.2A76.79,76.79,0,0,0,76.8,512H435.2A76.79,76.79,0,0,0,512,435.2V76.8A76.79,76.79,0,0,0,435.2,0ZM427,343c-4,15-17,27-32,31-37,10-242,10-278,0-15-4-28-16-32-31-10-39-9-136,0-174,4-15,17-27,32-31,39-10,244-9,278,0,15,4,28,16,32,31C436,206,436,307,427,343Z' /><path d='M220,203V309l93-53' />",
        };
      case 'linkedin':
        return {
          __html:
            "<path d='M435.2,0H76.8A76.79,76.79,0,0,0,0,76.8V435.2A76.79,76.79,0,0,0,76.8,512H435.2A76.79,76.79,0,0,0,512,435.2V76.8A76.79,76.79,0,0,0,435.2,0ZM175,392H109V194h66ZM142,175a37,37,0,1,1,37-37A37,37,0,0,1,142,175ZM411,392H345V287c0-27-9-45-33-45-19.3,0-31.56,14.09-35,30.44V392H211V194h66v26.42c8.38-12.9,25.35-30.42,58-30.42,44,0,76,28,76,89Z' />",
        };
      default:
        return {
          __html: '',
        };
    }
  };

  const socialArray = [
    {
      id: 'facebook',
      link: '/',
    },
    {
      id: 'twitter',
      link: '/',
    },
    {
      id: 'instagram',
      link: '/',
    },
    {
      id: 'youtube',
      link: '/',
    },
    {
      id: 'linkedin',
      link: '/',
    },
  ];

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -10,
    },
    opened: {opacity: 1, x: 0},
  };

  const mainVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    opened: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div className='flex flex-col'>
      <motion.ul
        className='flex justify-between mb-3'
        initial='closed'
        animate={open ? 'opened' : 'closed'}
        variants={mainVariants}
      >
        {socialArray.map(item => (
          <motion.li key={item.id} className='h-8 w-8' variants={itemVariants}>
            <Link href={item.link}>
              <a>
                <svg
                  className='fill-current text-white'
                  id={item.id}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  dangerouslySetInnerHTML={getSocialIcons(item.id)}
                ></svg>
              </a>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
      <p
        className='text-xs leading-3 mb-2 text-primary-content'
        style={{fontSize: 10}}
      >
        © 2021 Bahrain Financing Company. Licensed by the CBB as a Money
        Changer.
      </p>
      <ul
        className='flex justify-between text-primary-content'
        style={{fontSize: 10}}
      >
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
        <li>Cookie Settings</li>
      </ul>
    </div>
  );
};

export default MainFooter;
