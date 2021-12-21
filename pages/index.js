import HomeSlider from '../components/layouts/body/HomeSlider';
import Heading from '../components/elements/Heading';
import RecentWork from '../components/layouts/body/RecentWork';
import ServicesSlider from '../components/layouts/body/ServicesSlider';
import LogoSlider from '../components/layouts/body/LogoSlider';
import TestimonialSlider from '../components/layouts/body/TestimonialSlider';
import CallToActionSolid from '../components/layouts/body/CallToActionSolid';
import CallToActionImage from '../components/layouts/body/CallToActionImage';
import RecentBlog from '../components/layouts/body/RecentBlog';

export default function Home() {
  return (
    <main className=''>
      <HomeSlider />
      <Heading title='Check out some of [our latest projects below]' />
      <RecentWork />
      <Heading title='Want to work with us? [Choose the service you’re interested in]' />
      <ServicesSlider />
      <Heading title='80% of our work comes through our [clients referrals]' />
      <LogoSlider />
      <Heading title='See what clients say about [working with us]' />
      <TestimonialSlider />
      <CallToActionSolid
        title='Use the from6 brand health tool to [test your brand and find areas to grow]'
        buttonText='Start Now'
        link='/'
      />
      <Heading title='[See what we’re thinking about] on our brand and communication blog' />
      <RecentBlog />
      <CallToActionImage
        bgImage='/images/get_in_touch_bg.jpeg'
        title='[Let’s work] together'
        buttonText='Get In Touch'
        buttonLink='/contact'
      />
    </main>
  );
}
