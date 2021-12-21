import PageHero from '../components/layouts/body/PageHero';
import Heading from '../components/elements/Heading';
import ParallaxImage from '../components/elements/ParallaxImage';
import TextBlock from '../components/layouts/body/TextBlock';
import Team from '../components/layouts/body/Team';
import CallToActionSolid from '../components/layouts/body/CallToActionSolid';
import CallToActionImage from '../components/layouts/body/CallToActionImage';

const About = () => {
  const hero = {
    image: '/images/hero/about-us-hero.jpeg',
  };
  const paragraphs1 = [
    {
      id: 0,
      text: 'In the beginning, there were six, and From6, we could become anything. In 2011, we had a vision to build a marketing consultancy business where clients would benefit from a personal, hands-on, and accountable way of working together.',
    },
    {
      id: 1,
      text: 'As an agile and purposeful consultancy, with offices in Bahrain and Oman, we’re all about getting things done. We use our strategic expertise and results-driven approach to energise your brand, creating lasting impact.',
    },
    {
      id: 2,
      text: 'We don’t just design brands. We invest time, energy, and knowledge into exploring how brands and customers connect, how your employees behave and what makes your brand truly unique; so we know that what we’re doing today is ready for tomorrow.',
    },
  ];
  const paragraphs2 = [
    {
      id: 0,
      text: 'Our team comprises of a palette of formidable experience, both international and regional. Eclectic and dedicated, we like to get things done, and done well. Most importantly, we love what we do – our clients say our enthusiasm is infectious.',
    },
  ];

  return (
    <main className='min-h-screen'>
      <PageHero hero={hero} />
      <Heading title='We are an independent, regional agency that [gets things done]' />
      <TextBlock paragraphs={paragraphs1} />
      <ParallaxImage
        imageUrl='/images/about-us-insert-image.jpeg'
        height={600}
      />
      <Heading title='A team built with [Strategy, Creativity and Technology] in mind' />
      <TextBlock paragraphs={paragraphs2} />
      <Team />
      <CallToActionSolid
        title='We are always looking for great talent, [send your CV to zahra@from6.com] if you have a passion for getting great work done!'
        // buttonText='Send Now'
        // link='mailto:zahra@from6.com'
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

export default About;
