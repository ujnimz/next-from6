import React from 'react';
import PageHero from '../components/layouts/body/PageHero';
import Heading from '../components/elements/Heading';
import TextBlock from '../components/layouts/body/TextBlock';
import CallToActionSolid from '../components/layouts/body/CallToActionSolid';
import ContactsGrid from '../components/layouts/body/ContactsGrid';
import LocationMap from '../components/layouts/body/LocationMap';

const Contact = () => {
  const hero = {
    image: '/images/hero/contact-us-hero.jpeg',
  };
  const paragraphs1 = [
    {
      id: 0,
      text: 'If you’re interested in working with us, then you should get in touch. Here’s our contact info.',
    },
  ];

  return (
    <main className='min-h-screen'>
      <PageHero hero={hero} />
      <Heading title='[Let’s talk] about you' />
      <TextBlock paragraphs={paragraphs1} />
      <ContactsGrid />
      <LocationMap
        isMarkerShown
        googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places'
      />
      <CallToActionSolid
        title='We are always looking for great talent, [send your CV to zahra@from6.com] if you have a passion for getting great work done!'
        // buttonText='Send Now'
        // link='mailto:zahra@from6.com'
      />
    </main>
  );
};

export default Contact;
