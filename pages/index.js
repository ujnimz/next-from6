import HomeSlider from '../components/layouts/body/HomeSlider';
import Heading from '../components/elements/Heading';
import RecentWork from '../components/layouts/body/RecentWork';
import ServicesSlider from '../components/layouts/body/ServicesSlider';
import LogoSlider from '../components/layouts/body/LogoSlider';
import TestimonialSlider from '../components/layouts/body/TestimonialSlider';
import CallToAction from '../components/layouts/body/CallToAction';

export default function Home() {
  return (
    <div className=''>
      <HomeSlider />
      <Heading title='Check out some of [our latest projects below]' />
      <RecentWork />
      <Heading title='Want to work with us? [Choose the service you’re interested in]' />
      <ServicesSlider />
      <Heading title='80% of our work comes through our [clients referrals]' />
      <LogoSlider />
      <Heading title='See what clients say about [working with us]' />
      <TestimonialSlider />
      <CallToAction />
      <Heading title='[See what we’re thinking about] on our brand and communication blog' />
    </div>
  );
}
