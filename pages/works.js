import PageHero from '../components/layouts/body/PageHero';
import Heading from '../components/elements/Heading';
import ParallaxImage from '../components/elements/ParallaxImage';
import TextBlock from '../components/layouts/body/TextBlock';
import WorksGird from '../components/layouts/body/WorksGird';
import CallToActionImage from '../components/layouts/body/CallToActionImage';

const Works = () => {
  const hero = {
    image: '/images/hero/our-works-hero.jpeg',
  };
  const paragraphs1 = [
    {
      id: 0,
      text: 'We have created brands in Bahrain, Oman, UAE, KSA, Nigeria, and Australia, across a multitude of industries. View some of our work to see why 80% of our new projects come through client referrals.',
    },
  ];

  return (
    <main className='min-h-screen'>
      <PageHero hero={hero} />
      <Heading title='We work as partners to make sure [our clients’ brands work for them]' />
      <TextBlock paragraphs={paragraphs1} />
      <ParallaxImage
        imageUrl='/images/our-services-intro.jpeg'
        height={600}
        rtl
      />
      <WorksGird />
      <CallToActionImage
        bgImage='/images/get_in_touch_bg.jpeg'
        title='[Let’s work] together'
        buttonText='Get In Touch'
        buttonLink='/contact'
      />
    </main>
  );
};

export default Works;
