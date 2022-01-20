import {motion} from 'framer-motion';

const Logo = () => {
  const from6Logo = [
    {
      id: 0, //f
      color: 'text-accent',
      path: 'M266.31,223.07l-2.15-1.17a19.26,19.26,0,0,0-4.58-1.68,23.45,23.45,0,0,0-6.87-.85c-4.32,0-7.59.87-10,2.44a17.21,17.21,0,0,0-6,6.63,32.74,32.74,0,0,0-3.14,10.32,84.6,84.6,0,0,0-.91,12.55v2.26h27l-3,11.72h-24v95.78a43.34,43.34,0,0,1-1,9.2,54.51,54.51,0,0,1-1.94,7.93,45.1,45.1,0,0,1-2.11,5.4l-1.36,3.73-13.62-2.78,1.77-4.41a45.48,45.48,0,0,0,2-4.89,40.78,40.78,0,0,0,1.78-6.61,32.16,32.16,0,0,0,.89-7.38v-96H203l3-11.72h13.13V251.5a74.39,74.39,0,0,1,2.52-20.6,33.31,33.31,0,0,1,9-15c6.17-5.76,13.81-8.62,22.79-8.62a21.35,21.35,0,0,1,3,.19,23.38,23.38,0,0,1,3,.21c4.2.77,7.62,1.83,10,3.3l1.6,1-4.67,11.09Z',
    },
    {
      id: 1, //r
      color: 'text-accent',
      path: 'M277.81,266.78a35.47,35.47,0,0,1,7.32-8.74,27.45,27.45,0,0,1,18.62-6.7,18.4,18.4,0,0,1,4.88.63l1.63.45v13l-2.83-.82a7.38,7.38,0,0,0-2-.29h-2.61a19.35,19.35,0,0,0-14.63,6.41c-4,4.35-6.78,10.25-8.21,17.77a39.14,39.14,0,0,0-.89,8.33v50.75H265.51V284.72q0-7.25-.19-14.31-.18-7.25-.56-14.51l-.11-2.33h12.9l.26,13.21Z',
    },
    {
      id: 2, // o
      color: 'text-accent',
      path: 'M405.21,280.77a45.23,45.23,0,0,0-25.31-25.72,52.69,52.69,0,0,0-20.26-3.71A51,51,0,0,0,341,254.83a45,45,0,0,0-15.87,10,47.88,47.88,0,0,0-10.95,15.83A50.7,50.7,0,0,0,310,301.53a52.57,52.57,0,0,0,3.53,19.31A46.87,46.87,0,0,0,339,346.33a53.36,53.36,0,0,0,19.5,3.52,54.57,54.57,0,0,0,17.3-2.91,48.25,48.25,0,0,0,16.24-9A46.35,46.35,0,0,0,404,322.29c3.16-6.47,4.7-14.1,4.7-22.82A50,50,0,0,0,405.21,280.77Zm-13.44,35.55a36,36,0,0,1-8.09,12,33,33,0,0,1-11.56,7.17,38.23,38.23,0,0,1-13.6,2.47,36.07,36.07,0,0,1-13.19-2.46,33.35,33.35,0,0,1-11.19-7.16,37.44,37.44,0,0,1-7.75-11.63,39.13,39.13,0,0,1-3-15.73,43.81,43.81,0,0,1,2.31-14.23,37.48,37.48,0,0,1,6.67-12.14,31.84,31.84,0,0,1,11.19-8.2,37.48,37.48,0,0,1,15.89-3.17,33.88,33.88,0,0,1,16,3.48,34.92,34.92,0,0,1,11.08,9,32.92,32.92,0,0,1,6.32,11.76A40.93,40.93,0,0,1,395,300,39.38,39.38,0,0,1,391.77,316.32Z',
    },
    {
      id: 3, //m
      color: 'text-accent',
      path: 'M494,270.12a42.12,42.12,0,0,1,2.47-3.72,40,40,0,0,1,16.44-12.67,40.15,40.15,0,0,1,14.82-2.39,40.7,40.7,0,0,1,9.11,1.37,28.89,28.89,0,0,1,11.53,6,24.79,24.79,0,0,1,2.38,2.23,77.19,77.19,0,0,0-5,17,26.76,26.76,0,0,0-3.34-6.17c-4-5.45-9.83-8.25-17.82-8.25a20.8,20.8,0,0,0-8,1.53,25.41,25.41,0,0,0-6.94,3.81,26.91,26.91,0,0,0-5.55,5.38,23.61,23.61,0,0,0-4.84,9.84,15.75,15.75,0,0,0-.48,4.1v59.34H485.19V290.89c0-8.46-2.16-15-6.22-19.88-3.9-4.9-9.22-7.4-16.21-7.4a22.27,22.27,0,0,0-8.67,1.7,31.78,31.78,0,0,0-13.22,10.61,34.08,34.08,0,0,0-3.86,7,29.21,29.21,0,0,0-1.2,3.73,26.26,26.26,0,0,0-.32,4.22v56.72H421.91V277.44c0-3.58-.07-7.16-.19-10.75s-.31-7.16-.56-10.75l-.16-2.37h13.08l.57,13.2a48,48,0,0,1,9.43-9.4c5.59-4.08,12.75-6,21.3-6a29.46,29.46,0,0,1,10.48,1.82,28.84,28.84,0,0,1,8.86,5,34.6,34.6,0,0,1,6.58,7.38,34.08,34.08,0,0,1,2.69,4.54Z',
    },
    {
      id: 4, //6
      color: 'text-primary',
      path: 'M635.8,288.64a35.71,35.71,0,0,0-8.33-13.29,36.48,36.48,0,0,0-13.22-8.9c-5.18-2.25-11-3.09-17.5-3.35a41.29,41.29,0,0,0-31.82,13.33c12-45.93,60.68-44,60.68-44V219.6h-2.17q-2.69,0-6.51.38a44,44,0,0,0-7.76,1.16q-21.6,4-36.49,17.7c-6.49,5.84-11.95,13.65-16.4,23.31s-6.55,21-6.55,34c0,9,1.21,16.95,3.68,23.72a48.53,48.53,0,0,0,10,16.83,43.68,43.68,0,0,0,14.6,10,47.79,47.79,0,0,0,17.06,3.14,42.73,42.73,0,0,0,18.9-4,43.17,43.17,0,0,0,13.78-10.64A45,45,0,0,0,636,320.92a49.29,49.29,0,0,0,2.74-16A44.14,44.14,0,0,0,635.8,288.64Zm-41,49.09c-16.52,0-29.91-14-29.91-31.15s13.39-31.15,29.91-31.15,29.91,13.94,29.91,31.15S611.36,337.73,594.84,337.73Z',
    },
    {
      id: 5, //c
      color: 'text-accent',
      path: 'M284.91,369.32a10.39,10.39,0,0,0-3.46-3.3,8.75,8.75,0,0,0-4.52-1.25,9.28,9.28,0,0,0,0,18.56,9.2,9.2,0,0,0,8-4.51l3.12,2.05a14.16,14.16,0,0,1-4.77,4.47,12.73,12.73,0,0,1-6.31,1.65,13,13,0,0,1,0-25.92,12.93,12.93,0,0,1,6.35,1.69,14.17,14.17,0,0,1,4.76,4.55l-3.13,2Z',
    },
    {
      id: 6, //o
      color: 'text-accent',
      path: 'M315.94,364.92a12.8,12.8,0,1,0,3.84,9.13A12.5,12.5,0,0,0,315.94,364.92Zm-2.61,15.67a9.18,9.18,0,1,1,2.74-6.54A8.89,8.89,0,0,1,313.33,380.59Z',
    },
    {
      id: 7, //m
      transform: true,
      color: 'text-accent',
      path: 'M145.86 179.4 145.86 163.31 138.81 179.4 134.99 179.4 127.92 163.31 127.92 179.4 124.22 179.4 124.22 154.1 127.95 154.1 136.89 174.51 145.84 154.1 149.58 154.1 149.58 179.4 145.86 179.4 145.86 179.4z',
    },
    {
      id: 8, //m
      transform: true,
      color: 'text-accent',
      path: 'M180.21 179.4 180.21 163.31 173.16 179.4 169.34 179.4 162.27 163.31 162.27 179.4 158.57 179.4 158.57 154.1 162.31 154.1 171.24 174.51 180.19 154.1 183.93 154.1 183.93 179.4 180.21 179.4 180.21 179.4z',
    },
    {
      id: 9, //u
      color: 'text-accent',
      path: 'M416.64,376.68a9.88,9.88,0,0,1-3.05,7.3,10.34,10.34,0,0,1-17.67-7.3v-15.3h3.7v15.3a6.62,6.62,0,0,0,6.65,6.65,6.64,6.64,0,0,0,6.65-6.65v-15.3h3.72v15.3Z',
    },
    {
      id: 10, //n
      transform: true,
      color: 'text-accent',
      path: 'M238.24 179.4 226.33 161.15 226.33 179.4 222.63 179.4 222.63 154.1 226.19 154.1 238.09 172.41 238.09 154.1 241.81 154.1 241.81 179.4 238.24 179.4 238.24 179.4z',
    },
    {
      id: 11, //i
      transform: true,
      color: 'text-accent',
      path: 'M250.79 179.4 250.79 154.1 254.48 154.1 254.48 179.4 250.79 179.4 250.79 179.4z',
    },
    {
      id: 12, //c
      color: 'text-accent',
      path: 'M485.89,369.32a10.39,10.39,0,0,0-3.46-3.3,8.72,8.72,0,0,0-4.51-1.25,9.28,9.28,0,0,0,0,18.56,9.2,9.2,0,0,0,7.95-4.51l3.12,2.05a14.07,14.07,0,0,1-4.77,4.47,12.72,12.72,0,0,1-6.3,1.65,13,13,0,0,1,0-25.92,12.9,12.9,0,0,1,6.34,1.69,14.29,14.29,0,0,1,4.77,4.55l-3.14,2Z',
    },
    {
      id: 13, //a
      color: 'text-accent',
      path: 'M507,361.38h-4.7l-9.17,25.3H497l1.71-4.58h11.83l1.7,4.58h4Zm-7,17,4.6-12.58,4.59,12.58Z',
    },
    {
      id: 14, //t
      transform: true,
      color: 'text-accent',
      path: 'M328.14 157.8 328.14 179.4 324.42 179.4 324.42 157.8 316.7 157.8 316.7 154.1 335.88 154.1 335.88 157.8 328.14 157.8 328.14 157.8z',
    },
    {
      id: 15, //i
      transform: true,
      color: 'text-accent',
      path: 'M342.54 179.4 342.54 154.1 346.23 154.1 346.23 179.4 342.54 179.4 342.54 179.4z',
    },
    {
      id: 16, //o
      color: 'text-accent',
      path: 'M578.82,364.92a12.8,12.8,0,1,0,3.84,9.13A12.54,12.54,0,0,0,578.82,364.92Zm-2.61,15.67a9.2,9.2,0,1,1,2.73-6.54A8.93,8.93,0,0,1,576.21,380.59Z',
    },
    {
      id: 17, //n
      transform: true,
      color: 'text-accent',
      path: 'M402.7 179.4 390.79 161.15 390.79 179.4 387.1 179.4 387.1 154.1 390.65 154.1 402.56 172.41 402.56 154.1 406.27 154.1 406.27 179.4 402.7 179.4 402.7 179.4z',
    },
    {
      id: 18, //s
      color: 'text-accent',
      path: 'M631.6,375.27a7,7,0,0,1,1.54,4.82,6.82,6.82,0,0,1-2.23,5.11,7.55,7.55,0,0,1-5.39,2.13,10.2,10.2,0,0,1-4.13-.84c-.56-.25-1.09-.51-1.57-.76a9.66,9.66,0,0,1-1.44-1v-4.34l1.61,1.19c.47.33.87.6,1.22.81s.66.38.91.52.49.26.7.35a5.77,5.77,0,0,0,2.38.56,4.33,4.33,0,0,0,3-1.12,3.72,3.72,0,0,0,1.19-2.76,3.89,3.89,0,0,0-.28-1.54,2.78,2.78,0,0,0-.78-1.09,9.31,9.31,0,0,0-1.64-1,17.24,17.24,0,0,0-2.45-1,11.87,11.87,0,0,1-4.58-2.59,5.69,5.69,0,0,1-1.26-2,7.94,7.94,0,0,1-.38-2.55,6.44,6.44,0,0,1,2.3-5,7.57,7.57,0,0,1,5.36-2.1,10.6,10.6,0,0,1,3.91.66,7.92,7.92,0,0,1,1.4.6,6.59,6.59,0,0,1,1.12.66l.07,4.06c-.46-.28-.87-.51-1.22-.7s-.62-.39-.88-.52a6.13,6.13,0,0,0-.73-.36l-.66-.34a6,6,0,0,0-2.8-.6,4.2,4.2,0,0,0-2.94,1.05,3.48,3.48,0,0,0-1.19,2.52,3.55,3.55,0,0,0,.24,1.4,2.87,2.87,0,0,0,.63.87,12,12,0,0,0,3.64,1.89,21,21,0,0,1,3.18,1.4,7.13,7.13,0,0,1,2.1,1.58Z',
    },
  ];

  const itemVariants = {
    hide: {
      opacity: 0,
      //x: 15,
    },
    show: {
      opacity: 1, //x: 15
    },
  };

  const mainVariants = {
    hide: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    show: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div className='px-8 py-4 bg-base-100 notch-large'>
      <div
        className='flex justify-center p-1 overflow-hidden'
        style={{width: 120, height: 62}}
      >
        <motion.svg
          id='From6_Logo'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 435.73 180.05'
          initial='hide'
          animate='show'
          variants={mainVariants}
          //className='fill-current text-accent'
        >
          {from6Logo.map(item =>
            item.transform ? (
              <motion.path
                key={item.id}
                d={item.path}
                className={`fill-current ${item.color}`}
                //className='fill-current text-primary'
                variants={itemVariants}
              />
            ) : (
              <motion.path
                key={item.id}
                d={item.path}
                transform='translate(-203 -207.28)'
                className={`fill-current ${item.color}`}
                //className='fill-current text-primary'
                variants={itemVariants}
              />
            ),
          )}
        </motion.svg>
      </div>
    </div>
  );
};

export default Logo;
