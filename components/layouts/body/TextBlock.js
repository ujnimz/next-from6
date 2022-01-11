import React from 'react';
import Paragraph from '../../elements/Paragraph';

const TextBlock = ({paragraphs}) => {
  return (
    <div className='flex justify-center py-6 lg:py-10'>
      <div className='container flex flex-col items-center px-6 lg:px-0'>
        {paragraphs.map((paragraph, index) => (
          <Paragraph key={index} text={paragraph.text} />
        ))}
      </div>
    </div>
  );
};

export default TextBlock;
