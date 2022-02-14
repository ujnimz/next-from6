import PropTypes from 'prop-types';
import Link from 'next/link';
import Social from '../../icons/Social';
import ContactItem from '../../elements/ContactItem';

const MainFooter = ({data}) => {
  if (!data) return <div>No Footer Data</div>;

  const {contactTitle, contacts, socialTitle, socialIcons, copyrightText} =
    data.data.attributes;
  return (
    <footer className='flex flex-col items-center justify-center bg-accent-focus text-neutral-content'>
      <div className='container flex justify-between lg:justify-center items-stretch px-3 lg:px-0 py-10 lg:py-14 flex flex-wrap'>
        <div className='flex flex-col items-center md:items-start w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0'>
          <div className='mb-6'>
            <h3 className='text-tangerine text-2xl '>{contactTitle}</h3>
          </div>
          <div className='flex flex-col items-center justify-center mb-3'>
            {contacts.map((contact, index) => (
              <ContactItem key={index} contact={contact} />
            ))}
          </div>
        </div>

        <div className='flex flex-col items-center md:items-end w-full md:w-1/2 lg:w-1/4'>
          <div className='mb-6'>
            <h3 className='text-tangerine text-2xl '>{socialTitle}</h3>
          </div>
          <div className='flex items-stretch mb-3'>
            {socialIcons.map((social, index) => (
              <div key={index} className='w-10 h-10 ml-3'>
                <Link href={social.link}>
                  <a>
                    <Social type={social.icon} colorClass='white' />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='container flex justify-center items-center px-3 lg:px-0 py-3 lg:py-3 flex flex-wrap'>
        <p className='text-xs font-light'>{copyrightText}</p>
      </div>
    </footer>
  );
};

MainFooter.propTypes = {
  data: PropTypes.object,
};

export default MainFooter;
