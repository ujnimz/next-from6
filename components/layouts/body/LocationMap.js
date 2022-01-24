import PropTypes from 'prop-types';

const LocationMap = ({iframeSrc, mapHeight}) => {
  return (
    <div className='w-full'>
      <iframe
        src={iframeSrc}
        width='100%'
        height={mapHeight}
        frameBorder='0'
        style={{border: 0}}
        allowFullScreen={false}
        aria-hidden='false'
        tabIndex='0'
      ></iframe>
    </div>
  );
};

LocationMap.propTypes = {
  iframeSrc: PropTypes.string.isRequired,
  mapHeight: PropTypes.number,
};

export default LocationMap;
