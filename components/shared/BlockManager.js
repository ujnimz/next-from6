import HeadingBlock from '../layouts/body/HeadingBlock';
import TextBlock from '../layouts/body/TextBlock';
import FeaturedWork from '../layouts/body/FeaturedWork';
import LogoSlider from '../layouts/body/LogoSlider';
import FeaturedBox from '../layouts/body/FeaturedBox';
import TestimonialSlider from '../layouts/body/TestimonialSlider';
import ServicesSlider from '../layouts/body/ServicesSlider';
import ParallaxImage from '../layouts/body/ParallaxImage';
import Team from '../layouts/body/Team';
import BlogPosts from '../layouts/body/BlogPosts';

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
    case 'ComponentBlocksLogos':
      Block = LogoSlider;
      break;
    case 'ComponentBlocksFeaturedBox':
      Block = FeaturedBox;
      break;
    case 'ComponentBlocksRecentTestimonials':
      Block = TestimonialSlider;
      break;
    case 'ComponentBlocksServicesSlider':
      Block = ServicesSlider;
      break;
    case 'ComponentBlocksImage':
      Block = ParallaxImage;
      break;
    case 'ComponentBlocksMembers':
      Block = Team;
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

export default BlockManager;
