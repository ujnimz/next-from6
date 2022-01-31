import PropTypes from 'prop-types';

const NextArrow = ({colorClass = 'text-primary'}) => {
  return (
    <svg
      id='NextArrow'
      className={`fill-current ${colorClass} transition-all duration-300 ease-in-out`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 18.06 18.06'
      width='100%'
      height='100%'
    >
      <path d='M0,10.16H13.72L7.39,16.48,9,18.06l9-9L9,0,7.45,1.58,13.72,7.9H0Z' />
    </svg>
  );
};

NextArrow.propTypes = {
  colorClass: PropTypes.string,
};

export default NextArrow;
