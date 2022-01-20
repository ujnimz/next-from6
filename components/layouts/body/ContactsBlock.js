import React from 'react';
import ContactItem from '../../elements/ContactItem';

const ContactsBlock = ({contacts}) => {
  return (
    <div className='flex justify-center py-10 lg:py-14'>
      <div className='container flex justify-around flex-wrap px-6 lg:px-0'>
        {contacts.map((contact, index) => (
          <ContactItem
            key={index}
            contact={contact}
            color='text-base-secondary'
          />
        ))}
      </div>
    </div>
  );
};

export default ContactsBlock;
