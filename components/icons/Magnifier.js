import PropTypes from 'prop-types';
import {motion} from 'framer-motion';

const Magnifier = ({colorClass = 'text-primary'}) => {
  return (
    <motion.div>
      <svg
        className={`fill-current ${colorClass}`}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 241.273 241.188'
      >
        <path
          d='M625.047,536.447a6,6,0,0,1-4.243-1.757l-54.755-54.755a100.293,100.293,0,1,1,30.616-30.65l54.772,54.772a6,6,0,0,1,0,8.485L629.289,534.69A6,6,0,0,1,625.047,536.447Zm-48.308-62.794,48.308,48.308L638.709,508.3l-48.087-48.087ZM512.144,307.259a88.219,88.219,0,1,0,88.223,88.216A88.319,88.319,0,0,0,512.144,307.259Zm67.3,94.877a6,6,0,0,1-6-6,62.253,62.253,0,0,0-62.179-62.186,6,6,0,1,1,0-12,74.266,74.266,0,0,1,74.179,74.186A6,6,0,0,1,579.444,402.136Z'
          transform='translate(-411.921 -295.259)'
        />
      </svg>
    </motion.div>
  );
};

Magnifier.propTypes = {
  colorClass: PropTypes.string,
};

export default Magnifier;
