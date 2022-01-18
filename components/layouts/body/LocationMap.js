import React from 'react';

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

export default LocationMap;
