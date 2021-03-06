import PropTypes from 'prop-types';
import HeadingBlock from '../layouts/body/HeadingBlock';
import TextBlock from '../layouts/body/TextBlock';
import FeaturedWork from '../layouts/body/FeaturedWork';
import FeaturedBox from '../layouts/body/FeaturedBox';
import CallToActionImage from '../layouts/body/CallToActionImage';
import Clientele from '../layouts/body/Clientele';
import TestimonialSlider from '../layouts/body/TestimonialSlider';
import ServicesSlider from '../layouts/body/ServicesSlider';
import ServicesList from '../layouts/body/ServicesList';
import YouTubeVideo from '../layouts/body/YouTubeVideo';
import ParallaxImage from '../layouts/body/ParallaxImage';
import ImageGird from '../layouts/body/ImageGird';
import Team from '../layouts/body/Team';
import WorksGird from '../layouts/body/WorksGird';
import PostsGird from '../layouts/body/PostsGird';
import ContactsBlock from '../layouts/body/ContactsBlock';
import LocationMap from '../layouts/body/LocationMap';

const getBlockComponent = ({__typename, ...rest}, index) => {
  let Block;

  switch (__typename) {
    case 'ComponentBlocksHeading':
      Block = HeadingBlock;
      break;
    case 'ComponentBlocksTextBlock':
      Block = TextBlock;
      break;
    case 'ComponentBlocksFeaturedWork':
      Block = FeaturedWork;
      break;
    case 'ComponentBlocksFeaturedBox':
      Block = FeaturedBox;
      break;
    case 'ComponentBlocksCallToAction':
      Block = CallToActionImage;
      break;
    case 'ComponentBlocksClientele':
      Block = Clientele;
      break;
    case 'ComponentBlocksRecentTestimonials':
      Block = TestimonialSlider;
      break;
    case 'ComponentBlocksServicesSlider':
      Block = ServicesSlider;
      break;
    case 'ComponentBlocksServicesList':
      Block = ServicesList;
      break;
    case 'ComponentBlocksYouTubeVideo':
      Block = YouTubeVideo;
      break;
    case 'ComponentBlocksImage':
      Block = ParallaxImage;
      break;
    case 'ComponentBlocksImageGrid':
      Block = ImageGird;
      break;
    case 'ComponentBlocksMembers':
      Block = Team;
      break;
    case 'ComponentBlocksWorksGrid':
      Block = WorksGird;
      break;
    case 'ComponentBlocksPostsGrid':
      Block = PostsGird;
      break;
    case 'ComponentBlocksContactsBlock':
      Block = ContactsBlock;
      break;
    case 'ComponentBlocksLocationMap':
      Block = LocationMap;
      break;
    default:
      break;
  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};

const BlockManager = ({blocks}) => {
  return <div>{blocks.map(getBlockComponent)}</div>;
};

BlockManager.defaultProps = {
  blocks: [],
};

BlockManager.propTypes = {
  __typename: PropTypes.string,
  rest: PropTypes.object,
  index: PropTypes.number,
};

export default BlockManager;
