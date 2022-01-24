import PropTypes from 'prop-types';
import {motion} from 'framer-motion';

const Email = ({colorClass = 'text-primary'}) => {
  return (
    <motion.div>
      <svg
        className={`fill-current ${colorClass}`}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 28.383 48.333'
      >
        <path
          id='Icon_feather-facebook'
          data-name='Icon feather-facebook'
          d='M28.233,1h6.65a2,2,0,0,1,2,2v8.867a2,2,0,0,1-2,2h-6.65a.217.217,0,0,0-.217.217v4.65h6.867a2,2,0,0,1,1.94,2.485l-2.217,8.867a2,2,0,0,1-1.94,1.515h-4.65V47.333a2,2,0,0,1-2,2H17.15a2,2,0,0,1-2-2V31.6H10.5a2,2,0,0,1-2-2V20.733a2,2,0,0,1,2-2h4.65v-4.65A13.083,13.083,0,0,1,28.233,1Zm4.65,4h-4.65a9.093,9.093,0,0,0-9.083,9.083v6.65a2,2,0,0,1-2,2H12.5V27.6h4.65a2,2,0,0,1,2,2V45.333h4.867V29.6a2,2,0,0,1,2-2H31.1l1.217-4.867H26.016a2,2,0,0,1-2-2v-6.65a4.221,4.221,0,0,1,4.217-4.217h4.65Z'
          transform='translate(-8.5 -1)'
        />
      </svg>
    </motion.div>
  );
};

Email.propTypes = {
  colorClass: PropTypes.string,
};

export default Email;
