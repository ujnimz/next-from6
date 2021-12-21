import PageHero from '../components/layouts/body/PageHero';
import Heading from '../components/elements/Heading';
import ParallaxImage from '../components/elements/ParallaxImage';
import TextBlock from '../components/layouts/body/TextBlock';
import ServicesList from '../components/layouts/body/ServicesList';
import CallToActionSolid from '../components/layouts/body/CallToActionSolid';
import CallToActionImage from '../components/layouts/body/CallToActionImage';

const Services = () => {
  const hero = {
    image: '/images/hero/our-services-hero.jpeg',
  };
  const paragraphs1 = [
    {
      id: 0,
      text: 'We believe in being channel neutral. Our strategic and creative thinking incorporates the full media solution to find the best solution for our Clients business, based on their needs.',
    },
  ];
  const paragraphs2 = [
    {
      id: 0,
      text: 'We have everyone under one roof, designers, developers, copywriters, community managers, strategists and digital marketers and media planners. Making it that much easier for us to provide our Clients with a fully integrated solution.',
    },
  ];

  return (
    <main className='min-h-screen'>
      <PageHero hero={hero} />
      <Heading title='[360-degree] communications offering' />
      <TextBlock paragraphs={paragraphs1} />
      <ParallaxImage
        imageUrl='/images/our-services-intro.jpeg'
        height={600}
        rtl
      />
      <TextBlock paragraphs={paragraphs2} />
      <ServicesList />
      <CallToActionSolid
        title='Use the from6 brand health tool to [test your brand and find areas to grow]'
        buttonText='Start Now'
        link='/'
      />
      <CallToActionImage
        bgImage='/images/get_in_touch_bg.jpeg'
        title='[Let’s work] together'
        buttonText='Get In Touch'
        buttonLink='/contact'
      />
    </main>
  );
};

export default Services;
