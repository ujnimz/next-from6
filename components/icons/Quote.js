import PropTypes from 'prop-types';

const Quote = ({colorClass = 'text-primary'}) => {
  return (
    <div>
      <svg
        className={`fill-current ${colorClass}`}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 32 24'
      >
        <path
          d='M0,4V16H8a8,8,0,0,1-8,8v4A12,12,0,0,0,12,16V4Z'
          transform='translate(0 -4)'
        />
        <path
          d='M20,4V16h8a8,8,0,0,1-8,8v4A12,12,0,0,0,32,16V4Z'
          transform='translate(0 -4)'
        />
      </svg>
    </div>
  );
};

Quote.propTypes = {
  colorClass: PropTypes.string,
};

export default Quote;

<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 24'>
  <path
    d='M0,4V16H8a8,8,0,0,1-8,8v4A12,12,0,0,0,12,16V4Z'
    transform='translate(0 -4)'
    style='fill:#030104'
  />
  <path
    d='M20,4V16h8a8,8,0,0,1-8,8v4A12,12,0,0,0,32,16V4Z'
    transform='translate(0 -4)'
    style='fill:#030104'
  />
</svg>;
