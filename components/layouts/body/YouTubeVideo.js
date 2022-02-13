import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

const YouTubeVideo = ({youtubeLink, autoPlay}) => {
  return (
    <div className='flex justify-center items-stretch py-10 lg:py-14 w-full'>
      <div className='container max-w-6xl px-4 notch-exlarge'>
        <div className='relative' style={{paddingTop: '56.25%'}}>
          <ReactPlayer
            className='absolute top-0 left-0'
            width='100%'
            height='100%'
            url={youtubeLink}
            playing={autoPlay === 'yes'}
            controls={false}
            light={true}
          />
        </div>
      </div>
    </div>
  );
};

YouTubeVideo.propTypes = {
  autoPlay: PropTypes.string.isRequired,
  youtubeLink: PropTypes.string.isRequired,
};

export default YouTubeVideo;
