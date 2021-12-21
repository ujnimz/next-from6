import PageHero from '../components/layouts/body/PageHero';
import Heading from '../components/elements/Heading';
import ParallaxImage from '../components/elements/ParallaxImage';
import TextBlock from '../components/layouts/body/TextBlock';
import CallToActionImage from '../components/layouts/body/CallToActionImage';
import BlogPosts from '../components/layouts/body/BlogPosts';

const Blog = () => {
  const hero = {
    image: '/images/hero/our-blog-hero.jpeg',
  };
  const paragraphs1 = [
    {
      id: 0,
      text: 'Exciting things are always happening and we’re interested in learning more about them.',
    },
  ];

  return (
    <main className='min-h-screen'>
      <PageHero hero={hero} />
      <Heading title='What we’re [thinking about]' />
      <TextBlock paragraphs={paragraphs1} />

      <BlogPosts />
      <CallToActionImage
        bgImage='/images/get_in_touch_bg.jpeg'
        title='[Let’s work] together'
        buttonText='Get In Touch'
        buttonLink='/contact'
      />
    </main>
  );
};

export default Blog;
