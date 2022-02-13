import PropTypes from 'prop-types';

const LocationMap = ({
  placeId,
  apiKey,
  zoomLevel = '15',
  mapHeight = '600',
}) => {
  return (
    <div className='w-full'>
      {placeId && apiKey ? (
        <iframe
          width='100%'
          height={mapHeight}
          frameborder='0'
          style={{border: 0}}
          src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=place_id:${placeId}&zoom=${zoomLevel}`}
          allowfullscreen
        ></iframe>
      ) : (
        <div className='flex justify-center items-center min-h-12'>
          <p>Map cannot be displayed. Please check the Place ID and API key.</p>
        </div>
      )}
    </div>
  );
};

LocationMap.propTypes = {
  iframeSrc: PropTypes.string.isRequired,
  mapHeight: PropTypes.number,
};

export default LocationMap;
