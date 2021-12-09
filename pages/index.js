import HomeSlider from '../components/layouts/body/HomeSlider';
import Heading from '../components/elements/Heading';
import RecentWork from '../components/layouts/body/RecentWork';
import ServicesGrid from '../components/layouts/body/ServicesGrid';
import ServicesSlider from '../components/layouts/body/ServicesSlider';
import ClienteleSlider from '../components/layouts/body/ClienteleSlider';

export default function Home() {
  return (
    <div className=''>
      <HomeSlider />
      <Heading title='Check out some of [our latest projects below]' />
      <RecentWork />
      <Heading title='Want to work with us? [Choose the service you’re interested in]' />
      <ServicesGrid />
      <Heading title='80% of our work comes through our [clients referrals]' />
      <ServicesSlider />
    </div>
  );
}
