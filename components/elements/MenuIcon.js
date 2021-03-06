import PropTypes from 'prop-types';
import {motion} from 'framer-motion';

const Path = props => (
  <motion.path
    className='stroke-current text-primary-content'
    strokeWidth='3'
    strokeLinecap='round'
    {...props}
  />
);

const MenuIcon = ({isOpen, toggleOpen}) => {
  return (
    <div
      className='flex justify-center items-center cursor-pointer px-2'
      style={{width: 50, height: 50}}
      onClick={() => toggleOpen(!isOpen)}
    >
      <svg width='25' height='25' viewBox='0 0 22 20'>
        <Path
          variants={{
            closed: {d: 'M 2 2.5 L 20 2.5'},
            open: {d: 'M 3 16.5 L 17 2.5'},
          }}
        />
        <Path
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: {opacity: 1},
            open: {opacity: 0},
          }}
          transition={{duration: 0.1}}
        />
        <Path
          variants={{
            closed: {d: 'M 2 16.346 L 20 16.346'},
            open: {d: 'M 3 2.5 L 17 16.346'},
          }}
        />
      </svg>
    </div>
  );
};

MenuIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default MenuIcon;
