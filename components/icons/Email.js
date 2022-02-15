import PropTypes from 'prop-types';

const Email = ({colorClass = 'text-primary'}) => {
  return (
    <div>
      <svg
        className={`fill-current ${colorClass}`}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 49.5 40.4'
      >
        <path
          id='Path_25'
          data-name='Path 25'
          d='M7.55,4h36.4a6.557,6.557,0,0,1,6.55,6.55v27.3a6.557,6.557,0,0,1-6.55,6.55H7.55A6.557,6.557,0,0,1,1,37.85V10.55A6.557,6.557,0,0,1,7.55,4Zm36.4,36.4a2.553,2.553,0,0,0,2.55-2.55V10.55A2.553,2.553,0,0,0,43.95,8H7.55A2.553,2.553,0,0,0,5,10.55v27.3A2.553,2.553,0,0,0,7.55,40.4Z'
          transform='translate(-1 -4)'
        />
        <path
          id='Path_26'
          data-name='Path 26'
          d='M25.75,26.925a2,2,0,0,1-1.147-.362L1.853,10.638A2,2,0,0,1,4.147,7.362l21.6,15.122,21.6-15.122a2,2,0,1,1,2.294,3.277L26.9,26.563A2,2,0,0,1,25.75,26.925Z'
          transform='translate(-1 -2.45)'
        />
      </svg>
    </div>
  );
};

Email.propTypes = {
  colorClass: PropTypes.string,
};

export default Email;
